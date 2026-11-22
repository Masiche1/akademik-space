import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "edxbteceng-u1-lesson-1-3",
  code: "1-3",
  title: "Electrical Principles",
  goal: "I CAN apply Ohm's law, power and energy calculations and analyse simple series and parallel circuits.",
  standards: ["BTEC L3 National Engineering — Unit 1: Engineering Principles"],
  vocabulary: [
    {
      term: "Ohm's law",
      definition:
        "The current through a conductor is directly proportional to the potential difference across it, provided temperature is constant: $V = IR$.",
    },
    {
      term: "Resistor",
      definition:
        "A component that opposes current flow, measured in ohms ($\\Omega$).",
    },
    {
      term: "Series circuit",
      definition:
        "Components connected end-to-end; the same current flows through all and voltages add.",
    },
    {
      term: "Parallel circuit",
      definition:
        "Components connected across the same two nodes; the same voltage appears across each and currents add.",
    },
  ],
  concepts: [
    {
      id: "edxbteceng-u1-3-ohm",
      title: "Ohm's Law, Power and Energy",
      skill: "Use $V=IR$, $P=VI$ and $E=Pt$ to analyse simple circuits.",
      lesson: {
        sections: [
          {
            heading: "Ohm's law",
            body: "Voltage drives current through resistance: $V = IR$. Rearranged: $I = V/R$ and $R = V/I$. Ohm's law holds only for ohmic materials at constant temperature — diodes, LEDs and filament lamps are non-ohmic.\n\nElectrical power is $P = VI$ (watts). Substituting $V = IR$ gives $P = I^2R$ and $P = V^2/R$ — useful when you know current or voltage but not both. Energy is $E = Pt$; in kWh for billing: $E(\\text{kWh}) = P(\\text{kW}) \\times t(\\text{h})$.",
          },
          {
            heading: "Power in practice",
            body: "A $60\\ \\text{W}$ lamp on $230\\ \\text{V}$ draws $I = 60/230 = 0.26\\ \\text{A}$. Its resistance is $R = V/I = 884\\ \\Omega$ — note this is the hot resistance; cold resistance is much lower, which is why filaments fail at switch-on.\n\nAlways check units: power in watts needs volts and amperes; energy in joules needs watts and seconds. Convert kWh to J with $1\\ \\text{kWh} = 3.6 \\times 10^6\\ \\text{J}$ when needed.",
          },
        ],
        keyFormulas: [
          {
            name: "Ohm's law",
            statement: "$V = IR$",
          },
          {
            name: "Power",
            statement: "$P = VI = I^2R = \\dfrac{V^2}{R}$ (W)",
          },
          {
            name: "Energy",
            statement:
              "$E = Pt$ (J); $1\\ \\text{kWh} = 3.6 \\times 10^6\\ \\text{J}$",
          },
        ],
        workedExample: {
          problem:
            "A $12\\ \\text{V}$ battery powers a $4.8\\ \\text{W}$ lamp. Find the current and the lamp's resistance.",
          solution:
            "$I = P/V = 4.8/12 = 0.4\\ \\text{A}$.\n\n$R = V/I = 12/0.4 = 30\\ \\Omega$.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u1-3-ohm-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A $9\\ \\text{V}$ supply is connected across a $45\\ \\Omega$ resistor. The current is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$4.0\\ \\text{A}$",
              },
              {
                id: "b",
                text: "$405\\ \\text{A}$",
              },
              {
                id: "c",
                text: "$0.05\\ \\text{A}$",
              },
              {
                id: "d",
                text: "$0.2\\ \\text{A}$",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Key principle",
                statement: "$I = V/R$",
              },
            ],
            steps: [
              {
                reasoning: "$9/45 = 0.2$ A",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "0.2 A",
            commonErrors: [
              "Multiplying V and R instead of dividing",
              "Unit confusion A vs mA",
            ],
            examinerNote: "Ohm's law rearrangement is the most-tested skill.",
          },
        },
        {
          id: "edxbteceng-u1-3-ohm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $230\\ \\text{V}$ kettle rated $2.3\\ \\text{kW}$ is used for $5$ minutes. Calculate the charge passed and the energy used in joules.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "; ;",
                statement: "$I = P/V$; $Q = It$; $E = Pt$",
              },
            ],
            steps: [
              {
                reasoning: "$I = 2300/230 = 10$ A",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$Q = 10 \\times 300 = 3000$ C",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E = 2300 \\times 300 = 6.9 \\times 10^5$ J",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3000 C; $6.9\\times10^5$ J",
            commonErrors: [
              "Using kW without converting to W",
              "Charge asked but energy calculated",
            ],
            examinerNote: "Two different quantities — read carefully.",
          },
        },
        {
          id: "edxbteceng-u1-3-ohm-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which quantity is NOT obeyed by Ohm's law?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A filament lamp (resistance rises with temperature)",
              },
              {
                id: "b",
                text: "A carbon resistor",
              },
              {
                id: "c",
                text: "A nichrome heating element at steady temperature",
              },
              {
                id: "d",
                text: "A metal resistor at constant temperature",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ohm's law requires constant temperature; filamen",
                statement:
                  "Ohm's law requires constant temperature; filament resistance varies with temperature",
              },
            ],
            steps: [
              {
                reasoning:
                  "Filament is non-ohmic because R changes as it heats",
                marks: 3,
                markCode: "A",
              },
            ],
            finalAnswer: "Filament lamp",
            commonErrors: [
              "Thinking all resistors are ohmic",
              "Confusing 'resistor' with 'ohmic'",
            ],
            examinerNote: "Temperature dependence is the key discriminator.",
          },
        },
        {
          id: "edxbteceng-u1-3-ohm-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A $12\\ \\text{V}$ lead-acid battery has internal resistance $0.05\\ \\Omega$ and supplies a $3\\ \\Omega$ headlamp.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the circuit current.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the terminal voltage across the lamp.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the power dissipated in the lamp.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain why the lamp dims as the battery discharges.",
              marks: 2,
            },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Total resistance = external + internal;",
                statement:
                  "Total resistance = external + internal; $V_{\\text{terminal}} = E - Ir$",
              },
            ],
            steps: [
              {
                reasoning: "$R_{\\text{tot}} = 3 + 0.05 = 3.05\\ \\Omega$",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$I = 12/3.05 = 3.93$ A ≈ $4$ A (accept 3.9)",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$V = IR = 3.93 \\times 3 = 11.8$ V",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$11.8$ V",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$P = VI = 11.8 \\times 3.93 \\approx 46.4$ W",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "$\\approx 46$ W (accept 44-48)",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Internal resistance increases (or emf drops) with discharge",
                marks: 1,
                markCode: "R",
                part: "d",
              },
              {
                reasoning: "Lower terminal voltage → lower power → dimmer lamp",
                marks: 1,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) $\\approx 3.93$ A (b) $11.8$ V (c) $\\approx 46$ W (d) falling terminal p.d.",
            commonErrors: [
              "Ignoring internal resistance",
              "Using emf instead of terminal voltage",
            ],
            examinerNote:
              "Parts build: current → voltage → power → interpretation.",
          },
        },
      ],
    },
    {
      id: "edxbteceng-u1-3-circuits",
      title: "Series and Parallel Circuits",
      skill:
        "Calculate total resistance, current and voltage in series and parallel networks.",
      lesson: {
        sections: [
          {
            heading: "Series circuits",
            body: "In series, the same current flows through every component: $I$ is identical throughout. Total resistance adds: $R_T = R_1 + R_2 + R_3$. The supply voltage divides in proportion to resistance: $V_1 = IR_1$, $V_2 = IR_2$, and $V_1 + V_2 + V_3 = V_{\\text{supply}}$.\n\nA practical consequence: if one component fails (e.g. a fuse blows or a bulb breaks), the whole circuit opens and everything stops working.",
          },
          {
            heading: "Parallel circuits",
            body: "In parallel, each branch sees the full supply voltage: $V$ is identical across branches. Branch currents add: $I_T = I_1 + I_2 + I_3$. Total resistance is found from $\\frac{1}{R_T} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$ — always less than the smallest branch resistance.\n\nTwo equal resistors in parallel give $R_T = R/2$. Parallel wiring is used for house circuits so each appliance gets full voltage and can be switched independently.",
          },
        ],
        keyFormulas: [
          {
            name: "Series resistance",
            statement: "$R_T = R_1 + R_2 + R_3$",
          },
          {
            name: "Series voltage",
            statement: "$V_n = IR_n$; voltages sum to supply",
          },
          {
            name: "Parallel resistance",
            statement:
              "$\\dfrac{1}{R_T} = \\sum \\dfrac{1}{R_n}$; branch voltages equal",
          },
        ],
        workedExample: {
          problem:
            "$12\\ \\text{V}$ is applied across $R_1 = 4\\ \\Omega$ and $R_2 = 6\\ \\Omega$ in parallel. Find total resistance, total current and the current through each branch.",
          solution:
            "$\\frac{1}{R_T} = \\frac{1}{4} + \\frac{1}{6} = \\frac{5}{12}$, so $R_T = 2.4\\ \\Omega$.\n\n$I_T = 12/2.4 = 5\\ \\text{A}$. Branches: $I_1 = 12/4 = 3\\ \\text{A}$, $I_2 = 12/6 = 2\\ \\text{A}$. Check: $3 + 2 = 5$ A. ✓",
        },
      },
      questions: [
        {
          id: "edxbteceng-u1-3-circuits-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Two $6\\ \\Omega$ resistors are connected in parallel. The total resistance is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$12\\ \\Omega$",
              },
              {
                id: "b",
                text: "$6\\ \\Omega$",
              },
              {
                id: "c",
                text: "$1.5\\ \\Omega$",
              },
              {
                id: "d",
                text: "$3\\ \\Omega$",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equal parallel resistors halve the resistance",
                statement: "Equal parallel resistors halve the resistance",
              },
            ],
            steps: [
              {
                reasoning: "$R_T = R/2 = 3\\ \\Omega$",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "3 Ω",
            commonErrors: ["Adding resistances as in series", "Halving twice"],
            examinerNote: "Parallel always reduces below each branch.",
          },
        },
        {
          id: "edxbteceng-u1-3-circuits-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "$24\\ \\text{V}$ is applied across two resistors $R_1 = 8\\ \\Omega$ and $R_2 = 12\\ \\Omega$ in series. Find the total resistance, total current, and the voltage across each resistor.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Series: adds; same; divides by",
                statement: "Series: $R_T$ adds; $I$ same; $V$ divides by $IR$",
              },
            ],
            steps: [
              {
                reasoning: "$R_T = 20\\ \\Omega$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$I = 24/20 = 1.2$ A",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "$V_1 = 1.2 \\times 8 = 9.6$ V; $V_2 = 1.2 \\times 12 = 14.4$ V",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: $9.6 + 14.4 = 24$ V",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$20\\ \\Omega$, $1.2$ A, $9.6$ V, $14.4$ V",
            commonErrors: [
              "Assigning full voltage to each resistor",
              "Wrong current in series",
            ],
            examinerNote: "Voltage division check confirms correctness.",
          },
        },
        {
          id: "edxbteceng-u1-3-circuits-q3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain, using circuit principles, why household appliances are wired in parallel rather than series, giving two reasons.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Parallel branches share the same voltage;",
                statement:
                  "Parallel branches share the same voltage; series shares the same current",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each appliance receives the full supply voltage in parallel",
                marks: 2,
                markCode: "R",
              },
              {
                reasoning:
                  "Independent switching/control — opening one branch does not stop others",
                marks: 2,
                markCode: "R",
              },
              {
                reasoning:
                  "Clear engineering-style explanation linking to real use",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Full voltage per appliance + independent operation",
            commonErrors: [
              "Vague answers without circuit principles",
              "Only one reason given",
            ],
            examinerNote: "Both reasons needed for full marks.",
          },
        },
        {
          id: "edxbteceng-u1-3-circuits-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A $12\\ \\text{V}$ supply feeds two parallel branches: branch A has $R_1 = 6\\ \\Omega$, branch B has two $4\\ \\Omega$ resistors in series.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the resistance of branch B.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Calculate the current in each branch.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Calculate the total current from the supply.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Calculate the total resistance of the circuit.",
              marks: 2,
            },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Parallel: same voltage each branch; currents",
                statement:
                  "Parallel: same voltage each branch; currents add; $R_T$ via reciprocal sum",
              },
            ],
            steps: [
              {
                reasoning: "$R_B = 8\\ \\Omega$",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$I_A = 12/6 = 2$ A",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$I_B = 12/8 = 1.5$ A",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Both branch currents stated",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$I_T = 2 + 1.5 = 3.5$ A",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "States currents add in parallel",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "$\\frac{1}{R_T} = \\frac{1}{6} + \\frac{1}{8} = \\frac{7}{24}$",
                marks: 1,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "$R_T = 24/7 = 3.43\\ \\Omega$",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) $8\\ \\Omega$ (b) $2$ A, $1.5$ A (c) $3.5$ A (d) $3.43\\ \\Omega$",
            commonErrors: [
              "Treating branches as series",
              "Forgetting to combine $R_B$'s series resistors",
            ],
            examinerNote:
              "Mixed series-in-parallel is the classic applied question.",
          },
        },
      ],
    },
  ],
};
