import type { Lesson } from "../../../types.ts";

export const lesson123: Lesson = {
  id: "cial-m-u2-lesson-2-3",
  code: "2-3",
  title: "Trigonometric graphs",
  goal: "I CAN sketch and analyse graphs of $y = a\\sin(bx) + c$, $y = a\\cos(bx) + c$ and $y = \\tan(bx)$.",
  standards: ["9709 P1: trigonometry"],
  vocabulary: [
    {
      term: "Amplitude",
      definition:
        "Half the peak-to-peak distance of a wave; $|a|$ in $y = a\\sin x$.",
    },
    {
      term: "Period",
      definition:
        "The horizontal length of one complete cycle; $\\frac{2\\pi}{|b|}$ for sin/cos, $\\frac{\\pi}{|b|}$ for tan.",
    },
    {
      term: "Phase shift",
      definition:
        "Horizontal translation of a trig graph, e.g. $y = \\sin(x - \\frac{\\pi}{4})$.",
    },
    {
      term: "Vertical shift",
      definition: "Translation up/down by $c$ in $y = a\\sin x + c$.",
    },
    {
      term: "Asymptote",
      definition:
        "A line the graph approaches but never crosses; tan has vertical asymptotes.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u2-sin-cos-graphs",
      title: "Graphs of sine and cosine",
      skill:
        "Identify amplitude, period, phase and vertical shifts in $y = a\\sin(bx) + c$.",
      lesson: {
        sections: [
          {
            heading: "Basic graphs",
            body: "$y = \\sin x$: starts at origin, peaks at $\\frac{\\pi}{2}$, crosses at $\\pi$, trough at $\\frac{3\\pi}{2}$, returns at $2\\pi$. Period $2\\pi$, amplitude 1, range $[-1, 1]$. $y = \\cos x$ is the same shape shifted left $\\frac{\\pi}{2}$ — starts at maximum $(0, 1)$.",
          },
          {
            heading: "Amplitude and period",
            body: "In $y = a\\sin(bx) + c$: amplitude $= |a|$ (half peak-to-peak), period $= \\frac{2\\pi}{|b|}$, vertical shift $= c$ (range becomes $[c - |a|, c + |a|]$). For $y = 3\\sin(2x) + 1$: amplitude 3, period $\\pi$, range $[-2, 4]$.",
          },
          {
            heading: "Phase shift",
            body: "$y = \\sin(x - \\alpha)$ shifts right by $\\alpha$; $y = \\sin(x + \\alpha)$ shifts left. The 'minus inside' rule applies as with algebraic functions.",
          },
        ],
        keyFormulas: [
          {
            name: "Sin/cos parameters",
            statement:
              "$y = a\\sin(bx)+c$: amplitude $|a|$, period $\\frac{2\\pi}{|b|}$, range $[c-|a|, c+|a|]$.",
          },
        ],
        workedExample: {
          problem: "State amplitude, period and range of $y = 3\\sin(2x) + 1$.",
          solution:
            "Amplitude $= 3$, period $= \\frac{2\\pi}{2} = \\pi$, range $= [1 - 3, 1 + 3] = [-2, 4]$.",
        },
      },
      questions: [
        {
          id: "cial-m-u2-sg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the period of $y = \\sin x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\pi$" },
              { id: "b", text: "$\\pi$" },
              { id: "c", text: "$\\frac{\\pi}{2}$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Period of sin",
                statement: "One full cycle of sine takes $2\\pi$ radians.",
              },
            ],
            steps: [
              {
                reasoning: "Sine completes a cycle in $2\\pi$.",
                working: "2\\pi",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$2\\pi$",
            commonErrors: ["Confusing with tangent's period $\\pi$."],
          },
        },
        {
          id: "cial-m-u2-sg-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the amplitude, period and range of $y = 3\\sin(2x) + 1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Graph parameters",
                statement:
                  "$y=a\\sin(bx)+c$: amplitude $|a|$, period $\\frac{2\\pi}{|b|}$, range $[c-|a|,c+|a|]$.",
              },
            ],
            steps: [
              {
                reasoning: "Amplitude $= |3| = 3$.",
                working: "3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Period $= \\frac{2\\pi}{2} = \\pi$.",
                working: "\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Range $= [1-3, 1+3] = [-2, 4]$.",
                working: "[-2,4]",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Amplitude 3, period $\\pi$, range $[-2, 4]$.",
            commonErrors: ["Forgetting the $+1$ shift in the range."],
          },
        },
        {
          id: "cial-m-u2-sg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How many solutions does $\\sin x = \\frac{1}{2}$ have in $0 \\le x \\le 4\\pi$?",
          response: {
            type: "numeric",
            parts: [{ label: "number of solutions", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig graph intersections",
                statement:
                  "Each period gives 2 solutions for $\\sin x = k$; $4\\pi$ spans 2 periods.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\sin x = \\frac{1}{2}$ has 2 solutions per period.",
                working: "2 \\text{ per period}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$4\\pi$ is two full periods.",
                working: "2 \\text{ periods}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2 \\times 2 = 4$ solutions.",
                working: "4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 4.",
                working: "4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$4$ solutions",
            commonErrors: ["Counting only one period."],
          },
        },
        {
          id: "cial-m-u2-sg-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Graphs of sine and cosine.",
          parts: [
            { label: "a", prompt: "Period of $y=\\sin x$?", marks: 1 },
            {
              label: "b",
              prompt: "Amplitude, period, range of $y=3\\sin(2x)+1$.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Describe $y=\\sin(x-\\frac{\\pi}{4})$ relative to $y=\\sin x$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Maximum and minimum of $y=2\\cos x - 1$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig graphs",
                statement:
                  "Amplitude $|a|$, period $\\frac{2\\pi}{|b|}$, range $[c-|a|,c+|a|]$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$2\\pi$.",
                working: "2\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Amplitude 3, period $\\pi$.",
                working: "3, \\pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Range $[-2,4]$.",
                working: "[-2,4]",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "All correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Shift right by $\\frac{\\pi}{4}$.",
                working: "\\frac{\\pi}{4} \\text{ right}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Phase shift identified.",
                working: "\\text{phase}",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Max of cos is 1: $2(1)-1=1$.",
                working: "2(1)-1=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Min of cos is $-1$: $2(-1)-1=-3$.",
                working: "2(-1)-1=-3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Max 1, min $-3$.",
                working: "1, -3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 2π (b) 3, π, [−2,4] (c) shift π/4 right (d) max 1, min −3",
          },
        },
      ],
    },
    {
      id: "cial-m-u2-tan-graph",
      title: "Graph of tangent",
      skill:
        "Sketch $y = \\tan x$ and its transformations, identifying asymptotes and period.",
      lesson: {
        sections: [
          {
            heading: "Properties of $y = \\tan x$",
            body: "Tangent has period $\\pi$ (not $2\\pi$), range all reals, and vertical asymptotes at $x = \\frac{\\pi}{2} + k\\pi$. It passes through the origin and is odd-symmetric: $\\tan(-x) = -\\tan x$.",
          },
          {
            heading: "Transformations",
            body: "$y = \\tan(bx)$ has period $\\frac{\\pi}{|b|}$. $y = a\\tan x$ stretches vertically. Asymptotes occur where $bx = \\frac{\\pi}{2} + k\\pi$, i.e. $x = \\frac{\\pi}{2b} + \\frac{k\\pi}{b}$.",
          },
          {
            heading: "Solving equations graphically",
            body: "$\\tan x = k$ intersects the graph once per period $\\pi$. For $k = 1$: $x = \\frac{\\pi}{4} + k\\pi$. Over $[0, 2\\pi)$: $\\frac{\\pi}{4}$ and $\\frac{5\\pi}{4}$ — two solutions.",
          },
        ],
        keyFormulas: [
          {
            name: "Tangent",
            statement:
              "Period $\\pi$; asymptotes at $\\frac{\\pi}{2} + k\\pi$; $\\tan(bx)$ period $\\frac{\\pi}{|b|}$.",
          },
        ],
        workedExample: {
          problem: "Find the period and asymptotes of $y = \\tan(2x)$.",
          solution:
            "Period $= \\frac{\\pi}{2}$. Asymptotes where $2x = \\frac{\\pi}{2} + k\\pi$, i.e. $x = \\frac{\\pi}{4} + \\frac{k\\pi}{2}$.",
        },
      },
      questions: [
        {
          id: "cial-m-u2-tg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the period of $y = \\tan x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\pi$" },
              { id: "b", text: "$2\\pi$" },
              { id: "c", text: "$\\frac{\\pi}{2}$" },
              { id: "d", text: "$4\\pi$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Period of tan",
                statement: "Tangent repeats every $\\pi$ radians.",
              },
            ],
            steps: [
              {
                reasoning: "Tan has period $\\pi$, half of sine.",
                working: "\\pi",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$\\pi$",
            commonErrors: ["Assuming all trig functions have period $2\\pi$."],
          },
        },
        {
          id: "cial-m-u2-tg-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the period of $y = \\tan(2x)$ and the $x$-values of its asymptotes in $[0, \\pi)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Tangent transformations",
                statement:
                  "Period $\\frac{\\pi}{|b|}$; asymptotes where $bx = \\frac{\\pi}{2} + k\\pi$.",
              },
            ],
            steps: [
              {
                reasoning: "Period $= \\frac{\\pi}{2}$.",
                working: "\\frac{\\pi}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Asymptotes: $2x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$ → $x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}$.",
                working: "\\frac{\\pi}{4}, \\frac{3\\pi}{4}",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Period $\\frac{\\pi}{2}$; asymptotes $x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}$.",
            commonErrors: [
              "Using $\\frac{\\pi}{2}$ as the period (that's for $b=2$ unhalved).",
            ],
          },
        },
        {
          id: "cial-m-u2-tg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $\\tan x = 1$ for $0 \\le x < 2\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Tangent equation",
                statement:
                  "$\\tan x = k$ has period $\\pi$ — solutions repeat every $\\pi$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Principal: $\\tan x = 1 \\Rightarrow x = \\frac{\\pi}{4}$.",
                working: "\\frac{\\pi}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Period $\\pi$ → add $\\pi$: $\\frac{\\pi}{4} + \\pi = \\frac{5\\pi}{4}$.",
                working: "\\frac{5\\pi}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both in $[0, 2\\pi)$.",
                working: "\\frac{\\pi}{4}, \\frac{5\\pi}{4}",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Two solutions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = \\frac{\\pi}{4}, \\frac{5\\pi}{4}$",
            commonErrors: [
              "Adding $2\\pi$ instead of $\\pi$ — tangent's period is $\\pi$.",
            ],
          },
        },
        {
          id: "cial-m-u2-tg-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Graph of tangent.",
          parts: [
            { label: "a", prompt: "Period of $y=\\tan x$?", marks: 1 },
            {
              label: "b",
              prompt: "Period and asymptotes of $y=\\tan(2x)$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Solve $\\tan x=1$ in $[0,2\\pi)$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Why does $y=\\tan x$ have no maximum?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Tangent",
                statement:
                  "Period $\\pi$, asymptotes at $\\frac{\\pi}{2}+k\\pi$, range all reals.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\pi$.",
                working: "\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Period $\\frac{\\pi}{2}$.",
                working: "\\frac{\\pi}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Asymptotes at $\\frac{\\pi}{4}, \\frac{3\\pi}{4}$.",
                working: "\\frac{\\pi}{4},\\frac{3\\pi}{4}",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "$x=\\frac{\\pi}{4}$.",
                working: "\\frac{\\pi}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$+\\pi=\\frac{5\\pi}{4}$.",
                working: "\\frac{5\\pi}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Both solutions.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Range is all reals — unbounded.",
                working: "\\text{all reals}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Asymptotes mean it grows without limit.",
                working: "\\text{asymptotes}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct explanation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) π (b) π/2, asymptotes (c) π/4,5π/4 (d) unbounded range",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u2-trig-graphs-notes",
      title: "Trigonometric graphs — revision notes",
      summary:
        "Sketching and analysing $y=a\\sin(bx)+c$, $y=a\\cos(bx)+c$ and $y=a\\tan(bx)$.",
      sections: [
        {
          heading: "Parameters",
          body: "$a$ = amplitude (vertical stretch, $|a|$ is the max displacement); $b$ = horizontal stretch — period $=\\frac{2\\pi}{|b|}$ for sin/cos and $\\frac{\\pi}{|b|}$ for tan; $c$ = vertical translation. Negative $a$ reflects in the $x$-axis.",
        },
        {
          heading: "Key features",
          body: "Sine starts at midline going up; cosine starts at maximum; tangent has asymptotes at $x=\\frac{\\pi}{2}+k\\pi$ (period $\\pi$). Range of $y=a\\sin(bx)+c$ is $c-|a|\\le y\\le c+|a|$.",
        },
        {
          heading: "Worked pattern",
          body: "For $y=2\\sin(3x)+1$: amplitude 2, period $\\frac{2\\pi}{3}$, range $-1\\le y\\le3$, midline $y=1$. Find intersections with $y=k$ by solving $2\\sin(3x)+1=k$.",
        },
        {
          heading: "Exam checklist",
          body: "Label amplitude, period and midline on sketches. For intersection questions solve the equation and count solutions in the given domain — period tells you how many cycles fit.",
        },
      ],
    },
  ],
};
