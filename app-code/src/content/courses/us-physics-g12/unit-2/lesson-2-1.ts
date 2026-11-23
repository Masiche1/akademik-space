import type { Lesson } from "../../../types.ts";

export const lesson121: Lesson = {
  id: "phys12-u2-lesson-2-1",
  code: "2-1",
  title: "Circular Motion and Centripetal Force",
  goal: "I CAN analyze circular motion using centripetal acceleration and force, and apply these concepts to banking, orbits and vertical circles.",
  standards: ["HS-PS2-4"],
  vocabulary: [
    { term: "Centripetal acceleration", definition: "Acceleration toward the center of a circular path: $a_c = v^2/r = r\\omega^2$." },
    { term: "Centripetal force", definition: "Net force required to keep an object in circular motion: $F_c = mv^2/r$." },
    { term: "Banking angle", definition: "Angle of a road curve that allows cars to turn without friction." },
    { term: "Apparent weight", definition: "Force felt by an occupant; differs from true weight in accelerating frames." },
    { term: "Vertical circle", definition: "Circular motion in a vertical plane where gravity affects the required centripetal force." },
    { term: "Tension", definition: "Force in a rope or string pulling toward its anchor." },
    { term: "Normal force", definition: "Contact force perpendicular to a surface." },
  ],
  concepts: [
    {
      id: "phys12-u2-centripetal",
      title: "Centripetal force analysis",
      skill: "Apply $F_c = mv^2/r$ to horizontal and vertical circular motion problems.",
      lesson: {
        sections: [
          {
            heading: "Centripetal acceleration and force",
            body: "An object moving in a circle at constant speed is accelerating because its velocity direction changes. The acceleration points toward the center:\n\n$$a_c = \\frac{v^2}{r} = r\\omega^2$$\n\nThe **centripetal force** is the net force causing this acceleration:\n\n$$F_c = \\frac{mv^2}{r} = mr\\omega^2$$\n\nCentripetal force is not a new kind of force — it is whatever net force points toward the center (tension, gravity, normal force, friction).",
          },
          {
            heading: "Horizontal circle",
            body: "For a mass on a string swung in a horizontal circle, tension provides the centripetal force: $T = mv^2/r$. For a car on a flat curve, friction provides it: $f = mv^2/r$. For a banked curve, the horizontal component of the normal force provides it.",
          },
          {
            heading: "Vertical circle",
            body: "In a vertical circle, gravity also acts along the radial direction, so the required centripetal force varies with position. At the top, both gravity and tension (if any) point toward the center; at the bottom, tension must overcome gravity AND provide centripetal force.",
          },
        ],
        keyFormulas: [
          { name: "Centripetal acceleration", statement: "$a_c = v^2/r = r\\omega^2$" },
          { name: "Centripetal force", statement: "$F_c = mv^2/r$" },
          { name: "Vertical circle top", statement: "$T + mg = mv^2/r$ at top" },
          { name: "Vertical circle bottom", statement: "$T - mg = mv^2/r$ at bottom" },
        ],
        workedExample: {
          problem: "A 0.50 kg mass is swung in a horizontal circle of radius 0.80 m at 4.0 m/s. What tension is required?",
          solution: "Tension provides centripetal force: $T = mv^2/r = 0.50 \\times (4.0)^2/0.80 = 0.50 \\times 16/0.80 = 10$ N.",
        },
      },
      questions: [
        {
          id: "phys12-u2-centripetal-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A car rounds a curve of radius 50 m at 20 m/s. What centripetal acceleration is required?",
          response: { type: "numeric", parts: [{ label: "a_c", answer: 8, unit: "m/s²" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Centripetal acceleration", statement: "$a_c = v^2/r$." }],
            steps: [{ reasoning: "$a_c = (20)^2/50 = 400/50 = 8$ m/s².", working: "a=400/50=8", marks: 1, markCode: "M" }],
            finalAnswer: "8 m/s²",
            commonErrors: ["Using $v/r$ instead of $v^2/r$."],
            examinerNote: "M1 for 8.",
          },
        },
        {
          id: "phys12-u2-centripetal-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 1200 kg car rounds a flat curve of radius 80 m. The coefficient of static friction is 0.70. What is the maximum speed the car can take without skidding? ($g = 9.81$ m/s²)",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Friction", statement: "$f_{max} = \\mu N = \\mu mg$" },
              { kind: "formula", name: "Centripetal force", statement: "$F_c = mv^2/r$" },
            ],
            steps: [
              { reasoning: "Maximum friction provides centripetal force: $\\mu mg = mv^2/r$.", marks: 1, markCode: "B" },
              { reasoning: "$v = \\sqrt{\\mu gr} = \\sqrt{0.70 \\times 9.81 \\times 80} = \\sqrt{549.4} = 23.4$ m/s.", working: "v=sqrt(0.70*9.81*80)=23.4", marks: 1, markCode: "M" },
              { reasoning: "v ≈ 23 m/s (about 84 km/h).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "23.4 m/s",
            commonErrors: ["Forgetting mass cancels.", "Using $\\mu g$ without radius."],
            examinerNote: "B1 setup, M1 calculation, A1 answer.",
          },
        },
        {
          id: "phys12-u2-centripetal-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 0.20 kg mass is swung in a vertical circle of radius 0.50 m. What minimum speed at the top is required so the string does not go slack?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vertical circle", statement: "At top: $T + mg = mv^2/r$; minimum when $T = 0$." },
            ],
            steps: [
              { reasoning: "At top, gravity and tension both point toward center. Minimum speed occurs when tension just reaches zero.", marks: 1, markCode: "B" },
              { reasoning: "With $T = 0$: $mg = mv^2/r$, so $v = \\sqrt{gr}$.", marks: 1, markCode: "M" },
              { reasoning: "$v = \\sqrt{9.81 \\times 0.50} = \\sqrt{4.905} = 2.21$ m/s.", working: "v=sqrt(9.81*0.50)=2.21", marks: 1, markCode: "M" },
              { reasoning: "Minimum speed ≈ 2.2 m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.2 m/s",
            commonErrors: ["Setting $T = mg$ instead of $T = 0$.", "Forgetting gravity points toward center at top."],
            examinerNote: "B1 condition, M1 formula, M1 value, A1 answer.",
          },
        },
        {
          id: "phys12-u2-centripetal-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A roller coaster car of mass 800 kg goes through a vertical loop of radius 15 m. At the top of the loop, the car is upside down.",
          parts: [
            { label: "a", prompt: "If the car's speed at the top is 20 m/s, calculate the centripetal force required.", marks: 2 },
            { label: "b", prompt: "Calculate the car's weight.", marks: 1 },
            { label: "c", prompt: "Calculate the normal force from the track at the top.", marks: 3 },
            { label: "d", prompt: "Calculate the minimum speed at the top for the car to stay on the track.", marks: 3 },
            { label: "e", prompt: "Explain why the minimum speed at the bottom of the loop is higher than at the top.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Centripetal force", statement: "$F_c = mv^2/r$" },
              { kind: "formula", name: "Vertical circle top", statement: "$N + mg = mv^2/r$ at top (both point toward center)." },
            ],
            steps: [
              { reasoning: "$F_c = mv^2/r = 800 \\times (20)^2/15 = 800 \\times 400/15 = 21,333$ N.", working: "F=800*400/15=21333", marks: 2, markCode: "M", part: "a" },
              { reasoning: "$W = mg = 800 \\times 9.81 = 7,848$ N.", working: "W=800*9.81=7848", marks: 1, markCode: "M", part: "b" },
              { reasoning: "At top, $N + mg = F_c$, so $N = F_c - mg = 21,333 - 7,848 = 13,485$ N.", working: "N=21333-7848=13485", marks: 2, markCode: "M", part: "c" },
              { reasoning: "Answer: N ≈ 13,500 N downward (toward center).", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Minimum speed when $N = 0$: $mg = mv^2/r$, so $v = \\sqrt{gr} = \\sqrt{9.81 \\times 15} = \\sqrt{147.15} = 12.1$ m/s.", working: "v=sqrt(9.81*15)=12.1", marks: 2, markCode: "M", part: "d" },
              { reasoning: "Minimum speed ≈ 12.1 m/s.", marks: 1, markCode: "A", part: "d" },
              { reasoning: "By energy conservation, the car loses PE going up, so it must enter the loop faster at the bottom to have enough KE at the top.", marks: 1, markCode: "R", part: "e" },
            ],
            finalAnswer: "(a) 21,333 N (b) 7,848 N (c) 13,485 N (d) 12.1 m/s (e) energy conservation requires higher speed at bottom.",
            commonErrors: ["Adding mg instead of subtracting at top.", "Forgetting normal force direction.", "Thinking minimum speed is zero."],
            examinerNote: "2+1+3+3+1 = 10.",
          },
        },
      ],
    },
    {
      id: "phys12-u2-banked-curves",
      title: "Banked curves and apparent weight",
      skill: "Analyze banked curves without friction and explain apparent weight in accelerating frames.",
      lesson: {
        sections: [
          {
            heading: "Banked curves",
            body: `A **banked curve** is tilted so that the normal force has a horizontal component pointing toward the center. At the ideal speed, no friction is needed:

$$\\tan\\theta = \\frac{v^2}{rg}$$

or $v = \\sqrt{rg\\tan\\theta}$.

Too slow: car slides down; too fast: slides up. Friction extends the safe range.`,
          },
          {
            heading: "Apparent weight",
            body: "**Apparent weight** is the force felt by occupants, equal to the normal force. In an elevator accelerating upward, apparent weight increases ($N = m(g+a)$); accelerating downward, it decreases ($N = m(g-a)$). At free fall, $a = g$ and apparent weight is zero — this is **weightlessness**.",
          },
          {
            heading: "Astronaut weightlessness",
            body: "Astronauts in orbit are weightless not because gravity is zero (it's about 90% of surface value at ISS altitude) but because they and their spacecraft are in free fall together. Gravity provides the centripetal force for their orbit.",
          },
        ],
        keyFormulas: [
          { name: "Banked curve", statement: "$\\tan\\theta = v^2/(rg)$; $v = \\sqrt{rg\\tan\\theta}$" },
          { name: "Apparent weight up", statement: "$N = m(g+a)$" },
          { name: "Apparent weight down", statement: "$N = m(g-a)$" },
        ],
        workedExample: {
          problem: "A road curve of radius 100 m is banked at 15°. What speed allows a car to round it without friction?",
          solution: "$v = \\sqrt{rg\\tan\\theta} = \\sqrt{100 \\times 9.81 \\times \\tan 15^\\circ} = \\sqrt{100 \\times 9.81 \\times 0.268} = \\sqrt{262.9} = 16.2$ m/s.",
        },
      },
      questions: [
        {
          id: "phys12-u2-banked-curves-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A curve is banked at angle $\\theta$. What provides the centripetal force when the car travels at the ideal speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Friction" },
              { id: "b", text: "Horizontal component of normal force" },
              { id: "c", text: "Gravity" },
              { id: "d", text: "Air resistance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Banked curve", statement: "Normal force's horizontal component provides centripetal force." }],
            steps: [{ reasoning: "The horizontal component of the normal force points toward the center and provides the centripetal force.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Horizontal component of normal force",
            commonErrors: ["Thinking friction is always needed."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys12-u2-banked-curves-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An elevator accelerates upward at 2.0 m/s². A person of mass 70 kg stands inside. What is their apparent weight? ($g = 9.81$ m/s²)",
          response: { type: "numeric", parts: [{ label: "N", answer: 837, unit: "N" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Apparent weight", statement: "$N = m(g+a)$ for upward acceleration." }],
            steps: [
              { reasoning: "$N = m(g+a) = 70 \\times (9.81 + 2.0) = 70 \\times 11.81 = 826.7$ N.", working: "N=70*11.81=826.7", marks: 2, markCode: "M" },
              { reasoning: "N ≈ 827 N (about 826.7 N).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "827 N",
            commonErrors: ["Using $m(g-a)$ for upward.", "Forgetting to add acceleration."],
            examinerNote: "M2 calculation, A1 answer. Accept 826.7 or 827.",
          },
        },
        {
          id: "phys12-u2-banked-curves-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A car travels around a banked curve of radius 60 m banked at 20°. Calculate the ideal speed (no friction needed).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Banked curve", statement: "$v = \\sqrt{rg\\tan\\theta}$" },
            ],
            steps: [
              { reasoning: "$\\tan 20^\\circ = 0.364$.", marks: 1, markCode: "M" },
              { reasoning: "$v = \\sqrt{60 \\times 9.81 \\times 0.364} = \\sqrt{214.2} = 14.6$ m/s.", working: "v=sqrt(60*9.81*tan20)=14.6", marks: 2, markCode: "M" },
              { reasoning: "v ≈ 14.6 m/s (about 52.6 km/h).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "14.6 m/s",
            commonErrors: ["Using degrees instead of radians in calculator.", "Forgetting to take square root."],
            examinerNote: "M1 tan, M2 calculation, A1 answer.",
          },
        },
        {
          id: "phys12-u2-banked-curves-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An astronaut in the ISS experiences apparent weight of zero despite being 400 km above Earth's surface where g ≈ 8.7 m/s².",
          parts: [
            { label: "a", prompt: "Explain why the astronaut feels weightless.", marks: 3 },
            { label: "b", prompt: "Calculate the centripetal acceleration needed for orbit at radius 6770 km (Earth's radius 6370 km) with period 92.5 min.", marks: 3 },
            { label: "c", prompt: "Compare this centripetal acceleration to g at that altitude.", marks: 2 },
            { label: "d", prompt: "Explain what would happen if the spacecraft suddenly stopped orbiting.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Weightlessness", statement: "Free fall → apparent weight = 0." },
              { kind: "formula", name: "Centripetal acceleration", statement: "$a_c = v^2/r = r\\omega^2 = 4\\pi^2r/T^2$" },
            ],
            steps: [
              { reasoning: "The astronaut and spacecraft are in free fall toward Earth; gravity provides the centripetal force for orbit.", marks: 1, markCode: "R", part: "a" },
              { reasoning: "Since both accelerate together at $g$, there is no normal force (apparent weight = 0).", marks: 1, markCode: "R", part: "a" },
              { reasoning: "This is not because gravity is zero — it is about 90% of surface value.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "$a_c = 4\\pi^2r/T^2 = 4\\pi^2(6.77 \\times 10^6)/(5550)^2 = 4 \\times 9.87 \\times 6.77 \\times 10^6/3.08 \\times 10^7 = 8.67$ m/s².", working: "ac=4pi^2*6.77e6/5550^2=8.67", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Answer: ≈ 8.7 m/s².", marks: 1, markCode: "A", part: "b" },
              { reasoning: "The centripetal acceleration (8.7) equals g at that altitude — gravity IS the centripetal force.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "They are essentially equal (within rounding), confirming gravity provides the centripetal force.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Without orbital motion, gravity would pull the spacecraft and astronaut down to Earth's surface.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "They would crash unless retrorockets or other forces stopped them.", marks: 1, markCode: "B", part: "d" },
            ],
            finalAnswer: "(a) free fall → weightlessness (b) 8.7 m/s² (c) equals g → gravity is centripetal force (d) would fall to Earth.",
            commonErrors: ["Thinking gravity is zero in orbit.", "Confusing apparent weight with true weight."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
