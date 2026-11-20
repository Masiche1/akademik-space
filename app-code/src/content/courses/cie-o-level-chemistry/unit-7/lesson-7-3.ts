import type { Lesson } from "../../../types.ts";

export const lesson173: Lesson = {
  id: "olchem-u7-lesson-7-3",
  code: "7-3",
  title: "Ammonia and Amphoteric Substances",
  goal: "I CAN describe the properties of ammonia, ammonium compounds and amphoteric oxides/hydroxides.",
  standards: ["5070 7.3"],
  vocabulary: [
    { term: "Ammonia (NH₃)", definition: "Basic gas used in fertilisers; forms NH₄⁺ in water." },
    { term: "Ammonium ion (NH₄⁺)", definition: "Acidic ion formed when NH₃ accepts H⁺." },
    { term: "Amphoteric", definition: "Reacts as both acid and base depending on conditions." },
    { term: "Amphoteric oxide", definition: "E.g. Al₂O₃ — reacts with acids and bases." },
    { term: "Amphoteric hydroxide", definition: "E.g. Al(OH)₃, Zn(OH)₂ — dissolves in acid and excess base." },
    { term: "Fertiliser", definition: "Substance added to soil to provide plant nutrients (N, P, K)." },
    { term: "Ammonium nitrate", definition: "NH₄NO₃ — common fertiliser; also explosive when heated." },
    { term: "Basic oxide", definition: "Metal oxide reacting with acid to form salt + water." },
  ],
  concepts: [
    {
      id: "olchem-u7-ammonia",
      title: "Ammonia and ammonium compounds",
      skill: "Describe ammonia's properties and reactions as base and acid.",
      lesson: {
        sections: [
          {
            heading: "Ammonia as a base",
            body: "NH₃ is a weak base — accepts H⁺ from acids:\n- NH₃ + HCl → NH₄Cl\n- Turns damp red litmus blue\n- Forms NH₄⁺ in water (weak base, partial ionisation)",
          },
          {
            heading: "Ammonium ion as acid",
            body: "NH₄⁺ can donate H⁺ — acts as weak acid:\n- NH₄Cl + NaOH → NH₃ + NaCl + H₂O (on heating)\n- Ammonium salts are acidic in solution",
          },
          {
            heading: "Uses",
            body: "- NH₃ → fertilisers (NH₄NO₃, (NH₄)₂SO₄)\n- Nitric acid production (Ostwald)\n- Cleaning products, refrigerants",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is ammonium nitrate solution acidic?",
          solution: "NH₄⁺ is a weak acid — it donates H⁺ to water: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺.",
        },
      },
      questions: [
        {
          id: "olchem-u7-ammonia-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What colour does damp red litmus turn in ammonia?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stays red" }, { id: "b", text: "Blue" }, { id: "c", text: "Green" }, { id: "d", text: "Yellow" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Ammonia", statement: "Basic — turns litmus blue." }],
            steps: [{ reasoning: "Recall.", working: "\\text{blue}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Blue",
            commonErrors: ["Ammonia is basic, not acidic."],
          },
        },
        {
          id: "olchem-u7-ammonia-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the equation for ammonia reacting with hydrochloric acid.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "NH₃+HCl", statement: "NH₃ + HCl → NH₄Cl." }],
            steps: [
              { reasoning: "Equation.", marks: 1, markCode: "M" },
              { reasoning: "Balanced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "NH₃ + HCl → NH₄Cl",
            commonErrors: ["Writing NH₃Cl or wrong formula."],
          },
        },
        {
          id: "olchem-u7-ammonia-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why NH₄Cl solution is acidic.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "NH₄⁺ acidity", statement: "NH₄⁺ donates H⁺ → acidic." }],
            steps: [
              { reasoning: "NH₄Cl contains NH₄⁺.", marks: 1, markCode: "M" },
              { reasoning: "NH₄⁺ is weak acid.", marks: 1, markCode: "M" },
              { reasoning: "Donates H⁺ to water.", marks: 1, markCode: "M" },
              { reasoning: "Conclude acidic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "NH₄Cl dissociates to NH₄⁺ and Cl⁻; NH₄⁺ is a weak acid that donates H⁺ to water, producing H₃O⁺ — so the solution is acidic.",
            commonErrors: ["Saying Cl⁻ makes it acidic — Cl⁻ is neutral."],
          },
        },
        {
          id: "olchem-u7-ammonia-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the dual nature of ammonia and ammonium compounds.",
          parts: [
            { label: "a", prompt: "Explain NH₃ as a base.", marks: 3 },
            { label: "b", prompt: "Explain NH₄⁺ as an acid.", marks: 3 },
            { label: "c", prompt: "Give one use of each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Ammonia duality", statement: "NH₃ base; NH₄⁺ acid." }],
            steps: [
              { part: "a", reasoning: "Accepts H⁺.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Forms NH₄⁺.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Basic properties.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Donates H⁺.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Forms NH₃.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Acidic properties.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "NH₃: fertiliser/refrigerant.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "NH₄⁺: fertiliser salts.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) NH₃ accepts H⁺ (b) NH₄⁺ donates H⁺ (c) fertilisers",
            commonErrors: ["In (a) saying NH₃ 'gives H⁺' — it accepts."],
          },
        },
      ],
    },
    {
      id: "olchem-u7-amphoteric",
      title: "Amphoteric oxides and hydroxides",
      skill: "Describe amphoteric behaviour of Al₂O₃, Al(OH)₃, ZnO, Zn(OH)₂.",
      lesson: {
        sections: [
          {
            heading: "Definition",
            body: "Amphoteric = reacts as **both acid and base**.\n\nAmphoteric oxides/hydroxides: Al₂O₃, Al(OH)₃, ZnO, Zn(OH)₂, PbO.",
          },
          {
            heading: "Reactions",
            body: "With acid (behaves as base):\nAl₂O₃ + 6HCl → 2AlCl₃ + 3H₂O\n\nWith base (behaves as acid):\nAl₂O₃ + 2NaOH → 2NaAlO₂ + H₂O (or Na[Al(OH)₄])\n\nAl(OH)₃ dissolves in excess NaOH forming aluminate.",
          },
          {
            heading: "vs basic oxides",
            body: "Basic oxides (Na₂O, CaO): react only with acids → salt + water.\nAmphoteric: react with BOTH acids and bases.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Show Al(OH)₃ reacting as acid and as base.",
          solution: "As base: Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O. As acid: Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O.",
        },
      },
      questions: [
        {
          id: "olchem-u7-amphoteric-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does amphoteric mean?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only reacts with acids" }, { id: "b", text: "Reacts as both acid and base" }, { id: "c", text: "Does not react" }, { id: "d", text: "Only reacts with water" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Amphoteric", statement: "Both acid and base." }],
            steps: [{ reasoning: "Recall.", working: "\\text{acid + base}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Reacts as both acid and base",
            commonErrors: ["Confusing with basic oxide."],
          },
        },
        {
          id: "olchem-u7-amphoteric-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two amphoteric substances.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Amphoteric", statement: "Al₂O₃, Al(OH)₃, ZnO, Zn(OH)₂." }],
            steps: [
              { reasoning: "Any two.", marks: 1, markCode: "M" },
              { reasoning: "Correct formulas.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Al₂O₃, Al(OH)₃, ZnO, Zn(OH)₂ (any two)",
            commonErrors: ["Naming NaOH — that's a base only."],
          },
        },
        {
          id: "olchem-u7-amphoteric-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write equations for Al(OH)₃ reacting with HCl and with NaOH.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Amphoteric", statement: "Al(OH)₃ + acid → salt + water; + base → aluminate." }],
            steps: [
              { reasoning: "Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O.", marks: 1, markCode: "M" },
              { reasoning: "Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O.", marks: 1, markCode: "M" },
              { reasoning: "Both balanced.", marks: 1, markCode: "M" },
              { reasoning: "State both.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "With acid: Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O. With base: Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O",
            commonErrors: ["Not balancing NaAlO₂ equation."],
          },
        },
        {
          id: "olchem-u7-amphoteric-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain amphoteric behaviour with examples.",
          parts: [
            { label: "a", prompt: "Define amphoteric.", marks: 2 },
            { label: "b", prompt: "Show Al(OH)₃ as base.", marks: 3 },
            { label: "c", prompt: "Show Al(OH)₃ as acid.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Amphoteric", statement: "Reacts with both acids and bases." }],
            steps: [
              { part: "a", reasoning: "Both acid and base.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accepts H⁺ → salt.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Balanced.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Donates OH⁻ → aluminate.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Balanced.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) both acid+base (b) +HCl→AlCl₃ (c) +NaOH→NaAlO₂",
            commonErrors: ["In (c) wrong product — aluminate not Al metal."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olchem-u7-ammonia-amphoteric-notes",
      title: "Ammonia and amphoteric substances — revision notes",
      summary: "NH₃/NH₄⁺ duality, amphoteric oxides and hydroxides.",
      sections: [
        {
          heading: "Key facts",
          body: "NH₃ = weak base (accepts H⁺); NH₄⁺ = weak acid (donates H⁺). Amphoteric: Al₂O₃, Al(OH)₃, ZnO, Zn(OH)₂ — react with acids AND bases.",
        },
        {
          heading: "Exam technique",
          body: "- NH₄Cl solution acidic (NH₄⁺ donates H⁺).\n- Amphoteric: write both reactions to show duality.\n- Aluminate = NaAlO₂ or Na[Al(OH)₄].",
        },
      ],
    },
  ],
};
