import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "cilm-u10-lesson-10-2",
  code: "10-2",
  title: "Stage 8 Checkpoint — Algebra and Graphs",
  goal: "I CAN solve equations, work with sequences and interpret graphs at Stage 8 checkpoint standard.",
  standards: [
    "Cambridge Lower Secondary Checkpoint Stage 8: algebra and graphs",
  ],
  stage: 8,
  vocabulary: [
    { term: "Variable", definition: "Symbol representing an unknown value." },
    {
      term: "Linear equation",
      definition: "Equation with variables to power 1.",
    },
    {
      term: "Sequence",
      definition: "Ordered list of numbers following a rule.",
    },
    { term: "Gradient", definition: "Steepness of a line — rise over run." },
    { term: "Intercept", definition: "Where a line crosses an axis." },
  ],
  concepts: [
    {
      id: "cilm-u10-s8-algebra",
      title: "Stage 8 algebra checkpoint",
      skill: "Solve equations and evaluate expressions.",
      lesson: {
        sections: [
          {
            heading: "Algebra skills",
            body: "Expand brackets, collect like terms, solve linear equations by inverse operations, substitute into formulae, and find terms of sequences.",
          },
        ],
        keyFormulas: [
          {
            name: "Linear equation",
            statement: "$ax + b = c \\Rightarrow x = (c-b)/a$",
          },
          { name: "Sequence nth term", statement: "$a_n = a_1 + (n-1)d$" },
        ],
        workedExample: {
          problem:
            "Solve $3x + 7 = 22$ and find the 10th term of 5, 9, 13, ...",
          solution:
            "$3x = 15 \\Rightarrow x = 5$. Common difference 4: $a_{10} = 5 + 9 \\times 4 = 41$.",
        },
      },
      questions: [
        {
          id: "cilm-u10-s8-a-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $2x - 5 = 11$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 3$" },
              { id: "b", text: "$x = 6$" },
              { id: "c", text: "$x = 8$" },
              { id: "d", text: "$x = 16$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Solve",
                statement: "Inverse operations isolate x.",
              },
            ],
            steps: [
              {
                reasoning: "$2x = 16 \\Rightarrow x = 8$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 8$",
          },
        },
        {
          id: "cilm-u10-s8-a-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $4a + 3b - 2a + b$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Collect terms",
                statement: "Combine like terms.",
              },
            ],
            steps: [
              {
                reasoning: "$4a - 2a = 2a$; $3b + b = 4b$; result $2a + 4b$.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "$2a + 4b$",
          },
        },
        {
          id: "cilm-u10-s8-a-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the nth term of 7, 11, 15, 19, ...",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "nth term",
                statement: "Common difference $d = 4$; first term 7.",
              },
            ],
            steps: [
              { reasoning: "$d = 11 - 7 = 4$.", marks: 1, markCode: "M" },
              {
                reasoning: "$a_n = 7 + (n-1)4 = 4n + 3$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$4n + 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4n + 3$",
          },
        },
        {
          id: "cilm-u10-s8-a-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The perimeter of a rectangle is 30 cm and its length is twice its width. Find the dimensions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Form equation",
                statement: "Perimeter $= 2(l+w)$; $l = 2w$.",
              },
            ],
            steps: [
              {
                reasoning: "$2(2w + w) = 30$ → $6w = 30$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$w = 5$ cm.", marks: 1, markCode: "M" },
              { reasoning: "$l = 10$ cm.", marks: 1, markCode: "A" },
              { reasoning: "Check: $2(10+5) = 30$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$10 \\times 5$ cm",
          },
        },
        {
          id: "cilm-u10-s8-a-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $5x+8=33$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=5$" },
              { id: "b", text: "$x=7$" },
              { id: "c", text: "$x=6$" },
              { id: "d", text: "$x=8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Solve",
                statement: "Subtract 8, then divide by 5.",
              },
            ],
            steps: [
              {
                reasoning: "$5x=25$, so $x=5$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x=5$",
          },
        },
        {
          id: "cilm-u10-s8-a-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $3a+2b$ when $a=4$ and $b=5$.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 22 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "Replace variables before simplifying.",
              },
            ],
            steps: [
              {
                reasoning: "$3(4)+2(5)=12+10=22$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Value is $22$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "22",
          },
        },
        {
          id: "cilm-u10-s8-a-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the nth term of $2,6,10,14,\\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4n+2$" },
              { id: "b", text: "$4n-2$" },
              { id: "c", text: "$6n-4$" },
              { id: "d", text: "$2n+2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "nth term",
                statement: "$d=4$, $a_1=2$ gives $4n-2$.",
              },
            ],
            steps: [
              {
                reasoning: "$a_n=2+(n-1)4=4n-2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$4n-2$",
          },
        },
        {
          id: "cilm-u10-s8-a-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $4x-7=21$.",
          response: {
            type: "numeric",
            parts: [{ label: "x", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Solve",
                statement: "Add 7 then divide by 4.",
              },
            ],
            steps: [
              {
                reasoning: "$4x=28$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x=7$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Solution is $x=7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=7$",
          },
        },
        {
          id: "cilm-u10-s8-a-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Expand $3(x+4)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x+12$" },
              { id: "b", text: "$3x+4$" },
              { id: "c", text: "$3x+7$" },
              { id: "d", text: "$3x+12$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Expand",
                statement: "Multiply both terms by 3.",
              },
            ],
            steps: [
              {
                reasoning: "$3x+12$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3x+12$",
          },
        },
        {
          id: "cilm-u10-s8-a-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangle has perimeter $40$ cm and length $12$ cm. Find its width.",
          response: {
            type: "numeric",
            parts: [{ label: "Width", answer: 8, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Form equation",
                statement: "$2(l+w)=40$.",
              },
            ],
            steps: [
              {
                reasoning: "$l+w=20$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$12+w=20$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$w=8$ cm.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Width is $8$ cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ cm",
          },
        },
        {
          id: "cilm-u10-s8-a-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $6x+3y-2x+y$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4x+2y$" },
              { id: "b", text: "$4x+4y$" },
              { id: "c", text: "$8x+4y$" },
              { id: "d", text: "$4x-2y$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Collect terms",
                statement: "Combine like terms.",
              },
            ],
            steps: [
              {
                reasoning: "$4x+4y$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$4x+4y$",
          },
        },
        {
          id: "cilm-u10-s8-a-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $3(x-2)=x+10$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Solve equation",
                statement: "Expand, collect like terms, divide.",
              },
            ],
            steps: [
              {
                reasoning: "Expand: $3x-6=x+10$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Collect: $2x=16$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x=8$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Solution is $x=8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=8$",
          },
        },
        {
          id: "cilm-u10-s8-a-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 15th term of $7,11,15,19,\\ldots$",
          response: {
            type: "numeric",
            parts: [{ label: "Term", answer: 63 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "nth term",
                statement: "$d=4$, $a_{15}=7+14(4)=63$.",
              },
            ],
            steps: [
              {
                reasoning: "$a_{15}=7+14\\times4=63$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "The term is $63$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "63",
          },
        },
        {
          id: "cilm-u10-s8-a-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The cost $C$ is given by $C=4n+9$. What is the cost when $n=7$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$28$" },
              { id: "b", text: "$33$" },
              { id: "c", text: "$43$" },
              { id: "d", text: "$37$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "$C=4(7)+9=37$.",
              },
            ],
            steps: [
              {
                reasoning: "$28+9=37$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "37",
          },
        },
        {
          id: "cilm-u10-s8-a-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A number doubled and increased by $7$ equals $31$. Write and solve an equation to find the number.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Word problem",
                statement: "Translate words into an equation before solving.",
              },
            ],
            steps: [
              {
                reasoning: "Let the number be $x$: $2x+7=31$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2x=24$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x=12$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: $2(12)+7=31$.",
                marks: 1,
                markCode: "B",
              },
              { reasoning: "The number is $12$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=12$",
          },
        },
        {
          id: "cilm-u10-s8-a-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which equation has solution $x=6$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4x=20$" },
              { id: "b", text: "$x+7=15$" },
              { id: "c", text: "$3x-2=13$" },
              { id: "d", text: "$2x+3=15$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Check solution",
                statement: "Substitute $x=6$ into each equation.",
              },
            ],
            steps: [
              {
                reasoning: "$2(6)+3=15$ is true.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2x+3=15$",
          },
        },
      ],
    },
    {
      id: "cilm-u10-s8-graphs",
      title: "Stage 8 graphs checkpoint",
      skill: "Read gradients, intercepts and interpret linear graphs.",
      lesson: {
        sections: [
          {
            heading: "Graphs",
            body: "Cartesian coordinates, plotting points, gradient $= \\frac{\\text{rise}}{\\text{run}}$, y-intercept, equation of a line $y = mx + c$.",
          },
        ],
        keyFormulas: [
          { name: "Gradient", statement: "$m = \\frac{y_2 - y_1}{x_2 - x_1}$" },
          { name: "Line equation", statement: "$y = mx + c$" },
        ],
        workedExample: {
          problem:
            "Find gradient and equation of line through (0, 2) and (4, 10).",
          solution: "$m = (10-2)/(4-0) = 2$; $c = 2$; equation $y = 2x + 2$.",
        },
      },
      questions: [
        {
          id: "cilm-u10-s8-g-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the gradient of the line through (1, 3) and (3, 7)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "1/2" },
              { id: "c", text: "4" },
              { id: "d", text: "10" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Gradient",
                statement: "$m = \\Delta y / \\Delta x$.",
              },
            ],
            steps: [
              {
                reasoning: "$m = (7-3)/(3-1) = 4/2 = 2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cilm-u10-s8-g-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A line has equation $y = 3x - 4$. What is its gradient and y-intercept?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "y = mx + c",
                statement: "m = gradient, c = intercept.",
              },
            ],
            steps: [
              {
                reasoning: "Gradient $= 3$, intercept $= -4$.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "$m = 3$, $c = -4$",
          },
        },
        {
          id: "cilm-u10-s8-g-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Is the point (2, 5) on the line $y = 2x + 1$? Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Test point",
                statement: "Substitute x and check y.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $x = 2$: $y = 2(2) + 1 = 5$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Matches given y = 5.", marks: 1, markCode: "M" },
              {
                reasoning: "Yes, the point is on the line.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Yes",
          },
        },
        {
          id: "cilm-u10-s8-g-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A taxi charges a $\\$3$ flagfall plus $\\$2$ per km. Write the equation and find cost for 8 km.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Linear model",
                statement: "$y = mx + c$: c = flagfall, m = rate.",
              },
            ],
            steps: [
              { reasoning: "$y = 2x + 3$.", marks: 1, markCode: "M" },
              {
                reasoning: "Substitute $x = 8$: $y = 2(8) + 3 = 19$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Cost $= \\$19$.", marks: 1, markCode: "A" },
              {
                reasoning: "Units and interpretation correct.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$y = 2x + 3$; $\\$19$",
          },
        },
        {
          id: "cilm-u10-s8-g-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the gradient of the line through $(2,5)$ and $(6,13)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "1/2" },
              { id: "c", text: "4" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Gradient",
                statement: "$m=\\frac{13-5}{6-2}=2$.",
              },
            ],
            steps: [
              {
                reasoning: "$m=\\frac{8}{4}=2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cilm-u10-s8-g-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the gradient of the line through $(0,-2)$ and $(5,8)$.",
          response: {
            type: "numeric",
            parts: [{ label: "Gradient", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Gradient",
                statement: "$m=\\frac{\\Delta y}{\\Delta x}$.",
              },
            ],
            steps: [
              {
                reasoning: "$m=\\frac{8-(-2)}{5-0}=\\frac{10}{5}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$m=2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cilm-u10-s8-g-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the y-intercept of $y=-2x+7$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "-2" },
              { id: "c", text: "-7" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "$y=mx+c$",
                statement: "$c$ is the y-intercept.",
              },
            ],
            steps: [
              {
                reasoning: "The constant term is $7$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "cilm-u10-s8-g-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the value of $y$ when $x=4$ on the line $y=3x-5$.",
          response: {
            type: "numeric",
            parts: [{ label: "y", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "Replace $x$ by $4$.",
              },
            ],
            steps: [
              {
                reasoning: "$y=3(4)-5=12-5$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$y=7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "cilm-u10-s8-g-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Is the point $(3,11)$ on the line $y=3x+2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No" },
              { id: "b", text: "Yes" },
              { id: "c", text: "Only for $x>3$" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Test point",
                statement: "Substitute $x=3$.",
              },
            ],
            steps: [
              {
                reasoning: "$y=3(3)+2=11$, which matches.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Yes",
          },
        },
        {
          id: "cilm-u10-s8-g-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the gradient of the line through $(-1,4)$ and $(3,12)$.",
          response: {
            type: "numeric",
            parts: [{ label: "Gradient", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Gradient",
                statement: "$m=\\frac{12-4}{3-(-1)}$.",
              },
            ],
            steps: [
              {
                reasoning: "$m=\\frac{8}{4}=2$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$m=2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cilm-u10-s8-g-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write the equation of the line with gradient $-1$ and y-intercept $4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=4x-1$" },
              { id: "b", text: "$y=-x-4$" },
              { id: "c", text: "$y=x+4$" },
              { id: "d", text: "$y=-x+4$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "$y=mx+c$",
                statement: "$m=-1$, $c=4$.",
              },
            ],
            steps: [
              {
                reasoning: "$y=-x+4$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$y=-x+4$",
          },
        },
        {
          id: "cilm-u10-s8-g-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the equation of the line through $(0,5)$ and $(2,11)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Equation of line",
                statement: "Find gradient, then use $y=mx+c$.",
              },
            ],
            steps: [
              {
                reasoning: "$m=\\frac{11-5}{2-0}=3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $x=0$, $y=5$, so $c=5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$y=3x+5$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Equation is $y=3x+5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=3x+5$",
          },
        },
        {
          id: "cilm-u10-s8-g-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the line $y=2x-8$, find the value of $x$ when $y=0$.",
          response: {
            type: "numeric",
            parts: [{ label: "x", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "x-intercept",
                statement: "Set $y=0$ and solve.",
              },
            ],
            steps: [
              {
                reasoning: "$0=2x-8$ gives $2x=8$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$x=4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4$",
          },
        },
        {
          id: "cilm-u10-s8-g-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A line models cost $C$ against distance $d$ kilometres. If its equation is $C=0.15d+2$, what does the gradient represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fixed starting cost" },
              { id: "b", text: "Cost per kilometre" },
              { id: "c", text: "Total distance" },
              { id: "d", text: "Maximum cost" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Gradient meaning",
                statement: "Gradient is rate of change.",
              },
            ],
            steps: [
              {
                reasoning: "$0.15$ is the cost per kilometre.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cost per kilometre",
          },
        },
        {
          id: "cilm-u10-s8-g-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A taxi charges $\\$4$ flagfall plus $\\$1.50$ per kilometre. Write an equation for cost $C$ after $d$ kilometres, find the cost for $12$ km, and find the distance for a $\\$25$ fare.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Linear model",
                statement: "$C=md+c$.",
              },
            ],
            steps: [
              {
                reasoning: "$C=1.5d+4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "For $d=12$: $C=1.5(12)+4=22$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "For $C=25$: $25=1.5d+4$ gives $1.5d=21$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$d=14$ km.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$C=1.5d+4$; $\\$22$; $14$ km.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$C=1.5d+4$; $\\$22$; $14$ km",
          },
        },
        {
          id: "cilm-u10-s8-g-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the gradient of the horizontal line $y=6$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6" },
              { id: "b", text: "1" },
              { id: "c", text: "0" },
              { id: "d", text: "Undefined" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Horizontal line",
                statement: "No change in $y$ means gradient 0.",
              },
            ],
            steps: [
              {
                reasoning: "$m=0$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0",
          },
        },
      ],
    },
    {
      id: "cilm-u10-s8-mx",
      title: "Stage 8 mixed checkpoint",
      skill: "Apply algebraic manipulation and graph skills together.",
      lesson: {
        sections: [
          {
            heading: "Mixed practice",
            body: "Checkpoint questions combine solving equations, substituting into formulae and reading gradients and intercepts from $y = mx + c$.",
          },
        ],
        keyFormulas: [
          {
            name: "Linear equation",
            statement:
              "$y = mx + c$ where $m$ is gradient and $c$ is $y$-intercept",
          },
          {
            name: "Gradient",
            statement:
              "$m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$",
          },
        ],
        workedExample: {
          problem:
            "Find the gradient of the line through $(1, 3)$ and $(5, 11)$.",
          solution: "$m = \\frac{11 - 3}{5 - 1} = \\frac{8}{4} = 2$.",
        },
      },
      questions: [
        {
          id: "cilm-u10-s8-mx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $3x + 6 = 21$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 3$" },
              { id: "b", text: "$x = 7$" },
              { id: "c", text: "$x = 9$" },
              { id: "d", text: "$x = 5$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Solve equation",
                statement: "Isolate the variable using inverse operations.",
              },
            ],
            steps: [
              { reasoning: "$3x = 15$, so $x = 5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 5$",
          },
        },
        {
          id: "cilm-u10-s8-mx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the gradient of the line through $(0, 2)$ and $(4, 10)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Gradient",
                statement: "Gradient = change in $y$ over change in $x$.",
              },
            ],
            steps: [
              {
                reasoning: "$m = \\frac{10 - 2}{4 - 0} = \\frac{8}{4}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$m = 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cilm-u10-s8-mx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write down the equation of the line with gradient $3$ that passes through $(0, -1)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "$y = mx + c$",
                statement: "$m$ is gradient, $c$ is $y$-intercept.",
              },
            ],
            steps: [
              {
                reasoning: "$m = 3$ and $c = -1$ from the point $(0, -1)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute: $y = 3x + (-1)$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$y = 3x - 1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 3x - 1$",
          },
        },
        {
          id: "cilm-u10-s8-mx-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $2(x + 3) = 5x - 9$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Solve equation",
                statement: "Expand brackets, collect like terms, divide.",
              },
            ],
            steps: [
              {
                reasoning: "Expand: $2x + 6 = 5x - 9$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Collect terms: $15 = 3x$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Divide by 3: $x = 5$.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "Check: $2(8) = 16$ and $5(5) - 9 = 16$. Answer $x = 5$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 5$",
          },
        },
        {
          id: "cilm-u10-s8-mx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $2x+9=25$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=34$" },
              { id: "b", text: "$x=8$" },
              { id: "c", text: "$x=16$" },
              { id: "d", text: "$x=7$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Solve equation",
                statement: "Subtract 9 then divide by 2.",
              },
            ],
            steps: [
              {
                reasoning: "$2x=16$, so $x=8$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x=8$",
          },
        },
        {
          id: "cilm-u10-s8-mx-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the gradient of the line through $(1,2)$ and $(5,14)$.",
          response: {
            type: "numeric",
            parts: [{ label: "Gradient", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Gradient",
                statement: "$m=\\frac{14-2}{5-1}$.",
              },
            ],
            steps: [
              {
                reasoning: "$m=\\frac{12}{4}=3$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$m=3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cilm-u10-s8-mx-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the equation of the line with gradient $4$ through $(0,1)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=4x+1$" },
              { id: "b", text: "$y=5x+1$" },
              { id: "c", text: "$y=4x-1$" },
              { id: "d", text: "$y=x+4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "$y=mx+c$",
                statement: "$m=4$ and $c=1$.",
              },
            ],
            steps: [
              {
                reasoning: "$y=4x+1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$y=4x+1$",
          },
        },
        {
          id: "cilm-u10-s8-mx-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $5x-6=24$.",
          response: {
            type: "numeric",
            parts: [{ label: "x", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Solve equation",
                statement: "Add 6 then divide by 5.",
              },
            ],
            steps: [
              {
                reasoning: "$5x=30$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x=6$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Solution is $x=6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=6$",
          },
        },
        {
          id: "cilm-u10-s8-mx-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the nth term of $3,8,13,18,\\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5n+3$" },
              { id: "b", text: "$8n-5$" },
              { id: "c", text: "$5n-2$" },
              { id: "d", text: "$3n+5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "nth term",
                statement: "$d=5$, $a_1=3$ gives $5n-2$.",
              },
            ],
            steps: [
              {
                reasoning: "$a_n=3+(n-1)5=5n-2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5n-2$",
          },
        },
        {
          id: "cilm-u10-s8-mx-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $2x-3y$ when $x=5$ and $y=4$.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: -2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "Replace variables before arithmetic.",
              },
            ],
            steps: [
              {
                reasoning: "$2(5)-3(4)=10-12=-2$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Value is $-2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-2",
          },
        },
        {
          id: "cilm-u10-s8-mx-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a negative gradient tell you about a line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It passes through the origin" },
              { id: "b", text: "It is vertical" },
              { id: "c", text: "It is horizontal" },
              { id: "d", text: "It slopes downwards from left to right" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Gradient sign",
                statement: "Negative gradient means $y$ decreases as $x$ increases.",
              },
            ],
            steps: [
              {
                reasoning: "The line slopes downwards.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "It slopes downwards",
          },
        },
        {
          id: "cilm-u10-s8-mx-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $4x+5=2x+21$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Solve equation",
                statement: "Collect like terms on both sides.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract $2x$: $2x+5=21$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract 5: $2x=16$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x=8$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Solution is $x=8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=8$",
          },
        },
        {
          id: "cilm-u10-s8-mx-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $y$ on the line $y=4x-7$ when $x=3$.",
          response: {
            type: "numeric",
            parts: [{ label: "y", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "Replace $x$ by 3.",
              },
            ],
            steps: [
              {
                reasoning: "$y=4(3)-7=5$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$y=5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cilm-u10-s8-mx-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Is the point $(2,9)$ on the line $y=3x+3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No" },
              { id: "b", text: "Yes" },
              { id: "c", text: "Only if $x=2$" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Test point",
                statement: "Substitute $x=2$.",
              },
            ],
            steps: [
              {
                reasoning: "$y=3(2)+3=9$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Yes",
          },
        },
        {
          id: "cilm-u10-s8-mx-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Find the equation of the line through $(1,4)$ and $(3,10)$, then find the value of $x$ where the line crosses $y=16$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Line equation",
                statement: "Find gradient and intercept, then solve for $x$.",
              },
            ],
            steps: [
              {
                reasoning: "$m=\\frac{10-4}{3-1}=3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Using $(1,4)$: $4=3(1)+c$, so $c=1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equation is $y=3x+1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Set $3x+1=16$, giving $3x=15$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$x=5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=3x+1$; $x=5$",
          },
        },
        {
          id: "cilm-u10-s8-mx-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which equation has solution $x=4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3x-5=7$" },
              { id: "b", text: "$4x+5=2x+21$" },
              { id: "c", text: "$2x+9=25$" },
              { id: "d", text: "$5x-6=24$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Check solution",
                statement: "Substitute $x=4$ into each equation.",
              },
            ],
            steps: [
              {
                reasoning: "$3(4)-5=7$ is true.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3x-5=7$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u10-stage8-algebra-graphs-notes",
      title: "Stage 8 algebra and graphs — revision notes",
      summary: "Solving equations, sequences, gradient and line equations.",
      sections: [
        {
          heading: "Algebra",
          body: "Inverse operations solve equations; nth term $= a + (n-1)d$; translate word problems into equations.",
        },
        {
          heading: "Graphs",
          body: "Gradient $= \\Delta y/\\Delta x$; $y = mx + c$; test points by substitution.",
        },
      ],
    },
  ],
};
