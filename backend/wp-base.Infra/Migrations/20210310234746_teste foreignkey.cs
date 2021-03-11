using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace wp_base.Infra.Migrations
{
    public partial class testeforeignkey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CompanyId",
                table: "CompanyEntityTest",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ClientId",
                table: "ClientEntityTest",
                newName: "Id");

            migrationBuilder.AlterColumn<string>(
                name: "BirthDate",
                table: "ClientEntityTest",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "CompanyEntityTest",
                newName: "CompanyId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "ClientEntityTest",
                newName: "ClientId");

            migrationBuilder.AlterColumn<DateTime>(
                name: "BirthDate",
                table: "ClientEntityTest",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }
    }
}
