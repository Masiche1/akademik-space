import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "esc7-u2-lesson-2-2",
  code: "2-2",
  title: "Chemical Reactions and Acids",
  goal: "I CAN describe chemical reactions, symbol equations and the properties of acids and alkalis.",
  standards: ["Edexcel KS3 Science — Chemistry"],
  vocabulary: [
    {
      term: "Chemical reaction",
      definition:
        "A process where substances change into new substances with different properties.",
    },
    {
      term: "Reactant",
      definition:
        "A substance that takes part in and is changed by a chemical reaction.",
    },
    {
      term: "Product",
      definition: "A new substance formed by a chemical reaction.",
    },
    {
      term: "Acid",
      definition: "A substance that produces H⁺ ions in solution — pH below 7.",
    },
  ],
  concepts: [
    {
      id: "esc7-u2-reactions",
      title: "Chemical Reactions",
      skill:
        "Identify signs of chemical change and write simple symbol equations.",
      lesson: {
        sections: [
          {
            heading: "Signs of chemical reaction",
            body: "Chemical changes differ from physical changes — new substances form with different properties. Signs: **colour change**, **gas production** (bubbles), **temperature change** (exothermic=heats up, endothermic=cools down), **precipitate formation** (insoluble solid appears), **light/sound**.\n\n**Conservation of mass**: total mass of reactants = total mass of products — atoms are rearranged, not created/destroyed. This is why equations must balance.",
          },
          {
            heading: "Symbol equations",
            body: "Equations use chemical symbols: **word equation** describes in words; **symbol equation** uses formulas. **Balancing**: same number of each atom on both sides — adjust coefficients, never change formulas.\n\nExample: hydrogen + oxygen → water becomes 2H₂ + O₂ → 2H₂O (4 H atoms and 2 O atoms each side). Unbalanced equations violate conservation of mass.",
          },
        ],
        keyFormulas: [
          {
            name: "Reaction signs",
            statement:
              "Colour change, gas, temperature change, precipitate, light.",
          },
          {
            name: "Conservation of mass",
            statement:
              "Reactants mass = products mass; atoms rearranged not created.",
          },
        ],
        workedExample: {
          problem:
            "Write and balance: methane + oxygen → carbon dioxide + water.",
          solution:
            "CH₄ + 2O₂ → CO₂ + 2H₂O — balanced: 1 C, 4 H, 4 O each side.",
        },
      },
      questions: [
        {
          id: "esc7-u2-reactions-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is NOT a sign of a chemical reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Colour change" },
              { id: "b", text: "Temperature change" },
              { id: "c", text: "Gas production" },
              { id: "d", text: "Change of state (melting)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chemical vs physical change",
                statement: "Chemical=new substance; physical=state/shape only.",
              },
            ],
            steps: [
              {
                reasoning: "Melting is physical, not chemical.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Change of state",
            commonErrors: ["All are chemical view."],
          },
        },
        {
          id: "esc7-u2-reactions-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why must chemical equations be balanced?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conservation of mass",
                statement: "Atoms are conserved — same number each side.",
              },
            ],
            steps: [
              {
                reasoning: "Atoms aren't created or destroyed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Same atoms must appear both sides.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Balancing reflects conservation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Balancing ensures atom conservation — same number of each element on both sides.",
            commonErrors: [
              "Equations just look tidy view.",
              "No conservation link.",
            ],
          },
        },
        {
          id: "esc7-u2-reactions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Balance this equation: H₂ + O₂ → H₂O",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Equation balancing",
                statement:
                  "Adjust coefficients until atoms balance on both sides.",
              },
            ],
            steps: [
              {
                reasoning: "Count atoms: 2H, 2O left; 2H, 1O right.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Oxygen unbalanced — need 2 H₂O.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Then H unbalanced — need 2 H₂.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Final: 2H₂ + O₂ → 2H₂O.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "2H₂ + O₂ → 2H₂O",
            commonErrors: ["Changing formulas.", "Not checking atoms."],
          },
        },
        {
          id: "esc7-u2-reactions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Iron nails are placed in copper sulfate solution. The nails turn brown and the blue solution fades.",
          parts: [
            {
              label: "a",
              prompt: "Identify two signs this is a chemical reaction.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write a word equation for the reaction.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain what happens to the iron and copper ions.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Displacement reaction",
                statement:
                  "More reactive metal displaces less reactive from solution.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Colour change (blue fades, brown appears).",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) New substance formed.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) iron + copper sulfate → iron sulfate + copper.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Correct reactants/products.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Iron atoms lose electrons → Fe²⁺ ions.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Copper ions gain electrons → Cu metal.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Iron more reactive → displaces copper.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) colour change + new substance (b) iron+copper sulfate→iron sulfate+copper (c) Fe→Fe²⁺, Cu²⁺→Cu, iron more reactive",
            commonErrors: ["No displacement concept.", "Wrong equation."],
          },
        },
      ],
    },
    {
      id: "esc7-u2-acids",
      title: "Acids, Alkalis and pH",
      skill:
        "Describe the properties of acids and alkalis and use the pH scale.",
      lesson: {
        sections: [
          {
            heading: "Acids and alkalis",
            body: "**Acids**: pH < 7, produce H⁺ ions, taste sour (don't taste chemicals!), react with metals → hydrogen, react with carbonates → CO₂, turn litmus red, have pH 0-6. Examples: HCl, H₂SO₄, citric acid, vinegar.\n\n**Alkalis**: soluble bases, pH > 7, produce OH⁻ ions, feel slippery (don't touch!), turn litmus blue, react with acids → salt + water (neutralisation). Examples: NaOH, KOH, ammonia, soap.",
          },
          {
            heading: "pH scale and neutralisation",
            body: "**pH scale** 0-14: 0-6 acids (strong→weak), 7 neutral, 8-14 alkalis (weak→strong). Each unit is 10× concentration change — pH 3 is 10× more acidic than pH 4.\n\n**Neutralisation**: acid + alkali → salt + water. HCl + NaOH → NaCl + H₂O. Used in: indigestion tablets (neutralise stomach acid), soil treatment (lime for acidic soil), bee stings (vinegar for alkaline sting, baking soda for acidic).",
          },
        ],
        keyFormulas: [
          {
            name: "pH scale",
            statement:
              "0-6 acid, 7 neutral, 8-14 alkali; each step = 10× change.",
          },
          {
            name: "Neutralisation",
            statement: "Acid + alkali → salt + water.",
          },
        ],
        workedExample: {
          problem:
            "A solution has pH 2. Is it acid or alkali? How does it compare to pH 4?",
          solution:
            "Acid (below 7); pH 2 is 10× more acidic than pH 4 (each pH unit = 10× difference).",
        },
      },
      questions: [
        {
          id: "esc7-u2-acids-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What pH range indicates an acid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0-6" },
              { id: "b", text: "8-14" },
              { id: "c", text: "Only 7" },
              { id: "d", text: "10-14" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "pH scale",
                statement: "Below 7 = acid; 7 = neutral; above 7 = alkali.",
              },
            ],
            steps: [
              { reasoning: "Acid = pH below 7.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** 0-6",
            commonErrors: ["Including 7."],
          },
        },
        {
          id: "esc7-u2-acids-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What happens when an acid reacts with a metal?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Acid + metal",
                statement: "Produces salt + hydrogen gas.",
              },
            ],
            steps: [
              { reasoning: "Salt formed.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Hydrogen gas produced.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "General equation: acid + metal → salt + H₂.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Acid + metal → salt + hydrogen gas.",
            commonErrors: ["Wrong products.", "No equation."],
          },
        },
        {
          id: "esc7-u2-acids-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why pH 3 is much more acidic than pH 5.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "pH scale logarithmic",
                statement: "Each pH unit = 10× difference in H⁺ concentration.",
              },
            ],
            steps: [
              {
                reasoning: "pH is logarithmic scale.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Each unit = 10× concentration change.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "pH 3 vs 5 = 2 units = 10² = 100× difference.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "pH 3 has 100× more H⁺ ions than pH 5 — logarithmic scale means each unit is 10× difference.",
            commonErrors: ["Linear scale view.", "Wrong calculation."],
          },
        },
        {
          id: "esc7-u2-acids-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A gardener has soil that is too acidic for vegetables.",
          parts: [
            {
              label: "a",
              prompt: "Suggest a substance to add and explain why.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Describe the chemical reaction occurring.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain how to verify the treatment worked.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Neutralisation application",
                statement:
                  "Acidic soil treated with alkali (lime) → neutralisation raises pH.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Add lime/calcium hydroxide (alkali).",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Neutralises acid in soil.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Raises pH toward neutral.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Acid + alkali → salt + water.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Neutralisation reaction.",
                marks: 1,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(c) Test pH with indicator/universal indicator.",
                marks: 2,
                markCode: "AO4",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) lime/alkali to neutralise (b) acid+alkali→salt+water (c) pH test confirms neutralisation",
            commonErrors: ["Wrong substance.", "No verification."],
          },
        },
      ],
    },
  ],
};
