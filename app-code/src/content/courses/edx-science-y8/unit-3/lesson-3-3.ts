import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "esc8-u3-lesson-3-3",
  code: "3-3",
  title: "Electricity",
  goal: "I CAN compare series and parallel circuits, use current and voltage rules, and calculate resistance, current and voltage using V = IR.",
  standards: ["KS3 Physics: Electricity", "KS3 Working Scientifically"],
  vocabulary: [
    { term: "Current", definition: "The rate of flow of electric charge round a circuit. It is measured in amperes (A) using an ammeter connected in series." },
    { term: "Potential difference (voltage)", definition: "The energy transferred per unit of charge between two points in a circuit. It is measured in volts (V) using a voltmeter connected in parallel." },
    { term: "Resistance", definition: "A measure of how much a component opposes the flow of current. It is measured in ohms ($\\Omega$)." },
    { term: "Series circuit", definition: "A circuit with only one path for the current, so the components are connected one after another." },
    { term: "Parallel circuit", definition: "A circuit with more than one path for the current, so the components are connected on separate branches." },
    { term: "Ammeter", definition: "A meter that measures current. It is connected in series with the component." },
    { term: "Voltmeter", definition: "A meter that measures potential difference. It is connected in parallel across the component." },
  ],
  concepts: [
    {
      id: "esc8-u3-series-parallel",
      title: "Series and parallel circuits, current and voltage",
      skill: "Apply the rules for current and voltage in series and parallel circuits.",
      lesson: {
        sections: [
          {
            heading: "Series circuits",
            body: "In a **series** circuit there is one loop. The **current is the same** at every point. The **potential differences across the components add up** to the potential difference of the supply. If one component breaks, the circuit is broken and everything stops.\n\nFor example, a $9\\text{ V}$ supply shared between two lamps: if one lamp has $4\\text{ V}$ across it, the other has $9-4=5\\text{ V}$.",
          },
          {
            heading: "Parallel circuits",
            body: "In a **parallel** circuit there are separate branches. The **potential difference across each branch is the same** as the supply. The **currents in the branches add up** to the current from the supply. If one branch breaks, the other branches keep working, which is why houses are wired in parallel.\n\nFor example, if $0.4\\text{ A}$ flows through one branch and $0.3\\text{ A}$ through another, the current from the supply is $0.7\\text{ A}$.",
          },
          {
            heading: "Measuring in circuits",
            body: "Connect an **ammeter in series** (the current must flow through it). Connect a **voltmeter in parallel** across the component being measured. Cells connected in series add their voltages: three $1.5\\text{ V}$ cells give $4.5\\text{ V}$.",
          },
        ],
        keyFormulas: [
          { name: "Series circuit", statement: "Current is the same everywhere; $V_{\\text{supply}}=V_1+V_2+\\dots$" },
          { name: "Parallel circuit", statement: "Same voltage across each branch; $I_{\\text{total}}=I_1+I_2+\\dots$" },
          { name: "Meters", statement: "Ammeter in series; voltmeter in parallel" },
        ],
        workedExample: {
          problem: "Two lamps are connected in parallel to a $6\\text{ V}$ battery. The current through lamp A is $0.5\\text{ A}$ and through lamp B is $0.3\\text{ A}$. Find the voltage across lamp B and the current from the battery.",
          solution: "In a parallel circuit each branch has the supply voltage, so lamp B has $6\\text{ V}$. The branch currents add: $0.5+0.3=0.8\\text{ A}$ from the battery.",
        },
      },
      questions: [
        {
          id: "esc8-u3-series-parallel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two lamps are connected in series to a battery. Which statement about the current is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The current is used up by the first lamp, so the second lamp receives less." },
              { id: "b", text: "The current is the same at every point in the circuit." },
              { id: "c", text: "The current splits between the two lamps." },
              { id: "d", text: "The current is bigger after the second lamp." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Current in a series circuit", statement: "The current is the same at all points in a series circuit." },
            ],
            steps: [
              { reasoning: "Charge is not used up. The same current flows through every component in the single loop.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The current is the same at every point in the circuit.",
            commonErrors: ["Thinking current is used up by components; it is energy that is transferred.", "Applying the parallel rule that current splits."],
            examinerNote: "B1 for the same current everywhere.",
          },
        },
        {
          id: "esc8-u3-series-parallel-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Three lamps are connected in series to a $12\\text{ V}$ supply. The potential difference across lamp 1 is $3\\text{ V}$ and across lamp 2 is $4\\text{ V}$. Calculate the potential difference across lamp 3, in volts.",
          response: { type: "numeric", parts: [{ label: "Potential difference across lamp 3", answer: 5, unit: "V" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Voltage in a series circuit", statement: "The potential differences across components in series add up to the supply voltage." },
            ],
            steps: [
              { reasoning: "Subtract the known potential differences from the supply voltage.", working: "12-3-4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "5\\text{ V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5\\text{ V}$",
            commonErrors: ["Adding 3 and 4 and giving 7 V.", "Giving 12 V, the supply voltage, by applying the parallel rule."],
            examinerNote: "M1 for 12 - 3 - 4 (oe). A1 for 5 V.",
          },
        },
        {
          id: "esc8-u3-series-parallel-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two lamps, X and Y, are connected in parallel to a $6\\text{ V}$ battery. An ammeter in the main wire reads $0.90\\text{ A}$. Another ammeter in the branch containing lamp X reads $0.35\\text{ A}$.\n\nCalculate the current through lamp Y and the potential difference across lamp Y.",
          response: {
            type: "numeric",
            parts: [
              { label: "Current through lamp Y", answer: 0.55, unit: "A", tolerance: 0.001 },
              { label: "Potential difference across lamp Y", answer: 6, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Current in a parallel circuit", statement: "The branch currents add up to the current in the main wire." },
              { kind: "law", name: "Voltage in a parallel circuit", statement: "Each branch has the same potential difference as the supply." },
            ],
            steps: [
              { reasoning: "Subtract the current in branch X from the total current.", working: "0.90-0.35", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "0.55\\text{ A}", marks: 1, markCode: "A" },
              { reasoning: "Each parallel branch has the same potential difference as the battery.", working: "6\\text{ V}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$0.55\\text{ A}$ and $6\\text{ V}$",
            commonErrors: ["Adding 0.90 and 0.35 to get 1.25 A.", "Sharing the 6 V between the lamps, as in a series circuit."],
            examinerNote: "M1 for 0.90 - 0.35. A1 for 0.55 A. B1 for 6 V.",
          },
        },
        {
          id: "esc8-u3-series-parallel-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student builds a series circuit with a $9\\text{ V}$ battery and two lamps, L1 and L2. A voltmeter connected across L1 reads $4\\text{ V}$. She then rebuilds the circuit with the two lamps in parallel across the same battery. In the parallel circuit the current through L1 is $0.30\\text{ A}$ and through L2 is $0.45\\text{ A}$.",
          parts: [
            { label: "a", prompt: "State how the voltmeter must be connected to measure the potential difference across L1.", marks: 1 },
            { label: "b", prompt: "Calculate the potential difference across L2 in the series circuit, in volts.", marks: 2 },
            { label: "c", prompt: "Calculate the current in the wire connected to the battery in the parallel circuit, in amperes.", marks: 2 },
            { label: "d", prompt: "In the parallel circuit L1 breaks. Describe what happens to L2 and explain why houses use parallel circuits for lighting.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Voltage in a series circuit", statement: "The potential differences across components in series add up to the supply voltage." },
              { kind: "law", name: "Current in a parallel circuit", statement: "The branch currents add up to the total current." },
              { kind: "property", name: "Parallel branches", statement: "Each branch works independently and has the full supply voltage." },
            ],
            steps: [
              { part: "a", reasoning: "A voltmeter is connected in parallel across the component.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "In series, the potential differences add to the supply voltage, so subtract.", working: "9-4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "5\\text{ V}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The branch currents add to the current from the battery.", working: "0.30+0.45", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with the unit.", working: "0.75\\text{ A}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "L2 stays lit, with the same brightness, because it is on a separate branch with a complete circuit.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Each branch has the full supply voltage, so a lamp's brightness does not depend on the others.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "In houses, each light can be switched on or off, or fail, without affecting the others.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) In parallel with L1 (b) $5\\text{ V}$ (c) $0.75\\text{ A}$ (d) L2 stays lit; each branch is independent and has full voltage, so lights work separately.",
            commonErrors: ["Connecting the voltmeter in series.", "Giving 4 V for L2 by assuming the lamps share equally.", "Giving the current in (c) as 0.45 A, the larger branch current."],
            examinerNote: "(a) Reject 'across the battery'. (d) Allow 'L2 keeps working' (oe). Reject 'L2 gets brighter'.",
          },
        },
      ],
    },
    {
      id: "esc8-u3-resistance-vir",
      title: "Resistance and V = IR",
      skill: "Use V = IR to calculate potential difference, current and resistance, and investigate how resistance depends on wire length.",
      lesson: {
        sections: [
          {
            heading: "Resistance",
            body: "A component with a higher **resistance** lets less current flow for the same potential difference. Resistance is measured in ohms ($\\Omega$). Longer wires have more resistance; thicker wires have less. For resistors in series the total resistance is the sum: $R_{\\text{total}}=R_1+R_2$.",
          },
          {
            heading: "The equation V = IR",
            body: "$$V=IR$$\n\nwhere $V$ is potential difference in volts ($\\text{V}$), $I$ is current in amperes ($\\text{A}$) and $R$ is resistance in ohms ($\\Omega$). Rearranged: $I=\\dfrac{V}{R}$ and $R=\\dfrac{V}{I}$. For a series circuit, first find the total resistance, then the current, then the potential difference across each resistor.",
          },
          {
            heading: "Investigating a wire",
            body: "To find how resistance depends on length: use a power supply of fixed potential difference, an ammeter in series and a voltmeter across the wire. The **independent variable** is the length of wire, the **dependent variable** is the current (used to calculate resistance), and the **control variables** are the potential difference, wire material and thickness. Switch off between readings so that the wire does not heat up, because a hot wire has a higher resistance.",
          },
        ],
        keyFormulas: [
          { name: "Potential difference", statement: "$V=IR$" },
          { name: "Current", statement: "$I=\\dfrac{V}{R}$" },
          { name: "Resistance", statement: "$R=\\dfrac{V}{I}$" },
          { name: "Series resistors", statement: "$R_{\\text{total}}=R_1+R_2$" },
        ],
        workedExample: {
          problem: "A resistor has a potential difference of $12\\text{ V}$ across it and a current of $0.50\\text{ A}$ through it. Calculate its resistance.",
          solution: "$R=\\dfrac{V}{I}=\\dfrac{12}{0.50}=24\\ \\Omega$.",
        },
      },
      questions: [
        {
          id: "esc8-u3-resistance-vir-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the unit of resistance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Volt" },
              { id: "b", text: "Ampere" },
              { id: "c", text: "Ohm" },
              { id: "d", text: "Watt" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Unit of resistance", statement: "Resistance is measured in ohms, symbol $\\Omega$." },
            ],
            steps: [
              { reasoning: "Resistance $R=\\dfrac{V}{I}$ is measured in ohms.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Ohm",
            commonErrors: ["Choosing volt, the unit of potential difference.", "Choosing ampere, the unit of current."],
            examinerNote: "B1 for ohm only.",
          },
        },
        {
          id: "esc8-u3-resistance-vir-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A resistor has a potential difference of $12\\text{ V}$ across it and a current of $0.50\\text{ A}$ through it. Calculate the resistance of the resistor, in ohms.",
          response: { type: "numeric", parts: [{ label: "Resistance", answer: 24, unit: "Ω" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resistance", statement: "$V=IR$, so $R=\\dfrac{V}{I}$." },
            ],
            steps: [
              { reasoning: "Rearrange $V=IR$ and substitute.", working: "R=\\frac{V}{I}=\\frac{12}{0.50}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "R=24\\ \\Omega", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24\\ \\Omega$",
            commonErrors: ["Multiplying 12 and 0.50 to get 6.", "Dividing current by voltage to get 0.042."],
            examinerNote: "M1 for 12 / 0.50. A1 for 24 with unit ohm.",
          },
        },
        {
          id: "esc8-u3-resistance-vir-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A $6\\ \\Omega$ resistor and a $10\\ \\Omega$ resistor are connected in series to an $8.0\\text{ V}$ battery. Calculate the current in the circuit and the potential difference across the $6\\ \\Omega$ resistor.",
          response: {
            type: "numeric",
            parts: [
              { label: "Current in the circuit", answer: 0.5, unit: "A" },
              { label: "Potential difference across the 6 Ω resistor", answer: 3, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Series resistance", statement: "$R_{\\text{total}}=R_1+R_2$" },
              { kind: "formula", name: "Ohm's law", statement: "$V=IR$" },
              { kind: "law", name: "Current in a series circuit", statement: "The same current flows through each resistor." },
            ],
            steps: [
              { reasoning: "Add the resistances in series.", working: "R_{\\text{total}}=6+10=16\\ \\Omega", marks: 1, markCode: "M" },
              { reasoning: "Use the total resistance to find the current.", working: "I=\\frac{V}{R}=\\frac{8.0}{16}=0.50\\text{ A}", marks: 1, markCode: "A" },
              { reasoning: "The same current flows through the $6\\ \\Omega$ resistor, so use $V=IR$ with its resistance.", working: "V=0.50\\times6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "V=3.0\\text{ V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.50\\text{ A}$ and $3.0\\text{ V}$",
            commonErrors: ["Using 8.0 V and 6 ohms to get 1.33 A.", "Using only one resistor's value for the whole circuit."],
            examinerNote: "Allow ecf for the potential difference from an incorrect current. Check: $3.0+5.0=8.0\\text{ V}$.",
          },
        },
        {
          id: "esc8-u3-resistance-vir-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates how the resistance of a wire depends on its length. She connects the wire to a $3.0\\text{ V}$ supply with an ammeter in series and measures the current for different lengths.\n\n| Length of wire (cm) | Current (A) |\n| --- | --- |\n| 20 | 1.50 |\n| 40 | 0.75 |\n| 60 | 0.50 |\n| 80 | 0.375 |",
          parts: [
            { label: "a", prompt: "State the independent variable in this investigation.", marks: 1 },
            { label: "b", prompt: "Calculate the resistance of the $40\\text{ cm}$ length of wire, in ohms.", marks: 2 },
            { label: "c", prompt: "The resistance is directly proportional to length. Predict the resistance of a $100\\text{ cm}$ length of the same wire, in ohms.", marks: 2 },
            { label: "d", prompt: "Explain why the student should switch off the supply between readings.", marks: 2 },
            { label: "e", prompt: "Describe the pattern shown by the results, and explain how the table supports this pattern.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resistance", statement: "$R=\\dfrac{V}{I}$" },
              { kind: "property", name: "Resistance and length", statement: "For a wire of the same material and thickness, resistance is directly proportional to length." },
            ],
            steps: [
              { part: "a", reasoning: "The variable the student changes is the length of the wire.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Use $R=V/I$ with the current for 40 cm.", working: "R=\\frac{3.0}{0.75}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "R=4.0\\ \\Omega", marks: 1, markCode: "A" },
              { part: "c", reasoning: "20 cm has $R=3.0/1.50=2.0\\ \\Omega$, so each 20 cm adds $2.0\\ \\Omega$. 100 cm is 5 lots of 20 cm.", working: "5\\times2.0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with the unit.", working: "10\\ \\Omega", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A current flowing through the wire heats it up.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A hotter wire has a higher resistance, which would change the results and make the test unfair.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "As the length increases, the current decreases, so the resistance increases.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "When the length doubles from 20 cm to 40 cm the current halves from 1.50 A to 0.75 A (resistance doubles from 2 to 4 ohms), showing direct proportionality.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Length of wire (b) $4.0\\ \\Omega$ (c) $10\\ \\Omega$ (d) The wire heats up and its resistance rises (e) Resistance is directly proportional to length: doubling the length halves the current.",
            commonErrors: ["Naming current as the independent variable.", "Using R = I / V in (b).", "Predicting 8 or 12 ohms in (c)."],
            examinerNote: "(a) Reject 'resistance'. (c) Accept $R=V/I$ from a pattern in the table (oe). (e) Reject 'longer wire has more current'.",
          },
        },
      ],
    },
  ],
};
