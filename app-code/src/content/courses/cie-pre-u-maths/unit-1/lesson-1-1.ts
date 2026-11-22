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
              { id: "a", text: "$x = 7$ or $x = -3$" },
              { id: "b", text: "$x = 3$ only" },
              { id: "c", text: "$x = 3$ or $x = -7$" },
              { id: "d", text: "$x = -7$ only" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cipum-u1-al-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $|x - 1| = 4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 5$ only" },
              { id: "b", text: "$x = -5$ or $x = 3$" },
              { id: "c", text: "$x = 5$ or $x = -3$" },
              { id: "d", text: "$x = 5$ or $x = 3$" },
            ],
            correctChoiceId: "c",
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
                  "$x - 1 = 4 \\Rightarrow x = 5$; $x - 1 = -4 \\Rightarrow x = -3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 5$ or $x = -3$",
          },
        },
        {
          id: "cipum-u1-al-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $5x + 3 = 2x + 18$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Linear equation",
                statement: "Collect like terms on each side.",
              },
            ],
            steps: [
              {
                reasoning: "$3x = 15$ after moving terms.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$x = 5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 5$",
          },
        },
        {
          id: "cipum-u1-al-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which inequality is equivalent to $x^2 \\geq 9$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x \\leq -3$ or $x \\geq 3$" },
              { id: "b", text: "$x \\geq 3$ only" },
              { id: "c", text: "$-3 \\leq x \\leq 3$" },
              { id: "d", text: "$-3 < x < 3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Quadratic inequality",
                statement: "Roots at $x = \\pm 3$; $\\geq$ holds outside roots.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$(x-3)(x+3) \\geq 0$; positive outside the roots.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x \\leq -3$ or $x \\geq 3$",
          },
        },
        {
          id: "cipum-u1-al-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $|2x + 1| = 5$ and give the smaller solution.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: -3 }],
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
                  "$2x + 1 = 5 \\Rightarrow x = 2$; $2x + 1 = -5 \\Rightarrow x = -3$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Smaller solution: $x = -3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = -3$",
          },
        },
        {
          id: "cipum-u1-al-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve the inequality $|x - 3| < 2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1 < x < 5$" },
              { id: "b", text: "$-1 < x < 5$" },
              { id: "c", text: "$3 < x < 5$" },
              { id: "d", text: "$x < 1$ or $x > 5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Modulus inequality",
                statement: "$|A| < b$ gives $-b < A < b$.",
              },
            ],
            steps: [
              {
                reasoning: "$-2 < x - 3 < 2 \\Rightarrow 1 < x < 5$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1 < x < 5$",
          },
        },
        {
          id: "cipum-u1-al-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $x^2 - 4x - 5 < 0$.",
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
                reasoning: "$(x-5)(x+1) < 0$; roots $x = -1, 5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Expression is negative between the roots.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Solution: $-1 < x < 5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-1 < x < 5$",
          },
        },
        {
          id: "cipum-u1-al-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $3(x - 2) = x + 4$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Linear equation",
                statement: "Expand brackets and collect like terms.",
              },
            ],
            steps: [
              {
                reasoning: "$3x - 6 = x + 4 \\Rightarrow 2x = 10$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$x = 5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 5$",
          },
        },
        {
          id: "cipum-u1-al-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve the inequality $(x - 1)(x + 2) > 0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-2 < x < 1$" },
              { id: "b", text: "$x < -2$ only" },
              { id: "c", text: "$x < -2$ or $x > 1$" },
              { id: "d", text: "$x > 1$ only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Quadratic inequality",
                statement: "$> 0$ holds outside the roots.",
              },
            ],
            steps: [
              {
                reasoning: "Roots $x = -2, 1$; positive outside roots.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x < -2$ or $x > 1$",
          },
        },
        {
          id: "cipum-u1-al-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $|x - 1| + |x - 3| = 4$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Modulus equation",
                statement: "Split into cases at the critical values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For $x < 1$: $(1-x) + (3-x) = 4 - 2x = 4 \\Rightarrow x = 0$; valid since $0 < 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For $1 \\leq x \\leq 3$: sum is $(x-1)+(3-x) = 2 \\neq 4$; no solutions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For $x > 3$: $(x-1)+(x-3) = 2x - 4 = 4 \\Rightarrow x = 4$; valid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solutions: $x = 0$ or $x = 4$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 0$ or $x = 4$",
          },
        },
        {
          id: "cipum-u1-al-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $|2x - 3| = |x + 6|$.",
          response: {
            type: "numeric",
            unordered: true,
            parts: [
              { label: "a", answer: 9 },
              { label: "b", answer: -1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Modulus equation",
                statement: "$|A| = |B|$ gives $A = B$ or $A = -B$.",
              },
            ],
            steps: [
              {
                reasoning: "$2x - 3 = x + 6 \\Rightarrow x = 9$; check: $|15| = |15|$ ✓.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$2x - 3 = -(x + 6) \\Rightarrow 3x = -3 \\Rightarrow x = -1$; check: $|-5| = |5|$ ✓.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Solutions: $x = 9$ or $x = -1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 9$ or $x = -1$",
          },
        },
        {
          id: "cipum-u1-al-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $|x^2 - 4| = 3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Modulus equation",
                statement: "$|A| = b$ gives $A = b$ or $A = -b$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Case 1: $x^2 - 4 = 3 \\Rightarrow x^2 = 7 \\Rightarrow x = \\pm\\sqrt{7}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Case 2: $x^2 - 4 = -3 \\Rightarrow x^2 = 1 \\Rightarrow x = \\pm 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All four values satisfy the original equation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solutions: $x = \\pm 1, \\pm\\sqrt{7}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = \\pm 1, \\pm\\sqrt{7}$",
          },
        },
        {
          id: "cipum-u1-al-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $x^2 - 9x + 20 = 0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 2$ or $x = 10$" },
              { id: "b", text: "$x = -4$ or $x = -5$" },
              { id: "c", text: "$x = 4$ or $x = 5$" },
              { id: "d", text: "$x = 3$ or $x = 7$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Quadratic factorisation",
                statement: "Find two numbers with product 20 and sum 9.",
              },
            ],
            steps: [
              {
                reasoning: "$(x-4)(x-5) = 0$, so $x = 4$ or $x = 5$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 4$ or $x = 5$",
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
