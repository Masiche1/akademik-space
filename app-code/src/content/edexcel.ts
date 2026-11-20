import type { Course, EdexcelInfo, ExamTier } from "./types.ts";

export const TIER_LABEL: Record<ExamTier, { title: string; detail: string }> = {
  foundation: { title: "Foundation", detail: "Grades 1-5" },
  higher: { title: "Higher", detail: "Grades 4-9" },
};

export const EDEXCEL_SUBJECT_NAME: Record<EdexcelInfo["subject"], string> = {
  maths: "Maths",
  "further-maths": "Further Maths",
  "pure-maths": "Pure Maths",
  "english-language": "English Language",
  "english-literature": "English Literature",
  science: "Science",
  biology: "Biology",
  chemistry: "Chemistry",
  physics: "Physics",
  business: "Business",
  economics: "Economics",
  accounting: "Accounting",
  psychology: "Psychology",
  sociology: "Sociology",
  "computer-science": "Computer Science",
};

/** Display label for an Edexcel stage, e.g. "International A Level". */
export const EDEXCEL_STAGE_NAME: Record<EdexcelInfo["stage"], string> = {
  primary: "Primary",
  "lower-secondary": "Key Stage 3",
  igcse: "International GCSE",
  ias: "International AS",
  ial: "International A Level",
};

const SCIENCE_SUBJECTS = new Set<EdexcelInfo["subject"]>(["science", "biology", "chemistry", "physics"]);

/** Science courses: maths-style marking points, never tiered. */
export function isScience(course: Course): boolean {
  return course.edexcel !== undefined && SCIENCE_SUBJECTS.has(course.edexcel.subject);
}

/** Tiered courses are the International GCSE years. */
export function isTiered(course: Course): boolean {
  return course.edexcel?.stage === "igcse" && course.edexcel.subject === "maths";
}

/** English courses (Edexcel Language and Literature, US ELA): no maths tools, AO-based markschemes. */
export function isEnglish(course: Course): boolean {
  return course.edexcel?.subject === "english-language" || course.edexcel?.subject === "english-literature" || course.us?.subject === "ela";
}

const AO_HELP = {
  "english-language":
    "AO1 read and retrieve, AO2 language and structure, AO3 compare texts, AO4 communicate for purpose, AO5 accuracy",
  "english-literature":
    "AO1 knowledge and references, AO2 language, form and structure, AO3 comparison, AO4 context",
  "us-ela":
    "AO1 cite textual evidence, AO2 craft and structure, AO3 compare texts, AO4 task, purpose and audience, AO5 conventions",
} as const;

/** Legend for English mark codes, or undefined for maths-style courses. */
export function aoHelpFor(course: Course): string | undefined {
  if (course.us?.subject === "ela") return AO_HELP["us-ela"];
  const s = course.edexcel?.subject;
  return s === "english-language" || s === "english-literature" ? AO_HELP[s] : undefined;
}
