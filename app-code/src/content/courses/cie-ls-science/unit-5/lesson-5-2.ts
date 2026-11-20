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
              { id: "a", text: "Gas given off" },
              { id: "b", text: "Melting" },
              { id: "c", text: "Dissolving" },
              { id: "d", text: "Boiling" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chemical change", statement: "New substance formed — gas, colour change, precipitate." },
            ],
            steps: [
              { reasoning: "Gas evolution indicates new substance; melting/boiling/dissolving are physical.", working: "gas", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Gas given off",
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
              { id: "a", text: "Red" },
              { id: "b", text: "Blue" },
              { id: "c", text: "Green" },
              { id: "d", text: "Yellow" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Litmus", statement: "Red in acid, blue in alkali." },
            ],
            steps: [
              { reasoning: "Litmus = red for acid.", working: "red", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Red",
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
              { id: "a", text: "Copper" },
              { id: "b", text: "Wood" },
              { id: "c", text: "Glass" },
              { id: "d", text: "Ceramic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conductors", statement: "Metals like copper conduct electricity well." },
            ],
            steps: [
              { reasoning: "Copper = excellent conductor.", working: "copper", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Copper",
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
