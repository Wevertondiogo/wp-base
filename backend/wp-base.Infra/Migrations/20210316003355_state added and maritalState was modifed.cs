using Microsoft.EntityFrameworkCore.Migrations;

namespace wp_base.Infra.Migrations
{
    public partial class stateaddedandmaritalStatewasmodifed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MatrialState",
                table: "ClientEntityTest",
                newName: "State");

            migrationBuilder.AlterColumn<string>(
                name: "Gender",
                table: "ClientEntityTest",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CellNumber",
                table: "ClientEntityTest",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MaritalState",
                table: "ClientEntityTest",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MaritalState",
                table: "ClientEntityTest");

            migrationBuilder.RenameColumn(
                name: "State",
                table: "ClientEntityTest",
                newName: "MatrialState");

            migrationBuilder.AlterColumn<string>(
                name: "Gender",
                table: "ClientEntityTest",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "CellNumber",
                table: "ClientEntityTest",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }
    }
}
