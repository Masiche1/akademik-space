import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "cils-u6-lesson-6-1",
  code: "6-1",
  title: "Forces and their effects",
  goal: "I CAN describe forces, their effects on objects, and balanced vs unbalanced forces.",
  standards: ["0893 Physics: forces"],
  vocabulary: [
    { term: "Force", definition: "Push or pull measured in newtons (N)." },
    { term: "Gravity", definition: "Force attracting objects toward Earth — weight." },
    { term: "Friction", definition: "Force opposing motion between surfaces." },
    { term: "Normal force", definition: "Force from surface pushing back on object." },
    { term: "Balanced forces", definition: "Forces cancel out — no change in motion." },
    { term: "Unbalanced forces", definition: "Forces don't cancel — causes acceleration." },
  ],
  concepts: [
    {
      id: "cils-u6-forces",
      title: "Forces and effects",
      skill: "Identify forces acting on objects and describe their effects.",
      lesson: {
        sections: [
          {
            heading: "Types of forces",
            body: "- **Gravity**: pulls objects down (weight)\n- **Friction**: opposes motion between surfaces\n- **Normal**: surface reaction force\n- **Magnetic/electrostatic**: attraction/repulsion\n- **Applied**: push/pull from external source",
          },
          {
            heading: "Effects of forces",
            body: "Forces can: start/stop motion, change speed, change direction, change shape (deformation).",
          },
          {
            heading: "Balanced vs unbalanced",
            body: "Balanced: forces equal/opposite — object stays still or constant speed. Unbalanced: net force ≠ 0 — acceleration occurs.",
          },
        ],
        keyFormulas: [
          { name: "Forces", statement: "Balanced → no acceleration; unbalanced → acceleration. Weight = mass × gravity." },
        ],
        workedExample: {
          problem: "A book sits on a table. What forces act on it?",
          solution: "Gravity pulls down; normal force pushes up — equal and opposite, balanced, so book stays still.",
        },
      },
      questions: [
        {
          id: "cils-u6-force-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the unit of force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Newton (N)" },
              { id: "b", text: "Joule (J)" },
              { id: "c", text: "Watt (W)" },
              { id: "d", text: "Pascal (Pa)" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Force unit", statement: "Force measured in newtons." },
            ],
            steps: [
              { reasoning: "N = newton.", working: "N", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Newton (N)",
            commonErrors: ["Choosing (b) — joule is energy."],
          },
        },
        {
          id: "cils-u6-force-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two forces acting on a falling ball.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Forces", statement: "Gravity (down) and air resistance/friction (up)." },
            ],
            steps: [
              { reasoning: "Gravity + air resistance.", working: "two forces", marks: 1, markCode: "M" },
              { reasoning: "Correct pair.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gravity (weight) and air resistance/friction.",
            commonErrors: ["Saying 'only gravity' — air resistance also acts."],
          },
        },
        {
          id: "cils-u6-force-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain balanced vs unbalanced forces with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Force balance", statement: "Balanced=cancel/no change; unbalanced=net force/acceleration." },
            ],
            steps: [
              { reasoning: "Balanced: equal/opposite forces — stationary object or constant speed.", working: "balanced", marks: 1, markCode: "M" },
              { reasoning: "Example: book on table — gravity=normal force.", working: "example1", marks: 1, markCode: "M" },
              { reasoning: "Unbalanced: net force ≠ 0 — acceleration. Example: accelerating car.", working: "unbalanced", marks: 1, markCode: "M" },
              { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Balanced: forces cancel, no acceleration; unbalanced: net force causes acceleration.",
            commonErrors: ["Saying 'unbalanced = moving' — object can move at constant speed with balanced forces."],
          },
        },
        {
          id: "cils-u6-force-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse forces on a car.",
          parts: [
            { label: "a", prompt: "What forces act on a moving car?", marks: 2 },
            { label: "b", prompt: "What happens when engine force exceeds friction?", marks: 2 },
            { label: "c", prompt: "What happens when friction exceeds engine force?", marks: 2 },
            { label: "d", prompt: "Explain terminal velocity.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Forces on vehicle", statement: "Engine pushes forward; friction/drag oppose; balance determines motion." },
            ],
            steps: [
              { part: "a", reasoning: "Engine force (forward), friction/drag (backward), gravity, normal force.", working: "forces", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Three+ correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Net forward force → car accelerates.", working: "accelerate", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Net backward force → car decelerates.", working: "decelerate", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Falling object: gravity constant, air resistance increases with speed → terminal velocity when balanced.", working: "terminal", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) engine+friction+gravity+normal (b) accelerates (c) decelerates (d) air resistance balances gravity → constant speed",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Forces correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Incomplete.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Terminal velocity = constant speed when drag=weight."],
          },
        },
      ],
    },
    {
      id: "cils-u6-motion",
      title: "Speed, velocity and acceleration",
      skill: "Calculate speed, velocity and acceleration; interpret motion graphs.",
      lesson: {
        sections: [
          {
            heading: "Speed and velocity",
            body: "Speed = distance ÷ time (scalar). Velocity = speed + direction (vector). Unit: m/s.",
          },
          {
            heading: "Acceleration",
            body: "Acceleration = change in velocity ÷ time = (final - initial) ÷ time. Unit: m/s². Positive = speeding up; negative = slowing down.",
          },
          {
            heading: "Motion graphs",
            body: "Distance-time: gradient = speed. Velocity-time: gradient = acceleration, area = distance.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "speed = distance ÷ time" },
          { name: "Acceleration", statement: "a = (v - u) ÷ t" },
        ],
        workedExample: {
          problem: "A car travels 150m in 10s. What's its speed?",
          solution: "speed = distance ÷ time = 150 ÷ 10 = 15 m/s.",
        },
      },
      questions: [
        {
          id: "cils-u6-motion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula for speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "distance ÷ time" },
              { id: "b", text: "time ÷ distance" },
              { id: "c", text: "distance × time" },
              { id: "d", text: "mass × acceleration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speed", statement: "speed = distance ÷ time." },
            ],
            steps: [
              { reasoning: "Speed = distance/time.", working: "formula", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** distance ÷ time",
            commonErrors: ["Choosing (b) — that gives time per distance."],
          },
        },
        {
          id: "cils-u6-motion-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car accelerates from 10 m/s to 30 m/s in 5s. Calculate acceleration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Acceleration", statement: "a = (v - u) ÷ t = (30 - 10) ÷ 5 = 4 m/s²" },
            ],
            steps: [
              { reasoning: "a = (v-u)/t = (30-10)/5.", working: "20/5", marks: 1, markCode: "M" },
              { reasoning: "= 4 m/s².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 m/s²",
            commonErrors: ["Using u instead of v-u — need change in velocity."],
          },
        },
        {
          id: "cils-u6-motion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between speed and velocity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speed vs velocity", statement: "Speed=scalar magnitude; velocity=vector with direction." },
            ],
            steps: [
              { reasoning: "Speed = how fast (magnitude only).", working: "speed", marks: 1, markCode: "M" },
              { reasoning: "Velocity = speed + direction (vector).", working: "velocity", marks: 1, markCode: "M" },
              { reasoning: "Example: 60 km/h speed vs 60 km/h north velocity.", working: "example", marks: 1, markCode: "M" },
              { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Speed is magnitude only; velocity includes direction — velocity is vector.",
            commonErrors: ["Treating them as same — direction is key difference."],
          },
        },
        {
          id: "cils-u6-motion-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Interpret a velocity-time graph.",
          parts: [
            { label: "a", prompt: "What does gradient represent?", marks: 2 },
            { label: "b", prompt: "What does area under curve represent?", marks: 2 },
            { label: "c", prompt: "Describe constant velocity on the graph.", marks: 2 },
            { label: "d", prompt: "Describe acceleration on the graph.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Motion graphs", statement: "V-t graph: gradient=acceleration, area=distance; flat line=constant velocity." },
            ],
            steps: [
              { part: "a", reasoning: "Gradient = acceleration (change in velocity ÷ time).", working: "gradient", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Area under curve = distance travelled.", working: "area", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Horizontal line — velocity constant, acceleration = 0.", working: "horizontal", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Sloping line — positive slope=accelerating, negative=decelerating, steepness=rate.", working: "slope", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Explanation correct.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) gradient=acceleration (b) area=distance (c) horizontal=constant velocity (d) slope shows acceleration",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Gradient = acceleration not velocity on v-t graph."],
          },
        },
      ],
    },
    {
      id: "cils-u6-friction",
      title: "Friction and its effects",
      skill: "Explain friction, factors affecting it and its benefits/drawbacks.",
      lesson: {
        sections: [
          {
            heading: "What is friction?",
            body: "Force opposing relative motion between surfaces in contact. Acts parallel to surfaces, opposite to motion.",
          },
          {
            heading: "Factors affecting friction",
            body: "- **Surface texture**: rougher = more friction\n- **Normal force**: heavier load = more friction\n- **Contact area**: varies by situation",
          },
          {
            heading: "Benefits and drawbacks",
            body: "Benefits: allows walking, driving, gripping. Drawbacks: wears surfaces, wastes energy as heat, slows machines.",
          },
        ],
        keyFormulas: [
          { name: "Friction", statement: "Opposes motion; increases with roughness and normal force; can be useful or wasteful." },
        ],
        workedExample: {
          problem: "Why do tyres have tread patterns?",
          solution: "Tread increases friction with road — better grip, especially wet.",
        },
      },
      questions: [
        {
          id: "cils-u6-fric-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does friction oppose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Relative motion between surfaces" },
              { id: "b", text: "Gravity" },
              { id: "c", text: "Pressure" },
              { id: "d", text: "Volume" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Friction", statement: "Opposes relative motion between contacting surfaces." },
            ],
            steps: [
              { reasoning: "Friction opposes sliding motion.", working: "motion", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Relative motion between surfaces",
            commonErrors: ["Choosing (b) — gravity is separate force."],
          },
        },
        {
          id: "cils-u6-fric-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name one benefit and one drawback of friction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Friction", statement: "Benefit: grip/walking; drawback: wear/heat/wasted energy." },
            ],
            steps: [
              { reasoning: "Benefit: allows walking/driving/gripping.", working: "benefit", marks: 1, markCode: "M" },
              { reasoning: "Drawback: wears surfaces, wastes energy as heat.", working: "drawback", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Benefit: grip/walking; drawback: wear and wasted energy.",
            commonErrors: ["Only listing drawbacks — friction is essential."],
          },
        },
        {
          id: "cils-u6-fric-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to reduce friction in a machine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reducing friction", statement: "Lubricants, bearings, smoother surfaces, wheels." },
            ],
            steps: [
              { reasoning: "Use lubricants (oil/grease) — separates surfaces.", working: "lubricant", marks: 1, markCode: "M" },
              { reasoning: "Bearings reduce contact area/rolling instead of sliding.", working: "bearings", marks: 1, markCode: "M" },
              { reasoning: "Smoother surfaces or wheels — less sliding friction.", working: "smooth", marks: 1, markCode: "M" },
              { reasoning: "Two+ valid methods.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lubricants, bearings, smoother surfaces, wheels — reduce sliding friction.",
            commonErrors: ["Saying 'remove friction completely' — reduce, not eliminate."],
          },
        },
        {
          id: "cils-u6-fric-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate factors affecting friction.",
          parts: [
            { label: "a", prompt: "How does surface roughness affect friction?", marks: 2 },
            { label: "b", prompt: "How does load/weight affect friction?", marks: 2 },
            { label: "c", prompt: "Design an experiment to test friction.", marks: 3 },
            { label: "d", prompt: "Explain why ice is slippery.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Friction factors", statement: "Rougher=more friction; heavier=more friction; ice smooth=low friction." },
            ],
            steps: [
              { part: "a", reasoning: "Rougher surfaces → more friction (more contact points).", working: "roughness", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Heavier load → more normal force → more friction.", working: "load", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Pull block with spring balance on different surfaces; measure force needed.", working: "experiment", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Method valid.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Controlled.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Ice smooth + thin water layer → very low friction.", working: "ice", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) rougher=more (b) heavier=more (c) spring balance on surfaces (d) smooth+water layer",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Design good.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Thinking area affects friction most — roughness and load matter more."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u6-forces-notes",
      title: "Forces and motion — revision notes",
      summary: "Force types, balance, speed/acceleration, friction, motion graphs.",
      sections: [
        {
          heading: "Forces & motion",
          body: "Forces: gravity, friction, normal, applied. Balanced=no acceleration; unbalanced=accelerate. Speed=d/t; a=(v-u)/t. V-t graph: gradient=a, area=distance.",
        },
        {
          heading: "Friction",
          body: "Opposes motion; increases with roughness and load. Benefits: grip; drawbacks: wear/heat. Reduce with lubricants/bearings.",
        },
      ],
    },
  ],
};
