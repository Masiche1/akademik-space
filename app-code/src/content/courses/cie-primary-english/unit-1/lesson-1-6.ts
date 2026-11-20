import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "cipe-u1-lesson-1-6",
  code: "1-6",
  title: "Stage 1 — Speaking, Listening and First Writing",
  goal: "I CAN listen, speak in sentences and write my first words.",
  standards: ["Cambridge Primary English 0058 Stage 1: speaking, listening and writing",
  "Cambridge Primary English 0058 framework substrands: 1SLm, 1SLs, 1SLg, 1SLp, 1Wc, 1SLr"],
  stage: 1,
  vocabulary: [
    { term: "Listen", definition: "Pay attention to sounds and words others make." },
    { term: "Sentence", definition: "A group of words that makes sense, like 'I like cats.'" },
    { term: "Label", definition: "A word that names a picture." },
    { term: "Rhyme", definition: "Words that end with the same sound, like cat and hat." },
    { term: "Take turns", definition: "Speak one at a time and let others have their turn." },
  ],
  concepts: [
    {
      id: "cipe-u1-s6-speaking-writing",
      title: "Speaking, listening and first writing",
      skill: "Use sentences when speaking, follow instructions and label pictures at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Speaking and listening",
            body: "Good listeners look at the speaker, wait for their turn and follow instructions. When you speak, use a whole sentence — 'I want the red one, please' is better than just 'red'. Rhyming games and songs build sound awareness that helps reading later.",
          },
          {
            heading: "First writing",
            body: "Stage 1 writers copy letters, write their own name and label pictures with words. Every sentence starts with a capital letter and ends with a full stop. Writing about things you can see and touch first makes it easier.",
          },
        ],
        keyFormulas: [
          { name: "Sentence", statement: "Capital start + words that make sense + full stop" },
          { name: "Label", statement: "Name the thing in the picture" },
        ],
        workedExample: {
          problem: "Write a label for a picture of a dog.",
          solution: "'Dog' — or a full sentence: 'This is a dog.' with capital and full stop.",
        },
      },
      questions: [
        {
          id: "cipe-u1-sw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a full sentence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The dog ran." }, { id: "b", text: "dog" }, { id: "c", text: "running fast" }, { id: "d", text: "and the" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sentence", statement: "Words that make complete sense together." }],
            steps: [{ reasoning: "'The dog ran.' makes complete sense.", marks: 1, markCode: "AO1" }],
            finalAnswer: "The dog ran.",
          },
        },
        {
          id: "cipe-u1-sw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which word rhymes with 'cat'?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rhyme", statement: "Words ending with the same sound." }],
            steps: [
              { reasoning: "'hat', 'bat', 'mat' end with the same sound as cat.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: e.g. hat.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "hat / bat / mat",
          },
        },
        {
          id: "cipe-u1-sw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a label for a picture of a sun.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Label writing", statement: "Name the picture with correct letters." }],
            steps: [
              { reasoning: "Identify the picture: a sun.", marks: 1, markCode: "AO2" },
              { reasoning: "Write the word 'sun' with a capital S.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 'Sun' or 'This is the sun.'", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Sun",
          },
        },
        {
          id: "cipe-u1-sw-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "What should you do when someone else is talking?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Taking turns", statement: "Listen while others speak." }],
            steps: [
              { reasoning: "Look at the speaker.", marks: 1, markCode: "AO2" },
              { reasoning: "Wait quietly for your turn.", marks: 1, markCode: "AO2" },
              { reasoning: "Not interrupt or talk over them.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer complete.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Look, listen quietly, wait for your turn",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u1-sw-notes",
      title: "Speaking and first writing — revision notes",
      summary: "Listen with eyes on speaker; whole sentences; capital + full stop.",
      sections: [
        { heading: "Speaking", body: "Use full sentences; take turns; rhyming games help reading." },
        { heading: "Writing", body: "Copy letters, write your name, label pictures — always punctuate." },
      ],
    },
  ],
};
