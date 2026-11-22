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
              { id: "a", text: "Calcium" },
              { id: "b", text: "Iron" },
              { id: "c", text: "Sodium" },
              { id: "d", text: "Magnesium" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Minerals", statement: "Magnesium is central to chlorophyll molecule." },
            ],
            steps: [
              { reasoning: "Magnesium deficiency causes yellow leaves — chlorophyll needs Mg.", working: "Mg", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Magnesium",
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
        {
          id: "cils-u3-nut-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a common symptom of nitrate deficiency in plants?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Extra roots" },
              { id: "b", text: "Faster flowering only" },
              { id: "c", text: "Yellow leaves and poor growth" },
              { id: "d", text: "Darker green leaves" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Mineral deficiency", statement: "Nitrate deficiency reduces protein and chlorophyll production." }],
            steps: [{ reasoning: "Yellowing and stunted growth are typical symptoms.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Yellow leaves and poor growth",
          },
        },
        {
          id: "cils-u3-nut-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The lesson lists nitrates, phosphates, potassium and magnesium. Enter the number of minerals.",
          response: { type: "numeric", parts: [{ label: "Minerals", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Minerals", statement: "Four mineral examples are listed." }],
            steps: [{ reasoning: "Four minerals are named.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cils-u3-nut-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why plants need mineral ions from the soil.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Minerals", statement: "Minerals supply elements needed for proteins, chlorophyll and enzymes." }],
            steps: [
              { reasoning: "Photosynthesis makes glucose but not all required elements.", marks: 1, markCode: "M" },
              { reasoning: "Minerals provide nitrogen, phosphorus and other elements for growth.", marks: 1, markCode: "A" }],
            finalAnswer: "Minerals supply elements needed for proteins, chlorophyll and other plant structures.",
          },
        },
        {
          id: "cils-u3-nut-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which mineral is important for root growth, flowering and seed production?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sodium" },
              { id: "b", text: "Calcium" },
              { id: "c", text: "Phosphate" },
              { id: "d", text: "Chlorine" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Phosphates", statement: "Phosphates support roots, flowers and seeds." }],
            steps: [{ reasoning: "Phosphate is needed for reproductive and root development.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Phosphate",
          },
        },
        {
          id: "cils-u3-nut-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Root hair cells have three key absorption adaptations: large surface area, thin wall and position near xylem. Enter the number.",
          response: { type: "numeric", parts: [{ label: "Adaptations", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Root hair", statement: "Three adaptations support absorption." }],
            steps: [{ reasoning: "Three adaptations are listed.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cils-u3-nut-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how water enters root hair cells by osmosis.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Osmosis", statement: "Water moves from a dilute to a more concentrated solution across a membrane." }],
            steps: [
              { reasoning: "Soil water is more dilute than the root cell contents.", marks: 1, markCode: "M" },
              { reasoning: "Water moves into the root hair cell down the water potential gradient.", marks: 1, markCode: "M" },
              { reasoning: "This is osmosis across the partially permeable membrane.", marks: 1, markCode: "A" }],
            finalAnswer: "Water moves by osmosis from dilute soil water into the more concentrated root cell.",
          },
        },
        {
          id: "cils-u3-nut-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which mineral helps enzyme function and disease resistance in plants?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Helium" },
              { id: "b", text: "Argon" },
              { id: "c", text: "Potassium" },
              { id: "d", text: "Sodium" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Potassium", statement: "Potassium supports enzyme activity and resistance." }],
            steps: [{ reasoning: "Potassium is the mineral needed for these functions.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Potassium",
          },
        },
        {
          id: "cils-u3-nut-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A plant is given 20 g of fertiliser and another receives 5 g. Enter the difference in fertiliser mass.",
          response: { type: "numeric", parts: [{ label: "Difference", answer: 15, unit: "g" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Difference", statement: "Difference = larger value minus smaller value." }],
            steps: [{ reasoning: "$20-5 = 15$ g.", marks: 1, markCode: "A" }],
            finalAnswer: "$15$ g",
          },
        },
        {
          id: "cils-u3-nut-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which mineral is needed to make chlorophyll?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Magnesium" },
              { id: "b", text: "Calcium" },
              { id: "c", text: "Zinc" },
              { id: "d", text: "Sodium" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Magnesium", statement: "Magnesium is part of the chlorophyll molecule." }],
            steps: [{ reasoning: "Magnesium deficiency causes yellow leaves.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Magnesium",
          },
        },
        {
          id: "cils-u3-nut-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Essential mineral elements named: nitrogen, phosphorus, potassium and magnesium. Enter the number of elements.",
          response: { type: "numeric", parts: [{ label: "Elements", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Mineral elements", statement: "Four essential elements are listed." }],
            steps: [{ reasoning: "Four elements are named.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cils-u3-nut-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why photosynthesis alone is not enough for plant nutrition.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Plant nutrition", statement: "Plants need minerals in addition to glucose made by photosynthesis." }],
            steps: [
              { reasoning: "Photosynthesis produces glucose but not all required elements.", marks: 1, markCode: "M" },
              { reasoning: "Minerals such as nitrogen and phosphorus are needed for proteins and DNA.", marks: 1, markCode: "M" },
              { reasoning: "Roots absorb these minerals from soil.", marks: 1, markCode: "A" }],
            finalAnswer: "Plants need soil minerals for proteins, chlorophyll and other structures beyond glucose.",
          },
        },
        {
          id: "cils-u3-nut-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "After absorption by root hairs, water is transported upward mainly in which tissue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stomata" },
              { id: "b", text: "Chloroplast" },
              { id: "c", text: "Xylem" },
              { id: "d", text: "Phloem" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Xylem", statement: "Xylem transports water and minerals upward." }],
            steps: [{ reasoning: "Xylem carries water from roots to leaves.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Xylem",
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
              { id: "a", text: "Sugar transport in phloem" },
              { id: "b", text: "Water absorption by roots" },
              { id: "c", text: "Photosynthesis in leaves" },
              { id: "d", text: "Water loss from leaves through stomata" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Transpiration", statement: "Evaporation of water from leaf surfaces." },
            ],
            steps: [
              { reasoning: "Transpiration = water vapour loss through stomata.", working: "water loss", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Water loss from leaves through stomata",
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
        {
          id: "cils-u3-trans-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which direction does water move in xylem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "From leaves to roots" },
              { id: "b", text: "From roots to leaves" },
              { id: "c", text: "Sideways only" },
              { id: "d", text: "In circles" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Xylem", statement: "Xylem transports water upward." }],
            steps: [{ reasoning: "Water moves from roots toward leaves.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** From roots to leaves",
          },
        },
        {
          id: "cils-u3-trans-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The lesson lists light, temperature, wind and humidity as transpiration factors. Enter the number.",
          response: { type: "numeric", parts: [{ label: "Factors", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Transpiration factors", statement: "Four factors are listed." }],
            steps: [{ reasoning: "Four factors are named.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cils-u3-trans-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the role of cohesion in the transpiration stream.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Transpiration pull", statement: "Water molecules attract each other, keeping the column continuous." }],
            steps: [
              { reasoning: "Cohesion means water molecules stick together.", marks: 1, markCode: "M" },
              { reasoning: "This maintains a continuous column pulled upward.", marks: 1, markCode: "A" }],
            finalAnswer: "Cohesion keeps the water column continuous so transpiration can pull it upward.",
          },
        },
        {
          id: "cils-u3-trans-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a potometer measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soil pH" },
              { id: "b", text: "Water uptake by a plant" },
              { id: "c", text: "Leaf colour" },
              { id: "d", text: "Root length" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Potometer", statement: "A potometer measures water uptake." }],
            steps: [{ reasoning: "Water uptake is used to estimate transpiration.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Water uptake by a plant",
          },
        },
        {
          id: "cils-u3-trans-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A plant takes up 60 cm³ of water in 3 hours. Enter the mean uptake per hour in cm³/h.",
          response: { type: "numeric", parts: [{ label: "Rate", answer: 20, unit: "cm³/h" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Rate", statement: "Rate = amount divided by time." }],
            steps: [{ reasoning: "$60\\div 3 = 20$ cm³/h.", marks: 1, markCode: "A" }],
            finalAnswer: "$20$ cm³/h",
          },
        },
        {
          id: "cils-u3-trans-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a plant wilts on a hot, windy day.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Wilting", statement: "Water loss exceeds water uptake, reducing turgor." }],
            steps: [
              { reasoning: "Heat and wind increase transpiration rate.", marks: 1, markCode: "M" },
              { reasoning: "Water loss through stomata may exceed root absorption.", marks: 1, markCode: "M" },
              { reasoning: "Cells lose turgor pressure and the plant wilts.", marks: 1, markCode: "A" }],
            finalAnswer: "Transpiration exceeds water uptake, so cells lose turgor and the plant wilts.",
          },
        },
        {
          id: "cils-u3-trans-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does wind affect transpiration rate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It always decreases transpiration" },
              { id: "b", text: "It closes all stomata" },
              { id: "c", text: "It stops photosynthesis" },
              { id: "d", text: "It removes moist air and increases transpiration" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Transpiration factors", statement: "Wind removes moist air around leaves." }],
            steps: [{ reasoning: "Drier air around leaves increases water loss.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** It removes moist air and increases transpiration",
          },
        },
        {
          id: "cils-u3-trans-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Water uptake is 30 cm³ at 15 °C and 45 cm³ at 25 °C. Enter the increase in cm³.",
          response: { type: "numeric", parts: [{ label: "Increase", answer: 15, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Difference", statement: "Increase = higher value minus lower value." }],
            steps: [{ reasoning: "$45-30 = 15$ cm³.", marks: 1, markCode: "A" }],
            finalAnswer: "$15$ cm³",
          },
        },
        {
          id: "cils-u3-trans-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which direction does phloem mainly transport sugars?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "From leaves to other plant parts" },
              { id: "b", text: "From flowers to roots only" },
              { id: "c", text: "From soil to air" },
              { id: "d", text: "From roots to leaves only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Phloem", statement: "Phloem transports sugars throughout the plant." }],
            steps: [{ reasoning: "Sugars made in leaves move to growing and storage tissues.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** From leaves to other plant parts",
          },
        },
        {
          id: "cils-u3-trans-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Transpiration rate is 12 units in dry air and 6 units in humid air. Enter the difference.",
          response: { type: "numeric", parts: [{ label: "Difference", answer: 6, unit: "units" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Rate comparison", statement: "Difference = dry rate minus humid rate." }],
            steps: [{ reasoning: "$12-6 = 6$ units.", marks: 1, markCode: "A" }],
            finalAnswer: "6 units",
          },
        },
        {
          id: "cils-u3-trans-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Design a fair test to investigate how light affects transpiration.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Fair test", statement: "Vary light only and measure water uptake." }],
            steps: [
              { reasoning: "Use the same plant species and similar leaf area.", marks: 1, markCode: "M" },
              { reasoning: "Keep temperature, humidity and wind constant while varying light.", marks: 1, markCode: "M" },
              { reasoning: "Measure water uptake with a potometer over the same time.", marks: 1, markCode: "A" }],
            finalAnswer: "Control all conditions except light and measure water uptake with a potometer.",
          },
        },
        {
          id: "cils-u3-trans-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What mainly pulls water up the xylem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Phloem pressure" },
              { id: "b", text: "Gravity alone" },
              { id: "c", text: "Transpiration pull from leaves" },
              { id: "d", text: "Root hairs pushing" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Transpiration pull", statement: "Water loss at leaves creates suction in xylem." }],
            steps: [{ reasoning: "Evaporation from leaves pulls the water column upward.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Transpiration pull from leaves",
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
