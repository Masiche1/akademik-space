import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "eph11-u2-lesson-2-2",
  code: "2-2",
  title: "Electromagnetic Induction, Generators and Transformers",
  goal: "I CAN explain how a voltage is induced, describe an a.c. generator, and use the transformer equations for power transmission.",
  standards: ["4PH1 6.6", "4PH1 6.7", "4PH1 6.8", "4PH1 6.9", "4PH1 6.10", "4PH1 6.11"],
  vocabulary: [
    { term: "Electromagnetic induction", definition: "The production of a voltage across a conductor when it moves relative to a magnetic field, or when the magnetic field through it changes." },
    { term: "Induced voltage", definition: "The voltage (potential difference) produced by electromagnetic induction. It drives a current if the circuit is complete." },
    { term: "Generator", definition: "A device that transfers kinetic energy to electrical energy by rotating a coil in a magnetic field (or a magnet inside a coil)." },
    { term: "Slip rings", definition: "Rings connected to the ends of the coil in an a.c. generator. Carbon brushes touch them so the output can be taken to an external circuit." },
    { term: "Transformer", definition: "A device that changes the size of an alternating voltage. It has a primary coil and a secondary coil wound on a laminated soft iron core." },
    { term: "Step-up transformer", definition: "A transformer with more turns on the secondary coil than on the primary coil, so the voltage increases." },
    { term: "Step-down transformer", definition: "A transformer with fewer turns on the secondary coil than on the primary coil, so the voltage decreases." },
  ],
  concepts: [
    {
      id: "eph11-u2-induction-generators",
      title: "Electromagnetic induction and generators",
      skill: "Explain how a voltage is induced in a conductor and how an a.c. generator produces an alternating voltage.",
      lesson: {
        sections: [
          {
            heading: "Inducing a voltage",
            body: "A voltage is **induced** across a conductor when it **cuts magnetic field lines**, that is, when there is relative movement between the conductor and the magnetic field. The same happens to a coil when the magnetic field through it changes, for example when a magnet is pushed into it.\n\n- If the magnet is **stationary**, no voltage is induced, even if it is inside the coil.\n- Pushing the magnet in and pulling it out induces voltages in **opposite directions**.\n- If the circuit is complete, an induced current flows.\n\nThe induced voltage is larger if you **move the magnet faster**, use a **stronger magnet**, or use **more turns** on the coil.",
          },
          {
            heading: "The a.c. generator",
            body: "A **generator** rotates a coil in a magnetic field. The sides of the coil cut the field lines, so a voltage is induced. Each end of the coil is connected to a **slip ring**, and carbon brushes pass the current to the external circuit.\n\nAs the coil turns, the voltage:\n\n- is **zero** when the coil is vertical, moving parallel to the field (not cutting lines)\n- is a **maximum** when the coil is horizontal, cutting the lines at right angles\n- changes direction every half turn, so the output is an **alternating voltage**.\n\nRotating **faster** increases both the size (peak voltage) and the **frequency** of the output. The frequency equals the number of complete rotations per second.",
          },
          {
            heading: "Dynamos and mains frequency",
            body: "A **dynamo** (as on a bicycle) rotates a magnet inside a coil. The relative motion induces a voltage in the same way. A d.c. generator uses a split-ring commutator instead of slip rings.\n\nThe frequency in the UK mains is $50\\text{ Hz}$. The time for one cycle is the **period**, $T = \\frac{1}{f}$, so $T = \\frac{1}{50} = 0.020\\text{ s}$. A generator rotating at 50 revolutions per second, which is $3000$ revolutions per minute, produces this frequency.",
          },
        ],
        keyFormulas: [
          { name: "Induction", statement: "Relative motion between a conductor and a magnetic field induces a voltage." },
          { name: "Period and frequency", statement: "$T = \\frac{1}{f}$" },
          { name: "Faster generator", statement: "Greater speed gives a higher peak voltage and a higher frequency." },
        ],
        workedExample: {
          problem: "A generator coil rotates 20 times per second. Find the frequency of the output and the time for one cycle.",
          solution: "One rotation gives one cycle, so $f = 20\\text{ Hz}$. The period is $T = \\frac{1}{f} = \\frac{1}{20} = 0.050\\text{ s}$.",
        },
      },
      questions: [
        {
          id: "eph11-u2-induction-generators-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bar magnet is held stationary inside a coil of wire that is connected to a sensitive voltmeter. What does the voltmeter read?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A small steady voltage, because the magnet is weak" },
              { id: "b", text: "A large steady voltage, because the magnet is inside the coil" },
              { id: "c", text: "An alternating voltage" },
              { id: "d", text: "Zero, because there is no relative movement between the magnet and the coil" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Electromagnetic induction", statement: "A voltage is induced only when the magnetic field through the coil changes or there is relative movement." },
            ],
            steps: [
              { reasoning: "With no movement, the coil does not cut field lines, so no voltage is induced.", working: "V = 0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Zero, because there is no relative movement.",
            commonErrors: ["Choosing (a), thinking a magnet inside a coil always induces a voltage.", "Choosing (c), confusing a stationary magnet with a rotating one."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "eph11-u2-induction-generators-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student pushes a bar magnet into a coil connected to a voltmeter and sees a small deflection. State **three** changes that would increase the induced voltage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Size of the induced voltage", statement: "The induced voltage increases with faster movement, a stronger magnetic field and more turns on the coil." },
            ],
            steps: [
              { reasoning: "Move the magnet into the coil faster.", marks: 1, markCode: "B" },
              { reasoning: "Use a stronger magnet.", marks: 1, markCode: "B" },
              { reasoning: "Use a coil with more turns of wire (or a larger area).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Move the magnet faster; use a stronger magnet; use more turns on the coil.",
            commonErrors: ["Saying 'use a bigger battery'; there is no battery in the circuit.", "Saying 'hold the magnet still inside the coil'."],
            examinerNote: "Allow 'increase the speed of the relative motion' oe. Ignore 'use a better voltmeter'.",
          },
        },
        {
          id: "eph11-u2-induction-generators-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A simple a.c. generator has a coil rotating at a steady rate in a uniform magnetic field. Explain why the output voltage alternates, and state what happens to the output when the coil is rotated twice as fast.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Generator action", statement: "A voltage is induced when the sides of the coil cut field lines; the direction reverses each half turn." },
            ],
            steps: [
              { reasoning: "As the coil rotates, its sides cut the magnetic field lines, so a voltage is induced.", marks: 1, markCode: "B" },
              { reasoning: "Every half turn, each side of the coil moves through the field in the opposite direction, so the induced voltage reverses direction. The output is therefore alternating.", marks: 1, markCode: "R" },
              { reasoning: "Doubling the speed doubles the rate of cutting the field lines, so the peak voltage is larger (doubles).", marks: 1, markCode: "B" },
              { reasoning: "The frequency doubles, because there are twice as many cycles each second.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The voltage reverses every half turn as the coil cuts the field in opposite directions; at double speed the peak voltage and the frequency both double.",
            commonErrors: ["Saying only the frequency increases.", "Saying the voltage is alternating because the magnet is alternating."],
            examinerNote: "Allow 'larger voltage' for the peak voltage and 'more cycles per second' for frequency.",
          },
        },
        {
          id: "eph11-u2-induction-generators-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A small generator is driven by a wind turbine. Its coil rotates in a magnetic field and the output is connected to a lamp. The coil turns at $3000$ revolutions per minute.",
          parts: [
            { label: "a", prompt: "State the energy transfer in a generator.", marks: 1 },
            { label: "b", prompt: "Explain why the lamp goes out when the wind stops and the coil stops turning.", marks: 2 },
            { label: "c", prompt: "Calculate the frequency of the output in hertz.", marks: 2 },
            { label: "d", prompt: "Calculate the time for one complete cycle. Give your answer in seconds.", marks: 2 },
            { label: "e", prompt: "The wind speed doubles. Describe two changes to the output.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Generator", statement: "A generator transfers kinetic energy to electrical energy by induction." },
              { kind: "formula", name: "Frequency", statement: "$f = \\frac{\\text{revolutions}}{\\text{time in seconds}}$, and $T = \\frac{1}{f}$" },
            ],
            steps: [
              { part: "a", reasoning: "Movement (kinetic) energy is transferred to electrical energy.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "When the coil stops, there is no relative movement between the coil and the field, so no field lines are cut.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "So no voltage is induced, there is no current and the lamp goes out.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Convert revolutions per minute to revolutions per second (divide by 60).", working: "\\frac{3000}{60}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "One revolution is one cycle.", working: "f = 50\\text{ Hz}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use $T = \\frac{1}{f}$.", working: "T = \\frac{1}{50}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate with the unit.", working: "0.020\\text{ s}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The peak voltage (and so the brightness of the lamp) increases.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The frequency increases (doubles), so the period halves.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) kinetic to electrical (b) no field lines cut, so no induced voltage (c) $50\\text{ Hz}$ (d) $0.020\\text{ s}$ (e) larger peak voltage and higher frequency",
            commonErrors: ["Giving the frequency as $3000\\text{ Hz}$ by not converting minutes to seconds.", "Giving the period as $50\\text{ s}$ by not inverting."],
            examinerNote: "Allow ecf from (c) into (d). In (e) allow 'voltage doubles' and 'frequency doubles'.",
          },
        },
      ],
    },
    {
      id: "eph11-u2-transformers-transmission",
      title: "Transformers and power transmission",
      skill: "Use the transformer equations and explain why electricity is transmitted at high voltage.",
      lesson: {
        sections: [
          {
            heading: "How a transformer works",
            body: "A **transformer** has a **primary coil** and a **secondary coil** wound on a laminated **soft iron core**. An alternating current in the primary coil creates a **changing magnetic field** in the core. This changing field passes through the secondary coil and **induces** an alternating voltage in it.\n\nTransformers work only with **a.c.**, because with d.c. the field would be constant and no voltage would be induced.\n\nA **step-up** transformer has more turns on the secondary coil than on the primary, so the voltage increases. A **step-down** transformer has fewer turns on the secondary, so the voltage decreases.",
          },
          {
            heading: "The transformer equations",
            body: "The voltages are in the same ratio as the turns:\n\n$$\\frac{V_p}{V_s} = \\frac{n_p}{n_s}$$\n\nAn ideal transformer is $100\\%$ efficient, so the power in equals the power out:\n\n$$V_pI_p = V_sI_s$$\n\nA step-up transformer increases the voltage but decreases the current by the same factor; the power is unchanged. Real transformers lose a little energy as heat in the coils and core.",
          },
          {
            heading: "The National Grid",
            body: "Power stations generate at about $25\\,000\\text{ V}$. **Step-up transformers** raise the voltage to $400\\,000\\text{ V}$ for transmission. Since $P = IV$, a higher voltage means a **smaller current** for the same power.\n\nThe power lost as heat in the cables is $P = I^2R$. A smaller current gives a much smaller power loss, because the loss depends on the **square** of the current. So high voltage transmission is **more efficient** and allows thinner, cheaper cables. **Step-down transformers** then reduce the voltage to $230\\text{ V}$ for homes, for safety.",
          },
        ],
        keyFormulas: [
          { name: "Transformer equation", statement: "$\\frac{V_p}{V_s} = \\frac{n_p}{n_s}$" },
          { name: "Ideal transformer power", statement: "$V_pI_p = V_sI_s$" },
          { name: "Power loss in a cable", statement: "$P = I^2R$" },
        ],
        workedExample: {
          problem: "A transformer has 400 turns on the primary coil and 100 turns on the secondary. The primary voltage is $240\\text{ V}$. Calculate the secondary voltage.",
          solution: "$\\frac{V_p}{V_s} = \\frac{n_p}{n_s}$, so $V_s = V_p \\times \\frac{n_s}{n_p} = 240 \\times \\frac{100}{400} = 60\\text{ V}$. It is a step-down transformer.",
        },
      },
      questions: [
        {
          id: "eph11-u2-transformers-transmission-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why can a transformer not be used with a steady d.c. supply?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "d.c. gives a constant magnetic field, so no voltage is induced in the secondary coil" },
              { id: "b", text: "d.c. has too small a voltage" },
              { id: "c", text: "d.c. would melt the soft iron core" },
              { id: "d", text: "d.c. is not able to flow through coils of wire" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Transformer action", statement: "A changing magnetic field in the core is needed to induce a voltage in the secondary coil." },
            ],
            steps: [
              { reasoning: "A steady direct current produces a constant field. With no change in the field, no voltage is induced.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** a constant field induces no voltage in the secondary coil.",
            commonErrors: ["Choosing (d); direct current flows through coils perfectly well.", "Choosing (a), a misconception about voltage size."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "eph11-u2-transformers-transmission-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A transformer has 2300 turns on the primary coil and 100 turns on the secondary coil. The primary coil is connected to the $230\\text{ V}$ mains. Calculate the secondary voltage.",
          response: {
            type: "numeric",
            parts: [{ label: "Secondary voltage", answer: 10, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Transformer equation", statement: "$\\frac{V_p}{V_s} = \\frac{n_p}{n_s}$" },
            ],
            steps: [
              { reasoning: "Rearrange and substitute.", working: "V_s = V_p \\times \\frac{n_s}{n_p} = 230 \\times \\frac{100}{2300}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "V_s = 10\\text{ V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10\\text{ V}$",
            commonErrors: ["Inverting the ratio, giving $2300\\text{ V}$.", "Forgetting the unit."],
            examinerNote: "A1 for 10 V. Allow M1 for any correct rearrangement.",
          },
        },
        {
          id: "eph11-u2-transformers-transmission-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A step-up transformer has 200 turns on its primary coil and is supplied with $12\\text{ V}$ a.c. The output voltage is $240\\text{ V}$. Calculate the number of turns on the secondary coil.",
          response: {
            type: "numeric",
            parts: [{ label: "Turns on secondary coil", answer: 4000 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Transformer equation", statement: "$\\frac{V_p}{V_s} = \\frac{n_p}{n_s}$" },
            ],
            steps: [
              { reasoning: "Substitute the values.", working: "\\frac{12}{240} = \\frac{200}{n_s}", marks: 1, markCode: "M" },
              { reasoning: "Rearrange for $n_s$.", working: "n_s = 200 \\times \\frac{240}{12}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. The secondary has 20 times as many turns, as the voltage rises by a factor of 20.", working: "n_s = 4000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4000$ turns",
            commonErrors: ["Dividing 200 by 20 to get 10 turns, which would give a step-down.", "Using the voltages the wrong way round."],
            examinerNote: "A1 for 4000. Allow ecf for the final mark from a mis-rearrangement.",
          },
        },
        {
          id: "eph11-u2-transformers-transmission-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A step-down transformer is supplied with $230\\text{ V}$ a.c. and has 1000 turns on its primary coil. The secondary coil gives $23\\text{ V}$ and delivers a current of $2.0\\text{ A}$. Assume the transformer is $100\\%$ efficient.\n\nElectrical energy is transmitted by the National Grid. A power station transmits $40\\text{ kW}$ at $8000\\text{ V}$ along cables of total resistance $4.0\\text{ }\\Omega$.",
          parts: [
            { label: "a", prompt: "Calculate the number of turns on the secondary coil.", marks: 2 },
            { label: "b", prompt: "Calculate the current in the primary coil.", marks: 3 },
            { label: "c", prompt: "Explain why the transmission voltage is made very high.", marks: 3 },
            { label: "d", prompt: "Calculate the power lost as heat in the cables in the transmission described.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Transformer equation", statement: "$\\frac{V_p}{V_s} = \\frac{n_p}{n_s}$" },
              { kind: "formula", name: "Ideal transformer", statement: "$V_pI_p = V_sI_s$" },
              { kind: "formula", name: "Power and cable loss", statement: "$P = IV$ and $P = I^2R$" },
            ],
            steps: [
              { part: "a", reasoning: "Rearrange the turns ratio and substitute.", working: "n_s = n_p \\times \\frac{V_s}{V_p} = 1000 \\times \\frac{23}{230}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "n_s = 100", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Output power is $V_sI_s$.", working: "23 \\times 2.0 = 46\\text{ W}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "For a $100\\%$ efficient transformer, $V_pI_p = V_sI_s$, so $I_p = \\frac{46}{230}$.", working: "I_p = \\frac{V_sI_s}{V_p} = \\frac{46}{230}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "0.20\\text{ A}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "For a given power, $P = IV$, so a higher voltage means a lower current in the cables.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The power lost as heat is $I^2R$, so a smaller current gives a much smaller power loss.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So less energy is wasted and the grid is more efficient (or cheaper, thinner cables can be used).", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Find the current, $I = \\frac{P}{V} = \\frac{40\\,000}{8000} = 5.0\\text{ A}$, and use $P = I^2R$.", working: "P = 5.0^2 \\times 4.0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate with the unit.", working: "100\\text{ W}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 100 turns (b) $0.20\\text{ A}$ (c) high voltage gives a low current, and the loss $I^2R$ falls greatly (d) $100\\text{ W}$",
            commonErrors: ["Using the turns ratio the wrong way round, giving 10 000 turns.", "Using $I = V \\div R$ with the transmission voltage in (d), which is wrong because $8000\\text{ V}$ is not the voltage across the cables.", "Saying a high voltage reduces the resistance of the cables."],
            examinerNote: "In (b) allow ecf from (a) only if the turns are used, otherwise power must be used. In (d) reject use of $V^2/R$ with $8000\\text{ V}$.",
          },
        },
      ],
    },
  ],
};
