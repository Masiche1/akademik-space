import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "edialchem-u2-lesson-2-1",
  code: "2-1",
  title: "Inorganic Chemistry — Groups and Reactivity",
  goal: "I CAN describe reactions of Group 1 metals, halogens and describe typical inorganic reactions.",
  standards: ["IC2 Inorganic and physical chemistry", "Inorganic reactions"],
  vocabulary: [
    { term: "Alkali metal", definition: "Group 1 metal (Li, Na, K…) forming alkaline hydroxides." },
    { term: "Halogen", definition: "Group 17 element (F, Cl, Br, I) forming halides." },
    { term: "Displacement reaction", definition: "More reactive element displaces less reactive from compound." },
    { term: "Precipitate", definition: "Insoluble solid formed when solutions mix." },
  ],
  concepts: [
    {
      id: "edialchem-u2-group1",
      title: "Group 1 (alkali metals) and Group 17 (halogens)",
      skill: "Describe trends and reactions of alkali metals and halogens.",
      lesson: {
        sections: [
          {
            heading: "Group 1 reactions",
            body: "React vigorously with water: 2Na + 2H₂O → 2NaOH + H₂. Reactivity increases down group (outer electron easier to lose). Products: hydroxides (alkaline), hydrogen gas. React with oxygen, chlorine, dilute acids. Stored in oil (react with air/moisture).",
          },
          {
            heading: "Halogens",
            body: "Diatomic non-metals. Reactivity decreases down group (harder to gain electron). Displacement: Cl₂ + 2KBr → 2KCl + Br₂. Halide ions tested: Cl⁻ with AgNO₃ → white ppt (AgCl); Br⁻ → cream ppt (AgBr); I⁻ → yellow ppt (AgI).",
          },
          {
            heading: "Uses",
            body: "NaCl: food preservative, chlor-alkali industry. NaOH: soap, drain cleaner. Cl₂: water treatment, PVC. Br₂/I₂: antiseptics, photography.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "2Na + 2H₂O → 2NaOH + H₂" },
          { name: "Key formula", statement: "Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂" },
        ],
        workedExample: {
          problem: "Predict the products when chlorine water is added to potassium bromide solution.",
          solution: "Cl₂ displaces Br₂: Cl₂ + 2KBr → 2KCl + Br₂. Orange/brown bromine colour appears — confirms chlorine more reactive than bromine.",
        },
      },
      questions: [
        {
          id: "edialchem-g1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products when sodium reacts with water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "NaOH and H₂" },
              { id: "b", text: "NaCl and H₂" },
              { id: "c", text: "Na₂O and H₂" },
              { id: "d", text: "NaH and O₂" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Group 1 + water", statement: "Alkali metal → hydroxide + H₂." }],
            steps: [{ reasoning: "2Na + 2H₂O → 2NaOH + H₂.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** NaOH and H₂",
          },
        },
        {
          id: "edialchem-g1-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why reactivity increases down Group 1.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Group 1 trend", statement: "Outer electron easier to lose down group." }],
            steps: [
              { reasoning: "Each element down adds an electron shell.", marks: 1, markCode: "M" },
              { reasoning: "Outer electron further from nucleus, more shielding.", marks: 1, markCode: "M" },
              { reasoning: "Easier to lose → more reactive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "↓ group → easier e⁻ loss → ↑ reactivity",
            commonErrors: ["Saying nuclear charge decreases."],
          },
        },
        {
          id: "edialchem-g1-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the halide ion test using silver nitrate.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Halide test", statement: "AgNO₃ precipitate colours distinguish halides." }],
            steps: [
              { reasoning: "Add AgNO₃(aq) to halide solution.", marks: 1, markCode: "M" },
              { reasoning: "Cl⁻ → white AgCl; Br⁻ → cream AgBr; I⁻ → yellow AgI.", marks: 1, markCode: "M" },
              { reasoning: "Precipitate colour identifies halide.", marks: 1, markCode: "A" },
              { reasoning: "Confirm by adding dilute ammonia: AgCl dissolves, AgBr partially, AgI insoluble.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "AgNO₃ → white/cream/yellow ppt for Cl/Br/I",
            commonErrors: ["Wrong colours."],
          },
        },
        {
          id: "edialchem-g1-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare the reactions and trends of Group 1 metals and Group 17 halogens.",
          parts: [
            { label: "a", prompt: "Describe Group 1 reaction with water.", marks: 3 },
            { label: "b", prompt: "Describe halogen displacement reactions.", marks: 3 },
            { label: "c", prompt: "Compare the reactivity trends down each group.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "G1 vs G17", statement: "Lose e⁻ vs gain e⁻; trends opposite." }],
            steps: [
              { part: "a", reasoning: "2M + 2H₂O → 2MOH + H₂; vigour increases down group.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Products alkaline hydroxide + hydrogen.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Example: Na/K react vigorously.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "More reactive halogen displaces less reactive: Cl₂ + 2Br⁻ → Br₂ + 2Cl⁻.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reactivity decreases down group.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Example: chlorine displaces bromine/iodine.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "G1: reactivity ↑ down group (e⁻ loss easier).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "G17: reactivity ↓ down group (e⁻ gain harder).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Opposite trends explained by electron gain vs loss.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "G1: ↑ reactivity down; G17: ↓ reactivity down",
            commonErrors: ["Same trend for both groups."],
          },
        },
      ],
    },
    {
      id: "edialchem-u2-acids",
      title: "Acids, bases and salts",
      skill: "Describe acid-base reactions, pH and titrations.",
      lesson: {
        sections: [
          {
            heading: "Acids and bases",
            body: "Acids donate H⁺ ions (HCl, H₂SO₄, HNO₃, CH₃COOH); bases accept H⁺ (NaOH, NH₃). pH scale 0–14: <7 acidic, 7 neutral, >7 alkaline. Strong acids fully ionise; weak partially. Indicators: universal indicator, phenolphthalein (pink in alkali), litmus, methyl orange.",
          },
          {
            heading: "Neutralisation",
            body: "Acid + base → salt + water. HCl + NaOH → NaCl + H₂O. Acid + carbonate → salt + water + CO₂: 2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂. Acid + metal → salt + H₂ (with reactive metals).",
          },
          {
            heading: "Titration",
            body: "Measure unknown concentration: pipette known volume of alkali into flask, add indicator, titrate with acid from burette until colour change (endpoint). Repeat concordant titres. c₁V₁ = c₂V₂ for monoprotic acids.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "c₁V₁ = c₂V₂" },
          { name: "pH", statement: "0-14 scale" },
        ],
        workedExample: {
          problem: "25 cm³ of 0.1 mol/dm³ NaOH needs 20 cm³ HCl for neutralisation. Find HCl concentration.",
          solution: "c₁V₁ = c₂V₂ → 0.1×25 = c×20 → c = 0.125 mol/dm³.",
        },
      },
      questions: [
        {
          id: "edialchem-acid-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the pH of a neutral solution at 25°C?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "14" },
              { id: "b", text: "0" },
              { id: "c", text: "1" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "pH", statement: "7 = neutral." }],
            steps: [{ reasoning: "Pure water pH 7.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** 7",
          },
        },
        {
          id: "edialchem-acid-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the equation for the reaction between hydrochloric acid and sodium carbonate.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Carbonate + acid", statement: "Salt + water + CO₂." }],
            steps: [
              { reasoning: "2HCl + Na₂CO₃ → 2NaCl + H₂O + CO₂.", marks: 1, markCode: "M" },
              { reasoning: "Balanced correctly.", marks: 1, markCode: "A" },
              { reasoning: "Products correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2HCl + Na₂CO₃ → 2NaCl + H₂O + CO₂",
            commonErrors: ["Missing CO₂ or water."],
          },
        },
        {
          id: "edialchem-acid-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "25.0 cm³ of NaOH solution required 20.0 cm³ of 0.10 mol/dm³ HCl for neutralisation. Calculate NaOH concentration.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 0.08, tolerance: 0.001, unit: "mol/dm³" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Titration", statement: "c₁V₁ = c₂V₂." }],
            steps: [
              { reasoning: "c(NaOH) × 25.0 = 0.10 × 20.0.", marks: 1, markCode: "M" },
              { reasoning: "c = 2.0/25.0.", marks: 1, markCode: "M" },
              { reasoning: "= 0.08 mol/dm³.", marks: 1, markCode: "M" },
              { reasoning: "Units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.08 mol/dm³",
            commonErrors: ["Swapping volumes."],
          },
        },
        {
          id: "edialchem-acid-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe how you would carry out a titration to find the concentration of an acid.",
          parts: [
            { label: "a", prompt: "Apparatus and setup.", marks: 4 },
            { label: "b", prompt: "Procedure.", marks: 3 },
            { label: "c", prompt: "Calculation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Titration", statement: "Burette + pipette + indicator." }],
            steps: [
              { part: "a", reasoning: "Fill burette with acid; clamp vertically.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Use pipette to measure fixed volume of alkali into conical flask.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add indicator (phenolphthalein/methyl orange).", marks: 1, markCode: "A" },
              { part: "a", reasoning: "White tile beneath flask.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Titrate acid into alkali, swirling, until endpoint colour change.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Repeat until concordant titres (±0.1 cm³).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use mean titre in calculation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use c₁V₁ = c₂V₂ with known alkali concentration.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute values correctly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Convert cm³ to dm³ if needed.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Burette/pipette/indicator; c₁V₁=c₂V₂",
            commonErrors: ["Wrong indicator; not repeating titres."],
          },
        },
      ],
    },
  ],
};
