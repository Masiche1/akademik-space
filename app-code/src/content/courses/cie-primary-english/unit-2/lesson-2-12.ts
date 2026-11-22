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
            { id: "a", text: "runing" },
            { id: "b", text: "running" },
            { id: "c", text: "runingg" },
            { id: "d", text: "runnning" },
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
        {
          id: "cipe-u2-sr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct spelling?",
          response: { type: "mcq", choices: [
            { id: "a", text: "stoppt" },
            { id: "b", text: "stopt" },
            { id: "c", text: "stopped" },
            { id: "d", text: "stoped" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Doubling rule", statement: "Double consonant after short vowel before -ed." }],
            steps: [{ reasoning: "stop → stopped (double p).", marks: 1, markCode: "AO1" }],
            finalAnswer: "stopped",
          },
        },
        {
          id: "cipe-u2-sr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct spelling?",
          response: { type: "mcq", choices: [
            { id: "a", text: "hooping" },
            { id: "b", text: "hopping" },
            { id: "c", text: "hoppin" },
            { id: "d", text: "hoping" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Drop e rule", statement: "Drop silent e before vowel suffix." }],
            steps: [{ reasoning: "hope → hoping (drop e).", marks: 1, markCode: "AO1" }],
            finalAnswer: "hoping",
          },
        },
        {
          id: "cipe-u2-sr-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many spelling rules are named in this list: doubling consonant, drop e, y→i? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Spelling rules", statement: "Key suffix patterns." }],
            steps: [
              { reasoning: "Three rules listed.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-sr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose the correct homophone: '___ happy to see you.' (Your/You're)",
          response: { type: "mcq", choices: [
            { id: "a", text: "Yore's" },
            { id: "b", text: "Your" },
            { id: "c", text: "Yore" },
            { id: "d", text: "You're" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Homophones", statement: "You're = you are." }],
            steps: [{ reasoning: "The sentence means 'you are happy' → you're.", marks: 1, markCode: "AO2" }],
            finalAnswer: "You're",
          },
        },
        {
          id: "cipe-u2-sr-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many errors are in this sentence: 'their going to the park and its fun'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Homophones", statement: "their/there/they're, its/it's." }],
            steps: [
              { reasoning: "'their' → 'they're' (they are); 'its' → 'it's' (it is) = 2 errors.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipe-u2-sr-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Spell the word correctly: the comparative of 'happy'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "y→i rule", statement: "Change y to i before suffix." }],
            steps: [
              { reasoning: "happy → happier (y becomes i).", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: happier.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "happier",
          },
        },
        {
          id: "cipe-u2-sr-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite formally: 'Gimme the report, it's due tomorrow, no excuses.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Formal register", statement: "Full forms, precise vocabulary." }],
            steps: [
              { reasoning: "Informal words replaced ('Gimme' → 'Please give me').", marks: 1, markCode: "AO2" },
              { reasoning: "Full form 'it is' or rephrased formally.", marks: 1, markCode: "AO2" },
              { reasoning: "Polite, impersonal phrasing used.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'Please submit the report by tomorrow; late submissions will not be accepted.'",
          },
        },
        {
          id: "cipe-u2-sr-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Proofread: 'We was going to the librery but it was closed.' Correct all errors.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Proofreading", statement: "Agreement and spelling." }],
            steps: [
              { reasoning: "'was' → 'were' (plural 'we').", marks: 1, markCode: "AO1" },
              { reasoning: "'librery' → 'library'.", marks: 1, markCode: "AO1" },
              { reasoning: "'We were going to the library but it was closed.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "We were going to the library but it was closed.",
          },
        },
        {
          id: "cipe-u2-sr-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do writers read their work aloud when proofreading?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To make it shorter" },
            { id: "b", text: "Because it is fun" },
            { id: "c", text: "Because errors are easier to hear than to see" },
            { id: "d", text: "To check the spelling of numbers" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Proofreading", statement: "Read aloud to catch errors." }],
            steps: [{ reasoning: "Awkward or wrong words sound wrong when spoken.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Errors are easier to hear",
          },
        },
        {
          id: "cipe-u2-sr-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How many spelling errors are in this list: 'freind', 'wierd', 'recieve'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Spelling", statement: "Common misspellings." }],
            steps: [
              { reasoning: "friend, weird, receive are all misspelt = 3.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-sr-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Edit this informal sentence into formal register: 'Hey, can you totally help me with this dumb essay?'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Formal register", statement: "Polite, precise, full forms." }],
            steps: [
              { reasoning: "Greeting replaced with polite form.", marks: 1, markCode: "AO2" },
              { reasoning: "Informal words ('totally', 'dumb') removed.", marks: 1, markCode: "AO2" },
              { reasoning: "Request phrased politely ('Would you please help me with this essay?').", marks: 1, markCode: "AO2" },
              { reasoning: "Full forms and precise vocabulary used.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'Could you please help me with this essay?'",
          },
        },
        {
          id: "cipe-u2-sr-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Spell all the -ing forms correctly in this sentence and rewrite it: 'The children was runing and jump__ing in the garden.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Spelling rules", statement: "Double consonant before -ing." }],
            steps: [
              { reasoning: "runing → running (double n).", marks: 1, markCode: "AO1" },
              { reasoning: "jumping stays single p (long vowel sound).", marks: 1, markCode: "AO1" },
              { reasoning: "'was' → 'were' (plural children).", marks: 1, markCode: "AO1" },
              { reasoning: "'The children were running and jumping in the garden.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The children were running and jumping in the garden.",
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
