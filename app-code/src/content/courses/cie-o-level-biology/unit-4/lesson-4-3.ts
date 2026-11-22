import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "olbio-u4-lesson-4-3",
  code: "4-3",
  title: "Heart Control, Clotting and Plant Water Uptake",
  goal: "I CAN describe heart rate control, blood clotting, root pressure and phloem loading.",
  standards: ["5090 4.1", "5090 4.2", "5090 4.3", "5090 4.4"],
  vocabulary: [
    { term: "Heart rate", definition: "Number of heartbeats per minute; controlled by nerves and hormones." },
    { term: "Pacemaker", definition: "Group of cells in heart initiating each heartbeat." },
    { term: "Clotting", definition: "Process forming a fibrin mesh to seal wounds and prevent blood loss." },
    { term: "Fibrinogen", definition: "Plasma protein converted to fibrin during clotting." },
    { term: "Root pressure", definition: "Pressure from active ion uptake in roots pushing water up xylem." },
    { term: "Phloem loading", definition: "Active transport of sugars into phloem sieve tubes at sources." },
    { term: "Sieve tube", definition: "Living phloem cell with sieve plates allowing sap flow." },
    { term: "Companion cell", definition: "Living cell assisting sieve tube with loading/unloading." },
  ],
  concepts: [
    {
      id: "olbio-u4-heart-control",
      title: "Heart control and clotting",
      skill: "Explain heart rate control and describe the blood clotting mechanism.",
      lesson: {
        sections: [
          {
            heading: "Heart rate control",
            body: "- **Medulla oblongata** (brain) sends signals via nerves to heart.\n- **Adrenaline** increases heart rate in stress/exercise.\n- Exercise: faster heart rate → more O₂/glucose to muscles.",
          },
          {
            heading: "Clotting mechanism",
            body: "1. Vessel damaged → platelets aggregate at site.\n2. Platelets release chemicals → cascade activates.\n3. **Fibrinogen** (plasma protein) → **fibrin** (insoluble threads).\n4. Fibrin mesh traps blood cells → clot forms → seals wound.\n\nVitamin K and calcium needed; too little → bleeding disorders.",
          },
          {
            heading: "Why clotting matters",
            body: "Prevents excessive blood loss and blocks pathogens entry. Excessive clotting (thrombosis) can block vessels → heart attack/stroke.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What is the role of fibrin in clotting?",
          solution: "Fibrin forms an insoluble mesh that traps blood cells and platelets, sealing the wound.",
        },
      },
      questions: [
        {
          id: "olbio-u4-heart-control-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What triggers blood clotting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Low oxygen" },
              { id: "b", text: "Normal blood flow" },
              { id: "c", text: "High temperature" },
              { id: "d", text: "Damage to a blood vessel" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Clotting trigger", statement: "Vessel damage initiates clotting cascade." },
            ],
            steps: [
              { reasoning: "Recall trigger.", working: "\\text{vessel damage}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Damage to a blood vessel",
            commonErrors: ["Choosing 'low oxygen' — that's a different response."],
          },
        },
        {
          id: "olbio-u4-heart-control-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two factors that increase heart rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Heart rate", statement: "Exercise, adrenaline, fear increase rate." },
            ],
            steps: [
              { reasoning: "Give two factors.", working: "\\text{exercise, adrenaline}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Exercise and adrenaline (also: fear, caffeine, high temperature).",
            commonErrors: ["Saying 'rest decreases' — question asks what INCREASES."],
          },
        },
        {
          id: "olbio-u4-heart-control-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the blood clotting process.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Clotting", statement: "Platelets → fibrinogen→fibrin mesh → clot seals wound." },
            ],
            steps: [
              { reasoning: "Platelets aggregate at damage site.", working: "\\text{platelets}", marks: 1, markCode: "M" },
              { reasoning: "Cascade converts fibrinogen to fibrin.", working: "\\text{fibrin}", marks: 1, markCode: "M" },
              { reasoning: "Fibrin mesh traps cells → clot.", working: "\\text{mesh/clot}", marks: 1, markCode: "M" },
              { reasoning: "Seals wound, prevents blood loss.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Platelets aggregate at the wound and release chemicals; fibrinogen converts to fibrin threads forming a mesh that traps blood cells, creating a clot that seals the vessel.",
            commonErrors: ["Saying 'white cells clot' — it's platelets + fibrin."],
          },
        },
        {
          id: "olbio-u4-heart-control-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain how heart rate is controlled and why it changes during exercise.",
          parts: [
            { label: "a", prompt: "State where heart rate is controlled.", marks: 2 },
            { label: "b", prompt: "Describe the effect of exercise on heart rate.", marks: 2 },
            { label: "c", prompt: "Explain why heart rate increases during exercise.", marks: 3 },
            { label: "d", prompt: "State the role of adrenaline in heart rate control.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Heart rate control", statement: "Medulla/nerves + adrenaline; increases for O₂/glucose delivery." },
            ],
            steps: [
              { part: "a", reasoning: "Medulla oblongata in brain.", working: "\\text{medulla}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Via nerves to heart.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Heart rate increases.", working: "\\text{increases}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State change.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Muscles need more O₂/glucose.", working: "\\text{more O}_2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Faster pumping delivers more.", working: "\\text{faster delivery}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Removes CO₂ faster.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Adrenaline increases heart rate.", working: "\\text{adrenaline}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Prepares for action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) medulla via nerves (b) increases (c) more O₂/glucose/CO₂ removal (d) adrenaline speeds heart",
            commonErrors: ["In (c) only saying 'to get energy' — specify O₂/glucose delivery."],
          },
        },
        {
          id: "olbio-u4-heart-control-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Blood clotting is triggered by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Low oxygen levels" },
              { id: "b", text: "Normal blood flow" },
              { id: "c", text: "Damage to a blood vessel" },
              { id: "d", text: "High temperature" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Clotting trigger", statement: "Vessel damage initiates the clotting cascade." },
            ],
            steps: [
              { reasoning: "Recall the trigger.", working: "\\text{vessel damage}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Damage to a blood vessel",
            commonErrors: ["Choosing low oxygen — that's a respiratory response, not clotting."],
          },
        },
        {
          id: "olbio-u4-heart-control-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "During clotting, fibrinogen is converted into:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Haemoglobin" },
              { id: "b", text: "Plasma" },
              { id: "c", text: "Platelets" },
              { id: "d", text: "Fibrin" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Clotting", statement: "Fibrinogen → fibrin threads forming the mesh." },
            ],
            steps: [
              { reasoning: "Recall the conversion.", working: "\\text{fibrinogen} \\to \\text{fibrin}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Fibrin",
            commonErrors: ["Choosing haemoglobin — that's the oxygen carrier."],
          },
        },
        {
          id: "olbio-u4-heart-control-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What effect does adrenaline have on heart rate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It decreases heart rate" },
              { id: "b", text: "It stops the heart" },
              { id: "c", text: "It increases heart rate in preparation for action" },
              { id: "d", text: "It has no effect" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Adrenaline", statement: "Increases heart rate during stress/exercise." },
            ],
            steps: [
              { reasoning: "Recall the hormone's effect.", working: "\\text{increases}", marks: 1, markCode: "M" },
              { reasoning: "Link to fight-or-flight.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It increases heart rate in preparation for action",
            commonErrors: ["Saying it decreases — adrenaline speeds the heart up."],
          },
        },
        {
          id: "olbio-u4-heart-control-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A person's resting heart rate is 70 beats per minute. During exercise it rises to 140 beats per minute. Calculate the percentage increase in heart rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "%", tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage increase", statement: "Percentage = (new - old) / old x 100." },
            ],
            steps: [
              { reasoning: "Calculate the increase and percentage.", working: "\\frac{140-70}{70} \\times 100 = 100\\%", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "100\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100% increase",
            commonErrors: ["Dividing by 140 instead of the original 70."],
          },
        },
        {
          id: "olbio-u4-heart-control-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Heart rate changes during two activities: (a) from 60 to 120 beats per minute; (b) from 80 to 100 beats per minute. Calculate the percentage increase in each case.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 100, unit: "%" },
              { label: "b", answer: 25, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage increase", statement: "Percentage = (new - old) / old x 100." },
            ],
            steps: [
              { reasoning: "(a) (120-60)/60 x 100 = 100%.", working: "\\frac{60}{60} \\times 100 = 100\\%", marks: 1, markCode: "M" },
              { reasoning: "(b) (100-80)/80 x 100 = 25%.", working: "\\frac{20}{80} \\times 100 = 25\\%", marks: 1, markCode: "M" },
              { reasoning: "State both percentages.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 100%; (b) 25%",
            commonErrors: ["In (b) dividing by 100 instead of the original 80."],
          },
        },
        {
          id: "olbio-u4-heart-control-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person's heart beats at 75 beats per minute. Calculate how many beats occur in 20 minutes.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1500, unit: "beats" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total beats", statement: "Total = rate x time." },
            ],
            steps: [
              { reasoning: "Multiply rate by time.", working: "75 \\times 20 = 1500", marks: 1, markCode: "M" },
              { reasoning: "State the total.", working: "1500 \\text{ beats}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1500 beats",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "olbio-u4-heart-control-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The pacemaker of the heart is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A blood vessel" },
              { id: "b", text: "A hormone" },
              { id: "c", text: "A group of cells that initiates each heartbeat" },
              { id: "d", text: "A nerve in the brain" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pacemaker", statement: "Group of cells in the heart initiating each heartbeat." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{initiates heartbeat}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A group of cells that initiates each heartbeat",
            commonErrors: ["Choosing a nerve — the pacemaker is cells within the heart."],
          },
        },
        {
          id: "olbio-u4-heart-control-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the role of the medulla oblongata in heart rate control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Heart rate control", statement: "Medulla sends signals via nerves to adjust heart rate." },
            ],
            steps: [
              { reasoning: "Give the location/function.", working: "\\text{medulla}", marks: 1, markCode: "M" },
              { reasoning: "Complete: sends nerve signals to heart.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The medulla oblongata in the brain sends signals via nerves to the heart to increase or decrease the heart rate as needed.",
            commonErrors: ["Saying 'the heart controls itself' — the medulla/nerves regulate it."],
          },
        },
        {
          id: "olbio-u4-heart-control-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the sequence of events in blood clotting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Clotting cascade", statement: "Vessel damage → platelets aggregate → fibrinogen→fibrin mesh → clot seals wound." },
            ],
            steps: [
              { reasoning: "Vessel damaged → platelets aggregate.", working: "\\text{platelets}", marks: 1, markCode: "M" },
              { reasoning: "Platelets release chemicals activating cascade.", working: "\\text{chemicals}", marks: 1, markCode: "M" },
              { reasoning: "Fibrinogen converts to fibrin threads forming mesh.", working: "\\text{fibrin mesh}", marks: 1, markCode: "M" },
              { reasoning: "Mesh traps blood cells → clot seals wound.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vessel damage triggers platelet aggregation and chemical release; fibrinogen converts to fibrin forming a mesh that traps blood cells, creating a clot that seals the wound.",
            commonErrors: ["Saying 'white cells clot' — it's platelets and fibrin."],
          },
        },
        {
          id: "olbio-u4-heart-control-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which two substances are needed for effective blood clotting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glucose and oxygen" },
              { id: "b", text: "Vitamin K and calcium" },
              { id: "c", text: "Water and salt" },
              { id: "d", text: "Vitamin C and iron" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Clotting factors", statement: "Vitamin K and calcium needed for clotting cascade." },
            ],
            steps: [
              { reasoning: "Recall the cofactors.", working: "\\text{vit K + Ca}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Vitamin K and calcium",
            commonErrors: ["Choosing vitamin C — that's for collagen/scurvy."],
          },
        },
        {
          id: "olbio-u4-heart-control-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how heart rate is controlled by the nervous system and hormones.",
          parts: [
            { label: "a", prompt: "Describe the role of nerves in heart rate control.", marks: 2 },
            { label: "b", prompt: "Describe the role of adrenaline.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Heart rate control", statement: "Nerves (medulla) adjust rate; adrenaline speeds it up in stress." },
            ],
            steps: [
              { part: "a", reasoning: "Medulla sends signals via nerves.", working: "\\text{medulla/nerves}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Nerves speed up or slow down heartbeat.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Adrenaline released in stress/exercise.", working: "\\text{adrenaline}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Increases heart rate → more O₂/glucose delivered.", working: "\\text{more O}_2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Prepares body for action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) medulla→nerves adjust rate (b) adrenaline speeds heart for O₂/glucose delivery",
            commonErrors: ["In (b) only saying 'increases rate' — link to exercise/stress response."],
          },
        },
        {
          id: "olbio-u4-heart-control-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate the importance of blood clotting and the risks of its failure or excess.",
          parts: [
            { label: "a", prompt: "State the main purpose of clotting.", marks: 2 },
            { label: "b", prompt: "Describe the clotting mechanism in three steps.", marks: 3 },
            { label: "c", prompt: "Explain what happens if clotting fails.", marks: 2 },
            { label: "d", prompt: "Explain the risk of excessive clotting.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Clotting importance", statement: "Seals wounds; failure → blood loss; excess → thrombosis blocking vessels." },
            ],
            steps: [
              { part: "a", reasoning: "Seals wounds/prevents blood loss.", working: "\\text{seal wound}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Blocks pathogen entry.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Step 1: platelets aggregate at damage.", working: "\\text{platelets}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Step 2: fibrinogen → fibrin.", working: "\\text{fibrin}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Step 3: mesh traps cells → clot.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Excessive bleeding/exsanguination.", working: "\\text{blood loss}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Pathogens can enter wound.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Clot forms inside vessel (thrombosis).", working: "\\text{thrombosis}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Can block blood flow → heart attack/stroke.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) seal wounds, prevent blood loss/pathogens (b) platelets→fibrin→mesh clot (c) excessive bleeding/infection (d) thrombosis → heart attack/stroke",
            commonErrors: ["In (d) saying 'more clotting is always good' — excess blocks vessels."],
          },
        },
      ],
    },
    {
      id: "olbio-u4-plant-uptake",
      title: "Root pressure and phloem loading",
      skill: "Describe root pressure, water uptake in roots, and how sugars are loaded into phloem.",
      lesson: {
        sections: [
          {
            heading: "Water uptake in roots",
            body: "1. Root hair cells absorb water by **osmosis** (soil solution has higher water potential than cell sap).\n2. Mineral ions absorbed by **active transport** against gradient.\n3. Water moves through cortex → xylem via osmosis and **root pressure**.",
          },
          {
            heading: "Root pressure",
            body: "Active ion pumping into xylem lowers water potential → water follows by osmosis → positive pressure pushes water up. Important at night when transpiration is low (e.g. guttation).",
          },
          {
            heading: "Phloem loading",
            body: "Sucrose produced in mesophyll cells → actively loaded into **sieve tubes** via **companion cells** (using ATP). High solute concentration → water enters by osmosis → pressure builds → sap flows to sinks.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How does root pressure help water transport?",
          solution: "Active ion uptake into xylem creates osmotic pressure that pushes water upward — especially when transpiration is low.",
        },
      },
      questions: [
        {
          id: "olbio-u4-plant-uptake-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How do root hair cells absorb water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "By phagocytosis" },
              { id: "b", text: "By osmosis" },
              { id: "c", text: "By diffusion of ions" },
              { id: "d", text: "By active transport" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Root hair absorption", statement: "Water enters by osmosis." },
            ],
            steps: [
              { reasoning: "Recall the process.", working: "\\text{osmosis}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** By osmosis",
            commonErrors: ["Choosing active transport — that's for mineral ions, not water."],
          },
        },
        {
          id: "olbio-u4-plant-uptake-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the role of companion cells in phloem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Companion cells", statement: "Assist sieve tubes with loading/unloading sugars." },
            ],
            steps: [
              { reasoning: "Give role.", working: "\\text{loading/unloading}", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Companion cells actively load sucrose into sieve tubes and assist with unloading at sinks.",
            commonErrors: ["Saying they 'conduct water' — that's xylem."],
          },
        },
        {
          id: "olbio-u4-plant-uptake-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how phloem loading creates the pressure gradient for translocation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Phloem loading", statement: "Active loading → high solute → water enters → pressure gradient." },
            ],
            steps: [
              { reasoning: "Sucrose actively loaded into sieve tubes.", working: "\\text{active loading}", marks: 1, markCode: "M" },
              { reasoning: "High solute concentration lowers water potential.", working: "\\text{low water potential}", marks: 1, markCode: "M" },
              { reasoning: "Water enters by osmosis → turgor/pressure.", working: "\\text{water in}", marks: 1, markCode: "M" },
              { reasoning: "Pressure pushes sap toward sink.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sucrose is actively loaded into sieve tubes, lowering water potential so water enters by osmosis; the resulting turgor pressure drives sap flow toward sinks.",
            commonErrors: ["Saying 'diffusion drives it' — it's pressure flow from active loading."],
          },
        },
        {
          id: "olbio-u4-plant-uptake-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the pathway of water from soil to leaf.",
          parts: [
            { label: "a", prompt: "Describe water entry into root hair cells.", marks: 3 },
            { label: "b", prompt: "Describe the role of root pressure.", marks: 2 },
            { label: "c", prompt: "Describe the role of the transpiration stream.", marks: 2 },
            { label: "d", prompt: "State the role of cohesion and adhesion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Water transport", statement: "Osmosis → root pressure → transpiration pull; cohesion/adhesion maintain column." },
            ],
            steps: [
              { part: "a", reasoning: "Osmosis into root hair cells.", working: "\\text{osmosis}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Soil has higher water potential.", working: "\\text{water potential}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Water crosses cortex to xylem.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Active ion uptake → osmotic pressure.", working: "\\text{root pressure}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Pushes water up xylem.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Transpiration pull at leaves.", working: "\\text{transpiration}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Draws column upward.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Cohesion: water-water.", working: "\\text{cohesion}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Adhesion: water-xylem.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) osmosis into root hairs (b) root pressure pushes up (c) transpiration pull draws up (d) cohesion+adhesion",
            commonErrors: ["In (a) saying 'active transport of water' — water enters by osmosis."],
          },
        },
        {
          id: "olbio-u4-plant-uptake-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Mineral ions are absorbed by root hair cells by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Active transport" },
              { id: "b", text: "Osmosis" },
              { id: "c", text: "Diffusion only" },
              { id: "d", text: "Phagocytosis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mineral uptake", statement: "Ions move against the gradient by active transport." },
            ],
            steps: [
              { reasoning: "Recall the process.", working: "\\text{active transport}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Active transport",
            commonErrors: ["Choosing osmosis — that is for water, not ions."],
          },
        },
        {
          id: "olbio-u4-plant-uptake-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Root pressure is most important for water transport when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The leaves are in bright light" },
              { id: "b", text: "Transpiration is low, e.g. at night" },
              { id: "c", text: "The soil is dry" },
              { id: "d", text: "Transpiration is very high" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Root pressure", statement: "Matters most when transpiration pull is weak — night/low light." },
            ],
            steps: [
              { reasoning: "Recall when root pressure dominates.", working: "\\text{low transpiration}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Transpiration is low, e.g. at night",
            commonErrors: ["Choosing high transpiration — transpiration pull dominates then."],
          },
        },
        {
          id: "olbio-u4-plant-uptake-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Guttation is the appearance of water droplets at leaf tips at night. Explain what causes it.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Phloem sap leaking" },
              { id: "b", text: "Dew formation" },
              { id: "c", text: "Condensation from air" },
              { id: "d", text: "Root pressure pushing water up and out when transpiration is low" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Guttation", statement: "Root pressure forces water out of leaf tips when stomata closed at night." },
            ],
            steps: [
              { reasoning: "Identify the cause.", working: "\\text{root pressure}", marks: 1, markCode: "M" },
              { reasoning: "Link to low transpiration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Root pressure pushing water up and out when transpiration is low",
            commonErrors: ["Saying 'dew' — guttation is internal water pushed out."],
          },
        },
        {
          id: "olbio-u4-plant-uptake-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Each of 3 root hairs absorbs 0.2 g of water per minute. Calculate the total rate of water uptake in g min$^{-1}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.6, unit: "g min^{-1}", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total rate", statement: "Total = rate per hair x number of hairs." },
            ],
            steps: [
              { reasoning: "Multiply per-hair rate by count.", working: "0.2 \\times 3 = 0.6", marks: 1, markCode: "M" },
              { reasoning: "State the rate.", working: "0.6 \\text{ g min}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.6 g min$^{-1}$",
            commonErrors: ["Adding instead of multiplying or using wrong units."],
          },
        },
        {
          id: "olbio-u4-plant-uptake-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Five root hairs each absorb 0.4 g of water per hour. (a) Calculate the total water absorbed per hour. (b) Calculate the total absorbed in 3 hours.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2, unit: "g h^{-1}" },
              { label: "b", answer: 6, unit: "g" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total uptake", statement: "Total per time = rate x hairs; total = rate x time." },
            ],
            steps: [
              { reasoning: "(a) 0.4 x 5 = 2 g h$^{-1}$.", working: "0.4 \\times 5 = 2", marks: 1, markCode: "M" },
              { reasoning: "(b) 2 x 3 = 6 g.", working: "2 \\times 3 = 6", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 g h$^{-1}$; (b) 6 g",
            commonErrors: ["In (b) using 0.4 directly instead of total hourly rate."],
          },
        },
        {
          id: "olbio-u4-plant-uptake-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Companion cells load 80 sucrose molecules into sieve tubes; 20 remain outside. Calculate the percentage of sucrose successfully loaded.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80, unit: "%", tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = loaded / total x 100." },
            ],
            steps: [
              { reasoning: "Total = 80 + 20 = 100; percentage = 80/100 x 100.", working: "\\frac{80}{100} \\times 100 = 80\\%", marks: 1, markCode: "M" },
              { reasoning: "State the percentage.", working: "80\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80%",
            commonErrors: ["Using 80/20 or forgetting total = 100."],
          },
        },
        {
          id: "olbio-u4-plant-uptake-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sieve tubes (phloem) are composed of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dead hollow cells" },
              { id: "b", text: "Chloroplast-rich cells only" },
              { id: "c", text: "Bone-like cells" },
              { id: "d", text: "Living cells with cytoplasm and companion cells" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sieve tubes", statement: "Living cells (though lacking nucleus) supported by companion cells." },
            ],
            steps: [
              { reasoning: "Recall the cell type.", working: "\\text{living}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Living cells with cytoplasm and companion cells",
            commonErrors: ["Choosing dead cells — that's xylem."],
          },
        },
        {
          id: "olbio-u4-plant-uptake-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'root pressure'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Root pressure", statement: "Positive pressure in xylem pushing water up, caused by active ion uptake." },
            ],
            steps: [
              { reasoning: "Give the core idea.", working: "\\text{positive pressure}", marks: 1, markCode: "M" },
              { reasoning: "Complete definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A positive pressure developed in the xylem of roots that pushes water upward, caused by active uptake of mineral ions lowering water potential.",
            commonErrors: ["Saying 'pressure from the soil' — it's generated inside the root."],
          },
        },
        {
          id: "olbio-u4-plant-uptake-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the pathway of water from soil solution into the xylem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Water pathway", statement: "Osmosis through root hair → cortex → endodermis → xylem." },
            ],
            steps: [
              { reasoning: "Water enters root hair cells by osmosis.", working: "\\text{osmosis}", marks: 1, markCode: "M" },
              { reasoning: "Moves through cortex cells by osmosis.", working: "\\text{cortex}", marks: 1, markCode: "M" },
              { reasoning: "Crosses endodermis into xylem.", working: "\\text{xylem}", marks: 1, markCode: "M" },
              { reasoning: "Driven by water potential gradient / root pressure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water enters root hair cells by osmosis, passes through cortex cells, crosses the endodermis, and enters the xylem — driven by water potential gradients and root pressure.",
            commonErrors: ["Saying 'active transport of water' — water moves by osmosis."],
          },
        },
        {
          id: "olbio-u4-plant-uptake-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Companion cells provide sieve tubes with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Roots" },
              { id: "b", text: "Water" },
              { id: "c", text: "Chlorophyll" },
              { id: "d", text: "ATP for active loading and metabolic support" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Companion cells", statement: "Provide ATP/metabolic support for active phloem loading." },
            ],
            steps: [
              { reasoning: "Recall the function.", working: "\\text{ATP support}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** ATP for active loading and metabolic support",
            commonErrors: ["Choosing water — companion cells support loading, not water supply."],
          },
        },
        {
          id: "olbio-u4-plant-uptake-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare how water and mineral ions are absorbed by root hair cells.",
          parts: [
            { label: "a", prompt: "State the process for water uptake.", marks: 2 },
            { label: "b", prompt: "State the process for mineral ion uptake.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Water vs ions", statement: "Water: osmosis down gradient. Ions: active transport up gradient (energy needed)." },
            ],
            steps: [
              { part: "a", reasoning: "Osmosis.", working: "\\text{osmosis}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Down water potential gradient.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Active transport.", working: "\\text{active transport}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Against concentration gradient.", working: "\\text{against gradient}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Requires ATP/energy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) water by osmosis down gradient (b) ions by active transport up gradient needing ATP",
            commonErrors: ["Reversing — water is passive, ions are active."],
          },
        },
        {
          id: "olbio-u4-plant-uptake-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates phloem loading using a leaf disc assay.",
          parts: [
            { label: "a", prompt: "Describe how sucrose is produced in the leaf.", marks: 2 },
            { label: "b", prompt: "Describe how sucrose is loaded into phloem.", marks: 2 },
            { label: "c", prompt: "Explain how water entry creates pressure flow.", marks: 3 },
            { label: "d", prompt: "State what happens at the sink.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Phloem loading", statement: "Sucrose produced → actively loaded → water enters → pressure → flow to sink." },
            ],
            steps: [
              { part: "a", reasoning: "Photosynthesis produces glucose/sucrose.", working: "\\text{photosynthesis}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sucrose formed from glucose units.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Companion cells actively load sucrose.", working: "\\text{active loading}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sucrose enters sieve tubes.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "High solute lowers water potential.", working: "\\text{water potential}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Water enters by osmosis.", working: "\\text{osmosis}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Pressure builds → sap flows.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Sucrose unloaded/used at sink.", working: "\\text{unloading}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Water returns to xylem.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) photosynthesis→sucrose (b) active loading via companion cells (c) water in→pressure flow (d) unload at sink, water returns",
            commonErrors: ["In (c) saying 'transpiration pulls phloem' — it's pressure flow from loading."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u4-extended-notes",
      title: "Heart control, clotting and plant uptake — revision notes",
      summary: "Heart rate control, clotting mechanism, root pressure and phloem loading.",
      sections: [
        {
          heading: "Heart and blood",
          body: "Heart rate: medulla + nerves + adrenaline. Clotting: platelets → fibrinogen→fibrin mesh → clot seals wound. Need vitamin K + calcium.",
        },
        {
          heading: "Plant transport detail",
          body: "Root hairs: osmosis for water, active transport for ions. Root pressure pushes water up. Phloem loading: companion cells actively load sucrose → pressure flow.",
        },
        {
          heading: "Exam technique",
          body: "- Water enters roots by OSMOSIS; minerals by ACTIVE TRANSPORT — don't mix.\n- Clotting: platelets + fibrin (not white cells).",
        },
      ],
    },
  ],
};
