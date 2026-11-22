import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "edm7-u2-lesson-2-1",
  code: "2-1",
  title: "Equivalent Fractions and Adding",
  goal: "I CAN find equivalent fractions and add and subtract fractions with different denominators.",
  standards: ["Edexcel KS3 Maths — Fractions"],
  vocabulary: [
    {
      term: "Numerator",
      definition: "The top number of a fraction — how many parts.",
    },
    {
      term: "Denominator",
      definition: "The bottom number — how many equal parts make the whole.",
    },
    {
      term: "Equivalent fraction",
      definition:
        "A fraction equal in value — e.g. $\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6}$.",
    },
    {
      term: "Common denominator",
      definition: "A shared denominator used to add or subtract fractions.",
    },
  ],
  concepts: [
    {
      id: "edm7-u2-equivalent",
      title: "Equivalent Fractions",
      skill: "Find equivalent fractions and simplify to lowest terms.",
      lesson: {
        sections: [
          {
            heading: "What makes fractions equivalent?",
            body: "Multiplying or dividing **both** numerator and denominator by the same number keeps the value: $\\frac{1}{2} = \\frac{1 \\times 3}{2 \\times 3} = \\frac{3}{6}$. The fraction bar means division — $\\frac{1}{2} = 0.5$ regardless of how it's written.\n\n**Simplifying** goes the other way — divide top and bottom by common factors: $\\frac{12}{18} = \\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$. A fraction is in **lowest terms** when numerator and denominator share no common factor > 1.",
          },
          {
            heading: "Why equivalence matters",
            body: "Equivalent fractions let us **compare** ($\\frac{2}{3}$ vs $\\frac{3}{5}$ — convert to common denominator $\\frac{10}{15}$ vs $\\frac{9}{15}$), **add/subtract** (need common denominators), and **simplify** answers.\n\n**Mixed numbers**: improper fractions ($\\frac{7}{4}$) convert to mixed ($1\\frac{3}{4}$): divide numerator by denominator — quotient is whole, remainder over denominator.",
          },
        ],
        keyFormulas: [
          {
            name: "Equivalence",
            statement:
              "$\\frac{a}{b} = \\frac{an}{bn}$ — multiply top and bottom by same number.",
          },
          {
            name: "Lowest terms",
            statement: "Divide by HCF of numerator and denominator.",
          },
        ],
        workedExample: {
          problem: "Simplify $\\frac{24}{36}$.",
          solution:
            "HCF of 24 and 36 is 12: $\\frac{24 \\div 12}{36 \\div 12} = \\frac{2}{3}$.",
        },
      },
      questions: [
        {
          id: "edm7-u2-equivalent-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which fraction is equivalent to $\\frac{1}{3}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{5}{12}$" },
              { id: "b", text: "$\\frac{3}{9}$" },
              { id: "c", text: "$\\frac{2}{5}$" },
              { id: "d", text: "$\\frac{4}{10}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equivalent fraction",
                statement: "Same value — $\\frac{3}{9} = \\frac{1}{3}$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{3}{9}$ simplifies to $\\frac{1}{3}$.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $\\frac{3}{9}$",
            commonErrors: [
              "Choosing $\\frac{4}{10}$ — looks similar but isn't equal.",
            ],
          },
        },
        {
          id: "edm7-u2-equivalent-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify $\\frac{18}{24}$ to its lowest terms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Simplifying",
                statement: "Divide numerator and denominator by their HCF.",
              },
            ],
            steps: [
              { reasoning: "HCF of 18 and 24 is 6.", marks: 1, markCode: "M" },
              {
                reasoning: "$\\frac{18 \\div 6}{24 \\div 6}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= \\frac{3}{4}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{4}$",
            commonErrors: ["Dividing by wrong factor — not lowest terms."],
          },
        },
        {
          id: "edm7-u2-equivalent-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Which is larger: $\\frac{2}{3}$ or $\\frac{3}{5}$?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Comparing fractions",
                statement:
                  "Convert to common denominator: $\\frac{10}{15}$ vs $\\frac{9}{15}$.",
              },
            ],
            steps: [
              { reasoning: "Common denominator 15.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "$\\frac{2}{3} = \\frac{10}{15}$, $\\frac{3}{5} = \\frac{9}{15}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{10}{15} > \\frac{9}{15}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{2}{3}$ is larger.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{2}{3}$",
            commonErrors: [
              "Comparing numerators/denominators separately.",
              "Cross-multiplying incorrectly.",
            ],
          },
        },
        {
          id: "edm7-u2-equivalent-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Convert between improper and mixed fractions.",
          parts: [
            {
              label: "a",
              prompt: "Write $\\frac{11}{4}$ as a mixed number.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Write $2\\frac{3}{5}$ as an improper fraction.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why conversion is useful.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Improper ↔ mixed",
                statement:
                  "Divide for improper→mixed; multiply+add for mixed→improper.",
              },
            ],
            steps: [
              {
                reasoning: "$11 \\div 4 = 2$ remainder $3$.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Whole = 2, remainder over denominator.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$2\\frac{3}{4}$.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$2 \\times 5 = 10$, $10 + 3 = 13$.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Denominator stays 5.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$\\frac{13}{5}$.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Mixed numbers easier to visualise.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Improper easier for multiplication/division.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) $2\\frac{3}{4}$ (b) $\\frac{13}{5}$ (c) context-dependent ease",
            commonErrors: [
              "Remainder as numerator of whole.",
              "Forgetting to multiply whole by denominator.",
            ],
          },
        },
      ],
    },
    {
      id: "edm7-u2-operations",
      title: "Adding and Subtracting Fractions",
      skill:
        "Add and subtract fractions with same and different denominators, including mixed numbers.",
      lesson: {
        sections: [
          {
            heading: "Same denominators",
            body: "When denominators match, add/subtract numerators: $\\frac{3}{8} + \\frac{2}{8} = \\frac{5}{8}$. Denominator stays the same — it tells how many parts make the whole.\n\n**Mixed numbers**: convert to improper first OR add wholes and fractions separately — $1\\frac{1}{4} + 2\\frac{3}{4} = 3 + \\frac{4}{4} = 3 + 1 = 4$. Watch for fractions summing to ≥ 1 — carry the whole number.",
          },
          {
            heading: "Different denominators",
            body: "Find a **common denominator** — usually LCM of the denominators. $\\frac{1}{2} + \\frac{1}{3}$: LCM is 6 → $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.\n\n**Subtracting**: may need borrowing — $2\\frac{1}{4} - \\frac{3}{4}$: convert to $\\frac{9}{4} - \\frac{3}{4} = \\frac{6}{4} = 1\\frac{1}{2}$. Always simplify the final answer.",
          },
        ],
        keyFormulas: [
          {
            name: "Adding fractions",
            statement:
              "Common denominator first, then add/subtract numerators.",
          },
          {
            name: "LCM method",
            statement: "Use LCM of denominators as common denominator.",
          },
        ],
        workedExample: {
          problem: "Calculate $\\frac{2}{3} + \\frac{1}{4}$.",
          solution:
            "LCM of 3 and 4 is 12: $\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$.",
        },
      },
      questions: [
        {
          id: "edm7-u2-operations-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Calculate $\\frac{3}{7} + \\frac{2}{7}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Same denominator addition",
                statement: "Add numerators, keep denominator.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{5}{7}$ — numerators add, denominator stays.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$\\frac{5}{7}$",
            commonErrors: ["Adding denominators — $\\frac{5}{14}$."],
          },
        },
        {
          id: "edm7-u2-operations-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate $\\frac{1}{2} + \\frac{1}{3}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Common denominator",
                statement: "LCM of 2 and 3 is 6.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{1}{2} = \\frac{3}{6}$, $\\frac{1}{3} = \\frac{2}{6}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Final answer $\\frac{5}{6}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{5}{6}$",
            commonErrors: ["Adding denominators.", "Wrong common denominator."],
          },
        },
        {
          id: "edm7-u2-operations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate $1\\frac{2}{5} + 2\\frac{1}{3}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Mixed number addition",
                statement:
                  "Convert to improper or add wholes + fractions separately.",
              },
            ],
            steps: [
              {
                reasoning: "Improper: $\\frac{7}{5} + \\frac{7}{3}$ — LCM 15.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\frac{21}{15} + \\frac{35}{15} = \\frac{56}{15}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert back: $3\\frac{11}{15}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: $1 + 2 = 3$ wholes, fractions sum $> 1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3\\frac{11}{15}$",
            commonErrors: [
              "Adding wholes and denominators.",
              "Not converting back to mixed.",
            ],
          },
        },
        {
          id: "edm7-u2-operations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A recipe needs $\\frac{3}{4}$ cup of flour for pancakes and $1\\frac{1}{2}$ cups for waffles. How much flour total?",
          parts: [
            {
              label: "a",
              prompt: "Write $1\\frac{1}{2}$ as an improper fraction.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find a common denominator and add.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "Give the answer as a mixed number.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fraction addition",
                statement:
                  "Convert mixed to improper, find common denominator, add.",
              },
            ],
            steps: [
              {
                reasoning: "$1\\frac{1}{2} = \\frac{3}{2}$.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Common denominator of 4 and 2 is 4.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$\\frac{3}{4} + \\frac{6}{4} = \\frac{9}{4}$.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Addition correct.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$\\frac{9}{4} = 2\\frac{1}{4}$ cups.",
                marks: 2,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "$2\\frac{1}{4}$ cups",
            commonErrors: [
              "Adding denominators.",
              "Leaving improper fraction.",
            ],
          },
        },
      ],
    },
  ],
};
