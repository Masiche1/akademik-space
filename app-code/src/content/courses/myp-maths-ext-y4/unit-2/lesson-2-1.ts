import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mypme4-u2-lesson-2-1",
  code: "2-1",
  title: "Transformations of Functions",
  goal: "I CAN describe translations, reflections and stretches of function graphs and write transformed equations.",
  standards: [
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion B: Investigating patterns",
  ],
  vocabulary: [
    { term: "Translation", definition: "A slide of the graph: $y=f(x)+a$ moves up/down; $y=f(x-a)$ moves left/right." },
    { term: "Reflection", definition: "A flip of the graph: $y=-f(x)$ reflects in the x-axis; $y=f(-x)$ reflects in the y-axis." },
    { term: "Stretch", definition: "A scaling of the graph: $y=af(x)$ stretches vertically by factor $a$; $y=f(bx)$ stretches horizontally by factor $\\frac{1}{b}$." },
    { term: "Parent function", definition: "The original function before transformation, e.g. $y=x^2$." },
    { term: "Image", definition: "The transformed graph resulting from applying a transformation to the parent function." },
  ],
  concepts: [
    {
      id: "mypme4-u2-transforms",
      title: "Translations, reflections and stretches",
      skill: "Apply and describe transformations to graphs of functions.",
      lesson: {
        sections: [
          {
            heading: "Translations",
            body: "Adding a constant shifts the graph: $y=f(x)+3$ moves every point up 3 units; $y=f(x-2)$ moves every point right 2 units. The inside transformation ($x-a$) moves horizontally; the outside ($+a$) moves vertically.",
          },
          {
            heading: "Reflections",
            body: "$y=-f(x)$ reflects the graph in the **x-axis** (flips upside down). $y=f(-x)$ reflects in the **y-axis** (flips left-right). For $y=x^2$, $y=-x^2$ opens downward; $y=(-x)^2=x^2$ looks identical because $x^2$ is symmetric.",
          },
          {
            heading: "Stretches",
            body: "$y=2f(x)$ doubles all y-values (vertical stretch factor 2). $y=f(2x)$ halves all x-values (horizontal stretch factor $\\frac{1}{2}$). These are different transformations.",
          },
        ],
        keyFormulas: [
          { name: "Vertical translation", statement: "$y=f(x)+a$ shifts up $a$ units" },
          { name: "Horizontal translation", statement: "$y=f(x-a)$ shifts right $a$ units" },
          { name: "Reflection x-axis", statement: "$y=-f(x)$" },
          { name: "Reflection y-axis", statement: "$y=f(-x)$" },
          { name: "Stretch", statement: "$y=af(x)$ vertical factor $a$; $y=f(bx)$ horizontal factor $\\frac{1}{b}$" },
        ],
        workedExample: {
          problem: "Describe the transformation from $y=x^2$ to $y=(x-3)^2+2$.",
          solution: "Inside: $x-3$ shifts right 3 units. Outside: $+2$ shifts up 2 units. Vertex moves from $(0,0)$ to $(3,2)$.",
        },
      },
      questions: [
        {
          id: "mypme4-u2-trans-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What transformation takes $y=x^2$ to $y=x^2+5$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translation up 5 units" },
              { id: "b", text: "Reflection in x-axis" },
              { id: "c", text: "Translation right 5 units" },
              { id: "d", text: "Stretch factor 5" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Translation", statement: "$y=f(x)+a$ shifts vertically." },
            ],
            steps: [
              { reasoning: "$+5$ outside moves graph up 5.", working: "\\text{up }5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Translation up 5 units",
            commonErrors: ["Saying it moves right — that's $f(x-5)$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u2-trans-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the transformation from $y=x^2$ to $y=(x+4)^2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translation left 4 units" },
              { id: "b", text: "Translation up 4 units" },
              { id: "c", text: "Translation right 4 units" },
              { id: "d", text: "Reflection in y-axis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Horizontal translation", statement: "$f(x-a)$ moves right $a$; $f(x+a)=f(x-(-a))$ moves left $a$." },
            ],
            steps: [
              { reasoning: "$x+4=x-(-4)$, so shift left 4.", working: "\\text{left }4", marks: 1, markCode: "M" },
              { reasoning: "State the transformation.", working: "\\text{left }4\\text{ units}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Translation left 4 units",
            commonErrors: ["Saying right — sign confusion inside the bracket."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-trans-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The point $(2,5)$ lies on $y=f(x)$. Find the corresponding point on $y=3f(x-1)+2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3,15)$" },
              { id: "b", text: "$(1,17)$" },
              { id: "c", text: "$(3,17)$" },
              { id: "d", text: "$(3,7)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Point transformation", statement: "Apply inverse of inside transformation, then outside." },
            ],
            steps: [
              { reasoning: "$x-1$ inside: original $x=2$ maps to new $x=3$.", working: "x=3", marks: 1, markCode: "M" },
              { reasoning: "$3f(2)+2=3(5)+2=17$.", working: "y=17", marks: 1, markCode: "M" },
              { reasoning: "State the point.", working: "(3,17)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3,17)$",
            commonErrors: ["Applying transformations in the wrong order."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u2-trans-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Consider $f(x)=x^2$ and the transformations applied in sequence.",
          parts: [
            { label: "a", prompt: "Write the equation after translating 2 units right and 3 units up.", marks: 2 },
            { label: "b", prompt: "Write the equation after reflecting $f(x)=x^2$ in the x-axis.", marks: 1 },
            { label: "c", prompt: "Write the equation after stretching $f(x)=x^2$ vertically by factor 3.", marks: 1 },
            { label: "d", prompt: "Starting from $y=x^2$, describe the single transformation equivalent to $y=(x-2)^2+3$.", marks: 2 },
            { label: "e", prompt: "Find the vertex of $y=(x-2)^2+3$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Transformations", statement: "Inside transforms horizontally; outside vertically." },
            ],
            steps: [
              { part: "a", reasoning: "$y=(x-2)^2+3$.", working: "y=(x-2)^2+3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the equation.", working: "y=(x-2)^2+3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$y=-x^2$.", working: "y=-x^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$y=3x^2$.", working: "y=3x^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Inside: $x-2$ = right 2; outside: $+3$ = up 3.", working: "\\text{right 2, up 3}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State as translation.", working: "\\text{translation }(2,3)", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Vertex at $(2,3)$.", working: "(2,3)", marks: 1, markCode: "M" },
              { part: "e", reasoning: "State the vertex.", working: "(2,3)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $y=(x-2)^2+3$ (b) $y=-x^2$ (c) $y=3x^2$ (d) translation right 2, up 3 (e) $(2,3)$",
            commonErrors: ["Confusing horizontal and vertical shifts."],
            examinerNote: "M1 A1 for (a), A1 for (b), A1 for (c), M1 A1 for (d), M1 A1 for (e).",
          },
        },
        {
          id: "mypme4-u2-trans-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What transformation takes $y=x^2$ to $y=x^2-4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translation down 4 units" },
              { id: "b", text: "Stretch factor 4" },
              { id: "c", text: "Reflection in the x-axis" },
              { id: "d", text: "Translation left 4 units" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Translation", statement: "$y=f(x)+a$ shifts vertically; negative $a$ moves down." },
            ],
            steps: [
              { reasoning: "$-4$ outside moves the graph down 4 units.", working: "\\text{down }4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Translation down 4 units",
            commonErrors: ["Saying it moves left — that's $f(x+4)$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u2-trans-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The point $(1,2)$ lies on $y=f(x)$. Find the $y$-coordinate of the corresponding point on $y=f(x)+3$.",
          response: { type: "numeric", parts: [{ label: "$y$-coordinate", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Translation", statement: "$y=f(x)+3$ adds 3 to every $y$-value." },
            ],
            steps: [
              { reasoning: "New $y=2+3=5$; $x$ unchanged at 1.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Adding 3 to the $x$-coordinate instead."],
          },
        },
        {
          id: "mypme4-u2-trans-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "In which axis is the graph of $y=f(x)$ reflected to give $y=-f(x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The line $y=x$" },
              { id: "b", text: "No reflection — it's a translation" },
              { id: "c", text: "The x-axis" },
              { id: "d", text: "The y-axis" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reflection", statement: "$y=-f(x)$ negates $y$-values → reflection in the x-axis." },
            ],
            steps: [
              { reasoning: "Negating the output flips the graph upside down.", working: "\\text{x-axis}", marks: 1, markCode: "M" },
              { reasoning: "State the axis.", working: "x\\text{-axis}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection in the x-axis",
            commonErrors: ["Confusing $-f(x)$ (x-axis) with $f(-x)$ (y-axis)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-trans-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The point $(2,4)$ lies on $y=x^2$. Find the corresponding point on $y=(x-1)^2$.",
          response: { type: "numeric", parts: [
            { label: "$x$-coordinate", answer: 3 },
            { label: "$y$-coordinate", answer: 4 },
          ] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Point transformation", statement: "$y=f(x-1)$ shifts points right by 1." },
            ],
            steps: [
              { reasoning: "$x-1$ inside: every point moves right 1, so $x=2+1=3$; $y$ unchanged at 4.", working: "(3,4)", marks: 1, markCode: "M" },
              { reasoning: "State the point.", working: "x=3,\\ y=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3,4)$",
            commonErrors: ["Moving left instead of right."],
          },
        },
        {
          id: "mypme4-u2-trans-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the transformation from $y=f(x)$ to $y=f(x+2)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translation up 2 units" },
              { id: "b", text: "Stretch factor 2" },
              { id: "c", text: "Translation left 2 units" },
              { id: "d", text: "Translation right 2 units" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Horizontal translation", statement: "$f(x+a)=f(x-(-a))$ moves left $a$ units." },
            ],
            steps: [
              { reasoning: "$x+2=x-(-2)$, so the graph shifts left 2.", working: "\\text{left }2", marks: 1, markCode: "M" },
              { reasoning: "State the transformation.", working: "\\text{left }2\\text{ units}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Translation left 2 units",
            commonErrors: ["Saying right — sign confusion inside the bracket."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-trans-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "The point $(1,3)$ lies on $y=f(x)$. Find the $y$-coordinate of the corresponding point on $y=2f(x)$.",
          response: { type: "numeric", parts: [{ label: "$y$-coordinate", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stretch", statement: "$y=2f(x)$ doubles every $y$-value." },
            ],
            steps: [
              { reasoning: "New $y=2\\times3=6$; $x$ unchanged.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$",
            commonErrors: ["Doubling the $x$-coordinate instead of $y$."],
          },
        },
        {
          id: "mypme4-u2-trans-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the vertex of the graph of $y=-(x-2)^2+1$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2,-1)$" },
              { id: "b", text: "$(1,2)$" },
              { id: "c", text: "$(2,1)$" },
              { id: "d", text: "$(-2,1)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vertex form", statement: "$y=a(x-h)^2+k$ has vertex $(h,k)$." },
            ],
            steps: [
              { reasoning: "Inside $x-2$ gives $h=2$; outside $+1$ gives $k=1$.", working: "h=2,\\ k=1", marks: 1, markCode: "M" },
              { reasoning: "The negative sign only affects the shape (opens downward), not the vertex.", working: "\\text{vertex }(2,1)", marks: 1, markCode: "M" },
              { reasoning: "State the vertex.", working: "(2,1)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(2,1)$",
            commonErrors: ["Ignoring the leading negative and reporting $(2,-1)$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u2-trans-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The point $(-2,5)$ lies on $y=f(x)$. Find the corresponding point on $y=f(-x-1)$.",
          response: { type: "numeric", parts: [
            { label: "$x$-coordinate", answer: 1 },
            { label: "$y$-coordinate", answer: 5 },
          ] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Point transformation", statement: "Solve $-x-1=-2$ for the new $x$; $y$ unchanged." },
            ],
            steps: [
              { reasoning: "Need $-x-1=-2$, so $-x=-1$, $x=1$.", working: "x=1", marks: 1, markCode: "M" },
              { reasoning: "$y=5$ unchanged; the point is $(1,5)$.", working: "y=5", marks: 1, markCode: "M" },
              { reasoning: "State the point.", working: "(1,5)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(1,5)$",
            commonErrors: ["Substituting $x=-2$ directly instead of solving for the new input."],
          },
        },
        {
          id: "mypme4-u2-trans-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Transformations of $y=x^2$.",
          parts: [
            { label: "a", prompt: "Write the equation after translating 3 units left and 2 units down.", marks: 2 },
            { label: "b", prompt: "Write the equation after a vertical stretch with scale factor 2.", marks: 2 },
            { label: "c", prompt: "Find the vertex of $y=(x+1)^2-4$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Transformations", statement: "Inside transforms horizontally; outside vertically." },
            ],
            steps: [
              { part: "a", reasoning: "Left 3 → $x+3$; down 2 → $-2$: $y=(x+3)^2-2$.", working: "y=(x+3)^2-2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the equation.", working: "y=(x+3)^2-2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$y=2x^2$.", working: "y=2x^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the equation.", working: "y=2x^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$h=-1$, $k=-4$; vertex $(-1,-4)$.", working: "(-1,-4)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the vertex.", working: "(-1,-4)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $y=(x+3)^2-2$ (b) $y=2x^2$ (c) $(-1,-4)$",
            commonErrors: ["In (a), writing $(x-3)^2-2$ — left means $+3$ inside."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u2-trans-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Combined transformations of functions.",
          parts: [
            { label: "a", prompt: "Describe fully the transformation from $y=x^2$ to $y=2(x-3)^2-1$.", marks: 2 },
            { label: "b", prompt: "The point $(4,9)$ lies on $y=f(x)$. Find the corresponding point on $y=2f(x-1)-3$.", marks: 3 },
            { label: "c", prompt: "Starting from $y=x^2$, write the equation after reflection in the x-axis then translation up 1 unit.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Transformations", statement: "Describe horizontal then vertical changes; apply inside-out for points." },
            ],
            steps: [
              { part: "a", reasoning: "Inside $x-3$: right 3; outside $\\times2$: vertical stretch factor 2; $-1$: down 1.", working: "\\text{right 3, stretch 2, down 1}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three transformations.", working: "\\text{full description}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$x-1$ inside: new $x=4+1=5$; $y=2(9)-3=15$.", working: "(5,15)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply stretch and shift to $y$.", working: "y=15", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the point.", working: "(5,15)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Reflection: $y=-x^2$; then up 1: $y=-x^2+1$.", working: "y=-x^2+1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the equation.", working: "y=-x^2+1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) right 3, vertical stretch factor 2, down 1 (b) $(5,15)$ (c) $y=-x^2+1$",
            commonErrors: ["In (b), applying transformations to $x$ and $y$ in the wrong order."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u2-trans-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A mixed set on transformations of $y=x^2$ and $y=f(x)$.",
          parts: [
            { label: "a", prompt: "Write $y=(x-4)^2+2$ in words: describe the transformation from $y=x^2$.", marks: 2 },
            { label: "b", prompt: "The point $(2,7)$ lies on $y=f(x)$. Find the corresponding point on $y=3f(x+2)-4$.", marks: 3 },
            { label: "c", prompt: "Write the equation of $y=x^2$ after a horizontal stretch with scale factor $\\frac{1}{2}$.", marks: 2 },
            { label: "d", prompt: "Write $y=4x^2-8x+5$ in completed square form.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Transformations", statement: "Inside transforms horizontally; outside vertically; vertex form $a(x-h)^2+k$." },
            ],
            steps: [
              { part: "a", reasoning: "$x-4$: right 4; $+2$: up 2.", working: "\\text{right 4, up 2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State as a translation.", working: "\\text{translation }(4,2)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$x+2$ inside: new $x=2-2=0$.", working: "x=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$y=3(7)-4=17$.", working: "y=17", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the point.", working: "(0,17)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Horizontal stretch factor $\\frac{1}{2}$ → $y=(2x)^2=4x^2$.", working: "y=4x^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the equation.", working: "y=4x^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$4(x^2-2x)+5=4(x-1)^2+1$.", working: "4(x-1)^2+1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) translation right 4, up 2 (b) $(0,17)$ (c) $y=4x^2$ (d) $y=4(x-1)^2+1$",
            commonErrors: ["In (c), writing $y=\\frac{x^2}{4}$ — horizontal stretch factor $\\frac{1}{2}$ means replacing $x$ with $2x$."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypme4-u2-trans-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The point $(3,-2)$ lies on $y=f(x)$. Find the corresponding point on $y=f(2x)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(6,-2)$" },
              { id: "b", text: "$(1.5,-2)$" },
              { id: "c", text: "$(1.5,-4)$" },
              { id: "d", text: "$(3,-4)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Point transformation", statement: "Solve $2x=3$ for the new input; $y$ unchanged." },
            ],
            steps: [
              { reasoning: "Need $2x=3$, so $x=1.5$; $y=-2$ unchanged.", working: "x=1.5,\\ y=-2", marks: 1, markCode: "M" },
              { reasoning: "Check: $f(2(1.5))=f(3)=-2$. ✓", working: "f(3)=-2", marks: 1, markCode: "M" },
              { reasoning: "State the point.", working: "(1.5,-2)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(1.5,-2)$",
            commonErrors: ["Doubling $x$ instead of halving — horizontal stretch factor is $\\frac{1}{2}$."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypme4-u2-graphs",
      title: "Rational and trigonometric graphs",
      skill: "Sketch and interpret graphs of rational functions $y=\\frac{k}{x}$ and basic trigonometric functions.",
      lesson: {
        sections: [
          {
            heading: "Rational functions",
            body: "$y=\\frac{k}{x}$ is a **reciprocal function** — a hyperbola with two branches. For $k>0$, both branches are in quadrants I and III; for $k<0$, quadrants II and IV. There are **asymptotes** at $x=0$ and $y=0$ — the graph approaches but never touches these lines.",
          },
          {
            heading: "Trigonometric graphs",
            body: "$y=\\sin x$ and $y=\\cos x$ are **periodic** — they repeat every $360°$ (or $2\\pi$ radians). $\\sin x$ starts at 0, rises to 1 at $90°$, back to 0 at $180°$, to $-1$ at $270°$. $\\cos x$ starts at 1. Amplitude = maximum displacement; period = length of one cycle.",
          },
          {
            heading: "Key features",
            body: "For $y=a\\sin(bx)+c$: amplitude $=|a|$, period $=\\frac{360°}{|b|}$, vertical shift $=c$. For $y=\\frac{k}{x}$: asymptotes at axes, branches in specific quadrants depending on sign of $k$.",
          },
        ],
        keyFormulas: [
          { name: "Reciprocal", statement: "$y=\\frac{k}{x}$: asymptotes at $x=0$, $y=0$" },
          { name: "Sine period", statement: "$360°$ for $y=\\sin x$" },
          { name: "Amplitude", statement: "$|a|$ in $y=a\\sin(bx)+c$" },
          { name: "Period", statement: "$\\frac{360°}{|b|}$ in $y=a\\sin(bx)+c$" },
        ],
        workedExample: {
          problem: "State the period and amplitude of $y=3\\sin(2x)$.",
          solution: "Amplitude = 3; period = $\\frac{360°}{2}=180°$.",
        },
      },
      questions: [
        {
          id: "mypme4-u2-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the asymptotes of $y=\\frac{5}{x}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No asymptotes" },
              { id: "b", text: "$x=5$ and $y=5$" },
              { id: "c", text: "$x=0$ and $y=0$" },
              { id: "d", text: "$x=0$ only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Asymptote", statement: "Lines the graph approaches but never touches." },
            ],
            steps: [
              { reasoning: "Reciprocal function has vertical asymptote $x=0$ and horizontal $y=0$.", working: "x=0,\\ y=0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $x=0$ and $y=0$",
            commonErrors: ["Thinking asymptotes depend on $k$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u2-graphs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the period of $y=\\sin x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$360°$" },
              { id: "b", text: "$90°$" },
              { id: "c", text: "$720°$" },
              { id: "d", text: "$180°$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Period", statement: "Length of one complete cycle." },
            ],
            steps: [
              { reasoning: "$\\sin x$ repeats every $360°$.", working: "360°", marks: 1, markCode: "M" },
              { reasoning: "State the period.", working: "360°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$360°$",
            commonErrors: ["Confusing period with amplitude."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-graphs-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For $y=2\\sin(3x)$, find the amplitude and period.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amplitude 2, period $180°$" },
              { id: "b", text: "Amplitude 3, period $240°$" },
              { id: "c", text: "Amplitude 6, period $120°$" },
              { id: "d", text: "Amplitude 2, period $120°$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trig parameters", statement: "Amplitude $=|a|$; period $=\\frac{360°}{|b|}$." },
            ],
            steps: [
              { reasoning: "$a=2$, $b=3$: amplitude = 2, period = $\\frac{360}{3}=120°$.", working: "2,\\ 120°", marks: 1, markCode: "M" },
              { reasoning: "Check: $3x$ cycles 3 times faster than $x$.", working: "120°", marks: 1, markCode: "M" },
              { reasoning: "State both.", working: "2,\\ 120°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Amplitude 2, period $120°$",
            commonErrors: ["Swapping amplitude and period formulas."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u2-graphs-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Consider $y=\\frac{6}{x}$ and $y=2\\sin x$.",
          parts: [
            { label: "a", prompt: "State the quadrants where $y=\\frac{6}{x}$ has branches.", marks: 1 },
            { label: "b", prompt: "Find the value of $y$ when $x=2$ for $y=\\frac{6}{x}$.", marks: 1 },
            { label: "c", prompt: "State the amplitude and period of $y=2\\sin x$.", marks: 2 },
            { label: "d", prompt: "Find the values of $x$ in $[0°,360°]$ where $\\sin x=0$.", marks: 2 },
            { label: "e", prompt: "Describe how the graph of $y=\\frac{6}{x}$ differs from $y=\\frac{1}{x}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reciprocal", statement: "$k>0$ → quadrants I and III." },
              { kind: "principle", name: "Trig", statement: "Amplitude $=|a|$; period $=360°$ for $\\sin x$." },
            ],
            steps: [
              { part: "a", reasoning: "Positive reciprocal: quadrants I and III.", working: "I\\text{ and }III", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$y=\\frac{6}{2}=3$.", working: "3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Amplitude = 2; period = $360°$.", working: "2,\\ 360°", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State both.", working: "2,\\ 360°", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\sin x=0$ at $x=0°,180°,360°$.", working: "0°,180°,360°", marks: 1, markCode: "M" },
              { part: "d", reasoning: "List all three values.", working: "0,180,360", marks: 1, markCode: "A" },
              { part: "e", reasoning: "$y=\\frac{6}{x}$ is $y=\\frac{1}{x}$ scaled vertically by factor 6.", working: "\\text{vertical stretch }6", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Same asymptotes, branches further from origin.", working: "\\text{further from axes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) I and III (b) 3 (c) amplitude 2, period $360°$ (d) $0°,180°,360°$ (e) vertical stretch by factor 6",
            commonErrors: ["In (e), saying it's a horizontal stretch."],
            examinerNote: "A1 for (a), M1 for (b), M1 A1 for (c), M1 A1 for (d), R1 A1 for (e).",
          },
        },
        {
          id: "mypme4-u2-graphs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the period of $y=\\cos x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$720°$" },
              { id: "b", text: "$360°$" },
              { id: "c", text: "$90°" },
              { id: "d", text: "$180°$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Period", statement: "$\\cos x$ repeats every $360°$." },
            ],
            steps: [
              { reasoning: "Cosine has the same period as sine: $360°$.", working: "360°", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $360°$",
            commonErrors: ["Confusing period with amplitude."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u2-graphs-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the value of $y$ when $x=2$ on the graph of $y=\\frac{4}{x}$.",
          response: { type: "numeric", parts: [{ label: "$y$", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reciprocal", statement: "Substitute $x=2$: $y=\\frac{4}{2}=2$." },
            ],
            steps: [
              { reasoning: "$y=\\frac{4}{2}=2$.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$2$",
            commonErrors: ["Computing $4\\times2=8$."],
          },
        },
        {
          id: "mypme4-u2-graphs-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the amplitude of $y=5\\sin x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "$\\frac{1}{5}$" },
              { id: "c", text: "5" },
              { id: "d", text: "$360°$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amplitude", statement: "Amplitude $=|a|$ in $y=a\\sin(bx)+c$." },
            ],
            steps: [
              { reasoning: "$a=5$, so amplitude $=|5|=5$.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "State the amplitude.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Confusing amplitude with period."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-graphs-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the period of $y=\\sin(4x)$.",
          response: { type: "numeric", parts: [{ label: "Period in degrees", answer: 90 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Period", statement: "Period $=\\frac{360°}{|b|}$ for $y=a\\sin(bx)+c$." },
            ],
            steps: [
              { reasoning: "$b=4$: period $=\\frac{360}{4}=90°$.", working: "90°", marks: 1, markCode: "M" },
              { reasoning: "State the period.", working: "90°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$90°$",
            commonErrors: ["Multiplying by 4 instead of dividing."],
          },
        },
        {
          id: "mypme4-u2-graphs-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In which quadrants does $y=\\frac{-3}{x}$ have branches?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All four quadrants" },
              { id: "b", text: "Quadrants I and III" },
              { id: "c", text: "Quadrants II and IV" },
              { id: "d", text: "Quadrants I and II" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reciprocal", statement: "$k<0$ → branches in quadrants II and IV." },
            ],
            steps: [
              { reasoning: "$k=-3<0$: for $x>0$, $y<0$ (QIV); for $x<0$, $y>0$ (QII).", working: "II\\text{ and }IV", marks: 1, markCode: "M" },
              { reasoning: "State the quadrants.", working: "II\\text{ and }IV", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quadrants II and IV",
            commonErrors: ["Ignoring the sign of $k$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-graphs-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the value of $y$ when $x=-3$ on the graph of $y=\\frac{6}{x}$.",
          response: { type: "numeric", parts: [{ label: "$y$", answer: -2 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reciprocal", statement: "$y=\\frac{6}{-3}=-2$." },
            ],
            steps: [
              { reasoning: "$y=\\frac{6}{-3}=-2$.", working: "-2", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-2$",
            commonErrors: ["Sign error: writing 2 instead of -2."],
          },
        },
        {
          id: "mypme4-u2-graphs-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For $y=2\\cos(3x)$, find the amplitude and period.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amplitude 6, period $120°$" },
              { id: "b", text: "Amplitude 3, period $240°$" },
              { id: "c", text: "Amplitude 2, period $360°$" },
              { id: "d", text: "Amplitude 2, period $120°$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trig parameters", statement: "Amplitude $=|a|$; period $=\\frac{360°}{|b|}$." },
            ],
            steps: [
              { reasoning: "$a=2$, $b=3$: amplitude $=2$; period $=\\frac{360}{3}=120°$.", working: "2,\\ 120°", marks: 1, markCode: "M" },
              { reasoning: "Apply both formulas correctly.", working: "120°", marks: 1, markCode: "M" },
              { reasoning: "State both values.", working: "2,\\ 120°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Amplitude 2, period $120°$",
            commonErrors: ["Using $a=3$ — confusing the coefficient of $\\cos$ with the coefficient of $x$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u2-graphs-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the smallest positive value of $x$ in $[0°,360°]$ for which $\\sin x=0.5$.",
          response: { type: "numeric", parts: [{ label: "$x$ in degrees", answer: 30 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Sine values", statement: "$\\sin 30°=0.5$; sine is positive in QI and QII." },
            ],
            steps: [
              { reasoning: "$\\sin x=0.5$ first occurs at $x=30°$.", working: "30°", marks: 1, markCode: "M" },
              { reasoning: "State the smallest value.", working: "30°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30°$",
            commonErrors: ["Giving 150° — that's the second solution, not the smallest."],
          },
        },
        {
          id: "mypme4-u2-graphs-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How does the graph of $y=\\frac{8}{x}$ compare with $y=\\frac{1}{x}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Horizontal stretch with scale factor 8" },
              { id: "b", text: "Translation up 8 units" },
              { id: "c", text: "Vertical stretch with scale factor 8" },
              { id: "d", text: "Reflection in the x-axis" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reciprocal", statement: "$y=\\frac{k}{x}$ scales $y=\\frac{1}{x}$ vertically by factor $k$." },
            ],
            steps: [
              { reasoning: "Replacing $\\frac{1}{x}$ with $\\frac{8}{x}$ multiplies every $y$-value by 8.", working: "\\times8", marks: 1, markCode: "M" },
              { reasoning: "Same asymptotes; branches further from the axes.", working: "\\text{vertical stretch }8", marks: 1, markCode: "M" },
              { reasoning: "State the transformation.", working: "\\text{vertical stretch }8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vertical stretch with scale factor 8",
            commonErrors: ["Calling it a horizontal stretch — the multiplier is on $y$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u2-graphs-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Consider $y=\\frac{10}{x}$ and $y=3\\sin(2x)+1$.",
          parts: [
            { label: "a", prompt: "State the asymptotes of $y=\\frac{10}{x}$.", marks: 1 },
            { label: "b", prompt: "Find $y$ when $x=-5$ for $y=\\frac{10}{x}$.", marks: 2 },
            { label: "c", prompt: "State the amplitude, period and vertical shift of $y=3\\sin(2x)+1$.", marks: 2 },
            { label: "d", prompt: "Describe the transformation from $y=\\sin x$ to $y=\\sin x+2$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reciprocal", statement: "Asymptotes at $x=0$ and $y=0$." },
              { kind: "formula", name: "Trig parameters", statement: "Amplitude $=|a|$; period $=\\frac{360°}{|b|}$; $+c$ shifts vertically." },
            ],
            steps: [
              { part: "a", reasoning: "Asymptotes $x=0$ and $y=0$.", working: "x=0,\\ y=0", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$y=\\frac{10}{-5}=-2$.", working: "-2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the value.", working: "-2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Amplitude $=3$; period $=\\frac{360}{2}=180°$; vertical shift $=+1$.", working: "3,\\ 180°,\\ +1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State all three.", working: "3,\\ 180°,\\ 1", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$+2$ outside shifts the graph up 2 units.", working: "\\text{up }2", marks: 1, markCode: "R" },
              { part: "d", reasoning: "State the transformation.", working: "\\text{translation up }2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x=0$, $y=0$ (b) $-2$ (c) amplitude 3, period $180°$, shift +1 (d) translation up 2",
            commonErrors: ["In (c), forgetting the vertical shift or using period $360°$."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), R1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u2-graphs-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Mixed questions on reciprocal and trigonometric graphs.",
          parts: [
            { label: "a", prompt: "Find $y$ when $x=4$ on $y=\\frac{12}{x}$.", marks: 1 },
            { label: "b", prompt: "State the quadrants of $y=\\frac{-12}{x}$.", marks: 1 },
            { label: "c", prompt: "Find the period of $y=\\cos(6x)$.", marks: 2 },
            { label: "d", prompt: "Solve $2\\sin x=1$ for $x$ in $[0°,360°]$.", marks: 2 },
            { label: "e", prompt: "Explain why $y=\\frac{5}{x}$ never touches either axis.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reciprocal", statement: "$k<0$ → quadrants II and IV; axes are asymptotes." },
              { kind: "formula", name: "Trig", statement: "Period $=\\frac{360°}{|b|}$; $\\sin x=0.5$ at $30°,150°$." },
            ],
            steps: [
              { part: "a", reasoning: "$y=\\frac{12}{4}=3$.", working: "3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$k=-12<0$ → quadrants II and IV.", working: "II\\text{ and }IV", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Period $=\\frac{360°}{6}=60°$.", working: "60°", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the period.", working: "60°", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\sin x=0.5$ at $x=30°$ and $x=150°$.", working: "30°,\\ 150°", marks: 1, markCode: "M" },
              { part: "d", reasoning: "List both solutions.", working: "30°\\text{ and }150°", marks: 1, markCode: "A" },
              { part: "e", reasoning: "$x=0$ would need division by zero; $y=0$ would need $\\frac{5}{x}=0$, impossible.", working: "\\text{asymptotes}", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Conclude the axes are asymptotes.", working: "\\text{never touches}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3 (b) II and IV (c) $60°$ (d) $30°,150°$ (e) axes are asymptotes — graph approaches but never touches",
            commonErrors: ["In (d), giving only 30° or including 390° outside the range."],
            examinerNote: "M1 for (a), A1 for (b), M1 A1 for (c), M1 A1 for (d), R1 A1 for (e).",
          },
        },
        {
          id: "mypme4-u2-graphs-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which point lies on the graph of $y=\\frac{6}{x}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(6,2)$" },
              { id: "b", text: "$(3,1)$" },
              { id: "c", text: "$(4,2)$" },
              { id: "d", text: "$(2,3)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reciprocal", statement: "Check $x\\cdot y=6$ for each point." },
            ],
            steps: [
              { reasoning: "$(2,3)$: $\\frac{6}{2}=3$ ✓; $(4,2)$: $\\frac{6}{4}=1.5\\ne2$; $(6,2)$: $1\\ne2$; $(3,1)$: $2\\ne1$.", working: "(2,3)", marks: 1, markCode: "M" },
              { reasoning: "Select the point that satisfies $y=\\frac{6}{x}$.", working: "(2,3)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $(2,3)$",
            commonErrors: ["Picking a point where $x+y=6$ instead of $xy=6$."],
            examinerNote: "M1 A1.",
          },
        },
      ],
    },
  ],
};
