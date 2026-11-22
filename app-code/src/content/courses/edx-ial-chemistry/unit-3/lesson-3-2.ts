import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "edialchem-u3-lesson-3-2",
  code: "3-2",
  title: "Alcohols, Carboxylic Acids and Esters",
  goal: "I CAN describe properties and reactions of alcohols, carboxylic acids and esters.",
  standards: ["IC3 Organic chemistry I", "Oxygen compounds"],
  vocabulary: [
    { term: "Alcohol", definition: "Organic compound with –OH group (e.g. ethanol)." },
    { term: "Carboxylic acid", definition: "Organic acid with –COOH group (e.g. ethanoic acid)." },
    { term: "Ester", definition: "Compound from carboxylic acid + alcohol (sweet smell)." },
    { term: "Fermentation", definition: "Yeast converting glucose to ethanol + CO₂ without oxygen." },
  ],
  concepts: [
    {
      id: "edialchem-u3-alcohols",
      title: "Alcohols",
      skill: "Describe alcohol structure, properties and reactions.",
      lesson: {
        sections: [
          {
            heading: "Alcohols",
            body: "General formula CₙH₂ₙ₊₁OH. Functional group –OH. Methanol, ethanol, propan-1-ol, propan-2-ol. Polar → soluble in water (H-bonding). Uses: fuels, solvents, antiseptic (ethanol), alcoholic drinks.",
          },
          {
            heading: "Reactions",
            body: "Oxidation: primary alcohol → aldehyde → carboxylic acid (K₂Cr₂O₇/H₂SO₄); secondary → ketone; tertiary → no reaction. Dehydration: conc. H₂SO₄ → alkene + water (elimination). Esterification: alcohol + carboxylic acid → ester + water (conc. H₂SO₄ catalyst).",
          },
          {
            heading: "Fermentation",
            body: "Yeast: glucose → ethanol + CO₂ (anaerobic, ~30°C). Used for bread (CO₂ raises dough) and brewing. Ethanol purified by fractional distillation. Biofuel — renewable carbon source.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (yeast, anaerobic)" },
        ],
        workedExample: {
          problem: "What is produced when ethanol is oxidised?",
          solution: "Ethanol (primary alcohol) → ethanal (aldehyde) → ethanoic acid (carboxylic acid) with excess oxidising agent.",
        },
      },
      questions: [
        {
          id: "edialchem-alc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the functional group of alcohols?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "–COOH" },
              { id: "b", text: "–COO–" },
              { id: "c", text: "–OH" },
              { id: "d", text: "–CHO" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Alcohol", statement: "–OH functional group." }],
            steps: [{ reasoning: "Direct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** –OH",
          },
        },
        {
          id: "edialchem-alc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the products of ethanol oxidation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Alcohol oxidation", statement: "Primary → aldehyde → acid." }],
            steps: [
              { reasoning: "Ethanol → ethanal (aldehyde) with mild oxidant.", marks: 1, markCode: "M" },
              { reasoning: "Further oxidation → ethanoic acid.", marks: 1, markCode: "M" },
              { reasoning: "Distillation can separate aldehyde intermediate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ethanol → ethanal → ethanoic acid",
            commonErrors: ["Saying directly to acid."],
          },
        },
        {
          id: "edialchem-alc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why ethanol is soluble in water.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Solubility", statement: "H-bonding with water." }],
            steps: [
              { reasoning: "Ethanol has –OH group forming hydrogen bonds with water.", marks: 1, markCode: "M" },
              { reasoning: "Hydrophobic ethyl group limits solubility vs methanol.", marks: 1, markCode: "M" },
              { reasoning: "Miscible in all proportions (small molecule).", marks: 1, markCode: "A" },
              { reasoning: "Larger alcohols less soluble (longer non-polar chain).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "H-bonds with water → soluble",
            commonErrors: ["Saying alcohols are non-polar."],
          },
        },
        {
          id: "edialchem-alc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the fermentation process and its industrial uses.",
          parts: [
            { label: "a", prompt: "Equation and conditions.", marks: 3 },
            { label: "b", prompt: "Role of yeast.", marks: 3 },
            { label: "c", prompt: "Industrial applications.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Fermentation", statement: "Yeast: glucose → ethanol + CO₂." }],
            steps: [
              { part: "a", reasoning: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Anaerobic conditions, ~30°C, yeast present.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Enzyme zymase catalyses.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Yeast provides enzymes for anaerobic respiration.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Converts glucose to ethanol without oxygen.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "CO₂ produced → bread rising.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Bread: CO₂ leavens dough.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Brewing: ethanol for beer/wine/spirits.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Biofuel: ethanol as renewable fuel.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Pharmaceuticals/solvents.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yeast fermentation → ethanol + CO₂ for bread/biofuel",
            commonErrors: ["Saying it needs oxygen."],
          },
        },
      ],
    },
    {
      id: "edialchem-u3-acids-esters",
      title: "Carboxylic acids and esters",
      skill: "Describe properties of carboxylic acids, esterification and ester uses.",
      lesson: {
        sections: [
          {
            heading: "Carboxylic acids",
            body: "Functional group –COOH. Weak acids (partially ionise): RCOOH ⇌ RCOO⁻ + H⁺. Methanoic, ethanoic (vinegar), propanoic. React with metals → H₂, with carbonates → CO₂, with bases → salts. Higher acids have unpleasant odours.",
          },
          {
            heading: "Esterification",
            body: "Carboxylic acid + alcohol ⇌ ester + water (conc. H₂SO₄ catalyst, reversible). Ester = –COO– group. Named alcohol + acid: methyl ethanoate (methanol + ethanoic acid), ethyl ethanoate. Esters have sweet/fruity smells.",
          },
          {
            heading: "Uses of esters",
            body: "Flavourings and perfumes (fruity smells), solvents (paint thinners, nail varnish), fats/oils (triglycerides = esters of glycerol + fatty acids). Fats solid vs oils liquid — saturation.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "RCOOH + R'OH ⇌ RCOOR' + H₂O" },
        ],
        workedExample: {
          problem: "Write the esterification equation for ethanoic acid and methanol.",
          solution: "CH₃COOH + CH₃OH ⇌ CH₃COOCH₃ + H₂O (methyl ethanoate).",
        },
      },
      questions: [
        {
          id: "edialchem-ester-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the functional group of carboxylic acids?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "–COO–" },
              { id: "b", text: "–CHO" },
              { id: "c", text: "–OH" },
              { id: "d", text: "–COOH" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Carboxylic acid", statement: "–COOH group." }],
            steps: [{ reasoning: "Direct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** –COOH",
          },
        },
        {
          id: "edialchem-ester-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the equation for esterification of ethanoic acid with ethanol.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Esterification", statement: "Acid + alcohol → ester + water." }],
            steps: [
              { reasoning: "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O.", marks: 1, markCode: "M" },
              { reasoning: "Product: ethyl ethanoate.", marks: 1, markCode: "A" },
              { reasoning: "Conc. H₂SO₄ catalyst, reversible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O",
            commonErrors: ["Missing water or wrong product."],
          },
        },
        {
          id: "edialchem-ester-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why carboxylic acids are weak acids.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Weak acid", statement: "Partial ionisation." }],
            steps: [
              { reasoning: "RCOOH ⇌ RCOO⁻ + H⁺ — equilibrium lies left.", marks: 1, markCode: "M" },
              { reasoning: "Only small fraction ionised at any time.", marks: 1, markCode: "M" },
              { reasoning: "Unlike strong acids (HCl) which fully ionise.", marks: 1, markCode: "A" },
              { reasoning: "Still acidic — pH < 7, reacts with carbonates/metals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Partial ionisation → weak acid",
            commonErrors: ["Saying they're not acidic."],
          },
        },
        {
          id: "edialchem-ester-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe esterification and uses of esters.",
          parts: [
            { label: "a", prompt: "Reaction conditions and equation.", marks: 3 },
            { label: "b", prompt: "Naming esters.", marks: 3 },
            { label: "c", prompt: "Uses.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Esterification", statement: "Acid + alcohol ⇌ ester + water." }],
            steps: [
              { part: "a", reasoning: "Conc. H₂SO₄ catalyst, heat, reversible.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "RCOOH + R'OH ⇌ RCOOR' + H₂O.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Water removed to drive forward.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Alcohol part first: methyl, ethyl, propyl.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Acid part: ethanoate, propanoate.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "E.g. methyl ethanoate = methanol + ethanoic acid.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Flavourings/perfumes — fruity smells.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Solvents — paints, nail varnish.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fats/oils = triglyceride esters.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Plastics (polyesters) e.g. PET.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Esterification → fruity esters for flavours/solvents",
            commonErrors: ["Wrong naming order."],
          },
        },
      ],
    },
  ],
};
