import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "edpm4-u5-lesson-5-1",
  code: "5.1",
  title: "Factors, Multiples and Prime Numbers",
  goal: "I can factors, Multiples and Prime Numbers with confidence.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Number, Factors and Multiples",
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
      id: "edpm4-u5-lesson-5-1-c1",
      title: "Factors, Multiples and Prime Numbers — part 1",
      skill: "Apply factors, multiples and prime numbers skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore factors, multiples and prime numbers as part of number, factors and multiples. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for factors, multiples and prime numbers.",
          },
        ],
      },
      questions: [
        {
          id: "edpm4-u5-l1c1q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 118 + 58.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 176 }],
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
                working: "176",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "176",
          },
        },
        {
          id: "edpm4-u5-l1c1q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 90 ÷ 9.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 10 }],
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
                working: "10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "edpm4-u5-l1c1q3",
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
          id: "edpm4-u5-l1c1q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A ribbon is 10 m 1 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1001, unit: "cm" }],
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
                working: "1001",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1001 cm",
          },
        },
        {
          id: "edpm4-u5-l1c1q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pentagon has sides of length 12 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 60, unit: "cm" }],
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
                working: "12×5=60",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "60 cm",
          },
        },
      ],
    },
    {
      id: "edpm4-u5-lesson-5-1-c2",
      title: "Factors, Multiples and Prime Numbers — part 2",
      skill: "Apply factors, multiples and prime numbers skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore factors, multiples and prime numbers as part of number, factors and multiples. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for factors, multiples and prime numbers.",
          },
        ],
      },
      questions: [
        {
          id: "edpm4-u5-l1c2q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 12 × 6.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 72 }],
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
                working: "72",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "72",
          },
        },
        {
          id: "edpm4-u5-l1c2q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 3/8 as an equivalent fraction with denominator 16.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.375 }],
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
                working: "6/16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6/16",
          },
        },
        {
          id: "edpm4-u5-l1c2q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ribbon is 13 m 7 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1307, unit: "cm" }],
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
                working: "1307",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1307 cm",
          },
        },
        {
          id: "edpm4-u5-l1c2q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A octagon has sides of length 10 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 80, unit: "cm" }],
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
                working: "10×8=80",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "80 cm",
          },
        },
        {
          id: "edpm4-u5-l1c2q5",
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
