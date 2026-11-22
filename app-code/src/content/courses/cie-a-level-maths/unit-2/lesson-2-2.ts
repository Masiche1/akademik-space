import type { Lesson } from "../../../types.ts";

export const lesson122: Lesson = {
  id: "cial-m-u2-lesson-2-2",
  code: "2-2",
  title: "Trigonometric identities and equations",
  goal: "I CAN use the Pythagorean and quotient identities and solve trigonometric equations.",
  standards: ["9709 P1: trigonometry"],
  vocabulary: [
    {
      term: "Pythagorean identity",
      definition:
        "$\\sin^2\\theta + \\cos^2\\theta = 1$ — fundamental identity from the unit circle.",
    },
    {
      term: "Quotient identity",
      definition: "$\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$.",
    },
    {
      term: "Principal value",
      definition:
        "The first solution in $[0^\\circ, 360^\\circ)$ or $[0, 2\\pi)$, e.g. $\\arcsin(0.5) = 30^\\circ$.",
    },
    {
      term: "General solution",
      definition:
        "All solutions using $+ 360^\\circ k$ or $+ 2\\pi k$ for integer $k$.",
    },
    {
      term: "Quadrant",
      definition:
        "One of four $90^\\circ$ sectors; signs of sin/cos/tan differ by quadrant.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u2-identities",
      title: "Trigonometric identities",
      skill:
        "Use $\\sin^2\\theta + \\cos^2\\theta = 1$ and $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$.",
      lesson: {
        sections: [
          {
            heading: "The Pythagorean identity",
            body: "$\\sin^2\\theta + \\cos^2\\theta = 1$ holds for every angle. Rearranged: $\\sin^2\\theta = 1 - \\cos^2\\theta$ and $\\cos^2\\theta = 1 - \\sin^2\\theta$. If you know one ratio, find the others via this identity and the quadrant signs.",
          },
          {
            heading: "The quotient identity",
            body: "$\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$. Combined with the Pythagorean identity: $\\sec^2\\theta = 1 + \\tan^2\\theta$ and $\\csc^2\\theta = 1 + \\cot^2\\theta$ (A Level extensions).",
          },
          {
            heading: "Using identities to solve",
            body: "Substitute identities to reduce equations to one trig function. E.g. $\\sin^2\\theta + \\cos^2\\theta = 1$ verifies; $2\\sin^2\\theta - \\sin\\theta - 1 = 0$ factors as $(2\\sin\\theta + 1)(\\sin\\theta - 1) = 0$.",
          },
        ],
        keyFormulas: [
          {
            name: "Pythagorean",
            statement: "$\\sin^2\\theta + \\cos^2\\theta = 1$.",
          },
          {
            name: "Quotient",
            statement: "$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$.",
          },
          {
            name: "Derived",
            statement:
              "$1 + \\tan^2\\theta = \\sec^2\\theta$; $1 + \\cot^2\\theta = \\csc^2\\theta$.",
          },
        ],
        workedExample: {
          problem:
            "Given $\\sin\\theta = \\frac{3}{5}$ and $\\theta$ is acute, find $\\cos\\theta$ and $\\tan\\theta$.",
          solution:
            "$\\cos^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$, acute so $\\cos\\theta = \\frac{4}{5}$. Then $\\tan\\theta = \\frac{3/5}{4/5} = \\frac{3}{4}$.",
        },
      },
      questions: [
        {
          id: "cial-m-u2-id-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of $\\sin^2 30^\\circ + \\cos^2 30^\\circ$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$0$" },
              { id: "c", text: "Depends on the angle" },
              { id: "d", text: "$\\frac{1}{2}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Pythagorean identity",
                statement:
                  "$\\sin^2\\theta + \\cos^2\\theta = 1$ for all $\\theta$.",
              },
            ],
            steps: [
              {
                reasoning: "Identity holds for every angle — answer is 1.",
                working: "1",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$1$",
            commonErrors: [
              "Computing the values separately and making an arithmetic slip.",
            ],
          },
        },
        {
          id: "cial-m-u2-id-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $\\sin\\theta = \\frac{3}{5}$ and $\\theta$ is acute, find $\\cos\\theta$.",
          response: {
            type: "numeric",
            parts: [{ label: "cos theta", answer: 0.8, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Pythagorean identity",
                statement:
                  "$\\cos^2\\theta = 1 - \\sin^2\\theta$; acute angle gives positive root.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\cos^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$.",
                working: "1 - \\frac{9}{25}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Acute $\\Rightarrow \\cos\\theta = \\frac{4}{5} = 0.8$.",
                working: "\\frac{4}{5}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\cos\\theta = \\frac{4}{5}$",
            commonErrors: [
              "Taking the negative root — acute angle has positive cosine.",
            ],
          },
        },
        {
          id: "cial-m-u2-id-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Prove that $\\dfrac{\\sin\\theta}{1 - \\cos\\theta} + \\dfrac{1 - \\cos\\theta}{\\sin\\theta} = 2\\csc\\theta$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Identity proof",
                statement:
                  "Combine fractions over common denominator and apply $\\sin^2 + \\cos^2 = 1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Common denominator $\\sin\\theta(1-\\cos\\theta)$: numerator $\\sin^2\\theta + (1-\\cos\\theta)^2$.",
                working: "\\sin^2\\theta + (1-\\cos\\theta)^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Expand: $\\sin^2\\theta + 1 - 2\\cos\\theta + \\cos^2\\theta = 2 - 2\\cos\\theta$.",
                working: "2 - 2\\cos\\theta",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Factor: $2(1 - \\cos\\theta)$.",
                working: "2(1-\\cos\\theta)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divide by $\\sin\\theta(1-\\cos\\theta)$ gives $\\frac{2}{\\sin\\theta} = 2\\csc\\theta$.",
                working: "\\frac{2}{\\sin\\theta}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Proved via common denominator and Pythagorean identity.",
            commonErrors: ["Expanding incorrectly or forgetting to simplify."],
          },
        },
        {
          id: "cial-m-u2-id-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Trigonometric identities.",
          parts: [
            { label: "a", prompt: "State the Pythagorean identity.", marks: 1 },
            {
              label: "b",
              prompt:
                "If $\\sin\\theta=\\frac{3}{5}$ (acute), find $\\cos\\theta$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Find $\\tan\\theta$ for the same angle.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Prove $\\frac{\\sin\\theta}{1-\\cos\\theta}+\\frac{1-\\cos\\theta}{\\sin\\theta}=2\\csc\\theta$.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Identities",
                statement:
                  "$\\sin^2+\\cos^2=1$; $\\tan=\\sin/\\cos$; proofs via algebra.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\sin^2\\theta + \\cos^2\\theta = 1$.",
                working: "\\sin^2+\\cos^2=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$\\cos^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$.",
                working: "\\frac{16}{25}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Acute: $\\cos\\theta = \\frac{4}{5}$.",
                working: "\\frac{4}{5}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct value.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\tan\\theta = \\frac{3/5}{4/5} = \\frac{3}{4}$.",
                working: "\\frac{3}{4}",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Common denominator $\\sin\\theta(1-\\cos\\theta)$.",
                working: "\\text{common denom}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Numerator simplifies to $2(1-\\cos\\theta)$.",
                working: "2(1-\\cos\\theta)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Dividing gives $2\\csc\\theta$.",
                working: "2\\csc\\theta",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Proof complete.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) sin²+cos²=1 (b) 4/5 (c) 3/4 (d) proved",
          },
        },
        {
          id: "cial-m-u2-id-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $\\sin\\theta = \\frac{3}{5}$ and $\\cos\\theta = \\frac{4}{5}$, then $\\tan\\theta =$",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{4}{3}$" },
              { id: "b", text: "$\\frac{3}{4}$" },
              { id: "c", text: "$\\frac{5}{4}$" },
              { id: "d", text: "$\\frac{3}{5}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Quotient identity",
                statement: "$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\tan\\theta = \\frac{3/5}{4/5} = \\frac{3}{4}$.",
                working: "\\frac{3}{4}",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$\\tan\\theta = \\frac{3}{4}$",
            commonErrors: ["Inverting the quotient — tan = cos/sin."],
          },
        },
        {
          id: "cial-m-u2-id-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $\\cos\\theta = \\frac{5}{13}$ and $\\theta$ is acute, find $\\sin\\theta$.",
          response: {
            type: "numeric",
            parts: [
              { label: "sin theta", answer: 0.923, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Pythagorean identity",
                statement:
                  "$\\sin^2\\theta = 1 - \\cos^2\\theta$; acute gives positive root.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\sin^2\\theta = 1 - \\frac{25}{169} = \\frac{144}{169}$.",
                working: "1 - \\frac{25}{169}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Acute $\\Rightarrow \\sin\\theta = \\frac{12}{13} \\approx 0.923$.",
                working: "\\frac{12}{13}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\sin\\theta = \\frac{12}{13}$",
            commonErrors: ["Taking the negative root despite acute angle."],
          },
        },
        {
          id: "cial-m-u2-id-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is a correct trigonometric identity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\tan\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$" },
              { id: "b", text: "$\\sin^2\\theta - \\cos^2\\theta = 1$" },
              { id: "c", text: "$1 - \\tan^2\\theta = \\sec^2\\theta$" },
              { id: "d", text: "$1 + \\tan^2\\theta = \\sec^2\\theta$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Derived identities",
                statement:
                  "Dividing $\\sin^2 + \\cos^2 = 1$ by $\\cos^2$ gives $1 + \\tan^2 = \\sec^2$.",
              },
            ],
            steps: [
              {
                reasoning: "$1 + \\tan^2\\theta = \\sec^2\\theta$ is correct.",
                working: "1 + \\tan^2 = \\sec^2",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$1 + \\tan^2\\theta = \\sec^2\\theta$",
            commonErrors: ["Mixing up $\\sec^2$ and $\\csc^2$ identities."],
          },
        },
        {
          id: "cial-m-u2-id-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $\\cos\\theta = \\frac{12}{13}$ and $\\theta$ is acute, find $\\tan\\theta$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{13}{5}$" },
              { id: "b", text: "$\\frac{5}{12}$" },
              { id: "c", text: "$\\frac{5}{13}$" },
              { id: "d", text: "$\\frac{12}{5}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Identities",
                statement:
                  "$\\sin^2\\theta = 1 - \\cos^2\\theta$; $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\sin^2\\theta = 1 - \\frac{144}{169} = \\frac{25}{169}$, so $\\sin\\theta = \\frac{5}{13}$.",
                working: "\\sin\\theta = \\frac{5}{13}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\tan\\theta = \\frac{5/13}{12/13} = \\frac{5}{12}$.",
                working: "\\frac{5}{12}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\tan\\theta = \\frac{5}{12}$",
            commonErrors: ["Inverting the quotient or wrong sign."],
          },
        },
        {
          id: "cial-m-u2-id-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "If $\\sin\\theta = -\\frac{5}{13}$ and $\\theta$ lies in the third quadrant, find $\\cos\\theta$.",
          response: {
            type: "numeric",
            parts: [
              { label: "cos theta", answer: -0.923, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Pythagorean identity",
                statement:
                  "$\\cos^2\\theta = 1 - \\sin^2\\theta$; sign determined by quadrant.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\cos^2\\theta = 1 - \\frac{25}{169} = \\frac{144}{169}$.",
                working: "\\frac{144}{169}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Third quadrant: cosine is negative, $\\cos\\theta = -\\frac{12}{13}$.",
                working: "-\\frac{12}{13}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\approx -0.923$.",
                working: "-0.923",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\cos\\theta = -\\frac{12}{13}$",
            commonErrors: [
              "Ignoring the quadrant and taking the positive root.",
            ],
          },
        },
        {
          id: "cial-m-u2-id-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which expression is equivalent to $\\sin^2\\theta + \\cos^2\\theta + \\tan^2\\theta$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$\\cos^2\\theta$" },
              { id: "c", text: "$\\sec^2\\theta$" },
              { id: "d", text: "$\\csc^2\\theta$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Identities",
                statement:
                  "$\\sin^2 + \\cos^2 = 1$, so the sum is $1 + \\tan^2\\theta = \\sec^2\\theta$.",
              },
            ],
            steps: [
              {
                reasoning: "$1 + \\tan^2\\theta = \\sec^2\\theta$.",
                working: "\\sec^2\\theta",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct simplification.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\sec^2\\theta$",
            commonErrors: ["Forgetting that $\\sin^2 + \\cos^2 = 1$."],
          },
        },
        {
          id: "cial-m-u2-id-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Prove that $(1 - \\sin\\theta)(1 + \\sin\\theta) = \\cos^2\\theta$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Identity proof",
                statement:
                  "Expand the product, then apply $\\sin^2\\theta + \\cos^2\\theta = 1$.",
              },
            ],
            steps: [
              {
                reasoning: "Expand: $1 - \\sin^2\\theta$.",
                working: "1 - \\sin^2\\theta",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use $1 - \\sin^2\\theta = \\cos^2\\theta$.",
                working: "\\cos^2\\theta",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Identity proved.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "LHS $= 1 - \\sin^2\\theta = \\cos^2\\theta$ = RHS.",
            commonErrors: ["Sign error in expanding the product."],
          },
        },
        {
          id: "cial-m-u2-id-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "If $\\tan\\theta = \\frac{3}{4}$ and $\\theta$ is acute, find $\\sin\\theta$.",
          response: {
            type: "numeric",
            parts: [{ label: "sin theta", answer: 0.6, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Identities",
                statement:
                  "Use $1 + \\tan^2\\theta = \\sec^2\\theta$ or a 3-4-5 triangle.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\tan\\theta = \\frac{3}{4}$ with acute angle gives a 3-4-5 triangle: $\\sin\\theta = \\frac{3}{5}$.",
                working: "\\frac{3}{5}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\sin\\theta = 0.6$.",
                working: "0.6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\sin\\theta = \\frac{3}{5}$",
            commonErrors: [
              "Answering $\\frac{3}{4}$ — tan is not sin.",
            ],
          },
        },
        {
          id: "cial-m-u2-id-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "The value of $\\cot\\theta \\tan\\theta$ is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Depends on $\\theta$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "Undefined for all $\\theta$" },
              { id: "d", text: "$0$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Quotient identity",
                statement:
                  "$\\cot\\theta = \\frac{1}{\\tan\\theta}$, so the product is 1.",
              },
            ],
            steps: [
              {
                reasoning: "$\\cot\\theta \\tan\\theta = \\frac{\\cos}{\\sin} \\times \\frac{\\sin}{\\cos} = 1$.",
                working: "1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Constant value 1.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1$",
            commonErrors: ["Thinking the product depends on $\\theta$."],
          },
        },
        {
          id: "cial-m-u2-id-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $\\sin\\theta = \\frac{7}{25}$ and $\\theta$ is acute, find $\\cos\\theta$.",
          response: {
            type: "numeric",
            parts: [
              { label: "cos theta", answer: 0.96, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Pythagorean identity",
                statement:
                  "$\\cos^2\\theta = 1 - \\sin^2\\theta$; acute gives positive root.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\cos^2\\theta = 1 - \\frac{49}{625} = \\frac{576}{625}$.",
                working: "\\frac{576}{625}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\cos\\theta = \\frac{24}{25} = 0.96$.",
                working: "0.96",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\cos\\theta = \\frac{24}{25}$",
            commonErrors: ["Arithmetic error in $625 - 49$."],
          },
        },
        {
          id: "cial-m-u2-id-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Simplify $\\frac{1 - \\cos^2\\theta}{\\sin\\theta}$, giving your answer in terms of $\\sin\\theta$ or $\\cos\\theta$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Identity",
                statement:
                  "$1 - \\cos^2\\theta = \\sin^2\\theta$; cancel a factor of $\\sin\\theta$.",
              },
            ],
            steps: [
              {
                reasoning: "Replace numerator: $\\frac{\\sin^2\\theta}{\\sin\\theta}$.",
                working: "\\frac{\\sin^2\\theta}{\\sin\\theta}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cancel one $\\sin\\theta$: $\\sin\\theta$.",
                working: "\\sin\\theta",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: $\\sin\\theta \\times \\sin\\theta = \\sin^2\\theta$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplified form is $\\sin\\theta$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\sin\\theta$",
            commonErrors: [
              "Rewriting $1 - \\cos^2$ as $\\cos^2 - \\sin^2$ incorrectly.",
            ],
          },
        },
        {
          id: "cial-m-u2-id-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Trigonometric identities.",
          parts: [
            {
              label: "a",
              prompt: "State the Pythagorean identity.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "If $\\sin\\theta = \\frac{8}{17}$ (acute), find $\\cos\\theta$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Find $\\tan\\theta$ for the same angle.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Prove $\\frac{\\cos\\theta}{1 - \\sin\\theta} = \\frac{1 + \\sin\\theta}{\\cos\\theta}$.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Identities",
                statement:
                  "$\\sin^2 + \\cos^2 = 1$; $\\tan = \\sin/\\cos$; proofs via algebra.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\sin^2\\theta + \\cos^2\\theta = 1$.",
                working: "\\sin^2+\\cos^2=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$\\cos^2\\theta = 1 - \\frac{64}{289} = \\frac{225}{289}$, acute so $\\cos\\theta = \\frac{15}{17}$.",
                working: "\\frac{15}{17}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct value.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\tan\\theta = \\frac{8/17}{15/17} = \\frac{8}{15}$.",
                working: "\\frac{8}{15}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Cross-multiply: need $\\cos^2\\theta = (1 - \\sin\\theta)(1 + \\sin\\theta)$.",
                working: "\\cos^2\\theta = (1-\\sin\\theta)(1+\\sin\\theta)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Expand RHS: $1 - \\sin^2\\theta$.",
                working: "1 - \\sin^2\\theta",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$1 - \\sin^2\\theta = \\cos^2\\theta$ by the Pythagorean identity.",
                working: "\\cos^2\\theta",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Identity verified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) sin²+cos²=1 (b) 15/17 (c) 8/15 (d) proved",
          },
        },
      ],
    },
    {
      id: "cial-m-u2-trig-equations",
      title: "Solving trigonometric equations",
      skill:
        "Solve equations like $a\\sin\\theta = b$ and quadratic-in-sine equations.",
      lesson: {
        sections: [
          {
            heading: "Basic equations",
            body: "For $\\sin\\theta = k$: find the principal value $\\arcsin(k)$, then use quadrant signs. In $[0^\\circ, 360^\\circ)$: sine positive in Q1, Q2; cosine positive in Q1, Q4; tangent positive in Q1, Q3. General solutions add $360^\\circ k$.",
          },
          {
            heading: "Quadratic in trig functions",
            body: "Treat $\\sin\\theta$ as a variable: $2\\sin^2\\theta - \\sin\\theta - 1 = 0$ factors to $(2\\sin\\theta+1)(\\sin\\theta-1)=0$, giving $\\sin\\theta = -\\frac{1}{2}$ or $\\sin\\theta = 1$. Solve each.",
          },
          {
            heading: "Specifying the range",
            body: "Always check the required interval. $\\sin\\theta = \\frac{1}{2}$ in $[0, 2\\pi)$ gives $\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$; in $[0^\\circ, 180^\\circ]$ only $30^\\circ$ and $150^\\circ$ appear (sine positive throughout).",
          },
        ],
        keyFormulas: [
          {
            name: "Quadrant signs",
            statement: "ASTC: All, Sine, Tangent, Cosine positive in Q1–Q4.",
          },
          {
            name: "General solution",
            statement: "Add $360^\\circ k$ or $2\\pi k$ for all solutions.",
          },
        ],
        workedExample: {
          problem:
            "Solve $2\\sin\\theta - 1 = 0$ for $0^\\circ \\le \\theta < 360^\\circ$.",
          solution:
            "$\\sin\\theta = \\frac{1}{2}$. Principal $30^\\circ$; sine positive in Q1, Q2: $\\theta = 30^\\circ, 150^\\circ$.",
        },
      },
      questions: [
        {
          id: "cial-m-u2-te-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $\\sin\\theta = \\frac{1}{2}$ for $0^\\circ \\le \\theta < 360^\\circ$. How many solutions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One: $30^\\circ$" },
              { id: "b", text: "None" },
              { id: "c", text: "Four solutions" },
              { id: "d", text: "Two: $30^\\circ, 150^\\circ$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig equation",
                statement:
                  "$\\sin\\theta = k$ has solutions in Q1 and Q2 for $0 < k < 1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\sin\\theta = \\frac{1}{2}$: $30^\\circ$ and $150^\\circ$.",
                working: "30^\\circ, 150^\\circ",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$30^\\circ, 150^\\circ$",
            commonErrors: ["Giving only the principal value $30^\\circ$."],
          },
        },
        {
          id: "cial-m-u2-te-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $2\\sin\\theta - 1 = 0$ for $0^\\circ \\le \\theta < 360^\\circ$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig equation",
                statement:
                  "Isolate the trig function, then apply quadrant signs.",
              },
            ],
            steps: [
              {
                reasoning: "$\\sin\\theta = \\frac{1}{2}$.",
                working: "\\sin\\theta = \\frac{1}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Q1 and Q2 solutions: $30^\\circ, 150^\\circ$.",
                working: "30^\\circ, 150^\\circ",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both in range $[0^\\circ, 360^\\circ)$.",
                working: "\\text{both valid}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta = 30^\\circ, 150^\\circ$",
            commonErrors: [
              "Solving $2\\sin\\theta = 1$ as $\\sin\\theta = 2$.",
            ],
          },
        },
        {
          id: "cial-m-u2-te-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $2\\sin^2\\theta - \\sin\\theta - 1 = 0$ for $0 \\le \\theta < 2\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Quadratic trig",
                statement:
                  "Factor treating $\\sin\\theta$ as variable, then solve each case.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Factor: $(2\\sin\\theta + 1)(\\sin\\theta - 1) = 0$.",
                working: "(2\\sin\\theta+1)(\\sin\\theta-1)=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\sin\\theta = -\\frac{1}{2}$ or $\\sin\\theta = 1$.",
                working: "\\sin\\theta=-\\frac{1}{2},\\ 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\sin\\theta=1$: $\\theta=\\frac{\\pi}{2}$; $\\sin\\theta=-\\frac{1}{2}$: Q3, Q4: $\\frac{7\\pi}{6}, \\frac{11\\pi}{6}$.",
                working: "\\frac{\\pi}{2},\\frac{7\\pi}{6},\\frac{11\\pi}{6}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Three solutions: $\\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$.",
                working: "\\theta \\text{ values}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\theta = \\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$",
            commonErrors: ["Missing solutions from the second factor."],
          },
        },
        {
          id: "cial-m-u2-te-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Trigonometric equations.",
          parts: [
            {
              label: "a",
              prompt:
                "Solve $\\sin\\theta=\\frac{1}{2}$ in $[0^\\circ,360^\\circ)$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Solve $2\\sin\\theta-1=0$ in $[0^\\circ,360^\\circ)$.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Solve $\\cos\\theta=-\\frac{\\sqrt{2}}{2}$ in $[0^\\circ,360^\\circ)$.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Solve $2\\sin^2\\theta-\\sin\\theta-1=0$ in $[0,2\\pi)$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig equations",
                statement: "Isolate function, apply quadrants, check interval.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$30^\\circ, 150^\\circ$.",
                working: "30,150",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Both correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\sin\\theta=\\frac{1}{2}$.",
                working: "\\sin\\theta=\\frac{1}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$30^\\circ, 150^\\circ$.",
                working: "30,150",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct in range.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\cos\\theta=-\\frac{\\sqrt2}{2}$: Q2, Q3.",
                working: "\\cos\\theta<0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$135^\\circ, 225^\\circ$.",
                working: "135,225",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Factor: $(2\\sin\\theta+1)(\\sin\\theta-1)=0$.",
                working: "\\text{factor}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$\\theta=\\frac{\\pi}{2},\\frac{7\\pi}{6},\\frac{11\\pi}{6}$.",
                working: "\\theta \\text{ values}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 30°,150° (b) same (c) 135°,225° (d) π/2,7π/6,11π/6",
          },
        },
        {
          id: "cial-m-u2-te-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many solutions does $\\cos\\theta = \\frac{1}{2}$ have in $0^\\circ \\le \\theta < 360^\\circ$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Four" },
              { id: "b", text: "Three" },
              { id: "c", text: "One" },
              { id: "d", text: "Two" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig equation",
                statement:
                  "$\\cos\\theta = k$ ($0 < k < 1$) has solutions in Q1 and Q4.",
              },
            ],
            steps: [
              {
                reasoning: "$\\cos\\theta = \\frac{1}{2}$: $60^\\circ$ and $300^\\circ$ — two solutions.",
                working: "60^\\circ, 300^\\circ",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Two solutions: $60^\\circ, 300^\\circ$",
            commonErrors: ["Giving only the principal value $60^\\circ$."],
          },
        },
        {
          id: "cial-m-u2-te-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $\\sin\\theta = \\frac{\\sqrt{3}}{2}$ for $0^\\circ \\le \\theta < 360^\\circ$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60^\\circ$ only" },
              { id: "b", text: "$30^\\circ$ and $150^\\circ$" },
              { id: "c", text: "$45^\\circ$ and $135^\\circ$" },
              { id: "d", text: "$60^\\circ$ and $120^\\circ$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig equation",
                statement:
                  "Principal $60^\\circ$; sine positive in Q1 and Q2.",
              },
            ],
            steps: [
              {
                reasoning: "$\\sin\\theta = \\frac{\\sqrt{3}}{2}$: principal $60^\\circ$; Q2 gives $120^\\circ$.",
                working: "60^\\circ, 120^\\circ",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both in range.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta = 60^\\circ, 120^\\circ$",
            commonErrors: ["Using $30^\\circ$ — $\\sin 30^\\circ = \\frac{1}{2}$."],
          },
        },
        {
          id: "cial-m-u2-te-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the principal value of $\\arcsin\\left(\\frac{1}{2}\\right)$ in degrees?",
          response: {
            type: "numeric",
            parts: [{ label: "degrees", answer: 30, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Principal value",
                statement:
                  "$\\arcsin$ returns the angle in $[-90^\\circ, 90^\\circ]$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\sin 30^\\circ = \\frac{1}{2}$, so $\\arcsin(\\frac{1}{2}) = 30^\\circ$.",
                working: "30^\\circ",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$30^\\circ$",
            commonErrors: ["Giving $150^\\circ$ — not the principal value."],
          },
        },
        {
          id: "cial-m-u2-te-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $\\cos\\theta = \\frac{1}{2}$ for $0^\\circ \\le \\theta < 360^\\circ$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig equation",
                statement:
                  "Principal $60^\\circ$; cosine positive in Q1 and Q4.",
              },
            ],
            steps: [
              {
                reasoning: "$\\cos\\theta = \\frac{1}{2}$: $60^\\circ$ and $300^\\circ$.",
                working: "60^\\circ, 300^\\circ",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both solutions in range.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta = 60^\\circ, 300^\\circ$",
            commonErrors: ["Giving $60^\\circ$ and $120^\\circ$ — that's sine's pattern."],
          },
        },
        {
          id: "cial-m-u2-te-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $\\tan\\theta = \\sqrt{3}$ for $0^\\circ \\le \\theta < 360^\\circ$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$120^\\circ$ and $300^\\circ$" },
              { id: "b", text: "$60^\\circ$ only" },
              { id: "c", text: "$60^\\circ$ and $240^\\circ$" },
              { id: "d", text: "$30^\\circ$ and $210^\\circ$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig equation",
                statement:
                  "Tangent has period $180^\\circ$; positive in Q1 and Q3.",
              },
            ],
            steps: [
              {
                reasoning: "$\\tan\\theta = \\sqrt{3}$: $60^\\circ$; add period $180^\\circ$: $240^\\circ$.",
                working: "60^\\circ, 240^\\circ",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both in range.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta = 60^\\circ, 240^\\circ$",
            commonErrors: ["Adding $360^\\circ$ instead of $180^\\circ$."],
          },
        },
        {
          id: "cial-m-u2-te-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\sin\\theta = -\\frac{1}{2}$ for $0^\\circ \\le \\theta < 360^\\circ$.",
          response: {
            type: "numeric",
            parts: [
              { label: "first", answer: 210, tolerance: 0.01 },
              { label: "second", answer: 330, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig equation",
                statement:
                  "Sine negative in Q3 and Q4: $\\theta = 180^\\circ + 30^\\circ$ and $360^\\circ - 30^\\circ$.",
              },
            ],
            steps: [
              {
                reasoning: "Principal magnitude $30^\\circ$; sine negative in Q3, Q4.",
                working: "Q3, Q4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\theta = 210^\\circ$ and $330^\\circ$.",
                working: "210^\\circ, 330^\\circ",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both in range $[0^\\circ, 360^\\circ)$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta = 210^\\circ, 330^\\circ$",
            commonErrors: ["Giving $30^\\circ$ — sign of sine ignored."],
          },
        },
        {
          id: "cial-m-u2-te-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $2\\cos^2\\theta + \\cos\\theta - 1 = 0$ for $0^\\circ \\le \\theta < 360^\\circ$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Quadratic trig",
                statement:
                  "Factor treating $\\cos\\theta$ as a variable, then solve each case.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Factor: $(2\\cos\\theta - 1)(\\cos\\theta + 1) = 0$.",
                working: "(2\\cos\\theta-1)(\\cos\\theta+1)=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\cos\\theta = \\frac{1}{2}$ or $\\cos\\theta = -1$.",
                working: "\\cos\\theta = \\frac{1}{2}, -1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\cos\\theta = \\frac{1}{2}$: $60^\\circ, 300^\\circ$; $\\cos\\theta = -1$: $180^\\circ$.",
                working: "60^\\circ,300^\\circ,180^\\circ",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Three solutions: $60^\\circ, 180^\\circ, 300^\\circ$.",
                working: "\\theta \\text{ values}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta = 60^\\circ, 180^\\circ, 300^\\circ$",
            commonErrors: ["Missing the $\\cos\\theta = -1$ case."],
          },
        },
        {
          id: "cial-m-u2-te-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many solutions does $\\sin\\theta = 1$ have in $[0, 2\\pi)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Infinitely many" },
              { id: "b", text: "None" },
              { id: "c", text: "Two" },
              { id: "d", text: "One: $\\frac{\\pi}{2}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig equation",
                statement: "$\\sin\\theta = 1$ only at the maximum $\\frac{\\pi}{2}$.",
              },
            ],
            steps: [
              {
                reasoning: "Only $\\theta = \\frac{\\pi}{2}$ in one period.",
                working: "\\frac{\\pi}{2}",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "One solution: $\\frac{\\pi}{2}$",
            commonErrors: ["Expecting two solutions like $\\sin\\theta = \\frac{1}{2}$."],
          },
        },
        {
          id: "cial-m-u2-te-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\tan\\theta = 1$ for $0 \\le \\theta < 2\\pi$.",
          response: {
            type: "numeric",
            parts: [
              { label: "first", answer: 0.785, tolerance: 0.01 },
              { label: "second", answer: 3.93, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig equation",
                statement: "Tangent has period $\\pi$ — solutions repeat every $\\pi$.",
              },
            ],
            steps: [
              {
                reasoning: "Principal: $\\theta = \\frac{\\pi}{4}$.",
                working: "\\frac{\\pi}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add $\\pi$: $\\frac{\\pi}{4} + \\pi = \\frac{5\\pi}{4}$.",
                working: "\\frac{5\\pi}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both in range; $\\frac{\\pi}{4} \\approx 0.785$, $\\frac{5\\pi}{4} \\approx 3.93$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta = \\frac{\\pi}{4}, \\frac{5\\pi}{4}$",
            commonErrors: ["Adding $2\\pi$ instead of $\\pi$."],
          },
        },
        {
          id: "cial-m-u2-te-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How many solutions does $\\sin^2\\theta = \\sin\\theta$ have in $0^\\circ \\le \\theta < 360^\\circ$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One" },
              { id: "b", text: "Three" },
              { id: "c", text: "Four" },
              { id: "d", text: "Two" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig equation",
                statement:
                  "$\\sin^2\\theta = \\sin\\theta$ gives $\\sin\\theta = 0$ or $\\sin\\theta = 1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\sin\\theta = 0$: $0^\\circ, 180^\\circ$; $\\sin\\theta = 1$: $90^\\circ$ — three solutions.",
                working: "0,90,180",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All three in range $[0^\\circ, 360^\\circ)$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Three solutions: $0^\\circ, 90^\\circ, 180^\\circ$",
            commonErrors: ["Missing $\\theta = 0^\\circ$ since $0$ is in the range."],
          },
        },
        {
          id: "cial-m-u2-te-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Solving trigonometric equations.",
          parts: [
            {
              label: "a",
              prompt: "Solve $\\sin\\theta = \\frac{\\sqrt{2}}{2}$ in $[0^\\circ, 360^\\circ)$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Solve $\\cos\\theta = -\\frac{1}{2}$ in $[0^\\circ, 360^\\circ)$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Solve $\\tan\\theta = -1$ in $[0^\\circ, 360^\\circ)$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig equations",
                statement: "Apply quadrant signs; check interval.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\sin\\theta = \\frac{\\sqrt{2}}{2}$: $45^\\circ, 135^\\circ$.",
                working: "45,135",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Both correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\cos\\theta = -\\frac{1}{2}$: negative in Q2, Q3: $120^\\circ, 240^\\circ$.",
                working: "120,240",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\tan\\theta = -1$: negative in Q2, Q4: $135^\\circ, 315^\\circ$.",
                working: "135,315",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Both correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 45°,135° (b) 120°,240° (c) 135°,315°",
          },
        },
        {
          id: "cial-m-u2-te-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Trigonometric equations — mixed practice.",
          parts: [
            {
              label: "a",
              prompt:
                "Solve $2\\sin\\theta - 1 = 0$ in $[0^\\circ, 360^\\circ)$.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Solve $\\cos\\theta = \\frac{\\sqrt{3}}{2}$ in $[0^\\circ, 360^\\circ)$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Solve $2\\sin^2\\theta - \\sin\\theta - 1 = 0$ in $[0, 2\\pi)$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Solve $\\tan^2\\theta = 3$ in $[0, 2\\pi)$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig equations",
                statement: "Isolate, factor, apply quadrants, check interval.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\sin\\theta = \\frac{1}{2}$.",
                working: "\\sin\\theta = \\frac{1}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$30^\\circ, 150^\\circ$.",
                working: "30,150",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Both in range.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\cos\\theta = \\frac{\\sqrt{3}}{2}$: $30^\\circ, 330^\\circ$.",
                working: "30,330",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Factor: $(2\\sin\\theta + 1)(\\sin\\theta - 1) = 0$.",
                working: "\\text{factor}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\sin\\theta = -\\frac{1}{2}$ or $1$.",
                working: "\\sin\\theta = -\\frac{1}{2}, 1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\theta = \\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$.",
                working: "\\theta \\text{ values}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$\\tan\\theta = \\pm\\sqrt{3}$: $\\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}$.",
                working: "4 \\text{ solutions}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "All four in range.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 30°,150° (b) 30°,330° (c) π/2,7π/6,11π/6 (d) π/3,2π/3,4π/3,5π/3",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u2-trig-identities-equations-notes",
      title: "Trigonometric identities and equations — revision notes",
      summary:
        "Pythagorean and quotient identities plus solving $\\sin\\theta=k$ and friends in a given range.",
      sections: [
        {
          heading: "Key identities",
          body: "$\\sin^2\\theta+\\cos^2\\theta=1$; $\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$; $\\sec^2\\theta=1+\\tan^2\\theta$; $\\cosec^2\\theta=1+\\cot^2\\theta$. Use $\\sin^2+\\cos^2=1$ to reduce powers, e.g. $\\sin^2\\theta=1-\\cos^2\\theta$.",
        },
        {
          heading: "Solving equations",
          body: "For $\\sin\\theta=k$: find the principal value $\\alpha=\\sin^{-1}k$, then use quadrant symmetry — solutions in $[0,2\\pi)$ are $\\alpha$, $\\pi-\\alpha$, plus $2\\pi$ versions. For $\\cos\\theta=k$: $\\pm\\alpha$. For $\\tan\\theta=k$: $\\alpha$, $\\pi+\\alpha$. Always find ALL solutions in the stated range — check how many the range allows.",
        },
        {
          heading: "Quadratic in trig",
          body: "Equations like $2\\sin^2\\theta-\\sin\\theta-1=0$ factorise or use the quadratic formula with $u=\\sin\\theta$, then solve each $\\sin\\theta=u$ separately. Reject $|u|>1$.",
        },
        {
          heading: "Exam checklist",
          body: "Work in radians unless degrees are specified. Count expected solutions: $\\sin\\theta=k$ gives 2 per $2\\pi$ cycle (4 if range spans $4\\pi$). Verify each solution by substitution when unsure.",
        },
      ],
    },
  ],
};
