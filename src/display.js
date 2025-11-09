function displayFiles(filesInfo, dirPath) {
  console.log(`\n📂 Contenu de : ${dirPath}\n`);
  filesInfo.forEach((el) => {
    el.isDirectory
      ? console.log(`  📁 ${el.name.padEnd(61)} ${el.lastModification}`)
      : console.log(
          `  📄 ${el.name.padEnd(30)} ${el.size.padEnd(30)} ${el.lastModification}`
        );
  });
}

module.exports = {
  displayFiles,
};
