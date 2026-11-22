import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cialfm-u1-lesson-1-1",
  code: "1-1",
  title: "Symmetric functions of roots",
  goal: "I CAN use symmetric functions to find equations from roots and vice versa.",
  standards: ["9231 P1: further algebra — symmetric functions"],
  vocabulary: [
    { term: "Symmetric function", definition: "An expression unchanged when roots are permuted, e.g. $\\alpha+\\beta+\\gamma$." },
    { term: "Roots", definition: "Solutions of a polynomial equation." },
    { term: "Elementary symmetric", definition: "Sums of products of roots: $\\sum \\alpha$, $\\sum \\alpha\\beta$, $\\prod \\alpha$." },
  ],
  concepts: [
    {
      id: "cialfm-u1-s1-vieta",
      title: "Vieta's relations",
      skill: "Relate coefficients of a polynomial to symmetric functions of its roots.",
      lesson: {
        sections: [
          {
            heading: "Quadratic",
            body: "For $ax^2+bx+c=0$ with roots $\\alpha,\\beta$: $\\alpha+\\beta=-\\frac{b}{a}$, $\\alpha\\beta=\\frac{c}{a}$.",
          },
          {
            heading: "Cubic",
            body: "For $ax^3+bx^2+cx+d=0$ with roots $\\alpha,\\beta,\\gamma$: $\\sum\\alpha=-\\frac{b}{a}$, $\\sum\\alpha\\beta=\\frac{c}{a}$, $\\prod\\alpha=-\\frac{d}{a}$.",
          },
        ],
        keyFormulas: [
          { name: "Cubic relations", statement: "$\\sum\\alpha=-\\frac{b}{a}$, $\\sum\\alpha\\beta=\\frac{c}{a}$, $\\alpha\\beta\\gamma=-\\frac{d}{a}$" },
        ],
        workedExample: {
          problem: "For $x^3-6x^2+11x-6=0$ with roots $\\alpha,\\beta,\\gamma$, find $\\sum\\alpha\\beta$.",
          solution: "$\\sum\\alpha\\beta = \\frac{c}{a} = 11$.",
        },
      },
      questions: [
        {
          id: "cialfm-u1-s1-vi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $x^2-5x+6=0$ with roots $\\alpha,\\beta$, find $\\alpha+\\beta$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "6" },
            { id: "b", text: "5" },
            { id: "c", text: "-5" },
            { id: "d", text: "-6" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "Vieta", statement: "$\\alpha+\\beta=-b/a$." }],
            steps: [{ reasoning: "$\\alpha+\\beta = -(-5)/1 = 5$.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cialfm-u1-s1-vi-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $x^2+3x-10=0$, find $\\alpha\\beta$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -10 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Vieta", statement: "$\\alpha\\beta=c/a$." }],
            steps: [
              { reasoning: "$\\alpha\\beta = -10/1 = -10$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: -10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-10",
          },
        },
        {
          id: "cialfm-u1-s1-vi-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $2x^2-8x+3=0$ with roots $\\alpha,\\beta$, find $\\alpha+\\beta$ and $\\alpha\\beta$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Vieta", statement: "Use $a=2$ in formulas." }],
            steps: [
              { reasoning: "$\\alpha+\\beta = -(-8)/2 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "$\\alpha\\beta = 3/2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $4$ and $\\frac{3}{2}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4, \\frac{3}{2}$",
          },
        },
        {
          id: "cialfm-u1-s1-vi-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $x^3+2x^2-5x+1=0$ with roots $\\alpha,\\beta,\\gamma$, find $\\alpha\\beta\\gamma$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Vieta cubic", statement: "$\\prod\\alpha = -d/a$." }],
            steps: [
              { reasoning: "$\\alpha\\beta\\gamma = -(1)/1 = -1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: -1.", marks: 1, markCode: "M" },
              { reasoning: "Note the minus sign — easy to miss.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-1",
          },
        },
        {
          id: "cialfm-u1-s1-vi-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $x^2+7x+12=0$ with roots $\\alpha,\\beta$, find $\\alpha\\beta$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "-12" },
            { id: "b", text: "12" },
            { id: "c", text: "7" },
            { id: "d", text: "-7" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "Vieta", statement: "$\\alpha\\beta=c/a$." }],
            steps: [{ reasoning: "$\\alpha\\beta = 12/1 = 12$.", marks: 1, markCode: "A" }],
            finalAnswer: "12",
          },
        },
        {
          id: "cialfm-u1-s1-vi-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $3x^2-12x+5=0$, find $\\alpha+\\beta$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Vieta", statement: "$\\alpha+\\beta=-b/a$." }],
            steps: [
              { reasoning: "$\\alpha+\\beta = -(-12)/3 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cialfm-u1-s1-vi-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $x^3-4x^2+7x-2=0$ with roots $\\alpha,\\beta,\\gamma$, find $\\alpha\\beta\\gamma$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Vieta cubic", statement: "$\\alpha\\beta\\gamma=-d/a$." }],
            steps: [
              { reasoning: "$\\alpha\\beta\\gamma = -(-2)/1 = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cialfm-u1-s1-vi-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $2x^2+5x-3=0$ with roots $\\alpha,\\beta$, find $\\alpha\\beta$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{5}{2}$" },
            { id: "b", text: "$-\\frac{3}{2}$" },
            { id: "c", text: "$-\\frac{5}{2}$" },
            { id: "d", text: "$\\frac{3}{2}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "Vieta", statement: "$\\alpha\\beta=c/a$." }],
            steps: [{ reasoning: "$\\alpha\\beta = -3/2$.", marks: 1, markCode: "A" }],
            finalAnswer: "$-\\frac{3}{2}$",
          },
        },
        {
          id: "cialfm-u1-s1-vi-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $x^3+3x^2-2x+5=0$ with roots $\\alpha,\\beta,\\gamma$, find $\\alpha+\\beta+\\gamma$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "-3" },
            { id: "b", text: "5" },
            { id: "c", text: "3" },
            { id: "d", text: "-2" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "Vieta cubic", statement: "$\\sum\\alpha=-b/a$." }],
            steps: [{ reasoning: "$\\sum\\alpha = -3/1 = -3$.", marks: 1, markCode: "A" }],
            finalAnswer: "-3",
          },
        },
        {
          id: "cialfm-u1-s1-vi-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $x^3+4x^2-3x+2=0$ with roots $\\alpha,\\beta,\\gamma$, find $\\alpha+\\beta+\\gamma$ and $\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Vieta cubic", statement: "Read off $b/a$ and $c/a$." }],
            steps: [
              { reasoning: "$\\sum\\alpha = -4$.", marks: 1, markCode: "M" },
              { reasoning: "$\\sum\\alpha\\beta = -3$.", marks: 1, markCode: "M" },
              { reasoning: "Answers: $-4$ and $-3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-4, -3$",
          },
        },
        {
          id: "cialfm-u1-s1-vi-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $4x^2-7x+2=0$ with roots $\\alpha,\\beta$, find $\\alpha\\beta$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.5, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Vieta", statement: "$\\alpha\\beta=c/a$." }],
            steps: [
              { reasoning: "$\\alpha\\beta = 2/4 = \\frac{1}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.5",
          },
        },
        {
          id: "cialfm-u1-s1-vi-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "For $5x^2-15x+7=0$ with roots $\\alpha,\\beta$, find $\\alpha+\\beta$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-\\frac{7}{5}$" },
            { id: "b", text: "3" },
            { id: "c", text: "-3" },
            { id: "d", text: "$\\frac{7}{5}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "Vieta", statement: "$\\alpha+\\beta=-b/a$." }],
            steps: [{ reasoning: "$\\alpha+\\beta = -(-15)/5 = 3$.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cialfm-u1-s1-vi-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $2x^3-6x^2+9x-4=0$ with roots $\\alpha,\\beta,\\gamma$, find $\\alpha+\\beta+\\gamma$, $\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha$ and $\\alpha\\beta\\gamma$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Vieta cubic", statement: "Divide each coefficient by $a=2$." }],
            steps: [
              { reasoning: "$\\sum\\alpha = -(-6)/2 = 3$.", marks: 1, markCode: "M" },
              { reasoning: "$\\sum\\alpha\\beta = 9/2$.", marks: 1, markCode: "M" },
              { reasoning: "$\\alpha\\beta\\gamma = -(-4)/2 = 2$ — remember the minus sign in $-d/a$.", marks: 1, markCode: "M" },
              { reasoning: "Answers: $3$, $\\frac{9}{2}$, $2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3, \\frac{9}{2}, 2$",
          },
        },
        {
          id: "cialfm-u1-s1-vi-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $2x^2+6x-5=0$ with roots $\\alpha,\\beta$, find $\\alpha\\beta$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{5}{2}$" },
            { id: "b", text: "$-\\frac{5}{4}$" },
            { id: "c", text: "$-\\frac{5}{2}$" },
            { id: "d", text: "$-5$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "law", name: "Vieta", statement: "$\\alpha\\beta=c/a$." }],
            steps: [{ reasoning: "$\\alpha\\beta = -5/2$.", marks: 1, markCode: "A" }],
            finalAnswer: "$-\\frac{5}{2}$",
          },
        },
        {
          id: "cialfm-u1-s1-vi-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "For $x^3+px^2+qx+r=0$ with roots $\\alpha,\\beta,\\gamma$, the product $\\alpha\\beta\\gamma$ equals",
          response: { type: "mcq", choices: [
            { id: "a", text: "$r$" },
            { id: "b", text: "$q$" },
            { id: "c", text: "$-r$" },
            { id: "d", text: "$-q$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "law", name: "Vieta cubic", statement: "$\\prod\\alpha=-d/a$." }],
            steps: [{ reasoning: "With $a=1$, $\\alpha\\beta\\gamma=-r$.", marks: 1, markCode: "A" }],
            finalAnswer: "$-r$",
          },
        },
        {
          id: "cialfm-u1-s1-vi-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The roots of $x^3-4x^2+2x+1=0$ are $\\alpha,\\beta,\\gamma$. Find $\\frac{1}{\\alpha\\beta}+\\frac{1}{\\beta\\gamma}+\\frac{1}{\\gamma\\alpha}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Combine fractions", statement: "Numerator becomes $\\sum\\alpha$." }],
            steps: [
              { reasoning: "$\\frac{1}{\\alpha\\beta}+\\frac{1}{\\beta\\gamma}+\\frac{1}{\\gamma\\alpha} = \\frac{\\alpha+\\beta+\\gamma}{\\alpha\\beta\\gamma}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\sum\\alpha = 4$ and $\\alpha\\beta\\gamma = -1$.", marks: 1, markCode: "M" },
              { reasoning: "Value $= 4/(-1) = -4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-4$",
          },
        },
      ],
    },
    {
      id: "cialfm-u1-s1-higher",
      title: "Higher symmetric functions",
      skill: "Compute $\\sum\\alpha^2$, $\\sum\\alpha\\beta$ and construct equations.",
      lesson: {
        sections: [
          {
            heading: "Useful identities",
            body: "$\\sum\\alpha^2 = (\\sum\\alpha)^2 - 2\\sum\\alpha\\beta$. $\\sum\\alpha^3 = (\\sum\\alpha)^3 - 3\\sum\\alpha\\sum\\alpha\\beta + 3\\alpha\\beta\\gamma$.",
          },
          {
            heading: "New equation from transformed roots",
            body: "If new roots are $\\alpha^2$, substitute appropriately or use symmetric functions to get new coefficients.",
          },
        ],
        keyFormulas: [
          { name: "Sum of squares", statement: "$\\sum\\alpha^2 = (\\sum\\alpha)^2 - 2\\sum\\alpha\\beta$" },
        ],
        workedExample: {
          problem: "Roots of $x^2-4x+1=0$ are $\\alpha,\\beta$. Find $\\alpha^2+\\beta^2$.",
          solution: "$\\sum\\alpha=4$, $\\sum\\alpha\\beta=1$ → $16-2=14$.",
        },
      },
      questions: [
        {
          id: "cialfm-u1-s1-hi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $x^2-6x+8=0$, find $\\alpha^2+\\beta^2$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "36" },
            { id: "b", text: "20" },
            { id: "c", text: "28" },
            { id: "d", text: "12" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "Sum of squares", statement: "$(\\sum\\alpha)^2-2\\sum\\alpha\\beta$." }],
            steps: [{ reasoning: "$36 - 16 = 20$.", marks: 1, markCode: "A" }],
            finalAnswer: "20",
          },
        },
        {
          id: "cialfm-u1-s1-hi-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $x^2+2x-3=0$, find $\\alpha\\beta$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -3 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Vieta", statement: "$c/a$." }],
            steps: [
              { reasoning: "$\\alpha\\beta = -3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: -3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-3",
          },
        },
        {
          id: "cialfm-u1-s1-hi-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Roots of $x^2-7x+3=0$ are $\\alpha,\\beta$. Find $\\frac{1}{\\alpha}+\\frac{1}{\\beta}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reciprocal roots", statement: "Combine fractions." }],
            steps: [
              { reasoning: "$\\frac{1}{\\alpha}+\\frac{1}{\\beta} = \\frac{\\alpha+\\beta}{\\alpha\\beta} = \\frac{7}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{7}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "Used $\\sum\\alpha=7$, $\\alpha\\beta=3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{7}{3}$",
          },
        },
        {
          id: "cialfm-u1-s1-hi-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the equation whose roots are the squares of the roots of $x^2-5x+3=0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Transformed roots", statement: "New sum and product." }],
            steps: [
              { reasoning: "$\\sum\\alpha=5$, $\\alpha\\beta=3$ → $\\sum\\alpha^2=25-6=19$.", marks: 1, markCode: "M" },
              { reasoning: "New product $= (\\alpha\\beta)^2 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "New equation: $x^2 - 19x + 9 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x^2 - 19x + 9 = 0$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2 - 19x + 9 = 0$",
          },
        },
        {
          id: "cialfm-u1-s1-hi-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $x^2-8x+15=0$ with roots $\\alpha,\\beta$, find $\\alpha^2+\\beta^2$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "30" },
            { id: "b", text: "49" },
            { id: "c", text: "64" },
            { id: "d", text: "34" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "law", name: "Sum of squares", statement: "$(\\sum\\alpha)^2-2\\sum\\alpha\\beta$." }],
            steps: [{ reasoning: "$64 - 2(15) = 34$.", marks: 1, markCode: "A" }],
            finalAnswer: "34",
          },
        },
        {
          id: "cialfm-u1-s1-hi-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $x^2-3x+2=0$ with roots $\\alpha,\\beta$, find $\\alpha^2+\\beta^2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Sum of squares", statement: "Use Vieta first." }],
            steps: [
              { reasoning: "$\\sum\\alpha=3$, $\\alpha\\beta=2$ → $9-4=5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cialfm-u1-s1-hi-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $x^2+4x-7=0$ with roots $\\alpha,\\beta$, find $\\alpha^2+\\beta^2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 44 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Sum of squares", statement: "$(\\sum\\alpha)^2-2\\alpha\\beta$." }],
            steps: [
              { reasoning: "$\\sum\\alpha=-4$, $\\alpha\\beta=-7$ → $16+14=30$? No: $16-2(-7)=16+14=30$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 30.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30",
          },
        },
        {
          id: "cialfm-u1-s1-hi-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $\\alpha+\\beta=s$ and $\\alpha\\beta=p$, then $\\alpha^2+\\beta^2=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$s^2+2p$" },
            { id: "b", text: "$s^2-2p$" },
            { id: "c", text: "$s^2-p$" },
            { id: "d", text: "$2p-s^2$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "Identity", statement: "$(\\alpha+\\beta)^2=\\alpha^2+2\\alpha\\beta+\\beta^2$." }],
            steps: [{ reasoning: "$\\alpha^2+\\beta^2 = s^2-2p$.", marks: 1, markCode: "A" }],
            finalAnswer: "$s^2-2p$",
          },
        },
        {
          id: "cialfm-u1-s1-hi-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The equation whose roots are the squares of the roots of $x^2-5x+3=0$ is",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x^2-11x+9=0$" },
            { id: "b", text: "$x^2-25x+9=0$" },
            { id: "c", text: "$x^2-19x+9=0$" },
            { id: "d", text: "$x^2-19x+3=0$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Transformed roots", statement: "New sum $=19$, new product $=9$." }],
            steps: [{ reasoning: "$\\sum\\alpha^2=25-6=19$, product $=9$ → $x^2-19x+9=0$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x^2-19x+9=0$",
          },
        },
        {
          id: "cialfm-u1-s1-hi-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $x^2-6x+4=0$ with roots $\\alpha,\\beta$, find $\\alpha^2+\\beta^2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Sum of squares", statement: "Identity plus Vieta." }],
            steps: [
              { reasoning: "$\\sum\\alpha=6$, $\\alpha\\beta=4$.", marks: 1, markCode: "M" },
              { reasoning: "$\\alpha^2+\\beta^2 = 36-8 = 28$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 28.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "28",
          },
        },
        {
          id: "cialfm-u1-s1-hi-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $x^2-9x+14=0$ with roots $\\alpha,\\beta$, find $\\frac{1}{\\alpha}+\\frac{1}{\\beta}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.6428571428, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Reciprocal roots", statement: "$\\frac{\\alpha+\\beta}{\\alpha\\beta}$." }],
            steps: [
              { reasoning: "$= \\frac{9}{14}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{9}{14} \\approx 0.643$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{9}{14}$",
          },
        },
        {
          id: "cialfm-u1-s1-hi-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The equation whose roots are $\\alpha+1$ and $\\beta+1$, where $\\alpha,\\beta$ are roots of $x^2-4x+1=0$, is",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x^2-2x-4=0$" },
            { id: "b", text: "$x^2-6x+4=0$" },
            { id: "c", text: "$x^2-4x+6=0$" },
            { id: "d", text: "$x^2-6x+6=0$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Shifted roots", statement: "New sum $=\\sum\\alpha+2$, new product $=\\alpha\\beta+\\sum\\alpha+1$." }],
            steps: [{ reasoning: "Sum $=6$, product $=1+4+1=6$ → $x^2-6x+6=0$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x^2-6x+6=0$",
          },
        },
        {
          id: "cialfm-u1-s1-hi-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the equation whose roots are the squares of the roots of $x^2-2x-4=0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Transformed roots", statement: "Compute new sum and product." }],
            steps: [
              { reasoning: "$\\sum\\alpha=2$, $\\alpha\\beta=-4$ → $\\sum\\alpha^2=4+8=12$.", marks: 1, markCode: "M" },
              { reasoning: "New product $=(-4)^2=16$.", marks: 1, markCode: "M" },
              { reasoning: "New equation: $x^2-12x+16=0$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2-12x+16=0$",
          },
        },
        {
          id: "cialfm-u1-s1-hi-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "For $x^2-3x+1=0$ with roots $\\alpha,\\beta$, find $\\alpha^3+\\beta^3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 18 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Sum of cubes", statement: "$\\alpha^3+\\beta^3=(\\alpha+\\beta)^3-3\\alpha\\beta(\\alpha+\\beta)$." }],
            steps: [
              { reasoning: "$= 27 - 3(1)(3) = 18$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 18.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18",
          },
        },
        {
          id: "cialfm-u1-s1-hi-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The equation whose roots are $\\frac{1}{\\alpha}$ and $\\frac{1}{\\beta}$, where $\\alpha,\\beta$ are roots of $x^2-5x+2=0$, is",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x^2-\\frac{5}{2}x+\\frac{1}{2}=0$ only" },
            { id: "b", text: "$2x^2+5x+1=0$" },
            { id: "c", text: "$x^2-5x+2=0$" },
            { id: "d", text: "$2x^2-5x+1=0$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reciprocal roots", statement: "New sum $=\\frac{\\sum\\alpha}{\\alpha\\beta}$, new product $=\\frac{1}{\\alpha\\beta}$." }],
            steps: [{ reasoning: "Sum $=\\frac{5}{2}$, product $=\\frac12$ → $2x^2-5x+1=0$.", marks: 1, markCode: "A" }],
            finalAnswer: "$2x^2-5x+1=0$",
          },
        },
        {
          id: "cialfm-u1-s1-hi-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The roots of $x^2-7x+2=0$ are $\\alpha,\\beta$. Find $\\alpha^2+\\beta^2$ and hence the equation whose roots are $\\alpha^2$ and $\\beta^2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Transformed roots", statement: "Sum of squares then rebuild equation." }],
            steps: [
              { reasoning: "$\\alpha^2+\\beta^2 = 49-4 = 45$.", marks: 1, markCode: "M" },
              { reasoning: "New product $= (\\alpha\\beta)^2 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "New equation: $x^2-45x+4=0$.", marks: 1, markCode: "M" },
              { reasoning: "Answers: $45$ and $x^2-45x+4=0$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45;\\ x^2-45x+4=0$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u1-s1-sym-notes",
      title: "Symmetric functions — revision notes",
      summary: "Vieta's relations, sum of powers, transformed equations.",
      sections: [
        { heading: "Vieta", body: "Quadratic: $\\sum\\alpha=-b/a$, $\\alpha\\beta=c/a$. Cubic: add $\\alpha\\beta\\gamma=-d/a$." },
        { heading: "Powers", body: "$\\sum\\alpha^2=(\\sum\\alpha)^2-2\\sum\\alpha\\beta$. For new roots, compute new sum/product first." },
      ],
    },
  ],
};
