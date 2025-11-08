const { listFiles } = require("./src/explorer");
const { displayFiles } = require("./src/display");

async function main() {
  const path = process.argv[2] || ".";
  try {
    const files = await listFiles(path);
    displayFiles(files, path);
  } catch (error) {
    console.error(error.message);
  }
}

main();
