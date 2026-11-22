import type { Lesson } from "../../../types.ts";

export const lesson216: Lesson = {
  id: "cipe-u2-lesson-2-16",
  code: "2-16",
  title: "Stage 6 — Advanced Punctuation, Passive Voice and Arguments",
  goal: "I CAN use colons/semicolons/dashes, form passive sentences and write balanced arguments.",
  standards: ["Cambridge Primary English 0058 Stage 6: grammar and writing",
  "Cambridge Primary English 0058 framework substrands: 6Rg, 6Wg, 6Wc, 6SLg"],
  stage: 6,
  vocabulary: [
    { term: "Colon", definition: "Punctuation : introducing a list or explanation." },
    { term: "Semicolon", definition: "Punctuation ; joining two related sentences." },
    { term: "Passive voice", definition: "Subject receives the action: 'The ball was thrown.'" },
    { term: "Active voice", definition: "Subject does the action: 'Sam threw the ball.'" },
    { term: "Balanced argument", definition: "Writing presenting both sides of an issue fairly." },
  ],
  concepts: [
    {
      id: "cipe-u2-s16-advanced-grammar",
      title: "Advanced punctuation, passive voice and arguments",
      skill: "Use advanced punctuation, distinguish active/passive voice and structure balanced arguments at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Advanced punctuation and voice",
            body: "Colons introduce lists or explanations: 'We need three things: eggs, flour and milk.' Semicolons join closely related independent clauses: 'The rain stopped; we went outside.' Dashes add extra information or emphasis. Passive voice makes the receiver the subject: 'The window was broken' (we don't say who). Active voice names the doer: 'Tom broke the window.'",
          },
          {
            heading: "Balanced arguments",
            body: "A balanced argument presents both sides fairly before concluding. Structure: state the issue, give reasons for one side, give reasons for the other, then conclude with your justified view. Use connectives like 'however', 'on the other hand', 'in contrast' to signal the shift between viewpoints.",
          },
        ],
        keyFormulas: [
          { name: "Colon/semicolon", statement: ": introduces list; ; joins related clauses" },
          { name: "Active/passive", statement: "active = doer first; passive = receiver first" },
          { name: "Argument", statement: "issue → side A → side B → justified conclusion" },
        ],
        workedExample: {
          problem: "Convert to passive: 'The chef cooked the meal.'",
          solution: "'The meal was cooked (by the chef).'",
        },
      },
      questions: [
        {
          id: "cipe-u2-ap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which punctuation introduces a list after a clause?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Colon" },
            { id: "b", text: "Semicolon" },
            { id: "c", text: "Comma" },
            { id: "d", text: "Full stop" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Colon", statement: "Introduces lists/explanations." }],
            steps: [{ reasoning: "Colon introduces a list after a complete clause.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Colon",
          },
        },
        {
          id: "cipe-u2-ap-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Change to passive: 'Maria wrote the letter.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Passive voice", statement: "Receiver becomes subject." }],
            steps: [
              { reasoning: "'The letter was written by Maria.'", marks: 1, markCode: "AO2" },
              { reasoning: "Answer stated.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The letter was written (by Maria).",
          },
        },
        {
          id: "cipe-u2-ap-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence using a semicolon correctly.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Semicolon", statement: "Joins two related complete sentences." }],
            steps: [
              { reasoning: "Two complete clauses joined by ;.", marks: 1, markCode: "AO2" },
              { reasoning: "e.g. 'The rain stopped; we went outside.'", marks: 1, markCode: "AO2" },
              { reasoning: "Correct usage.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'The rain stopped; we went outside.'",
          },
        },
        {
          id: "cipe-u2-ap-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "Write a balanced paragraph arguing whether school uniform should be compulsory. Include: one reason for, one reason against, a connective showing contrast, and your justified conclusion. Then identify one passive sentence in your writing.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Balanced argument writing", statement: "Both sides + connectives + conclusion." }],
            steps: [
              { reasoning: "Issue stated clearly.", marks: 1, markCode: "AO2" },
              { reasoning: "Reason for compulsory uniform given.", marks: 1, markCode: "AO2" },
              { reasoning: "Reason against given.", marks: 1, markCode: "AO2" },
              { reasoning: "Contrast connective used (however/on the other hand).", marks: 1, markCode: "AO2" },
              { reasoning: "Conclusion justified with reasoning.", marks: 1, markCode: "AO2" },
              { reasoning: "Passive sentence correctly identified.", marks: 1, markCode: "AO3" },
              { reasoning: "Coherent paragraph structure.", marks: 1, markCode: "AO3" },
              { reasoning: "All requirements met.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'Uniform promotes equality… however, it limits self-expression… therefore, optional uniform with guidelines is best.'",
            levels: [
              { level: "Level 3", marks: "7-8", descriptor: "Both sides fairly presented, connectives used, justified conclusion." },
              { level: "Level 2", marks: "4-6", descriptor: "Both sides present but weak justification or connectives." },
              { level: "Level 1", marks: "1-3", descriptor: "One-sided or disorganised argument." },
            ],
          },
        },
        {
          id: "cipe-u2-ap-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a semicolon join?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Two unrelated sentences" },
            { id: "b", text: "A list only" },
            { id: "c", text: "Two closely related complete sentences" },
            { id: "d", text: "A word and its meaning" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Semicolon", statement: "Joins related independent clauses." }],
            steps: [{ reasoning: "A semicolon joins two complete, related sentences.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Two closely related complete sentences",
          },
        },
        {
          id: "cipe-u2-ap-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Change to passive: 'The dog chased the cat.'",
          response: { type: "mcq", choices: [
            { id: "a", text: "The cat was chased by the dog." },
            { id: "b", text: "The cat chased the dog." },
            { id: "c", text: "The dog chased." },
            { id: "d", text: "The dog was chased by the cat." },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Passive voice", statement: "Receiver becomes subject." }],
            steps: [{ reasoning: "The cat receives the action: 'The cat was chased by the dog.'", marks: 1, markCode: "AO2" }],
            finalAnswer: "The cat was chased by the dog.",
          },
        },
        {
          id: "cipe-u2-ap-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many punctuation marks are named here: colon, semicolon, dash? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Advanced punctuation", statement: "Colon, semicolon, dash." }],
            steps: [
              { reasoning: "Three marks listed.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-ap-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the passive version of 'The teacher praised Sam'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The teacher was praised by Sam." },
            { id: "b", text: "Sam praised the teacher." },
            { id: "c", text: "Sam was praised by the teacher." },
            { id: "d", text: "Sam praises." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Passive voice", statement: "Receiver becomes subject." }],
            steps: [{ reasoning: "Sam receives the praise: 'Sam was praised by the teacher.'", marks: 1, markCode: "AO2" }],
            finalAnswer: "Sam was praised by the teacher.",
          },
        },
        {
          id: "cipe-u2-ap-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Add the missing colon: 'We need three things eggs flour and milk.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Colon", statement: "Introduces a list." }],
            steps: [
              { reasoning: "Colon placed before the list.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 'We need three things: eggs, flour and milk.'", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "We need three things: eggs, flour and milk.",
          },
        },
        {
          id: "cipe-u2-ap-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is ACTIVE voice: 'The window was broken' or 'Tom broke the window'? Write the active one.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Active voice", statement: "Subject does the action." }],
            steps: [
              { reasoning: "'Tom broke the window' names the doer.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: Tom broke the window.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Tom broke the window.",
          },
        },
        {
          id: "cipe-u2-ap-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Join these two sentences with a semicolon: 'The match was cancelled. The pitch was flooded.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Semicolon", statement: "Joins related complete sentences." }],
            steps: [
              { reasoning: "Both clauses are complete and related.", marks: 1, markCode: "AO2" },
              { reasoning: "Joined with a semicolon.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 'The match was cancelled; the pitch was flooded.'", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The match was cancelled; the pitch was flooded.",
          },
        },
        {
          id: "cipe-u2-ap-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many parts does a balanced argument have: issue, side A, side B, conclusion? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Balanced argument", statement: "Issue → both sides → conclusion." }],
            steps: [
              { reasoning: "Four parts listed.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipe-u2-ap-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the main reason to use the passive voice?",
          response: { type: "mcq", choices: [
            { id: "a", text: "When the receiver of the action matters more than who did it" },
            { id: "b", text: "Never use it" },
            { id: "c", text: "To make sentences longer" },
            { id: "d", text: "To hide mistakes" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Passive voice", statement: "Emphasises the receiver." }],
            steps: [{ reasoning: "Passive is useful when the doer is unknown or unimportant.", marks: 1, markCode: "AO3" }],
            finalAnswer: "When the receiver matters more than the doer",
          },
        },
        {
          id: "cipe-u2-ap-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a balanced paragraph (3-4 sentences) arguing 'Should homework be given every day?' Include one reason for and one against.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Balanced argument", statement: "Both sides + connectives + conclusion." }],
            steps: [
              { reasoning: "Issue stated clearly.", marks: 1, markCode: "AO2" },
              { reasoning: "Reason for daily homework given.", marks: 1, markCode: "AO2" },
              { reasoning: "Reason against given.", marks: 1, markCode: "AO2" },
              { reasoning: "Contrast connective and conclusion present.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'Daily homework reinforces learning. However, too much can cause stress. A balanced approach with quality over quantity is best.'",
          },
        },
        {
          id: "cipe-u2-ap-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Convert these to passive voice: 'The wind blew the leaves.' 'The students cleaned the classroom.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Passive voice", statement: "Receiver becomes subject with 'was/were + past participle'." }],
            steps: [
              { reasoning: "'The leaves were blown (by the wind).'", marks: 1, markCode: "AO2" },
              { reasoning: "'The classroom was cleaned (by the students).'", marks: 1, markCode: "AO2" },
              { reasoning: "Correct auxiliary verbs used (were/was).", marks: 1, markCode: "AO2" },
              { reasoning: "Both conversions accurate.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The leaves were blown (by the wind). The classroom was cleaned (by the students).",
          },
        },
        {
          id: "cipe-u2-ap-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write two sentences using advanced punctuation: one with a colon introducing a list, and one with a semicolon joining two clauses.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Advanced punctuation", statement: "Colon lists; semicolon joins clauses." }],
            steps: [
              { reasoning: "A colon sentence is written correctly.", marks: 1, markCode: "AO2" },
              { reasoning: "A semicolon sentence joins two complete clauses.", marks: 1, markCode: "AO2" },
              { reasoning: "Both used appropriately, not just inserted.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation otherwise accurate.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'Bring three things: a pen, paper and ruler. The bell rang; everyone went quiet.'",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-ap-notes",
      title: "Advanced grammar — notes",
      summary: "Colon lists, semicolon joins clauses; passive = receiver first; arguments need both sides.",
      sections: [
        { heading: "Punctuation/voice", body: "Use colons for lists; semicolons for related clauses; passive emphasises receiver." },
        { heading: "Arguments", body: "Present both sides fairly, then conclude with justification." },
      ],
    },
  ],
};
