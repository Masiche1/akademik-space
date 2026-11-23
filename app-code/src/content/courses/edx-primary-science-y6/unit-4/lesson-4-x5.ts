import type { Lesson } from "../../../types.ts";

export const exam45: Lesson = {
  id: "edps6-u4-exam5",
  code: "4-X5",
  title: "Exam Practice 5: Advanced Scientific Enquiry",
  goal: "I CAN answer advanced scientific enquiry exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Advanced Scientific Enquiry",
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
      id: "edps6-u4-exam5-concept",
      title: "Advanced Scientific Enquiry — exam practice",
      skill:
        "Apply advanced scientific enquiry techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise advanced scientific enquiry in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for advanced scientific enquiry.",
          },
        ],
      },
      questions: [
        {
          id: "edps6-u4-x5-q1",
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
          id: "edps6-u4-x5-q2",
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
          id: "edps6-u4-x5-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is rusting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iron reacting with oxygen and water" },
              { id: "b", text: "Iron melting" },
              { id: "c", text: "Iron dissolving" },
              { id: "d", text: "Iron freezing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Materials",
                statement: "Rust needs oxygen + water.",
              },
            ],
            steps: [
              {
                reasoning: "Rust needs oxygen + water.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Iron reacting with oxygen and water",
          },
        },
        {
          id: "edps6-u4-x5-q4",
          difficulty: "foundation",
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
          id: "edps6-u4-x5-q5",
          difficulty: "core",
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
      ],
    },
  ],
};
