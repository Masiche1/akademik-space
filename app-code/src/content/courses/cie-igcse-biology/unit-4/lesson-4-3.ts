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
              { id: "a", text: "Low oxygen" },
              { id: "b", text: "High temperature" },
              { id: "c", text: "Normal blood flow" },
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
        {
          id: "cieb-u4-heart-control-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone increases heart rate during stress or exercise?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adrenaline" },
              { id: "b", text: "Thyroxine" },
              { id: "c", text: "Oestrogen" },
              { id: "d", text: "Insulin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Adrenaline", statement: "Raises heart rate in stress/exercise." },
            ],
            steps: [
              { reasoning: "Recall the hormone.", working: "\\text{adrenaline}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Adrenaline",
            commonErrors: ["Choosing insulin — that controls blood glucose, not heart rate."],
          },
        },
        {
          id: "cieb-u4-heart-control-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Heart rate is controlled by signals from which part of the brain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Medulla oblongata" },
              { id: "b", text: "Hypothalamus only" },
              { id: "c", text: "Cerebrum" },
              { id: "d", text: "Cerebellum" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Heart rate control", statement: "Medulla oblongata sends signals via nerves." },
            ],
            steps: [
              { reasoning: "Recall the control centre.", working: "\\text{medulla oblongata}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Medulla oblongata",
            commonErrors: ["Choosing cerebrum — that's conscious thought, not autonomic control."],
          },
        },
        {
          id: "cieb-u4-heart-control-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "During clotting, fibrinogen is converted into:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Insulin" },
              { id: "b", text: "Fibrin" },
              { id: "c", text: "Fibrinogen again" },
              { id: "d", text: "Haemoglobin" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Clotting", statement: "Fibrinogen → fibrin threads forming the mesh." },
            ],
            steps: [
              { reasoning: "Recall the conversion.", working: "\\text{fibrinogen} \\to \\text{fibrin}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Fibrin",
            commonErrors: ["Saying fibrinogen 'clots itself' — it is converted to fibrin first."],
          },
        },
        {
          id: "cieb-u4-heart-control-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person's heart beats at 60 beats per minute. Calculate how many beats occur in 45 seconds.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 45, unit: "beats" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate scaling", statement: "$60 \\times \\frac{45}{60} = 45$" },
            ],
            steps: [
              { reasoning: "Scale rate to 45 seconds.", working: "60 \\times 0.75", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "45\\,\\text{beats}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "45 beats",
            commonErrors: ["Multiplying 60 × 45 without converting seconds to minutes."],
          },
        },
        {
          id: "cieb-u4-heart-control-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person's heart rate rises from 60 to 180 beats per minute during exercise. Calculate the increase.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 120, unit: "beats/min" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate change", statement: "$180 - 60 = 120$" },
            ],
            steps: [
              { reasoning: "Subtract resting from peak rate.", working: "180 - 60", marks: 1, markCode: "M" },
              { reasoning: "State answer with units.", working: "120\\,\\text{beats/min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "120 beats/min",
            commonErrors: ["Giving the ratio (3×) instead of the difference."],
          },
        },
        {
          id: "cieb-u4-heart-control-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A person's heart beats 75 times per minute. How many beats occur in 8 minutes?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 600, unit: "beats" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total beats", statement: "$75 \\times 8 = 600$" },
            ],
            steps: [
              { reasoning: "Multiply rate by time in minutes.", working: "75 \\times 8 = 600", marks: 1, markCode: "B" },
            ],
            finalAnswer: "600 beats",
            commonErrors: ["Multiplying by seconds or forgetting the time unit."],
          },
        },
        {
          id: "cieb-u4-heart-control-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A runner's heart rate increases from 70 beats per minute at rest to 140 beats per minute during a race. Calculate the percentage increase in heart rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\% = \\dfrac{140 - 70}{70} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "\\frac{140 - 70}{70} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "100\\%", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100%",
            commonErrors: ["Dividing by 140 instead of 70 (the original value)."],
          },
        },
        {
          id: "cieb-u4-heart-control-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two roles of platelets in the clotting process.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Platelets", statement: "Aggregate at wound and release chemicals activating the clotting cascade." },
            ],
            steps: [
              { reasoning: "Give two roles.", working: "\\text{aggregate; release chemicals}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Platelets gather at the damaged vessel wall and release chemicals that trigger the clotting cascade converting fibrinogen to fibrin.",
            commonErrors: ["Saying platelets 'make fibrin' — they trigger the cascade; fibrin forms the mesh."],
          },
        },
        {
          id: "cieb-u4-heart-control-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Excessive clotting inside blood vessels is dangerous because it can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increase blood pressure beneficially" },
              { id: "b", text: "Produce more red blood cells" },
              { id: "c", text: "Block vessels, causing a heart attack or stroke" },
              { id: "d", text: "Speed up healing always" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Thrombosis", statement: "Clots blocking vessels → heart attack/stroke." },
            ],
            steps: [
              { reasoning: "Link clotting to blockage risk.", working: "\\text{clot} \\to \\text{block} \\to \\text{heart attack/stroke}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Block vessels, causing a heart attack or stroke",
            commonErrors: ["Saying clotting is 'always good' — excessive clotting is harmful."],
          },
        },
        {
          id: "cieb-u4-heart-control-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "During exercise, heart rate increases mainly to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Store more blood" },
              { id: "b", text: "Deliver more oxygen and glucose to the muscles" },
              { id: "c", text: "Cool the body down" },
              { id: "d", text: "Reduce blood pressure" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Exercise response", statement: "Faster pumping → more O₂/glucose to muscles." },
            ],
            steps: [
              { reasoning: "Link rate to delivery.", working: "\\text{faster} \\to \\text{more O}_2/\\text{glucose}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Deliver more oxygen and glucose to the muscles",
            commonErrors: ["Saying 'to rest the heart' — rate increases to work harder."],
          },
        },
        {
          id: "cieb-u4-heart-control-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Fibrin threads form what structure that traps blood cells to make a clot?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A membrane" },
              { id: "b", text: "A solid plug" },
              { id: "c", text: "A mesh" },
              { id: "d", text: "A valve" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fibrin mesh", statement: "Insoluble threads trap cells → clot seals wound." },
            ],
            steps: [
              { reasoning: "Recall the structure.", working: "\\text{mesh}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A mesh",
            commonErrors: ["Saying 'solid plug' — fibrin forms a mesh that traps cells."],
          },
        },
        {
          id: "cieb-u4-heart-control-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how adrenaline affects heart rate and why this response is useful during danger or exercise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Adrenaline", statement: "Released in stress/exercise → raises heart rate → faster O₂/glucose delivery." },
            ],
            steps: [
              { reasoning: "Adrenaline is released during stress/exercise.", working: "\\text{adrenaline released}", marks: 1, markCode: "M" },
              { reasoning: "It increases the heart rate.", working: "\\text{HR increases}", marks: 1, markCode: "M" },
              { reasoning: "Faster pumping delivers more O₂/glucose to muscles.", working: "\\text{more O}_2/\\text{glucose}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: prepares the body for action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Adrenaline is released in stress or exercise and increases heart rate; the faster circulation delivers more oxygen and glucose to muscles, preparing the body for action.",
            commonErrors: ["Saying adrenaline 'clots blood' — its role here is raising heart rate."],
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
              { id: "b", text: "By phagocytosis" },
              { id: "c", text: "By active transport" },
              { id: "d", text: "By diffusion of ions" },
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
        {
          id: "cieb-u4-plant-uptake-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Mineral ions are absorbed by root hair cells by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Osmosis" },
              { id: "b", text: "Active transport" },
              { id: "c", text: "Simple diffusion" },
              { id: "d", text: "Phagocytosis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ion uptake", statement: "Mineral ions move against the gradient by active transport." },
            ],
            steps: [
              { reasoning: "Recall the mechanism.", working: "\\text{active transport}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Active transport",
            commonErrors: ["Choosing osmosis — that is for water, not ions."],
          },
        },
        {
          id: "cieb-u4-plant-uptake-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Root pressure helps water transport by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pulling water down to roots" },
              { id: "b", text: "Closing the stomata" },
              { id: "c", text: "Loading sucrose into phloem" },
              { id: "d", text: "Pushing water up the xylem" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Root pressure", statement: "Osmotic pressure from ion uptake pushes water up xylem." },
            ],
            steps: [
              { reasoning: "Recall the direction of force.", working: "\\text{push up}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Pushing water up the xylem",
            commonErrors: ["Saying 'pulling' — root pressure pushes; transpiration pulls."],
          },
        },
        {
          id: "cieb-u4-plant-uptake-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Water enters root hair cells by osmosis because the soil solution has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No water at all" },
              { id: "b", text: "More salt than the cell" },
              { id: "c", text: "A higher water potential than the cell sap" },
              { id: "d", text: "A lower water potential than the cell sap" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Osmosis in roots", statement: "Water moves from higher to lower water potential." },
            ],
            steps: [
              { reasoning: "Recall the gradient.", working: "\\psi_{\\text{soil}} > \\psi_{\\text{cell}}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A higher water potential than the cell sap",
            commonErrors: ["Reversing the gradient — water flows high → low water potential."],
          },
        },
        {
          id: "cieb-u4-plant-uptake-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A root absorbs 0.3 cm³ of water per hour. Calculate the total water absorbed in 5 hours.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.5, unit: "cm³" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total amount", statement: "$0.3 \\times 5 = 1.5$" },
            ],
            steps: [
              { reasoning: "Multiply rate by time.", working: "0.3 \\times 5", marks: 1, markCode: "M" },
              { reasoning: "State answer with units.", working: "1.5\\,\\text{cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.5 cm³",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "cieb-u4-plant-uptake-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Each of 10 root hairs absorbs 2 µm³ of water. Calculate the total volume of water absorbed.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "µm³" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total volume", statement: "$2 \\times 10 = 20$" },
            ],
            steps: [
              { reasoning: "Multiply per-hair volume by number of hairs.", working: "2 \\times 10", marks: 1, markCode: "M" },
              { reasoning: "State answer with units.", working: "20\\,\\mu\\text{m}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 µm³",
            commonErrors: ["Adding instead of multiplying (giving 12)."],
          },
        },
        {
          id: "cieb-u4-plant-uptake-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many cell types work together in phloem loading at a source (sieve tube and companion cell)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "cell types" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Phloem loading cells", statement: "Sieve tubes + companion cells." },
            ],
            steps: [
              { reasoning: "Count the cell types.", working: "2\\,\\text{types}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 1 — both sieve tube and companion cell are involved."],
          },
        },
        {
          id: "cieb-u4-plant-uptake-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Sucrose is loaded into phloem at a rate of 0.4 mg per minute. Calculate the total sucrose loaded in 30 minutes.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12, unit: "mg" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total amount", statement: "$0.4 \\times 30 = 12$" },
            ],
            steps: [
              { reasoning: "Multiply rate by time.", working: "0.4 \\times 30", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "12\\,\\text{mg}", marks: 1, markCode: "M" },
              { reasoning: "State answer with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 mg",
            commonErrors: ["Dividing by time instead of multiplying."],
          },
        },
        {
          id: "cieb-u4-plant-uptake-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways water moves from the soil into the xylem of a root.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Water pathway in root", statement: "Osmosis into root hairs → across cortex → into xylem via root pressure." },
            ],
            steps: [
              { reasoning: "Give two stages.", working: "\\text{osmosis into root hair; across cortex}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water enters root hair cells by osmosis, crosses the cortex cells by osmosis, and is pushed into the xylem vessels partly by root pressure.",
            commonErrors: ["Saying 'active transport' for water — water moves by osmosis."],
          },
        },
        {
          id: "cieb-u4-plant-uptake-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Root pressure is most useful to a plant at night because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Transpiration is low, so root pressure can push water up the xylem" },
              { id: "b", text: "Soil is driest" },
              { id: "c", text: "Stomata are wide open" },
              { id: "d", text: "Photosynthesis is fastest" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Root pressure timing", statement: "Important when transpiration pull is weak (night)." },
            ],
            steps: [
              { reasoning: "Link night to low transpiration.", working: "\\text{night} \\to \\text{low transpiration} \\to \\text{root pressure matters}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Transpiration is low, so root pressure can push water up the xylem",
            commonErrors: ["Saying 'transpiration is high at night' — it is lowest then."],
          },
        },
        {
          id: "cieb-u4-plant-uptake-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Xylem transports which substances?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water and dissolved minerals" },
              { id: "b", text: "Only glucose" },
              { id: "c", text: "Only oxygen" },
              { id: "d", text: "Sucrose and amino acids" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Xylem cargo", statement: "Water + dissolved mineral ions, upward." },
            ],
            steps: [
              { reasoning: "Match tissue to cargo.", working: "\\text{xylem} = \\text{water + minerals}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Water and dissolved minerals",
            commonErrors: ["Choosing sucrose — that is phloem."],
          },
        },
        {
          id: "cieb-u4-plant-uptake-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sucrose is loaded into phloem sieve tubes by which cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guard cells" },
              { id: "b", text: "Xylem vessels" },
              { id: "c", text: "Companion cells" },
              { id: "d", text: "Root hair cells" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Companion cells", statement: "Active loading of sucrose into sieve tubes." },
            ],
            steps: [
              { reasoning: "Recall the loading cells.", working: "\\text{companion cells}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Companion cells",
            commonErrors: ["Choosing xylem vessels — they are dead and transport water."],
          },
        },
        {
          id: "cieb-u4-plant-uptake-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the active transport of mineral ions helps drive water uptake in roots.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Ion-driven water uptake", statement: "Active ion uptake lowers water potential → water follows by osmosis → root pressure." },
            ],
            steps: [
              { reasoning: "Mineral ions are actively transported into root cells/xylem.", working: "\\text{active transport of ions}", marks: 1, markCode: "M" },
              { reasoning: "This lowers the water potential inside the root.", working: "\\text{lower water potential}", marks: 1, markCode: "M" },
              { reasoning: "Water then enters by osmosis down the gradient.", working: "\\text{osmosis}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: ion uptake drives water uptake and root pressure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mineral ions are actively pumped into the root cells and xylem, lowering the water potential inside; water then follows by osmosis, and the resulting pressure (root pressure) helps push water up the plant.",
            commonErrors: ["Saying 'ions are absorbed by osmosis' — ions move by active transport."],
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
