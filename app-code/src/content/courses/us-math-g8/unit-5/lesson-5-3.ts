import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "m8-u5-lesson-5-3",
  code: "5-3",
  title: "Operations with Rational and Irrational Numbers",
  goal: "I CAN perform arithmetic operations involving rational and irrational numbers and simplify radical expressions.",
  standards: ["8.NS.A.1", "8.NS.A.2"],
  vocabulary: [
    {
      term: "Radical",
      definition:
        "An expression involving a root, such as $\\sqrt{5}$ or $\\sqrt[3]{8}$.",
    },
    { term: "Radicand", definition: "The number under the radical sign." },
    {
      term: "Simplifying radicals",
      definition:
        "Rewriting a radical in simplest form by extracting perfect square factors.",
    },
    {
      term: "Like radicals",
      definition:
        "Radicals with the same radicand, such as $\\sqrt{2}$ and $3\\sqrt{2}$.",
    },
    {
      term: "Rationalizing",
      definition: "Eliminating radicals from denominators.",
    },
    {
      term: "Conjugate",
      definition: "Binomials like $(a + b)(a - b) = a^2 - b^2$.",
    },
  ],
  concepts: [
    {
      id: "m8-u5-simplifying-radicals",
      title: "Simplifying radical expressions",
      skill:
        "Simplify radicals by extracting perfect square factors and combining like terms.",
      lesson: {
        sections: [
          {
            heading: "Extracting perfect squares",
            body: "To simplify $\\sqrt{50}$: factor $50 = 25 \\times 2 = 5^2 \\times 2$; extract $\\sqrt{25} = 5$; result $5\\sqrt{2}$. For $\\sqrt{72}$: $72 = 36 \\times 2 = 6^2 \\times 2$; result $6\\sqrt{2}$.",
          },
          {
            heading: "Combining like radicals",
            body: "Like radicals (same radicand) can be combined: $3\\sqrt{5} + 2\\sqrt{5} = 5\\sqrt{5}$; $7\\sqrt{3} - 4\\sqrt{3} = 3\\sqrt{3}$. Unlike radicals cannot be combined: $\\sqrt{2} + \\sqrt{3}$ stays as is.",
          },
          {
            heading: "Multiplying radicals",
            body: "$\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}$: $\\sqrt{2} \\times \\sqrt{8} = \\sqrt{16} = 4$. For coefficients: $3\\sqrt{2} \\times 4\\sqrt{3} = 12\\sqrt{6}$.",
          },
        ],
        keyFormulas: [
          { name: "Simplify", statement: "$\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$" },
          {
            name: "Like radicals",
            statement: "Same radicand → combine coefficients",
          },
          {
            name: "Multiply",
            statement: "$\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$",
          },
        ],
        workedExample: {
          problem: "Simplify $\\sqrt{48} + \\sqrt{12}$.",
          solution:
            "$\\sqrt{48} = 4\\sqrt{3}$; $\\sqrt{12} = 2\\sqrt{3}$; $4\\sqrt{3} + 2\\sqrt{3} = 6\\sqrt{3}$.",
        },
      },
      questions: [
        {
          id: "m8-u5-simplifying-radicals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $\\sqrt{50}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5\\sqrt{2}$" },
              { id: "b", text: "$2\\sqrt{5}$" },
              { id: "c", text: "$\\sqrt{10}$" },
              { id: "d", text: "$25\\sqrt{2}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Simplifying radicals",
                statement: "Extract perfect square factors.",
              },
            ],
            steps: [
              {
                reasoning: "$50 = 25 \\times 2$; $\\sqrt{50} = 5\\sqrt{2}$.",
                evidence: "5sqrt2",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $5\\sqrt{2}$",
            commonErrors: ["Not extracting largest perfect square."],
          },
        },
        {
          id: "m8-u5-simplifying-radicals-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $3\\sqrt{5} + 2\\sqrt{5}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Result", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Like radicals",
                statement: "Combine coefficients.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$3\\sqrt{5} + 2\\sqrt{5} = (3+2)\\sqrt{5} = 5\\sqrt{5}$.",
                working: "5\\sqrt{5}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5\\sqrt{5}$",
            commonErrors: ["Adding radicands instead of coefficients."],
          },
        },
        {
          id: "m8-u5-simplifying-radicals-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify each expression.",
          parts: [
            { label: "a", prompt: "$\\sqrt{72}$", marks: 1 },
            { label: "b", prompt: "$\\sqrt{32} + \\sqrt{18}$", marks: 1 },
            { label: "c", prompt: "$2\\sqrt{7} \\times 3\\sqrt{7}$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Simplifying radicals",
                statement: "Extract perfect squares.",
              },
              {
                kind: "formula",
                name: "Multiply radicals",
                statement: "$\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$72 = 36 \\times 2$; $\\sqrt{72} = 6\\sqrt{2}$.",
                evidence: "6sqrt2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$\\sqrt{32} = 4\\sqrt{2}$; $\\sqrt{18} = 3\\sqrt{2}$; sum = $7\\sqrt{2}$.",
                evidence: "7sqrt2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$2 \\times 3 \\times \\sqrt{49} = 6 \\times 7 = 42$.",
                evidence: "42",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $6\\sqrt{2}$ (b) $7\\sqrt{2}$ (c) $42$",
            commonErrors: ["In (c), not recognizing $\\sqrt{49} = 7$."],
          },
        },
        {
          id: "m8-u5-simplifying-radicals-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Simplify each expression.",
          parts: [
            { label: "a", prompt: "$\\sqrt{80}$", marks: 2 },
            { label: "b", prompt: "$\\sqrt{27} + \\sqrt{75}$", marks: 2 },
            { label: "c", prompt: "$3\\sqrt{2} \\times 4\\sqrt{8}$", marks: 2 },
            { label: "d", prompt: "$\\sqrt{45} - \\sqrt{20}$", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Simplifying radicals",
                statement: "Extract perfect squares.",
              },
              {
                kind: "formula",
                name: "Multiply radicals",
                statement: "$\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$80 = 16 \\times 5$; $\\sqrt{80} = 4\\sqrt{5}$.",
                evidence: "4sqrt5",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$\\sqrt{27} = 3\\sqrt{3}$; $\\sqrt{75} = 5\\sqrt{3}$; sum = $8\\sqrt{3}$.",
                evidence: "8sqrt3",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$3 \\times 4 \\times \\sqrt{16} = 12 \\times 4 = 48$.",
                evidence: "48",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$\\sqrt{45} = 3\\sqrt{5}$; $\\sqrt{20} = 2\\sqrt{5}$; difference = $\\sqrt{5}$.",
                evidence: "sqrt5",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $4\\sqrt{5}$ (b) $8\\sqrt{3}$ (c) $48$ (d) $\\sqrt{5}$",
            commonErrors: ["In (d), not combining like radicals."],
          },
        },
      ],
    },
    {
      id: "m8-u5-rationalizing",
      title: "Rationalizing denominators",
      skill:
        "Eliminate radicals from denominators using conjugates and multiplication.",
      lesson: {
        sections: [
          {
            heading: "Simple radical denominators",
            body: "To rationalize $\\frac{1}{\\sqrt{2}}$: multiply numerator and denominator by $\\sqrt{2}$: $\\frac{1}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$.",
          },
          {
            heading: "Binomial denominators",
            body: "For $\\frac{1}{\\sqrt{3} + 1}$: multiply by conjugate $\\frac{\\sqrt{3} - 1}{\\sqrt{3} - 1}$: $\\frac{\\sqrt{3} - 1}{(\\sqrt{3})^2 - 1^2} = \\frac{\\sqrt{3} - 1}{3 - 1} = \\frac{\\sqrt{3} - 1}{2}$.",
          },
          {
            heading: "Conjugate pairs",
            body: "The conjugate of $a + b$ is $a - b$; their product is $a^2 - b^2$ (difference of squares). For $\\frac{3}{\\sqrt{5} - \\sqrt{2}}$: multiply by $\\frac{\\sqrt{5} + \\sqrt{2}}{\\sqrt{5} + \\sqrt{2}}$: $\\frac{3(\\sqrt{5} + \\sqrt{2})}{5 - 2} = \\sqrt{5} + \\sqrt{2}$.",
          },
        ],
        keyFormulas: [
          {
            name: "Simple",
            statement: "Multiply by $\\frac{\\sqrt{a}}{\\sqrt{a}}$",
          },
          { name: "Conjugate", statement: "$(a+b)(a-b) = a^2 - b^2$" },
          {
            name: "Difference of squares",
            statement: "Eliminates radicals in denominator",
          },
        ],
        workedExample: {
          problem: "Rationalize $\\frac{2}{\\sqrt{6}}$.",
          solution:
            "$\\frac{2}{\\sqrt{6}} \\times \\frac{\\sqrt{6}}{\\sqrt{6}} = \\frac{2\\sqrt{6}}{6} = \\frac{\\sqrt{6}}{3}$.",
        },
      },
      questions: [
        {
          id: "m8-u5-rationalizing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Rationalize $\\frac{1}{\\sqrt{3}}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\sqrt{3}}{3}$" },
              { id: "b", text: "$\\frac{1}{3}$" },
              { id: "c", text: "$\\sqrt{3}$" },
              { id: "d", text: "$\\frac{3}{\\sqrt{3}}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rationalizing",
                statement: "Multiply by radical.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{1}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$.",
                evidence: "sqrt3/3",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $\\frac{\\sqrt{3}}{3}$",
            commonErrors: ["Not multiplying numerator and denominator."],
          },
        },
        {
          id: "m8-u5-rationalizing-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rationalize $\\frac{4}{\\sqrt{8}}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Result", answer: 1.41 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rationalizing",
                statement: "Multiply by radical.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{4}{\\sqrt{8}} = \\frac{4}{2\\sqrt{2}} = \\frac{2}{\\sqrt{2}} = \\frac{2\\sqrt{2}}{2} = \\sqrt{2} \\approx 1.41$.",
                working: "\\sqrt{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "1.41",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\sqrt{2}$ or $\\frac{\\sqrt{2}}{1}$",
            commonErrors: ["Not simplifying $\\sqrt{8}$ first."],
          },
        },
        {
          id: "m8-u5-rationalizing-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rationalize each expression.",
          parts: [
            { label: "a", prompt: "$\\frac{1}{\\sqrt{5}}$", marks: 1 },
            { label: "b", prompt: "$\\frac{3}{\\sqrt{12}}$", marks: 1 },
            {
              label: "c",
              prompt: "$\\frac{1}{\\sqrt{2} + \\sqrt{3}}$",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rationalizing",
                statement: "Multiply by radical or conjugate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$\\frac{1}{\\sqrt{5}} \\times \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}$.",
                evidence: "sqrt5/5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$\\sqrt{12} = 2\\sqrt{3}$; $\\frac{3}{2\\sqrt{3}} = \\frac{3\\sqrt{3}}{6} = \\frac{\\sqrt{3}}{2}$.",
                evidence: "sqrt3/2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Multiply by conjugate $\\frac{\\sqrt{2} - \\sqrt{3}}{\\sqrt{2} - \\sqrt{3}}$: $\\frac{\\sqrt{2} - \\sqrt{3}}{2 - 3} = \\sqrt{3} - \\sqrt{2}$.",
                evidence: "sqrt3-sqrt2",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $\\frac{\\sqrt{5}}{5}$ (b) $\\frac{\\sqrt{3}}{2}$ (c) $\\sqrt{3} - \\sqrt{2}$",
            commonErrors: ["In (c), not using conjugate."],
          },
        },
        {
          id: "m8-u5-rationalizing-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Rationalize each expression.",
          parts: [
            { label: "a", prompt: "$\\frac{5}{\\sqrt{10}}$", marks: 2 },
            { label: "b", prompt: "$\\frac{2}{\\sqrt{3} - 1}$", marks: 2 },
            {
              label: "c",
              prompt: "$\\frac{1}{2\\sqrt{5} + \\sqrt{2}}$",
              marks: 2,
            },
            { label: "d", prompt: "$\\frac{\\sqrt{6}}{\\sqrt{3}}$", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rationalizing",
                statement: "Multiply by radical or conjugate.",
              },
              {
                kind: "formula",
                name: "Conjugate",
                statement: "$(a+b)(a-b) = a^2 - b^2$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$\\frac{5}{\\sqrt{10}} \\times \\frac{\\sqrt{10}}{\\sqrt{10}} = \\frac{5\\sqrt{10}}{10} = \\frac{\\sqrt{10}}{2}$.",
                evidence: "sqrt10/2",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Multiply by $\\frac{\\sqrt{3} + 1}{\\sqrt{3} + 1}$: $\\frac{2(\\sqrt{3} + 1)}{3 - 1} = \\sqrt{3} + 1$.",
                evidence: "sqrt3+1",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Multiply by conjugate $\\frac{2\\sqrt{5} - \\sqrt{2}}{2\\sqrt{5} - \\sqrt{2}}$: $\\frac{2\\sqrt{5} - \\sqrt{2}}{20 - 2} = \\frac{2\\sqrt{5} - \\sqrt{2}}{18}$.",
                evidence: "(2sqrt5-sqrt2)/18",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$\\frac{\\sqrt{6}}{\\sqrt{3}} = \\sqrt{\\frac{6}{3}} = \\sqrt{2}$.",
                evidence: "sqrt2",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $\\frac{\\sqrt{10}}{2}$ (b) $\\sqrt{3} + 1$ (c) $\\frac{2\\sqrt{5} - \\sqrt{2}}{18}$ (d) $\\sqrt{2}$",
            commonErrors: ["In (d), not recognizing radical division."],
          },
        },
      ],
    },
    {
      id: "m8-u5-irrational-operations",
      title: "Arithmetic with irrational numbers",
      skill:
        "Perform addition, subtraction, multiplication, and division with irrational numbers.",
      lesson: {
        sections: [
          {
            heading: "Addition and subtraction",
            body: "Irrational numbers follow same rules as rationals: $\\sqrt{2} + \\sqrt{3} \\approx 3.146$; $\\sqrt{5} - \\sqrt{2} \\approx 0.822$. Cannot simplify unless like radicals: $\\sqrt{2} + 2\\sqrt{2} = 3\\sqrt{2}$.",
          },
          {
            heading: "Multiplication and division",
            body: "$\\sqrt{2} \\times \\sqrt{3} = \\sqrt{6}$; $\\sqrt{8} \\times \\sqrt{2} = \\sqrt{16} = 4$; $\\frac{\\sqrt{12}}{\\sqrt{3}} = \\sqrt{4} = 2$. Coefficients multiply separately: $2\\sqrt{3} \\times 3\\sqrt{5} = 6\\sqrt{15}$.",
          },
          {
            heading: "Mixed operations",
            body: "Apply order of operations: $\\sqrt{2} + \\sqrt{8} \\times \\sqrt{2} = \\sqrt{2} + \\sqrt{16} = \\sqrt{2} + 4 \\approx 5.414$. Parentheses first: $(\\sqrt{3} + \\sqrt{2})(\\sqrt{3} - \\sqrt{2}) = 3 - 2 = 1$.",
          },
        ],
        keyFormulas: [
          {
            name: "Add/subtract",
            statement: "Like radicals combine; unlike stay separate",
          },
          {
            name: "Multiply",
            statement: "$\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$",
          },
          {
            name: "Divide",
            statement: "$\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$",
          },
        ],
        workedExample: {
          problem: "Compute $\\sqrt{2} + \\sqrt{18} - \\sqrt{8}$.",
          solution:
            "$\\sqrt{18} = 3\\sqrt{2}$; $\\sqrt{8} = 2\\sqrt{2}$; $\\sqrt{2} + 3\\sqrt{2} - 2\\sqrt{2} = 2\\sqrt{2}$.",
        },
      },
      questions: [
        {
          id: "m8-u5-irrational-operations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\sqrt{2} \\times \\sqrt{8}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$\\sqrt{10}$" },
              { id: "c", text: "$2\\sqrt{2}$" },
              { id: "d", text: "$8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Multiply radicals",
                statement: "$\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$",
              },
            ],
            steps: [
              {
                reasoning: "$\\sqrt{2} \\times \\sqrt{8} = \\sqrt{16} = 4$.",
                evidence: "4",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $4$",
            commonErrors: ["Adding radicands instead of multiplying."],
          },
        },
        {
          id: "m8-u5-irrational-operations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $\\sqrt{12} + \\sqrt{27} - \\sqrt{48}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Coefficient", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Like radicals",
                statement: "Simplify then combine.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\sqrt{12} = 2\\sqrt{3}$; $\\sqrt{27} = 3\\sqrt{3}$; $\\sqrt{48} = 4\\sqrt{3}$; $2\\sqrt{3} + 3\\sqrt{3} - 4\\sqrt{3} = \\sqrt{3}$.",
                working: "\\sqrt{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\sqrt{3}$",
            commonErrors: ["Not simplifying radicals first."],
          },
        },
        {
          id: "m8-u5-irrational-operations-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compute each expression.",
          parts: [
            { label: "a", prompt: "$\\sqrt{6} \\times \\sqrt{24}$", marks: 1 },
            { label: "b", prompt: "$\\frac{\\sqrt{50}}{\\sqrt{2}}$", marks: 1 },
            { label: "c", prompt: "$2\\sqrt{3} + 4\\sqrt{12}$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Multiply radicals",
                statement: "$\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$",
              },
              {
                kind: "formula",
                name: "Divide radicals",
                statement:
                  "$\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\sqrt{144} = 12$.",
                evidence: "12",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\sqrt{25} = 5$.",
                evidence: "5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$\\sqrt{12} = 2\\sqrt{3}$; $4 \\times 2\\sqrt{3} = 8\\sqrt{3}$; total = $10\\sqrt{3}$.",
                evidence: "10sqrt3",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $12$ (b) $5$ (c) $10\\sqrt{3}$",
            commonErrors: ["In (c), not simplifying $\\sqrt{12}$."],
          },
        },
        {
          id: "m8-u5-irrational-operations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compute each expression.",
          parts: [
            {
              label: "a",
              prompt: "$\\sqrt{2} + \\sqrt{18} - \\sqrt{8}$",
              marks: 2,
            },
            {
              label: "b",
              prompt: "$3\\sqrt{5} \\times 2\\sqrt{20}$",
              marks: 2,
            },
            { label: "c", prompt: "$\\frac{\\sqrt{72}}{\\sqrt{8}}$", marks: 2 },
            {
              label: "d",
              prompt: "$(\\sqrt{5} + \\sqrt{2})(\\sqrt{5} - \\sqrt{2})$",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Radical operations",
                statement: "Simplify and combine.",
              },
              {
                kind: "formula",
                name: "Conjugate",
                statement: "$(a+b)(a-b) = a^2 - b^2$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$\\sqrt{18} = 3\\sqrt{2}$; $\\sqrt{8} = 2\\sqrt{2}$; $\\sqrt{2} + 3\\sqrt{2} - 2\\sqrt{2} = 2\\sqrt{2}$.",
                evidence: "2sqrt2",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$\\sqrt{20} = 2\\sqrt{5}$; $3 \\times 2 \\times \\sqrt{25} = 6 \\times 5 = 30$.",
                evidence: "30",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\sqrt{9} = 3$.",
                evidence: "3",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Difference of squares: $5 - 2 = 3$.",
                evidence: "3",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $2\\sqrt{2}$ (b) $30$ (c) $3$ (d) $3$",
            commonErrors: ["In (d), not recognizing conjugate pattern."],
          },
        },
      ],
    },
  ],
};
