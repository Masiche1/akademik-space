import type { Lesson } from "../../../types.ts";

export const lesson212: Lesson = {
  id: "cipe-u2-lesson-2-12",
  code: "2-12",
  title: "Stage 6 — Spelling Rules, Formal Writing and Review",
  goal: "I CAN apply spelling rules and write/review formal texts.",
  standards: ["Cambridge Primary English 0058 Stage 6: spelling and writing",
  "Cambridge Primary English 0058 framework substrands: 6Ww, 6Wp"],
  stage: 6,
  vocabulary: [
    { term: "Spelling rule", definition: "Pattern that helps spell words: double consonant, drop e, y→i." },
    { term: "Formal register", definition: "Polite, official language for formal writing." },
    { term: "Proofread", definition: "Check writing for errors before finishing." },
    { term: "Edit", definition: "Improve word choice and sentence structure." },
    { term: "Homophone", definition: "Words sounding alike but spelled differently: there/their/they're." },
  ],
  concepts: [
    {
      id: "cipe-u2-s12-spelling-review",
      title: "Spelling rules, formal writing and reviewing",
      skill: "Apply spelling rules, maintain formal register and proofread at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Spelling rules",
            body: "Key patterns: double the final consonant before -ing/-ed for short vowel words (run→running, stop→stopped); drop silent e before vowel suffix (hope→hoping, but hope→hoped keeps e before consonant); change y to i before suffixes (happy→happier, cry→cried). Learn homophones by heart: their/there/they're, to/too/two, your/you're.",
          },
          {
            heading: "Formal writing and review",
            body: "Formal texts use full forms (do not, not don't), precise vocabulary, impersonal tone ('It is recommended' not 'I think'). After drafting, proofread for spelling, punctuation and grammar; then edit to improve sentence variety and word choice. Read work aloud — errors are easier to hear.",
          },
        ],
        keyFormulas: [
          { name: "Spelling rules", statement: "run→running; hope→hoping; happy→happier" },
          { name: "Formal tone", statement: "Full forms, precise words, impersonal" },
        ],
        workedExample: {
          problem: "Spell correctly: 'The dog was stop___ at the shop and the children were run___.'",
          solution: "stopped (double p before -ed); running (double n before -ing).",
        },
      },
      questions: [
        {
          id: "cipe-u2-sr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct spelling?",
          response: { type: "mcq", choices: [
            { id: "a", text: "runing" }, { id: "b", text: "running" }, { id: "c", text: "runnning" }, { id: "d", text: "runingg" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Doubling rule", statement: "Double consonant after short vowel before -ing." }],
            steps: [{ reasoning: "run → running (double n).", marks: 1, markCode: "AO1" }],
            finalAnswer: "running",
          },
        },
        {
          id: "cipe-u2-sr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Choose the correct homophone: '___ going to the park.' (Their/There/They're)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Homophones", statement: "They're = they are." }],
            steps: [
              { reasoning: "Sentence needs 'they are' → they're.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: They're.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "They're",
          },
        },
        {
          id: "cipe-u2-sr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite formally: 'I think we should totally ban phones at school, it's dumb.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Formal register", statement: "Full forms, precise vocabulary, impersonal." }],
            steps: [
              { reasoning: "Remove informal words (totally, dumb).", marks: 1, markCode: "AO2" },
              { reasoning: "Use full forms and formal phrasing.", marks: 1, markCode: "AO2" },
              { reasoning: "e.g. 'It is recommended that mobile phones be prohibited…'", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'It is recommended that the use of mobile phones be prohibited in school.'",
          },
        },
        {
          id: "cipe-u2-sr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "Proofread and improve this sentence: 'the childrens toys was on the stair and it was allways messy'. List every error you find (spelling, grammar, punctuation) and give the corrected version.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Proofreading", statement: "Identify all error types and correct." }],
            steps: [
              { reasoning: "'childrens' → 'children's' (possessive apostrophe).", marks: 1, markCode: "AO2" },
              { reasoning: "'was' → 'were' (plural subject agreement).", marks: 1, markCode: "AO2" },
              { reasoning: "'on the stair' → 'on the stairs' (plural).", marks: 1, markCode: "AO2" },
              { reasoning: "'allways' → 'always' (spelling).", marks: 1, markCode: "AO2" },
              { reasoning: "Capital letter at start; full stop at end.", marks: 1, markCode: "AO2" },
              { reasoning: "Corrected: 'The children's toys were on the stairs, and it was always messy.'", marks: 1, markCode: "AO2" },
              { reasoning: "All error types identified and explained.", marks: 1, markCode: "AO3" },
              { reasoning: "Complete corrected sentence coherent.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "'The children's toys were on the stairs, and it was always messy.'",
            levels: [
              { level: "Level 3", marks: "7-8", descriptor: "All errors found and corrected with types explained." },
              { level: "Level 2", marks: "4-6", descriptor: "Most errors found; some unexplained." },
              { level: "Level 1", marks: "1-3", descriptor: "Few errors found; limited correction." },
            ],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-sr-notes",
      title: "Spelling and review — revision notes",
      summary: "Double consonant, drop e, y→i; homophones; formal = full forms + precise words.",
      sections: [
        { heading: "Spelling", body: "running/stopped (double); hoping/hoped (drop e); happier/cried (y→i)." },
        { heading: "Review", body: "Proofread spelling→punctuation→grammar; read aloud to catch errors." },
      ],
    },
  ],
};
