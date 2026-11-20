import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "edxifm-u6-lesson-6-2",
  code: "6-2",
  title: "Simple Harmonic Motion and Elasticity",
  goal: "I CAN analyse simple harmonic motion including springs, apply Hooke law, and locate centres of mass.",
  standards: ["WME03 M3", "SHM and elasticity"],
  vocabulary: [
    { term: "Simple harmonic motion", definition: "Motion with $\\ddot{x}=-\\omega^2x$; period $T=2\\pi/\\omega$." },
    { term: "Modulus of elasticity", definition: "$\\lambda$ in Hooke law $T=\\lambda x/l$." },
    { term: "Centre of mass", definition: "Point where total weight may be considered to act: $\\bar{x}=\\frac{\\sum m_ix_i}{\\sum m_i}$." },
  ],
  concepts: [
    {
      id: "edxifm-u6-shm",
      title: "Simple Harmonic Motion",
      skill: "Analyse SHM: period, amplitude, energy, and applications to springs and pendulums.",
      lesson: {
        sections: [
          {
            heading: "Definition and equation",
            body: "SHM: acceleration $a=-\\omega^2x$ where $x$ is displacement from equilibrium. Solution $x=A\\cos(\\omega t+\\phi)$ or $x=A\\sin(\\omega t+\\phi)$; period $T=\\frac{2\\pi}{\\omega}$, frequency $f=\\frac{\\omega}{2\\pi}$.",
          },
          {
            heading: "Spring-mass system",
            body: "For mass $m$ on spring stiffness $k$: $\\omega=\\sqrt{\\frac{k}{m}}$, $T=2\\pi\\sqrt{\\frac{m}{k}}$. Independent of amplitude (isochronous).",
          },
          {
            heading: "Energy in SHM",
            body: "Total energy $=\\frac12kA^2$ constant; KE $=\\frac12k(A^2-x^2)$, PE $=\\frac12kx^2$. At extremes all PE; at centre all KE $=\\frac12m\\omega^2A^2$.",
          },
        ],
        keyFormulas: [
          { name: "SHM equation", statement: "$\\ddot{x}=-\\omega^2x$" },
          { name: "Period", statement: "$T=2\\pi\\sqrt{\\frac{m}{k}}$ (spring)" },
        ],
        workedExample: {
          problem: "A $0.2$ kg mass on a spring of stiffness $50$ N/m oscillates. Find period and max speed if amplitude $0.1$ m.",
          solution: "$\\omega=\\sqrt{250}=15.8$ rad/s; $T=\\frac{2\\pi}{15.8}=0.397$ s; $v_{\\max}=\\omega A=1.58$ m/s.",
        },
      },
      questions: [
        {
          id: "edxifm-shm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In SHM, acceleration is proportional to displacement and:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Directed toward equilibrium" },
              { id: "b", text: "Directed away" },
              { id: "c", text: "Constant" },
              { id: "d", text: "Zero at centre" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "SHM", statement: "$a=-\\omega^2x$ restoring." }],
            steps: [{ reasoning: "Restoring force toward equilibrium.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** toward equilibrium",
          },
        },
        {
          id: "edxifm-shm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A particle executes SHM with amplitude $0.05$ m and period $2$ s. Find $\\omega$ and maximum acceleration.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "SHM", statement: "$\\omega=\\frac{2\\pi}{T}$, $a_{\\max}=\\omega^2A$." }],
            steps: [
              { reasoning: "$\\omega=\\pi$ rad/s.", working: "pi", marks: 1, markCode: "M" },
              { reasoning: "$a_{\\max}=\\pi^2\\times0.05=\\frac{\\pi^2}{20}\\approx0.49$ m/s².", working: "0.49", marks: 1, markCode: "M" },
              { reasoning: "State values.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\omega=\\pi$, $a_{\\max}\\approx0.49$ m/s²",
            commonErrors: ["Using $T$ instead of $\\omega$."],
          },
        },
        {
          id: "edxifm-shm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A $0.5$ kg mass hangs from a spring; it stretches $0.1$ m under the weight. Find the period of oscillation ($g=9.8$).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Spring SHM", statement: "$k=\\frac{mg}{e}$, $T=2\\pi\\sqrt{\\frac{m}{k}}=2\\pi\\sqrt{\\frac{e}{g}}$." }],
            steps: [
              { reasoning: "$k=\\frac{0.5\\times9.8}{0.1}=49$ N/m.", working: "k=49", marks: 1, markCode: "M" },
              { reasoning: "$T=2\\pi\\sqrt{\\frac{0.5}{49}}=2\\pi\\sqrt{\\frac{1}{98}}=\\frac{2\\pi}{7\\sqrt2}=\\frac{\\pi\\sqrt2}{7}\\approx0.635$ s.", working: "0.635", marks: 1, markCode: "M" },
              { reasoning: "State period.", marks: 1, markCode: "A" },
              { reasoning: "Mass cancels: $T=2\\pi\\sqrt{e/g}$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$T=\\frac{\\pi\\sqrt2}{7}\\approx0.635$ s",
            commonErrors: ["Forgetting static extension gives $k$."],
          },
        },
        {
          id: "edxifm-shm-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A particle of mass $m$ on a spring of stiffness $k$ is displaced $A$ from equilibrium and released at $t=0$.",
          parts: [
            { label: "a", prompt: "Write $x(t)$ for the motion.", marks: 3 },
            { label: "b", prompt: "Find the maximum speed and when it first occurs.", marks: 3 },
            { label: "c", prompt: "Show total energy $=\\frac12kA^2$ and find KE at $x=\\frac{A}{2}$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "SHM solution", statement: "$x=A\\cos\\omega t$ for release from $x=A$ at rest." },
              { kind: "technique", name: "Energy", statement: "$E=\\frac12kA^2$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\omega=\\sqrt{\\frac{k}{m}}$; $x=A\\cos\\omega t$ satisfies $x(0)=A$, $\\dot{x}(0)=0$.", working: "x=Acos(wt)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Verify $\\ddot{x}=-\\omega^2x$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State solution.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\dot{x}=-A\\omega\\sin\\omega t$; max $|\\dot{x}|=A\\omega=A\\sqrt{\\frac{k}{m}}$.", working: "vmax", marks: 1, markCode: "M" },
              { part: "b", reasoning: "First occurs when $\\sin\\omega t=1$, i.e. $t=\\frac{\\pi}{2\\omega}=\\frac{T}{4}$.", working: "T/4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State speed and time.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Total energy $=\\frac12kA^2$ (all PE at extremes).", working: "E", marks: 1, markCode: "M" },
              { part: "c", reasoning: "At $x=\\frac{A}{2}$: $KE=\\frac12k(A^2-\\frac{A^2}{4})=\\frac{3kA^2}{8}$.", working: "3kA^2/8", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Or $KE=E-PE=\\frac12kA^2-\\frac12k\\frac{A^2}{4}=\\frac{3kA^2}{8}$.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State KE.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x=A\\cos\\omega t$ (b) $v_{\\max}=A\\sqrt{\\frac{k}{m}}$ at $t=\\frac{T}{4}$ (c) $KE=\\frac{3kA^2}{8}$",
            commonErrors: ["Phase choice; energy split."],
          },
        },
      ],
    },
    {
      id: "edxifm-u6-elasticity",
      title: "Elasticity, Collisions and Centres of Mass",
      skill: "Apply Hooke's law, elasticity in collisions, and locate centres of mass.",
      lesson: {
        sections: [
          {
            heading: "Hooke's law and modulus",
            body: "Tension $T=\\frac{\\lambda x}{l}$ where $\\lambda$ is modulus, $l$ natural length, $x$ extension. Strain $=\\frac{x}{l}$, stress $=\\frac{T}{A}$. Elastic limit: beyond it Hooke's law fails.",
          },
          {
            heading: "Collisions with restitution (recap)",
            body: "Coefficient $e=\\frac{\\text{separation}}{\\text{approach}}$; KE lost $=(1-e^2)\\times$ KE associated with relative motion. For equal masses elastic 1D, velocities exchange.",
          },
          {
            heading: "Centre of mass",
            body: "For particles: $\\bar{x}=\\frac{\\sum m_ix_i}{\\sum m_i}$. For continuous bodies, integrate: $\\bar{x}=\\frac{\\int x\\,dm}{\\int dm}$. Composite bodies: weighted average of component centres of mass.",
          },
        ],
        keyFormulas: [
          { name: "Hooke's law", statement: "$T=\\frac{\\lambda x}{l}$" },
          { name: "Centre of mass", statement: "$\\bar{x}=\\frac{\\sum m_ix_i}{\\sum m_i}$" },
        ],
        workedExample: {
          problem: "Two masses $3$ kg at $x=0$ and $7$ kg at $x=4$ m. Find centre of mass.",
          solution: "$\\bar{x}=\\frac{3\\times0+7\\times4}{10}=\\frac{28}{10}=2.8$ m.",
        },
      },
      questions: [
        {
          id: "edxifm-el-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Hooke's law states tension is proportional to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Extension" },
              { id: "b", text: "Length" },
              { id: "c", text: "Mass" },
              { id: "d", text: "Time" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Hooke", statement: "$T\\propto x$ within elastic limit." }],
            steps: [{ reasoning: "Extension.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** extension",
          },
        },
        {
          id: "edxifm-el-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A spring of natural length $0.5$ m and modulus $20$ N is stretched to $0.7$ m. Find the tension.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Hooke", statement: "$T=\\frac{\\lambda x}{l}$." }],
            steps: [
              { reasoning: "$x=0.2$ m; $T=\\frac{20\\times0.2}{0.5}=8$ N.", working: "8", marks: 1, markCode: "M" },
              { reasoning: "State 8 N.", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ N",
            commonErrors: ["Using stretched length not extension."],
          },
        },
        {
          id: "edxifm-el-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Three masses $1,2,3$ kg are at positions $x=0,1,3$ m. Find the centre of mass.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "COM", statement: "$\\bar{x}=\\frac{\\sum m_ix_i}{\\sum m_i}$." }],
            steps: [
              { reasoning: "$\\bar{x}=\\frac{1\\times0+2\\times1+3\\times3}{6}=\\frac{11}{6}$ m.", working: "11/6", marks: 1, markCode: "M" },
              { reasoning: "State value.", marks: 1, markCode: "M" },
              { reasoning: "Check total mass $6$.", marks: 1, markCode: "A" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\bar{x}=\\frac{11}{6}$ m $\\approx1.83$ m",
            commonErrors: ["Weighting errors."],
          },
        },
        {
          id: "edxifm-el-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A uniform rod of length $2l$ and mass $M$ has a point mass $m$ attached at one end. The system hangs from the other end.",
          parts: [
            { label: "a", prompt: "Find the centre of mass of the system from the pivot.", marks: 3 },
            { label: "b", prompt: "Show the system is in equilibrium when the rod is horizontal if... state the condition for balance.", marks: 3 },
            { label: "c", prompt: "Find the period of small oscillations about the stable equilibrium (state assumptions).", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Composite COM", statement: "Weighted average of rod COM and point mass." },
            ],
            steps: [
              { part: "a", reasoning: "Rod COM at distance $l$ from pivot; mass $m$ at distance $2l$.", working: "positions", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\bar{x}=\\frac{M\\cdot l+m\\cdot2l}{M+m}=\\frac{l(M+2m)}{M+m}$.", working: "xbar", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State COM.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Equilibrium: COM vertically below pivot — rod horizontal is NOT equilibrium (COM at $\\bar{x}>0$).", working: "not eq", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Stable equilibrium when rod hangs vertically downward (COM below pivot).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State condition.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Moment of inertia about pivot: $I=\\frac{1}{3}M(2l)^2+m(2l)^2=\\frac{4Ml^2}{3}+4ml^2$.", working: "I", marks: 1, markCode: "M" },
              { part: "c", reasoning: "For small oscillations $\\omega^2=\\frac{Mg\\bar{x}}{I}$? Use $\\omega^2=\\frac{(M+m)g\\bar{x}}{I}$.", working: "omega", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\omega^2=\\frac{(M+m)g\\cdot\\frac{l(M+2m)}{M+m}}{\\frac{4Ml^2}{3}+4ml^2}=\\frac{gl(M+2m)}{4l^2(M/3+m)}=\\frac{3g(M+2m)}{4l(M+3m)}$.", working: "omega^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State $\\omega=\\sqrt{\\frac{3g(M+2m)}{4l(M+3m)}}$ (small-angle approximation).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\bar{x}=\\frac{l(M+2m)}{M+m}$ (b) vertical hang stable (c) $\\omega=\\sqrt{\\frac{3g(M+2m)}{4l(M+3m)}}$",
            commonErrors: ["COM position; moment of inertia."],
            examinerNote: "Compound pendulum result — accept stated assumptions.",
          },
        },
      ],
    },

  ],
};
