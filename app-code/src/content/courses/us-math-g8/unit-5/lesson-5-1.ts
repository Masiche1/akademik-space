import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "m8-u5-lesson-5-1",
  code: "5-1",
  title: "Classifying Real Numbers and Approximating Irrationals",
  goal: "I CAN classify numbers as rational or irrational, approximate square roots, and order real numbers on the number line.",
  standards: ["8.NS.A.1", "8.NS.A.2"],
  vocabulary: [
    {
      term: "Rational number",
      definition:
        "A number expressible as $\\frac{a}{b}$ where $a, b$ are integers and $b \\neq 0$.",
    },
    {
      term: "Irrational number",
      definition:
        "A real number that cannot be expressed as a fraction; decimal form never terminates or repeats.",
    },
    {
      term: "Real numbers",
      definition: "All rational and irrational numbers combined.",
    },
    {
      term: "Perfect square",
      definition:
        "An integer that is the square of another integer, such as $1, 4, 9, 16, 25$.",
    },
    {
      term: "Square root",
      definition:
        "A number that, when multiplied by itself, gives the original number.",
    },
    {
      term: "Approximation",
      definition: "A value close to but not exactly equal to a number.",
    },
  ],
  concepts: [
    {
      id: "m8-u5-classify-numbers",
      title: "Classifying real numbers",
      skill:
        "Identify whether a number is rational or irrational and justify the classification.",
      lesson: {
        sections: [
          {
            heading: "Rational vs irrational",
            body: "**Rational numbers** include integers, fractions, terminating decimals ($0.75$), and repeating decimals ($0.\\overline{3}$). **Irrational numbers** include square roots of non-perfect squares ($\\sqrt{2}, \\sqrt{3}$), $\\pi$, and $e$. The key test: can the number be written as a fraction of two integers? If yes, rational; if no, irrational.",
          },
          {
            heading: "Common irrational numbers",
            body: "Famous irrationals: $\\pi \\approx 3.14159...$, $e \\approx 2.71828...$, $\\sqrt{2} \\approx 1.41421...$, $\\sqrt{3} \\approx 1.73205...$. All have decimal expansions that never end and never repeat. Square roots of perfect squares ($\\sqrt{4} = 2$, $\\sqrt{9} = 3$) are rational because they simplify to integers.",
          },
          {
            heading: "Classifying expressions",
            body: "To classify an expression: simplify first. $\\sqrt{16} = 4$ (rational); $\\sqrt{18} = 3\\sqrt{2}$ (irrational); $\\frac{7}{11}$ (rational); $0.\\overline{45}$ (rational); $\\sqrt{\\frac{1}{4}} = \\frac{1}{2}$ (rational).",
          },
        ],
        keyFormulas: [
          {
            name: "Rational test",
            statement: "Can it be written as $\\frac{a}{b}$?",
          },
          {
            name: "Perfect square root",
            statement: "Square root of perfect square is integer",
          },
          {
            name: "Non-perfect square root",
            statement: "Square root of non-perfect square is irrational",
          },
        ],
        workedExample: {
          problem: "Classify $\\sqrt{50}$ as rational or irrational.",
          solution:
            "$\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$. Since $\\sqrt{2}$ is irrational, $5\\sqrt{2}$ is irrational.",
        },
      },
      questions: [
        {
          id: "m8-u5-classify-numbers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is irrational?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3}{4}$" },
              { id: "b", text: "$\\sqrt{7}$" },
              { id: "c", text: "$0.\\overline{6}$" },
              { id: "d", text: "$-5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Irrational number",
                statement: "Cannot be written as fraction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\sqrt{7}$ is irrational because 7 is not a perfect square.",
                evidence: "sqrt7",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $\\sqrt{7}$",
            commonErrors: ["Thinking all roots are irrational."],
          },
        },
        {
          id: "m8-u5-classify-numbers-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Classify each number as rational or irrational.",
          parts: [
            { label: "a", prompt: "$\\sqrt{36}$", marks: 1 },
            { label: "b", prompt: "$\\sqrt{45}$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Classification",
                statement:
                  "Perfect squares → rational; non-perfect → irrational.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\sqrt{36} = 6$, an integer, so rational.",
                evidence: "rational",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "$\\sqrt{45} = 3\\sqrt{5}$, irrational.",
                evidence: "irrational",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Rational (b) Irrational",
            commonErrors: ["Not simplifying before classifying."],
          },
        },
        {
          id: "m8-u5-classify-numbers-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classify each expression as rational or irrational.",
          parts: [
            { label: "a", prompt: "$\\sqrt{\\frac{9}{16}}$", marks: 1 },
            { label: "b", prompt: "$\\pi + \\pi$", marks: 1 },
            { label: "c", prompt: "$\\frac{5}{7} + \\frac{2}{7}$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Expression classification",
                statement: "Simplify before classifying.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\sqrt{\\frac{9}{16}} = \\frac{3}{4}$, rational.",
                evidence: "rational",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "$2\\pi$ is irrational (product of rational and irrational).",
                evidence: "irrational",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "$\\frac{7}{7} = 1$, rational.",
                evidence: "rational",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Rational (b) Irrational (c) Rational",
            commonErrors: ["Assuming $\\pi$ operations stay irrational."],
          },
        },
        {
          id: "m8-u5-classify-numbers-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Classify each number and justify your answer.",
          parts: [
            { label: "a", prompt: "$\\sqrt{100}$", marks: 2 },
            { label: "b", prompt: "$\\sqrt{20}$", marks: 2 },
            {
              label: "c",
              prompt: "$0.123456789...$ (non-repeating)",
              marks: 2,
            },
            { label: "d", prompt: "$\\sqrt{2} + \\sqrt{2}$", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Classification",
                statement:
                  "Perfect squares → rational; non-perfect → irrational.",
              },
              {
                kind: "skill",
                name: "Irrational operations",
                statement: "Irrational + irrational can be irrational.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\sqrt{100} = 10$, integer, rational.",
                evidence: "rational",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "$\\sqrt{20} = 2\\sqrt{5}$, irrational.",
                evidence: "irrational",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Non-terminating, non-repeating decimal → irrational.",
                evidence: "irrational",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "$2\\sqrt{2}$, irrational (irrational × rational).",
                evidence: "irrational",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Rational (b) Irrational (c) Irrational (d) Irrational",
            commonErrors: ["Thinking irrational + irrational = rational."],
          },
        },
      ],
    },
    {
      id: "m8-u5-approximating-irrationals",
      title: "Approximating square roots",
      skill:
        "Estimate square roots between consecutive integers and refine approximations.",
      lesson: {
        sections: [
          {
            heading: "Bounding square roots",
            body: "To approximate $\\sqrt{n}$, find the perfect squares just below and above $n$. For $\\sqrt{20}$: $16 < 20 < 25$, so $4 < \\sqrt{20} < 5$. For tighter bounds: $4.4^2 = 19.36$, $4.5^2 = 20.25$, so $4.4 < \\sqrt{20} < 4.5$.",
          },
          {
            heading: "Refining approximations",
            body: "Use successive squaring to narrow the range. For $\\sqrt{20}$: try $4.4$ → $19.36$ (too low), $4.5$ → $20.25$ (too high). Try $4.47$ → $19.98$ (close), $4.48$ → $20.07$ (close). So $\\sqrt{20} \\approx 4.47$.",
          },
          {
            heading: "Ordering irrationals",
            body: "To order irrationals, compare their squares. $\\sqrt{5} \\approx 2.24$, $\\sqrt{6} \\approx 2.45$, $\\sqrt{7} \\approx 2.65$. Since $5 < 6 < 7$, $\\sqrt{5} < \\sqrt{6} < \\sqrt{7}$.",
          },
        ],
        keyFormulas: [
          {
            name: "Bounding",
            statement:
              "Find perfect squares $a^2 < n < b^2$ → $a < \\sqrt{n} < b$",
          },
          { name: "Refining", statement: "Test squares of candidate values" },
          { name: "Ordering", statement: "Compare radicands for square roots" },
        ],
        workedExample: {
          problem: "Approximate $\\sqrt{50}$ to the nearest tenth.",
          solution:
            "$49 < 50 < 64$, so $7 < \\sqrt{50} < 8$. Try $7.07^2 = 49.98$ (close), $7.08^2 = 50.13$. So $\\sqrt{50} \\approx 7.07$ or $7.1$ to nearest tenth.",
        },
      },
      questions: [
        {
          id: "m8-u5-approximating-irrationals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Between which two consecutive integers does $\\sqrt{30}$ lie?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$ and $6$" },
              { id: "b", text: "$4$ and $5$" },
              { id: "c", text: "$6$ and $7$" },
              { id: "d", text: "$3$ and $4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Bounding",
                statement: "Find surrounding perfect squares.",
              },
            ],
            steps: [
              {
                reasoning: "$25 < 30 < 36$ → $5 < \\sqrt{30} < 6$.",
                evidence: "5,6",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $5$ and $6$",
            commonErrors: ["Using wrong perfect squares."],
          },
        },
        {
          id: "m8-u5-approximating-irrationals-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Approximate $\\sqrt{15}$ to the nearest tenth.",
          response: {
            type: "numeric",
            parts: [{ label: "Approximation", answer: 3.9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Refining",
                statement: "Test squares of candidates.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$9 < 15 < 16$ → $3 < \\sqrt{15} < 4$; try $3.9^2 = 15.21$ (close), $3.8^2 = 14.44$; so $\\sqrt{15} \\approx 3.9$.",
                working: "3.9",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "3.9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\sqrt{15} \\approx 3.9$",
            commonErrors: ["Not testing enough candidates."],
          },
        },
        {
          id: "m8-u5-approximating-irrationals-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Order these numbers from least to greatest: $\\sqrt{10}, \\sqrt{8}, \\sqrt{12}, 3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ordering",
                statement: "Compare radicands or approximate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Approximate: $\\sqrt{8} \\approx 2.83$, $\\sqrt{10} \\approx 3.16$, $\\sqrt{12} \\approx 3.46$, $3 = \\sqrt{9}$.",
                working: "2.83, 3.16, 3.46, 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Order: $\\sqrt{8} < \\sqrt{9} = 3 < \\sqrt{10} < \\sqrt{12}$ → $\\sqrt{8} < 3 < \\sqrt{10} < \\sqrt{12}$.",
                working: "\\sqrt{8}, 3, \\sqrt{10}, \\sqrt{12}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\sqrt{8}, 3, \\sqrt{10}, \\sqrt{12}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\sqrt{8} < 3 < \\sqrt{10} < \\sqrt{12}$",
            commonErrors: ["Not converting integer to radical form."],
          },
        },
        {
          id: "m8-u5-approximating-irrationals-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt: "Between which integers does $\\sqrt{55}$ lie?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Approximate $\\sqrt{55}$ to the nearest tenth.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Order $\\sqrt{30}, \\sqrt{27}, \\sqrt{33}$ from least to greatest.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Is $\\sqrt{40}$ closer to $6$ or $7$?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Between", answer: 7 },
              { label: "(b) Approximation", answer: 7.4 },
              { label: "(c) Ordered", answer: 0 },
              { label: "(d) Closer to", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Bounding",
                statement: "Find surrounding perfect squares.",
              },
              {
                kind: "skill",
                name: "Refining",
                statement: "Test squares of candidates.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$49 < 55 < 64$ → $7 < \\sqrt{55} < 8$.",
                working: "7 and 8",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Try $7.4^2 = 54.76$ (close), $7.5^2 = 56.25$; so $\\sqrt{55} \\approx 7.4$.",
                working: "7.4",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$27 < 30 < 33$ → $\\sqrt{27} < \\sqrt{30} < \\sqrt{33}$.",
                working: "\\sqrt{27}, \\sqrt{30}, \\sqrt{33}",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "$6^2 = 36$, $7^2 = 49$, $40 - 36 = 4$, $49 - 40 = 9$; closer to $6$.",
                working: "6",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $7$ and $8$ (b) $7.4$ (c) $\\sqrt{27} < \\sqrt{30} < \\sqrt{33}$ (d) $6$",
            commonErrors: ["In (d), not comparing distances."],
          },
        },
      ],
    },
    {
      id: "m8-u5-number-line",
      title: "Number line with irrationals",
      skill:
        "Plot and compare rational and irrational numbers on the number line.",
      lesson: {
        sections: [
          {
            heading: "Locating irrationals",
            body: "To plot $\\sqrt{2}$: it's between $1$ and $2$; more precisely, $1.4 < \\sqrt{2} < 1.5$; even more precisely, $1.41 < \\sqrt{2} < 1.42$. Plot at approximately $1.414$.",
          },
          {
            heading: "Comparing on number line",
            body: "The number line shows order: numbers to the left are smaller, to the right are larger. $\\sqrt{2} \\approx 1.414$, $\\sqrt{3} \\approx 1.732$, $\\sqrt{5} \\approx 2.236$. So $\\sqrt{2} < \\sqrt{3} < \\sqrt{5}$ on the number line.",
          },
          {
            heading: "Absolute value and distance",
            body: "Distance between two points on number line = $|a - b|$. Distance between $\\sqrt{2}$ and $\\sqrt{8}$: $|1.414 - 2.828| = 1.414$. Distance from $-\\sqrt{3}$ to $\\sqrt{3}$: $|{-1.732} - 1.732| = 3.464$.",
          },
        ],
        keyFormulas: [
          { name: "Order", statement: "Left = smaller, right = larger" },
          { name: "Distance", statement: "$|a - b|$" },
          { name: "Approximation", statement: "Use decimal approximations" },
        ],
        workedExample: {
          problem: "Which is greater: $\\sqrt{10}$ or $\\pi$?",
          solution:
            "$\\sqrt{10} \\approx 3.162$, $\\pi \\approx 3.142$. Since $3.162 > 3.142$, $\\sqrt{10} > \\pi$.",
        },
      },
      questions: [
        {
          id: "m8-u5-number-line-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is greater: $\\sqrt{2}$ or $1.5$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt{2}$" },
              { id: "b", text: "$1.5$" },
              { id: "c", text: "They are equal" },
              { id: "d", text: "Cannot determine" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Number line",
                statement: "Approximate and compare.",
              },
            ],
            steps: [
              {
                reasoning: "$\\sqrt{2} \\approx 1.414 < 1.5$.",
                evidence: "1.5",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $1.5$",
            commonErrors: ["Thinking $\\sqrt{2} > 1.5$."],
          },
        },
        {
          id: "m8-u5-number-line-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the distance between $\\sqrt{4}$ and $\\sqrt{9}$ on the number line.",
          response: {
            type: "numeric",
            parts: [{ label: "Distance", answer: 1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance", statement: "$|a - b|$." },
            ],
            steps: [
              {
                reasoning:
                  "$\\sqrt{4} = 2$, $\\sqrt{9} = 3$; distance = $|2 - 3| = 1$.",
                working: "1",
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
            finalAnswer: "$1$",
            commonErrors: ["Not simplifying radicals first."],
          },
        },
        {
          id: "m8-u5-number-line-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Order these from least to greatest: $-\\sqrt{5}, \\sqrt{3}, -2, \\sqrt{7}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ordering",
                statement:
                  "Negative irrationals are left of negative integers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Approximate: $-\\sqrt{5} \\approx -2.236$, $\\sqrt{3} \\approx 1.732$, $-2$, $\\sqrt{7} \\approx 2.646$.",
                working: "-2.236, 1.732, -2, 2.646",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Order: $-2.236 < -2 < 1.732 < 2.646$ → $-\\sqrt{5} < -2 < \\sqrt{3} < \\sqrt{7}$.",
                working: "-\\sqrt{5}, -2, \\sqrt{3}, \\sqrt{7}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "-\\sqrt{5}, -2, \\sqrt{3}, \\sqrt{7}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-\\sqrt{5} < -2 < \\sqrt{3} < \\sqrt{7}$",
            commonErrors: ["Not handling negative irrationals."],
          },
        },
        {
          id: "m8-u5-number-line-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt: "Which is greater: $\\sqrt{15}$ or $\\sqrt{14}$?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find distance between $-\\sqrt{3}$ and $\\sqrt{3}$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Order $-\\sqrt{10}, -3, \\sqrt{5}, 0$ from least to greatest.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Is $\\sqrt{26}$ closer to $5$ or $6$?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Greater", answer: 1 },
              { label: "(b) Distance", answer: 3.46 },
              { label: "(c) Ordered", answer: 0 },
              { label: "(d) Closer to", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ordering",
                statement: "Compare radicands for positive roots.",
              },
              { kind: "formula", name: "Distance", statement: "$|a - b|$." },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$15 > 14$ → $\\sqrt{15} > \\sqrt{14}$.",
                working: "\\sqrt{15}",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "$|{-\\sqrt{3}} - \\sqrt{3}| = |{-2\\sqrt{3}}| = 2\\sqrt{3} \\approx 3.46$.",
                working: "2\\sqrt{3} \\approx 3.46",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$-\\sqrt{10} \\approx -3.16$, $-3$, $\\sqrt{5} \\approx 2.24$, $0$; order: $-3.16 < -3 < 0 < 2.24$ → $-\\sqrt{10} < -3 < 0 < \\sqrt{5}$.",
                working: "-\\sqrt{10}, -3, 0, \\sqrt{5}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$5^2 = 25$, $6^2 = 36$, $26 - 25 = 1$, $36 - 26 = 10$; closer to $5$.",
                working: "5",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $\\sqrt{15}$ (b) $2\\sqrt{3} \\approx 3.46$ (c) $-\\sqrt{10} < -3 < 0 < \\sqrt{5}$ (d) $5$",
            commonErrors: ["In (d), not comparing distances."],
          },
        },
      ],
    },
  ],
};
