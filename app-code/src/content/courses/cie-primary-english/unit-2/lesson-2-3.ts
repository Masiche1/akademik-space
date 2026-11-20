import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cipe-u2-lesson-2-3",
  code: "2-3",
  title: "Stage 6 — Persuasive and Non-fiction Writing",
  goal: "I CAN write a persuasive paragraph and a simple report.",
  standards: ["Cambridge Primary English 0058 Stage 6: writing",
  "Cambridge Primary English 0058 framework substrands: 6Wc, 6Ws"],
  stage: 6,
  vocabulary: [
    { term: "Persuasive", definition: "Writing that tries to convince the reader." },
    { term: "Argument", definition: "A reason given to support a viewpoint." },
    { term: "Report", definition: "Non-fiction writing that gives information about a topic." },
    { term: "Fact", definition: "Something that is true and can be checked." },
    { term: "Connective", definition: "A word that joins ideas, like however or therefore." },
  ],
  concepts: [
    {
      id: "cipe-u2-s6-persuasive",
      title: "Persuasive writing",
      skill: "Write a persuasive paragraph at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "What is persuasive writing?",
            body: "Persuasive writing tries to convince the reader to agree with you. State your opinion clearly, then give reasons and evidence.",
          },
          {
            heading: "Connectives",
            body: "Use connectives like because, however and therefore to link ideas. 'We should recycle because it helps the planet.'",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write a persuasive sentence about school dinners.",
          solution: "'School dinners should be healthier because they help us concentrate in class.' — opinion + reason.",
        },
      },
      questions: [
        {
          id: "cipe-u2-s6-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of persuasive writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To tell a story" }, { id: "b", text: "To convince the reader" }, { id: "c", text: "To describe a place" }, { id: "d", text: "To list facts" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Persuasive writing", statement: "Writing to convince." }],
            steps: [{ reasoning: "Persuasive writing aims to convince the reader to agree.", marks: 1, markCode: "AO2" }],
            finalAnswer: "To convince",
          },
        },
        {
          id: "cipe-u2-s6-pe-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence gives a reason for an opinion?",
          response: { type: "mcq", choices: [
            { id: "a", text: "I think homework is good." }, { id: "b", text: "Homework is good because it helps us learn." }, { id: "c", text: "Homework is a thing." }, { id: "d", text: "I do homework." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Giving reasons", statement: "Use because, since, as to support opinions." }],
            steps: [{ reasoning: "'because it helps us learn' gives a reason for the opinion.", marks: 1, markCode: "AO2" }],
            finalAnswer: "because it helps us learn",
          },
        },
        {
          id: "cipe-u2-s6-pe-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence giving your opinion about homework and one reason.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Persuasive sentence", statement: "Opinion + reason." }],
            steps: [
              { reasoning: "The sentence states an opinion about homework.", marks: 1, markCode: "AO2" },
              { reasoning: "A reason is given using because/since/as.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Opinion + reason sentence",
          },
        },
        {
          id: "cipe-u2-s6-pe-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a short paragraph (3 sentences) persuading your school to have a longer lunch break.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Persuasive paragraph", statement: "Opinion, reasons, conclusion." }],
            steps: [
              { reasoning: "The paragraph states a clear opinion.", marks: 1, markCode: "AO2" },
              { reasoning: "At least two reasons are given.", marks: 1, markCode: "AO2" },
              { reasoning: "Connectives link ideas smoothly.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "3-sentence persuasive paragraph",
          },
        },
      ],
    },
    {
      id: "cipe-u2-s6-report",
      title: "Writing reports and information texts",
      skill: "Write a simple report with facts and subheadings at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "What is a report?",
            body: "A report gives information about a topic. It uses facts, not opinions. It often has a title, subheadings and paragraphs.",
          },
          {
            heading: "Facts vs opinions",
            body: "Facts can be checked: 'Elephants are the largest land animals.' Opinions cannot: 'Elephants are the best animals.' Reports use facts.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write a subheading for a report about dolphins.",
          solution: "'Where dolphins live' or 'What dolphins eat' — a subheading tells the reader what the paragraph is about.",
        },
      },
      questions: [
        {
          id: "cipe-u2-s6-re-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a fact?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Dogs are the best pets." }, { id: "b", text: "Dogs are mammals." }, { id: "c", text: "Dogs are cute." }, { id: "d", text: "Dogs are fun." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fact", statement: "Something true that can be checked." }],
            steps: [{ reasoning: "'Dogs are mammals' is a fact that can be checked.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Dogs are mammals",
          },
        },
        {
          id: "cipe-u2-s6-re-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the best subheading for a paragraph about where penguins live?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Penguins are nice" }, { id: "b", text: "Where penguins live" }, { id: "c", text: "My favourite bird" }, { id: "d", text: "Penguins and seals" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Subheadings", statement: "Subheadings tell what the paragraph covers." }],
            steps: [{ reasoning: "'Where penguins live' tells the reader the topic of the paragraph.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Where penguins live",
          },
        },
        {
          id: "cipe-u2-s6-re-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a fact about tigers that could go in a report.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Fact writing", statement: "One true, checkable sentence." }],
            steps: [
              { reasoning: "The sentence is about tigers.", marks: 1, markCode: "AO1" },
              { reasoning: "It states a fact, not an opinion.", marks: 1, markCode: "AO1" },
              { reasoning: "Punctuation is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One factual sentence",
          },
        },
        {
          id: "cipe-u2-s6-re-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a short report opening (2-3 sentences) about a topic of your choice.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Report writing", statement: "Title, facts, clear structure." }],
            steps: [
              { reasoning: "The text introduces the topic clearly.", marks: 1, markCode: "AO2" },
              { reasoning: "It uses facts rather than opinions.", marks: 1, markCode: "AO1" },
              { reasoning: "It could include a title or subheading.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Report opening",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-s6-write-notes",
      title: "Stage 6 persuasive and report writing — revision notes",
      summary: "Convincing with reasons, writing factual reports.",
      sections: [
        { heading: "Persuasive", body: "State your opinion, give reasons with because/since/as, and use connectives. End with a call to action or summary." },
        { heading: "Reports", body: "Use facts not opinions. Include a title and subheadings. Organise information into clear paragraphs." },
      ],
    },
  ],
};
