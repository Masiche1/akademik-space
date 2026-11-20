import { expect, it } from "vitest";
import { findLatexErrors, findQuestionErrors } from "./content/validate.ts";
import { cieIgcseAccounting } from "./content/courses/cie-igcse-accounting/index.ts";

let questions = 0;
const errors: string[] = [];
it("acct",()=>{
for (const unit of cieIgcseAccounting.units) {
  for (const lesson of unit.lessons) {
    for (const concept of lesson.concepts) {
      for (const q of concept.questions) {
        questions++;
        errors.push(...findQuestionErrors(q));
      }
    }
  }
  errors.push(...findLatexErrors(unit));
}
console.log(`course: ${cieIgcseAccounting.id}`);
console.log(`units: ${cieIgcseAccounting.units.length}, questions: ${questions}`);
console.log(`errors: ${errors.length}`);
expect(errors).toEqual([]);
for (const e of errors.slice(0, 40)) console.log(" -", e);
});
