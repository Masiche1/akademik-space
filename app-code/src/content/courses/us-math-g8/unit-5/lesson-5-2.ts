import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "m8-u5-lesson-5-2",
  code: "5-2",
  title: "Converting Repeating Decimals to Fractions",
  goal: "I CAN convert repeating decimals to fractions using algebraic methods and identify terminating vs repeating decimals.",
  standards: ["8.NS.A.1"],
  vocabulary: [
    {
      term: "Repeating decimal",
      definition:
        "A decimal where a digit or block of digits repeats infinitely, written with a bar over the repeating part.",
    },
    {
      term: "Terminating decimal",
      definition: "A decimal that ends, such as $0.75$ or $0.125$.",
    },
    {
      term: "Bar notation",
      definition:
        "Notation using a bar over repeating digits: $0.\\overline{3}$ means $0.333...$",
    },
    {
      term: "Algebraic method",
      definition:
        "Setting $x$ equal to the decimal, multiplying by powers of 10, and solving.",
    },
    {
      term: "Rational decimal",
      definition: "Any decimal that terminates or repeats is rational.",
    },
    {
      term: "Irrational decimal",
      definition: "A decimal that neither terminates nor repeats.",
    },
  ],
  concepts: [
    {
      id: "m8-u5-repeating-decimals",
      title: "Converting repeating decimals to fractions",
      skill:
        "Use algebraic methods to convert repeating decimals to fractions.",
      lesson: {
        sections: [
          {
            heading: "The algebraic method",
            body: "To convert $0.\\overline{3}$ to a fraction: let $x = 0.\\overline{3}$. Multiply by $10$ (since one digit repeats): $10x = 3.\\overline{3}$. Subtract: $10x - x = 3$ → $9x = 3$ → $x = \\frac{1}{3}$.",
          },
          {
            heading: "Two-digit repeating blocks",
            body: "For $0.\\overline{45}$: let $x = 0.\\overline{45}$. Multiply by $100$: $100x = 45.\\overline{45}$. Subtract: $100x - x = 45$ → $99x = 45$ → $x = \\frac{45}{99} = \\frac{5}{11}$.",
          },
          {
            heading: "Mixed repeating decimals",
            body: "For $0.1\\overline{6}$ (one non-repeating digit, one repeating): let $x = 0.1\\overline{6}$. Multiply by $10$: $10x = 1.\\overline{6}$. Multiply by $100$: $100x = 16.\\overline{6}$. Subtract: $100x - 10x = 15$ → $90x = 15$ → $x = \\frac{1}{6}$.",
          },
        ],
        keyFormulas: [
          {
            name: "One digit repeats",
            statement: "Multiply by $10$, subtract $x$",
          },
          {
            name: "Two digits repeat",
            statement: "Multiply by $100$, subtract $x$",
          },
          {
            name: "Mixed",
            statement: "Multiply by $10^a$ and $10^{a+b}$, subtract",
          },
        ],
        workedExample: {
          problem: "Convert $0.\\overline{12}$ to a fraction.",
          solution:
            "Let $x = 0.\\overline{12}$. Multiply by $100$: $100x = 12.\\overline{12}$. Subtract: $99x = 12$ → $x = \\frac{12}{99} = \\frac{4}{33}$.",
        },
      },
      questions: [
        {
          id: "m8-u5-repeating-decimals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What fraction is $0.\\overline{5}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{5}{9}$" },
              { id: "b", text: "$\\frac{5}{10}$" },
              { id: "c", text: "$\\frac{1}{5}$" },
              { id: "d", text: "$\\frac{5}{11}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Algebraic method",
                statement: "Set $x$, multiply, subtract, solve.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$x = 0.\\overline{5}$; $10x = 5.\\overline{5}$; $9x = 5$; $x = \\frac{5}{9}$.",
                evidence: "5/9",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $\\frac{5}{9}$",
            commonErrors: ["Forgetting to subtract $x$."],
          },
        },
        {
          id: "m8-u5-repeating-decimals-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert $0.\\overline{27}$ to a fraction.",
          response: {
            type: "numeric",
            parts: [{ label: "Fraction", answer: 0.273 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Two-digit repeat",
                statement: "Multiply by $100$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$x = 0.\\overline{27}$; $100x = 27.\\overline{27}$; $99x = 27$; $x = \\frac{27}{99} = \\frac{3}{11} \\approx 0.273$.",
                working: "\\frac{3}{11}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\frac{3}{11}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{3}{11}$",
            commonErrors: ["Arithmetic error in simplification."],
          },
        },
        {
          id: "m8-u5-repeating-decimals-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert each decimal to a fraction.",
          parts: [
            { label: "a", prompt: "$0.\\overline{8}$", marks: 1 },
            { label: "b", prompt: "$0.\\overline{15}$", marks: 1 },
            { label: "c", prompt: "$0.\\overline{36}$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Algebraic method",
                statement: "Set $x$, multiply, subtract, solve.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$x = 0.\\overline{8}$; $10x = 8.\\overline{8}$; $9x = 8$; $x = \\frac{8}{9}$.",
                evidence: "8/9",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$x = 0.\\overline{15}$; $100x = 15.\\overline{15}$; $99x = 15$; $x = \\frac{15}{99} = \\frac{5}{33}$.",
                evidence: "5/33",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$x = 0.\\overline{36}$; $100x = 36.\\overline{36}$; $99x = 36$; $x = \\frac{36}{99} = \\frac{4}{11}$.",
                evidence: "4/11",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $\\frac{8}{9}$ (b) $\\frac{5}{33}$ (c) $\\frac{4}{11}$",
            commonErrors: ["Not finding common factors."],
          },
        },
        {
          id: "m8-u5-repeating-decimals-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Convert each decimal to a fraction.",
          parts: [
            { label: "a", prompt: "$0.\\overline{1}$", marks: 2 },
            { label: "b", prompt: "$0.\\overline{7}$", marks: 2 },
            { label: "c", prompt: "$0.\\overline{24}$", marks: 2 },
            { label: "d", prompt: "$0.1\\overline{6}$", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Approximation", answer: 0.11 },
              { label: "(b) Approximation", answer: 0.78 },
              { label: "(c) Approximation", answer: 0.24 },
              { label: "(d) Approximation", answer: 0.17 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Algebraic method",
                statement: "Set $x$, multiply, subtract, solve.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$x = 0.\\overline{1}$; $10x = 1.\\overline{1}$; $9x = 1$; $x = \\frac{1}{9} \\approx 0.111$.",
                working: "\\frac{1}{9}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State answer.",
                working: "\\frac{1}{9}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$x = 0.\\overline{7}$; $10x = 7.\\overline{7}$; $9x = 7$; $x = \\frac{7}{9} \\approx 0.778$.",
                working: "\\frac{7}{9}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State answer.",
                working: "\\frac{7}{9}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$x = 0.\\overline{24}$; $100x = 24.\\overline{24}$; $99x = 24$; $x = \\frac{24}{99} = \\frac{8}{33} \\approx 0.242$.",
                working: "\\frac{8}{33}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State answer.",
                working: "\\frac{8}{33}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "$x = 0.1\\overline{6}$; $10x = 1.\\overline{6}$; $100x = 16.\\overline{6}$; $100x - 10x = 15$; $90x = 15$; $x = \\frac{15}{90} = \\frac{1}{6} \\approx 0.167$.",
                working: "\\frac{1}{6}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "State answer.",
                working: "\\frac{1}{6}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\frac{1}{9}$ (b) $\\frac{7}{9}$ (c) $\\frac{8}{33}$ (d) $\\frac{1}{6}$",
            commonErrors: ["In (d), not handling mixed decimal correctly."],
          },
        },
      ],
    },
    {
      id: "m8-u5-decimal-types",
      title: "Terminating vs repeating decimals",
      skill:
        "Identify whether a decimal terminates or repeats and explain why.",
      lesson: {
        sections: [
          {
            heading: "Terminating decimals",
            body: "A fraction $\\frac{a}{b}$ (in lowest terms) produces a **terminating decimal** if $b$ has only factors of $2$ and $5$. Examples: $\\frac{1}{2} = 0.5$, $\\frac{1}{4} = 0.25$, $\\frac{1}{5} = 0.2$, $\\frac{1}{8} = 0.125$. The number of decimal places equals the larger of the powers of $2$ and $5$ in the denominator.",
          },
          {
            heading: "Repeating decimals",
            body: "If $b$ has factors other than $2$ and $5$, the decimal **repeats**. Examples: $\\frac{1}{3} = 0.\\overline{3}$, $\\frac{1}{6} = 0.1\\overline{6}$, $\\frac{1}{7} = 0.\\overline{142857}$, $\\frac{1}{11} = 0.\\overline{09}$.",
          },
          {
            heading: "Converting terminating decimals",
            body: "Terminating decimals are easy to convert: $0.75 = \\frac{75}{100} = \\frac{3}{4}$; $0.125 = \\frac{125}{1000} = \\frac{1}{8}$. Count decimal places to determine denominator.",
          },
        ],
        keyFormulas: [
          {
            name: "Terminating",
            statement: "Denominator has only $2$ and $5$ factors",
          },
          {
            name: "Repeating",
            statement: "Denominator has other prime factors",
          },
          {
            name: "Conversion",
            statement: "Count decimal places for denominator",
          },
        ],
        workedExample: {
          problem:
            "Does $\\frac{7}{20}$ produce a terminating or repeating decimal?",
          solution:
            "$20 = 2^2 \\times 5$, only factors $2$ and $5$ → terminating. $\\frac{7}{20} = 0.35$.",
        },
      },
      questions: [
        {
          id: "m8-u5-decimal-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fraction produces a terminating decimal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{3}$" },
              { id: "b", text: "$\\frac{1}{4}$" },
              { id: "c", text: "$\\frac{1}{6}$" },
              { id: "d", text: "$\\frac{1}{7}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Decimal types",
                statement: "Denominator factors determine type.",
              },
            ],
            steps: [
              {
                reasoning: "$4 = 2^2$, only factors $2$ → terminating.",
                evidence: "1/4",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $\\frac{1}{4}$",
            commonErrors: ["Not checking denominator factors."],
          },
        },
        {
          id: "m8-u5-decimal-types-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert $0.625$ to a fraction in lowest terms.",
          response: {
            type: "numeric",
            parts: [{ label: "Fraction", answer: 0.625 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Terminating conversion",
                statement: "Count decimal places.",
              },
            ],
            steps: [
              {
                reasoning: "$0.625 = \\frac{625}{1000} = \\frac{5}{8}$.",
                working: "\\frac{5}{8}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\frac{5}{8}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{5}{8}$",
            commonErrors: ["Not simplifying fully."],
          },
        },
        {
          id: "m8-u5-decimal-types-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "For each fraction, state whether the decimal terminates or repeats.",
          parts: [
            { label: "a", prompt: "$\\frac{3}{8}$", marks: 1 },
            { label: "b", prompt: "$\\frac{5}{12}$", marks: 1 },
            { label: "c", prompt: "$\\frac{7}{25}$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Decimal types",
                statement: "Check denominator factors.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$8 = 2^3$, only $2$ → terminates.",
                evidence: "terminates",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "$12 = 2^2 \\times 3$, has $3$ → repeats.",
                evidence: "repeats",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "$25 = 5^2$, only $5$ → terminates.",
                evidence: "terminates",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Terminates (b) Repeats (c) Terminates",
            commonErrors: ["Not factoring denominator completely."],
          },
        },
        {
          id: "m8-u5-decimal-types-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            { label: "a", prompt: "Convert $0.375$ to a fraction.", marks: 2 },
            {
              label: "b",
              prompt: "Does $\\frac{11}{16}$ terminate or repeat?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Convert $0.\\overline{6}$ to a fraction.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Does $\\frac{9}{40}$ terminate or repeat?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Fraction", answer: 0.375 },
              { label: "(b) Type", answer: 1 },
              { label: "(c) Fraction", answer: 0.67 },
              { label: "(d) Type", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Terminating conversion",
                statement: "Count decimal places.",
              },
              {
                kind: "skill",
                name: "Decimal types",
                statement: "Check denominator factors.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$0.375 = \\frac{375}{1000} = \\frac{3}{8}$.",
                working: "\\frac{3}{8}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$16 = 2^4$, only $2$ → terminates.",
                working: "terminates",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "$x = 0.\\overline{6}$; $10x = 6.\\overline{6}$; $9x = 6$; $x = \\frac{6}{9} = \\frac{2}{3}$.",
                working: "\\frac{2}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State answer.",
                working: "\\frac{2}{3}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "$40 = 2^3 \\times 5$, only $2$ and $5$ → terminates.",
                working: "terminates",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $\\frac{3}{8}$ (b) Terminates (c) $\\frac{2}{3}$ (d) Terminates",
            commonErrors: ["In (d), not factoring completely."],
          },
        },
      ],
    },
  ],
};
