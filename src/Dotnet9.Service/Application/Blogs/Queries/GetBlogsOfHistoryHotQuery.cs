﻿namespace Dotnet9.Service.Application.Blogs.Queries;

public record GetBlogsOfHistoryHotQuery : ItemsQueryBase<PaginatedListBase<BlogBrief>>
{
    public override PaginatedListBase<BlogBrief> Result { get; set; } = default!;
}