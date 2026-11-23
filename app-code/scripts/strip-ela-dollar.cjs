// Strip "$" characters from non-comment lines of ELA spec files (English content must not contain LaTeX delimiters).
const fs = require("fs");
for (const file of process.argv.slice(2)) {
  const lines = fs.readFileSync(file, "utf8").split("\n");
  const out = lines.map((line) => {
    const t = line.trimStart();
    if (t.startsWith("//")) return line;
    return line.replace(/\$/g, "");
  });
  fs.writeFileSync(file, out.join("\n"));
  console.log("stripped:", file);
}
