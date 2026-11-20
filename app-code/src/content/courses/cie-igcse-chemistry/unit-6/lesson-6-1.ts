import type { Lesson } from "../../../types.ts";

export const lesson161: Lesson = {
  id: "ciecy-u6-lesson-6-1",
  code: "6-1",
  title: "Reaction Rates and Equilibrium",
  goal: "I CAN explain factors affecting reaction rate and describe reversible reactions and equilibrium.",
  standards: ["0654 6.1", "0654 6.2"],
  vocabulary: [
    { term: "Rate of reaction", definition: "How quickly reactants are used up / products formed." },
    { term: "Collision theory", definition: "Reactions occur when particles collide with sufficient energy (≥Ea) and correct orientation." },
    { term: "Catalyst", definition: "Substance that speeds reaction by lowering Ea; unchanged at end." },
    { term: "Reversible reaction", definition: "Can proceed in both directions (⇌)." },
    { term: "Dynamic equilibrium", definition: "Forward and reverse rates equal; concentrations constant but reactions continue." },
    { term: "Le Chatelier's principle", definition: "System at equilibrium shifts to oppose any change in conditions." },
    { term: "Surface area", definition: "More exposed surface → more collisions → faster rate." },
    { term: "Concentration", definition: "Higher concentration → more frequent collisions → faster rate." },
  ],
  concepts: [
    {
      id: "ciecy-u6-rates",
      title: "Factors affecting rate",
      skill: "Explain how temperature, concentration, surface area and catalysts affect rate using collision theory.",
      lesson: {
        sections: [
          {
            heading: "Collision theory",
            body: "A reaction happens when particles **collide with enough energy (≥ activation energy)** and **correct orientation**. Rate depends on collision frequency and success fraction.",
          },
          {
            heading: "Factors",
            body: "| Factor | Effect | Why |\n|---|---|---|\n| Temperature ↑ | faster | more KE → more collisions exceed Ea |\n| Concentration ↑ | faster | more particles → more collisions |\n| Surface area ↑ | faster | more exposed particles |\n| Catalyst | faster | lowers Ea → higher success fraction |",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does powdered calcium carbonate react faster with acid than lumps?",
          solution: "Powder has greater surface area → more particles exposed → more frequent collisions → faster rate.",
        },
      },
      questions: [
        {
          id: "ciecy-u6-rates-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "According to collision theory, what must particles have to react?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Any collision" }, { id: "b", text: "Collision with energy ≥ Ea and correct orientation" }, { id: "c", text: "High temperature only" }, { id: "d", text: "A catalyst present" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Collision theory", statement: "Need sufficient energy + correct orientation." }],
            steps: [{ reasoning: "Recall.", working: "\\text{energy + orientation}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Collision with energy ≥ Ea and correct orientation",
            commonErrors: ["Thinking any collision works."],
          },
        },
        {
          id: "ciecy-u6-rates-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways to increase the rate of a reaction between a solid and a solution.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Rate factors", statement: "Surface area, concentration, temperature, catalyst." }],
            steps: [
              { reasoning: "Increase surface area (powder).", marks: 1, markCode: "M" },
              { reasoning: "Increase concentration or temperature.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Powder the solid (more surface area) and increase concentration or temperature of the solution.",
            commonErrors: ["Only one method — need two."],
          },
        },
        {
          id: "ciecy-u6-rates-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why increasing temperature increases reaction rate.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Temperature effect", statement: "Higher T → more KE → more successful collisions." }],
            steps: [
              { reasoning: "Particles gain kinetic energy.", marks: 1, markCode: "M" },
              { reasoning: "More collisions exceed Ea.", marks: 1, markCode: "M" },
              { reasoning: "Collision frequency also increases.", marks: 1, markCode: "M" },
              { reasoning: "Conclude faster rate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Higher temperature gives particles more kinetic energy, so a greater proportion of collisions exceed activation energy and collision frequency rises — both increasing rate.",
            commonErrors: ["Only citing 'more collisions' without energy aspect."],
          },
        },
        {
          id: "ciecy-u6-rates-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Use collision theory to explain how a catalyst increases rate.",
          parts: [
            { label: "a", prompt: "Describe what a catalyst does to activation energy.", marks: 3 },
            { label: "b", prompt: "Explain the effect on collision success.", marks: 3 },
            { label: "c", prompt: "State two properties of a catalyst.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Catalysis", statement: "Lower Ea → more successful collisions; catalyst unchanged." }],
            steps: [
              { part: "a", reasoning: "Provides alternative pathway.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Lower Ea than uncatalysed.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "More particles have E ≥ Ea.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Higher fraction of successful collisions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclude faster rate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Not consumed / unchanged at end.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Specific to reaction.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) lowers Ea via alternative path (b) more collisions exceed Ea (c) not consumed, specific",
            commonErrors: ["In (c) saying catalyst is 'used up'."],
          },
        },
      ],
    },
    {
      id: "ciecy-u6-equilibrium",
      title: "Reversible reactions and equilibrium",
      skill: "Describe reversible reactions, dynamic equilibrium and Le Chatelier's principle.",
      lesson: {
        sections: [
          {
            heading: "Reversible reactions",
            body: "Written with **⇌** — products can react back to reactants. At **dynamic equilibrium**: forward rate = reverse rate, concentrations constant (but reactions continue). Closed system required.",
          },
          {
            heading: "Le Chatelier's principle",
            body: "System at equilibrium **opposes** any imposed change:\n- **Concentration ↑** of a reactant → shifts right (more product).\n- **Pressure ↑** (gases) → shifts to fewer gas molecules.\n- **Temperature ↑** → shifts in endothermic direction.",
          },
          {
            heading: "Industrial example",
            body: "Haber process: N₂ + 3H₂ ⇌ 2NH₃ (exothermic). High pressure (4 gases→2), moderate temp (rate vs yield trade-off), iron catalyst.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "For N₂ + 3H₂ ⇌ 2NH₃, predict the effect of increasing pressure.",
          solution: "4 gas molecules → 2, so higher pressure shifts equilibrium right, favouring NH₃ production.",
        },
      },
      questions: [
        {
          id: "ciecy-u6-equilibrium-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At dynamic equilibrium, what is true about the forward and reverse reaction rates?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Forward is faster" }, { id: "b", text: "Reverse is faster" }, { id: "c", text: "They are equal" }, { id: "d", text: "Both are zero" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Dynamic equilibrium", statement: "Rates equal, concentrations constant." }],
            steps: [{ reasoning: "Recall.", working: "\\text{rates equal}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** They are equal",
            commonErrors: ["Thinking reactions stop — they continue at equal rates."],
          },
        },
        {
          id: "ciecy-u6-equilibrium-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State Le Chatelier's principle.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Le Chatelier", statement: "Equilibrium shifts to oppose changes." }],
            steps: [
              { reasoning: "State principle.", marks: 1, markCode: "M" },
              { reasoning: "Give example of shift.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "If a system at equilibrium is disturbed, it shifts position to oppose the change (e.g. adding reactant shifts toward products).",
            commonErrors: ["Saying equilibrium 'returns to original' — it shifts to a new position."],
          },
        },
        {
          id: "ciecy-u6-equilibrium-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For 2SO₂ + O₂ ⇌ 2SO₃ (exothermic), predict the effect of increasing temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Temperature effect", statement: "↑T shifts toward endothermic direction." }],
            steps: [
              { reasoning: "Forward is exothermic.", marks: 1, markCode: "M" },
              { reasoning: "↑T favours endothermic = reverse.", marks: 1, markCode: "M" },
              { reasoning: "Equilibrium shifts left, less SO₃.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Increasing temperature shifts equilibrium left (toward reactants/endothermic direction), decreasing SO₃ yield — though rate increases.",
            commonErrors: ["Saying more product — exothermic reactions favour reactants when heated."],
          },
        },
        {
          id: "ciecy-u6-equilibrium-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain dynamic equilibrium in a reversible reaction.",
          parts: [
            { label: "a", prompt: "Define reversible reaction and give an example.", marks: 3 },
            { label: "b", prompt: "Describe what happens at dynamic equilibrium.", marks: 3 },
            { label: "c", prompt: "State the conditions needed for equilibrium.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Equilibrium", statement: "⇌ reaction, equal rates, closed system, constant concentrations." }],
            steps: [
              { part: "a", reasoning: "Proceeds both directions ⇌.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Example: Haber/Contact process.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Forward rate = reverse rate.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Concentrations constant but reactions continue.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Closed system (no mass loss).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Constant temperature.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete conditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ⇌ both directions, e.g. Haber (b) equal rates, constant conc., reactions continue (c) closed system, constant temp",
            commonErrors: ["In (c) forgetting closed system requirement."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecy-u6-rates-equilibrium-notes",
      title: "Reaction rates and equilibrium — revision notes",
      summary: "Collision theory, rate factors, reversible reactions, Le Chatelier's principle.",
      sections: [
        {
          heading: "Key facts",
          body: "Collision theory: need E≥Ea + correct orientation. Rate ↑ with temperature, concentration, surface area, catalyst (lower Ea). Equilibrium: equal forward/reverse rates, constant concentrations, closed system. Le Chatelier: system opposes change.",
        },
        {
          heading: "Exam technique",
          body: "- For temperature changes: exothermic forward → heating shifts LEFT.\n- For pressure: count gas molecules on each side.",
        },
      ],
    },
  ],
};
