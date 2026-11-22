import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "aasl-u5-lesson-5-3",
  code: "5-3",
  title: "Optimization and Kinematics",
  goal: "I CAN build a function to model a situation, find its maximum or minimum, and use derivatives to analyse displacement, velocity and acceleration.",
  standards: ["SL 5.8", "SL 5.9"],
  vocabulary: [
    { term: "Optimization", definition: "Finding the greatest or least value of a quantity, usually by setting a derivative equal to zero." },
    { term: "Constraint", definition: "A given condition (such as a fixed volume or perimeter) used to eliminate one variable from the quantity being optimized." },
    { term: "Displacement", definition: "The signed position $s(t)$ of a particle relative to a fixed origin on a line." },
    { term: "Velocity", definition: "The rate of change of displacement, $v=\\dfrac{ds}{dt}$." },
    { term: "Acceleration", definition: "The rate of change of velocity, $a=\\dfrac{dv}{dt}=\\dfrac{d^2s}{dt^2}$." },
    { term: "Speed", definition: "The magnitude of velocity, $|v|$." },
  ],
  concepts: [
    {
      id: "aasl-u5-optimization",
      title: "Optimization",
      skill: "Form a function of one variable from a context, differentiate, and justify a maximum or minimum.",
      lesson: {
        sections: [
          {
            heading: "Setting up the model",
            body: "Name the quantity to optimize (area, volume, cost, surface area). If it depends on two variables, use the constraint to write one variable in terms of the other, giving a function of a single variable with a sensible domain. Always state what the variables represent.",
          },
          {
            heading: "Solving and justifying",
            body: "Differentiate and solve $\\dfrac{dQ}{dx}=0$. Reject solutions outside the domain. Justify the type of the stationary point with the second derivative ($>0$ gives a minimum, $<0$ a maximum) or the sign of the first derivative either side. Finally answer the question that was asked: this may be the optimal value, not the variable value at which it occurs.",
          },
        ],
        keyFormulas: [
          { name: "Stationary condition", statement: "$\\dfrac{dQ}{dx}=0$" },
          { name: "Cylinder", statement: "$V=\\pi r^2h$, open-topped surface area $S=\\pi r^2+2\\pi rh$" },
        ],
        workedExample: {
          problem: "Two numbers have sum $10$. Find the maximum value of their product.",
          solution: "Let the numbers be $x$ and $10-x$. $P=10x-x^2$, $P'=10-2x=0$ gives $x=5$, and $P''=-2<0$ so $P$ is a maximum. $P_{\\max}=25$.",
        },
      },
      questions: [
        {
          id: "aasl-u5-optimization-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The area of a rectangle is modelled by $A(x)=10x-x^2$ for $0<x<10$. For which value of $x$ is the area greatest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=10$" },
              { id: "b", text: "$x=0$" },
              { id: "c", text: "$x=5$" },
              { id: "d", text: "$x=25$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Optimization", statement: "A maximum occurs where $A'(x)=0$ and $A''(x)<0$." },
            ],
            steps: [
              { reasoning: "Differentiate and set equal to zero.", working: "A'(x)=10-2x=0", marks: 1, markCode: "M" },
              { reasoning: "Solve; $A''=-2<0$ confirms a maximum.", working: "x=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x=5$",
            commonErrors: ["Choosing $x=25$, the maximum value of $A$ rather than the value of $x$."],
          },
        },
        {
          id: "aasl-u5-optimization-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A farmer has $40$ m of fencing to make a rectangular pen. The pen has width $x$ m.\n\nShow that the area is $A=20x-x^2$ and find the maximum possible area.",
          response: {
            type: "numeric",
            parts: [
              { label: "Maximum area (m$^2$)", answer: 100 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Optimization", statement: "Maximise $A(x)$ by solving $A'(x)=0$." },
            ],
            steps: [
              { reasoning: "The perimeter is $40$, so the length is $20-x$. Hence $A=x(20-x)=20x-x^2$ (AG).", working: "A=20x-x^2", marks: 1, markCode: "M" },
              { reasoning: "Differentiate and set to zero.", working: "A'=20-2x=0\\Rightarrow x=10", marks: 1, markCode: "A" },
              { reasoning: "Substitute back; $A''=-2<0$ so this is a maximum.", working: "A=20(10)-100=100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Maximum area $=100\\ \\text{m}^2$ (a $10$ m by $10$ m square)",
            commonErrors: ["Using the perimeter as $x+(20-x)$, forgetting that the perimeter contains two lengths and two widths."],
          },
        },
        {
          id: "aasl-u5-optimization-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "An open cylindrical container (no lid) has volume $500$ cm$^3$. Its base has radius $r$ cm and height $h$ cm.\n\nThe surface area is $S=\\pi r^2+2\\pi rh$. Find the value of $r$ that minimises $S$ and the minimum surface area. Give both answers to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$r$ (cm)", answer: 5.42, tolerance: 0.005 },
              { label: "Minimum surface area (cm$^2$)", answer: 277, tolerance: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cylinder", statement: "$V=\\pi r^2h=500$, so $h=\\dfrac{500}{\\pi r^2}$." },
              { kind: "principle", name: "Optimization", statement: "A minimum occurs where $S'(r)=0$ and $S''(r)>0$." },
            ],
            steps: [
              { reasoning: "Eliminate $h$ using the volume constraint.", working: "S=\\pi r^2+\\frac{1000}{r}", marks: 1, markCode: "M" },
              { reasoning: "Differentiate.", working: "S'=2\\pi r-\\frac{1000}{r^2}", marks: 1, markCode: "A" },
              { reasoning: "Set $S'=0$.", working: "r^3=\\frac{500}{\\pi}\\Rightarrow r=5.42", marks: 1, markCode: "A" },
              { reasoning: "$S''=2\\pi+\\frac{2000}{r^3}>0$, so this is a minimum.", marks: 1, markCode: "R" },
              { reasoning: "Evaluate the surface area.", working: "S=\\pi(5.419)^2+\\frac{1000}{5.419}=92.3+184.5\\approx277", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$r\\approx5.42$ cm; minimum $S\\approx277$ cm$^2$",
            commonErrors: ["Including a top face in the surface area.", "Using the rounded value of $r$ to find $S$ but then losing accuracy (use the unrounded value)."],
          },
        },
        {
          id: "aasl-u5-optimization-q4",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 10,
          stem: "An open-topped box has a square base of side $x$ cm and height $h$ cm. The volume of the box is $32$ cm$^3$.",
          parts: [
            { label: "a", prompt: "Show that the surface area of the box, $S$ cm$^2$, is given by $S=x^2+\\dfrac{128}{x}$.", marks: 2 },
            { label: "b", prompt: "Find $\\dfrac{dS}{dx}$ and hence find the value of $x$ for which $S$ is stationary.", marks: 3 },
            { label: "c", prompt: "Use the second derivative to justify that this value of $x$ gives the minimum surface area.", marks: 2 },
            { label: "d", prompt: "Find the minimum surface area.", marks: 1 },
            { label: "e", prompt: "Find the height of the box with minimum surface area, and the exact value of $\\dfrac{d^2S}{dx^2}$ at that stationary point.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) $x$", answer: 4 },
              { label: "(d) Minimum surface area (cm$^2$)", answer: 48 },
              { label: "(e) Height (cm)", answer: 2 },
              { label: "(e) $S''$ at the stationary point", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume and surface area", statement: "$V=x^2h=32$; surface area $=x^2+4xh$ (base and four sides)." },
              { kind: "principle", name: "Optimization", statement: "Minimum where $S'=0$ and $S''>0$." },
            ],
            steps: [
              { part: "a", reasoning: "From the volume, $h=\\dfrac{32}{x^2}$.", working: "h=\\frac{32}{x^2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Substitute into $S=x^2+4xh$ (AG).", working: "S=x^2+4x\\cdot\\frac{32}{x^2}=x^2+\\frac{128}{x}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Write $\\frac{128}{x}=128x^{-1}$ and differentiate.", working: "\\frac{dS}{dx}=2x-\\frac{128}{x^2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set the derivative to zero.", working: "2x^3=128\\Rightarrow x^3=64", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Take the cube root.", working: "x=4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Second derivative.", working: "\\frac{d^2S}{dx^2}=2+\\frac{256}{x^3}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "It is positive for $x>0$, so the stationary point is a minimum.", working: "S''(4)=2+4=6>0", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Substitute $x=4$.", working: "S=16+32=48", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Height from the volume constraint.", working: "h=\\frac{32}{16}=2", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Value of the second derivative already found.", working: "S''(4)=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) shown (b) $x=4$ (c) $S''(4)=6>0$ (d) $48$ cm$^2$ (e) $h=2$ cm, $S''=6$",
            commonErrors: ["Using four sides plus top and bottom (the box is open).", "Solving $x^3=64$ as $x=8$."],
          },
        },
        {
          id: "aasl-u5-optimization-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Two positive numbers have sum $12$. For which value of $x$ is their product $x(12-x)$ greatest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=6$" },
              { id: "b", text: "$x=4$" },
              { id: "c", text: "$x=36$" },
              { id: "d", text: "$x=12$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Optimization", statement: "A maximum occurs where $P'(x)=0$ and $P''(x)<0$." },
            ],
            steps: [
              { reasoning: "Differentiate $P(x)=12x-x^2$ and set to zero.", working: "P'(x)=12-2x=0", marks: 1, markCode: "M" },
              { reasoning: "Solve; $P''=-2<0$ confirms a maximum.", working: "x=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $x=6$",
            commonErrors: ["Choosing the maximum product value rather than the value of $x$."],
          },
        },
        {
          id: "aasl-u5-optimization-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A rectangle has perimeter $24$ m. What is the maximum possible area of the rectangle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$ m$^2$" },
              { id: "b", text: "$48$ m$^2$" },
              { id: "c", text: "$36$ m$^2$" },
              { id: "d", text: "$24$ m$^2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Optimization", statement: "For fixed perimeter the area is maximised when the rectangle is a square." },
            ],
            steps: [
              { reasoning: "With width $x$, length is $12-x$, so $A=x(12-x)=12x-x^2$.", working: "A=12x-x^2", marks: 1, markCode: "M" },
              { reasoning: "$A'=12-2x=0$ gives $x=6$, so $A_{\\max}=6\\times6=36$.", working: "A_{\\max}=36", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $36$ m$^2$",
            commonErrors: ["Using the full perimeter $24$ as the length."],
          },
        },
        {
          id: "aasl-u5-optimization-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An open cylindrical tin (no lid) has a fixed volume. For which relationship between its height $h$ and base radius $r$ is the surface area minimised?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$h=r$" },
              { id: "b", text: "$h=\\dfrac{r}{2}$" },
              { id: "c", text: "$h=2r$" },
              { id: "d", text: "$h=4r$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cylinder", statement: "$V=\\pi r^2h$ fixed; $S=\\pi r^2+2\\pi rh$ minimised." },
            ],
            steps: [
              { reasoning: "Eliminate $h=\\frac{V}{\\pi r^2}$ to get $S=\\pi r^2+\\frac{2V}{r}$.", working: "S=\\pi r^2+\\frac{2V}{r}", marks: 1, markCode: "M" },
              { reasoning: "$S'=2\\pi r-\\frac{2V}{r^2}=0$ gives $\\pi r^3=V$, and since $V=\\pi r^2h$ this means $h=2r$.", working: "h=2r", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $h=2r$",
            commonErrors: ["Including a top face in the surface area, which changes the ratio."],
          },
        },
        {
          id: "aasl-u5-optimization-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Two positive numbers have sum $14$. Find the maximum possible value of their product.",
          response: {
            type: "numeric",
            parts: [
              { label: "Maximum product", answer: 49 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Optimization", statement: "Maximise $P(x)=14x-x^2$ by solving $P'(x)=0$." },
            ],
            steps: [
              { reasoning: "Form the product function.", working: "P(x)=x(14-x)=14x-x^2", marks: 1, markCode: "M" },
              { reasoning: "Differentiate and solve.", working: "P'(x)=14-2x=0\\Rightarrow x=7", marks: 1, markCode: "A" },
              { reasoning: "Substitute back; $P''=-2<0$ so it is a maximum.", working: "P(7)=7\\times7=49", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Maximum product $=49$ (the numbers are $7$ and $7$)",
            commonErrors: ["Reporting $x=7$ instead of the product."],
          },
        },
        {
          id: "aasl-u5-optimization-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A rectangle has perimeter $20$ cm. Find the maximum possible area of the rectangle.",
          response: {
            type: "numeric",
            parts: [
              { label: "Maximum area (cm$^2$)", answer: 25 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Optimization", statement: "Maximise the area function of one variable." },
            ],
            steps: [
              { reasoning: "With width $x$ cm, the length is $(10-x)$ cm, so $A=x(10-x)$.", working: "A=10x-x^2", marks: 1, markCode: "M" },
              { reasoning: "Differentiate and solve.", working: "A'=10-2x=0\\Rightarrow x=5", marks: 1, markCode: "A" },
              { reasoning: "Substitute back; the rectangle is a $5$ cm square.", working: "A=5\\times5=25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Maximum area $=25$ cm$^2$",
            commonErrors: ["Using $20$ as the length instead of half the perimeter."],
          },
        },
        {
          id: "aasl-u5-optimization-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Two positive numbers have product $81$. Find the minimum possible value of their sum.",
          response: {
            type: "numeric",
            parts: [
              { label: "Minimum sum", answer: 18 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Optimization", statement: "A minimum occurs where $S'(x)=0$ and $S''(x)>0$." },
            ],
            steps: [
              { reasoning: "If the numbers are $x$ and $\\frac{81}{x}$, the sum is $S=x+\\frac{81}{x}$.", working: "S=x+81x^{-1}", marks: 1, markCode: "M" },
              { reasoning: "Differentiate and solve.", working: "S'=1-\\frac{81}{x^2}=0\\Rightarrow x=9", marks: 1, markCode: "A" },
              { reasoning: "Substitute; $S''=\\frac{162}{x^3}>0$ confirms a minimum.", working: "S=9+9=18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Minimum sum $=18$ (the numbers are $9$ and $9$)",
            commonErrors: ["Maximising instead of minimising, or reporting $x=9$ instead of the sum."],
          },
        },
        {
          id: "aasl-u5-optimization-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A rectangle has a fixed perimeter $P$. Explain, using differentiation, why the square gives the maximum area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Optimization", statement: "A maximum occurs where $A'(x)=0$ and $A''(x)<0$." },
            ],
            steps: [
              { reasoning: "Let the width be $x$; then the length is $\\frac P2-x$ and $A=x\\left(\\frac P2-x\\right)$.", working: "A=\\frac P2x-x^2", marks: 1, markCode: "M" },
              { reasoning: "Differentiate and solve.", working: "A'=\\frac P2-2x=0\\Rightarrow x=\\frac P4", marks: 1, markCode: "A" },
              { reasoning: "Since $x=\\frac P4$ equals half the semiperimeter, length equals width, so the rectangle is a square; $A''=-2<0$ confirms a maximum.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The stationary point is at $x=\\frac P4$, giving equal sides — a square — and $A''=-2<0$ so it is a maximum.",
            commonErrors: ["Using $P$ instead of $\\frac P2$ for the semiperimeter."],
          },
        },
        {
          id: "aasl-u5-optimization-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Let $f(x)=x+\\dfrac{9}{x}$ for $x>0$. Show that $f$ has a minimum value of $6$, and find the value of $x$ at which it occurs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Optimization", statement: "A minimum occurs where $f'(x)=0$ and $f''(x)>0$." },
            ],
            steps: [
              { reasoning: "Write $f(x)=x+9x^{-1}$ and differentiate.", working: "f'(x)=1-9x^{-2}", marks: 1, markCode: "M" },
              { reasoning: "Solve $f'(x)=0$.", working: "1-\\frac{9}{x^2}=0\\Rightarrow x=3\\ \\text{(taking }x>0\\text{)}", marks: 1, markCode: "A" },
              { reasoning: "Justify the minimum: $f''(x)=\\frac{18}{x^3}>0$ for $x>0$.", marks: 1, markCode: "A" },
              { reasoning: "Evaluate (AG).", working: "f(3)=3+3=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Minimum value $6$ at $x=3$",
            commonErrors: ["Accepting $x=-3$, which is outside the domain $x>0$."],
          },
        },
        {
          id: "aasl-u5-optimization-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A closed rectangular box has a square base of side $x$ cm and height $h$ cm. The volume of the box is $500$ cm$^3$.",
          parts: [
            { label: "a", prompt: "Show that the total surface area $S$ cm$^2$ is given by $S=2x^2+\\dfrac{2000}{x}$.", marks: 2 },
            { label: "b", prompt: "Find $\\dfrac{dS}{dx}$ and hence find the value of $x$ for which $S$ is stationary.", marks: 3 },
            { label: "c", prompt: "Use the second derivative to justify that this value of $x$ gives the minimum surface area.", marks: 2 },
            { label: "d", prompt: "Find the minimum surface area, giving your answer to 3 significant figures.", marks: 1 },
            { label: "e", prompt: "Find the height of the box with minimum surface area.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) $x$ (cm, 3 s.f.)", answer: 7.94, tolerance: 0.005 },
              { label: "(d) Minimum surface area (cm$^2$)", answer: 378, tolerance: 0.5 },
              { label: "(e) Height (cm, 3 s.f.)", answer: 7.94, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume and surface area", statement: "$V=x^2h=500$; closed box surface area $S=2x^2+4xh$." },
              { kind: "principle", name: "Optimization", statement: "Minimum where $S'=0$ and $S''>0$." },
            ],
            steps: [
              { part: "a", reasoning: "From the volume, $h=\\dfrac{500}{x^2}$.", working: "h=\\frac{500}{x^2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Substitute into $S=2x^2+4xh$ (AG).", working: "S=2x^2+4x\\cdot\\frac{500}{x^2}=2x^2+\\frac{2000}{x}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Write $\\frac{2000}{x}=2000x^{-1}$ and differentiate.", working: "\\frac{dS}{dx}=4x-\\frac{2000}{x^2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set the derivative to zero.", working: "4x^3=2000\\Rightarrow x^3=500", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Take the cube root.", working: "x=500^{1/3}=7.94", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Second derivative.", working: "\\frac{d^2S}{dx^2}=4+\\frac{4000}{x^3}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "It is positive for $x>0$, so the stationary point is a minimum.", working: "S''(7.94)>0", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute the unrounded value of $x$.", working: "S=2(63.0)+\\frac{2000}{7.94}\\approx126+252=378", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Use the volume constraint.", working: "h=\\frac{500}{x^2}", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Evaluate.", working: "h=\\frac{500}{63.0}\\approx7.94", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) shown (b) $x\\approx7.94$ cm (c) $S''>0$ so minimum (d) $378$ cm$^2$ (e) $h\\approx7.94$ cm",
            commonErrors: ["Using five faces (forgetting the box is closed needs six faces, i.e. two squares plus four rectangles).", "Using the rounded $x$ too early and losing accuracy."],
          },
        },
        {
          id: "aasl-u5-optimization-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "An open-topped box has a square base of side $x$ cm and height $h$ cm. Its volume is $108$ cm$^3$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Value of $x$ minimising the surface area (cm)", answer: 6 },
              { label: "Minimum surface area (cm$^2$)", answer: 108 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume and surface area", statement: "$x^2h=108$; open box surface area $S=x^2+4xh$." },
              { kind: "principle", name: "Optimization", statement: "Minimum where $S'=0$ and $S''>0$." },
            ],
            steps: [
              { reasoning: "Eliminate $h$: $h=\\frac{108}{x^2}$, so $S=x^2+\\frac{432}{x}$.", working: "S=x^2+432x^{-1}", marks: 1, markCode: "M" },
              { reasoning: "Differentiate and solve.", working: "S'=2x-\\frac{432}{x^2}=0\\Rightarrow x^3=216\\Rightarrow x=6", marks: 1, markCode: "A" },
              { reasoning: "Substitute; $S''=2+\\frac{864}{x^3}>0$ confirms a minimum.", working: "S=36+72=108", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=6$ cm; minimum surface area $108$ cm$^2$",
            commonErrors: ["Including a top face, giving $S=2x^2+4xh$."],
          },
        },
        {
          id: "aasl-u5-optimization-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The cost of producing $x$ units of a product is modelled by $C(x)=x^2-8x+20$. What is the minimum cost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$20$" },
              { id: "c", text: "$8$" },
              { id: "d", text: "$-4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Optimization", statement: "Minimum where $C'(x)=0$ and $C''(x)>0$." },
            ],
            steps: [
              { reasoning: "Differentiate and solve.", working: "C'(x)=2x-8=0\\Rightarrow x=4", marks: 1, markCode: "M" },
              { reasoning: "Substitute; $C''=2>0$ confirms a minimum.", working: "C(4)=16-32+20=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Minimum cost $=4$",
            commonErrors: ["Reporting $x=4$ (the minimising input) instead of the minimum cost."],
          },
        },
        {
          id: "aasl-u5-optimization-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A rectangle has area $36$ cm$^2$. Find the minimum possible value of its perimeter.",
          response: {
            type: "numeric",
            parts: [
              { label: "Minimum perimeter (cm)", answer: 24 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Optimization", statement: "A minimum occurs where $P'(x)=0$ and $P''(x)>0$." },
            ],
            steps: [
              { reasoning: "If the width is $x$, the length is $\\frac{36}{x}$ and $P=2x+\\frac{72}{x}$.", working: "P=2x+72x^{-1}", marks: 1, markCode: "M" },
              { reasoning: "Differentiate and solve.", working: "P'=2-\\frac{72}{x^2}=0\\Rightarrow x=6", marks: 1, markCode: "A" },
              { reasoning: "Substitute; the rectangle is a $6$ cm square.", working: "P=12+12=24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Minimum perimeter $=24$ cm",
            commonErrors: ["Maximising the perimeter instead of minimising it."],
          },
        },
      ],
    },
    {
      id: "aasl-u5-kinematics",
      title: "Displacement, velocity and acceleration",
      skill: "Differentiate displacement to find velocity and acceleration and interpret motion along a line.",
      lesson: {
        sections: [
          {
            heading: "Linking the functions",
            body: "For a particle moving along a line with displacement $s(t)$: $v=\\dfrac{ds}{dt}$ and $a=\\dfrac{dv}{dt}$. The particle is **at rest** when $v=0$; it **changes direction** when $v$ changes sign. Positive velocity means moving in the positive direction.",
          },
          {
            heading: "Speeding up and slowing down",
            body: "Speed is $|v|$. The particle is **speeding up** when $v$ and $a$ have the same sign and **slowing down** when they have opposite signs. Maximum or minimum velocity occurs when $a=0$ (check with the sign of $a$ or the second derivative of $v$). Distinguish displacement (a signed position) from total distance travelled, which needs the particle's turning points.",
          },
        ],
        keyFormulas: [
          { name: "Velocity", statement: "$v=\\dfrac{ds}{dt}$" },
          { name: "Acceleration", statement: "$a=\\dfrac{dv}{dt}=\\dfrac{d^2s}{dt^2}$" },
          { name: "Speeding up", statement: "$v\\,a>0$" },
        ],
        workedExample: {
          problem: "A particle has $s=t^3-3t$ metres at time $t$ seconds. Find its acceleration at $t=2$.",
          solution: "$v=3t^2-3$, $a=6t$. At $t=2$, $a=12\\ \\text{m s}^{-2}$.",
        },
      },
      questions: [
        {
          id: "aasl-u5-kinematics-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A particle moves along a straight line with displacement $s=2t^2+t$ metres at time $t$ seconds. Find its velocity when $t=3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$ m s$^{-1}$" },
              { id: "b", text: "$21$ m s$^{-1}$" },
              { id: "c", text: "$9$ m s$^{-1}$" },
              { id: "d", text: "$13$ m s$^{-1}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Velocity", statement: "$v=\\dfrac{ds}{dt}$" },
            ],
            steps: [
              { reasoning: "Differentiate the displacement.", working: "v=4t+1", marks: 1, markCode: "M" },
              { reasoning: "Substitute $t=3$.", working: "v=13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $13$ m s$^{-1}$",
            commonErrors: ["Substituting $t=3$ into $s$, giving the displacement $21$."],
          },
        },
        {
          id: "aasl-u5-kinematics-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A particle moves in a straight line with displacement $s=t^3-6t^2+9t$ metres at time $t\\ge0$ seconds.\n\nFind the two times at which the particle is at rest, and find the acceleration at the earlier of these times.",
          response: {
            type: "numeric",
            parts: [
              { label: "Earlier time (s)", answer: 1 },
              { label: "Later time (s)", answer: 3 },
              { label: "Acceleration at the earlier time (m s$^{-2}$)", answer: -6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "At rest", statement: "The particle is at rest when $v=0$." },
              { kind: "definition", name: "Acceleration", statement: "$a=\\dfrac{dv}{dt}$" },
            ],
            steps: [
              { reasoning: "Differentiate to get velocity.", working: "v=3t^2-12t+9", marks: 1, markCode: "A" },
              { reasoning: "Set $v=0$ and factorise.", working: "3(t-1)(t-3)=0", marks: 1, markCode: "M" },
              { reasoning: "Solve.", working: "t=1,\\ t=3", marks: 1, markCode: "A" },
              { reasoning: "Differentiate again and substitute $t=1$.", working: "a=6t-12\\Rightarrow a(1)=-6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "At rest at $t=1$ and $t=3$; $a(1)=-6$ m s$^{-2}$",
            commonErrors: ["Setting $s=0$ instead of $v=0$.", "Using the velocity formula to find acceleration."],
          },
        },
        {
          id: "aasl-u5-kinematics-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A particle moves in a straight line. Its displacement from the origin is $s=t\\,e^{-0.5t}$ metres, for $t\\ge0$ seconds.\n\nFind the time at which the particle is momentarily at rest, and its displacement at that time. Give the displacement to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Time at rest (s)", answer: 2 },
              { label: "Displacement at that time (m)", answer: 0.736, tolerance: 0.0005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product rule", statement: "$(uv)'=uv'+vu'$" },
              { kind: "definition", name: "At rest", statement: "$v=0$" },
            ],
            steps: [
              { reasoning: "Product rule with $u=t$, $v=e^{-0.5t}$.", working: "v=e^{-0.5t}-0.5te^{-0.5t}=e^{-0.5t}(1-0.5t)", marks: 2, markCode: "M" },
              { reasoning: "$e^{-0.5t}>0$, so $v=0$ only when $1-0.5t=0$.", working: "t=2", marks: 1, markCode: "A" },
              { reasoning: "Substitute into $s$.", working: "s(2)=2e^{-1}=0.736", marks: 1, markCode: "A" },
            ],
            finalAnswer: "At rest when $t=2$ s; $s=2e^{-1}\\approx0.736$ m",
            commonErrors: ["Forgetting the chain rule factor $-0.5$.", "Setting $e^{-0.5t}=0$, which has no solution."],
          },
        },
        {
          id: "aasl-u5-kinematics-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A particle moves along a straight line. Its displacement from a fixed point $O$ is $s=t^3-6t^2+9t$ metres at time $t\\ge0$ seconds.",
          parts: [
            { label: "a", prompt: "Find expressions for the velocity $v$ and the acceleration $a$ at time $t$.", marks: 2 },
            { label: "b", prompt: "Find the times at which the particle is at rest.", marks: 2 },
            { label: "c", prompt: "Find the displacement of the particle from $O$ at each of these times.", marks: 2 },
            { label: "d", prompt: "Find the minimum velocity of the particle, justifying that it is a minimum.", marks: 2 },
            { label: "e", prompt: "Determine the values of $t$ for which the speed of the particle is increasing.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Earlier time at rest (s)", answer: 1 },
              { label: "(b) Later time at rest (s)", answer: 3 },
              { label: "(c) Displacement at the earlier time (m)", answer: 4 },
              { label: "(c) Displacement at the later time (m)", answer: 0 },
              { label: "(d) Minimum velocity (m s$^{-1}$)", answer: -3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Kinematics", statement: "$v=\\dfrac{ds}{dt}$ and $a=\\dfrac{dv}{dt}$; the particle is at rest when $v=0$." },
              { kind: "principle", name: "Speeding up", statement: "Speed increases when $v$ and $a$ have the same sign." },
            ],
            steps: [
              { part: "a", reasoning: "Differentiate $s$, then $v$.", working: "v=3t^2-12t+9,\\quad a=6t-12", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Set $v=0$ and factorise.", working: "3(t-1)(t-3)=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve.", working: "t=1,\\ t=3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute into $s$.", working: "s(1)=1-6+9=4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Second time.", working: "s(3)=27-54+27=0", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Minimum velocity occurs where $a=0$; $\\frac{da}{dt}=6>0$ confirms a minimum.", working: "6t-12=0\\Rightarrow t=2", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Evaluate $v(2)$.", working: "v(2)=12-24+9=-3", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Sign table: $v<0$ and $a<0$ on $1<t<2$; $v>0$ and $a>0$ for $t>3$. On $0<t<1$ and $2<t<3$ the signs differ.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "State the intervals.", working: "1<t<2\\ \\text{and}\\ t>3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $v=3t^2-12t+9$, $a=6t-12$ (b) $t=1,3$ (c) $4$ m and $0$ m (d) $-3$ m s$^{-1}$ (e) $1<t<2$ and $t>3$",
            commonErrors: ["Stating speed increases whenever $a>0$ (ignoring the sign of $v$).", "Confusing minimum velocity with the time at which it occurs."],
          },
        },
        {
          id: "aasl-u5-kinematics-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A particle moves along a straight line with displacement $s=3t^2-t$ metres at time $t$ seconds. Find its velocity when $t=2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$11$ m s$^{-1}$" },
              { id: "b", text: "$23$ m s$^{-1}$" },
              { id: "c", text: "$10$ m s$^{-1}$" },
              { id: "d", text: "$5$ m s$^{-1}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Velocity", statement: "$v=\\dfrac{ds}{dt}$" },
            ],
            steps: [
              { reasoning: "Differentiate the displacement.", working: "v=6t-1", marks: 1, markCode: "M" },
              { reasoning: "Substitute $t=2$.", working: "v=12-1=11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $11$ m s$^{-1}$",
            commonErrors: ["Substituting $t=2$ into $s$, giving the displacement $10$."],
          },
        },
        {
          id: "aasl-u5-kinematics-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A particle moves in a straight line with displacement $s=t^3-3t$ metres, where $t\\ge0$. At what positive time is the particle momentarily at rest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$t=1$" },
              { id: "b", text: "$t=0$" },
              { id: "c", text: "$t=3$" },
              { id: "d", text: "$t=\\pm1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "At rest", statement: "The particle is at rest when $v=0$." },
            ],
            steps: [
              { reasoning: "Differentiate.", working: "v=3t^2-3", marks: 1, markCode: "M" },
              { reasoning: "Set $v=0$ and use $t\\ge0$ to select $t=1$ (rejecting $t=-1$).", working: "3(t-1)(t+1)=0\\Rightarrow t=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $t=1$",
            commonErrors: ["Setting $s=0$ instead of $v=0$.", "Giving $t=-1$, which is outside the domain."],
          },
        },
        {
          id: "aasl-u5-kinematics-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A particle has velocity $v=t-3$ m s$^{-1}$ and acceleration $a=1$ m s$^{-2}$, where $t\\ge0$. For which values of $t$ is the particle speeding up?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0<t<3$" },
              { id: "b", text: "For all $t\\ge0$" },
              { id: "c", text: "$t<3$" },
              { id: "d", text: "$t>3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Speeding up", statement: "Speed increases when $v$ and $a$ have the same sign." },
            ],
            steps: [
              { reasoning: "Here $a=1>0$, so speeding up requires $v>0$.", working: "v=t-3>0", marks: 1, markCode: "M" },
              { reasoning: "Solve.", working: "t>3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $t>3$",
            commonErrors: ["Thinking speeding up means $a>0$ regardless of the sign of $v$."],
          },
        },
        {
          id: "aasl-u5-kinematics-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A particle moves in a straight line with displacement $s=4t-t^2$ metres at time $t$ seconds. Find its velocity when $t=1$ and its acceleration.",
          response: {
            type: "numeric",
            parts: [
              { label: "Velocity at $t=1$ (m s$^{-1}$)", answer: 2 },
              { label: "Acceleration (m s$^{-2}$)", answer: -2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Kinematics", statement: "$v=\\dfrac{ds}{dt}$ and $a=\\dfrac{dv}{dt}$." },
            ],
            steps: [
              { reasoning: "Differentiate to get velocity and acceleration.", working: "v=4-2t,\\quad a=-2", marks: 1, markCode: "M" },
              { reasoning: "Substitute $t=1$ into $v$.", working: "v(1)=4-2=2", marks: 1, markCode: "A" },
              { reasoning: "The acceleration is constant.", working: "a=-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$v(1)=2$ m s$^{-1}$; $a=-2$ m s$^{-2}$",
            commonErrors: ["Differentiating $s$ twice to get velocity."],
          },
        },
        {
          id: "aasl-u5-kinematics-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A particle moves in a straight line with displacement $s=t^3-6t^2+9t+2$ metres at time $t\\ge0$ seconds.\n\nFind the two times at which the particle is at rest, and its displacement at the later of these times.",
          response: {
            type: "numeric",
            parts: [
              { label: "Earlier time (s)", answer: 1 },
              { label: "Later time (s)", answer: 3 },
              { label: "Displacement at the later time (m)", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "At rest", statement: "The particle is at rest when $v=0$." },
            ],
            steps: [
              { reasoning: "Differentiate and set $v=0$.", working: "v=3t^2-12t+9=3(t-1)(t-3)=0", marks: 1, markCode: "M" },
              { reasoning: "Solve.", working: "t=1,\\ t=3", marks: 1, markCode: "A" },
              { reasoning: "Substitute the later time into $s$.", working: "s(3)=27-54+27+2=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "At rest at $t=1$ and $t=3$; displacement $=2$ m at $t=3$",
            commonErrors: ["Substituting into $v$ instead of $s$ for the displacement."],
          },
        },
        {
          id: "aasl-u5-kinematics-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A particle moves in a straight line with displacement $s=2t^2+3t-1$ metres at time $t$ seconds. Find its velocity when $t=2$ and its acceleration.",
          response: {
            type: "numeric",
            parts: [
              { label: "Velocity at $t=2$ (m s$^{-1}$)", answer: 11 },
              { label: "Acceleration (m s$^{-2}$)", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Kinematics", statement: "$v=\\dfrac{ds}{dt}$ and $a=\\dfrac{dv}{dt}$." },
            ],
            steps: [
              { reasoning: "Differentiate once for velocity, twice for acceleration.", working: "v=4t+3,\\quad a=4", marks: 1, markCode: "M" },
              { reasoning: "Substitute $t=2$ into $v$.", working: "v(2)=8+3=11", marks: 1, markCode: "A" },
              { reasoning: "The acceleration is constant.", working: "a=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$v(2)=11$ m s$^{-1}$; $a=4$ m s$^{-2}$",
            commonErrors: ["Differentiating $s$ three times."],
          },
        },
        {
          id: "aasl-u5-kinematics-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A particle moves in a straight line with displacement $s=t^2-4t+1$ metres at time $t\\ge0$ seconds.\n\nFind an expression for the velocity and the time at which the particle is at rest.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Kinematics", statement: "$v=\\dfrac{ds}{dt}$; the particle is at rest when $v=0$." },
            ],
            steps: [
              { reasoning: "Differentiate the displacement.", working: "v=2t-4", marks: 1, markCode: "M" },
              { reasoning: "Set the velocity to zero.", working: "2t-4=0", marks: 1, markCode: "A" },
              { reasoning: "Solve.", working: "t=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$v=2t-4$ m s$^{-1}$; at rest when $t=2$ s",
            commonErrors: ["Setting $s=0$ instead of $v=0$."],
          },
        },
        {
          id: "aasl-u5-kinematics-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A particle moves in a straight line with displacement $s=t^3-3t^2-9t$ metres at time $t\\ge0$ seconds.\n\nFind the time at which the particle is at rest and its displacement at that time. Justify that this is the only time at which it is at rest for $t\\ge0$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "At rest", statement: "The particle is at rest when $v=0$." },
            ],
            steps: [
              { reasoning: "Differentiate to get velocity.", working: "v=3t^2-6t-9=3(t-3)(t+1)", marks: 1, markCode: "M" },
              { reasoning: "Solve $v=0$; the roots are $t=3$ and $t=-1$.", working: "t=3\\ \\text{or}\\ t=-1", marks: 1, markCode: "A" },
              { reasoning: "Since $t\\ge0$, only $t=3$ is valid; the other root is rejected.", marks: 1, markCode: "A" },
              { reasoning: "Evaluate the displacement.", working: "s(3)=27-27-27=-27", marks: 1, markCode: "A" },
            ],
            finalAnswer: "At rest only at $t=3$ s; displacement $=-27$ m",
            commonErrors: ["Reporting $t=-1$ as a valid time."],
          },
        },
        {
          id: "aasl-u5-kinematics-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A particle moves along a straight line. Its displacement from a fixed point $O$ is $s=2t^3-9t^2+12t$ metres at time $t\\ge0$ seconds.",
          parts: [
            { label: "a", prompt: "Find expressions for the velocity $v$ and the acceleration $a$ at time $t$.", marks: 2 },
            { label: "b", prompt: "Find the times at which the particle is at rest.", marks: 2 },
            { label: "c", prompt: "Find the displacement of the particle from $O$ at each of these times.", marks: 2 },
            { label: "d", prompt: "Find the minimum velocity of the particle, justifying that it is a minimum.", marks: 2 },
            { label: "e", prompt: "Determine the values of $t$ for which the speed of the particle is increasing.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Earlier time at rest (s)", answer: 1 },
              { label: "(b) Later time at rest (s)", answer: 2 },
              { label: "(c) Displacement at the earlier time (m)", answer: 5 },
              { label: "(c) Displacement at the later time (m)", answer: 4 },
              { label: "(d) Minimum velocity (m s$^{-1}$)", answer: -1.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Kinematics", statement: "$v=\\dfrac{ds}{dt}$ and $a=\\dfrac{dv}{dt}$; the particle is at rest when $v=0$." },
              { kind: "principle", name: "Speeding up", statement: "Speed increases when $v$ and $a$ have the same sign." },
            ],
            steps: [
              { part: "a", reasoning: "Differentiate $s$, then $v$.", working: "v=6t^2-18t+12,\\quad a=12t-18", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Set $v=0$ and factorise.", working: "6(t-1)(t-2)=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve.", working: "t=1,\\ t=2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute into $s$.", working: "s(1)=2-9+12=5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Second time.", working: "s(2)=16-36+24=4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Minimum velocity occurs where $a=0$; since $\\frac{da}{dt}=12>0$, $a$ changes from negative to positive, confirming a minimum of $v$.", working: "12t-18=0\\Rightarrow t=1.5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Evaluate $v(1.5)$.", working: "v(1.5)=13.5-27+12=-1.5", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Sign analysis: $v<0$ and $a<0$ on $1<t<1.5$; $v>0$ and $a>0$ for $t>2$. On the remaining intervals the signs differ.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "State the intervals.", working: "1<t<1.5\\ \\text{and}\\ t>2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $v=6t^2-18t+12$, $a=12t-18$ (b) $t=1,2$ (c) $5$ m and $4$ m (d) $-1.5$ m s$^{-1}$ (e) $1<t<1.5$ and $t>2$",
            commonErrors: ["Stating speed increases whenever $a>0$ (ignoring the sign of $v$).", "Confusing minimum velocity with minimum speed."],
          },
        },
        {
          id: "aasl-u5-kinematics-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A particle moves in a straight line with displacement $s=5t-\\dfrac{t^2}{2}$ metres at time $t$ seconds.\n\nFind the time at which the particle is at rest and its acceleration at that time.",
          response: {
            type: "numeric",
            parts: [
              { label: "Time at rest (s)", answer: 5 },
              { label: "Acceleration (m s$^{-2}$)", answer: -1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Kinematics", statement: "$v=\\dfrac{ds}{dt}$ and $a=\\dfrac{dv}{dt}$; at rest when $v=0$." },
            ],
            steps: [
              { reasoning: "Differentiate to get velocity and acceleration.", working: "v=5-t,\\quad a=-1", marks: 1, markCode: "M" },
              { reasoning: "Set $v=0$.", working: "5-t=0\\Rightarrow t=5", marks: 1, markCode: "A" },
              { reasoning: "The acceleration is constant.", working: "a=-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "At rest at $t=5$ s; $a=-1$ m s$^{-2}$",
            commonErrors: ["Setting $s=0$ instead of $v=0$."],
          },
        },
        {
          id: "aasl-u5-kinematics-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A particle moves in a straight line with displacement $s=t^2-8t+10$ metres at time $t$ seconds. What is its velocity, and in which direction is it moving, when $t=3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$v=-5$ m s$^{-1}$, in the negative direction" },
              { id: "b", text: "$v=2$ m s$^{-1}$, in the positive direction" },
              { id: "c", text: "$v=14$ m s$^{-1}$, in the positive direction" },
              { id: "d", text: "$v=-2$ m s$^{-1}$, in the negative direction" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Velocity", statement: "$v=\\dfrac{ds}{dt}$; a negative velocity means motion in the negative direction." },
            ],
            steps: [
              { reasoning: "Differentiate.", working: "v=2t-8", marks: 1, markCode: "M" },
              { reasoning: "Substitute $t=3$; the result is negative so the particle moves in the negative direction.", working: "v(3)=6-8=-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $v=-2$ m s$^{-1}$, negative direction",
            commonErrors: ["Substituting into $s$ instead of $v$.", "Reporting the speed $|v|=2$ without the direction."],
          },
        },
        {
          id: "aasl-u5-kinematics-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A particle moves in a straight line with displacement $s=3t-t^3$ metres at time $t\\ge0$ seconds.\n\nFind the time at which the particle is at rest, its acceleration at that time, and its displacement then.",
          response: {
            type: "numeric",
            parts: [
              { label: "Time at rest (s)", answer: 1 },
              { label: "Acceleration at that time (m s$^{-2}$)", answer: -6 },
              { label: "Displacement at that time (m)", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Kinematics", statement: "$v=\\dfrac{ds}{dt}$, $a=\\dfrac{dv}{dt}$; at rest when $v=0$." },
            ],
            steps: [
              { reasoning: "Differentiate twice.", working: "v=3-3t^2,\\quad a=-6t", marks: 1, markCode: "M" },
              { reasoning: "Set $v=0$ and use $t\\ge0$.", working: "3(1-t)(1+t)=0\\Rightarrow t=1", marks: 1, markCode: "A" },
              { reasoning: "Evaluate $a$ and $s$ at $t=1$.", working: "a(1)=-6,\\quad s(1)=3-1=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "At rest at $t=1$ s; $a=-6$ m s$^{-2}$; displacement $=2$ m",
            commonErrors: ["Reporting $t=-1$ as well, outside the domain $t\\ge0$."],
          },
        },
      ],
    },
  ],
};
