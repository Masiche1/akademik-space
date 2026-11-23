import type { Lesson } from "../../../types.ts";

export const exam23: Lesson = {
  id: "edpm3-u2-exam3",
  code: "2-X3",
  title: "Exam Practice 3: Multiplication, Division and Fractions",
  goal: "I CAN answer multiplication, division and fractions exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Multiplication, Division and Fractions",
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
      term: "Mean",
      definition:
        "The average: sum of all values divided by how many there are.",
    },
    {
      term: "Perimeter",
      definition: "The total distance around the edge of a shape.",
    },
  ],
  concepts: [
    {
      id: "edpm3-u2-exam3-concept",
      title: "Multiplication, Division and Fractions — exam practice",
      skill:
        "Apply multiplication, division and fractions techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise multiplication, division and fractions in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for multiplication, division and fractions.",
          },
        ],
      },
      questions: [
        {
          id: "edpm3-u2-x3-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 109 + 33.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 142 }],
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
                working: "142",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "142",
          },
        },
        {
          id: "edpm3-u2-x3-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 33 ÷ 11.",
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
          id: "edpm3-u2-x3-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 4/8 as an equivalent fraction with denominator 16.",
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
                working: "8/16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8/16",
          },
        },
        {
          id: "edpm3-u2-x3-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 5 m 6 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 506, unit: "cm" }],
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
                working: "506",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "506 cm",
          },
        },
        {
          id: "edpm3-u2-x3-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A hexagon has sides of length 8 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 48, unit: "cm" }],
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
                working: "8×6=48",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "48 cm",
          },
        },
        {
          id: "edpm3-u2-x3-q6",
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
        {
          id: "edpm3-u2-x3-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve for x: 5x = 75",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 15 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Solve equation",
                statement: "Divide both sides by the coefficient.",
              },
            ],
            steps: [
              {
                reasoning: "Divide both sides by 5.",
                working: "75÷5=15",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 15",
          },
        },
        {
          id: "edpm3-u2-x3-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 37 + 119.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 156 }],
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
                working: "156",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "156",
          },
        },
        {
          id: "edpm3-u2-x3-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 63 ÷ 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 9 }],
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
                working: "9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "edpm3-u2-x3-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 3/5 as an equivalent fraction with denominator 10.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.6 }],
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
                working: "6/10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6/10",
          },
        },
      ],
    },
  ],
};
