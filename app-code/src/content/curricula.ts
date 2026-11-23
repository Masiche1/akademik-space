import {
  CIE_COURSES,
  EDEXCEL_COURSES,
  IB_COURSES,
  MYP_COURSES,
  PYP_COURSES,
  US_COURSES,
} from "./catalog.ts";
import { EDEXCEL_SUBJECT_NAME } from "./edexcel.ts";
import { courseLabel } from "./ib.ts";
import {
  isUsElementary,
  isUsHighSchool,
  isUsMiddleSchool,
  type Course,
  type EdexcelInfo,
  type IbInfo,
  type MypInfo,
  type PypInfo,
  type UsInfo,
} from "./types.ts";

export type CourseGroup = {
  heading: string;
  courses: Course[];
  label: (c: Course) => string;
  /** Optional programme band rendered as a section header above the group, e.g. MYP vs DP on the combined IB page. */
  section?: string;
};

export type Curriculum = {
  id: "us" | "ib" | "myp" | "edexcel" | "cie";
  /** URL segment for /curricula/:slug. */
  slug: string;
  /** Short name for the header menu. */
  navLabel: string;
  title: string;
  /** Small label above the title, e.g. "IB Diploma Programme". */
  eyebrow: string;
  /** One-line summary for cards. */
  summary: string;
  /** Longer intro for the curriculum page. */
  description: string;
  groups: CourseGroup[];
};

type IbGroupDef = { heading: string; subjects: IbInfo["subject"][] };

const IB_GROUPS: IbGroupDef[] = [
  { heading: "Group 5: Mathematics", subjects: ["aa", "ai"] },
  {
    heading: "Group 4: Sciences",
    subjects: ["biology", "chemistry", "physics"],
  },
  {
    heading: "Group 3: Individuals and Societies",
    subjects: [
      "history",
      "geography",
      "economics",
      "business",
      "psychology",
      "philosophy",
      "global-politics",
      "itgs",
    ],
  },
  { heading: "Group 1: Language A", subjects: ["language-a"] },
  {
    heading: "Group 2: Language B",
    subjects: ["language-b", "language-ab-initio"],
  },
  {
    heading: "Group 6: Arts",
    subjects: ["visual-arts", "music", "theatre", "film", "dance"],
  },
  { heading: "DP Core", subjects: ["tok", "ee", "cas"] },
];
const EDEXCEL_SUBJECTS: EdexcelInfo["subject"][] = [
  "maths",
  "further-maths",
  "pure-maths",
  "english-language",
  "english-literature",
  "science",
  "biology",
  "chemistry",
  "physics",
  "business",
  "economics",
  "accounting",
  "psychology",
  "sociology",
  "computer-science",
  "engineering",
  "health-social-care",
  "information-technology",
];

const ibLabel = (c: Course) => (c.ib ? courseLabel(c) : c.title);
const yearLabel = (c: Course) => c.grade;

/** Edexcel groups are organised by stage first, then subject within each stage. */
const EDEXCEL_STAGE_SECTIONS: {
  stage: EdexcelInfo["stage"];
  section: string;
}[] = [
  { stage: "primary", section: "Primary (Years 1-6)" },
  { stage: "lower-secondary", section: "Key Stage 3 (Years 7-9)" },
  { stage: "igcse", section: "International GCSE (Years 10-11)" },
  { stage: "ias", section: "International Advanced Subsidiary (IAS)" },
  { stage: "ial", section: "International A Level (IAL)" },
  { stage: "btec", section: "BTEC Nationals (Level 3)" },
];

const edexcelLabel = (c: Course) =>
  c.edexcel && (c.edexcel.stage === "ias" || c.edexcel.stage === "ial")
    ? `Year ${c.edexcel.year}`
    : yearLabel(c);

const US_ELEMENTARY_GROUPS: { subject: UsInfo["subject"]; heading: string }[] = [
  { subject: "math", heading: "Elementary Math" },
  { subject: "science", heading: "Elementary Science" },
  { subject: "ela", heading: "Elementary English Language Arts" },
];

const US_MIDDLE_GROUPS: { subject: UsInfo["subject"]; heading: string }[] = [
  { subject: "math", heading: "Middle School Math" },
  { subject: "science", heading: "Middle School Science" },
  { subject: "ela", heading: "Middle School English Language Arts" },
];

const US_HIGH_SCIENCES: UsInfo["subject"][] = [
  "biology",
  "earth-space",
  "chemistry",
  "physics",
];

const usElementary = (subject: UsInfo["subject"]) =>
  US_COURSES.filter(
    (c) => c.us && isUsElementary(c.us) && c.us.subject === subject,
  );
const usMiddle = (subject: UsInfo["subject"]) =>
  US_COURSES.filter(
    (c) => c.us && isUsMiddleSchool(c.us) && c.us.subject === subject,
  );
const usHigh = (subjects: UsInfo["subject"][]) =>
  US_COURSES.filter(
    (c) => c.us && isUsHighSchool(c.us) && subjects.includes(c.us.subject),
  );

/** Grades K-6 by subject, then Grades 7-8 by subject, then high school maths, sciences and ELA. Empty groups are hidden. */
const usGroups: CourseGroup[] = [
  ...US_ELEMENTARY_GROUPS.map((g) => ({
    heading: g.heading,
    courses: usElementary(g.subject),
    label: yearLabel,
  })),
  ...US_MIDDLE_GROUPS.map((g) => ({
    heading: g.heading,
    courses: usMiddle(g.subject),
    label: yearLabel,
  })),
  {
    heading: "High School Math",
    courses: US_COURSES.filter(
      (c) =>
        (!c.us && !c.ap && !c.sat) ||
        (c.us !== undefined && c.us.subject === "math" && isUsHighSchool(c.us)),
    ),
    label: (c: Course) => c.title,
  },
  {
    heading: "High School Science",
    courses: usHigh(US_HIGH_SCIENCES),
    label: (c: Course) => c.title,
  },
  {
    heading: "High School English Language Arts",
    courses: usHigh(["ela"]),
    label: yearLabel,
  },
  {
    heading: "Advanced Placement (AP)",
    courses: US_COURSES.filter((c) => c.ap !== undefined),
    label: (c: Course) => c.title,
  },
  {
    heading: "SAT",
    courses: US_COURSES.filter((c) => c.sat !== undefined),
    label: (c: Course) => c.title,
  },
].filter((g) => g.courses.length > 0);

/** PYP subject groups (ages 3-12). One course per subject group covering the full PYP scope. */
const PYP_GROUPS: { subject: PypInfo["subject"]; heading: string }[] = [
  { subject: "language", heading: "Language" },
  { subject: "maths", heading: "Mathematics" },
  { subject: "science", heading: "Science" },
  { subject: "social-studies", heading: "Social Studies" },
  { subject: "arts", heading: "The Arts" },
  { subject: "pspe", heading: "PSPE" },
];

const pypGroups: CourseGroup[] = PYP_GROUPS.map((g) => ({
  heading: g.heading,
  courses: PYP_COURSES.filter((c) => c.pyp?.subject === g.subject),
  label: (c: Course) => c.shortTitle ?? c.title,
  section: "Primary Years Programme (PYP)",
})).filter((g) => g.courses.length > 0);

/** MYP 1-3 Mathematics and integrated Sciences; MYP 4-5 Standard/Extended Mathematics and separate sciences. Headings carry the year range so they stay distinct from the DP groups on the combined IB page. */
const MYP_GROUPS: { subject: MypInfo["subject"]; heading: string }[] = [
  { subject: "language-lit", heading: "MYP Years 1-5 Language and Literature" },
  { subject: "language-acq", heading: "MYP Years 1-5 Language Acquisition" },
  { subject: "maths", heading: "MYP Years 1-3 Mathematics" },
  { subject: "maths-standard", heading: "MYP Years 4-5 Standard Mathematics" },
  { subject: "maths-extended", heading: "MYP Years 4-5 Extended Mathematics" },
  { subject: "sciences", heading: "MYP Years 1-3 Sciences" },
  { subject: "biology", heading: "MYP Years 4-5 Biology" },
  { subject: "chemistry", heading: "MYP Years 4-5 Chemistry" },
  { subject: "physics", heading: "MYP Years 4-5 Physics" },
];

const mypGroups: CourseGroup[] = MYP_GROUPS.map((g) => ({
  heading: g.heading,
  courses: MYP_COURSES.filter((c) => c.myp?.subject === g.subject),
  label: yearLabel,
  section: "Middle Years Programme (MYP)",
})).filter((g) => g.courses.length > 0);

/** Every curriculum, grouped for navigation. Single source for header, footer and home page. */
export const CURRICULA: Curriculum[] = [
  {
    id: "us",
    slug: "us",
    navLabel: "US Pre-K-12",
    title: "US Pre-K-12",
    eyebrow: "Common Core and NGSS",
    summary:
      "Pre-K-6 Math, ELA and Science, Grades 7-8 Math, Science and ELA, then high school Math, Sciences and ELA, plus AP and SAT prep.",
    description:
      "Pre-K-6 Math, English Language Arts and Science, middle school Math, Science and English Language Arts for Grades 7 and 8, then high school Algebra 1 to Precalculus, Biology, Earth and Space Science, Chemistry, Physics and English Language Arts, aligned to Common Core and NGSS. Every lesson is mapped to its standards. Advanced Placement exam prep and SAT section courses round out the sequence for college readiness.",
    groups: usGroups,
  },
  {
    id: "ib",
    slug: "ib",
    navLabel: "IB Programmes",
    title: "IB Primary, Middle Years and Diploma",
    eyebrow: "International Baccalaureate",
    summary:
      "PYP subject groups for ages 3-12, MYP Years 1-5, then the full Diploma Programme: all six subject groups and the DP core.",
    description:
      "The Primary Years Programme subject groups — Language, Mathematics, Science, Social Studies, The Arts and PSPE — for ages 3-12. Then the Middle Years Programme: Language and Literature, Language Acquisition, Mathematics and Sciences for MYP 1-5. Then the Diploma Programme: Analysis and Approaches and Applications and Interpretation, the Sciences, Individuals and Societies, Languages, Arts, and the DP core of Theory of Knowledge, Extended Essay and CAS. Written-paper subjects tag every question Paper 1, 2 or 3 so you practise under the right conditions.",
    groups: [
      ...pypGroups,
      ...mypGroups,
      ...IB_GROUPS.map((g) => ({
        heading: g.heading,
        courses: IB_COURSES.filter(
          (c) => c.ib !== undefined && g.subjects.includes(c.ib.subject),
        ),
        label: ibLabel,
        section: "Diploma Programme (DP)",
      })).filter((g) => g.courses.length > 0),
    ],
  },
  {
    id: "edexcel",
    slug: "edexcel",
    navLabel: "Edexcel",
    title: "Pearson Edexcel",
    eyebrow: "Pearson Edexcel",
    summary:
      "Primary through International A Level: Maths, English, Sciences, Business, Economics and more.",
    description:
      "Primary Years 1-6, Key Stage 3 in Years 7-9, International GCSE in Years 10-11, and International Advanced Subsidiary and International A Level courses. Maths uses Foundation and Higher tiers at IGCSE; English uses level-based markschemes; Sciences use Edexcel marking points.",
    // Stage sections first, then subject groups within each stage. Only subjects that have courses appear.
    groups: EDEXCEL_STAGE_SECTIONS.flatMap(({ stage, section }) =>
      EDEXCEL_SUBJECTS.map((s) => ({
        heading: EDEXCEL_SUBJECT_NAME[s],
        courses: EDEXCEL_COURSES.filter(
          (c) => c.edexcel?.stage === stage && c.edexcel.subject === s,
        ),
        label: edexcelLabel,
        section,
      })),
    ).filter((g) => g.courses.length > 0),
  },
  {
    id: "cie",
    slug: "cambridge",
    navLabel: "Cambridge",
    title: "Cambridge International",
    eyebrow: "Cambridge Assessment International Education",
    summary:
      "Primary, Lower Secondary, IGCSE, O Level and AS/A Level courses across English, Mathematics and the Sciences.",
    description:
      "Cambridge International courses mapped to their syllabuses — Primary, Lower Secondary Checkpoint, IGCSE, O Level and International AS & A Level — with exam-style questions and markschemes.",
    groups: [
      {
        heading: "Primary",
        courses: CIE_COURSES.filter((c) => c.cie?.qualification === "primary"),
        label: (c: Course) => c.shortTitle ?? c.title,
      },
      {
        heading: "Lower Secondary",
        courses: CIE_COURSES.filter(
          (c) => c.cie?.qualification === "lower-secondary",
        ),
        label: (c: Course) => c.shortTitle ?? c.title,
      },
      {
        heading: "IGCSE Sciences",
        courses: CIE_COURSES.filter(
          (c) =>
            c.cie?.qualification === "igcse" &&
            ["biology-0610", "chemistry-0620", "physics-0625"].includes(
              c.cie?.subject ?? "",
            ),
        ),
        label: (c: Course) => c.shortTitle ?? c.title,
      },
      {
        heading: "IGCSE Mathematics",
        courses: CIE_COURSES.filter(
          (c) =>
            c.cie?.qualification === "igcse" &&
            (c.cie?.subject ?? "").includes("mathematics"),
        ),
        label: (c: Course) => c.shortTitle ?? c.title,
      },
      {
        heading: "IGCSE English",
        courses: CIE_COURSES.filter(
          (c) =>
            c.cie?.qualification === "igcse" &&
            (c.cie?.subject ?? "").includes("english"),
        ),
        label: (c: Course) => c.shortTitle ?? c.title,
      },
      {
        heading: "IGCSE Humanities & Social Sciences",
        courses: CIE_COURSES.filter((c) =>
          [
            "business-studies-0450",
            "economics-0455",
            "geography-0460",
            "history-0470",
            "accounting-0452",
            "sociology-0495",
            "psychology-0266",
            "development-studies-0453",
          ].includes(c.cie?.subject ?? ""),
        ),
        label: (c: Course) => c.shortTitle ?? c.title,
      },
      {
        heading: "IGCSE Technology & ICT",
        courses: CIE_COURSES.filter((c) =>
          ["computer-science-0478", "ict-0417"].includes(c.cie?.subject ?? ""),
        ),
        label: (c: Course) => c.shortTitle ?? c.title,
      },
      {
        heading: "IGCSE Global Perspectives",
        courses: CIE_COURSES.filter(
          (c) => c.cie?.subject === "global-perspectives-0457",
        ),
        label: (c: Course) => c.shortTitle ?? c.title,
      },
      {
        heading: "O Level",
        courses: CIE_COURSES.filter((c) => c.cie?.qualification === "o-level"),
        label: (c: Course) => c.shortTitle ?? c.title,
      },
      {
        heading: "AS & A Level",
        courses: CIE_COURSES.filter(
          (c) =>
            c.cie?.qualification === "as-level" ||
            c.cie?.qualification === "a-level",
        ),
        label: (c: Course) => c.shortTitle ?? c.title,
      },
      {
        heading: "Pre-U",
        courses: CIE_COURSES.filter((c) => c.cie?.qualification === "pre-u"),
        label: (c: Course) => c.shortTitle ?? c.title,
      },
    ].filter((g) => g.courses.length > 0),
  },
];

/** Curricula that have at least one course, in display order. */
export const VISIBLE_CURRICULA = CURRICULA.filter((c) =>
  c.groups.some((g) => g.courses.length > 0),
);

export const getCurriculum = (slug: string) =>
  CURRICULA.find((c) => c.slug === slug);

/** The curriculum a course belongs to, for breadcrumbs. */
export const curriculumForCourse = (courseId: string) =>
  CURRICULA.find((cur) =>
    cur.groups.some((g) => g.courses.some((c) => c.id === courseId)),
  );

export const curriculumPath = (c: Curriculum) => `/curricula/${c.slug}`;
