import type { Lesson } from "../../../types.ts";

export const exam25: Lesson = {
  id: "edps6-u2-exam5",
  code: "2-X5",
  title: "Exam Practice 5: The Human Body: Nutrition, Systems and Reproduction",
  goal: "I CAN answer the human body: nutrition, systems and reproduction exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: The Human Body: Nutrition, Systems and Reproduction",
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
      id: "edps6-u2-exam5-concept",
      title:
        "The Human Body: Nutrition, Systems and Reproduction — exam practice",
      skill:
        "Apply the human body: nutrition, systems and reproduction techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise the human body: nutrition, systems and reproduction in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for the human body: nutrition, systems and reproduction.",
          },
        ],
      },
      questions: [
        {
          id: "edps6-u2-x5-q1",
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
          id: "edps6-u2-x5-q2",
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
          id: "edps6-u2-x5-q3",
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
          id: "edps6-u2-x5-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a series circuit, what happens to current if one bulb breaks?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All bulbs go out" },
              { id: "b", text: "Other bulbs stay on" },
              { id: "c", text: "Bulbs get brighter" },
              { id: "d", text: "Nothing changes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical processes",
                statement: "Series = one path.",
              },
            ],
            steps: [
              { reasoning: "Series = one path.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** All bulbs go out",
          },
        },
        {
          id: "edps6-u2-x5-q5",
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
      ],
    },
  ],
};
