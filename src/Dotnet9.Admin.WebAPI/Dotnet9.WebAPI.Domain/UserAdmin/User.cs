﻿namespace Dotnet9.WebAPI.Domain.UserAdmin;

public class User : IdentityUser<Guid>, IHasCreationTime, IHasDeletionTime, ISoftDelete
{
    public User(string userName) : base(userName)
    {
        Id = Guid.NewGuid();
    }

    public string? NickName { get; set; }
    public string? Brief { get; set; }
    public string? WebSite { get; set; }
    public DateTime CreationTime { get; internal set; } = DateTime.Now;
    public DateTime? DeletionTime { get; private set; }

    public bool IsDeleted { get; private set; }

    public void SoftDelete()
    {
        IsDeleted = true;
        DeletionTime = DateTime.Now;
    }
}