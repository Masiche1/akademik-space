import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "physhl-u2-lesson-2-1",
  code: "2-1",
  title: "The First Law of Thermodynamics",
  goal: "I CAN apply the first law of thermodynamics to heat engines and gas processes, distinguish heat, work and internal energy, and solve problems involving isothermal, isobaric, isochoric and adiabatic processes.",
  standards: ["Paper 1", "Paper 2", "AHL B1"],
  vocabulary: [
    {
      term: "Internal energy ($U$)",
      definition:
        "The total kinetic and potential energy of all particles in a system; depends only on temperature for an ideal gas.",
    },
    {
      term: "First law of thermodynamics",
      definition:
        "Energy conservation for thermal systems: $\\Delta U = Q + W$ where $Q$ is heat added and $W$ is work done ON the system.",
    },
    {
      term: "Isothermal process",
      definition:
        "A process at constant temperature; for an ideal gas $\\Delta U = 0$, so $Q = -W$.",
    },
    {
      term: "Isobaric process",
      definition:
        "A process at constant pressure; work $W = P\\Delta V$ and heat changes both $U$ and does work.",
    },
    {
      term: "Isochoric process",
      definition:
        "A process at constant volume; no work done ($W = 0$), so $\\Delta U = Q$.",
    },
    {
      term: "Adiabatic process",
      definition:
        "A process with no heat exchange ($Q = 0$); all energy change is work: $\\Delta U = W$.",
    },
  ],
  concepts: [
    {
      id: "physhl-u2-first-law",
      title: "Heat, work and internal energy",
      skill:
        "Apply $\\Delta U = Q + W$ with correct sign conventions, and distinguish the four types of thermodynamic process.",
      lesson: {
        sections: [
          {
            heading: "The first law",
            body: "The first law of thermodynamics is conservation of energy applied to thermal systems: $\\Delta U = Q + W$. Here $\\Delta U$ is the change in internal energy, $Q$ is heat ADDED to the system (positive when absorbed), and $W$ is work done ON the system (positive when done on it). Equivalent form: $\\Delta U = Q - W$ where $W$ is work done BY the system. For an ideal gas, internal energy depends only on temperature: $\\Delta U = nC_V\\Delta T$.",
          },
          {
            heading: "Work in gas processes",
            body: "When a gas expands against pressure $P$ by volume change $\\Delta V$, work is done: $W = P\\Delta V$ (constant pressure) or $W = \\int P\\,dV$ (general). In a $P$–$V$ diagram, work done BY the gas equals the area under the curve. Compression ($\\Delta V < 0$) means work done ON the gas (positive $W$ in $\\Delta U = Q + W$).",
          },
          {
            heading: "The four processes",
            body: "**Isothermal** ($T$ constant): $\\Delta U = 0$, $Q = -W$ — slow process, heat flows in/out. **Isobaric** ($P$ constant): $W = P\\Delta V$, heat changes both $U$ and does work. **Isochoric** ($V$ constant): $W = 0$, $\\Delta U = Q$ — heating in rigid container. **Adiabatic** ($Q = 0$): $\\Delta U = W$ — rapid process, no heat exchange; gas heats on compression, cools on expansion.",
          },
        ],
        keyFormulas: [
          {
            name: "First law",
            statement: "$\\Delta U = Q + W$ (W = work done ON system)",
          },
          { name: "Work at constant P", statement: "$W = P\\Delta V$" },
          {
            name: "Ideal gas internal energy",
            statement: "$\\Delta U = nC_V\\Delta T$ — depends only on T",
          },
          {
            name: "Work on P–V diagram",
            statement: "Area under curve = work done by gas",
          },
        ],
        workedExample: {
          problem:
            "A gas absorbs 500 J of heat and does 200 J of work expanding. What is $\\Delta U$?",
          solution:
            "Using $\\Delta U = Q - W_{by}$: $\\Delta U = 500 - 200 = +300$ J. (Or with $W_{on} = -200$: $\\Delta U = 500 + (-200) = 300$ J.)",
        },
      },
      questions: [
        {
          id: "physhl-u2-fl-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The first law of thermodynamics states:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\Delta U = Q + W$" },
              { id: "b", text: "$\\Delta U = Q - W$" },
              { id: "c", text: "$\\Delta U = Q \\times W$" },
              { id: "d", text: "$\\Delta U = \\frac{Q}{W}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "First law",
                statement:
                  "$\\Delta U = Q + W$ where $W$ is work done ON the system.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First law: change in internal energy = heat added + work done on system.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore choice (a) is correct (with stated sign convention).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\Delta U = Q + W$",
            commonErrors: [
              "Confusing sign conventions — always state whether W is work done ON or BY.",
            ],
          },
        },
        {
          id: "physhl-u2-fl-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A gas in a rigid container is heated. Explain what happens to its internal energy and why no work is done.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Isochoric process",
                statement:
                  "Constant volume → $W = 0$ → $\\Delta U = Q$; temperature rises.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rigid container → volume constant → $\\Delta V = 0$ → $W = P\\Delta V = 0$.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "First law: $\\Delta U = Q + 0 = Q$ — all heat goes into internal energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Temperature increases → internal energy increases.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\Delta U = Q$; temperature and internal energy increase.",
            commonErrors: [
              "Saying work is done — no volume change means no work.",
            ],
          },
        },
        {
          id: "physhl-u2-fl-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A gas expands isothermally at 300 K, absorbing 800 J of heat. (a) What is $\\Delta U$? (b) How much work does the gas do? (c) Explain why $\\Delta U = 0$ for an ideal gas isothermal process.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Isothermal ideal gas",
                statement:
                  "T constant → $\\Delta U = nC_V\\Delta T = 0$; Q = work done by gas.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) $\\Delta U = nC_V \\Delta T = 0$ since $\\Delta T = 0$.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "(b) $Q = W_{by}$ → gas does 800 J of work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Ideal gas internal energy depends only on temperature — no T change → no U change.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Heat in = work out exactly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 0. (b) 800 J. (c) $U$ depends only on T for ideal gas.",
            commonErrors: [
              "Thinking heat increases temperature — in isothermal expansion T stays constant.",
            ],
          },
        },
        {
          id: "physhl-u2-fl-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A gas undergoes a cyclic process on a P–V diagram: isobaric expansion at 200 kPa from 0.50 to 1.50 dm³, then isochoric cooling, then isobaric compression at 100 kPa back to start, then isochoric heating.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the work done by the gas in each isobaric stage.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate the net work done over the complete cycle.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "State whether the cycle is clockwise or anticlockwise and what this means for net work output.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "P–V diagram work",
                statement:
                  "Work = area under curve; net work = enclosed area for cycle.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Expansion: $W = P\\Delta V = 200 \\times 10^3 \\times (1.50-0.50)\\times10^{-3} = 200$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Compression at 100 kPa: $W = 100 \\times 10^3 \\times (-1.00)\\times10^{-3} = -100$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Isochoric stages: $W = 0$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Net work = area enclosed = $(200-100)\\times10^3 \\times 1.00\\times10^{-3} = 100$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Net work done by gas = 100 J.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Alternative: $200 + (-100) + 0 + 0 = 100$ J.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Clockwise cycle → net work output (heat engine).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Positive net work means engine produces work.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) +200 J, −100 J. (b) 100 J net. (c) Clockwise → heat engine.",
            commonErrors: [
              "Subtracting works wrong — expansion positive, compression negative.",
            ],
          },
        },
        {
          id: "physhl-u2-fl-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the first law $\\Delta U = Q + W$, the symbol $W$ represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Work done ON the system" },
              { id: "b", text: "Work done BY the system" },
              { id: "c", text: "Heat lost to the surroundings" },
              { id: "d", text: "Total energy of the system" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First law sign convention",
                statement:
                  "$\\Delta U = Q + W$ with $W$ = work done ON the system; positive when work is done on the gas.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In this convention $W$ is positive when work is done on the system (compression).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Work done ON the system",
            commonErrors: [
              "Confusing work done ON with work done BY — always state the convention.",
            ],
          },
        },
        {
          id: "physhl-u2-fl-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "During an isobaric expansion of an ideal gas, the heat supplied $Q$ is given by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$Q = \\Delta U$" },
              { id: "b", text: "$Q = -W$" },
              { id: "c", text: "$Q = \\Delta U + P\\Delta V$" },
              { id: "d", text: "$Q = 0$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "First law (work by)",
                statement:
                  "$Q = \\Delta U + W_{by}$ and $W_{by} = P\\Delta V$ at constant pressure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Isobaric: work done by gas is $P\\Delta V$; heat must supply both $\\Delta U$ and the work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $Q = \\Delta U + P\\Delta V$",
            commonErrors: [
              "Choosing $Q = \\Delta U$ — that ignores the expansion work.",
            ],
          },
        },
        {
          id: "physhl-u2-fl-q7",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A gas is compressed adiabatically (rapidly, in an insulated cylinder). Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$Q = 0$ and $\\Delta U > 0$" },
              { id: "b", text: "$Q > 0$ and $\\Delta U = 0$" },
              { id: "c", text: "$Q = 0$ and $\\Delta U < 0$" },
              { id: "d", text: "$\\Delta U = 0$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adiabatic compression",
                statement:
                  "Insulated → $Q = 0$; work done ON gas raises $U$ and $T$.",
              },
            ],
            steps: [
              {
                reasoning: "Adiabatic means no heat exchange, so $Q = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Compression does positive work on the gas → $\\Delta U = W_{on} > 0$, so choice (a).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $Q = 0$ and $\\Delta U > 0$",
            commonErrors: [
              "Thinking compression releases heat — no heat flows in an adiabatic process.",
            ],
          },
        },
        {
          id: "physhl-u2-fl-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For which process is $\\Delta U = 0$ for an ideal gas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Isothermal" },
              { id: "b", text: "Isobaric" },
              { id: "c", text: "Adiabatic" },
              { id: "d", text: "Isochoric" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Ideal gas internal energy",
                statement:
                  "$U$ depends only on $T$; $\\Delta U = nC_V\\Delta T = 0$ when $\\Delta T = 0$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Isothermal means $\\Delta T = 0$ → $\\Delta U = 0$ for an ideal gas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Isothermal",
            commonErrors: [
              "Choosing isochoric — constant V does not mean constant T.",
            ],
          },
        },
        {
          id: "physhl-u2-fl-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "On a P–V diagram, the work done BY a gas during a change of volume equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The area under the curve" },
              { id: "b", text: "The area above the curve" },
              { id: "c", text: "The slope of the curve" },
              { id: "d", text: "The perimeter enclosed by the curve" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "P–V work",
                statement:
                  "$W_{by} = \\int P\\,dV$ — the area under the curve on a P–V diagram.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Work done by a gas equals the integral of $P$ with respect to $V$, i.e. the area under the curve.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** The area under the curve",
            commonErrors: [
              "Confusing work with the enclosed area — enclosed area gives NET work only for a full cycle.",
            ],
          },
        },
        {
          id: "physhl-u2-fl-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A gas absorbs 450 J of heat and expands, doing 180 J of work on the surroundings. Calculate the change in internal energy $\\Delta U$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta U$ in J", answer: 270, unit: "J" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "First law (work by)",
                statement: "$\\Delta U = Q - W_{by}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify heat added $Q = +450$ J and work done BY gas $W_{by} = 180$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply first law.",
                working: "\\Delta U = Q - W_{by} = 450 - 180",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta U = +270$ J — internal energy increases.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta U = +270$ J",
            commonErrors: [
              "Adding instead of subtracting — work done BY the gas reduces the internal energy gain.",
            ],
          },
        },
        {
          id: "physhl-u2-fl-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "An ideal gas expands isobarically at $P = 200$ kPa from $V = 1.0$ dm³ to $V = 3.0$ dm³. During this expansion its internal energy increases by 800 J.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the work done BY the gas.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the heat supplied to the gas.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Work done by gas", answer: 400, unit: "J" },
              { label: "(b) Heat supplied", answer: 1200, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Isobaric work and first law",
                statement: "$W_{by} = P\\Delta V$; $Q = \\Delta U + W_{by}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Use $W_{by} = P\\Delta V$ with $\\Delta V = 2.0$ dm³ $= 2.0 \\times 10^{-3}$ m³.",
                working:
                  "W_{by} = 200 \\times 10^3 \\times 2.0 \\times 10^{-3}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$W_{by} = 400$ J.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Heat supplies both the internal energy increase and the expansion work.",
                working: "Q = \\Delta U + W_{by} = 800 + 400",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$Q = 1200$ J.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $400$ J. (b) $1200$ J.",
            commonErrors: [
              "Forgetting to convert dm³ to m³ or kPa to Pa — powers of ten errors.",
            ],
          },
        },
        {
          id: "physhl-u2-fl-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "An ideal gas ($n = 2.0$ mol, $C_V = 12.5$ J mol$^{-1}$ K$^{-1}$) is compressed adiabatically. During the compression, 500 J of work is done ON the gas.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the change in internal energy $\\Delta U$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the change in temperature $\\Delta T$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "State the heat exchanged during the process.",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\Delta U$ in J", answer: 500, unit: "J" },
              { label: "(b) $\\Delta T$ in K", answer: 20, unit: "K" },
              { label: "(c) Heat exchanged in J", answer: 0, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Adiabatic first law",
                statement:
                  "$Q = 0$ → $\\Delta U = W_{on}$; $\\Delta U = nC_V\\Delta T$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Adiabatic: $\\Delta U = W_{on} = +500$ J.",
                working: "\\Delta U = 500",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\Delta U = +500$ J.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Use $\\Delta U = nC_V\\Delta T$.",
                working: "\\Delta T = \\frac{500}{2.0 \\times 12.5} = 20",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$\\Delta T = +20$ K — temperature rises on adiabatic compression.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Adiabatic process exchanges no heat: $Q = 0$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $+500$ J. (b) $+20$ K. (c) $0$ J.",
            commonErrors: [
              "Using $C_P$ instead of $C_V$ — internal energy change uses $C_V$.",
            ],
          },
        },
        {
          id: "physhl-u2-fl-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A fixed mass of gas is contained in a rigid (constant-volume) vessel. Heat of 250 J is added to the gas.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the work done BY the gas.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Calculate the change in internal energy $\\Delta U$.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Work done by gas", answer: 0, unit: "J" },
              { label: "(b) $\\Delta U$ in J", answer: 250, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Isochoric first law",
                statement: "$V$ constant → $W = 0$ → $\\Delta U = Q$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "No volume change means no work: $W_{by} = P\\Delta V = 0$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "First law with $W = 0$: $\\Delta U = Q = +250$ J.",
                working: "\\Delta U = 250 - 0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$\\Delta U = +250$ J — all heat raises internal energy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0$ J. (b) $+250$ J.",
            commonErrors: [
              "Saying the gas 'does work' — a rigid vessel prevents any volume change.",
            ],
          },
        },
        {
          id: "physhl-u2-fl-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A gas undergoes a rectangular cycle on a P–V diagram: isobaric expansion at 300 kPa from $0.40$ to $1.40$ dm³, isochoric cooling, isobaric compression at 150 kPa back to the starting volume, then isochoric heating.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the work done BY the gas during the expansion.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the work done BY the gas during the compression.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the net work done over the whole cycle.",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Expansion work", answer: 300, unit: "J" },
              { label: "(b) Compression work", answer: -150, unit: "J" },
              { label: "(c) Net work", answer: 150, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "P–V cycle work",
                statement:
                  "$W_{by} = P\\Delta V$ per isobaric stage; net work = enclosed area.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Expansion at 300 kPa over $\\Delta V = 1.00$ dm³.",
                working: "W = 300 \\times 10^3 \\times 1.00 \\times 10^{-3}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$W = +300$ J.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Compression at 150 kPa with $\\Delta V = -1.00$ dm³.",
                working: "W = 150 \\times 10^3 \\times (-1.00 \\times 10^{-3})",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$W = -150$ J — negative because work is done ON the gas.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Net work = enclosed rectangle area = $(300-150) \\times 10^3 \\times 1.00 \\times 10^{-3} = 150$ J.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $+300$ J. (b) $-150$ J. (c) $+150$ J net.",
            commonErrors: [
              "Taking the compression work as positive — the sign must reflect $\\Delta V < 0$.",
            ],
          },
        },
        {
          id: "physhl-u2-fl-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "A student claims: 'When a gas is heated, all of the heat goes into making the gas expand.' Discuss this statement with reference to the first law of thermodynamics and the four types of thermodynamic process.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "First law",
                statement:
                  "$Q = \\Delta U + W_{by}$ — heat can raise internal energy AND/OR do work, depending on the process.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First law: heat added equals change in internal energy plus work done by gas — not all heat must become work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Isochoric: no expansion possible, so ALL heat raises internal energy ($\\Delta U = Q$).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Isobaric: heat does both — raises $U$ and does $P\\Delta V$ work.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Isothermal: $\\Delta U = 0$ so ALL heat becomes work — the student's claim is only true here.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Adiabatic: no heat at all — work changes $U$ directly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: the claim is false in general; it depends on which quantities are held constant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "False in general — heat partitions between $\\Delta U$ and work depending on the process.",
            commonErrors: [
              "Saying heat 'becomes' expansion — heat can instead raise temperature with no expansion.",
            ],
          },
        },
        {
          id: "physhl-u2-fl-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A fixed mass of ideal gas undergoes two consecutive processes: (i) isothermal expansion at 320 K, during which it absorbs 900 J of heat; (ii) isobaric compression at 120 kPa from $V = 2.0$ dm³ to $V = 1.0$ dm³.",
          parts: [
            {
              label: "a",
              prompt:
                "For stage (i), calculate $\\Delta U$ and the work done BY the gas.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "For stage (ii), calculate the work done BY the gas.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why $\\Delta U = 0$ in stage (i) even though 900 J of heat is absorbed.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Isothermal vs isobaric",
                statement:
                  "Isothermal: $\\Delta U = 0$, $Q = W_{by}$. Isobaric: $W_{by} = P\\Delta V$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$\\Delta U = nC_V\\Delta T = 0$ since $\\Delta T = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "With $\\Delta U = 0$, first law gives $W_{by} = Q = 900$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\Delta U = 0$; $W_{by} = +900$ J.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Compression: $\\Delta V = -1.0$ dm³, $W_{by} = P\\Delta V$.",
                working:
                  "W_{by} = 120 \\times 10^3 \\times (-1.0 \\times 10^{-3})",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$W_{by} = -120$ J — work is done ON the gas.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Ideal gas internal energy depends only on temperature.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Isothermal → temperature constant → $\\Delta T = 0$ → $\\Delta U = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The 900 J of heat is entirely converted to expansion work — energy is conserved via the first law.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\Delta U = 0$, $W_{by} = 900$ J. (b) $-120$ J. (c) $U$ depends only on $T$ for an ideal gas.",
            commonErrors: [
              "Thinking absorbed heat must raise temperature — in an isothermal process heat becomes work.",
            ],
          },
        },
      ],
    },
    {
      id: "physhl-u2-processes",
      title: "The four thermodynamic processes",
      skill:
        "Analyse isothermal, isobaric, isochoric and adiabatic processes using the first law, and compare their P–V diagram representations.",
      lesson: {
        sections: [
          {
            heading: "Isothermal ($T$ = constant)",
            body: "Slow processes where the system stays in thermal equilibrium with surroundings. For an ideal gas $\\Delta U = 0$ → $Q = W_{by}$. On a P–V diagram follows $PV = nRT$ = constant (hyperbola). Heat absorbed = work done by gas.",
          },
          {
            heading: "Isobaric ($P$ = constant)",
            body: "Expansion/compression at constant pressure. Work $W = P\\Delta V$. Heat changes both internal energy and does work: $Q = \\Delta U + P\\Delta V$. On P–V diagram a horizontal line.",
          },
          {
            heading: "Isochoric and adiabatic",
            body: "**Isochoric** ($V$ constant): vertical line on P–V; $W = 0$, $\\Delta U = Q$. **Adiabatic** ($Q = 0$): no heat exchange — rapid compression heats gas (work done on it), rapid expansion cools it (work done by it). Adiabatic curve is steeper than isothermal on P–V diagram. Relation: $PV^\\gamma = $ constant, where $\\gamma = C_P/C_V$.",
          },
        ],
        keyFormulas: [
          {
            name: "Isothermal",
            statement: "$\\Delta U = 0$, $Q = W_{by}$; $PV = $ const.",
          },
          {
            name: "Isobaric",
            statement: "$W = P\\Delta V$; $Q = \\Delta U + P\\Delta V$.",
          },
          { name: "Isochoric", statement: "$W = 0$; $\\Delta U = Q$." },
          {
            name: "Adiabatic",
            statement: "$Q = 0$; $\\Delta U = W_{on}$; $PV^\\gamma = $ const.",
          },
        ],
        workedExample: {
          problem:
            "Classify: (a) slow expansion in thermal contact with large heat bath; (b) quick compression in insulated cylinder; (c) heating gas in sealed rigid container.",
          solution: "(a) Isothermal. (b) Adiabatic. (c) Isochoric.",
        },
      },
      questions: [
        {
          id: "physhl-u2-proc-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In an adiabatic process, which quantity is zero?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heat exchange $Q$" },
              { id: "b", text: "Work done $W$" },
              { id: "c", text: "Change in internal energy $\\Delta U$" },
              { id: "d", text: "Temperature change $\\Delta T$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adiabatic",
                statement: "No heat exchange: $Q = 0$, so $\\Delta U = W$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Adiabatic means perfectly insulated — no heat flow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $Q = 0$",
            commonErrors: [
              "Thinking adiabatic means no work — work is done, just no heat.",
            ],
          },
        },
        {
          id: "physhl-u2-proc-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why an adiabatic compression causes the temperature of a gas to rise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adiabatic heating",
                statement:
                  "$Q=0$ → $\\Delta U = W_{on}$; compression does positive work on gas → $U$ and $T$ rise.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Adiabatic: $Q = 0$ → first law gives $\\Delta U = W_{on}$.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Compression: work done ON gas is positive → $\\Delta U > 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For ideal gas $U$ depends on $T$ → temperature rises.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Work done on gas increases internal energy → temperature rises.",
            commonErrors: [
              "Saying 'heat is generated' — no heat flow in adiabatic; work converts to internal energy.",
            ],
          },
        },
        {
          id: "physhl-u2-proc-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A gas expands adiabatically and does 600 J of work. (a) What is $\\Delta U$? (b) Does the temperature rise or fall? (c) If the same gas instead expanded isothermally doing 600 J of work, what would $\\Delta U$ be?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adiabatic vs isothermal",
                statement:
                  "Adiabatic: work changes U and T; isothermal: $\\Delta U = 0$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Adiabatic: $Q = 0$ → $\\Delta U = -W_{by} = -600$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) $\\Delta U < 0$ → temperature falls.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "(c) Isothermal: $\\Delta U = 0$ regardless of work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Key difference: adiabatic expansion cools; isothermal stays same T.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "(a) −600 J. (b) Temperature falls. (c) 0 J.",
            commonErrors: [
              "Thinking work done by gas increases U — expansion decreases U.",
            ],
          },
        },
        {
          id: "physhl-u2-proc-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A fixed mass of ideal gas undergoes the following cycle: (1) isobaric expansion at 150 kPa from 1.0 to 3.0 dm³; (2) adiabatic expansion back to original pressure; (3) isochoric cooling; (4) isobaric compression at lower pressure.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the process type for each stage and state what is constant.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "For stage 1, calculate the work done by the gas.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain which stages involve heat flow and which do not.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Process identification",
                statement:
                  "Each process defined by which variable is held constant.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "(1) Isobaric — P constant at 150 kPa.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "(2) Adiabatic — Q = 0, rapid expansion.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "(3) Isochoric — V constant during cooling.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "(4) Isobaric — P constant during compression.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$W = P\\Delta V = 150 \\times 10^3 \\times (3.0-1.0)\\times10^{-3} = 300$ J.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "$W = 300$ J.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning:
                  "Stages 1, 3, 4 involve heat flow (isobaric/isochoric are not insulated).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Stage 2 (adiabatic) has no heat flow — $Q = 0$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Isobaric/adiabatic/isochoric/isobaric. (b) 300 J. (c) Only stage 2 has Q=0.",
            commonErrors: [
              "Saying adiabatic means 'fast' only — it specifically means no heat exchange.",
            ],
          },
        },
        {
          id: "physhl-u2-proc-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "On a P–V diagram, an isobaric process is represented by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A horizontal line" },
              { id: "b", text: "A vertical line" },
              { id: "c", text: "A rectangular hyperbola" },
              { id: "d", text: "A steep curve" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Isobaric process",
                statement:
                  "Constant pressure $P$ → horizontal line on a P–V diagram.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Isobaric means constant pressure; on a P–V diagram P is the vertical axis, so constant P is a horizontal line.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** A horizontal line",
            commonErrors: [
              "Choosing vertical — that would be constant volume (isochoric).",
            ],
          },
        },
        {
          id: "physhl-u2-proc-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For an isochoric process involving an ideal gas, which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$W = 0$ and $\\Delta U = Q$" },
              { id: "b", text: "$\\Delta U = 0$ and $Q = W$" },
              { id: "c", text: "$Q = 0$ and $\\Delta U = W$" },
              { id: "d", text: "$W = P\\Delta V$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Isochoric first law",
                statement:
                  "$V$ constant → $\\Delta V = 0$ → $W = 0$ → $\\Delta U = Q$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Constant volume means no expansion or compression, so no work is done and all heat changes internal energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $W = 0$ and $\\Delta U = Q$",
            commonErrors: [
              "Choosing $\\Delta U = 0$ — that applies to isothermal, not isochoric.",
            ],
          },
        },
        {
          id: "physhl-u2-proc-q7",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Compared with an isothermal curve on a P–V diagram passing through the same point, an adiabatic curve is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Steeper" },
              { id: "b", text: "Shallower" },
              { id: "c", text: "Identical" },
              { id: "d", text: "Horizontal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Adiabatic vs isothermal",
                statement:
                  "Adiabatic: $PV^\\gamma = $ const with $\\gamma > 1$; isothermal: $PV = $ const. Larger exponent → steeper curve.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Adiabatic relation $PV^\\gamma = $ const has $\\gamma = C_P/C_V > 1$, so pressure changes more rapidly with volume than in $PV = $ const.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Steeper",
            commonErrors: [
              "Thinking adiabatic and isothermal curves coincide — they only share the initial point.",
            ],
          },
        },
        {
          id: "physhl-u2-proc-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For a monatomic ideal gas, the ratio $\\gamma = C_P/C_V$ is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5/3 \\approx 1.67$" },
              { id: "b", text: "$7/5 = 1.40$" },
              { id: "c", text: "$4/3 \\approx 1.33$" },
              { id: "d", text: "$1.00$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Heat capacity ratio",
                statement:
                  "Monatomic gas: $C_V = \\frac{3}{2}R$, $C_P = \\frac{5}{2}R$ → $\\gamma = 5/3$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For a monatomic gas only translational kinetic energy contributes: $C_V = \\frac{3}{2}R$ and $C_P = C_V + R = \\frac{5}{2}R$, giving $\\gamma = 5/3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $5/3 \\approx 1.67$",
            commonErrors: [
              "Choosing $7/5$ — that is the value for a diatomic gas.",
            ],
          },
        },
        {
          id: "physhl-u2-proc-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "During the isothermal expansion of an ideal gas, which quantities remain constant?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature $T$ and internal energy $U$" },
              { id: "b", text: "Pressure $P$ and volume $V$" },
              { id: "c", text: "Heat supplied $Q$" },
              { id: "d", text: "Work done $W$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Ideal gas internal energy",
                statement:
                  "$U$ depends only on $T$; isothermal → $\\Delta T = 0$ → $\\Delta U = 0$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Isothermal fixes $T$, and for an ideal gas $U = f(T)$ only, so $U$ is also constant even though $P$, $V$, $Q$ and $W$ all change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $T$ and $U$",
            commonErrors: [
              "Choosing $P$ and $V$ — both change; only their product $PV = nRT$ stays constant.",
            ],
          },
        },
        {
          id: "physhl-u2-proc-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "When an ideal gas expands adiabatically, its temperature:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Falls, because the gas does work using its internal energy" },
              { id: "b", text: "Rises, because expansion creates heat" },
              { id: "c", text: "Stays constant" },
              { id: "d", text: "Rises, because heat flows in" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adiabatic expansion",
                statement:
                  "$Q = 0$ → $\\Delta U = -W_{by}$; expansion does work at the expense of internal energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "With $Q = 0$, work done BY the gas comes from internal energy: $\\Delta U < 0$, so $T$ falls.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Falls — work is done using internal energy",
            commonErrors: [
              "Thinking expansion releases heat — no heat flows in an adiabatic process.",
            ],
          },
        },
        {
          id: "physhl-u2-proc-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "An ideal gas expands isobarically at $P = 150$ kPa from $V = 2.0$ dm³ to $V = 4.0$ dm³. Its internal energy increases by 900 J during the expansion.",
          parts: [
            { label: "a", prompt: "Calculate the work done BY the gas.", marks: 2 },
            { label: "b", prompt: "Calculate the heat supplied to the gas.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Work done by gas", answer: 300, unit: "J" },
              { label: "(b) Heat supplied", answer: 1200, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Isobaric first law",
                statement: "$W_{by} = P\\Delta V$; $Q = \\Delta U + W_{by}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Use $W_{by} = P\\Delta V$ with $\\Delta V = 2.0$ dm³ $= 2.0 \\times 10^{-3}$ m³.",
                working: "W_{by} = 150 \\times 10^3 \\times 2.0 \\times 10^{-3}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$W_{by} = 300$ J.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Heat supplies both the internal energy increase and the expansion work.",
                working: "Q = \\Delta U + W_{by} = 900 + 300",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$Q = 1200$ J.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $300$ J. (b) $1200$ J.",
            commonErrors: [
              "Forgetting to convert dm³ to m³ — powers-of-ten errors are common.",
            ],
          },
        },
        {
          id: "physhl-u2-proc-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A fixed mass of ideal gas ($n = 2.0$ mol, $C_V = 12.5$ J mol$^{-1}$ K$^{-1}$) is heated in a rigid container by 500 J of heat.",
          parts: [
            { label: "a", prompt: "Calculate the work done BY the gas.", marks: 1 },
            { label: "b", prompt: "Calculate the change in internal energy $\\Delta U$.", marks: 1 },
            { label: "c", prompt: "Calculate the change in temperature $\\Delta T$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Work done by gas", answer: 0, unit: "J" },
              { label: "(b) $\\Delta U$ in J", answer: 500, unit: "J" },
              { label: "(c) $\\Delta T$ in K", answer: 20, unit: "K" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Isochoric process",
                statement:
                  "$V$ constant → $W = 0$ → $\\Delta U = Q = nC_V\\Delta T$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Rigid container: $\\Delta V = 0$ so $W_{by} = P\\Delta V = 0$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\Delta U = Q = +500$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Apply $\\Delta U = nC_V\\Delta T$.",
                working: "\\Delta T = \\frac{500}{2.0 \\times 12.5} = 20",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\Delta T = +20$ K.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0$ J. (b) $+500$ J. (c) $+20$ K.",
            commonErrors: [
              "Using $C_P$ instead of $C_V$ — internal energy change uses $C_V$.",
            ],
          },
        },
        {
          id: "physhl-u2-proc-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "An ideal gas ($n = 4.0$ mol, $C_V = 12.5$ J mol$^{-1}$ K$^{-1}$) is compressed adiabatically. During the compression, 800 J of work is done ON the gas.",
          parts: [
            { label: "a", prompt: "Calculate the change in internal energy $\\Delta U$.", marks: 2 },
            { label: "b", prompt: "Calculate the change in temperature $\\Delta T$.", marks: 2 },
            { label: "c", prompt: "State the heat exchanged during the process.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\Delta U$ in J", answer: 800, unit: "J" },
              { label: "(b) $\\Delta T$ in K", answer: 16, unit: "K" },
              { label: "(c) Heat exchanged in J", answer: 0, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Adiabatic first law",
                statement:
                  "$Q = 0$ → $\\Delta U = W_{on}$; $\\Delta U = nC_V\\Delta T$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Adiabatic: $Q = 0$ so $\\Delta U = W_{on} = +800$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\Delta U = +800$ J.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Use $\\Delta U = nC_V\\Delta T$.",
                working: "\\Delta T = \\frac{800}{4.0 \\times 12.5} = 16",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\Delta T = +16$ K — temperature rises on compression.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Adiabatic process exchanges no heat: $Q = 0$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $+800$ J. (b) $+16$ K. (c) $0$ J.",
            commonErrors: [
              "Thinking adiabatic compression 'adds heat' — work done on the gas raises its internal energy directly.",
            ],
          },
        },
        {
          id: "physhl-u2-proc-q14",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 3,
          stem: "An ideal gas expands isothermally, absorbing 600 J of heat from its surroundings. Calculate the work done BY the gas.",
          response: {
            type: "numeric",
            parts: [{ label: "Work done by gas", answer: 600, unit: "J" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Isothermal first law",
                statement: "$\\Delta T = 0$ → $\\Delta U = 0$ → $Q = W_{by}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Isothermal: $\\Delta U = nC_V\\Delta T = 0$ since temperature is constant.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "First law then gives $Q = W_{by}$ — all absorbed heat becomes expansion work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$W_{by} = 600$ J.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$W_{by} = 600$ J",
            commonErrors: [
              "Subtracting heat — in an isothermal expansion all the heat becomes work.",
            ],
          },
        },
        {
          id: "physhl-u2-proc-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A fixed mass of ideal gas ($\\gamma = 1.4$) is compressed adiabatically from $P_1 = 200$ kPa, $V_1 = 1.0$ dm³ to $V_2 = 0.50$ dm³. Use the adiabatic relation $PV^\\gamma = $ constant.",
          response: {
            type: "numeric",
            parts: [
              { label: "Final pressure $P_2$", answer: 528, tolerance: 1, unit: "kPa" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Adiabatic relation",
                statement: "$P_1V_1^\\gamma = P_2V_2^\\gamma$ (quasi-static adiabatic).",
              },
            ],
            steps: [
              {
                reasoning:
                  "For a quasi-static adiabatic process $PV^\\gamma$ is constant, so $P_2 = P_1(V_1/V_2)^\\gamma$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute the values.",
                working:
                  "P_2 = 200 \\times \\left(\\frac{1.0}{0.50}\\right)^{1.4} = 200 \\times 2^{1.4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P_2 = 200 \\times 2.64 = 527.8$ kPa $\\approx 528$ kPa.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Pressure more than doubles because the volume halves and $\\gamma > 1$ — adiabatic pressure changes are amplified compared with isothermal ($PV = $ const would give 400 kPa).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$P_2 \\approx 528$ kPa",
            commonErrors: [
              "Using $\\gamma = 1$ (isothermal) — adiabatic compression raises pressure much more steeply.",
            ],
          },
        },
        {
          id: "physhl-u2-proc-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A fixed mass of ideal gas undergoes a four-stage cycle: (i) isothermal expansion at 400 K absorbing 1000 J of heat; (ii) isochoric pressure rise; (iii) isothermal compression rejecting heat; (iv) isochoric return to the initial state.",
          parts: [
            { label: "a", prompt: "For stage (i), state the constant quantity and calculate $\\Delta U$.", marks: 3 },
            { label: "b", prompt: "For stage (i), calculate the work done BY the gas.", marks: 2 },
            { label: "c", prompt: "Explain why the net $\\Delta U$ over the complete cycle is zero.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cycle and state functions",
                statement:
                  "Internal energy is a state function — over any complete cycle $\\Delta U_{total} = 0$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Stage (i) is isothermal, so temperature $T$ is constant throughout.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$\\Delta U = nC_V\\Delta T = 0$ because $\\Delta T = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\Delta U = 0$ J.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "With $\\Delta U = 0$, the first law gives $Q = W_{by}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$W_{by} = 1000$ J.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The gas returns to its initial state after stage (iv).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Internal energy depends only on state (for an ideal gas, only on $T$), not on the path taken.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Initial and final states are identical → net $\\Delta U = 0$ over the cycle.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $T$ constant, $\\Delta U = 0$. (b) $1000$ J. (c) State function returns to initial state → net $\\Delta U = 0$.",
            commonErrors: [
              "Thinking internal energy accumulates over a cycle — it is a state function.",
            ],
          },
        },
      ],
    },
  ],
};
