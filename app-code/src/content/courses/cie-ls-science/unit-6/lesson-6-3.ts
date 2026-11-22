import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "cils-u6-lesson-6-3",
  code: "6-3",
  title: "Forces in fluids and buoyancy",
  goal: "I CAN describe pressure in fluids, buoyancy and why objects float or sink.",
  standards: ["0893 Physics: fluids"],
  vocabulary: [
    { term: "Fluid", definition: "Substance that flows — liquid or gas." },
    { term: "Buoyancy", definition: "Upward force on object in fluid — equals weight of displaced fluid." },
    { term: "Archimedes' principle", definition: "Buoyant force = weight of fluid displaced." },
    { term: "Density", definition: "Mass per unit volume — kg/m³." },
    { term: "Floating", definition: "Object rests on surface — buoyancy equals weight." },
    { term: "Pressure in fluid", definition: "Increases with depth — acts in all directions." },
  ],
  concepts: [
    {
      id: "cils-u6-fluids",
      title: "Fluids and pressure",
      skill: "Describe pressure in fluids and factors affecting it.",
      lesson: {
        sections: [
          {
            heading: "Pressure in fluids",
            body: "Fluid pressure = force ÷ area. Increases with depth (ρgh). Acts equally in all directions — that's why you can't feel it on your skin.",
          },
          {
            heading: "Density and buoyancy",
            body: "Density = mass ÷ volume. Objects denser than fluid sink; less dense float. Buoyancy = upward force balancing weight of displaced fluid.",
          },
          {
            heading: "Applications",
            body: "Submarines: ballast tanks control buoyancy. Ships: hollow = low average density = float. Fish: swim bladder adjusts buoyancy.",
          },
        ],
        keyFormulas: [
          { name: "Density", statement: "density = mass ÷ volume (kg/m³)" },
          { name: "Buoyancy", statement: "buoyant force = weight of displaced fluid" },
        ],
        workedExample: {
          problem: "A 0.5 m³ object has mass 400 kg. Will it float in water (density 1000 kg/m³)?",
          solution: "Object density = 400 ÷ 0.5 = 800 kg/m³ < 1000 — less dense, will float.",
        },
      },
      questions: [
        {
          id: "cils-u6-fluid-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is buoyancy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Air resistance" },
              { id: "b", text: "Upward force from displaced fluid" },
              { id: "c", text: "Friction" },
              { id: "d", text: "Downward gravity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Buoyancy", statement: "Upward force = weight of displaced fluid." },
            ],
            steps: [
              { reasoning: "Buoyancy = upward push from fluid.", working: "upward", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Upward force from displaced fluid",
            commonErrors: ["Choosing (b) — gravity pulls down, buoyancy pushes up."],
          },
        },
        {
          id: "cils-u6-fluid-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "An object has mass 500 kg and volume 0.4 m³. Calculate density.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Density", statement: "ρ = m ÷ V = 500 ÷ 0.4 = 1250 kg/m³" },
            ],
            steps: [
              { reasoning: "ρ = 500 ÷ 0.4.", working: "1250", marks: 1, markCode: "M" },
              { reasoning: "= 1250 kg/m³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1250 kg/m³",
            commonErrors: ["Using volume ÷ mass — density = mass ÷ volume."],
          },
        },
        {
          id: "cils-u6-fluid-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a steel ship floats despite steel being denser than water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Buoyancy", statement: "Hollow ship displaces lots of water — average density < water." },
            ],
            steps: [
              { reasoning: "Ship is hollow — mostly air inside, not solid steel.", working: "hollow", marks: 1, markCode: "M" },
              { reasoning: "Displaces volume of water weighing more than ship.", working: "displacement", marks: 1, markCode: "M" },
              { reasoning: "Average density (mass ÷ total volume) < water density.", working: "average density", marks: 1, markCode: "M" },
              { reasoning: "Explanation clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hollow shape → displaces more water than its weight → floats.",
            commonErrors: ["Saying 'steel floats' — it's the ship's shape/average density that matters."],
          },
        },
        {
          id: "cils-u6-fluid-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse buoyancy and density.",
          parts: [
            { label: "a", prompt: "Define density.", marks: 1 },
            { label: "b", prompt: "State Archimedes' principle.", marks: 2 },
            { label: "c", prompt: "Explain why objects float or sink.", marks: 3 },
            { label: "d", prompt: "How do submarines control buoyancy?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Buoyancy", statement: "Density comparison determines float/sink; ballast tanks adjust buoyancy." },
            ],
            steps: [
              { part: "a", reasoning: "Mass per unit volume.", working: "definition", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Buoyant force = weight of displaced fluid.", working: "principle", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Less dense than fluid → buoyancy > weight → floats; denser → sinks.", working: "float/sink", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Ballast tanks fill with water to sink, empty to rise — adjusts average density.", working: "ballast", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Mechanism correct.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) mass/volume (b) buoyant force=displaced weight (c) density comparison (d) ballast tanks adjust density",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Explained.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Confusing mass and density — it's density that determines floating."],
          },
        },
        {
          id: "cils-u6-fluid-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula for density?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "mass ÷ volume" },
              { id: "b", text: "mass × volume" },
              { id: "c", text: "volume ÷ mass" },
              { id: "d", text: "force ÷ area" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Density", statement: "density = mass ÷ volume (kg/m³)." },
            ],
            steps: [
              { reasoning: "Density = mass per unit volume.", working: "m/V", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** mass ÷ volume",
            commonErrors: ["Choosing (b) — inverts the formula."],
          },
        },
        {
          id: "cils-u6-fluid-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An object will sink in water if its density is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero" },
              { id: "b", text: "Greater than the density of water" },
              { id: "c", text: "Less than the density of water" },
              { id: "d", text: "Equal to the density of air" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Float/sink", statement: "Denser than fluid → sinks; less dense → floats." },
            ],
            steps: [
              { reasoning: "Higher density than water → sinks.", working: "denser sinks", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Greater than water",
            commonErrors: ["Choosing (b) — less dense objects float."],
          },
        },
        {
          id: "cils-u6-fluid-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Archimedes' principle states that the buoyant force on an object equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The weight of the object" },
              { id: "b", text: "The density of the object" },
              { id: "c", text: "The volume of the object" },
              { id: "d", text: "The weight of the fluid displaced" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Archimedes' principle", statement: "Buoyant force = weight of displaced fluid." },
            ],
            steps: [
              { reasoning: "Buoyancy equals weight of displaced fluid.", working: "displaced weight", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Weight of displaced fluid",
            commonErrors: ["Choosing (b) — buoyancy relates to displaced fluid, not object weight."],
          },
        },
        {
          id: "cils-u6-fluid-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the unit of density?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{N}$" },
              { id: "b", text: "$\\text{Pa}$" },
              { id: "c", text: "$\\text{kg} \\times \\text{m}^3$" },
              { id: "d", text: "$\\text{kg/m}^3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Density unit", statement: "kg/m³ (or g/cm³)." },
            ],
            steps: [
              { reasoning: "Density = mass/volume = kg ÷ m³.", working: "kg/m³", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $\\text{kg/m}^3$",
            commonErrors: ["Choosing (b) — N is force."],
          },
        },
        {
          id: "cils-u6-fluid-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A fish uses its swim bladder to rise or sink by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using magnetic force" },
              { id: "b", text: "Changing the water's density" },
              { id: "c", text: "Swimming faster" },
              { id: "d", text: "Adjusting the volume of gas inside — changing its average density" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Swim bladder", statement: "Gas volume changes average density → controls buoyancy." },
            ],
            steps: [
              { reasoning: "More gas = less dense = rises; less gas = denser = sinks.", working: "density", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Adjusts gas volume → density",
            commonErrors: ["Choosing (b) — swimming is propulsion, not buoyancy control."],
          },
        },
        {
          id: "cils-u6-fluid-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Pressure in a fluid acts:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only upwards" },
              { id: "b", text: "Only downwards" },
              { id: "c", text: "Equally in all directions at a given depth" },
              { id: "d", text: "Only sideways" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fluid pressure", statement: "At a given depth, pressure acts equally in all directions." },
            ],
            steps: [
              { reasoning: "Fluid pressure is isotropic at a depth.", working: "all directions", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Equally in all directions",
            commonErrors: ["Choosing (b) — pressure acts in all directions, not just down."],
          },
        },
        {
          id: "cils-u6-fluid-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A log floats in water but sinks in alcohol because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alcohol is denser than water" },
              { id: "b", text: "Alcohol has no density" },
              { id: "c", text: "Logs are magnetic" },
              { id: "d", text: "Water is denser than alcohol — the log is less dense than water but denser than alcohol" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Density comparison", statement: "Float if object less dense than fluid — water denser than alcohol." },
            ],
            steps: [
              { reasoning: "ρ(log) between ρ(alcohol) and ρ(water).", working: "density", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Log less dense than water, denser than alcohol",
            commonErrors: ["Choosing (b) — alcohol is LESS dense than water."],
          },
        },
        {
          id: "cils-u6-fluid-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An object has mass $600\\ \\text{kg}$ and volume $0.5\\ \\text{m}^3$. What is its density? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Density", answer: 1200, unit: "kg/m³" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$\\rho = m \\div V$" },
            ],
            steps: [
              { reasoning: "$\\rho = 600 \\div 0.5$.", working: "600 ÷ 0.5", marks: 1, markCode: "M" },
              { reasoning: "$1200\\ \\text{kg/m}^3$.", working: "1200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1200\\ \\text{kg/m}^3$",
          },
        },
        {
          id: "cils-u6-fluid-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "An object has density $800\\ \\text{kg/m}^3$ and volume $0.25\\ \\text{m}^3$. What is its mass? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Mass", answer: 200, unit: "kg" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$m = \\rho \\times V$" },
            ],
            steps: [
              { reasoning: "$m = 800 \\times 0.25$.", working: "800 × 0.25", marks: 1, markCode: "M" },
              { reasoning: "$200\\ \\text{kg}$.", working: "200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$200\\ \\text{kg}$",
          },
        },
        {
          id: "cils-u6-fluid-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A block has mass $200\\ \\text{g}$ and volume $50\\ \\text{cm}^3$. What is its density? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Density", answer: 4, unit: "g/cm³" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$\\rho = m \\div V = 200 \\div 50$" },
            ],
            steps: [
              { reasoning: "$200 \\div 50 = 4$.", working: "200 ÷ 50", marks: 1, markCode: "M" },
              { reasoning: "$4\\ \\text{g/cm}^3$.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\ \\text{g/cm}^3$",
          },
        },
        {
          id: "cils-u6-fluid-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A $2\\ \\text{m}^3$ object has density $500\\ \\text{kg/m}^3$. What is its mass? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Mass", answer: 1000, unit: "kg" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$m = \\rho \\times V = 500 \\times 2$" },
            ],
            steps: [
              { reasoning: "$500 \\times 2 = 1000$.", working: "500 × 2", marks: 1, markCode: "M" },
              { reasoning: "$1000\\ \\text{kg}$.", working: "1000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1000\\ \\text{kg}$",
          },
        },
        {
          id: "cils-u6-fluid-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a helium balloon rises in air while a stone sinks, using density and buoyancy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Buoyancy in gases", statement: "Objects less dense than surrounding fluid experience net upward buoyant force." },
            ],
            steps: [
              { reasoning: "Helium balloon: average density (helium + balloon) < air density.", working: "balloon", marks: 1, markCode: "M" },
              { reasoning: "Buoyant force (weight of displaced air) exceeds total weight → rises.", working: "buoyancy", marks: 1, markCode: "M" },
              { reasoning: "Stone: density > air → buoyancy smaller than weight → sinks/falls.", working: "stone", marks: 1, markCode: "M" },
              { reasoning: "Both cases explained via density comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Balloon less dense than air → buoyancy > weight → rises; stone denser → falls.",
            commonErrors: ["Saying helium 'pushes up' — it's displaced air weight (buoyancy)."],
          },
        },
      ],
    },
    {
      id: "cils-u6-pressure-fluids",
      title: "Pressure in liquids and gases",
      skill: "Explain pressure variation with depth and applications.",
      lesson: {
        sections: [
          {
            heading: "Pressure increases with depth",
            body: "Fluid pressure = ρgh — increases with depth. That's why dam walls are thicker at bottom.",
          },
          {
            heading: "Atmospheric pressure",
            body: "Air has weight — creates pressure ~101,325 Pa at sea level. Decreases with altitude.",
          },
          {
            heading: "Applications",
            body: "Hydraulic brakes, syringes, barometers, diving (pressure increases underwater), weather systems.",
          },
        ],
        keyFormulas: [
          { name: "Fluid pressure", statement: "p = ρgh — increases with depth; atmospheric ~101 kPa at sea level." },
        ],
        workedExample: {
          problem: "Why are dam walls thicker at the bottom?",
          solution: "Water pressure increases with depth — bottom needs more strength to withstand higher pressure.",
        },
      },
      questions: [
        {
          id: "cils-u6-pressf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does fluid pressure change with depth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stays constant" },
              { id: "b", text: "Varies randomly" },
              { id: "c", text: "Increases" },
              { id: "d", text: "Decreases" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Fluid pressure", statement: "Increases with depth (p = ρgh)." },
            ],
            steps: [
              { reasoning: "Deeper = more fluid above = more pressure.", working: "increases", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Increases",
            commonErrors: ["Choosing (c) — pressure varies with depth."],
          },
        },
        {
          id: "cils-u6-pressf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is atmospheric pressure caused by?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Atmospheric pressure", statement: "Weight of air column pressing down on surface." },
            ],
            steps: [
              { reasoning: "Air has mass/weight — presses on everything.", working: "air weight", marks: 1, markCode: "M" },
              { reasoning: "~101 kPa at sea level.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weight of air above — ~101,325 Pa at sea level.",
            commonErrors: ["Saying 'air pushes' — it's gravity on air mass."],
          },
        },
        {
          id: "cils-u6-pressf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why your ears 'pop' when diving or flying.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pressure equalisation", statement: "Eustachian tube equalises pressure between middle ear and outside." },
            ],
            steps: [
              { reasoning: "Pressure changes rapidly during ascent/descent.", working: "pressure change", marks: 1, markCode: "M" },
              { reasoning: "Middle ear pressure differs from outside → eardrum bulges.", working: "eardrum", marks: 1, markCode: "M" },
              { reasoning: "Swallowing/yawning opens Eustachian tube — equalises pressure.", working: "equalise", marks: 1, markCode: "M" },
              { reasoning: "Mechanism explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pressure imbalance bulges eardrum; swallowing opens tube to equalise.",
            commonErrors: ["Saying 'water in ears' — it's air pressure difference."],
          },
        },
        {
          id: "cils-u6-pressf-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate pressure in fluids.",
          parts: [
            { label: "a", prompt: "State the formula for fluid pressure.", marks: 1 },
            { label: "b", prompt: "Explain why pressure increases with depth.", marks: 2 },
            { label: "c", prompt: "Describe an experiment to show pressure at depth.", marks: 3 },
            { label: "d", prompt: "Give two applications of fluid pressure.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fluid pressure", statement: "p=ρgh; increases with depth; applications in hydraulics/diving." },
            ],
            steps: [
              { part: "a", reasoning: "p = ρgh.", working: "formula", marks: 1, markCode: "M" },
              { part: "b", reasoning: "More fluid above = more weight pressing down.", working: "depth", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Hole punch in bottle at different heights — lower hole spurts further (higher pressure).", working: "experiment", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Method valid.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Shows depth effect.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Hydraulic brakes/lifts; diving equipment; dams; syringes.", working: "applications", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Two+ valid.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) p=ρgh (b) more fluid above (c) hole punch depth test (d) hydraulics/diving/dams",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Experiment good.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Two+ applications.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One.", part: "d" },
            ],
            commonErrors: ["Saying pressure is same at all depths — it increases."],
          },
        },
        {
          id: "cils-u6-pressf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula for pressure in a fluid at depth $h$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$p = \\rho g h$" },
              { id: "b", text: "$p = F \\times A$" },
              { id: "c", text: "$p = d \\div t$" },
              { id: "d", text: "$p = m \\times v$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Fluid pressure", statement: "p = ρgh — pressure increases with depth." },
            ],
            steps: [
              { reasoning: "p = ρgh for fluid pressure at depth.", working: "ρgh", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $p = \\rho g h$",
            commonErrors: ["Choosing (b) — F×A is not pressure."],
          },
        },
        {
          id: "cils-u6-pressf-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Atmospheric pressure at sea level is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10\\ \\text{kPa}$" },
              { id: "b", text: "$1000\\ \\text{kPa}$" },
              { id: "c", text: "$101\\ \\text{kPa}$" },
              { id: "d", text: "$1\\ \\text{kPa}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Atmospheric pressure", statement: "≈ 101,325 Pa = ~101 kPa at sea level." },
            ],
            steps: [
              { reasoning: "Standard atmospheric pressure ≈ 101 kPa.", working: "101 kPa", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $101\\ \\text{kPa}$",
            commonErrors: ["Choosing (c) — that's 10× too high."],
          },
        },
        {
          id: "cils-u6-pressf-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A barometer is used to measure:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature" },
              { id: "b", text: "Atmospheric pressure" },
              { id: "c", text: "Wind speed" },
              { id: "d", text: "Humidity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Barometer", statement: "Measures atmospheric pressure — used for weather forecasting." },
            ],
            steps: [
              { reasoning: "Barometer = pressure measuring instrument.", working: "barometer", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Atmospheric pressure",
            commonErrors: ["Choosing (b) — thermometer measures temperature."],
          },
        },
        {
          id: "cils-u6-pressf-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "At the same depth in a lake, the pressure acts:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equally in all directions" },
              { id: "b", text: "Greater at the surface" },
              { id: "c", text: "Only upwards" },
              { id: "d", text: "Only downwards" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fluid pressure", statement: "At a given depth, pressure is equal in all directions." },
            ],
            steps: [
              { reasoning: "Pressure at depth is isotropic.", working: "all directions", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Equally in all directions",
            commonErrors: ["Choosing (b) — not just downward."],
          },
        },
        {
          id: "cils-u6-pressf-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do dam walls get thicker towards the bottom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To look stronger" },
              { id: "b", text: "Water pressure increases with depth — bottom must withstand more force" },
              { id: "c", text: "Because water is heavier at the bottom" },
              { id: "d", text: "To store more water" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pressure applications", statement: "p = ρgh increases with depth → stronger walls at base." },
            ],
            steps: [
              { reasoning: "Greater depth = greater pressure = need thicker walls.", working: "depth", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Pressure increases with depth",
            commonErrors: ["Choosing (d) — water density is uniform; it's pressure that grows."],
          },
        },
        {
          id: "cils-u6-pressf-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Atmospheric pressure DECREASES as you go:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Towards sea level" },
              { id: "b", text: "Deeper underwater" },
              { id: "c", text: "Into a valley" },
              { id: "d", text: "Higher in altitude (mountains)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Atmospheric pressure", statement: "Less air above = lower pressure at altitude." },
            ],
            steps: [
              { reasoning: "Higher altitude → thinner air column → lower pressure.", working: "altitude", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Higher altitude",
            commonErrors: ["Choosing (c) — sea level has the highest pressure."],
          },
        },
        {
          id: "cils-u6-pressf-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Hydraulic brakes in cars work because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They increase friction directly" },
              { id: "b", text: "Pressure applied to brake fluid is transmitted equally to all wheels" },
              { id: "c", text: "They create a vacuum" },
              { id: "d", text: "They use compressed air only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hydraulics", statement: "Pascal's principle — fluid pressure transmits equally." },
            ],
            steps: [
              { reasoning: "Brake fluid carries pressure to all wheels equally.", working: "transmit", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Pressure transmitted equally",
            commonErrors: ["Choosing (d) — friction is the result, hydraulics transmit the force."],
          },
        },
        {
          id: "cils-u6-pressf-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Convert $101\\ \\text{kPa}$ to pascals. Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Pressure", answer: 101000, unit: "Pa" }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Units", statement: "$1\\ \\text{kPa} = 1000\\ \\text{Pa}$" },
            ],
            steps: [
              { reasoning: "$101 \\times 1000$.", working: "101 × 1000", marks: 1, markCode: "M" },
              { reasoning: "$101000\\ \\text{Pa}$.", working: "101000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$101000\\ \\text{Pa}$",
          },
        },
        {
          id: "cils-u6-pressf-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "The pressure at $10\\ \\text{m}$ depth in water is $P$. What is the pressure at $20\\ \\text{m}$ depth (ignoring atmospheric pressure)? Enter your answer as a multiple of $P$.",
          response: {
            type: "numeric",
            parts: [{ label: "Multiple", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fluid pressure", statement: "$p = \\rho g h$ — proportional to depth." },
            ],
            steps: [
              { reasoning: "Doubling depth doubles pressure (p ∝ h).", working: "2× depth", marks: 1, markCode: "M" },
              { reasoning: "$2P$.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2P$",
          },
        },
        {
          id: "cils-u6-pressf-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Using $p = \\rho g h$ with $\\rho = 1000\\ \\text{kg/m}^3$, $g = 10\\ \\text{N/kg}$ and $h = 5\\ \\text{m}$, calculate the pressure. Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Pressure", answer: 50000, unit: "Pa" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fluid pressure", statement: "$p = \\rho g h = 1000 \\times 10 \\times 5$" },
            ],
            steps: [
              { reasoning: "$1000 \\times 10 \\times 5 = 50000$.", working: "1000 × 10 × 5", marks: 1, markCode: "M" },
              { reasoning: "$50000\\ \\text{Pa}$.", working: "50000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50000\\ \\text{Pa}$",
          },
        },
        {
          id: "cils-u6-pressf-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Pressure at a depth of $2\\ \\text{m}$ in water is $20\\ \\text{kPa}$. What is the pressure at $6\\ \\text{m}$ depth? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Pressure", answer: 60, unit: "kPa" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fluid pressure", statement: "p ∝ h — tripling depth triples pressure." },
            ],
            steps: [
              { reasoning: "$6 \\div 2 = 3$ times deeper → $20 \\times 3$.", working: "20 × 3", marks: 1, markCode: "M" },
              { reasoning: "$60\\ \\text{kPa}$.", working: "60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60\\ \\text{kPa}$",
          },
        },
        {
          id: "cils-u6-pressf-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a submarine uses ballast tanks to dive beneath the surface and then rise again.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ballast tanks", statement: "Filling tanks with water increases average density → sinks; emptying → rises." },
            ],
            steps: [
              { reasoning: "To dive: tanks flood with water — average density increases above water's.", working: "fill", marks: 1, markCode: "M" },
              { reasoning: "Denser than water → weight exceeds buoyancy → submarine sinks.", working: "sink", marks: 1, markCode: "M" },
              { reasoning: "To rise: tanks pumped out — density drops below water → buoyancy exceeds weight → rises.", working: "empty", marks: 1, markCode: "M" },
              { reasoning: "Full dive/rise cycle explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Flood tanks to sink (denser); pump out to rise (less dense).",
            commonErrors: ["Saying the submarine 'pushes water' — it changes its own density."],
          },
        },
      ],
    },
    {
      id: "cils-u6-summary",
      title: "Forces summary and problem solving",
      skill: "Combine force, motion, pressure and buoyancy concepts in problems.",
      lesson: {
        sections: [
          {
            heading: "Key equations",
            body: "- speed = distance ÷ time\n- acceleration = (v-u) ÷ t\n- weight = mass × g\n- pressure = force ÷ area\n- moment = force × distance\n- density = mass ÷ volume",
          },
          {
            heading: "Force balance",
            body: "Free body diagrams: identify all forces, resolve vertically/horizontally, check balance.",
          },
          {
            heading: "Problem solving",
            body: "1. Identify what changes (speed, direction, shape)\n2. Determine force causing it\n3. Apply relevant equation\n4. Check units and reasonableness",
          },
        ],
        keyFormulas: [
          { name: "All equations", statement: "speed=d/t; a=(v-u)/t; W=mg; p=F/A; M=Fd; ρ=m/V" },
        ],
        workedExample: {
          problem: "A 2 kg mass accelerates at 3 m/s². What net force is needed?",
          solution: "F = m × a = 2 × 3 = 6 N.",
        },
      },
      questions: [
        {
          id: "cils-u6-sum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What equation links force, mass and acceleration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "F = m + a" },
              { id: "b", text: "F = a ÷ m" },
              { id: "c", text: "F = m × a" },
              { id: "d", text: "F = m ÷ a" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Newton's 2nd", statement: "F = ma — force = mass × acceleration." },
            ],
            steps: [
              { reasoning: "F = ma.", working: "ma", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** F = m × a",
            commonErrors: ["Inverting formula — F = ma not m/F."],
          },
        },
        {
          id: "cils-u6-sum-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 10 kg mass has weight 100 N on Earth. What is g?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "g", statement: "W = mg → g = W ÷ m = 100 ÷ 10 = 10 N/kg" },
            ],
            steps: [
              { reasoning: "g = W ÷ m = 100 ÷ 10.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "= 10 N/kg.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 N/kg",
            commonErrors: ["Using W = mg wrong direction — rearrange correctly."],
          },
        },
        {
          id: "cils-u6-sum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A car of mass 1000 kg accelerates at 2 m/s². Calculate net force and explain what causes it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Newton's 2nd", statement: "F = ma = 1000 × 2 = 2000 N net force." },
            ],
            steps: [
              { reasoning: "F = 1000 × 2 = 2000 N.", working: "2000", marks: 1, markCode: "M" },
              { reasoning: "Correct calculation.", marks: 1, markCode: "M" },
              { reasoning: "Net force = engine force - friction/drag.", working: "net", marks: 1, markCode: "M" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2000 N net force — engine force minus friction/drag.",
            commonErrors: ["Using total engine force — need NET force."],
          },
        },
        {
          id: "cils-u6-sum-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Solve a multi-step force problem.",
          parts: [
            { label: "a", prompt: "A 5 kg mass has weight? (g=10)", marks: 1 },
            { label: "b", prompt: "If net force = 20 N, what acceleration?", marks: 2 },
            { label: "c", prompt: "After 4s, what's final velocity (u=0)?", marks: 3 },
            { label: "d", prompt: "What distance does it cover?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Kinematics", statement: "W=mg; a=F/m; v=u+at; s=ut+½at²." },
            ],
            steps: [
              { part: "a", reasoning: "W = 5 × 10 = 50 N.", working: "50", marks: 1, markCode: "M" },
              { part: "b", reasoning: "a = F ÷ m = 20 ÷ 5 = 4 m/s².", working: "4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "v = u + at = 0 + 4×4 = 16 m/s.", working: "16", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "s = ut + ½at² = 0 + ½×4×16 = 32 m.", working: "32", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct formula.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 50 N (b) 4 m/s² (c) 16 m/s (d) 32 m",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Correct.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Correct.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Using v=u+at wrong — check u=0 assumption."],
          },
        },
        {
          id: "cils-u6-sum-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Rearranging $F = m \\times a$, the acceleration is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$a = m \\div F$" },
              { id: "b", text: "$a = F + m$" },
              { id: "c", text: "$a = F \\div m$" },
              { id: "d", text: "$a = F \\times m$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Newton's 2nd law", statement: "$a = F \\div m$ when rearranged." },
            ],
            steps: [
              { reasoning: "Divide both sides by m.", working: "a=F/m", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $a = F \\div m$",
            commonErrors: ["Choosing (c) — that inverts the relationship."],
          },
        },
        {
          id: "cils-u6-sum-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which equation gives final velocity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$v = u + at$" },
              { id: "b", text: "$v = s \\div u$" },
              { id: "c", text: "$v = u \\times t$" },
              { id: "d", text: "$v = a \\div t$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Kinematics", statement: "$v = u + at$ — final velocity = initial + acceleration × time." },
            ],
            steps: [
              { reasoning: "v = u + at is the correct equation.", working: "v=u+at", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $v = u + at$",
            commonErrors: ["Choosing (b) — units don't work (m/s × s = m)."],
          },
        },
        {
          id: "cils-u6-sum-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "An object moving at constant velocity has a net force of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equal to its weight" },
              { id: "b", text: "Impossible to determine" },
              { id: "c", text: "Maximum" },
              { id: "d", text: "Zero" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Newton's 1st law", statement: "Constant velocity (including zero) requires zero net force." },
            ],
            steps: [
              { reasoning: "No acceleration → no net force.", working: "net = 0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Zero",
            commonErrors: ["Choosing (b) — maximum force causes maximum acceleration."],
          },
        },
        {
          id: "cils-u6-sum-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A free body diagram is used to show:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The object's volume" },
              { id: "b", text: "All the forces acting on an object" },
              { id: "c", text: "The object's temperature" },
              { id: "d", text: "The object's colour" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Free body diagram", statement: "Diagram showing all forces as arrows on a point." },
            ],
            steps: [
              { reasoning: "FBD shows forces acting on the object.", working: "forces", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** All forces acting on object",
            commonErrors: ["Choosing (d) — FBDs show forces, not dimensions."],
          },
        },
        {
          id: "cils-u6-sum-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The equation $s = ut + \\frac{1}{2}at^2$ is used to find:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Density" },
              { id: "b", text: "Force" },
              { id: "c", text: "Distance travelled under constant acceleration" },
              { id: "d", text: "Pressure" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Kinematics", statement: "$s = ut + \\frac{1}{2}at^2$ gives displacement/distance." },
            ],
            steps: [
              { reasoning: "This is the distance equation for constant acceleration.", working: "s=ut+½at²", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Distance under constant acceleration",
            commonErrors: ["Choosing (b) — force uses F=ma, not this."],
          },
        },
        {
          id: "cils-u6-sum-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A $12\\ \\text{kg}$ mass has a weight of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.2\\ \\text{N}$" },
              { id: "b", text: "$12\\ \\text{N}$" },
              { id: "c", text: "$120\\ \\text{N}$ (using $g = 10\\ \\text{N/kg}$)" },
              { id: "d", text: "$1200\\ \\text{N}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = m \\times g = 12 \\times 10$" },
            ],
            steps: [
              { reasoning: "$12 \\times 10 = 120\\ \\text{N}$.", working: "120", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $120\\ \\text{N}$",
            commonErrors: ["Choosing (b) — forgot to multiply by g."],
          },
        },
        {
          id: "cils-u6-sum-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In a multi-step problem, the best first step is usually to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignore the units" },
              { id: "b", text: "Guess the answer" },
              { id: "c", text: "Immediately start calculating" },
              { id: "d", text: "Identify what is being asked and list the known quantities" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Problem solving", statement: "Identify quantities and target before applying equations." },
            ],
            steps: [
              { reasoning: "Systematic approach: know what's given and what's needed.", working: "plan", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Identify knowns and target",
            commonErrors: ["Choosing (b) — premature calculation without planning."],
          },
        },
        {
          id: "cils-u6-sum-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What net force is needed to accelerate a $3\\ \\text{kg}$ mass at $4\\ \\text{m/s}^2$? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Force", answer: 12, unit: "N" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Newton's 2nd law", statement: "$F = m \\times a$" },
            ],
            steps: [
              { reasoning: "$F = 3 \\times 4$.", working: "3 × 4", marks: 1, markCode: "M" },
              { reasoning: "$12\\ \\text{N}$.", working: "12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12\\ \\text{N}$",
          },
        },
        {
          id: "cils-u6-sum-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "An object starts at $5\\ \\text{m/s}$ and accelerates at $2\\ \\text{m/s}^2$ for $3\\ \\text{s}$. What is its final velocity? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Velocity", answer: 11, unit: "m/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Kinematics", statement: "$v = u + at$" },
            ],
            steps: [
              { reasoning: "$v = 5 + (2 \\times 3) = 5 + 6$.", working: "5 + 6", marks: 1, markCode: "M" },
              { reasoning: "$11\\ \\text{m/s}$.", working: "11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11\\ \\text{m/s}$",
          },
        },
        {
          id: "cils-u6-sum-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "An object accelerates from rest at $3\\ \\text{m/s}^2$ for $4\\ \\text{s}$. How far does it travel? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Distance", answer: 24, unit: "m" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Kinematics", statement: "$s = ut + \\frac{1}{2}at^2$ with $u = 0$ → $s = \\frac{1}{2}at^2$" },
            ],
            steps: [
              { reasoning: "$s = \\frac{1}{2} \\times 3 \\times 16 = 24$.", working: "½ × 3 × 16", marks: 1, markCode: "M" },
              { reasoning: "$24\\ \\text{m}$.", working: "24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24\\ \\text{m}$",
          },
        },
        {
          id: "cils-u6-sum-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What is the weight of a $12\\ \\text{kg}$ object on Earth ($g = 10\\ \\text{N/kg}$)? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Weight", answer: 120, unit: "N" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = m \\times g$" },
            ],
            steps: [
              { reasoning: "$W = 12 \\times 10$.", working: "12 × 10", marks: 1, markCode: "M" },
              { reasoning: "$120\\ \\text{N}$.", working: "120", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$120\\ \\text{N}$",
          },
        },
        {
          id: "cils-u6-sum-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A $2\\ \\text{kg}$ object accelerates from rest at $5\\ \\text{m/s}^2$ for $3\\ \\text{s}$. Calculate (a) the net force, (b) the final velocity, and (c) the distance travelled.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Kinematics", statement: "$F = ma$; $v = u + at$; $s = ut + \\frac{1}{2}at^2$ — chain the equations." },
            ],
            steps: [
              { reasoning: "Net force: $F = 2 \\times 5 = 10\\ \\text{N}$.", working: "F = 10 N", marks: 1, markCode: "M" },
              { reasoning: "Force correct.", marks: 1, markCode: "A" },
              { reasoning: "Final velocity: $v = 0 + 5 \\times 3 = 15\\ \\text{m/s}$.", working: "v = 15 m/s", marks: 1, markCode: "M" },
              { reasoning: "Velocity correct.", marks: 1, markCode: "A" },
              { reasoning: "Distance: $s = 0 + \\frac{1}{2} \\times 5 \\times 9 = 22.5\\ \\text{m}$.", working: "s = 22.5 m", marks: 1, markCode: "M" },
              { reasoning: "Distance correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $10\\ \\text{N}$ (b) $15\\ \\text{m/s}$ (c) $22.5\\ \\text{m}$",
            commonErrors: ["Using wrong equation — s = ut + ½at² not s = vt."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u6-fluids-notes",
      title: "Fluids and force summary — revision notes",
      summary: "Buoyancy, density, pressure in fluids, force equations.",
      sections: [
        {
          heading: "Fluids",
          body: "Pressure increases with depth (p=ρgh). Buoyancy = weight of displaced fluid. Density=m/V; float if less dense. Submarines use ballast.",
        },
        {
          heading: "Equations",
          body: "F=ma; W=mg; p=F/A; M=Fd; ρ=m/V; v=u+at; s=ut+½at². Use correctly with units.",
        },
      ],
    },
  ],
};
