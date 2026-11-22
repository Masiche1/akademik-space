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
              { id: "a", text: "Pascal (Pa)" },
              { id: "b", text: "Watt (W)" },
              { id: "c", text: "Newton (N)" },
              { id: "d", text: "Joule (J)" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Force unit", statement: "Force measured in newtons." },
            ],
            steps: [
              { reasoning: "N = newton.", working: "N", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Newton (N)",
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
        {
          id: "cils-u6-force-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which force pulls all objects towards the Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Magnetism" },
              { id: "b", text: "Normal force" },
              { id: "c", text: "Friction" },
              { id: "d", text: "Gravity (weight)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gravity", statement: "Earth's gravitational pull on objects — their weight." },
            ],
            steps: [
              { reasoning: "Gravity attracts objects toward Earth.", working: "gravity", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Gravity (weight)",
            commonErrors: ["Choosing (c) — friction opposes motion, not attraction."],
          },
        },
        {
          id: "cils-u6-force-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A book rests motionless on a table. This means the forces on it are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Non-existent" },
              { id: "b", text: "Balanced" },
              { id: "c", text: "Only downward" },
              { id: "d", text: "Unbalanced" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balanced forces", statement: "Gravity down = normal force up — balanced, no motion." },
            ],
            steps: [
              { reasoning: "Equal opposite forces — balanced.", working: "balanced", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Balanced",
            commonErrors: ["Choosing (c) — normal force pushes up equally."],
          },
        },
        {
          id: "cils-u6-force-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is a contact force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Magnetism" },
              { id: "b", text: "Electrostatic attraction" },
              { id: "c", text: "Gravity" },
              { id: "d", text: "Friction" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Contact force", statement: "Requires surfaces touching — friction, normal, applied push." },
            ],
            steps: [
              { reasoning: "Friction needs contact; gravity and magnetism act at a distance.", working: "contact", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Friction",
            commonErrors: ["Choosing (b) — gravity acts without contact."],
          },
        },
        {
          id: "cils-u6-force-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Unbalanced forces acting on an object cause it to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lose its mass" },
              { id: "b", text: "Stay perfectly still" },
              { id: "c", text: "Move at constant speed forever" },
              { id: "d", text: "Accelerate" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Newton's 2nd law", statement: "Net force = mass × acceleration — unbalanced forces accelerate." },
            ],
            steps: [
              { reasoning: "Net force produces acceleration.", working: "F=ma", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Accelerate",
            commonErrors: ["Choosing (c) — constant speed needs balanced forces."],
          },
        },
        {
          id: "cils-u6-force-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The normal force on an object resting on a horizontal surface acts:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Horizontally" },
              { id: "b", text: "Vertically upward, perpendicular to the surface" },
              { id: "c", text: "Vertically downward" },
              { id: "d", text: "At 45 degrees" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Normal force", statement: "Surface reaction force — always perpendicular to the surface." },
            ],
            steps: [
              { reasoning: "Normal force is perpendicular to and away from the surface.", working: "perpendicular up", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Upward, perpendicular to surface",
            commonErrors: ["Choosing (b) — that direction is gravity, not normal force."],
          },
        },
        {
          id: "cils-u6-force-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two people push a box in opposite directions with equal force. The box will:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Not move — forces are balanced" },
              { id: "b", text: "Accelerate regardless" },
              { id: "c", text: "Rotate" },
              { id: "d", text: "Move in the direction of the stronger push" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Force balance", statement: "Equal opposite forces cancel — no motion." },
            ],
            steps: [
              { reasoning: "Equal forces in opposite directions = balanced.", working: "balanced", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Not move — balanced",
            commonErrors: ["Choosing (b) — forces are equal, not unequal."],
          },
        },
        {
          id: "cils-u6-force-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is NOT a force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gravity" },
              { id: "b", text: "Friction" },
              { id: "c", text: "Applied push" },
              { id: "d", text: "Mass" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Force vs mass", statement: "Force = push/pull measured in N; mass = amount of matter in kg." },
            ],
            steps: [
              { reasoning: "Mass is not a force — it is measured in kg, not N.", working: "mass ≠ force", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Mass",
            commonErrors: ["Choosing (b) — gravity IS a force."],
          },
        },
        {
          id: "cils-u6-force-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the weight of an $8\\ \\text{kg}$ mass on Earth where $g = 10\\ \\text{N/kg}$? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Weight", answer: 80, unit: "N" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "weight = mass × g" },
            ],
            steps: [
              { reasoning: "$W = 8 \\times 10$.", working: "8 × 10", marks: 1, markCode: "M" },
              { reasoning: "$80\\ \\text{N}$.", working: "80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80\\ \\text{N}$",
          },
        },
        {
          id: "cils-u6-force-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "What force is needed to accelerate a $4\\ \\text{kg}$ mass at $2\\ \\text{m/s}^2$? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Force", answer: 8, unit: "N" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Newton's 2nd law", statement: "$F = m \\times a$" },
            ],
            steps: [
              { reasoning: "$F = 4 \\times 2$.", working: "4 × 2", marks: 1, markCode: "M" },
              { reasoning: "$8\\ \\text{N}$.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8\\ \\text{N}$",
          },
        },
        {
          id: "cils-u6-force-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Forces of $30\\ \\text{N}$ to the left and $20\\ \\text{N}$ to the right act on an object. What is the magnitude of the net force? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Net force", answer: 10, unit: "N" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Net force", statement: "Opposite forces subtract — net force is the difference." },
            ],
            steps: [
              { reasoning: "$30 - 20 = 10\\ \\text{N}$ to the left.", working: "30 - 20", marks: 1, markCode: "M" },
              { reasoning: "Net force = $10\\ \\text{N}$.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10\\ \\text{N}$",
          },
        },
        {
          id: "cils-u6-force-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An object has a weight of $60\\ \\text{N}$ on Earth ($g = 10\\ \\text{N/kg}$). What is its mass? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Mass", answer: 6, unit: "kg" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = m \\times g \\Rightarrow m = W \\div g$" },
            ],
            steps: [
              { reasoning: "$m = 60 \\div 10$.", working: "60 ÷ 10", marks: 1, markCode: "M" },
              { reasoning: "$6\\ \\text{kg}$.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6\\ \\text{kg}$",
          },
        },
        {
          id: "cils-u6-force-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a tug-of-war, two teams each pull on a rope with $500\\ \\text{N}$ of force in opposite directions. Describe the forces acting and explain what happens to the rope.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Force balance", statement: "Equal opposite forces = balanced = no acceleration." },
            ],
            steps: [
              { reasoning: "Each team applies 500 N in opposite directions.", working: "500 N each", marks: 1, markCode: "M" },
              { reasoning: "Forces are equal and opposite — they cancel.", working: "cancel", marks: 1, markCode: "M" },
              { reasoning: "Net force = 0 — rope does not accelerate; tension stays at 500 N.", working: "net = 0", marks: 1, markCode: "M" },
              { reasoning: "Correct reasoning about balance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Balanced forces (500 N each way) — net force zero, rope stays stationary.",
            commonErrors: ["Saying forces 'add to 1000 N' — opposite forces subtract."],
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
              { id: "a", text: "distance × time" },
              { id: "b", text: "distance ÷ time" },
              { id: "c", text: "time ÷ distance" },
              { id: "d", text: "mass × acceleration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speed", statement: "speed = distance ÷ time." },
            ],
            steps: [
              { reasoning: "Speed = distance/time.", working: "formula", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** distance ÷ time",
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
        {
          id: "cils-u6-motion-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which quantity includes direction as well as speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distance" },
              { id: "b", text: "Time" },
              { id: "c", text: "Speed" },
              { id: "d", text: "Velocity" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Velocity", statement: "Velocity = speed in a given direction — a vector quantity." },
            ],
            steps: [
              { reasoning: "Only velocity includes direction.", working: "velocity", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Velocity",
            commonErrors: ["Choosing (b) — speed has no direction."],
          },
        },
        {
          id: "cils-u6-motion-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the unit of acceleration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{m/s}$" },
              { id: "b", text: "$\\text{m/s}^2$" },
              { id: "c", text: "$\\text{N}$" },
              { id: "d", text: "$\\text{kg}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Acceleration unit", statement: "Acceleration = change in velocity ÷ time → m/s²." },
            ],
            steps: [
              { reasoning: "m/s per second = m/s².", working: "m/s²", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\text{m/s}^2$",
            commonErrors: ["Choosing (b) — m/s is velocity/speed."],
          },
        },
        {
          id: "cils-u6-motion-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A car's velocity decreases from $20\\ \\text{m/s}$ to $10\\ \\text{m/s}$. This is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero acceleration" },
              { id: "b", text: "Constant velocity" },
              { id: "c", text: "Increasing speed" },
              { id: "d", text: "Deceleration (negative acceleration)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Deceleration", statement: "Velocity decreasing = negative acceleration." },
            ],
            steps: [
              { reasoning: "Velocity fell — decelerating.", working: "deceleration", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Deceleration",
            commonErrors: ["Choosing (d) — velocity decreased, not increased."],
          },
        },
        {
          id: "cils-u6-motion-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a distance-time graph, the gradient represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acceleration" },
              { id: "b", text: "Speed" },
              { id: "c", text: "Force" },
              { id: "d", text: "Mass" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Motion graphs", statement: "Distance-time: gradient = speed (distance ÷ time)." },
            ],
            steps: [
              { reasoning: "Gradient = rise ÷ run = distance ÷ time = speed.", working: "gradient=speed", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Speed",
            commonErrors: ["Choosing (b) — acceleration is gradient of velocity-time graph."],
          },
        },
        {
          id: "cils-u6-motion-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "On a velocity-time graph, a horizontal straight line shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The object is stationary" },
              { id: "b", text: "Increasing acceleration" },
              { id: "c", text: "Constant velocity (zero acceleration)" },
              { id: "d", text: "Maximum speed" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Motion graphs", statement: "Flat v-t line = velocity not changing = zero acceleration." },
            ],
            steps: [
              { reasoning: "No slope means velocity constant — acceleration zero.", working: "flat = constant v", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Constant velocity",
            commonErrors: ["Choosing (c) — the object may be moving steadily, not stationary."],
          },
        },
        {
          id: "cils-u6-motion-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "On a velocity-time graph, the area under the line represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed" },
              { id: "b", text: "Distance travelled" },
              { id: "c", text: "Acceleration" },
              { id: "d", text: "Force" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Motion graphs", statement: "Area under v-t curve = distance (velocity × time)." },
            ],
            steps: [
              { reasoning: "Area = velocity × time = distance.", working: "area=distance", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Distance travelled",
            commonErrors: ["Choosing (b) — gradient gives acceleration, not area."],
          },
        },
        {
          id: "cils-u6-motion-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is a vector quantity (has direction)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Time" },
              { id: "b", text: "Velocity" },
              { id: "c", text: "Speed" },
              { id: "d", text: "Distance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vector", statement: "Vectors have magnitude AND direction — velocity, force, acceleration." },
            ],
            steps: [
              { reasoning: "Velocity is the only vector listed.", working: "velocity", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Velocity",
            commonErrors: ["Choosing (b) — speed is scalar, no direction."],
          },
        },
        {
          id: "cils-u6-motion-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A car travels $60\\ \\text{m}$ in $12\\ \\text{s}$. What is its speed? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Speed", answer: 5, unit: "m/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "speed = distance ÷ time" },
            ],
            steps: [
              { reasoning: "$v = 60 \\div 12$.", working: "60 ÷ 12", marks: 1, markCode: "M" },
              { reasoning: "$5\\ \\text{m/s}$.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5\\ \\text{m/s}$",
          },
        },
        {
          id: "cils-u6-motion-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car accelerates from $5\\ \\text{m/s}$ to $20\\ \\text{m/s}$ in $3\\ \\text{s}$. What is its acceleration? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Acceleration", answer: 5, unit: "m/s²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Acceleration", statement: "$a = (v - u) \\div t$" },
            ],
            steps: [
              { reasoning: "$a = (20 - 5) \\div 3 = 15 \\div 3$.", working: "15 ÷ 3", marks: 1, markCode: "M" },
              { reasoning: "$5\\ \\text{m/s}^2$.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5\\ \\text{m/s}^2$",
          },
        },
        {
          id: "cils-u6-motion-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cyclist travels at a steady $8\\ \\text{m/s}$ for $10\\ \\text{s}$. How far does she travel? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Distance", answer: 80, unit: "m" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance", statement: "distance = speed × time" },
            ],
            steps: [
              { reasoning: "$s = 8 \\times 10$.", working: "8 × 10", marks: 1, markCode: "M" },
              { reasoning: "$80\\ \\text{m}$.", working: "80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80\\ \\text{m}$",
          },
        },
        {
          id: "cils-u6-motion-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A runner covers $100\\ \\text{m}$ at an average speed of $10\\ \\text{m/s}$. How long does she take? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Time", answer: 10, unit: "s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "time = distance ÷ speed" },
            ],
            steps: [
              { reasoning: "$t = 100 \\div 10$.", working: "100 ÷ 10", marks: 1, markCode: "M" },
              { reasoning: "$10\\ \\text{s}$.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10\\ \\text{s}$",
          },
        },
        {
          id: "cils-u6-motion-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to determine the acceleration of an object from its velocity-time graph, including what the gradient and area tell you.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Motion graphs", statement: "V-t graph: gradient = acceleration; area = distance." },
            ],
            steps: [
              { reasoning: "Draw axes: velocity (y) vs time (x).", working: "axes", marks: 1, markCode: "M" },
              { reasoning: "Gradient = change in velocity ÷ change in time = acceleration.", working: "gradient", marks: 1, markCode: "M" },
              { reasoning: "Area under line = distance travelled.", working: "area", marks: 1, markCode: "M" },
              { reasoning: "All three points correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gradient = acceleration; area under curve = distance.",
            commonErrors: ["Saying gradient = velocity — on v-t graph it is acceleration."],
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
              { id: "a", text: "Volume" },
              { id: "b", text: "Gravity" },
              { id: "c", text: "Relative motion between surfaces" },
              { id: "d", text: "Pressure" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Friction", statement: "Opposes relative motion between contacting surfaces." },
            ],
            steps: [
              { reasoning: "Friction opposes sliding motion.", working: "motion", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Relative motion between surfaces",
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
        {
          id: "cils-u6-fric-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Friction acts in which direction relative to an object's motion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In the same direction as motion" },
              { id: "b", text: "Opposite to the direction of motion" },
              { id: "c", text: "Always vertically upward" },
              { id: "d", text: "In any random direction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Friction direction", statement: "Friction always opposes relative motion — opposite to movement." },
            ],
            steps: [
              { reasoning: "Friction opposes motion — acts backwards.", working: "opposes", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Opposite to motion",
            commonErrors: ["Choosing (b) — friction never helps motion along."],
          },
        },
        {
          id: "cils-u6-fric-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which surface produces the MOST friction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oiled metal" },
              { id: "b", text: "Rough concrete" },
              { id: "c", text: "Ice" },
              { id: "d", text: "Glass" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Roughness", statement: "Rougher surfaces = more friction; smooth/lubricated = less." },
            ],
            steps: [
              { reasoning: "Concrete is roughest — highest friction.", working: "concrete", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Rough concrete",
            commonErrors: ["Choosing (b) — ice is famously slippery (low friction)."],
          },
        },
        {
          id: "cils-u6-fric-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are lubricants like oil used in machines?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To cool the machine by freezing it" },
              { id: "b", text: "To reduce friction between moving parts" },
              { id: "c", text: "To increase friction for grip" },
              { id: "d", text: "To make parts heavier" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Lubrication", statement: "Oil/grease separates surfaces — reduces friction and wear." },
            ],
            steps: [
              { reasoning: "Lubricants reduce friction between parts.", working: "lubricant", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Reduce friction",
            commonErrors: ["Choosing (b) — that is what tread/grip materials do."],
          },
        },
        {
          id: "cils-u6-fric-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do climbing shoes and tyres have patterned soles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To decrease friction for speed" },
              { id: "b", text: "To increase friction and grip" },
              { id: "c", text: "To make them waterproof" },
              { id: "d", text: "To look attractive" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Tread", statement: "Patterns increase surface roughness → more friction → better grip." },
            ],
            steps: [
              { reasoning: "Tread patterns increase friction deliberately.", working: "grip", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Increase friction/grip",
            commonErrors: ["Choosing (b) — soles need grip, not low friction."],
          },
        },
        {
          id: "cils-u6-fric-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "When a machine part slides against another, friction mainly wastes energy as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sound" },
              { id: "b", text: "Chemical energy" },
              { id: "c", text: "Light" },
              { id: "d", text: "Heat" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Friction heating", statement: "Sliding friction converts kinetic energy to heat — wasted energy." },
            ],
            steps: [
              { reasoning: "Friction heats surfaces — energy dissipated as heat.", working: "heat", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Heat",
            commonErrors: ["Choosing (c) — heat is the main waste, not sound."],
          },
        },
        {
          id: "cils-u6-fric-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Ball bearings in wheels reduce friction mainly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Removing all contact" },
              { id: "b", text: "Replacing sliding with rolling motion" },
              { id: "c", text: "Increasing the load" },
              { id: "d", text: "Making surfaces rougher" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bearings", statement: "Rolling friction is much less than sliding friction." },
            ],
            steps: [
              { reasoning: "Balls roll instead of surfaces sliding — less friction.", working: "rolling", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Rolling instead of sliding",
            commonErrors: ["Choosing (b) — rougher surfaces increase friction."],
          },
        },
        {
          id: "cils-u6-fric-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "You slip easily on ice because ice has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No surface at all" },
              { id: "b", text: "Maximum roughness" },
              { id: "c", text: "Very high friction" },
              { id: "d", text: "Very low friction — a smooth surface with a thin water layer" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ice friction", statement: "Ice is smooth and has a lubricating water film — very low friction." },
            ],
            steps: [
              { reasoning: "Low friction on ice causes slipping.", working: "low friction", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Very low friction",
            commonErrors: ["Choosing (d) — ice is smooth, not rough."],
          },
        },
        {
          id: "cils-u6-fric-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A block needs $25\\ \\text{N}$ of force to slide on a surface. What is the friction force? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Friction", answer: 25, unit: "N" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sliding friction", statement: "At constant sliding speed, applied force equals friction force." },
            ],
            steps: [
              { reasoning: "Sliding at steady speed → applied force = friction.", working: "equal", marks: 1, markCode: "M" },
              { reasoning: "Friction = $25\\ \\text{N}$.", working: "25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25\\ \\text{N}$",
          },
        },
        {
          id: "cils-u6-fric-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "On surface A a block needs $10\\ \\text{N}$ to slide; on surface B it needs $30\\ \\text{N}$. How many times greater is the friction on B? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Ratio", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Friction comparison", statement: "Ratio = friction on B ÷ friction on A." },
            ],
            steps: [
              { reasoning: "$30 \\div 10 = 3$.", working: "30 ÷ 10", marks: 1, markCode: "M" },
              { reasoning: "Three times greater.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cils-u6-fric-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $5\\ \\text{kg}$ box on a rough floor needs $20\\ \\text{N}$ to start sliding. What is its weight ($g = 10\\ \\text{N/kg}$)? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Weight", answer: 50, unit: "N" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = m \\times g = 5 \\times 10$" },
            ],
            steps: [
              { reasoning: "$W = 5 \\times 10$.", working: "5 × 10", marks: 1, markCode: "M" },
              { reasoning: "$50\\ \\text{N}$.", working: "50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50\\ \\text{N}$",
          },
        },
        {
          id: "cils-u6-fric-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Car brakes turn $6000\\ \\text{J}$ of kinetic energy into heat. If $2000\\ \\text{J}$ remains as useful heat in the brakes, how much is wasted elsewhere? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Wasted", answer: 4000, unit: "J" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Energy conservation", statement: "Total energy = useful + wasted." },
            ],
            steps: [
              { reasoning: "Wasted = $6000 - 2000$.", working: "6000 - 2000", marks: 1, markCode: "M" },
              { reasoning: "$4000\\ \\text{J}$.", working: "4000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4000\\ \\text{J}$",
          },
        },
        {
          id: "cils-u6-fric-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Friction is described as both 'essential' and 'a problem'. Explain this using two examples — one where high friction is wanted and one where it is unwanted.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Friction trade-offs", statement: "Needed for grip/walking/braking; wasteful for machines (wear + heat)." },
            ],
            steps: [
              { reasoning: "High friction wanted: tyres/shoes — grip prevents slipping; brakes stop the car.", working: "useful", marks: 1, markCode: "M" },
              { reasoning: "Low friction wanted: engines/gears — lubricants reduce wear and wasted heat.", working: "unwanted", marks: 1, markCode: "M" },
              { reasoning: "Links friction to real consequences in each case.", working: "link", marks: 1, markCode: "M" },
              { reasoning: "Both sides explained with examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Essential for grip/brakes; problematic for machines — lubricate to reduce.",
            commonErrors: ["Only one side — friction is useful AND wasteful."],
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
