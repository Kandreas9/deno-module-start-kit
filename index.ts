import { copy, create, mkdir } from "./utils.ts";

//Create Root folder
mkdir("../Deno-Module-Kit");

//Create vscode configuration file for deno extension
mkdir("../Deno-Module-Kit/.vscode");
copy("./vsCode/settings.json", "../Deno-Module-Kit/.vscode/settings.json");

//Create github folder
mkdir("../Deno-Module-Kit/.github");
mkdir("../Deno-Module-Kit/.github/workflows");
copy(
  "./github/gitattributes",
  "../Deno-Module-Kit/.github/workflows/.gitattributes",
);
copy("./github/deno", "../Deno-Module-Kit/.github/workflows/deno.yml");

//Create gitignore file
copy("./github/gitignore", "../Deno-Module-Kit/.gitignore");

//Create deps.ts files
create("../Deno-Module-Kit/deps.ts");
create("../Deno-Module-Kit/test_deps.ts");

//Create mod files
create("../Deno-Module-Kit/mod.ts");
create("../Deno-Module-Kit/mod.test.ts");

//Create README file
create("../Deno-Module-Kit/README.md");

//Create tsconfig file
copy("./ts/tsconfig.json", "../Deno-Module-Kit/tsconfig.json");
