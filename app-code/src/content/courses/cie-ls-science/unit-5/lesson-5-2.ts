import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "cils-u5-lesson-5-2",
  code: "5-2",
  title: "Reactions and chemical changes",
  goal: "I CAN describe chemical reactions, word equations and indicators of chemical change.",
  standards: ["0893 Chemistry: chemical reactions"],
  vocabulary: [
    { term: "Chemical reaction", definition: "Process where substances change into new substances." },
    { term: "Reactant", definition: "Substance at start of reaction — gets used up." },
    { term: "Product", definition: "New substance formed by reaction." },
    { term: "Word equation", definition: "Names of reactants → products using symbols." },
    { term: "Combustion", definition: "Reaction with oxygen producing heat and light." },
    { term: "Rusting", definition: "Iron + oxygen + water → iron oxide (hydrated)." },
  ],
  concepts: [
    {
      id: "cils-u5-reactions",
      title: "Chemical reactions",
      skill: "Describe reactions, write word equations and identify signs of chemical change.",
      lesson: {
        sections: [
          {
            heading: "Signs of chemical change",
            body: "- New substance formed (colour change, gas given off, precipitate)\n- Temperature change (exothermic/endothermic)\n- Odour change",
          },
          {
            heading: "Word equations",
            body: "Reactants → products\n\nExample: hydrogen + oxygen → water\n\nCombustion: methane + oxygen → carbon dioxide + water",
          },
          {
            heading: "Common reactions",
            body: "- **Combustion**: fuel + O₂ → CO₂ + H₂O (+heat/light)\n- **Rusting**: iron + oxygen + water → hydrated iron oxide\n- **Neutralisation**: acid + alkali → salt + water",
          },
        ],
        keyFormulas: [
          { name: "Word equation", statement: "Reactants → products (e.g. hydrogen + oxygen → water)." },
        ],
        workedExample: {
          problem: "Write the word equation for burning methane.",
          solution: "methane + oxygen → carbon dioxide + water",
        },
      },
      questions: [
        {
          id: "cils-u5-react-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a sign of chemical change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Boiling" },
              { id: "b", text: "Melting" },
              { id: "c", text: "Gas given off" },
              { id: "d", text: "Dissolving" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chemical change", statement: "New substance formed — gas, colour change, precipitate." },
            ],
            steps: [
              { reasoning: "Gas evolution indicates new substance; melting/boiling/dissolving are physical.", working: "gas", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Gas given off",
            commonErrors: ["Choosing (c) — dissolving is physical change."],
          },
        },
        {
          id: "cils-u5-react-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the word equation for hydrogen burning in oxygen.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word equation", statement: "hydrogen + oxygen → water" },
            ],
            steps: [
              { reasoning: "Correct reactants and products.", working: "H₂+O₂→H₂O", marks: 1, markCode: "M" },
              { reasoning: "Arrow and format correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "hydrogen + oxygen → water",
            commonErrors: ["Writing H₂O as reactant — it's the product."],
          },
        },
        {
          id: "cils-u5-react-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain rusting and how to prevent it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rusting", statement: "Iron + oxygen + water → hydrated iron oxide; prevent by excluding air/water." },
            ],
            steps: [
              { reasoning: "Rusting needs iron, oxygen AND water — all three.", working: "three factors", marks: 1, markCode: "M" },
              { reasoning: "Forms hydrated iron oxide — reddish-brown.", working: "oxide", marks: 1, markCode: "M" },
              { reasoning: "Prevention: paint, oil, galvanise, keep dry — exclude O₂ or water.", working: "prevention", marks: 1, markCode: "M" },
              { reasoning: "Explanation complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Iron+O₂+water→rust; prevent by paint/oil/galvanising — exclude air or moisture.",
            commonErrors: ["Saying 'just water causes rust' — needs oxygen too."],
          },
        },
        {
          id: "cils-u5-react-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate a chemical reaction.",
          parts: [
            { label: "a", prompt: "What are reactants and products?", marks: 2 },
            { label: "b", prompt: "Write a word equation for a reaction you know.", marks: 2 },
            { label: "c", prompt: "List three signs of chemical change.", marks: 2 },
            { label: "d", prompt: "Explain why mass is conserved in reactions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reactions", statement: "Reactants→products; signs of change; atoms rearrange but conserved." },
            ],
            steps: [
              { part: "a", reasoning: "Reactants=starting substances; products=new substances formed.", working: "definitions", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Any valid equation e.g. hydrogen+oxygen→water.", working: "equation", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct format.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Gas given off, colour change, temperature change, precipitate, odour.", working: "signs", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Three+ valid.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Atoms rearrange but aren't created/destroyed — same atoms before and after.", working: "conservation", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) reactants→products (b) e.g. H₂+O₂→H₂O (c) gas/colour/temp (d) atoms conserved, just rearranged",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Three+ valid.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Saying 'mass increases' — atoms conserved, mass same."],
          },
        },
        {
          id: "cils-u5-react-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is NOT a sign of a chemical change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formation of a precipitate" },
              { id: "b", text: "Melting" },
              { id: "c", text: "Gas given off" },
              { id: "d", text: "Colour change" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chemical change", statement: "Signs: new substance, gas, colour change, precipitate, temperature change — not melting." },
            ],
            steps: [
              { reasoning: "Melting is a physical change of state; the others indicate chemical change.", working: "melting physical", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Melting",
            commonErrors: ["Choosing (b) — gas evolution is a chemical sign."],
          },
        },
        {
          id: "cils-u5-react-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the word equation 'hydrogen + oxygen → water', the reactants are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen only" },
              { id: "b", text: "Water only" },
              { id: "c", text: "Hydrogen and oxygen" },
              { id: "d", text: "Hydrogen only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Reactants", statement: "Reactants are the starting substances on the left of the arrow." },
            ],
            steps: [
              { reasoning: "Hydrogen and oxygen are the starting substances.", working: "H₂ + O₂", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Hydrogen and oxygen",
            commonErrors: ["Choosing (b) — water is the product, not a reactant."],
          },
        },
        {
          id: "cils-u5-react-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which substance is always needed for combustion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Nitrogen" },
              { id: "d", text: "Carbon dioxide" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Combustion", statement: "A reaction with oxygen producing heat and light." },
            ],
            steps: [
              { reasoning: "Combustion requires oxygen as a reactant.", working: "O₂", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Oxygen",
            commonErrors: ["Choosing (c) — CO₂ is a product of combustion, not a reactant."],
          },
        },
        {
          id: "cils-u5-react-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write the word equation for magnesium burning in oxygen.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "magnesium + water → magnesium oxide" },
              { id: "b", text: "magnesium oxide → magnesium + oxygen" },
              { id: "c", text: "magnesium + oxygen → magnesium oxide" },
              { id: "d", text: "magnesium + oxygen → magnesium hydroxide" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word equation", statement: "Metal + oxygen → metal oxide." },
            ],
            steps: [
              { reasoning: "Burning magnesium gives magnesium oxide.", working: "MgO", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** magnesium + oxygen → magnesium oxide",
            commonErrors: ["Choosing (c) — that is the reverse (decomposition) equation."],
          },
        },
        {
          id: "cils-u5-react-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which change is an example of a chemical reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dissolving sugar in water" },
              { id: "b", text: "Breaking glass" },
              { id: "c", text: "Burning a candle" },
              { id: "d", text: "Melting ice" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chemical reaction", statement: "New substances form — e.g. combustion produces CO₂ and water." },
            ],
            steps: [
              { reasoning: "Burning forms new substances; the others are physical changes.", working: "combustion", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Burning a candle",
            commonErrors: ["Choosing (c) — dissolving is a physical change."],
          },
        },
        {
          id: "cils-u5-react-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Rusting is a chemical change because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The iron changes state" },
              { id: "b", text: "A new substance, hydrated iron oxide, is formed" },
              { id: "c", text: "No new substance is formed" },
              { id: "d", text: "Iron simply gets wet" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rusting", statement: "Iron + oxygen + water → hydrated iron oxide — a new substance." },
            ],
            steps: [
              { reasoning: "Iron oxide is a new substance — chemical change.", working: "Fe₂O₃·xH₂O", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** New substance (iron oxide) formed",
            commonErrors: ["Choosing (d) — a new substance IS formed, so it is chemical."],
          },
        },
        {
          id: "cils-u5-react-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "During a chemical reaction, the total mass of the products compared with the reactants is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Impossible to measure" },
              { id: "b", text: "Always greater" },
              { id: "c", text: "The same — mass is conserved" },
              { id: "d", text: "Always less" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Atoms are rearranged, not created or destroyed — mass stays the same." },
            ],
            steps: [
              { reasoning: "Atoms conserved means total mass conserved.", working: "conserved", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The same — mass is conserved",
            commonErrors: ["Choosing (b) — ignoring gases escaping in open containers."],
          },
        },
        {
          id: "cils-u5-react-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In the word equation 'methane + oxygen → carbon dioxide + water', how many products are there? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Products", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word equation", statement: "Products appear after the arrow." },
            ],
            steps: [
              { reasoning: "Products are carbon dioxide and water — two substances.", working: "CO₂ + H₂O", marks: 1, markCode: "M" },
              { reasoning: "Count = 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cils-u5-react-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A chemical reaction uses 10 g of reactants. What mass of products should form? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Mass of products", answer: 10, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Mass of products = mass of reactants (in a closed system)." },
            ],
            steps: [
              { reasoning: "Mass is conserved in reactions.", working: "same mass", marks: 1, markCode: "M" },
              { reasoning: "Products = $10\\ \\text{g}$.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10\\ \\text{g}$",
          },
        },
        {
          id: "cils-u5-react-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rusting needs iron, oxygen and water. How many reactants are involved in rusting? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Reactants", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rusting conditions", statement: "Iron + oxygen + water are all required for rusting." },
            ],
            steps: [
              { reasoning: "Count the substances needed: iron, oxygen, water.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Three reactants.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cils-u5-react-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In the equation 'hydrogen + oxygen → water', how many different substances appear in total? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Substances", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word equation", statement: "Two reactants + one product = three substances." },
            ],
            steps: [
              { reasoning: "Hydrogen, oxygen (reactants) + water (product).", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Total = 3 substances.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cils-u5-react-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how you could test whether a change is chemical or physical, giving two tests and what each result means.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Testing for chemical change", statement: "Look for new substance: gas, precipitate, colour change, temperature change." },
            ],
            steps: [
              { reasoning: "Check for gas given off or precipitate forming — indicates new substance.", working: "gas/precipitate", marks: 1, markCode: "M" },
              { reasoning: "Check for colour change or temperature change — also indicates chemical change.", working: "colour/temp", marks: 1, markCode: "M" },
              { reasoning: "If only state/shape changed and substance can be recovered, it is physical.", working: "physical test", marks: 1, markCode: "M" },
              { reasoning: "Two valid tests described with interpretation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Look for gas/precipitate/colour/temp change → chemical; reversible state/shape change → physical.",
            commonErrors: ["Using 'it looks different' alone — need evidence of new substance."],
          },
        },
      ],
    },
    {
      id: "cils-u5-acids-bases",
      title: "Acids, alkalis and neutralisation",
      skill: "Describe acids and alkalis, indicators and the neutralisation reaction.",
      lesson: {
        sections: [
          {
            heading: "Acids and alkalis",
            body: "Acids: pH < 7, sour taste, turn litmus red. Alkalis: pH > 7, bitter, soapy feel, turn litmus blue. Neutral: pH 7.",
          },
          {
            heading: "Indicators",
            body: "Litmus: red in acid, blue in alkali. Universal indicator: full pH colour scale. pH paper for quick tests.",
          },
          {
            heading: "Neutralisation",
            body: "Acid + alkali → salt + water. H⁺ + OH⁻ → H₂O. Used to treat acid reflux (antacids), soil treatment (lime).",
          },
        ],
        keyFormulas: [
          { name: "Neutralisation", statement: "Acid + alkali → salt + water (H⁺ + OH⁻ → H₂O)." },
        ],
        workedExample: {
          problem: "What happens when hydrochloric acid reacts with sodium hydroxide?",
          solution: "Hydrochloric acid + sodium hydroxide → sodium chloride + water (neutralisation).",
        },
      },
      questions: [
        {
          id: "cils-u5-acid-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What colour does litmus turn in acid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Green" },
              { id: "b", text: "Yellow" },
              { id: "c", text: "Blue" },
              { id: "d", text: "Red" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Litmus", statement: "Red in acid, blue in alkali." },
            ],
            steps: [
              { reasoning: "Litmus = red for acid.", working: "red", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Red",
            commonErrors: ["Choosing (b) — blue is for alkali."],
          },
        },
        {
          id: "cils-u5-acid-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the pH of a neutral solution?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "pH scale", statement: "Acid <7, neutral =7, alkali >7." },
            ],
            steps: [
              { reasoning: "Neutral pH = 7.", working: "7", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "pH 7",
            commonErrors: ["Saying 0 or 14 — those are extremes."],
          },
        },
        {
          id: "cils-u5-acid-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the word equation for neutralisation of hydrochloric acid by sodium hydroxide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Neutralisation", statement: "Acid + alkali → salt + water." },
            ],
            steps: [
              { reasoning: "hydrochloric acid + sodium hydroxide → sodium chloride + water.", working: "equation", marks: 1, markCode: "M" },
              { reasoning: "Salt = sodium chloride (correct pairing).", marks: 1, markCode: "M" },
              { reasoning: "Water produced.", marks: 1, markCode: "M" },
              { reasoning: "Correct equation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "hydrochloric acid + sodium hydroxide → sodium chloride + water",
            commonErrors: ["Wrong salt name — acid+alkali gives salt named after both."],
          },
        },
        {
          id: "cils-u5-acid-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate acids and alkalis.",
          parts: [
            { label: "a", prompt: "Define acid and alkali.", marks: 2 },
            { label: "b", prompt: "Describe how indicators work.", marks: 2 },
            { label: "c", prompt: "Write a neutralisation equation.", marks: 2 },
            { label: "d", prompt: "Give two everyday uses of neutralisation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Acids/bases", statement: "pH scale; indicators; neutralisation → salt+water; applications." },
            ],
            steps: [
              { part: "a", reasoning: "Acid pH<7 sour; alkali pH>7 bitter/soapy.", working: "definitions", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Indicators change colour depending on pH — litmus red/blue.", working: "indicators", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any valid: acid+alkali→salt+water.", working: "equation", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Antacids for indigestion; lime for acidic soil; toothpaste neutralises acid.", working: "uses", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Two+ valid.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) acid<7, alkali>7 (b) colour change by pH (c) acid+alkali→salt+water (d) antacids/soil lime",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Two+ uses.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One.", part: "d" },
            ],
            commonErrors: ["Neutralisation = salt+water, not just 'mixing'."],
          },
        },
        {
          id: "cils-u5-acid-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pH value indicates an acidic solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "14" },
              { id: "b", text: "10" },
              { id: "c", text: "3" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "pH scale", statement: "Acids have pH < 7; alkalis pH > 7; neutral = 7." },
            ],
            steps: [
              { reasoning: "pH 3 is below 7 — acidic.", working: "pH 3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 3",
            commonErrors: ["Choosing (b) — pH 7 is neutral."],
          },
        },
        {
          id: "cils-u5-acid-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What colour does universal indicator show in a strongly acidic solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Blue" },
              { id: "b", text: "Red" },
              { id: "c", text: "Purple" },
              { id: "d", text: "Green" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Universal indicator", statement: "Red = strong acid; green = neutral; blue/purple = alkali." },
            ],
            steps: [
              { reasoning: "Strong acid gives red with universal indicator.", working: "red", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Red",
            commonErrors: ["Choosing (c) — green is neutral."],
          },
        },
        {
          id: "cils-u5-acid-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an alkali?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vinegar" },
              { id: "b", text: "Lemon juice" },
              { id: "c", text: "Sodium hydroxide" },
              { id: "d", text: "Hydrochloric acid" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alkali", statement: "A soluble base — pH > 7, e.g. sodium hydroxide." },
            ],
            steps: [
              { reasoning: "NaOH is an alkali; the others are acids.", working: "NaOH", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Sodium hydroxide",
            commonErrors: ["Choosing (c) — vinegar is ethanoic acid."],
          },
        },
        {
          id: "cils-u5-acid-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A solution with pH 7 is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A salt" },
              { id: "b", text: "Neutral" },
              { id: "c", text: "Alkaline" },
              { id: "d", text: "Acidic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "pH scale", statement: "pH 7 = neutral (e.g. pure water)." },
            ],
            steps: [
              { reasoning: "pH 7 is the neutral point of the scale.", working: "neutral", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Neutral",
            commonErrors: ["Choosing (d) — a salt is a product, not a pH description."],
          },
        },
        {
          id: "cils-u5-acid-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Neutralisation of an acid by an alkali produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An acid and a base" },
              { id: "b", text: "A salt and hydrogen" },
              { id: "c", text: "A salt and water" },
              { id: "d", text: "Water only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Neutralisation", statement: "Acid + alkali → salt + water." },
            ],
            steps: [
              { reasoning: "The products are always a salt and water.", working: "salt + water", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A salt and water",
            commonErrors: ["Choosing (b) — metals + acid gives hydrogen; acid + alkali gives water."],
          },
        },
        {
          id: "cils-u5-acid-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do antacid tablets relieve indigestion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are alkalis that neutralise excess stomach acid" },
              { id: "b", text: "They make the stomach produce water" },
              { id: "c", text: "They add more acid to the stomach" },
              { id: "d", text: "They kill all bacteria in the stomach" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Antacids", statement: "Indigestion = excess acid; antacids neutralise it → salt + water." },
            ],
            steps: [
              { reasoning: "Antacids are mild alkalis that neutralise stomach acid.", working: "neutralise", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Alkalis neutralise stomach acid",
            commonErrors: ["Choosing (b) — adding acid would make it worse."],
          },
        },
        {
          id: "cils-u5-acid-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A farmer adds lime to acidic soil mainly to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kill all the plants" },
              { id: "b", text: "Make the soil more acidic" },
              { id: "c", text: "Turn the soil into a salt" },
              { id: "d", text: "Neutralise the acid and raise the pH" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Soil treatment", statement: "Lime (calcium hydroxide) neutralises acidic soil → salt + water." },
            ],
            steps: [
              { reasoning: "Lime is an alkali — neutralises acid in soil.", working: "neutralise", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Neutralise acid, raise pH",
            commonErrors: ["Choosing (b) — lime reduces acidity, does not increase it."],
          },
        },
        {
          id: "cils-u5-acid-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the pH of a neutral solution? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "pH", answer: 7 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "pH scale", statement: "Neutral = pH 7." },
            ],
            steps: [
              { reasoning: "Neutral point on pH scale.", working: "7", marks: 1, markCode: "M" },
              { reasoning: "pH = 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
          },
        },
        {
          id: "cils-u5-acid-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "The pH scale runs from 0 to 14. How many whole-number pH values are there? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Values", answer: 15 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "pH scale", statement: "pH runs from 0 (strong acid) to 14 (strong alkali)." },
            ],
            steps: [
              { reasoning: "Count integers 0 through 14 inclusive.", working: "14 - 0 + 1", marks: 1, markCode: "M" },
              { reasoning: "$14 - 0 + 1 = 15$ values.", working: "15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$",
          },
        },
        {
          id: "cils-u5-acid-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "In 'hydrochloric acid + sodium hydroxide → sodium chloride + water', how many products are formed? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Products", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Neutralisation", statement: "Acid + alkali → salt + water — two products." },
            ],
            steps: [
              { reasoning: "Products: sodium chloride and water.", working: "salt + water", marks: 1, markCode: "M" },
              { reasoning: "Two products.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cils-u5-acid-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solution A has pH 2 and solution B has pH 5. What is the difference in pH? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "pH difference", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "pH scale", statement: "pH is a logarithmic scale — differences matter, not ratios." },
            ],
            steps: [
              { reasoning: "Subtract the pH values.", working: "5 - 2", marks: 1, markCode: "M" },
              { reasoning: "$5 - 2 = 3$.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cils-u5-acid-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe a procedure to identify whether an unknown clear liquid is acidic, alkaline or neutral using only indicators.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Testing pH", statement: "Use litmus or universal indicator; compare colour to the scale." },
            ],
            steps: [
              { reasoning: "Add a few drops of universal indicator (or litmus paper) to the liquid.", working: "indicator", marks: 1, markCode: "M" },
              { reasoning: "Compare the colour to the pH colour chart — red/orange = acid, green = neutral, blue/purple = alkali.", working: "colour match", marks: 1, markCode: "M" },
              { reasoning: "Read off approximate pH and state acid/alkali/neutral accordingly.", working: "pH read", marks: 1, markCode: "M" },
              { reasoning: "Procedure is safe, clear and correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add indicator → match colour to chart → read pH → classify as acid/alkali/neutral.",
            commonErrors: ["Using litmus alone cannot give exact pH — universal indicator is better."],
          },
        },
      ],
    },
    {
      id: "cils-u5-materials",
      title: "Materials and their properties",
      skill: "Describe how material properties determine their uses.",
      lesson: {
        sections: [
          {
            heading: "Material properties",
            body: "Metals: shiny, malleable, good conductors. Plastics: light, insulating, mouldable. Ceramics: hard, brittle, heat resistant. Wood: natural, renewable, insulating.",
          },
          {
            heading: "Matching properties to uses",
            body: "Copper wires: good conductor. Glass windows: transparent. Rubber tyres: flexible + grip. Steel bridges: strong + hard.",
          },
          {
            heading: "Everyday materials",
            body: "Cooking pots: metal (conductor). Handles: plastic/wood (insulator). Window glass: transparent. Bin bags: flexible plastic.",
          },
        ],
        keyFormulas: [
          { name: "Materials", statement: "Property determines use — conductivity, transparency, strength, flexibility." },
        ],
        workedExample: {
          problem: "Why are electrical wires made of copper?",
          solution: "Copper is an excellent electrical conductor — allows current to flow with minimal resistance.",
        },
      },
      questions: [
        {
          id: "cils-u5-mat-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is best for electrical wiring?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glass" },
              { id: "b", text: "Wood" },
              { id: "c", text: "Ceramic" },
              { id: "d", text: "Copper" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conductors", statement: "Metals like copper conduct electricity well." },
            ],
            steps: [
              { reasoning: "Copper = excellent conductor.", working: "copper", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Copper",
            commonErrors: ["Choosing (b) — wood is insulator."],
          },
        },
        {
          id: "cils-u5-mat-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two properties of metals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Metal properties", statement: "Shiny, malleable, ductile, good conductors, strong." },
            ],
            steps: [
              { reasoning: "Any two: shiny, malleable, ductile, conductive, strong.", working: "properties", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shiny, malleable, ductile, good conductors, strong (any two)",
            commonErrors: ["Saying 'soft' — metals are generally strong/hard."],
          },
        },
        {
          id: "cils-u5-mat-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why window glass is used for windows.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Material selection", statement: "Glass: transparent, hard, weather-resistant — perfect for windows." },
            ],
            steps: [
              { reasoning: "Transparent — lets light through.", working: "transparent", marks: 1, markCode: "M" },
              { reasoning: "Hard + weather-resistant — durable, doesn't corrode.", working: "durable", marks: 1, markCode: "M" },
              { reasoning: "Property-use match explained.", marks: 1, markCode: "M" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Glass is transparent (light passes), hard and weatherproof — ideal for windows.",
            commonErrors: ["Saying 'because it's cheap' — focus on properties."],
          },
        },
        {
          id: "cils-u5-mat-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Match materials to uses based on properties.",
          parts: [
            { label: "a", prompt: "Why copper for electrical wires?", marks: 2 },
            { label: "b", prompt: "Why rubber for tyres?", marks: 2 },
            { label: "c", prompt: "Why steel for bridges?", marks: 2 },
            { label: "d", prompt: "Why wood for furniture?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Material selection", statement: "Each material chosen for specific properties matching the use." },
            ],
            steps: [
              { part: "a", reasoning: "Copper: excellent electrical conductor.", working: "conductor", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rubber: flexible, waterproof, good grip.", working: "flexible+grip", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Steel: strong, hard, durable — bears heavy loads.", working: "strong", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Wood: strong enough, warm to touch, renewable, easy to work.", working: "properties", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiple properties.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) conductor (b) flexible/grip (c) strong/durable (d) strong/warm/renewable",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple properties.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Generic 'it's good' — need specific property."],
          },
        },
        {
          id: "cils-u5-mat-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is chosen for cooking pot bases because it conducts heat well?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wood" },
              { id: "b", text: "Ceramic" },
              { id: "c", text: "Rubber" },
              { id: "d", text: "Copper or aluminium" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Thermal conductivity", statement: "Metals conduct heat well — ideal for cookware bases." },
            ],
            steps: [
              { reasoning: "Copper/aluminium are metals — good heat conductors.", working: "metal", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Copper or aluminium",
            commonErrors: ["Choosing (c) — ceramics conduct heat poorly."],
          },
        },
        {
          id: "cils-u5-mat-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why are electrical plug cases made of plastic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plastic is transparent" },
              { id: "b", text: "Plastic is magnetic" },
              { id: "c", text: "Plastic is an electrical insulator — it does not conduct electricity" },
              { id: "d", text: "Plastic is a good conductor of electricity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Electrical insulation", statement: "Plastics insulate — they stop current reaching the user." },
            ],
            steps: [
              { reasoning: "Plug cases must insulate — plastic is a good insulator.", working: "insulator", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Plastic insulates — safe to touch",
            commonErrors: ["Choosing (b) — that would be dangerous."],
          },
        },
        {
          id: "cils-u5-mat-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which material is used for windows because it is transparent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wood" },
              { id: "b", text: "Glass" },
              { id: "c", text: "Steel" },
              { id: "d", text: "Concrete" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Transparency", statement: "Glass lets light through — essential for windows." },
            ],
            steps: [
              { reasoning: "Only glass is transparent among the choices.", working: "glass", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Glass",
            commonErrors: ["Choosing (b) — wood is opaque."],
          },
        },
        {
          id: "cils-u5-mat-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pan handles are often made of wood or plastic rather than metal because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metal cannot be shaped into handles" },
              { id: "b", text: "Wood and plastic are better conductors than metal" },
              { id: "c", text: "Wood and plastic are magnetic" },
              { id: "d", text: "Wood and plastic are poor heat conductors — they stay cool" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Material selection", statement: "Handles need insulation — poor conductors stay cool while pan is hot." },
            ],
            steps: [
              { reasoning: "Insulators prevent heat reaching the hand.", working: "insulator", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Poor conductors — stay cool",
            commonErrors: ["Choosing (b) — opposite of the truth."],
          },
        },
        {
          id: "cils-u5-mat-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is steel (an alloy of iron) preferred over pure iron for bridges?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Steel conducts electricity better" },
              { id: "b", text: "Steel is softer and cheaper to bend" },
              { id: "c", text: "Pure iron is too strong to use" },
              { id: "d", text: "Steel is stronger and more resistant to rusting" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Alloys", statement: "Steel = iron + carbon — stronger and less rust-prone than pure iron." },
            ],
            steps: [
              { reasoning: "Alloying improves strength and corrosion resistance.", working: "steel", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Stronger and more rust-resistant",
            commonErrors: ["Choosing (d) — conductivity is irrelevant for bridges."],
          },
        },
        {
          id: "cils-u5-mat-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A material used for garden furniture should ideally be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weather-resistant, strong and not prone to rot" },
              { id: "b", text: "A good electrical conductor" },
              { id: "c", text: "Transparent and soft" },
              { id: "d", text: "Brittle and easily broken" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Material selection", statement: "Outdoor furniture needs durability and weather resistance." },
            ],
            steps: [
              { reasoning: "Outdoor use requires strength, weather resistance, no rot.", working: "durable", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Weather-resistant and strong",
            commonErrors: ["Choosing (d) — brittle materials fail outdoors."],
          },
        },
        {
          id: "cils-u5-mat-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is rubber used for tyres rather than a rigid plastic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rubber is transparent" },
              { id: "b", text: "Rubber is flexible, absorbs shocks and grips the road" },
              { id: "c", text: "Rubber is rigid and unbending" },
              { id: "d", text: "Rubber conducts heat better than plastic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Elasticity and grip", statement: "Rubber flexes over bumps and grips surfaces — ideal for tyres." },
            ],
            steps: [
              { reasoning: "Flexibility + grip + shock absorption suit tyres.", working: "rubber", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Flexible, grippy, shock-absorbing",
            commonErrors: ["Choosing (b) — rigid tyres would not work."],
          },
        },
        {
          id: "cils-u5-mat-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Of these materials — copper, wood, aluminium, glass — how many are good conductors of electricity? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Conductors", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Conductors", statement: "Metals conduct; wood and glass insulate." },
            ],
            steps: [
              { reasoning: "Copper and aluminium are metals — conductors; wood and glass insulate.", working: "Cu, Al", marks: 1, markCode: "M" },
              { reasoning: "Two conductors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cils-u5-mat-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A material must be strong, hard-wearing and resistant to chemicals. Which of the four classes — metal, plastic, ceramic, wood — is most suitable? Enter the class number: 1 = metal, 2 = plastic, 3 = ceramic, 4 = wood.",
          response: {
            type: "numeric",
            parts: [{ label: "Class", answer: 1 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Material selection", statement: "Metals are strong, hard-wearing and chemically resistant." },
            ],
            steps: [
              { reasoning: "Metals best match strong + hard-wearing + chemical resistance.", working: "metal", marks: 1, markCode: "M" },
              { reasoning: "Class 1 = metal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$ (metal)",
          },
        },
        {
          id: "cils-u5-mat-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many of these properties are typical of metals: shiny, malleable, ductile, good conductor, brittle? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Properties", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Metal properties", statement: "Metals are shiny, malleable, ductile, conductive — not brittle." },
            ],
            steps: [
              { reasoning: "Count the valid metal properties: shiny, malleable, ductile, conductive.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Brittle is wrong — metals are not brittle. Total = 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "cils-u5-mat-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A scientist tests four materials for electrical conductivity. Two are metals and two are plastics. How many are expected to conduct electricity? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Conductors", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Conductors vs insulators", statement: "Metals conduct; plastics insulate." },
            ],
            steps: [
              { reasoning: "Only the two metals should conduct.", working: "2 metals", marks: 1, markCode: "M" },
              { reasoning: "Plastics are insulators — answer = 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cils-u5-mat-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the properties of a material determine its use, using two different everyday objects as examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Property-use matching", statement: "Each object uses a material whose properties suit the job." },
            ],
            steps: [
              { reasoning: "Example 1: e.g. copper wiring — chosen because copper is an excellent electrical conductor.", working: "example 1", marks: 1, markCode: "M" },
              { reasoning: "Example 2: e.g. rubber tyres — chosen for flexibility, grip and waterproofing.", working: "example 2", marks: 1, markCode: "M" },
              { reasoning: "States the general principle: property determines suitability for use.", working: "principle", marks: 1, markCode: "M" },
              { reasoning: "Two valid examples with correct property links.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Copper wires (conductor) and rubber tyres (flexible/grip) — properties match the use.",
            commonErrors: ["Naming objects without linking a specific property."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u5-reactions-notes",
      title: "Reactions, acids and materials — revision notes",
      summary: "Chemical changes, word equations, pH, neutralisation, material properties.",
      sections: [
        {
          heading: "Chemistry basics",
          body: "Signs of chemical change: gas, colour, precipitate, temp change. Word equations: reactants→products. Acids<7, alkalis>7; neutralisation→salt+water.",
        },
        {
          heading: "Materials",
          body: "Metals: conductive, malleable, strong. Ceramics: hard, brittle. Plastics: insulating, flexible. Match properties to uses.",
        },
      ],
    },
  ],
};
