import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "phys11-u3-lesson-3-1",
  code: "3-1",
  title: "Circuits",
  goal: "I CAN use Ohm's law to relate current, voltage and resistance, and analyze series and parallel circuits to find equivalent resistance, currents and voltages.",
  standards: ["HS-PS3-1", "SEP: Using Mathematics and Computational Thinking", "CCC: Systems and System Models"],
  vocabulary: [
    { term: "Current", definition: "The rate of flow of electric charge past a point in a circuit, measured in amperes (A). $I = Q/t$." },
    { term: "Voltage (potential difference)", definition: "The energy transferred per unit charge as charge moves between two points, measured in volts (V)." },
    { term: "Resistance", definition: "The opposition of a component to the flow of current, measured in ohms ($\\Omega$). $R = V/I$ for an ohmic component." },
    { term: "Ohmic conductor", definition: "A conductor whose current is directly proportional to the voltage across it at constant temperature, so its resistance is constant." },
    { term: "Resistivity", definition: "A property of a material that measures how strongly it resists current; for a wire, $R = \\rho L / A$." },
    { term: "Series circuit", definition: "A circuit in which components are connected end to end so there is only one path for the current." },
    { term: "Parallel circuit", definition: "A circuit in which components are connected on separate branches between the same two points." },
  ],
  concepts: [
    {
      id: "phys11-u3-ohms-law",
      title: "Current, voltage, resistance and Ohm's law",
      skill: "Apply $V = IR$ and explain how the length, cross-sectional area and material of a wire affect its resistance.",
      lesson: {
        sections: [
          {
            heading: "Current, voltage and resistance",
            body: "**Current** is the flow of charge. In a metal wire it is a drift of electrons, and one ampere is one coulomb of charge passing a point each second.\n\n**Voltage** is the energy given to each coulomb of charge by a battery, or transferred by each coulomb as it passes through a component. **Resistance** measures how hard it is to push current through a component.",
          },
          {
            heading: "Ohm's law",
            body: "For an ohmic conductor at constant temperature, current is directly proportional to voltage, so a graph of current against voltage is a straight line through the origin. The gradient is $1/R$.\n\n$$V = IR$$\n\nRearrange to find any one quantity: $I = V/R$ and $R = V/I$. Always check units: volts, amperes and ohms.",
          },
          {
            heading: "What sets the resistance of a wire",
            body: "For a wire of a given material, resistance increases with **length** (electrons collide with more ions) and decreases with **cross-sectional area** (more paths for charge). The material enters through its **resistivity** $\\rho$:\n\n$$R = \\frac{\\rho L}{A}$$\n\nDoubling the length doubles $R$. Halving the area also doubles $R$.",
          },
        ],
        keyFormulas: [
          { name: "Ohm's law", statement: "$V = IR$" },
          { name: "Current", statement: "$I = \\dfrac{Q}{t}$" },
          { name: "Resistance of a wire", statement: "$R = \\dfrac{\\rho L}{A}$ (qualitative use: $R \\propto L$, $R \\propto 1/A$)" },
        ],
        workedExample: {
          problem: "A resistor has a current of $0.40\\ \\text{A}$ when connected to a $9.0\\ \\text{V}$ battery. Find its resistance, then the current if the battery is changed to $15\\ \\text{V}$.",
          solution: "Resistance: $R = V/I = 9.0/0.40 = 22.5\\ \\Omega$. The resistor is ohmic, so $R$ stays the same. New current: $I = V/R = 15/22.5 = 0.67\\ \\text{A}$ (2 significant figures).",
        },
      },
      questions: [
        {
          id: "phys11-u3-ohms-law-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement correctly describes voltage in a circuit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The rate at which charge flows past a point." },
              { id: "b", text: "The energy transferred per coulomb of charge." },
              { id: "c", text: "The opposition of a component to current." },
              { id: "d", text: "The total amount of charge stored in the battery." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Voltage", statement: "Voltage (potential difference) is the energy transferred per unit charge, $1\\ \\text{V} = 1\\ \\text{J/C}$." },
            ],
            steps: [
              { reasoning: "Voltage measures the energy given to or transferred by each coulomb of charge, in joules per coulomb.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The energy transferred per coulomb of charge.",
            commonErrors: ["Confusing voltage with current, which is the rate of flow of charge.", "Confusing voltage with resistance."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "phys11-u3-ohms-law-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A small lamp is connected to a $6.0\\ \\text{V}$ battery. The current through the lamp is $0.30\\ \\text{A}$.\n\nCalculate the resistance of the lamp.",
          response: { type: "numeric", parts: [{ label: "Resistance", answer: 20, unit: "Ω", tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ohm's law", statement: "$V = IR$, so $R = V/I$." },
            ],
            steps: [
              { reasoning: "Rearrange Ohm's law for resistance and substitute.", working: "R = \\frac{V}{I} = \\frac{6.0}{0.30}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the correct unit.", working: "R = 20\\ \\Omega", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20\\ \\Omega$",
            commonErrors: ["Multiplying $V \\times I$ to get $1.8$.", "Inverting the fraction to get $0.05$."],
            examinerNote: "M1 for $6.0 / 0.30$ (oe). A1 for 20 with unit ohm. Allow ecf only for correct use of the formula.",
          },
        },
        {
          id: "phys11-u3-ohms-law-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Wire A is a copper wire with resistance $5.0\\ \\Omega$. Wire B is made of the same copper at the same temperature, but it is twice as long and has half the cross-sectional area of wire A.\n\nCalculate the resistance of wire B.",
          response: { type: "numeric", parts: [{ label: "Resistance of wire B", answer: 20, unit: "Ω", tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resistance of a wire", statement: "$R = \\rho L / A$, so $R$ is proportional to $L$ and inversely proportional to $A$." },
            ],
            steps: [
              { reasoning: "The material is the same, so $\\rho$ is unchanged. Compare the two wires using $R \\propto L/A$.", working: "\\frac{R_B}{R_A} = \\frac{L_B / A_B}{L_A / A_A}", marks: 1, markCode: "M" },
              { reasoning: "Twice the length and half the area each double the resistance.", working: "\\frac{R_B}{R_A} = \\frac{2L}{L} \\times \\frac{A}{A/2} = 2 \\times 2 = 4", marks: 1, markCode: "M" },
              { reasoning: "Multiply the resistance of A by the factor.", working: "R_B = 4 \\times 5.0 = 20\\ \\Omega", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20\\ \\Omega$",
            commonErrors: ["Doubling the resistance only once (answer $10\\ \\Omega$) by treating the area change as having no effect.", "Halving the resistance because the area is halved, forgetting that smaller area increases resistance."],
            examinerNote: "M1 for $R \\propto L/A$ (oe). M1 for factor of 4. A1 for 20 ohm. Allow 3 marks for a correct answer of 20 ohm with clear reasoning.",
          },
        },
        {
          id: "phys11-u3-ohms-law-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates a fixed length of nichrome wire. She measures the current through the wire at four different voltages and keeps the temperature constant.\n\n| Voltage (V) | 2.0 | 4.0 | 6.0 | 8.0 |\n| --- | --- | --- | --- | --- |\n| Current (A) | 0.25 | 0.50 | 0.75 | 1.00 |",
          parts: [
            { label: "a", prompt: "Calculate the resistance of the wire when the voltage is $4.0\\ \\text{V}$.", marks: 2 },
            { label: "b", prompt: "Describe the shape of a graph of current (vertical axis) against voltage (horizontal axis) for these data and state what it shows about the wire.", marks: 2 },
            { label: "c", prompt: "Predict the current when the voltage is $10.0\\ \\text{V}$, assuming the temperature stays constant.", marks: 2 },
            { label: "d", prompt: "The student replaces the wire with a thicker nichrome wire of the same length. Explain the effect on the resistance and on the current at a voltage of $8.0\\ \\text{V}$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ohm's law", statement: "$V = IR$, so $R = V/I$." },
              { kind: "law", name: "Ohmic behavior", statement: "At constant temperature, current is directly proportional to voltage for an ohmic conductor." },
              { kind: "formula", name: "Resistance of a wire", statement: "$R = \\rho L / A$: resistance decreases as cross-sectional area increases." },
            ],
            steps: [
              { part: "a", reasoning: "Use $R = V/I$ with the values for $4.0\\ \\text{V}$.", working: "R = \\frac{4.0}{0.50}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate with the unit.", working: "R = 8.0\\ \\Omega", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The graph is a straight line passing through the origin.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Current is directly proportional to voltage, so the wire is ohmic with constant resistance.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The resistance is constant at $8.0\\ \\Omega$, so use $I = V/R$.", working: "I = \\frac{10.0}{8.0}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with the unit.", working: "I = 1.25\\ \\text{A}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A thicker wire has a larger cross-sectional area, giving more paths for charge, so the resistance decreases.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "At the same voltage, $I = V/R$, so a smaller $R$ gives a larger current.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The current at $8.0\\ \\text{V}$ is therefore greater than $1.00\\ \\text{A}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $8.0\\ \\Omega$ (b) a straight line through the origin; current is proportional to voltage, so the wire is ohmic (c) $1.25\\ \\text{A}$ (d) resistance decreases because the area is larger, so the current is greater than $1.00\\ \\text{A}$ at $8.0\\ \\text{V}$.",
            commonErrors: ["In (a) using a different data pair and dividing the wrong way round.", "In (d) saying that a thicker wire has more resistance because there is more material.", "In (b) describing a curve because the points were not plotted through the origin."],
            examinerNote: "(b) Allow 'directly proportional' for R1. (c) Allow ecf from (a). (d) Allow 'larger current' oe without a numerical value for the third mark if the statement is clearly greater than the original current.",
          },
        },
      ],
    },
    {
      id: "phys11-u3-series-parallel",
      title: "Series and parallel circuits",
      skill: "Find equivalent resistance and the current and voltage in each part of series and parallel circuits.",
      lesson: {
        sections: [
          {
            heading: "Series circuits",
            body: "In a series circuit there is only one path, so:\n\n- the **current** is the same everywhere: $I = I_1 = I_2 = \\dots$\n- the **voltages** add up to the supply voltage: $V = V_1 + V_2 + \\dots$\n- the **resistances** add: $R_{\\text{eq}} = R_1 + R_2 + \\dots$",
          },
          {
            heading: "Parallel circuits",
            body: "In a parallel circuit the current splits between branches, so:\n\n- the **voltage** across each branch is the same as the supply: $V = V_1 = V_2 = \\dots$\n- the **currents** in the branches add up to the total current: $I = I_1 + I_2 + \\dots$\n- the equivalent resistance follows $\\dfrac{1}{R_{\\text{eq}}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\dots$\n\nThe equivalent resistance is always **smaller** than the smallest branch resistance, because extra branches give the current more paths.",
          },
          {
            heading: "Combination circuits",
            body: "Work in steps. First replace each parallel group with its equivalent resistance. Then add the series resistances to get the total. Find the total current with $I = V/R_{\\text{eq}}$, then work back out to find the voltage and current in each part using $V = IR$ and the series and parallel rules.",
          },
        ],
        keyFormulas: [
          { name: "Series resistance", statement: "$R_{\\text{eq}} = R_1 + R_2 + \\dots$" },
          { name: "Parallel resistance", statement: "$\\dfrac{1}{R_{\\text{eq}}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\dots$" },
          { name: "Two parallel resistors", statement: "$R_{\\text{eq}} = \\dfrac{R_1 R_2}{R_1 + R_2}$" },
        ],
        workedExample: {
          problem: "A $10\\ \\Omega$ resistor is in series with two $20\\ \\Omega$ resistors that are in parallel with each other. The supply is $12\\ \\text{V}$. Find the total current.",
          solution: "Parallel pair: $\\frac{1}{R} = \\frac{1}{20} + \\frac{1}{20} = \\frac{2}{20}$, so $R = 10\\ \\Omega$. Total: $10 + 10 = 20\\ \\Omega$. Current: $I = V/R = 12/20 = 0.60\\ \\text{A}$.",
        },
      },
      questions: [
        {
          id: "phys11-u3-series-parallel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement is true for components connected in **parallel** to a battery?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The same current flows through each component." },
              { id: "b", text: "The voltage across each component is the same." },
              { id: "c", text: "The voltages across the components add up to the battery voltage." },
              { id: "d", text: "The total resistance is the sum of the resistances." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Parallel circuit rule", statement: "Each branch of a parallel circuit has the same voltage as the supply." },
            ],
            steps: [
              { reasoning: "Each branch is connected directly across the same two points, so each has the same voltage.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The voltage across each component is the same.",
            commonErrors: ["Applying the series rules (equal current, voltages add) to a parallel circuit."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "phys11-u3-series-parallel-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $6.0\\ \\Omega$ resistor and a $12\\ \\Omega$ resistor are connected in parallel.\n\nCalculate the equivalent resistance of the pair.",
          response: { type: "numeric", parts: [{ label: "Equivalent resistance", answer: 4, unit: "Ω", tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parallel resistance", statement: "$\\dfrac{1}{R_{\\text{eq}}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}$" },
            ],
            steps: [
              { reasoning: "Add the reciprocals of the branch resistances.", working: "\\frac{1}{R_{\\text{eq}}} = \\frac{1}{6.0} + \\frac{1}{12} = \\frac{2}{12} + \\frac{1}{12} = \\frac{3}{12}", marks: 1, markCode: "M" },
              { reasoning: "Take the reciprocal.", working: "R_{\\text{eq}} = \\frac{12}{3} = 4.0\\ \\Omega", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.0\\ \\Omega$",
            commonErrors: ["Adding the resistances to get $18\\ \\Omega$.", "Stopping at $\\tfrac{1}{R} = 0.25$ without taking the reciprocal."],
            examinerNote: "M1 for adding reciprocals (oe, allow product over sum). A1 for 4.0 ohm. Reject an answer larger than 6.0 ohm.",
          },
        },
        {
          id: "phys11-u3-series-parallel-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A $12\\ \\text{V}$ battery is connected to a $4.0\\ \\Omega$ resistor in series with a parallel pair made of a $6.0\\ \\Omega$ resistor and a $12\\ \\Omega$ resistor.\n\nCalculate (a) the total current drawn from the battery and (b) the voltage across the parallel pair.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Total current", answer: 1.5, unit: "A", tolerance: 0.01 },
              { label: "(b) Voltage across the parallel pair", answer: 6, unit: "V", tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Equivalent resistance", statement: "Parallel: add reciprocals. Series: add resistances." },
              { kind: "formula", name: "Ohm's law", statement: "$V = IR$" },
            ],
            steps: [
              { reasoning: "The parallel pair has an equivalent resistance of $\\frac{6.0 \\times 12}{6.0 + 12} = 4.0\\ \\Omega$.", working: "R_{\\text{pair}} = \\frac{72}{18} = 4.0\\ \\Omega", marks: 1, markCode: "M" },
              { reasoning: "Add the series resistor to get the total, then use Ohm's law.", working: "R_{\\text{total}} = 4.0 + 4.0 = 8.0\\ \\Omega, \\quad I = \\frac{12}{8.0}", marks: 1, markCode: "M" },
              { reasoning: "The total current flows through the series resistor and then splits.", working: "I = 1.5\\ \\text{A}", marks: 1, markCode: "A" },
              { reasoning: "Voltage across the pair is the current times the pair's equivalent resistance (or the supply minus the $4.0\\ \\Omega$ resistor's voltage).", working: "V_{\\text{pair}} = 1.5 \\times 4.0 = 6.0\\ \\text{V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1.5\\ \\text{A}$ (b) $6.0\\ \\text{V}$",
            commonErrors: ["Treating all three resistors as being in series: $22\\ \\Omega$.", "Using the full $12\\ \\text{V}$ across the parallel pair."],
            examinerNote: "M1 for the equivalent resistance of the parallel pair. M1 for the total resistance and $I = V/R$. A1 for 1.5 A. A1 for 6.0 V (allow ecf from the current). Check: $1.5 \\times 4.0 = 6.0\\ \\text{V}$ across the series resistor leaves $6.0\\ \\text{V}$ for the pair.",
          },
        },
        {
          id: "phys11-u3-series-parallel-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A $12\\ \\text{V}$ battery is connected to resistor $R_1 = 6.0\\ \\Omega$ in series with a parallel pair made of $R_2 = 6.0\\ \\Omega$ and $R_3 = 3.0\\ \\Omega$.",
          parts: [
            { label: "a", prompt: "Calculate the equivalent resistance of $R_2$ and $R_3$.", marks: 2 },
            { label: "b", prompt: "Calculate the total resistance of the circuit and the current drawn from the battery.", marks: 2 },
            { label: "c", prompt: "Calculate the voltage across $R_1$ and the voltage across the parallel pair.", marks: 2 },
            { label: "d", prompt: "Calculate the current through $R_3$.", marks: 1 },
            { label: "e", prompt: "Explain why adding another resistor in parallel with $R_3$ would decrease the total resistance of the circuit.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Series and parallel resistance", statement: "Series: $R = R_1 + R_2$. Parallel: $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$." },
              { kind: "formula", name: "Ohm's law", statement: "$V = IR$" },
              { kind: "law", name: "Circuit rules", statement: "Series voltages add to the supply; parallel branches share the same voltage." },
            ],
            steps: [
              { part: "a", reasoning: "Add the reciprocals for the parallel pair.", working: "\\frac{1}{R} = \\frac{1}{6.0} + \\frac{1}{3.0} = \\frac{3}{6.0}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Take the reciprocal.", working: "R_{23} = 2.0\\ \\Omega", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Add the series resistances and use $I = V/R$.", working: "R_{\\text{total}} = 6.0 + 2.0 = 8.0\\ \\Omega, \\quad I = \\frac{12}{8.0}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate the current.", working: "I = 1.5\\ \\text{A}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The full current flows through $R_1$.", working: "V_1 = 1.5 \\times 6.0 = 9.0\\ \\text{V}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The pair gets the remaining voltage: $12 - 9.0$ (or $1.5 \\times 2.0$).", working: "V_{23} = 3.0\\ \\text{V}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Each parallel branch has $3.0\\ \\text{V}$, so use $I = V/R$.", working: "I_3 = \\frac{3.0}{3.0} = 1.0\\ \\text{A}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "A new branch gives the current an extra path, so more current flows from the battery for the same voltage.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Since $R = V/I$, a larger total current at the same voltage means a smaller total resistance.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $2.0\\ \\Omega$ (b) $8.0\\ \\Omega$ and $1.5\\ \\text{A}$ (c) $9.0\\ \\text{V}$ and $3.0\\ \\text{V}$ (d) $1.0\\ \\text{A}$ (e) More paths means more current at the same voltage, so the resistance $V/I$ falls.",
            commonErrors: ["Adding all three resistances to get $15\\ \\Omega$.", "In (c) giving $12\\ \\text{V}$ to every component.", "In (e) saying that more resistors always increase resistance."],
            examinerNote: "(b) Allow ecf from (a). (c) Allow ecf from (b); the two voltages must add to 12 V. (d) Allow ecf from (c). (e) Allow 'more routes for charge' oe.",
          },
        },
      ],
    },
  ],
};
