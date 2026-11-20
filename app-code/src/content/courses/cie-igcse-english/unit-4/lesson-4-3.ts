import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ciege-u4-lesson-4-3",
  code: "4-3",
  title: "Directed Writing and Review Writing",
  goal: "I CAN write to a given purpose and audience effectively.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 1: directed writing"],
  vocabulary: [
    { term: "Directed writing", definition: "Writing to a specific purpose and audience." },
    { term: "Audience", definition: "Who will read the writing." },
    { term: "Purpose", definition: "Why the writing exists — to inform, persuade, entertain." },
    { term: "Register", definition: "Level of formality appropriate to audience." },
    { term: "Review", definition: "A piece of writing evaluating a product, event or experience." },
  ],
  concepts: [
    {
      id: "ciege-u4-s3-directed",
      title: "Writing to purpose and audience",
      skill: "Adapt tone and style to the task at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Purpose and audience",
            body: "Before writing, identify: Who is the audience? What is the purpose? A letter to a friend is informal; a letter to a headteacher is formal. Match your language to both.",
          },
          {
            heading: "Adapting register",
            body: "Formal: full sentences, no slang, polite phrasing. Informal: contractions, direct address, personal voice. Always check the task for required format — letter, article, speech, review.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write the opening of a formal letter to the headteacher about a school issue.",
          solution: "'Dear Headteacher, I am writing to express my concern about... I would be grateful if you could... Yours faithfully, [Name]'",
        },
      },
      questions: [
        {
          id: "ciege-u4-s3-di-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you consider first in directed writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The title" }, { id: "b", text: "The audience and purpose" }, { id: "c", text: "The length" }, { id: "d", text: "The spelling" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Directed writing", statement: "Purpose + audience." }],
            steps: [
              { reasoning: "Audience and purpose determine tone and style.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Audience and purpose",
          },
        },
        {
          id: "ciege-u4-s3-di-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the opening line of a formal letter to a school headteacher.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Formal register", statement: "Polite, respectful opening." }],
            steps: [
              { reasoning: "The opening is formal and respectful.", marks: 1, markCode: "AO2" },
              { reasoning: "It could be 'Dear Headteacher' or similar.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. Dear Headteacher,",
          },
        },
        {
          id: "ciege-u4-s3-di-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence asking a headteacher for a meeting about school lunches, using formal language.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Formal request", statement: "Polite, clear request." }],
            steps: [
              { reasoning: "The sentence is polite and formal.", marks: 1, markCode: "AO2" },
              { reasoning: "It clearly states the request.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One formal request",
          },
        },
        {
          id: "ciege-u4-s3-di-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write the opening paragraph of a review of a film you have seen (real or imagined).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Review writing", statement: "Engaging opening + early opinion." }],
            steps: [
              { reasoning: "The opening hooks the reader.", marks: 1, markCode: "AO2" },
              { reasoning: "It gives an early opinion or recommendation.", marks: 1, markCode: "AO2" },
              { reasoning: "It could mention genre or key element.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Review opening paragraph",
          },
        },
      ],
    },
    {
      id: "ciege-u4-s3-review",
      title: "Writing reviews",
      skill: "Write balanced reviews with opinion and evidence.",
      lesson: {
        sections: [
          {
            heading: "What makes a review",
            body: "A review evaluates something — film, book, restaurant, product. It gives an opinion supported by specific examples, and ends with a recommendation.",
          },
          {
            heading: "Structure",
            body: "Opening: what it is + your verdict. Body: specific strengths and weaknesses with examples. Conclusion: who it suits and final recommendation.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write a review sentence for a book.",
          solution: "'The Great Gatsby is a masterpiece of American literature — Fitzgerald's prose is luminous and his portrayal of the Jazz Age is unforgettable.'",
        },
      },
      questions: [
        {
          id: "ciege-u4-s3-re-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a review include?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only facts" }, { id: "b", text: "Opinion with supporting examples" }, { id: "c", text: "A summary only" }, { id: "d", text: "A list of prices" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Review", statement: "Opinion + evidence." }],
            steps: [
              { reasoning: "Reviews give opinion supported by examples.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Opinion with examples",
          },
        },
        {
          id: "ciege-u4-s3-re-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence giving your opinion of a book you have read.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Review opinion", statement: "Clear judgement." }],
            steps: [
              { reasoning: "The sentence gives a clear opinion.", marks: 1, markCode: "AO2" },
              { reasoning: "It could be supported by a reason.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One opinion sentence",
          },
        },
        {
          id: "ciege-u4-s3-re-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence identifying a weakness in a film.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Critical review", statement: "Balanced criticism." }],
            steps: [
              { reasoning: "The sentence identifies a specific weakness.", marks: 1, markCode: "AO2" },
              { reasoning: "It gives a reason or example.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One criticism sentence",
          },
        },
        {
          id: "ciege-u4-s3-re-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a recommendation sentence for a restaurant review.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Recommendation", statement: "Who it suits + verdict." }],
            steps: [
              { reasoning: "The sentence recommends or advises.", marks: 1, markCode: "AO2" },
              { reasoning: "It says who would enjoy it.", marks: 1, markCode: "AO2" },
              { reasoning: "It gives a final verdict.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One recommendation sentence",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u4-s3-directed-notes",
      title: "Directed writing and reviews — revision notes",
      summary: "Purpose, audience, register, review structure.",
      sections: [
        { heading: "Directed", body: "Always identify audience and purpose first. Match register — formal for official, informal for friends." },
        { heading: "Reviews", body: "Opinion + specific examples. Structure: verdict → strengths/weaknesses → recommendation." },
      ],
    },
  ],
};
