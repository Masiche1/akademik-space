import type { Lesson } from "../../../types.ts";

export const exam15: Lesson = {
  id: "edps6-u1-exam5",
  code: "1-X5",
  title:
    "Exam Practice 5: Living Things: Classification, Food Webs and Survival",
  goal: "I CAN answer living things: classification, food webs and survival exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Living Things: Classification, Food Webs and Survival",
  ],

  vocabulary: [
    {
      term: "Fair test",
      definition: "An investigation where only one variable is changed.",
    },
    {
      term: "Independent variable",
      definition: "The thing you deliberately change in an investigation.",
    },
    {
      term: "Dependent variable",
      definition: "The thing you measure or observe as a result.",
    },
    {
      term: "Conclusion",
      definition: "What the results show, linked back to the question.",
    },
  ],
  concepts: [
    {
      id: "edps6-u1-exam5-concept",
      title:
        "Living Things: Classification, Food Webs and Survival — exam practice",
      skill:
        "Apply living things: classification, food webs and survival techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise living things: classification, food webs and survival in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for living things: classification, food webs and survival.",
          },
        ],
      },
      questions: [
        {
          id: "edps6-u1-x5-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a controlled variable in testing which material insulates best?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same volume of water" },
              { id: "b", text: "Material type" },
              { id: "c", text: "Temperature change" },
              { id: "d", text: "Time" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Working scientifically",
                statement: "Volume stays the same.",
              },
            ],
            steps: [
              { reasoning: "Volume stays the same.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Same volume of water",
          },
        },
        {
          id: "edps6-u1-x5-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a food chain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shows who eats whom in an ecosystem" },
              { id: "b", text: "A list of foods" },
              { id: "c", text: "A type of plant" },
              { id: "d", text: "A cooking method" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Living things",
                statement: "Producer → consumer → predator.",
              },
            ],
            steps: [
              {
                reasoning: "Producer → consumer → predator.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Shows who eats whom in an ecosystem",
          },
        },
        {
          id: "edps6-u1-x5-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How could you separate iron filings from sand?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use a magnet" },
              { id: "b", text: "Filter" },
              { id: "c", text: "Evaporate" },
              { id: "d", text: "Distil" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Materials",
                statement: "Magnet attracts iron.",
              },
            ],
            steps: [
              { reasoning: "Magnet attracts iron.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Use a magnet",
          },
        },
        {
          id: "edps6-u1-x5-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a renewable energy source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "solar" },
              { id: "b", text: "coal" },
              { id: "c", text: "oil" },
              { id: "d", text: "gas" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical processes",
                statement: "Solar is renewable.",
              },
            ],
            steps: [
              { reasoning: "Solar is renewable.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** solar",
          },
        },
        {
          id: "edps6-u1-x5-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is evaporation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Liquid turning into gas" },
              { id: "b", text: "Gas turning into liquid" },
              { id: "c", text: "Solid turning into liquid" },
              { id: "d", text: "Liquid freezing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Earth and space",
                statement: "Evaporation = liquid → gas.",
              },
            ],
            steps: [
              {
                reasoning: "Evaporation = liquid → gas.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Liquid turning into gas",
          },
        },
      ],
    },
  ],
};
