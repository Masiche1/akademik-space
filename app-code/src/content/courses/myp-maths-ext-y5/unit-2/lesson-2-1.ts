import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mypme5-u2-lesson-2-1",
  code: "2-1",
  title: "Functions and Transformations",
  goal: "I CAN describe and apply function transformations, sketch transformed graphs, and determine equations from graphs.",
  standards: [
    "MYP Maths: Functions",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Parent function", definition: "The basic function before transformation, e.g. $y=x^2$, $y=\\sqrt{x}$, $y=\\frac{1}{x}$." },
    { term: "Translation", definition: "Horizontal: $y=f(x-h)$; vertical: $y=f(x)+k$." },
    { term: "Reflection", definition: "$y=-f(x)$ in $x$-axis; $y=f(-x)$ in $y$-axis." },
    { term: "Stretched graph", definition: "$y=af(x)$ vertical stretch $a$; $y=f(bx)$ horizontal stretch $\\frac{1}{b}$." },
    { term: "Asymptote", definition: "A line the graph approaches but never touches, e.g. axes for $y=\\frac{1}{x}$." },
  ],
  concepts: [
    {
      id: "mypme5-u2-transforms",
      title: "Function transformations",
      skill: "Apply translations, reflections, and stretches to parent functions and determine resulting equations.",
      lesson: {
        sections: [
          {
            heading: "Parent functions",
            body: "Key parent functions: linear $y=x$, quadratic $y=x^2$, cubic $y=x^3$, reciprocal $y=\\frac{1}{x}$, square root $y=\\sqrt{x}$, exponential $y=a^x$. Know their shapes, intercepts, and asymptotes.",
          },
          {
            heading: "Transformation rules",
            body: "$y=f(x-h)+k$: translate $(h,k)$. $y=-f(x)$: reflect $x$-axis. $y=f(-x)$: reflect $y$-axis. $y=af(x)$: vertical stretch $a$. $y=f(bx)$: horizontal stretch $\\frac{1}{b}$. Combine systematically.",
          },
          {
            heading: "Inverse functions geometrically",
            body: "The graph of $y=f^{-1}(x)$ is the reflection of $y=f(x)$ in the line $y=x$. Swap $x$ and $y$ coordinates of key points to sketch the inverse.",
          },
        ],
        keyFormulas: [
          { name: "General transform", statement: "$y=a\\,f(b(x-h))+k$" },
          { name: "Inverse", statement: "Reflect in $y=x$; swap coordinates" },
          { name: "Asymptotes", statement: "Reciprocal: both axes; exponential: horizontal" },
        ],
        workedExample: {
          problem: "Describe transformations from $y=x^2$ to $y=-(x-2)^2+3$.",
          solution: "Translate 2 right, reflect in $x$-axis, translate 3 up. Vertex at $(2,3)$, opens downward.",
        },
      },
      questions: [
        {
          id: "mypme5-u2-trans-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The graph of $y=\\frac{1}{x}$ is translated 3 units right and 2 units up. What is the new equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=\\frac{1}{x-3}+2$" },
              { id: "b", text: "$y=\\frac{1}{x-3}-2$" },
              { id: "c", text: "$y=\\frac{1}{x+3}+2$" },
              { id: "d", text: "$y=\\frac{1}{x+3}-2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Translation", statement: "Right 3 → $x-3$; up 2 → $+2$." },
            ],
            steps: [
              { reasoning: "$y=\\frac{1}{x-3}+2$.", working: "y=\\frac{1}{x-3}+2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $y=\\frac{1}{x-3}+2$",
            commonErrors: ["Using $x+3$ for right translation."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u2-trans-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The point $(4,-1)$ is on $y=f(x)$. Where does it map on $y=2f(-x)+3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(4,1)$" },
              { id: "b", text: "$(4,-1)$" },
              { id: "c", text: "$(-4,-1)$" },
              { id: "d", text: "$(-4,1)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Point transform", statement: "$f(-x)$: $x\\to-x$; $2f$: $y\\to2y$; $+3$: $y\\to2y+3$." },
            ],
            steps: [
              { reasoning: "$(4,-1)\\to(-4,-2)\\to(-4,-2+3)=(-4,1)$.", working: "(-4,1)", marks: 1, markCode: "M" },
              { reasoning: "State the image.", working: "(-4,1)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(-4,1)$",
            commonErrors: ["Applying $+3$ before $2f$ — order matters."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-trans-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Sketch/describe the graph of $y=\\sqrt{-x}+1$ given the parent $y=\\sqrt{x}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reflection of $y=\\sqrt{x}$ in $y$-axis, then translation 1 up; domain $x\\le0$, range $y\\ge1$" },
              { id: "b", text: "Reflection in $x$-axis and $y$-axis; domain all real" },
              { id: "c", text: "Translation 1 right, reflection in $x$-axis; domain $x\\ge0$" },
              { id: "d", text: "Same as parent but shifted 1 left" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Transform analysis", statement: "$\\sqrt{-x}$ reflects in $y$-axis; $+1$ shifts up." },
            ],
            steps: [
              { reasoning: "$\\sqrt{-x}$: reflect parent in $y$-axis → domain becomes $x\\le0$.", working: "\\text{reflect }y\\text{-axis}", marks: 1, markCode: "M" },
              { reasoning: "$+1$: shift up 1 → range $y\\ge1$.", working: "\\text{up 1}", marks: 1, markCode: "M" },
              { reasoning: "State domain and range.", working: "x\\le0,y\\ge1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflect in $y$-axis, up 1; domain $x\\le0$, range $y\\ge1$",
            commonErrors: ["Reflecting in wrong axis — $-x$ inside affects $x$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-trans-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The graph of $y=f(x)$ passes through $(-2,3)$, $(0,-1)$, $(3,4)$, $(5,4)$.",
          parts: [
            { label: "a", prompt: "Find images under $y=f(x)+2$.", marks: 1 },
            { label: "b", prompt: "Find images under $y=f(x-1)$.", marks: 1 },
            { label: "c", prompt: "Find images under $y=-f(x)$.", marks: 1 },
            { label: "d", prompt: "Find images under $y=\\frac{1}{2}f(x)+1$.", marks: 2 },
            { label: "e", prompt: "Write the equation of the inverse function's graph in terms of $f$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Point mapping", statement: "Apply coordinate transformations systematically." },
            ],
            steps: [
              { part: "a", reasoning: "$+2$: $(-2,5),(0,1),(3,6),(5,6)$.", working: "(-2,5),(0,1),(3,6),(5,6)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$x-1$: $(-1,3),(1,-1),(4,4),(6,4)$.", working: "(-1,3),(1,-1),(4,4),(6,4)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$-f$: $(-2,-3),(0,1),(3,-4),(5,-4)$.", working: "(-2,-3),(0,1),(3,-4),(5,-4)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\frac{1}{2}f(x)+1$: $x$ same; $y=\\frac{y}{2}+1$: $(-2,2.5),(0,0.5),(3,3),(5,3)$.", working: "(-2,2.5),(0,0.5),(3,3),(5,3)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State all images.", working: "\\text{images}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Inverse: swap coordinates; equation $x=f(y)$ or $y=f^{-1}(x)$ where $f^{-1}$ undoes $f$.", working: "x=f(y)", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Reflect in $y=x$.", working: "\\text{reflect }y=x", marks: 1, markCode: "M" },
              { part: "e", reasoning: "State the relationship.", working: "y=f^{-1}(x)\\Leftrightarrow x=f(y)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $y+2$ (b) $x+1$ (c) $y\\to-y$ (d) $(-2,2.5),(0,0.5),(3,3),(5,3)$ (e) $x=f(y)$",
            commonErrors: ["In (e), writing $y=f(x)$ instead of swapping."],
            examinerNote: "A1 for (a)-(c); M1 A1 for (d); M1 M1 A1 for (e).",
          },
        },
        {
          id: "mypme5-u2-trans-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The graph of $y=x^2$ is translated 3 units to the right. What is the new equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=x^2-3$" },
              { id: "b", text: "$y=x^2+3$" },
              { id: "c", text: "$y=(x-3)^2$" },
              { id: "d", text: "$y=(x+3)^2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Horizontal translation", statement: "Right $h$ units: replace $x$ with $(x-h)$." },
            ],
            steps: [
              { reasoning: "Right 3 → $y=(x-3)^2$.", working: "y=(x-3)^2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $y=(x-3)^2$",
            commonErrors: ["Writing $(x+3)^2$ for a right shift."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u2-trans-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=x^2$ and $g(x)=f(x)+4$, find $g(2)$.",
          response: { type: "numeric", parts: [{ label: "$g(2)$", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Vertical translation", statement: "$g(x)=f(x)+4$ shifts the graph up 4 units." },
            ],
            steps: [
              { reasoning: "$g(2)=f(2)+4=4+4=8$.", working: "8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "8",
            commonErrors: ["Computing $f(2+4)=36$."],
          },
        },
        {
          id: "mypme5-u2-trans-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the transformations mapping $y=x^2$ to $y=2(x+1)^2-3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reflect in $x$-axis, stretch SF 2, translate 1 left and 3 down" },
              { id: "b", text: "Stretch SF 2, translate 1 left, translate 3 down" },
              { id: "c", text: "Translate 1 left, stretch SF 2 parallel to $y$-axis, translate 3 down" },
              { id: "d", text: "Translate 1 right, stretch SF 2, translate 3 up" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Transformation order", statement: "$y=a(x-h)^2+k$: shift $h$ (left if $h<0$), stretch $|a|$, shift $k$ vertically." },
            ],
            steps: [
              { reasoning: "$(x+1)^2$ → 1 left; factor 2 → stretch SF 2 in $y$; $-3$ → 3 down.", working: "\\text{left 1, stretch 2, down 3}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Left 1, stretch SF 2, down 3",
            commonErrors: ["Describing a horizontal stretch instead of vertical."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-trans-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x)=\\sqrt{x}$ and $g(x)=f(2x)$, find $g(4)$.",
          response: { type: "numeric", parts: [{ label: "$g(4)$", answer: 2.828, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Horizontal stretch", statement: "$g(x)=f(2x)$ is a horizontal stretch SF $\\frac12$; $g(4)=f(8)=\\sqrt8=2\\sqrt2$." },
            ],
            steps: [
              { reasoning: "$g(4)=f(2\\times4)=f(8)=\\sqrt8=2\\sqrt2\\approx2.828$.", working: "2.828", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "2\\sqrt2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\sqrt2\\approx2.828$",
            commonErrors: ["Computing $f(4)/2=1$ instead of $f(8)$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-trans-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "The graph of $y=x^2$ is reflected in the $x$-axis and then translated 2 units up. What is the equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=-x^2+2$" },
              { id: "b", text: "$y=-x^2-2$" },
              { id: "c", text: "$y=-(x+2)^2$" },
              { id: "d", text: "$y=(-x)^2+2=x^2+2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflection", statement: "Reflection in $x$-axis: $y\\to-y$; then translate up 2: add 2." },
            ],
            steps: [
              { reasoning: "Reflect: $y=-x^2$; translate up 2: $y=-x^2+2$.", working: "y=-x^2+2", marks: 1, markCode: "M" },
              { reasoning: "Note $(-x)^2=x^2$, so $y=(-x)^2+2$ would not be a reflection.", working: "(-x)^2=x^2", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $y=-x^2+2$",
            commonErrors: ["Writing $y=(-x)^2+2$, which equals $x^2+2$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-trans-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=3x$, the graph is stretched with scale factor 2 parallel to the $y$-axis. What is $g(5)$ for the new function $g$?",
          response: { type: "numeric", parts: [{ label: "$g(5)$", answer: 30 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Vertical stretch", statement: "Stretch SF 2 in $y$: $g(x)=2f(x)=6x$; $g(5)=30$." },
            ],
            steps: [
              { reasoning: "$g(x)=6x$ → $g(5)=30$.", working: "30", marks: 1, markCode: "B" },
            ],
            finalAnswer: "30",
            commonErrors: ["Computing $f(2\\times5)=f(10)=30$ coincidentally same here; method is $2f(x)$."],
          },
        },
        {
          id: "mypme5-u2-trans-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x)=x^2-1$ and $g(x)=f(x-3)$, find $g(4)$.",
          response: { type: "numeric", parts: [{ label: "$g(4)$", answer: 0 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Horizontal translation", statement: "$g(x)=f(x-3)$ shifts right 3; $g(4)=f(1)=1^2-1=0$." },
            ],
            steps: [
              { reasoning: "$g(4)=f(4-3)=f(1)=0$.", working: "0", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "g(4)=0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0",
            commonErrors: ["Computing $f(4)-3=15-3=12$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-trans-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A point $(2,3)$ on the graph of $y=f(x)$ is translated 1 unit left and 4 units up, then reflected in the $x$-axis. Find the coordinates of the final image.",
          response: { type: "numeric", parts: [
            { label: "$x$-coordinate", answer: 1 },
            { label: "$y$-coordinate", answer: -7 },
          ], unordered: true },
          markscheme: {
            principles: [
              { kind: "property", name: "Transformation sequence", statement: "Translate: $(2-1,\\,3+4)=(1,7)$; reflect in $x$-axis: $(1,-7)$." },
            ],
            steps: [
              { reasoning: "After translation: $(2-1,3+4)=(1,7)$.", working: "(1,7)", marks: 1, markCode: "M" },
              { reasoning: "After reflection in $x$-axis: $(1,-7)$.", working: "(1,-7)", marks: 1, markCode: "M" },
              { reasoning: "State both coordinates.", working: "x=1,y=-7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(1,-7)$",
            commonErrors: ["Reflecting before translating, or negating the $x$-coordinate."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-trans-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "The graph of $y=x^2$ is transformed to give $y=-2(x-3)^2+4$.",
          parts: [
            { label: "a", prompt: "State the parent function.", marks: 1 },
            { label: "b", prompt: "Describe the horizontal translation.", marks: 1 },
            { label: "c", prompt: "Describe the vertical stretch and reflection.", marks: 2 },
            { label: "d", prompt: "Describe the vertical translation.", marks: 1 },
            { label: "e", prompt: "State the coordinates of the vertex of the transformed graph.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Vertex form", statement: "$y=a(x-h)^2+k$ has vertex $(h,k)$; $a<0$ reflects, $|a|$ stretches." },
            ],
            steps: [
              { part: "a", reasoning: "Parent function $y=x^2$.", working: "y=x^2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "$(x-3)^2$ → translate 3 units right.", working: "3\\text{ right}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Factor $-2$: reflection in $x$-axis plus vertical stretch SF 2.", working: "\\text{reflect, stretch }2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State both features.", working: "a=-2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$+4$ → translate 4 units up.", working: "4\\text{ up}", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Vertex at $(h,k)=(3,4)$.", working: "(3,4)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $y=x^2$ (b) 3 right (c) reflect + stretch SF 2 (d) 4 up (e) $(3,4)$",
            commonErrors: ["Saying 'stretch SF $-2$' instead of describing reflection and stretch separately."],
            examinerNote: "B1 for (a)-(b), M1 A1 for (c), B1 for (d), A1 for (e).",
          },
        },
        {
          id: "mypme5-u2-trans-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which single transformation maps $y=x$ to $y=-x+5$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translate 5 units up only" },
              { id: "b", text: "Reflect in the line $y=x$" },
              { id: "c", text: "Reflect in the $y$-axis, then translate 5 units up" },
              { id: "d", text: "Reflect in the $x$-axis, then translate 5 units up" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Line transformations", statement: "$y=-x$ is reflection in $x$-axis; $+5$ translates up 5." },
            ],
            steps: [
              { reasoning: "$y=-x+5$: the negative slope comes from $x$-axis reflection, the $+5$ from vertical shift.", working: "-x+5", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Reflect in $x$-axis, translate 5 up",
            commonErrors: ["Choosing reflection in $y$-axis, which would give $y=-x$ only if combined differently."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-trans-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The graph of $y=f(x)$ has a maximum point at $(2,5)$. The graph is transformed to $y=2f(x-1)+3$. Find the coordinates of the new maximum point.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3,8)$" },
              { id: "b", text: "$(3,13)$" },
              { id: "c", text: "$(1,13)$" },
              { id: "d", text: "$(3,10)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Transforming points", statement: "$(x-1)$ shifts right 1; $2f+3$ maps $y\\to2y+3$: new point $(3,\\,2(5)+3)=(3,13)$." },
            ],
            steps: [
              { reasoning: "New $x=2+1=3$; new $y=2(5)+3=13$.", working: "(3,13)", marks: 1, markCode: "M" },
              { reasoning: "The maximum stays a maximum since the stretch factor is positive.", working: "\\text{still max}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $(3,13)$",
            commonErrors: ["Applying the stretch to the $x$-coordinate or forgetting $+3$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-trans-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "The graph of $y=f(x)=x^2$ is transformed by: translating 2 units left, reflecting in the $x$-axis, then stretching with scale factor 3 parallel to the $y$-axis.",
          parts: [
            { label: "a", prompt: "Write down the equation of the transformed graph $g$.", marks: 2 },
            { label: "b", prompt: "Find $g(1)$.", marks: 1 },
            { label: "c", prompt: "State the range of $g$.", marks: 1 },
            { label: "d", prompt: "Describe the inverse sequence of transformations that would recover $f$ from $g$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Transformation composition", statement: "Left 2: $(x+2)^2$; reflect: $-(x+2)^2$; stretch SF 3: $-3(x+2)^2$." },
            ],
            steps: [
              { part: "a", reasoning: "Translate left 2: $y=(x+2)^2$; reflect: $y=-(x+2)^2$; stretch SF 3: $y=-3(x+2)^2$.", working: "g(x)=-3(x+2)^2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the equation.", working: "g(x)=-3(x+2)^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$g(1)=-3(3)^2=-27$.", working: "-27", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Since $-3(x+2)^2\\le0$ for all $x$, range is $y\\le0$.", working: "y\\le0", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Reverse order: stretch SF $\\frac13$, reflect in $x$-axis, translate 2 right.", working: "\\text{SF }\\tfrac13,\\text{ reflect},\\text{ right }2", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $g(x)=-3(x+2)^2$ (b) $-27$ (c) $y\\le0$ (d) stretch $\\frac13$, reflect, translate 2 right",
            commonErrors: ["Applying the stretch before the reflection — order matters for the equation."],
            examinerNote: "M1 A1 for (a), M1 for (b), A1 for (c), R1 for (d).",
          },
        },
      ],
    },
    {
      id: "mypme5-u2-composite",
      title: "Composite and Inverse Functions",
      skill: "Find composite functions, determine inverses algebraically, and solve equations involving function composition.",
      lesson: {
        sections: [
          {
            heading: "Composite functions",
            body: "$f\\circ g(x)=f(g(x))$ — apply $g$ first, then $f$. Not commutative: $f(g(x))\\ne g(f(x))$ in general. To find: substitute $g(x)$ into $f$.",
          },
          {
            heading: "Finding inverses",
            body: "For one-to-one functions: write $y=f(x)$, swap $x$ and $y$, solve for $y$: $f^{-1}(x)$. Verify: $f(f^{-1}(x))=x$ and $f^{-1}(f(x))=x$. Domain of $f^{-1}$ = range of $f$ and vice versa.",
          },
          {
            heading: "Solving with composites",
            body: "For $f(g(x))=k$: either work inside-out or substitute. For $f^{-1}(x)=g(x)$: apply $f$ to both sides to get $x=f(g(x))$ — often simplifies the problem.",
          },
        ],
        keyFormulas: [
          { name: "Composite", statement: "$(f\\circ g)(x)=f(g(x))$" },
          { name: "Inverse check", statement: "$f(f^{-1}(x))=x$" },
          { name: "Inverse method", statement: "Swap $x,y$; solve for $y$" },
        ],
        workedExample: {
          problem: "Find $f^{-1}$ for $f(x)=3x-5$ and verify.",
          solution: "$y=3x-5$ → $x=3y-5$ → $y=\\frac{x+5}{3}$. Check: $f(f^{-1}(x))=3(\\frac{x+5}{3})-5=x$ ✓.",
        },
      },
      questions: [
        {
          id: "mypme5-u2-comp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=2x+1$ and $g(x)=x-3$, find $f(g(5))$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9" },
              { id: "b", text: "5" },
              { id: "c", text: "7" },
              { id: "d", text: "11" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Composite", statement: "$g(5)=2$; $f(2)=5$." },
            ],
            steps: [
              { reasoning: "$g(5)=5-3=2$; $f(2)=2(2)+1=5$.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 5",
            commonErrors: ["Computing $g(f(5))$ instead."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u2-comp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the inverse of $f(x)=\\frac{x-4}{2}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$f^{-1}(x)=\\frac{x+4}{2}$" },
              { id: "b", text: "$f^{-1}(x)=\\frac{x}{2}+4$" },
              { id: "c", text: "$f^{-1}(x)=2x-4$" },
              { id: "d", text: "$f^{-1}(x)=2x+4$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inverse", statement: "$y=\\frac{x-4}{2}$ → $2y=x-4$ → $x=2y+4$ → $f^{-1}(x)=2x+4$." },
            ],
            steps: [
              { reasoning: "Swap and solve: $x=2y+4$ → $f^{-1}(x)=2x+4$.", working: "2x+4", marks: 1, markCode: "M" },
              { reasoning: "State the inverse.", working: "f^{-1}(x)=2x+4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f^{-1}(x)=2x+4$",
            commonErrors: ["Sign error when rearranging."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-comp-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Let $f(x)=x^2-1$ for $x\\ge0$ and $g(x)=\\sqrt{x+1}$. Verify that $g=f^{-1}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cannot verify without a calculator." },
              { id: "b", text: "$f(g(x))=(\\sqrt{x+1})^2-1=x$ ✓ and $g(f(x))=\\sqrt{x^2-1+1}=x$ for $x\\ge0$ ✓" },
              { id: "c", text: "$f(g(x))=x^2+x$ — not equal to $x$." },
              { id: "d", text: "They are inverses because both involve square roots." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inverse verification", statement: "Check both $f(g(x))=x$ and $g(f(x))=x$." },
            ],
            steps: [
              { reasoning: "$f(g(x))=(\\sqrt{x+1})^2-1=(x+1)-1=x$ ✓.", working: "f(g(x))=x", marks: 1, markCode: "M" },
              { reasoning: "$g(f(x))=\\sqrt{(x^2-1)+1}=\\sqrt{x^2}=x$ for $x\\ge0$ ✓.", working: "g(f(x))=x", marks: 1, markCode: "M" },
              { reasoning: "Both hold → $g=f^{-1}$.", working: "g=f^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Verified: $g=f^{-1}$",
            commonErrors: ["Forgetting $\\sqrt{x^2}=|x|$, not $x$ — domain restriction needed."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-comp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Let $f(x)=2x+3$ and $g(x)=x^2-1$.",
          parts: [
            { label: "a", prompt: "Find $f(g(x))$.", marks: 2 },
            { label: "b", prompt: "Find $g(f(x))$.", marks: 2 },
            { label: "c", prompt: "Solve $f(g(x))=11$.", marks: 2 },
            { label: "d", prompt: "Find $f^{-1}(x)$ and verify $f(f^{-1}(x))=x$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Composition", statement: "Substitute carefully; inverse via swap." },
            ],
            steps: [
              { part: "a", reasoning: "$f(g(x))=2(x^2-1)+3=2x^2+1$.", working: "2x^2+1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the composite.", working: "2x^2+1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$g(f(x))=(2x+3)^2-1=4x^2+12x+8$.", working: "4x^2+12x+8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the composite.", working: "4x^2+12x+8", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$2x^2+1=11$ → $x^2=5$ → $x=\\pm\\sqrt{5}$.", working: "x=\\pm\\sqrt{5}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State solutions.", working: "\\pm\\sqrt{5}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$f^{-1}(x)=\\frac{x-3}{2}$; $f(f^{-1}(x))=2(\\frac{x-3}{2})+3=x-3+3=x$ ✓.", working: "\\frac{x-3}{2}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Verify inverse.", working: "x", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2x^2+1$ (b) $4x^2+12x+8$ (c) $\\pm\\sqrt{5}$ (d) $\\frac{x-3}{2}$, verified",
            commonErrors: ["In (b), computing $(2x+3)^2$ incorrectly — must expand fully."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme5-u2-comp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=x+4$ and $g(x)=2x$, find $(g\\circ f)(3)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11" },
              { id: "b", text: "14" },
              { id: "c", text: "7" },
              { id: "d", text: "10" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Composite", statement: "$(g\\circ f)(3)=g(f(3))=g(7)=14$." },
            ],
            steps: [
              { reasoning: "$f(3)=7$; $g(7)=14$.", working: "14", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 14",
            commonErrors: ["Computing $f(g(3))=10$ instead."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u2-comp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=x^2$ and $g(x)=x-2$, find $f(g(5))$.",
          response: { type: "numeric", parts: [{ label: "$f(g(5))$", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Composite", statement: "$g(5)=3$; $f(3)=9$." },
            ],
            steps: [
              { reasoning: "$g(5)=3$; $f(3)=9$.", working: "9", marks: 1, markCode: "B" },
            ],
            finalAnswer: "9",
            commonErrors: ["Reversing the order: $g(f(5))=23$."],
          },
        },
        {
          id: "mypme5-u2-comp-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x)=2x+1$ and $g(x)=x^2$, find $(f\\circ g)(x)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2x+1)^2$" },
              { id: "b", text: "$4x^2+1$" },
              { id: "c", text: "$2x^2+1$" },
              { id: "d", text: "$2x^2+2x+1$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Composite", statement: "$(f\\circ g)(x)=f(g(x))=2x^2+1$." },
            ],
            steps: [
              { reasoning: "Substitute $x^2$ into $f$: $2(x^2)+1=2x^2+1$.", working: "2x^2+1", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $2x^2+1$",
            commonErrors: ["Computing $g(f(x))=(2x+1)^2$ instead."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-comp-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The inverse of $f(x)=5x+2$ is $f^{-1}(x)=\\frac{x-2}{5}$. Find $f^{-1}(7)$.",
          response: { type: "numeric", parts: [{ label: "$f^{-1}(7)$", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inverse evaluation", statement: "$f^{-1}(7)=\\frac{7-2}{5}=1$." },
            ],
            steps: [
              { reasoning: "$f^{-1}(7)=\\frac{7-2}{5}=\\frac55=1$.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
            commonErrors: ["Computing $f(7)=37$ instead of the inverse."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-comp-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "If $f(x)=x^2$ and $g(x)=\\sqrt{x}$, what is the domain of $(g\\circ f)(x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x\\ge0$ only" },
              { id: "b", text: "All real $x$" },
              { id: "c", text: "$x\\ge1$ only" },
              { id: "d", text: "$x>0$ only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Domain of composite", statement: "$(g\\circ f)(x)=\\sqrt{x^2}=|x|$, which is defined for every real $x$ since $x^2\\ge0$ always." },
            ],
            steps: [
              { reasoning: "$(g\\circ f)(x)=g(x^2)=\\sqrt{x^2}=|x|$.", working: "\\sqrt{x^2}=|x|", marks: 1, markCode: "M" },
              { reasoning: "$x^2\\ge0$ for all real $x$, so the square root input is always valid.", working: "x^2\\ge0\\ \\forall x", marks: 1, markCode: "M" },
              { reasoning: "Match option (a): all real $x$.", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** All real $x$",
            commonErrors: ["Restricting the domain to $x\\ge0$ as if it were $(f\\circ g)(x)=x$ for $x\\ge0$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-comp-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=x+3$ and $g(x)=x^2$, find $(f\\circ g)(2)$.",
          response: { type: "numeric", parts: [{ label: "$(f\\circ g)(2)$", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Composite", statement: "$g(2)=4$; $f(4)=7$." },
            ],
            steps: [
              { reasoning: "$g(2)=4$; $f(4)=7$.", working: "7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "7",
            commonErrors: ["Computing $f(2)+g(2)=5+4=9$."],
          },
        },
        {
          id: "mypme5-u2-comp-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x)=2x$ and $g(x)=x+5$, solve $f(g(x))=10$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 0 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Composite equation", statement: "$f(g(x))=2(x+5)=10$ → $x+5=5$ → $x=0$." },
            ],
            steps: [
              { reasoning: "$2(x+5)=10$ → $x+5=5$ → $x=0$.", working: "x=0", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x=0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=0$",
            commonErrors: ["Solving $g(f(x))=10$ instead."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-comp-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Let $f(x)=2x+3$ and $g(x)=\\frac1x$ ($x\\ne0$). Solve $f(g(x))=5$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Composite equation", statement: "$f(g(x))=2\\cdot\\frac1x+3=5$ → $\\frac2x=2$ → $x=1$." },
            ],
            steps: [
              { reasoning: "$f(g(x))=\\frac{2}{x}+3=5$ → $\\frac{2}{x}=2$.", working: "\\frac{2}{x}=2", marks: 1, markCode: "M" },
              { reasoning: "$x=1$ (valid since $x\\ne0$).", working: "x=1", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=1$",
            commonErrors: ["Multiplying both sides by $x$ incorrectly or rejecting valid solution."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-comp-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Let $f(x)=3x-2$ and $g(x)=x^2+1$.",
          parts: [
            { label: "a", prompt: "Find $(f\\circ g)(x)$.", marks: 2 },
            { label: "b", prompt: "Find $(g\\circ f)(x)$.", marks: 2 },
            { label: "c", prompt: "Solve $(f\\circ g)(x)=(g\\circ f)(x)$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Composition", statement: "Substitute carefully; solving the equation gives a quadratic in $x$." },
            ],
            steps: [
              { part: "a", reasoning: "$f(g(x))=3(x^2+1)-2=3x^2+1$.", working: "3x^2+1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the composite.", working: "3x^2+1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$g(f(x))=(3x-2)^2+1=9x^2-12x+5$.", working: "9x^2-12x+5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the composite.", working: "9x^2-12x+5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$3x^2+1=9x^2-12x+5$ → $6x^2-12x+4=0$ → $3x^2-6x+2=0$.", working: "3x^2-6x+2=0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$x=\\frac{6\\pm\\sqrt{36-24}}{6}=\\frac{6\\pm2\\sqrt3}{6}=1\\pm\\frac{\\sqrt3}{3}$.", working: "1\\pm\\frac{\\sqrt3}{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3x^2+1$ (b) $9x^2-12x+5$ (c) $x=1\\pm\\frac{\\sqrt3}{3}$",
            commonErrors: ["In (b), writing $(3x-2)^2=9x^2-4$ instead of full expansion."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme5-u2-comp-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the inverse of $f(x)=\\frac{x+1}{3}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$f^{-1}(x)=\\frac{x-1}{3}$" },
              { id: "b", text: "$f^{-1}(x)=\\frac{1}{3x+1}$" },
              { id: "c", text: "$f^{-1}(x)=3x+1$" },
              { id: "d", text: "$f^{-1}(x)=3x-1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inverse", statement: "$y=\\frac{x+1}{3}$ → $3y=x+1$ → $x=3y-1$ → $f^{-1}(x)=3x-1$." },
            ],
            steps: [
              { reasoning: "Swap and solve: $x=3y-1$.", working: "x=3y-1", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f^{-1}(x)=3x-1$",
            commonErrors: ["Sign error: writing $3y+1$ instead of $3y-1$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-comp-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Let $f(x)=2x-1$ and $g(x)=x+4$. Solve $f^{-1}(x)=g(x)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=-3$" },
              { id: "b", text: "$x=-7$" },
              { id: "c", text: "$x=3$" },
              { id: "d", text: "$x=7$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inverse equations", statement: "Apply $f$ to both sides: $x=f(g(x))=2(x+4)-1=2x+7$ → $x=-7$." },
            ],
            steps: [
              { reasoning: "Apply $f$ to both sides of $f^{-1}(x)=x+4$: $x=f(x+4)=2(x+4)-1=2x+7$.", working: "x=2x+7", marks: 1, markCode: "M" },
              { reasoning: "Solve: $x=-7$.", working: "x=-7", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x=-7$",
            commonErrors: ["Computing $f^{-1}(x)=\\frac{x+1}{2}$ then solving $\\frac{x+1}{2}=x+4$ incorrectly."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-comp-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Let $f(x)=x^2$ for $x\\ge0$ and $g(x)=2x+1$.",
          parts: [
            { label: "a", prompt: "State the domain of $(f\\circ g)(x)$.", marks: 1 },
            { label: "b", prompt: "Find $(f\\circ g)(x)$.", marks: 1 },
            { label: "c", prompt: "Find $(g\\circ f)(x)$ and state its domain.", marks: 1 },
            { label: "d", prompt: "Let $h=f\\circ g$. Find $h^{-1}(x)$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Composition and inverse", statement: "$h(x)=(2x+1)^2$; since $f$ needs input $\\ge0$, the domain requires $2x+1\\ge0$, i.e. $x\\ge-\\frac12$." },
            ],
            steps: [
              { part: "a", reasoning: "Need $g(x)=2x+1\\ge0$ → $x\\ge-\\frac12$.", working: "x\\ge-\\frac12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$f(g(x))=(2x+1)^2$.", working: "(2x+1)^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$g(f(x))=2x^2+1$ for $x\\ge0$ (domain of $f$).", working: "2x^2+1,\\ x\\ge0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$h(x)=(2x+1)^2$ for $x\\ge-\\frac12$ has range $[0,\\infty)$; swap: $x=(2y+1)^2$ → $\\sqrt x=2y+1$ (positive root since $2y+1\\ge0$) → $y=\\frac{\\sqrt x-1}{2}$.", working: "h^{-1}(x)=\\frac{\\sqrt x-1}{2}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the inverse and its domain $x\\ge0$.", working: "h^{-1}(x)=\\frac{\\sqrt x-1}{2},\\ x\\ge0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x\\ge-\\frac12$ (b) $(2x+1)^2$ (c) $2x^2+1$, $x\\ge0$ (d) $h^{-1}(x)=\\frac{\\sqrt x-1}{2}$, $x\\ge0$",
            commonErrors: ["Taking $-\\sqrt x$ instead of $+\\sqrt x$ — must use the branch where $2y+1\\ge0$."],
            examinerNote: "M1 for (a), M1 for (b), M1 for (c), M1 A1 for (d).",
          },
        },
      ],
    },

  ],
};
