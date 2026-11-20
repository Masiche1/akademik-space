import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cipum-u1-lesson-1-1",
  code: "1-1",
  title: "Algebra: Equations, Inequalities and Modulus",
  goal: "I CAN solve equations, inequalities and modulus problems at Pre-U standard.",
  standards: ["Cambridge Pre-U Mathematics 9794", "Pure Mathematics: algebra"],
  vocabulary: [
    { term: "Modulus", definition: "Absolute value — distance from zero." },
    {
      term: "Inequality",
      definition: "Relationship showing one quantity exceeds another.",
    },
    {
      term: "Extraneous solution",
      definition:
        "Solution introduced by squaring that fails the original equation.",
    },
    {
      term: "Critical values",
      definition: "Values where an inequality changes sign.",
    },
    {
      term: "Polynomial",
      definition: "Expression of variables with non-negative integer powers.",
    },
  ],
  concepts: [
    {
      id: "cipum-u1-s1-algebra",
      title: "Algebra foundations",
      skill: "Solve equations, inequalities and modulus problems rigorously.",
      lesson: {
        sections: [
          {
            heading: "Beyond IGCSE algebra",
            body: "Pre-U algebra extends to polynomial factorisation, the modulus function, and inequalities requiring sign analysis. Key techniques: factorise to solve quadratics exactly, use |x| = a meaning x = ±a, and solve inequalities by finding critical values and testing intervals.",
          },
          {
            heading: "Modulus and inequalities",
            body: "|x − a| < b means a − b < x < a + b (interval). |x − a| > b means x < a − b or x > a + b (two rays). For inequalities like x² < 9, factorise: (x−3)(x+3) < 0, find roots ±3, test intervals to get −3 < x < 3.",
          },
        ],
        keyFormulas: [
          {
            name: "Modulus",
            statement: "$|x-a| < b \\Rightarrow a-b < x < a+b$",
          },
          {
            name: "Quadratic inequality",
            statement: "factorise → roots → test intervals",
          },
        ],
        workedExample: {
          problem: "Solve $|2x - 3| = 7$.",
          solution:
            "$2x - 3 = 7 \\Rightarrow x = 5$; or $2x - 3 = -7 \\Rightarrow x = -2$. Solutions: $x = 5, -2$.",
        },
      },
      questions: [
        {
          id: "cipum-u1-al-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $|x + 2| = 5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 3$ or $x = -7$" },
              { id: "b", text: "$x = 7$ or $x = -3$" },
              { id: "c", text: "$x = 3$ only" },
              { id: "d", text: "$x = -7$ only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Modulus equation",
                statement: "$|A| = b$ gives $A = b$ or $A = -b$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$x + 2 = 5 \\Rightarrow x = 3$; $x + 2 = -5 \\Rightarrow x = -7$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 3$ or $x = -7$",
          },
        },
        {
          id: "cipum-u1-al-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve the inequality $x^2 < 16$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Quadratic inequality",
                statement: "Factorise, find roots, test intervals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$(x-4)(x+4) < 0$; roots $x = \\pm 4$; negative between roots.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "$-4 < x < 4$",
          },
        },
        {
          id: "cipum-u1-al-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $|2x - 5| < 3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Modulus inequality",
                statement: "$|A| < b$ gives $-b < A < b$.",
              },
            ],
            steps: [
              { reasoning: "$-3 < 2x - 5 < 3$.", marks: 1, markCode: "M" },
              {
                reasoning: "$2 < 2x < 8$, so $1 < x < 4$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: $1 < x < 4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1 < x < 4$",
          },
        },
        {
          id: "cipum-u1-al-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $x^2 - 5x + 6 \\geq 0$ and express the solution set.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Quadratic inequality",
                statement: "Find where expression is zero or positive.",
              },
            ],
            steps: [
              {
                reasoning: "Factorise: $(x-2)(x-3) \\geq 0$; roots $x = 2, 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Positive outside roots: $x \\leq 2$ or $x \\geq 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Check endpoints: equality at $x = 2$ and $x = 3$ included.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solution: $x \\leq 2$ or $x \\geq 3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x \\leq 2$ or $x \\geq 3$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipum-u1-algebra-notes",
      title: "Algebra — revision notes",
      summary:
        "Modulus, quadratic inequalities, factorisation, interval notation.",
      sections: [
        {
          heading: "Key skills",
          body: "Modulus equations split into ± cases; inequalities need critical values and interval testing; always check whether endpoints are included.",
        },
        {
          heading: "Exam tips",
          body: "Draw a number line for inequalities — it prevents sign errors. For modulus, write both cases explicitly.",
        },
      ],
    },
  ],
};
