import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "physsl-u5-lesson-5-3",
  code: "5-3",
  title: "Transformers and Alternating Current",
  goal: "I CAN explain how transformers change voltage and current using electromagnetic induction, and describe alternating current, rms values and its use in power transmission.",
  standards: ["Topic 5.5", "Topic 5.6", "Paper 1", "Paper 2 Section A"],
  vocabulary: [
    {
      term: "Alternating current (a.c.)",
      definition:
        "A current whose direction reverses periodically; mains electricity in most countries has frequency $50$ or $60$ Hz.",
    },
    {
      term: "Transformer",
      definition:
        "A device of two coils on a shared iron core that changes the amplitude of an a.c. voltage using electromagnetic induction.",
    },
    {
      term: "Primary and secondary coils",
      definition:
        "The input coil (primary) and output coil (secondary) of a transformer, with $N_p$ and $N_s$ turns respectively.",
    },
    {
      term: "Step-up and step-down transformer",
      definition:
        "A transformer that increases the voltage (more secondary turns) or decreases it (fewer secondary turns).",
    },
    {
      term: "r.m.s. value",
      definition:
        "The root-mean-square value of an a.c.; the d.c. value that would dissipate the same power, $V_{\\text{rms}} = V_0/\\sqrt{2}$ for a sinusoidal supply.",
    },
    {
      term: "Power transmission",
      definition:
        "The transfer of electrical energy at high voltage so that current (and hence $I^2R$ losses) is reduced.",
    },
  ],
  concepts: [
    {
      id: "physsl-u5-transformers",
      title: "Transformers",
      skill:
        "Use $V_s/V_p = N_s/N_p$ and $I_s/I_p = N_p/N_s$ for ideal transformers and explain efficiency losses.",
      lesson: {
        sections: [
          {
            heading: "How a transformer works",
            body: "An alternating current in the **primary coil** produces a changing magnetic flux in the iron core. By Faraday's law this induces an e.m.f. in the **secondary coil**. For an **ideal transformer** (no losses) the ratio of voltages equals the ratio of turns: $V_s/V_p = N_s/N_p$. Since power is conserved, $V_pI_p = V_sI_s$, so $I_s/I_p = N_p/N_s$ — a step-up in voltage is a step-down in current.",
          },
          {
            heading: "Step-up and step-down",
            body: "A transformer with more secondary than primary turns is a **step-up** transformer (used at power stations to raise the voltage for transmission). One with fewer secondary turns is a **step-down** transformer (used to reduce the mains voltage for domestic use). Transformers cannot work with d.c. because a steady current produces no changing flux, so no e.m.f. is induced.",
          },
          {
            heading: "Real transformers and losses",
            body: "Real transformers are not 100% efficient. Energy is lost as heat through the **resistance of the windings**, **eddy currents** induced in the iron core (reduced by laminating the core), and **magnetic flux leakage** where not all flux links both coils. Efficiency $= (V_sI_s)/(V_pI_p) \\times 100\\%$ is typically above $95\\%$ for large transformers.",
          },
        ],
        keyFormulas: [
          { name: "Voltage ratio", statement: "V_s/V_p = N_s/N_p" },
          { name: "Current ratio", statement: "I_s/I_p = N_p/N_s" },
          { name: "Efficiency", statement: "efficiency = V_sI_s / V_pI_p" },
        ],
        workedExample: {
          problem:
            "An ideal transformer has $200$ primary turns and $50$ secondary turns. The primary is connected to a $240$ V supply and draws $2.0$ A. Find the secondary voltage and current.",
          solution:
            "$V_s = V_p \\times N_s/N_p = 240 \\times 50/200 = 60$ V. Current $I_s = I_p \\times N_p/N_s = 2.0 \\times 200/50 = 8.0$ A.",
        },
      },
      questions: [
        {
          id: "physsl-u5-transformers-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "A step-up transformer has more turns on the secondary coil than on the primary coil. What happens to the voltage and current?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Voltage decreases; current increases" },
              { id: "b", text: "Both voltage and current stay the same" },
              { id: "c", text: "Both voltage and current increase" },
              { id: "d", text: "Voltage increases; current decreases" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Transformer ratios",
                statement:
                  "V_s/V_p = N_s/N_p and, for an ideal transformer, V_pI_p = V_sI_s.",
              },
            ],
            steps: [
              {
                reasoning:
                  "More secondary turns raises the voltage; conservation of power then lowers the current.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** voltage increases; current decreases",
            commonErrors: [
              "Thinking a transformer can increase both voltage and current.",
            ],
          },
        },
        {
          id: "physsl-u5-transformers-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An ideal transformer has $100$ primary turns and $400$ secondary turns. The primary is connected to a $12$ V supply. Calculate the secondary voltage.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3.0$ V" },
              { id: "b", text: "$48$ V" },
              { id: "c", text: "$24$ V" },
              { id: "d", text: "$12$ V" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Voltage ratio",
                statement: "V_s = V_p \\times N_s/N_p",
              },
            ],
            steps: [
              {
                reasoning: "Apply the turns ratio.",
                working: "V_s = 12 \\times \\frac{400}{100} = 12 \\times 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "V_s = 48 \\text{ V}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $48$ V",
            commonErrors: ["Inverting the turns ratio to get $3.0$ V."],
          },
        },
        {
          id: "physsl-u5-transformers-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An ideal transformer has $200$ primary turns and $50$ secondary turns. The primary is connected to a $240$ V supply and carries a current of $2.0$ A.",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Secondary voltage $960$ V; secondary current $8.0$ A",
              },
              {
                id: "b",
                text: "Secondary voltage $60$ V; secondary current $8.0$ A",
              },
              {
                id: "c",
                text: "Secondary voltage $60$ V; secondary current $0.50$ A",
              },
              {
                id: "d",
                text: "Secondary voltage $960$ V; secondary current $0.50$ A",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Voltage ratio",
                statement: "V_s/V_p = N_s/N_p",
              },
              {
                kind: "formula",
                name: "Power conservation",
                statement: "V_pI_p = V_sI_s",
              },
            ],
            steps: [
              {
                reasoning: "Secondary voltage from the turns ratio.",
                working: "V_s = 240 \\times \\frac{50}{200} = 60 \\text{ V}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Secondary current from power conservation, $I_s = V_pI_p/V_s$.",
                working: "I_s = \\frac{240 \\times 2.0}{60}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "I_s = 8.0 \\text{ A}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Equivalently $I_s = I_p \\times N_p/N_s = 2.0 \\times 4 = 8.0$ A; option (a) is consistent.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "**(a)** secondary voltage $60$ V; secondary current $8.0$ A",
            commonErrors: [
              "Inverting the current ratio.",
              "Using the turns ratio directly on the current without accounting for power conservation.",
            ],
          },
        },
        {
          id: "physsl-u5-transformers-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "An ideal transformer has $800$ turns on the primary coil and $40$ turns on the secondary coil. The primary is connected to a $240$ V a.c. supply and draws a current of $0.50$ A.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the secondary voltage.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the secondary current.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "State two reasons why a real transformer of this type is less than $100\\%$ efficient.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why electricity is transmitted at high voltage using step-up transformers.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Voltage ratio",
                statement: "V_s/V_p = N_s/N_p",
              },
              {
                kind: "formula",
                name: "Current ratio",
                statement: "I_s/I_p = N_p/N_s (ideal)",
              },
              {
                kind: "principle",
                name: "Transmission losses",
                statement:
                  "Power loss in cables is I^2R; higher voltage means lower current for the same power.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Apply the turns ratio.",
                working: "V_s = 240 \\times \\frac{40}{800} = 240 \\times 0.05",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "V_s = 12 \\text{ V}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Secondary current from $I_s = I_p N_p/N_s$.",
                working: "I_s = 0.50 \\times \\frac{800}{40} = 0.50 \\times 20",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evaluate (equivalently $P = V_pI_p = 120$ W, $I_s = P/V_s = 120/12 = 10$ A).",
                working: "I_s = 10 \\text{ A}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Any two of: ohmic heating in the windings, eddy currents in the core, magnetic flux leakage.",
                working: "\\text{eddy currents; winding resistance}",
                marks: 2,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "For a given power $P = VI$, stepping the voltage up reduces the current in the transmission cables.",
                working: "I = P/V \\Rightarrow I \\downarrow",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Lower current reduces the $I^2R$ heat loss in the cables, so more power reaches the consumer.",
                working: "\\text{loss} = I^2R \\downarrow",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) $V_s = 12$ V (b) $I_s = 10$ A (c) e.g. eddy currents in the core and resistance of the windings (d) high voltage means low current, so $I^2R$ transmission losses are small",
            commonErrors: [
              "Applying the voltage ratio to the current.",
              "Claiming transformers increase power; they only change the voltage–current balance.",
            ],
          },
        },
        {
          id: "physsl-u5-transformers-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Why does a transformer not work with a steady d.c. supply?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "d.c. damages the primary winding" },
              { id: "b", text: "a steady current produces no changing magnetic flux, so no e.m.f. is induced in the secondary" },
              { id: "c", text: "the iron core saturates at d.c. voltages" },
              { id: "d", text: "d.c. has too low a voltage" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Faraday's law",
                statement:
                  "An e.m.f. is induced only when the magnetic flux linkage changes; d.c. gives constant flux.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A steady primary current produces a constant flux in the core, so $\\Delta\\Phi/\\Delta t = 0$ and nothing is induced in the secondary.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(b)** a steady current produces no changing magnetic flux, so no e.m.f. is induced in the secondary",
            commonErrors: [
              "Thinking transformers fail with d.c. because of voltage level rather than the absence of changing flux.",
            ],
          },
        },
        {
          id: "physsl-u5-transformers-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An ideal transformer has $500$ primary turns and $100$ secondary turns. The primary is connected to a $240$ V supply. Calculate the secondary voltage.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$240$ V" },
              { id: "b", text: "$12$ V" },
              { id: "c", text: "$1200$ V" },
              { id: "d", text: "$48$ V" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Voltage ratio",
                statement: "V_s = V_p \\times N_s/N_p",
              },
            ],
            steps: [
              {
                reasoning: "Apply the turns ratio.",
                working: "V_s = 240 \\times \\frac{100}{500} = 240 \\times 0.2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "V_s = 48 \\text{ V}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $48$ V",
            commonErrors: ["Inverting the turns ratio to get $1200$ V."],
          },
        },
        {
          id: "physsl-u5-transformers-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "An ideal step-up transformer has $200$ primary turns and $800$ secondary turns. The primary is connected to a $50$ V supply and draws a current of $2.0$ A. Calculate the secondary voltage and the secondary current.",
          response: {
            type: "numeric",
            parts: [
              { label: "Secondary voltage", answer: 200, unit: "V" },
              { label: "Secondary current", answer: 0.5, unit: "A" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Voltage ratio",
                statement: "V_s/V_p = N_s/N_p",
              },
              {
                kind: "formula",
                name: "Power conservation",
                statement: "V_pI_p = V_sI_s for an ideal transformer",
              },
            ],
            steps: [
              {
                reasoning: "Apply the turns ratio for voltage.",
                working: "V_s = 50 \\times \\frac{800}{200} = 200 \\text{ V}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the voltage.",
                working: "V_s = 200 \\text{ V}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Secondary current from power conservation: $I_s = V_pI_p/V_s$ (or $I_s = I_p N_p/N_s$).",
                working: "I_s = \\frac{50 \\times 2.0}{200} = 0.50 \\text{ A}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the current.",
                working: "I_s = 0.50 \\text{ A}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Secondary voltage $= 200$ V; secondary current $= 0.50$ A",
            commonErrors: [
              "Applying the voltage ratio to the current in the wrong direction.",
            ],
          },
        },
        {
          id: "physsl-u5-transformers-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An ideal transformer steps a $240$ V supply down to $12$ V. The primary current is $0.50$ A. Calculate the secondary current.",
          response: {
            type: "numeric",
            parts: [
              { label: "Secondary current", answer: 10, unit: "A" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Power conservation",
                statement: "V_pI_p = V_sI_s for an ideal transformer",
              },
            ],
            steps: [
              {
                reasoning: "Input power equals output power: $I_s = V_pI_p/V_s$.",
                working: "I_s = \\frac{240 \\times 0.50}{12}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "I_s = 10 \\text{ A}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Secondary current $= 10$ A",
            commonErrors: ["Assuming the current stays the same in a step-down transformer."],
          },
        },
        {
          id: "physsl-u5-transformers-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A real transformer has an input of $240$ V at $1.0$ A and an output of $48$ V at $4.5$ A. Calculate its efficiency.",
          response: {
            type: "numeric",
            parts: [
              { label: "Efficiency", answer: 90, tolerance: 0.5, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Efficiency",
                statement: "efficiency = V_sI_s / V_pI_p \\times 100\\%",
              },
            ],
            steps: [
              {
                reasoning: "Input power.",
                working: "P_p = 240 \\times 1.0 = 240 \\text{ W}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Output power.",
                working: "P_s = 48 \\times 4.5 = 216 \\text{ W}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Form the ratio and convert to a percentage.",
                working: "\\text{efficiency} = \\frac{216}{240} \\times 100\\% = 90\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the efficiency.",
                working: "\\eta = 90\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Efficiency $= 90\\%$",
            commonErrors: ["Dividing output voltage by input voltage instead of powers.", "Forgetting to multiply by $100\\%$."],
          },
        },
        {
          id: "physsl-u5-transformers-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Eddy currents in the iron core of a transformer are reduced by",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "using a laminated (layered) core" },
              { id: "b", text: "lowering the frequency of the supply" },
              { id: "c", text: "increasing the number of turns on both coils" },
              { id: "d", text: "using thicker connecting wires" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Eddy currents",
                statement:
                  "Laminating the core breaks up the eddy-current paths, reducing resistive heating losses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thin insulated laminations prevent large circulating currents from forming in the core.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Option (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** using a laminated (layered) core",
            commonErrors: [
              "Thinking eddy currents are reduced by changing the number of turns.",
            ],
          },
        },
        {
          id: "physsl-u5-transformers-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which energy loss in a transformer is NOT reduced by laminating the iron core?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hysteresis losses in the core" },
              { id: "b", text: "Eddy current heating in the core" },
              { id: "c", text: "Ohmic heating in the windings" },
              { id: "d", text: "Magnetic flux leakage" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Transformer losses",
                statement:
                  "Laminations reduce eddy currents; winding losses come from the resistance of the coils themselves.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Winding resistance causes $I^2R$ heating regardless of core construction; laminations only affect core losses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ohmic heating in the windings is the loss not addressed by laminating; option (c).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** ohmic heating in the windings",
            commonErrors: [
              "Believing laminations eliminate all transformer losses.",
            ],
          },
        },
        {
          id: "physsl-u5-transformers-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "An ideal step-down transformer has $4000$ primary turns and $200$ secondary turns. The primary is connected to an $11$ kV supply.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the secondary voltage.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "The transformer delivers an output power of $2.2$ kW. Calculate the secondary current.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the primary current.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "State two reasons why a real transformer of this type is less than $100\\%$ efficient.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Voltage ratio",
                statement: "V_s/V_p = N_s/N_p",
              },
              {
                kind: "formula",
                name: "Power conservation",
                statement: "V_pI_p = V_sI_s (ideal)",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Apply the turns ratio.",
                working: "V_s = 11000 \\times \\frac{200}{4000} = 11000 \\times 0.05",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "V_s = 550 \\text{ V}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Secondary current is output power divided by secondary voltage.",
                working: "I_s = \\frac{2200}{550} = 4.0 \\text{ A}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "For an ideal transformer the input power equals the output power: $I_p = P/V_p$.",
                working: "I_p = \\frac{2200}{11000} = 0.20 \\text{ A}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Any two of: ohmic heating in the windings, eddy currents in the core, magnetic flux leakage, hysteresis losses.",
                working: "\\text{e.g. eddy currents; winding resistance}",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $V_s = 550$ V (b) $I_s = 4.0$ A (c) $I_p = 0.20$ A (d) e.g. eddy currents in the core and resistance of the windings",
            commonErrors: [
              "Forgetting to convert kV to V before applying the ratio.",
              "Using the voltage ratio on the current.",
            ],
          },
        },
        {
          id: "physsl-u5-transformers-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A transformer is $95\\%$ efficient. Its primary is connected to a $200$ V supply drawing $0.80$ A. The secondary voltage is $20$ V. Calculate the current delivered by the secondary.",
          response: {
            type: "numeric",
            parts: [
              { label: "Secondary current", answer: 7.6, unit: "A" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Efficiency",
                statement: "P_s = 0.95 \\times P_p; \\ P_s = V_sI_s",
              },
            ],
            steps: [
              {
                reasoning: "Input power.",
                working: "P_p = 200 \\times 0.80 = 160 \\text{ W}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Output power is $95\\%$ of the input.",
                working: "P_s = 0.95 \\times 160 = 152 \\text{ W}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Secondary current is $I_s = P_s/V_s$.",
                working: "I_s = \\frac{152}{20}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "I_s = 7.6 \\text{ A}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Secondary current $= 7.6$ A",
            commonErrors: [
              "Assuming the transformer is ideal and ignoring the $95\\%$ efficiency.",
            ],
          },
        },
        {
          id: "physsl-u5-transformers-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A transformer has a turns ratio $N_s/N_p = 0.25$. If the primary voltage is $400$ V, what is the secondary voltage?",
          response: {
            type: "numeric",
            parts: [
              { label: "Secondary voltage", answer: 100, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Voltage ratio",
                statement: "V_s = V_p \\times N_s/N_p",
              },
            ],
            steps: [
              {
                reasoning: "Apply the turns ratio directly.",
                working: "V_s = 400 \\times 0.25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "V_s = 100 \\text{ V}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Secondary voltage $= 100$ V",
            commonErrors: ["Dividing by $0.25$ instead of multiplying."],
          },
        },
        {
          id: "physsl-u5-transformers-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Two ideal transformers are each connected to a $12$ V supply. Transformer A has $100$ primary and $500$ secondary turns; transformer B has $200$ primary and $800$ secondary turns. Which transformer has the larger step-up ratio, and what is the secondary voltage of each?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are equal, both giving $V_s = 54$ V" },
              { id: "b", text: "B, with $V_s = 48$ V; A with $V_s = 60$ V" },
              { id: "c", text: "A, with $V_s = 60$ V; B with $V_s = 48$ V" },
              { id: "d", text: "A, with $V_s = 12$ V; B with $V_s = 6.0$ V" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Voltage ratio",
                statement: "V_s = V_p \\times N_s/N_p",
              },
            ],
            steps: [
              {
                reasoning: "Transformer A ratio: $500/100 = 5$; transformer B ratio: $800/200 = 4$.",
                working: "\\frac{N_s}{N_p} = 5 \\text{ for A}; \\ 4 \\text{ for B}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Secondary voltages: $V_{sA} = 12 \\times 5 = 60$ V; $V_{sB} = 12 \\times 4 = 48$ V.",
                working: "V_{sA} = 60 \\text{ V}; \\ V_{sB} = 48 \\text{ V}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Transformer A has the larger step-up ratio.",
                working: "5 > 4 \\Rightarrow A",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Option (a) matches.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** A has the larger ratio; $V_{sA} = 60$ V and $V_{sB} = 48$ V",
            commonErrors: [
              "Comparing the number of turns instead of the turns ratio.",
            ],
          },
        },
        {
          id: "physsl-u5-transformers-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A power station delivers $200$ MW of electrical power at $25$ kV. A step-up transformer raises the voltage to $250$ kV for transmission along cables of total resistance $20\\,\\Omega$.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the turns ratio $N_s/N_p$ of the step-up transformer.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the current in the transmission cables at $25$ kV and at $250$ kV.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate the power loss in the cables ($I^2R$) in each case.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why transmitting at high voltage reduces energy losses.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Explain why alternating current, rather than direct current, is used with transformers.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Voltage ratio",
                statement: "V_s/V_p = N_s/N_p",
              },
              {
                kind: "formula",
                name: "Power",
                statement: "P = VI",
              },
              {
                kind: "formula",
                name: "Cable loss",
                statement: "P_{loss} = I^2R",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Turns ratio equals the voltage ratio.",
                working: "\\frac{N_s}{N_p} = \\frac{250}{25} = 10",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Current at each voltage for the same power.",
                working: "I_{25} = \\frac{200 \\times 10^6}{25 \\times 10^3} = 8.0 \\times 10^3 \\text{ A}; \\ I_{250} = \\frac{200 \\times 10^6}{250 \\times 10^3} = 800 \\text{ A}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Apply $P_{loss} = I^2R$ at each current.",
                working: "P_{25} = (8.0 \\times 10^3)^2 \\times 20 = 1.28 \\times 10^9 \\text{ W}; \\ P_{250} = 800^2 \\times 20 = 1.28 \\times 10^7 \\text{ W}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "For fixed power $P = VI$, higher voltage means lower current; since cable loss is $I^2R$, a tenfold reduction in current gives a hundredfold reduction in loss.",
                working: "I \\downarrow \\Rightarrow I^2R \\downarrow",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Much more of the generated power reaches the consumer instead of being dissipated as heat in the cables.",
                working: "\\text{loss falls from } 1.28 \\text{ GW to } 12.8 \\text{ MW}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "Transformers require a changing magnetic flux to induce an e.m.f., which only a.c. provides; d.c. produces no changing flux so cannot be stepped up or down.",
                working: "\\text{a.c.} \\leftrightarrow \\text{changing flux} \\leftrightarrow \\text{transformers}",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $N_s/N_p = 10$ (b) $I = 8.0$ kA at $25$ kV and $800$ A at $250$ kV (c) losses $1.28$ GW and $12.8$ MW respectively (d) high voltage means low current, so $I^2R$ losses are much smaller (e) transformers need changing flux, which only a.c. provides",
            commonErrors: [
              "Forgetting to convert MW and kV into consistent units.",
              "Claiming transformers work with d.c.",
            ],
          },
        },
      ],
    },
    {
      id: "physsl-u5-ac",
      title: "Alternating current and rms values",
      skill:
        "Describe a.c. generation and waveforms, use $V_{\\text{rms}} = V_0/\\sqrt{2}$ and solve a.c. circuit problems.",
      lesson: {
        sections: [
          {
            heading: "Alternating current",
            body: "In **alternating current** the direction of charge flow reverses periodically, typically sinusoidally. Mains supply is a.c. at $50$ Hz (or $60$ Hz in some countries), so the period is $T = 1/f = 0.020$ s. The **peak value** $V_0$ is the maximum instantaneous voltage; the voltage passes through zero twice per cycle.",
          },
          {
            heading: "r.m.s. values",
            body: "Because a.c. varies, its effect is quoted as the **root-mean-square (r.m.s.)** value — the steady d.c. value that would dissipate the same power in a resistor. For a sinusoidal supply, $V_{\\text{rms}} = V_0/\\sqrt{2}$ and similarly $I_{\\text{rms}} = I_0/\\sqrt{2}$. Mains voltages quoted as $230$ V or $120$ V are r.m.s. values; the corresponding peaks are $230\\sqrt{2} \\approx 325$ V and $120\\sqrt{2} \\approx 170$ V.",
          },
          {
            heading: "a.c. generators and uses",
            body: "An **a.c. generator** produces a.c. by electromagnetic induction: a coil rotating in a magnetic field has its flux linkage changing sinusoidally, inducing a sinusoidal e.m.f. A.c. is used for mains supply because transformers can step the voltage up for efficient transmission and down for safe use — transformers do not work with d.c.",
          },
        ],
        keyFormulas: [
          { name: "r.m.s. voltage", statement: "V_rms = V_0/\\sqrt{2}" },
          { name: "r.m.s. current", statement: "I_rms = I_0/\\sqrt{2}" },
          { name: "Period", statement: "T = 1/f" },
        ],
        workedExample: {
          problem:
            "A sinusoidal supply has peak voltage $24$ V. Find its r.m.s. voltage and the period if the frequency is $50$ Hz.",
          solution:
            "$V_{\\text{rms}} = 24/\\sqrt{2} = 17$ V (3 s.f.). Period $T = 1/50 = 0.020$ s.",
        },
      },
      questions: [
        {
          id: "physsl-u5-ac-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What distinguishes alternating current from direct current?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a.c. reverses direction periodically" },
              { id: "b", text: "a.c. has a constant voltage" },
              { id: "c", text: "a.c. cannot power a resistor" },
              { id: "d", text: "a.c. flows only in one direction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alternating current",
                statement:
                  "a.c. reverses direction periodically, usually sinusoidally.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The defining feature of a.c. is its periodically reversing direction.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** a.c. reverses direction periodically",
            commonErrors: [
              "Confusing a.c. with d.c.; d.c. flows in one direction.",
            ],
          },
        },
        {
          id: "physsl-u5-ac-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A sinusoidal a.c. supply has a peak voltage of $24$ V. Calculate its r.m.s. voltage.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$ V" },
              { id: "b", text: "$24$ V" },
              { id: "c", text: "$34$ V" },
              { id: "d", text: "$17$ V" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "r.m.s. voltage",
                statement: "V_rms = V_0/\\sqrt{2}",
              },
            ],
            steps: [
              {
                reasoning: "Apply the r.m.s. formula.",
                working: "V_{\\text{rms}} = \\frac{24}{\\sqrt{2}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "V_{\\text{rms}} = 16.97 \\approx 17 \\text{ V}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $17$ V",
            commonErrors: [
              "Dividing by 2 instead of $\\sqrt{2}$.",
              "Multiplying by $\\sqrt{2}$ instead of dividing.",
            ],
          },
        },
        {
          id: "physsl-u5-ac-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The mains supply in a country has r.m.s. voltage $230$ V and frequency $50$ Hz.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peak voltage $163$ V; period $0.020$ s" },
              { id: "b", text: "Peak voltage $325$ V; period $0.020$ s" },
              { id: "c", text: "Peak voltage $115$ V; period $0.020$ s" },
              { id: "d", text: "Peak voltage $325$ V; period $20$ s" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Peak from r.m.s.",
                statement: "V_0 = \\sqrt{2}\\,V_{\\text{rms}}",
              },
              { kind: "formula", name: "Period", statement: "T = 1/f" },
            ],
            steps: [
              {
                reasoning:
                  "Peak voltage is $\\sqrt{2}$ times the r.m.s. value.",
                working: "V_0 = \\sqrt{2} \\times 230 = 325 \\text{ V}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Period from frequency.",
                working: "T = \\frac{1}{50} = 0.020 \\text{ s}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: $325/\\sqrt{2} = 230$ V, consistent.",
                working: "\\frac{325}{\\sqrt{2}} \\approx 230 \\checkmark",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Option (a) matches both values.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** peak voltage $325$ V; period $0.020$ s",
            commonErrors: [
              "Dividing by $\\sqrt{2}$ instead of multiplying to get the peak.",
              "Using $T = f$ instead of $T = 1/f$.",
            ],
          },
        },
        {
          id: "physsl-u5-ac-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "An a.c. generator produces a sinusoidal e.m.f. with peak value $100$ V and frequency $60$ Hz. It is connected to a resistive load of $20\\,\\Omega$.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the r.m.s. voltage of the supply.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the period of the e.m.f.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the r.m.s. current through the load.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why a.c., rather than d.c., is used for mains electricity distribution.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "r.m.s. voltage",
                statement: "V_rms = V_0/\\sqrt{2}",
              },
              {
                kind: "formula",
                name: "Ohm's law",
                statement: "I_rms = V_rms/R",
              },
              { kind: "formula", name: "Period", statement: "T = 1/f" },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Apply $V_{\\text{rms}} = V_0/\\sqrt{2}$.",
                working:
                  "V_{\\text{rms}} = \\frac{100}{\\sqrt{2}} = 70.7 \\text{ V}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Period is the reciprocal of frequency.",
                working: "T = \\frac{1}{60} = 0.0167 \\text{ s}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Use Ohm's law with the r.m.s. values.",
                working: "I_{\\text{rms}} = \\frac{70.7}{20} = 3.54 \\text{ A}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Transformers can only operate with a changing current (changing flux), so a.c. can be stepped up for low-loss transmission and stepped down for use; d.c. cannot be transformed.",
                working:
                  "\\text{a.c.} \\leftrightarrow \\text{transformers work}",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) $V_{\\text{rms}} = 70.7$ V (b) $T = 0.0167$ s (c) $I_{\\text{rms}} = 3.54$ A (d) transformers require changing flux, so a.c. allows efficient high-voltage transmission",
            commonErrors: [
              "Using the peak voltage in Ohm's law instead of the r.m.s. value.",
              "Forgetting that transformers do not work with d.c.",
            ],
            examinerNote:
              "Accept $71$ V for part (a) and $3.5$ A for part (c) at 2–3 s.f.",
          },
        },
        {
          id: "physsl-u5-ac-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What is the frequency of the a.c. mains supply in most countries?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$50$ Hz" },
              { id: "b", text: "$0.02$ Hz" },
              { id: "c", text: "$100$ Hz" },
              { id: "d", text: "$60$ Hz only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mains frequency",
                statement:
                  "Most countries supply a.c. at $50$ Hz (some at $60$ Hz).",
              },
            ],
            steps: [
              {
                reasoning: "The standard mains frequency is $50$ Hz in most of the world.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $50$ Hz",
            commonErrors: [
              "Confusing frequency with period; the period is $0.020$ s.",
            ],
          },
        },
        {
          id: "physsl-u5-ac-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A sinusoidal a.c. supply has a peak voltage of $20$ V. Calculate its r.m.s. voltage.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10$ V" },
              { id: "b", text: "$28$ V" },
              { id: "c", text: "$14$ V" },
              { id: "d", text: "$20$ V" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "r.m.s. voltage",
                statement: "V_rms = V_0/\\sqrt{2}",
              },
            ],
            steps: [
              {
                reasoning: "Apply the r.m.s. formula.",
                working: "V_{\\text{rms}} = \\frac{20}{\\sqrt{2}} = 14.1 \\text{ V}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Round to 2 s.f. and select the option.",
                working: "V_{\\text{rms}} \\approx 14 \\text{ V}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $14$ V",
            commonErrors: [
              "Dividing by $2$ instead of $\\sqrt{2}$, giving $10$ V.",
            ],
          },
        },
        {
          id: "physsl-u5-ac-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A resistor of resistance $4.0\\,\\Omega$ is connected across a supply of r.m.s. voltage $12$ V. Calculate the r.m.s. current and the power dissipated.",
          response: {
            type: "numeric",
            parts: [
              { label: "r.m.s. current", answer: 3.0, unit: "A" },
              { label: "Power dissipated", answer: 36, unit: "W" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Ohm's law",
                statement: "I_rms = V_rms/R",
              },
              {
                kind: "formula",
                name: "Power",
                statement: "P = V_rms I_rms = V_rms^2/R",
              },
            ],
            steps: [
              {
                reasoning: "Use Ohm's law with r.m.s. values.",
                working: "I_{\\text{rms}} = \\frac{12}{4.0}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the current.",
                working: "I_{\\text{rms}} = 3.0 \\text{ A}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Power is $P = V_{\\text{rms}}^2/R$.",
                working: "P = \\frac{12^2}{4.0}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate (equivalently $P = VI = 12 \\times 3.0$).",
                working: "P = 36 \\text{ W}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "r.m.s. current $= 3.0$ A; power $= 36$ W",
            commonErrors: [
              "Using a peak voltage in Ohm's law for an r.m.s. problem.",
            ],
          },
        },
        {
          id: "physsl-u5-ac-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A sinusoidal current has a peak value $I_0 = 5.0$ A. What is its r.m.s. value?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7.1$ A" },
              { id: "b", text: "$5.0$ A" },
              { id: "c", text: "$3.5$ A" },
              { id: "d", text: "$2.5$ A" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "r.m.s. current",
                statement: "I_rms = I_0/\\sqrt{2}",
              },
            ],
            steps: [
              {
                reasoning: "Apply the r.m.s. formula to the current.",
                working: "I_{\\text{rms}} = \\frac{5.0}{\\sqrt{2}} = 3.54 \\text{ A}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Round to 2 s.f.",
                working: "I_{\\text{rms}} \\approx 3.5 \\text{ A}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $3.5$ A",
            commonErrors: ["Dividing by $2$ instead of $\\sqrt{2}$."],
          },
        },
        {
          id: "physsl-u5-ac-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The mains supply in a country has r.m.s. voltage $230$ V and frequency $50$ Hz.",
          response: {
            type: "numeric",
            parts: [
              { label: "Peak voltage", answer: 325, tolerance: 1, unit: "V" },
              { label: "Period", answer: 0.02, unit: "s" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Peak from r.m.s.",
                statement: "V_0 = \\sqrt{2}\\,V_{\\text{rms}}",
              },
              { kind: "formula", name: "Period", statement: "T = 1/f" },
            ],
            steps: [
              {
                reasoning: "Peak voltage is $\\sqrt{2}$ times the r.m.s. value.",
                working: "V_0 = \\sqrt{2} \\times 230 = 325 \\text{ V}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the peak.",
                working: "V_0 = 325 \\text{ V}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Period is the reciprocal of frequency.",
                working: "T = \\frac{1}{50}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "T = 0.020 \\text{ s}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Peak voltage $= 325$ V; period $= 0.020$ s",
            commonErrors: [
              "Dividing by $\\sqrt{2}$ instead of multiplying to get the peak.",
              "Using $T = f$ instead of $T = 1/f$.",
            ],
          },
        },
        {
          id: "physsl-u5-ac-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The r.m.s. value of an alternating voltage is defined as",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the average of the peak positive and peak negative voltages" },
              { id: "b", text: "half the peak voltage" },
              { id: "c", text: "the maximum instantaneous voltage reached" },
              { id: "d", text: "the value of a steady d.c. voltage that would dissipate the same power in a resistor" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "r.m.s. value",
                statement:
                  "The r.m.s. value is the d.c. value that would produce the same power dissipation in a resistor.",
              },
            ],
            steps: [
              {
                reasoning: "r.m.s. is defined by equal power dissipation, not by averaging or peak values.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Option (b) gives the correct definition.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** the value of a steady d.c. voltage that would dissipate the same power in a resistor",
            commonErrors: [
              "Thinking r.m.s. is simply the average of the waveform.",
            ],
          },
        },
        {
          id: "physsl-u5-ac-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "An a.c. generator has a coil of $300$ turns. The magnetic flux linkage through the coil changes uniformly by $0.0060$ Wb in a time of $0.050$ s.",
          response: {
            type: "numeric",
            parts: [
              { label: "Induced e.m.f.", answer: 36, unit: "V" },
              { label: "Induced e.m.f. if the flux change takes $0.025$ s", answer: 72, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Faraday's law",
                statement: "\\varepsilon = N\\,\\Delta\\Phi/\\Delta t",
              },
            ],
            steps: [
              {
                reasoning: "Apply Faraday's law for the generator coil.",
                working: "\\varepsilon = \\frac{300 \\times 0.0060}{0.050}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "\\varepsilon = 36 \\text{ V}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The e.m.f. is inversely proportional to the time of change; halving $\\Delta t$ doubles $\\varepsilon$.",
                working: "\\varepsilon_{\\text{new}} = 36 \\times \\frac{0.050}{0.025}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "\\varepsilon_{\\text{new}} = 72 \\text{ V}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Induced e.m.f. $= 36$ V; with $\\Delta t = 0.025$ s, $\\varepsilon = 72$ V",
            commonErrors: [
              "Using the flux itself rather than its rate of change.",
              "Forgetting the factor of turns.",
            ],
          },
        },
        {
          id: "physsl-u5-ac-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A sinusoidal a.c. supply has peak voltage $60$ V and frequency $100$ Hz. It is connected across a resistor of $30\\,\\Omega$.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the r.m.s. voltage.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the period of the supply.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the r.m.s. current through the resistor.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Calculate the power dissipated in the resistor.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "r.m.s. voltage",
                statement: "V_rms = V_0/\\sqrt{2}",
              },
              { kind: "formula", name: "Period", statement: "T = 1/f" },
              {
                kind: "formula",
                name: "Power",
                statement: "P = V_rms^2/R",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Apply $V_{\\text{rms}} = V_0/\\sqrt{2}$.",
                working: "V_{\\text{rms}} = \\frac{60}{\\sqrt{2}} = 42.4 \\text{ V}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Period is the reciprocal of frequency.",
                working: "T = \\frac{1}{100} = 0.010 \\text{ s}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Use Ohm's law with r.m.s. values.",
                working: "I_{\\text{rms}} = \\frac{42.4}{30} = 1.41 \\text{ A}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Power is $P = V_{\\text{rms}}^2/R$ (or $V_{\\text{rms}}I_{\\text{rms}}$).",
                working: "P = \\frac{42.4^2}{30} = \\frac{1800}{30} = 60 \\text{ W}",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $V_{\\text{rms}} = 42.4$ V (b) $T = 0.010$ s (c) $I_{\\text{rms}} = 1.41$ A (d) $P = 60$ W",
            commonErrors: [
              "Using the peak voltage in Ohm's law or the power formula.",
              "Using $T = f$ instead of $T = 1/f$.",
            ],
          },
        },
        {
          id: "physsl-u5-ac-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A filament lamp is marked $60$ W, $230$ V (r.m.s.). The lamp is operated at its rated voltage. Calculate the resistance of the hot filament and the current it draws.",
          response: {
            type: "numeric",
            parts: [
              { label: "Resistance", answer: 882, tolerance: 2, unit: "\\Omega" },
              { label: "Current", answer: 0.26, tolerance: 0.01, unit: "A" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Power and resistance",
                statement: "P = V^2/R \\Rightarrow R = V^2/P",
              },
              {
                kind: "formula",
                name: "Current",
                statement: "I = P/V",
              },
            ],
            steps: [
              {
                reasoning: "Resistance at the operating point is $R = V^2/P$.",
                working: "R = \\frac{230^2}{60} = \\frac{52900}{60}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the resistance.",
                working: "R = 882 \\text{ } \\Omega",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Current is power divided by voltage.",
                working: "I = \\frac{60}{230} = 0.261 \\text{ A}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the current.",
                working: "I = 0.26 \\text{ A}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Resistance $= 882\\,\\Omega$; current $= 0.26$ A",
            commonErrors: [
              "Computing $P/V$ for the resistance.",
              "Forgetting the rating is r.m.s.; using peak values inconsistently.",
            ],
          },
        },
        {
          id: "physsl-u5-ac-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement about the waveform of a sinusoidal a.c. voltage is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is a straight line parallel to the time axis" },
              { id: "b", text: "It is always positive but varies in magnitude" },
              { id: "c", text: "It stays constant at the peak value for half of each cycle" },
              { id: "d", text: "It alternates smoothly between positive and negative values, passing through zero twice per cycle" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sinusoidal a.c.",
                statement:
                  "A sinusoidal supply varies smoothly, reversing sign twice per cycle and crossing zero twice per cycle.",
              },
            ],
            steps: [
              {
                reasoning: "A sine wave alternates sign every half-cycle and passes through zero twice per period.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Option (b) describes this correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** it alternates smoothly between positive and negative values, passing through zero twice per cycle",
            commonErrors: [
              "Confusing a.c. with a varying-but-unipolar voltage.",
            ],
          },
        },
        {
          id: "physsl-u5-ac-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A sinusoidal supply has a peak voltage of $24$ V. In a resistor it dissipates the same power as which steady d.c. voltage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$34$ V" },
              { id: "b", text: "$17$ V" },
              { id: "c", text: "$24$ V" },
              { id: "d", text: "$12$ V" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "r.m.s. voltage",
                statement: "V_rms = V_0/\\sqrt{2}",
              },
            ],
            steps: [
              {
                reasoning: "The d.c. voltage giving the same power is the r.m.s. value.",
                working: "V_{\\text{rms}} = \\frac{24}{\\sqrt{2}} = 16.97 \\approx 17 \\text{ V}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Select the matching option.",
                working: "17 \\text{ V}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $17$ V",
            commonErrors: [
              "Using the peak value $24$ V as the equivalent d.c.",
            ],
          },
        },
        {
          id: "physsl-u5-ac-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "An electric heater has a resistance of $23\\,\\Omega$ and is connected to the $230$ V (r.m.s.) mains supply for $5.0$ minutes.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the peak voltage of the supply.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the r.m.s. current through the heater.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the power dissipated by the heater.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Calculate the energy dissipated in $5.0$ minutes.",
              marks: 2,
            },
            {
              label: "e",
              prompt: "Explain why appliance power ratings are quoted using r.m.s. values.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Peak from r.m.s.",
                statement: "V_0 = \\sqrt{2}\\,V_{\\text{rms}}",
              },
              {
                kind: "formula",
                name: "Ohm's law",
                statement: "I_rms = V_rms/R",
              },
              {
                kind: "formula",
                name: "Energy",
                statement: "E = Pt",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Peak voltage is $\\sqrt{2}$ times the r.m.s. value.",
                working: "V_0 = \\sqrt{2} \\times 230 = 325 \\text{ V}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Use Ohm's law with r.m.s. values.",
                working: "I_{\\text{rms}} = \\frac{230}{23} = 10 \\text{ A}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Power is $P = V_{\\text{rms}}I_{\\text{rms}}$.",
                working: "P = 230 \\times 10 = 2300 \\text{ W}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Convert $5.0$ minutes to $300$ s and use $E = Pt$.",
                working: "E = 2300 \\times 300 = 6.9 \\times 10^5 \\text{ J}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "e",
                reasoning:
                  "The r.m.s. value is the steady d.c. equivalent that dissipates the same power, so it directly gives the average heating effect of the a.c.",
                working: "P_{\\text{rms}} = P_{\\text{dc equivalent}}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning:
                  "Quoting r.m.s. values therefore tells the user the actual power the appliance will dissipate.",
                working: "\\text{rating} = V_{\\text{rms}} I_{\\text{rms}}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $V_0 = 325$ V (b) $I_{\\text{rms}} = 10$ A (c) $P = 2300$ W (d) $E = 6.9 \\times 10^5$ J (e) r.m.s. gives the equivalent d.c. power dissipation, so ratings reflect real heating",
            commonErrors: [
              "Using the peak voltage in Ohm's law for the current.",
              "Forgetting to convert minutes to seconds in part (d).",
            ],
          },
        },
      ],
    },
  ],
};
