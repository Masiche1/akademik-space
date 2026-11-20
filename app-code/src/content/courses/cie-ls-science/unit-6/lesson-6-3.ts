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
              { id: "a", text: "Upward force from displaced fluid" },
              { id: "b", text: "Downward gravity" },
              { id: "c", text: "Friction" },
              { id: "d", text: "Air resistance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Buoyancy", statement: "Upward force = weight of displaced fluid." },
            ],
            steps: [
              { reasoning: "Buoyancy = upward push from fluid.", working: "upward", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Upward force from displaced fluid",
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
              { id: "a", text: "Increases" },
              { id: "b", text: "Decreases" },
              { id: "c", text: "Stays constant" },
              { id: "d", text: "Varies randomly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Fluid pressure", statement: "Increases with depth (p = ρgh)." },
            ],
            steps: [
              { reasoning: "Deeper = more fluid above = more pressure.", working: "increases", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Increases",
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
              { id: "a", text: "F = m × a" },
              { id: "b", text: "F = m ÷ a" },
              { id: "c", text: "F = a ÷ m" },
              { id: "d", text: "F = m + a" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Newton's 2nd", statement: "F = ma — force = mass × acceleration." },
            ],
            steps: [
              { reasoning: "F = ma.", working: "ma", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** F = m × a",
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
