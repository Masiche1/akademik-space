import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "olbio-u5-lesson-5-1",
  code: "5-1",
  title: "Respiration",
  goal: "I CAN describe aerobic and anaerobic respiration, compare their efficiency, and explain uses of energy in organisms.",
  standards: ["5090 5.1"],
  vocabulary: [
    { term: "Aerobic respiration", definition: "Release of energy from glucose using oxygen; produces CO₂ and water." },
    { term: "Anaerobic respiration", definition: "Release of energy from glucose without oxygen; produces lactate (animals) or ethanol + CO₂ (plants/yeast)." },
    { term: "ATP", definition: "Energy currency of the cell; used for all life processes." },
    { term: "Mitochondrion", definition: "Site of aerobic respiration." },
    { term: "Lactic acid", definition: "Product of anaerobic respiration in animals; causes muscle fatigue." },
    { term: "Fermentation", definition: "Anaerobic respiration in yeast producing ethanol and CO₂." },
  ],
  concepts: [
    {
      id: "olbio-u5-aerobic-respiration",
      title: "Aerobic respiration",
      skill: "Write the aerobic respiration equation, identify its site, and compare it with anaerobic respiration.",
      lesson: {
        sections: [
          {
            heading: "Equation and site",
            body: "\n**C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP)**\n\nOccurs in **mitochondria**. Glucose is fully oxidised, releasing large amounts of energy (~38 ATP per glucose in eukaryotes).",
          },
          {
            heading: "Uses of energy",
            body: "- Muscle contraction (movement)\n- Protein synthesis (growth/repair)\n- Cell division\n- Active transport\n- Nerve impulse transmission\n- Maintaining body temperature",
          },
          {
            heading: "Why oxygen matters",
            body: "Oxygen is the final electron acceptor in the electron transport chain — without it, aerobic respiration cannot complete and far less ATP is produced.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why do athletes breathe faster after exercise?",
          solution: "Muscles used anaerobic respiration producing lactate and less ATP; heavy breathing repays oxygen debt to oxidise lactate aerobically.",
        },
      },
      questions: [
        {
          id: "olbio-u5-aerobic-respiration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products of aerobic respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lactic acid" },
              { id: "b", text: "Oxygen and glucose" },
              { id: "c", text: "Ethanol and CO₂" },
              { id: "d", text: "Carbon dioxide and water" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Aerobic products", statement: "CO₂ + H₂O + energy; glucose + O₂ are reactants." },
            ],
            steps: [
              { reasoning: "Recall the equation.", working: "\\text{CO}_2 + \\text{H}_2\\text{O}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Carbon dioxide and water",
            commonErrors: ["Choosing oxygen — that's a reactant, not a product."],
          },
        },
        {
          id: "olbio-u5-aerobic-respiration-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the equation for aerobic respiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Aerobic respiration equation", statement: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy." },
            ],
            steps: [
              { reasoning: "Give reactants and products.", working: "\\text{glucose} + \\text{O}_2 \\to \\text{CO}_2 + \\text{H}_2\\text{O} + \\text{energy}", marks: 1, markCode: "M" },
              { reasoning: "Complete equation with energy/ATP.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP).",
            commonErrors: ["Forgetting energy as a product — respiration releases energy."],
          },
        },
        {
          id: "olbio-u5-aerobic-respiration-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why aerobic respiration produces much more ATP than anaerobic respiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Aerobic vs anaerobic yield", statement: "Aerobic fully oxidises glucose (~38 ATP); anaerobic partially (~2 ATP)." },
            ],
            steps: [
              { reasoning: "Aerobic completely breaks down glucose.", working: "\\text{full oxidation}", marks: 1, markCode: "M" },
              { reasoning: "Anaerobic stops early (no O₂).", working: "\\text{partial breakdown}", marks: 1, markCode: "M" },
              { reasoning: "Compare ATP yields.", working: "\\text{38 vs 2}", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Aerobic respiration fully oxidises glucose using oxygen, releasing ~38 ATP; anaerobic only partially breaks it down (~2 ATP) because oxygen is unavailable.",
            commonErrors: ["Saying anaerobic produces no energy — it produces some, just much less."],
          },
        },
        {
          id: "olbio-u5-aerobic-respiration-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates respiration in germinating seeds using a respirometer.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Explain how the apparatus measures respiration rate.", marks: 3 },
            { label: "c", prompt: "Explain why germinating seeds respire faster than dry seeds.", marks: 2 },
            { label: "d", prompt: "Suggest one control for temperature.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Respirometer", statement: "O₂ uptake / CO₂ release measured (e.g. by pressure or CO₂ absorbent)." },
              { kind: "property", name: "Germination", statement: "Active metabolism → higher respiration rate." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: e.g. seed type/temperature. Dependent: rate of O₂ uptake/CO₂ release.", working: "\\text{var vs rate}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Seeds absorb O₂ and release CO₂ during respiration.", working: "\\text{O}_2 \\leftrightarrow \\text{CO}_2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Gas volume/pressure change indicates rate.", working: "\\text{pressure/volume change}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Faster change = higher respiration rate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Germinating seeds are metabolically active (growth).", working: "\\text{active metabolism}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "More ATP needed → faster respiration.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use water bath / thermostat to keep constant.", working: "\\text{water bath}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State control.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) variable vs rate (b) gas volume/pressure change (c) active metabolism needs more ATP (d) water bath/thermostat",
            commonErrors: ["In (b) forgetting CO₂ must be absorbed to measure O₂ uptake alone."],
          },
        },
        {
          id: "olbio-u5-aerobic-respiration-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Where does aerobic respiration mainly occur in eukaryotic cells?",
          response: { type: "mcq", choices: [ { id: "a", text: "Chloroplasts" }, { id: "b", text: "Nucleus" }, { id: "c", text: "Ribosomes" }, { id: "d", text: "Mitochondria" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Site of aerobic respiration", statement: "Aerobic respiration occurs mainly in mitochondria." }], steps: [{ reasoning: "Recall the site.", working: "\\text{mitochondria}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Mitochondria", commonErrors: ["Choosing cytoplasm only — mitochondria are the main site."] },
        },
        {
          id: "olbio-u5-aerobic-respiration-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Which pair is a correct set of reactants for aerobic respiration?",
          response: { type: "mcq", choices: [ { id: "a", text: "Lactate and oxygen" }, { id: "b", text: "Oxygen and water" }, { id: "c", text: "Glucose and oxygen" }, { id: "d", text: "Glucose and carbon dioxide" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Aerobic reactants", statement: "Aerobic respiration uses glucose and oxygen." }], steps: [{ reasoning: "Identify reactants.", working: "\\text{glucose} + \\text{O}_2", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Glucose and oxygen", commonErrors: ["Carbon dioxide and water are products."] },
        },
        {
          id: "olbio-u5-aerobic-respiration-q7", difficulty: "core", totalMarks: 1,
          stem: "Approximately how many ATP molecules are released per glucose in aerobic respiration?",
          response: { type: "mcq", choices: [ { id: "a", text: "190" }, { id: "b", text: "0" }, { id: "c", text: "2" }, { id: "d", text: "38" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Aerobic ATP yield", statement: "About 38 ATP per glucose aerobically versus about 2 anaerobically." }], steps: [{ reasoning: "Recall the yield.", working: "\\sim 38 \\text{ ATP}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 38", commonErrors: ["Choosing 2 ATP describes anaerobic respiration."] },
        },
        {
          id: "olbio-u5-aerobic-respiration-q8", difficulty: "core", totalMarks: 1,
          stem: "Which process is a use of energy released by respiration?",
          response: { type: "mcq", choices: [ { id: "a", text: "Diffusion of oxygen" }, { id: "b", text: "Photosynthesis" }, { id: "c", text: "Active transport" }, { id: "d", text: "Cell division by mitosis only" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Uses of ATP", statement: "Respiration energy is used for muscle contraction, protein synthesis, cell division, active transport, nerve impulses and temperature regulation." }], steps: [{ reasoning: "Match a process that requires ATP.", working: "\\text{active transport}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Active transport", commonErrors: ["Photosynthesis stores energy; it is not a use of respiratory ATP."] },
        },
        {
          id: "olbio-u5-aerobic-respiration-q9", difficulty: "challenge", totalMarks: 1,
          stem: "What is the role of oxygen in aerobic respiration?",
          response: { type: "mcq", choices: [ { id: "a", text: "It is the final electron acceptor" }, { id: "b", text: "It cools the mitochondria" }, { id: "c", text: "It is a reactant only in plants" }, { id: "d", text: "It produces glucose" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Oxygen in aerobic respiration", statement: "Oxygen acts as the final electron acceptor, allowing complete oxidation of glucose." }], steps: [{ reasoning: "Recall the role.", working: "\\text{final electron acceptor}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** It is the final electron acceptor", commonErrors: ["Oxygen is a reactant but its key role is accepting electrons."] },
        },
        {
          id: "olbio-u5-aerobic-respiration-q10", difficulty: "challenge", totalMarks: 1,
          stem: "Why is aerobic respiration described as more efficient than anaerobic respiration?",
          response: { type: "mcq", choices: [ { id: "a", text: "It does not require oxygen" }, { id: "b", text: "It produces lactic acid" }, { id: "c", text: "It occurs in the cytoplasm only" }, { id: "d", text: "Glucose is fully oxidised and more ATP is released" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Efficiency of aerobic respiration", statement: "Aerobic respiration fully oxidises glucose, releasing about 38 ATP compared with about 2 ATP anaerobically." }], steps: [{ reasoning: "Link efficiency to ATP yield.", working: "\\text{full oxidation} \\to \\sim 38 \\text{ ATP}", marks: 1, markCode: "M" }], finalAnswer: "**(a)** Glucose is fully oxidised and more ATP is released", commonErrors: ["Anaerobic respiration does not require oxygen but yields little ATP."] },
        },
        {
          id: "olbio-u5-aerobic-respiration-q11", difficulty: "foundation", totalMarks: 1,
          stem: "If aerobic respiration releases about 38 ATP per glucose, how many ATP are released from 5 glucose molecules?",
          response: { type: "numeric", parts: [{ label: "a", answer: 190, unit: "ATP" }] },
          markscheme: { principles: [{ kind: "property", name: "Aerobic ATP yield", statement: "About 38 ATP per glucose molecule in aerobic respiration." }], steps: [{ reasoning: "Multiply glucose number by ATP per glucose.", working: "5 \\times 38 = 190 \\text{ ATP}", marks: 1, markCode: "M" }], finalAnswer: "190 ATP" },
        },
        {
          id: "olbio-u5-aerobic-respiration-q12", difficulty: "core", totalMarks: 1,
          stem: "Aerobic respiration releases about 38 ATP per glucose and anaerobic respiration about 2 ATP. What is the difference per glucose?",
          response: { type: "numeric", parts: [{ label: "a", answer: 36, unit: "ATP" }] },
          markscheme: { principles: [{ kind: "property", name: "ATP yield difference", statement: "Aerobic respiration yields about 36 ATP more per glucose than anaerobic respiration." }], steps: [{ reasoning: "Subtract anaerobic yield from aerobic yield.", working: "38 - 2 = 36 \\text{ ATP}", marks: 1, markCode: "M" }], finalAnswer: "36 ATP" },
        },
        {
          id: "olbio-u5-aerobic-respiration-q13", difficulty: "core", totalMarks: 1,
          stem: "A cell completely oxidises 4 glucose molecules aerobically. Calculate the total ATP produced.",
          response: { type: "numeric", parts: [{ label: "a", answer: 152, unit: "ATP" }] },
          markscheme: { principles: [{ kind: "property", name: "Aerobic ATP yield", statement: "Use about 38 ATP per glucose for aerobic calculations." }], steps: [{ reasoning: "Multiply number of glucose molecules by 38 ATP.", working: "4 \\times 38 = 152 \\text{ ATP}", marks: 1, markCode: "M" }], finalAnswer: "152 ATP" },
        },
        {
          id: "olbio-u5-aerobic-respiration-q14", difficulty: "challenge", totalMarks: 1,
          stem: "If anaerobic respiration releases 2 ATP per glucose, what percentage of the aerobic yield is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5.3, unit: "%" }] },
          markscheme: { principles: [{ kind: "property", name: "Relative ATP yield", statement: "Anaerobic yield is about 2/38 of the aerobic yield, roughly 5.3%." }], steps: [{ reasoning: "Divide anaerobic by aerobic yield and multiply by 100.", working: "(2 \\div 38) \\times 100 = 5.3\\%", marks: 1, markCode: "M" }], finalAnswer: "About 5.3%" },
        },
        {
          id: "olbio-u5-aerobic-respiration-q15", difficulty: "challenge", totalMarks: 4,
          stem: "State four uses of energy released by aerobic respiration in living organisms.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Uses of respiratory energy", statement: "Energy from respiration powers movement, synthesis, transport, division and nerve impulses." }], steps: [{ reasoning: "Movement uses ATP for muscle contraction.", working: "\\text{muscle contraction}", marks: 1, markCode: "M" }, { reasoning: "Growth and repair use ATP for protein synthesis.", working: "\\text{protein synthesis}", marks: 1, markCode: "M" }, { reasoning: "Membrane transport uses ATP for active transport.", working: "\\text{active transport}", marks: 1, markCode: "M" }, { reasoning: "Cell division or nerve impulse transmission also requires energy.", working: "\\text{division/nerve}", marks: 1, markCode: "A" }], finalAnswer: "Muscle contraction, protein synthesis, active transport, and cell division/nerve impulse transmission.", commonErrors: ["Listing only one use when four are required."] },
        },
        {
          id: "olbio-u5-aerobic-respiration-q16", difficulty: "challenge", totalMarks: 9,
          stem: "A student is asked to compare aerobic respiration in germinating seeds with anaerobic respiration in yeast.",
          parts: [
            { label: "a", prompt: "State the reactants and products of each process.", marks: 2 },
            { label: "b", prompt: "Compare the ATP yield of each process.", marks: 2 },
            { label: "c", prompt: "State the main site of aerobic respiration in eukaryotes.", marks: 1 },
            { label: "d", prompt: "Explain why oxygen is necessary for aerobic respiration.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Aerobic versus anaerobic respiration", statement: "Aerobic respiration is efficient and mitochondrial; anaerobic respiration is partial and low-yield." }], steps: [
            { part: "a", reasoning: "Aerobic: glucose + oxygen -> carbon dioxide + water + energy.", working: "\\text{glucose}+\\text{O}_2\\to\\text{CO}_2+\\text{H}_2\\text{O}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Yeast anaerobic: glucose -> ethanol + carbon dioxide + energy.", working: "\\text{ethanol}+\\text{CO}_2", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Aerobic releases about 38 ATP per glucose.", working: "\\sim 38 \\text{ ATP}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Anaerobic releases only about 2 ATP per glucose.", working: "\\sim 2 \\text{ ATP}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Mitochondria.", working: "\\text{mitochondria}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Oxygen is the final electron acceptor in the electron transport chain.", working: "\\text{final electron acceptor}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Without oxygen the chain cannot complete and much less ATP is formed.", working: "\\text{incomplete oxidation}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Aerobic respiration therefore releases far more energy than anaerobic respiration.", working: "38 \\text{ vs } 2 \\text{ ATP}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Conclude that oxygen is essential for efficient respiration.", working: "\\text{essential for efficiency}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) aerobic glucose+O2->CO2+H2O+energy; yeast glucose->ethanol+CO2+energy (b) about 38 vs 2 ATP (c) mitochondria (d) oxygen is final electron acceptor", commonErrors: ["Confusing yeast anaerobic products with animal lactic acid."] },
        },
      ],
    },
    {
      id: "olbio-u5-anaerobic-respiration",
      title: "Anaerobic respiration",
      skill: "Compare anaerobic respiration in animals and microorganisms and explain oxygen debt and fermentation.",
      lesson: {
        sections: [
          {
            heading: "In animals",
            body: "\n**Glucose → lactic acid + small amount of energy**\n\nOccurs in muscles during vigorous exercise when O₂ supply can't meet demand. Lactic acid causes fatigue and cramps.",
          },
          {
            heading: "In yeast/microorganisms",
            body: "\n**Glucose → ethanol + CO₂ + small amount of energy**\n\nCalled **fermentation** — used in bread-making (CO₂ makes dough rise) and brewing (ethanol produced).",
          },
          {
            heading: "Oxygen debt",
            body: "After exercise, extra O₂ is needed to oxidise accumulated lactic acid back to CO₂ and water — this is the **oxygen debt**, repaid by continued heavy breathing.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does bread dough rise during fermentation?",
          solution: "Yeast respires anaerobically producing CO₂ gas, which gets trapped in the dough and makes it expand.",
        },
      },
      questions: [
        {
          id: "olbio-u5-anaerobic-respiration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is produced by anaerobic respiration in human muscles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only CO₂" },
              { id: "b", text: "Lactic acid" },
              { id: "c", text: "Water and oxygen" },
              { id: "d", text: "Ethanol and CO₂" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Animal anaerobic product", statement: "Lactic acid." },
            ],
            steps: [
              { reasoning: "Recall the product.", working: "\\text{lactic acid}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Lactic acid",
            commonErrors: ["Choosing ethanol/CO₂ — that's yeast, not human muscles."],
          },
        },
        {
          id: "olbio-u5-anaerobic-respiration-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the products of anaerobic respiration in yeast.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Yeast fermentation", statement: "Ethanol + CO₂ + energy." },
            ],
            steps: [
              { reasoning: "Give products.", working: "\\text{ethanol} + \\text{CO}_2", marks: 1, markCode: "M" },
              { reasoning: "Complete with energy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ethanol, carbon dioxide and a small amount of energy.",
            commonErrors: ["Saying lactic acid — that's animal anaerobic respiration."],
          },
        },
        {
          id: "olbio-u5-anaerobic-respiration-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why an athlete continues to breathe heavily for some time after finishing a sprint.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Oxygen debt", statement: "Extra O₂ needed to oxidise accumulated lactic acid after exercise." },
            ],
            steps: [
              { reasoning: "During sprint, muscles used anaerobic respiration.", working: "\\text{anaerobic}", marks: 1, markCode: "M" },
              { reasoning: "Lactic acid accumulated in muscles.", working: "\\text{lactate build-up}", marks: 1, markCode: "M" },
              { reasoning: "Oxygen needed to oxidise lactate to CO₂ + water.", working: "\\text{repay O}_2 \\text{ debt}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: continued breathing supplies this oxygen.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Muscles produced lactic acid anaerobically during the sprint; the athlete keeps breathing heavily to supply oxygen to oxidise the lactate — repaying the oxygen debt.",
            commonErrors: ["Saying 'to get rid of CO₂' — it's to supply O₂ for lactate oxidation."],
          },
        },
        {
          id: "olbio-u5-anaerobic-respiration-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare aerobic and anaerobic respiration.",
          parts: [
            { label: "a", prompt: "State the products of each in human cells.", marks: 2 },
            { label: "b", prompt: "Compare the ATP yield of each.", marks: 2 },
            { label: "c", prompt: "State when anaerobic respiration occurs in humans.", marks: 2 },
            { label: "d", prompt: "Explain why anaerobic respiration is described as 'inefficient'.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Respiration comparison", statement: "Aerobic: CO₂+H₂O, ~38 ATP, needs O₂. Anaerobic: lactate, ~2 ATP, no O₂." },
            ],
            steps: [
              { part: "a", reasoning: "Aerobic products.", working: "\\text{CO}_2 + \\text{H}_2\\text{O}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Anaerobic product.", working: "\\text{lactic acid}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Aerobic yield.", working: "\\sim 38 \\text{ ATP}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Anaerobic yield.", working: "\\sim 2 \\text{ ATP}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "During vigorous exercise when O₂ demand exceeds supply.", working: "\\text{O}_2 \\text{ deficit}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the condition.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Glucose only partially oxidised.", working: "\\text{partial oxidation}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Much energy remains locked in lactate.", working: "\\text{energy locked}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Conclude: far less ATP per glucose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) aerobic CO₂+H₂O, anaerobic lactate (b) ~38 vs ~2 ATP (c) O₂ deficit during exercise (d) partial oxidation → little ATP",
            commonErrors: ["In (d) saying 'no energy produced' — some ATP is made."],
          },
        },
        {
          id: "olbio-u5-anaerobic-respiration-q5", difficulty: "foundation", totalMarks: 1,
          stem: "What is the main product of anaerobic respiration in human muscles?",
          response: { type: "mcq", choices: [ { id: "a", text: "Ethanol" }, { id: "b", text: "Water" }, { id: "c", text: "Carbon dioxide only" }, { id: "d", text: "Lactic acid" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Animal anaerobic product", statement: "Anaerobic respiration in animals produces lactic acid and a small amount of energy." }], steps: [{ reasoning: "Recall the product.", working: "\\text{lactic acid}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Lactic acid", commonErrors: ["Ethanol and carbon dioxide are yeast products."] },
        },
        {
          id: "olbio-u5-anaerobic-respiration-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Which organisms carry out fermentation to produce ethanol and carbon dioxide?",
          response: { type: "mcq", choices: [ { id: "a", text: "Yeast and some bacteria" }, { id: "b", text: "Human muscle cells" }, { id: "c", text: "Chloroplasts" }, { id: "d", text: "Red blood cells" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Fermentation", statement: "Fermentation is anaerobic respiration in yeast producing ethanol and carbon dioxide." }], steps: [{ reasoning: "Match organism to product.", working: "\\text{yeast}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Yeast and some bacteria", commonErrors: ["Human muscles produce lactic acid, not ethanol."] },
        },
        {
          id: "olbio-u5-anaerobic-respiration-q7", difficulty: "core", totalMarks: 1,
          stem: "What is oxygen debt?",
          response: { type: "mcq", choices: [ { id: "a", text: "Carbon dioxide left in blood" }, { id: "b", text: "Extra oxygen needed to oxidise accumulated lactic acid" }, { id: "c", text: "Oxygen stored in muscles" }, { id: "d", text: "The oxygen used during sleep" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Oxygen debt", statement: "Oxygen debt is the extra oxygen required after anaerobic exercise to oxidise accumulated lactic acid." }], steps: [{ reasoning: "Recall the definition.", working: "\\text{repay } \\text{O}_2 \\text{ debt}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Extra oxygen needed to oxidise accumulated lactic acid", commonErrors: ["It is not oxygen stored before exercise."] },
        },
        {
          id: "olbio-u5-anaerobic-respiration-q8", difficulty: "core", totalMarks: 1,
          stem: "Why is bread dough able to rise during fermentation?",
          response: { type: "mcq", choices: [ { id: "a", text: "Carbon dioxide gas is produced and trapped" }, { id: "b", text: "Glucose is converted to starch" }, { id: "c", text: "Yeast absorbs all the water" }, { id: "d", text: "Alcohol evaporates completely" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Fermentation in bread", statement: "Yeast fermentation produces carbon dioxide, which makes dough rise." }], steps: [{ reasoning: "Identify the gas responsible.", working: "\\text{CO}_2 \\text{ gas}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Carbon dioxide gas is produced and trapped", commonErrors: ["Ethanol is also produced but CO2 causes rising."] },
        },
        {
          id: "olbio-u5-anaerobic-respiration-q9", difficulty: "challenge", totalMarks: 1,
          stem: "When does anaerobic respiration occur in human muscle cells?",
          response: { type: "mcq", choices: [ { id: "a", text: "When oxygen supply cannot meet demand during vigorous exercise" }, { id: "b", text: "Only in the liver" }, { id: "c", text: "Whenever glucose is present" }, { id: "d", text: "During sleeping" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "When anaerobic respiration occurs", statement: "It occurs when oxygen demand exceeds supply, especially during vigorous exercise." }], steps: [{ reasoning: "Link to oxygen deficit.", working: "\\text{O}_2 \\text{ deficit}", marks: 1, markCode: "M" }], finalAnswer: "**(a)** When oxygen supply cannot meet demand during vigorous exercise", commonErrors: ["It does not occur whenever glucose is present; oxygen must be limiting."] },
        },
        {
          id: "olbio-u5-anaerobic-respiration-q10", difficulty: "foundation", totalMarks: 1,
          stem: "If anaerobic respiration releases about 2 ATP per glucose, how many ATP are released from 6 glucose molecules?",
          response: { type: "numeric", parts: [{ label: "a", answer: 12, unit: "ATP" }] },
          markscheme: { principles: [{ kind: "property", name: "Anaerobic ATP yield", statement: "Anaerobic respiration releases about 2 ATP per glucose." }], steps: [{ reasoning: "Multiply glucose number by 2 ATP.", working: "6 \\times 2 = 12 \\text{ ATP}", marks: 1, markCode: "M" }], finalAnswer: "12 ATP" },
        },
        {
          id: "olbio-u5-anaerobic-respiration-q11", difficulty: "core", totalMarks: 1,
          stem: "Aerobic respiration releases 38 ATP per glucose and anaerobic respiration 2 ATP. What is the difference for 3 glucose molecules?",
          response: { type: "numeric", parts: [{ label: "a", answer: 108, unit: "ATP" }] },
          markscheme: { principles: [{ kind: "property", name: "ATP yield comparison", statement: "Aerobic respiration yields 36 ATP more per glucose than anaerobic respiration." }], steps: [{ reasoning: "Find per-glucose difference then multiply by 3.", working: "(38 - 2) \\times 3 = 108 \\text{ ATP}", marks: 1, markCode: "M" }], finalAnswer: "108 ATP" },
        },
        {
          id: "olbio-u5-anaerobic-respiration-q12", difficulty: "core", totalMarks: 1,
          stem: "A yeast cell respires 8 glucose molecules anaerobically. Calculate the total ATP produced.",
          response: { type: "numeric", parts: [{ label: "a", answer: 16, unit: "ATP" }] },
          markscheme: { principles: [{ kind: "property", name: "Anaerobic ATP yield", statement: "Use 2 ATP per glucose for anaerobic respiration." }], steps: [{ reasoning: "Multiply glucose molecules by 2 ATP.", working: "8 \\times 2 = 16 \\text{ ATP}", marks: 1, markCode: "M" }], finalAnswer: "16 ATP" },
        },
        {
          id: "olbio-u5-anaerobic-respiration-q13", difficulty: "challenge", totalMarks: 1,
          stem: "Anaerobic respiration produces 2 ATP per glucose while aerobic respiration produces 38 ATP. Express the anaerobic yield as a percentage of the aerobic yield.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5.3, unit: "%" }] },
          markscheme: { principles: [{ kind: "property", name: "Relative ATP yield", statement: "Anaerobic yield is about 5.3% of aerobic yield." }], steps: [{ reasoning: "Divide anaerobic by aerobic yield and multiply by 100.", working: "(2 \\div 38) \\times 100 = 5.3\\%", marks: 1, markCode: "M" }], finalAnswer: "About 5.3%" },
        },
        {
          id: "olbio-u5-anaerobic-respiration-q14", difficulty: "core", totalMarks: 1,
          stem: "A sprinter uses anaerobic respiration for 4 glucose molecules and later oxidises the products aerobically. How many ATP are produced anaerobically?",
          response: { type: "numeric", parts: [{ label: "a", answer: 8, unit: "ATP" }] },
          markscheme: { principles: [{ kind: "property", name: "Anaerobic ATP yield", statement: "Anaerobic respiration produces about 2 ATP per glucose during the sprint." }], steps: [{ reasoning: "Multiply glucose molecules by 2 ATP.", working: "4 \\times 2 = 8 \\text{ ATP}", marks: 1, markCode: "M" }], finalAnswer: "8 ATP" },
        },
        {
          id: "olbio-u5-anaerobic-respiration-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how oxygen debt is repaid after vigorous exercise.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Oxygen debt", statement: "Oxygen debt is repaid by oxidising lactic acid after exercise." }], steps: [{ reasoning: "During exercise muscles use anaerobic respiration and accumulate lactic acid.", working: "\\text{lactate accumulation}", marks: 1, markCode: "M" }, { reasoning: "Lactic acid must be oxidised to carbon dioxide and water.", working: "\\text{oxidise lactate}", marks: 1, markCode: "M" }, { reasoning: "Extra oxygen is supplied by continued heavy breathing after exercise.", working: "\\text{extra O}_2", marks: 1, markCode: "M" }, { reasoning: "The body returns to aerobic respiration and the debt is cleared.", working: "\\text{debt cleared}", marks: 1, markCode: "A" }], finalAnswer: "Continued breathing supplies oxygen to oxidise accumulated lactic acid, repaying the oxygen debt.", commonErrors: ["Describing oxygen debt as carbon dioxide removal rather than oxygen supply."] },
        },
        {
          id: "olbio-u5-anaerobic-respiration-q16", difficulty: "challenge", totalMarks: 9,
          stem: "A student investigates fermentation in yeast and anaerobic respiration in muscle.",
          parts: [
            { label: "a", prompt: "State the products formed by yeast and by human muscle during anaerobic respiration.", marks: 2 },
            { label: "b", prompt: "Explain why bread dough rises during fermentation.", marks: 2 },
            { label: "c", prompt: "Explain why athletes breathe heavily after a sprint.", marks: 3 },
            { label: "d", prompt: "State one industrial use of fermentation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Anaerobic respiration contexts", statement: "Anaerobic products differ by organism and explain fermentation and oxygen debt." }], steps: [
            { part: "a", reasoning: "Yeast produces ethanol and carbon dioxide.", working: "\\text{ethanol}+\\text{CO}_2", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Human muscle produces lactic acid.", working: "\\text{lactic acid}", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Yeast fermentation releases carbon dioxide gas.", working: "\\text{CO}_2 \\text{ gas}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "The gas is trapped in the dough and makes it expand.", working: "\\text{dough expands}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Muscles produce lactic acid anaerobically during the sprint.", working: "\\text{lactate}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Extra oxygen is needed to oxidise the lactate after exercise.", working: "\\text{O}_2 \\text{ debt}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Continued breathing supplies this oxygen, repaying the debt.", working: "\\text{heavy breathing}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Brewing produces ethanol, or bread-making uses CO2 to raise dough.", working: "\\text{brew/bread}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "State a valid industrial use.", working: "\\text{fermentation industry}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) yeast ethanol+CO2; muscle lactic acid (b) CO2 makes dough rise (c) oxygen debt repaid (d) brewing or bread-making", commonErrors: ["Mixing yeast and muscle products."] },
        },
      ],
    },
    {
      id: "olbio-u5-respiratory-quotient",
      title: "Respiratory quotient and exercise",
      skill: "Calculate respiratory quotient and describe the body's response to exercise.",
      lesson: {
        sections: [
          {
            heading: "Respiratory quotient (RQ)",
            body: "**RQ = volume of CO₂ produced / volume of O₂ consumed**\n\n- Carbohydrate: RQ = 1.0\n- Fat: RQ ≈ 0.7\n- Protein: RQ ≈ 0.9\n\nRQ indicates which substrate is being respired — lower RQ means more fat oxidation.",
          },
          {
            heading: "Measuring RQ",
            body: "Measure O₂ consumed and CO₂ produced (e.g. in respirometer or metabolic cart). Used in sports science and clinical diagnosis.",
          },
          {
            heading: "Exercise response",
            body: "During exercise: heart rate ↑, breathing rate ↑, blood flow to muscles ↑, adrenaline released, lactate may accumulate → oxygen debt afterwards.",
          },
        ],
        keyFormulas: [
          { name: "Respiratory quotient", statement: "$RQ = \\dfrac{\\text{volume of CO}_2 \\text{ produced}}{\\text{volume of O}_2 \\text{ consumed}}$" },
        ],
        workedExample: {
          problem: "A person consumes 200 cm³ O₂ and produces 180 cm³ CO₂. What is their RQ?",
          solution: "RQ = 180/200 = 0.9 — suggests protein is the main substrate being respired.",
        },
      },
      questions: [
        {
          id: "olbio-u5-respiratory-quotient-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the respiratory quotient (RQ)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy released per litre of O₂" },
              { id: "b", text: "CO₂ produced divided by O₂ consumed" },
              { id: "c", text: "O₂ consumed divided by CO₂ produced" },
              { id: "d", text: "ATP produced per glucose" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "RQ", statement: "RQ = CO₂ produced / O₂ consumed." },
            ],
            steps: [
              { reasoning: "Recall formula.", working: "RQ = \\text{CO}_2/\\text{O}_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** CO₂ produced divided by O₂ consumed",
            commonErrors: ["Inverting — CO₂ is numerator, O₂ is denominator."],
          },
        },
        {
          id: "olbio-u5-respiratory-quotient-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the RQ for carbohydrate respiration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "RQ values", statement: "Carb=1.0, fat≈0.7, protein≈0.9." },
            ],
            steps: [
              { reasoning: "Give value.", working: "RQ = 1.0", marks: 1, markCode: "M" },
              { reasoning: "State it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "RQ = 1.0 for carbohydrate (equal volumes of CO₂ and O₂).",
            commonErrors: ["Choosing 0.7 — that's fat."],
          },
        },
        {
          id: "olbio-u5-respiratory-quotient-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A subject consumes 300 cm³ O₂ and produces 270 cm³ CO₂. Calculate the RQ and state which substrate is likely being respired.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "RQ calculation", statement: "RQ = CO₂/O₂; values indicate substrate." },
            ],
            steps: [
              { reasoning: "Apply formula.", working: "RQ = \\frac{270}{300}", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "RQ = 0.9", marks: 1, markCode: "M" },
              { reasoning: "Match to substrate.", working: "\\text{protein}", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "RQ = 0.9 — suggests protein is the main respiratory substrate.",
            commonErrors: ["Giving RQ without linking to substrate type."],
          },
        },
        {
          id: "olbio-u5-respiratory-quotient-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the body's physiological response to exercise.",
          parts: [
            { label: "a", prompt: "State three changes in the body during exercise.", marks: 3 },
            { label: "b", prompt: "Explain why each change occurs.", marks: 4 },
            { label: "c", prompt: "Describe what happens after exercise stops.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Exercise response", statement: "Heart rate↑, breathing↑, blood flow to muscles↑, lactate/O₂ debt after." },
            ],
            steps: [
              { part: "a", reasoning: "Heart rate increases.", working: "\\text{HR}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Breathing rate increases.", working: "\\text{breathing}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Blood flow redirected to muscles.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "HR: deliver more O₂/glucose.", working: "\\text{O}_2 \\text{ delivery}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Breathing: more O₂ in, CO₂ out.", working: "\\text{gas exchange}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Blood flow: muscles need fuel.", working: "\\text{muscle fuel}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete explanations.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Continued heavy breathing.", working: "\\text{breathing}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Repays oxygen debt (oxidise lactate).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) HR, breathing, blood flow (b) O₂/glucose delivery, gas exchange, muscle fuel (c) oxygen debt repaid",
            commonErrors: ["In (c) saying 'everything stops' — oxygen debt continues after exercise."],
          },
        },
        {
          id: "olbio-u5-respiratory-quotient-q5", difficulty: "foundation", totalMarks: 1,
          stem: "How is respiratory quotient (RQ) calculated?",
          response: { type: "mcq", choices: [ { id: "a", text: "ATP produced divided by glucose" }, { id: "b", text: "Energy released divided by time" }, { id: "c", text: "O2 consumed divided by CO2 produced" }, { id: "d", text: "CO2 produced divided by O2 consumed" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "RQ formula", statement: "RQ = volume of CO2 produced / volume of O2 consumed." }], steps: [{ reasoning: "Recall the ratio.", working: "RQ=\\frac{\\text{CO}_2}{\\text{O}_2}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** CO2 produced divided by O2 consumed", commonErrors: ["The ratio is inverted in the wrong choices."] },
        },
        {
          id: "olbio-u5-respiratory-quotient-q6", difficulty: "foundation", totalMarks: 1,
          stem: "What is the RQ for carbohydrate respiration?",
          response: { type: "mcq", choices: [ { id: "a", text: "1.0" }, { id: "b", text: "1.2" }, { id: "c", text: "0.9" }, { id: "d", text: "0.7" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "RQ values", statement: "Carbohydrate RQ is about 1.0, fat about 0.7 and protein about 0.9." }], steps: [{ reasoning: "Recall the value.", working: "RQ=1.0", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 1.0", commonErrors: ["0.7 is the approximate RQ for fat."] },
        },
        {
          id: "olbio-u5-respiratory-quotient-q7", difficulty: "core", totalMarks: 1,
          stem: "Which substrate is suggested by an RQ of about 0.7?",
          response: { type: "mcq", choices: [ { id: "a", text: "Alcohol" }, { id: "b", text: "Protein" }, { id: "c", text: "Fat" }, { id: "d", text: "Carbohydrate" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "RQ interpretation", statement: "An RQ near 0.7 suggests fat is the main respiratory substrate." }], steps: [{ reasoning: "Match value to substrate.", working: "RQ\\approx0.7", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Fat", commonErrors: ["Protein gives a higher RQ near 0.9."] },
        },
        {
          id: "olbio-u5-respiratory-quotient-q8", difficulty: "core", totalMarks: 1,
          stem: "A measured RQ of about 0.9 most closely indicates respiration of:",
          response: { type: "mcq", choices: [ { id: "a", text: "Fat only" }, { id: "b", text: "Protein" }, { id: "c", text: "Pure carbohydrate" }, { id: "d", text: "Water" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "RQ interpretation", statement: "An RQ near 0.9 suggests protein is a major respiratory substrate." }], steps: [{ reasoning: "Match value to substrate.", working: "RQ\\approx0.9", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Protein", commonErrors: ["0.9 is not the fat value."] },
        },
        {
          id: "olbio-u5-respiratory-quotient-q9", difficulty: "challenge", totalMarks: 1,
          stem: "What does a lower RQ generally indicate about the substrate mixture?",
          response: { type: "mcq", choices: [ { id: "a", text: "No respiration is occurring" }, { id: "b", text: "A greater contribution from carbohydrate" }, { id: "c", text: "A greater contribution from fat" }, { id: "d", text: "Only protein is respired" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "RQ and substrate", statement: "Lower RQ values indicate more fat oxidation relative to carbohydrate." }], steps: [{ reasoning: "Relate low RQ to fat oxidation.", working: "\\text{fat} \\to RQ<1", marks: 1, markCode: "M" }], finalAnswer: "**(a)** A greater contribution from fat", commonErrors: ["Lower RQ does not mean no respiration."] },
        },
        {
          id: "olbio-u5-respiratory-quotient-q10", difficulty: "challenge", totalMarks: 1,
          stem: "During prolonged exercise, which change is most expected in the gases exchanged?",
          response: { type: "mcq", choices: [ { id: "a", text: "Oxygen consumption stops" }, { id: "b", text: "Less carbon dioxide is produced" }, { id: "c", text: "More oxygen is consumed and more carbon dioxide is produced" }, { id: "d", text: "Only nitrogen is exchanged" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Exercise gas exchange", statement: "Exercise increases oxygen uptake and carbon dioxide production." }], steps: [{ reasoning: "Link exercise to respiration rate.", working: "\\text{O}_2 \\uparrow,\\ \\text{CO}_2 \\uparrow", marks: 1, markCode: "M" }], finalAnswer: "**(a)** More oxygen is consumed and more carbon dioxide is produced", commonErrors: ["Exercise increases gas exchange; it does not stop it."] },
        },
        {
          id: "olbio-u5-respiratory-quotient-q11", difficulty: "foundation", totalMarks: 1,
          stem: "A person consumes 300 cm3 of oxygen and produces 270 cm3 of carbon dioxide. Calculate the RQ.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.9 }] },
          markscheme: { principles: [{ kind: "property", name: "RQ calculation", statement: "RQ is carbon dioxide produced divided by oxygen consumed." }], steps: [{ reasoning: "Divide CO2 by O2.", working: "270 \\div 300 = 0.9", marks: 1, markCode: "M" }], finalAnswer: "RQ = 0.9" },
        },
        {
          id: "olbio-u5-respiratory-quotient-q12", difficulty: "core", totalMarks: 2,
          stem: "An athlete consumes 250 cm3 O2 and produces 250 cm3 CO2. What is the RQ and likely substrate?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.0 }, { label: "b", answer: 1 }] },
          markscheme: { principles: [{ kind: "property", name: "RQ calculation", statement: "An RQ of 1.0 indicates carbohydrate respiration." }], steps: [{ reasoning: "Calculate RQ.", working: "250 \\div 250 = 1.0", marks: 1, markCode: "M" }, { reasoning: "Match RQ 1.0 to carbohydrate.", working: "RQ=1.0 \\Rightarrow \\text{carbohydrate}", marks: 1, markCode: "A" }], finalAnswer: "RQ = 1.0; carbohydrate" },
        },
        {
          id: "olbio-u5-respiratory-quotient-q13", difficulty: "core", totalMarks: 1,
          stem: "A fasting subject produces 70 cm3 CO2 while consuming 100 cm3 O2. Calculate the RQ.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.7 }] },
          markscheme: { principles: [{ kind: "property", name: "RQ calculation", statement: "RQ = CO2 produced / O2 consumed." }], steps: [{ reasoning: "Divide CO2 by O2.", working: "70 \\div 100 = 0.7", marks: 1, markCode: "M" }], finalAnswer: "RQ = 0.7" },
        },
        {
          id: "olbio-u5-respiratory-quotient-q14", difficulty: "challenge", totalMarks: 2,
          stem: "If 240 cm3 CO2 is produced from 300 cm3 O2, calculate RQ and identify the substrate using standard values.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.8 }, { label: "b", answer: 1 }] },
          markscheme: { principles: [{ kind: "property", name: "RQ interpretation", statement: "Standard values are carbohydrate 1.0, fat 0.7 and protein 0.9." }], steps: [{ reasoning: "Calculate RQ.", working: "240 \\div 300 = 0.8", marks: 1, markCode: "M" }, { reasoning: "RQ 0.8 is closest to protein among the listed values.", working: "RQ=0.8 \\approx 0.9 \\text{ protein}", marks: 1, markCode: "A" }], finalAnswer: "RQ = 0.8; protein-like substrate" },
        },
        {
          id: "olbio-u5-respiratory-quotient-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how respiratory quotient can be used to infer which food is being respired.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "RQ interpretation", statement: "RQ values indicate the relative contribution of different respiratory substrates." }], steps: [{ reasoning: "RQ is calculated as CO2 produced divided by O2 consumed.", working: "RQ=\\frac{\\text{CO}_2}{\\text{O}_2}", marks: 1, markCode: "M" }, { reasoning: "Different substrates give characteristic values: carbohydrate about 1.0, protein about 0.9 and fat about 0.7.", working: "1.0,0.9,0.7", marks: 1, markCode: "M" }, { reasoning: "A measured value close to one of these indicates the dominant substrate.", working: "\\text{match value}", marks: 1, markCode: "M" }, { reasoning: "Conclude that RQ gives information about respiratory substrate.", working: "\\text{substrate inference}", marks: 1, markCode: "A" }], finalAnswer: "RQ = CO2/O2; values near 1.0, 0.9 or 0.7 suggest carbohydrate, protein or fat respectively.", commonErrors: ["Treating RQ as a measure of energy rather than substrate."] },
        },
        {
          id: "olbio-u5-respiratory-quotient-q16", difficulty: "challenge", totalMarks: 9,
          stem: "A sports scientist measures gas exchange before and after exercise.",
          parts: [
            { label: "a", prompt: "State the formula for respiratory quotient.", marks: 1 },
            { label: "b", prompt: "Calculate RQ when 220 cm3 CO2 is produced from 250 cm3 O2.", marks: 2 },
            { label: "c", prompt: "State the approximate RQ values for carbohydrate, fat and protein.", marks: 3 },
            { label: "d", prompt: "Explain one reason breathing rate increases during exercise.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "RQ and exercise", statement: "RQ links gas volumes to substrate; exercise increases ventilation to meet respiratory demand." }], steps: [
            { part: "a", reasoning: "RQ = volume of CO2 produced / volume of O2 consumed.", working: "RQ=\\frac{\\text{CO}_2}{\\text{O}_2}", marks: 1, markCode: "A" },
            { part: "b", reasoning: "RQ = 220 / 250.", working: "220/250", marks: 1, markCode: "M" },
            { part: "b", reasoning: "RQ = 0.88, close to protein.", working: "RQ=0.88", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Carbohydrate about 1.0.", working: "1.0", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Fat about 0.7.", working: "0.7", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Protein about 0.9.", working: "0.9", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Muscles respire faster and need more oxygen.", working: "\\text{more O}_2", marks: 1, markCode: "M" },
            { part: "d", reasoning: "More carbon dioxide must be removed from the blood.", working: "\\text{CO}_2 \\text{ removal}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Breathing rate rises to increase gas exchange and meet demand.", working: "\\text{rate rises}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) RQ=CO2/O2 (b) 0.88 (c) 1.0,0.7,0.9 (d) more O2 needed and CO2 removed", commonErrors: ["Inverting CO2 and O2 in the RQ formula."] },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u5-respiration-notes",
      title: "Respiration — revision notes",
      summary: "Aerobic and anaerobic respiration equations, yields, and uses of energy.",
      sections: [
        {
          heading: "Equations",
          body: "Aerobic: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (mitochondria). Anaerobic (animals): glucose → lactate + energy. Anaerobic (yeast): glucose → ethanol + CO₂ + energy.",
        },
        {
          heading: "Key differences",
          body: "Aerobic: needs O₂, ~38 ATP, full oxidation. Anaerobic: no O₂, ~2 ATP, partial oxidation. Oxygen debt = extra O₂ to clear lactate after exercise.",
        },
        {
          heading: "Exam technique",
          body: "- Always specify the organism for anaerobic products (animals=lactate, yeast=ethanol+CO₂).\n- Uses of energy: muscle contraction, protein synthesis, cell division, active transport, nerve impulses, temperature regulation.",
        },
      ],
    },
  ],
};
