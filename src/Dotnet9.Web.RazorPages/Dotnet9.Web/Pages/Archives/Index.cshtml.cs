namespace Dotnet9.Web.Pages.Archives;

public class IndexModel : PageModel
{
    private readonly IBlogPostService _service;
    private readonly IMemoryCacheHelper _cacheHelper;

    public IndexModel(IBlogPostService service,
        IMemoryCacheHelper cacheHelper)
    {
        _service = service;
        _cacheHelper = cacheHelper;
    }

    public List<BlogPostArchiveItem>? BlogPosts { get; set; }

    public async Task OnGet()
    {
        string cacheKey = $"BlogPostArchive";

        async Task<List<BlogPostArchiveItem>?> GetBlogPostsFromDb()
        {
            return await _service.GetArchivesAsync();
        }

        BlogPosts = await _cacheHelper.GetOrCreateAsync(cacheKey,
            async e => await GetBlogPostsFromDb());
    }
}