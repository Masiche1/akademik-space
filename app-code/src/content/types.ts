/**
 * Curriculum content model.
 * Course > Unit > Lesson > Concept > Question.
 *
 * Text fields support inline math with $...$ and display math with $$...$$ (KaTeX).
 * Use **bold** for emphasis. Separate paragraphs with a blank line ("\n\n").
 */

export type Difficulty = "foundation" | "core" | "challenge";

export type MarkPrinciple = {
  /**
   * Category shown as a tag: what kind of backing this is.
   * English courses use technique (language/structural device), convention (form/genre), context and skill.
   */
  kind:
    | "formula" | "law" | "theorem" | "definition" | "principle" | "property"
    | "technique" | "convention" | "context" | "skill"
    | "method" | "comparison";
  /** Short name, e.g. "Slope formula" or "Vertical line test". */
  name: string;
  /** Statement of the formula/law, may include math. */
  statement: string;
};

export type MarkStep = {
  /** Explanation of the reasoning for this step (the "why"). */
  reasoning: string;
  /** The working itself, usually display math. */
  working?: string;
  /** English only: a short quotation from the extract that supports this point (plain text, no math). */
  evidence?: string;
  /**
   * Marks awarded for this step. Maths codes: M = method, A = accuracy, B = independent, R = reasoning.
   * English codes are Edexcel assessment objectives AO1-AO5. MYP sciences may use criterion letters A-D.
   */
  marks: number;
  markCode: "M" | "A" | "B" | "R" | "C" | "D" | EnglishAo;
  /** For structured questions: the part label this step belongs to, e.g. "a". */
  part?: string;
};

/** Edexcel English assessment objectives. */
export type EnglishAo = "AO1" | "AO2" | "AO3" | "AO4" | "AO5";

/** One band of a level-based (holistic) English markscheme. */
export type MarkLevel = {
  /** e.g. "Level 5" */
  level: string;
  /** Mark range as text, e.g. "13-15". "0" for no rewardable material is not needed. */
  marks: string;
  descriptor: string;
  /** For structured questions: the part this band applies to. */
  part?: string;
};

export type Markscheme = {
  principles: MarkPrinciple[];
  steps: MarkStep[];
  finalAnswer: string;
  commonErrors?: string[];
  examinerNote?: string;
  /** English extended responses: level descriptors, highest level first. */
  levels?: MarkLevel[];
};

/** A reading passage, poem or play extract printed with the question. */
export type TextExtract = {
  title: string;
  /** e.g. "William Blake" or "Written for Akademik Space". */
  author: string;
  /** e.g. "Songs of Experience (1794)" or "Macbeth, Act 1 Scene 7". */
  source?: string;
  /** Plain text. Single "\n" is a line break (poetry, drama), "\n\n" a new paragraph or stanza. */
  text: string;
  /** Show line numbers (poems and play extracts). */
  lineNumbers?: boolean;
};

export type McqChoice = { id: string; text: string };

export type NumericPart = {
  label: string;
  answer: number;
  /** Absolute tolerance. Defaults to 0.001. */
  tolerance?: number;
  unit?: string;
};

export type QuestionResponse =
  | { type: "mcq"; choices: McqChoice[]; correctChoiceId: string }
  | {
      type: "numeric";
      parts: NumericPart[];
      /** When true, part answers may be entered in any order (e.g. roots of a quadratic). */
      unordered?: boolean;
    }
  | {
      /** Proofs, explanations, sketches: student writes a response and self-assesses against the markscheme. */
      type: "open";
    };

/** One sub-question of a structured (multi-part) exam-style question. */
export type QuestionPart = {
  /** "a", "b", "c" ... (rendered as (a), (b), (c)). */
  label: string;
  prompt: string;
  marks: number;
};

/** IB exam paper. AA Paper 1 is non-calculator; Paper 3 is HL only. */
export type IbPaper = "1" | "2" | "3";

/** Edexcel International GCSE tier. */
export type ExamTier = "foundation" | "higher";

/** Cambridge International tier for tiered syllabuses (IGCSE Core/Extended, IAL AS/A Level). */
export type CieTier = "core" | "extended" | "as" | "a2";

export type Question = {
  id: string;
  difficulty: Difficulty;
  /** IB courses only: the exam paper this question is styled on. */
  paper?: IbPaper;
  /** Edexcel International GCSE courses only: the tier this question belongs to. */
  tier?: ExamTier;
  totalMarks: number;
  /** English: the passage the question is about, shown above the stem. */
  extract?: TextExtract;
  /** Shared context/scenario. For structured questions, the sub-questions go in `parts`. */
  stem: string;
  /** Structured question parts. Their marks must sum to totalMarks. */
  parts?: QuestionPart[];
  response: QuestionResponse;
  markscheme: Markscheme;
};

export type LessonSection = {
  heading: string;
  body: string;
};

export type WorkedExample = {
  problem: string;
  solution: string;
};

export type Concept = {
  id: string;
  title: string;
  /** One-line skill statement. */
  skill: string;
  /** The concept's mini-lesson. */
  lesson: {
    sections: LessonSection[];
    keyFormulas?: { name: string; statement: string }[];
    workedExample?: WorkedExample;
  };
  questions: Question[];
};

export type VocabTerm = { term: string; definition: string };

/**
 * Synthesised revision notes for one topic, rendered on a dedicated notes page
 * linked from the lesson. Sections reuse LessonSection so MathText renders them.
 */
export type TopicNote = {
  /** Unique id, e.g. "ciem-u1-indices-notes". */
  id: string;
  title: string;
  /** One-line summary shown on the lesson's notes link. */
  summary?: string;
  sections: LessonSection[];
};

export type Lesson = {
  id: string;
  /** e.g. "3-1" */
  code: string;
  title: string;
  /** "I CAN..." learning goal. */
  goal: string;
  /** Common Core codes, e.g. "HSF-IF.A.1". */
  standards: string[];
  vocabulary: VocabTerm[];
  concepts: Concept[];
  /** Synthesised revision notes for this lesson's topics. */
  notes?: TopicNote[];
  /** Cambridge stage this lesson targets: Primary stages 1-6 or Lower Secondary Checkpoint stages 7-9. */
  stage?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
};

export type Unit = {
  id: string;
  /** e.g. "3A" */
  code: string;
  /** Optional display ordering number. */
  number?: number;
  title: string;
  description: string;
  lessons: Lesson[];
};

/** IB Diploma Programme subjects across all groups, plus DP core components. */
export type IbSubject =
  // Group 5 — Mathematics
  | "aa" | "ai"
  // Group 4 — Sciences
  | "biology" | "chemistry" | "physics"
  // Group 3 — Individuals and Societies
  | "history" | "geography" | "economics" | "business" | "psychology" | "philosophy" | "global-politics" | "itgs"
  // Groups 1 and 2 — Languages
  | "language-a" | "language-b" | "language-ab-initio"
  // Group 6 — Arts
  | "visual-arts" | "music" | "theatre" | "film" | "dance"
  // DP core
  | "tok" | "ee" | "cas";

export type IbInfo = {
  subject: IbSubject;
  level: "sl" | "hl";
  year: 1 | 2;
  /** HL courses: the SL course ids whose core content HL students also study. */
  coreCourseIds?: string[];
};

export type EdexcelInfo = {
  /**
   * Pearson Edexcel stages: primary (Years 1-6, Key Stage 1-2), lower-secondary
   * (Years 8-9, Key Stage 3), igcse (Years 10-11), ias (International Advanced
   * Subsidiary) and ial (International Advanced Level).
   */
  stage: "primary" | "lower-secondary" | "igcse" | "ias" | "ial";
  subject:
    | "maths" | "further-maths" | "pure-maths"
    | "english-language" | "english-literature"
    | "science" | "biology" | "chemistry" | "physics"
    | "business" | "economics" | "accounting" | "psychology" | "sociology" | "computer-science";
  /** Primary: school year 1-6. Lower secondary / IGCSE: 8-11. IAS/IAL: year of study 1 or 2. */
  year: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | 11 | 12 | 13;
};

/**
 * US Common Core / NGSS courses: middle school (Grades 7-8) and high school sciences and ELA (Grades 9-11).
 * The original high school maths sequence (Algebra 1 to Precalculus) has no `us` field.
 */
export type UsInfo = {
  subject: "math" | "science" | "ela" | "biology" | "chemistry" | "physics" | "earth-space";
  grade: 7 | 8 | 9 | 10 | 11;
};

/** Grades 7-8 are middle school; 9 and above are high school. */
export const isUsMiddleSchool = (us: UsInfo) => us.grade <= 8;

/** IB Middle Years Programme: integrated Sciences in MYP 1-3, separate sciences and Standard/Extended maths in MYP 4-5. Language and Literature / Language Acquisition are per-year courses like the other MYP subjects. */
export type MypInfo = {
  subject:
    | "maths" | "maths-standard" | "maths-extended" | "sciences" | "biology" | "chemistry" | "physics"
    | "language-lit" | "language-acq";
  year: 1 | 2 | 3 | 4 | 5;
};

/** IB Primary Years Programme subject groups (ages 3-12). One course per subject group covering the full PYP scope. */
export type PypSubject =
  | "language" | "maths" | "science" | "social-studies" | "arts" | "pspe";

export type PypInfo = {
  subject: PypSubject;
};

/**
 * Cambridge International courses: IGCSE, O Level, AS & A Level, Lower Secondary.
 * `subject` is the syllabus code/name, e.g. "mathematics-0580".
 * `tier` is set for courses that exist as separate Core/Extended (or AS/A2) variants.
 */
export type CieInfo = {
  qualification: "primary" | "lower-secondary" | "igcse" | "o-level" | "as-level" | "a-level" | "pre-u";
  subject: string;
  tier?: CieTier;
};

export type Course = {
  id: string;
  title: string;
  /** Short label for compact navigation, e.g. "AA SL Year 1". */
  shortTitle?: string;
  grade: string;
  framework: string;
  description: string;
  units: Unit[];
  /** Present for IB Diploma Programme courses. */
  ib?: IbInfo;
  /** Present for Pearson Edexcel courses. */
  edexcel?: EdexcelInfo;
  /** Present for US Common Core / NGSS courses (Grades 7-11). */
  us?: UsInfo;
  /** Present for IB Middle Years Programme courses. */
  myp?: MypInfo;
  /** Present for IB Primary Years Programme courses. */
  pyp?: PypInfo;
  /** Present for Cambridge International courses. */
  cie?: CieInfo;
};
