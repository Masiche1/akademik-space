import type { Lesson } from "../../../types.ts";

export const exam15: Lesson = {
  id: "edps5-u1-exam5",
  code: "1-X5",
  title:
    "Exam Practice 5: Living Things: Food Chains, Life Cycles and Evolution",
  goal: "I CAN answer living things: food chains, life cycles and evolution exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Living Things: Food Chains, Life Cycles and Evolution",
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
      id: "edps5-u1-exam5-concept",
      title:
        "Living Things: Food Chains, Life Cycles and Evolution — exam practice",
      skill:
        "Apply living things: food chains, life cycles and evolution techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise living things: food chains, life cycles and evolution in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for living things: food chains, life cycles and evolution.",
          },
        ],
      },
      questions: [
        {
          id: "edps5-u1-x5-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why repeat a measurement three times?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To check reliability and find anomalies" },
              { id: "b", text: "To waste time" },
              { id: "c", text: "To confuse results" },
              { id: "d", text: "Once is always enough" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Working scientifically",
                statement: "Repeats improve reliability.",
              },
            ],
            steps: [
              {
                reasoning: "Repeats improve reliability.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** To check reliability and find anomalies",
          },
        },
        {
          id: "edps5-u1-x5-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why are decomposers important?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They recycle nutrients back to the soil" },
              { id: "b", text: "They eat everything" },
              { id: "c", text: "They make food" },
              { id: "d", text: "They pollinate plants" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Living things",
                statement: "Decomposers return nutrients.",
              },
            ],
            steps: [
              {
                reasoning: "Decomposers return nutrients.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** They recycle nutrients back to the soil",
          },
        },
        {
          id: "edps5-u1-x5-q3",
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
          id: "edps5-u1-x5-q4",
          difficulty: "challenge",
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
          id: "edps5-u1-x5-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes the seasons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Earth's tilted axis orbiting the Sun" },
              { id: "b", text: "Distance from Sun only" },
              { id: "c", text: "The Moon's phases" },
              { id: "d", text: "Ocean currents" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Earth and space",
                statement: "Tilted axis → uneven heating.",
              },
            ],
            steps: [
              {
                reasoning: "Tilted axis → uneven heating.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Earth's tilted axis orbiting the Sun",
          },
        },
        {
          id: "edps5-u1-x5-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why repeat a measurement three times?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To check reliability and find anomalies" },
              { id: "b", text: "To waste time" },
              { id: "c", text: "To confuse results" },
              { id: "d", text: "Once is always enough" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Working scientifically",
                statement: "Repeats improve reliability.",
              },
            ],
            steps: [
              {
                reasoning: "Repeats improve reliability.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** To check reliability and find anomalies",
          },
        },
        {
          id: "edps5-u1-x5-q7",
          difficulty: "challenge",
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
      ],
    },
  ],
};
