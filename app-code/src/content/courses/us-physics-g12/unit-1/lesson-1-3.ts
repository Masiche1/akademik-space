import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "phys12-u1-lesson-1-3",
  code: "1-3",
  title: "Rotational Kinetic Energy and Applications",
  goal: "I CAN calculate rotational kinetic energy, apply energy conservation to rolling objects, and explain real-world rotational systems.",
  standards: ["HS-PS2-1", "HS-PS3-1"],
  vocabulary: [
    { term: "Rotational kinetic energy", definition: "Energy of rotation: $K = \\frac{1}{2}I\\omega^2$." },
    { term: "Rolling motion", definition: "Combined translation and rotation; an object rolls without slipping when $v = r\\omega$." },
    { term: "No slipping", definition: "Condition where contact point velocity is zero; relates $v = r\\omega$ for rolling." },
    { term: "Total kinetic energy", definition: "For rolling: $K_{total} = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$." },
    { term: "Gyroscope", definition: "A rapidly spinning wheel mounted to maintain orientation; exploits angular momentum." },
    { term: "Precession", definition: "Slow change in orientation of a spinning object's axis under external torque." },
    { term: "Angular speed", definition: "Magnitude of angular velocity, measured in rad/s or rev/s." },
  ],
  concepts: [
    {
      id: "phys12-u1-rotational-ke",
      title: "Rotational kinetic energy",
      skill: "Calculate rotational kinetic energy and apply energy conservation to rotating systems.",
      lesson: {
        sections: [
          {
            heading: "Rotational KE",
            body: "Just as linear kinetic energy is $\\frac{1}{2}mv^2$, **rotational kinetic energy** is:\n\n$$K_{rot} = \\frac{1}{2}I\\omega^2$$\n\nUnits: joules (kg·m²/s²), same as linear KE. A spinning object can store significant energy — this is why flywheels are used to store energy in power grids.",
          },
          {
            heading: "Total KE of rolling objects",
            body: "An object rolling without slipping has BOTH translational and rotational kinetic energy:\n\n$$K_{total} = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$$\n\nFor rolling without slipping, $v = r\\omega$, so $\\omega = v/r$. Substituting gives $K_{rot} = \\frac{1}{2}I(v/r)^2$.\n\nFor a solid sphere: $I = \\frac{2}{5}mr^2$, so $K_{rot} = \\frac{1}{5}mv^2$, making total $K = \\frac{7}{10}mv^2$ — less than the $\\frac{1}{2}mv^2$ a sliding object would have at the same speed, because some energy goes into rotation.",
          },
          {
            heading: "Energy conservation with rotation",
            body: "When an object rolls down an incline, gravitational PE converts to both translational and rotational KE. For a given height, the final speed depends on how the mass is distributed (the moment of inertia factor). Objects with mass concentrated at the center (solid sphere, cylinder) roll faster than hollow objects (hoop, shell) because less energy goes into rotation.",
          },
        ],
        keyFormulas: [
          { name: "Rotational KE", statement: "$K_{rot} = \\frac{1}{2}I\\omega^2$" },
          { name: "Rolling condition", statement: "$v = r\\omega$ for no slipping" },
          { name: "Total rolling KE", statement: "$K = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$" },
        ],
        workedExample: {
          problem: "A solid cylinder ($I = \\frac{1}{2}mr^2$) of mass 2.0 kg and radius 0.30 m rolls down a 2.0 m incline from rest. Find its speed at the bottom (ignore friction losses; $g = 9.81$ m/s²).",
          solution: "Energy conservation: $mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$. With $\\omega = v/r$ and $I = \\frac{1}{2}mr^2$: $mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}(\\frac{1}{2}mr^2)(v/r)^2 = \\frac{1}{2}mv^2 + \\frac{1}{4}mv^2 = \\frac{3}{4}mv^2$. So $v = \\sqrt{4gh/3} = \\sqrt{4 \\times 9.81 \\times 2.0/3} = \\sqrt{26.16} = 5.11$ m/s.",
        },
      },
      questions: [
        {
          id: "phys12-u1-rotational-ke-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A wheel has $I = 0.50$ kg·m² and spins at $\\omega = 10$ rad/s. What is its rotational kinetic energy?",
          response: { type: "numeric", parts: [{ label: "K", answer: 25, unit: "J" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Rotational KE", statement: "$K = \\frac{1}{2}I\\omega^2$." }],
            steps: [{ reasoning: "$K = \\frac{1}{2}(0.50)(10)^2 = \\frac{1}{2}(0.50)(100) = 25$ J.", working: "K=0.5*0.50*100=25", marks: 1, markCode: "M" }],
            finalAnswer: "25 J",
            commonErrors: ["Forgetting the factor of 1/2."],
            examinerNote: "M1 for 25 J.",
          },
        },
        {
          id: "phys12-u1-rotational-ke-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A hoop ($I = mr^2$) and a solid disk ($I = \\frac{1}{2}mr^2$) of the same mass and radius roll down the same incline from rest. Which reaches the bottom first and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total KE", statement: "$K = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$ with $\\omega = v/r$." },
              { kind: "principle", name: "Energy conservation", statement: "Same height → same total energy; larger I means more energy in rotation, less in translation." },
            ],
            steps: [
              { reasoning: "Both start with same PE $mgh$; energy conservation gives same total KE at bottom.", marks: 1, markCode: "B" },
              { reasoning: "The hoop has larger $I$ ($mr^2$ vs $\\frac{1}{2}mr^2$), so a larger fraction of its energy goes into rotation, leaving less for translational motion.", marks: 1, markCode: "R" },
              { reasoning: "Therefore the solid disk reaches the bottom first (higher translational speed).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The solid disk reaches first; the hoop puts more energy into rotation.",
            commonErrors: ["Thinking they reach at the same time.", "Ignoring rotational KE."],
            examinerNote: "B1 energy, R1 reasoning, A1 conclusion.",
          },
        },
        {
          id: "phys12-u1-rotational-ke-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A flywheel with $I = 5.0$ kg·m² is spun up to 1200 rpm. Calculate its rotational kinetic energy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rotational KE", statement: "$K = \\frac{1}{2}I\\omega^2$" },
              { kind: "method", name: "Unit conversion", statement: "Convert rpm to rad/s: $\\omega = \\text{rpm} \\times 2\\pi/60$." },
            ],
            steps: [
              { reasoning: "Convert: $\\omega = 1200 \\times 2\\pi/60 = 40\\pi = 125.7$ rad/s.", working: "w=1200*2pi/60=125.7", marks: 1, markCode: "M" },
              { reasoning: "$K = \\frac{1}{2}(5.0)(125.7)^2 = \\frac{1}{2}(5.0)(15791) = 39478$ J.", working: "K=0.5*5.0*125.7^2", marks: 2, markCode: "M" },
              { reasoning: "K ≈ 39.5 kJ.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Approximately 39.5 kJ (39,478 J).",
            commonErrors: ["Using rpm directly without converting to rad/s.", "Forgetting to square omega."],
            examinerNote: "M1 conversion, M2 calculation, A1 answer. Accept 39-40 kJ.",
          },
        },
        {
          id: "phys12-u1-rotational-ke-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A solid sphere ($I = \\frac{2}{5}mr^2$) of mass 1.5 kg and radius 0.20 m rolls from rest down a 1.5 m incline. $g = 9.81$ m/s².",
          parts: [
            { label: "a", prompt: "Write the energy conservation equation for this system.", marks: 2 },
            { label: "b", prompt: "Substitute $I = \\frac{2}{5}mr^2$ and $\\omega = v/r$ to find the coefficient of $mv^2$.", marks: 3 },
            { label: "c", prompt: "Calculate the speed at the bottom of the incline.", marks: 3 },
            { label: "d", prompt: "Calculate the angular velocity at the bottom.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy conservation", statement: "$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$" },
              { kind: "formula", name: "Rolling", statement: "$v = r\\omega$" },
            ],
            steps: [
              { reasoning: "$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$ where $h = 1.5$ m (gravitational PE converts to translational + rotational KE).", marks: 2, markCode: "B", part: "a" },
              { reasoning: "Substitute $I = \\frac{2}{5}mr^2$ and $\\omega = v/r$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "$\\frac{1}{2}I\\omega^2 = \\frac{1}{2}(\\frac{2}{5}mr^2)(v/r)^2 = \\frac{1}{5}mv^2$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Total: $mgh = \\frac{1}{2}mv^2 + \\frac{1}{5}mv^2 = \\frac{7}{10}mv^2$.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "$v = \\sqrt{10gh/7} = \\sqrt{10 \\times 9.81 \\times 1.5/7} = \\sqrt{21.02} = 4.58$ m/s.", working: "v=sqrt(10*9.81*1.5/7)=4.58", marks: 2, markCode: "M", part: "c" },
              { reasoning: "v ≈ 4.58 m/s.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "$\\omega = v/r = 4.58/0.20 = 22.9$ rad/s.", working: "w=4.58/0.20=22.9", marks: 2, markCode: "M", part: "d" },
            ],
            finalAnswer: "(a) $mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$ (b) $\\frac{7}{10}mv^2$ (c) 4.58 m/s (d) 22.9 rad/s.",
            commonErrors: ["Forgetting rotational KE term.", "Using wrong moment of inertia for sphere.", "Forgetting $\\omega = v/r$."],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys12-u1-rotational-applications",
      title: "Applications of rotation",
      skill: "Explain gyroscopes, precession, and other real-world rotational phenomena.",
      lesson: {
        sections: [
          {
            heading: "Gyroscopes",
            body: "A **gyroscope** is a rapidly spinning wheel mounted so it can rotate freely about three axes. Its angular momentum makes it resist changes in orientation — this is why a spinning top stays upright and why bicycles are stable when moving.",
          },
          {
            heading: "Precession",
            body: "When an external torque acts on a spinning gyroscope, the axis does not tip over immediately; instead it **precesses** — the axis rotates slowly around the direction of the torque. This is why a spinning top's axis wobbles in a circle as it slows down, and why bicycle wheels precess when you turn.",
          },
          {
            heading: "Everyday rotation",
            body: "Rotational concepts appear everywhere: drill bits, washing machines, hard drives, turbines, and even figure skating. Understanding torque, angular momentum and energy helps engineers design more efficient machines and athletes perform better.",
          },
        ],
        keyFormulas: [
          { name: "Gyroscope stability", statement: "Large angular momentum resists change in orientation" },
          { name: "Precession", statement: "External torque causes axis to rotate rather than tip" },
        ],
        workedExample: {
          problem: "Why does a spinning bicycle wheel stay upright when moving forward but fall over when stationary?",
          solution: "The spinning wheel has angular momentum $L = I\\omega$. When the bike leans, gravity exerts a torque that would topple it. But the wheel's angular momentum causes the lean to manifest as precession (a steering turn) rather than a fall — the bike turns into the lean and stays upright. When stationary, $\\omega = 0$, so no angular momentum exists to resist the torque.",
        },
      },
      questions: [
        {
          id: "phys12-u1-rotational-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What property of a spinning gyroscope allows it to resist changes in orientation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High friction" },
              { id: "b", text: "Large angular momentum" },
              { id: "c", text: "Low moment of inertia" },
              { id: "d", text: "High linear velocity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Angular momentum", statement: "$L = I\\omega$; large L resists change in orientation." }],
            steps: [{ reasoning: "Large angular momentum makes the gyroscope resist changes in its axis of rotation.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Large angular momentum",
            commonErrors: ["Confusing angular momentum with linear momentum."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys12-u1-rotational-applications-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A spinning top wobbles in a circle as it slows down. What is this motion called and what causes it?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Precession", statement: "External torque on spinning object causes axis to rotate rather than tip." }],
            steps: [
              { reasoning: "The wobbling motion is called **precession**.", marks: 1, markCode: "B" },
              { reasoning: "Gravity exerts a torque on the tilted top, but instead of tipping over, the angular momentum causes the axis to rotate around the vertical.", marks: 1, markCode: "R" },
              { reasoning: "As the top slows, its angular momentum decreases and precession becomes more pronounced until it falls.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Precession — gravity's torque causes the axis to rotate rather than tip.",
            commonErrors: ["Calling it oscillation instead of precession.", "Ignoring the role of angular momentum."],
            examinerNote: "B1 term, R2 explanation.",
          },
        },
        {
          id: "phys12-u1-rotational-applications-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A washing machine drum has moment of inertia $I = 0.80$ kg·m² and spins at 1200 rpm during the spin cycle. Calculate the angular momentum and rotational kinetic energy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Angular momentum", statement: "$L = I\\omega$" },
              { kind: "formula", name: "Rotational KE", statement: "$K = \\frac{1}{2}I\\omega^2$" },
            ],
            steps: [
              { reasoning: "Convert rpm: $\\omega = 1200 \\times 2\\pi/60 = 125.7$ rad/s.", working: "w=1200*2pi/60=125.7", marks: 1, markCode: "M" },
              { reasoning: "$L = I\\omega = 0.80 \\times 125.7 = 100.5$ kg·m²/s.", working: "L=0.80*125.7=100.5", marks: 1, markCode: "M" },
              { reasoning: "$K = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(0.80)(125.7)^2 = \\frac{1}{2}(0.80)(15791) = 6316$ J.", working: "K=0.5*0.80*125.7^2=6316", marks: 2, markCode: "M" },
            ],
            finalAnswer: "L ≈ 100 kg·m²/s; K ≈ 6.3 kJ.",
            commonErrors: ["Using rpm without converting.", "Confusing L and K formulas."],
            examinerNote: "M1 conversion, M1 L, M2 K.",
          },
        },
        {
          id: "phys12-u1-rotational-applications-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A hard drive platter spins at 7200 rpm. The platter has $I = 0.0010$ kg·m². It takes 3.0 s to spin up from rest to full speed.",
          parts: [
            { label: "a", prompt: "Calculate the angular velocity in rad/s.", marks: 2 },
            { label: "b", prompt: "Calculate the angular momentum at full speed.", marks: 2 },
            { label: "c", prompt: "Calculate the rotational kinetic energy at full speed.", marks: 3 },
            { label: "d", prompt: "Calculate the average torque required to spin it up in 3.0 s.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Angular velocity", statement: "$\\omega = \\text{rpm} \\times 2\\pi/60$" },
              { kind: "formula", name: "Angular momentum", statement: "$L = I\\omega$" },
              { kind: "formula", name: "Rotational KE", statement: "$K = \\frac{1}{2}I\\omega^2$" },
              { kind: "formula", name: "Torque", statement: "$\\tau = \\Delta L/\\Delta t = I\\alpha$" },
            ],
            steps: [
              { reasoning: "$\\omega = 7200 \\times 2\\pi/60 = 240\\pi = 754$ rad/s.", working: "w=7200*2pi/60=754", marks: 2, markCode: "M", part: "a" },
              { reasoning: "$L = I\\omega = 0.0010 \\times 754 = 0.754$ kg·m²/s.", working: "L=0.0010*754=0.754", marks: 2, markCode: "M", part: "b" },
              { reasoning: "$K = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(0.0010)(754)^2 = \\frac{1}{2}(0.0010)(568516) = 284$ J.", working: "K=0.5*0.0010*754^2=284", marks: 2, markCode: "M", part: "c" },
              { reasoning: "Answer: 284 J.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Average torque = $\\Delta L/\\Delta t = 0.754/3.0 = 0.251$ N·m.", working: "tau=0.754/3.0=0.251", marks: 2, markCode: "M", part: "d" },
              { reasoning: "Answer: 0.25 N·m.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) 754 rad/s (b) 0.754 kg·m²/s (c) 284 J (d) 0.25 N·m.",
            commonErrors: ["Using rpm without converting to rad/s.", "Confusing torque with angular momentum."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
  ],
};
