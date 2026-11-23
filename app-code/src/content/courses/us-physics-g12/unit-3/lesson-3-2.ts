import type { Lesson } from "../../../types.ts";

export const lesson132: Lesson = {
  id: "phys12-u3-lesson-3-2",
  code: "3-2",
  title: "Heat, Thermodynamics and Engines",
  goal: "I CAN apply the first law of thermodynamics, analyze heat engines, and explain entropy and the second law.",
  standards: ["HS-PS3-3", "HS-PS3-4"],
  vocabulary: [
    { term: "First law of thermodynamics", definition: "$\\Delta U = Q - W$; energy is conserved." },
    { term: "Heat engine", definition: "Device converting heat into mechanical work; operates in a cycle." },
    { term: "Efficiency", definition: "Fraction of heat converted to work: $\\eta = W/Q_h = 1 - Q_c/Q_h$." },
    { term: "Entropy", definition: "Measure of disorder or energy dispersal; $\\Delta S \\geq 0$ for isolated systems." },
    { term: "Second law", definition: "Heat cannot spontaneously flow from cold to hot; entropy of universe increases." },
    { term: "Isothermal process", definition: "Constant temperature; $\\Delta U = 0$." },
    { term: "Adiabatic process", definition: "No heat exchange; $Q = 0$." },
  ],
  concepts: [
    {
      id: "phys12-u3-first-law",
      title: "First law of thermodynamics",
      skill: "Apply $\\Delta U = Q - W$ to thermodynamic processes and calculate work and heat.",
      lesson: {
        sections: [
          {
            heading: "First law",
            body: `The **first law of thermodynamics** is conservation of energy applied to heat systems:

$$\\Delta U = Q - W$$

where $\\Delta U$ is change in internal energy, $Q$ is heat added to system, and $W$ is work done BY the system.

- $Q > 0$: heat flows INTO system
- $W > 0$: system does work ON surroundings (expansion)`,
          },
          {
            heading: "Processes",
            body: `Common processes:
- **Isothermal**: constant T, $\\Delta U = 0$, so $Q = W$
- **Adiabatic**: no heat exchange, $Q = 0$, so $\\Delta U = -W$
- **Isochoric**: constant volume, $W = 0$, so $\\Delta U = Q$
- **Isobaric**: constant pressure, $W = P\\Delta V$`,
          },
          {
            heading: "PV diagrams",
            body: "On a P-V diagram, work done equals the area under the curve. For isobaric: $W = P\\Delta V$. For isothermal: $W = nRT\\ln(V_f/V_i)$. The sign of work depends on whether volume increases (positive) or decreases (negative).",
          },
        ],
        keyFormulas: [
          { name: "First law", statement: "$\\Delta U = Q - W$" },
          { name: "Isobaric work", statement: "$W = P\\Delta V$" },
          { name: "Isothermal work", statement: "$W = nRT\\ln(V_f/V_i)$" },
        ],
        workedExample: {
          problem: "A gas absorbs 500 J of heat and does 200 J of work expanding. What is the change in internal energy?",
          solution: "$\\Delta U = Q - W = 500 - 200 = 300$ J. Internal energy increases by 300 J.",
        },
      },
      questions: [
        {
          id: "phys12-u3-first-law-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first law of thermodynamics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\Delta U = Q + W$" },
              { id: "b", text: "$\\Delta U = Q - W$" },
              { id: "c", text: "$Q = W$" },
              { id: "d", text: "$\\Delta U = 0$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "First law", statement: "$\\Delta U = Q - W$ where W is work done BY system." }],
            steps: [{ reasoning: "The first law states $\\Delta U = Q - W$.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $\\Delta U = Q - W$",
            commonErrors: ["Using $Q + W$ instead of $Q - W$."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys12-u3-first-law-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A gas does 300 J of work while absorbing 800 J of heat. What is the change in internal energy?",
          response: { type: "numeric", parts: [{ label: "ΔU", answer: 500, unit: "J" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "First law", statement: "$\\Delta U = Q - W$" }],
            steps: [
              { reasoning: "$\\Delta U = Q - W = 800 - 300 = 500$ J.", working: "dU=800-300=500", marks: 2, markCode: "M" },
              { reasoning: "Internal energy increases by 500 J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "500 J",
            commonErrors: ["Adding instead of subtracting work.", "Sign confusion on W."],
            examinerNote: "M2 calculation, A1 answer.",
          },
        },
        {
          id: "phys12-u3-first-law-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In an adiabatic compression, 400 J of work is done ON a gas. What is the change in internal energy and temperature?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "First law", statement: "$\\Delta U = Q - W$; adiabatic $Q = 0$" },
              { kind: "principle", name: "Internal energy", statement: "$\\Delta U$ depends on temperature." },
            ],
            steps: [
              { reasoning: "Adiabatic: $Q = 0$. Work done ON gas means $W = -400$ J (work done BY system is negative).", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta U = 0 - (-400) = +400$ J.", working: "dU=0-(-400)=400", marks: 1, markCode: "M" },
              { reasoning: "Internal energy increases by 400 J.", marks: 1, markCode: "A" },
              { reasoning: "Temperature increases because internal energy is proportional to temperature.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "ΔU = +400 J; temperature increases.",
            commonErrors: ["Sign error on work.", "Thinking adiabatic means no temperature change."],
            examinerNote: "M2 calculation, A1 answer, R1 explanation.",
          },
        },
        {
          id: "phys12-u3-first-law-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A gas expands isobarically at pressure 2.0×10⁵ Pa from volume 0.50 m³ to 1.0 m³. It absorbs 300 kJ of heat.",
          parts: [
            { label: "a", prompt: "Calculate the work done by the gas.", marks: 2 },
            { label: "b", prompt: "Calculate the change in internal energy.", marks: 3 },
            { label: "c", prompt: "If the gas then cools at constant volume back to its initial state, calculate the heat released.", marks: 3 },
            { label: "d", prompt: "Calculate the net work and heat over the complete cycle.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Isobaric work", statement: "$W = P\\Delta V$" },
              { kind: "formula", name: "First law", statement: "$\\Delta U = Q - W$" },
            ],
            steps: [
              { reasoning: "$W = P\\Delta V = 2.0 \\times 10^5 \\times (1.0 - 0.50) = 2.0 \\times 10^5 \\times 0.50 = 100,000$ J = 100 kJ.", working: "W=2e5*0.50=100000", marks: 2, markCode: "M", part: "a" },
              { reasoning: "$\\Delta U = Q - W = 300,000 - 100,000 = 200,000$ J = 200 kJ.", working: "dU=300000-100000=200000", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Answer: 200 kJ.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "At constant volume, $W = 0$, so $Q = \\Delta U = -200,000$ J: the gas releases 200 kJ of heat.", marks: 1, markCode: "M", part: "c" },
              { reasoning: "Heat released = 200 kJ (negative Q means released; since $\Delta U$ returns to zero over the constant-volume cooling, all 200 kJ leaves as heat).", marks: 2, markCode: "A", part: "c" },
              { reasoning: "Over the cycle, net work output = 100 kJ and net heat input = $300 - 200 = 100$ kJ, giving efficiency $100/300 \\approx 33\\%$.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Net work = 100 kJ; net heat absorbed = 100 kJ.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) 100 kJ (b) 200 kJ (c) 200 kJ released (d) net W = 100 kJ, net Q = 100 kJ, efficiency ≈ 33%.",
            commonErrors: ["Sign errors in first law.", "Forgetting W = PΔV for isobaric.", "Confusing heat and work."],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys12-u3-heat-engines",
      title: "Heat engines and efficiency",
      skill: "Analyze heat engine cycles, calculate efficiency, and apply the second law.",
      lesson: {
        sections: [
          {
            heading: "Heat engines",
            body: "A **heat engine** converts heat into mechanical work by cycling a working substance (gas, steam) between hot and cold reservoirs. It operates in a cycle: isothermal expansion, adiabatic expansion, isothermal compression, adiabatic compression (Carnot cycle is ideal).",
          },
          {
            heading: "Efficiency",
            body: `Efficiency is the fraction of input heat converted to work:

$$\\eta = \\frac{W}{Q_h} = 1 - \\frac{Q_c}{Q_h}$$

where $Q_h$ is heat absorbed from hot reservoir, $Q_c$ is heat rejected to cold reservoir. Real engines have efficiency 20-45%; Carnot limit depends only on reservoir temperatures.`,
          },
          {
            heading: "Second law and entropy",
            body: "The **second law** states that heat cannot spontaneously flow from cold to hot, and entropy of an isolated system never decreases. This limits engine efficiency — some heat MUST be rejected to the cold reservoir. **Entropy** $S$ measures energy dispersal; $\\Delta S = Q_{rev}/T$ for reversible processes.",
          },
        ],
        keyFormulas: [
          { name: "Efficiency", statement: "$\\eta = W/Q_h = 1 - Q_c/Q_h$" },
          { name: "Carnot efficiency", statement: "$\\eta_{Carnot} = 1 - T_c/T_h$" },
          { name: "Entropy", statement: "$\\Delta S = Q_{rev}/T$" },
        ],
        workedExample: {
          problem: "An engine absorbs 1000 J from a hot reservoir at 500 K and rejects 600 J to a cold reservoir at 300 K. Calculate efficiency.",
          solution: "$\\eta = 1 - Q_c/Q_h = 1 - 600/1000 = 0.40$ or 40%. Work output = $Q_h - Q_c = 400$ J.",
        },
      },
      questions: [
        {
          id: "phys12-u3-heat-engines-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the maximum possible efficiency of a heat engine operating between 600 K (hot) and 300 K (cold)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "50%" },
              { id: "b", text: "33%" },
              { id: "c", text: "100%" },
              { id: "d", text: "75%" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Carnot efficiency", statement: "$\\eta = 1 - T_c/T_h = 1 - 300/600 = 0.50$." }],
            steps: [{ reasoning: "Carnot efficiency = $1 - 300/600 = 0.50$ or 50%.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 50%",
            commonErrors: ["Using Celsius instead of Kelvin."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys12-u3-heat-engines-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An engine absorbs 2000 J of heat and produces 500 J of work. How much heat is rejected to the cold reservoir?",
          response: { type: "numeric", parts: [{ label: "Qc", answer: 1500, unit: "J" }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Energy conservation", statement: "$Q_h = W + Q_c$" }],
            steps: [
              { reasoning: "$Q_c = Q_h - W = 2000 - 500 = 1500$ J.", working: "Qc=2000-500=1500", marks: 2, markCode: "M" },
              { reasoning: "1500 J rejected.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1500 J",
            commonErrors: ["Thinking all heat becomes work."],
            examinerNote: "M2 calculation, A1 answer.",
          },
        },
        {
          id: "phys12-u3-heat-engines-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A real engine has efficiency 25% operating between 800 K and 300 K. What is the Carnot efficiency and why can't the real engine reach it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Carnot efficiency", statement: "$\\eta_{Carnot} = 1 - T_c/T_h$" },
              { kind: "principle", name: "Irreversibility", statement: "Real processes are irreversible; entropy increases." },
            ],
            steps: [
              { reasoning: "$\\eta_{Carnot} = 1 - 300/800 = 1 - 0.375 = 0.625$ or 62.5%.", working: "eta=1-300/800=0.625", marks: 1, markCode: "M" },
              { reasoning: "Real engine achieves only 25% vs 62.5% Carnot limit.", marks: 1, markCode: "A" },
              { reasoning: "Real engines have friction, turbulence, heat losses through walls, and finite-rate heat transfer — all irreversible processes that increase entropy.", marks: 1, markCode: "R" },
              { reasoning: "Only a perfectly reversible engine could approach Carnot efficiency.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Carnot = 62.5%; real = 25%. Irreversibilities (friction, heat loss) reduce efficiency.",
            commonErrors: ["Thinking Carnot is achievable.", "Ignoring irreversibility."],
            examinerNote: "M1 Carnot, A1 comparison, R1 reason, B1 conclusion.",
          },
        },
        {
          id: "phys12-u3-heat-engines-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A Carnot engine operates between 600 K and 300 K. It absorbs 1000 J per cycle.",
          parts: [
            { label: "a", prompt: "Calculate the Carnot efficiency.", marks: 2 },
            { label: "b", prompt: "Calculate the work output per cycle.", marks: 2 },
            { label: "c", prompt: "Calculate the heat rejected to the cold reservoir.", marks: 2 },
            { label: "d", prompt: "If the hot reservoir temperature increases to 900 K (cold stays 300 K), calculate the new efficiency.", marks: 2 },
            { label: "e", prompt: "Explain why increasing the temperature difference improves efficiency.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Carnot efficiency", statement: "$\\eta = 1 - T_c/T_h$" },
              { kind: "formula", name: "Energy", statement: "$W = \\eta Q_h$; $Q_c = Q_h - W$" },
            ],
            steps: [
              { reasoning: "$\\eta = 1 - 300/600 = 0.50$ or 50%.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Efficiency = 50%.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$W = \\eta Q_h = 0.50 \\times 1000 = 500$ J.", working: "W=0.50*1000=500", marks: 1, markCode: "M", part: "b" },
              { reasoning: "W = 500 J.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "$Q_c = Q_h - W = 1000 - 500 = 500$ J.", working: "Qc=1000-500=500", marks: 1, markCode: "M", part: "c" },
              { reasoning: "Q_c = 500 J.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "$\\eta_{new} = 1 - 300/900 = 1 - 0.333 = 0.667$ or 66.7%.", working: "eta=1-300/900=0.667", marks: 1, markCode: "M", part: "d" },
              { reasoning: "New efficiency ≈ 66.7%.", marks: 1, markCode: "A", part: "d" },
              { reasoning: "Larger temperature difference means more heat can be converted to work before rejection; $\\eta = 1 - T_c/T_h$ increases as $T_h$ rises or $T_c$ falls.", marks: 1, markCode: "R", part: "e" },
              { reasoning: "This is why power plants use high-temperature steam.", marks: 1, markCode: "B", part: "e" },
            ],
            finalAnswer: "(a) 50% (b) 500 J (c) 500 J (d) 66.7% (e) larger ΔT → higher efficiency.",
            commonErrors: ["Using Celsius instead of Kelvin.", "Forgetting Qc = Qh - W."],
            examinerNote: "2+2+2+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
