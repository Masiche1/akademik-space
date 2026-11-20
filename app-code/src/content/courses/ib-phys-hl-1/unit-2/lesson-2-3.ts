import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "physhl-u2-lesson-2-3",
  code: "2-3",
  title: "Heat Engines and the Carnot Cycle",
  goal: "I CAN calculate the efficiency of heat engines, describe the Carnot cycle as the maximum possible efficiency, and apply $\\eta = 1 - T_c/T_h$ to solve problems.",
  standards: ["Paper 1", "Paper 2", "AHL B1"],
  vocabulary: [
    { term: "Heat engine", definition: "A device that converts heat into mechanical work by operating between a hot reservoir ($T_h$) and a cold reservoir ($T_c$)." },
    { term: "Efficiency ($\\eta$)", definition: "The fraction of heat input converted to work: $\\eta = W/Q_h = 1 - Q_c/Q_h$." },
    { term: "Carnot cycle", definition: "The ideal reversible cycle (isothermal + adiabatic) giving maximum possible efficiency between two temperatures." },
    { term: "Carnot efficiency", definition: "$\\eta_{max} = 1 - \\frac{T_c}{T_h}$ where temperatures are in kelvin — the theoretical maximum." },
    { term: "Hot/cold reservoir", definition: "Heat source at $T_h$ supplies heat $Q_h$; heat sink at $T_c$ receives rejected heat $Q_c$; $T_h > T_c$ always." },
    { term: "Reversible engine", definition: "An idealised engine with no dissipative losses — achieves Carnot efficiency." },
  ],
  concepts: [
    {
      id: "physhl-u2-engines",
      title: "Heat engines and efficiency",
      skill: "Calculate heat engine efficiency from energy flows, relate efficiency to work output, and explain why real engines are less efficient than ideal ones.",
      lesson: {
        sections: [
          {
            heading: "How a heat engine works",
            body: "A heat engine absorbs heat $Q_h$ from a hot reservoir, converts part to useful work $W$, and rejects the rest $Q_c$ to a cold reservoir. Energy conservation (first law over a cycle, $\\Delta U = 0$): $Q_h = W + Q_c$, so $W = Q_h - Q_c$. The efficiency is $\\eta = \\frac{W}{Q_h} = \\frac{Q_h - Q_c}{Q_h} = 1 - \\frac{Q_c}{Q_h}$.",
          },
          {
            heading: "Real engines",
            body: "Real engines (petrol, diesel, steam) are less efficient than ideal due to friction, turbulence, heat losses to surroundings, and finite-rate processes. Typical efficiencies: petrol ~25%, diesel ~40%, steam ~35%. Even ideal engines can't reach 100% — the second law requires heat rejection to a cold reservoir.",
          },
          {
            heading: "The P–V diagram",
            body: "On a P–V diagram, the work done per cycle equals the AREA enclosed by the cycle. Clockwise cycles produce net work output (engines); anticlockwise cycles consume work (refrigerators/heat pumps). The shape of the cycle determines efficiency — the Carnot cycle encloses maximum area for given temperatures.",
          },
        ],
        keyFormulas: [
          { name: "Efficiency", statement: "$\\eta = W/Q_h = 1 - Q_c/Q_h$" },
          { name: "Energy balance", statement: "$Q_h = W + Q_c$ (cycle: $\\Delta U = 0$)" },
          { name: "Work = area", statement: "Net work per cycle = enclosed area on P–V diagram" },
        ],
        workedExample: {
          problem: "An engine absorbs 1000 J of heat, does 300 J of work, and rejects 700 J to the cold reservoir. Calculate its efficiency.",
          solution: "$\\eta = W/Q_h = 300/1000 = 0.30$ or 30%. Check: $Q_h = W + Q_c = 300 + 700 = 1000$ J ✓.",
        },
      },
      questions: [
        {
          id: "physhl-u2-he-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The efficiency of a heat engine is defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\eta = W/Q_h$" },
              { id: "b", text: "$\\eta = Q_c/Q_h$" },
              { id: "c", text: "$\\eta = Q_h/W$" },
              { id: "d", text: "$\\eta = Q_h/Q_c$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\eta = W/Q_h = 1 - Q_c/Q_h$" },
            ],
            steps: [
              { reasoning: "Efficiency = useful work output / heat input.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\eta = W/Q_h$",
            commonErrors: ["Using $Q_c/Q_h$ — that's the fraction REJECTED, not efficiency."],
          },
        },
        {
          id: "physhl-u2-he-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A heat engine absorbs 2000 J from a hot reservoir and rejects 1400 J to a cold reservoir. Calculate the work done and the efficiency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy balance", statement: "$W = Q_h - Q_c$; $\\eta = W/Q_h$." },
            ],
            steps: [
              { reasoning: "$W = Q_h - Q_c = 2000 - 1400 = 600$ J.", marks: 1, markCode: "M" },
              { reasoning: "$\\eta = W/Q_h = 600/2000 = 0.30$.", marks: 1, markCode: "M" },
              { reasoning: "$\\eta = 30\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$W = 600$ J; $\\eta = 30\\%$",
            commonErrors: ["Dividing wrong quantities — efficiency = work/heat INPUT."],
          },
        },
        {
          id: "physhl-u2-he-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A real engine operating between 500 K and 300 K has an efficiency of 25%. The Carnot efficiency is higher. Explain two reasons why real engines are less efficient than the Carnot limit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Real vs ideal", statement: "Real engines have friction, turbulence, finite-rate heat transfer, and heat losses." },
            ],
            steps: [
              { reasoning: "Carnot assumes reversible processes — infinitely slow, no dissipation.", marks: 1, markCode: "R" },
              { reasoning: "Real engines have friction in moving parts → energy lost as heat.", marks: 1, markCode: "M" },
              { reasoning: "Real engines have turbulence and finite-rate heat transfer → not perfectly reversible.", marks: 1, markCode: "M" },
              { reasoning: "Heat leaks to surroundings → less heat available for work conversion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Friction, turbulence, finite-rate heat transfer, heat leaks — all dissipate energy.",
            commonErrors: ["Saying 'Carnot is just a theory' — it's the thermodynamic LIMIT, not just an approximation."],
          },
        },
        {
          id: "physhl-u2-he-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A steam engine absorbs heat from steam at 200 °C and rejects heat to cooling water at 40 °C. It produces 500 kJ of work per cycle.",
          parts: [
            { label: "a", prompt: "Convert the reservoir temperatures to kelvin.", marks: 2 },
            { label: "b", prompt: "Calculate the Carnot efficiency.", marks: 2 },
            { label: "c", prompt: "If the real engine has 30% efficiency, calculate the actual heat input $Q_h$ and heat rejected $Q_c$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Carnot efficiency", statement: "$\\eta_{max} = 1 - T_c/T_h$ (kelvin)." },
            ],
            steps: [
              { part: "a", reasoning: "$T_h = 200 + 273 = 473$ K; $T_c = 40 + 273 = 313$ K.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both converted correctly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\eta_{max} = 1 - 313/473 = 1 - 0.662 = 0.338$ or 33.8%.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\eta_{max} = 33.8\\%$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\eta = W/Q_h$ → $Q_h = W/\\eta = 500/0.30 = 1667$ kJ.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$Q_h = 1667$ kJ.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$Q_c = Q_h - W = 1667 - 500 = 1167$ kJ.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$Q_c = 1167$ kJ.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 473 K, 313 K. (b) 33.8%. (c) $Q_h$ = 1667 kJ, $Q_c$ = 1167 kJ.",
            commonErrors: ["Using Celsius in Carnot formula — MUST use kelvin."],
          },
        },
        {
          id: "physhl-u2-he-q5",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For a heat engine operating in a cycle, the work output per cycle is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$W = Q_h - Q_c$" },
              { id: "b", text: "$W = Q_h + Q_c$" },
              { id: "c", text: "$W = Q_c - Q_h$" },
              { id: "d", text: "$W = Q_h \\times Q_c$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Engine energy balance", statement: "Over a cycle $\\Delta U = 0$ → $W = Q_h - Q_c$." },
            ],
            steps: [
              { reasoning: "Heat in minus heat rejected equals net work output, since internal energy returns to its initial value each cycle.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $W = Q_h - Q_c$",
            commonErrors: ["Adding the heats — work is the DIFFERENCE between heat absorbed and rejected."],
          },
        },
        {
          id: "physhl-u2-he-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "On a P–V diagram, a clockwise cycle represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A heat engine producing net work output" },
              { id: "b", text: "A refrigerator consuming work" },
              { id: "c", text: "A process with zero work" },
              { id: "d", text: "An adiabatic expansion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "P–V cycle direction", statement: "Clockwise cycle → net work output; anticlockwise → net work input." },
            ],
            steps: [
              { reasoning: "The enclosed area equals net work done BY the gas; clockwise traversal means expansion work exceeds compression work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Heat engine producing work output",
            commonErrors: ["Reversing the direction — anticlockwise cycles are refrigerators/heat pumps."],
          },
        },
        {
          id: "physhl-u2-he-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The efficiency of a heat engine increases when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ratio $Q_c/Q_h$ decreases" },
              { id: "b", text: "The ratio $Q_c/Q_h$ increases" },
              { id: "c", text: "More heat is rejected" },
              { id: "d", text: "The engine runs slower" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\eta = 1 - Q_c/Q_h$ — smaller rejected fraction means higher efficiency." },
            ],
            steps: [
              { reasoning: "Since $\\eta = 1 - Q_c/Q_h$, efficiency rises as the rejected fraction falls — less waste heat per unit input.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $Q_c/Q_h$ decreases",
            commonErrors: ["Thinking rejecting more heat helps — it lowers efficiency."],
          },
        },
        {
          id: "physhl-u2-he-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The net work done by a heat engine in one complete cycle equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The area enclosed by the cycle on a P–V diagram" },
              { id: "b", text: "The area under the highest curve only" },
              { id: "c", text: "The slope of the cycle" },
              { id: "d", text: "The perimeter of the cycle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cycle work", statement: "Net work per cycle $= \\oint P\\,dV$ = enclosed area on P–V diagram." },
            ],
            steps: [
              { reasoning: "Work done during expansion (area under expansion curve) minus work done during compression equals the enclosed area.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The enclosed area",
            commonErrors: ["Using only the expansion area — must subtract compression work."],
          },
        },
        {
          id: "physhl-u2-he-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A heat engine absorbs $Q_h = 800$ J and rejects $Q_c = 500$ J per cycle. Its efficiency is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.375$ (37.5%)" },
              { id: "b", text: "$0.625$ (62.5%)" },
              { id: "c", text: "$0.50$ (50%)" },
              { id: "d", text: "$1.25$ (125%)" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\eta = 1 - Q_c/Q_h = W/Q_h$." },
            ],
            steps: [
              { reasoning: "$W = Q_h - Q_c = 300$ J; $\\eta = W/Q_h = 300/800 = 0.375$.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $0.375$ (37.5%)",
            commonErrors: ["Computing $Q_c/Q_h$ — that gives the rejected fraction, not efficiency."],
          },
        },
        {
          id: "physhl-u2-he-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which factor does NOT reduce the efficiency of a real heat engine compared with an ideal one?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Friction between moving parts" },
              { id: "b", text: "Turbulence in the working fluid" },
              { id: "c", text: "Perfectly reversible (quasi-static) operation" },
              { id: "d", text: "Heat leaks to the surroundings" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Real vs ideal engines", statement: "Irreversibilities — friction, turbulence, heat leaks — dissipate energy and lower efficiency." },
            ],
            steps: [
              { reasoning: "Reversible operation is the IDEAL case; friction, turbulence and heat leaks are the dissipative losses that reduce real efficiency.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Reversible operation",
            commonErrors: ["Picking friction or turbulence — those are exactly the losses that reduce efficiency."],
          },
        },
        {
          id: "physhl-u2-he-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A heat engine absorbs $Q_h = 2500$ J of heat per cycle and produces $W = 750$ J of work.",
          parts: [
            { label: "a", prompt: "Calculate the efficiency of the engine.", marks: 2 },
            { label: "b", prompt: "Calculate the heat rejected to the cold reservoir.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Efficiency $\\eta$", answer: 0.3, tolerance: 0.001, unit: "" },
              { label: "(b) Heat rejected $Q_c$", answer: 1750, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Engine relations", statement: "$\\eta = W/Q_h$; $Q_c = Q_h - W$." },
            ],
            steps: [
              { part: "a", reasoning: "Efficiency is work output divided by heat input.", working: "\\eta = 750/2500 = 0.30", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\eta = 0.30$ or 30%.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Heat rejected equals heat input minus work output.", working: "Q_c = 2500 - 750 = 1750", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$Q_c = 1750$ J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\eta = 0.30$ (30%). (b) $Q_c = 1750$ J.",
            commonErrors: ["Dividing $Q_c$ by $W$ — efficiency always uses heat INPUT in the denominator."],
          },
        },
        {
          id: "physhl-u2-he-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A heat engine has an efficiency of 22% and absorbs $Q_h = 4000$ J of heat per cycle.",
          parts: [
            { label: "a", prompt: "Calculate the work done per cycle.", marks: 2 },
            { label: "b", prompt: "Calculate the heat rejected per cycle.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Work done", answer: 880, unit: "J" },
              { label: "(b) Heat rejected", answer: 3120, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Engine relations", statement: "$W = \\eta Q_h$; $Q_c = Q_h - W$." },
            ],
            steps: [
              { part: "a", reasoning: "Work output is efficiency times heat input.", working: "W = 0.22 \\times 4000 = 880", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$W = 880$ J.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Heat rejected is the remaining input energy.", working: "Q_c = 4000 - 880 = 3120", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$Q_c = 3120$ J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $W = 880$ J. (b) $Q_c = 3120$ J.",
            commonErrors: ["Using 22 instead of 0.22 — efficiency must be a fraction in calculations."],
          },
        },
        {
          id: "physhl-u2-he-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A heat engine produces $W = 600$ J of work per cycle with an efficiency of 40%.",
          parts: [
            { label: "a", prompt: "Calculate the heat absorbed from the hot reservoir.", marks: 2 },
            { label: "b", prompt: "Calculate the heat rejected to the cold reservoir.", marks: 2 },
            { label: "c", prompt: "If the same heat input produced 60% efficiency, calculate the new work output.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Heat absorbed $Q_h$", answer: 1500, unit: "J" },
              { label: "(b) Heat rejected $Q_c$", answer: 900, unit: "J" },
              { label: "(c) New work output", answer: 900, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Engine relations", statement: "$Q_h = W/\\eta$; $Q_c = Q_h - W$; $W = \\eta Q_h$." },
            ],
            steps: [
              { part: "a", reasoning: "Rearrange $\\eta = W/Q_h$ to find heat input.", working: "Q_h = 600/0.40 = 1500", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$Q_h = 1500$ J.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rejected heat is input minus work.", working: "Q_c = 1500 - 600 = 900", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$Q_c = 900$ J.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "New work = new efficiency times same heat input.", working: "W = 0.60 \\times 1500 = 900", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) $Q_h = 1500$ J. (b) $Q_c = 900$ J. (c) $W = 900$ J.",
            commonErrors: ["In part (c) forgetting that $Q_h$ stays at 1500 J — only efficiency changes."],
          },
        },
        {
          id: "physhl-u2-he-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A gas undergoes a rectangular cycle on a P–V diagram: isobaric expansion at 250 kPa from 1.0 to 3.0 dm³, isochoric cooling, isobaric compression at 125 kPa back to 1.0 dm³, then isochoric heating.",
          parts: [
            { label: "a", prompt: "Calculate the work done BY the gas during the expansion.", marks: 2 },
            { label: "b", prompt: "Calculate the net work done over the whole cycle.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Expansion work", answer: 500, unit: "J" },
              { label: "(b) Net work", answer: 250, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "P–V cycle work", statement: "Isobaric work $W = P\\Delta V$; net cycle work = enclosed rectangle area." },
            ],
            steps: [
              { part: "a", reasoning: "Expansion at constant pressure over $\\Delta V = 2.0$ dm³.", working: "W = 250 \\times 10^3 \\times 2.0 \\times 10^{-3}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$W = +500$ J.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Compression work at 125 kPa is $125 \\times 10^3 \\times (-2.0 \\times 10^{-3}) = -250$ J; net = enclosed area $= (250-125) \\times 10^3 \\times 2.0 \\times 10^{-3} = 250$ J.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Net work done by gas $= +250$ J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $+500$ J. (b) $+250$ J net.",
            commonErrors: ["Taking compression work as positive — its sign is negative because $\\Delta V < 0$."],
          },
        },
        {
          id: "physhl-u2-he-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A heat engine absorbs 1800 J of heat and rejects 1350 J to the cold reservoir in each cycle. Calculate its efficiency as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "Efficiency $\\eta$ in %", answer: 25, tolerance: 0.1, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\eta = 1 - Q_c/Q_h$ or $\\eta = W/Q_h$." },
            ],
            steps: [
              { reasoning: "Work output $W = Q_h - Q_c = 1800 - 1350 = 450$ J.", marks: 1, markCode: "M" },
              { reasoning: "$\\eta = W/Q_h = 450/1800 = 0.25$.", marks: 1, markCode: "M" },
              { reasoning: "$\\eta = 25\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\eta = 25\\%$",
            commonErrors: ["Reporting 0.25 instead of 25% — check the requested unit."],
          },
        },
        {
          id: "physhl-u2-he-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A car engine absorbs 4000 J of heat from burning fuel per cycle and does 1000 J of useful work. (a) Calculate its efficiency and the heat rejected. (b) Explain two ways the engine's real efficiency could be improved.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Engine relations", statement: "$\\eta = W/Q_h$; $Q_c = Q_h - W$." },
            ],
            steps: [
              { reasoning: "$\\eta = W/Q_h = 1000/4000 = 0.25$ or 25%.", marks: 1, markCode: "M" },
              { reasoning: "$Q_c = Q_h - W = 4000 - 1000 = 3000$ J rejected.", marks: 1, markCode: "M" },
              { reasoning: "$\\eta = 25\\%$; $Q_c = 3000$ J.", marks: 1, markCode: "A" },
              { reasoning: "Increase the temperature difference between hot and cold reservoirs — e.g. higher combustion temperature or better cooling.", marks: 1, markCode: "M" },
              { reasoning: "Reduce irreversibilities: less friction, less turbulence, smaller heat leaks to surroundings.", marks: 1, markCode: "M" },
              { reasoning: "Any two valid improvements earn the final accuracy mark.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\eta = 25\\%$, $Q_c = 3000$ J; improve via larger $\\Delta T$ and reduced dissipation.",
            commonErrors: ["Suggesting 'use more fuel' — that raises input but not efficiency."],
          },
        },
      ],
    },
    {
      id: "physhl-u2-carnot",
      title: "The Carnot cycle",
      skill: "Describe the four stages of the Carnot cycle, derive and apply the Carnot efficiency formula, and explain why it is the maximum possible efficiency.",
      lesson: {
        sections: [
          {
            heading: "The four stages",
            body: "The Carnot cycle consists of four reversible processes:\n\n1. **Isothermal expansion** at $T_h$: absorbs heat $Q_h$ from hot reservoir, does work.\n2. **Adiabatic expansion**: cools from $T_h$ to $T_c$, does more work.\n3. **Isothermal compression** at $T_c$: rejects heat $Q_c$ to cold reservoir.\n4. **Adiabatic compression**: heats back to $T_h$, work done on gas.\n\nOn a P–V diagram it forms a rounded rectangle enclosing maximum area.",
          },
          {
            heading: "Carnot efficiency",
            body: "For the Carnot cycle, the heat ratio equals the temperature ratio: $\\frac{Q_c}{Q_h} = \\frac{T_c}{T_h}$. Therefore efficiency $\\eta = 1 - \\frac{Q_c}{Q_h} = 1 - \\frac{T_c}{T_h}$. This depends ONLY on the reservoir temperatures — not on the working substance. Temperatures must be in kelvin.",
          },
          {
            heading: "Why maximum?",
            body: "The Carnot cycle is reversible — no entropy is generated within the engine. Any real engine generates entropy through irreversibilities, reducing efficiency. No engine operating between the same two temperatures can exceed Carnot efficiency — this is a consequence of the second law. To increase efficiency: increase $T_h$ or decrease $T_c$.",
          },
        ],
        keyFormulas: [
          { name: "Carnot efficiency", statement: "$\\eta_{max} = 1 - \\frac{T_c}{T_h}$ (kelvin)" },
          { name: "Heat ratio", statement: "$\\frac{Q_c}{Q_h} = \\frac{T_c}{T_h}$" },
          { name: "Maximum work", statement: "Carnot cycle encloses maximum area on P–V diagram." },
        ],
        workedExample: {
          problem: "Calculate the maximum efficiency of an engine operating between 600 K and 300 K.",
          solution: "$\\eta_{max} = 1 - 300/600 = 0.50$ = 50%. This is the theoretical maximum — no real engine can exceed it.",
        },
      },
      questions: [
        {
          id: "physhl-u2-car-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Carnot efficiency depends only on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The reservoir temperatures" },
              { id: "b", text: "The working substance" },
              { id: "c", text: "The engine size" },
              { id: "d", text: "The number of cycles" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Carnot efficiency", statement: "$\\eta = 1 - T_c/T_h$ — depends only on temperatures." },
            ],
            steps: [
              { reasoning: "Carnot efficiency is independent of working substance or engine design.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Reservoir temperatures",
            commonErrors: ["Thinking efficiency depends on fuel type — only temperatures matter for Carnot."],
          },
        },
        {
          id: "physhl-u2-car-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Calculate the Carnot efficiency of an engine operating between 800 K and 400 K. Explain how you could increase the efficiency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Carnot efficiency", statement: "$\\eta = 1 - T_c/T_h$" },
            ],
            steps: [
              { reasoning: "$\\eta = 1 - 400/800 = 0.50$ = 50%.", marks: 1, markCode: "M" },
              { reasoning: "Increase $T_h$ (hotter source) or decrease $T_c$ (colder sink).", marks: 1, markCode: "R" },
              { reasoning: "Larger temperature difference → higher efficiency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50%; increase $T_h$ or decrease $T_c$.",
            commonErrors: ["Saying 'use better fuel' — efficiency depends only on temperatures."],
          },
        },
        {
          id: "physhl-u2-car-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Two engines operate between the same reservoirs: Engine A follows a Carnot cycle, Engine B is real. Engine B has efficiency 20%, Engine A has 40%. Explain why Engine B cannot exceed 40% and describe what makes Engine A special.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Carnot limit", statement: "No engine between same temperatures can exceed Carnot efficiency — consequence of second law." },
            ],
            steps: [
              { reasoning: "Carnot efficiency is the thermodynamic maximum for given $T_h$ and $T_c$.", marks: 1, markCode: "R" },
              { reasoning: "Engine B's irreversibilities (friction, turbulence) generate entropy → lower efficiency.", marks: 1, markCode: "M" },
              { reasoning: "Engine A is reversible — no entropy generation → achieves maximum.", marks: 1, markCode: "R" },
              { reasoning: "Engine B cannot exceed 40% without violating second law.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Carnot is the limit; Engine A is reversible, Engine B has irreversibilities.",
            commonErrors: ["Thinking better engineering could beat Carnot — it's a fundamental limit."],
          },
        },
        {
          id: "physhl-u2-car-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A Carnot engine operates between 500 K and 300 K. In each cycle it absorbs 2000 J of heat.",
          parts: [
            { label: "a", prompt: "Calculate the efficiency and work done per cycle.", marks: 3 },
            { label: "b", prompt: "Calculate the heat rejected to the cold reservoir.", marks: 2 },
            { label: "c", prompt: "If $T_c$ is lowered to 200 K while $T_h$ stays at 500 K, calculate the new efficiency and explain the improvement.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Carnot relations", statement: "$\\eta = 1 - T_c/T_h$; $Q_c/Q_h = T_c/T_h$; $W = Q_h - Q_c$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\eta = 1 - 300/500 = 0.40$ = 40%.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$W = \\eta Q_h = 0.40 \\times 2000 = 800$ J.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$W = 800$ J per cycle.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$Q_c = Q_h - W = 2000 - 800 = 1200$ J.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$Q_c = 1200$ J.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "New $\\eta = 1 - 200/500 = 0.60$ = 60%.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Lower $T_c$ → larger temperature difference → higher efficiency.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "New $W = 0.60 \\times 2000 = 1200$ J; more work from same heat input.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 40%, 800 J. (b) 1200 J. (c) 60% — larger $\\Delta T$ improves efficiency.",
            commonErrors: ["Forgetting to use kelvin — formula requires absolute temperature."],
          },
        },
        {
          id: "physhl-u2-car-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The four stages of the Carnot cycle, in order, are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Isothermal expansion, adiabatic expansion, isothermal compression, adiabatic compression" },
              { id: "b", text: "Adiabatic expansion, isothermal expansion, adiabatic compression, isothermal compression" },
              { id: "c", text: "Isobaric expansion, isochoric cooling, isobaric compression, isochoric heating" },
              { id: "d", text: "Isothermal expansion, isothermal compression, adiabatic expansion, adiabatic compression" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Carnot cycle", statement: "Two isothermal stages (heat exchange) joined by two adiabatic stages (no heat exchange)." },
            ],
            steps: [
              { reasoning: "The cycle absorbs heat isothermally at $T_h$, expands adiabatically to $T_c$, rejects heat isothermally at $T_c$, then compresses adiabatically back to $T_h$.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Isothermal expansion → adiabatic expansion → isothermal compression → adiabatic compression",
            commonErrors: ["Putting both isothermals first — the adiabatic stages must separate hot and cold isotherms."],
          },
        },
        {
          id: "physhl-u2-car-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "On a P–V diagram, the Carnot cycle consists of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two isothermal curves and two adiabatic curves" },
              { id: "b", text: "Two isobaric lines and two isochoric lines" },
              { id: "c", text: "Four adiabatic curves" },
              { id: "d", text: "Two isothermal curves only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Carnot P–V diagram", statement: "Isotherms are hyperbolas ($PV = $ const); adiabats are steeper curves ($PV^\\gamma = $ const)." },
            ],
            steps: [
              { reasoning: "Heat exchange occurs only during the two isothermal stages; the adiabatic stages connect them with $Q = 0$.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Two isotherms and two adiabats",
            commonErrors: ["Choosing isobaric/isochoric — those form a different (less efficient) cycle."],
          },
        },
        {
          id: "physhl-u2-car-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For a Carnot engine, the ratio of heat rejected to heat absorbed is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$Q_c/Q_h = T_c/T_h$" },
              { id: "b", text: "$Q_c/Q_h = T_h/T_c$" },
              { id: "c", text: "$Q_c/Q_h = W/Q_h$" },
              { id: "d", text: "$Q_c/Q_h = 1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Carnot heat ratio", statement: "$Q_c/Q_h = T_c/T_h$ for the reversible cycle." },
            ],
            steps: [
              { reasoning: "In a reversible isothermal stage $\\Delta S = Q/T$; equal entropy exchanged at the two temperatures gives $Q_c/T_c = Q_h/T_h$ → $Q_c/Q_h = T_c/T_h$.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $Q_c/Q_h = T_c/T_h$",
            commonErrors: ["Inverting the ratio — cold temperature is in the numerator."],
          },
        },
        {
          id: "physhl-u2-car-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "To increase the Carnot efficiency of an engine, one should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increase $T_h$ or decrease $T_c$" },
              { id: "b", text: "Decrease $T_h$ or increase $T_c$" },
              { id: "c", text: "Increase both $T_h$ and $T_c$ equally" },
              { id: "d", text: "Change the working substance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Carnot efficiency", statement: "$\\eta = 1 - T_c/T_h$ — larger $T_h/T_c$ ratio means higher efficiency." },
            ],
            steps: [
              { reasoning: "Efficiency depends only on the temperature ratio; widening the gap between reservoirs raises $\\eta$.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Increase $T_h$ or decrease $T_c$",
            commonErrors: ["Choosing a different working substance — Carnot efficiency is substance-independent."],
          },
        },
        {
          id: "physhl-u2-car-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "If the hot and cold reservoirs of a Carnot engine are at the SAME temperature ($T_h = T_c$), the efficiency is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0%" },
              { id: "b", text: "50%" },
              { id: "c", text: "100%" },
              { id: "d", text: "undefined" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Carnot efficiency", statement: "$\\eta = 1 - T_c/T_h$; when $T_h = T_c$, $\\eta = 1 - 1 = 0$." },
            ],
            steps: [
              { reasoning: "With no temperature difference there is no heat engine — all absorbed heat would have to be rejected, producing zero work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 0%",
            commonErrors: ["Thinking equal temperatures give 100% — the opposite: efficiency is zero."],
          },
        },
        {
          id: "physhl-u2-car-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Carnot efficiency formula $\\eta = 1 - T_c/T_h$ requires temperatures in kelvin because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ratio $Q_c/Q_h = T_c/T_h$ is derived from absolute temperature in the entropy relation $\\Delta S = Q/T$" },
              { id: "b", text: "Celsius temperatures are always negative" },
              { id: "c", text: "Kelvin is the SI unit for power" },
              { id: "d", text: "It is just a convention with no physical reason" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Absolute temperature", statement: "Entropy $\\Delta S = Q/T$ and the Carnot ratio are defined with thermodynamic (absolute) temperature." },
            ],
            steps: [
              { reasoning: "The derivation uses $\\Delta S = Q/T$ at each isothermal stage; $T$ must be absolute (kelvin) for the ratio to be physically meaningful — using Celsius gives nonsense such as negative efficiencies.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Ratio derives from absolute temperature in $\\Delta S = Q/T$",
            commonErrors: ["Plugging Celsius directly — e.g. $1 - 27/127$ gives a wrong answer; convert to kelvin first."],
          },
        },
        {
          id: "physhl-u2-car-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the Carnot efficiency of an engine operating between reservoirs at 900 K and 300 K.",
          response: {
            type: "numeric",
            parts: [{ label: "Carnot efficiency in %", answer: 66.7, tolerance: 0.1, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Carnot efficiency", statement: "$\\eta_{max} = 1 - T_c/T_h$ with $T$ in kelvin." },
            ],
            steps: [
              { reasoning: "Identify $T_h = 900$ K and $T_c = 300$ K — already in kelvin.", marks: 1, markCode: "M" },
              { reasoning: "Substitute into the formula.", working: "\\eta = 1 - 300/900 = 1 - 0.333 = 0.667", marks: 1, markCode: "M" },
              { reasoning: "$\\eta = 66.7\\%$ (or 0.667).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\eta_{max} = 66.7\\%$",
            commonErrors: ["Forgetting to convert to a percentage — 0.667 and 66.7% are equivalent."],
          },
        },
        {
          id: "physhl-u2-car-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A Carnot engine has an efficiency of 50% and its hot reservoir is at 800 K. In each cycle it absorbs 2400 J of heat.",
          parts: [
            { label: "a", prompt: "Calculate the temperature of the cold reservoir.", marks: 2 },
            { label: "b", prompt: "Calculate the heat rejected to the cold reservoir.", marks: 1 },
            { label: "c", prompt: "Calculate the work done per cycle.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $T_c$ in K", answer: 400, unit: "K" },
              { label: "(b) Heat rejected $Q_c$", answer: 1200, unit: "J" },
              { label: "(c) Work done", answer: 1200, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Carnot relations", statement: "$\\eta = 1 - T_c/T_h$; $Q_c/Q_h = T_c/T_h$; $W = Q_h - Q_c$." },
            ],
            steps: [
              { part: "a", reasoning: "Rearrange $\\eta = 1 - T_c/T_h$ to find $T_c$.", working: "T_c = T_h(1 - \\eta) = 800 \\times (1 - 0.50)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$T_c = 400$ K.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$Q_c = (T_c/T_h) Q_h = 0.5 \\times 2400 = 1200$ J.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$W = Q_h - Q_c = 2400 - 1200 = 1200$ J.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) $400$ K. (b) $1200$ J. (c) $1200$ J.",
            commonErrors: ["Using Celsius in the rearranged formula — all Carnot temperatures are kelvin."],
          },
        },
        {
          id: "physhl-u2-car-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A Carnot engine operates between 600 K and 300 K and absorbs $Q_h = 3000$ J per cycle.",
          parts: [
            { label: "a", prompt: "Calculate the Carnot efficiency.", marks: 2 },
            { label: "b", prompt: "Calculate the work done per cycle.", marks: 2 },
            { label: "c", prompt: "Calculate the heat rejected per cycle.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Efficiency $\\eta$", answer: 0.5, tolerance: 0.001, unit: "" },
              { label: "(b) Work done", answer: 1500, unit: "J" },
              { label: "(c) Heat rejected", answer: 1500, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Carnot relations", statement: "$\\eta = 1 - T_c/T_h$; $W = \\eta Q_h$; $Q_c = Q_h - W$." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the Carnot efficiency formula.", working: "\\eta = 1 - 300/600 = 0.50", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\eta = 0.50$ or 50%.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Work is efficiency times heat input.", working: "W = 0.50 \\times 3000 = 1500", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$W = 1500$ J.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$Q_c = Q_h - W = 3000 - 1500 = 1500$ J (also $= Q_h T_c/T_h$).", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) $50\\%$. (b) $1500$ J. (c) $1500$ J.",
            commonErrors: ["Forgetting the temperatures must be in kelvin — here they already are."],
          },
        },
        {
          id: "physhl-u2-car-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A Carnot engine operates with $T_h = 700$ K. Initially $T_c = 350$ K; it is then modified so $T_c = 250$ K while $T_h$ stays fixed. Each cycle absorbs 2000 J.",
          parts: [
            { label: "a", prompt: "Calculate the efficiency before and after the change.", marks: 2 },
            { label: "b", prompt: "Calculate the extra work obtained per cycle after the change.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\eta_{before}$", answer: 0.5, tolerance: 0.001, unit: "" },
              { label: "(a) $\\eta_{after}$", answer: 0.643, tolerance: 0.001, unit: "" },
              { label: "(b) Extra work in J", answer: 286, tolerance: 1, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Carnot efficiency", statement: "$\\eta = 1 - T_c/T_h$; lowering $T_c$ raises efficiency." },
            ],
            steps: [
              { part: "a", reasoning: "Before: $\\eta_1 = 1 - 350/700 = 0.50$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "After: $\\eta_2 = 1 - 250/700 = 0.643$ (64.3%).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Work before $= 0.50 \\times 2000 = 1000$ J; work after $= 0.643 \\times 2000 = 1286$ J.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Extra work $= 1286 - 1000 = 286$ J.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Alternatively $\\Delta W = (\\eta_2 - \\eta_1)Q_h = 0.143 \\times 2000 \\approx 286$ J — larger $\\Delta T$ gives more work.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 50% → 64.3%. (b) Extra $\\approx 286$ J per cycle.",
            commonErrors: ["Comparing efficiencies without multiplying by $Q_h$ — must compute actual work difference."],
          },
        },
        {
          id: "physhl-u2-car-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A real engine operates between 500 K and 300 K with an actual efficiency of 35%. It produces 700 J of work per cycle.",
          parts: [
            { label: "a", prompt: "Calculate the heat absorbed per cycle.", marks: 2 },
            { label: "b", prompt: "Calculate the heat rejected per cycle.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Heat absorbed $Q_h$", answer: 2000, unit: "J" },
              { label: "(b) Heat rejected $Q_c$", answer: 1300, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Engine relations", statement: "$Q_h = W/\\eta$; $Q_c = Q_h - W$. The Carnot limit here is 40%." },
            ],
            steps: [
              { part: "a", reasoning: "Heat input from $\\eta = W/Q_h$.", working: "Q_h = 700/0.35 = 2000", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$Q_h = 2000$ J.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rejected heat is input minus work.", working: "Q_c = 2000 - 700 = 1300", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$Q_c = 1300$ J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $Q_h = 2000$ J. (b) $Q_c = 1300$ J.",
            commonErrors: ["Using Carnot efficiency 40% instead of the actual 35% — real engines are below the limit."],
          },
        },
        {
          id: "physhl-u2-car-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A Carnot engine operates between 800 K and 400 K and absorbs 5000 J of heat per cycle.",
          parts: [
            { label: "a", prompt: "Calculate the efficiency and the work done per cycle.", marks: 3 },
            { label: "b", prompt: "Calculate the heat rejected to the cold reservoir.", marks: 2 },
            { label: "c", prompt: "Describe the four stages of the Carnot cycle and identify during which stages heat is absorbed and rejected.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Carnot relations", statement: "$\\eta = 1 - T_c/T_h$; $W = \\eta Q_h$; $Q_c = Q_h - W$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\eta = 1 - 400/800 = 0.50$ = 50%.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$W = \\eta Q_h = 0.50 \\times 5000 = 2500$ J.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\eta = 50\\%$; $W = 2500$ J per cycle.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$Q_c = Q_h - W = 5000 - 2500 = 2500$ J (or $Q_c = Q_h T_c/T_h$).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$Q_c = 2500$ J.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Stage 1: isothermal expansion at 800 K — absorbs $Q_h$ from hot reservoir.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Stages 2 and 4 are adiabatic (expansion then compression) — no heat exchange.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Stage 3: isothermal compression at 400 K — rejects $Q_c$ to cold reservoir.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 50%, 2500 J. (b) 2500 J. (c) Heat in during isothermal expansion at $T_h$; heat out during isothermal compression at $T_c$; adiabats exchange no heat.",
            commonErrors: ["Saying heat is exchanged during adiabatic stages — $Q = 0$ there."],
          },
        },
      ],
    },
  ],
};
