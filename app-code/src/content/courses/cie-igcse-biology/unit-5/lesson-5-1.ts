import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "cieb-u5-lesson-5-1",
  code: "5-1",
  title: "Respiration",
  goal: "I CAN describe aerobic and anaerobic respiration, compare their efficiency, and explain uses of energy in organisms.",
  standards: ["0653 5.1"],
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
      id: "cieb-u5-aerobic-respiration",
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
          id: "cieb-u5-aerobic-respiration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products of aerobic respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethanol and CO₂" },
              { id: "b", text: "Lactic acid" },
              { id: "c", text: "Carbon dioxide and water" },
              { id: "d", text: "Oxygen and glucose" },
            ],
            correctChoiceId: "c",
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
          id: "cieb-u5-aerobic-respiration-q2",
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
          id: "cieb-u5-aerobic-respiration-q3",
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
          id: "cieb-u5-aerobic-respiration-q4",
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
          id: "cieb-u5-aerobic-respiration-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Aerobic respiration mainly occurs in which cell structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell wall" },
              { id: "b", text: "Ribosome" },
              { id: "c", text: "Nucleus" },
              { id: "d", text: "Mitochondrion" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Site of aerobic respiration", statement: "Mitochondria." },
            ],
            steps: [
              { reasoning: "Recall the site.", working: "\\text{mitochondria}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Mitochondrion",
            commonErrors: ["Choosing chloroplast — that's photosynthesis."],
          },
        },
        {
          id: "cieb-u5-aerobic-respiration-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which substances are the reactants of aerobic respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethanol and carbon dioxide" },
              { id: "b", text: "Carbon dioxide and water" },
              { id: "c", text: "Lactic acid and oxygen" },
              { id: "d", text: "Glucose and oxygen" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Aerobic reactants", statement: "Glucose + O₂ → CO₂ + H₂O + energy." },
            ],
            steps: [
              { reasoning: "Recall the equation.", working: "\\text{glucose} + \\text{O}_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Glucose and oxygen",
            commonErrors: ["Choosing CO₂/water — those are products."],
          },
        },
        {
          id: "cieb-u5-aerobic-respiration-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Oxygen is essential for aerobic respiration because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stops lactic acid forming" },
              { id: "b", text: "Acts as the final electron acceptor, allowing full oxidation of glucose" },
              { id: "c", text: "Is a reactant that becomes glucose" },
              { id: "d", text: "Heats the mitochondria" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Oxygen role", statement: "Final electron acceptor → complete oxidation → max ATP." },
            ],
            steps: [
              { reasoning: "Recall oxygen's role.", working: "\\text{final electron acceptor}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Acts as the final electron acceptor, allowing full oxidation of glucose",
            commonErrors: ["Saying 'oxygen makes energy' directly — it enables the final stage of oxidation."],
          },
        },
        {
          id: "cieb-u5-aerobic-respiration-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Aerobic respiration produces about 38 ATP molecules per glucose. Calculate the ATP produced from 4 glucose molecules.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 152, unit: "ATP" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "ATP yield", statement: "$38 \\times 4 = 152$" },
            ],
            steps: [
              { reasoning: "Multiply ATP per glucose by number of glucose.", working: "38 \\times 4", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "152\\,\\text{ATP}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "152 ATP",
            commonErrors: ["Adding instead of multiplying."],
          },
        },
        {
          id: "cieb-u5-aerobic-respiration-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cell respires 10 glucose molecules aerobically at about 38 ATP each. Calculate the total ATP produced.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 380, unit: "ATP" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total ATP", statement: "$38 \\times 10 = 380$" },
            ],
            steps: [
              { reasoning: "Multiply yield by glucose count.", working: "38 \\times 10", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "380\\,\\text{ATP}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "380 ATP",
            commonErrors: ["Using the anaerobic yield (~2) by mistake."],
          },
        },
        {
          id: "cieb-u5-aerobic-respiration-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For each molecule of glucose fully respired aerobically, how many molecules of carbon dioxide are produced?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6, unit: "molecules" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Aerobic stoichiometry", statement: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy." },
            ],
            steps: [
              { reasoning: "Read the equation.", working: "6\\,\\text{CO}_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "6",
            commonErrors: ["Answering 1 — ignoring balanced coefficients."],
          },
        },
        {
          id: "cieb-u5-aerobic-respiration-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Aerobic respiration yields about 38 ATP per glucose while anaerobic yields about 2 ATP. Calculate the difference in ATP yield per glucose molecule.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 36, unit: "ATP" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Yield difference", statement: "$38 - 2 = 36$" },
            ],
            steps: [
              { reasoning: "Subtract anaerobic from aerobic yield.", working: "38 - 2", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "36\\,\\text{ATP}", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "36 ATP",
            commonErrors: ["Computing the ratio (19×) instead of the difference."],
          },
        },
        {
          id: "cieb-u5-aerobic-respiration-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two uses of the energy (ATP) released by respiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Uses of ATP", statement: "Muscle contraction, protein synthesis, cell division, active transport, nerve impulses, temperature regulation." },
            ],
            steps: [
              { reasoning: "Give two uses.", working: "\\text{muscle contraction; protein synthesis}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Muscle contraction and protein synthesis (also: cell division, active transport, nerve impulse transmission, maintaining body temperature).",
            commonErrors: ["Saying 'energy is stored as glucose' — ATP is the immediate usable form."],
          },
        },
        {
          id: "cieb-u5-aerobic-respiration-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An 'oxygen debt' occurs after vigorous exercise because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CO₂ cannot be produced" },
              { id: "b", text: "Extra oxygen is needed to oxidise the lactic acid accumulated in muscles" },
              { id: "c", text: "The lungs stop working" },
              { id: "d", text: "Glucose is used up completely" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Oxygen debt", statement: "Post-exercise O₂ needed to oxidise accumulated lactate." },
            ],
            steps: [
              { reasoning: "Recall the debt mechanism.", working: "\\text{oxidise lactate}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Extra oxygen is needed to oxidise the lactic acid accumulated in muscles",
            commonErrors: ["Saying 'to get rid of CO₂' — the debt is about supplying O₂ for lactate."],
          },
        },
        {
          id: "cieb-u5-aerobic-respiration-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which process releases more energy per molecule of glucose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diffusion" },
              { id: "b", text: "Aerobic respiration" },
              { id: "c", text: "Anaerobic respiration" },
              { id: "d", text: "Photosynthesis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Energy yield comparison", statement: "Aerobic (~38 ATP) >> anaerobic (~2 ATP)." },
            ],
            steps: [
              { reasoning: "Compare yields.", working: "\\text{aerobic} \\gg \\text{anaerobic}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Aerobic respiration",
            commonErrors: ["Choosing anaerobic — it yields far less ATP."],
          },
        },
        {
          id: "cieb-u5-aerobic-respiration-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "ATP stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adenosine diphosphate" },
              { id: "b", text: "Amino acid phosphate" },
              { id: "c", text: "Adenosine triphosphate" },
              { id: "d", text: "Adenine triphosphate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "ATP", statement: "Adenosine triphosphate — the cell's energy currency." },
            ],
            steps: [
              { reasoning: "Recall the acronym.", working: "\\text{adenosine triphosphate}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Adenosine triphosphate",
            commonErrors: ["Confusing with ADP (diphosphate)."],
          },
        },
        {
          id: "cieb-u5-aerobic-respiration-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why aerobic respiration is described as more efficient than anaerobic respiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Efficiency comparison", statement: "Aerobic fully oxidises glucose using O₂ → ~38 ATP; anaerobic partially oxidises → ~2 ATP." },
            ],
            steps: [
              { reasoning: "Aerobic respiration fully oxidises glucose.", working: "\\text{full oxidation}", marks: 1, markCode: "M" },
              { reasoning: "Oxygen acts as final electron acceptor enabling complete breakdown.", working: "\\text{O}_2 \\text{ acceptor}", marks: 1, markCode: "M" },
              { reasoning: "Compare ATP yields: ~38 vs ~2 per glucose.", working: "\\sim 38 \\text{ vs } \\sim 2", marks: 1, markCode: "M" },
              { reasoning: "Conclude: far more energy released aerobically.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Aerobic respiration uses oxygen to fully oxidise glucose, releasing about 38 ATP per glucose; anaerobic only partially breaks it down releasing about 2 ATP, so aerobic is far more efficient.",
            commonErrors: ["Saying anaerobic 'produces no energy' — it produces some, just much less."],
          },
        },
      ],
    },
    {
      id: "cieb-u5-anaerobic-respiration",
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
          id: "cieb-u5-anaerobic-respiration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is produced by anaerobic respiration in human muscles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethanol and CO₂" },
              { id: "b", text: "Only CO₂" },
              { id: "c", text: "Lactic acid" },
              { id: "d", text: "Water and oxygen" },
            ],
            correctChoiceId: "c",
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
          id: "cieb-u5-anaerobic-respiration-q2",
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
          id: "cieb-u5-anaerobic-respiration-q3",
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
          id: "cieb-u5-anaerobic-respiration-q4",
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
          id: "cieb-u5-anaerobic-respiration-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is fermentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aerobic respiration in human muscles" },
              { id: "b", text: "The complete oxidation of glucose" },
              { id: "c", text: "Anaerobic respiration in yeast producing ethanol and CO₂" },
              { id: "d", text: "Lactic acid production in yeast" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fermentation", statement: "Anaerobic respiration in yeast/microorganisms producing ethanol + CO₂ + energy." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{yeast} \\to \\text{ethanol} + \\text{CO}_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Anaerobic respiration in yeast producing ethanol and CO₂",
            commonErrors: ["Choosing lactic acid — that's animal anaerobic respiration, not fermentation."],
          },
        },
        {
          id: "cieb-u5-anaerobic-respiration-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Approximately how many ATP molecules are produced per glucose molecule during anaerobic respiration?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "ATP" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Anaerobic ATP yield", statement: "Anaerobic respiration yields only ~2 ATP per glucose because glucose is partially oxidised." },
            ],
            steps: [
              { reasoning: "Recall the anaerobic yield.", working: "\\sim 2 \\text{ ATP}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "About 2 ATP per glucose molecule.",
            commonErrors: ["Quoting the aerobic yield (~38 ATP) instead."],
          },
        },
        {
          id: "cieb-u5-anaerobic-respiration-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In humans, anaerobic respiration occurs mainly when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The person is asleep" },
              { id: "b", text: "During photosynthesis" },
              { id: "c", text: "When plenty of oxygen is available" },
              { id: "d", text: "Oxygen supply cannot meet demand during vigorous exercise" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Anaerobic trigger", statement: "Anaerobic respiration occurs when O₂ demand exceeds supply." },
            ],
            steps: [
              { reasoning: "Recall the condition.", working: "\\text{O}_2 \\text{ deficit}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Oxygen supply cannot meet demand during vigorous exercise",
            commonErrors: ["Choosing 'plenty of oxygen' — that's when aerobic respiration occurs."],
          },
        },
        {
          id: "cieb-u5-anaerobic-respiration-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the word equation for anaerobic respiration in human muscle cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Animal anaerobic equation", statement: "Glucose → lactic acid + small amount of energy." },
            ],
            steps: [
              { reasoning: "Give reactants and products.", working: "\\text{glucose} \\to \\text{lactic acid}", marks: 1, markCode: "M" },
              { reasoning: "Include energy released.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Glucose → lactic acid + a small amount of energy.",
            commonErrors: ["Writing ethanol and CO₂ — that's yeast, not muscle cells."],
          },
        },
        {
          id: "cieb-u5-anaerobic-respiration-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What causes muscle fatigue and cramps during intense exercise?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lack of carbon dioxide" },
              { id: "b", text: "Too much oxygen in the muscles" },
              { id: "c", text: "Build-up of lactic acid" },
              { id: "d", text: "Complete absence of glucose" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Lactic acid effects", statement: "Accumulated lactic acid causes muscle fatigue and cramps." },
            ],
            steps: [
              { reasoning: "Recall the effect.", working: "\\text{lactic acid} \\uparrow \\to \\text{fatigue}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Build-up of lactic acid",
            commonErrors: ["Attributing fatigue to oxygen surplus — oxygen is actually in deficit."],
          },
        },
        {
          id: "cieb-u5-anaerobic-respiration-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Aerobic respiration yields about 38 ATP per glucose and anaerobic respiration about 2 ATP per glucose. How many times more ATP does aerobic respiration produce per glucose?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 19, unit: "×" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "ATP yield comparison", statement: "'Times more' requires division of the two yields." },
            ],
            steps: [
              { reasoning: "Divide aerobic yield by anaerobic yield.", working: "\\frac{38}{2}", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 19", marks: 1, markCode: "A" },
            ],
            finalAnswer: "19 times more ATP per glucose.",
            commonErrors: ["Subtracting (38 − 2 = 36) instead of dividing for 'times more'."],
          },
        },
        {
          id: "cieb-u5-anaerobic-respiration-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is meant by 'oxygen debt'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen stored in the muscles" },
              { id: "b", text: "Extra oxygen needed after exercise to oxidise lactic acid" },
              { id: "c", text: "Reduced oxygen in expired air" },
              { id: "d", text: "A shortage of oxygen molecules in the blood" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oxygen debt", statement: "Extra O₂ needed after exercise to oxidise accumulated lactic acid." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{extra O}_2 \\text{ to clear lactate}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Extra oxygen needed after exercise to oxidise lactic acid",
            commonErrors: ["Thinking the debt occurs during exercise — it is repaid afterwards."],
          },
        },
        {
          id: "cieb-u5-anaerobic-respiration-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what happens to lactic acid after vigorous exercise stops.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Lactate clearance", statement: "Lactic acid is oxidised aerobically once oxygen supply recovers — this is the oxygen debt." },
            ],
            steps: [
              { reasoning: "Lactic acid accumulated in muscles during anaerobic respiration.", working: "\\text{lactate build-up}", marks: 1, markCode: "M" },
              { reasoning: "When exercise stops, oxygen is again available.", working: "\\text{O}_2 \\text{ available}", marks: 1, markCode: "M" },
              { reasoning: "Lactate is oxidised to CO₂ and water; continued breathing repays the oxygen debt.", working: "\\text{lactate} \\to \\text{CO}_2 + \\text{H}_2\\text{O}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lactic acid accumulated in the muscles during exercise is oxidised aerobically once oxygen supply recovers, using the extra oxygen obtained by continued heavy breathing — repaying the oxygen debt.",
            commonErrors: ["Saying lactic acid remains in the muscles permanently — it is cleared aerobically."],
          },
        },
        {
          id: "cieb-u5-anaerobic-respiration-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In yeast fermentation, one molecule of glucose produces two molecules of carbon dioxide. How many molecules of CO₂ are produced from five molecules of glucose?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "CO₂" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fermentation stoichiometry", statement: "Glucose → ethanol + 2CO₂, so 2 CO₂ per glucose." },
            ],
            steps: [
              { reasoning: "Use the 1:2 ratio.", working: "5 \\times 2", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 molecules of CO₂.",
            commonErrors: ["Forgetting the 1:2 ratio from the equation."],
          },
        },
        {
          id: "cieb-u5-anaerobic-respiration-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why yeast is used in bread-making and brewing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Uses of fermentation", statement: "Yeast fermentation produces CO₂ (dough rising) and ethanol (alcohol)." },
            ],
            steps: [
              { reasoning: "Yeast carries out anaerobic respiration (fermentation).", working: "\\text{fermentation}", marks: 1, markCode: "M" },
              { reasoning: "CO₂ produced makes bread dough rise.", working: "\\text{CO}_2 \\to \\text{dough rises}", marks: 1, markCode: "M" },
              { reasoning: "Ethanol produced is the alcohol in brewing.", working: "\\text{ethanol} \\to \\text{alcohol}", marks: 1, markCode: "M" },
              { reasoning: "Conclude both products are useful.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yeast ferments sugar anaerobically, producing CO₂ which makes bread dough rise and ethanol which provides the alcohol in brewing.",
            commonErrors: ["Saying yeast needs oxygen for fermentation — it is anaerobic."],
          },
        },
        {
          id: "cieb-u5-anaerobic-respiration-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates anaerobic respiration in yeast by measuring the volume of gas produced at different temperatures.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Predict the effect of increasing temperature on the rate of gas production, giving a reason.", marks: 2 },
            { label: "c", prompt: "Explain why temperature affects the rate of anaerobic respiration.", marks: 3 },
            { label: "d", prompt: "Suggest one control variable and explain why it is needed.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Yeast fermentation investigation", statement: "Gas (CO₂) volume measures respiration rate; temperature affects enzyme activity." },
              { kind: "property", name: "Temperature and enzymes", statement: "Higher temperature increases enzyme activity up to an optimum." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: temperature. Dependent: volume of gas produced (CO₂).", working: "\\text{temp vs gas volume}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rate increases with temperature (up to optimum).", working: "\\text{rate} \\uparrow", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reason: faster enzyme-controlled respiration.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Respiration is controlled by enzymes.", working: "\\text{enzymes}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Higher temperature → more collisions → faster reactions.", working: "\\text{collision rate} \\uparrow", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete explanation.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Control e.g. amount of yeast/sugar, volume of water.", working: "\\text{control variable}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Keeps the comparison fair.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) temperature vs gas volume (b) rate increases — faster enzyme activity (c) enzymes control respiration; more collisions at higher temperature (d) e.g. same amount of yeast — fair comparison",
            commonErrors: ["In (b) predicting a decrease — rate rises with temperature until the optimum."],
          },
        },
        {
          id: "cieb-u5-anaerobic-respiration-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "During anaerobic respiration in yeast, carbon dioxide is produced but no oxygen is consumed. If a yeast culture produces 300 cm³ of CO₂, what volume of O₂ is consumed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0, unit: "cm³" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Anaerobic gas exchange", statement: "Anaerobic respiration does not use oxygen; O₂ consumption is zero." },
            ],
            steps: [
              { reasoning: "Anaerobic respiration requires no oxygen.", working: "\\text{no O}_2 \\text{ consumed}", marks: 1, markCode: "M" },
              { reasoning: "State the volume.", working: "0 \\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0 cm³ — anaerobic respiration does not consume oxygen.",
            commonErrors: ["Assuming equal volumes of O₂ and CO₂ — that applies to aerobic respiration of carbohydrate."],
          },
        },
      ],
    },
    {
      id: "cieb-u5-respiratory-quotient",
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
          id: "cieb-u5-respiratory-quotient-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the respiratory quotient (RQ)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "O₂ consumed divided by CO₂ produced" },
              { id: "b", text: "CO₂ produced divided by O₂ consumed" },
              { id: "c", text: "Energy released per litre of O₂" },
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
          id: "cieb-u5-respiratory-quotient-q2",
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
          id: "cieb-u5-respiratory-quotient-q3",
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
          id: "cieb-u5-respiratory-quotient-q4",
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
          id: "cieb-u5-respiratory-quotient-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which respiratory substrate has an RQ of about 0.7?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water" },
              { id: "b", text: "Fat" },
              { id: "c", text: "Protein" },
              { id: "d", text: "Carbohydrate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "RQ values", statement: "Carbohydrate RQ = 1.0, fat ≈ 0.7, protein ≈ 0.9." },
            ],
            steps: [
              { reasoning: "Match value to substrate.", working: "RQ \\approx 0.7 \\to \\text{fat}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Fat",
            commonErrors: ["Choosing protein — protein has RQ ≈ 0.9."],
          },
        },
        {
          id: "cieb-u5-respiratory-quotient-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person consumes 200 cm³ of O₂ and produces 150 cm³ of CO₂. Calculate the respiratory quotient.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.75 }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "RQ calculation", statement: "RQ = volume of CO₂ produced / volume of O₂ consumed." },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "RQ = \\frac{150}{200}", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 0.75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "RQ = 0.75",
            commonErrors: ["Inverting the ratio — CO₂ is the numerator, O₂ the denominator."],
          },
        },
        {
          id: "cieb-u5-respiratory-quotient-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the approximate RQ for fat and explain what a value below 1.0 generally indicates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "RQ interpretation", statement: "Fat RQ ≈ 0.7; RQ < 1 means more fat is being oxidised relative to carbohydrate." },
            ],
            steps: [
              { reasoning: "Give the RQ value for fat.", working: "RQ \\approx 0.7", marks: 1, markCode: "M" },
              { reasoning: "Explain meaning of RQ < 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fat RQ ≈ 0.7; an RQ below 1.0 indicates that more fat (rather than carbohydrate) is being respired.",
            commonErrors: ["Saying RQ < 1 means 'less respiration' — it indicates the substrate type."],
          },
        },
        {
          id: "cieb-u5-respiratory-quotient-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An RQ of approximately 0.7 suggests the body is mainly respiring:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protein" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Fat" },
              { id: "d", text: "Carbohydrate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "RQ and substrate", statement: "RQ ≈ 0.7 corresponds to fat respiration." },
            ],
            steps: [
              { reasoning: "Match RQ to substrate.", working: "0.7 \\to \\text{fat}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Fat",
            commonErrors: ["Choosing carbohydrate — that has RQ = 1.0."],
          },
        },
        {
          id: "cieb-u5-respiratory-quotient-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A subject consumes 300 cm³ of O₂ and produces 210 cm³ of CO₂. Calculate the respiratory quotient.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.7 }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "RQ calculation", statement: "RQ = CO₂ produced / O₂ consumed." },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "RQ = \\frac{210}{300}", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 0.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "RQ = 0.7",
            commonErrors: ["Giving 1.43 by inverting the ratio."],
          },
        },
        {
          id: "cieb-u5-respiratory-quotient-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the respiratory quotient can be used to investigate which food is being respired.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "RQ as diagnostic", statement: "Different substrates give different RQ values, so RQ reveals the fuel being respired." },
            ],
            steps: [
              { reasoning: "Measure volumes of O₂ consumed and CO₂ produced.", working: "\\text{measure O}_2, \\text{CO}_2", marks: 1, markCode: "M" },
              { reasoning: "Calculate RQ = CO₂/O₂.", working: "RQ = \\frac{\\text{CO}_2}{\\text{O}_2}", marks: 1, markCode: "M" },
              { reasoning: "Compare the value with known RQs (carb 1.0, fat 0.7, protein 0.9).", working: "\\text{compare values}", marks: 1, markCode: "M" },
              { reasoning: "Conclude which substrate is being respired.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Measure the volumes of O₂ consumed and CO₂ produced, calculate RQ = CO₂/O₂, and compare it with the known values for carbohydrate (1.0), fat (0.7) and protein (0.9) to identify the substrate being respired.",
            commonErrors: ["Describing RQ without linking it to substrate identification."],
          },
        },
        {
          id: "cieb-u5-respiratory-quotient-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "During exercise, which change in the body is expected?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Blood flow to muscles decreases" },
              { id: "b", text: "Heart rate increases" },
              { id: "c", text: "Breathing rate stops" },
              { id: "d", text: "Heart rate decreases" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Exercise response", statement: "Heart rate and breathing rate increase to deliver more O₂ and remove CO₂." },
            ],
            steps: [
              { reasoning: "Recall the response.", working: "\\text{HR} \\uparrow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Heart rate increases",
            commonErrors: ["Choosing a decrease — the body needs more oxygen during exercise."],
          },
        },
        {
          id: "cieb-u5-respiratory-quotient-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "During exercise, a subject consumes 400 cm³ of O₂ and produces 320 cm³ of CO₂. Calculate the respiratory quotient.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.8 }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "RQ calculation", statement: "RQ = CO₂ produced / O₂ consumed." },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "RQ = \\frac{320}{400}", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 0.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "RQ = 0.8",
            commonErrors: ["Inverting the ratio — CO₂ must be the numerator."],
          },
        },
        {
          id: "cieb-u5-respiratory-quotient-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why breathing rate increases during exercise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Exercise and breathing", statement: "Working muscles need more O₂ and produce more CO₂, so ventilation increases." },
            ],
            steps: [
              { reasoning: "Muscles respire faster and need more O₂.", working: "\\text{O}_2 \\text{ demand} \\uparrow", marks: 1, markCode: "M" },
              { reasoning: "More CO₂ and possibly lactic acid must be removed.", working: "\\text{CO}_2 \\uparrow", marks: 1, markCode: "M" },
              { reasoning: "Breathing rate rises to increase gas exchange.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Working muscles need more oxygen for aerobic respiration and produce more carbon dioxide; the breathing rate increases so that more oxygen enters and more carbon dioxide leaves the lungs.",
            commonErrors: ["Saying 'to get rid of lactic acid through the lungs' — lactate is cleared by oxidation, not exhaled."],
          },
        },
        {
          id: "cieb-u5-respiratory-quotient-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The approximate RQ for protein respiration is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1.0" },
              { id: "b", text: "0.7" },
              { id: "c", text: "0.9" },
              { id: "d", text: "0.2" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "RQ values", statement: "Protein RQ ≈ 0.9." },
            ],
            steps: [
              { reasoning: "Recall the value.", working: "RQ \\approx 0.9", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 0.9",
            commonErrors: ["Choosing 0.7 — that's fat."],
          },
        },
        {
          id: "cieb-u5-respiratory-quotient-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student measures oxygen consumption and carbon dioxide production at rest and during exercise, and calculates the respiratory quotient in each condition.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Describe how the respiratory quotient is calculated.", marks: 2 },
            { label: "c", prompt: "Explain how the RQ might change between rest and exercise and why.", marks: 3 },
            { label: "d", prompt: "Suggest one way to make the measurements more reliable.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "RQ measurement", statement: "RQ = CO₂ produced / O₂ consumed; substrate mix changes the value." },
              { kind: "property", name: "Exercise and substrate", statement: "Exercise may increase carbohydrate use (RQ closer to 1.0) relative to fat." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: rest vs exercise. Dependent: RQ (or gas volumes).", working: "\\text{condition vs RQ}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "RQ = volume CO₂ produced / volume O₂ consumed.", working: "RQ = \\frac{\\text{CO}_2}{\\text{O}_2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the formula.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "RQ may rise towards 1.0 during exercise.", working: "RQ \\to 1.0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Carbohydrate is used preferentially for rapid energy.", working: "\\text{carbohydrate used}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete explanation.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Repeat measurements and average, or control diet/activity.", working: "\\text{repeat/average}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State improvement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) rest vs exercise, RQ (b) RQ = CO₂/O₂ (c) RQ may rise towards 1.0 — carbohydrate used preferentially (d) repeat and average",
            commonErrors: ["In (c) claiming RQ always falls — the direction depends on which substrate dominates."],
          },
        },
        {
          id: "cieb-u5-respiratory-quotient-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "If a person consumes 500 cm³ of O₂ and produces 500 cm³ of CO₂, calculate the respiratory quotient.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.0 }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "RQ calculation", statement: "RQ = CO₂ produced / O₂ consumed." },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "RQ = \\frac{500}{500}", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 1.0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "RQ = 1.0",
            commonErrors: ["Leaving the answer as a fraction instead of a decimal."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u5-respiration-notes",
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
