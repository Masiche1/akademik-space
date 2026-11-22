import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "eph10-u2-lesson-2-1",
  code: "2-1",
  title: "Current, Voltage, Resistance and Circuits",
  goal: "I CAN use $Q = It$, $V = IR$ and $E = QV$, and apply the rules for current and potential difference in series and parallel circuits.",
  standards: ["4PH1 2.8", "4PH1 2.9", "4PH1 2.10", "4PH1 2.11", "4PH1 2.12", "4PH1 2.13"],
  vocabulary: [
    { term: "Electric current", definition: "The rate of flow of electric charge. It is measured in amperes (A) with an ammeter connected in series." },
    { term: "Charge, $Q$", definition: "A quantity that is carried by electrons in a metal. It is measured in coulombs (C): $Q = It$." },
    { term: "Potential difference, $V$", definition: "The energy transferred per unit charge as charge passes between two points in a circuit. It is measured in volts (V) with a voltmeter connected in parallel." },
    { term: "Resistance, $R$", definition: "A measure of how hard it is for current to flow through a component: $R = \\frac{V}{I}$. It is measured in ohms ($\\Omega$)." },
    { term: "Series circuit", definition: "A circuit with a single loop, so the same current flows through every component." },
    { term: "Parallel circuit", definition: "A circuit with branches, so the current splits between the branches and each branch has the same potential difference." },
    { term: "Ammeter", definition: "An instrument that measures current. It is connected in series and has a very low resistance." },
  ],
  concepts: [
    {
      id: "eph10-u2-current-voltage-resistance",
      title: "Current, charge, voltage and resistance",
      skill: "Use $Q = It$, $V = IR$ and $E = QV$ and describe how to measure current and potential difference.",
      lesson: {
        sections: [
          {
            heading: "Current and charge",
            body: "In a metal, current is a flow of **electrons**. **Current** is the rate of flow of charge:\n\n$$Q = It$$\n\nwhere $Q$ is charge in coulombs ($\\text{C}$), $I$ is current in amperes ($\\text{A}$) and $t$ is time in **seconds**. Always convert minutes to seconds first.\n\nAn **ammeter** measures current and is connected **in series** with the component. A cell or battery pushes the current round a circuit; in conventional current the flow is drawn from the positive terminal to the negative terminal.",
          },
          {
            heading: "Potential difference and energy",
            body: "**Potential difference** (pd or voltage) is the energy transferred per unit charge. One volt is one joule per coulomb:\n\n$$E = QV$$\n\nA **voltmeter** measures the pd across a component and is connected **in parallel** with it.\n\nA 6 V cell gives each coulomb of charge 6 J of energy. A bulb with a pd of 6 V across it transfers that 6 J per coulomb to light and thermal energy stores.",
          },
          {
            heading: "Resistance and Ohm's law",
            body: "**Resistance** is how much a component opposes current. For a given pd, a larger resistance gives a smaller current:\n\n$$V = IR \\qquad R = \\frac{V}{I}$$\n\nResistance is in ohms ($\\Omega$). In a metal wire the free electrons collide with the vibrating positive ions. If the wire gets hotter, the ions vibrate more, collisions increase and the resistance goes up.\n\nTo find a resistance: measure the current with an ammeter in series, measure the pd with a voltmeter in parallel, then calculate $R = \\frac{V}{I}$. Repeat for several values and take a mean.",
          },
        ],
        keyFormulas: [
          { name: "Charge", statement: "$Q = It$" },
          { name: "Ohm's law", statement: "$V = IR$" },
          { name: "Energy transferred", statement: "$E = QV$" },
        ],
        workedExample: {
          problem: "A current of $0.50\\text{ A}$ flows through a resistor for $3.0$ minutes. The pd across it is $4.0\\text{ V}$. Calculate the charge that flows and the resistance.",
          solution: "Convert the time: $3.0\\text{ min} = 180\\text{ s}$.\n\n$Q = It = 0.50 \\times 180 = 90\\text{ C}$.\n\n$R = \\frac{V}{I} = \\frac{4.0}{0.50} = 8.0\\ \\Omega$.",
        },
      },
      questions: [
        {
          id: "eph10-u2-current-voltage-resistance-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is electric current?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The opposition to the flow of charge" },
              { id: "b", text: "The total amount of charge in a circuit" },
              { id: "c", text: "The energy transferred per unit charge" },
              { id: "d", text: "The rate of flow of charge" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Current", statement: "Current is the rate of flow of charge: $I = \\frac{Q}{t}$." },
            ],
            steps: [
              { reasoning: "Current is how much charge passes a point each second, that is, the rate of flow of charge.", working: "I = \\frac{Q}{t}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The rate of flow of charge",
            commonErrors: ["Choosing (a), which defines potential difference.", "Choosing (c), which defines resistance."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "eph10-u2-current-voltage-resistance-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A current of $0.35\\text{ A}$ flows through a lamp for $2.0$ minutes. Calculate the charge that flows through the lamp. Give your answer in coulombs.",
          response: {
            type: "numeric",
            parts: [{ label: "Charge", answer: 42, unit: "C", tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Charge", statement: "$Q = It$, with $t$ in seconds." },
            ],
            steps: [
              { reasoning: "Convert the time to seconds and substitute into $Q = It$.", working: "Q = 0.35 \\times (2.0 \\times 60) = 0.35 \\times 120", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "Q = 42\\text{ C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$42\\text{ C}$",
            commonErrors: ["Using $t = 2.0$ without converting minutes to seconds, giving $0.70\\text{ C}$."],
            examinerNote: "A1 for 42 with a unit. Allow 1 mark (M1) for 0.7 only if the conversion to seconds is missing.",
          },
        },
        {
          id: "eph10-u2-current-voltage-resistance-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A charge of $90\\text{ C}$ passes through a resistor in $5.0$ minutes. The potential difference across the resistor is $12\\text{ V}$. Calculate the resistance of the resistor. Give your answer in ohms.",
          response: {
            type: "numeric",
            parts: [{ label: "Resistance", answer: 40, unit: "$\\Omega$", tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Charge and current", statement: "$Q = It$, so $I = \\frac{Q}{t}$." },
              { kind: "formula", name: "Resistance", statement: "$R = \\frac{V}{I}$" },
            ],
            steps: [
              { reasoning: "Find the current. The time is $5.0 \\times 60 = 300\\text{ s}$.", working: "I = \\frac{Q}{t} = \\frac{90}{300} = 0.30\\text{ A}", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $R = \\frac{V}{I}$.", working: "R = \\frac{12}{0.30}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "R = 40\\ \\Omega", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\ \\Omega$",
            commonErrors: ["Using $t = 5.0$ not $300\\text{ s}$, giving a current of $18\\text{ A}$ and $R = 0.67\\ \\Omega$.", "Calculating $R = \\frac{Q}{V}$ directly."],
            examinerNote: "A1 for 40 with a unit. Allow ecf from a wrong current.",
          },
        },
        {
          id: "eph10-u2-current-voltage-resistance-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates the resistance of a metal wire. She connects the wire to a cell, an ammeter and a voltmeter. When the pd across the wire is $3.0\\text{ V}$, the current is $0.15\\text{ A}$.",
          parts: [
            { label: "a", prompt: "State how the voltmeter should be connected in the circuit.", marks: 1 },
            { label: "b", prompt: "Calculate the resistance of the wire. Give your answer in ohms.", marks: 2 },
            { label: "c", prompt: "The student leaves the current switched on for a long time. The resistance of the wire increases. Explain why.", marks: 2 },
            { label: "d", prompt: "Calculate the charge that flows through the wire in $40\\text{ s}$ at a current of $0.15\\text{ A}$.", marks: 2 },
            { label: "e", prompt: "Calculate the energy transferred to the wire in this time, using the pd of $3.0\\text{ V}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resistance", statement: "$R = \\frac{V}{I}$" },
              { kind: "formula", name: "Charge", statement: "$Q = It$" },
              { kind: "formula", name: "Energy", statement: "$E = QV$" },
            ],
            steps: [
              { part: "a", reasoning: "A voltmeter measures the pd across a component, so it is connected in parallel with the wire.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Substitute into $R = \\frac{V}{I}$.", working: "R = \\frac{3.0}{0.15}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "R = 20\\ \\Omega", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The wire gets hotter, so the positive ions vibrate with greater amplitude.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The free electrons collide with the ions more often, which makes it harder for current to flow, so the resistance rises.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Substitute into $Q = It$.", working: "Q = 0.15 \\times 40", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate with the unit.", working: "Q = 6.0\\text{ C}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Substitute into $E = QV$.", working: "E = 6.0 \\times 3.0", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Evaluate with the unit.", working: "E = 18\\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) in parallel with the wire (b) $20\\ \\Omega$ (c) the wire heats up, so ions vibrate more and collide with more electrons (d) $6.0\\text{ C}$ (e) $18\\text{ J}$",
            commonErrors: ["Connecting the voltmeter in series.", "Saying that the electrons themselves get hotter or 'use up' the current.", "Using $E = QV$ with $Q$ left as the current."],
            examinerNote: "In (c) do not allow 'the wire has more electrons'. In (e) allow ecf from a wrong charge in (d); allow $E = IVt = 0.15 \\times 3.0 \\times 40$.",
          },
        },
      ],
    },
    {
      id: "eph10-u2-series-parallel-circuits",
      title: "Series and parallel circuits",
      skill: "Apply the rules for current, potential difference and resistance in series and parallel circuits.",
      lesson: {
        sections: [
          {
            heading: "Series circuits",
            body: "In a **series circuit** the components are in one loop.\n\n- The **current** is the **same** at every point: $I_1 = I_2 = I_3$.\n- The **pd of the supply is shared** between the components: $V = V_1 + V_2$.\n- The **total resistance** is the sum: $R_T = R_1 + R_2$.\n\nIf one component breaks, the loop is broken and every component stops working. Adding more lamps in series makes each one dimmer, because the total resistance rises and the current falls.",
          },
          {
            heading: "Parallel circuits",
            body: "In a **parallel circuit** the components are on separate branches.\n\n- The **pd across each branch is the same** as the supply pd.\n- The **current splits** between the branches and rejoins: $I = I_1 + I_2$.\n- The **total resistance is less** than the smallest branch resistance, because the extra branch gives the current another path.\n\nIf one branch breaks, the other branches still work, so mains lighting and sockets are wired in parallel. Each branch can be treated separately with $I = \\frac{V}{R}$.",
          },
          {
            heading: "Solving circuit problems",
            body: "Work in this order:\n\n- Decide whether the components are in series or parallel.\n- In **series**, add resistances, find the current with $I = \\frac{V}{R_T}$, then find each pd with $V = IR$.\n- In **parallel**, use the supply pd on every branch, find each branch current with $I = \\frac{V}{R}$, then add the branch currents.\n\nAlways check that the pds in a series loop add to the supply pd and that the branch currents add to the supply current.",
          },
        ],
        keyFormulas: [
          { name: "Series resistance", statement: "$R_T = R_1 + R_2$" },
          { name: "Series pd", statement: "$V = V_1 + V_2$, with the same current $I$ throughout" },
          { name: "Parallel current", statement: "$I = I_1 + I_2$, with the same pd $V$ across each branch" },
        ],
        workedExample: {
          problem: "A $9.0\\text{ V}$ cell is connected in series with resistors of $10\\ \\Omega$ and $20\\ \\Omega$. Calculate the current and the pd across the $20\\ \\Omega$ resistor.",
          solution: "$R_T = 10 + 20 = 30\\ \\Omega$.\n\n$I = \\frac{V}{R_T} = \\frac{9.0}{30} = 0.30\\text{ A}$.\n\n$V = IR = 0.30 \\times 20 = 6.0\\text{ V}$ across the $20\\ \\Omega$ resistor. The other resistor has $0.30 \\times 10 = 3.0\\text{ V}$, and $6.0 + 3.0 = 9.0\\text{ V}$ as required.",
        },
      },
      questions: [
        {
          id: "eph10-u2-series-parallel-circuits-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two lamps are connected in series to a cell. Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The pd across each lamp is equal to the pd of the cell." },
              { id: "b", text: "If one lamp breaks, the other stays on." },
              { id: "c", text: "The current in the cell is the sum of the currents in the two lamps." },
              { id: "d", text: "The current is the same through both lamps." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Series circuit", statement: "The current is the same everywhere in a series circuit; the supply pd is shared between the components." },
            ],
            steps: [
              { reasoning: "There is only one loop, so the same current flows through both lamps.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The current is the same through both lamps.",
            commonErrors: ["Choosing (b) or (c), which are true of parallel circuits.", "Choosing (d): a break in a series loop stops all current."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "eph10-u2-series-parallel-circuits-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $12\\text{ V}$ supply is connected across two resistors in parallel. One resistor is $6.0\\ \\Omega$ and the other is $3.0\\ \\Omega$. Calculate the total current drawn from the supply. Give your answer in amperes.",
          response: {
            type: "numeric",
            parts: [{ label: "Total current", answer: 6, unit: "A", tolerance: 0.05 }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Parallel circuit", statement: "The pd across each branch equals the supply pd, and the branch currents add to the total current." },
              { kind: "formula", name: "Ohm's law", statement: "$I = \\frac{V}{R}$" },
            ],
            steps: [
              { reasoning: "Each branch has the full $12\\text{ V}$. Find each branch current.", working: "I_1 = \\frac{12}{6.0} = 2.0\\text{ A} \\qquad I_2 = \\frac{12}{3.0} = 4.0\\text{ A}", marks: 1, markCode: "M" },
              { reasoning: "Add the branch currents.", working: "I = 2.0 + 4.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "I = 6.0\\text{ A}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6.0\\text{ A}$",
            commonErrors: ["Adding the resistances to get $9.0\\ \\Omega$ and finding $I = 1.3\\text{ A}$ (series method used in a parallel circuit)."],
            examinerNote: "A1 for 6.0 with a unit. Allow the correct total current from a total parallel resistance of $2.0\\ \\Omega$.",
          },
        },
        {
          id: "eph10-u2-series-parallel-circuits-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A $9.0\\text{ V}$ cell is connected in series with a $24\\ \\Omega$ resistor and a second resistor $R$. The current in the circuit is $0.20\\text{ A}$. Calculate the resistance of $R$. Give your answer in ohms.",
          response: {
            type: "numeric",
            parts: [{ label: "Resistance of R", answer: 21, unit: "$\\Omega$", tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total resistance", statement: "$R_T = \\frac{V}{I}$, and in series $R_T = R_1 + R_2$." },
            ],
            steps: [
              { reasoning: "Find the total resistance of the circuit.", working: "R_T = \\frac{9.0}{0.20} = 45\\ \\Omega", marks: 1, markCode: "M" },
              { reasoning: "Subtract the known resistor, because resistances add in series.", working: "R = 45 - 24", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "R = 21\\ \\Omega", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$21\\ \\Omega$",
            commonErrors: ["Calculating $\\frac{9.0}{0.20} = 45\\ \\Omega$ and giving this as the answer for $R$.", "Using $V = IR$ with $R = 24\\ \\Omega$ and then subtracting voltages incorrectly."],
            examinerNote: "A1 for 21 with a unit. Allow the alternative route: pd across $24\\ \\Omega$ is $4.8\\text{ V}$, so pd across $R$ is $4.2\\text{ V}$ and $R = \\frac{4.2}{0.20}$.",
          },
        },
        {
          id: "eph10-u2-series-parallel-circuits-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two lamps, A and B, are connected in parallel to a $6.0\\text{ V}$ cell. Lamp A has a resistance of $12\\ \\Omega$ and lamp B has a resistance of $20\\ \\Omega$.",
          parts: [
            { label: "a", prompt: "State the potential difference across lamp B.", marks: 1 },
            { label: "b", prompt: "Calculate the current in lamp A.", marks: 2 },
            { label: "c", prompt: "Calculate the current in lamp B and the total current drawn from the cell.", marks: 3 },
            { label: "d", prompt: "Lamp A breaks. Describe and explain what happens to lamp B.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Parallel circuit", statement: "The pd across each branch equals the supply pd; the branch currents add to the supply current." },
              { kind: "formula", name: "Ohm's law", statement: "$I = \\frac{V}{R}$" },
            ],
            steps: [
              { part: "a", reasoning: "Each branch of a parallel circuit has the same pd as the cell.", working: "6.0\\text{ V}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Substitute into $I = \\frac{V}{R}$.", working: "I_A = \\frac{6.0}{12}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "I_A = 0.50\\text{ A}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find the current in lamp B.", working: "I_B = \\frac{6.0}{20}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate the current in B.", working: "I_B = 0.30\\text{ A}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Add the branch currents to find the total current.", working: "I = 0.50 + 0.30 = 0.80\\text{ A}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Lamp B stays lit with the same brightness.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It is on a separate branch, so it still has the full $6.0\\text{ V}$ across it and the same current of $0.30\\text{ A}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $6.0\\text{ V}$ (b) $0.50\\text{ A}$ (c) $0.30\\text{ A}$ and $0.80\\text{ A}$ (d) lamp B stays on at the same brightness because its branch is unaffected and still has $6.0\\text{ V}$ across it",
            commonErrors: ["Saying the pd is shared, so each lamp has $3.0\\text{ V}$.", "Saying lamp B goes out because 'the circuit is broken'.", "Adding $0.50 + 0.30$ but writing the total as a pd."],
            examinerNote: "In (c) the final A mark can be awarded by ecf from wrong branch currents that are added correctly. In (d) the explanation mark needs a reason, not just 'it is parallel'.",
          },
        },
      ],
    },
  ],
};
