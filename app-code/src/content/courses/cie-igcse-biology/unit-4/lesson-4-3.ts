import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "cieb-u4-lesson-4-3",
  code: "4-3",
  title: "Heart Control, Clotting and Plant Water Uptake",
  goal: "I CAN describe heart rate control, blood clotting, root pressure and phloem loading.",
  standards: ["0653 4.1", "0653 4.2", "0653 4.3", "0653 4.4"],
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
      id: "cieb-u4-heart-control",
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
          id: "cieb-u4-heart-control-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What triggers blood clotting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Damage to a blood vessel" },
              { id: "b", text: "Normal blood flow" },
              { id: "c", text: "Low oxygen" },
              { id: "d", text: "High temperature" },
            ],
            correctChoiceId: "a",
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
          id: "cieb-u4-heart-control-q2",
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
          id: "cieb-u4-heart-control-q3",
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
          id: "cieb-u4-heart-control-q4",
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
      ],
    },
    {
      id: "cieb-u4-plant-uptake",
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
          id: "cieb-u4-plant-uptake-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How do root hair cells absorb water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "By osmosis" },
              { id: "b", text: "By active transport" },
              { id: "c", text: "By diffusion of ions" },
              { id: "d", text: "By phagocytosis" },
            ],
            correctChoiceId: "a",
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
          id: "cieb-u4-plant-uptake-q2",
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
          id: "cieb-u4-plant-uptake-q3",
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
          id: "cieb-u4-plant-uptake-q4",
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
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u4-extended-notes",
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
