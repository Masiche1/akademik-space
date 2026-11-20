import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mypme5-u2-lesson-2-2",
  code: "2-2",
  title: "Modelling and Advanced Graphs",
  goal: "I CAN build mathematical models from real situations and sketch rational and trigonometric function graphs.",
  standards: [
    "MYP Maths: Functions",
    "MYP Maths: Geometry & Trigonometry",
    "Criterion A: Knowing and understanding",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Mathematical model", definition: "A function or equation representing a real-world relationship, with stated assumptions and domain." },
    { term: "Rational function", definition: "A function of the form $f(x)=\\frac{p(x)}{q(x)}$ where $p,q$ are polynomials; has asymptotes where $q(x)=0$." },
    { term: "Vertical asymptote", definition: "A vertical line $x=a$ that the graph approaches but never crosses; occurs where denominator = 0." },
    { term: "Trigonometric function", definition: "$y=a\\sin(bx)+c$ or $y=a\\cos(bx)+c$; models periodic phenomena." },
    { term: "Period", definition: "The horizontal length of one complete cycle; for $y=a\\sin(bx)$, period $=\\frac{2\\pi}{b}$." },
  ],
  concepts: [
    {
      id: "mypme5-u2-modelling",
      title: "Modelling with functions",
      skill: "Choose appropriate function types for real situations and interpret model parameters.",
      lesson: {
        sections: [
          {
            heading: "Choosing a model",
            body: "Constant rate → linear $y=mx+c$. Accelerating/decelerating → quadratic. Constant percentage change → exponential $y=ab^x$. Inverse relationships → rational $y=\\frac{k}{x}$. Periodic behaviour → trigonometric.",
          },
          {
            heading: "Interpreting parameters",
            body: "For $y=ab^x$: $a$ = initial value, $b$ = growth factor. For $y=mx+c$: $m$ = rate, $c$ = initial value. For $y=\\frac{k}{x}$: $k$ = constant product. State units and valid domain.",
          },
          {
            heading: "Model evaluation",
            body: "Check predicted vs actual values, identify where model breaks down, and avoid extrapolation beyond data range without justification.",
          },
        ],
        keyFormulas: [
          { name: "Linear", statement: "$y=mx+c$" },
          { name: "Exponential", statement: "$y=ab^x$" },
          { name: "Inverse", statement: "$y=\\frac{k}{x}$" },
          { name: "Quadratic", statement: "$y=ax^2+bx+c$" },
        ],
        workedExample: {
          problem: "A company's revenue is $R=5000+120n$ where $n$ = units sold. Interpret and find revenue for 200 units.",
          solution: "Fixed base 5000, 120 per unit; $R(200)=5000+24000=29000$.",
        },
      },
      questions: [
        {
          id: "mypme5-u2-model-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A population follows $P=1000(1.05)^t$. What does 1.05 represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5% annual growth factor" },
              { id: "b", text: "5% annual growth rate" },
              { id: "c", text: "105% growth" },
              { id: "d", text: "Initial population" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Exponential parameter", statement: "$b=1.05=1+0.05$ → 5% growth rate." },
            ],
            steps: [
              { reasoning: "$1.05=1+0.05$ → 5% annual growth.", working: "5\\%", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 5% annual growth rate",
            commonErrors: ["Confusing factor with rate."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypme5-u2-model-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The time $t$ to complete a task is inversely proportional to workers $w$. If 4 workers take 6 hours, find $t$ for 8 workers.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3 hours" },
              { id: "b", text: "12 hours" },
              { id: "c", text: "1.5 hours" },
              { id: "d", text: "48 hours" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inverse proportion", statement: "$t=\\frac{k}{w}$; $k=24$; $t=\\frac{24}{8}=3$ hours." },
            ],
            steps: [
              { reasoning: "$k=wt=24$; $t=\\frac{24}{8}=3$ hours.", working: "3\\text{ hours}", marks: 1, markCode: "M" },
              { reasoning: "State the time.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 hours",
            commonErrors: ["Halving workers instead of doubling."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-model-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A ball's height is $h=20t-5t^2$. At what time is the height 15 m? Give both answers.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$t=1$ s and $t=3$ s" },
              { id: "b", text: "$t=2$ s only" },
              { id: "c", text: "$t=1$ s only" },
              { id: "d", text: "$t=4$ s" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quadratic model", statement: "$20t-5t^2=15$ → $t^2-4t+3=0$ → $(t-1)(t-3)=0$." },
            ],
            steps: [
              { reasoning: "$5t^2-20t+15=0$ → $t^2-4t+3=0$ → $(t-1)(t-3)=0$.", working: "t=1,3", marks: 1, markCode: "M" },
              { reasoning: "Both times: $t=1$ s (ascending) and $t=3$ s (descending).", working: "t=1,3", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", working: "t=1\\text{ and }t=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$t=1$ s and $t=3$ s",
            commonErrors: ["Giving only one answer — quadratic has two roots."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-model-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company's profit is modelled by $P(n)=-2n^2+40n-100$ where $n$ = units produced.",
          parts: [
            { label: "a", prompt: "Find the profit when 10 units are produced.", marks: 1 },
            { label: "b", prompt: "Find the vertex (maximum profit point).", marks: 3 },
            { label: "c", prompt: "Find the break-even points (profit = 0).", marks: 2 },
            { label: "d", prompt: "State the domain for which the model is valid.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quadratic model", statement: "Vertex at $n=-\\frac{b}{2a}=10$; roots where $P=0$." },
            ],
            steps: [
              { part: "a", reasoning: "$P(10)=-2(100)+40(10)-100=-200+400-100=100$.", working: "100", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$n=-\\frac{40}{2(-2)}=10$; $P(10)=100$.", working: "n=10,P=100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State vertex.", working: "(10,100)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State maximum profit.", working: "100", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$-2n^2+40n-100=0$ → $n^2-20n+50=0$ → $n=\\frac{20\\pm\\sqrt{400-200}}{2}=10\\pm5\\sqrt{2}$.", working: "10\\pm5\\sqrt{2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$n\\approx2.93$ and $n\\approx17.07$.", working: "2.93,17.07", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Model valid where $P\\ge0$: between roots ≈2.93 and 17.07; realistically $3\\le n\\le17$ for integer units.", working: "3\\le n\\le17", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State domain.", working: "3\\le n\\le17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 100 (b) max profit 100 at $n=10$ (c) $n\\approx2.93,17.07$ (d) $3\\le n\\le17$",
            commonErrors: ["In (b), using $n=-\\frac{b}{a}$ instead of $-\\frac{b}{2a}$."],
            examinerNote: "A1 for (a), M1 M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme5-u2-model-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cost function is $C(n)=50+4n$ where $n$ is units produced. What is the fixed cost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "50" },
              { id: "b", text: "4" },
              { id: "c", text: "54" },
              { id: "d", text: "0" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Linear model", statement: "In $C(n)=50+4n$, the constant term 50 is the fixed cost and 4 is the variable cost per unit." },
            ],
            steps: [
              { reasoning: "Fixed cost is the constant term: 50.", working: "50", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 50",
            commonErrors: ["Answering 4 (the variable rate)."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u2-model-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A population is modelled by $P(t)=300(1.02)^t$. Find $P(10)$.",
          response: { type: "numeric", parts: [{ label: "$P(10)$", answer: 365.7, tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exponential model", statement: "$P(10)=300(1.02)^{10}=300(1.21899)=365.7$." },
            ],
            steps: [
              { reasoning: "$(1.02)^{10}\\approx1.21899$; $P(10)=300\\times1.21899=365.7$.", working: "365.7", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "P(10)\\approx365.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P(10)\\approx365.7$",
            commonErrors: ["Computing $300(1.02\\times10)=3060$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-model-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A quantity halves every 5 years. Which type of model best describes it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exponential decay $y=ae^{-kt}$" },
              { id: "b", text: "Linear decrease $y=a-bt$" },
              { id: "c", text: "Quadratic $y=ax^2+bx+c$" },
              { id: "d", text: "Constant $y=a$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Choosing a model", statement: "Constant percentage change per period → exponential model." },
            ],
            steps: [
              { reasoning: "Halving every fixed period is a constant ratio → exponential decay.", working: "y=ae^{-kt}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Exponential decay",
            commonErrors: ["Choosing linear — halving is not a constant decrease."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-model-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Plan A costs $C=800+15n$ and Plan B costs $C=1200+10n$ where $n$ is items bought. Find the cost of Plan B for $n=60$.",
          response: { type: "numeric", parts: [{ label: "Cost ($)", answer: 1800 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear cost model", statement: "$C(60)=1200+10(60)=1800$." },
            ],
            steps: [
              { reasoning: "$C(60)=1200+600=1800$.", working: "1800", marks: 1, markCode: "M" },
              { reasoning: "State the cost.", working: "1800", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$1800$",
            commonErrors: ["Using Plan A's formula."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-model-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A population is modelled by $P(t)=250e^{0.03t}$. What does the constant $0.03$ represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Continuous growth rate of 3% per unit time" },
              { id: "b", text: "Initial population 0.03" },
              { id: "c", text: "Population increases by exactly 0.03 each year" },
              { id: "d", text: "Population doubles every 0.03 years" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exponential model", statement: "In $P=Pe^{rt}$, $r$ is the continuous rate; $e^{0.03}\\approx1.0305$ ≈ 3% growth." },
            ],
            steps: [
              { reasoning: "$r=0.03$ is the continuous growth rate, equivalent to about 3% per year.", working: "r=0.03\\approx3\\%", marks: 1, markCode: "M" },
              { reasoning: "The initial population is the coefficient 250, not 0.03.", working: "P_0=250", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Continuous growth rate ≈3%",
            commonErrors: ["Interpreting 0.03 as a fixed additive increase."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-model-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A car travels at constant speed with $d=60t$ ($d$ in km, $t$ in hours). Find the distance after 2.5 hours.",
          response: { type: "numeric", parts: [{ label: "$d$ (km)", answer: 150 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear model", statement: "$d=60(2.5)=150$ km." },
            ],
            steps: [
              { reasoning: "$d=60\\times2.5=150$ km.", working: "150", marks: 1, markCode: "B" },
            ],
            finalAnswer: "150 km",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "mypme5-u2-model-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two phone plans: Plan A costs $C=2000+8n$ and Plan B costs $C=1500+12n$. Find the break-even number of units $n$.",
          response: { type: "numeric", parts: [{ label: "$n$", answer: 125 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Break-even", statement: "Set costs equal: $2000+8n=1500+12n$ → $500=4n$ → $n=125$." },
            ],
            steps: [
              { reasoning: "$2000+8n=1500+12n$ → $500=4n$ → $n=125$.", working: "n=125", marks: 1, markCode: "M" },
              { reasoning: "State the break-even point.", working: "n=125", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n=125$",
            commonErrors: ["Subtracting in the wrong direction giving negative $n$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-model-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A bacteria culture is modelled by $N(t)=500\\cdot2^{t/3}$ where $t$ is in hours. Find the time when $N=8000$.",
          response: { type: "numeric", parts: [{ label: "$t$ (hours)", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exponential model", statement: "$8000=500\\cdot2^{t/3}$ → $16=2^{t/3}$ → $t/3=4$ → $t=12$." },
            ],
            steps: [
              { reasoning: "$\\frac{8000}{500}=16=2^{t/3}$ → $2^4=2^{t/3}$ → $t=12$.", working: "t=12", marks: 1, markCode: "M" },
              { reasoning: "Equate exponents: $t/3=4$.", working: "t/3=4", marks: 1, markCode: "M" },
              { reasoning: "State $t=12$ hours.", working: "12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$t=12$ hours",
            commonErrors: ["Writing $16=2^{t/3}$ as $t=16\\times3=48$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-model-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two phone plans: Plan A charges $\\$30$ per month plus $\\$0.10$ per minute; Plan B charges $\\$45$ per month for unlimited calls.",
          parts: [
            { label: "a", prompt: "Write cost functions $C_A(m)$ and $C_B(m)$ where $m$ is minutes used.", marks: 2 },
            { label: "b", prompt: "Find the break-even number of minutes.", marks: 2 },
            { label: "c", prompt: "Which plan is cheaper for a user of 200 minutes per month?", marks: 1 },
            { label: "d", prompt: "Find the monthly saving for that user.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear cost models", statement: "$C_A=30+0.1m$, $C_B=45$; break-even at $m=150$." },
            ],
            steps: [
              { part: "a", reasoning: "$C_A(m)=30+0.1m$ and $C_B(m)=45$.", working: "C_A=30+0.1m,\\ C_B=45", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both functions.", working: "30+0.1m\\text{ and }45", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$30+0.1m=45$ → $0.1m=15$ → $m=150$.", working: "m=150", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the break-even.", working: "150\\text{ min}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$C_A(200)=30+20=50>45=C_B$ → Plan B cheaper.", working: "\\text{Plan B}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Saving $=50-45=\\$5$ per month.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $C_A=30+0.1m$, $C_B=45$ (b) 150 min (c) Plan B (d) $\\$5$",
            commonErrors: ["Comparing at the break-even point rather than at 200 minutes."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypme5-u2-model-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the model $y=1200-35x$, what does the slope $-35$ represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The value decreases by 35 per unit increase in $x$" },
              { id: "b", text: "The initial value is 35" },
              { id: "c", text: "The value halves every 35 units" },
              { id: "d", text: "$y$ is negative when $x=35$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Linear model", statement: "In $y=a+bx$, $b$ is the rate of change; here $-35$ means decrease of 35 per unit." },
            ],
            steps: [
              { reasoning: "Slope $-35$ → rate of decrease of 35 units per unit of $x$.", working: "-35\\text{ per unit}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Decrease of 35 per unit",
            commonErrors: ["Reading the slope as the initial value (which is 1200)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-model-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The temperature of cooling coffee is modelled by $T(t)=20+80e^{-0.1t}$ where $t$ is in minutes and the room temperature is $20\\text{°C}$. What does the value $20+80=100$ at $t=0$ represent, and what does $T\\to20$ as $t\\to\\infty$ represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Initial temperature 100°C; long-term temperature equals room temperature" },
              { id: "b", text: "Room temperature 100°C; coffee heats to 20°C" },
              { id: "c", text: "Boiling point 100°C; coffee freezes at 20°C" },
              { id: "d", text: "The coffee never cools below 80°C" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Interpreting models", statement: "In $T=A+Be^{-kt}$, $A$ is the ambient/long-term temperature and $A+B$ is the initial temperature." },
            ],
            steps: [
              { reasoning: "$T(0)=20+80=100$°C is the initial coffee temperature.", working: "T(0)=100", marks: 1, markCode: "M" },
              { reasoning: "As $t\\to\\infty$, $e^{-0.1t}\\to0$ so $T\\to20$°C — room temperature.", working: "T\\to20", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Initial 100°C; tends to room temperature 20°C",
            commonErrors: ["Thinking the model predicts the coffee keeps cooling below room temperature."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-model-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Coffee at $100\\text{°C}$ cools in a room at $20\\text{°C}$ according to $T(t)=20+80e^{-0.1t}$ ($t$ in minutes).",
          parts: [
            { label: "a", prompt: "Verify that $T(0)=100$.", marks: 1 },
            { label: "b", prompt: "Find the temperature after 10 minutes.", marks: 2 },
            { label: "c", prompt: "Find the time at which $T=30\\text{°C}$.", marks: 1 },
            { label: "d", prompt: "Interpret the parameter $0.1$ in context.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Newton's cooling", statement: "$T(t)=T_{room}+(T_0-T_{room})e^{-kt}$ with $k=0.1$ per minute." },
            ],
            steps: [
              { part: "a", reasoning: "$T(0)=20+80e^0=20+80=100$ ✓.", working: "T(0)=100", marks: 1, markCode: "B" },
              { part: "b", reasoning: "$T(10)=20+80e^{-1}=20+80(0.36788)=20+29.43=49.4$°C.", working: "49.4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the temperature.", working: "49.4\\text{°C}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$20+80e^{-0.1t}=30$ → $e^{-0.1t}=0.125$ → $t=\\frac{\\ln8}{0.1}=20.8$ min.", working: "t=20.8", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$k=0.1$ is the cooling rate constant — larger $k$ means faster cooling.", working: "k=0.1\\text{ per min}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 100°C ✓ (b) 49.4°C (c) 20.8 min (d) cooling rate constant",
            commonErrors: ["In (c), solving $e^{-0.1t}=10$ instead of $0.125$."],
            examinerNote: "B1 for (a), M1 A1 for (b), M1 for (c), R1 for (d).",
          },
        },
      ],
    },
    {
      id: "mypme5-u2-rational",
      title: "Rational and Trigonometric Graphs",
      skill: "Sketch rational functions with asymptotes and trigonometric functions with correct period, amplitude, and phase.",
      lesson: {
        sections: [
          {
            heading: "Rational functions",
            body: "$y=\\frac{k}{x-h}+v$ has vertical asymptote $x=h$ and horizontal asymptote $y=v$. $y=\\frac{ax+b}{cx+d}$ has VA where $cx+d=0$ and HA at $y=\\frac{a}{c}$. Sketch using asymptotes as guides.",
          },
          {
            heading: "Trigonometric graphs",
            body: "$y=a\\sin(bx)+c$: amplitude $|a|$, period $\\frac{2\\pi}{b}$, vertical shift $c$. For $y=a\\cos(bx)$: starts at max. Phase shift: $y=a\\sin(b(x-h))$ shifts right $h$.",
          },
          {
            heading: "Modelling periodic phenomena",
            body: "Tides, seasons, sound waves, and daily temperature cycles are periodic. Fit $y=a\\sin(bx)+c$ by identifying amplitude (half peak-to-trough), period, and midline.",
          },
        ],
        keyFormulas: [
          { name: "Rational VA", statement: "$x=h$ for $y=\\frac{k}{x-h}+v$" },
          { name: "Amplitude", statement: "$|a|$ in $y=a\\sin(bx)+c$" },
          { name: "Period", statement: "$\\frac{2\\pi}{b}$" },
          { name: "Midline", statement: "$y=c$" },
        ],
        workedExample: {
          problem: "Sketch $y=\\frac{6}{x-2}+1$.",
          solution: "VA at $x=2$, HA at $y=1$; two branches approaching asymptotes; passes through $(3,7)$ and $(1,-5)$.",
        },
      },
      questions: [
        {
          id: "mypme5-u2-rat-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the asymptotes of $y=\\frac{4}{x-3}+2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=3$ and $y=2$" },
              { id: "b", text: "$x=-3$ and $y=2$" },
              { id: "c", text: "$x=3$ and $y=-2$" },
              { id: "d", text: "No asymptotes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Asymptotes", statement: "VA: $x=3$ (denominator zero); HA: $y=2$ (shift)." },
            ],
            steps: [
              { reasoning: "$x-3=0$ → $x=3$; $+2$ → HA $y=2$.", working: "x=3,y=2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x=3$ and $y=2$",
            commonErrors: ["Confusing sign of horizontal shift."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u2-rat-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $y=3\\sin(2x)+1$, state amplitude, period, and midline.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amplitude 3, period $\\pi$, midline $y=1$" },
              { id: "b", text: "Amplitude 1.5, period $\\pi$, midline $y=3$" },
              { id: "c", text: "Amplitude 3, period $2\\pi$, midline $y=1$" },
              { id: "d", text: "Amplitude 3, period $\\pi$, midline $y=0$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trig parameters", statement: "Amplitude $=|a|=3$; period $=\\frac{2\\pi}{2}=\\pi$; midline $y=c=1$." },
            ],
            steps: [
              { reasoning: "Amplitude 3, period $\\pi$, midline $y=1$.", working: "3,\\pi,1", marks: 1, markCode: "M" },
              { reasoning: "State all three.", working: "\\text{amplitude, period, midline}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Amplitude 3, period $\\pi$, midline $y=1$",
            commonErrors: ["Using $2\\pi$ for period without dividing by $b$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-rat-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find where $y=\\frac{6}{x-2}+1$ crosses the $x$-axis.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=-4$" },
              { id: "b", text: "$x=4$" },
              { id: "c", text: "$x=8$" },
              { id: "d", text: "$x=-2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "x-intercept", statement: "Set $y=0$: $\\frac{6}{x-2}+1=0$ → $\\frac{6}{x-2}=-1$ → $x-2=-6$ → $x=-4$." },
            ],
            steps: [
              { reasoning: "$\\frac{6}{x-2}=-1$ → $6=-(x-2)$ → $x=-4$.", working: "x=-4", marks: 1, markCode: "M" },
              { reasoning: "Verify: $\\frac{6}{-4-2}+1=\\frac{6}{-6}+1=-1+1=0$ ✓.", working: "x=-4", marks: 1, markCode: "M" },
              { reasoning: "State the intercept.", working: "x=-4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-4$",
            commonErrors: ["Forgetting to check the solution is not the asymptote."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-rat-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The height of a tide is modelled by $h=3\\sin\\left(\\frac{\\pi t}{6}\\right)+4$ metres, where $t$ = hours after midnight.",
          parts: [
            { label: "a", prompt: "Find the amplitude, period, and midline.", marks: 2 },
            { label: "b", prompt: "Find the maximum and minimum tide heights.", marks: 2 },
            { label: "c", prompt: "Find the first time after midnight when the tide is at midline rising.", marks: 2 },
            { label: "d", prompt: "How many high tides occur in 24 hours?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trig model", statement: "Amplitude 3, period $\\frac{2\\pi}{\\pi/6}=12$ h, midline $y=4$." },
            ],
            steps: [
              { part: "a", reasoning: "Amplitude 3, period 12 h, midline $h=4$ m.", working: "3,12,4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three.", working: "\\text{amplitude, period, midline}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Max $=4+3=7$ m; min $=4-3=1$ m.", working: "7\\text{ and }1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State max and min.", working: "7\\text{ m},1\\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Midline crossings at $t=0,6,12,18,24$; rising when $\\sin$ goes from negative to positive: at $t=12$ h (noon). $t=6$ is falling.", working: "t=12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the time.", working: "t=12\\text{ h}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Period 12 h → 2 cycles in 24 h → 2 high tides.", working: "2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the count.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) amplitude 3, period 12 h, midline 4 m (b) 7 m and 1 m (c) 12 h (d) 2",
            commonErrors: ["In (c), giving $t=6$ — at $t=6$ the tide is falling through midline, not rising."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme5-u2-rat-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the vertical asymptote of $y=\\frac{1}{x-3}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=3$" },
              { id: "b", text: "$x=0$" },
              { id: "c", text: "$y=0$" },
              { id: "d", text: "$x=-3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vertical asymptote", statement: "Denominator zero at $x=3$ → vertical asymptote $x=3$." },
            ],
            steps: [
              { reasoning: "Set $x-3=0$ → $x=3$.", working: "x=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x=3$",
            commonErrors: ["Answering $y=0$ (that would be horizontal)."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u2-rat-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $y=\\frac{2}{x}+1$ at $x=4$.",
          response: { type: "numeric", parts: [{ label: "$y$", answer: 1.5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Function evaluation", statement: "$y=\\frac{2}{4}+1=0.5+1=1.5$." },
            ],
            steps: [
              { reasoning: "$\\frac{2}{4}+1=1.5$.", working: "1.5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1.5",
            commonErrors: ["Computing $\\frac{2}{4+1}=0.4$."],
          },
        },
        {
          id: "mypme5-u2-rat-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the horizontal asymptote of $y=\\frac{3x+1}{x-2}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=3$" },
              { id: "b", text: "$y=1$" },
              { id: "c", text: "$y=\\frac13$" },
              { id: "d", text: "$y=-2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Horizontal asymptote", statement: "For $y=\\frac{ax+b}{cx+d}$ with equal degrees, HA is $y=\\frac{a}{c}=\\frac{3}{1}=3$." },
            ],
            steps: [
              { reasoning: "Ratio of leading coefficients: $3/1=3$.", working: "y=3", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $y=3$",
            commonErrors: ["Dividing the constant terms $1/(-2)$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-rat-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the period of $y=4\\cos(3x)$.",
          response: { type: "numeric", parts: [{ label: "Period", answer: 2.094, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trig period", statement: "Period $=\\frac{2\\pi}{B}=\\frac{2\\pi}{3}\\approx2.094$." },
            ],
            steps: [
              { reasoning: "$B=3$ → period $=\\frac{2\\pi}{3}\\approx2.094$.", working: "2.094", marks: 1, markCode: "M" },
              { reasoning: "State the period.", working: "2\\pi/3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{2\\pi}{3}\\approx2.094$",
            commonErrors: ["Using $\\frac{2\\pi}{4}=1.571$ (the amplitude as $B$)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-rat-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the range of $y=2+3\\cos x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-1\\le y\\le5$" },
              { id: "b", text: "$2\\le y\\le5$" },
              { id: "c", text: "$-3\\le y\\le3$" },
              { id: "d", text: "$5\\le y\\le8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sinusoid range", statement: "$\\cos x\\in[-1,1]$ → $3\\cos x\\in[-3,3]$ → $y\\in[2-3,\\,2+3]=[-1,5]$." },
            ],
            steps: [
              { reasoning: "Amplitude 3, vertical shift 2: range $[2-3,2+3]=[-1,5]$.", working: "[-1,5]", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $-1\\le y\\le5$",
            commonErrors: ["Ignoring the vertical shift of 2."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "mypme5-u2-rat-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $y=\\frac{x+1}{x-1}$ at $x=3$.",
          response: { type: "numeric", parts: [{ label: "$y$", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Function evaluation", statement: "$y=\\frac{3+1}{3-1}=\\frac42=2$." },
            ],
            steps: [
              { reasoning: "$\\frac{4}{2}=2$.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Computing $\\frac{x}{x}+1=2$ incorrectly or evaluating $\\frac{3+1}{3}-1$."],
          },
        },
        {
          id: "mypme5-u2-rat-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $\\frac{1}{x-2}=3$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 2.333, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solving rational equations", statement: "$1=3(x-2)$ → $x-2=\\frac13$ → $x=\\frac73\\approx2.333$." },
            ],
            steps: [
              { reasoning: "$1=3(x-2)$ → $x-2=\\frac13$ → $x=\\frac73$.", working: "x=\\frac73", marks: 1, markCode: "M" },
              { reasoning: "State the value: $2.333$.", working: "2.333", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=\\frac73\\approx2.333$",
            commonErrors: ["Multiplying $\\frac{1}{x-2}=3$ to get $x-2=3$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-rat-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the positive $x$-coordinate where the graphs of $y=\\frac{2}{x}$ and $y=x$ intersect.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 1.414, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Intersection", statement: "$\\frac{2}{x}=x$ → $x^2=2$ → $x=\\pm\\sqrt2$; positive root $x=\\sqrt2\\approx1.414$." },
            ],
            steps: [
              { reasoning: "$\\frac{2}{x}=x$ → $x^2=2$.", working: "x^2=2", marks: 1, markCode: "M" },
              { reasoning: "$x=\\pm\\sqrt2$; take the positive root.", working: "x=\\sqrt2", marks: 1, markCode: "M" },
              { reasoning: "State $x\\approx1.414$.", working: "1.414", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=\\sqrt2\\approx1.414$",
            commonErrors: ["Reporting $x=-\\sqrt2$ which lies on the other branch."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-rat-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Consider $y=\\frac{4}{x-1}-2$.",
          parts: [
            { label: "a", prompt: "State the vertical asymptote.", marks: 1 },
            { label: "b", prompt: "State the horizontal asymptote.", marks: 1 },
            { label: "c", prompt: "Find the $y$-intercept.", marks: 1 },
            { label: "d", prompt: "Find the $x$-intercept.", marks: 1 },
            { label: "e", prompt: "Describe the transformations from $y=\\frac1x$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Rational graph features", statement: "$y=\\frac{a}{x-h}+k$: VA $x=h$, HA $y=k$, intercepts found by substitution." },
            ],
            steps: [
              { part: "a", reasoning: "Vertical asymptote at $x=1$.", working: "x=1", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Horizontal asymptote $y=-2$.", working: "y=-2", marks: 1, markCode: "B" },
              { part: "c", reasoning: "$x=0$: $y=\\frac{4}{-1}-2=-6$.", working: "(0,-6)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$y=0$: $\\frac{4}{x-1}=2$ → $x-1=2$ → $x=3$.", working: "(3,0)", marks: 1, markCode: "M" },
              { part: "e", reasoning: "From $y=\\frac1x$: stretch SF 4 in $y$, translate 1 right, translate 2 down.", working: "\\text{SF }4,\\text{ right }1,\\text{ down }2", marks: 1, markCode: "M" },
              { part: "e", reasoning: "State the transformations in correct order.", working: "\\text{stated}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x=1$ (b) $y=-2$ (c) $(0,-6)$ (d) $(3,0)$ (e) stretch SF 4, right 1, down 2",
            commonErrors: ["Giving HA $y=0$ instead of $y=-2$."],
            examinerNote: "B1 for (a)-(b), M1 for (c)-(d), M1 A1 for (e).",
          },
        },
        {
          id: "mypme5-u2-rat-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Where are the vertical asymptotes of $y=\\tan x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=\\frac{\\pi}{2}+k\\pi$" },
              { id: "b", text: "$x=k\\pi$" },
              { id: "c", text: "$x=\\frac{\\pi}{4}+k\\pi$" },
              { id: "d", text: "$x=\\frac{\\pi}{2}+2k\\pi$ only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tangent asymptotes", statement: "$\\tan x=\\frac{\\sin x}{\\cos x}$ is undefined where $\\cos x=0$, i.e. $x=\\frac{\\pi}{2}+k\\pi$." },
            ],
            steps: [
              { reasoning: "$\\cos x=0$ at odd multiples of $\\frac{\\pi}{2}$: $\\frac{\\pi}{2}+k\\pi$.", working: "x=\\frac{\\pi}{2}+k\\pi", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x=\\frac{\\pi}{2}+k\\pi$",
            commonErrors: ["Listing only $x=\\frac{\\pi}{2}$ without all repeats."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-rat-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For $y=2\\sin(3x-\\frac{\\pi}{4})$, identify the amplitude, period and phase shift.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amplitude 2, period $\\frac{2\\pi}{3}$, phase shift $\\frac{\\pi}{12}$ right" },
              { id: "b", text: "Amplitude 2, period $6\\pi$, phase shift $\\frac{\\pi}{4}$ left" },
              { id: "c", text: "Amplitude 3, period $\\frac{2\\pi}{3}$, phase shift $\\frac{\\pi}{12}$ right" },
              { id: "d", text: "Amplitude 2, period $\\frac{\\pi}{3}$, phase shift $\\frac{\\pi}{4}$ right" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sinusoid parameters", statement: "$y=A\\sin(Bx+C)$: amplitude $|A|$, period $\\frac{2\\pi}{|B|}$, phase shift $-\\frac{C}{B}$." },
            ],
            steps: [
              { reasoning: "$A=2$, $B=3$ → period $\\frac{2\\pi}{3}$; rewrite as $3\\left(x-\\frac{\\pi}{12}\\right)$ giving shift $\\frac{\\pi}{12}$.", working: "\\frac{2\\pi}{3},\\ \\frac{\\pi}{12}", marks: 1, markCode: "M" },
              { reasoning: "Rewrite: $y=2\\sin\\left(3\\left(x-\\frac{\\pi}{12}\\right)\\right)$ → shift $\\frac{\\pi}{12}$ right.", working: "x-\\frac{\\pi}{12}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Amp 2, period $\\frac{2\\pi}{3}$, shift $\\frac{\\pi}{12}$ right",
            commonErrors: ["Dividing the phase shift by amplitude instead of $B$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-rat-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "The height of the tide is modelled by $h(t)=3\\sin\\left(\\frac{\\pi t}{6}\\right)+5$ metres, where $t$ is in hours.",
          parts: [
            { label: "a", prompt: "State the amplitude and the mean water level.", marks: 2 },
            { label: "b", prompt: "Find the highest and lowest tide heights.", marks: 1 },
            { label: "c", prompt: "Find the time between consecutive high tides.", marks: 1 },
            { label: "d", prompt: "Find the water height at $t=3$ hours.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sinusoidal model", statement: "$h=A\\sin(Bt)+C$: amplitude $|A|$, mean $C$, high/low $C\\pm|A|$, period $\\frac{2\\pi}{B}$." },
            ],
            steps: [
              { part: "a", reasoning: "Amplitude $=3$; mean level $=5$ m.", working: "A=3,C=5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", working: "3\\text{ m and }5\\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "High $=5+3=8$ m; low $=5-3=2$ m.", working: "8\\text{ and }2\\text{ m}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Period $=\\frac{2\\pi}{\\pi/6}=12$ hours.", working: "12\\text{ h}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$h(3)=3\\sin\\left(\\frac{\\pi}{2}\\right)+5=3(1)+5=8$ m.", working: "8\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) amplitude 3 m, mean 5 m (b) 8 m and 2 m (c) 12 h (d) 8 m",
            commonErrors: ["In (d), computing $\\sin(\\pi/6)$ instead of $\\sin(\\pi/2)$."],
            examinerNote: "M1 A1 for (a), M1 for (b), M1 for (c), A1 for (d).",
          },
        },
      ],
    },
  ],
};
