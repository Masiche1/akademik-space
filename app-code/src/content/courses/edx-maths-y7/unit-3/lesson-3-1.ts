import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "edm7-u3-lesson-3-1",
  code: "3-1",
  title: "Algebraic Expressions",
  goal: "I CAN write and simplify algebraic expressions and use substitution.",
  standards: ["Edexcel KS3 Maths — Algebra"],
  vocabulary: [
    {
      term: "Expression",
      definition:
        "A mathematical phrase with numbers, variables and operations — e.g. $3x + 2$.",
    },
    {
      term: "Term",
      definition:
        "A single part of an expression — e.g. $3x$, $+2$ in $3x + 2$.",
    },
    {
      term: "Like terms",
      definition:
        "Terms with the same variable — $3x$ and $5x$ can be combined.",
    },
    {
      term: "Substitution",
      definition:
        "Replacing a variable with a number to evaluate — $3x + 2$ at $x = 4$ gives $14$.",
    },
  ],
  concepts: [
    {
      id: "edm7-u3-expressions",
      title: "Writing and Simplifying Expressions",
      skill:
        "Write expressions from words and simplify by collecting like terms.",
      lesson: {
        sections: [
          {
            heading: "From words to expressions",
            body: "Key phrases: 'a number plus 5' → $n + 5$; 'three times a number' → $3n$; '5 less than x' → $x - 5$; 'half of y' → $\\frac{y}{2}$ or $0.5y$; 'the product of a and b' → $ab$.\n\n**Conventions**: number before letter ($3x$ not $x3$), multiplication sign omitted ($3x$ not $3 \\times x$), division as fraction ($\\frac{x}{3}$). Variables represent unknown or varying quantities.",
          },
          {
            heading: "Collecting like terms",
            body: "Like terms have the same variable — $3x + 5x = 8x$, but $3x + 5y$ can't combine. Only the **coefficients** (numbers) combine: $4a + 2b - a + 3b = 3a + 5b$.\n\n**Simplifying**: collect like terms, keep the expression shortest. $2x + 3x + 4 = 5x + 4$ — the $+4$ can't combine with $x$ terms. Brackets expand first if needed: $3(x + 2) = 3x + 6$.",
          },
        ],
        keyFormulas: [
          {
            name: "Like terms",
            statement: "Same variable — only coefficients combine.",
          },
          {
            name: "Expression conventions",
            statement: "Number before letter, × omitted, ÷ as fraction.",
          },
        ],
        workedExample: {
          problem: "Simplify $4x + 3y - x + 2y$.",
          solution:
            "Collect x terms: $4x - x = 3x$; y terms: $3y + 2y = 5y$. Result: $3x + 5y$.",
        },
      },
      questions: [
        {
          id: "edm7-u3-expressions-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write an expression for 'a number multiplied by 7'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Expression writing",
                statement: "Number before variable, × omitted: $7n$.",
              },
            ],
            steps: [
              {
                reasoning: "$7n$ — coefficient first, variable second.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$7n$",
            commonErrors: ["Writing $n7$ — wrong order.", "Including × sign."],
          },
        },
        {
          id: "edm7-u3-expressions-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify $5x + 3x - 2x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Collecting like terms",
                statement: "$5 + 3 - 2 = 6$, so $6x$.",
              },
            ],
            steps: [
              {
                reasoning: "All terms are like terms (x).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$5 + 3 - 2 = 6$.", marks: 1, markCode: "M" },
              { reasoning: "$6x$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6x$",
            commonErrors: ["$10x$ — forgetting the subtraction."],
          },
        },
        {
          id: "edm7-u3-expressions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Simplify $3(2x + 4) - x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Expanding brackets",
                statement:
                  "Multiply each term inside by 3 first, then collect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$3 \\times 2x = 6x$, $3 \\times 4 = 12$ → $6x + 12 - x$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Collect x terms: $6x - x = 5x$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$5x + 12$.", marks: 1, markCode: "M" },
              { reasoning: "Correct simplification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5x + 12$",
            commonErrors: ["$6x + 4 - x$ — only multiplying first term."],
          },
        },
        {
          id: "edm7-u3-expressions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A rectangle's length is $x$ cm and width is $(x + 3)$ cm.",
          parts: [
            {
              label: "a",
              prompt: "Write an expression for the perimeter.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Simplify the perimeter expression.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Find the perimeter when $x = 5$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Algebraic modelling",
                statement: "Perimeter = 2(length + width), then simplify.",
              },
            ],
            steps: [
              {
                reasoning: "$P = 2l + 2w = 2x + 2(x + 3)$ or $2(x + x + 3)$.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Correct perimeter expression.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$2x + 2x + 6 = 4x + 6$.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Correct simplification.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Substitute $x = 5$: $4(5) + 6 = 26$ cm.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "(a) $2x + 2(x+3)$ (b) $4x + 6$ (c) 26 cm",
            commonErrors: [
              "Perimeter = length + width only.",
              "Substitution errors.",
            ],
          },
        },
      ],
    },
    {
      id: "edm7-u3-substitution",
      title: "Substitution and Formulae",
      skill:
        "Evaluate expressions by substituting values and rearrange simple formulae.",
      lesson: {
        sections: [
          {
            heading: "Substitution",
            body: "Replace variables with numbers, then evaluate using BIDMAS: $3x + 2$ at $x = 4$: $3(4) + 2 = 14$. Negative values need brackets: $x^2 - 3$ at $x = -2$: $(-2)^2 - 3 = 4 - 3 = 1$.\n\n**Common errors**: forgetting brackets with negatives ($-2^2 = -4$ not 4 — the square applies to 2, not -2, unless bracketed). Substituting then applying BIDMAS carefully.",
          },
          {
            heading: "Using formulae",
            body: "A **formula** is a rule with variables: $v = u + at$ (final velocity), $A = \\frac{1}{2}bh$ (triangle area), $C = 2\\pi r$ (circumference). Substitute values and calculate.\n\n**Rearranging** simple formulae: make the unknown the subject — $A = bh$ → $h = \\frac{A}{b}$ (divide both sides by b). Only rearrange when asked — substitution is usually enough.",
          },
        ],
        keyFormulas: [
          {
            name: "Substitution",
            statement:
              "Replace variable with value, use brackets for negatives, apply BIDMAS.",
          },
          {
            name: "Rearranging",
            statement:
              "Do the inverse operation to both sides to isolate the unknown.",
          },
        ],
        workedExample: {
          problem: "Evaluate $2x^2 - 3x$ when $x = -2$.",
          solution: "$2(-2)^2 - 3(-2) = 2(4) + 6 = 8 + 6 = 14$.",
        },
      },
      questions: [
        {
          id: "edm7-u3-substitution-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $4x + 3$ when $x = 5$.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 23 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Substitution",
                statement: "$4(5) + 3 = 23$.",
              },
            ],
            steps: [
              {
                reasoning: "$4 \\times 5 + 3 = 23$.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$23$",
            commonErrors: ["$4 + 5 + 3 = 12$ — adding instead of multiplying."],
          },
        },
        {
          id: "edm7-u3-substitution-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $x^2 + 4x$ when $x = -3$.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: -3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Substitution with negatives",
                statement: "Use brackets: $(-3)^2 + 4(-3) = 9 - 12 = -3$.",
              },
            ],
            steps: [
              {
                reasoning: "$(-3)^2 = 9$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$4 \\times (-3) = -12$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$9 - 12 = -3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-3$",
            commonErrors: [
              "$-9 - 12$ — forgetting square of negative is positive.",
            ],
          },
        },
        {
          id: "edm7-u3-substitution-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The formula $v = u + at$ gives final velocity. Find $v$ when $u = 10$, $a = 3$, $t = 4$.",
          response: {
            type: "numeric",
            parts: [{ label: "Velocity", answer: 22 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Formula substitution",
                statement: "Substitute all values, apply BIDMAS.",
              },
            ],
            steps: [
              {
                reasoning: "$v = 10 + 3 \\times 4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$3 \\times 4 = 12$ first.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$10 + 12 = 22$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$v = 22$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$v = 22$",
            commonErrors: ["$(10 + 3) \\times 4$ — wrong order."],
          },
        },
        {
          id: "edm7-u3-substitution-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The area of a triangle is $A = \\frac{1}{2}bh$.",
          parts: [
            {
              label: "a",
              prompt: "Find $A$ when $b = 12$ cm and $h = 7$ cm.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Rearrange the formula to make $h$ the subject.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Find $h$ when $A = 30$ cm² and $b = 10$ cm.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Formulae",
                statement:
                  "Substitute values; rearrange by inverse operations.",
              },
            ],
            steps: [
              {
                reasoning: "$A = \\frac{1}{2} \\times 12 \\times 7$.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$= 6 \\times 7 = 42$ cm².",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$A = 42$ cm².",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$2A = bh$ (×2 both sides).",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$h = \\frac{2A}{b}$.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Correct rearrangement.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$h = \\frac{2 \\times 30}{10} = 6$ cm.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "(a) 42 cm² (b) $h = \\frac{2A}{b}$ (c) 6 cm",
            commonErrors: [
              "Forgetting ×2 when rearranging.",
              "Wrong substitution.",
            ],
          },
        },
      ],
    },
  ],
};
