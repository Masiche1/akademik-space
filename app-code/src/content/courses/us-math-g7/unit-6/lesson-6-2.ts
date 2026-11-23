import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "m7-u6-lesson-6-2",
  code: "6-2",
  title: "Equations and Inequalities: Solving in Depth",
  goal: "I CAN solve one-step and two-step equations and inequalities, and apply them to real-world problems.",
  standards: [
    "7.EE.A.1",
    "7.EE.A.2",
    "7.EE.B.3",
    "7.EE.B.4",
    "7.EE.B.4a",
    "7.EE.B.4b",
  ],
  vocabulary: [
    {
      term: "Equation",
      definition:
        "A statement that two expressions are equal, such as $3x + 2 = 11$.",
    },
    {
      term: "Inequality",
      definition:
        "A statement comparing two expressions with $<$, $>$, $\\leq$, or $\\geq$, such as $2x - 1 < 7$.",
    },
    {
      term: "Solution",
      definition:
        "A value of the variable that makes the equation or inequality true.",
    },
    {
      term: "Inverse operation",
      definition:
        "An operation that undoes another: addition undoes subtraction, multiplication undoes division.",
    },
    {
      term: "Isolate the variable",
      definition:
        "To solve for $x$, get $x$ alone on one side of the equation.",
    },
    {
      term: "Check your solution",
      definition:
        "Substitute the answer back into the original equation to verify.",
    },
  ],
  concepts: [
    {
      id: "m7-u6-one-step-equations",
      title: "One-step equations",
      skill: "Solve equations requiring a single inverse operation.",
      lesson: {
        sections: [
          {
            heading: "Addition and subtraction equations",
            body: "To solve $x + a = b$, subtract $a$ from both sides: $x = b - a$. To solve $x - a = b$, add $a$ to both sides: $x = b + a$. Example: $x + 7 = 12$ → $x = 12 - 7 = 5$; $x - 4 = -3$ → $x = -3 + 4 = 1$.",
          },
          {
            heading: "Multiplication and division equations",
            body: "To solve $ax = b$, divide both sides by $a$: $x = \\frac{b}{a}$. To solve $\\frac{x}{a} = b$, multiply both sides by $a$: $x = ab$. Example: $5x = 20$ → $x = 4$; $\\frac{x}{3} = -2$ → $x = -6$.",
          },
          {
            heading: "Checking solutions",
            body: "Always substitute the solution back into the original equation to verify. For $3x = 15$, solution $x = 5$: $3(5) = 15$ ✓. For $x - 2 = -5$, solution $x = -3$: $-3 - 2 = -5$ ✓. Checking catches arithmetic errors.",
          },
        ],
        keyFormulas: [
          {
            name: "Addition/subtraction",
            statement: "$x + a = b \\Rightarrow x = b - a$",
          },
          {
            name: "Multiplication/division",
            statement: "$ax = b \\Rightarrow x = \\frac{b}{a}$",
          },
          {
            name: "Check",
            statement: "Substitute back into original equation",
          },
        ],
        workedExample: {
          problem: "Solve $\\frac{x}{-4} = 6$.",
          solution:
            "Multiply both sides by $-4$: $x = 6 \\times (-4) = -24$. Check: $\\frac{-24}{-4} = 6$ ✓.",
        },
      },
      questions: [
        {
          id: "m7-u6-one-step-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the solution to $x + 9 = 15$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 6$" },
              { id: "b", text: "$x = 24$" },
              { id: "c", text: "$x = -6$" },
              { id: "d", text: "$x = 5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inverse operation",
                statement: "Subtract $9$ from both sides.",
              },
            ],
            steps: [
              {
                reasoning: "$x = 15 - 9 = 6$.",
                working: "x = 15 - 9 = 6",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $x = 6$",
            commonErrors: ["Adding $9$ instead of subtracting: $x = 24$."],
          },
        },
        {
          id: "m7-u6-one-step-equations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $-3x = 21$.",
          response: { type: "numeric", parts: [{ label: "x", answer: -7 }] },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Division by negative",
                statement: "Divide both sides by $-3$.",
              },
            ],
            steps: [
              {
                reasoning: "Divide both sides by $-3$: $x = \\frac{21}{-3}$.",
                working: "x = \\frac{21}{-3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify: $x = -7$.",
                working: "x = -7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = -7$",
            commonErrors: ["Forgetting the negative sign: $x = 7$."],
          },
        },
        {
          id: "m7-u6-one-step-equations-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\frac{x}{-5} = -8$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 40 }] },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multiplication by negative",
                statement: "Multiply both sides by $-5$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply both sides by $-5$: $x = (-8) \\times (-5)$.",
                working: "x = (-8) \\times (-5)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Same signs give a positive product: $x = 40$.",
                working: "x = 40",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: $\\frac{40}{-5} = -8$ ✓.",
                working: "\\frac{40}{-5} = -8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 40$",
            commonErrors: ["Computing $(-8) \\times (-5) = -40$ (sign error)."],
          },
        },
        {
          id: "m7-u6-one-step-equations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each equation.",
          parts: [
            { label: "a", prompt: "$x - (-7) = 4$", marks: 2 },
            { label: "b", prompt: "$-6x = -42$", marks: 2 },
            { label: "c", prompt: "$\\frac{x}{8} = -3$", marks: 2 },
            { label: "d", prompt: "$x + (-5) = -12$", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) x", answer: -3 },
              { label: "(b) x", answer: 7 },
              { label: "(c) x", answer: -24 },
              { label: "(d) x", answer: -7 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inverse operations",
                statement: "Add/subtract or multiply/divide to isolate $x$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$x - (-7) = x + 7 = 4$; subtract $7$: $x = 4 - 7 = -3$.",
                working: "x = 4 - 7 = -3",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Divide both sides by $-6$: $x = \\frac{-42}{-6} = 7$.",
                working: "x = \\frac{-42}{-6} = 7",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Multiply both sides by $8$: $x = -3 \\times 8 = -24$.",
                working: "x = -24",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$x + (-5) = x - 5 = -12$; add $5$: $x = -12 + 5 = -7$.",
                working: "x = -12 + 5 = -7",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $x = -3$ (b) $x = 7$ (c) $x = -24$ (d) $x = -7$",
            commonErrors: ["In (a), treating $x - (-7)$ as $x - 7$."],
          },
        },
      ],
    },
    {
      id: "m7-u6-two-step-equations",
      title: "Two-step equations",
      skill:
        "Solve equations requiring two inverse operations, working in reverse order.",
      lesson: {
        sections: [
          {
            heading: "Strategy",
            body: "To solve a two-step equation like $3x + 5 = 20$: (1) undo addition/subtraction first, (2) undo multiplication/division last. Subtract $5$ from both sides: $3x = 15$. Divide by $3$: $x = 5$. Check: $3(5) + 5 = 20$ ✓.",
          },
          {
            heading: "Equations with fractions",
            body: "For $\\frac{x}{4} + 2 = 7$: subtract $2$ first: $\\frac{x}{4} = 5$. Multiply by $4$: $x = 20$. For $\\frac{2x}{3} - 1 = 5$: add $1$: $\\frac{2x}{3} = 6$. Multiply by $3$: $2x = 18$. Divide by $2$: $x = 9$.",
          },
          {
            heading: "Negative coefficients",
            body: "For $-2x + 3 = 9$: subtract $3$: $-2x = 6$. Divide by $-2$: $x = -3$. Remember that dividing by a negative flips the sign. For $\\frac{x}{-3} + 1 = 4$: subtract $1$: $\\frac{x}{-3} = 3$. Multiply by $-3$: $x = -9$.",
          },
        ],
        keyFormulas: [
          {
            name: "Order of solving",
            statement:
              "Undo addition/subtraction first, then multiplication/division",
          },
          {
            name: "Example",
            statement: "$3x + 5 = 20 \\Rightarrow 3x = 15 \\Rightarrow x = 5$",
          },
          { name: "Check", statement: "Substitute solution back to verify" },
        ],
        workedExample: {
          problem: "Solve $\\frac{x}{-2} - 3 = 1$.",
          solution:
            "Add $3$ to both sides: $\\frac{x}{-2} = 4$. Multiply by $-2$: $x = 4 \\times (-2) = -8$. Check: $\\frac{-8}{-2} - 3 = 4 - 3 = 1$ ✓.",
        },
      },
      questions: [
        {
          id: "m7-u6-two-step-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the solution to $2x + 3 = 11$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 4$" },
              { id: "b", text: "$x = 7$" },
              { id: "c", text: "$x = 5$" },
              { id: "d", text: "$x = 8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Two-step equations",
                statement: "Subtract $3$, then divide by $2$.",
              },
            ],
            steps: [
              {
                reasoning: "$2x = 11 - 3 = 8$; $x = \\frac{8}{2} = 4$.",
                working: "x = 4",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $x = 4$",
            commonErrors: [
              "Dividing first: $\\frac{2x + 3}{2} = \\frac{11}{2}$ (incorrect order).",
            ],
          },
        },
        {
          id: "m7-u6-two-step-equations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $\\frac{x}{3} - 4 = -2$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 6 }] },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Two-step with fractions",
                statement: "Add $4$ first, then multiply by $3$.",
              },
            ],
            steps: [
              {
                reasoning: "Add $4$ to both sides: $\\frac{x}{3} = 2$.",
                working: "\\frac{x}{3} = -2 + 4 = 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by $3$: $x = 6$.",
                working: "x = 6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 6$",
            commonErrors: ["Multiplying by $3$ before adding $4$."],
          },
        },
        {
          id: "m7-u6-two-step-equations-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $-2x + 5 = -7$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 6 }] },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Negative coefficient",
                statement: "Subtract $5$, then divide by $-2$.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract $5$ from both sides: $-2x = -12$.",
                working: "-2x = -7 - 5 = -12",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by $-2$: $x = \\frac{-12}{-2} = 6$.",
                working: "x = 6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: $-2(6) + 5 = -12 + 5 = -7$ ✓.",
                working: "-2(6) + 5 = -7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 6$",
            commonErrors: ["Forgetting that $\\frac{-12}{-2} = +6$, not $-6$."],
          },
        },
        {
          id: "m7-u6-two-step-equations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each equation.",
          parts: [
            { label: "a", prompt: "$4x - 7 = 9$", marks: 2 },
            { label: "b", prompt: "$\\frac{x}{-3} + 2 = 5$", marks: 2 },
            { label: "c", prompt: "$-5x - 1 = 14$", marks: 2 },
            { label: "d", prompt: "$\\frac{2x}{5} - 3 = -1$", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) x", answer: 4 },
              { label: "(b) x", answer: -9 },
              { label: "(c) x", answer: -3 },
              { label: "(d) x", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Two-step equations",
                statement:
                  "Undo addition/subtraction first, then multiplication/division.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Add $7$: $4x = 16$; divide by $4$: $x = 4$.",
                working: "x = 4",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Subtract $2$: $\\frac{x}{-3} = 3$; multiply by $-3$: $x = -9$.",
                working: "x = -9",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Add $1$: $-5x = 15$; divide by $-5$: $x = -3$.",
                working: "x = -3",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Add $3$: $\\frac{2x}{5} = 2$; multiply by $5$: $2x = 10$; divide by $2$: $x = 5$.",
                working: "x = 5",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $x = 4$ (b) $x = -9$ (c) $x = -3$ (d) $x = 5$",
            commonErrors: [
              "In (d), forgetting the second step of dividing by $2$.",
            ],
          },
        },
      ],
    },
    {
      id: "m7-u6-inequalities",
      title: "Solving inequalities",
      skill:
        "Solve one-step and two-step inequalities, understanding when to flip the inequality sign.",
      lesson: {
        sections: [
          {
            heading: "Basic rules",
            body: "Solving inequalities follows the same rules as equations EXCEPT when multiplying or dividing by a negative number — the inequality sign **flips**. $x + 3 > 7$ → $x > 4$ (subtract $3$, no flip). $-2x < 8$ → $x > -4$ (divide by $-2$, flip $<$ to $>$).",
          },
          {
            heading: "Graphing solutions",
            body: "On a number line, $x > 4$ is an open circle at $4$ with shading to the right. $x \\leq -2$ is a closed circle at $-2$ with shading to the left. Open circle = endpoint not included ($<$ or $>$); closed circle = endpoint included ($\\leq$ or $\\geq$).",
          },
          {
            heading: "Two-step inequalities",
            body: "For $2x - 3 \\geq 5$: add $3$: $2x \\geq 8$; divide by $2$: $x \\geq 4$. For $-x + 2 < 7$: subtract $2$: $-x < 5$; multiply by $-1$ (flip): $x > -5$.",
          },
        ],
        keyFormulas: [
          {
            name: "Flip rule",
            statement:
              "Multiplying/dividing by negative flips $<$ ↔ $>$, $\\leq$ ↔ $\\geq$",
          },
          {
            name: "Open circle",
            statement: "$<$ or $>$: endpoint not included",
          },
          {
            name: "Closed circle",
            statement: "$\\leq$ or $\\geq$: endpoint included",
          },
        ],
        workedExample: {
          problem: "Solve $-3x + 2 \\leq 8$.",
          solution:
            "Subtract $2$: $-3x \\leq 6$. Divide by $-3$ (flip): $x \\geq -2$. Check: $-3(-2) + 2 = 8$ ✓.",
        },
      },
      questions: [
        {
          id: "m7-u6-inequalities-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the solution to $x + 5 > 12$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x > 7$" },
              { id: "b", text: "$x < 7$" },
              { id: "c", text: "$x > 17$" },
              { id: "d", text: "$x < 17$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inequality solving",
                statement: "Subtract $5$ from both sides; no flip needed.",
              },
            ],
            steps: [
              {
                reasoning: "$x > 12 - 5 = 7$.",
                working: "x > 7",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $x > 7$",
            commonErrors: [
              "Flipping the inequality when subtracting (not needed).",
            ],
          },
        },
        {
          id: "m7-u6-inequalities-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $-2x < 10$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Flip rule",
                statement: "Dividing by $-2$ flips $<$ to $>$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Divide both sides by $-2$ and flip: $x > \\frac{10}{-2} = -5$.",
                working: "x > -5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the solution.",
                working: "x > -5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x > -5$",
            commonErrors: ["Not flipping: $x < -5$ (incorrect)."],
          },
        },
        {
          id: "m7-u6-inequalities-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $3x - 4 \\leq 11$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Two-step inequality",
                statement: "Add $4$, then divide by $3$.",
              },
            ],
            steps: [
              {
                reasoning: "Add $4$ to both sides: $3x \\leq 15$.",
                working: "3x \\leq 15",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by $3$ (positive, no flip): $x \\leq 5$.",
                working: "x \\leq 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the solution.",
                working: "x \\leq 5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x \\leq 5$",
            commonErrors: [
              "Flipping the inequality when dividing by positive $3$.",
            ],
          },
        },
        {
          id: "m7-u6-inequalities-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each inequality.",
          parts: [
            { label: "a", prompt: "$-x + 3 > 8$", marks: 2 },
            { label: "b", prompt: "$\\frac{x}{-4} \\leq -2$", marks: 2 },
            { label: "c", prompt: "$5x + 2 \\geq -18$", marks: 2 },
            { label: "d", prompt: "$-3x - 1 < 5$", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Flip rule",
                statement:
                  "Multiplying/dividing by negative flips the inequality.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Subtract $3$: $-x > 5$; multiply by $-1$ (flip): $x < -5$.",
                working: "x < -5",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Multiply by $-4$ (flip): $x \\geq (-2) \\times (-4) = 8$.",
                working: "x \\geq 8",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Subtract $2$: $5x \\geq -20$; divide by $5$: $x \\geq -4$.",
                working: "x \\geq -4",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Add $1$: $-3x < 6$; divide by $-3$ (flip): $x > -2$.",
                working: "x > -2",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $x < -5$ (b) $x \\geq 8$ (c) $x \\geq -4$ (d) $x > -2$",
            commonErrors: [
              "In (a), forgetting to flip when multiplying by $-1$.",
            ],
          },
        },
      ],
    },
  ],
};
