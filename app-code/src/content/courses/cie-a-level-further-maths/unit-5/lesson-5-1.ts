import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "cialfm-u5-lesson-5-1",
  code: "5-1",
  title: "Parametric and implicit differentiation",
  goal: "I CAN differentiate parametric and implicit curves.",
  standards: ["9231 P1: further calculus"],
  vocabulary: [
    { term: "Parametric equations", definition: "$x = f(t)$, $y = g(t)$ defining a curve via parameter $t$." },
    { term: "Implicit curve", definition: "Curve defined by $F(x,y) = 0$ rather than $y = f(x)$." },
    { term: "dy/dx", definition: "$\\frac{dy/dt}{dx/dt}$ for parametric; $\\frac{dy}{dx} = -\\frac{F_x}{F_y}$ for implicit." },
    { term: "Tangent", definition: "Line touching curve at a point; gradient = $dy/dx$." },
  ],
  concepts: [
    {
      id: "cialfm-u5-s1-parametric",
      title: "Parametric differentiation",
      skill: "Find $\\frac{dy}{dx}$ for parametric curves.",
      lesson: {
        sections: [
          {
            heading: "Method",
            body: "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$. Differentiate both with respect to $t$, then divide.",
          },
          {
            heading: "Second derivative",
            body: "$\\frac{d^2y}{dx^2} = \\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) \\div \\frac{dx}{dt}$.",
          },
        ],
        keyFormulas: [
          { name: "Parametric dy/dx", statement: "$\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}$" },
        ],
        workedExample: {
          problem: "For $x=t^2$, $y=t^3$, find $\\frac{dy}{dx}$.",
          solution: "$\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2}$.",
        },
      },
      questions: [
        {
          id: "cialfm-u5-s1-pa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For parametric $x=f(t), y=g(t)$, $\\frac{dy}{dx}$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{dy/dt}{dx/dt}$" }, { id: "b", text: "$\\frac{dx/dt}{dy/dt}$" }, { id: "c", text: "$\\frac{dy}{dt}$" }, { id: "d", text: "$\\frac{dx}{dy}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Parametric", statement: "Chain rule." }],
            steps: [{ reasoning: "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{dy/dt}{dx/dt}$",
          },
        },
        {
          id: "cialfm-u5-s1-pa-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $x=t$, $y=t^2$, find $\\frac{dy}{dx}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Parametric", statement: "Apply formula." }],
            steps: [
              { reasoning: "$\\frac{dy}{dx} = \\frac{2t}{1} = 2t$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2t$",
          },
        },
        {
          id: "cialfm-u5-s1-pa-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $x=t^2+1$, $y=t^3$, find $\\frac{dy}{dx}$ at $t=1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluate", statement: "Differentiate then substitute." }],
            steps: [
              { reasoning: "$\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2}$; at $t=1$: $1.5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.5.", marks: 1, markCode: "M" },
              { reasoning: "Check $dx/dt = 2t \\neq 0$ at $t=1$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.5",
          },
        },
        {
          id: "cialfm-u5-s1-pa-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "For $x=e^t$, $y=e^{-t}$, find $\\frac{dy}{dx}$ and simplify.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Exponential parametric", statement: "Apply formula." }],
            steps: [
              { reasoning: "$\\frac{dy}{dx} = \\frac{-e^{-t}}{e^t} = -e^{-2t}$.", marks: 1, markCode: "M" },
              { reasoning: "Simplify: $-e^{-2t}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "M" },
              { reasoning: "Could also write $-\\frac{1}{x^2}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-e^{-2t}$",
          },
        },
        {
          id: "cialfm-u5-s1-pa-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $x=t^3$, $y=t^2$, $\frac{dy}{dx}$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\frac{2}{3t}$" }, { id: "b", text: "$\frac{3t}{2}$" }, { id: "c", text: "$\frac{2t}{3}$" }, { id: "d", text: "$6t$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Parametric", statement: "Chain rule." }],
            steps: [{ reasoning: "$\frac{dy}{dx} = \frac{2t}{3t^2} = \frac{2}{3t}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\frac{2}{3t}$",
          },
        },
        {
          id: "cialfm-u5-s1-pa-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $x=2t+1$, $y=t^2-3t$, find $\frac{dy}{dx}$ at $t=2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluate", statement: "Differentiate then substitute." }],
            steps: [
              { reasoning: "$\frac{dy}{dx} = \frac{2t-3}{2}$; at $t=2$: $\frac{1}{2} = 0.5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.5",
          },
        },
        {
          id: "cialfm-u5-s1-pa-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $x=\cos t$, $y=\sin t$, find $\frac{dy}{dx}$ in terms of $t$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Parametric trig", statement: "Apply formula." }],
            steps: [
              { reasoning: "$\frac{dy}{dt}=\cos t$, $\frac{dx}{dt}=-\sin t$.", marks: 1, markCode: "M" },
              { reasoning: "$\frac{dy}{dx} = \frac{\cos t}{-\sin t} = -\cot t$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-\cot t$",
          },
        },
        {
          id: "cialfm-u5-s1-pa-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a parametric curve, $\frac{d^2y}{dx^2}$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\frac{d}{dt}\left(\frac{dy}{dx}\right)\Big/\frac{dx}{dt}$" }, { id: "b", text: "$\frac{d^2y/dt^2}{d^2x/dt^2}$" }, { id: "c", text: "$\frac{dy/dt}{dx/dt}$" }, { id: "d", text: "$\frac{d}{dx}\left(\frac{dy}{dx}\right)$ only" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Second derivative", statement: "Divide by $dx/dt$ again." }],
            steps: [{ reasoning: "Differentiate $dy/dx$ w.r.t. $t$, then divide by $dx/dt$.", marks: 1, markCode: "A" }],
            finalAnswer: "Option a",
          },
        },
        {
          id: "cialfm-u5-s1-pa-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $x=e^t$, $y=te^t$, find $\frac{dy}{dx}$ at $t=0$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluate", statement: "Product rule then substitute." }],
            steps: [
              { reasoning: "$\frac{dy}{dt} = e^t + te^t = e^t(1+t)$, $\frac{dx}{dt}=e^t$.", marks: 1, markCode: "M" },
              { reasoning: "$\frac{dy}{dx} = 1+t$; at $t=0$: $1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u5-s1-pa-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $x=t^2-2t$, $y=t^3-3t^2$, find the values of $t$ at which $\frac{dy}{dx}=0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Parametric", statement: "Set $dy/dt=0$ where $dx/dt\\neq0$." }],
            steps: [
              { reasoning: "$\frac{dy}{dx} = \frac{3t^2-6t}{2t-2} = \frac{3t(t-2)}{2(t-1)}$.", marks: 1, markCode: "M" },
              { reasoning: "Numerator zero: $t=0$ or $t=2$; denominator zero at $t=1$ excluded.", marks: 1, markCode: "M" },
              { reasoning: "At $t=0$: $dx/dt=-2\\neq0$ ✓; at $t=2$: $dx/dt=2\\neq0$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $t=0$ and $t=2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$t=0,\\ t=2$",
          },
        },
        {
          id: "cialfm-u5-s1-pa-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $x=t^2+1$, $y=t^3-2t$, $\frac{dy}{dx}$ at $t=1$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$0.5$" }, { id: "b", text: "$1$" }, { id: "c", text: "$1.5$" }, { id: "d", text: "$-0.5$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluate", statement: "Differentiate then substitute." }],
            steps: [{ reasoning: "$\frac{dy}{dx}=\frac{3t^2-2}{2t}$; at $t=1$: $\frac{1}{2}=0.5$.", marks: 1, markCode: "A" }],
            finalAnswer: "$0.5$",
          },
        },
        {
          id: "cialfm-u5-s1-pa-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $x=t^2$, $y=t^3$, find $\frac{dy}{dx}$ at $t=2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluate", statement: "Differentiate then substitute." }],
            steps: [
              { reasoning: "$\frac{dy}{dx} = \frac{3t}{2}$; at $t=2$: $3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cialfm-u5-s1-pa-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $x=t^2$, $y=t^3$, find the equation of the tangent at $t=1$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Tangent", statement: "Gradient $dy/dx$, point $(x,y)$." }],
            steps: [
              { reasoning: "Point: $(1,1)$; $\frac{dy}{dx}=\frac{3t}{2}=1.5$ at $t=1$.", marks: 1, markCode: "M" },
              { reasoning: "$y-1 = 1.5(x-1)$.", marks: 1, markCode: "M" },
              { reasoning: "$y = 1.5x - 0.5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 1.5x - 0.5$",
          },
        },
        {
          id: "cialfm-u5-s1-pa-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $x=3t$, $y=2t^2$, $\frac{dy}{dx}$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\frac{4t}{3}$" }, { id: "b", text: "$\frac{4t}{9}$" }, { id: "c", text: "$\frac{3}{4t}$" }, { id: "d", text: "$4t$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Parametric", statement: "Chain rule." }],
            steps: [{ reasoning: "$\frac{dy}{dx} = \frac{4t}{3}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\frac{4t}{3}$",
          },
        },
        {
          id: "cialfm-u5-s1-pa-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For $x=e^{2t}$, $y=e^t$, find $\frac{dy}{dx}$ at $t=0$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluate", statement: "Exponential parametric." }],
            steps: [
              { reasoning: "$\frac{dy}{dx} = \frac{e^t}{2e^{2t}} = \frac{1}{2e^t}$; at $t=0$: $0.5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.5.", marks: 1, markCode: "M" },
              { reasoning: "Check $dx/dt\\neq0$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.5",
          },
        },
        {
          id: "cialfm-u5-s1-pa-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $x=t^2-4$, $y=t^3-2t^2$, describe the behaviour of $\frac{dy}{dx}$ at $t=0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Parametric", statement: "Check $dx/dt$ at the point." }],
            steps: [
              { reasoning: "$\frac{dy}{dx} = \frac{3t^2-4t}{2t}$.", marks: 1, markCode: "M" },
              { reasoning: "At $t=0$, $dx/dt = 0$ and $dy/dt = 0$; gradient is undefined.", marks: 1, markCode: "M" },
              { reasoning: "The tangent at $( -4, 0)$ is vertical (or the point is singular).", marks: 1, markCode: "M" },
              { reasoning: "Conclusion stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Undefined gradient; vertical tangent at $(-4,0)$",
          },
        },
      ],
    },
    {
      id: "cialfm-u5-s1-implicit",
      title: "Implicit differentiation",
      skill: "Differentiate implicit curves at A Level.",
      lesson: {
        sections: [
          {
            heading: "Method",
            body: "For $F(x,y)=0$, differentiate both sides w.r.t. $x$, treating $y$ as function of $x$. Use chain rule for $y$ terms: $\\frac{d}{dx}y^2 = 2y\\frac{dy}{dx}$.",
          },
          {
            heading: "Example",
            body: "$x^2+y^2=25$: $2x + 2y\\frac{dy}{dx}=0$ → $\\frac{dy}{dx}=-\\frac{x}{y}$.",
          },
        ],
        keyFormulas: [
          { name: "Implicit", statement: "Differentiate both sides; use chain rule on $y$" },
        ],
        workedExample: {
          problem: "Find $\\frac{dy}{dx}$ for $x^2 + xy = 6$.",
          solution: "$2x + y + x\\frac{dy}{dx} = 0$ → $\\frac{dy}{dx} = -\\frac{2x+y}{x}$.",
        },
      },
      questions: [
        {
          id: "cialfm-u5-s1-im-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For implicit curve $F(x,y)=0$, differentiate…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Both sides w.r.t. $x$, treating $y$ as function of $x$" }, { id: "b", text: "Only $x$ terms" }, { id: "c", text: "Only $y$ terms" }, { id: "d", text: "Nothing" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Implicit", statement: "Chain rule on y." }],
            steps: [{ reasoning: "Differentiate all terms; $y$ depends on $x$.", marks: 1, markCode: "A" }],
            finalAnswer: "Option a",
          },
        },
        {
          id: "cialfm-u5-s1-im-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $\\frac{dy}{dx}$ for $y^2 = x^3$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Implicit", statement: "Differentiate both sides." }],
            steps: [
              { reasoning: "$2y\\frac{dy}{dx} = 3x^2$ → $\\frac{dy}{dx} = \\frac{3x^2}{2y}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3x^2}{2y}$",
          },
        },
        {
          id: "cialfm-u5-s1-im-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $\\frac{dy}{dx}$ for $\\sin y = x$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Implicit trig", statement: "Chain rule." }],
            steps: [
              { reasoning: "$\\cos y \\cdot \\frac{dy}{dx} = 1$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{dy}{dx} = \\frac{1}{\\cos y} = \\sec y$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sec y$",
          },
        },
        {
          id: "cialfm-u5-s1-im-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find $\\frac{dy}{dx}$ for $x^2 + y^2 - 2xy = 0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Implicit", statement: "Full differentiation." }],
            steps: [
              { reasoning: "$2x + 2y\\frac{dy}{dx} - 2y - 2x\\frac{dy}{dx} = 0$.", marks: 1, markCode: "M" },
              { reasoning: "Collect: $(2y-2x)\\frac{dy}{dx} = 2y-2x$ → $\\frac{dy}{dx}=1$ (where $x\\neq y$).", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{dy}{dx}=1$.", marks: 1, markCode: "M" },
              { reasoning: "Note $x=y$ is also a solution curve.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$",
          },
        },
        {
          id: "cialfm-u5-s1-im-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For the circle $x^2+y^2=25$, $\frac{dy}{dx}$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-\frac{x}{y}$" }, { id: "b", text: "$\frac{x}{y}$" }, { id: "c", text: "$-\frac{y}{x}$" }, { id: "d", text: "$-2x$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Implicit", statement: "Differentiate both sides." }],
            steps: [{ reasoning: "$2x+2y\\frac{dy}{dx}=0$ → $\frac{dy}{dx}=-\frac{x}{y}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$-\\frac{x}{y}$",
          },
        },
        {
          id: "cialfm-u5-s1-im-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $\frac{dy}{dx}$ for $xy=4$ at the point $(2,2)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Implicit product", statement: "Product rule." }],
            steps: [
              { reasoning: "$y + x\\frac{dy}{dx} = 0$ → $\frac{dy}{dx} = -\frac{y}{x}$.", marks: 1, markCode: "M" },
              { reasoning: "At $(2,2)$: $-1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-1",
          },
        },
        {
          id: "cialfm-u5-s1-im-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $\frac{dy}{dx}$ for $y^3=x^2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Implicit", statement: "Chain rule on $y^3$." }],
            steps: [
              { reasoning: "$3y^2\\frac{dy}{dx} = 2x$.", marks: 1, markCode: "M" },
              { reasoning: "$\frac{dy}{dx} = \frac{2x}{3y^2}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{2x}{3y^2}$",
          },
        },
        {
          id: "cialfm-u5-s1-im-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When implicitly differentiating $y^2$, the result is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2y\\frac{dy}{dx}$" }, { id: "b", text: "$2y$" }, { id: "c", text: "$y^2$" }, { id: "d", text: "$2\\frac{dy}{dx}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Chain rule", statement: "Apply to $y$-terms." }],
            steps: [{ reasoning: "$\frac{d}{dx}y^2 = 2y\\frac{dy}{dx}$.", marks: 1, markCode: "A" }],
            finalAnswer: "Option a",
          },
        },
        {
          id: "cialfm-u5-s1-im-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\frac{dy}{dx}$ for $xy^2=8$ at $(2,2)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -0.5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Implicit product", statement: "Product rule." }],
            steps: [
              { reasoning: "$y^2 + 2xy\\frac{dy}{dx} = 0$ → $\frac{dy}{dx} = -\frac{y}{2x} = -0.5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: -0.5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-0.5",
          },
        },
        {
          id: "cialfm-u5-s1-im-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find $\frac{dy}{dx}$ for the folium $x^3+y^3=6xy$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Implicit", statement: "Differentiate all terms." }],
            steps: [
              { reasoning: "$3x^2 + 3y^2\\frac{dy}{dx} = 6y + 6x\\frac{dy}{dx}$.", marks: 1, markCode: "M" },
              { reasoning: "Collect $y'$ terms: $(3y^2-6x)\\frac{dy}{dx} = 6y-3x^2$.", marks: 1, markCode: "M" },
              { reasoning: "$\frac{dy}{dx} = \frac{6y-3x^2}{3y^2-6x} = \frac{2y-x^2}{y^2-2x}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{2y-x^2}{y^2-2x}$",
          },
        },
        {
          id: "cialfm-u5-s1-im-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "For a circle $x^2+y^2=r^2$, the tangent at $(a,b)$ has gradient…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-\\frac{a}{b}$" }, { id: "b", text: "$\\frac{a}{b}$" }, { id: "c", text: "$-\\frac{b}{a}$" }, { id: "d", text: "$\\frac{b}{a}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Circle tangent", statement: "Perpendicular to radius." }],
            steps: [{ reasoning: "$\frac{dy}{dx}=-\\frac{x}{y}$; at $(a,b)$: $-\\frac{a}{b}$.", marks: 1, markCode: "A" }],
            finalAnswer: "Option a",
          },
        },
        {
          id: "cialfm-u5-s1-im-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\frac{dy}{dx}$ for $y^2=x^3+1$ at $(2,3)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Implicit", statement: "Chain rule then substitute." }],
            steps: [
              { reasoning: "$2y\\frac{dy}{dx} = 3x^2$ → $\frac{dy}{dx}=\frac{3x^2}{2y}=\frac{12}{6}=2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cialfm-u5-s1-im-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\frac{dy}{dx}$ for $x^2+y^2=25$ at $(3,4)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -0.75 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Implicit", statement: "Substitute point." }],
            steps: [
              { reasoning: "$\frac{dy}{dx}=-\\frac{x}{y}=-\\frac{3}{4}=-0.75$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: -0.75.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-0.75",
          },
        },
        {
          id: "cialfm-u5-s1-im-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For the curve $e^y=x^2$, $\frac{dy}{dx}$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{2x}{e^y}$" }, { id: "b", text: "$\\frac{e^y}{2x}$" }, { id: "c", text: "$2xe^y$" }, { id: "d", text: "$\\frac{x}{e^y}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Implicit exponential", statement: "Chain rule." }],
            steps: [{ reasoning: "$e^y\\frac{dy}{dx}=2x$ → $\frac{dy}{dx}=\\frac{2x}{e^y}$.", marks: 1, markCode: "A" }],
            finalAnswer: "Option a",
          },
        },
        {
          id: "cialfm-u5-s1-im-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\frac{dy}{dx}$ for $x^2-y^2=4$ at $(\\sqrt{5},1)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2.2360679, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Implicit", statement: "Substitute point." }],
            steps: [
              { reasoning: "$2x-2y\\frac{dy}{dx}=0$ → $\frac{dy}{dx}=\\frac{x}{y}=\\sqrt{5}\\approx2.236$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\sqrt{5}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sqrt{5}$",
          },
        },
        {
          id: "cialfm-u5-s1-im-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find $\frac{dy}{dx}$ for $x^2-xy+y^2=1$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Implicit", statement: "Product rule on $xy$." }],
            steps: [
              { reasoning: "$2x - y - x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0$.", marks: 1, markCode: "M" },
              { reasoning: "Collect: $(2y-x)\\frac{dy}{dx} = y-2x$.", marks: 1, markCode: "M" },
              { reasoning: "$\frac{dy}{dx} = \\frac{y-2x}{2y-x}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{y-2x}{2y-x}$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u5-s1-param-imp-notes",
      title: "Parametric and implicit differentiation — revision notes",
      summary: "$dy/dx$ for non-explicit curves.",
      sections: [
        { heading: "Parametric", body: "$\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}$. Second derivative needs another division by $dx/dt$." },
        { heading: "Implicit", body: "Differentiate all terms; apply chain rule to $y$-terms. Solve for $dy/dx$." },
      ],
    },
  ],
};
