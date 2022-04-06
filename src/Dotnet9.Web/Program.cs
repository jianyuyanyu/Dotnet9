using System.Text.Encodings.Web;
using System.Text.Unicode;
using Dotnet9.Web.Caches;
using Dotnet9.Web.ServiceExtensions;
using Dotnet9.Web.Utils;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
GlobalVar.SiteDomain = builder.Configuration["SiteDomain"];
GlobalVar.AssetsLocalPath = builder.Configuration["AssetsLocalPath"];
GlobalVar.AssetsRemotePath = builder.Configuration["AssetsRemotePath"];
GlobalVar.Cache = builder.Configuration.GetSection("Cache").Get<CacheConfig>();

builder.Services.AddDbSetup(builder.Configuration.GetConnectionString("DefaultConnection")!);
builder.Services.AddAutoMapperSetup();
builder.Services.AddRepositorySetup();
builder.Services.AddCacheSetup();
builder.Services.AddSingleton(HtmlEncoder.Create(UnicodeRanges.All));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment()) app.UseExceptionHandler("/Home/Error");
app.UseStatusCodePagesWithReExecute("/error/{0}");

app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    "default",
    "{controller=Home}/{action=Index}/{id?}");

app.Run();