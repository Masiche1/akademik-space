import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "edpm3-u6-lesson-6-2",
  code: "6.2",
  title: "Perimeter, Area and Time",
  goal: "I can perimeter, Area and Time with confidence.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Fractions, Measure and Problem Solving",
  ],
  vocabulary: [
    {
      term: "Place value",
      definition: "The value of a digit depends on its position in the number.",
    },
    {
      term: "Inverse operation",
      definition:
        "The operation that undoes another, e.g. subtraction undoes addition.",
    },
    {
      term: "Factor",
      definition: "A number that divides exactly into another number.",
    },
    {
      term: "Multiple",
      definition: "The result of multiplying a number by an integer.",
    },
  ],
  concepts: [
    {
      id: "edpm3-u6-lesson-6-2-c1",
      title: "Perimeter, Area and Time — part 1",
      skill: "Apply perimeter, area and time skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore perimeter, area and time as part of fractions, measure and problem solving. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
          },
          {
            heading: "How to succeed",
            body: "Read each question carefully. For maths, show your working and give exact answers. For English, write in full sentences with accurate punctuation. For science and other subjects, use key vocabulary and explain your ideas clearly.",
          },
        ],
        keyFormulas: [
          {
            name: "Key idea",
            statement:
              "Apply the main methods and facts for perimeter, area and time.",
          },
        ],
      },
      questions: [
        {
          id: "edpm3-u6-l2c1q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 126 + 28.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 154 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Addition",
                statement: "Column method with carrying/borrowing.",
              },
            ],
            steps: [
              {
                reasoning: "Add, carrying where needed.",
                working: "154",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "154",
          },
        },
        {
          id: "edpm3-u6-l2c1q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 9 × 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 63 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Multiplication",
                statement: "Inverse operations.",
              },
            ],
            steps: [
              {
                reasoning: "Use the times-table fact.",
                working: "63",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "63",
          },
        },
        {
          id: "edpm3-u6-l2c1q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 2/4 as an equivalent fraction with denominator 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equivalent fractions",
                statement: "Multiply top and bottom by the same number.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply numerator and denominator by 2.",
                working: "4/8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4/8",
          },
        },
        {
          id: "edpm3-u6-l2c1q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 3 m 9 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 309, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Metric conversion",
                statement: "1 m = 100 cm = 1000 mm.",
              },
            ],
            steps: [
              {
                reasoning: "1 m = 100 cm.",
                working: "309",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "309 cm",
          },
        },
        {
          id: "edpm3-u6-l2c1q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A octagon has sides of length 8 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 64, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Perimeter",
                statement: "Total distance around the edge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add all the side lengths (or multiply side length by number of sides).",
                working: "8×8=64",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "64 cm",
          },
        },
      ],
    },
    {
      id: "edpm3-u6-lesson-6-2-c2",
      title: "Perimeter, Area and Time — part 2",
      skill: "Apply perimeter, area and time skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore perimeter, area and time as part of fractions, measure and problem solving. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
          },
          {
            heading: "How to succeed",
            body: "Read each question carefully. For maths, show your working and give exact answers. For English, write in full sentences with accurate punctuation. For science and other subjects, use key vocabulary and explain your ideas clearly.",
          },
        ],
        keyFormulas: [
          {
            name: "Key idea",
            statement:
              "Apply the main methods and facts for perimeter, area and time.",
          },
        ],
      },
      questions: [
        {
          id: "edpm3-u6-l2c2q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 16 ÷ 4.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Division",
                statement: "Inverse operations.",
              },
            ],
            steps: [
              {
                reasoning: "Think of the times-table fact.",
                working: "4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "edpm3-u6-l2c2q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 1/4 as an equivalent fraction with denominator 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equivalent fractions",
                statement: "Multiply top and bottom by the same number.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply numerator and denominator by 2.",
                working: "2/8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2/8",
          },
        },
        {
          id: "edpm3-u6-l2c2q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ribbon is 9 m 4 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 904, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Metric conversion",
                statement: "1 m = 100 cm = 1000 mm.",
              },
            ],
            steps: [
              {
                reasoning: "1 m = 100 cm.",
                working: "904",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "904 cm",
          },
        },
        {
          id: "edpm3-u6-l2c2q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A triangle has sides of length 7 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 21, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Perimeter",
                statement: "Total distance around the edge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add all the side lengths (or multiply side length by number of sides).",
                working: "7×3=21",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "21 cm",
          },
        },
        {
          id: "edpm3-u6-l2c2q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does 'filter' do to data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shows only matching items" },
              { id: "b", text: "Deletes all data" },
              { id: "c", text: "Sorts alphabetically" },
              { id: "d", text: "Prints data" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data",
                statement: "Filter = select subset.",
              },
            ],
            steps: [
              { reasoning: "Filter = select subset.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Shows only matching items",
          },
        },
      ],
    },
  ],
};
