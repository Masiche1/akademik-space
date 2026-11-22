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
            { id: "a", text: "Wiping on clothes" },
            { id: "b", text: "Rinsing in sand" },
            { id: "c", text: "Washing with soap and water" },
            { id: "d", text: "Nothing" },
          ], correctChoiceId: "c" },
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
        {
          id: "cips-u1-bc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do when you cough or sneeze?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cough into the air" },
            { id: "b", text: "Cover your mouth and nose" },
            { id: "c", text: "Nothing" },
            { id: "d", text: "Wipe on your hands only" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Hygiene", statement: "Covering coughs stops germs spreading." }],
            steps: [{ reasoning: "Covering coughs and sneezes stops germs spreading.", marks: 1, markCode: "A" }],
            finalAnswer: "Cover your mouth and nose",
          },
        },
        {
          id: "cips-u1-bc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why do we brush our teeth?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To eat faster" },
            { id: "b", text: "It is not important" },
            { id: "c", text: "To keep them healthy and clean" },
            { id: "d", text: "To make them white only" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Hygiene", statement: "Brushing keeps teeth healthy." }],
            steps: [{ reasoning: "Brushing teeth keeps them healthy and clean.", marks: 1, markCode: "A" }],
            finalAnswer: "To keep them healthy and clean",
          },
        },
        {
          id: "cips-u1-bc-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "About how many hours of sleep do young children need each night?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10, unit: "hours" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Sleep", statement: "Children need about 10–11 hours." }],
            steps: [{ reasoning: "Children need about 10 hours (10–11) of sleep.", marks: 1, markCode: "M" }],
            finalAnswer: "10",
          },
        },
        {
          id: "cips-u1-bc-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A child sleeps 9 hours on Monday and 11 hours on Tuesday. What is the total sleep over the two nights?",
          response: { type: "numeric", parts: [{ label: "a", answer: 20, unit: "hours" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Sleep", statement: "Add hours for total." }],
            steps: [
              { reasoning: "$9 + 11 = 20$.", marks: 1, markCode: "M" },
              { reasoning: "Total sleep = 20 hours.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "cips-u1-bc-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is NOT a healthy food?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Bread" },
            { id: "b", text: "Carrots" },
            { id: "c", text: "An apple" },
            { id: "d", text: "A packet of sweets only" },
          ], dorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Healthy food", statement: "Fruit, vegetables, bread, milk, meat, beans." }],
            steps: [{ reasoning: "Sweets are not healthy food; the others are.", marks: 1, markCode: "A" }],
            finalAnswer: "A packet of sweets only",
          },
        },
        {
          id: "cips-u1-bc-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two things you can do to keep your body clean.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Hygiene", statement: "Keeping clean stays healthy." }],
            steps: [
              { reasoning: "First clean habit (e.g. wash hands, brush teeth).", marks: 1, markCode: "M" },
              { reasoning: "Second clean habit (e.g. have a bath/shower).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. wash hands and brush teeth",
          },
        },
        {
          id: "cips-u1-bc-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why covering your mouth when you sneeze helps keep others healthy.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Germs", statement: "Tiny living things that cause illness." }],
            steps: [
              { reasoning: "A sneeze sprays germs into the air.", marks: 1, markCode: "M" },
              { reasoning: "Covering your mouth stops the germs spreading.", marks: 1, markCode: "M" },
              { reasoning: "This helps stop others getting ill.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stops germs spreading to others",
          },
        },
        {
          id: "cips-u1-bc-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What are germs?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Tiny living things that can make us ill" },
            { id: "b", text: "Types of food" },
            { id: "c", text: "Big animals" },
            { id: "d", text: "Cleaning tools" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Germs", statement: "Tiny living things that can make us ill." }],
            steps: [{ reasoning: "Germs are tiny living things that cause illness.", marks: 1, markCode: "A" }],
            finalAnswer: "Tiny living things that can make us ill",
          },
        },
        {
          id: "cips-u1-bc-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a week, a child exercises 5 days and eats healthy food 6 days. What is the total number of healthy days?",
          response: { type: "numeric", parts: [{ label: "a", answer: 11, unit: "days" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Healthy habits", statement: "Add the healthy days." }],
            steps: [
              { reasoning: "$5 + 6 = 11$.", marks: 1, markCode: "M" },
              { reasoning: "Total healthy days = 11.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11",
          },
        },
        {
          id: "cips-u1-bc-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A friend says 'sleep is wasted time'. Explain why sleep is actually important for a growing child.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sleep", statement: "Bodies grow and repair during sleep." }],
            steps: [
              { reasoning: "During sleep the body grows and repairs itself.", marks: 1, markCode: "M" },
              { reasoning: "It gives energy for the next day's activities.", marks: 1, markCode: "M" },
              { reasoning: "Children especially need about 10–11 hours to grow well.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sleep helps bodies grow, repair and get energy",
          },
        },
        {
          id: "cips-u1-bc-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is an example of exercise?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sitting still" },
            { id: "b", text: "Sleeping" },
            { id: "c", text: "Watching television" },
            { id: "d", text: "Running and playing" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Exercise", statement: "Moving the body keeps it strong." }],
            steps: [{ reasoning: "Running and playing are exercise.", marks: 1, markCode: "A" }],
            finalAnswer: "Running and playing",
          },
        },
        {
          id: "cips-u1-bc-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) What removes germs from hands? (b) Name three healthy foods. (c) Why do children need sleep? (d) How many hours of sleep do young children need? (e) Give two benefits of exercise. (f) How can you exercise safely? (g) Why do we cover coughs and sneezes? (h) What are germs and how do they make us ill?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Healthy habits", statement: "Integrated Stage 1 health answer." }],
            steps: [
              { reasoning: "(a) Soap and water.", marks: 1, markCode: "M" },
              { reasoning: "(b) e.g. fruit, vegetables, bread.", marks: 1, markCode: "M" },
              { reasoning: "(c) Bodies grow and repair during sleep; gives energy.", marks: 1, markCode: "M" },
              { reasoning: "(d) About 10–11 hours.", marks: 1, markCode: "M" },
              { reasoning: "(e) Strengthens muscles/bones; keeps heart healthy.", marks: 1, markCode: "M" },
              { reasoning: "(f) Warm up, sensible shoes, don't overdo it.", marks: 1, markCode: "M" },
              { reasoning: "(g) Stops germs spreading to others.", marks: 1, markCode: "M" },
              { reasoning: "(h) Germs are tiny living things that can cause illness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hand washing, healthy foods, sleep's role, sleep hours, exercise benefits/safety, covering coughs, germs.",
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
