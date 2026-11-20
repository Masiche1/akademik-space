// Usage: node scripts/exam-gen/gen.cjs <specFile> [courseKey]
// specFile exports either a single spec or { key: spec, ... }.
const path = require("path");
const { runCourse } = require("./lib.cjs");

const [, , specFile, courseKey] = process.argv;
const mod = require(path.resolve(specFile));
const specs = courseKey ? { [courseKey]: mod[courseKey] ?? mod } : mod;

(async () => {
  for (const [key, spec] of Object.entries(specs)) {
    if (!spec) { console.log("no spec for", key); continue; }
    try {
      await runCourse({ ...spec, course: spec.course ?? key });
    } catch (e) {
      console.error(`FAILED ${key}:`, e.message);
      console.error(e.stack?.split("\n").slice(0, 4).join("\n"));
    }
  }
})();
