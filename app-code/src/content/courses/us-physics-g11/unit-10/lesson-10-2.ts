import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "phys11-u10-lesson-10-2",
  code: "10-2",
  title: "Circuits, Current, and Resistance",
  goal: "I CAN analyze series and parallel circuits and apply Ohm's law.",
  standards: [
    "HS-PS3-5",
    "SEP: Using Mathematics and Computational Thinking",
    "SEP: Developing and Using Models",
  ],
  vocabulary: [
    { term: "Current", definition: "Flow of charge: I = Q/t." },
    { term: "Voltage", definition: "Electrical potential difference." },
    { term: "Resistance", definition: "Opposition to current flow." },
    { term: "Ohm's law", definition: "V = IR." },
    { term: "Series circuit", definition: "Components in single path." },
    { term: "Parallel circuit", definition: "Components in multiple paths." },
    { term: "Power", definition: "P = VI = I²R = V²/R." },
  ],
  concepts: [
    {
      id: "phys11-u10-ohm",
      title: "Ohm's law and circuits",
      skill: "Apply Ohm's law and analyze circuit configurations.",
      lesson: {
        sections: [
          {
            heading: "Ohm's law",
            body: "$$V = IR$$\n\nVoltage = current × resistance. Units: volts, amps, ohms.",
          },
          {
            heading: "Series vs parallel",
            body: "- **Series**: same current, voltages add. $R_{total} = R_1 + R_2 + ...$\n- **Parallel**: same voltage, currents add. $1/R_{total} = 1/R_1 + 1/R_2 + ...$",
          },
        ],
        keyFormulas: [
          { name: "Ohm's law", statement: "$V = IR$" },
          { name: "Series R", statement: "$R_T = R_1 + R_2$" },
          { name: "Parallel R", statement: "$1/R_T = 1/R_1 + 1/R_2$" },
        ],
        workedExample: {
          problem: "10 V battery, 5 Ω resistor. Current?",
          solution: "$I = V/R = 10/5 = 2$ A.",
        },
      },
      questions: [
        {
          id: "phys11-u10-ohm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Ohm's law?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "V = IR" },
              { id: "b", text: "V = I/R" },
              { id: "c", text: "V = R/I" },
              { id: "d", text: "V = I + R" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ohm's law", statement: "$V = IR$." },
            ],
            steps: [{ reasoning: "V = IR.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** V = IR",
            commonErrors: ["Wrong formula."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys11-u10-ohm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "12 V battery, 4 Ω resistor. Current?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "I = V/R", statement: "I = 12/4" },
            ],
            steps: [
              { reasoning: "$I = 12/4$.", marks: 1, markCode: "M" },
              { reasoning: "= 3 A.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3 A.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 A.",
            commonErrors: ["Wrong formula."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u10-ohm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two resistors in series: 3 Ω and 7 Ω. Total resistance?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series",
                statement: "$R_T = R_1 + R_2$",
              },
            ],
            steps: [
              { reasoning: "$R_T = 3 + 7$.", marks: 1, markCode: "M" },
              { reasoning: "= 10 Ω.", marks: 1, markCode: "M" },
              {
                reasoning: "Series: resistances add.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Answer: 10 Ω.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 Ω.",
            commonErrors: ["Parallel formula."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "phys11-u10-ohm-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Circuit: 12 V battery, two resistors 4 Ω and 6 Ω in parallel.",
          parts: [
            { label: "a", prompt: "Total resistance?", marks: 3 },
            { label: "b", prompt: "Total current?", marks: 2 },
            { label: "c", prompt: "Current through each?", marks: 3 },
            { label: "d", prompt: "Voltage across each?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Parallel circuit",
                statement: "$1/R_T = 1/R_1 + 1/R_2$; same V.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$1/R_T = 1/4 + 1/6 = 3/12 + 2/12 = 5/12$ → $R_T = 12/5 = 2.4$ Ω.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 2.4 Ω.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$I_T = 12/2.4 = 5$ A.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$I_1 = 12/4 = 3$ A; $I_2 = 12/6 = 2$ A.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: 3A and 2A.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "Both 12 V (parallel).",
                marks: 2,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer: "(a) 2.4Ω (b) 5A (c) 3A,2A (d) 12V each.",
            commonErrors: ["Wrong parallel formula."],
            examinerNote: "3+2+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u10-power",
      title: "Electrical power",
      skill: "Calculate electrical power and energy consumption.",
      lesson: {
        sections: [
          {
            heading: "Electrical power",
            body: "$$P = VI = I^2R = V^2/R$$\n\nPower dissipated in circuit. Units: watts.",
          },
          {
            heading: "Energy consumption",
            body: "$$E = Pt$$\n\nEnergy = power × time. Units: joules or kWh.",
          },
        ],
        keyFormulas: [
          { name: "Power", statement: "$P = VI = I^2R = V^2/R$" },
          { name: "Energy", statement: "$E = Pt$" },
          { name: "kWh", statement: "1000 W × 1 hour" },
        ],
        workedExample: {
          problem: "100 W bulb on for 5 hours. Energy?",
          solution: "$E = 100 \\times 5 = 500$ Wh = 0.5 kWh.",
        },
      },
      questions: [
        {
          id: "phys11-u10-power-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is electrical power?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "VI" },
              { id: "b", text: "V/I" },
              { id: "c", text: "I/V" },
              { id: "d", text: "V+I" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power", statement: "$P = VI$." },
            ],
            steps: [{ reasoning: "P = VI.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** VI",
            commonErrors: ["V/I."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys11-u10-power-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "12 V across 4 Ω. Power dissipated?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "P = V²/R", statement: "P = 144/4" },
            ],
            steps: [
              { reasoning: "$P = V^2/R = 144/4$.", marks: 1, markCode: "M" },
              { reasoning: "= 36 W.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 36 W.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "36 W.",
            commonErrors: ["Wrong formula."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u10-power-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do high-voltage power lines reduce energy loss?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Power transmission",
                statement: "P_loss = I²R; high V → low I → low loss.",
              },
            ],
            steps: [
              {
                reasoning: "P = VI → high V means low I for same P.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Loss = I²R → low I → low loss.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: reduced current → reduced loss.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: high voltage efficient.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "High V → low I → low I²R loss.",
            commonErrors: ["Same loss."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u10-power-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Appliance: 2000 W, runs 3 hours daily. Monthly cost at $0.15/kWh?",
          parts: [
            { label: "a", prompt: "Daily energy?", marks: 2 },
            { label: "b", prompt: "Monthly energy?", marks: 2 },
            { label: "c", prompt: "Monthly cost?", marks: 3 },
            { label: "d", prompt: "Annual cost?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy/cost",
                statement: "$E = Pt$; cost = E × rate.",
              },
            ],
            steps: [
              {
                reasoning: "$E_{daily} = 2 \\times 3 = 6$ kWh.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$E_{monthly} = 6 \\times 30 = 180$ kWh.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Cost = 180 × $0.15 = $27.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              { reasoning: "Answer: $27.", marks: 1, markCode: "A", part: "c" },
              {
                reasoning: "Annual = 27 × 12 = $324.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: $324.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 6kWh (b) 180kWh (c) $27 (d) $324.",
            commonErrors: ["Wrong units."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u10-circuits",
      title: "Circuit analysis",
      skill: "Analyze complex circuits with multiple components.",
      lesson: {
        sections: [
          {
            heading: "Circuit analysis",
            body: "1. Identify series/parallel sections.\n2. Calculate equivalent resistance.\n3. Apply Ohm's law for currents.\n4. Find voltages across components.",
          },
          {
            heading: "Kirchhoff's laws",
            body: "- **Junction rule**: current in = current out.\n- **Loop rule**: sum of voltages = 0.",
          },
        ],
        keyFormulas: [
          { name: "Equivalent R", statement: "Series/parallel combinations" },
          { name: "Kirchhoff", statement: "Conservation of charge/energy" },
          { name: "Current division", statement: "Parallel splits current" },
        ],
        workedExample: {
          problem: "Two parallel resistors 4Ω, 12Ω with 6V. Currents?",
          solution: "$I_1 = 6/4 = 1.5$ A; $I_2 = 6/12 = 0.5$ A.",
        },
      },
      questions: [
        {
          id: "phys11-u10-circuits-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a series circuit, what's the same for all components?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Voltage" },
              { id: "b", text: "Current" },
              { id: "c", text: "Resistance" },
              { id: "d", text: "Power" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Series",
                statement: "Same current throughout.",
              },
            ],
            steps: [
              { reasoning: "Series: same current.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Current",
            commonErrors: ["Voltage."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u10-circuits-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a parallel circuit, what's the same for all components?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Parallel",
                statement: "Same voltage across all.",
              },
            ],
            steps: [
              { reasoning: "Parallel: same voltage.", marks: 1, markCode: "R" },
              {
                reasoning: "Currents split among branches.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Answer: voltage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Voltage is same across all.",
            commonErrors: ["Current."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u10-circuits-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Kirchhoff's junction rule states what?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kirchhoff",
                statement: "Current in = current out.",
              },
            ],
            steps: [
              {
                reasoning: "Charge conservation at junction.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Current in = current out.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Example: 3A in → 1A+2A out.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: current conservation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Current in = current out.",
            commonErrors: ["Voltage rule."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u10-circuits-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Circuit: 24V battery, R₁=6Ω series with (R₂=12Ω || R₃=4Ω).",
          parts: [
            { label: "a", prompt: "Parallel equivalent?", marks: 3 },
            { label: "b", prompt: "Total resistance?", marks: 2 },
            { label: "c", prompt: "Total current?", marks: 2 },
            {
              label: "d",
              prompt: "Voltage across parallel section?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Circuit analysis",
                statement: "Reduce parallel first, then series.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$1/R_p = 1/12 + 1/4 = 1/12 + 3/12 = 4/12 = 1/3$ → $R_p = 3$ Ω.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              { reasoning: "Answer: 3 Ω.", marks: 1, markCode: "A", part: "a" },
              {
                reasoning: "$R_T = 6 + 3 = 9$ Ω.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$I_T = 24/9 = 2.67$ A.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "$V_p = I_T \\times R_p = 2.67 \\times 3 = 8$ V.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              { reasoning: "Answer: 8 V.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) 3Ω (b) 9Ω (c) 2.67A (d) 8V.",
            commonErrors: ["Wrong reduction order."],
            examinerNote: "3+2+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u10-applications",
      title: "Electrical applications",
      skill: "Apply circuit concepts to real-world electrical systems.",
      lesson: {
        sections: [
          {
            heading: "Electrical applications",
            body: "- **Household circuits**: parallel wiring, 120V/240V.\n- **Appliances**: power ratings, energy use.\n- **Safety**: fuses, circuit breakers, grounding.\n- **Batteries**: voltage sources, capacity.",
          },
          {
            heading: "Power grid",
            body: "Generation → transmission (high V) → distribution (lower V) → consumption.",
          },
        ],
        keyFormulas: [
          { name: "Household", statement: "Parallel, 120V" },
          { name: "Safety", statement: "Fuses/breakers" },
          { name: "Grid", statement: "High V transmission" },
        ],
        workedExample: {
          problem: "Why are household outlets parallel?",
          solution: "Each gets full voltage; independent operation.",
        },
      },
      questions: [
        {
          id: "phys11-u10-apps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why are household outlets wired in parallel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same current" },
              { id: "b", text: "Same voltage, independent" },
              { id: "c", text: "Lower resistance" },
              { id: "d", text: "Higher power" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Parallel",
                statement: "Same V, independent operation.",
              },
            ],
            steps: [
              {
                reasoning: "Parallel → same voltage, independent.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Same voltage, independent",
            commonErrors: ["Same current."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u10-apps-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What does a circuit breaker do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Circuit breaker",
                statement: "Cuts power when current too high.",
              },
            ],
            steps: [
              {
                reasoning: "Detects excessive current.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Opens circuit to prevent overload.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Answer: safety device.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cuts power when current too high.",
            commonErrors: ["Increases current."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u10-apps-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is grounding important for electrical safety?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Grounding",
                statement: "Provides safe path for excess charge.",
              },
            ],
            steps: [
              {
                reasoning: "Fault current flows to ground.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Prevents shock hazard.", marks: 1, markCode: "R" },
              { reasoning: "Protects equipment.", marks: 1, markCode: "R" },
              {
                reasoning: "Answer: safety path for current.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Safe path for fault current.",
            commonErrors: ["Not needed."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u10-apps-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Household: 15A circuit breaker, 120V. Max power? Appliance uses 1500W.",
          parts: [
            { label: "a", prompt: "Max power circuit can handle?", marks: 3 },
            { label: "b", prompt: "Current for 1500W appliance?", marks: 3 },
            { label: "c", prompt: "Will breaker trip?", marks: 2 },
            { label: "d", prompt: "Safety margin?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Power",
                statement: "$P = VI$; $I = P/V$.",
              },
            ],
            steps: [
              {
                reasoning: "$P_{max} = 15 \\times 120 = 1800$ W.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 1800 W.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$I = 1500/120 = 12.5$ A.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 12.5 A.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "12.5 A < 15 A → won't trip (but close).",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Margin = 2.5 A (17%).",
                marks: 2,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "(a) 1800W (b) 12.5A (c) no (d) 2.5A margin.",
            commonErrors: ["Wrong P = VI."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u10-capstone",
      title: "Circuits capstone",
      skill: "Integrate all circuit concepts in complex problems.",
      lesson: {
        sections: [
          {
            heading: "Comprehensive circuit analysis",
            body: "1. Identify components and configuration.\n2. Calculate equivalent resistance.\n3. Apply Ohm's law.\n4. Find all currents and voltages.\n5. Calculate power dissipation.",
          },
          {
            heading: "Real-world integration",
            body: "- Household wiring.\n- Electronic devices.\n- Power distribution.\n- Energy efficiency.",
          },
        ],
        keyFormulas: [
          { name: "Integration", statement: "R, I, V, P" },
          { name: "Applications", statement: "Real circuits" },
        ],
        workedExample: {
          problem:
            "Complex circuit: multiple series/parallel sections → analyze step by step.",
          solution:
            "Reduce parallel → series → Ohm's law → currents → voltages.",
        },
      },
      questions: [
        {
          id: "phys11-u10-cap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's the most important circuit analysis step?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calculate immediately" },
              { id: "b", text: "Identify configuration" },
              { id: "c", text: "Guess answer" },
              { id: "d", text: "Check units" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Problem solving",
                statement: "Identify configuration first.",
              },
            ],
            steps: [
              {
                reasoning: "Identify series/parallel first.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Identify configuration",
            commonErrors: ["Jumping to calculation."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u10-cap-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is parallel wiring used in homes?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Parallel",
                statement: "Independent operation, same voltage.",
              },
            ],
            steps: [
              {
                reasoning: "Each appliance gets full voltage.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "One appliance off doesn't affect others.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: independent operation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Independent operation, same voltage.",
            commonErrors: ["Series wiring."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u10-cap-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do you reduce energy consumption in circuits?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy efficiency",
                statement: "Reduce power or time.",
              },
            ],
            steps: [
              {
                reasoning: "Use lower power appliances.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Reduce operating time.", marks: 1, markCode: "R" },
              {
                reasoning: "Improve efficiency (LED vs incandescent).",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Answer: lower P or t.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reduce power or operating time.",
            commonErrors: ["Can't reduce."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u10-cap-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Complex circuit: 24V, R₁=8Ω series with (R₂=16Ω || R₃=8Ω || R₄=16Ω).",
          parts: [
            { label: "a", prompt: "Parallel equivalent?", marks: 3 },
            { label: "b", prompt: "Total R?", marks: 2 },
            { label: "c", prompt: "Total current?", marks: 2 },
            {
              label: "d",
              prompt: "Current through each parallel resistor?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Circuit analysis",
                statement: "Reduce parallel, then series.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$1/R_p = 1/16 + 1/8 + 1/16 = 1/16 + 2/16 + 1/16 = 4/16 = 1/4$ → $R_p = 4$ Ω.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              { reasoning: "Answer: 4 Ω.", marks: 1, markCode: "A", part: "a" },
              {
                reasoning: "$R_T = 8 + 4 = 12$ Ω.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$I_T = 24/12 = 2$ A.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "$V_p = 2 \\times 4 = 8$ V; $I_2 = 8/16 = 0.5$ A; $I_3 = 8/8 = 1$ A; $I_4 = 8/16 = 0.5$ A.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: 0.5A, 1A, 0.5A.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 4Ω (b) 12Ω (c) 2A (d) 0.5A,1A,0.5A.",
            commonErrors: ["Wrong parallel calc."],
            examinerNote: "3+2+2+3 = 10.",
          },
        },
      ],
    },
  ],
};
