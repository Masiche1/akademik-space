import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "edialfm-u5-lesson-5-2",
  code: "5-2",
  title: "Work, Energy and Power",
  goal: "I CAN apply the work-energy principle, including variable forces, springs and work done against gravity and friction.",
  standards: ["WME02 M2", "Energy"],
  vocabulary: [
    { term: "Work done by a force", definition: "$W=\\int F\\,ds$; for constant force $W=Fs\\cos\\theta$ where $\\theta$ is angle between force and displacement." },
    { term: "Kinetic energy", definition: "$KE=\\frac12mv^2$." },
    { term: "Potential energy", definition: "Gravitational $PE=mgh$; elastic $PE=\\frac12kx^2$ for a spring extended $x$ from natural length." },
    { term: "Work-energy principle", definition: "Net work done = change in kinetic energy: $\\int F\\,ds=\\Delta KE$." },
    { term: "Power", definition: "$P=\\frac{dW}{dt}=Fv$ for force $F$ moving at speed $v$." },
  ],
  concepts: [
    {
      id: "edialfm-u5-energy-basics",
      title: "Work and energy methods",
      skill: "Apply work-energy principle to problems with constant and variable forces.",
      lesson: {
        sections: [
          {
            heading: "Work by a variable force",
            body: "When $F$ varies with position, $W=\\int F(s)\\,ds$. E.g. spring force $F=-kx$ gives work $=\\int_0^x(-kx)dx=-\\frac12kx^2$ (negative since force opposes extension).",
          },
          {
            heading: "The work-energy principle",
            body: "$\\int F\\,ds=\\Delta KE=\\frac12mv^2-\\frac12mu^2$. Include all forces (gravity, friction, tension) with correct signs: work done *by* a force adds to KE; work done *against* subtracts.",
          },
          {
            heading: "Energy conservation",
            body: "With no dissipation: $KE+PE=$ constant. With friction, mechanical energy lost $=$ work done against friction $=\\mu mg\\cos\\theta\\times$ distance (on incline).",
          },
        ],
        keyFormulas: [
          { name: "Work-energy", statement: "$\\int F\\,ds=\\frac12mv^2-\\frac12mu^2$" },
          { name: "Spring PE", statement: "$EPE=\\frac12kx^2$" },
          { name: "Power", statement: "$P=Fv$" },
        ],
        workedExample: {
          problem: "A mass $m$ slides down a smooth incline of angle $\\theta$ through distance $d$. Find speed at bottom given start from rest.",
          solution: "Work-energy: $mgd\\sin\\theta=\\frac12mv^2\\Rightarrow v=\\sqrt{2gd\\sin\\theta}$.",
        },
      },
      questions: [
        {
          id: "edialfm-we-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The work done by a variable force $F(s)$ over displacement from $s_1$ to $s_2$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$F(s_2)-F(s_1)$" },
              { id: "b", text: "$\\int_{s_1}^{s_2}F(s)\\,ds$" },
              { id: "c", text: "$F\\times(s_2-s_1)$ always" },
              { id: "d", text: "$\\frac{dF}{ds}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Work", statement: "$W=\\int F\\,ds$." }],
            steps: [{ reasoning: "Work is integral of force over displacement.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $\\int F\\,ds$",
          },
        },
        {
          id: "edialfm-we-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $2$ kg mass accelerates from $3$ m/s to $7$ m/s. Find the work done on it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Work-energy", statement: "$W=\\frac12m(v^2-u^2)$." }],
            steps: [
              { reasoning: "$W=\\frac12(2)(49-9)=40$ J.", working: "40", marks: 1, markCode: "M" },
              { reasoning: "State 40 J.", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$ J",
            commonErrors: ["Using $v-u$ instead of $v^2-u^2$."],
          },
        },
        {
          id: "edialfm-we-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A particle of mass $m$ is projected up a rough plane inclined at $30°$ with initial speed $u$. The coefficient of friction is $\\mu$. Find the distance travelled before stopping.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Work-energy with friction", statement: "Work against gravity + friction = initial KE." }],
            steps: [
              { reasoning: "Forces down plane: $mg\\sin30°=\\frac12mg$; friction $\\mu mg\\cos30°=\\frac{\\mu mg\\sqrt3}{2}$; total decelerating force per unit mass $=g(\\frac12+\\frac{\\mu\\sqrt3}{2})$.", working: "forces", marks: 1, markCode: "M" },
              { reasoning: "Work-energy: $\\frac12mu^2=mgd(\\frac12+\\frac{\\mu\\sqrt3}{2})$.", working: "equation", marks: 1, markCode: "M" },
              { reasoning: "$d=\\frac{u^2}{g(1+\\mu\\sqrt3)}$.", working: "d=", marks: 1, markCode: "M" },
              { reasoning: "State distance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$d=\\frac{u^2}{g(1+\\sqrt3\\,\\mu)}$",
            commonErrors: ["Wrong component of weight; friction direction."],
          },
        },
        {
          id: "edialfm-we-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A particle of mass $m$ moves on a smooth horizontal table attached to a spring of natural length $l$ and modulus $\\lambda$. It is pulled a distance $x$ from equilibrium and released.",
          parts: [
            { label: "a", prompt: "Show that the tension in the spring is $T=\\frac{\\lambda x}{l}$ when extended by $x$.", marks: 3 },
            { label: "b", prompt: "Use work-energy to find the speed when the particle passes through equilibrium.", marks: 4 },
            { label: "c", prompt: "Find the maximum extension if released from extension $x_0$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hooke's law", statement: "$T=\\frac{\\lambda x}{l}$." },
              { kind: "technique", name: "Energy", statement: "EPE $=\\frac12kx^2=\\frac{\\lambda x^2}{2l}$." },
            ],
            steps: [
              { part: "a", reasoning: "By Hooke's law $T=\\lambda\\cdot\\frac{\\text{extension}}{\\text{natural length}}=\\frac{\\lambda x}{l}$.", working: "T=lambda x/l", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State result.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Note extension measured from natural length.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "EPE at extension $x$: $\\frac{\\lambda x^2}{2l}$ converts to KE $\\frac12mv^2$ at equilibrium.", working: "energy eq", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\frac12mv^2=\\frac{\\lambda x^2}{2l}\\Rightarrow v=x\\sqrt{\\frac{\\lambda}{ml}}$.", working: "v=", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State speed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Verify dimensions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The particle oscillates about the natural length with amplitude $x_0$, so it reaches maximum extension $x_0$ on the far side (SHM symmetry: motion is symmetric about equilibrium).", working: "X=x0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Maximum extension is $x_0$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $T=\\frac{\\lambda x}{l}$ (b) $v=x\\sqrt{\\frac{\\lambda}{ml}}$ (c) max extension $x_0$",
            commonErrors: ["Forgetting modulus definition; energy bookkeeping."],
            examinerNote: "Part (c) tests understanding of SHM symmetry.",
          },
        },
      ],
    },
    {
      id: "edialfm-u5-energy-adv",
      title: "Power and energy with variable forces",
      skill: "Handle problems combining power, variable forces and energy conservation.",
      lesson: {
        sections: [
          {
            heading: "Power in mechanics",
            body: "$P=Fv$ instantaneously; work done over time $W=\\int P\\,dt$. For a car with resistance $\\propto v^2$, terminal velocity occurs when engine power equals resistance power.",
          },
          {
            heading: "Energy with position-dependent forces",
            body: "If $F=F(s)$, work $=\\int F\\,ds$ may define a potential function: if $F=-\\frac{dV}{ds}$ then $V$ is potential energy and energy conservation applies.",
          },
          {
            heading: "Combined problems",
            body: "Typical exam questions combine KE, PE, work against friction and power — draw an energy diagram accounting for every term.",
          },
        ],
        keyFormulas: [
          { name: "Power", statement: "$P=Fv$; $W=\\int P\\,dt$" },
          { name: "Conservative force", statement: "$F=-\\frac{dV}{ds}$" },
        ],
        workedExample: {
          problem: "A car of mass $m$ climbs a hill of gradient $1$ in $20$ at constant speed $v$. Find the power needed ignoring resistance.",
          solution: "Force $=mg\\sin\\theta\\approx mg\\cdot\\frac{1}{\\sqrt{401}}$? For gradient $1$ in $20$: $\\sin\\theta=\\frac{1}{\\sqrt{401}}$; power $=Fv=\\frac{mgv}{\\sqrt{401}}\\approx\\frac{mgv}{20.02}$.",
        },
      },
      questions: [
        {
          id: "edialfm-ea-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Instantaneous power is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$mv$" },
              { id: "b", text: "$Fv$" },
              { id: "c", text: "$Fs$" },
              { id: "d", text: "$\\frac{F}{v}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Power", statement: "$P=Fv$." }],
            steps: [{ reasoning: "Standard result.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $Fv$",
          },
        },
        {
          id: "edialfm-ea-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A force $F=3s^2$ acts on a particle. Find the work done moving from $s=0$ to $s=2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Work integral", statement: "$W=\\int F\\,ds$." }],
            steps: [
              { reasoning: "$W=\\int_0^2 3s^2\\,ds=[s^3]_0^2=8$ J.", working: "8", marks: 1, markCode: "M" },
              { reasoning: "State 8 J.", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ J",
            commonErrors: ["Integrating incorrectly."],
          },
        },
        {
          id: "edialfm-ea-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A particle of mass $m$ moves under force $F=4x-2$ (where $x$ is displacement). Given it starts at rest at $x=0$, find its speed at $x=3$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Work-energy", statement: "$\\int_0^3(4x-2)dx=\\frac12mv^2$." }],
            steps: [
              { reasoning: "$W=\\int_0^3(4x-2)dx=[2x^2-2x]_0^3=18-6=12$.", working: "12", marks: 1, markCode: "M" },
              { reasoning: "$\\frac12mv^2=12\\Rightarrow v=\\sqrt{\\frac{24}{m}}$.", working: "v=", marks: 1, markCode: "M" },
              { reasoning: "State speed.", marks: 1, markCode: "A" },
              { reasoning: "Check sign: net work positive.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$v=\\sqrt{\\frac{24}{m}}$",
            commonErrors: ["Sign of work; KE formula."],
          },
        },
        {
          id: "edialfm-ea-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A car of mass $1200$ kg experiences resistance $R=40v^2$ N (v in m/s) and engine force $F$. Maximum speed on level ground is $30$ m/s.",
          parts: [
            { label: "a", prompt: "Find the engine force at maximum speed.", marks: 3 },
            { label: "b", prompt: "Find the power developed at maximum speed.", marks: 3 },
            { label: "c", prompt: "Explain why $F$ must decrease as speed increases if power is constant.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Terminal velocity", statement: "At max speed, driving force = resistance." }],
            steps: [
              { part: "a", reasoning: "At $v=30$: $R=40\\times900=36000$ N; $F=R$ at max speed.", working: "F=36000", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State $F=36000$ N.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Check: zero acceleration.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P=Fv=36000\\times30=1.08\\times10^6$ W $=1080$ kW.", working: "1080 kW", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State power.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Conclude.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Constant power $P=Fv$ means $F=P/v$ decreases as $v$ increases.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "At higher speeds resistance $40v^2$ grows, requiring less margin.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Equilibrium when $F(v)=40v^2$.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclude explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $36000$ N (b) $1080$ kW (c) $F=P/v$ decreases",
            commonErrors: ["Using $v^2$ vs $v$ in power."],
          },
        },
      ],
    },
  ],
};
