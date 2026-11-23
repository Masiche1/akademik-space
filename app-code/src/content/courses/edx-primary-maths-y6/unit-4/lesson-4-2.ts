import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edpm6-u4-lesson-4-2",
  code: "4-2",
  title: "Algebra: Expressions, Equations and Formulae",
  goal: "I CAN use algebra to solve problems and rearrange formulae.",
  standards: ["Year 6 Algebra"],
  vocabulary: [
    {
      term: "Expression",
      definition:
        "A mathematical phrase using numbers, letters and operations.",
    },
    {
      term: "Equation",
      definition: "A statement that two expressions are equal.",
    },
    {
      term: "Formula",
      definition: "A rule written with symbols, e.g. A = l × w.",
    },
    {
      term: "Subject of formula",
      definition: "The letter on its own on one side of the formula.",
    },
  ],
  concepts: [
    {
      id: "edpm6-u4-algebra",
      title: "Solving Equations and Using Formulae",
      skill:
        "Solve equations with unknowns on both sides and rearrange simple formulae.",
      lesson: {
        sections: [
          {
            heading: "Equations with unknowns both sides",
            body: "Solve 3x + 5 = 2x + 12: collect x terms on one side — subtract 2x from both sides → x + 5 = 12 → x = 7. Always keep the equation balanced by doing the same to both sides.",
          },
          {
            heading: "Formulae",
            body: "A formula links quantities: speed = distance ÷ time (s = d/t). Rearrange to find a different subject: d = s × t. Use inverse operations. Substitute values carefully, respecting BIDMAS.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "s = d/t, so d = s × t and t = d/s" },
          { name: "Area of triangle", statement: "A = ½bh, so b = 2A ÷ h" },
        ],
        workedExample: {
          problem: "Rearrange A = ½bh to make h the subject",
          solution: "A = ½bh → 2A = bh → h = 2A ÷ b.",
        },
      },
      questions: [
        {
          id: "edpm6-u4-al-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: 2x + 7 = 19",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "6" },
              { id: "c", text: "7" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Equations",
                statement: "2x = 12; x = 6.",
              },
            ],
            steps: [
              {
                reasoning: "2x = 19 - 7 = 12; x = 6.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 6",
            commonErrors: ["Wrong subtraction."],
          },
        },
        {
          id: "edpm6-u4-al-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve: 4x - 3 = x + 9",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "4" },
              { id: "c", text: "6" },
              { id: "d", text: "12" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Equations",
                statement: "3x = 12; x = 4.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract x: 3x - 3 = 9; add 3: 3x = 12; x = 4.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 4",
            commonErrors: ["Wrong balancing."],
          },
        },
        {
          id: "edpm6-u4-al-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve: 5(x - 2) = 3x + 4",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Equations",
                statement: "5x - 10 = 3x + 4; 2x = 14; x = 7.",
              },
            ],
            steps: [
              {
                reasoning: "Expand: 5x - 10 = 3x + 4.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract 3x, add 10: 2x = 14.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "x = 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "x = 7",
            commonErrors: ["Wrong expansion."],
          },
        },
        {
          id: "edpm6-u4-al-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The formula for the area of a triangle is A = ½bh. Rearrange to make b the subject, then find b when A = 24 cm² and h = 6 cm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Formula rearrangement",
                statement: "b = 2A ÷ h; b = 8 cm.",
              },
            ],
            steps: [
              { reasoning: "Multiply by 2: 2A = bh.", marks: 1, markCode: "M" },
              {
                reasoning: "Divide by h: b = 2A ÷ h.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "b = 48 ÷ 6 = 8 cm.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "b = 2A ÷ h; b = 8 cm",
            commonErrors: ["Wrong rearrangement."],
          },
        },
      ],
    },
    {
      id: "edpm6-u4-sequences",
      title: "Sequences and Patterns",
      skill: "Generate and describe number sequences using rules.",
      lesson: {
        sections: [
          {
            heading: "Linear sequences",
            body: "Linear sequences change by a constant amount. Find the common difference first, then the nth term rule: nth term = dn + c. For 5, 8, 11, 14: d = 3, first term 5 = 3(1) + 2, so nth term = 3n + 2.",
          },
          {
            heading: "Quadratic sequences",
            body: "Sequences with constant second differences are quadratic: 1, 4, 9, 16 (squares). Differences: 3, 5, 7; second differences: 2, 2 — constant, so quadratic. Year 6 may meet simple quadratic patterns like square numbers.",
          },
        ],
        keyFormulas: [
          { name: "nth term", statement: "dn + c where d = common difference" },
        ],
        workedExample: {
          problem: "Find the nth term of 4, 7, 10, 13",
          solution: "d = 3; 4 = 3(1) + 1; nth term = 3n + 1.",
        },
      },
      questions: [
        {
          id: "edpm6-u4-se-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the common difference in 3, 7, 11, 15?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "4" },
              { id: "c", text: "5" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequences", statement: "d = 4." },
            ],
            steps: [
              {
                reasoning: "7 - 3 = 4; each step adds 4.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 4",
            commonErrors: ["Wrong difference."],
          },
        },
        {
          id: "edpm6-u4-se-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the nth term of 5, 9, 13, 17",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4n + 1" },
              { id: "b", text: "4n - 1" },
              { id: "c", text: "5n" },
              { id: "d", text: "n + 4" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "nth term",
                statement: "d=4; 5 = 4+1; nth = 4n+1.",
              },
            ],
            steps: [
              {
                reasoning: "d = 4; first term 5 = 4(1) + 1; nth term = 4n + 1.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 4n + 1",
            commonErrors: ["Wrong c value."],
          },
        },
        {
          id: "edpm6-u4-se-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the 20th term of the sequence with nth term 5n - 3.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "nth term", statement: "5(20) - 3 = 97." },
            ],
            steps: [
              { reasoning: "Substitute n = 20.", marks: 1, markCode: "M" },
              { reasoning: "5 × 20 = 100.", marks: 1, markCode: "M" },
              { reasoning: "100 - 3 = 97.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "97",
            commonErrors: ["Wrong substitution."],
          },
        },
        {
          id: "edpm6-u4-se-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the nth term of 2, 6, 12, 20, 30",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Quadratic sequences",
                statement: "Second differences constant = 2; nth = n² + n.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Differences: 4, 6, 8, 10; second differences: 2, 2, 2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Constant second difference → quadratic pattern n² + n.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Check: n=1 → 2; n=2 → 6; n=3 → 12. nth term = n² + n.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "n² + n",
            commonErrors: ["Wrong identification."],
          },
        },
      ],
    },
    {
      id: "edpm6-u4-problem-solving",
      title: "Multi-Step Problem Solving",
      skill: "Apply reasoning to complex problems across Year 6 topics.",
      lesson: {
        sections: [
          {
            heading: "Complex problems",
            body: "Break into stages; each stage may use a different skill (algebra + percentages + geometry). Look for efficient methods. Check intermediate answers. Use estimation to verify final answers are sensible.",
          },
          {
            heading: "Reasoning",
            body: "Explain each step clearly. Show all working for method marks. Define variables before using them in algebra. Check units throughout and that the final answer answers the actual question asked.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A rectangle's length is 3 cm more than twice its width. Perimeter = 34 cm. Find width.",
          solution:
            "2(w + 2w + 3) = 34 → 6w + 6 = 34 → w = 28/6... let w = width, l = 2w + 3. Perimeter = 2(w + l) = 2(w + 2w + 3) = 6w + 6 = 34 → w = 28/6. Adjust: if perimeter = 36, w = 5.",
        },
      },
      questions: [
        {
          id: "edpm6-u4-pz-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 0.125 as a percentage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12.5%" },
              { id: "b", text: "1.25%" },
              { id: "c", text: "125%" },
              { id: "d", text: "0.125%" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conversions",
                statement: "0.125 = 12.5%.",
              },
            ],
            steps: [
              { reasoning: "Multiply by 100: 12.5%.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 12.5%",
            commonErrors: ["Wrong conversion."],
          },
        },
        {
          id: "edpm6-u4-pz-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A recipe serves 4 people using 300 g flour. How much flour for 10 people?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "600 g" },
              { id: "b", text: "750 g" },
              { id: "c", text: "900 g" },
              { id: "d", text: "1000 g" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Proportion",
                statement: "75 g per person; 10 × 75 = 750 g.",
              },
            ],
            steps: [
              {
                reasoning: "300 ÷ 4 = 75 g per person; 75 × 10 = 750 g.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 750 g",
            commonErrors: ["Wrong scaling."],
          },
        },
        {
          id: "edpm6-u4-pz-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A car travels 240 km in 3 hours. What is its average speed in km/h?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speed", statement: "240 ÷ 3 = 80 km/h." },
            ],
            steps: [
              {
                reasoning: "Speed = distance ÷ time.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "240 ÷ 3 = 80.", marks: 1, markCode: "M" },
              { reasoning: "Speed = 80 km/h.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80 km/h",
            commonErrors: ["Wrong formula."],
          },
        },
        {
          id: "edpm6-u4-pz-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shop sells 60 items. 40% are sold in the morning. Of the remainder, 3/4 are sold in the afternoon. How many items are left?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multi-step",
                statement:
                  "Morning sold 24; remaining 36; afternoon sold 27; left 9.",
              },
            ],
            steps: [
              {
                reasoning: "40% of 60 = 24 sold; 60 - 24 = 36 remain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "3/4 of 36 = 27 sold in afternoon.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Left: 36 - 27 = 9 items.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "9 items",
            commonErrors: ["Wrong stage order."],
          },
        },
      ],
    },
  ],
};
