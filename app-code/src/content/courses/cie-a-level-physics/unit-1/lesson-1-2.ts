import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "cial-p-u1-lesson-1-2",
  code: "1-2",
  title: "Newton's laws and momentum",
  goal: "I CAN apply Newton's laws, resolve forces and use conservation of momentum.",
  standards: ["9702 3: dynamics, momentum"],
  vocabulary: [
    { term: "Force", definition: "Push or pull measured in newtons ($N$)." },
    { term: "Weight", definition: "Gravitational force on mass — $W = mg$." },
    { term: "Friction", definition: "Force opposing relative motion between surfaces." },
    { term: "Momentum", definition: "Mass × velocity — $p = mv$ (vector)." },
    { term: "Impulse", definition: "Force × time = change in momentum — $Ft = \\Delta p$." },
    { term: "Normal reaction", definition: "Contact force perpendicular to surface." },
  ],
  concepts: [
    {
      id: "cial-p-u1-newton",
      title: "Newton's laws and forces",
      skill: "Apply Newton's three laws and resolve forces on inclined planes.",
      lesson: {
        sections: [
          {
            heading: "Three laws",
            body: "1st: object stays at rest/uniform motion unless net force acts. 2nd: $F = ma$ (net force). 3rd: every action has equal opposite reaction. Weight $W = mg$ acts vertically down; normal reaction perpendicular to surface; friction opposes motion.",
          },
          {
            heading: "Resolving forces",
            body: "On a slope at angle $\\theta$: weight component along slope $= mg\\sin\\theta$, perpendicular $= mg\\cos\\theta$. Resolve all forces parallel and perpendicular to motion; apply $F = ma$ in each direction. Friction $F_f = \\mu N$ where $\\mu$ = coefficient of friction, $N$ = normal reaction.",
          },
          {
            heading: "Connected bodies",
            body: "For two masses on a string/pulley: treat as system ($F_{net} = (m_1+m_2)a$) or separately with tension $T$. Tension same throughout string. Pulley assumed frictionless unless stated.",
          },
        ],
        keyFormulas: [
          { name: "Newton II", statement: "$F = ma$" },
          { name: "Weight", statement: "$W = mg$" },
          { name: "Friction", statement: "$F_f = \\mu N$" },
        ],
        workedExample: {
          problem: "A 5 kg block on a horizontal surface has $\\mu = 0.2$. What force is needed to move it at constant velocity?",
          solution: "$N = mg = 5 \\times 9.81 = 49\\ N$; $F_f = 0.2 \\times 49 = 9.8\\ N$; constant velocity → applied force $= 9.8\\ N$.",
        },
      },
      questions: [
        {
          id: "cial-p-u1-nw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the weight of a 2 kg mass ($g = 9.81\\ m\\ s^{-2}$)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$19.6\\ N$" },
              { id: "b", text: "$2\\ N$" },
              { id: "c", text: "$9.81\\ N$" },
              { id: "d", text: "$4.9\\ N$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Weight", statement: "$W = mg$." }],
            steps: [{ reasoning: "$W = 2 \\times 9.81 = 19.6\\ N$.", marks: 1, markCode: "A" }],
            finalAnswer: "$19.6\\ N$",
          },
        },
        {
          id: "cial-p-u1-nw-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 10 kg box is pulled with 50 N on a rough surface ($\\mu = 0.3$). Find acceleration.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Newton II", statement: "$F_{net} = ma$; $F_f = \\mu N$." }],
            steps: [
              { reasoning: "$N = mg = 98.1\\ N$; $F_f = 0.3 \\times 98.1 = 29.4\\ N$.", marks: 1, markCode: "M" },
              { reasoning: "$F_{net} = 50 - 29.4 = 20.6\\ N$.", marks: 1, markCode: "M" },
              { reasoning: "$a = 20.6/10 = 2.06\\ m\\ s^{-2}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a = 2.06\\ m\\ s^{-2}$",
          },
        },
        {
          id: "cial-p-u1-nw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A block slides down a frictionless slope at 30°. Find its acceleration.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inclined plane", statement: "Resolve weight: $mg\\sin\\theta$ along slope." }],
            steps: [
              { reasoning: "Component along slope $= mg\\sin 30° = 0.5mg$.", marks: 1, markCode: "M" },
              { reasoning: "$F = ma$: $0.5mg = ma$ → $a = 0.5g$.", marks: 1, markCode: "M" },
              { reasoning: "$a = 4.9\\ m\\ s^{-2}$ down the slope.", marks: 1, markCode: "A" },
              { reasoning: "Direction down slope; frictionless assumed.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$a = 4.9\\ m\\ s^{-2}$ down slope",
          },
        },
        {
          id: "cial-p-u1-nw-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Newton's laws.",
          parts: [
            { label: "a", prompt: "State Newton's three laws.", marks: 3 },
            { label: "b", prompt: "A 5 kg mass accelerates at 3 m/s². Find net force.", marks: 1 },
            { label: "c", prompt: "What is friction $F_f$ when $\\mu = 0.4$ and $N = 100\\ N$?", marks: 1 },
            { label: "d", prompt: "On a 30° slope, what fraction of weight acts along the slope?", marks: 2 },
            { label: "e", prompt: "Explain Newton's third law with an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Newton's laws", statement: "F=ma; action-reaction pairs." }],
            steps: [
              { part: "a", reasoning: "Three laws stated correctly.", marks: 3, markCode: "A" },
              { part: "b", reasoning: "$F = 5 \\times 3 = 15\\ N$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$F_f = 0.4 \\times 100 = 40\\ N$.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$mg\\sin 30° = 0.5mg$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Half the weight.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Action-reaction pair on different bodies.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Example: book on table — book pushes table, table pushes book.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 3 laws (b) 15 N (c) 40 N (d) half weight (e) action-reaction",
          },
        },
      ],
    },
    {
      id: "cial-p-u1-momentum",
      title: "Momentum and impulse",
      skill: "Apply conservation of momentum and impulse-momentum theorem.",
      lesson: {
        sections: [
          {
            heading: "Momentum",
            body: "$p = mv$ — vector quantity. Total momentum conserved in isolated systems (no external force). Collisions: elastic (KE conserved) vs inelastic (KE not conserved, objects may stick).",
          },
          {
            heading: "Conservation of momentum",
            body: "$m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$. For explosion: total momentum before = 0, after = sum of parts (equal opposite). For collision: solve simultaneous equations. In perfectly inelastic collision objects move together at common velocity.",
          },
          {
            heading: "Impulse",
            body: "$Ft = \\Delta p = m(v - u)$. Force–time graph: area = impulse = change in momentum. Long impact time reduces force (crumple zones, airbags). Short time = large force (hammer).",
          },
        ],
        keyFormulas: [
          { name: "Momentum", statement: "$p = mv$" },
          { name: "Conservation", statement: "$m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$" },
          { name: "Impulse", statement: "$Ft = \\Delta p$" },
        ],
        workedExample: {
          problem: "A 1000 kg car at 20 m/s hits a stationary 1000 kg car and they stick together. Find common velocity.",
          solution: "$1000 \\times 20 = 2000v$ → $v = 10\\ m\\ s^{-1}$.",
        },
      },
      questions: [
        {
          id: "cial-p-u1-mom-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the momentum of a 2 kg object moving at 5 m/s?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10\\ kg\\ m\\ s^{-1}$" },
              { id: "b", text: "$7\\ kg\\ m\\ s^{-1}$" },
              { id: "c", text: "$2.5\\ kg\\ m\\ s^{-1}$" },
              { id: "d", text: "$10\\ N$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Momentum", statement: "$p = mv$." }],
            steps: [{ reasoning: "$p = 2 \\times 5 = 10\\ kg\\ m\\ s^{-1}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$10\\ kg\\ m\\ s^{-1}$",
          },
        },
        {
          id: "cial-p-u1-mom-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 2 kg object moving at 3 m/s collides with a stationary 4 kg object and they stick together. Find common velocity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Momentum conservation", statement: "Total momentum before = after." }],
            steps: [
              { reasoning: "Before: $2 \\times 3 + 0 = 6\\ kg\\ m\\ s^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "After: $(2+4)v = 6v$.", marks: 1, markCode: "M" },
              { reasoning: "$v = 1\\ m\\ s^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$v = 1\\ m\\ s^{-1}$",
          },
        },
        {
          id: "cial-p-u1-mom-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A force of 50 N acts on a 5 kg mass for 0.2 s. Find change in momentum.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Impulse", statement: "$Ft = \\Delta p$." }],
            steps: [
              { reasoning: "$Ft = 50 \\times 0.2 = 10\\ N\\ s$.", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta p = 10\\ kg\\ m\\ s^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "Units: N s = kg m/s.", marks: 1, markCode: "A" },
              { reasoning: "Impulse equals change in momentum.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$\\Delta p = 10\\ kg\\ m\\ s^{-1}$",
          },
        },
        {
          id: "cial-p-u1-mom-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Momentum.",
          parts: [
            { label: "a", prompt: "Define momentum and give its unit.", marks: 2 },
            { label: "b", prompt: "A 3 kg ball at 4 m/s hits a wall and rebounds at 2 m/s. Find impulse.", marks: 3 },
            { label: "c", prompt: "What is conserved in an isolated system?", marks: 1 },
            { label: "d", prompt: "Why do airbags reduce injury?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Momentum", statement: "$p=mv$; impulse $Ft=\\Delta p$; momentum conserved." }],
            steps: [
              { part: "a", reasoning: "$p = mv$; unit kg m/s.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$\\Delta p = m(v-u) = 3(2-4) = -6$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Magnitude $= 6\\ kg\\ m\\ s^{-1}$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Direction reversed — sign matters.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Total momentum.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Increases impact time → reduces force.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$Ft = \\Delta p$ — longer t means smaller F.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Same momentum change but less force on body.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) p=mv (b) 6 kg m/s (c) momentum (d) longer time→less force",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-p-u1-dynamics-notes",
      title: "Newton's laws and momentum — revision notes",
      summary: "Forces, friction, inclined planes, momentum conservation and impulse.",
      sections: [
        {
          heading: "Forces",
          body: "$F=ma$, $W=mg$, $F_f=\\mu N$. On slope: $mg\\sin\\theta$ along, $mg\\cos\\theta$ perpendicular. Resolve parallel/perpendicular to motion.",
        },
        {
          heading: "Momentum",
          body: "$p=mv$; conserved in isolated systems. $Ft=\\Delta p$ (impulse). Longer impact time → smaller force (airbags, crumple zones).",
        },
        {
          heading: "Exam checklist",
          body: "Draw free-body diagrams first. Momentum is a vector — watch signs on rebound collisions.",
        },
      ],
    },
  ],
};
