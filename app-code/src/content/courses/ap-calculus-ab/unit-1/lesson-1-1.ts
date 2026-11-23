import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apcab-u1-lesson-1-1",
  code: "1-1",
  title: "Introducing Limits",
  goal: "I CAN evaluate limits using graphs, tables, and direct substitution.",
  standards: ["LIM-1"],
  vocabulary: [
    { term: "Limit", definition: "The value a function approaches as $x$ approaches a target value from both sides." },
    { term: "One-sided limit", definition: "The value approached from only the left ($x \\to a^-$) or right ($x \\to a^+$)." },
    { term: "Indeterminate form", definition: "An expression like $\\frac{0}{0}$ whose limit needs further analysis." },
    { term: "Removable discontinuity", definition: "A hole in the graph where the limit exists but the function value does not." },
    { term: "Asymptote", definition: "A line the graph approaches but never reaches." },
  ],
  concepts: [
    {
      id: "apcab-u1-limits-intro",
      title: "Limits",
      skill: "Estimate and evaluate limits from graphs, tables, and algebra.",
      lesson: {
        sections: [
          {
            heading: "What a limit means",
            body: "The limit of $f(x)$ as $x$ approaches $a$ is the single value the outputs settle toward. It does not require $f(a)$ to exist. If left and right limits agree, the two-sided limit exists; if they differ, the limit does not exist (a jump discontinuity).",
          },
          {
            heading: "Algebraic evaluation",
            body: "For continuous functions, try direct substitution first. When substitution gives $\\frac{0}{0}$, factor and cancel, rationalize, or simplify first — the limit often exists even though the function is undefined at the point.",
          },
        ],
        keyFormulas: [
          { name: "Direct substitution", statement: "$\\lim_{x \\to a} f(x) = f(a)$ when $f$ is continuous at $a$" },
          { name: "Factor and cancel", statement: "$\\lim_{x \\to a} \\frac{x^2 - a^2}{x - a} = \\lim_{x \\to a} (x + a) = 2a$" },
        ],
        workedExample: {
          problem: "Evaluate $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$.",
          solution: "Substitution gives $\\frac{0}{0}$, an indeterminate form. Factor: $\\frac{(x-3)(x+3)}{x-3} = x + 3$ for $x \\ne 3$. The limit is $3 + 3 = 6$ — a removable discontinuity (hole) at $x = 3$.",
        },
      },
      questions: [
        {
          id: "apcab-u1-limits-intro-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "As $x$ approaches $2$ from both sides, $f(x)$ approaches $5$. What is $\\lim_{x \\to 2} f(x)$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$5$"
                    },
                    {
                              "id": "b",
                              "text": "$f(2)$"
                    },
                    {
                              "id": "c",
                              "text": "Does not exist"
                    },
                    {
                              "id": "d",
                              "text": "$0$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Limit",
                              "statement": "The limit is the approached value, independent of $f(2)$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both sides approach $5$, so the two-sided limit is $5$ — even if $f(2)$ is undefined.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Answering $f(2)$ — the limit need not equal the function value."
          ]
},
        },
        {
          id: "apcab-u1-limits-intro-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Evaluate $\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}$.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$0$"
                    },
                    {
                              "id": "b",
                              "text": "$4$"
                    },
                    {
                              "id": "c",
                              "text": "$8$"
                    },
                    {
                              "id": "d",
                              "text": "Does not exist"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Factor and cancel",
                              "statement": "$\\frac{(x-4)(x+4)}{x-4} = x + 4$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "After canceling, the limit is $4 + 4 = 8$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$8$",
          "commonErrors": [
                    "Canceling incorrectly or substituting before simplifying."
          ]
},
        },
        {
          id: "apcab-u1-limits-intro-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\lim_{x \\to 1} \\frac{\\sqrt{x} - 1}{x - 1}$. Enter the limit value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Limit",
                              "answer": 0.5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Rationalize",
                              "statement": "Multiply by $\\frac{\\sqrt{x}+1}{\\sqrt{x}+1}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\frac{(\\sqrt{x}-1)(\\sqrt{x}+1)}{(x-1)(\\sqrt{x}+1)} = \\frac{x-1}{(x-1)(\\sqrt{x}+1)} = \\frac{1}{\\sqrt{x}+1} \\to \\frac{1}{2}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Limit value $0.5$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$0.5$",
          "commonErrors": [
                    "Rationalizing the wrong expression or arithmetic slips."
          ]
},
        },
        {
          id: "apcab-u1-limits-intro-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A function $g$ satisfies $\\lim_{x \\to 2^-} g(x) = 7$ and $\\lim_{x \\to 2^+} g(x) = -1$. (a) Does $\\lim_{x \\to 2} g(x)$ exist? (b) If $g(2) = 7$, is $g$ continuous at $x = 2$? Explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Two-sided limit",
                              "statement": "Both one-sided limits must agree."
                    },
                    {
                              "kind": "definition",
                              "name": "Continuity",
                              "statement": "Function value must equal the limit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) No — left limit $7 \\ne$ right limit $-1$, so the two-sided limit does not exist (jump discontinuity).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "(b) No — continuity requires the two-sided limit to exist and equal $g(2)$; here it does not exist.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Clear explanation of both parts.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) No; (b) No — jump discontinuity at $x=2$",
          "commonErrors": [
                    "Checking only one side for continuity."
          ]
},
        },
      ],
    },
  ],
};
