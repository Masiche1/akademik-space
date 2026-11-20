import type { Lesson } from "../../../types.ts";

export const lesson211: Lesson = {
  id: "cial-p-u2-lesson-2-1",
  code: "2-1",
  title: "Work, energy and power",
  goal: "I CAN apply work–energy theorem, conservation of energy and power calculations.",
  standards: ["9702 5: work, energy, power"],
  vocabulary: [
    { term: "Work done", definition: "Force × displacement in force direction — $W = Fs\\cos\\theta$ (J)." },
    { term: "Kinetic energy", definition: "Energy of motion — $E_k = \\frac12 mv^2$." },
    { term: "Gravitational PE", definition: "Energy from height — $E_p = mgh$." },
    { term: "Elastic PE", definition: "Energy stored in stretched/compressed spring." },
    { term: "Power", definition: "Rate of energy transfer — $P = W/t = Fv$ (W)." },
    { term: "Efficiency", definition: "Useful output / total input × 100%." },
  ],
  concepts: [
    {
      id: "cial-p-u2-work-energy",
      title: "Work and energy",
      skill: "Calculate work done and apply conservation of energy.",
      lesson: {
        sections: [
          {
            heading: "Work done",
            body: "$W = Fs\\cos\\theta$ where $\\theta$ is angle between force and displacement. Only force component in direction of motion does work. Work = energy transferred (J). Negative work = energy removed.",
          },
          {
            heading: "Kinetic and potential energy",
            body: "$E_k = \\frac12 mv^2$; $E_p = mgh$ (near surface). Total mechanical energy conserved if no friction: $E_k + E_p = \\text{constant}$. With friction, energy dissipated as heat/sound.",
          },
          {
            heading: "Work–energy theorem",
            body: "Net work done = change in kinetic energy: $W_{net} = \\Delta E_k$. Useful for problems where forces act over distance but time unknown.",
          },
        ],
        keyFormulas: [
          { name: "Work", statement: "$W = Fs\\cos\\theta$" },
          { name: "KE", statement: "$E_k = \\frac12 mv^2$" },
          { name: "GPE", statement: "$E_p = mgh$" },
        ],
        workedExample: {
          problem: "A 2 kg mass falls 5 m. Find KE on reaching ground ($g = 9.81$).",
          solution: "$E_p = mgh = 2 \\times 9.81 \\times 5 = 98.1\\ J$; $E_k = E_p = 98.1\\ J$ (energy conserved).",
        },
      },
      questions: [
        {
          id: "cial-p-u2-we-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the work done by a 10 N force moving an object 5 m in the force direction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$50\\ J$" },
              { id: "b", text: "$2\\ J$" },
              { id: "c", text: "$15\\ J$" },
              { id: "d", text: "$500\\ J$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Work", statement: "$W = Fs$." }],
            steps: [{ reasoning: "$W = 10 \\times 5 = 50\\ J$.", marks: 1, markCode: "A" }],
            finalAnswer: "$50\\ J$",
          },
        },
        {
          id: "cial-p-u2-we-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 500 kg car accelerates from 10 to 20 m/s. Find change in KE.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "KE", statement: "$E_k = \\frac12 mv^2$; $\\Delta E_k = \\frac12 m(v^2-u^2)$." }],
            steps: [
              { reasoning: "$\\Delta E_k = \\frac12 \\times 500 \\times (400 - 100)$.", marks: 1, markCode: "M" },
              { reasoning: "$= 250 \\times 300 = 75,000\\ J$.", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta E_k = 75\\ kJ$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\Delta E_k = 75\\ kJ$",
          },
        },
        {
          id: "cial-p-u2-we-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A force of 100 N acts at 60° to the direction of motion over 10 m. Find work done.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Work at angle", statement: "$W = Fs\\cos\\theta$." }],
            steps: [
              { reasoning: "$W = Fs\\cos\\theta$ — only parallel component does work.", marks: 1, markCode: "M" },
              { reasoning: "$W = 100 \\times 10 \\times \\cos 60° = 100 \\times 10 \\times 0.5$.", marks: 1, markCode: "M" },
              { reasoning: "$W = 500\\ J$.", marks: 1, markCode: "A" },
              { reasoning: "Perpendicular component does no work.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$W = 500\\ J$",
          },
        },
        {
          id: "cial-p-u2-we-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Work and energy.",
          parts: [
            { label: "a", prompt: "Define work done and state its unit.", marks: 2 },
            { label: "b", prompt: "A 3 kg mass is lifted 2 m. Find GPE gained.", marks: 2 },
            { label: "c", prompt: "What is the work–energy theorem?", marks: 2 },
            { label: "d", prompt: "A 2 kg mass falls from 10 m. Find speed on reaching ground ($g=9.81$).", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Energy", statement: "$W=Fs\\cos\\theta$; $E_k=\\frac12mv^2$; $E_p=mgh$." }],
            steps: [
              { part: "a", reasoning: "$W = Fs\\cos\\theta$; unit joule.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$E_p = mgh = 3 \\times 9.81 \\times 2 = 58.9\\ J$.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Net work = change in KE.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "$mgh = \\frac12 mv^2$ → $v = \\sqrt{2gh}$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$v = \\sqrt{2 \\times 9.81 \\times 10} = \\sqrt{196.2}$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$v = 14.0\\ m\\ s^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Fs cosθ, J (b) 58.9 J (c) W=ΔKE (d) 14.0 m/s",
          },
        },
      ],
    },
    {
      id: "cial-p-u2-power",
      title: "Power and efficiency",
      skill: "Calculate power, efficiency and energy transfer rates.",
      lesson: {
        sections: [
          {
            heading: "Power",
            body: "$P = \\frac{W}{t} = \\frac{E}{t}$ (watts). For constant force: $P = Fv$. For lifting: $P = mgv$. Power is scalar — rate of energy transfer.",
          },
          {
            heading: "Efficiency",
            body: "$\\eta = \\frac{\\text{useful output}}{\\text{total input}} \\times 100\\%$. Always < 100% — some energy lost as heat/sound. Useful output depends on device (useful KE, light, etc.).",
          },
          {
            heading: "Energy transfer",
            body: "Electrical: $P = VI$; mechanical: $P = Fv$; gravitational: $P = mgv$ when lifting at speed $v$. Combine with efficiency to find actual vs ideal power.",
          },
        ],
        keyFormulas: [
          { name: "Power", statement: "$P = \\frac{W}{t} = Fv$" },
          { name: "Efficiency", statement: "$\\eta = \\frac{\\text{output}}{\\text{input}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "A motor lifts a 50 kg mass at 2 m/s. Find power ($g = 9.81$).",
          solution: "$P = Fv = mgv = 50 \\times 9.81 \\times 2 = 981\\ W$.",
        },
      },
      questions: [
        {
          id: "cial-p-u2-pw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the power of a machine doing 100 J of work in 5 s?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20\\ W$" },
              { id: "b", text: "$500\\ W$" },
              { id: "c", text: "$105\\ W$" },
              { id: "d", text: "$0.2\\ W$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Power", statement: "$P = W/t$." }],
            steps: [{ reasoning: "$P = 100/5 = 20\\ W$.", marks: 1, markCode: "A" }],
            finalAnswer: "$20\\ W$",
          },
        },
        {
          id: "cial-p-u2-pw-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A crane lifts 200 kg at 1.5 m/s. Find power required ($g = 9.81$).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Power", statement: "$P = Fv = mgv$." }],
            steps: [
              { reasoning: "$P = mgv = 200 \\times 9.81 \\times 1.5$.", marks: 1, markCode: "M" },
              { reasoning: "$= 200 \\times 9.81 \\times 1.5 = 2943\\ W$.", marks: 1, markCode: "M" },
              { reasoning: "$P = 2.94\\ kW$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P = 2.94\\ kW$",
          },
        },
        {
          id: "cial-p-u2-pw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A motor is 80% efficient. Input power is 5 kW. Find useful output power.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Efficiency", statement: "$\\eta = \\text{output}/\\text{input}$." }],
            steps: [
              { reasoning: "$\\eta = 0.8 = \\text{output}/5000$.", marks: 1, markCode: "M" },
              { reasoning: "Output $= 0.8 \\times 5000 = 4000\\ W$.", marks: 1, markCode: "M" },
              { reasoning: "$P_{out} = 4\\ kW$.", marks: 1, markCode: "A" },
              { reasoning: "20% lost as heat/sound.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$P_{out} = 4\\ kW$",
          },
        },
        {
          id: "cial-p-u2-pw-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Power and efficiency.",
          parts: [
            { label: "a", prompt: "Define power and give its unit.", marks: 2 },
            { label: "b", prompt: "A 1000 kg car accelerates from 0 to 20 m/s in 10 s. Find average power.", marks: 4 },
            { label: "c", prompt: "What is efficiency?", marks: 1 },
            { label: "d", prompt: "A device has 90% efficiency. Input 200 W. Find output.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Power", statement: "$P=W/t=Fv$; $\\eta=\\text{out}/\\text{in}$." }],
            steps: [
              { part: "a", reasoning: "Rate of energy transfer; watt.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$\\Delta E_k = \\frac12 \\times 1000 \\times 400 = 200,000\\ J$.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "$P = 200,000/10 = 20,000\\ W$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$P = 20\\ kW$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Useful output/input × 100%.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$P_{out} = 0.9 \\times 200 = 180\\ W$.", marks: 2, markCode: "M" },
            ],
            finalAnswer: "(a) W/t, W (b) 20 kW (c) out/in (d) 180 W",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-p-u2-energy-notes",
      title: "Work, energy and power — revision notes",
      summary: "Work-energy theorem, KE/GPE, power and efficiency.",
      sections: [
        {
          heading: "Energy",
          body: "$W = Fs\\cos\\theta$; $E_k = \\frac12 mv^2$; $E_p = mgh$. Conservation: $E_k + E_p = $ const (no friction). Work–energy theorem: $W_{net} = \\Delta E_k$.",
        },
        {
          heading: "Power",
          body: "$P = W/t = Fv$. Efficiency $= \\text{output}/\\text{input} \\times 100\\%$. Always <100% — losses as heat.",
        },
        {
          heading: "Exam checklist",
          body: "For falling objects use energy conservation ($mgh = \\frac12 mv^2$) — quicker than suvat. Check angle for work done.",
        },
      ],
    },
  ],
};
