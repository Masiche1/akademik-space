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
              { id: "a", text: "Carbon dioxide and water" },
              { id: "b", text: "Lactic acid" },
              { id: "c", text: "Ethanol and CO₂" },
              { id: "d", text: "Oxygen and glucose" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Lactic acid" },
              { id: "b", text: "Ethanol and CO₂" },
              { id: "c", text: "Only CO₂" },
              { id: "d", text: "Water and oxygen" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "CO₂ produced divided by O₂ consumed" },
              { id: "b", text: "O₂ consumed divided by CO₂ produced" },
              { id: "c", text: "ATP produced per glucose" },
              { id: "d", text: "Energy released per litre of O₂" },
            ],
            correctChoiceId: "a",
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
