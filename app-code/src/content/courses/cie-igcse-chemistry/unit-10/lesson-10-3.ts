import type { Lesson } from "../../../types.ts";

export const lesson1103: Lesson = {
  id: "ciecy-u10-lesson-10-3",
  code: "10-3",
  title: "Polymers and Esters",
  goal: "I CAN describe addition and condensation polymerisation and ester formation.",
  standards: ["0654 10.3"],
  vocabulary: [
    { term: "Polymer", definition: "Large molecule made of repeating monomer units." },
    { term: "Monomer", definition: "Small molecule that joins to form polymer." },
    { term: "Addition polymerisation", definition: "Monomers with C=C join without losing atoms (e.g. ethene→polyethene)." },
    { term: "Condensation polymerisation", definition: "Monomers join losing small molecules (H₂O, HCl)." },
    { term: "Polyethene", definition: "(C₂H₄)ₙ — most common plastic." },
    { term: "PVC", definition: "Poly(chloroethene) — pipes, cable insulation." },
    { term: "Ester", definition: "Organic compound from carboxylic acid + alcohol; fruity smell." },
    { term: "Esterification", definition: "Reaction forming ester + water (acid catalyst)." },
  ],
  concepts: [
    {
      id: "ciecy-u10-polymers",
      title: "Polymers",
      skill: "Describe addition and condensation polymerisation with examples.",
      lesson: {
        sections: [
          {
            heading: "Addition polymerisation",
            body: "Alkene monomers with C=C double bonds open up and join — no atoms lost.\n\nEthene → polyethene: n(C₂H₄) → (C₂H₄)ₙ\nChloroethene → PVC: n(CH₂=CHCl) → (CH₂CHCl)ₙ\n\nUses: polyethene bags/films, PVC pipes, polystyrene.",
          },
          {
            heading: "Condensation polymerisation",
            body: "Monomers join **losing small molecules** (usually H₂O).\n\nExample: nylon, Terylene (polyester), proteins.\nTwo different monomers typically required.",
          },
          {
            heading: "Identifying polymers",
            body: "- Addition: monomers have C=C; no by-products\n- Condensation: small molecule (H₂O) eliminated; often two monomers",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How is polyethene made from ethene?",
          solution: "Addition polymerisation: many ethene molecules (CH₂=CH₂) join as C=C opens, forming long chains (CH₂CH₂)ₙ with no atoms lost.",
        },
      },
      questions: [
        {
          id: "ciecy-u10-polymers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a monomer?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A type of plastic" }, { id: "b", text: "Small molecule that forms polymers" }, { id: "c", text: "A catalyst" }, { id: "d", text: "A solvent" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Monomer", statement: "Building block of polymer." }],
            steps: [{ reasoning: "Recall.", working: "\\text{building block}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Small molecule that forms polymers",
            commonErrors: ["Confusing with polymer itself."],
          },
        },
        {
          id: "ciecy-u10-polymers-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is lost during condensation polymerisation?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Condensation", statement: "Small molecule (usually H₂O) eliminated." }],
            steps: [
              { reasoning: "Small molecule lost.", marks: 1, markCode: "M" },
              { reasoning: "Usually water.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A small molecule — usually water (H₂O) — is eliminated as the monomers join.",
            commonErrors: ["Saying 'nothing lost' — that's addition."],
          },
        },
        {
          id: "ciecy-u10-polymers-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the equation for formation of polyethene from ethene.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Polyethene", statement: "n(C₂H₄) → (C₂H₄)ₙ." }],
            steps: [
              { reasoning: "nCH₂=CH₂ → (CH₂CH₂)ₙ.", marks: 1, markCode: "M" },
              { reasoning: "Addition polymerisation.", marks: 1, markCode: "M" },
              { reasoning: "Balanced.", marks: 1, markCode: "M" },
              { reasoning: "State.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "n(C₂H₄) → (C₂H₄)ₙ — addition polymerisation",
            commonErrors: ["Using wrong monomer formula."],
          },
        },
        {
          id: "ciecy-u10-polymers-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare addition and condensation polymerisation.",
          parts: [
            { label: "a", prompt: "Compare monomers.", marks: 3 },
            { label: "b", prompt: "Compare products/by-products.", marks: 3 },
            { label: "c", prompt: "Give one example each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Polymerisation", statement: "Addition: C=C monomers no loss; condensation: lose H₂O." }],
            steps: [
              { part: "a", reasoning: "Addition: alkenes with C=C.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Condensation: bifunctional monomers.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Addition: no by-product.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Condensation: loses H₂O.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Polyethene/PVC addition.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Nylon/Terylene condensation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) C=C vs bifunctional (b) no loss vs H₂O (c) PE/PVC vs nylon",
            commonErrors: ["In (a) saying condensation needs C=C."],
          },
        },
      ],
    },
    {
      id: "ciecy-u10-esters",
      title: "Esters and esterification",
      skill: "Describe ester formation, properties and uses.",
      lesson: {
        sections: [
          {
            heading: "Esterification",
            body: "Carboxylic acid + alcohol → ester + water (acid catalyst, heat).\n\nCH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O\n(ethanoic acid + ethanol → ethyl ethanoate + water)",
          },
          {
            heading: "Naming",
            body: "Ester name = alcohol part + 'yl' + acid part minus 'ic' + 'oate'.\n- CH₃COOC₂H₅ = ethyl ethanoate\n- HCOOCH₃ = methyl methanoate",
          },
          {
            heading: "Properties and uses",
            body: "- Sweet/fruity smell → flavourings, perfumes\n- Low boiling → volatile\n- Used in food flavouring, solvents, medicines",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write the esterification of ethanoic acid and methanol.",
          solution: "CH₃COOH + CH₃OH → CH₃COOCH₃ + H₂O (methyl ethanoate).",
        },
      },
      questions: [
        {
          id: "ciecy-u10-esters-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What reacts with an alcohol to form an ester?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Alkane" }, { id: "b", text: "Carboxylic acid" }, { id: "c", text: "Alkene" }, { id: "d", text: "Ketone" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Esterification", statement: "Acid + alcohol → ester." }],
            steps: [{ reasoning: "Recall.", working: "\\text{carboxylic acid}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Carboxylic acid",
            commonErrors: ["Alkene gives alcohol via hydration, not ester."],
          },
        },
        {
          id: "ciecy-u10-esters-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What by-product forms during esterification?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Esterification", statement: "Water eliminated." }],
            steps: [
              { reasoning: "Water formed.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water (H₂O) is eliminated as the ester forms.",
            commonErrors: ["Saying 'nothing' — it's condensation."],
          },
        },
        {
          id: "ciecy-u10-esters-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Name the ester CH₃COOC₂H₅.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Ester naming", statement: "Alcohol part + acid part." }],
            steps: [
              { reasoning: "C₂H₅ = ethyl.", marks: 1, markCode: "M" },
              { reasoning: "CH₃COO = ethanoate.", marks: 1, markCode: "M" },
              { reasoning: "Combine.", marks: 1, markCode: "A" },
              { reasoning: "Ethyl ethanoate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ethyl ethanoate",
            commonErrors: ["Reversing — it's ethyl (alcohol) ethanoate (acid)."],
          },
        },
        {
          id: "ciecy-u10-esters-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe ester formation and uses.",
          parts: [
            { label: "a", prompt: "Write general equation.", marks: 3 },
            { label: "b", prompt: "Name an example.", marks: 2 },
            { label: "c", prompt: "State two uses.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Esterification", statement: "Acid+alcohol→ester+H₂O." }],
            steps: [
              { part: "a", reasoning: "RCOOH + R'OH → RCOOR' + H₂O.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Acid catalyst.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Any ester named.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct name.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Flavourings/perfumes.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solvents/medicine.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two valid.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) acid+alcohol→ester+H₂O (b) ethyl ethanoate (c) flavours/perfumes",
            commonErrors: ["In (c) uses must be valid."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecy-u10-polymers-esters-notes",
      title: "Polymers and esters — revision notes",
      summary: "Addition vs condensation polymerisation, esterification, naming.",
      sections: [
        {
          heading: "Key facts",
          body: "Addition: C=C monomers, no loss (PE, PVC). Condensation: lose H₂O (nylon, Terylene). Ester = acid+alcohol→ester+H₂O; fruity smell; ethyl ethanoate.",
        },
        {
          heading: "Exam technique",
          body: "- Identify type: C=C?→addition; loses H₂O?→condensation.\n- Ester name: alcohol-yl + acid-oate.\n- Polymers from alkenes = addition.",
        },
      ],
    },
  ],
};
