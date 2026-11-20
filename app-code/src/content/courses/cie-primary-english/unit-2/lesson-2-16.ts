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
            { id: "a", text: "Semicolon" }, { id: "b", text: "Colon" }, { id: "c", text: "Comma" }, { id: "d", text: "Full stop" },
          ], correctChoiceId: "b" },
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
