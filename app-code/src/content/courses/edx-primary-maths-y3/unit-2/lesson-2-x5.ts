import type { Lesson } from "../../../types.ts";

export const exam25: Lesson = {
  id: "edpm3-u2-exam5",
  code: "2-X5",
  title: "Exam Practice 5: Multiplication, Division and Fractions",
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
      id: "edpm3-u2-exam5-concept",
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
          id: "edpm3-u2-x5-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 133 + 59.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 192 }],
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
                working: "192",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "192",
          },
        },
        {
          id: "edpm3-u2-x5-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 11 × 9.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 99 }],
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
                working: "99",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "99",
          },
        },
        {
          id: "edpm3-u2-x5-q3",
          difficulty: "challenge",
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
          id: "edpm3-u2-x5-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A ribbon is 7 m 7 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 707, unit: "cm" }],
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
                working: "707",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "707 cm",
          },
        },
        {
          id: "edpm3-u2-x5-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pentagon has sides of length 7 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 35, unit: "cm" }],
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
                working: "7×5=35",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "35 cm",
          },
        },
        {
          id: "edpm3-u2-x5-q6",
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
