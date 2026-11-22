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
              { id: "a", text: "Current times resistance" },
              { id: "b", text: "Energy per unit mass" },
              { id: "c", text: "Voltage per unit charge" },
              { id: "d", text: "Charge stored per volt — $C = Q/V$" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cial-p-u5-cap-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which change would increase the capacitance of a parallel-plate capacitor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inserting a dielectric between the plates" },
              { id: "b", text: "Decreasing the applied voltage" },
              { id: "c", text: "Reducing the area of the plates" },
              { id: "d", text: "Increasing the separation of the plates" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Capacitance factors", statement: "$C = \\varepsilon_0 A/d$; dielectric increases $\\varepsilon_r$." }],
            steps: [{ reasoning: "Dielectric raises permittivity → larger C.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** inserting a dielectric",
          },
        },
        {
          id: "cial-p-u5-cap-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $2.2\\ k\\Omega$ resistor charges a $47\\ \\mu F$ capacitor. Calculate the time constant of the circuit.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.103, tolerance: 0.005, unit: "s" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Time constant", statement: "$\\tau = RC$." }],
            steps: [
              { reasoning: "$\\tau = 2200 \\times 47\\times10^{-6}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\tau = 0.103\\ s$.", marks: 1, markCode: "M" },
              { reasoning: "$\\tau \\approx 103\\ ms$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\tau = 0.103\\ s$",
          },
        },
        {
          id: "cial-p-u5-cap-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The graph of charge (or voltage) against time for a charging capacitor is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a horizontal line" },
              { id: "b", text: "a curve falling to zero" },
              { id: "c", text: "an exponential curve rising steeply then levelling off" },
              { id: "d", text: "a straight line through the origin" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Charging curve", statement: "$Q = Q_0(1 - e^{-t/RC})$ — exponential approach to final value." }],
            steps: [{ reasoning: "Exponential rise, steepest at t = 0, levels off at $Q_0$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** exponential rise levelling off",
          },
        },
        {
          id: "cial-p-u5-cap-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $470\\ \\mu F$ capacitor is charged to $24\\ V$. Calculate the charge stored on it.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.0113, tolerance: 0.0002, unit: "C" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Capacitance", statement: "$Q = CV$." }],
            steps: [
              { reasoning: "$Q = 470\\times10^{-6} \\times 24$.", marks: 1, markCode: "M" },
              { reasoning: "$Q = 1.128\\times10^{-2}\\ C$.", marks: 1, markCode: "M" },
              { reasoning: "$Q = 11.3\\ mC$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Q = 11.3\\ mC$",
          },
        },
        {
          id: "cial-p-u5-cap-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe and explain how the current varies with time as a capacitor charges through a resistor from a steady-voltage supply.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "RC charging", statement: "Current $I = I_0 e^{-t/RC}$ — maximum at t = 0, decaying exponentially." }],
            steps: [
              { reasoning: "At t = 0 the capacitor is uncharged so p.d. across it is zero → current is maximum.", marks: 1, markCode: "M" },
              { reasoning: "As charge builds, p.d. across capacitor rises, leaving less voltage across the resistor.", marks: 1, markCode: "M" },
              { reasoning: "Current therefore decreases exponentially, $I = I_0 e^{-t/RC}$.", marks: 1, markCode: "M" },
              { reasoning: "Current falls to zero once the capacitor p.d. equals the supply voltage (fully charged).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Current decays exponentially from maximum to zero",
          },
        },
        {
          id: "cial-p-u5-cap-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Inserting a dielectric material between the plates of a capacitor causes its capacitance to",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "stay the same" },
              { id: "b", text: "become infinite" },
              { id: "c", text: "increase" },
              { id: "d", text: "decrease" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Dielectric", statement: "Dielectric increases permittivity → $C$ increases by factor $\\varepsilon_r$." }],
            steps: [{ reasoning: "Dielectric raises capacitance.", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** increase",
          },
        },
        {
          id: "cial-p-u5-cap-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $1.0\\ k\\Omega$ resistor and a $470\\ \\mu F$ capacitor are connected in series. Calculate the time constant.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.47, tolerance: 0.01, unit: "s" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Time constant", statement: "$\\tau = RC$." }],
            steps: [
              { reasoning: "$\\tau = 1000 \\times 470\\times10^{-6}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\tau = 0.470\\ s$.", marks: 1, markCode: "M" },
              { reasoning: "$\\tau = 470\\ ms$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\tau = 0.47\\ s$",
          },
        },
        {
          id: "cial-p-u5-cap-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "After a time of $5\\tau$ in an RC charging circuit, the capacitor is approximately",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "99% charged" },
              { id: "b", text: "50% charged" },
              { id: "c", text: "63% charged" },
              { id: "d", text: "fully discharged" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Charging", statement: "After $\\tau$: 63%; after $5\\tau$: $\\approx 99\\%$." }],
            steps: [{ reasoning: "$1 - e^{-5} \\approx 0.993$ → ~99% charged.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** 99% charged",
          },
        },
        {
          id: "cial-p-u5-cap-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A capacitor of initial charge $5.0\\ mC$ discharges through a resistor with time constant $0.20\\ s$. Calculate the charge remaining after $0.40\\ s$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.677, tolerance: 0.02, unit: "mC" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Discharging", statement: "$Q = Q_0 e^{-t/RC} = Q_0 e^{-t/\\tau}$." }],
            steps: [
              { reasoning: "$Q = 5.0 \\times e^{-0.40/0.20} = 5.0 \\times e^{-2}$.", marks: 1, markCode: "M" },
              { reasoning: "$Q = 5.0 \\times 0.1353$.", marks: 1, markCode: "M" },
              { reasoning: "$Q = 0.68\\ mC$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Q = 0.68\\ mC$",
          },
        },
        {
          id: "cial-p-u5-cap-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Give two uses of capacitors in electronic circuits and briefly explain the principle behind each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "application", name: "Capacitor uses", statement: "Smoothing, timing, filtering, camera flash, memory backup." }],
            steps: [
              { reasoning: "Smoothing: capacitor charges/discharges to reduce ripple in rectified supply.", marks: 1, markCode: "M" },
              { reasoning: "Timing: RC circuit gives predictable exponential charge/discharge time (e.g. flash, oscillator).", marks: 1, markCode: "M" },
              { reasoning: "Filtering: blocks DC / passes AC depending on reactance $X_C = 1/(2\\pi fC)$.", marks: 1, markCode: "M" },
              { reasoning: "Camera flash: stores energy $\\frac12 CV^2$ then releases it quickly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Any two with correct principles (smoothing, timing, filtering, flash)",
          },
        },
        {
          id: "cial-p-u5-cap-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The energy stored in a charged capacitor is given by",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$E = RCV$" },
              { id: "b", text: "$E = CV^2$" },
              { id: "c", text: "$E = \\frac{1}{2}CV^2$" },
              { id: "d", text: "$E = QV^2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Capacitor energy", statement: "$E = \\frac12 CV^2 = \\frac12 QV = Q^2/2C$." }],
            steps: [{ reasoning: "$E = \\frac12 CV^2$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** $E = \\frac{1}{2}CV^2$",
          },
        },
        {
          id: "cial-p-u5-cap-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A $100\\ \\mu F$ capacitor is charged to a p.d. of $200\\ V$. Calculate (a) the charge stored and (b) the energy stored.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.02, tolerance: 0.001, unit: "C" },
              { label: "b", answer: 2, tolerance: 0.05, unit: "J" },
            ],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Capacitor", statement: "$Q = CV$; $E = \\frac12 CV^2$." }],
            steps: [
              { reasoning: "$Q = 100\\times10^{-6} \\times 200 = 0.020\\ C$.", marks: 1, markCode: "M" },
              { reasoning: "$E = \\frac12 \\times 100\\times10^{-6} \\times 200^2 = 2.0\\ J$.", marks: 1, markCode: "M" },
              { reasoning: "$Q = 20\\ mC$, $E = 2.0\\ J$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Q = 20\\ mC$, $E = 2.0\\ J$",
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
              { id: "a", text: "$V_{rms} = 2V_0$" },
              { id: "b", text: "$V_{rms} = V_0/\\sqrt{2}$" },
              { id: "c", text: "$V_{rms} = V_0\\sqrt{2}$" },
              { id: "d", text: "$V_{rms} = V_0$" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cial-p-u5-ac-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The RMS value of an a.c. supply is defined as",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the average of the positive and negative peaks" },
              { id: "b", text: "the maximum value reached each cycle" },
              { id: "c", text: "the value of the equivalent steady d.c. that would produce the same power" },
              { id: "d", text: "half the peak value" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "RMS", statement: "RMS = equivalent DC value giving same average power." }],
            steps: [{ reasoning: "RMS is defined by equal power dissipation.", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** equivalent d.c. power value",
          },
        },
        {
          id: "cial-p-u5-ac-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $10\\ \\mu F$ capacitor is connected to a $50\\ Hz$ a.c. supply. Calculate its capacitive reactance.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 318, tolerance: 2, unit: "Ω" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Reactance", statement: "$X_C = 1/(2\\pi fC)$." }],
            steps: [
              { reasoning: "$X_C = 1/(2\\pi \\times 50 \\times 10\\times10^{-6})$.", marks: 1, markCode: "M" },
              { reasoning: "$X_C = 1/(3.14\\times10^{-3})$.", marks: 1, markCode: "M" },
              { reasoning: "$X_C = 318\\ \\Omega$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$X_C = 318\\ \\Omega$",
          },
        },
        {
          id: "cial-p-u5-ac-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a circuit containing only a capacitor and an a.c. supply, the current",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "is zero at all times" },
              { id: "b", text: "is in phase with the voltage" },
              { id: "c", text: "lags the voltage by $90°$" },
              { id: "d", text: "leads the voltage by $90°$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Capacitor phase", statement: "In a pure capacitive circuit current leads voltage by 90°." }],
            steps: [{ reasoning: "Current leads voltage by 90° for a capacitor.", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** leads the voltage by $90°$",
          },
        },
        {
          id: "cial-p-u5-ac-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "An inductor of inductance $0.50\\ H$ is connected to a $50\\ Hz$ a.c. supply. Calculate its inductive reactance.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 157, tolerance: 2, unit: "Ω" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Reactance", statement: "$X_L = 2\\pi fL$." }],
            steps: [
              { reasoning: "$X_L = 2\\pi \\times 50 \\times 0.50$.", marks: 1, markCode: "M" },
              { reasoning: "$X_L = 157\\ \\Omega$.", marks: 1, markCode: "M" },
              { reasoning: "$X_L \\approx 157\\ \\Omega$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$X_L = 157\\ \\Omega$",
          },
        },
        {
          id: "cial-p-u5-ac-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a capacitor has a low reactance at high frequencies but blocks steady d.c.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Capacitor AC", statement: "$X_C = 1/(2\\pi fC)$ — falls as frequency rises." }],
            steps: [
              { reasoning: "With d.c. the capacitor charges once until its p.d. equals the supply, then current stops.", marks: 1, markCode: "M" },
              { reasoning: "With a.c. the voltage reverses continuously, so the capacitor repeatedly charges and discharges → alternating current flows.", marks: 1, markCode: "M" },
              { reasoning: "Higher frequency means less time to charge each half-cycle → smaller p.d. developed → smaller opposition.", marks: 1, markCode: "M" },
              { reasoning: "Hence $X_C \\to 0$ at high frequency (acts as short circuit) but is infinite for steady d.c.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Charges/discharges each cycle; X_C falls with f",
          },
        },
        {
          id: "cial-p-u5-ac-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The peak voltage of the UK mains supply is approximately",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$460\\ V$" },
              { id: "b", text: "$325\\ V$" },
              { id: "c", text: "$230\\ V$" },
              { id: "d", text: "$110\\ V$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Mains supply", statement: "UK mains: $230\\ V$ rms, 50 Hz → peak $\\approx 325\\ V$." }],
            steps: [{ reasoning: "$V_0 = \\sqrt{2} \\times 230 \\approx 325\\ V$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** $325\\ V$",
          },
        },
        {
          id: "cial-p-u5-ac-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A capacitor has a reactance of $100\\ \\Omega$ at a frequency of $50\\ Hz$. Calculate its capacitance.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3.18e-5, tolerance: 0.02e-5, unit: "F" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Reactance", statement: "$X_C = 1/(2\\pi fC)$ → $C = 1/(2\\pi fX_C)$." }],
            steps: [
              { reasoning: "$C = 1/(2\\pi \\times 50 \\times 100)$.", marks: 1, markCode: "M" },
              { reasoning: "$C = 1/(31\\,400)$.", marks: 1, markCode: "M" },
              { reasoning: "$C = 3.18\\times10^{-5}\\ F = 31.8\\ \\mu F$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$C = 31.8\\ \\mu F$",
          },
        },
        {
          id: "cial-p-u5-ac-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a circuit containing only an inductor and an a.c. supply, the current",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "is independent of frequency" },
              { id: "b", text: "leads the voltage by $90°$" },
              { id: "c", text: "lags the voltage by $90°$" },
              { id: "d", text: "is in phase with the voltage" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Inductor phase", statement: "In a pure inductive circuit current lags voltage by 90°." }],
            steps: [{ reasoning: "Inductor opposes change in current → current lags by 90°.", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** lags the voltage by $90°$",
          },
        },
        {
          id: "cial-p-u5-ac-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An inductor has reactance $314\\ \\Omega$ at $50\\ Hz$. Calculate its inductance.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1, tolerance: 0.05, unit: "H" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Reactance", statement: "$X_L = 2\\pi fL$ → $L = X_L/(2\\pi f)$." }],
            steps: [
              { reasoning: "$L = 314/(2\\pi \\times 50)$.", marks: 1, markCode: "M" },
              { reasoning: "$L = 314/314$.", marks: 1, markCode: "M" },
              { reasoning: "$L = 1.0\\ H$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$L = 1.0\\ H$",
          },
        },
        {
          id: "cial-p-u5-ac-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why an inductor's reactance increases with frequency, whereas a capacitor's reactance decreases with frequency.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Reactance", statement: "$X_L = 2\\pi fL$ (rises with f); $X_C = 1/(2\\pi fC)$ (falls with f)." }],
            steps: [
              { reasoning: "Inductor opposes changes in current; faster a.c. → greater rate of change → larger back e.m.f.", marks: 1, markCode: "M" },
              { reasoning: "Hence $X_L = 2\\pi fL$ increases linearly with frequency.", marks: 1, markCode: "M" },
              { reasoning: "Capacitor charges less during each shorter half-cycle → smaller p.d. developed → less opposition.", marks: 1, markCode: "M" },
              { reasoning: "Hence $X_C = 1/(2\\pi fC)$ decreases as frequency rises.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "X_L ∝ f; X_C ∝ 1/f",
          },
        },
        {
          id: "cial-p-u5-ac-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A $230\\ V$ a.c. supply has an r.m.s. voltage of $230\\ V$. The peak voltage is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$230\\ V$" },
              { id: "b", text: "$460\\ V$" },
              { id: "c", text: "$115\\ V$" },
              { id: "d", text: "$325\\ V$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "law", name: "RMS", statement: "$V_0 = \\sqrt{2}\\,V_{rms}$." }],
            steps: [{ reasoning: "$V_0 = 1.414 \\times 230 \\approx 325\\ V$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** $325\\ V$",
          },
        },
        {
          id: "cial-p-u5-ac-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A $4.7\\ \\mu F$ capacitor is used in a smoothing circuit. Calculate (a) its reactance at $50\\ Hz$ and (b) the capacitance needed to halve that reactance at the same frequency.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 677, tolerance: 10, unit: "Ω" },
              { label: "b", answer: 9.4e-6, tolerance: 0.1e-6, unit: "F" },
            ],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Reactance", statement: "$X_C = 1/(2\\pi fC)$; halving $X_C$ requires doubling $C$." }],
            steps: [
              { reasoning: "$X_C = 1/(2\\pi \\times 50 \\times 4.7\\times10^{-6}) \\approx 677\\ \\Omega$.", marks: 1, markCode: "M" },
              { reasoning: "Double the capacitance: $C = 9.4\\times10^{-6}\\ F$.", marks: 1, markCode: "M" },
              { reasoning: "$X_C \\approx 677\\ \\Omega$; $C = 9.4\\ \\mu F$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$X_C \\approx 677\\ \\Omega$; $C = 9.4\\ \\mu F$",
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
