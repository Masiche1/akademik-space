import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "edpm1-u1-lesson-1-3",
  code: "1-3",
  title: "Doubling, Halving and Number Bonds",
  goal: "I CAN double and halve numbers to 20 and use number bonds to solve problems.",
  standards: ["Year 1 Number", "Doubling and halving", "Number bonds"],
  vocabulary: [
    {
      term: "Double",
      definition: "Add a number to itself, e.g. double 6 is 12.",
    },
    {
      term: "Half",
      definition: "Split a number into two equal parts, e.g. half of 12 is 6.",
    },
    {
      term: "Equal parts",
      definition: "Two or more parts that are exactly the same size.",
    },
    {
      term: "Number bond",
      definition: "Two numbers that add to a given total, e.g. 8 + 2 = 10.",
    },
    {
      term: "Fact family",
      definition:
        "A group of related addition and subtraction facts, e.g. 5+3=8, 8−3=5.",
    },
  ],
  concepts: [
    {
      id: "edpm1-u1-double-half",
      title: "Doubling and halving",
      skill: "Double numbers to 10 and halve even numbers to 20.",
      lesson: {
        sections: [
          {
            heading: "Doubling",
            body: "To double a number, add it to itself: double 4 = 4 + 4 = 8. Doubling is the same as two equal groups. Double 7 = 14, double 8 = 16, double 9 = 18. Learn the doubles facts to 10 by heart: 1→2, 2→4, 3→6, 4→8, 5→10.",
          },
          {
            heading: "Halving",
            body: "To halve an even number, split it into two equal parts. Half of 12 = 6 because 6 + 6 = 12. Only even numbers can be halved into two whole-number parts. Half of 8 = 4, half of 16 = 8. Doubling and halving are inverse operations.",
          },
          {
            heading: "Doubling and halving in real life",
            body: "'Double' appears when two identical amounts combine: 2 bags of 6 grapes = 12 grapes. 'Half' appears when sharing equally: 14 biscuits shared by 2 people = 7 each. Draw a picture or use counters to show the two equal parts.",
          },
        ],
        keyFormulas: [
          {
            name: "Doubling",
            statement: "double n = n + n, e.g. double 6 = 12",
          },
          {
            name: "Halving",
            statement: "half of n = the number that + itself = n",
          },
        ],
        workedExample: {
          problem: "Double 9, then halve the answer.",
          solution:
            "Double 9 = 9 + 9 = 18. Half of 18 = 9 — halving undoes doubling.",
        },
      },
      questions: [
        {
          id: "edpm1-u1-dh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is double 7?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "16" },
              { id: "b", text: "17" },
              { id: "c", text: "14" },
              { id: "d", text: "12" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Double",
                statement: "Double 7 = 7 + 7 = 14.",
              },
            ],
            steps: [{ reasoning: "7 + 7 = 14.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 14",
            commonErrors: [
              "Adding 2 instead of the number itself (7 + 2 = 9).",
            ],
          },
        },
        {
          id: "edpm1-u1-dh-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is half of 18?",
          response: {
            type: "numeric",
            parts: [{ label: "Half of 18", answer: 9, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Halving",
                statement: "9 + 9 = 18, so half of 18 is 9.",
              },
            ],
            steps: [
              {
                reasoning: "Look for the number that doubles to 18.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "9 + 9 = 18.", marks: 1, markCode: "M" },
              { reasoning: "Half of 18 = 9.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9",
            commonErrors: ["Halving twice (getting 4.5) — halving once only."],
          },
        },
        {
          id: "edpm1-u1-dh-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "There are 16 sweets in a jar. Max eats half of them. How many sweets are left?",
          response: {
            type: "numeric",
            parts: [{ label: "Sweets left", answer: 8, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Half in context",
                statement: "Half eaten leaves the other half.",
              },
            ],
            steps: [
              { reasoning: "Half of 16 = 8 eaten.", marks: 1, markCode: "M" },
              { reasoning: "Left = 16 − 8 = 8.", marks: 1, markCode: "M" },
              {
                reasoning: "Or: halving leaves half, so 8 left.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Answer: 8 sweets.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 sweets",
            commonErrors: [
              "Answering 8 eaten and forgetting to find what is left.",
            ],
          },
        },
        {
          id: "edpm1-u1-dh-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A class lines up for lunch. Each child gets 2 sandwiches.",
          parts: [
            {
              label: "a",
              prompt: "If 8 children line up, how many sandwiches are needed?",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "There are 20 sandwiches. How many children can be served?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Half of the children are girls. How many girls are in the line if 10 children line up?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Doubling and halving",
                statement:
                  "2 per child = doubling groups; 20 ÷ 2; half of 10 = 5.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "8 children × 2 = 16 sandwiches (double 8).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Double 8 = 16.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 16 sandwiches.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "20 ÷ 2 = 10 children.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Each child takes 2, so 20 ÷ 2 = 10.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 10 children.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Half of 10 = 5.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "5 + 5 = 10, two equal groups.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 5 girls.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning that half means two equal parts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "16; 10; 5 girls",
            commonErrors: ["Doubling 20 instead of halving for part (b)."],
          },
        },
      ],
    },
    {
      id: "edpm1-u1-bonds",
      title: "Number bonds",
      skill:
        "Use number bonds to 10 and 20 to solve addition and subtraction problems.",
      lesson: {
        sections: [
          {
            heading: "Bonds to 10",
            body: "Number bonds to 10 are pairs that add to 10: 1+9, 2+8, 3+7, 4+6, 5+5. Learn them until you know them instantly — they are the most useful facts in early maths. Each bond also gives subtraction facts: 10 − 7 = 3.",
          },
          {
            heading: "Bonds to 20",
            body: "Number bonds to 20 work the same way: 11+9, 12+8, 13+7, 14+6, 15+5, and so on. You can build them from bonds to 10: 8 + 12 = 20 because 8 + 2 = 10 and 10 + 10 = 20. Ten-frames and part-whole diagrams help you see the bonds.",
          },
          {
            heading: "Using bonds to solve problems",
            body: "Bonds make addition and subtraction quicker. For 13 + 7, see it as 13 + 7 = 20 (a bond to 20). For 20 − 8, think 8 + __ = 20, answer 12. Always ask: what number bonds with this to make the total?",
          },
        ],
        keyFormulas: [
          { name: "Bonds to 10", statement: "1+9, 2+8, 3+7, 4+6, 5+5 = 10" },
          {
            name: "Bonds to 20",
            statement: "11+9, 12+8, 13+7, 14+6, 15+5 ... = 20",
          },
        ],
        workedExample: {
          problem: "Use a number bond to find 20 − 6.",
          solution:
            "Think: 6 + __ = 20. Bond to 20: 6 + 14 = 20. So 20 − 6 = 14.",
        },
      },
      questions: [
        {
          id: "edpm1-u1-bond-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which number bonds with 4 to make 10?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "7" },
              { id: "c", text: "8" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bond to 10",
                statement: "4 + 6 = 10.",
              },
            ],
            steps: [
              {
                reasoning: "Count on from 4 to 10: 6 more.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 6",
            commonErrors: ["Answering 5 — counting on one too few."],
          },
        },
        {
          id: "edpm1-u1-bond-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Complete the bond: 13 + __ = 20.",
          response: {
            type: "numeric",
            parts: [{ label: "Missing number", answer: 7, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bonds to 20",
                statement: "13 + 7 = 20.",
              },
            ],
            steps: [
              {
                reasoning: "13 + 7 = 20 is a known bond.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Or count on from 13 to 20: 7 steps.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
            commonErrors: ["Answering 6 — miscounting the steps to 20."],
          },
        },
        {
          id: "edpm1-u1-bond-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A bus has 20 seats. 9 children are already sitting down. How many more children can sit down?",
          response: {
            type: "numeric",
            parts: [
              { label: "Children who can sit", answer: 11, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bond to 20 in context",
                statement: "9 + 11 = 20.",
              },
            ],
            steps: [
              { reasoning: "Seats left = 20 − 9.", marks: 1, markCode: "M" },
              { reasoning: "Bond: 9 + 11 = 20.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 11 children.", marks: 1, markCode: "A" },
              { reasoning: "Units included.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11 children",
            commonErrors: [
              "Answering 11 seats vs 11 children — meaning is fine but check context.",
            ],
          },
        },
        {
          id: "edpm1-u1-bond-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "You have 20 counters.",
          parts: [
            {
              label: "a",
              prompt: "Make a part-whole diagram: split 20 into 13 and what?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Use your answer to write two addition facts and two subtraction facts.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Now split 20 into 8 and what? Write the matching subtraction fact.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fact families",
                statement: "A bond gives 4 facts: a+b=T, b+a=T, T−a=b, T−b=a.",
              },
            ],
            steps: [
              { part: "a", reasoning: "20 = 13 + 7.", marks: 1, markCode: "B" },
              {
                part: "a",
                reasoning: "Diagram shows whole 20 split into 13 and 7.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "13 + 7 = 20 and 7 + 13 = 20.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "20 − 13 = 7 and 20 − 7 = 13.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "All four facts correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Facts linked to the bond used.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "20 = 8 + 12.", marks: 1, markCode: "M" },
              {
                part: "c",
                reasoning: "Subtraction fact: 20 − 8 = 12 (or 20 − 12 = 8).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Bond correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Fact consistent with bond.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "13 + 7 = 20 with fact family; 8 + 12 = 20, 20 − 8 = 12",
            commonErrors: [
              "Writing subtraction facts that don't match the bond.",
            ],
          },
        },
      ],
    },
  ],
};
