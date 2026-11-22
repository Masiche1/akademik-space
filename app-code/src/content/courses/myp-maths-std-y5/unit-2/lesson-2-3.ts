import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mypms5-u2-lesson-2-3",
  code: "2-3",
  title: "Transformations and Exponential Functions",
  goal: "I CAN describe transformations of functions, work with exponential growth and decay models, and solve exponential equations.",
  standards: [
    "MYP Maths: Functions",
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Translation", definition: "A shift of a graph: $y=f(x)+k$ shifts up $k$; $y=f(x-h)$ shifts right $h$." },
    { term: "Reflection", definition: "$y=-f(x)$ reflects in the $x$-axis; $y=f(-x)$ reflects in the $y$-axis." },
    { term: "Stretch", definition: "$y=af(x)$ stretches vertically by factor $a$; $y=f(bx)$ horizontally by factor $\\frac{1}{b}$." },
    { term: "Exponential function", definition: "A function of the form $y=ab^x$ where $b>0$, $b\\ne1$; models growth ($b>1$) or decay ($0<b<1$)." },
    { term: "Half-life", definition: "The time for a quantity to halve; related to decay factor by $b^{\\text{half-life}}=0.5$." },
  ],
  concepts: [
    {
      id: "mypms5-u2-transforms",
      title: "Transformations of functions",
      skill: "Describe and apply translations, reflections and stretches to function graphs.",
      lesson: {
        sections: [
          {
            heading: "Translations",
            body: "$y=f(x)+k$: vertical shift by $k$ (up if positive). $y=f(x-h)$: horizontal shift by $h$ (right if positive). Order matters: apply inside changes first when reading right-to-left, but describe the net effect.",
          },
          {
            heading: "Reflections and stretches",
            body: "$y=-f(x)$: reflect in $x$-axis. $y=f(-x)$: reflect in $y$-axis. $y=af(x)$: vertical stretch by $|a|$ (also reflection if $a<0$). $y=f(bx)$: horizontal stretch by $\\frac{1}{b}$.",
          },
          {
            heading: "Combined transformations",
            body: "For $y=a f(b(x-h))+k$: horizontal stretch $\\frac{1}{b}$, translation $(h,k)$, vertical stretch $a$. Work through systematically: inside-out for the argument, then vertical.",
          },
        ],
        keyFormulas: [
          { name: "Vertical shift", statement: "$y=f(x)+k$" },
          { name: "Horizontal shift", statement: "$y=f(x-h)$" },
          { name: "General form", statement: "$y=a f(b(x-h))+k$" },
        ],
        workedExample: {
          problem: "Describe the transformation from $y=x^2$ to $y=2(x-3)^2+1$.",
          solution: "Horizontal translation 3 right, vertical stretch factor 2, vertical translation 1 up. Vertex moves from $(0,0)$ to $(3,1)$.",
        },
      },
      questions: [
        {
          id: "mypms5-u2-trans-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The graph of $y=x^2$ is translated 4 units up. What is the new equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=4x^2$" },
              { id: "b", text: "$y=x^2-4$" },
              { id: "c", text: "$y=x^2+4$" },
              { id: "d", text: "$y=(x+4)^2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Translation", statement: "$y=f(x)+k$ shifts up $k$ units." },
            ],
            steps: [
              { reasoning: "Up 4 → add 4: $y=x^2+4$.", working: "y=x^2+4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $y=x^2+4$",
            commonErrors: ["Confusing vertical translation with horizontal."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms5-u2-trans-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The point $(2,5)$ lies on $y=f(x)$. Where does it move on $y=f(x-3)+2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(5,7)$" },
              { id: "b", text: "$(2,7)$" },
              { id: "c", text: "$(5,3)$" },
              { id: "d", text: "$(0,7)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Point transformation", statement: "$f(x-3)$: $x\\to x+3$; $+2$: $y\\to y+2$." },
            ],
            steps: [
              { reasoning: "$(2,5)\\to(2+3,5+2)=(5,7)$.", working: "(5,7)", marks: 1, markCode: "M" },
              { reasoning: "State the new point.", working: "(5,7)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(5,7)$",
            commonErrors: ["Shifting left instead of right for $f(x-3)$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u2-trans-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The graph of $y=\\sqrt{x}$ is transformed to $y=3\\sqrt{x-4}-1$. Describe all transformations.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translation 4 left, vertical stretch factor 3, translation 1 up" },
              { id: "b", text: "Translation 4 right, vertical stretch factor 3, translation 1 down" },
              { id: "c", text: "Translation 4 right, vertical stretch factor $\\frac{1}{3}$, translation 1 down" },
              { id: "d", text: "Reflection in $x$-axis, translation 4 right, stretch 3" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Transformation order", statement: "Read inside-out: $x-4$ → right 4; $3\\times$ → stretch 3; $-1$ → down 1." },
            ],
            steps: [
              { reasoning: "$\\sqrt{x-4}$: right 4; $3\\sqrt{x-4}$: vertical stretch 3; $-1$: down 1.", working: "\\text{right 4, stretch 3, down 1}", marks: 1, markCode: "M" },
              { reasoning: "State all three transformations.", working: "\\text{transformed}", marks: 1, markCode: "M" },
              { reasoning: "Confirm no reflection (coefficient positive).", working: "\\text{no reflection}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Right 4, vertical stretch 3, down 1",
            commonErrors: ["Describing $3\\sqrt{x-4}$ as horizontal stretch."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u2-trans-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The graph of $y=f(x)$ passes through $(1,2)$, $(3,5)$, and $(5,3)$.",
          parts: [
            { label: "a", prompt: "Find the image of $(3,5)$ under $y=f(x)+4$.", marks: 1 },
            { label: "b", prompt: "Find the image of $(3,5)$ under $y=f(x-2)$.", marks: 1 },
            { label: "c", prompt: "Find the image of $(3,5)$ under $y=-f(x)$.", marks: 1 },
            { label: "d", prompt: "The graph is transformed by $y=2f(x-1)+3$. Find the images of all three original points.", marks: 3 },
            { label: "e", prompt: "State the domain restriction if $f(x)=\\sqrt{x-1}$ for the transformed graph.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Point mapping", statement: "Apply transformations to coordinates directly." },
            ],
            steps: [
              { part: "a", reasoning: "$y+4$: $(3,5)\\to(3,9)$.", working: "(3,9)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$x-2$: $(3,5)\\to(5,5)$.", working: "(5,5)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$-f(x)$: $(3,5)\\to(3,-5)$.", working: "(3,-5)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$y=2f(x-1)+3$: $(x,y)\\to(x+1,2y+3)$. $(1,2)\\to(2,7)$; $(3,5)\\to(4,13)$; $(5,3)\\to(6,9)$.", working: "(2,7),(4,13),(6,9)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Apply mapping to each point.", working: "(2,7),(4,13),(6,9)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State all three images.", working: "(2,7),(4,13),(6,9)", marks: 1, markCode: "A" },
              { part: "e", reasoning: "$f(x)=\\sqrt{x-1}$ needs $x\\ge1$; for $y=2f(x-1)+3$ need $x-1\\ge1$ → $x\\ge2$.", working: "x\\ge2", marks: 1, markCode: "M" },
              { part: "e", reasoning: "State the domain.", working: "x\\ge2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(3,9)$ (b) $(5,5)$ (c) $(3,-5)$ (d) $(2,7),(4,13),(6,9)$ (e) $x\\ge2$",
            commonErrors: ["In (d), applying $x-1$ as $x+1$ — $f(x-1)$ shifts right."],
            examinerNote: "A1 for (a)-(c); M1 M1 A1 for (d); M1 A1 for (e).",
          },
        },
        {
          id: "mypms5-u2-trans-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The graph of $y=x^2$ is translated 3 units left. What is the new equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=(x-3)^2$" },
              { id: "b", text: "$y=x^2+3$" },
              { id: "c", text: "$y=x^2-3$" },
              { id: "d", text: "$y=(x+3)^2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Translation", statement: "Left 3 means replace $x$ by $x+3$." }],
            steps: [{ reasoning: "$y=(x+3)^2$.", working: "y=(x+3)^2", marks: 1, markCode: "B" }],
            finalAnswer: "$y=(x+3)^2$",
          },
        },
        {
          id: "mypms5-u2-trans-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The point $(2,5)$ lies on $y=f(x)$. Under $y=f(x)+3$, what is the new $y$-coordinate?",
          response: { type: "numeric", parts: [{ label: "$y$", answer: 8 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Vertical shift", statement: "$+3$ adds 3 to every output." }],
            steps: [{ reasoning: "$5+3=8$.", working: "8", marks: 1, markCode: "B" }],
            finalAnswer: "$8$",
          },
        },
        {
          id: "mypms5-u2-trans-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What transformation maps $y=x^2$ to $y=-x^2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translation 1 unit down" },
              { id: "b", text: "Vertical stretch factor $-1$ only" },
              { id: "c", text: "Reflection in the $x$-axis" },
              { id: "d", text: "Reflection in the $y$-axis" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Reflection", statement: "$y=-f(x)$ reflects in the $x$-axis." }],
            steps: [
              { reasoning: "Outputs change sign.", working: "y\\to-y", marks: 1, markCode: "M" },
              { reasoning: "State the reflection.", working: "x\\text{-axis}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection in the $x$-axis",
          },
        },
        {
          id: "mypms5-u2-trans-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The point $(3,4)$ lies on $y=f(x)$. Under $y=f(2x)$, what is the new $x$-coordinate?",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 1.5 }] },
          markscheme: {
            principles: [{ kind: "property", name: "Horizontal stretch", statement: "$f(2x)$ compresses horizontally by factor $\\frac12$, so $x\\to\\frac{x}{2}$." }],
            steps: [
              { reasoning: "New $x=\\frac{3}{2}$.", working: "1.5", marks: 1, markCode: "M" },
              { reasoning: "State the coordinate.", working: "1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.5$",
          },
        },
        {
          id: "mypms5-u2-trans-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $y=(x-2)^2+5$, find the $x$-coordinate of the vertex.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "property", name: "Vertex form", statement: "$y=(x-h)^2+k$ has vertex $(h,k)$." }],
            steps: [
              { reasoning: "Here $h=2$.", working: "h=2", marks: 1, markCode: "M" },
              { reasoning: "State the $x$-coordinate.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "mypms5-u2-trans-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which equation represents a vertical stretch of $y=f(x)$ by factor 3?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=f(3x)$" },
              { id: "b", text: "$y=3f(x)$" },
              { id: "c", text: "$y=f(x)+3$" },
              { id: "d", text: "$y=3f(x-3)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Stretch", statement: "Multiply outputs by 3 for vertical stretch." }],
            steps: [
              { reasoning: "Vertical stretch multiplies $f(x)$ by 3.", working: "3f(x)", marks: 1, markCode: "M" },
              { reasoning: "Check that $f(3x)$ would be horizontal.", working: "f(3x)\\text{ horizontal}", marks: 1, markCode: "M" },
              { reasoning: "State the equation.", working: "y=3f(x)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=3f(x)$",
          },
        },
        {
          id: "mypms5-u2-trans-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "If $f(x)=x^2$, find the value of the transformed function $y=f(x-1)-2$ at $x=3$.",
          response: { type: "numeric", parts: [{ label: "$y$", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Composite transformation", statement: "Evaluate inside first, then apply vertical shift." }],
            steps: [
              { reasoning: "Inside: $x-1=2$, so $f(2)=4$.", working: "f(2)=4", marks: 1, markCode: "M" },
              { reasoning: "Subtract 2: $4-2=2$.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "mypms5-u2-trans-q12",
          difficulty: "core",
          totalMarks: 5,
          stem: "Map points under transformations.",
          parts: [
            { label: "a", prompt: "Under $y=f(x)+2$, where does $(1,4)$ go?", marks: 1 },
            { label: "b", prompt: "Under $y=f(x+3)$, where does $(1,4)$ go?", marks: 1 },
            { label: "c", prompt: "Under $y=-f(x)$, where does $(1,4)$ go?", marks: 1 },
            { label: "d", prompt: "Under $y=2f(x-1)+1$, where does $(1,4)$ go?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Point mapping", statement: "Apply each transformation to the coordinates." }],
            steps: [
              { part: "a", reasoning: "$(1,4)\\to(1,6)$.", working: "(1,6)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$x+3$ shifts left 3: $(1,4)\\to(-2,4)$.", working: "(-2,4)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Reflect output: $(1,4)\\to(1,-4)$.", working: "(1,-4)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$x-1$ shifts right 1: $(2,4)$; then $2(4)+1=9$: $(2,9)$.", working: "(2,9)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the image.", working: "(2,9)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(1,6)$ (b) $(-2,4)$ (c) $(1,-4)$ (d) $(2,9)$",
          },
        },
        {
          id: "mypms5-u2-trans-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Under $y=-f(x-3)+2$, the point $(4,-1)$ on $y=f(x)$ maps to what $y$-coordinate?",
          response: { type: "numeric", parts: [{ label: "$y$", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Point mapping", statement: "New $y=-(-1)+2=3$." }],
            steps: [{ reasoning: "Compute $-f(x-3)+2$ at the image: $-(-1)+2=3$.", working: "3", marks: 1, markCode: "B" }],
            finalAnswer: "$3$",
          },
        },
        {
          id: "mypms5-u2-trans-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "What horizontal stretch is produced by $y=f(2x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Factor 2" },
              { id: "b", text: "Translation 2 units right" },
              { id: "c", text: "Factor $\\frac12$" },
              { id: "d", text: "Reflection in the $y$-axis" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Horizontal stretch", statement: "$f(bx)$ stretches horizontally by factor $\\frac1b$." }],
            steps: [
              { reasoning: "With $b=2$, factor is $\\frac12$.", working: "\\frac12", marks: 1, markCode: "M" },
              { reasoning: "State the stretch.", working: "\\frac12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Factor $\\frac12$",
          },
        },
        {
          id: "mypms5-u2-trans-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $y=2f(x)+1$, an output of $f(x)=5$ becomes what value?",
          response: { type: "numeric", parts: [{ label: "$y$", answer: 11 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Vertical transformation", statement: "Apply stretch then translation: $2(5)+1$." }],
            steps: [
              { reasoning: "$2\\times5+1=11$.", working: "11", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11$",
          },
        },
        {
          id: "mypms5-u2-trans-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe the full transformation from $y=f(x)$ to $y=3f(x-2)-1$, stating the effect on a point $(a,b)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "General transformation", statement: "$y=af(x-h)+k$ maps $(a,b)\\to(a+h,ab+k)$." }],
            steps: [
              { reasoning: "Horizontal shift: $x-2$ moves right 2, so $a\\to a+2$.", working: "a+2", marks: 1, markCode: "M" },
              { reasoning: "Vertical stretch by 3 and shift down 1: $b\\to3b-1$.", working: "3b-1", marks: 1, markCode: "M" },
              { reasoning: "State the image $(a+2,3b-1)$.", working: "(a+2,3b-1)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(a,b)\\to(a+2,3b-1)$",
          },
        },
      ],
    },
    {
      id: "mypms5-u2-exponential",
      title: "Exponential Growth and Decay",
      skill: "Model growth and decay with exponential functions, solve exponential equations, and interpret real-world data.",
      lesson: {
        sections: [
          {
            heading: "Growth and decay models",
            body: "$y=ab^x$: $a$ = initial value, $b$ = growth/decay factor per unit. Growth ($b>1$): population, compound interest. Decay ($0<b<1$): radioactive decay, depreciation. Compound interest: $A=P(1+r)^t$.",
          },
          {
            heading: "Half-life and doubling time",
            body: "**Half-life** $T$: time for quantity to halve. **Doubling time**: time to double. Both satisfy $b^T=0.5$ (decay) or $b^T=2$ (growth). For radioactive decay, half-life is constant.",
          },
          {
            heading: "Solving exponential equations",
            body: "For $a\\cdot b^x=c$: isolate $b^x=\\frac{c}{a}$, then $x=\\frac{\\ln(c/a)}{\\ln b}$ or use logarithms. For simple cases where both sides are powers of same base, equate exponents.",
          },
        ],
        keyFormulas: [
          { name: "Exponential model", statement: "$y=ab^x$" },
          { name: "Compound interest", statement: "$A=P(1+r)^t$" },
          { name: "Half-life", statement: "$b^{T}=0.5$" },
        ],
        workedExample: {
          problem: "A population of 500 grows at 3% per year. Find the population after 10 years.",
          solution: "$P=500(1.03)^{10}=500(1.3439)=671.9$ — approximately 672.",
        },
      },
      questions: [
        {
          id: "mypms5-u2-exp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A quantity doubles every 5 years. What is the annual growth factor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "$2^5=32$" },
              { id: "c", text: "1.5" },
              { id: "d", text: "$2^{0.2}\\approx1.149$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Growth factor", statement: "Doubling every 5 years → $b^5=2$ → $b=2^{0.2}\\approx1.149$." },
            ],
            steps: [
              { reasoning: "$b^5=2$ → $b=2^{1/5}=2^{0.2}\\approx1.149$.", working: "2^{0.2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2^{0.2}\\approx1.149$",
            commonErrors: ["Using 2 directly as the annual factor."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms5-u2-exp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car worth 25000 depreciates at 15% per year. Find its value after 3 years.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\approx11250$" },
              { id: "b", text: "$\\approx18200$" },
              { id: "c", text: "$\\approx15360$" },
              { id: "d", text: "$\\approx21000$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Depreciation", statement: "$V=25000(0.85)^3=25000(0.614125)=15353$ — closest to (a)." },
            ],
            steps: [
              { reasoning: "$V=25000(0.85)^3=25000(0.614125)\\approx15353$.", working: "15353", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "15353", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx15360$",
            commonErrors: ["Subtracting 15% three times linearly instead of compounding."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u2-exp-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $3\\times2^x=48$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=4$" },
              { id: "b", text: "$x=3$" },
              { id: "c", text: "$x=\\frac{48}{6}=8$" },
              { id: "d", text: "$x=16$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Isolate and equate", statement: "$2^x=16=2^4$ → $x=4$." },
            ],
            steps: [
              { reasoning: "$2^x=\\frac{48}{3}=16$.", working: "2^x=16", marks: 1, markCode: "M" },
              { reasoning: "$16=2^4$ → $x=4$.", working: "x=4", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4$",
            commonErrors: ["Dividing 48 by 3 to get 16 then stopping."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u2-exp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A radioactive isotope has half-life 8 days. Initial mass is 80 g.",
          parts: [
            { label: "a", prompt: "Write the decay model $M(t)$.", marks: 2 },
            { label: "b", prompt: "Find the mass after 20 days.", marks: 2 },
            { label: "c", prompt: "When will the mass be 10 g?", marks: 3 },
            { label: "d", prompt: "How many days until the mass is less than 1 g?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Decay model", statement: "$M(t)=M_0\\left(\\frac{1}{2}\\right)^{t/T}$ with $T=8$." },
            ],
            steps: [
              { part: "a", reasoning: "$M(t)=80\\left(\\frac{1}{2}\\right)^{t/8}$ or $80(0.5)^{t/8}$.", working: "M(t)=80(0.5)^{t/8}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the model.", working: "80(0.5)^{t/8}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$M(20)=80(0.5)^{20/8}=80(0.5)^{2.5}=80(0.1768)=14.14$ g.", working: "14.14\\text{ g}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the mass.", working: "14.14\\text{ g}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$80(0.5)^{t/8}=10$ → $(0.5)^{t/8}=0.125=0.5^3$ → $\\frac{t}{8}=3$ → $t=24$ days.", working: "t=24", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Equate exponents: $\\frac{t}{8}=3$.", working: "t/8=3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the time.", working: "t=24\\text{ days}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$80(0.5)^{t/8}<1$ → $(0.5)^{t/8}<0.0125$ → $\\frac{t}{8}>\\frac{\\ln0.0125}{\\ln0.5}\\approx6.32$ → $t>50.6$ days; after 51 days (or 'more than 50 days').", working: "t>50.6", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) $M(t)=80(0.5)^{t/8}$ (b) 14.14 g (c) 24 days (d) after ~51 days",
            commonErrors: ["In (c), solving $t=24$ but forgetting it means 3 half-lives."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 M1 A1 for (c), M1 for (d).",
          },
        },
        {
          id: "mypms5-u2-exp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A quantity grows by 8% each year. What is the annual growth factor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0.08" },
              { id: "b", text: "8" },
              { id: "c", text: "1.08" },
              { id: "d", text: "1.8" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Growth factor", statement: "$1+0.08=1.08$." }],
            steps: [{ reasoning: "Add the rate to 1.", working: "1.08", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 1.08",
          },
        },
        {
          id: "mypms5-u2-exp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A quantity decreases by 20% each year. What is the decay factor?",
          response: { type: "numeric", parts: [{ label: "factor", answer: 0.8 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Decay factor", statement: "$1-0.20=0.80$." }],
            steps: [{ reasoning: "Subtract the rate from 1.", working: "0.8", marks: 1, markCode: "B" }],
            finalAnswer: "$0.8$",
          },
        },
        {
          id: "mypms5-u2-exp-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $y=5(2)^x$, what is the initial value when $x=0$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "5" },
              { id: "c", text: "0" },
              { id: "d", text: "10" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Exponential model", statement: "$y=ab^x$ has initial value $a$." }],
            steps: [
              { reasoning: "Set $x=0$: $y=5(2)^0=5$.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "State the initial value.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "mypms5-u2-exp-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the value of 1000 after 3 years at 5% compound interest per year.",
          response: { type: "numeric", parts: [{ label: "$A$", answer: 1157.625 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Compound interest", statement: "$A=P(1+r)^t=1000(1.05)^3$." }],
            steps: [
              { reasoning: "$1.05^3=1.157625$.", working: "1.157625", marks: 1, markCode: "M" },
              { reasoning: "$A=1157.625$.", working: "1157.625", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1157.625$",
          },
        },
        {
          id: "mypms5-u2-exp-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $5^x=125$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Same base", statement: "$125=5^3$, so $x=3$." }],
            steps: [
              { reasoning: "Equate exponents.", working: "x=3", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$",
          },
        },
        {
          id: "mypms5-u2-exp-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which model represents decay with half-life 10 days and initial mass 80 g?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$M(t)=80(2)^{t/10}$" },
              { id: "b", text: "$M(t)=80\\left(\\frac12\\right)^{t/10}$" },
              { id: "c", text: "$M(t)=10(\\frac12)^{t/80}$" },
              { id: "d", text: "$M(t)=80(\\frac12)^{10t}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Half-life", statement: "$M(t)=M_0(\\frac12)^{t/T}$." }],
            steps: [
              { reasoning: "Use $M_0=80$ and $T=10$.", working: "80(1/2)^{t/10}", marks: 1, markCode: "M" },
              { reasoning: "Check exponent uses $t/10$, not $10t$.", working: "t/10", marks: 1, markCode: "M" },
              { reasoning: "State the model.", working: "80(1/2)^{t/10}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$M(t)=80\\left(\\frac12\\right)^{t/10}$",
          },
        },
        {
          id: "mypms5-u2-exp-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A quantity is multiplied by 1.1 each year. Find the doubling time in years.",
          response: { type: "numeric", parts: [{ label: "$t$", answer: 7.27, tolerance: 0.01, unit: "years" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Doubling time", statement: "Solve $1.1^t=2$ using logarithms." }],
            steps: [
              { reasoning: "$t=\\frac{\\ln2}{\\ln1.1}$.", working: "t=\\frac{\\ln2}{\\ln1.1}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $t\\approx7.27$ years.", working: "7.27", marks: 1, markCode: "M" },
              { reasoning: "State the time.", working: "7.27", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx7.27$ years",
          },
        },
        {
          id: "mypms5-u2-exp-q12",
          difficulty: "core",
          totalMarks: 5,
          stem: "Model growth and decay.",
          parts: [
            { label: "a", prompt: "A population of 200 grows by 4% yearly. Write the model.", marks: 1 },
            { label: "b", prompt: "Find the population after 2 years.", marks: 2 },
            { label: "c", prompt: "A phone worth 800 depreciates by 15% yearly. Find its value after 2 years.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Exponential model", statement: "$P=P_0(1+r)^t$ for growth; $V=V_0(1-r)^t$ for decay." }],
            steps: [
              { part: "a", reasoning: "$P(t)=200(1.04)^t$.", working: "200(1.04)^t", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P(2)=200(1.04)^2=200(1.0816)=216.32$.", working: "216.32", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the population.", working: "216.32", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$V=800(0.85)^2=800(0.7225)=578$.", working: "578", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the value.", working: "578", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $P=200(1.04)^t$ (b) 216.32 (c) 578",
          },
        },
        {
          id: "mypms5-u2-exp-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A car worth 20000 depreciates by 10% per year. Find its value after 2 years.",
          response: { type: "numeric", parts: [{ label: "$V$", answer: 16200 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Depreciation", statement: "$V=20000(0.9)^2=16200$." }],
            steps: [{ reasoning: "Compute $0.9^2=0.81$; $20000\\times0.81=16200$.", working: "16200", marks: 1, markCode: "B" }],
            finalAnswer: "$16200$",
          },
        },
        {
          id: "mypms5-u2-exp-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which feature describes the graph of exponential decay $y=50(0.8)^x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Linear" },
              { id: "b", text: "Positive and decreasing toward the $x$-axis" },
              { id: "c", text: "Positive and increasing without bound" },
              { id: "d", text: "Negative and decreasing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Decay graph", statement: "Base between 0 and 1 gives decrease; outputs stay positive." }],
            steps: [
              { reasoning: "Since $0<0.8<1$, values decrease.", working: "decreasing", marks: 1, markCode: "M" },
              { reasoning: "Outputs remain positive and approach 0.", working: "positive", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Positive and decreasing",
          },
        },
        {
          id: "mypms5-u2-exp-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $3\\times2^x=96$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Isolate and equate", statement: "$2^x=32=2^5$." }],
            steps: [
              { reasoning: "$2^x=32$.", working: "2^x=32", marks: 1, markCode: "M" },
              { reasoning: "$x=5$.", working: "x=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=5$",
          },
        },
        {
          id: "mypms5-u2-exp-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference between half-life and doubling time in exponential models, and how each is found from the growth/decay factor.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Half-life/doubling", statement: "Half-life uses factor $\\frac12$; doubling uses factor 2." }],
            steps: [
              { reasoning: "Half-life $T$ satisfies $b^T=\\frac12$ for decay.", working: "b^T=1/2", marks: 1, markCode: "M" },
              { reasoning: "Doubling time $T$ satisfies $b^T=2$ for growth.", working: "b^T=2", marks: 1, markCode: "M" },
              { reasoning: "State the distinction clearly.", working: "\\text{half vs double}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Half-life halves; doubling time doubles",
          },
        },
      ],
    },
  ],
};
