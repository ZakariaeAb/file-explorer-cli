const { listFiles } = require("./src/explorer");

async function main() {
  const path = process.argv[2];
  try {
    const files = await listFiles(path);
    console.log(files);
  } catch (error) {
    console.error(error.message);
  }
}

main();
