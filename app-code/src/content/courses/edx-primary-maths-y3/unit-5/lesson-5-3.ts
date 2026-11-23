import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "edpm3-u5-lesson-5-3",
  code: "5.3",
  title: "Formal Addition and Subtraction Methods",
  goal: "I can formal Addition and Subtraction Methods with confidence.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Times Tables and Written Methods",
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
      id: "edpm3-u5-lesson-5-3-c1",
      title: "Formal Addition and Subtraction Methods — part 1",
      skill:
        "Apply formal addition and subtraction methods skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore formal addition and subtraction methods as part of times tables and written methods. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for formal addition and subtraction methods.",
          },
        ],
      },
      questions: [
        {
          id: "edpm3-u5-l3c1q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 119 − 98.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 21 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Subtraction",
                statement: "Column method with carrying/borrowing.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract, borrowing where needed.",
                working: "21",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "21",
          },
        },
        {
          id: "edpm3-u5-l3c1q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 48 ÷ 12.",
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
          id: "edpm3-u5-l3c1q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 1/5 as an equivalent fraction with denominator 10.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.2 }],
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
                working: "2/10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2/10",
          },
        },
        {
          id: "edpm3-u5-l3c1q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ribbon is 15 m 2 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1502, unit: "cm" }],
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
                working: "1502",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1502 cm",
          },
        },
        {
          id: "edpm3-u5-l3c1q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A octagon has sides of length 4 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 32, unit: "cm" }],
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
                working: "4×8=32",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "32 cm",
          },
        },
      ],
    },
    {
      id: "edpm3-u5-lesson-5-3-c2",
      title: "Formal Addition and Subtraction Methods — part 2",
      skill:
        "Apply formal addition and subtraction methods skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore formal addition and subtraction methods as part of times tables and written methods. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for formal addition and subtraction methods.",
          },
        ],
      },
      questions: [
        {
          id: "edpm3-u5-l3c2q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 27 ÷ 9.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
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
                working: "3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "edpm3-u5-l3c2q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 1/8 as an equivalent fraction with denominator 16.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.125 }],
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
                working: "2/16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2/16",
          },
        },
        {
          id: "edpm3-u5-l3c2q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 2 m 0 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 200, unit: "cm" }],
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
                working: "200",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "200 cm",
          },
        },
        {
          id: "edpm3-u5-l3c2q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A rectangle has sides of length 5 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 20, unit: "cm" }],
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
                working: "5×4=20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20 cm",
          },
        },
        {
          id: "edpm3-u5-l3c2q5",
          difficulty: "foundation",
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
