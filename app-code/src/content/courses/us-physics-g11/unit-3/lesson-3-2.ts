import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "phys11-u3-lesson-3-2",
  code: "3-2",
  title: "Electrical Energy and Power",
  goal: "I CAN calculate electrical power, energy use in kilowatt-hours and cost, and evaluate efficiency and energy losses in devices and in the power grid.",
  standards: ["HS-PS3-1", "HS-PS3-3", "SEP: Using Mathematics and Computational Thinking", "CCC: Energy and Matter"],
  vocabulary: [
    { term: "Electrical power", definition: "The rate at which electrical energy is transferred, measured in watts (W). $P = IV$." },
    { term: "Watt", definition: "The SI unit of power: one joule of energy transferred per second." },
    { term: "Kilowatt-hour (kWh)", definition: "A unit of energy equal to the energy transferred by a $1\\ \\text{kW}$ device running for 1 hour, which is $3.6 \\times 10^6\\ \\text{J}$." },
    { term: "Efficiency", definition: "The fraction of the total energy input that is transferred usefully: useful output divided by total input." },
    { term: "Dissipation", definition: "The spreading out of energy, usually as thermal energy, into the surroundings where it is no longer useful." },
    { term: "Transformer", definition: "A device that changes the voltage of an alternating current, used to step voltage up for transmission and down for use." },
  ],
  concepts: [
    {
      id: "phys11-u3-electrical-power",
      title: "Electrical power, energy and cost",
      skill: "Use $P = IV = I^2R$ and $E = Pt$ to find power, energy in joules or kWh, and the cost of running appliances.",
      lesson: {
        sections: [
          {
            heading: "Power in a circuit",
            body: "Power is the rate of energy transfer. For an electrical device, each coulomb of charge transfers $V$ joules and $I$ coulombs pass each second, so\n\n$$P = IV$$\n\nCombining this with Ohm's law $V = IR$ gives two more forms:\n\n$$P = I^2R \\qquad P = \\frac{V^2}{R}$$\n\nUse $P = I^2R$ when you know the current and resistance, and $P = V^2/R$ when you know the voltage and resistance.",
          },
          {
            heading: "Energy and the kilowatt-hour",
            body: "Energy transferred is power multiplied by time:\n\n$$E = Pt$$\n\nIn joules, use power in watts and time in seconds. Electric companies use the **kilowatt-hour**: power in kilowatts and time in hours. Since $1\\ \\text{kW} = 1000\\ \\text{W}$ and $1\\ \\text{h} = 3600\\ \\text{s}$,\n\n$$1\\ \\text{kWh} = 3.6 \\times 10^6\\ \\text{J}$$",
          },
          {
            heading: "Calculating cost",
            body: "$$\\text{cost} = \\text{energy in kWh} \\times \\text{price per kWh}$$\n\nAlways convert watts to kilowatts and minutes to hours before multiplying. A $2000\\ \\text{W}$ heater running for 30 minutes uses $2.0 \\times 0.5 = 1.0\\ \\text{kWh}$.",
          },
        ],
        keyFormulas: [
          { name: "Electrical power", statement: "$P = IV = I^2R = \\dfrac{V^2}{R}$" },
          { name: "Energy transferred", statement: "$E = Pt$" },
          { name: "Cost of electricity", statement: "$\\text{cost} = (\\text{kWh}) \\times (\\text{price per kWh})$" },
        ],
        workedExample: {
          problem: "A toaster rated $800\\ \\text{W}$ runs on a $120\\ \\text{V}$ supply for 3.0 minutes. Find the current, the energy in joules, and the cost if electricity is $\\$0.15$ per kWh.",
          solution: "Current: $I = P/V = 800/120 = 6.7\\ \\text{A}$. Energy: $E = Pt = 800 \\times 180 = 1.44 \\times 10^5\\ \\text{J}$. In kWh: $0.800\\ \\text{kW} \\times 0.050\\ \\text{h} = 0.040\\ \\text{kWh}$. Cost: $0.040 \\times 0.15 = \\$0.006$, which is $0.6$ cents.",
        },
      },
      questions: [
        {
          id: "phys11-u3-electrical-power-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A kilowatt-hour (kWh) is a unit of which quantity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Power" },
              { id: "b", text: "Current" },
              { id: "c", text: "Energy" },
              { id: "d", text: "Voltage" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy transferred", statement: "$E = Pt$: power (kW) multiplied by time (h) gives energy (kWh)." },
            ],
            steps: [
              { reasoning: "A kilowatt-hour is power multiplied by time, which is energy ($1\\ \\text{kWh} = 3.6 \\times 10^6\\ \\text{J}$).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Energy",
            commonErrors: ["Choosing power because the unit contains the word kilowatt; the extra factor of hours makes it energy."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "phys11-u3-electrical-power-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $1500\\ \\text{W}$ space heater is used for 4.0 hours. Electricity costs $\\$0.15$ per kWh.\n\nCalculate the cost of running the heater, in dollars.",
          response: { type: "numeric", parts: [{ label: "Cost", answer: 0.9, unit: "dollars", tolerance: 0.005 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy in kWh", statement: "$E = Pt$ with $P$ in kW and $t$ in hours." },
              { kind: "formula", name: "Cost", statement: "$\\text{cost} = \\text{kWh} \\times \\text{price per kWh}$" },
            ],
            steps: [
              { reasoning: "Convert the power to kilowatts.", working: "P = 1500\\ \\text{W} = 1.5\\ \\text{kW}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the time in hours.", working: "E = 1.5 \\times 4.0 = 6.0\\ \\text{kWh}", marks: 1, markCode: "A" },
              { reasoning: "Multiply by the price per kWh.", working: "\\text{cost} = 6.0 \\times 0.15 = \\$0.90", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$0.90$",
            commonErrors: ["Using 1500 W directly, giving $\\$900$.", "Using power in kW but time in minutes (240), giving $\\$54$."],
            examinerNote: "M1 for converting to kW (or $E = Pt$ with consistent units). A1 for 6.0 kWh. A1 for $\\$0.90$. Allow ecf for the cost from a wrong energy value.",
          },
        },
        {
          id: "phys11-u3-electrical-power-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A $25\\ \\Omega$ heating element carries a current of $0.80\\ \\text{A}$ for 10 minutes.\n\nCalculate (a) the power of the element and (b) the energy it transfers, in joules.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Power", answer: 16, unit: "W", tolerance: 0.1 },
              { label: "(b) Energy", answer: 9600, unit: "J", tolerance: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power from current and resistance", statement: "$P = I^2R$" },
              { kind: "formula", name: "Energy transferred", statement: "$E = Pt$ with $t$ in seconds." },
            ],
            steps: [
              { reasoning: "Use the form of the power equation that needs current and resistance.", working: "P = I^2R = (0.80)^2 \\times 25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "P = 0.64 \\times 25 = 16\\ \\text{W}", marks: 1, markCode: "A" },
              { reasoning: "Convert 10 minutes to seconds and use $E = Pt$.", working: "E = 16 \\times (10 \\times 60) = 16 \\times 600", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "E = 9600\\ \\text{J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $16\\ \\text{W}$ (b) $9600\\ \\text{J}$ ($9.6 \\times 10^3\\ \\text{J}$)",
            commonErrors: ["Using $P = IR$ or forgetting to square the current: $0.80 \\times 25 = 20\\ \\text{W}$.", "Leaving the time as 10 and giving $160\\ \\text{J}$."],
            examinerNote: "M1 for $I^2R$ (oe). A1 for 16 W. M1 for converting to 600 s. A1 for 9600 J. Allow ecf from (a).",
          },
        },
        {
          id: "phys11-u3-electrical-power-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A hair dryer is rated $1200\\ \\text{W}$ when connected to a $120\\ \\text{V}$ household supply. It is used for 15 minutes each day. Electricity costs $\\$0.16$ per kWh.",
          parts: [
            { label: "a", prompt: "Calculate the current in the hair dryer when it is operating normally.", marks: 2 },
            { label: "b", prompt: "Calculate the resistance of the heating circuit of the hair dryer.", marks: 1 },
            { label: "c", prompt: "Calculate the energy used by the hair dryer in 30 days, in kWh.", marks: 2 },
            { label: "d", prompt: "Calculate the cost of this electricity.", marks: 1 },
            { label: "e", prompt: "The hair dryer and a $900\\ \\text{W}$ heater are plugged into the same circuit, which is protected by a $15\\ \\text{A}$ circuit breaker. Determine whether the breaker will trip when both are used at once. Show your working.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Electrical power", statement: "$P = IV$, so $I = P/V$." },
              { kind: "formula", name: "Energy and cost", statement: "$E = Pt$ (kW and h) and $\\text{cost} = \\text{kWh} \\times \\text{price}$." },
              { kind: "formula", name: "Ohm's law", statement: "$V = IR$" },
            ],
            steps: [
              { part: "a", reasoning: "Rearrange $P = IV$ for the current.", working: "I = \\frac{P}{V} = \\frac{1200}{120}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate with the unit.", working: "I = 10\\ \\text{A}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use Ohm's law with the current from (a).", working: "R = \\frac{V}{I} = \\frac{120}{10} = 12\\ \\Omega", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Convert to kilowatts and hours, then multiply by the 30 days.", working: "E = 1.2\\ \\text{kW} \\times 0.25\\ \\text{h} \\times 30", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "E = 0.30 \\times 30 = 9.0\\ \\text{kWh}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Multiply the energy by the price.", working: "\\text{cost} = 9.0 \\times 0.16 = \\$1.44", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The devices are in parallel on the same supply, so their powers add.", working: "P_{\\text{total}} = 1200 + 900 = 2100\\ \\text{W}", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Find the total current from the supply voltage.", working: "I = \\frac{2100}{120} = 17.5\\ \\text{A}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "This exceeds the $15\\ \\text{A}$ rating, so the breaker will trip.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $10\\ \\text{A}$ (b) $12\\ \\Omega$ (c) $9.0\\ \\text{kWh}$ (d) $\\$1.44$ (e) Total current is $17.5\\ \\text{A}$, which is more than $15\\ \\text{A}$, so the breaker trips.",
            commonErrors: ["In (c) using 15 minutes without converting to hours (giving 540 kWh).", "In (e) comparing only the dryer's current of $10\\ \\text{A}$ with the breaker rating."],
            examinerNote: "(b) Allow $V^2/P$. (c) Allow ecf for the unit conversion. (d) Allow ecf from (c). (e) Allow adding the separate currents $10 + 7.5 = 17.5\\ \\text{A}$ for M1 A1.",
          },
        },
      ],
    },
    {
      id: "phys11-u3-efficiency-grid",
      title: "Efficiency, energy conversion and the grid",
      skill: "Calculate efficiency, explain energy losses in devices and in power transmission, and evaluate design trade-offs.",
      lesson: {
        sections: [
          {
            heading: "Energy conversion and efficiency",
            body: "Electrical devices convert electrical energy into other forms: light, motion, sound or thermal energy. Energy is always conserved, but some of it is converted to forms that are not useful, usually thermal energy that spreads into the surroundings (**dissipation**).\n\n$$\\text{efficiency} = \\frac{\\text{useful energy output}}{\\text{total energy input}} \\times 100\\%$$\n\nThe same ratio works with power. Efficiency is never more than $100\\%$. An incandescent bulb transfers most of its energy as thermal energy, whereas an LED transfers much more as light.",
          },
          {
            heading: "Energy losses in the power grid",
            body: "A power plant sends energy to homes through long wires. The wires have resistance $R$, so a current $I$ wastes power $P_{\\text{loss}} = I^2R$ as thermal energy.\n\nFor a given power $P = IV$ to be delivered, a higher transmission voltage means a smaller current $I = P/V$. Because the loss depends on $I^2$, increasing the voltage by a factor of 10 cuts the loss by a factor of 100. **Transformers** step the voltage up at the power plant and step it down near homes.",
          },
          {
            heading: "Design trade-offs",
            body: "Real designs balance competing factors: higher voltage lines lose less energy but need taller towers, better insulation and are more costly and hazardous. A more efficient appliance often costs more to buy but less to run. Evaluate a design by comparing energy savings, cost, safety and environmental impact, and use data where available.",
          },
        ],
        keyFormulas: [
          { name: "Efficiency", statement: "$\\text{efficiency} = \\dfrac{\\text{useful output}}{\\text{total input}} \\times 100\\%$" },
          { name: "Line current", statement: "$I = \\dfrac{P}{V}$" },
          { name: "Power lost in wires", statement: "$P_{\\text{loss}} = I^2R$" },
        ],
        workedExample: {
          problem: "A power plant sends $500\\ \\text{kW}$ along a line of resistance $4.0\\ \\Omega$ at $10{,}000\\ \\text{V}$. Find the power lost in the line.",
          solution: "Current: $I = P/V = 500{,}000/10{,}000 = 50\\ \\text{A}$. Loss: $I^2R = 50^2 \\times 4.0 = 2500 \\times 4.0 = 10{,}000\\ \\text{W}$, or $10\\ \\text{kW}$. That is $2\\%$ of the power sent.",
        },
      },
      questions: [
        {
          id: "phys11-u3-efficiency-grid-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is electrical power transmitted over long distances at very high voltage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A higher voltage gives a smaller current, which reduces the power lost as thermal energy in the wires." },
              { id: "b", text: "A higher voltage makes the wires have no resistance." },
              { id: "c", text: "A higher voltage increases the total power created by the plant." },
              { id: "d", text: "A higher voltage lets the current flow faster, so energy arrives sooner." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Transmission loss", statement: "$I = P/V$ and $P_{\\text{loss}} = I^2R$: higher $V$ gives lower $I$ and much lower loss." },
            ],
            steps: [
              { reasoning: "For the same power, higher voltage means smaller current, and the loss $I^2R$ falls with the square of the current.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A higher voltage gives a smaller current, which reduces the power lost as thermal energy in the wires.",
            commonErrors: ["Believing that high voltage removes resistance.", "Thinking that raising the voltage creates extra power; transformers cannot create energy."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "phys11-u3-efficiency-grid-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "An incandescent bulb takes in $60\\ \\text{J}$ of electrical energy each second. Only $3.0\\ \\text{J}$ of this is transferred as light each second; the rest is thermal energy.\n\nCalculate the efficiency of the bulb, as a percentage.",
          response: { type: "numeric", parts: [{ label: "Efficiency", answer: 5, unit: "%", tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency} = \\dfrac{\\text{useful output}}{\\text{total input}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Divide the useful light energy by the total input and convert to a percentage.", working: "\\text{efficiency} = \\frac{3.0}{60} \\times 100\\%", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 5.0\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5.0\\%$",
            commonErrors: ["Dividing the wasted energy by the input: $57/60 = 95\\%$.", "Inverting the fraction to get $2000\\%$."],
            examinerNote: "M1 for $3.0/60$ (oe). A1 for 5(.0)%. Reject 0.05 without conversion to a percentage.",
          },
        },
        {
          id: "phys11-u3-efficiency-grid-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A power plant delivers $100\\ \\text{kW}$ to a town through cables with a total resistance of $2.0\\ \\Omega$. The power is transmitted at $10{,}000\\ \\text{V}$.\n\nCalculate (a) the current in the cables and (b) the power lost as thermal energy in the cables.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Current", answer: 10, unit: "A", tolerance: 0.05 },
              { label: "(b) Power lost", answer: 200, unit: "W", tolerance: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Line current", statement: "$I = P/V$" },
              { kind: "formula", name: "Power lost in a conductor", statement: "$P_{\\text{loss}} = I^2R$" },
            ],
            steps: [
              { reasoning: "Convert to watts and use $I = P/V$.", working: "I = \\frac{100{,}000}{10{,}000}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "I = 10\\ \\text{A}", marks: 1, markCode: "A" },
              { reasoning: "Use the power lost in the cable resistance.", working: "P_{\\text{loss}} = I^2R = 10^2 \\times 2.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "P_{\\text{loss}} = 200\\ \\text{W}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $10\\ \\text{A}$ (b) $200\\ \\text{W}$",
            commonErrors: ["Using $100$ instead of $100{,}000\\ \\text{W}$ for the power.", "Using $P = IV$ with the line current and the transmission voltage to get the loss, which gives the whole delivered power."],
            examinerNote: "M1 for $I = P/V$ with consistent units. A1 for 10 A. M1 for $I^2R$ (allow ecf from (a)). A1 for 200 W.",
          },
        },
        {
          id: "phys11-u3-efficiency-grid-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A solar farm generates $2.0\\ \\text{MW}$ of electrical power. It sends this to a city through a transmission line of resistance $5.0\\ \\Omega$. The line operates at $20\\ \\text{kV}$ ($2.0 \\times 10^4\\ \\text{V}$).",
          parts: [
            { label: "a", prompt: "Calculate the current in the line.", marks: 2 },
            { label: "b", prompt: "Calculate the power lost as thermal energy in the line.", marks: 2 },
            { label: "c", prompt: "Calculate the percentage of the generated power that is lost in the line.", marks: 1 },
            { label: "d", prompt: "An engineer suggests transmitting the same power at only $2.0\\ \\text{kV}$. Calculate the new power lost in the line and comment on whether this is possible.", marks: 2 },
            { label: "e", prompt: "Evaluate one advantage and one disadvantage of using very high transmission voltages.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Line current", statement: "$I = P/V$" },
              { kind: "formula", name: "Power lost in the line", statement: "$P_{\\text{loss}} = I^2R$" },
              { kind: "formula", name: "Efficiency", statement: "$\\%\\text{ lost} = \\dfrac{P_{\\text{loss}}}{P_{\\text{sent}}} \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Use $I = P/V$ with the power in watts.", working: "I = \\frac{2.0 \\times 10^6}{2.0 \\times 10^4}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "I = 100\\ \\text{A}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute into $I^2R$.", working: "P_{\\text{loss}} = (100)^2 \\times 5.0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "P_{\\text{loss}} = 5.0 \\times 10^4\\ \\text{W} = 50\\ \\text{kW}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide the loss by the power sent.", working: "\\frac{5.0 \\times 10^4}{2.0 \\times 10^6} \\times 100\\% = 2.5\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The current is 10 times larger ($1000\\ \\text{A}$), so the loss is 100 times larger.", working: "P_{\\text{loss}} = (1000)^2 \\times 5.0 = 5.0 \\times 10^6\\ \\text{W}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "A loss of $5.0\\ \\text{MW}$ is greater than the $2.0\\ \\text{MW}$ generated, so this is impossible.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Advantage: a higher voltage gives a smaller current, so far less energy is wasted as thermal energy in the cables.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Disadvantage: the lines need better insulation and taller towers, cost more and are more hazardous (any one valid disadvantage).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $100\\ \\text{A}$ (b) $5.0 \\times 10^4\\ \\text{W}$ (c) $2.5\\%$ (d) $5.0 \\times 10^6\\ \\text{W}$, more than the $2.0\\ \\text{MW}$ generated, so impossible (e) Advantage: lower current and losses. Disadvantage: higher cost, insulation and safety demands.",
            commonErrors: ["Using $2.0$ instead of $2.0 \\times 10^6\\ \\text{W}$ for the power.", "In (b) using $P = IV$ with the line voltage, which gives the delivered power, not the loss.", "In (d) saying that the loss only doubles or increases by ten times."],
            examinerNote: "(b) Allow ecf from (a). (c) Allow ecf from (b). (d) Allow ecf for a loss comparison; R1 needs a comparison with $2.0\\ \\text{MW}$. (e) Accept any valid advantage and disadvantage, for example safety, cost, land use or visual impact.",
          },
        },
      ],
    },
  ],
};
