import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "eph10-u2-lesson-2-2",
  code: "2-2",
  title: "I-V Graphs, Electrical Power and Energy",
  goal: "I CAN interpret I-V graphs for resistors, lamps, diodes, LDRs and thermistors, and use $P = IV$ and $E = IVt$.",
  standards: ["4PH1 2.14", "4PH1 2.15", "4PH1 2.16", "4PH1 2.17", "4PH1 2.18", "4PH1 2.19"],
  vocabulary: [
    { term: "Ohmic conductor", definition: "A conductor whose current is directly proportional to the pd across it at constant temperature, so its resistance is constant. Its I-V graph is a straight line through the origin." },
    { term: "Diode", definition: "A component that has a very low resistance in the forward direction and a very high resistance in the reverse direction, so current flows in one direction only." },
    { term: "Thermistor", definition: "A resistor whose resistance decreases as its temperature increases (the type in the specification)." },
    { term: "Light-dependent resistor (LDR)", definition: "A resistor whose resistance decreases as the light intensity increases." },
    { term: "Electrical power, $P$", definition: "The rate at which electrical energy is transferred: $P = IV$. It is measured in watts (W)." },
    { term: "Kilowatt-hour", definition: "The energy transferred by a $1\\text{ kW}$ appliance operating for 1 hour, equal to $3\\,600\\,000\\text{ J}$." },
  ],
  concepts: [
    {
      id: "eph10-u2-iv-graphs-components",
      title: "I-V graphs, LDRs, thermistors and diodes",
      skill: "Recognise and explain the I-V characteristics and resistance changes of common electrical components.",
      lesson: {
        sections: [
          {
            heading: "Reading I-V graphs",
            body: "An **I-V graph** plots current $I$ (vertical) against pd $V$ (horizontal). The **steeper** the line, the **lower** the resistance, because $R = \\frac{V}{I}$ and a large current for a small pd means a small $R$.\n\n- **Fixed resistor** (ohmic conductor at constant temperature): a straight line through the origin. Resistance is constant.\n- **Filament lamp**: the line curves and flattens as $V$ rises. The filament gets hot, the ions vibrate more, and the resistance **increases**.\n- **Diode**: almost no current in reverse. In the forward direction there is almost no current until about $0.6$ to $0.7\\text{ V}$, then the current rises very steeply.",
          },
          {
            heading: "LDRs and thermistors",
            body: "A **light-dependent resistor (LDR)** has a high resistance in the dark and a low resistance in bright light.\n\nA **thermistor** has a high resistance when cold and a low resistance when hot.\n\nUses:\n- LDR: automatic street lights and light meters\n- thermistor: fire alarms, thermostats and temperature sensors\n- diode: protecting circuits and changing a.c. into d.c. (rectification)\n\nFor a fixed pd, a lower resistance gives a larger current: $I = \\frac{V}{R}$.",
          },
          {
            heading: "Investigating a component",
            body: "To plot an I-V graph, connect the component in series with an ammeter and a variable resistor (or variable supply), with a voltmeter in parallel across the component. Change the variable resistor to get at least 6 different pds, record $I$ and $V$ each time, then reverse the connections to test negative values. Repeat and average to improve reliability, and let the component cool between readings so that heating does not affect the resistance.",
          },
        ],
        keyFormulas: [
          { name: "Resistance from a graph point", statement: "$R = \\frac{V}{I}$ at that point (not the gradient of a curve)" },
          { name: "Filament lamp", statement: "Resistance increases as the temperature of the filament increases" },
          { name: "LDR and thermistor", statement: "Resistance decreases as light intensity or temperature increases" },
        ],
        workedExample: {
          problem: "At a pd of $6.0\\text{ V}$ a filament lamp carries a current of $0.50\\text{ A}$. At $12\\text{ V}$ the current is $0.80\\text{ A}$. Calculate the resistance at each pd and comment.",
          solution: "At $6.0\\text{ V}$: $R = \\frac{6.0}{0.50} = 12\\ \\Omega$.\n\nAt $12\\text{ V}$: $R = \\frac{12}{0.80} = 15\\ \\Omega$.\n\nThe resistance has increased because the filament is hotter, so the ions vibrate more and collide more with the electrons. The I-V graph is therefore curved.",
        },
      },
      questions: [
        {
          id: "eph10-u2-iv-graphs-components-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which component has a resistance that decreases as its temperature increases?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Filament lamp" },
              { id: "b", text: "Fixed resistor" },
              { id: "c", text: "Thermistor" },
              { id: "d", text: "Diode" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Thermistor", statement: "The resistance of a thermistor decreases as its temperature increases." },
            ],
            steps: [
              { reasoning: "A thermistor has a lower resistance when hot. A filament lamp does the opposite: its resistance increases as it heats up.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Thermistor",
            commonErrors: ["Choosing (a): a hot filament has a higher resistance, not lower."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "eph10-u2-iv-graphs-components-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the dark, an LDR has a resistance of $2000\\ \\Omega$. It is connected to a $6.0\\text{ V}$ supply. Calculate the current in the LDR. Give your answer in milliamperes (mA).",
          response: {
            type: "numeric",
            parts: [{ label: "Current", answer: 3, unit: "mA", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ohm's law", statement: "$I = \\frac{V}{R}$" },
            ],
            steps: [
              { reasoning: "Substitute into $I = \\frac{V}{R}$.", working: "I = \\frac{6.0}{2000}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate in amperes, then convert to mA ($1\\text{ A} = 1000\\text{ mA}$).", working: "I = 0.0030\\text{ A} = 3.0\\text{ mA}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.0\\text{ mA}$",
            commonErrors: ["Giving $0.003$ with the unit mA, a factor of 1000 too small.", "Calculating $R \\times V = 12\\,000$."],
            examinerNote: "A1 for 3.0 mA or 0.0030 A. Allow M1 for $\\frac{6}{2000}$ seen.",
          },
        },
        {
          id: "eph10-u2-iv-graphs-components-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The I-V graph for a filament lamp is a curve that becomes less steep as the pd increases. Explain the shape of the graph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Filament lamp", statement: "The resistance of a metal increases with temperature, because the ions vibrate more and collide more with the electrons." },
              { kind: "formula", name: "Resistance", statement: "$R = \\frac{V}{I}$" },
            ],
            steps: [
              { reasoning: "As the pd rises, the current rises, so more energy is transferred each second and the filament gets hotter.", marks: 1, markCode: "B" },
              { reasoning: "The positive ions in the filament vibrate with greater amplitude.", marks: 1, markCode: "B" },
              { reasoning: "The free electrons collide with the ions more often, so the resistance increases.", marks: 1, markCode: "B" },
              { reasoning: "For a bigger pd, the current rises by a smaller amount than $V$ (since $I = \\frac{V}{R}$ and $R$ is rising), so the graph flattens.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The filament heats up, ions vibrate more, collisions with electrons increase, resistance increases, so current rises less quickly and the graph flattens.",
            commonErrors: ["Saying the resistance is constant and the graph is just 'curved'.", "Saying that the electrons slow down because they are 'hotter' rather than colliding more."],
            examinerNote: "Do not allow 'resistance decreases'. Allow 'atoms' for 'ions' (oe).",
          },
        },
        {
          id: "eph10-u2-iv-graphs-components-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student investigates several electrical components using a variable power supply, an ammeter and a voltmeter.",
          parts: [
            { label: "a", prompt: "Describe the I-V graph of a diode.", marks: 2 },
            { label: "b", prompt: "A fixed resistor carries a current of $0.020\\text{ A}$ when the pd across it is $4.0\\text{ V}$. Calculate its resistance, and state the current when the pd is doubled to $8.0\\text{ V}$.", marks: 3 },
            { label: "c", prompt: "A thermistor is warmed. State what happens to its resistance and to the current at a constant pd.", marks: 2 },
            { label: "d", prompt: "A filament lamp has a pd of $1.0\\text{ V}$ and a current of $0.40\\text{ A}$ when cold. At its normal working pd of $12\\text{ V}$ the current is $2.0\\text{ A}$. Calculate the resistance of the lamp in each case and explain the difference.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Diode", statement: "A diode allows current in the forward direction only." },
              { kind: "law", name: "Ohm's law", statement: "For an ohmic conductor at constant temperature, $I \\propto V$ and $R = \\frac{V}{I}$." },
              { kind: "property", name: "Thermistor", statement: "Resistance decreases as temperature increases." },
            ],
            steps: [
              { part: "a", reasoning: "In the forward direction there is almost no current at low pd, then the current rises steeply above about $0.7\\text{ V}$.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "In the reverse direction the current is (almost) zero.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Substitute into $R = \\frac{V}{I}$.", working: "R = \\frac{4.0}{0.020}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate the resistance.", working: "R = 200\\ \\Omega", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The resistance is constant, so doubling the pd doubles the current.", working: "I = 0.040\\text{ A}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The resistance decreases.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So the current increases (because $I = \\frac{V}{R}$ with $V$ constant).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Cold: $R = \\frac{1.0}{0.40} = 2.5\\ \\Omega$. Hot: $R = \\frac{12}{2.0} = 6.0\\ \\Omega$.", working: "R_{\\text{cold}} = 2.5\\ \\Omega \\qquad R_{\\text{hot}} = 6.0\\ \\Omega", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The filament is at a much higher temperature when working, so its ions vibrate more.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "There are more collisions between ions and electrons, so the resistance is greater.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) almost no current until about $0.7\\text{ V}$ forward then a steep rise; no current in reverse (b) $200\\ \\Omega$; $0.040\\text{ A}$ (c) resistance decreases, current increases (d) $2.5\\ \\Omega$ cold and $6.0\\ \\Omega$ hot, because a hotter filament has more ion-electron collisions",
            commonErrors: ["Describing the diode as having a high resistance in both directions.", "Saying that the resistance of the thermistor increases when warmed.", "Using gradient rather than $\\frac{V}{I}$ in (d)."],
            examinerNote: "In (d) the A mark requires both values correct. Allow ecf from (d) values for the explanation marks. Reject 'the lamp gets hotter so the electrons speed up' without reference to collisions.",
          },
        },
      ],
    },
    {
      id: "eph10-u2-electrical-power-energy",
      title: "Electrical power and energy",
      skill: "Use $P = IV$, $E = Pt$ and $E = IVt$ to calculate power, current and energy transferred.",
      lesson: {
        sections: [
          {
            heading: "Electrical power",
            body: "**Power** is the rate of energy transfer. For an electrical device:\n\n$$P = IV$$\n\nwhere $P$ is power in watts ($\\text{W}$), $I$ is current in amperes and $V$ is pd in volts. Combining with $V = IR$ gives $P = I^2R$.\n\nA higher power means more energy is transferred each second. A $2\\text{ kW}$ kettle transfers $2000\\text{ J}$ every second. The current also rises with power at the same pd, which is why high-power appliances need thicker cables.",
          },
          {
            heading: "Energy transferred",
            body: "Energy transferred is power multiplied by time:\n\n$$E = Pt \\qquad E = IVt$$\n\nwhere $E$ is in joules and $t$ in **seconds**. Since $Q = It$, this is the same as $E = QV$.\n\nFor large amounts of energy, electricity suppliers use the **kilowatt-hour (kWh)**: $\\text{energy (kWh)} = \\text{power (kW)} \\times \\text{time (h)}$. Cost is energy in kWh multiplied by the price per kWh. One kWh is $3\\,600\\,000\\text{ J}$.",
          },
          {
            heading: "Choosing the right equation",
            body: "- Given $I$ and $V$ and want power: $P = IV$.\n- Given power and time and want energy: $E = Pt$.\n- Given $I$, $V$ and time: $E = IVt$.\n- Given power and pd and want current: $I = \\frac{P}{V}$.\n\nDevices are labelled with a power rating and the pd they are designed for, for example $230\\text{ V}$, $2.3\\text{ kW}$. The rated current is found from $I = \\frac{P}{V}$, and this decides which fuse to fit.",
          },
        ],
        keyFormulas: [
          { name: "Electrical power", statement: "$P = IV$" },
          { name: "Energy from power", statement: "$E = Pt$" },
          { name: "Energy from current", statement: "$E = IVt$" },
        ],
        workedExample: {
          problem: "A heater is rated $230\\text{ V}$, $2.3\\text{ kW}$. Calculate the current it takes and the energy it transfers in $10$ minutes.",
          solution: "$P = 2.3\\text{ kW} = 2300\\text{ W}$.\n\n$I = \\frac{P}{V} = \\frac{2300}{230} = 10\\text{ A}$.\n\n$t = 10 \\times 60 = 600\\text{ s}$, so $E = Pt = 2300 \\times 600 = 1\\,380\\,000\\text{ J}$, which is $1.38\\text{ MJ}$.",
        },
      },
      questions: [
        {
          id: "eph10-u2-electrical-power-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which equation correctly gives the electrical energy transferred by a device?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$E = IV$" },
              { id: "b", text: "$E = \\frac{IV}{t}$" },
              { id: "c", text: "$E = IVt$" },
              { id: "d", text: "$E = \\frac{V}{It}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy", statement: "$E = Pt = IVt$" },
            ],
            steps: [
              { reasoning: "Power is $P = IV$ and energy is power multiplied by time, so $E = IVt$.", working: "E = IVt", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $E = IVt$",
            commonErrors: ["Choosing (a), which is the equation for power.", "Dividing by time instead of multiplying."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "eph10-u2-electrical-power-energy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A kettle takes a current of $8.0\\text{ A}$ from a $230\\text{ V}$ mains supply. Calculate the power of the kettle. Give your answer in watts.",
          response: {
            type: "numeric",
            parts: [{ label: "Power", answer: 1840, unit: "W", tolerance: 1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Electrical power", statement: "$P = IV$" },
            ],
            steps: [
              { reasoning: "Substitute into $P = IV$.", working: "P = 8.0 \\times 230", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "P = 1840\\text{ W}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1840\\text{ W}$",
            commonErrors: ["Calculating $\\frac{230}{8.0} = 28.75$, which is a resistance, not power."],
            examinerNote: "A1 for 1840 W. Allow 1.84 kW.",
          },
        },
        {
          id: "eph10-u2-electrical-power-energy-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An electric heater has a power of $2.5\\text{ kW}$. It is switched on for $20$ minutes. Calculate the energy transferred. Give your answer in megajoules (MJ).",
          response: {
            type: "numeric",
            parts: [{ label: "Energy", answer: 3, unit: "MJ", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy", statement: "$E = Pt$, with $P$ in watts and $t$ in seconds." },
            ],
            steps: [
              { reasoning: "Convert to SI units: $2.5\\text{ kW} = 2500\\text{ W}$ and $20\\text{ min} = 1200\\text{ s}$.", working: "P = 2500\\text{ W} \\qquad t = 1200\\text{ s}", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $E = Pt$.", working: "E = 2500 \\times 1200 = 3\\,000\\,000\\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Convert to megajoules ($1\\text{ MJ} = 10^6\\text{ J}$).", working: "E = 3.0\\text{ MJ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.0\\text{ MJ}$",
            commonErrors: ["Using the time in minutes, giving $50\\,000\\text{ J}$.", "Using the power in kW and the time in seconds, giving $3000\\text{ J}$."],
            examinerNote: "A1 for 3.0 MJ. Allow ecf if one unit conversion is missed (M1 only for substitution).",
          },
        },
        {
          id: "eph10-u2-electrical-power-energy-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A lamp is labelled $12\\text{ V}$, $36\\text{ W}$. It is connected to a $12\\text{ V}$ supply and switched on for $5.0$ minutes.",
          parts: [
            { label: "a", prompt: "State the equation that links power, current and potential difference.", marks: 1 },
            { label: "b", prompt: "Calculate the current in the lamp.", marks: 2 },
            { label: "c", prompt: "Calculate the resistance of the lamp when it is working normally.", marks: 2 },
            { label: "d", prompt: "Calculate the energy transferred by the lamp in $5.0$ minutes.", marks: 2 },
            { label: "e", prompt: "Show that the charge that flows in this time is $900\\text{ C}$, and use $E = QV$ to check your answer to (d).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power", statement: "$P = IV$" },
              { kind: "formula", name: "Energy", statement: "$E = Pt$ and $E = QV$" },
              { kind: "formula", name: "Charge", statement: "$Q = It$" },
            ],
            steps: [
              { part: "a", reasoning: "Power is the product of current and pd.", working: "P = IV", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Rearrange and substitute: $I = \\frac{P}{V}$.", working: "I = \\frac{36}{12}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "I = 3.0\\text{ A}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute into $R = \\frac{V}{I}$.", working: "R = \\frac{12}{3.0}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with the unit.", working: "R = 4.0\\ \\Omega", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Convert time: $5.0 \\times 60 = 300\\text{ s}$ and substitute into $E = Pt$.", working: "E = 36 \\times 300", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate with the unit.", working: "E = 10\\,800\\text{ J}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Use $Q = It$ to show the charge.", working: "Q = 3.0 \\times 300 = 900\\text{ C}", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Use $E = QV$ to check the energy.", working: "E = 900 \\times 12 = 10\\,800\\text{ J}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $P = IV$ (b) $3.0\\text{ A}$ (c) $4.0\\ \\Omega$ (d) $10\\,800\\text{ J}$ (e) $Q = 900\\text{ C}$ and $E = 900 \\times 12 = 10\\,800\\text{ J}$, which agrees",
            commonErrors: ["Using $t = 5.0$ rather than $300\\text{ s}$ in (d).", "Calculating $I = 12 \\times 36$ in (b)."],
            examinerNote: "In (c) allow ecf from (b); allow $R = \\frac{V^2}{P} = \\frac{144}{36}$. In (e) the show-that needs the intermediate step $3.0 \\times 300$.",
          },
        },
      ],
    },
  ],
};
