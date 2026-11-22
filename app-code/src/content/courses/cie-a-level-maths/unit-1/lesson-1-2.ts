import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "cial-m-u1-lesson-1-2",
  code: "1-2",
  title: "Composite, inverse and modulus functions",
  goal: "I CAN form composite functions, find inverses and solve modulus equations and inequalities.",
  standards: ["9709 P1: functions and graphs"],
  vocabulary: [
    {
      term: "Composite function",
      definition: "$fg(x) = f(g(x))$ — apply $g$ first, then $f$.",
    },
    {
      term: "Inverse function",
      definition: "$f^{-1}$ reverses $f$: if $y = f(x)$ then $x = f^{-1}(y)$.",
    },
    {
      term: "Modulus",
      definition:
        "$|x|$ is the absolute value — distance from zero, always non-negative.",
    },
    {
      term: "Modulus equation",
      definition: "An equation containing $|\\cdot|$, e.g. $|x - 3| = 2$.",
    },
    {
      term: "Self-inverse",
      definition:
        "A function equal to its own inverse, e.g. $f(x) = \\frac{1}{x}$.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u1-composite-inverse",
      title: "Composite and inverse functions",
      skill: "Form composites $fg(x)$ and find inverse functions.",
      lesson: {
        sections: [
          {
            heading: "Composites",
            body: "$fg(x)$ means $f(g(x))$ — the right-hand function acts first. Order matters: $fg \\ne gf$ in general. For $f(x) = 2x + 1$, $g(x) = x - 3$: $fg(x) = f(x-3) = 2(x-3) + 1 = 2x - 5$, while $gf(x) = (2x+1) - 3 = 2x - 2$.",
          },
          {
            heading: "Finding inverses",
            body: "To find $f^{-1}$: write $y = f(x)$, swap to $x = f(y)$, then make $y$ the subject. For $f(x) = 3x - 2$: $x = 3y - 2 \\Rightarrow y = \\dfrac{x + 2}{3}$, so $f^{-1}(x) = \\dfrac{x+2}{3}$.",
          },
          {
            heading: "Checking inverses",
            body: "$f^{-1}$ exists only for one-to-one functions. Check with $ff^{-1}(x) = f^{-1}f(x) = x$, and note that $y = f(x)$ and $y = f^{-1}(x)$ are reflections in the line $y = x$.",
          },
        ],
        keyFormulas: [
          {
            name: "Composite",
            statement: "$fg(x) = f(g(x))$ — apply $g$ first.",
          },
          {
            name: "Inverse method",
            statement:
              "Swap $x$ and $y$, then rearrange to make $y$ the subject.",
          },
        ],
        workedExample: {
          problem: "Find $f^{-1}(x)$ for $f(x) = \\dfrac{2x+1}{3}$.",
          solution:
            "$x = \\dfrac{2y+1}{3} \\Rightarrow 3x = 2y + 1 \\Rightarrow y = \\dfrac{3x - 1}{2}$. So $f^{-1}(x) = \\dfrac{3x-1}{2}$.",
        },
      },
      questions: [
        {
          id: "cial-m-u1-ci-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $f(x)=2x+1$ and $g(x)=x-3$, what is $fg(x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2x + 1$" },
              { id: "b", text: "$2x - 5$" },
              { id: "c", text: "$2x - 2$" },
              { id: "d", text: "$x - 2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Composite",
                statement: "$fg(x) = f(g(x))$ — substitute $g$ into $f$.",
              },
            ],
            steps: [
              {
                reasoning: "$fg(x) = 2(x-3) + 1 = 2x - 6 + 1 = 2x - 5$.",
                working: "2(x-3)+1 = 2x-5",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$2x - 5$",
            commonErrors: [
              "Computing $gf(x) = 2x - 2$ instead — order matters.",
            ],
          },
        },
        {
          id: "cial-m-u1-ci-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $f^{-1}(x)$ for $f(x) = 3x - 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Inverse method",
                statement: "Swap $x$ and $y$, then make $y$ the subject.",
              },
            ],
            steps: [
              {
                reasoning: "$y = 3x - 2 \\Rightarrow x = 3y - 2$.",
                working: "x = 3y - 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$3y = x + 2$.",
                working: "3y = x+2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$f^{-1}(x) = \\dfrac{x+2}{3}$.",
                working: "f^{-1}(x)=\\frac{x+2}{3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f^{-1}(x) = \\dfrac{x+2}{3}$",
            commonErrors: ["Forgetting to swap $x$ and $y$ first."],
          },
        },
        {
          id: "cial-m-u1-ci-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $f(x) = \\dfrac{2x+1}{3}$. Find $f^{-1}(4)$.",
          response: {
            type: "numeric",
            parts: [{ label: "f^{-1}(4)", answer: 5.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Inverse evaluation",
                statement: "$f^{-1}(4)$ can be found by solving $f(x) = 4$.",
              },
            ],
            steps: [
              {
                reasoning: "Method: solve $\\dfrac{2x+1}{3} = 4$.",
                working: "\\frac{2x+1}{3}=4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2x + 1 = 12$.",
                working: "2x+1=12",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2x = 11$.",
                working: "2x=11",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = 5.5$.",
                working: "x = 5.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5.5$",
            commonErrors: ["Using $f(4)$ instead of solving $f(x) = 4$."],
          },
        },
        {
          id: "cial-m-u1-ci-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Composite and inverse functions.",
          parts: [
            {
              label: "a",
              prompt: "For $f(x)=2x+1$, $g(x)=x-3$: find $fg(x)$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "For the same functions, find $gf(x)$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Find $f^{-1}(x)$ for $f(x)=3x-2$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Explain why order matters in composites.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Composites and inverses",
                statement:
                  "$fg=f\\circ g$; inverse by swapping and rearranging.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$fg(x)=2(x-3)+1=2x-5$.",
                working: "2x-5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct simplification.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$gf(x)=(2x+1)-3=2x-2$.",
                working: "2x-2",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "$x=3y-2 \\Rightarrow y=\\frac{x+2}{3}$.",
                working: "y=\\frac{x+2}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Rearrangement correct.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$f^{-1}(x)=\\frac{x+2}{3}$.",
                working: "f^{-1}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$fg \\ne gf$ as shown: $2x-5 \\ne 2x-2$.",
                working: "2x-5 \\ne 2x-2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Functions applied in different orders give different results.",
                working: "\\text{order}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Clear explanation.",
                working: "\\text{not commutative}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 2x−5 (b) 2x−2 (c) (x+2)/3 (d) order matters, fg≠gf",
          },
        },
        {
          id: "cial-m-u1-ci-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $f(x) = x + 4$ and $g(x) = 2x$, what is $fg(x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x + 8$" },
              { id: "b", text: "$2x - 4$" },
              { id: "c", text: "$2x + 4$" },
              { id: "d", text: "$2x + 8$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Composite",
                statement: "$fg(x) = f(g(x))$ — substitute $g$ into $f$.",
              },
            ],
            steps: [
              {
                reasoning: "$fg(x) = (2x) + 4 = 2x + 4$.",
                working: "2x + 4",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** $2x + 4$",
            commonErrors: ["Computing $gf(x) = 2x + 8$ — order matters."],
          },
        },
        {
          id: "cial-m-u1-ci-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $f^{-1}(x)$ for $f(x) = 4x - 3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{x - 3}{4}$" },
              { id: "b", text: "$4x + 3$" },
              { id: "c", text: "$\\dfrac{4}{x + 3}$" },
              { id: "d", text: "$\\dfrac{x + 3}{4}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Inverse method",
                statement: "Swap $x$ and $y$, then make $y$ the subject.",
              },
            ],
            steps: [
              {
                reasoning: "$x = 4y - 3 \\Rightarrow 4y = x + 3 \\Rightarrow y = \\frac{x+3}{4}$.",
                working: "y = \\frac{x+3}{4}",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** $\\dfrac{x + 3}{4}$",
            commonErrors: ["Writing $\\frac{x-3}{4}$ — must add 3, not subtract."],
          },
        },
        {
          id: "cial-m-u1-ci-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Let $f(x) = x^2$ and $g(x) = x + 1$. Which expression is $fg(x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2 + 2x$" },
              { id: "b", text: "$(x + 1)^2$" },
              { id: "c", text: "$x^2 + 1$" },
              { id: "d", text: "$(x - 1)^2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Composite",
                statement: "$fg(x) = f(g(x))$ — apply $g$ first.",
              },
            ],
            steps: [
              {
                reasoning: "$fg(x) = (x + 1)^2$.",
                working: "(x+1)^2",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** $(x + 1)^2$",
            commonErrors: ["Choosing $x^2 + 1$ which is $gf(x)$ — order matters."],
          },
        },
        {
          id: "cial-m-u1-ci-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $f(x) = 2x + 3$, find $f^{-1}(7)$.",
          response: {
            type: "numeric",
            parts: [{ label: "f^{-1}(7)", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Inverse evaluation",
                statement: "$f^{-1}(7)$ solves $f(x) = 7$.",
              },
            ],
            steps: [
              {
                reasoning: "Solve $2x + 3 = 7$.",
                working: "2x + 3 = 7",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2x = 4 \\Rightarrow x = 2$.",
                working: "x = 2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2$",
            commonErrors: ["Computing $f(7) = 17$ instead of solving $f(x) = 7$."],
          },
        },
        {
          id: "cial-m-u1-ci-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $f^{-1}(x)$ for $f(x) = 5x + 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Inverse method",
                statement: "Swap $x$ and $y$, then make $y$ the subject.",
              },
            ],
            steps: [
              {
                reasoning: "$y = 5x + 2 \\Rightarrow x = 5y + 2$.",
                working: "x = 5y + 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$5y = x - 2$.",
                working: "5y = x - 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$f^{-1}(x) = \\dfrac{x - 2}{5}$.",
                working: "f^{-1}(x)=\\frac{x-2}{5}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f^{-1}(x) = \\dfrac{x - 2}{5}$",
            commonErrors: ["Writing $\\frac{x+2}{5}$ — sign error when rearranging."],
          },
        },
        {
          id: "cial-m-u1-ci-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find $f^{-1}(x)$ for $f(x) = \\dfrac{2x - 1}{3}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Inverse method",
                statement: "Swap $x$ and $y$, clear the fraction, make $y$ the subject.",
              },
            ],
            steps: [
              {
                reasoning: "$x = \\dfrac{2y - 1}{3} \\Rightarrow 3x = 2y - 1$.",
                working: "3x = 2y - 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2y = 3x + 1$.",
                working: "2y = 3x + 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$y = \\dfrac{3x + 1}{2}$.",
                working: "y = \\frac{3x+1}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$f^{-1}(x) = \\dfrac{3x + 1}{2}$.",
                working: "f^{-1}(x)=\\frac{3x+1}{2}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f^{-1}(x) = \\dfrac{3x + 1}{2}$",
            commonErrors: ["Forgetting to swap $x$ and $y$ before rearranging."],
          },
        },
        {
          id: "cial-m-u1-ci-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Let $f(x) = x - 1$ and $g(x) = x^2$. What is $gf(3)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$9$" },
              { id: "c", text: "$8$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Composite",
                statement: "$gf(x) = g(f(x))$ — apply $f$ first.",
              },
            ],
            steps: [
              {
                reasoning: "$f(3) = 2$, then $g(2) = 4$.",
                working: "g(3-1) = g(2) = 4",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $4$",
            commonErrors: ["Computing $fg(3) = 8$ — order matters."],
          },
        },
        {
          id: "cial-m-u1-ci-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "For $f(x) = \\dfrac{x}{2} + 1$, find $f^{-1}(4)$.",
          response: {
            type: "numeric",
            parts: [{ label: "f^{-1}(4)", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Inverse evaluation",
                statement: "$f^{-1}(4)$ solves $f(x) = 4$.",
              },
            ],
            steps: [
              {
                reasoning: "Solve $\\frac{x}{2} + 1 = 4 \\Rightarrow \\frac{x}{2} = 3$.",
                working: "\\frac{x}{2} = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = 6$.",
                working: "x = 6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$6$",
            commonErrors: ["Computing $f(4) = 3$ — inverse evaluation solves $f(x)=k$."],
          },
        },
        {
          id: "cial-m-u1-ci-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Let $f(x) = x + 5$ and $g(x) = 2x - 1$. Find $fg(3)$.",
          response: {
            type: "numeric",
            parts: [{ label: "fg(3)", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Composite",
                statement: "$fg(x) = f(g(x))$ — apply $g$ first.",
              },
            ],
            steps: [
              {
                reasoning: "$g(3) = 5$, then $f(5) = 10$.",
                working: "f(g(3)) = f(5)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$fg(3) = 10$.",
                working: "5 + 5 = 10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Computing $gf(3) = 13$ — order matters."],
          },
        },
        {
          id: "cial-m-u1-ci-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why $f(x) = x^2$ has no inverse on $\\mathbb{R}$, but does have an inverse when its domain is restricted to $x \\ge 0$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inverse existence",
                statement:
                  "An inverse exists only for one-to-one functions.",
              },
            ],
            steps: [
              {
                reasoning: "On $\\mathbb{R}$: $f(-2) = f(2) = 4$ — two inputs give same output.",
                working: "f(-2)=f(2)=4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Not one-to-one, so $f^{-1}$ does not exist on $\\mathbb{R}$.",
                working: "\\text{not one-to-one}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "For $x \\ge 0$: if $x_1^2 = x_2^2$ then $x_1 = x_2$ (both non-negative).",
                working: "x_1 = x_2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "One-to-one on $x \\ge 0$, so inverse exists: $f^{-1}(x) = \\sqrt{x}$.",
                working: "f^{-1}(x)=\\sqrt{x}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Not one-to-one on $\\mathbb{R}$; one-to-one on $x \\ge 0$ with $f^{-1}(x)=\\sqrt{x}$.",
            commonErrors: ["Claiming $x^2$ is one-to-one without restriction."],
          },
        },
        {
          id: "cial-m-u1-ci-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Let $f(x) = 2x + 1$ and $g(x) = x^2$. Find $gf(3)$.",
          response: {
            type: "numeric",
            parts: [{ label: "gf(3)", answer: 49 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Composite",
                statement: "$gf(x) = g(f(x))$ — apply $f$ first.",
              },
            ],
            steps: [
              {
                reasoning: "$f(3) = 7$, then $g(7) = 49$.",
                working: "g(f(3)) = g(7)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$gf(3) = 49$.",
                working: "7^2 = 49",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$49$",
            commonErrors: ["Computing $fg(3) = 19$ — order matters."],
          },
        },
        {
          id: "cial-m-u1-ci-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Composite and inverse functions.",
          parts: [
            {
              label: "a",
              prompt: "For $f(x)=2x+1$, $g(x)=x-3$: find $fg(x)$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find $gf(x)$ for the same functions.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Find $f^{-1}(x)$ for $f(x)=4x-3$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Explain why $ff^{-1}(x)=x$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Composites and inverses",
                statement:
                  "$fg=f\\circ g$; inverse by swapping and rearranging; $ff^{-1}=x$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$fg(x)=2(x-3)+1=2x-5$.",
                working: "2x-5",
                marks: 1,
                markCode: "M",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "$gf(x)=(2x+1)-3=2x-2$.",
                working: "2x-2",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "$x=4y-3 \\Rightarrow 4y=x+3$.",
                working: "4y=x+3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Rearrangement correct.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$f^{-1}(x)=\\frac{x+3}{4}$.",
                working: "f^{-1}(x)=\\frac{x+3}{4}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$f^{-1}$ reverses $f$: applying $f$ after $f^{-1}$ undoes it.",
                working: "\\text{reverse}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "So $ff^{-1}(x) = f\\left(\\frac{x+3}{4}\\right) = x$.",
                working: "ff^{-1}(x)=x",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Clear justification.",
                working: "\\text{identity}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 2x−5 (b) 2x−2 (c) (x+3)/4 (d) f and f⁻¹ undo each other",
          },
        },
      ],
    },
    {
      id: "cial-m-u1-modulus",
      title: "Modulus functions",
      skill:
        "Solve modulus equations and inequalities and sketch $y = |f(x)|$.",
      lesson: {
        sections: [
          {
            heading: "Modulus basics",
            body: "$|a|$ is the distance of $a$ from zero: $|{-3}| = 3$, $|5| = 5$. Key rules: $|x| = a$ (for $a \\ge 0$) gives $x = a$ or $x = -a$; $|x| < a$ gives $-a < x < a$; $|x| > a$ gives $x < -a$ or $x > a$.",
          },
          {
            heading: "Solving modulus equations",
            body: "For $|x - 3| = 2$: split into $x - 3 = 2$ or $x - 3 = -2$, giving $x = 5$ or $x = 1$. For $|2x + 1| = 7$: $2x + 1 = \\pm 7$, giving $x = 3$ or $x = -4$.",
          },
          {
            heading: "Sketching $y = |f(x)|$",
            body: "Reflect any part of the graph below the $x$-axis up to above it. $y = |x|$ is a V-shape with vertex at the origin; $y = |x - 2|$ shifts the vertex to $(2, 0)$.",
          },
        ],
        keyFormulas: [
          {
            name: "Modulus rules",
            statement:
              "$|x|=a \\Rightarrow x=\\pm a$; $|x|<a \\Rightarrow -a<x<a$; $|x|>a \\Rightarrow x<-a$ or $x>a$.",
          },
        ],
        workedExample: {
          problem: "Solve $|x - 3| < 2$.",
          solution: "$-2 < x - 3 < 2 \\Rightarrow 1 < x < 5$.",
        },
      },
      questions: [
        {
          id: "cial-m-u1-mo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $|x| = 5$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 5 },
              { label: "x", answer: -5 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Modulus equation",
                statement: "$|x| = a$ gives $x = a$ or $x = -a$.",
              },
            ],
            steps: [
              {
                reasoning: "$x = 5$ or $x = -5$.",
                working: "x = \\pm 5",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$x = \\pm 5$",
            commonErrors: ["Forgetting the negative solution."],
          },
        },
        {
          id: "cial-m-u1-mo-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $|2x + 1| = 7$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 3 },
              { label: "x", answer: -4 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Modulus equation",
                statement: "$|u| = a \\Rightarrow u = \\pm a$.",
              },
            ],
            steps: [
              {
                reasoning: "$2x + 1 = 7$ or $2x + 1 = -7$.",
                working: "2x+1 = \\pm 7",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$2x = 6 \\Rightarrow x = 3$; $2x = -8 \\Rightarrow x = -4$.",
                working: "x=3,\\ x=-4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both solutions correct.",
                working: "3, -4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 3$ or $x = -4$",
            commonErrors: ["Missing one branch of the equation."],
          },
        },
        {
          id: "cial-m-u1-mo-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $|x - 3| < 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Modulus inequality",
                statement: "$|u| < a \\Rightarrow -a < u < a$.",
              },
            ],
            steps: [
              {
                reasoning: "$-2 < x - 3 < 2$.",
                working: "-2 < x-3 < 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add 3: $1 < x < 5$.",
                working: "1 < x < 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct interval.",
                working: "1<x<5",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Strict inequalities preserved.",
                working: "\\text{strict}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$1 < x < 5$",
            commonErrors: [
              "Writing $1 \\le x \\le 5$ — strict inequality required.",
            ],
          },
        },
        {
          id: "cial-m-u1-mo-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Modulus functions.",
          parts: [
            { label: "a", prompt: "Solve $|x|=5$.", marks: 1 },
            { label: "b", prompt: "Solve $|2x+1|=7$.", marks: 3 },
            { label: "c", prompt: "Solve $|x-3|<2$.", marks: 3 },
            {
              label: "d",
              prompt: "Sketch $y=|x-2|$ and state its vertex.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Modulus",
                statement:
                  "$|u|=a \\Rightarrow \\pm$; $|u|<a \\Rightarrow$ interval; $y=|x-h|$ V-shape at $(h,0)$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$x=\\pm5$.",
                working: "x=\\pm5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$2x+1=\\pm7$.",
                working: "2x+1=\\pm7",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$x=3$ or $x=-4$.",
                working: "x=3,-4",
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
                reasoning: "$-2<x-3<2$.",
                working: "-2<x-3<2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$1<x<5$.",
                working: "1<x<5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct interval.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "V-shape reflected about $x=2$.",
                working: "\\text{V-shape}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Vertex at $(2,0)$.",
                working: "(2,0)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct description.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) ±5 (b) 3,−4 (c) 1<x<5 (d) V vertex (2,0)",
          },
        },
        {
          id: "cial-m-u1-mo-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $|x| = 3$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 3 },
              { label: "x", answer: -3 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Modulus equation",
                statement: "$|x| = a$ gives $x = a$ or $x = -a$.",
              },
            ],
            steps: [
              {
                reasoning: "$x = 3$ or $x = -3$.",
                working: "x = \\pm 3",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$x = \\pm 3$",
            commonErrors: ["Forgetting the negative solution."],
          },
        },
        {
          id: "cial-m-u1-mo-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $|x - 2| = 5$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 7 },
              { label: "x", answer: -3 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Modulus equation",
                statement: "$|u| = a \\Rightarrow u = \\pm a$.",
              },
            ],
            steps: [
              {
                reasoning: "$x - 2 = 5$ or $x - 2 = -5$.",
                working: "x - 2 = \\pm 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = 7$ or $x = -3$.",
                working: "x = 7,\\ x = -3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 7$ or $x = -3$",
            commonErrors: ["Writing $x - 2 = 5$ only — missing the negative branch."],
          },
        },
        {
          id: "cial-m-u1-mo-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $|x + 1| < 3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-2 < x < 4$" },
              { id: "b", text: "$-4 < x < 2$" },
              { id: "c", text: "$x < -4$ or $x > 2$" },
              { id: "d", text: "$-4 \\le x \\le 2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Modulus inequality",
                statement: "$|u| < a \\Rightarrow -a < u < a$.",
              },
            ],
            steps: [
              {
                reasoning: "$-3 < x + 1 < 3 \\Rightarrow -4 < x < 2$.",
                working: "-4 < x < 2",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** $-4 < x < 2$",
            commonErrors: ["Using $\\ge$ — the inequality is strict."],
          },
        },
        {
          id: "cial-m-u1-mo-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $|3x - 2| = 4$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 2 },
              { label: "x", answer: -0.6666667, tolerance: 0.0001 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Modulus equation",
                statement: "$|u| = a \\Rightarrow u = \\pm a$.",
              },
            ],
            steps: [
              {
                reasoning: "$3x - 2 = 4$ or $3x - 2 = -4$.",
                working: "3x - 2 = \\pm 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$3x = 6 \\Rightarrow x = 2$; $3x = -2 \\Rightarrow x = -\\frac{2}{3}$.",
                working: "x = 2,\\ x = -\\frac{2}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both solutions correct.",
                working: "2,\\ -\\frac{2}{3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 2$ or $x = -\\dfrac{2}{3}$",
            commonErrors: ["Dividing only the positive branch — must solve both."],
          },
        },
        {
          id: "cial-m-u1-mo-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $|2x - 1| = 3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Modulus equation",
                statement: "$|u| = a \\Rightarrow u = \\pm a$.",
              },
            ],
            steps: [
              {
                reasoning: "$2x - 1 = 3$ or $2x - 1 = -3$.",
                working: "2x - 1 = \\pm 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2x = 4 \\Rightarrow x = 2$; $2x = -2 \\Rightarrow x = -1$.",
                working: "x = 2,\\ x = -1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both solutions correct.",
                working: "2, -1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 2$ or $x = -1$",
            commonErrors: ["Missing one branch of the equation."],
          },
        },
        {
          id: "cial-m-u1-mo-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $|x - 2| > 1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Modulus inequality",
                statement: "$|u| > a \\Rightarrow u < -a$ or $u > a$.",
              },
            ],
            steps: [
              {
                reasoning: "$x - 2 > 1$ or $x - 2 < -1$.",
                working: "x-2 > 1 \\text{ or } x-2 < -1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x > 3$ or $x < 1$.",
                working: "x > 3 \\text{ or } x < 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two disjoint intervals — union required.",
                working: "x<1 \\cup x>3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strict inequalities preserved.",
                working: "\\text{strict}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x < 1$ or $x > 3$",
            commonErrors: ["Writing $1 < x < 3$ — that is the complement (for $<$)."],
          },
        },
        {
          id: "cial-m-u1-mo-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the vertex of the graph of $y = |x + 3| - 1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(-3, 1)$" },
              { id: "b", text: "$(3, 1)$" },
              { id: "c", text: "$(3, -1)$" },
              { id: "d", text: "$(-3, -1)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Modulus graph",
                statement: "$y = |x - h| + k$ has vertex $(h, k)$.",
              },
            ],
            steps: [
              {
                reasoning: "$|x + 3| = |x - (-3)|$ and $-1$ gives vertex $(-3, -1)$.",
                working: "(-3,-1)",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** $(-3, -1)$",
            commonErrors: ["Writing $(3, -1)$ — must solve $x + 3 = 0$."],
          },
        },
        {
          id: "cial-m-u1-mo-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $|2x| = 8$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 4 },
              { label: "x", answer: -4 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Modulus equation",
                statement: "$|2x| = 8 \\Rightarrow 2x = \\pm 8$.",
              },
            ],
            steps: [
              {
                reasoning: "$2x = 8$ or $2x = -8$.",
                working: "2x = \\pm 8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = 4$ or $x = -4$.",
                working: "x = \\pm 4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = \\pm 4$",
            commonErrors: ["Dividing before splitting — must keep both signs."],
          },
        },
        {
          id: "cial-m-u1-mo-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $|x - 3| = 0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 3$" },
              { id: "b", text: "$x = 0$" },
              { id: "c", text: "$x = \\pm 3$" },
              { id: "d", text: "No solution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Modulus equation",
                statement: "$|u| = 0 \\Rightarrow u = 0$ — only one solution.",
              },
            ],
            steps: [
              {
                reasoning: "$x - 3 = 0 \\Rightarrow x = 3$.",
                working: "x = 3",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $x = 3$",
            commonErrors: ["Writing $x = \\pm 3$ — modulus equals zero gives one solution."],
          },
        },
        {
          id: "cial-m-u1-mo-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which inequality describes the solution of $|x - 1| > 2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x < -3$ or $x > 1$" },
              { id: "b", text: "$-1 < x < 3$" },
              { id: "c", text: "$-3 < x < 1$" },
              { id: "d", text: "$x < -1$ or $x > 3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Modulus inequality",
                statement: "$|u| > a \\Rightarrow u < -a$ or $u > a$.",
              },
            ],
            steps: [
              {
                reasoning: "$x - 1 > 2$ or $x - 1 < -2 \\Rightarrow x > 3$ or $x < -1$.",
                working: "x<-1 \\text{ or } x>3",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** $x < -1$ or $x > 3$",
            commonErrors: ["Choosing the interval — that solves $|x-1|<2$."],
          },
        },
        {
          id: "cial-m-u1-mo-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $|x - 2| = 2x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Modulus equation cases",
                statement: "Split into cases at the vertex and check each solution.",
              },
            ],
            steps: [
              {
                reasoning: "Case $x \\ge 2$: $x - 2 = 2x \\Rightarrow x = -2$ — rejected (not $\\ge 2$).",
                working: "x=-2 \\text{ rejected}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Case $x < 2$: $2 - x = 2x \\Rightarrow 3x = 2 \\Rightarrow x = \\frac{2}{3}$.",
                working: "x = \\frac{2}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{2}{3} < 2$ — valid; check: $|\\frac{2}{3} - 2| = \\frac{4}{3} = 2 \\times \\frac{2}{3}$.",
                working: "\\frac{4}{3} = \\frac{4}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only solution: $x = \\frac{2}{3}$.",
                working: "x = \\frac{2}{3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = \\dfrac{2}{3}$",
            commonErrors: ["Keeping $x = -2$ without checking the case condition."],
          },
        },
        {
          id: "cial-m-u1-mo-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Modulus functions.",
          parts: [
            { label: "a", prompt: "Solve $|x| = 4$.", marks: 1 },
            {
              label: "b",
              prompt: "Solve $|2x - 3| = 5$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Solve $|x - 1| < 2$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "State the vertex of $y = |x + 2| + 1$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Modulus",
                statement:
                  "$|u|=a \\Rightarrow \\pm$; $|u|<a \\Rightarrow$ interval; $y=|x-h|+k$ vertex $(h,k)$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$x = \\pm 4$.",
                working: "x = \\pm 4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$2x - 3 = \\pm 5$.",
                working: "2x - 3 = \\pm 5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$x = 4$ or $x = -1$.",
                working: "x = 4,\\ x = -1",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Both correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "$-2 < x - 1 < 2$.",
                working: "-2 < x-1 < 2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$-1 < x < 3$.",
                working: "-1 < x < 3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct interval.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$|x + 2| = |x - (-2)|$ gives $h = -2$; $+1$ gives $k = 1$.",
                working: "h=-2,\\ k=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Vertex at $(-2, 1)$.",
                working: "(-2,1)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct vertex.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) ±4 (b) 4,−1 (c) −1<x<3 (d) vertex (−2,1)",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u1-composite-inverse-modulus-notes",
      title: "Composite, inverse and modulus functions — revision notes",
      summary:
        "Forming $fg(x)$, finding $f^{-1}(x)$, and solving $|f(x)|=k$ and modulus inequalities.",
      sections: [
        {
          heading: "Composite functions",
          body: "$fg(x)=f(g(x))$ — apply $g$ first, then $f$. Order matters: $fg\\ne gf$ in general. Watch domain restrictions inherited from $g$.",
        },
        {
          heading: "Inverse functions",
          body: "To find $f^{-1}$: write $y=f(x)$, swap $x$ and $y$, solve for $y$. Domain of $f^{-1}$ = range of $f$ and vice versa. Check $f^{-1}$ exists — $f$ must be one-to-one; if not, restrict the domain first.",
        },
        {
          heading: "Modulus",
          body: "$|x|=a$ ($a\\ge0$) gives $x=\\pm a$. For $|f(x)|=k$: solve $f(x)=k$ AND $f(x)=-k$, keep both sets of solutions. For $|f(x)|<k$: solve $-k<f(x)<k$ and give the interval. Sketch $y=|f(x)|$ by reflecting the parts of $y=f(x)$ below the $x$-axis.",
        },
        {
          heading: "Exam checklist",
          body: "State the domain when restricting for an inverse. For modulus equations always produce both signs. In inequalities give answer as an interval or union of intervals.",
        },
      ],
    },
  ],
};
