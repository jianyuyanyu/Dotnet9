﻿namespace Dotnet9.WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BlogPostController : ControllerBase
{
    private readonly Dotnet9DbContext _dbContext;
    private readonly BlogPostManager _manager;
    private readonly IBlogPostRepository _repository;

    public BlogPostController(Dotnet9DbContext dbContext, IBlogPostRepository repository,
        BlogPostManager manager)
    {
        _dbContext = dbContext;
        _repository = repository;
        _manager = manager;
    }

    [HttpGet]
    [NoWrapper]
    public async Task<GetBlogPostListResponse> List([FromQuery] GetBlogPostListRequest request)
    {
        (BlogPost[]? BlogPosts, long Count) result = await _repository.GetListAsync(request);
        return new GetBlogPostListResponse(result.BlogPosts.ConvertToBlogPostDtoArray(_dbContext), result.Count, true,
            request.PageSize, request.Current);
    }


    [HttpGet]
    [Route("/api/Album/{albumId}/BlogPost")]
    public async Task<GetBlogPostsByAlbumResponse> GetBlogPostsByAlbum(Guid albumId,
        [FromQuery] GetBlogPostsByAlbumRequest request)
    {
        (BlogPost[]? BlogPosts, long Count) result =
            await _repository.GetListByAlbumIdAsync(albumId, request.PageIndex, request.PageSize);
        return new GetBlogPostsByAlbumResponse(result.BlogPosts.ConvertToBlogPostDtoArray(_dbContext), result.Count);
    }


    [HttpGet]
    [Route("/api/Category/{categoryId}/BlogPost")]
    public async Task<GetBlogPostsByCategoryResponse> GetBlogPostsByCategory(Guid categoryId,
        [FromQuery] GetBlogPostsByCategoryRequest request)
    {
        (BlogPost[]? BlogPosts, long Count) result =
            await _repository.GetListByCategoryIdAsync(categoryId, request.PageIndex, request.PageSize);
        return new GetBlogPostsByCategoryResponse(result.BlogPosts.ConvertToBlogPostDtoArray(_dbContext), result.Count);
    }


    [HttpGet]
    [Route("/api/Tag/{tagId}/BlogPost")]
    public async Task<GetBlogPostsByTagResponse> GetBlogPostsByTag(Guid tagId,
        [FromQuery] GetBlogPostsByTagRequest request)
    {
        (BlogPost[]? BlogPosts, long Count) result =
            await _repository.GetListByTagIdAsync(tagId, request.PageIndex, request.PageSize);
        return new GetBlogPostsByTagResponse(result.BlogPosts.ConvertToBlogPostDtoArray(_dbContext), result.Count);
    }

    [HttpGet]
    [Route("{id}")]
    public async Task<BlogPostDetailDto?> Get(Guid id)
    {
        BlogPost? blogPost = await _repository.FindByIdAsync(id);
        return blogPost?.ConvertToBlogPostDetailDto(_dbContext);
    }

    [HttpDelete]
    [Authorize(Roles = UserRoleConst.Admin)]
    public async Task<int> Delete([FromBody] DeleteBlogPostRequest request)
    {
        return await _repository.DeleteAsync(request.Ids);
    }

    [HttpPost]
    [Authorize(Roles = UserRoleConst.Admin)]
    public async Task<BlogPostDto?> Add([FromBody] AddBlogPostRequest request)
    {
        BlogPost data = await _manager.CreateAsync(null, request.Title, request.Slug, request.Description,
            request.Cover,
            request.Content, request.CopyRightType, request.Original, request.OriginalAvatar, request.OriginalTitle,
            request.OriginalLink, request.Visible, request.AlbumIds, request.CategoryIds, request.TagIds);
        EntityEntry<BlogPost> dataFromDb = await _dbContext.AddAsync(data);
        await _dbContext.SaveChangesAsync();

        return dataFromDb.Entity.ConvertToBlogPostDto(_dbContext);
    }

    [HttpPut]
    [Route("{id}")]
    [Authorize(Roles = UserRoleConst.Admin)]
    public async Task<BlogPostDto?> Update(Guid id, [FromBody] UpdateBlogPostRequest request)
    {
        BlogPost data = await _manager.CreateAsync(id, request.Title, request.Slug, request.Description, request.Cover,
            request.Content, request.CopyRightType, request.Original, request.OriginalAvatar, request.OriginalTitle,
            request.OriginalLink, request.Visible, request.AlbumIds, request.CategoryIds, request.TagIds);
        EntityEntry<BlogPost> dataFromDb = _dbContext.Update(data);
        await _dbContext.SaveChangesAsync();

        return dataFromDb.Entity.ConvertToBlogPostDto(_dbContext);
    }

    [HttpPut]
    [Route("/api/[controller]/{id}/changeVisible")]
    [Authorize(Roles = UserRoleConst.Admin)]
    public async Task<ResponseResult<BlogPostDetailDto?>> UpdateVisible(Guid id,
        [FromBody] UpdateAlbumVisibleRequest request)
    {
        BlogPost data = await _manager.ChangeVisible(id, request.Visible);

        await _dbContext.SaveChangesAsync();
        return data.Adapt<BlogPostDetailDto>();
    }
}