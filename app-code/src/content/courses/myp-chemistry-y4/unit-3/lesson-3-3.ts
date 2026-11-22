import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mypc4-u3-lesson-3-3",
  code: "3-3",
  title: "Polymers, Materials and Sustainability",
  goal: "I CAN describe polymers and their properties, compare materials, and discuss sustainability of chemical use.",
  standards: [
    "MYP Sciences: Matter",
    "Key concept: Systems",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Polymer", definition: "Large molecule made of repeating monomer units joined by covalent bonds." },
    { term: "Monomer", definition: "Small molecule that polymerises to form a polymer." },
    { term: "Addition polymerisation", definition: "Monomers with C=C bonds join without byproduct; e.g. ethene → polyethene." },
    { term: "Thermoplastic", definition: "Polymer that softens when heated and hardens when cooled — can be reshaped." },
    { term: "Thermosetting", definition: "Polymer with cross-links that doesn't soften when heated — permanent shape." },
    { term: "Biodegradable", definition: "Material broken down by microorganisms; e.g. starch-based plastics." },
  ],
  concepts: [
    {
      id: "mypc4-u3-polymers",
      title: "Polymers and materials",
      skill: "Describe polymer formation, types of plastics, and material properties.",
      lesson: {
        sections: [
          {
            heading: "Polymer formation",
            body: "**Addition polymerisation**: monomers with C=C double bonds open and join — no byproduct. Ethene (CH₂=CH₂) → polyethene (—CH₂—CH₂—)n. Propene → polypropene. PVC from chloroethene. The repeating unit determines properties.",
          },
          {
            heading: "Types of plastics",
            body: "**Thermoplastics** (polyethene, PVC, polystyrene): soften when heated → recyclable, reshaped. **Thermosets** (bakelite, melamine): cross-linked → don't soften → heat resistant, permanent. **Rubber**: elastomer, stretches and returns.",
          },
          {
            heading: "Material properties",
            body: "Polymers: light, strong, waterproof, flexible, cheap, insulating — but many non-biodegradable → pollution. Compare with metals (strong, conduct, heavy), ceramics (hard, brittle, heat resistant), glass (transparent, brittle).",
          },
        ],
        keyFormulas: [
          { name: "Polymerisation", statement: "Monomer C=C → polymer chain" },
          { name: "Thermoplastic", statement: "Softens when heated; recyclable" },
          { name: "Thermoset", statement: "Cross-linked; heat resistant; permanent" },
        ],
        workedExample: {
          problem: "Why is polyethene used for plastic bags?",
          solution: "Lightweight, flexible, waterproof, cheap — but non-biodegradable → environmental problem.",
        },
      },
      questions: [
        {
          id: "mypc4-u3-poly-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a monomer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A catalyst" },
              { id: "b", text: "A metal atom" },
              { id: "c", text: "A type of plastic" },
              { id: "d", text: "Small molecule that joins to form a polymer" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Monomer", statement: "Repeating unit building block of polymer." },
            ],
            steps: [
              { reasoning: "Monomers link together → polymer.", working: "\\text{monomer}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Polymer building block",
            commonErrors: ["Confusing with polymer."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u3-poly-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between thermoplastic and thermosetting plastic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thermoplastic softens when heated (recyclable); thermoset has cross-links and stays rigid" },
              { id: "b", text: "Thermoplastic can't be molded" },
              { id: "c", text: "Thermoset is always softer" },
              { id: "d", text: "They are the same" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Plastic types", statement: "Thermoplastic = reversible softening; thermoset = permanent cross-links." },
            ],
            steps: [
              { reasoning: "Thermoplastic: linear chains → softens on heating.", working: "\\text{thermoplastic}", marks: 1, markCode: "M" },
              { reasoning: "Thermoset: cross-linked network → doesn't soften.", working: "\\text{thermoset}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thermoplastic softens; thermoset permanent",
            commonErrors: ["Thinking all plastics behave the same."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-poly-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how ethene polymerises to form polyethene.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrogen is removed" },
              { id: "b", text: "Ethene molecules evaporate" },
              { id: "c", text: "Ethene breaks into atoms" },
              { id: "d", text: "C=C double bonds open and monomers join end-to-end forming long chains, no byproduct" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Addition polymerisation", statement: "C=C bonds open → chains form, no byproduct." },
            ],
            steps: [
              { reasoning: "Heat/catalyst breaks C=C π bond.", working: "C=C", marks: 1, markCode: "M" },
              { reasoning: "Monomers join via new C-C single bonds → long chain.", working: "\\text{chain}", marks: 1, markCode: "M" },
              { reasoning: "State mechanism.", working: "\\text{polymerisation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "C=C opens → monomers join → chain",
            commonErrors: ["Saying byproduct is released."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-poly-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare the properties and uses of three materials: polyethene, steel, and glass.",
          parts: [
            { label: "a", prompt: "State two properties of each.", marks: 3 },
            { label: "b", prompt: "Give one use for each.", marks: 3 },
            { label: "c", prompt: "Explain why polyethene is problematic environmentally.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Materials", statement: "Properties determine uses; polymers have environmental issues." },
            ],
            steps: [
              { part: "a", reasoning: "Polyethene: light, flexible; steel: strong, conducts; glass: transparent, brittle.", working: "\\text{properties}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three described.", working: "\\text{3 materials}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two properties each.", working: "\\text{2 each}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Polyethene: bags/packaging; steel: construction; glass: windows/bottles.", working: "\\text{uses}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All correct.", working: "\\text{correct}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", working: "\\text{all}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Non-biodegradable → persists in environment, harms wildlife.", working: "\\text{non-biodegradable}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explain impact.", working: "\\text{pollution}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) PE light/flexible, steel strong/conducts, glass transparent/brittle (b) bags, construction, windows (c) non-biodegradable pollution",
            commonErrors: ["In (b), giving same use for all."],
            examinerNote: "M1 M1 A1 for (a), M1 M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypc4-u3-poly-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A polymer is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A metal alloy" },
              { id: "b", text: "A large molecule made of repeating monomer units" },
              { id: "c", text: "A single small molecule" },
              { id: "d", text: "A type of element" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Polymer", statement: "Long chain of repeating monomer units." },
            ],
            steps: [
              { reasoning: "Polymer = repeating units joined covalently.", working: "\\text{polymer}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Repeating monomer units",
            commonErrors: ["Confusing polymer with monomer."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u3-poly-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Poly(vinyl chloride) — PVC — is made from which monomer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethane" },
              { id: "b", text: "Chloroethene" },
              { id: "c", text: "Ethene" },
              { id: "d", text: "Propene" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "PVC", statement: "PVC = polymer of chloroethene." },
            ],
            steps: [
              { reasoning: "PVC monomer = chloroethene (vinyl chloride).", working: "\\text{chloroethene}", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "\\text{PVC}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chloroethene",
            commonErrors: ["Choosing ethene — that's polyethene."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-poly-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many carbon atoms are in one ethene molecule (the monomer of polyethene)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ethene", statement: "C₂H₄ = 2 carbons." },
            ],
            steps: [
              { reasoning: "Ethene C₂H₄ → 2 carbons.", working: "C_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 4 (H count)."],
            examinerNote: "B1 for 2.",
          },
        },
        {
          id: "mypc4-u3-poly-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The repeating unit of polyethene is —CH₂—CH₂—. How many carbon and hydrogen atoms does each repeat unit contain?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Repeat unit", statement: "—CH₂—CH₂— = 2C + 4H." },
            ],
            steps: [
              { reasoning: "2 CH₂ groups → 2 C and 4 H.", working: "2C,4H", marks: 1, markCode: "M" },
              { reasoning: "State answers.", working: "2,4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 carbon, 4 hydrogen",
            commonErrors: ["Counting only one CH₂."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-poly-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of these is a thermoplastic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Polyethene" },
              { id: "b", text: "All of them" },
              { id: "c", text: "Bakelite" },
              { id: "d", text: "Melamine" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thermoplastic", statement: "Softens when heated; e.g. polyethene, PVC." },
            ],
            steps: [
              { reasoning: "Polyethene is a thermoplastic.", working: "\\text{PE}", marks: 1, markCode: "M" },
              { reasoning: "Bakelite/melamine are thermosets.", working: "\\text{thermoset}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Polyethene",
            commonErrors: ["Choosing bakelite — that's thermoset."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-poly-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A polyethene chain has repeat unit —CH₂—CH₂— and contains n = 1000 repeat units. How many carbon atoms are in the chain?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2000 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Polymer size", statement: "Each repeat unit has 2 C → total = 2n." },
            ],
            steps: [
              { reasoning: "2 C per unit × 1000 = 2000 C atoms.", working: "2\\times1000", marks: 1, markCode: "M" },
              { reasoning: "Apply correctly.", working: "\\text{2n}", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "2000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2000",
            commonErrors: ["Answering 1000."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-poly-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why can thermoplastic plastics be recycled but thermosetting plastics cannot?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thermoplastics soften when heated and can be remoulded; thermosets have permanent cross-links that decompose instead of melting" },
              { id: "b", text: "Thermosets are not plastics" },
              { id: "c", text: "Thermoplastics are always cheaper" },
              { id: "d", text: "Thermoplastics dissolve in water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Recycling plastics", statement: "Thermoplastic = remeltable; thermoset = cross-linked, decomposes." },
            ],
            steps: [
              { reasoning: "Thermoplastics soften reversibly on heating.", working: "\\text{soften}", marks: 1, markCode: "M" },
              { reasoning: "Thermoset cross-links prevent remelting → decompose.", working: "\\text{cross-links}", marks: 1, markCode: "M" },
              { reasoning: "State conclusion.", working: "\\text{recycle}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thermoplastic remelts; thermoset decomposes",
            commonErrors: ["Saying thermosets can't be heated."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-poly-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Propene (C₃H₆) undergoes addition polymerisation. How many carbon and hydrogen atoms are in each repeat unit of polypropene?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Addition polymerisation", statement: "Monomer atoms all appear in repeat unit (no byproduct)." },
            ],
            steps: [
              { reasoning: "C₃H₆ → repeat unit has 3 C and 6 H.", working: "C_3H_6", marks: 1, markCode: "M" },
              { reasoning: "State answers.", working: "3,6", marks: 1, markCode: "M" },
              { reasoning: "Complete.", working: "\\text{all}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 carbon, 6 hydrogen",
            commonErrors: ["Losing atoms during polymerisation."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-poly-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many bonds are broken when a C=C double bond opens during addition polymerisation?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Polymerisation", statement: "The π bond of C=C breaks; σ framework remains." },
            ],
            steps: [
              { reasoning: "Only the π bond breaks → 1 bond.", working: "\\pi", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1",
            commonErrors: ["Answering 2."],
            examinerNote: "B1 for 1.",
          },
        },
        {
          id: "mypc4-u3-poly-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "The monomer chloroethene has formula C₂H₃Cl. How many chlorine atoms does each monomer unit contribute to PVC?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Monomer formula", statement: "C₂H₃Cl has 1 Cl per monomer." },
            ],
            steps: [
              { reasoning: "One Cl in formula → 1 per repeat unit.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
            commonErrors: ["Answering 2 (carbon count)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-poly-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Polymers and plastics.",
          parts: [
            { label: "a", prompt: "Define polymerisation.", marks: 1 },
            { label: "b", prompt: "Explain why addition polymerisation produces no byproduct.", marks: 2 },
            { label: "c", prompt: "State two differences between thermoplastics and thermosets.", marks: 2 },
            { label: "d", prompt: "Give one use of PVC.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Polymerisation", statement: "Monomers join to form polymer chains." },
            ],
            steps: [
              { part: "a", reasoning: "Process of monomers joining to form a polymer.", working: "\\text{def}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "C=C bonds open and join directly — all atoms retained.", working: "\\text{no byproduct}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct explanation.", working: "\\text{all atoms}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Thermoplastic softens/remoulds; thermoset cross-linked/permanent.", working: "\\text{2 diffs}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both differences.", working: "\\text{both}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "e.g. pipes, cables, window frames, flooring.", working: "\\text{use}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) monomers→polymer (b) all atoms retained (c) softens vs permanent (d) pipes/cables",
            commonErrors: ["In (b), claiming a small molecule is released."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypc4-u3-poly-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Polypropene is made from propene (CH₂=CHCH₃).",
          parts: [
            { label: "a", prompt: "Write the structure of the repeat unit of polypropene.", marks: 2 },
            { label: "b", prompt: "Explain how the polymer's properties arise from its structure.", marks: 2 },
            { label: "c", prompt: "Compare polymers with metals in terms of strength, conductivity and weight.", marks: 2 },
            { label: "d", prompt: "State one environmental problem with polypropene waste.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Polymer structure-property", statement: "Chain structure → physical properties; non-biodegradable → pollution." },
            ],
            steps: [
              { part: "a", reasoning: "—CH₂—CH(CH₃)— repeat unit.", working: "\\text{repeat}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct structure.", working: "\\text{correct}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Long chains entangle → strong, flexible, waterproof; no free electrons → insulator.", working: "\\text{chains}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Link structure to properties.", working: "\\text{properties}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Polymer: light, insulating, less strong; metal: heavy, conducts, stronger.", working: "\\text{compare}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Comparison complete.", working: "\\text{both}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Non-biodegradable → persists in environment, harms wildlife.", working: "\\text{pollution}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Impact stated.", working: "\\text{harm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) —CH₂—CH(CH₃)— (b) chains→strong/flexible/insulating (c) polymer light+insulating vs metal heavy+conducting (d) non-biodegradable",
            commonErrors: ["In (a), writing ethene repeat unit."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
      ],
    },
    {
      id: "mypc4-u3-sustainability",
      title: "Sustainability and Green Chemistry",
      skill: "Evaluate chemical products and processes for environmental sustainability.",
      lesson: {
        sections: [
          {
            heading: "Green chemistry principles",
            body: "Reduce waste, use renewable feedstocks, safer solvents, energy-efficient processes, design degradable products, real-time pollution prevention. Aim: make chemicals with less environmental harm.",
          },
          {
            heading: "Recycling and reuse",
            body: "Metals: infinitely recyclable, saves energy (Al recycling saves 95%). Plastics: thermoplastics recyclable but contaminated/ mixed hard to process; thermosets not recyclable. Glass: infinitely recyclable. Paper: recyclable but limited cycles.",
          },
          {
            heading: "Lifecycle thinking",
            body: "Consider product from extraction → manufacture → use → disposal. E.g. plastic bag: cheap production but centuries to decompose; metal can: heavier transport but fully recyclable. Choose materials minimizing total impact.",
          },
        ],
        keyFormulas: [
          { name: "Green chemistry", statement: "Reduce waste, renewable inputs, safer processes" },
          { name: "Recycling", statement: "Metals/glass infinite; thermoplastics limited; thermosets none" },
          { name: "Lifecycle", statement: "Extraction→use→disposal impacts" },
        ],
        workedExample: {
          problem: "Why is aluminum can recycling more valuable than plastic bottle recycling?",
          solution: "Al is infinitely recyclable with no quality loss; plastic degrades each cycle and is often downcycled.",
        },
      },
      questions: [
        {
          id: "mypc4-u3-sust-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is infinitely recyclable without quality loss?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Polyethene" },
              { id: "b", text: "Polystyrene" },
              { id: "c", text: "Paper" },
              { id: "d", text: "Aluminum" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Recyclability", statement: "Metals and glass recycle infinitely; plastics degrade." },
            ],
            steps: [
              { reasoning: "Aluminum can be melted and reformed repeatedly.", working: "\\text{Al}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Aluminum",
            commonErrors: ["Choosing plastic — degrades each cycle."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u3-sust-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'green chemistry'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Designing chemical processes to reduce waste and environmental harm" },
              { id: "b", text: "Growing chemicals in plants" },
              { id: "c", text: "Avoiding all chemicals" },
              { id: "d", text: "Using only green-colored chemicals" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Green chemistry", statement: "Reduce waste, safer processes, renewable inputs." },
            ],
            steps: [
              { reasoning: "Green chemistry = sustainable chemical design.", working: "\\text{green chem}", marks: 1, markCode: "M" },
              { reasoning: "State definition.", working: "\\text{sustainability}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sustainable chemical processes",
            commonErrors: ["Literal interpretation of 'green'."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-sust-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why thermosetting plastics are harder to recycle than thermoplastics.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are always colored" },
              { id: "b", text: "Cross-linked bonds can't be broken by heating — can't be remelted and reshaped" },
              { id: "c", text: "They are more expensive" },
              { id: "d", text: "They melt at lower temperature" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Thermoset recycling", statement: "Cross-links prevent remelting → can't recycle." },
            ],
            steps: [
              { reasoning: "Thermosets have permanent cross-links.", working: "\\text{cross-links}", marks: 1, markCode: "M" },
              { reasoning: "Heating decomposes rather than softens → can't reshape.", working: "\\text{no remelt}", marks: 1, markCode: "M" },
              { reasoning: "State consequence.", working: "\\text{not recyclable}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cross-links prevent remelting",
            commonErrors: ["Saying they can't be heated at all."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-sust-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company wants to replace plastic packaging with a biodegradable alternative.",
          parts: [
            { label: "a", prompt: "Define biodegradable.", marks: 1 },
            { label: "b", prompt: "List two advantages of biodegradable packaging.", marks: 2 },
            { label: "c", prompt: "List two disadvantages/limitations.", marks: 2 },
            { label: "d", prompt: "Suggest how to evaluate whether the alternative is truly sustainable.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainability evaluation", statement: "Consider full lifecycle — production, use, disposal." },
            ],
            steps: [
              { part: "a", reasoning: "Broken down by microorganisms into harmless products.", working: "\\text{biodegradable}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Reduces landfill/pollution; breaks down naturally.", working: "\\text{less waste}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Second advantage.", working: "\\text{2 adv}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "May be weaker/less durable; may need industrial composting.", working: "\\text{weaker}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Second limitation.", working: "\\text{2 limits}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Assess production energy/inputs; check disposal conditions needed.", working: "\\text{lifecycle}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Weigh benefits vs costs over full lifecycle.", working: "\\text{evaluate}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Conclusion based on evidence.", working: "\\text{conclusion}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) microbe-breakdown (b) less waste, natural breakdown (c) weaker, needs composting (d) lifecycle assessment",
            commonErrors: ["In (d), only considering disposal not production."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypc4-u3-sust-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A biodegradable material is one that...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cannot be produced" },
              { id: "b", text: "Lasts forever" },
              { id: "c", text: "Is always metal" },
              { id: "d", text: "Is broken down by microorganisms into harmless products" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Biodegradable", statement: "Microbes break it down naturally." },
            ],
            steps: [
              { reasoning: "Biodegradable = decomposed by microorganisms.", working: "\\text{biodegradable}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Microbe breakdown",
            commonErrors: ["Thinking biodegradable = permanent."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u3-sust-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of these is NOT infinitely recyclable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Steel" },
              { id: "b", text: "Polyethene plastic" },
              { id: "c", text: "Aluminium" },
              { id: "d", text: "Glass" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Recyclability", statement: "Metals/glass recycle infinitely; plastics degrade or aren't recyclable." },
            ],
            steps: [
              { reasoning: "Plastics degrade each cycle or can't be remelted.", working: "\\text{plastic}", marks: 1, markCode: "M" },
              { reasoning: "Metals/glass recycle infinitely.", working: "\\text{metal/glass}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Polyethene",
            commonErrors: ["Choosing glass — infinitely recyclable."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-sust-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Recycling aluminium saves about 95% of the energy needed to extract it from ore. If extraction needs 100 units of energy, how much does recycling need?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5, unit: "units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Energy saving", statement: "Recycling uses 5% of extraction energy." },
            ],
            steps: [
              { reasoning: "100 × 0.05 = 5 units.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "5 units",
            commonErrors: ["Answering 95."],
            examinerNote: "B1 for 5.",
          },
        },
        {
          id: "mypc4-u3-sust-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A glass bottle can be recycled 10 times and a plastic bottle only 2 times. How many more recycling cycles does glass allow?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Recycling", statement: "Difference = 10 − 2 = 8 cycles." },
            ],
            steps: [
              { reasoning: "10 − 2 = 8 more cycles.", working: "8", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8",
            commonErrors: ["Dividing instead of subtracting."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-sust-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Lifecycle thinking' when choosing a material means considering...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only its price" },
              { id: "b", text: "Its impacts from extraction through manufacture, use and disposal" },
              { id: "c", text: "Only its colour" },
              { id: "d", text: "Only its disposal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Lifecycle", statement: "Evaluate whole life: extraction→use→disposal." },
            ],
            steps: [
              { reasoning: "Lifecycle = all stages of a product's life.", working: "\\text{lifecycle}", marks: 1, markCode: "M" },
              { reasoning: "State scope.", working: "\\text{all stages}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "All stages from extraction to disposal",
            commonErrors: ["Considering only disposal."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-sust-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A chemical process uses 50 kg of raw material and produces 30 kg of useful product. What percentage becomes waste?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Waste percentage", statement: "Waste = (50−30)/50 × 100 = 40%." },
            ],
            steps: [
              { reasoning: "Waste = 20 kg; 20/50 × 100 = 40%.", working: "40\\%", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "40\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40%",
            commonErrors: ["Using 30 as denominator."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-sust-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is 'downcycling' a limitation of plastic recycling?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plastics cannot be melted" },
              { id: "b", text: "Each recycling cycle degrades the plastic, so it can only be made into lower-quality products" },
              { id: "c", text: "Recycling uses more energy" },
              { id: "d", text: "Plastics are too heavy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Downcycling", statement: "Plastic quality decreases each cycle → lower-grade products." },
            ],
            steps: [
              { reasoning: "Polymers degrade/break during reprocessing.", working: "\\text{degrade}", marks: 1, markCode: "M" },
              { reasoning: "Result = lower-quality product each cycle (downcycling).", working: "\\text{downcycle}", marks: 1, markCode: "M" },
              { reasoning: "State reason.", working: "\\text{limitation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quality decreases each cycle",
            commonErrors: ["Saying plastic can't be recycled at all."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-sust-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Producing 1 kg of aluminium from ore needs 100 units of energy; recycling needs 5 units. How much energy is saved by recycling 10 kg of aluminium?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 950, unit: "units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Energy saving", statement: "Saved = (100−5) × 10 = 950 units." },
            ],
            steps: [
              { reasoning: "Saving per kg = 100 − 5 = 95 units.", working: "95", marks: 1, markCode: "M" },
              { reasoning: "95 × 10 = 950 units.", working: "950", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "950", marks: 1, markCode: "A" },
            ],
            finalAnswer: "950 units",
            commonErrors: ["Computing 9500 (10× too big)."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-sust-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many stages are in a typical product lifecycle: extraction, manufacture, use and disposal?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lifecycle", statement: "Extraction→manufacture→use→disposal = 4 stages." },
            ],
            steps: [
              { reasoning: "Four stages listed.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 3."],
            examinerNote: "B1 for 4.",
          },
        },
        {
          id: "mypc4-u3-sust-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A company produces 200 kg of plastic packaging, of which 150 kg is recycled content. What percentage is recycled?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 75, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Percentage", statement: "150/200 × 100 = 75%." },
            ],
            steps: [
              { reasoning: "150/200 × 100 = 75%.", working: "75\\%", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "75\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75%",
            commonErrors: ["Using 200 as numerator."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-sust-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Green chemistry and recycling.",
          parts: [
            { label: "a", prompt: "Define green chemistry.", marks: 1 },
            { label: "b", prompt: "State two facts about metal and glass recycling.", marks: 2 },
            { label: "c", prompt: "List the four lifecycle stages.", marks: 2 },
            { label: "d", prompt: "Give one example of a sustainable material choice.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Green chemistry", statement: "Design processes to reduce waste and environmental harm." },
            ],
            steps: [
              { part: "a", reasoning: "Chemical processes designed to minimise waste/harm.", working: "\\text{def}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Both metals and glass recycle infinitely without quality loss.", working: "\\text{infinite}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Second fact (or detail).", working: "\\text{2 facts}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Extraction, manufacture, use, disposal.", working: "\\text{4 stages}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "All four listed.", working: "\\text{all}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "e.g. glass bottle instead of plastic, or recycled metal.", working: "\\text{choice}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) sustainable chem design (b) metals+glass infinite (c) extract,make,use,dispose (d) e.g. glass",
            commonErrors: ["In (c), omitting a stage."],
            examinerNote: "A1 for (a), M1 A1 for (b),(c), A1 for (d).",
          },
        },
        {
          id: "mypc4-u3-sust-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A drinks company must choose between glass bottles and plastic bottles for its product.",
          parts: [
            { label: "a", prompt: "List three lifecycle factors to compare.", marks: 3 },
            { label: "b", prompt: "State two green chemistry principles relevant to packaging.", marks: 2 },
            { label: "c", prompt: "Explain why metals are more recyclable than plastics.", marks: 2 },
            { label: "d", prompt: "Give a justified recommendation.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainability evaluation", statement: "Compare full lifecycle and recyclability." },
            ],
            steps: [
              { part: "a", reasoning: "e.g. production energy, transport weight, recyclability/disposal.", working: "\\text{3 factors}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Second factor.", working: "\\text{2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Third factor.", working: "\\text{3}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "e.g. reduce waste; use recyclable/renewable materials.", working: "\\text{2 principles}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Second principle.", working: "\\text{2}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Metals melt and reform without degrading; plastics break down or cross-link.", working: "\\text{metal vs plastic}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct explanation.", working: "\\text{recycle}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Justified choice e.g. glass (infinitely recyclable) or plastic (lighter transport) with reasoning.", working: "\\text{justified}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) energy, transport, recyclability (b) reduce waste, recyclable inputs (c) metals don't degrade (d) justified choice",
            commonErrors: ["In (d), choosing without justification."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
      ],
    },
  ],
};
