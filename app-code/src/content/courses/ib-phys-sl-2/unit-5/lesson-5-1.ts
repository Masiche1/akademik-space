import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "physsl-u5-lesson-5-1",
  code: "5-1",
  title: "Current, Voltage, Resistance and Circuits",
  goal: "I CAN define current, voltage and resistance, apply Ohm's law and the power equations, and analyse series and parallel circuits.",
  standards: ["Topic 5.1", "Topic 5.2", "Paper 1", "Paper 2 Section A"],
  vocabulary: [
    { term: "Electric current ($I$)", definition: "The rate of flow of electric charge, $I = Q/t$, measured in amperes (A)." },
    { term: "Potential difference / voltage ($V$)", definition: "The energy transferred per unit charge, $V = W/Q$, measured in volts (V)." },
    { term: "Resistance ($R$)", definition: "The opposition of a component to the flow of current, $R = V/I$, measured in ohms ($\\Omega$)." },
    { term: "Ohm's law", definition: "For an ohmic conductor at constant temperature, $V = IR$: current is proportional to potential difference." },
    { term: "Electric power ($P$)", definition: "The rate of energy transfer in a circuit, $P = VI = I^2R = V^2/R$, measured in watts (W)." },
    { term: "Series and parallel circuits", definition: "In series the same current flows through all components; in parallel each branch has the same potential difference." },
  ],
  concepts: [
    {
      id: "physsl-u5-ohm",
      title: "Current, voltage, resistance and power",
      skill: "Use $I = Q/t$, $V = IR$ and $P = VI = I^2R = V^2/R$ to analyse ohmic and non-ohmic components.",
      lesson: {
        sections: [
          {
            heading: "Current, voltage and resistance",
            body: "**Current** $I$ is the rate of charge flow, $I = Q/t$: charge $Q$ in coulombs passing per second gives amperes. **Potential difference** $V$ is the energy transferred per unit charge, $V = W/Q$. **Resistance** $R = V/I$ is the ratio of potential difference to current, measured in ohms. These three quantities are linked by **Ohm's law**, $V = IR$, which holds only for an ohmic conductor at constant temperature — its $I$–$V$ graph is a straight line through the origin.",
          },
          {
            heading: "Non-ohmic components",
            body: "Many components are not ohmic. The resistance of a **filament lamp** increases as it heats up, so its $I$–$V$ curve bends towards the voltage axis (current rises less steeply at higher voltages). A **diode** conducts easily in one direction and almost not at all in reverse, giving a highly asymmetric $I$–$V$ graph. For such components $R = V/I$ still gives the resistance at a particular operating point, but it is not constant.",
          },
          {
            heading: "Electrical power and energy",
            body: "The power dissipated in a component is the rate of energy transfer, $P = VI$. Using $V = IR$ this can be rewritten $P = I^2R$ or $P = V^2/R$. Energy transferred is $E = Pt = VIt$. For a fixed voltage, a component of lower resistance carries more current and dissipates more power.",
          },
        ],
        keyFormulas: [
          { name: "Current", statement: "I = Q/t" },
          { name: "Ohm's law", statement: "V = IR" },
          { name: "Power", statement: "P = VI = I^2R = V^2/R" },
        ],
        workedExample: {
          problem: "A $12$ V supply is connected across a resistor of resistance $4.0\\,\\Omega$. Find the current and the power dissipated.",
          solution: "Current $I = V/R = 12/4.0 = 3.0$ A. Power $P = VI = 12 \\times 3.0 = 36$ W (equivalently $P = V^2/R = 144/4.0 = 36$ W).",
        },
      },
      questions: [
        {
          id: "physsl-u5-ohm-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What is the SI unit of electric current?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Coulomb (C)" },
              { id: "b", text: "Volt (V)" },
              { id: "c", text: "Ohm ($\\Omega$)" },
              { id: "d", text: "Ampere (A)" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Unit of current", statement: "Current is measured in amperes (A); 1 A = 1 C s^{-1}." },
            ],
            steps: [
              { reasoning: "The ampere is the SI unit of current.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** ampere (A)",
            commonErrors: ["Confusing the unit of current with the unit of charge (coulomb)."],
          },
        },
        {
          id: "physsl-u5-ohm-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A potential difference of $6.0$ V is applied across a resistor and a current of $0.50$ A flows. Calculate the resistance of the resistor.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.083\\,\\Omega$" },
              { id: "b", text: "$300\\,\\Omega$" },
              { id: "c", text: "$3.0\\,\\Omega$" },
              { id: "d", text: "$12\\,\\Omega$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ohm's law", statement: "R = V/I" },
            ],
            steps: [
              { reasoning: "Rearrange Ohm's law for resistance.", working: "R = \\frac{V}{I}", marks: 1, markCode: "M" },
              { reasoning: "Substitute and evaluate.", working: "R = \\frac{6.0}{0.50} = 12 \\text{ } \\Omega", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $12\\,\\Omega$",
            commonErrors: ["Multiplying $V$ by $I$ instead of dividing.", "Inverting the ratio to obtain $I/V$."],
          },
        },
        {
          id: "physsl-u5-ohm-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A filament lamp is connected to a variable supply. At a potential difference of $6.0$ V the current is $0.40$ A; at $12$ V the current is $0.50$ A.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Resistance $15\\,\\Omega$ at $6.0$ V and $24\\,\\Omega$ at $12$ V; the lamp is ohmic" },
              { id: "b", text: "Resistance $15\\,\\Omega$ at $6.0$ V and $24\\,\\Omega$ at $12$ V; the lamp is non-ohmic" },
              { id: "c", text: "Resistance $2.4\\,\\Omega$ at $6.0$ V and $6.0\\,\\Omega$ at $12$ V; the lamp is non-ohmic" },
              { id: "d", text: "Resistance is constant because $V/I$ is constant for all components" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resistance", statement: "R = V/I" },
              { kind: "definition", name: "Ohmic vs non-ohmic", statement: "An ohmic conductor has constant resistance at constant temperature; a filament lamp's resistance rises as it heats." },
            ],
            steps: [
              { reasoning: "Resistance at the first operating point.", working: "R_1 = \\frac{6.0}{0.40} = 15 \\text{ } \\Omega", marks: 1, markCode: "A" },
              { reasoning: "Resistance at the second operating point.", working: "R_2 = \\frac{12}{0.50} = 24 \\text{ } \\Omega", marks: 1, markCode: "A" },
              { reasoning: "The resistance changes with voltage because the filament heats up; the lamp is non-ohmic.", working: "15 \\neq 24 \\Rightarrow \\text{non-ohmic}", marks: 1, markCode: "M" },
              { reasoning: "Option (a) gives both correct resistances and the correct classification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $15\\,\\Omega$ at $6.0$ V and $24\\,\\Omega$ at $12$ V; non-ohmic",
            commonErrors: ["Assuming a filament lamp is ohmic.", "Computing $VI$ instead of $V/I$."],
          },
        },
        {
          id: "physsl-u5-ohm-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A resistor of unknown resistance is connected to a $24$ V supply and a current of $2.0$ A flows through it.",
          parts: [
            { label: "a", prompt: "Calculate the resistance of the resistor.", marks: 2 },
            { label: "b", prompt: "Calculate the power dissipated in the resistor.", marks: 2 },
            { label: "c", prompt: "Calculate the energy dissipated in the resistor in $30$ s.", marks: 2 },
            { label: "d", prompt: "Explain why Ohm's law does not apply to a filament lamp even though $R = V/I$ can still be calculated for it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ohm's law", statement: "R = V/I" },
              { kind: "formula", name: "Power", statement: "P = VI = I^2R = V^2/R" },
              { kind: "formula", name: "Energy", statement: "E = Pt" },
              { kind: "property", name: "Ohmic condition", statement: "Ohm's law requires constant resistance, i.e. an ohmic conductor at constant temperature." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $R = V/I$.", working: "R = \\frac{24}{2.0} = 12 \\text{ } \\Omega", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Apply $P = VI$.", working: "P = 24 \\times 2.0 = 48 \\text{ W}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Energy is power times time.", working: "E = Pt = 48 \\times 30 = 1440 \\text{ J}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "A filament lamp's resistance increases as the filament heats, so $V/I$ is not constant.", working: "R \\text{ varies with temperature}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Ohm's law requires $R$ to be constant; $R = V/I$ only gives the resistance at one operating point for a non-ohmic component.", working: "\\text{Ohm's law needs constant } R", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $R = 12\\,\\Omega$ (b) $P = 48$ W (c) $E = 1440$ J (d) the filament heats and its resistance changes, so $V \\propto I$ does not hold",
            commonErrors: ["Using $P = I^2R$ with an incorrect resistance.", "Confusing energy (J) with power (W)."],
          },
        },
        {
          id: "physsl-u5-ohm-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A charge of $45$ C flows through a conductor in $15$ s. What is the current in the conductor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30$ A" },
              { id: "b", text: "$0.33$ A" },
              { id: "c", text: "$3.0$ A" },
              { id: "d", text: "$675$ A" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Current", statement: "I = Q/t" },
            ],
            steps: [
              { reasoning: "Current is charge per unit time.", working: "I = \\frac{Q}{t}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the values.", working: "I = \\frac{45}{15} = 3.0 \\text{ A}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $3.0$ A",
            commonErrors: ["Dividing time by charge instead of charge by time.", "Multiplying $Q$ and $t$ instead of dividing."],
          },
        },
        {
          id: "physsl-u5-ohm-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A $9.0$ V supply is connected across a resistor of resistance $3.0\\,\\Omega$. Determine the current through the resistor and the power it dissipates.",
          response: {
            type: "numeric",
            parts: [
              { label: "Current", answer: 3.0, unit: "A" },
              { label: "Power", answer: 27, unit: "W" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ohm's law", statement: "V = IR" },
              { kind: "formula", name: "Power", statement: "P = VI" },
            ],
            steps: [
              { reasoning: "Rearrange Ohm's law for current.", working: "I = \\frac{V}{R}", marks: 1, markCode: "M" },
              { reasoning: "Substitute and evaluate.", working: "I = \\frac{9.0}{3.0} = 3.0 \\text{ A}", marks: 1, markCode: "A" },
              { reasoning: "Power is potential difference times current.", working: "P = VI = 9.0 \\times 3.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the power.", working: "P = 27 \\text{ W}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Current $= 3.0$ A; power $= 27$ W",
            commonErrors: ["Using $P = I^2R$ with the voltage substituted for $I$.", "Reporting the power in amperes."],
          },
        },
        {
          id: "physsl-u5-ohm-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "When a filament lamp is operated at a higher potential difference, its filament becomes hotter. Which statement about the resistance of the filament is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It decreases because the current increases" },
              { id: "b", text: "It becomes zero at high temperatures" },
              { id: "c", text: "It stays constant, as required by Ohm's law" },
              { id: "d", text: "It increases because the filament temperature rises" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Filament resistance", statement: "The resistance of a metal filament increases as its temperature increases." },
            ],
            steps: [
              { reasoning: "A higher p.d. drives a larger current, heating the filament.", marks: 1, markCode: "M" },
              { reasoning: "For a metal, resistance rises with temperature, so the lamp is non-ohmic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** it increases because the filament temperature rises",
            commonErrors: ["Assuming all resistors obey Ohm's law at all temperatures."],
          },
        },
        {
          id: "physsl-u5-ohm-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A component carries a current of $0.50$ A when the potential difference across it is $4.0$ V. Calculate its resistance and the power dissipated in it.",
          response: {
            type: "numeric",
            parts: [
              { label: "Resistance", answer: 8.0, unit: "\\Omega" },
              { label: "Power", answer: 2.0, unit: "W" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ohm's law", statement: "R = V/I" },
              { kind: "formula", name: "Power", statement: "P = VI" },
            ],
            steps: [
              { reasoning: "Resistance is the ratio of p.d. to current.", working: "R = \\frac{V}{I} = \\frac{4.0}{0.50}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the resistance.", working: "R = 8.0 \\text{ } \\Omega", marks: 1, markCode: "A" },
              { reasoning: "Power dissipated is $P = VI$.", working: "P = 4.0 \\times 0.50", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the power.", working: "P = 2.0 \\text{ W}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Resistance $= 8.0\\,\\Omega$; power $= 2.0$ W",
            commonErrors: ["Multiplying $V$ by $I$ to find resistance.", "Confusing power (W) with energy (J)."],
          },
        },
        {
          id: "physsl-u5-ohm-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A $12$ V supply delivers a current of $0.75$ A through a heater for $40$ s. Determine the charge that passes through the heater and the energy dissipated.",
          response: {
            type: "numeric",
            parts: [
              { label: "Charge passed", answer: 30, unit: "C" },
              { label: "Energy dissipated", answer: 360, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Current", statement: "I = Q/t, so Q = It" },
              { kind: "formula", name: "Energy", statement: "E = VIt = Pt" },
            ],
            steps: [
              { reasoning: "Rearrange the current equation for charge.", working: "Q = It", marks: 1, markCode: "M" },
              { reasoning: "Substitute the values.", working: "Q = 0.75 \\times 40 = 30 \\text{ C}", marks: 1, markCode: "A" },
              { reasoning: "Energy transferred is $E = VIt$.", working: "E = 12 \\times 0.75 \\times 40", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "E = 360 \\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Charge $= 30$ C; energy $= 360$ J",
            commonErrors: ["Using $E = Pt$ with the current instead of the power.", "Forgetting to convert minutes to seconds."],
          },
        },
        {
          id: "physsl-u5-ohm-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A filament lamp draws a current of $0.20$ A when the p.d. across it is $4.0$ V, and a current of $0.25$ A when the p.d. is $8.0$ V.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Resistance $0.80\\,\\Omega$ at $4.0$ V and $2.0\\,\\Omega$ at $8.0$ V; the lamp is non-ohmic" },
              { id: "b", text: "Resistance $20\\,\\Omega$ at $4.0$ V and $32\\,\\Omega$ at $8.0$ V; the lamp is non-ohmic" },
              { id: "c", text: "Resistance is constant at $20\\,\\Omega$ because $V/I$ is always constant" },
              { id: "d", text: "Resistance $20\\,\\Omega$ at $4.0$ V and $32\\,\\Omega$ at $8.0$ V; the lamp is ohmic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resistance", statement: "R = V/I" },
              { kind: "definition", name: "Ohmic vs non-ohmic", statement: "Ohmic conductors have constant resistance; a filament lamp's resistance rises as it heats." },
            ],
            steps: [
              { reasoning: "Resistance at the first operating point.", working: "R_1 = \\frac{4.0}{0.20}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "R_1 = 20 \\text{ } \\Omega", marks: 1, markCode: "A" },
              { reasoning: "Resistance at the second operating point.", working: "R_2 = \\frac{8.0}{0.25} = 32 \\text{ } \\Omega", marks: 1, markCode: "M" },
              { reasoning: "The resistance changes with p.d. because the filament heats up; the lamp is non-ohmic, matching option (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $20\\,\\Omega$ at $4.0$ V and $32\\,\\Omega$ at $8.0$ V; non-ohmic",
            commonErrors: ["Computing $VI$ instead of $V/I$.", "Classifying the lamp as ohmic because $R = V/I$ can be calculated."],
          },
        },
        {
          id: "physsl-u5-ohm-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "A $230$ V mains supply is connected across a heater of resistance $46\\,\\Omega$. The heater is switched on for $2.0$ hours.",
          response: {
            type: "numeric",
            parts: [
              { label: "Current", answer: 5.0, unit: "A" },
              { label: "Power", answer: 1150, unit: "W" },
              { label: "Energy dissipated", answer: 8280000, tolerance: 50000, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ohm's law", statement: "I = V/R" },
              { kind: "formula", name: "Power", statement: "P = VI" },
              { kind: "formula", name: "Energy", statement: "E = Pt" },
            ],
            steps: [
              { reasoning: "Apply Ohm's law.", working: "I = \\frac{V}{R} = \\frac{230}{46}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the current.", working: "I = 5.0 \\text{ A}", marks: 1, markCode: "A" },
              { reasoning: "Power dissipated is $P = VI$.", working: "P = 230 \\times 5.0 = 1150 \\text{ W}", marks: 1, markCode: "M" },
              { reasoning: "Convert the time to seconds and use $E = Pt$.", working: "E = 1150 \\times (2.0 \\times 3600)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "E = 8.28 \\times 10^6 \\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Current $= 5.0$ A; power $= 1150$ W; energy $= 8.28 \\times 10^6$ J",
            commonErrors: ["Using $2.0$ hours directly in $E = Pt$ without converting to seconds.", "Using $P = I^2R$ with $V$ in place of $I$."],
          },
        },
        {
          id: "physsl-u5-ohm-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "An electric kettle has a heating element of resistance $24\\,\\Omega$ and is connected to the $230$ V mains supply.",
          parts: [
            { label: "a", prompt: "Calculate the current drawn by the kettle.", marks: 2 },
            { label: "b", prompt: "Calculate the power dissipated by the element.", marks: 2 },
            { label: "c", prompt: "Boiling the water takes $3.0$ minutes. Calculate the energy dissipated during this time.", marks: 2 },
            { label: "d", prompt: "The same kettle is connected to a $110$ V supply. State and explain the effect on the power dissipated.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ohm's law", statement: "I = V/R" },
              { kind: "formula", name: "Power", statement: "P = V^2/R" },
              { kind: "formula", name: "Energy", statement: "E = Pt" },
            ],
            steps: [
              { part: "a", reasoning: "Apply Ohm's law with the supply voltage and element resistance.", working: "I = \\frac{230}{24}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "I = 9.6 \\text{ A (accept } 9.58\\text{ A)}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Power can be found from $P = V^2/R$ since $R$ is fixed.", working: "P = \\frac{230^2}{24}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "P = 2.20 \\times 10^3 \\text{ W (accept } 2204\\text{ W)}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Energy is power times time; convert $3.0$ minutes to $180$ s.", working: "E = Pt = 2204 \\times 180", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "E = 3.97 \\times 10^5 \\text{ J (accept } 3.9\\text{--}4.0 \\times 10^5\\text{ J)}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "For a fixed resistance $P \\propto V^2$, so halving the voltage quarters the power.", working: "P_{110} = \\frac{110^2}{24} \\approx 504 \\text{ W}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The power drops to about one quarter of its previous value because the voltage is halved while $R$ is unchanged.", working: "\\frac{110}{230} \\approx \\frac{1}{2} \\Rightarrow P \\approx \\frac{1}{4}P_0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $I = 9.6$ A (b) $P = 2.2$ kW (c) $E \\approx 3.97 \\times 10^5$ J (d) power falls to about one quarter ($\\approx 500$ W) because $P \\propto V^2$ at fixed $R$",
            commonErrors: ["Using $P = VI$ with the current from part (a) but forgetting consistent units.", "Assuming power is proportional to voltage rather than to $V^2$ for a fixed resistor."],
          },
        },
        {
          id: "physsl-u5-ohm-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Two filament lamps are marked $12$ V, $24$ W and $12$ V, $12$ W respectively. Both are operated at their rated voltages.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6.0\\,\\Omega$ and $12\\,\\Omega$" },
              { id: "b", text: "$288\\,\\Omega$ and $144\\,\\Omega$" },
              { id: "c", text: "$12\\,\\Omega$ and $24\\,\\Omega$" },
              { id: "d", text: "$0.50\\,\\Omega$ and $1.0\\,\\Omega$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power and resistance", statement: "P = V^2/R, so R = V^2/P at the operating point" },
            ],
            steps: [
              { reasoning: "Resistance at the rated voltage is $R = V^2/P$.", working: "R = \\frac{V^2}{P}", marks: 1, markCode: "M" },
              { reasoning: "First lamp: $R = 12^2/24$.", working: "R_1 = \\frac{144}{24} = 6.0 \\text{ } \\Omega", marks: 1, markCode: "A" },
              { reasoning: "Second lamp: $R = 144/12$.", working: "R_2 = \\frac{144}{12} = 12 \\text{ } \\Omega", marks: 1, markCode: "M" },
              { reasoning: "Both values match option (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $6.0\\,\\Omega$ and $12\\,\\Omega$",
            commonErrors: ["Computing $P/V$ instead of $V^2/P$.", "Using the two ratings in the wrong order."],
          },
        },
        {
          id: "physsl-u5-ohm-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A battery does $90$ J of work to move $15$ C of charge around a circuit. What is the potential difference across the battery?",
          response: {
            type: "numeric",
            parts: [
              { label: "Potential difference", answer: 6.0, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Potential difference", statement: "V = W/Q" },
            ],
            steps: [
              { reasoning: "Potential difference is energy transferred per unit charge.", working: "V = \\frac{W}{Q} = \\frac{90}{15}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "V = 6.0 \\text{ V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$V = 6.0$ V",
            commonErrors: ["Multiplying $W$ by $Q$ instead of dividing."],
          },
        },
        {
          id: "physsl-u5-ohm-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An ohmic conductor at constant temperature has an $I$–$V$ graph that is best described as",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a horizontal line" },
              { id: "b", text: "a straight line through the origin" },
              { id: "c", text: "a curve bending towards the voltage axis" },
              { id: "d", text: "a curve with a maximum current" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ohm's law", statement: "For an ohmic conductor V = IR with constant R, so I is proportional to V." },
            ],
            steps: [
              { reasoning: "Constant resistance means current is proportional to p.d.", marks: 1, markCode: "M" },
              { reasoning: "A proportional relationship is a straight line through the origin on an $I$–$V$ graph.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** a straight line through the origin",
            commonErrors: ["Describing the graph of a filament lamp, which is curved."],
          },
        },
        {
          id: "physsl-u5-ohm-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "The current through a diode was measured at several forward potential differences. At a p.d. of $0.60$ V the current was $0.030$ A.",
          parts: [
            { label: "a", prompt: "Describe the $I$–$V$ characteristic of a diode.", marks: 2 },
            { label: "b", prompt: "Show that the resistance of the diode at $0.60$ V is $20\\,\\Omega$.", marks: 2 },
            { label: "c", prompt: "Explain why the resistance calculated from $R = V/I$ for a diode is not constant.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resistance", statement: "R = V/I" },
              { kind: "definition", name: "Diode", statement: "A diode conducts easily in one direction (forward bias) and almost not at all in reverse." },
            ],
            steps: [
              { part: "a", reasoning: "A diode allows current to flow in the forward direction once a threshold p.d. (~0.6–0.7 V) is reached, but blocks it in reverse; the characteristic is highly asymmetric.", working: "\\text{forward conduction; reverse blocking}", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Apply $R = V/I$ at the operating point.", working: "R = \\frac{0.60}{0.030}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate to confirm the value.", working: "R = 20 \\text{ } \\Omega", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The diode is non-ohmic: $I$ does not rise in proportion to $V$, so $V/I$ takes different values at different operating points.", working: "R = \\frac{V}{I} \\text{ varies with } V", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The resistance calculated is only the resistance at that particular p.d., not a fixed property of the component.", working: "\\text{operating-point resistance}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) conducts in one direction only, with a threshold forward p.d. (b) $R = 0.60/0.030 = 20\\,\\Omega$ (c) the diode is non-ohmic so $V/I$ is different at each operating point",
            commonErrors: ["Describing a diode as having a single fixed resistance.", "Quoting $R$ in amperes or volts."],
          },
        },
      ],
    },
    {
      id: "physsl-u5-circuits",
      title: "Series and parallel circuits",
      skill: "Compare series and parallel arrangements and calculate equivalent resistance, currents and potential differences.",
      lesson: {
        sections: [
          {
            heading: "Series circuits",
            body: "Components in **series** share a single path. The same current flows through every component, the potential differences across them add to the supply voltage, and the resistances add: $R_T = R_1 + R_2 + \\cdots$. If one component breaks, the whole circuit stops working.",
          },
          {
            heading: "Parallel circuits",
            body: "Components in **parallel** each have their own branch. Each branch has the same potential difference equal to the supply voltage, the branch currents add to give the total current, and the reciprocal resistances add: $1/R_T = 1/R_1 + 1/R_2 + \\cdots$, so $R_T$ is less than the smallest branch resistance. Branches operate independently.",
          },
          {
            heading: "Choosing an arrangement",
            body: "Household appliances are wired in **parallel** so each receives the full mains voltage and can be switched independently. Series connections are used where the same current is wanted throughout, such as in some Christmas-light chains. For two equal resistors $R$ in parallel, $R_T = R/2$; for $n$ equal resistors, $R_T = R/n$.",
          },
        ],
        keyFormulas: [
          { name: "Series resistance", statement: "R_T = R_1 + R_2 + ..." },
          { name: "Parallel resistance", statement: "1/R_T = 1/R_1 + 1/R_2 + ..." },
          { name: "Two equal resistors in parallel", statement: "R_T = R/2" },
        ],
        workedExample: {
          problem: "Two resistors of $6.0\\,\\Omega$ and $3.0\\,\\Omega$ are connected in parallel across a $12$ V supply. Find the total resistance and the total current.",
          solution: "$1/R_T = 1/6.0 + 1/3.0 = 0.167 + 0.333 = 0.500$, so $R_T = 2.0\\,\\Omega$. Total current $I = V/R_T = 12/2.0 = 6.0$ A.",
        },
      },
      questions: [
        {
          id: "physsl-u5-circuits-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "In a parallel circuit, what is the same for every branch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Resistance" },
              { id: "b", text: "Potential difference" },
              { id: "c", text: "Power dissipated" },
              { id: "d", text: "Current" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parallel circuit", statement: "Each branch is connected directly across the supply, so each has the same potential difference." },
            ],
            steps: [
              { reasoning: "In parallel the voltage across each branch equals the supply voltage; the currents differ according to each branch's resistance.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** potential difference",
            commonErrors: ["Confusing series and parallel rules; in series the current is the same, in parallel the voltage is the same."],
          },
        },
        {
          id: "physsl-u5-circuits-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Two resistors of $4.0\\,\\Omega$ each are connected in parallel. Calculate the total resistance.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.0\\,\\Omega$" },
              { id: "b", text: "$8.0\\,\\Omega$" },
              { id: "c", text: "$2.0\\,\\Omega$" },
              { id: "d", text: "$16\\,\\Omega$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parallel resistance", statement: "1/R_T = 1/R_1 + 1/R_2" },
            ],
            steps: [
              { reasoning: "For two equal resistors in parallel, $R_T = R/2$.", working: "R_T = \\frac{4.0}{2} = 2.0 \\text{ } \\Omega", marks: 1, markCode: "M" },
              { reasoning: "Correct value with unit.", working: "R_T = 2.0 \\text{ } \\Omega", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $2.0\\,\\Omega$",
            commonErrors: ["Adding the resistances as if in series ($8\\,\\Omega$).", "Halving incorrectly to $1.0\\,\\Omega$."],
          },
        },
        {
          id: "physsl-u5-circuits-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A circuit consists of two $6.0\\,\\Omega$ resistors connected in parallel, and this combination is connected in series with a $4.0\\,\\Omega$ resistor across a $28$ V supply.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Total resistance $3.0\\,\\Omega$; total current $9.3$ A" },
              { id: "b", text: "Total resistance $7.0\\,\\Omega$; total current $4.0$ A" },
              { id: "c", text: "Total resistance $7.0\\,\\Omega$; total current $2.0$ A" },
              { id: "d", text: "Total resistance $10.0\\,\\Omega$; total current $2.8$ A" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parallel pair", statement: "Two 6.0\\,\\Omega resistors in parallel give 6.0/2 = 3.0\\,\\Omega." },
              { kind: "formula", name: "Series addition", statement: "R_T = R_1 + R_2 + ..." },
            ],
            steps: [
              { reasoning: "Reduce the parallel pair first.", working: "R_{\\text{pair}} = \\frac{6.0}{2} = 3.0 \\text{ } \\Omega", marks: 1, markCode: "M" },
              { reasoning: "Add the series resistor.", working: "R_T = 3.0 + 4.0 = 7.0 \\text{ } \\Omega", marks: 1, markCode: "M" },
              { reasoning: "Total current from $I = V/R_T$.", working: "I = \\frac{28}{7.0} = 4.0 \\text{ A}", marks: 1, markCode: "A" },
              { reasoning: "Option (a) matches both values.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** total resistance $7.0\\,\\Omega$; total current $4.0$ A",
            commonErrors: ["Adding all three resistances in series ($16\\,\\Omega$).", "Treating the whole network as parallel."],
          },
        },
        {
          id: "physsl-u5-circuits-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Two resistors, $R_1 = 6.0\\,\\Omega$ and $R_2 = 3.0\\,\\Omega$, are available. A $12$ V supply is connected first with the resistors in series, then with them in parallel.",
          parts: [
            { label: "a", prompt: "Calculate the total resistance when the resistors are in series.", marks: 2 },
            { label: "b", prompt: "Calculate the total resistance when the resistors are in parallel.", marks: 2 },
            { label: "c", prompt: "Calculate the current through $R_1$ when the resistors are in parallel.", marks: 2 },
            { label: "d", prompt: "Calculate the power dissipated by the circuit in the series arrangement, and state whether more or less power is dissipated in the parallel arrangement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Series resistance", statement: "R_T = R_1 + R_2" },
              { kind: "formula", name: "Parallel resistance", statement: "1/R_T = 1/R_1 + 1/R_2" },
              { kind: "formula", name: "Power", statement: "P = V^2/R_T" },
            ],
            steps: [
              { part: "a", reasoning: "Series resistances add.", working: "R_T = 6.0 + 3.0 = 9.0 \\text{ } \\Omega", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Apply the parallel formula.", working: "\\frac{1}{R_T} = \\frac{1}{6.0} + \\frac{1}{3.0} = \\frac{1}{6.0} + \\frac{2}{6.0} = \\frac{3}{6.0} = 0.50", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Invert to find $R_T$.", working: "R_T = 2.0 \\text{ } \\Omega", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each branch has the full $12$ V; apply $I = V/R_1$.", working: "I_1 = \\frac{12}{6.0} = 2.0 \\text{ A}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Power in the series arrangement.", working: "P = \\frac{V^2}{R_T} = \\frac{144}{9.0} = 16 \\text{ W}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "In parallel $R_T = 2.0\\,\\Omega$ so $P = 144/2.0 = 72$ W — more power is dissipated because the total resistance is smaller.", working: "P_{\\text{parallel}} = 72 \\text{ W} > 16 \\text{ W}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $9.0\\,\\Omega$ (b) $2.0\\,\\Omega$ (c) $2.0$ A (d) $16$ W in series; more power (72 W) in parallel because the resistance is lower",
            commonErrors: ["Using the series formula for the parallel combination.", "Forgetting that each parallel branch has the full supply voltage."],
          },
        },
        {
          id: "physsl-u5-circuits-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a series circuit containing several components, which quantity has the same value through every component?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Resistance" },
              { id: "b", text: "Power dissipated" },
              { id: "c", text: "Current" },
              { id: "d", text: "Potential difference" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Series circuit", statement: "In series there is a single current path, so the same current flows through every component." },
            ],
            steps: [
              { reasoning: "A series circuit has only one path, so charge cannot accumulate or bypass any component.", working: "\\text{single path} \\Rightarrow I \\text{ same everywhere}", marks: 1, markCode: "M" },
              { reasoning: "The current is the same through every component; option (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** current",
            commonErrors: ["Confusing the series rule (same current) with the parallel rule (same potential difference)."],
          },
        },
        {
          id: "physsl-u5-circuits-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Two resistors of $8.0\\,\\Omega$ and $4.0\\,\\Omega$ are connected in parallel across a $12$ V supply. Calculate the total resistance of the combination and the total current drawn from the supply.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total resistance", answer: 2.67, tolerance: 0.01, unit: "\\Omega" },
              { label: "Total current", answer: 4.5, unit: "A" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parallel resistance", statement: "1/R_T = 1/R_1 + 1/R_2" },
              { kind: "formula", name: "Ohm's law", statement: "I = V/R_T" },
            ],
            steps: [
              { reasoning: "Add the reciprocal resistances.", working: "\\frac{1}{R_T} = \\frac{1}{8.0} + \\frac{1}{4.0} = 0.125 + 0.250 = 0.375", marks: 1, markCode: "M" },
              { reasoning: "Invert to find the total resistance.", working: "R_T = \\frac{1}{0.375} = 2.67 \\text{ } \\Omega", marks: 1, markCode: "A" },
              { reasoning: "Apply Ohm's law with the supply voltage.", working: "I = \\frac{V}{R_T} = \\frac{12}{2.67}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the current.", working: "I = 4.5 \\text{ A}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Total resistance $= 2.67\\,\\Omega$; total current $= 4.5$ A",
            commonErrors: ["Adding the resistances directly ($12\\,\\Omega$).", "Using $R_T = 12/4.5$ inconsistently instead of $V/R_T$."],
          },
        },
        {
          id: "physsl-u5-circuits-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A $4.0\\,\\Omega$ resistor and a $12\\,\\Omega$ resistor are connected in parallel, and this combination is connected in series with a $2.0\\,\\Omega$ resistor across a $16$ V supply. Calculate the current in each of the two parallel branches.",
          response: {
            type: "numeric",
            parts: [
              { label: "Current through $4.0\\,\\Omega$ branch", answer: 2.4, unit: "A" },
              { label: "Current through $12\\,\\Omega$ branch", answer: 0.8, unit: "A" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parallel pair", statement: "R_{pair} = (4.0 \\times 12)/(4.0 + 12) = 3.0\\,\\Omega" },
              { kind: "formula", name: "Ohm's law", statement: "I = V/R for each branch at the branch p.d." },
            ],
            steps: [
              { reasoning: "Reduce the parallel pair to a single equivalent resistance.", working: "R_{\\text{pair}} = \\frac{4.0 \\times 12}{4.0 + 12} = \\frac{48}{16} = 3.0 \\text{ } \\Omega", marks: 1, markCode: "M" },
              { reasoning: "Total resistance is $3.0 + 2.0 = 5.0\\,\\Omega$, so total current is $16/5.0 = 3.2$ A and the p.d. across the pair is $3.2 \\times 3.0 = 9.6$ V.", working: "I_{\\text{total}} = \\frac{16}{5.0} = 3.2 \\text{ A}; \\ V_{\\text{pair}} = 3.2 \\times 3.0 = 9.6 \\text{ V}", marks: 1, markCode: "M" },
              { reasoning: "Each branch sees the full $9.6$ V; apply $I = V/R$ to both branches.", working: "I_4 = \\frac{9.6}{4.0} = 2.4 \\text{ A}; \\ I_{12} = \\frac{9.6}{12} = 0.80 \\text{ A}", marks: 1, markCode: "A" },
              { reasoning: "Both branch currents are correct and consistent with the total current $2.4 + 0.8 = 3.2$ A.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Current through $4.0\\,\\Omega$ branch $= 2.4$ A; through $12\\,\\Omega$ branch $= 0.80$ A",
            commonErrors: ["Applying the $16$ V supply voltage directly to each branch.", "Forgetting the series $2.0\\,\\Omega$ resistor when finding the branch voltage."],
          },
        },
        {
          id: "physsl-u5-circuits-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Two $6.0\\,\\Omega$ resistors are connected in parallel, and this combination is connected in series with a third $6.0\\,\\Omega$ resistor across an $18$ V supply. Calculate the total resistance of the circuit and the current supplied.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total resistance", answer: 9.0, unit: "\\Omega" },
              { label: "Current supplied", answer: 2.0, unit: "A" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Two equal resistors in parallel", statement: "R_{pair} = R/2 = 3.0\\,\\Omega" },
              { kind: "formula", name: "Series addition", statement: "R_T = R_1 + R_2 + ..." },
            ],
            steps: [
              { reasoning: "The two parallel $6.0\\,\\Omega$ resistors combine to $3.0\\,\\Omega$.", working: "R_{\\text{pair}} = \\frac{6.0}{2} = 3.0 \\text{ } \\Omega", marks: 1, markCode: "M" },
              { reasoning: "Add the series resistor.", working: "R_T = 3.0 + 6.0 = 9.0 \\text{ } \\Omega", marks: 1, markCode: "M" },
              { reasoning: "Apply Ohm's law to the whole circuit.", working: "I = \\frac{V}{R_T} = \\frac{18}{9.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the current.", working: "I = 2.0 \\text{ A}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Total resistance $= 9.0\\,\\Omega$; current $= 2.0$ A",
            commonErrors: ["Adding all three resistances in series ($18\\,\\Omega$).", "Treating the parallel pair as $6.0\\,\\Omega$."],
          },
        },
        {
          id: "physsl-u5-circuits-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Household electrical appliances such as lamps and heaters are connected in parallel rather than in series. What is the main reason for this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Each appliance receives the full mains voltage and can be switched on and off independently" },
              { id: "b", text: "Appliances in parallel dissipate less power" },
              { id: "c", text: "The current through each appliance is the same, which is safer" },
              { id: "d", text: "Parallel circuits use less wire than series circuits" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parallel circuit", statement: "Each branch is connected directly across the supply, so each appliance gets the full mains p.d. and operates independently." },
            ],
            steps: [
              { reasoning: "In parallel each appliance has the same p.d. as the supply, so every device works at its rated voltage.", marks: 1, markCode: "M" },
              { reasoning: "Switching one branch does not break the circuit for the others, so appliances can be controlled independently; option (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** each appliance receives the full mains voltage and operates independently",
            commonErrors: ["Thinking series wiring saves power; it actually reduces the voltage across each appliance."],
          },
        },
        {
          id: "physsl-u5-circuits-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Two identical filament lamps are connected in parallel across a battery. One lamp is unscrewed from its holder. What happens to the brightness of the remaining lamp?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It goes out because the circuit is broken" },
              { id: "b", text: "It becomes dimmer because the total resistance increases" },
              { id: "c", text: "It stays the same because the p.d. across it is unchanged" },
              { id: "d", text: "It becomes brighter because the current is shared" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parallel branches", statement: "Each parallel branch has the same p.d. equal to the supply voltage, independent of the other branches." },
            ],
            steps: [
              { reasoning: "Removing one branch only removes that branch's current; the p.d. across the remaining lamp is still the full supply voltage.", working: "V_{\\text{lamp}} = V_{\\text{supply}} \\text{ unchanged}", marks: 1, markCode: "M" },
              { reasoning: "With the same p.d. and same lamp resistance, the current and hence the brightness are unchanged; option (c).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** it stays the same because the p.d. across it is unchanged",
            commonErrors: ["Assuming the remaining lamp dims as it would in a series circuit."],
          },
        },
        {
          id: "physsl-u5-circuits-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Three resistors of $2.0\\,\\Omega$, $4.0\\,\\Omega$ and $6.0\\,\\Omega$ are connected in series across a $12$ V supply. Calculate the current in the circuit and the potential difference across the $4.0\\,\\Omega$ resistor.",
          response: {
            type: "numeric",
            parts: [
              { label: "Current", answer: 1.0, unit: "A" },
              { label: "P.d. across $4.0\\,\\Omega$", answer: 4.0, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Series resistance", statement: "R_T = 2.0 + 4.0 + 6.0 = 12\\,\\Omega" },
              { kind: "formula", name: "Ohm's law", statement: "I = V/R_T and V_i = IR_i" },
            ],
            steps: [
              { reasoning: "Total resistance is the sum of the three resistors.", working: "R_T = 12 \\text{ } \\Omega", marks: 1, markCode: "M" },
              { reasoning: "Apply Ohm's law to the whole circuit.", working: "I = \\frac{12}{12} = 1.0 \\text{ A}", marks: 1, markCode: "A" },
              { reasoning: "The p.d. across the $4.0\\,\\Omega$ resistor is $IR$.", working: "V = 1.0 \\times 4.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "V = 4.0 \\text{ V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Current $= 1.0$ A; p.d. across the $4.0\\,\\Omega$ resistor $= 4.0$ V",
            commonErrors: ["Dividing the supply voltage equally between the three resistors.", "Using $V = IR$ with the total resistance for the single resistor."],
          },
        },
        {
          id: "physsl-u5-circuits-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A $5.0\\,\\Omega$ resistor and a $20\\,\\Omega$ resistor are connected in parallel across a $10$ V supply.",
          parts: [
            { label: "a", prompt: "Calculate the total resistance of the parallel combination.", marks: 2 },
            { label: "b", prompt: "Calculate the total current drawn from the supply.", marks: 2 },
            { label: "c", prompt: "Calculate the current through the $5.0\\,\\Omega$ resistor.", marks: 2 },
            { label: "d", prompt: "Explain why the total resistance of the combination is less than either individual resistance.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parallel resistance", statement: "1/R_T = 1/R_1 + 1/R_2" },
              { kind: "formula", name: "Ohm's law", statement: "I = V/R" },
            ],
            steps: [
              { part: "a", reasoning: "Apply the parallel resistance formula.", working: "\\frac{1}{R_T} = \\frac{1}{5.0} + \\frac{1}{20} = \\frac{4}{20} + \\frac{1}{20} = \\frac{5}{20} = 0.25", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Invert to find $R_T$.", working: "R_T = 4.0 \\text{ } \\Omega", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Total current is $I = V/R_T$.", working: "I = \\frac{10}{4.0} = 2.5 \\text{ A}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Each branch has the full $10$ V; apply Ohm's law to the $5.0\\,\\Omega$ branch.", working: "I = \\frac{10}{5.0} = 2.0 \\text{ A}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Parallel branches provide additional conducting paths, so more current can flow for the same p.d.", working: "\\text{more paths} \\Rightarrow I \\uparrow \\text{ for same } V", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Since $R = V/I$, a larger current at the same p.d. means a smaller equivalent resistance — always less than the smallest branch resistance.", working: "R_T < \\min(R_1, R_2)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $R_T = 4.0\\,\\Omega$ (b) $I = 2.5$ A (c) $I = 2.0$ A (d) extra current paths mean more current for the same p.d., so $R_T$ is smaller than either resistor",
            commonErrors: ["Dividing the supply voltage between the branches.", "Thinking the total resistance equals the smaller resistor."],
          },
        },
        {
          id: "physsl-u5-circuits-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement about the equivalent resistance of resistors connected in parallel is always correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The potential difference is shared equally between the resistors" },
              { id: "b", text: "It is greater than the largest individual resistance" },
              { id: "c", text: "It is less than the smallest individual resistance" },
              { id: "d", text: "The same current flows through every resistor" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Parallel resistance", statement: "1/R_T = 1/R_1 + 1/R_2 + ... so the reciprocal sum exceeds any single reciprocal, giving R_T smaller than every branch resistance." },
            ],
            steps: [
              { reasoning: "Adding positive reciprocal terms increases 1/R_T, which decreases R_T below each individual value.", working: "\\frac{1}{R_T} > \\frac{1}{R_i} \\Rightarrow R_T < R_i", marks: 1, markCode: "M" },
              { reasoning: "Option (b) is therefore correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** it is less than the smallest individual resistance",
            commonErrors: ["Applying the series result (sum of resistances) to a parallel circuit."],
          },
        },
        {
          id: "physsl-u5-circuits-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A $3.0\\,\\Omega$ resistor and a $6.0\\,\\Omega$ resistor are connected first in series and then in parallel across a $12$ V supply. Calculate the power dissipated by the circuit in each arrangement.",
          response: {
            type: "numeric",
            parts: [
              { label: "Power in series", answer: 16, unit: "W" },
              { label: "Power in parallel", answer: 72, unit: "W" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Series resistance", statement: "R_T = 3.0 + 6.0 = 9.0\\,\\Omega" },
              { kind: "formula", name: "Parallel resistance", statement: "R_T = (3.0 \\times 6.0)/(3.0 + 6.0) = 2.0\\,\\Omega" },
              { kind: "formula", name: "Power", statement: "P = V^2/R_T" },
            ],
            steps: [
              { reasoning: "Series total resistance is $9.0\\,\\Omega$.", working: "R_{\\text{series}} = 9.0 \\text{ } \\Omega", marks: 1, markCode: "M" },
              { reasoning: "Series power.", working: "P = \\frac{12^2}{9.0} = 16 \\text{ W}", marks: 1, markCode: "A" },
              { reasoning: "Parallel total resistance is $2.0\\,\\Omega$; parallel power.", working: "R_{\\text{parallel}} = 2.0 \\text{ } \\Omega; \\ P = \\frac{144}{2.0} = 72 \\text{ W}", marks: 1, markCode: "M" },
              { reasoning: "Both powers are correct.", working: "P_{\\text{parallel}} / P_{\\text{series}} = 72/16 = 4.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Series $= 16$ W; parallel $= 72$ W (parallel dissipates $4.5$ times more power)",
            commonErrors: ["Using $P = VI$ with a current that was not calculated.", "Assuming both arrangements dissipate the same power."],
          },
        },
        {
          id: "physsl-u5-circuits-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Resistors of $12\\,\\Omega$, $6.0\\,\\Omega$ and $3.0\\,\\Omega$ are to be connected together. Which arrangement gives the smallest total resistance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All three in parallel" },
              { id: "b", text: "All three in series" },
              { id: "c", text: "The $12\\,\\Omega$ and $6.0\\,\\Omega$ in series, then in parallel with the $3.0\\,\\Omega$" },
              { id: "d", text: "The $12\\,\\Omega$ in parallel with the series combination of the $6.0\\,\\Omega$ and $3.0\\,\\Omega$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Parallel resistance", statement: "Parallel combinations always give a smaller equivalent resistance than series combinations of the same resistors." },
            ],
            steps: [
              { reasoning: "All three in parallel: $1/R_T = 1/12 + 1/6 + 1/3 = 7/12$, so $R_T = 12/7 \\approx 1.7\\,\\Omega$, the smallest possible arrangement.", working: "R_T = \\frac{12}{7} \\approx 1.7 \\text{ } \\Omega", marks: 1, markCode: "M" },
              { reasoning: "Any series element raises the total resistance, so option (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** all three in parallel",
            commonErrors: ["Assuming a mixed arrangement can give a lower resistance than all-parallel."],
          },
        },
        {
          id: "physsl-u5-circuits-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A $10$ V supply is connected to a circuit in which a $4.0\\,\\Omega$ resistor and an $8.0\\,\\Omega$ resistor are in parallel, and this combination is in series with a $6.0\\,\\Omega$ resistor.",
          parts: [
            { label: "a", prompt: "Calculate the total resistance of the circuit.", marks: 2 },
            { label: "b", prompt: "Calculate the total current supplied by the battery.", marks: 2 },
            { label: "c", prompt: "Calculate the potential difference across the $6.0\\,\\Omega$ resistor.", marks: 2 },
            { label: "d", prompt: "Calculate the current through the $8.0\\,\\Omega$ branch.", marks: 2 },
            { label: "e", prompt: "Explain why the current through the $8.0\\,\\Omega$ branch is smaller than that through the $4.0\\,\\Omega$ branch.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parallel pair", statement: "R_{pair} = (4.0 \\times 8.0)/(4.0 + 8.0) = 2.67\\,\\Omega" },
              { kind: "formula", name: "Ohm's law", statement: "I = V/R for the whole circuit and for each branch" },
            ],
            steps: [
              { part: "a", reasoning: "Equivalent of the parallel pair.", working: "R_{\\text{pair}} = \\frac{32}{12} = 2.67 \\text{ } \\Omega", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add the series resistor.", working: "R_T = 2.67 + 6.0 = 8.67 \\text{ } \\Omega", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Total current from Ohm's law.", working: "I = \\frac{10}{8.67} = 1.15 \\text{ A}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "The series resistor carries the total current.", working: "V = IR = 1.15 \\times 6.0 = 6.9 \\text{ V}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "The parallel pair has p.d. $10 - 6.9 = 3.1$ V across both branches.", working: "V_{\\text{pair}} = 10 - 6.9 = 3.1 \\text{ V}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Apply Ohm's law to the $8.0\\,\\Omega$ branch.", working: "I_8 = \\frac{3.1}{8.0} = 0.38 \\text{ A}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Both parallel branches have the same p.d.; by Ohm's law $I = V/R$, so the larger resistance gives the smaller current.", working: "I = \\frac{V}{R} \\Rightarrow I_8 < I_4 \\text{ since } R_8 > R_4", marks: 1, markCode: "M" },
              { part: "e", reasoning: "The $8.0\\,\\Omega$ branch offers more opposition to charge flow at the same voltage.", working: "\\text{larger } R \\Rightarrow \\text{smaller } I \\text{ at same } V", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $R_T = 8.67\\,\\Omega$ (b) $I = 1.15$ A (c) $V = 6.9$ V (d) $I_8 = 0.38$ A (e) same branch p.d., larger resistance gives smaller current by $I = V/R$",
            commonErrors: ["Applying the full $10$ V to each parallel branch.", "Adding the parallel pair resistance in series without first combining it."],
          },
        },
      ],
    },
  ],
};
