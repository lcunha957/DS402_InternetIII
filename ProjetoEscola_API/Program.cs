using Microsoft.EntityFrameworkCore;
using ProjetoEscola_API.Data;

var builder = WebApplication.CreateBuilder(args);

//Allow CORS
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.

//Allow CORS
builder.Services.AddCors(options =>
{
options.AddPolicy(MyAllowSpecificOrigins, builder => {
builder.WithOrigins("http://localhost").AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
builder.SetIsOriginAllowed(origin => new Uri(origin).Host == "localhost");
builder.SetIsOriginAllowed(origin => true);
});
});
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add DbContext

string SqlServerConnection = builder.Configuration.GetConnectionString("StringConexaoSQLServer");


builder.Services.AddDbContext<EscolaContext>(options =>

{options.UseSqlServer(SqlServerConnection);

}

);


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
