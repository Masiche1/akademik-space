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
              { id: "a", text: "$\\frac{\\pi}{2}$" },
              { id: "b", text: "$\\pi$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$2\\pi$" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cial-m-u2-sg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the amplitude of $y = 5\\sin x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$2\\pi$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Amplitude",
                statement: "Amplitude is $|a|$ in $y = a\\sin x$.",
              },
            ],
            steps: [
              {
                reasoning: "Amplitude $= |5| = 5$.",
                working: "5",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Doubling it — amplitude is not peak-to-peak."],
          },
        },
        {
          id: "cial-m-u2-sg-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the period of $y = \\sin(3x)$, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "period", answer: 2.09, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Period",
                statement: "Period of $y = \\sin(bx)$ is $\\frac{2\\pi}{|b|}$.",
              },
            ],
            steps: [
              {
                reasoning: "Period $= \\frac{2\\pi}{3}$.",
                working: "\\frac{2\\pi}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{2\\pi}{3} \\approx 2.09$.",
                working: "2.09",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{2\\pi}{3} \\approx 2.09$",
            commonErrors: ["Multiplying by 3 instead of dividing."],
          },
        },
        {
          id: "cial-m-u2-sg-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the range of $y = 2\\sin x + 3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All real numbers" },
              { id: "b", text: "$[1, 5]$" },
              { id: "c", text: "$[3, 5]$" },
              { id: "d", text: "$[-1, 1]$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Range",
                statement: "Range of $y = a\\sin x + c$ is $[c - |a|, c + |a|]$.",
              },
            ],
            steps: [
              {
                reasoning: "$[3 - 2, 3 + 2] = [1, 5]$.",
                working: "[1,5]",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$[1, 5]$",
            commonErrors: ["Forgetting the $+3$ vertical shift."],
          },
        },
        {
          id: "cial-m-u2-sg-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the amplitude, period and range of $y = -2\\cos x + 1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Graph parameters",
                statement:
                  "Amplitude $|a|$; period $\\frac{2\\pi}{|b|}$; range $[c - |a|, c + |a|]$.",
              },
            ],
            steps: [
              {
                reasoning: "Amplitude $= |-2| = 2$.",
                working: "2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Period $= \\frac{2\\pi}{1} = 2\\pi$.",
                working: "2\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Range $= [1 - 2, 1 + 2] = [-1, 3]$.",
                working: "[-1,3]",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Amplitude 2, period $2\\pi$, range $[-1, 3]$.",
            commonErrors: ["Using $a = -2$ for amplitude — amplitude is $|a|$."],
          },
        },
        {
          id: "cial-m-u2-sg-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What is the maximum value of $y = 4\\sin(2x) - 1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$-1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Maximum",
                statement:
                  "Max of $a\\sin(bx) + c$ is $c + |a|$.",
              },
            ],
            steps: [
              {
                reasoning: "Max $= -1 + 4 = 3$.",
                working: "-1 + 4 = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct maximum.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Adding the $-1$ instead of $4 - 1$."],
          },
        },
        {
          id: "cial-m-u2-sg-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "The graph of $y = \\sin\\left(x + \\frac{\\pi}{6}\\right)$ is obtained from $y = \\sin x$ by",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "a translation $\\frac{\\pi}{6}$ up",
              },
              {
                id: "b",
                text: "a horizontal stretch",
              },
              {
                id: "c",
                text: "a translation $\\frac{\\pi}{6}$ to the left",
              },
              {
                id: "d",
                text: "a translation $\\frac{\\pi}{6}$ to the right",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Phase shift",
                statement:
                  "$y = \\sin(x + \\alpha)$ shifts left by $\\alpha$.",
              },
            ],
            steps: [
              {
                reasoning: "Plus inside the argument → shift left $\\frac{\\pi}{6}$.",
                working: "\\text{left }\\frac{\\pi}{6}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct direction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Translation $\\frac{\\pi}{6}$ to the left",
            commonErrors: ["Shifting right — the 'minus inside' rule reverses sign."],
          },
        },
        {
          id: "cial-m-u2-sg-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe fully the graph of $y = 2\\sin\\left(x - \\frac{\\pi}{3}\\right) + 1$: give the amplitude, period, phase shift and range.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Graph parameters",
                statement:
                  "Amplitude $|a|$, period $\\frac{2\\pi}{|b|}$, range $[c - |a|, c + |a|]$, phase shift from $x - \\alpha$.",
              },
            ],
            steps: [
              {
                reasoning: "Amplitude $= |2| = 2$.",
                working: "2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Period $= \\frac{2\\pi}{1} = 2\\pi$.",
                working: "2\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Phase shift: right $\\frac{\\pi}{3}$.",
                working: "\\frac{\\pi}{3} \\text{ right}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Range $= [1 - 2, 1 + 2] = [-1, 3]$.",
                working: "[-1,3]",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Amplitude 2, period $2\\pi$, shift right $\\frac{\\pi}{3}$, range $[-1, 3]$.",
            commonErrors: ["Shifting left for $x - \\frac{\\pi}{3}$ or misplacing the range."],
          },
        },
        {
          id: "cial-m-u2-sg-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the period of $y = \\cos x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\pi$" },
              { id: "b", text: "$\\frac{\\pi}{2}$" },
              { id: "c", text: "$\\pi$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Period of cos",
                statement: "Cosine completes a cycle in $2\\pi$ radians.",
              },
            ],
            steps: [
              {
                reasoning: "Cosine has period $2\\pi$.",
                working: "2\\pi",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$2\\pi$",
            commonErrors: ["Confusing cosine with tangent's period $\\pi$."],
          },
        },
        {
          id: "cial-m-u2-sg-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the maximum and minimum values of $y = 4\\sin x - 2$.",
          response: {
            type: "numeric",
            parts: [
              { label: "maximum", answer: 2, tolerance: 0.01 },
              { label: "minimum", answer: -6, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Max/min",
                statement: "Max $= c + |a|$, min $= c - |a|$ for $y = a\\sin x + c$.",
              },
            ],
            steps: [
              {
                reasoning: "Max $= -2 + 4 = 2$.",
                working: "-2 + 4 = 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Min $= -2 - 4 = -6$.",
                working: "-2 - 4 = -6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both values correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Maximum $2$, minimum $-6$",
            commonErrors: ["Forgetting the $-2$ shift or misplacing the sign."],
          },
        },
        {
          id: "cial-m-u2-sg-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What is the period of $y = \\sin(2x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\pi}{2}$" },
              { id: "b", text: "$2\\pi$" },
              { id: "c", text: "$4\\pi$" },
              { id: "d", text: "$\\pi$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Period",
                statement: "Period of $y = \\sin(bx)$ is $\\frac{2\\pi}{|b|}$.",
              },
            ],
            steps: [
              {
                reasoning: "Period $= \\frac{2\\pi}{2} = \\pi$.",
                working: "\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct period.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\pi$",
            commonErrors: ["Forgetting to halve — period is $\\pi$, not $2\\pi$."],
          },
        },
        {
          id: "cial-m-u2-sg-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Graphs of sine and cosine.",
          parts: [
            {
              label: "a",
              prompt: "State the amplitude and period of $y = 3\\sin(4x)$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "State the range of $y = \\cos x + 2$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Solve $\\cos x = \\frac{1}{2}$ in $0 \\le x < 2\\pi$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig graphs",
                statement:
                  "Amplitude $|a|$, period $\\frac{2\\pi}{|b|}$, range $[c-|a|, c+|a|]$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Amplitude $= 3$.",
                working: "3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Period $= \\frac{2\\pi}{4} = \\frac{\\pi}{2}$.",
                working: "\\frac{\\pi}{2}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Range $= [2 - 1, 2 + 1] = [1, 3]$.",
                working: "[1,3]",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct range.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\cos x = \\frac{1}{2}$: $x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$.",
                working: "\\frac{\\pi}{3}, \\frac{5\\pi}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Both in range.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 3, π/2 (b) [1,3] (c) π/3,5π/3",
          },
        },
        {
          id: "cial-m-u2-sg-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Graphs of sine and cosine — mixed practice.",
          parts: [
            {
              label: "a",
              prompt: "State the period of $y = \\sin x$.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "State the amplitude, period and range of $y = -3\\cos(2x) + 2$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Describe the phase shift of $y = \\sin\\left(x - \\frac{\\pi}{4}\\right)$.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Write down the maximum and minimum values of $y = 2\\sin x - 3$.",
              marks: 4,
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
                reasoning: "Amplitude $= |-3| = 3$.",
                working: "3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Period $= \\frac{2\\pi}{2} = \\pi$.",
                working: "\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Range $= [2-3, 2+3] = [-1, 5]$.",
                working: "[-1,5]",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Shift right $\\frac{\\pi}{4}$.",
                working: "\\frac{\\pi}{4} \\text{ right}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct shift direction.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Max $= -3 + 2 = -1$.",
                working: "-1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Min $= -3 - 2 = -5$.",
                working: "-5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Both computed correctly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Max $-1$, min $-5$ stated.",
                working: "-1, -5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 2π (b) 3, π, [−1,5] (c) π/4 right (d) max −1, min −5",
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
              { id: "a", text: "$4\\pi$" },
              { id: "b", text: "$\\frac{\\pi}{2}$" },
              { id: "c", text: "$\\pi$" },
              { id: "d", text: "$2\\pi$" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cial-m-u2-tg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The graph of $y = \\tan x$ has a vertical asymptote at",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = \\frac{\\pi}{2}$" },
              { id: "b", text: "$x = 0$" },
              { id: "c", text: "$x = \\frac{\\pi}{4}$" },
              { id: "d", text: "$x = \\pi$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Asymptote",
                statement:
                  "Vertical asymptotes at $x = \\frac{\\pi}{2} + k\\pi$ where $\\cos x = 0$.",
              },
            ],
            steps: [
              {
                reasoning: "Nearest asymptote is $x = \\frac{\\pi}{2}$.",
                working: "\\frac{\\pi}{2}",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$x = \\frac{\\pi}{2}$",
            commonErrors: ["Thinking the asymptote is at $x = \\pi$."],
          },
        },
        {
          id: "cial-m-u2-tg-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the period of $y = \\tan(3x)$, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "period", answer: 1.05, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Tangent period",
                statement: "Period of $y = \\tan(bx)$ is $\\frac{\\pi}{|b|}$.",
              },
            ],
            steps: [
              {
                reasoning: "Period $= \\frac{\\pi}{3}$.",
                working: "\\frac{\\pi}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{\\pi}{3} \\approx 1.05$.",
                working: "1.05",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{\\pi}{3} \\approx 1.05$",
            commonErrors: ["Using $\\frac{2\\pi}{b}$ — that's for sine/cosine."],
          },
        },
        {
          id: "cial-m-u2-tg-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The graph of $y = \\tan x$ passes through which point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(\\frac{\\pi}{2}, 0)$" },
              { id: "b", text: "$(0, 0)$" },
              { id: "c", text: "$(0, 1)$" },
              { id: "d", text: "$(\\pi, 1)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tangent",
                statement: "$\\tan 0 = 0$; tangent passes through the origin.",
              },
            ],
            steps: [
              {
                reasoning: "$\\tan 0 = 0$ — the graph passes through $(0,0)$.",
                working: "(0,0)",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$(0, 0)$",
            commonErrors: ["Choosing a point on an asymptote."],
          },
        },
        {
          id: "cial-m-u2-tg-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the period of $y = \\tan\\left(\\frac{x}{2}\\right)$ and find the $x$-values of its asymptotes in $[0, 2\\pi)$.",
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
                reasoning: "Period $= \\frac{\\pi}{1/2} = 2\\pi$.",
                working: "2\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Asymptotes: $\\frac{x}{2} = \\frac{\\pi}{2} + k\\pi \\Rightarrow x = \\pi + 2k\\pi$.",
                working: "x = \\pi + 2k\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "In $[0, 2\\pi)$: $x = \\pi$ only.",
                working: "x = \\pi",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Period $2\\pi$; asymptote $x = \\pi$ in $[0, 2\\pi)$.",
            commonErrors: [
              "Forgetting to multiply by 2 when solving for $x$.",
            ],
          },
        },
        {
          id: "cial-m-u2-tg-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $\\tan x = \\sqrt{3}$ for $0 \\le x < 2\\pi$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\pi}{3}$ only" },
              { id: "b", text: "$\\frac{\\pi}{4}$ and $\\frac{5\\pi}{4}$" },
              { id: "c", text: "$\\frac{\\pi}{3}$ and $\\frac{4\\pi}{3}$" },
              { id: "d", text: "$\\frac{\\pi}{6}$ and $\\frac{7\\pi}{6}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Tangent equation",
                statement:
                  "Principal $\\frac{\\pi}{3}$; period $\\pi$ gives $\\frac{4\\pi}{3}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\tan x = \\sqrt{3}$: $\\frac{\\pi}{3}$; add period $\\pi$: $\\frac{4\\pi}{3}$.",
                working: "\\frac{\\pi}{3}, \\frac{4\\pi}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both in range.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = \\frac{\\pi}{3}, \\frac{4\\pi}{3}$",
            commonErrors: ["Adding $2\\pi$ instead of $\\pi$."],
          },
        },
        {
          id: "cial-m-u2-tg-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many solutions does $\\tan x = 1$ have in $0 \\le x < 4\\pi$?",
          response: {
            type: "numeric",
            parts: [{ label: "number of solutions", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Tangent graph",
                statement: "$\\tan x = k$ has one solution per period $\\pi$.",
              },
            ],
            steps: [
              {
                reasoning: "One solution per period of $\\pi$.",
                working: "1 \\text{ per } \\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$4\\pi$ spans 4 periods.",
                working: "4 \\text{ periods}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$4 \\times 1 = 4$ solutions.",
                working: "4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$4$ solutions",
            commonErrors: ["Using 2 per period like sine."],
          },
        },
        {
          id: "cial-m-u2-tg-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the graph of $y = \\tan\\left(x - \\frac{\\pi}{4}\\right)$ relative to $y = \\tan x$, including the positions of its asymptotes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Tangent transformations",
                statement:
                  "Shift right $\\frac{\\pi}{4}$; asymptotes where $x - \\frac{\\pi}{4} = \\frac{\\pi}{2} + k\\pi$.",
              },
            ],
            steps: [
              {
                reasoning: "$x - \\frac{\\pi}{4}$ inside shifts the graph right $\\frac{\\pi}{4}$.",
                working: "\\frac{\\pi}{4} \\text{ right}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Asymptotes: $x - \\frac{\\pi}{4} = \\frac{\\pi}{2} + k\\pi$.",
                working: "x - \\frac{\\pi}{4} = \\frac{\\pi}{2} + k\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "So $x = \\frac{3\\pi}{4} + k\\pi$.",
                working: "x = \\frac{3\\pi}{4} + k\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both shift and asymptotes stated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Shift right $\\frac{\\pi}{4}$; asymptotes at $x = \\frac{3\\pi}{4} + k\\pi$.",
            commonErrors: ["Shifting left or keeping asymptotes at $\\frac{\\pi}{2}$."],
          },
        },
        {
          id: "cial-m-u2-tg-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The range of $y = \\tan x$ is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All real numbers except 0" },
              { id: "b", text: "All real numbers" },
              { id: "c", text: "$[-1, 1]$" },
              { id: "d", text: "$[0, \\infty)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Range of tan",
                statement: "Tangent is unbounded — range is all real numbers.",
              },
            ],
            steps: [
              {
                reasoning: "Asymptotes mean the graph grows without limit.",
                working: "\\text{all reals}",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "All real numbers",
            commonErrors: ["Assuming range $[-1,1]$ like sine."],
          },
        },
        {
          id: "cial-m-u2-tg-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the $x$-values of the asymptotes of $y = \\tan(3x)$ in $[0, \\pi)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "first", answer: 0.524, tolerance: 0.01 },
              { label: "second", answer: 1.571, tolerance: 0.01 },
              { label: "third", answer: 2.618, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Asymptotes",
                statement: "$3x = \\frac{\\pi}{2} + k\\pi \\Rightarrow x = \\frac{\\pi}{6} + \\frac{k\\pi}{3}$.",
              },
            ],
            steps: [
              {
                reasoning: "$3x = \\frac{\\pi}{2} + k\\pi$.",
                working: "3x = \\frac{\\pi}{2} + k\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$.",
                working: "\\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All three in $[0, \\pi)$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$",
            commonErrors: ["Missing asymptotes or using period $2\\pi$ spacing."],
          },
        },
        {
          id: "cial-m-u2-tg-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "At which point does the graph of $y = \\tan x$ cross the $x$-axis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(\\frac{\\pi}{2}, 0)$" },
              { id: "b", text: "$(\\frac{\\pi}{4}, 0)$" },
              { id: "c", text: "$(\\pi, 1)$" },
              { id: "d", text: "$(0, 0)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tangent zeros",
                statement: "$\\tan x = 0$ when $\\sin x = 0$, i.e. $x = k\\pi$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\tan 0 = 0$, so the graph crosses at the origin.",
                working: "(0,0)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct intercept.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(0, 0)$",
            commonErrors: ["Confusing zeros with asymptotes."],
          },
        },
        {
          id: "cial-m-u2-tg-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Graph of tangent.",
          parts: [
            {
              label: "a",
              prompt: "State the period of $y = \\tan(4x)$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Solve $\\tan x = -\\sqrt{3}$ in $[0, 2\\pi)$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Find the period of $y = \\tan\\left(\\frac{x}{3}\\right)$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Tangent",
                statement: "Period $\\frac{\\pi}{|b|}$; solutions repeat every $\\pi$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Period $= \\frac{\\pi}{4}$.",
                working: "\\frac{\\pi}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct period.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\tan x = -\\sqrt{3}$: $\\frac{2\\pi}{3}, \\frac{5\\pi}{3}$.",
                working: "\\frac{2\\pi}{3}, \\frac{5\\pi}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both in range.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Period $= \\frac{\\pi}{1/3} = 3\\pi$.",
                working: "3\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct period.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) π/4 (b) 2π/3,5π/3 (c) 3π",
          },
        },
        {
          id: "cial-m-u2-tg-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Graph of tangent — mixed practice.",
          parts: [
            {
              label: "a",
              prompt: "State the period of $y = \\tan x$.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "State the period and the asymptotes of $y = \\tan(2x)$ in $[0, \\pi)$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Solve $\\tan x = -1$ in $[0^\\circ, 360^\\circ)$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Explain why $y = \\tan x$ has no maximum value.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Tangent",
                statement: "Period $\\pi$, asymptotes at $\\frac{\\pi}{2} + k\\pi$, range all reals.",
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
                reasoning: "Period $= \\frac{\\pi}{2}$.",
                working: "\\frac{\\pi}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Asymptotes at $x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}$.",
                working: "\\frac{\\pi}{4},\\frac{3\\pi}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\tan x = -1$: $135^\\circ, 315^\\circ$.",
                working: "135,315",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Both solutions in range.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct pair.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Range is all real numbers — unbounded above.",
                working: "\\text{all reals}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Asymptotes mean $\\tan x \\to \\infty$.",
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
              "(a) π (b) π/2, π/4 & 3π/4 (c) 135°,315° (d) unbounded",
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
