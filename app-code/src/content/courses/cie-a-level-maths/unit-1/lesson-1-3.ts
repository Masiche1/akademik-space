import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "cial-m-u1-lesson-1-3",
  code: "1-3",
  title: "Curve sketching and transformations",
  goal: "I CAN sketch transformed graphs of $y = f(x)$ and describe the transformations.",
  standards: ["9709 P1: functions and graphs"],
  vocabulary: [
    {
      term: "Translation",
      definition:
        "A slide of the graph: $y = f(x) + a$ shifts up/down; $y = f(x - a)$ shifts left/right.",
    },
    {
      term: "Reflection",
      definition:
        "A mirror image: $y = -f(x)$ reflects in the $x$-axis; $y = f(-x)$ in the $y$-axis.",
    },
    {
      term: "Stretch",
      definition:
        "A scaling: $y = af(x)$ stretches vertically by factor $a$; $y = f(ax)$ horizontally by factor $\\frac{1}{a}$.",
    },
    {
      term: "Invariant point",
      definition:
        "A point unchanged by a transformation, e.g. the origin under $y = f(x) + 2$.",
    },
    {
      term: "Graph of $y = f(x)$",
      definition: "The set of points $(x, f(x))$ plotted on the $xy$-plane.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u1-translations",
      title: "Translations and reflections",
      skill:
        "Sketch $y = f(x) + a$, $y = f(x - a)$, $y = -f(x)$ and $y = f(-x)$.",
      lesson: {
        sections: [
          {
            heading: "Vertical shifts",
            body: "$y = f(x) + a$ moves every point $a$ units up (if $a > 0$) or down (if $a < 0$). $y = f(x) - 3$ shifts down 3. Points on the $x$-axis move vertically; shape is unchanged.",
          },
          {
            heading: "Horizontal shifts",
            body: "$y = f(x - a)$ moves the graph $a$ units right (if $a > 0$). The 'minus inside' reverses intuition: $y = f(x - 2)$ shifts right 2, $y = f(x + 2)$ shifts left 2. Think: the graph takes the shape of $f$ but 'waits' until $x = a$.",
          },
          {
            heading: "Reflections",
            body: "$y = -f(x)$ reflects in the $x$-axis (negate the output). $y = f(-x)$ reflects in the $y$-axis (negate the input). Both flip the graph but preserve distances.",
          },
        ],
        keyFormulas: [
          {
            name: "Transformations",
            statement:
              "$f(x)+a$: vertical shift $a$; $f(x-a)$: horizontal shift right $a$; $-f(x)$: reflect $x$-axis; $f(-x)$: reflect $y$-axis.",
          },
        ],
        workedExample: {
          problem:
            "Describe the transformation from $y = x^2$ to $y = (x - 2)^2 + 1$.",
          solution:
            "Horizontal translation right 2, then vertical translation up 1. Vertex moves from $(0,0)$ to $(2,1)$.",
        },
      },
      questions: [
        {
          id: "cial-m-u1-tr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The graph of $y = f(x)$ is translated to give $y = f(x) + 3$. Describe the transformation.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translation 3 units up" },
              { id: "b", text: "Translation 3 units right" },
              { id: "c", text: "Reflection in the $x$-axis" },
              { id: "d", text: "Translation 3 units down" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vertical translation",
                statement:
                  "$f(x) + a$ shifts every point $a$ units vertically.",
              },
            ],
            steps: [
              {
                reasoning: "$+3$ outside means shift up 3.",
                working: "\\text{up }3",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Translation 3 units up",
            commonErrors: ["Confusing $f(x)+3$ with $f(x-3)$."],
          },
        },
        {
          id: "cial-m-u1-tr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Where does the vertex of $y = (x - 2)^2$ move compared to $y = x^2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "From $(0,0)$ to $(0,2)$" },
              { id: "b", text: "From $(0,0)$ to $(-2,0)$" },
              { id: "c", text: "No change" },
              { id: "d", text: "From $(0,0)$ to $(2,0)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Horizontal shift",
                statement:
                  "$f(x - a)$ shifts right by $a$; vertex $(0,0) \\to (2,0)$.",
              },
            ],
            steps: [
              {
                reasoning: "$x - 2$ inside means shift right 2.",
                working: "x-2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vertex moves to $(2,0)$.",
                working: "(2,0)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(0,0) \\to (2,0)$",
            commonErrors: ["Choosing left shift — 'minus inside' means right."],
          },
        },
        {
          id: "cial-m-u1-tr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe fully the transformation from $y = x^2$ to $y = -x^2 + 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Combined transformations",
                statement:
                  "Apply in order: reflect then translate, or identify net effect on key points.",
              },
            ],
            steps: [
              {
                reasoning: "$-x^2$ reflects in the $x$-axis.",
                working: "-x^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$+2$ shifts up 2.",
                working: "+2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Vertex moves from $(0,0)$ to $(0,2)$, opening downward.",
                working: "(0,2)",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Both transformations identified.",
                working: "\\text{reflect+translate}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Reflect in $x$-axis, then translate up 2; vertex $(0,2)$ opening downward.",
            commonErrors: [
              "Missing the reflection — only describing the shift.",
            ],
          },
        },
        {
          id: "cial-m-u1-tr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Transformations of graphs.",
          parts: [
            {
              label: "a",
              prompt: "Describe $y=f(x)+3$ from $y=f(x)$.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Describe $y=f(x-2)$ from $y=f(x)$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Describe $y=-f(x)$ from $y=f(x)$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "The point $(1,4)$ is on $y=f(x)$. Where does it go under $y=f(x-2)+1$?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Transformations",
                statement:
                  "$f(x)+a$: up $a$; $f(x-a)$: right $a$; $-f(x)$: reflect $x$-axis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Translation up 3.",
                working: "\\text{up }3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$x-2$ inside = right 2.",
                working: "\\text{right }2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct direction.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$-f(x)$ = reflect in $x$-axis.",
                working: "\\text{reflect }x",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct axis.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Under $f(x-2)$: $x$-coordinate increases by 2.",
                working: "x+2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Under $+1$: $y$-coordinate increases by 1.",
                working: "y+1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Point maps to $(3,5)$.",
                working: "(3,5)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Correct application.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) up 3 (b) right 2 (c) reflect x-axis (d) (3,5)",
          },
        },
        {
          id: "cial-m-u1-tr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The graph of $y = f(x)$ is translated to give $y = f(x) - 4$. Describe the transformation.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translation 4 units left" },
              { id: "b", text: "Translation 4 units down" },
              { id: "c", text: "Translation 4 units up" },
              { id: "d", text: "Reflection in the $x$-axis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vertical translation",
                statement:
                  "$f(x) + a$ shifts every point $a$ units vertically; negative $a$ shifts down.",
              },
            ],
            steps: [
              {
                reasoning: "$-4$ outside means shift down 4.",
                working: "\\text{down }4",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Translation 4 units down",
            commonErrors: ["Reading $f(x)-4$ as a horizontal shift."],
          },
        },
        {
          id: "cial-m-u1-tr-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "The point $(3, 5)$ lies on $y = f(x)$. What are its coordinates on $y = f(x + 2)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(5, 5)$" },
              { id: "b", text: "$(3, 7)$" },
              { id: "c", text: "$(1, 5)$" },
              { id: "d", text: "$(3, 3)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Horizontal shift",
                statement:
                  "$f(x + a)$ shifts left by $a$; $y$-coordinates unchanged.",
              },
            ],
            steps: [
              {
                reasoning: "$f(x + 2)$ shifts the graph left 2.",
                working: "\\text{left }2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New point: $(3 - 2, 5) = (1, 5)$.",
                working: "(1,5)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(1, 5)$",
            commonErrors: [
              "Adding 2 to the $x$-coordinate — $f(x+2)$ shifts left.",
            ],
          },
        },
        {
          id: "cial-m-u1-tr-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A point $(4, 7)$ lies on $y = f(x)$. Under the transformation $y = f(x) - 2$, what is the new $y$-coordinate of the image point?",
          response: {
            type: "numeric",
            parts: [{ label: "new y", answer: 5, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Vertical translation",
                statement:
                  "$f(x) - 2$ subtracts 2 from every $y$-coordinate.",
              },
            ],
            steps: [
              {
                reasoning: "New $y = 7 - 2 = 5$.",
                working: "7 - 2 = 5",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Adding 2 instead of subtracting."],
          },
        },
        {
          id: "cial-m-u1-tr-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe fully the transformation from $y = x^2$ to $y = (x + 3)^2 - 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Combined translations",
                statement:
                  "$f(x + a)$ shifts left $a$; $f(x) + b$ shifts vertically by $b$.",
              },
            ],
            steps: [
              {
                reasoning: "$x + 3$ inside means translation left 3.",
                working: "\\text{left }3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$-2$ outside means translation down 2.",
                working: "\\text{down }2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Vertex moves from $(0, 0)$ to $(-3, -2)$.",
                working: "(-3,-2)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Translate left 3, then down 2; vertex $(-3, -2)$.",
            commonErrors: ["Shifting right 3 — sign inside is reversed."],
          },
        },
        {
          id: "cial-m-u1-tr-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The graph of $y = f(x)$ is transformed to give $y = f(2 - x)$. Which description is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reflection in the $y$-axis only" },
              {
                id: "b",
                text: "Reflection in the $y$-axis, then translation 2 units right",
              },
              { id: "c", text: "Translation 2 units left" },
              {
                id: "d",
                text: "Reflection in the $x$-axis, then translation 2 units up",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Combined reflection and translation",
                statement:
                  "$f(2 - x) = f(-(x - 2))$: reflect in $y$-axis, then shift right 2.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Write $2 - x = -(x - 2)$: reflection in $y$-axis then shift right 2.",
                working: "f(-(x-2))",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both transformations identified.",
                working: "\\text{reflect+shift}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reflection in the $y$-axis, then translation 2 units right",
            commonErrors: [
              "Forgetting the reflection — treating $f(2-x)$ as a pure translation.",
            ],
          },
        },
        {
          id: "cial-m-u1-tr-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "The point $(2, 6)$ lies on $y = f(x)$. Find the coordinates of its image on $y = 2f(x - 1) + 3$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 3, tolerance: 0.01 },
              { label: "y", answer: 15, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Combined transformation",
                statement:
                  "$f(x - 1)$ shifts right 1; $2f(\\cdot) + 3$ scales then shifts vertically.",
              },
            ],
            steps: [
              {
                reasoning: "Inside $x - 1$ shifts $x$ by $+1$: new $x = 3$.",
                working: "x + 1 = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New $y = 2(6) + 3 = 15$.",
                working: "2 \\times 6 + 3 = 15",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Image is $(3, 15)$.",
                working: "(3,15)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(3, 15)$",
            commonErrors: [
              "Applying the $+3$ to the $x$-coordinate or the shift to $y$.",
            ],
          },
        },
        {
          id: "cial-m-u1-tr-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The point $(2, 3)$ lies on $y = f(x)$. Find the coordinates of its image on $y = -f(x - 4) + 1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Combined transformations",
                statement:
                  "Track the point through each transformation in turn.",
              },
            ],
            steps: [
              {
                reasoning: "$x - 4$ inside shifts right 4: $x = 6$.",
                working: "x + 4 = 6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The leading minus reflects in the $x$-axis: $y = -3$.",
                working: "y = -3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The $+1$ shifts up 1: $y = -2$.",
                working: "y = -2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Image is $(6, -2)$.",
                working: "(6,-2)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(6, -2)$",
            commonErrors: [
              "Neglecting the reflection — forgetting the leading minus.",
            ],
          },
        },
        {
          id: "cial-m-u1-tr-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which transformation takes $y = f(x)$ to $y = f(-x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reflection in the $x$-axis" },
              { id: "b", text: "Vertical stretch scale factor $-1$" },
              { id: "c", text: "Translation 1 unit left" },
              { id: "d", text: "Reflection in the $y$-axis" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reflection",
                statement:
                  "$f(-x)$ negates the input: reflection in the $y$-axis.",
              },
            ],
            steps: [
              {
                reasoning: "Input negated → reflect in $y$-axis.",
                working: "\\text{reflect }y",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Reflection in the $y$-axis",
            commonErrors: [
              "Confusing $f(-x)$ with $-f(x)$ — different axes.",
            ],
          },
        },
        {
          id: "cial-m-u1-tr-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "The point $(5, -2)$ lies on $y = f(x)$. Find the coordinates of its image on $y = f(x + 3) - 4$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 2, tolerance: 0.01 },
              { label: "y", answer: -6, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Combined translation",
                statement:
                  "$f(x + 3)$ shifts left 3; $-4$ shifts down 4.",
              },
            ],
            steps: [
              {
                reasoning: "$f(x + 3)$ shifts left 3: new $x = 5 - 3 = 2$.",
                working: "x - 3 = 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The $-4$ shifts down 4: new $y = -2 - 4 = -6$.",
                working: "y - 4 = -6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Image is $(2, -6)$.",
                working: "(2,-6)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both coordinates correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(2, -6)$",
            commonErrors: ["Shifting right instead of left for $f(x+3)$."],
          },
        },
        {
          id: "cial-m-u1-tr-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which statement describes the transformation from $y = f(x)$ to $y = f(-x) + 2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reflection in the $y$-axis only" },
              {
                id: "b",
                text: "Reflection in the $x$-axis followed by translation 2 units right",
              },
              { id: "c", text: "Translation 2 units up only" },
              {
                id: "d",
                text: "Reflection in the $y$-axis followed by translation 2 units up",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Combined transformations",
                statement:
                  "$f(-x)$ reflects in $y$-axis; $+2$ translates up 2.",
              },
            ],
            steps: [
              {
                reasoning: "Inside $-x$ → reflection in $y$-axis.",
                working: "\\text{reflect }y",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Outside $+2$ → translation up 2.",
                working: "\\text{up }2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reflection in the $y$-axis followed by translation 2 units up",
            commonErrors: [
              "Describing $f(-x)$ as a reflection in the $x$-axis.",
            ],
          },
        },
        {
          id: "cial-m-u1-tr-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Transformations of $y = f(x)$.",
          parts: [
            {
              label: "a",
              prompt: "Describe $y = f(x - 1)$ from $y = f(x)$.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Describe $y = -f(x)$ from $y = f(x)$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "The point $(3, 4)$ is on $y = f(x)$. Where does it go under $y = f(x - 1) - 2$?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Transformations",
                statement:
                  "$f(x-a)$: right $a$; $-f(x)$: reflect $x$-axis; track points.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Translation right 1.",
                working: "\\text{right }1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$-f(x)$ negates output.",
                working: "-f(x)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Reflection in the $x$-axis.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$x - 1$ shifts right 1: new $x = 4$.",
                working: "x + 1 = 4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$-2$ shifts down 2: new $y = 4 - 2 = 2$.",
                working: "y - 2 = 2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Image is $(4, 2)$.",
                working: "(4,2)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) right 1 (b) reflect x-axis (c) (4,2)",
            commonErrors: ["Shifting left for $f(x-1)$."],
          },
        },
        {
          id: "cial-m-u1-tr-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Transformations of graphs — mixed practice.",
          parts: [
            {
              label: "a",
              prompt: "Describe $y = f(x) - 5$ from $y = f(x)$.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Describe $y = f(x + 4)$ from $y = f(x)$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Describe $y = f(-x)$ from $y = f(x)$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "The point $(2, 5)$ is on $y = f(x)$. Find its image on $y = f(x + 4) + 3$.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Transformations",
                statement:
                  "$f(x+a)$: left $a$; $+c$: vertical shift; $f(-x)$: reflect $y$-axis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Translation down 5.",
                working: "\\text{down }5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$x + 4$ inside shifts left 4.",
                working: "\\text{left }4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct direction stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$f(-x)$ negates input.",
                working: "f(-x)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Reflection in the $y$-axis.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$f(x + 4)$ shifts left 4: new $x = 2 - 4 = -2$.",
                working: "x - 4 = -2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "The $+3$ shifts up 3: new $y = 5 + 3 = 8$.",
                working: "y + 3 = 8",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Image is $(-2, 8)$.",
                working: "(-2,8)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Both transformations applied in correct order.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct final point.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) down 5 (b) left 4 (c) reflect y-axis (d) (-2,8)",
            commonErrors: ["Shifting right for $f(x+4)$."],
          },
        },
      ],
    },
    {
      id: "cial-m-u1-stretches",
      title: "Stretches and combined transformations",
      skill:
        "Apply vertical and horizontal stretches and combine transformations.",
      lesson: {
        sections: [
          {
            heading: "Vertical stretch",
            body: "$y = af(x)$ multiplies every $y$-value by $a$. For $a > 1$ the graph stretches vertically; for $0 < a < 1$ it compresses. $y = 2f(x)$ doubles heights; $y = \\frac{1}{2}f(x)$ halves them.",
          },
          {
            heading: "Horizontal stretch",
            body: "$y = f(ax)$ compresses horizontally by factor $\\frac{1}{a}$ when $a > 1$. $y = f(2x)$ halves all $x$-coordinates toward the $y$-axis. $y = f\\left(\\frac{x}{2}\\right)$ stretches horizontally by factor 2.",
          },
          {
            heading: "Order of transformations",
            body: "When several transformations apply, work through them systematically: often translations last. Track one or two key points (e.g. vertex, intercepts) through each step to verify.",
          },
        ],
        keyFormulas: [
          {
            name: "Stretches",
            statement:
              "$af(x)$: vertical scale $a$; $f(ax)$: horizontal scale $\\frac{1}{a}$.",
          },
        ],
        workedExample: {
          problem: "Describe the transformation from $y = x^2$ to $y = 2x^2$.",
          solution:
            "Vertical stretch scale factor 2 — every $y$-coordinate doubles.",
        },
      },
      questions: [
        {
          id: "cial-m-u1-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What transformation takes $y = f(x)$ to $y = 3f(x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vertical stretch scale factor 3" },
              { id: "b", text: "Horizontal stretch scale factor 3" },
              { id: "c", text: "Reflection" },
              { id: "d", text: "Translation up 3" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Vertical stretch",
                statement: "$af(x)$ scales $y$-values by $a$.",
              },
            ],
            steps: [
              {
                reasoning: "$3f(x)$ triples outputs = vertical stretch 3.",
                working: "\\times 3",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Vertical stretch scale factor 3",
            commonErrors: ["Confusing with $f(3x)$ which is horizontal."],
          },
        },
        {
          id: "cial-m-u1-st-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The point $(4, 6)$ lies on $y = f(x)$. What are its coordinates on $y = f(2x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2, 6)$" },
              { id: "b", text: "$(4, 12)$" },
              { id: "c", text: "$(8, 6)$" },
              { id: "d", text: "$(2, 3)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Horizontal stretch",
                statement: "$f(ax)$ divides $x$-coordinates by $a$.",
              },
            ],
            steps: [
              {
                reasoning: "$f(2x)$: new $x$-value is old $x \\div 2 = 2$.",
                working: "4 \\div 2 = 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$y$ unchanged: $(2, 6)$.",
                working: "(2,6)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(2, 6)$",
            commonErrors: [
              "Doubling $x$ instead of halving — $f(2x)$ compresses.",
            ],
          },
        },
        {
          id: "cial-m-u1-st-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the transformation from $y = x^2$ to $y = (2x)^2 - 1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Combined transformations",
                statement:
                  "$f(2x)$ compresses horizontally by $\\frac{1}{2}$; $-1$ shifts down.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$(2x)^2 = 4x^2$: horizontal compression factor $\\frac{1}{2}$ (equivalently vertical stretch 4).",
                working: "4x^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$-1$ translates down 1.",
                working: "-1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vertex moves from $(0,0)$ to $(0,-1)$.",
                working: "(0,-1)",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Both transformations identified.",
                working: "\\text{compress+shift}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Horizontal compression by $\\frac{1}{2}$, then translation down 1; vertex $(0,-1)$.",
            commonErrors: [
              "Missing the $-1$ translation or misidentifying the stretch.",
            ],
          },
        },
        {
          id: "cial-m-u1-st-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Stretches and combined transformations.",
          parts: [
            {
              label: "a",
              prompt: "Describe $y=3f(x)$ from $y=f(x)$.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Describe $y=f(2x)$ from $y=f(x)$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Point $(4,6)$ on $y=f(x)$: where on $y=f(2x)$?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Describe $y=(2x)^2-1$ from $y=x^2$.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Stretches",
                statement: "$af(x)$ vertical; $f(ax)$ horizontal scale $1/a$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Vertical stretch factor 3.",
                working: "\\times 3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$f(2x)$ compresses horizontally by $\\frac{1}{2}$.",
                working: "\\frac{1}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct factor.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "New $x = 4 \\div 2 = 2$, $y = 6$.",
                working: "(2,6)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct point.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "$(2x)^2 = 4x^2$: horizontal compression $\\frac{1}{2}$ or vertical stretch 4.",
                working: "4x^2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$-1$ shifts down 1.",
                working: "-1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Both identified.",
                working: "\\text{two transforms}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Vertex $(0,-1)$ stated.",
                working: "(0,-1)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) v-stretch 3 (b) h-compress 1/2 (c) (2,6) (d) compress+down 1",
          },
        },
        {
          id: "cial-m-u1-st-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What transformation takes $y = f(x)$ to $y = \\frac{1}{2}f(x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translation down $\\frac{1}{2}$" },
              { id: "b", text: "Horizontal stretch scale factor 2" },
              {
                id: "c",
                text: "Vertical compression scale factor $\\frac{1}{2}$",
              },
              { id: "d", text: "Vertical stretch scale factor 2" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Vertical stretch",
                statement:
                  "$af(x)$ scales every $y$-value by $a$; $a < 1$ compresses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{1}{2}f(x)$ halves every $y$-value — vertical compression $\\frac{1}{2}$.",
                working: "\\times \\frac{1}{2}",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Vertical compression scale factor $\\frac{1}{2}$",
            commonErrors: ["Calling it a stretch — factor less than 1 compresses."],
          },
        },
        {
          id: "cial-m-u1-st-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "The point $(6, 4)$ lies on $y = f(x)$. What are its coordinates on $y = f\\left(\\frac{x}{2}\\right)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(12, 8)$" },
              { id: "b", text: "$(6, 8)$" },
              { id: "c", text: "$(3, 4)$" },
              { id: "d", text: "$(12, 4)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Horizontal stretch",
                statement:
                  "$f\\left(\\frac{x}{a}\\right)$ stretches horizontally by factor $a$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$f\\left(\\frac{x}{2}\\right)$ doubles every $x$-coordinate: $6 \\times 2 = 12$.",
                working: "6 \\times 2 = 12",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$y$ unchanged: $(12, 4)$.",
                working: "(12,4)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(12, 4)$",
            commonErrors: [
              "Halving $x$ instead of doubling — $f(x/2)$ stretches, $f(2x)$ compresses.",
            ],
          },
        },
        {
          id: "cial-m-u1-st-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The point $(2, 10)$ lies on $y = f(x)$. What is the $y$-coordinate of the corresponding point on $y = 3f(x)$?",
          response: {
            type: "numeric",
            parts: [{ label: "new y", answer: 30, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Vertical stretch",
                statement: "$3f(x)$ triples every $y$-value.",
              },
            ],
            steps: [
              {
                reasoning: "New $y = 3 \\times 10 = 30$.",
                working: "3 \\times 10 = 30",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$30$",
            commonErrors: ["Adding 3 instead of multiplying by 3."],
          },
        },
        {
          id: "cial-m-u1-st-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe fully the transformation from $y = x^2$ to $y = 3x^2 - 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Combined transformations",
                statement:
                  "$3x^2$ is a vertical stretch; $-2$ is a vertical translation.",
              },
            ],
            steps: [
              {
                reasoning: "The factor 3 multiplies $x^2$: vertical stretch scale factor 3.",
                working: "\\times 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The $-2$ translates down 2.",
                working: "\\text{down }2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Vertex moves from $(0, 0)$ to $(0, -2)$.",
                working: "(0,-2)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Vertical stretch scale factor 3, then translation down 2; vertex $(0, -2)$.",
            commonErrors: [
              "Missing the $-2$ translation or calling the stretch horizontal.",
            ],
          },
        },
        {
          id: "cial-m-u1-st-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The graph of $y = x^2$ is transformed to give $y = \\left(\\frac{x}{3}\\right)^2$. Which description is correct?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Translation 3 units left",
              },
              { id: "b", text: "Vertical stretch scale factor 9 only" },
              { id: "c", text: "Horizontal stretch scale factor 3" },
              { id: "d", text: "Horizontal compression scale factor $\\frac{1}{3}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Horizontal stretch",
                statement:
                  "$\\left(\\frac{x}{a}\\right)^2$ stretches horizontally by factor $a$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{x}{3}$ inside means horizontal stretch factor 3 (equivalently vertical stretch 9).",
                working: "\\text{h-stretch }3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Primary description: horizontal stretch 3.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Horizontal stretch scale factor 3",
            commonErrors: [
              "Choosing compression — $x/3$ stretches, $3x$ compresses.",
            ],
          },
        },
        {
          id: "cial-m-u1-st-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "The point $(8, 2)$ lies on $y = f(x)$. Find the coordinates of its image on $y = f\\left(\\frac{x}{4}\\right)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 32, tolerance: 0.01 },
              { label: "y", answer: 2, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Horizontal stretch",
                statement:
                  "$f\\left(\\frac{x}{a}\\right)$ multiplies $x$-coordinates by $a$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$f\\left(\\frac{x}{4}\\right)$ stretches horizontally by factor 4.",
                working: "\\times 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New $x = 8 \\times 4 = 32$; $y$ unchanged at 2.",
                working: "(32,2)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Image is $(32, 2)$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(32, 2)$",
            commonErrors: [
              "Dividing $x$ by 4 instead of multiplying — direction reversed.",
            ],
          },
        },
        {
          id: "cial-m-u1-st-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe fully the transformation from $y = x^2$ to $y = (2x)^2 + 3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Combined transformations",
                statement:
                  "$(2x)^2 = 4x^2$: horizontal compression $\\frac{1}{2}$ (equivalently vertical stretch 4); $+3$ shifts up.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$(2x)^2 = 4x^2$: horizontal compression by $\\frac{1}{2}$ or vertical stretch 4.",
                working: "4x^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The $+3$ translates up 3.",
                working: "\\text{up }3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vertex moves from $(0, 0)$ to $(0, 3)$.",
                working: "(0,3)",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Both transformations identified.",
                working: "\\text{stretch+shift}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Horizontal compression by $\\frac{1}{2}$ (or vertical stretch 4), then translation up 3; vertex $(0, 3)$.",
            commonErrors: [
              "Missing the $+3$ translation or misidentifying the stretch direction.",
            ],
          },
        },
        {
          id: "cial-m-u1-st-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a horizontal transformation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y = -f(x)$" },
              { id: "b", text: "$y = f(x) + 3$" },
              { id: "c", text: "$y = 3f(x)$" },
              { id: "d", text: "$y = f(3x)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Horizontal vs vertical",
                statement:
                  "The argument of $f$ controls horizontal change; the multiplier outside controls vertical.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$f(3x)$ changes the input — horizontal compression $\\frac{1}{3}$.",
                working: "f(3x)",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$y = f(3x)$",
            commonErrors: ["Choosing $3f(x)$ — that is vertical."],
          },
        },
        {
          id: "cial-m-u1-st-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "The point $(9, 6)$ lies on $y = f(x)$. Find the coordinates of its image on $y = 2f(3x)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 3, tolerance: 0.01 },
              { label: "y", answer: 12, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Combined stretches",
                statement:
                  "$f(3x)$ divides $x$ by 3; $2f(\\cdot)$ doubles $y$.",
              },
            ],
            steps: [
              {
                reasoning: "$f(3x)$ compresses horizontally by $\\frac{1}{3}$: $x = 9 \\div 3 = 3$.",
                working: "9 \\div 3 = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The factor 2 doubles $y$: $y = 2 \\times 6 = 12$.",
                working: "2 \\times 6 = 12",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Image is $(3, 12)$.",
                working: "(3,12)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both coordinates correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(3, 12)$",
            commonErrors: [
              "Multiplying $x$ by 3 instead of dividing.",
            ],
          },
        },
        {
          id: "cial-m-u1-st-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How does the graph of $y = f(2x) + 1$ differ from $y = 2f(x) + 1$?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They are identical graphs",
              },
              {
                id: "b",
                text: "Both compress horizontally by $\\frac{1}{2}$",
              },
              {
                id: "c",
                text: "$f(2x)$ compresses horizontally by $\\frac{1}{2}$; $2f(x)$ stretches vertically by 2",
              },
              {
                id: "d",
                text: "Both stretch vertically by 2",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Horizontal vs vertical",
                statement:
                  "Argument multiplier → horizontal; outside multiplier → vertical.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$f(2x)$ is horizontal compression $\\frac{1}{2}$; $2f(x)$ is vertical stretch 2.",
                working: "\\text{h vs v}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The $+1$ affects both identically.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$f(2x)$ compresses horizontally by $\\frac{1}{2}$; $2f(x)$ stretches vertically by 2",
            commonErrors: ["Treating the 2s as doing the same thing."],
          },
        },
        {
          id: "cial-m-u1-st-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Stretches and combined transformations.",
          parts: [
            {
              label: "a",
              prompt: "Describe $y = 4f(x)$ from $y = f(x)$.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "The point $(6, 5)$ is on $y = f(x)$. Where does it go on $y = f\\left(\\frac{x}{2}\\right)$?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Describe $y = f(2x) - 3$ from $y = f(x)$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Stretches",
                statement:
                  "$af(x)$ vertical scale $a$; $f(ax)$ horizontal scale $\\frac{1}{a}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Vertical stretch scale factor 4.",
                working: "\\times 4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$f\\left(\\frac{x}{2}\\right)$ doubles $x$: new $x = 12$, $y = 5$.",
                working: "(12,5)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Image is $(12, 5)$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$f(2x)$ compresses horizontally by $\\frac{1}{2}$.",
                working: "\\frac{1}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "The $-3$ translates down 3.",
                working: "\\text{down }3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Both transformations stated correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) v-stretch 4 (b) (12,5) (c) h-compress 1/2 then down 3",
            commonErrors: [
              "Describing $f(2x)$ as a stretch instead of compression.",
            ],
          },
        },
        {
          id: "cial-m-u1-st-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Stretches and combined transformations — mixed practice.",
          parts: [
            {
              label: "a",
              prompt: "Describe $y = 5f(x)$ from $y = f(x)$.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Describe $y = f\\left(\\frac{x}{3}\\right)$ from $y = f(x)$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "The point $(9, 4)$ is on $y = f(x)$. Find its image on $y = 3f\\left(\\frac{x}{3}\\right)$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Describe $y = (3x)^2 - 2$ from $y = x^2$.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Stretches",
                statement:
                  "$af(x)$ vertical; $f(ax)$ horizontal scale $\\frac{1}{a}$; track points.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Vertical stretch scale factor 5.",
                working: "\\times 5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$f\\left(\\frac{x}{3}\\right)$ stretches horizontally by factor 3.",
                working: "\\times 3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct factor stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$f\\left(\\frac{x}{3}\\right)$ triples $x$: new $x = 9 \\times 3 = 27$.",
                working: "x \\times 3 = 27",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "The factor 3 triples $y$: new $y = 3 \\times 4 = 12$.",
                working: "y \\times 3 = 12",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Image is $(27, 12)$.",
                working: "(27,12)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "$(3x)^2 = 9x^2$: horizontal compression $\\frac{1}{3}$ (or vertical stretch 9).",
                working: "9x^2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "The $-2$ translates down 2.",
                working: "\\text{down }2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Vertex moves to $(0, -2)$.",
                working: "(0,-2)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Both transformations identified correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) v-stretch 5 (b) h-stretch 3 (c) (27,12) (d) compress 1/3 + down 2",
            commonErrors: [
              "Dividing instead of multiplying for $f(x/3)$.",
            ],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u1-curve-sketching-notes",
      title: "Curve sketching and transformations — revision notes",
      summary:
        "Transformations of $y=f(x)$: translations, stretches, reflections and their combined effect.",
      sections: [
        {
          heading: "Single transformations",
          body: "$y=f(x)+a$: translate $a$ units up ($a<0$: down). $y=f(x+a)$: translate $a$ units left ($a>0$) — the sign inside is opposite to the shift. $y=af(x)$: vertical stretch scale factor $a$. $y=f(ax)$: horizontal stretch scale factor $\\frac1a$. $y=-f(x)$: reflect in $x$-axis; $y=f(-x)$: reflect in $y$-axis.",
        },
        {
          heading: "Order of transformations",
          body: "Apply inside-out: horizontal transformations (inside $f$) before vertical (outside). For combined transforms, sketch key points — intercepts, vertices, asymptotes — then transform each point.",
        },
        {
          heading: "Worked pattern",
          body: "For $y=(x-2)^2+1$: inside $x-2$ shifts right 2; outside $+1$ shifts up 1. Vertex moves from $(0,0)$ to $(2,1)$.",
        },
        {
          heading: "Exam checklist",
          body: "Check whether the shift is left/right vs up/down carefully — $f(x-a)$ moves right. Label transformed intercepts and turning points on sketches.",
        },
      ],
    },
  ],
};
