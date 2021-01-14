//Helper function to create a dir
export async function mkdir(path: string) {
  await Deno.mkdir(path);
}

//Helper function to copy a file
export async function copy(path: string, dest: string) {
  await Deno.copyFile(path, dest);
}

//Helper function to create a file
export async function create(path: string) {
  await Deno.create(path);
}
