import katex from "katex";
import { edxIasMaths } from "../src/content/courses/edx-ias-maths/index.ts";
import { edxIasFurtherMaths } from "../src/content/courses/edx-ias-further-maths/index.ts";
import { edxIasPureMaths } from "../src/content/courses/edx-ias-pure-maths/index.ts";
import { edxIasBiology } from "../src/content/courses/edx-ias-biology/index.ts";
import { edxIasChemistry } from "../src/content/courses/edx-ias-chemistry/index.ts";
import { edxIasPhysics } from "../src/content/courses/edx-ias-physics/index.ts";
import { edxIasBusiness } from "../src/content/courses/edx-ias-business/index.ts";
import { edxIasEconomics } from "../src/content/courses/edx-ias-economics/index.ts";
import { edxIasPsychology } from "../src/content/courses/edx-ias-psychology/index.ts";
import { edxIasSociology } from "../src/content/courses/edx-ias-sociology/index.ts";
import { edxIasComputerScience } from "../src/content/courses/edx-ias-computerscience/index.ts";
import { edxIasAccounting } from "../src/content/courses/edx-ias-accounting/index.ts";
import { edxIalMaths } from "../src/content/courses/edx-ial-maths/index.ts";
import { edxIalFurtherMaths } from "../src/content/courses/edx-ial-further-maths/index.ts";
import { edxIalPureMaths } from "../src/content/courses/edx-ial-pure-maths/index.ts";
import { edxIalBiology } from "../src/content/courses/edx-ial-biology/index.ts";
import { edxIalChemistry } from "../src/content/courses/edx-ial-chemistry/index.ts";
import { edxIalPhysics } from "../src/content/courses/edx-ial-physics/index.ts";
import { edxPrimaryMathsY1 } from "../src/content/courses/edx-primary-maths-y1/index.ts";
import { edxPrimaryMathsY2 } from "../src/content/courses/edx-primary-maths-y2/index.ts";
import { edxPrimaryMathsY3 } from "../src/content/courses/edx-primary-maths-y3/index.ts";
import { edxPrimaryMathsY4 } from "../src/content/courses/edx-primary-maths-y4/index.ts";
import { edxPrimaryMathsY5 } from "../src/content/courses/edx-primary-maths-y5/index.ts";
import { edxPrimaryMathsY6 } from "../src/content/courses/edx-primary-maths-y6/index.ts";
import { edxPrimaryEnglishY1 } from "../src/content/courses/edx-primary-english-y1/index.ts";
import { edxPrimaryEnglishY2 } from "../src/content/courses/edx-primary-english-y2/index.ts";
import { edxPrimaryEnglishY3 } from "../src/content/courses/edx-primary-english-y3/index.ts";
import { edxPrimaryEnglishY4 } from "../src/content/courses/edx-primary-english-y4/index.ts";
import { edxPrimaryEnglishY5 } from "../src/content/courses/edx-primary-english-y5/index.ts";
import { edxPrimaryEnglishY6 } from "../src/content/courses/edx-primary-english-y6/index.ts";
import { edxPrimaryScienceY1 } from "../src/content/courses/edx-primary-science-y1/index.ts";
import { edxPrimaryScienceY2 } from "../src/content/courses/edx-primary-science-y2/index.ts";
import { edxPrimaryScienceY3 } from "../src/content/courses/edx-primary-science-y3/index.ts";
import { edxPrimaryScienceY4 } from "../src/content/courses/edx-primary-science-y4/index.ts";
import { edxPrimaryScienceY5 } from "../src/content/courses/edx-primary-science-y5/index.ts";
import { edxPrimaryScienceY6 } from "../src/content/courses/edx-primary-science-y6/index.ts";
import { edxPrimaryComputing } from "../src/content/courses/edx-primary-computing/index.ts";
import { edxPrimaryGeography } from "../src/content/courses/edx-primary-geography/index.ts";
import { edxPrimaryHistory } from "../src/content/courses/edx-primary-history/index.ts";
import { edxBtecEngineering } from "../src/content/courses/edx-btec-engineering/index.ts";
import { edxBtecHealthSocialCare } from "../src/content/courses/edx-btec-health-social-care/index.ts";
import { edxBtecInformationTechnology } from "../src/content/courses/edx-btec-information-technology/index.ts";
import { edxMathsY7 } from "../src/content/courses/edx-maths-y7/index.ts";
import { edxEngLangY7 } from "../src/content/courses/edx-englang-y7/index.ts";
import { edxScienceY7 } from "../src/content/courses/edx-science-y7/index.ts";
import { edxScienceY10 } from "../src/content/courses/edx-science-y10/index.ts";
import { edxScienceY11 } from "../src/content/courses/edx-science-y11/index.ts";
import { edxBiologyY10 } from "../src/content/courses/edx-biology-y10/index.ts";
import { edxBiologyY11 } from "../src/content/courses/edx-biology-y11/index.ts";
import { edxChemistryY10 } from "../src/content/courses/edx-chemistry-y10/index.ts";
import { edxChemistryY11 } from "../src/content/courses/edx-chemistry-y11/index.ts";
import { edxPhysicsY10 } from "../src/content/courses/edx-physics-y10/index.ts";
import { edxPhysicsY11 } from "../src/content/courses/edx-physics-y11/index.ts";
import { edxBusinessY10 } from "../src/content/courses/edx-business-y10/index.ts";
import { edxBusinessY11 } from "../src/content/courses/edx-business-y11/index.ts";
import { edxEconomicsY10 } from "../src/content/courses/edx-economics-y10/index.ts";
import { edxEconomicsY11 } from "../src/content/courses/edx-economics-y11/index.ts";
import { edxComputerScienceY10 } from "../src/content/courses/edx-computerscience-y10/index.ts";
import { edxComputerScienceY11 } from "../src/content/courses/edx-computerscience-y11/index.ts";
import type { Question, Unit } from "../src/content/types.ts";

const MATH_PATTERN = /\$\$([\s\S]+?)\$\$|(?<!\\)\$((?:\\\$|[^$])+?)\$/g;

function findLatexErrors(value: unknown, key = "root"): string[] {
  const failures: string[] = [];
  if (typeof value === "string") {
    const segments =
      key === "working"
        ? [value]
        : [...value.matchAll(new RegExp(MATH_PATTERN))].map(
            (m) => m[1] ?? m[2] ?? "",
          );
    for (const tex of segments) {
      try {
        katex.renderToString(tex, { throwOnError: true, strict: "ignore" });
      } catch (e) {
        failures.push(`${tex} -> ${(e as Error).message}`);
      }
      if (/[\t\f\v\b\r]/.test(tex))
        failures.push(`control character in: ${JSON.stringify(tex)}`);
    }
  } else if (Array.isArray(value)) {
    for (const v of value) failures.push(...findLatexErrors(v, key));
  } else if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value))
      failures.push(...findLatexErrors(v, k));
  }
  return failures;
}

function findQuestionErrors(q: Question): string[] {
  const errs: string[] = [];
  const stepMarks = q.markscheme.steps.reduce((s, step) => s + step.marks, 0);
  if (stepMarks !== q.totalMarks)
    errs.push(`${q.id}: step marks ${stepMarks} != totalMarks ${q.totalMarks}`);
  if (q.markscheme.principles.length === 0) errs.push(`${q.id}: no principles`);
  if (q.parts) {
    const partSum = q.parts.reduce((s, p) => s + p.marks, 0);
    if (partSum !== q.totalMarks)
      errs.push(`${q.id}: part marks ${partSum} != totalMarks ${q.totalMarks}`);
    for (const p of q.parts) {
      const m = q.markscheme.steps
        .filter((s) => s.part === p.label)
        .reduce((s, st) => s + st.marks, 0);
      if (m !== p.marks)
        errs.push(`${q.id}: part (${p.label}) steps total ${m} != ${p.marks}`);
    }
  }
  if (q.response.type === "mcq") {
    const { choices, correctChoiceId } = q.response;
    if (!choices.some((c) => c.id === correctChoiceId))
      errs.push(`${q.id}: correct choice missing`);
  }
  if (q.response.type === "numeric") {
    for (const p of q.response.parts)
      if (!Number.isFinite(p.answer)) errs.push(`${q.id}: non-finite answer`);
  }
  return errs;
}

function unitQuestions(unit: Unit): Question[] {
  return unit.lessons.flatMap((l) => l.concepts.flatMap((c) => c.questions));
}

const courses = [
  edxIasMaths,
  edxIasFurtherMaths,
  edxIasPureMaths,
  edxIasBiology,
  edxIasChemistry,
  edxIasPhysics,
  edxIasBusiness,
  edxIasEconomics,
  edxIasPsychology,
  edxIasSociology,
  edxIasComputerScience,
  edxIasAccounting,
  edxIalMaths,
  edxIalFurtherMaths,
  edxIalPureMaths,
  edxIalBiology,
  edxIalChemistry,
  edxIalPhysics,
  edxPrimaryMathsY1,
  edxPrimaryMathsY2,
  edxPrimaryMathsY3,
  edxPrimaryMathsY4,
  edxPrimaryMathsY5,
  edxPrimaryMathsY6,
  edxPrimaryEnglishY1,
  edxPrimaryEnglishY2,
  edxPrimaryEnglishY3,
  edxPrimaryEnglishY4,
  edxPrimaryEnglishY5,
  edxPrimaryEnglishY6,
  edxPrimaryScienceY1,
  edxPrimaryScienceY2,
  edxPrimaryScienceY3,
  edxPrimaryScienceY4,
  edxPrimaryScienceY5,
  edxPrimaryScienceY6,
  edxPrimaryComputing,
  edxPrimaryGeography,
  edxPrimaryHistory,
  edxBtecEngineering,
  edxBtecHealthSocialCare,
  edxBtecInformationTechnology,
  edxMathsY7,
  edxEngLangY7,
  edxScienceY7,
  edxScienceY10,
  edxScienceY11,
  edxBiologyY10,
  edxBiologyY11,
  edxChemistryY10,
  edxChemistryY11,
  edxPhysicsY10,
  edxPhysicsY11,
  edxBusinessY10,
  edxBusinessY11,
  edxEconomicsY10,
  edxEconomicsY11,
  edxComputerScienceY10,
  edxComputerScienceY11,
];

let bad = 0;
for (const course of courses) {
  let courseQuestions = 0;
  for (const unit of course.units) {
    const questions = unitQuestions(unit);
    courseQuestions += questions.length;
    const ids = questions.map((q) => q.id);
    const errors = [
      ...ids
        .filter((id, i) => ids.indexOf(id) !== i)
        .map((id) => `duplicate id ${id}`),
      ...findLatexErrors(unit),
      ...questions.flatMap(findQuestionErrors),
      ...questions.flatMap((q) =>
        q.tier ? [`${q.id}: IAS/IAL question has tier`] : [],
      ),
    ];
    const shape = `lessons=${unit.lessons.length} questions=${questions.length}`;
    if (errors.length || unit.lessons.length < 3) {
      bad++;
      console.log(`${course.id} ${unit.id}: ${shape}`);
      for (const e of errors) console.log(`   ${e}`);
      if (unit.lessons.length < 3) console.log("   !! expected at least 3 lessons");
    } else {
      console.log(`${course.id} ${unit.id}: ${shape} ok`);
    }
  }
  if (course.edexcel?.stage === "primary" && courseQuestions < 300) {
    bad++;
    console.log(`${course.id}: only ${courseQuestions} questions (need >= 300)`);
  }
}
console.log(bad === 0 ? "ALL UNITS VALID" : `${bad} units need attention`);
process.exit(bad === 0 ? 0 : 1);
