import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "esc7-u3-lesson-3-3",
  code: "3-3",
  title: "Electricity and Circuits",
  goal: "I CAN describe electric circuits, current, voltage and resistance.",
  standards: ["Edexcel KS3 Science — Physics"],
  vocabulary: [
    {
      term: "Current",
      definition: "Flow of electric charge measured in amperes (A).",
    },
    {
      term: "Voltage",
      definition:
        "Electrical potential difference pushing charge — measured in volts (V).",
    },
    {
      term: "Resistance",
      definition: "Opposition to current flow — measured in ohms (Ω).",
    },
    {
      term: "Circuit",
      definition:
        "Complete path allowing charge to flow from source through components back.",
    },
  ],
  concepts: [
    {
      id: "esc7-u3-circuits",
      title: "Circuits and Current",
      skill: "Describe circuit components and how current flows.",
      lesson: {
        sections: [
          {
            heading: "Circuit basics",
            body: "**Closed circuit**: complete loop — current flows; **open circuit**: gap — no current. **Series**: one path — same current everywhere, components share voltage. **Parallel**: multiple paths — same voltage across each, current splits.\n\n**Components**: cell/battery (source), wire (conductor), switch (control), bulb (uses energy → light), resistor (limits current), ammeter (measures current — in series), voltmeter (measures voltage — in parallel).",
          },
          {
            heading: "Current, voltage, resistance",
            body: "**Current (I)**: charge flow rate (amperes). **Voltage (V)**: energy per charge (volts) — 'push'. **Resistance (R)**: opposition to flow (ohms). **Ohm's law**: V = IR — voltage = current × resistance.\n\nIncreasing voltage increases current; increasing resistance decreases current. Series resistance adds up; parallel resistance decreases. Power = VI (watts) — energy transfer rate.",
          },
        ],
        keyFormulas: [
          {
            name: "Ohm's law",
            statement: "V = IR — voltage = current × resistance.",
          },
          {
            name: "Series vs parallel",
            statement:
              "Series=same current, adds resistance; parallel=same voltage, reduces resistance.",
          },
        ],
        workedExample: {
          problem:
            "A 6V battery drives 0.5A through a resistor. Calculate resistance.",
          solution: "R = V/I = 6/0.5 = 12 Ω.",
        },
      },
      questions: [
        {
          id: "esc7-u3-circuits-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is needed for current to flow in a circuit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only wires" },
              { id: "b", text: "A complete closed path" },
              { id: "c", text: "Only a battery" },
              { id: "d", text: "Light" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Closed circuit",
                statement: "Complete loop required for current flow.",
              },
            ],
            steps: [
              {
                reasoning: "Closed path = current flows.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Complete closed path",
            commonErrors: ["Battery alone sufficient view."],
          },
        },
        {
          id: "esc7-u3-circuits-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How should an ammeter be connected in a circuit?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Ammeter placement",
                statement: "In series — measures current through component.",
              },
            ],
            steps: [
              {
                reasoning: "Series connection stated.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Measures current flowing through circuit.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Correct reasoning.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "In series — so all current flows through it.",
            commonErrors: ["Parallel connection.", "No reason."],
          },
        },
        {
          id: "esc7-u3-circuits-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between series and parallel circuits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Series vs parallel",
                statement:
                  "Series=one path/same current; parallel=multiple paths/same voltage.",
              },
            ],
            steps: [
              {
                reasoning: "Series: one path, same current.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Parallel: multiple paths, same voltage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Resistance behaves differently.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Series: single path, same current, resistance adds. Parallel: multiple paths, same voltage, resistance decreases.",
            commonErrors: ["Reversed properties.", "Vague comparison."],
          },
        },
        {
          id: "esc7-u3-circuits-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A 12V battery connects to a resistor. Current is 2A.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the resistance (V = IR).",
              marks: 3,
            },
            {
              label: "b",
              prompt: "If resistance doubles, calculate new current.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain the relationship using Ohm's law.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ohm's law", statement: "V = IR." },
            ],
            steps: [
              {
                reasoning: "(a) R = V/I = 12/2 = 6 Ω.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Correct rearrangement.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) New R = 12 Ω; I = V/R = 12/12 = 1A.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Current halves.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) V constant; R↑ → I↓ (inverse).",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) 6 Ω (b) 1 A (c) V fixed, R doubled → I halved (inverse)",
            commonErrors: [
              "Wrong rearrangement.",
              "Direct proportion assumed.",
            ],
          },
        },
      ],
    },
    {
      id: "esc7-u3-safety",
      title: "Electrical Safety and Uses",
      skill:
        "Explain electrical safety measures and household electricity uses.",
      lesson: {
        sections: [
          {
            heading: "Electrical safety",
            body: "**Hazards**: electric shock (current through body), fires (overheating), burns. **Protection**: **fuse** (melts when current too high — breaks circuit), **circuit breaker** (trips on overload/short circuit), **earth wire** (diverts fault current to ground — prevents shock), **insulation** (plastic coating prevents contact).\n\n**Mains electricity**: ~230V AC in UK — dangerous. Safety rules: never touch bare wires, don't overload sockets, keep water away from electrics, use RCDs for outdoor use. Double insulation on some appliances = no earth wire needed.",
          },
          {
            heading: "Electrical uses",
            body: "**Power** = rate of energy transfer (watts). **Energy** = power × time (kWh for billing). Appliances convert electrical → other forms: kettle = thermal, fan = kinetic, bulb = light+heat.\n\n**Efficiency** = useful output ÷ total input × 100%. LED bulbs ~90% efficient vs old filament ~10% (rest = heat). Choosing efficient appliances saves money and reduces environmental impact.",
          },
        ],
        keyFormulas: [
          { name: "Power", statement: "P = VI; energy = power × time." },
          {
            name: "Safety devices",
            statement: "Fuse, circuit breaker, earth wire, insulation, RCD.",
          },
        ],
        workedExample: {
          problem: "A 100W bulb runs for 10 hours. Calculate energy used.",
          solution:
            "100W × 10h = 1 kWh (kilowatt-hour) — the unit on electricity bills.",
        },
      },
      questions: [
        {
          id: "esc7-u3-safety-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a fuse do in a circuit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Measures voltage" },
              { id: "b", text: "Increases current" },
              { id: "c", text: "Stores electricity" },
              {
                id: "d",
                text: "Melts and breaks circuit when current is too high",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fuse",
                statement:
                  "Melts on overload — breaks circuit protecting devices.",
              },
            ],
            steps: [
              {
                reasoning: "Fuse = safety device breaking circuit.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Melts on overload",
            commonErrors: ["Confusing with other devices."],
          },
        },
        {
          id: "esc7-u3-safety-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is the earth wire important for safety?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Earth wire",
                statement:
                  "Diverts fault current safely to ground — prevents shock.",
              },
            ],
            steps: [
              {
                reasoning: "Provides low-resistance path to ground.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Fault current flows through earth not person.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Prevents electric shock.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Earth wire diverts fault current to ground — user doesn't become the path, preventing shock.",
            commonErrors: ["Only 'it's there' view.", "No fault mechanism."],
          },
        },
        {
          id: "esc7-u3-safety-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why energy-efficient appliances are beneficial.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy efficiency",
                statement:
                  "Higher efficiency = less waste = lower cost and environmental impact.",
              },
            ],
            steps: [
              {
                reasoning: "Less energy wasted as heat.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lower electricity bills.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reduced environmental impact.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Efficiency = less waste → lower bills and reduced environmental impact (less fuel burned at power stations).",
            commonErrors: ["Only cost view.", "No environmental link."],
          },
        },
        {
          id: "esc7-u3-safety-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student plugs a 2kW heater and 3kW kettle into the same socket via extension lead.",
          parts: [
            { label: "a", prompt: "Calculate total power draw.", marks: 2 },
            {
              label: "b",
              prompt: "Explain the fire risk if both run simultaneously.",
              marks: 3,
            },
            { label: "c", prompt: "Suggest two safety measures.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Electrical overload",
                statement:
                  "Combined power exceeds circuit rating → overheating → fire risk.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Total = 2 + 3 = 5 kW.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Exceeds typical socket rating (13A/~3kW).",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Excessive current → wires overheat.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Fire risk from overheating insulation.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(c) Two valid safety measures.",
                marks: 2,
                markCode: "AO4",
                part: "c",
              },
              {
                reasoning:
                  "(c) e.g. separate sockets, check rating, don't overload.",
                marks: 1,
                markCode: "AO4",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) 5kW (b) exceeds rating → overheating → fire (c) separate sockets, check rating",
            commonErrors: ["No rating context.", "No fire mechanism."],
          },
        },
      ],
    },
  ],
};
