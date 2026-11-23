import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "chem10-u5-lesson-5-2",
  code: "5-2",
  title: "Capstone: Energy Changes in Chemical Reactions",
  goal: "I CAN apply thermochemistry to real systems, distinguish exothermic and endothermic processes, and evaluate energy claims.",
  standards: ["HS-PS1-4", "SEP: Using Mathematics and Computational Thinking", "SEP: Engaging in Argument from Evidence"],
  vocabulary: [
    { term: "Exothermic", definition: "A reaction that releases energy to surroundings (ΔH < 0)." },
    { term: "Endothermic", definition: "A reaction that absorbs energy from surroundings (ΔH > 0)." },
    { term: "Enthalpy", definition: "Heat content of a system at constant pressure; ΔH measures heat change." },
    { term: "Calorimetry", definition: "Measuring heat released or absorbed in a reaction using temperature change." },
    { term: "Specific heat", definition: "Energy needed to raise 1 g of a substance by 1°C." },
    { term: "Activation energy", definition: "Minimum energy needed for a reaction to start." },
    { term: "Bond energy", definition: "Energy required to break a bond or released when forming one." },
    { term: "Heat of reaction", definition: "Energy change when reactants convert to products at constant pressure." },
  ],
  concepts: [
    {
      id: "chem10-u5-thermochemistry",
      title: "Calorimetry and energy balance",
      skill: "Calculate heat changes from temperature data and apply energy conservation.",
      lesson: {
        sections: [
          {
            heading: "Measuring heat",
            body: "Calorimetry measures heat using temperature change: $q = mc\\Delta T$, where $m$ = mass, $c$ = specific heat, $\\Delta T$ = temperature change. If the reaction releases heat (exothermic), the surroundings warm up; if it absorbs heat (endothermic), surroundings cool down.",
          },
          {
            heading: "Exothermic vs endothermic",
            body: "- **Exothermic**: products have less energy than reactants; energy released as heat/light (combustion, respiration, hand warmers)\n- **Endothermic**: products have more energy; energy absorbed (photosynthesis, instant cold packs, electrolysis)\n\nBond breaking requires energy (endothermic step); bond forming releases energy (exothermic step). Net ΔH determines which dominates.",
          },
          {
            heading: "Energy in everyday life",
            body: "Hand warmers use exothermic oxidation of iron. Instant cold packs use endothermic dissolution of ammonium nitrate. Both exploit energy changes — one releases heat, the other absorbs it.",
          },
        ],
        keyFormulas: [
          { name: "Heat", statement: "$q = mc\\Delta T$" },
          { name: "Exothermic", statement: "$\\Delta H < 0$ — releases energy" },
        ],
        workedExample: {
          problem: "50 g of water warms from 20°C to 30°C. Calculate heat absorbed (c = 4.18 J/g°C).",
          solution: "$q = 50 \\times 4.18 \\times 10 = 2090$ J = 2.09 kJ.",
        },
      },
      questions: [
        {
          id: "chem10-u5-thermochemistry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A reaction causes the surroundings to warm up. Is it exothermic or endothermic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Endothermic" },
              { id: "b", text: "Exothermic" },
              { id: "c", text: "Neither" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Exothermic", statement: "Releases heat → surroundings warm." }],
            steps: [{ reasoning: "Warming surroundings means the reaction released heat — exothermic.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Exothermic",
            commonErrors: ["Reversing the temperature direction."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u5-thermochemistry-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate heat released when 100 g of water cools from 50°C to 30°C (c = 4.18 J/g°C).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Heat", statement: "$q = mc\\Delta T$" }],
            steps: [
              { reasoning: "$\\Delta T = 50 - 30 = 20$°C (cooling = heat released).", marks: 1, markCode: "M" },
              { reasoning: "$q = 100 \\times 4.18 \\times 20 = 8360$ J = 8.36 kJ.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 8.36 kJ released.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8.36 kJ released",
            commonErrors: ["Using wrong ΔT sign; forgetting units."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u5-thermochemistry-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why breaking bonds is endothermic but forming bonds is exothermic, using a reaction energy diagram concept.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bond energy", statement: "Breaking requires energy input; forming releases energy." },
              { kind: "principle", name: "Activation energy", statement: "Energy needed to reach transition state." },
            ],
            steps: [
              { reasoning: "Breaking bonds requires energy input — atoms must be pulled apart against attraction.", marks: 1, markCode: "R" },
              { reasoning: "Forming bonds releases energy — atoms come together, lowering potential energy.", marks: 1, markCode: "R" },
              { reasoning: "Net ΔH = energy to break - energy released forming; determines exo/endothermic.", marks: 1, markCode: "B" },
              { reasoning: "Activation energy is the barrier to reach the transition state regardless of net ΔH.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Breaking needs energy in; forming releases energy out; net determines ΔH.",
            commonErrors: ["Thinking all reactions release energy."],
            examinerNote: "R2, B1, A1.",
          },
        },
        {
          id: "chem10-u5-thermochemistry-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A chemistry club wants to make 'instant hot packs' using a reaction that releases heat.",
          parts: [
            { label: "a", prompt: "Explain what makes a reaction exothermic.", marks: 2 },
            { label: "b", prompt: "Suggest two candidate reactions and justify each.", marks: 4 },
            { label: "c", prompt: "Calculate heat released if the reaction produces enough heat to warm 200 g water from 20°C to 80°C.", marks: 2 },
            { label: "d", prompt: "Evaluate safety concerns for classroom use.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exothermic", statement: "Products lower energy than reactants." },
              { kind: "principle", name: "Safety", statement: "Heat, corrosives, and fumes need controls." },
            ],
            steps: [
              { reasoning: "Exothermic: products have less energy; energy released as heat.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "ΔH < 0; energy flows to surroundings.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Candidate 1: oxidation of iron (rusting) — slow but safe; or quicklime + water (CaO + H₂O → Ca(OH)₂).", marks: 2, markCode: "B", part: "b" },
              { reasoning: "Candidate 2: another exothermic reaction like HCl + NaOH neutralization.", marks: 2, markCode: "A", part: "b" },
              { reasoning: "$q = mc\\Delta T = 200 \\times 4.18 \\times 60 = 50,160$ J ≈ 50 kJ.", working: "q=200*4.18*60=50160", marks: 2, markCode: "M", part: "c" },
              { reasoning: "Safety: heat can burn; corrosive chemicals need gloves/goggles; fumes need ventilation.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Adult supervision and proper disposal required.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) products lower energy (b) CaO+water or neutralization (c) ~50 kJ (d) burns/corrosives need controls.",
            commonErrors: ["Choosing reactions that are endothermic."],
            examinerNote: "2+4+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u5-energy-eval",
      title: "Evaluating energy claims",
      skill: "Assess claims about energy sources and efficiency using thermodynamic reasoning.",
      lesson: {
        sections: [
          {
            heading: "Energy sources compared",
            body: "- **Fossil fuels**: high energy density but CO₂ emissions, finite supply\n- **Nuclear**: very high energy density, low CO₂, but waste and safety concerns\n- **Solar/wind**: renewable, low emissions, but intermittent and land-intensive\n- **Hydroelectric**: reliable, low emissions, but ecosystem disruption",
          },
          {
            heading: "Efficiency reality",
            body: "No energy source is 100% efficient. Engines convert ~20-40% of fuel energy to work; the rest is waste heat. 'Clean' energy still has environmental costs — evaluate trade-offs honestly.",
          },
          {
            heading: "Evaluating claims",
            body: "When assessing energy claims, ask: What's the energy source? What's the efficiency? What are the emissions? What are the hidden costs (mining, land use, waste)? Is the claim comparing apples to apples?",
          },
        ],
        keyFormulas: [
          { name: "Efficiency", statement: "$\\eta = \\frac{\\text{useful output}}{\\text{energy input}}$" },
          { name: "Energy density", statement: "Energy per unit mass or volume" },
        ],
        workedExample: {
          problem: "A solar panel converts 20% of sunlight to electricity. If it receives 1000 W/m², what is output per m²?",
          solution: "$0.20 \\times 1000 = 200$ W/m².",
        },
      },
      questions: [
        {
          id: "chem10-u5-energy-eval-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'energy density' measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How much space energy takes up" },
              { id: "b", text: "Energy per unit mass or volume" },
              { id: "c", text: "How fast energy travels" },
              { id: "d", text: "Total energy in a system" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Energy density", statement: "Energy per mass/volume — fuels compared this way." }],
            steps: [{ reasoning: "Energy density compares fuels by energy stored per unit.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Energy per unit mass/volume",
            commonErrors: ["Confusing with power."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u5-energy-eval-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is nuclear energy considered 'low carbon' despite not being renewable?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Nuclear", statement: "No combustion → no CO₂ during operation." }],
            steps: [
              { reasoning: "Nuclear fission releases energy without burning fuel — no CO₂ emitted during operation.", marks: 1, markCode: "B" },
              { reasoning: "Lifecycle emissions (mining, construction) are small compared to fossil fuels.", marks: 1, markCode: "R" },
              { reasoning: "But it's not renewable — uranium is finite.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No combustion = no operational CO₂; but uranium is finite.",
            commonErrors: ["Confusing low-carbon with renewable."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "chem10-u5-energy-eval-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An ad claims 'This battery lasts 3x longer than competitors.' What questions should you ask before believing it?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Evaluating claims", statement: "Test conditions, comparison basis, and bias matter." }],
            steps: [
              { reasoning: "Under what conditions was it tested? (usage, temperature, device type)", marks: 1, markCode: "B" },
              { reasoning: "Which competitors? Are they representative or cherry-picked weak ones?", marks: 1, markCode: "R" },
              { reasoning: "Is the test independent or manufacturer-funded?", marks: 1, markCode: "R" },
              { reasoning: "What does 'longer' mean — capacity, lifespan, charge cycles? Vague metrics hide trade-offs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Test conditions, competitor selection, funding source, metric definition.",
            commonErrors: ["Accepting marketing claims without scrutiny."],
            examinerNote: "B1, R2, A1.",
          },
        },
        {
          id: "chem10-u5-energy-eval-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Your city must choose between natural gas and solar for new power generation.",
          parts: [
            { label: "a", prompt: "List two advantages and two disadvantages of each option.", marks: 4 },
            { label: "b", prompt: "Calculate the solar output if panels average 18% efficiency and receive 5.0 kWh/m²/day.", marks: 3 },
            { label: "c", prompt: "Write a recommendation weighing both options.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Trade-offs", statement: "No energy source is perfect." },
              { kind: "formula", name: "Solar output", statement: "$0.18 \\times 5.0$ kWh/m²/day" },
            ],
            steps: [
              { reasoning: "Gas: reliable, dispatchable; but CO₂ emissions, finite supply.", marks: 2, markCode: "B", part: "a" },
              { reasoning: "Solar: renewable, low emissions; but intermittent, weather-dependent.", marks: 2, markCode: "B", part: "a" },
              { reasoning: "Solar output = $0.18 \\times 5.0 = 0.90$ kWh/m²/day.", marks: 3, markCode: "M", part: "b" },
              { reasoning: "Recommendation: hybrid approach — solar for bulk + gas for backup is often optimal.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Pure solar requires storage/battery costs; pure gas ignores emissions.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Final recommendation acknowledges trade-offs and cites the data.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) gas reliable+emits; solar renewable+intermittent (b) 0.90 kWh/m²/day (c) hybrid recommended.",
            commonErrors: ["Recommending without weighing trade-offs."],
            examinerNote: "4+3+3 = 10.",
          },
        },
      ],
    },
  ],
};
