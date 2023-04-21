using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container. // Orders doesn't matter here

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<StoreContext> (opt => 
{
        opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));});

//allow cross-origin
builder.Services.AddCors();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// allow the (middleware/client : localhost:3000) to access (me = the server)
app.UseCors(opt => {
    opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
});

//app.UseHttpsRedirection(); this app doen't use https

app.UseAuthorization();

app.MapControllers();

// seed the database here
var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<StoreContext>(); // public DbSet<Product> Products { get; set; }
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>(); // to log the error
try
{
    // create database if it does not exist
    context.Database.Migrate();
    DbInitializer.Initialize(context);
}
catch (Exception ex)
{
    logger.LogError(ex, "A problem occured during migraiton");    
}


app.Run();
