function printSubFiles(dir) {
  files = fs.readdirSync(dir);
  files.forEach(function (file) {
    absName = `${dir}/${file}`
    if (fs.statSync(absName).isDirectory()) {
      printSubFiles(absName)
    } else {
      console.log(file)
    }
  });
};
