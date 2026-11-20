import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cils-u3-lesson-3-2",
  code: "3-2",
  title: "Plant nutrition and transport",
  goal: "I CAN explain how plants obtain nutrients, the role of roots, and how water moves through plants.",
  standards: ["0893 Biology: plant nutrition and transport"],
  vocabulary: [
    { term: "Minerals", definition: "Nutrients plants need from soil — nitrates, phosphates, potassium." },
    { term: "Root hair", definition: "Tiny extension of root cell — increases absorption surface." },
    { term: "Transpiration", definition: "Water loss from leaves through stomata — pulls water up." },
    { term: "Osmosis", definition: "Water movement from dilute to concentrated solution across membrane." },
    { term: "Nitrates", definition: "Nitrogen compounds needed for protein synthesis." },
    { term: "Phloem", definition: "Tissue transporting glucose/sugars throughout plant." },
  ],
  concepts: [
    {
      id: "cils-u3-plant-nutrition",
      title: "Plant nutrition",
      skill: "Explain how plants get water, minerals and make food beyond photosynthesis.",
      lesson: {
        sections: [
          {
            heading: "Water and minerals",
            body: "Roots absorb water and dissolved minerals (nitrates, phosphates, potassium, magnesium). Water moves by osmosis into root cells.",
          },
          {
            heading: "Mineral functions",
            body: "- **Nitrates**: protein synthesis — deficiency = yellow leaves\n- **Phosphates**: roots, flowers, seeds\n- **Potassium**: enzyme function, disease resistance\n- **Magnesium**: chlorophyll production",
          },
          {
            heading: "Photosynthesis vs nutrition",
            body: "Photosynthesis makes glucose (carbon source). Minerals provide elements plants can't make — nitrogen, phosphorus needed for proteins/DNA.",
          },
        ],
        keyFormulas: [
          { name: "Plant nutrition", statement: "Water + minerals via roots; glucose via photosynthesis; minerals essential for proteins/chlorophyll." },
        ],
        workedExample: {
          problem: "Why can't plants survive on just water, CO₂ and light?",
          solution: "They need mineral elements (nitrogen, phosphorus) to build proteins and DNA — photosynthesis only makes glucose.",
        },
      },
      questions: [
        {
          id: "cils-u3-nut-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which mineral is needed for chlorophyll production?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Magnesium" },
              { id: "b", text: "Sodium" },
              { id: "c", text: "Calcium" },
              { id: "d", text: "Iron" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Minerals", statement: "Magnesium is central to chlorophyll molecule." },
            ],
            steps: [
              { reasoning: "Magnesium deficiency causes yellow leaves — chlorophyll needs Mg.", working: "Mg", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Magnesium",
            commonErrors: ["Choosing (d) — iron is for humans (hemoglobin), not chlorophyll."],
          },
        },
        {
          id: "cils-u3-nut-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the function of nitrates in plants?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nitrates", statement: "Needed for protein synthesis — nitrogen source." },
            ],
            steps: [
              { reasoning: "Nitrates provide nitrogen for amino acids → proteins.", working: "nitrogen", marks: 1, markCode: "M" },
              { reasoning: "Deficiency = stunted growth, yellow leaves.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nitrates supply nitrogen for protein synthesis; deficiency causes yellowing and poor growth.",
            commonErrors: ["Saying 'for energy' — energy comes from glucose, not nitrates."],
          },
        },
        {
          id: "cils-u3-nut-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why root hair cells are adapted for absorption.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Root hairs", statement: "Large surface area, thin wall, close to xylem." },
            ],
            steps: [
              { reasoning: "Root hairs greatly increase surface area for water/mineral uptake.", working: "surface area", marks: 1, markCode: "M" },
              { reasoning: "Thin cell wall = short diffusion distance.", working: "thin wall", marks: 1, markCode: "M" },
              { reasoning: "Position near xylem = quick transport once absorbed.", working: "xylem", marks: 1, markCode: "M" },
              { reasoning: "Adaptations linked to function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Large SA for absorption, thin walls for fast diffusion, near xylem for transport.",
            commonErrors: ["Generic 'roots absorb water' — need cell-level adaptations."],
          },
        },
        {
          id: "cils-u3-nut-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A plant shows yellow leaves and stunted growth.",
          parts: [
            { label: "a", prompt: "Which mineral deficiency might this indicate?", marks: 2 },
            { label: "b", prompt: "Explain the connection between mineral and symptom.", marks: 3 },
            { label: "c", prompt: "How would you test this hypothesis?", marks: 2 },
            { label: "d", prompt: "Suggest another possible cause.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Deficiency diagnosis", statement: "Nitrate/magnesium deficiency → yellow leaves; test by adding mineral." },
            ],
            steps: [
              { part: "a", reasoning: "Nitrate or magnesium deficiency likely.", working: "N/Mg", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Nitrates needed for protein/chlorophyll; deficiency reduces chlorophyll → yellow.", working: "chlorophyll", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear link.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Grow identical plants, add suspected mineral to one group, compare.", working: "controlled test", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Valid method.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Disease, lack of light, waterlogging, pest damage.", working: "other causes", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid alternative.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) nitrate/magnesium deficiency (b) reduced chlorophyll → yellow (c) controlled mineral addition test (d) disease/light/water",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Deficiency identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Mechanism clear.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Test valid.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Invalid.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Alternative valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Invalid.", part: "d" },
            ],
            commonErrors: ["Blaming only one cause without testing."],
          },
        },
      ],
    },
    {
      id: "cils-u3-transport",
      title: "Water transport in plants",
      skill: "Explain transpiration, root pressure and how water moves from roots to leaves.",
      lesson: {
        sections: [
          {
            heading: "The transpiration stream",
            body: "Water evaporates from leaf cells → escapes through stomata → creates suction pulling water up xylem from roots. Continuous column maintained by cohesion.",
          },
          {
            heading: "Factors affecting transpiration",
            body: "- **Light**: stomata open → more transpiration\n- **Temperature**: warmer = faster evaporation\n- **Wind**: removes moist air → faster transpiration\n- **Humidity**: dry air = faster transpiration",
          },
          {
            heading: "Measuring transpiration",
            body: "Potometer measures water uptake — correlates with transpiration rate. Wilting = water loss exceeds absorption.",
          },
        ],
        keyFormulas: [
          { name: "Transpiration", statement: "Water loss through stomata pulls water column up xylem — cohesion + adhesion." },
        ],
        workedExample: {
          problem: "Why do plants wilt on hot windy days?",
          solution: "Transpiration rate exceeds water absorption — leaf cells lose turgor pressure.",
        },
      },
      questions: [
        {
          id: "cils-u3-trans-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is transpiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water loss from leaves through stomata" },
              { id: "b", text: "Water absorption by roots" },
              { id: "c", text: "Photosynthesis in leaves" },
              { id: "d", text: "Sugar transport in phloem" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Transpiration", statement: "Evaporation of water from leaf surfaces." },
            ],
            steps: [
              { reasoning: "Transpiration = water vapour loss through stomata.", working: "water loss", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Water loss from leaves through stomata",
            commonErrors: ["Choosing (b) — that's absorption, opposite process."],
          },
        },
        {
          id: "cils-u3-trans-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two factors that increase transpiration rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Transpiration factors", statement: "Light, temperature, wind, low humidity." },
            ],
            steps: [
              { reasoning: "Any two: higher temperature, more light, wind, dry air.", working: "factors", marks: 1, markCode: "M" },
              { reasoning: "Correct pair.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Higher temperature, more light, wind, or dry air (any two)",
            commonErrors: ["Saying 'more water' — that's supply, not rate factor."],
          },
        },
        {
          id: "cils-u3-trans-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how transpiration helps plants get water to leaves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Transpiration pull", statement: "Water loss creates suction; cohesion pulls column up." },
            ],
            steps: [
              { reasoning: "Water evaporates from leaf cells through stomata.", working: "evaporation", marks: 1, markCode: "M" },
              { reasoning: "Loss creates negative pressure (suction) in xylem.", working: "suction", marks: 1, markCode: "M" },
              { reasoning: "Cohesion between water molecules pulls column up from roots.", working: "cohesion", marks: 1, markCode: "M" },
              { reasoning: "Mechanism explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaporation pulls water up through xylem — cohesion keeps the column continuous.",
            commonErrors: ["Saying 'roots push water up' — it's mostly pull from leaves."],
          },
        },
        {
          id: "cils-u3-trans-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate factors affecting transpiration.",
          parts: [
            { label: "a", prompt: "Design a fair test for temperature effect.", marks: 3 },
            { label: "b", prompt: "What would you measure?", marks: 2 },
            { label: "c", prompt: "Predict the result.", marks: 2 },
            { label: "d", prompt: "Explain why results might vary.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Transpiration experiment", statement: "Potometer; vary temp, control others; measure water uptake." },
            ],
            steps: [
              { part: "a", reasoning: "Same plant, same light, vary temperature only; measure water uptake over time.", working: "fair test", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Method clear.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Controlled.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Water uptake (potometer reading) per unit time.", working: "uptake", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct measure.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Higher temp → faster transpiration (more evaporation).", working: "positive", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Prediction correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Plant variation, measurement error, humidity differences, leaf age.", working: "variability", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid sources.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) control all but temperature (b) water uptake/time (c) warmer = faster (d) plant variation, humidity, errors",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Design good.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Measure correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Prediction correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Sources valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Not controlling humidity — major confounding variable."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u3-plant-notes",
      title: "Plant nutrition and transport — revision notes",
      summary: "Minerals, root hairs, transpiration, xylem/phloem.",
      sections: [
        {
          heading: "Nutrition",
          body: "Photosynthesis makes glucose; minerals (N, P, K, Mg) from soil essential for proteins/chlorophyll. Root hairs absorb via osmosis.",
        },
        {
          heading: "Transport",
          body: "Xylem: water+minerals UP (transpiration pull). Phloem: glucose DOWN. Transpiration increases with light, temp, wind, dry air.",
        },
      ],
    },
  ],
};
