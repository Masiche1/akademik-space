import type { Course, IbInfo, IbPaper } from "./types.ts";

export const IB_SUBJECT_NAME: Record<IbInfo["subject"], string> = {
  aa: "Mathematics: Analysis and Approaches",
  ai: "Mathematics: Applications and Interpretation",
  biology: "Biology",
  chemistry: "Chemistry",
  physics: "Physics",
  history: "History",
  geography: "Geography",
  economics: "Economics",
  business: "Business Management",
  psychology: "Psychology",
  philosophy: "Philosophy",
  "global-politics": "Global Politics",
  itgs: "ITGS",
  "language-a": "Language A",
  "language-b": "Language B",
  "language-ab-initio": "Language ab initio",
  "visual-arts": "Visual Arts",
  music: "Music",
  theatre: "Theatre",
  film: "Film",
  dance: "Dance",
  tok: "Theory of Knowledge",
  ee: "Extended Essay",
  cas: "Creativity, Activity, Service",
};

/** Group 4 sciences and Group 3 subjects use numbered written papers like mathematics. */
const IB_WRITTEN_PAPER_SUBJECTS: IbInfo["subject"][] = [
  "aa", "ai", "biology", "chemistry", "physics",
  "history", "geography", "economics", "business", "psychology", "philosophy", "global-politics", "itgs",
];

/** Whether the subject has numbered written exam papers shown on the course page. */
export function ibHasWrittenPapers(subject: IbInfo["subject"]): boolean {
  return IB_WRITTEN_PAPER_SUBJECTS.includes(subject);
}

/** Exam paper label. Calculator rules differ between AA and AI; sciences and I&S share the P1/P2(/P3) structure. */
export function paperLabel(paper: IbPaper, subject: IbInfo["subject"]): { title: string; detail: string } {
  if (subject === "aa") {
    if (paper === "3") return { title: "Paper 3", detail: "HL extended problem solving, calculator" };
    return paper === "1" ? { title: "Paper 1", detail: "No calculator" } : { title: "Paper 2", detail: "Calculator" };
  }
  if (subject === "ai") {
    if (paper === "3") return { title: "Paper 3", detail: "HL extended problem solving, calculator" };
    return paper === "1" ? { title: "Paper 1", detail: "Short response, calculator" } : { title: "Paper 2", detail: "Extended response, calculator" };
  }
  if (paper === "3") return { title: "Paper 3", detail: "HL only" };
  if (paper === "1") return { title: "Paper 1", detail: "Short answer and data-based questions" };
  return { title: "Paper 2", detail: "Extended response questions" };
}

/** Label for a course in compact lists, falling back to the full title. */
export function courseLabel(course: Course): string {
  return course.shortTitle ?? course.title;
}
