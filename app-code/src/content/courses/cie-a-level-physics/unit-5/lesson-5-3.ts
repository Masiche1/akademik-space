import type { Lesson } from "../../../types.ts";

export const lesson513: Lesson = {
  id: "cial-p-u5-lesson-5-3",
  code: "5-3",
  title: "Capacitors and AC circuits",
  goal: "I CAN describe capacitor charging, RC circuits and AC behaviour.",
  standards: ["9702 11: capacitors, AC"],
  vocabulary: [
    { term: "Capacitance", definition: "Charge stored per volt — $C = Q/V$ (farads)." },
    { term: "RC circuit", definition: "Resistor-capacitor circuit — exponential charging/discharging." },
    { term: "Time constant", definition: "$\\tau = RC$ — time for 63% charge." },
    { term: "AC", definition: "Alternating current — voltage/current varies sinusoidally." },
    { term: "RMS", definition: "Root-mean-square value — equivalent DC value." },
    { term: "Reactance", definition: "Effective resistance of capacitor/inductor to AC." },
  ],
  concepts: [
    {
      id: "cial-p-u5-capacitors",
      title: "Capacitors and RC circuits",
      skill: "Apply capacitor equations and describe charging/discharging.",
      lesson: {
        sections: [
          {
            heading: "Capacitor basics",
            body: "$Q = CV$; $E = \\frac12 CV^2 = \\frac12 QV$. Capacitance depends on plate area, separation, dielectric. Parallel plate: $C = \\varepsilon_0 A/d$. Dielectric increases C.",
          },
          {
            heading: "RC charging",
            body: "Charging: $Q = Q_0(1 - e^{-t/RC})$; voltage similar. Time constant $\\tau = RC$ — after $\\tau$, 63% charged; after 5$\\tau$, ~99%. Discharging: exponential decay. Current max at start, →0 when charged.",
          },
          {
            heading: "RC applications",
            body: "Timing circuits, smoothing, filtering, camera flashes, memory backup. Oscilloscope traces show exponential curves. Charge vs time: rises steeply then levels off.",
          },
        ],
        keyFormulas: [
          { name: "Capacitance", statement: "$C = Q/V$" },
          { name: "Energy", statement: "$E = \\frac12 CV^2$" },
          { name: "Time constant", statement: "$\\tau = RC$" },
        ],
        workedExample: {
          problem: "A 100 μF capacitor charges through 1 kΩ resistor. Find time constant.",
          solution: "$\\tau = RC = 1000 \\times 100\\times10^{-6} = 0.1\\ s$.",
        },
      },
      questions: [
        {
          id: "cial-p-u5-cap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is capacitance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Charge stored per volt — $C = Q/V$" },
              { id: "b", text: "Voltage per unit charge" },
              { id: "c", text: "Current times resistance" },
              { id: "d", text: "Energy per unit mass" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Capacitance", statement: "$C = Q/V$ (farads)." }],
            steps: [{ reasoning: "C = Q/V.", marks: 1, markCode: "A" }],
            finalAnswer: "$C = Q/V$",
          },
        },
        {
          id: "cial-p-u5-cap-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 50 μF capacitor at 12 V stores how much charge and energy?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Capacitor", statement: "$Q=CV$, $E=\\frac12CV^2$." }],
            steps: [
              { reasoning: "$Q = 50\\times10^{-6} \\times 12 = 6\\times10^{-4}\\ C$.", marks: 1, markCode: "M" },
              { reasoning: "$E = \\frac12 \\times 50\\times10^{-6} \\times 144 = 3.6\\times10^{-3}\\ J$.", marks: 1, markCode: "M" },
              { reasoning: "$Q = 0.6\\ mC$, $E = 3.6\\ mJ$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Q = 0.6\\ mC$, $E = 3.6\\ mJ$",
          },
        },
        {
          id: "cial-p-u5-cap-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In an RC circuit, what is the time constant and what does it represent?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Time constant", statement: "$\\tau = RC$ — 63% charge time." }],
            steps: [
              { reasoning: "$\\tau = RC$ — product of resistance and capacitance.", marks: 1, markCode: "M" },
              { reasoning: "After one $\\tau$, capacitor is 63% charged.", marks: 1, markCode: "M" },
              { reasoning: "After 5$\\tau$, ~99% charged — effectively full.", marks: 1, markCode: "M" },
              { reasoning: "Units: seconds (R in Ω, C in F).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$\\tau = RC$ — 63% charge time",
          },
        },
        {
          id: "cial-p-u5-cap-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Capacitors.",
          parts: [
            { label: "a", prompt: "Define capacitance.", marks: 2 },
            { label: "b", prompt: "What factors affect capacitance?", marks: 2 },
            { label: "c", prompt: "What is time constant?", marks: 2 },
            { label: "d", prompt: "A 200 μF capacitor charges through 500 Ω. Find $\\tau$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Capacitors", statement: "$C=Q/V$; $\\tau=RC$." }],
            steps: [
              { part: "a", reasoning: "$C = Q/V$ — farads.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Plate area, separation, dielectric.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "$\\tau = RC$ — charging timescale.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "$\\tau = 500 \\times 200\\times10^{-6}$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$\\tau = 0.1\\ s$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$\\tau = 100\\ ms$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Q/V (b) area/gap/dielectric (c) τ=RC (d) 0.1 s",
          },
        },
      ],
    },
    {
      id: "cial-p-u5-ac",
      title: "AC circuits",
      skill: "Describe AC behaviour, RMS values and reactance.",
      lesson: {
        sections: [
          {
            heading: "AC basics",
            body: "AC: voltage/current varies sinusoidally — $V = V_0\\sin(2\\pi ft)$. Peak value $V_0$; RMS value $V_{rms} = V_0/\\sqrt{2}$ — equivalent DC power. Mains: 230 V rms, 50 Hz (UK) or 120 V, 60 Hz (US).",
          },
          {
            heading: "Capacitor in AC",
            body: "Capacitor blocks DC but passes AC. Reactance $X_C = 1/(2\\pi fC)$ — decreases with frequency. Current leads voltage by 90°. At high f, X_C → 0 (acts as short).",
          },
          {
            heading: "Inductor in AC",
            body: "Inductor opposes change in current. Reactance $X_L = 2\\pi fL$ — increases with frequency. Current lags voltage by 90°. At high f, X_L → ∞ (acts as open).",
          },
        ],
        keyFormulas: [
          { name: "RMS", statement: "$V_{rms} = V_0/\\sqrt{2}$" },
          { name: "Capacitive reactance", statement: "$X_C = 1/(2\\pi fC)$" },
          { name: "Inductive reactance", statement: "$X_L = 2\\pi fL$" },
        ],
        workedExample: {
          problem: "A 10 μF capacitor in 50 Hz AC. Find reactance.",
          solution: "$X_C = 1/(2\\pi \\times 50 \\times 10\\times10^{-6}) = 1/(0.00314) = 318\\ Ω$.",
        },
      },
      questions: [
        {
          id: "cial-p-u5-ac-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the relationship between peak and RMS voltage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$V_{rms} = V_0/\\sqrt{2}$" },
              { id: "b", text: "$V_{rms} = V_0\\sqrt{2}$" },
              { id: "c", text: "$V_{rms} = V_0$" },
              { id: "d", text: "$V_{rms} = 2V_0$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "RMS", statement: "$V_{rms} = V_0/\\sqrt{2}$." }],
            steps: [{ reasoning: "RMS = peak/√2.", marks: 1, markCode: "A" }],
            finalAnswer: "$V_{rms} = V_0/\\sqrt{2}$",
          },
        },
        {
          id: "cial-p-u5-ac-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A capacitor has reactance 100 Ω at 50 Hz. Find capacitance.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Reactance", statement: "$X_C = 1/(2\\pi fC)$ → $C = 1/(2\\pi fX_C)$." }],
            steps: [
              { reasoning: "$C = 1/(2\\pi \\times 50 \\times 100)$.", marks: 1, markCode: "M" },
              { reasoning: "$C = 1/(31,416) = 3.18\\times10^{-5}\\ F$.", marks: 1, markCode: "M" },
              { reasoning: "$C = 31.8\\ μF$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$C = 31.8\\ μF$",
          },
        },
        {
          id: "cial-p-u5-ac-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does a capacitor block DC but pass AC?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Capacitor AC", statement: "DC: charges once then blocks; AC: continuously charges/discharges." }],
            steps: [
              { reasoning: "DC: capacitor charges fully → no current.", marks: 1, markCode: "M" },
              { reasoning: "AC: voltage reverses → capacitor repeatedly charges/discharges.", marks: 1, markCode: "M" },
              { reasoning: "Continuous charge/discharge = alternating current flow.", marks: 1, markCode: "M" },
              { reasoning: "Reactance decreases with frequency.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "AC keeps charging/discharging",
          },
        },
        {
          id: "cial-p-u5-ac-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "AC circuits.",
          parts: [
            { label: "a", prompt: "Define RMS voltage.", marks: 2 },
            { label: "b", prompt: "What is capacitive reactance?", marks: 2 },
            { label: "c", prompt: "What is inductive reactance?", marks: 2 },
            { label: "d", prompt: "Why can't transformers use DC?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "AC", statement: "$V_{rms}=V_0/\\sqrt2$; $X_C=1/2\\pi fC$; $X_L=2\\pi fL$." }],
            steps: [
              { part: "a", reasoning: "$V_{rms} = V_0/\\sqrt{2}$ — equivalent DC.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$X_C = 1/(2\\pi fC)$ — decreases with f.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "$X_L = 2\\pi fL$ — increases with f.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "DC = constant flux — no induction.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Faraday needs changing flux.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Only AC provides continuously changing flux.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) V0/√2 (b) XC=1/2πfC (c) XL=2πfL (d) DC no flux change",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-p-u5-capacitors-ac-notes",
      title: "Capacitors and AC — revision notes",
      summary: "Capacitance, RC circuits, reactance, RMS values.",
      sections: [
        {
          heading: "Capacitors",
          body: "$Q = CV$; $E = \\frac12 CV^2$; $\\tau = RC$. Charging exponential — 63% at $\\tau$, 99% at 5$\\tau$. C increases with area/dielectric, decreases with gap.",
        },
        {
          heading: "AC",
          body: "$V_{rms} = V_0/\\sqrt2$. Capacitor: $X_C = 1/(2\\pi fC)$, current leads 90°. Inductor: $X_L = 2\\pi fL$, current lags 90°. Capacitor blocks DC, passes AC.",
        },
        {
          heading: "Exam checklist",
          body: "For RC circuits identify charging vs discharging curve. Reactance depends on frequency — check f first.",
        },
      ],
    },
  ],
};
