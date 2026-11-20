import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "cips-u1-lesson-1-5",
  code: "1-5",
  title: "Stage 1 — Looking after Our Bodies",
  goal: "I CAN describe healthy habits for our bodies.",
  standards: ["Cambridge Primary Science 0097 Stage 1: humans and healthy living",
  "Cambridge Primary Science 0097 framework substrands: 1Bp"],
  stage: 1,
  vocabulary: [
    { term: "Hygiene", definition: "Keeping clean to stay healthy." },
    { term: "Healthy food", definition: "Food that helps our bodies grow and stay strong." },
    { term: "Exercise", definition: "Moving our bodies to keep them strong." },
    { term: "Sleep", definition: "Resting our bodies and minds at night." },
    { term: "Germs", definition: "Tiny living things that can make us ill." },
  ],
  concepts: [
    {
      id: "cips-u1-s5-bodycare",
      title: "Healthy habits",
      skill: "Identify daily habits that keep the human body healthy at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Staying clean",
            body: "Washing hands with soap removes germs that cause illness. Brushing teeth keeps them healthy, and having regular baths or showers keeps skin clean. Covering coughs and sneezes stops germs spreading to others.",
          },
          {
            heading: "Food, exercise and sleep",
            body: "Healthy bodies need healthy food (fruit, vegetables, bread, milk, meat or beans), regular exercise like running and playing, and enough sleep — young children need about 10–11 hours each night so their bodies can grow and repair.",
          },
        ],
        keyFormulas: [
          { name: "Healthy body", statement: "Clean + healthy food + exercise + sleep" },
        ],
        workedExample: {
          problem: "Why do we wash our hands before eating?",
          solution: "Washing hands removes germs that could make us ill when we eat.",
        },
      },
      questions: [
        {
          id: "cips-u1-bc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What removes germs from our hands?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Washing with soap and water" }, { id: "b", text: "Wiping on clothes" }, { id: "c", text: "Rinsing in sand" }, { id: "d", text: "Nothing" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Hygiene", statement: "Soap and water remove germs." }],
            steps: [{ reasoning: "Soap and water wash germs away.", marks: 1, markCode: "A" }],
            finalAnswer: "Washing with soap and water",
          },
        },
        {
          id: "cips-u1-bc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two healthy foods.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Healthy food", statement: "Food that helps bodies grow." }],
            steps: [
              { reasoning: "Any two of fruit, vegetables, bread, milk, meat, beans.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. fruit and vegetables",
          },
        },
        {
          id: "cips-u1-bc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do children need sleep?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sleep", statement: "Bodies grow and repair during sleep." }],
            steps: [
              { reasoning: "Sleep lets bodies grow and repair.", marks: 1, markCode: "M" },
              { reasoning: "It also gives energy for the next day.", marks: 1, markCode: "M" },
              { reasoning: "Answer complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bodies grow and repair during sleep",
          },
        },
        {
          id: "cips-u1-bc-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give two ways exercise helps the body and one way it can be done safely.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Exercise", statement: "Movement that keeps bodies strong." }],
            steps: [
              { reasoning: "Two benefits: strengthens muscles/bones, keeps heart healthy.", marks: 1, markCode: "M" },
              { reasoning: "Second benefit stated.", marks: 1, markCode: "M" },
              { reasoning: "Safe way: warm up, wear sensible shoes, don't overdo it.", marks: 1, markCode: "M" },
              { reasoning: "Answer complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. strong muscles + healthy heart; warm up first",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u1-bc-notes",
      title: "Looking after our bodies — revision notes",
      summary: "Wash hands, eat healthy food, exercise, sleep 10–11 hours.",
      sections: [
        { heading: "Clean", body: "Soap and water remove germs; brush teeth; cover coughs." },
        { heading: "Healthy", body: "Good food, exercise and sleep keep bodies growing strong." },
      ],
    },
  ],
};
