import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "phys12-u1-lesson-1-2",
  code: "1-2",
  title: "Moment of Inertia and Angular Momentum",
  goal: "I CAN relate angular momentum to moment of inertia and angular velocity, and apply conservation of angular momentum to spinning systems.",
  standards: ["HS-PS2-1"],
  vocabulary: [
    { term: "Moment of inertia", definition: "The rotational analog of mass; a measure of how difficult it is to change an object's angular velocity." },
    { term: "Angular momentum", definition: "A quantity describing the 'spin' of a rotating object: $L = I\\omega$, conserved in isolated systems." },
    { term: "Conservation of angular momentum", definition: "If no external torque acts, total angular momentum stays constant." },
    { term: "Angular velocity", definition: "Rate of rotation in radians per second ($\\omega$)." },
    { term: "Rigid body", definition: "An object whose parts move together as a unit during rotation." },
    { term: "Spin", definition: "Rotation of an object about its own axis." },
    { term: "Moment arm of mass", definition: "Distance from rotation axis to a mass element; enters moment of inertia calculation." },
  ],
  concepts: [
    {
      id: "phys12-u1-moment-inertia",
      title: "Moment of inertia",
      skill: "Describe how mass distribution affects rotational inertia and compare rotational inertia of different objects.",
      lesson: {
        sections: [
          {
            heading: "Rotational analog of mass",
            body: "Just as mass measures resistance to linear acceleration, the **moment of inertia** $I$ measures resistance to angular acceleration. An object with the same mass but spread farther from the rotation axis has a larger moment of inertia — it is harder to spin up or slow down.",
          },
          {
            heading: "What changes I",
            body: "Moment of inertia depends on:\n- total mass $m$\n- how that mass is distributed relative to the axis\n\nFor a point mass $m$ at distance $r$ from the axis: $I = mr^2$. For extended objects, every piece of mass contributes $dm \\cdot r^2$, summed over the object.\n\nA figure skater spinning with arms out has a large moment of inertia; pulling arms in reduces $I$ dramatically because mass moves closer to the axis.",
          },
          {
            heading: "Comparing objects",
            body: "A hoop has more rotational inertia than a disk of the same mass and radius, because all the hoop's mass is at the rim (large $r$). A sphere lies between them. You can feel this: a hoop is harder to spin than a disk.",
          },
        ],
        keyFormulas: [
          { name: "Point mass", statement: "$I = mr^2$" },
          { name: "General", statement: "$I = \\sum mr^2$ over all mass elements" },
        ],
        workedExample: {
          problem: "Two 2.0 kg masses are attached to a light rod at distances 0.50 m and 1.0 m from the rotation axis. Calculate the moment of inertia.",
          solution: "Treat each mass as a point mass: $I = m_1 r_1^2 + m_2 r_2^2 = 2.0(0.50)^2 + 2.0(1.0)^2 = 2.0(0.25) + 2.0(1.0) = 0.50 + 2.0 = 2.5\\ \\text{kg·m}^2$.",
        },
      },
      questions: [
        {
          id: "phys12-u1-moment-inertia-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two objects have the same mass. Object X has its mass concentrated near the rotation axis; Object Y has mass spread far from the axis. Which has the larger moment of inertia?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Object X" },
              { id: "b", text: "Object Y" },
              { id: "c", text: "They are equal" },
              { id: "d", text: "It depends on their shapes only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Moment of inertia", statement: "$I = \\sum mr^2$; larger $r$ gives larger $I$." }],
            steps: [{ reasoning: "Mass farther from the axis contributes more to $I$, so Object Y has the larger moment of inertia.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Object Y",
            commonErrors: ["Thinking only total mass matters."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys12-u1-moment-inertia-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 0.50 kg mass is attached to a string and swung in a circle of radius 1.5 m. Calculate its moment of inertia about the center of the circle.",
          response: { type: "numeric", parts: [{ label: "I", answer: 1.125, unit: "kg·m²", tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Moment of inertia", statement: "$I = mr^2$ for a point mass." }],
            steps: [
              { reasoning: "$I = mr^2 = 0.50 \\times (1.5)^2 = 0.50 \\times 2.25 = 1.125$ kg·m².", working: "0.50\\times1.5^2=1.125", marks: 2, markCode: "M" },
              { reasoning: "I = 1.125 kg·m².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.125 kg·m²",
            commonErrors: ["Using $mr$ instead of $mr^2$.", "Squaring the mass instead of the radius."],
            examinerNote: "M2 substitution and squaring, A1 answer.",
          },
        },
        {
          id: "phys12-u1-moment-inertia-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A figure skater spins with arms extended. She then pulls her arms in toward her body. Her moment of inertia decreases from 4.0 kg·m² to 1.0 kg·m² while her angular momentum stays constant. Calculate how her angular velocity changes if it was initially 2.0 rad/s.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Angular momentum", statement: "$L = I\\omega$" },
              { kind: "principle", name: "Conservation", statement: "With no external torque, $L$ is constant." },
            ],
            steps: [
              { reasoning: "Initial angular momentum: $L = I_i \\omega_i = 4.0 \\times 2.0 = 8.0$ kg·m²/s.", working: "L=4.0\\times2.0=8.0", marks: 1, markCode: "M" },
              { reasoning: "Since $L$ is conserved, $I_f \\omega_f = 8.0$.", marks: 1, markCode: "B" },
              { reasoning: "$\\omega_f = 8.0/1.0 = 8.0$ rad/s.", working: "w=8.0/1.0=8.0", marks: 1, markCode: "M" },
              { reasoning: "Her spin rate increases fourfold because smaller $I$ requires larger $\\omega$ to keep $L$ constant.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Angular velocity increases from 2.0 to 8.0 rad/s.",
            commonErrors: ["Thinking angular velocity stays constant.", "Using $L = I/\\omega$."],
            examinerNote: "M1 initial L, B1 conservation, M1 solve, R1 interpretation.",
          },
        },
        {
          id: "phys12-u1-moment-inertia-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A compound pendulum consists of a uniform rod of mass 0.40 kg and length 0.80 m pivoted at one end. A 0.60 kg point mass is attached at the free end. The system is released from horizontal.",
          parts: [
            { label: "a", prompt: "Calculate the moment of inertia of the rod about the pivot.", marks: 2 },
            { label: "b", prompt: "Calculate the moment of inertia of the point mass about the pivot.", marks: 2 },
            { label: "c", prompt: "Calculate the total moment of inertia of the system.", marks: 2 },
            { label: "d", prompt: "If released from rest at horizontal, explain qualitatively whether it swings faster or slower than a simple pendulum of the same length and total mass.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moment of inertia", statement: "$I = \\frac{1}{3}mL^2$ for a rod about end; $I = mr^2$ for point mass." },
              { kind: "principle", name: "Energy", statement: "Release height determines initial PE; I determines angular acceleration." },
            ],
            steps: [
              { reasoning: "For a uniform rod about one end: $I_{rod} = \\frac{1}{3}mL^2 = \\frac{1}{3}(0.40)(0.80)^2 = \\frac{1}{3}(0.40)(0.64) = 0.0853$ kg·m².", working: "I=1/3*0.40*0.64=0.0853", marks: 2, markCode: "M", part: "a" },
              { reasoning: "Point mass at 0.80 m: $I_{mass} = mr^2 = 0.60 \\times (0.80)^2 = 0.60 \\times 0.64 = 0.384$ kg·m².", working: "I=0.60*0.64=0.384", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Total $I = 0.0853 + 0.384 = 0.469$ kg·m².", working: "I=0.0853+0.384=0.469", marks: 2, markCode: "A", part: "c" },
              { reasoning: "Total mass = 1.0 kg. A simple pendulum of length 0.80 m has period $T = 2\\pi\\sqrt{L/g} = 2\\pi\\sqrt{0.80/9.81} \\approx 1.79$ s.", marks: 1, markCode: "M", part: "d" },
              { reasoning: "The compound pendulum has mass distributed along its length with significant $I$; its period $T = 2\\pi\\sqrt{I/mg\\bar{r}}$ where $\\bar{r}$ is distance to center of mass. The extra mass at the end increases both $I$ and the restoring torque; the period will differ from the simple pendulum.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Qualitatively, the compound pendulum will have a longer period (swing slower) because the mass at the end creates a large moment of inertia relative to the restoring torque compared to a point-mass pendulum.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Accept reasonable qualitative arguments; exact period calculation not required for part (d).", marks: 1, markCode: "R", part: "d" },
            ],
            finalAnswer: "(a) 0.0853 kg·m² (b) 0.384 kg·m² (c) 0.469 kg·m² (d) swings slower due to larger effective inertia.",
            commonErrors: ["Using $\\frac{1}{2}mL^2$ for rod about end instead of $\\frac{1}{3}mL^2$.", "Forgetting to include both contributions to total I.", "Confusing moment of inertia with mass."],
            examinerNote: "2+2+2+4 = 10.",
          },
        },
      ],
    },
    {
      id: "phys12-u1-angular-momentum",
      title: "Angular momentum and conservation",
      skill: "Apply conservation of angular momentum to spinning and orbiting systems.",
      lesson: {
        sections: [
          {
            heading: "Angular momentum",
            body: "**Angular momentum** $L$ describes the 'spin' or orbital motion of a rotating system:\n\n$$L = I\\omega$$\n\nIts unit is kg·m²/s. Like linear momentum, angular momentum is conserved when no external torque acts on the system.",
          },
          {
            heading: "Conservation of angular momentum",
            body: "If the net external torque on a system is zero, total angular momentum is constant:\n\n$$I_i\\omega_i = I_f\\omega_f$$\n\nThis explains why a figure skater spins faster when pulling arms in ($I$ decreases, so $\\omega$ increases), why a diver tucks to spin faster, and why planets move faster at perihelion (closer to the Sun, smaller orbital radius means smaller $I$).",
          },
          {
            heading: "Angular momentum in orbits",
            body: "For an object in orbit, angular momentum $L = mvr$ (for circular orbit). When a satellite moves to a lower orbit, $r$ decreases; if $L$ is conserved, $v$ must increase. This is why objects move faster when closer to the gravitating body.",
          },
        ],
        keyFormulas: [
          { name: "Angular momentum", statement: "$L = I\\omega$ (kg·m²/s)" },
          { name: "Conservation", statement: "$I_i\\omega_i = I_f\\omega_f$ when net external torque = 0" },
        ],
        workedExample: {
          problem: "A spinning ice skater has $I = 2.0$ kg·m² and $\\omega = 5.0$ rad/s. She pulls her arms in, reducing $I$ to 0.80 kg·m². What is her new angular velocity?",
          solution: "Conservation of angular momentum: $I_i\\omega_i = I_f\\omega_f$. Initial $L = 2.0 \\times 5.0 = 10$ kg·m²/s. Final $\\omega = L/I_f = 10/0.80 = 12.5$ rad/s.",
        },
      },
      questions: [
        {
          id: "phys12-u1-angular-momentum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the angular momentum of an object with $I = 3.0$ kg·m² spinning at $\\omega = 4.0$ rad/s?",
          response: { type: "numeric", parts: [{ label: "L", answer: 12, unit: "kg·m²/s" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Angular momentum", statement: "$L = I\\omega$." }],
            steps: [{ reasoning: "$L = 3.0 \\times 4.0 = 12$ kg·m²/s.", working: "L=3.0\\times4.0=12", marks: 1, markCode: "M" }],
            finalAnswer: "12 kg·m²/s",
            commonErrors: ["Using $L = I + \\omega$ instead of product."],
            examinerNote: "M1 for 12.",
          },
        },
        {
          id: "phys12-u1-angular-momentum-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A diver leaves the springboard with angular momentum $L = 12$ kg·m²/s. In the air she tucks, reducing her moment of inertia from 3.0 to 1.5 kg·m². What is her angular velocity after tucking if it was 4.0 rad/s before?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Angular momentum", statement: "$L = I\\omega$" },
              { kind: "principle", name: "Conservation", statement: "$I_i\\omega_i = I_f\\omega_f$ when no external torque." },
            ],
            steps: [
              { reasoning: "Check initial $L$: $3.0 \\times 4.0 = 12$ kg·m²/s, consistent.", marks: 1, markCode: "B" },
              { reasoning: "After tucking, $I_f = 1.5$ kg·m², so $\\omega_f = L/I_f = 12/1.5 = 8.0$ rad/s.", working: "w=12/1.5=8.0", marks: 2, markCode: "M" },
            ],
            finalAnswer: "8.0 rad/s",
            commonErrors: ["Thinking $\\omega$ stays constant.", "Halving $\\omega$ instead of doubling."],
            examinerNote: "B1 conservation, M2 calculation.",
          },
        },
        {
          id: "phys12-u1-angular-momentum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A satellite orbits Earth in a circular orbit of radius 7000 km with speed 7.5 km/s. It fires rockets to move to a lower orbit of radius 6000 km. Explain why its speed must increase, assuming angular momentum is approximately conserved.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Angular momentum", statement: "For orbit, $L = mvr$ approximately." },
              { kind: "principle", name: "Conservation", statement: "If $L$ conserved and $r$ decreases, $v$ must increase." },
            ],
            steps: [
              { reasoning: "Angular momentum for circular orbit: $L = mvr$ where $r$ is orbital radius.", marks: 1, markCode: "B" },
              { reasoning: "When satellite moves to smaller orbit, $r$ decreases from 7000 to 6000 km.", marks: 1, markCode: "B" },
              { reasoning: "For $L$ to stay constant, $v$ must increase since $v = L/(mr)$.", marks: 1, markCode: "R" },
              { reasoning: "New speed approximately: $v_f = v_i \\times r_i/r_f = 7.5 \\times 7000/6000 = 8.75$ km/s.", working: "v=7.5*7000/6000=8.75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Speed increases to about 8.75 km/s; smaller orbit radius requires higher speed for same angular momentum.",
            commonErrors: ["Thinking satellites slow down in lower orbits.", "Confusing angular momentum with linear momentum."],
            examinerNote: "B2 reasoning, R1 explanation, A1 calculation.",
          },
        },
        {
          id: "phys12-u1-angular-momentum-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A merry-go-round (moment of inertia $I = 200$ kg·m²) rotates at 0.50 rad/s. A child of mass 40 kg stands at the edge (radius 2.0 m) then walks to the center.",
          parts: [
            { label: "a", prompt: "Calculate the initial angular momentum of the system (merry-go-round + child).", marks: 3 },
            { label: "b", prompt: "Calculate the moment of inertia of the child at the edge and at the center.", marks: 3 },
            { label: "c", prompt: "Calculate the final angular velocity when the child reaches the center.", marks: 3 },
            { label: "d", prompt: "Explain why angular momentum is conserved during this process.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Angular momentum", statement: "$L = I\\omega$" },
              { kind: "formula", name: "Moment of inertia", statement: "$I = mr^2$ for point mass." },
              { kind: "principle", name: "Conservation", statement: "No external torque → $L$ constant." },
            ],
            steps: [
              { reasoning: "Child at edge: $I_{child} = mr^2 = 40 \\times (2.0)^2 = 160$ kg·m².", working: "I=40*4=160", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Total initial $I = 200 + 160 = 360$ kg·m².", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Initial $L = I_{total} \\times \\omega = 360 \\times 0.50 = 180$ kg·m²/s (includes both merry-go-round and child's contribution).", working: "L=360*0.50=180", marks: 2, markCode: "A", part: "a" },
              { reasoning: "Child at center: $I_{child} = 40 \\times (0)^2 = 0$ kg·m².", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Final total $I = 200 + 0 = 200$ kg·m².", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Final $\\omega = L/I_f = 180/200 = 0.90$ rad/s.", working: "w=180/200=0.90", marks: 2, markCode: "M", part: "c" },
              { reasoning: "Answer: 0.90 rad/s.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Angular momentum is conserved because there is no external torque on the merry-go-round-child system (ignoring friction).", marks: 1, markCode: "R", part: "d" },
            ],
            finalAnswer: "(a) 180 kg·m²/s (b) 160 kg·m² at edge, 0 at center (c) 0.90 rad/s (d) no external torque.",
            commonErrors: ["Forgetting to include child's moment of inertia.", "Using child's mass instead of $mr^2$.", "Thinking angular velocity stays constant."],
            examinerNote: "3+3+3+1 = 10.",
          },
        },
      ],
    },
  ],
};
