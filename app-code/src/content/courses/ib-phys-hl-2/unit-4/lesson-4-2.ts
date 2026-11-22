import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "physhl-u4-lesson-4-2",
  code: "4-2",
  title: "Alternating Current and Transformers",
  goal: "I CAN describe alternating current waveforms, calculate peak and RMS values, apply transformer equations, and explain the role of transformers in power distribution.",
  standards: ["Paper 1", "Paper 2", "AHL D3"],
  vocabulary: [
    {
      term: "Alternating current (AC)",
      definition:
        "Current that reverses direction periodically; in UK mains supply at 50 Hz with peak voltage ~325 V.",
    },
    {
      term: "Peak value",
      definition: "The maximum value of AC voltage or current: $V_0$ or $I_0$.",
    },
    {
      term: "RMS value",
      definition:
        "Root-mean-square value — the equivalent DC value giving same power: $V_{rms} = V_0/\\sqrt{2}$, $I_{rms} = I_0/\\sqrt{2}$.",
    },
    {
      term: "Step-up transformer",
      definition:
        "Transformer with more secondary turns than primary — increases voltage, decreases current.",
    },
    {
      term: "Step-down transformer",
      definition:
        "Transformer with fewer secondary turns than primary — decreases voltage, increases current.",
    },
    {
      term: "Mains supply",
      definition: "UK household electricity: 230 V RMS, 50 Hz AC.",
    },
  ],
  concepts: [
    {
      id: "physhl-u4-ac-values",
      title: "AC waveforms and RMS values",
      skill:
        "Describe AC waveforms, distinguish peak and RMS values, and calculate power dissipation in AC circuits.",
      lesson: {
        sections: [
          {
            heading: "AC waveforms",
            body: "Alternating current reverses direction periodically — typically sinusoidal: $V = V_0\\sin(2\\pi ft)$. The **peak value** $V_0$ is the maximum; the **RMS value** $V_{rms}$ is the equivalent steady DC value that produces the same power dissipation. For sinusoidal AC: $V_{rms} = V_0/\\sqrt{2} \\approx 0.707V_0$. UK mains: 230 V RMS, 50 Hz → peak $V_0 = 325$ V.",
          },
          {
            heading: "Why RMS?",
            body: "Power in a resistor is $P = I^2R$. Since current varies in AC, average power uses $I_{rms}^2R$ where $I_{rms}$ is the root-mean-square of the instantaneous current. The RMS value makes AC power calculations identical to DC: $P = V_{rms}I_{rms} = I_{rms}^2R = V_{rms}^2/R$.",
          },
          {
            heading: "Mains supply",
            body: "The national grid uses AC because transformers only work with changing flux (AC). High-voltage transmission (400 kV) reduces current → reduces $I^2R$ losses in cables. Step-down transformers near consumers reduce voltage to safe levels (230 V).",
          },
        ],
        keyFormulas: [
          {
            name: "RMS relation",
            statement: "$V_{rms} = V_0/\\sqrt{2}$; $I_{rms} = I_0/\\sqrt{2}$",
          },
          {
            name: "AC power",
            statement: "$P = V_{rms}I_{rms} = I_{rms}^2R = V_{rms}^2/R$",
          },
          { name: "Peak-RMS", statement: "$V_0 = \\sqrt{2}V_{rms}$" },
        ],
        workedExample: {
          problem:
            "A heater rated 2.0 kW operates on 230 V mains. Calculate the RMS current.",
          solution:
            "$P = V_{rms}I_{rms}$ → $I_{rms} = P/V = 2000/230 = 8.7$ A.",
        },
      },
      questions: [
        {
          id: "physhl-u4-ac-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The RMS value of an AC supply is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The peak value divided by 2" },
              {
                id: "b",
                text: "The DC value giving the same power dissipation",
              },
              { id: "c", text: "The average of positive and negative peaks" },
              { id: "d", text: "The maximum instantaneous value" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "RMS",
                statement:
                  "Equivalent DC value for same power: $V_{rms} = V_0/\\sqrt{2}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "RMS = root mean square — gives same average power as DC.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Equivalent DC power value",
            commonErrors: [
              "Thinking RMS = average — it's the square root of mean square.",
            ],
          },
        },
        {
          id: "physhl-u4-ac-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The UK mains supply is 230 V RMS at 50 Hz. Calculate the peak voltage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Peak-RMS",
                statement: "$V_0 = \\sqrt{2}V_{rms}$",
              },
            ],
            steps: [
              {
                reasoning: "$V_0 = \\sqrt{2} \\times 230 = 325$ V.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$V_0 = 325$ V.", marks: 1, markCode: "A" },
              {
                reasoning: "Peak is higher than RMS by factor $\\sqrt{2}$.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "$V_0 = 325$ V",
            commonErrors: [
              "Multiplying by $\\sqrt{2}$ instead of dividing — peak > RMS.",
            ],
          },
        },
        {
          id: "physhl-u4-ac-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A 100 W light bulb operates on 230 V mains. (a) Calculate the RMS current. (b) If the same bulb were connected to a 115 V supply, calculate the power dissipated.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "AC power",
                statement: "$P = V_{rms}^2/R$ — power proportional to $V^2$.",
              },
            ],
            steps: [
              {
                reasoning: "(a) $I_{rms} = P/V = 100/230 = 0.43$ A.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Resistance constant: $R = V^2/P = 230^2/100 = 529$ Ω.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At 115 V: $P = V^2/R = 115^2/529 = 25$ W.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Power drops to 25 W — quarter of original (half voltage → quarter power).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 0.43 A. (b) 25 W.",
            commonErrors: [
              "Thinking power halves — it quarters ($P \\propto V^2$).",
            ],
          },
        },
        {
          id: "physhl-u4-ac-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A heater has resistance 20 Ω and is connected to 230 V RMS mains.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the RMS current and power dissipated.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the peak voltage and peak current.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain why the average power is not zero even though current alternates direction.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "AC power",
                statement:
                  "$P = I_{rms}^2R$ — always positive regardless of current direction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$I_{rms} = V/R = 230/20 = 11.5$ A; $P = I^2R = 11.5^2 \\times 20 = 2645$ W.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$I = 11.5$ A, $P = 2.6$ kW.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$V_0 = \\sqrt{2} \\times 230 = 325$ V.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$I_0 = \\sqrt{2} \\times 11.5 = 16.3$ A.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both peak values calculated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Power $P = I^2R$ — $I^2$ is always positive.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Current direction doesn't matter for heating — both directions dissipate power.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Average power uses $I_{rms}^2$ — always positive → net heating.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 11.5 A, 2.6 kW. (b) 325 V, 16.3 A. (c) $I^2$ always positive → net power.",
            commonErrors: [
              "Thinking AC produces zero average power — $I^2$ is always positive.",
            ],
          },
        },
        {
          id: "physhl-u4-ac-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The peak voltage corresponding to an RMS voltage of 100 V is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "141 V" },
              { id: "b", text: "70.7 V" },
              { id: "c", text: "100 V" },
              { id: "d", text: "200 V" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Peak-RMS",
                statement: "$V_0 = \\sqrt{2}V_{rms} \\approx 1.41 V_{rms}$.",
              },
            ],
            steps: [
              {
                reasoning: "$V_0 = \\sqrt{2} \\times 100 = 141$ V.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** 141 V",
            commonErrors: [
              "Dividing by $\\sqrt{2}$ — peak is LARGER than RMS.",
            ],
          },
        },
        {
          id: "physhl-u4-ac-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Why is the RMS value used to describe AC voltage rather than the peak value?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It varies less with frequency" },
              { id: "b", text: "It is always half the peak value" },
              { id: "c", text: "It is easier to measure with a voltmeter" },
              {
                id: "d",
                text: "It gives the same power dissipation as an equivalent DC supply",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "RMS",
                statement:
                  "$V_{rms}$ makes AC power calculations identical to DC: $P = V_{rms}^2/R$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "RMS is defined so that $P = I_{rms}^2R$ gives correct average heating power.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Equivalent DC power value",
            commonErrors: [
              "Thinking RMS is just an average — it is specifically for power.",
            ],
          },
        },
        {
          id: "physhl-u4-ac-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The UK mains supply of 230 V RMS has a peak voltage of approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "230 V" },
              { id: "b", text: "163 V" },
              { id: "c", text: "325 V" },
              { id: "d", text: "460 V" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Peak-RMS",
                statement:
                  "$V_0 = \\sqrt{2}V_{rms} = \\sqrt{2} \\times 230 \\approx 325$ V.",
              },
            ],
            steps: [
              {
                reasoning: "$V_0 = \\sqrt{2} \\times 230 = 325$ V.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** 325 V",
            commonErrors: [
              "Answering 230 V — that is the RMS value, not the peak.",
            ],
          },
        },
        {
          id: "physhl-u4-ac-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The average power dissipated in a resistor connected to an AC supply is given by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$P = 0$ because current reverses" },
              { id: "b", text: "$P = V_0 I_0$ (peak values)" },
              { id: "c", text: "$P = V_{rms} I_{rms} = I_{rms}^2 R$" },
              { id: "d", text: "$P = V_{rms}/I_{rms}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "AC power",
                statement: "$P = V_{rms}I_{rms} = I_{rms}^2R = V_{rms}^2/R$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Using RMS values makes AC power formulas identical to DC.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $P = V_{rms}I_{rms} = I_{rms}^2R$",
            commonErrors: [
              "Using peak values — they give twice the actual average power.",
            ],
          },
        },
        {
          id: "physhl-u4-ac-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The period of the UK mains supply (50 Hz) is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20 ms" },
              { id: "b", text: "100 ms" },
              { id: "c", text: "10 ms" },
              { id: "d", text: "50 ms" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Period",
                statement: "$T = 1/f = 1/50 = 0.020$ s $= 20$ ms.",
              },
            ],
            steps: [
              {
                reasoning: "$T = 1/f = 1/50 = 20$ ms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** 20 ms",
            commonErrors: ["Using $f$ as period — period is $1/f$."],
          },
        },
        {
          id: "physhl-u4-ac-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An AC supply has a peak voltage of 325 V. Calculate its RMS voltage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 230, unit: "V", tolerance: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "RMS relation",
                statement: "$V_{rms} = V_0/\\sqrt{2}$",
              },
            ],
            steps: [
              {
                reasoning: "$V_{rms} = 325/\\sqrt{2} = 230$ V.",
                working: "V_{rms} = \\frac{325}{\\sqrt{2}} = 230 \\text{ V}",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$V_{rms} = 230$ V.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$V_{rms} = 230$ V",
            commonErrors: ["Multiplying by $\\sqrt{2}$ instead of dividing."],
          },
        },
        {
          id: "physhl-u4-ac-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A 2.3 kW appliance operates on 230 V mains. Calculate the RMS current.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "A", tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "AC power",
                statement: "$I_{rms} = P/V_{rms}$",
              },
            ],
            steps: [
              {
                reasoning: "$P = 2.3$ kW $= 2300$ W.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$I_{rms} = 2300/230 = 10$ A.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$I_{rms} = 10$ A.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$I_{rms} = 10$ A",
            commonErrors: ["Forgetting to convert kW to W."],
          },
        },
        {
          id: "physhl-u4-ac-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A heater of resistance 25 Ω is connected to 230 V mains.",
          parts: [
            { label: "a", prompt: "Calculate the RMS current.", marks: 2 },
            { label: "b", prompt: "Calculate the power dissipated.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "AC power",
                statement:
                  "$I_{rms} = V_{rms}/R$; $P = I_{rms}^2R$ or $V_{rms}^2/R$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$I_{rms} = 230/25 = 9.2$ A.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$I_{rms} = 9.2$ A.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$P = V^2/R = 230^2/25 = 2116$ W (or $I^2R = 9.2^2 \\times 25$).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$P = 2.1$ kW.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 9.2 A. (b) 2.1 kW",
            commonErrors: ["Using peak voltage 325 V in place of RMS 230 V."],
          },
        },
        {
          id: "physhl-u4-ac-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A 100 W light bulb designed for 230 V mains is accidentally connected to a 115 V supply.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the resistance of the bulb filament.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the power dissipated at 115 V.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "AC power",
                statement:
                  "$R = V_{rms}^2/P$; power $\\propto V^2$ at constant R.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$R = 230^2/100 = 529$ Ω.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$R = 529$ Ω (accept 530 Ω).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$P = V^2/R = 115^2/529 = 25$ W.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$P = 25$ W — one quarter of rated power.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 529 Ω. (b) 25 W",
            commonErrors: [
              "Thinking power halves with voltage — it quarters since $P \\propto V^2$.",
            ],
          },
        },
        {
          id: "physhl-u4-ac-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A transformer secondary outputs 12 V RMS at 50 Hz.",
          parts: [
            { label: "a", prompt: "Calculate the peak voltage.", marks: 2 },
            { label: "b", prompt: "State the period of the output.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Peak-RMS",
                statement: "$V_0 = \\sqrt{2}V_{rms}$; $T = 1/f$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$V_0 = \\sqrt{2} \\times 12 = 17.0$ V.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$V_0 = 17$ V.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$T = 1/50 = 0.020$ s $= 20$ ms.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 17 V. (b) 20 ms",
            commonErrors: [
              "Giving 12 V as peak — it is already the RMS value.",
            ],
          },
        },
        {
          id: "physhl-u4-ac-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain what is meant by the RMS value of an alternating voltage and why it is useful for power calculations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "RMS",
                statement:
                  "$V_{rms} = V_0/\\sqrt{2}$ — the DC value producing the same average power.",
              },
            ],
            steps: [
              {
                reasoning:
                  "RMS is the root-mean-square of the instantaneous voltage over one cycle.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "For sinusoidal AC, $V_{rms} = V_0/\\sqrt{2} \\approx 0.707V_0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It equals the DC voltage that would dissipate the same average power in a resistor.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore $P = V_{rms}I_{rms} = I_{rms}^2R$ works exactly like DC.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "RMS is the DC-equivalent value for power; for sine waves $V_{rms} = V_0/\\sqrt{2}$, so $P = V_{rms}^2/R$.",
            commonErrors: [
              "Describing RMS as a simple average of the waveform.",
            ],
          },
        },
        {
          id: "physhl-u4-ac-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "An AC generator supplies 230 V RMS at 50 Hz to a resistive load of 20 Ω.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the RMS current and the average power dissipated.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate the peak voltage and peak current.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain why the average power is not zero even though the current flows in both directions.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "AC power",
                statement:
                  "$I_{rms} = V_{rms}/R$; $P = I_{rms}^2R$; $V_0 = \\sqrt{2}V_{rms}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$I_{rms} = 230/20 = 11.5$ A.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$P = I_{rms}^2R = 11.5^2 \\times 20 = 2645$ W.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$I_{rms} = 11.5$ A, $P = 2.6$ kW.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$V_0 = \\sqrt{2} \\times 230 = 325$ V.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$I_0 = \\sqrt{2} \\times 11.5 = 16.3$ A.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both peak values stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Instantaneous power $p = i^2R$ is always positive since $i^2 \\geq 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Reversing current direction does not reverse power — both directions dissipate heat.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Average power equals $I_{rms}^2R$, which is non-zero.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 11.5 A, 2.6 kW. (b) 325 V, 16.3 A. (c) $i^2$ always positive → net power.",
            commonErrors: [
              "Claiming net power is zero because current averages to zero — power depends on $i^2$, not $i$.",
            ],
          },
        },
      ],
    },
    {
      id: "physhl-u4-transformers",
      title: "Transformers",
      skill:
        "Apply transformer equations to calculate voltage and current ratios, explain step-up and step-down action, and describe transformer losses.",
      lesson: {
        sections: [
          {
            heading: "How transformers work",
            body: "A transformer has two coils (primary and secondary) wound on a shared iron core. AC in the primary creates changing magnetic flux in the core → induces EMF in secondary (Faraday's law). The voltage ratio equals turns ratio: $\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$. More secondary turns → higher output voltage (step-up); fewer → lower (step-down).",
          },
          {
            heading: "Power conservation",
            body: "In an ideal transformer, power is conserved: $V_pI_p = V_sI_s$. Step-up increases voltage but DECREASES current; step-down decreases voltage but INCREASES current. This is why high-voltage transmission is efficient — lower current means lower $I^2R$ losses in cables.",
          },
          {
            heading: "Losses",
            body: "Real transformers have losses: **copper losses** ($I^2R$ in windings), **iron losses** (eddy currents and hysteresis in core), and **flux leakage** (not all flux links both coils). Efficiency typically 95–99%. Laminated cores reduce eddy currents; thick copper wires reduce resistance.",
          },
        ],
        keyFormulas: [
          { name: "Voltage ratio", statement: "$V_s/V_p = N_s/N_p$" },
          {
            name: "Current ratio",
            statement: "$I_s/I_p = N_p/N_s$ (inverse of voltage)",
          },
          {
            name: "Power conservation",
            statement: "$V_pI_p = V_sI_s$ (ideal)",
          },
        ],
        workedExample: {
          problem:
            "A transformer steps up 240 V to 11 kV. If it has 1000 primary turns, how many secondary turns?",
          solution:
            "$N_s = N_p \\times V_s/V_p = 1000 \\times 11000/240 = 45\\,800$ turns.",
        },
      },
      questions: [
        {
          id: "physhl-u4-tr-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A step-up transformer has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equal turns on both coils" },
              { id: "b", text: "More secondary turns than primary turns" },
              { id: "c", text: "No iron core" },
              { id: "d", text: "Fewer secondary turns than primary turns" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transformer",
                statement: "Step-up: $N_s > N_p$ → $V_s > V_p$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Step-up increases voltage → needs more secondary turns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** More secondary turns",
            commonErrors: ["Reversing — step-up has MORE secondary turns."],
          },
        },
        {
          id: "physhl-u4-tr-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why transformers cannot work with DC supply.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transformer operation",
                statement:
                  "Requires CHANGING magnetic flux — DC produces constant flux → no induced EMF.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Transformer works by electromagnetic induction — needs changing flux.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "DC produces constant current → constant magnetic field → constant flux.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\Delta\\Phi/\\Delta t = 0$ → no induced EMF in secondary.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "DC gives constant flux → no induced EMF → transformer doesn't work.",
            commonErrors: [
              "Saying 'DC is dangerous' — the issue is no changing flux.",
            ],
          },
        },
        {
          id: "physhl-u4-tr-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A transformer has 250 primary turns and 50 secondary turns. The primary is connected to 240 V. (a) Calculate the secondary voltage. (b) If the primary current is 0.50 A, calculate the secondary current (assume 100% efficiency).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Transformer",
                statement: "$V_s = V_p N_s/N_p$; $I_s = V_pI_p/V_s$.",
              },
            ],
            steps: [
              {
                reasoning: "(a) $V_s = 240 \\times 50/250 = 48$ V.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Power conserved: $I_s = V_pI_p/V_s = 240 \\times 0.50/48 = 2.5$ A.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Step-down: voltage down, current up.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "$V_s = 48$ V, $I_s = 2.5$ A.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 48 V. (b) 2.5 A.",
            commonErrors: [
              "Thinking current stays same — power conservation means current increases for step-down.",
            ],
          },
        },
        {
          id: "physhl-u4-tr-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "The national grid transmits electricity at 400 kV before stepping down to 230 V for consumers.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain why high-voltage transmission reduces energy losses.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "If power transmitted is 100 MW and cable resistance is 0.50 Ω, calculate the power loss at 400 kV vs 230 V.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "State two reasons why transformers are essential for the grid.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Grid transmission",
                statement: "High V → low I → low $I^2R$ losses.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Power $P = VI$ — for same power, higher V means lower I.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning:
                  "Cable losses $= I^2R$ — lower I means much lower losses.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "400 kV → I = 250 A vs 230 V → I = 435 kA (impractical).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "At 400 kV: $I = 10^8/4\\times10^5 = 250$ A; loss $= 250^2 \\times 0.5 = 31$ kW.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "At 230 V: $I = 10^8/230 = 435$ kA; loss $= (4.35\\times10^5)^2 \\times 0.5 = 9.5\\times10^{10}$ W.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Loss at 230 V is astronomically larger — high voltage essential.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Enable voltage transformation for transmission and safe use.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Reduce transmission losses; provide different voltages for different uses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) High V → low I → low I²R loss. (b) 31 kW vs 95 GW loss. (c) Voltage transformation, loss reduction.",
            commonErrors: [
              "Thinking higher voltage = higher losses — opposite, it's lower current that matters.",
            ],
          },
        },
        {
          id: "physhl-u4-tr-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For a transformer, the ratio of secondary to primary voltage equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$N_p/N_s$" },
              { id: "b", text: "$I_s/I_p$" },
              { id: "c", text: "1 for all transformers" },
              { id: "d", text: "$N_s/N_p$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Transformer ratio",
                statement: "$V_s/V_p = N_s/N_p$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Voltage ratio equals turns ratio (secondary over primary).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $N_s/N_p$",
            commonErrors: [
              "Inverting the ratio — secondary over primary matches $V_s/V_p$.",
            ],
          },
        },
        {
          id: "physhl-u4-tr-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A step-down transformer:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decreases both voltage and current" },
              { id: "b", text: "Increases voltage and decreases current" },
              { id: "c", text: "Decreases voltage and increases current" },
              { id: "d", text: "Keeps voltage and current unchanged" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Step-down",
                statement:
                  "$N_s < N_p$ → $V_s < V_p$ → $I_s > I_p$ (power conserved).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Step-down lowers voltage; power conservation means current rises.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Voltage down, current up",
            commonErrors: [
              "Thinking both decrease — power conservation forces current up.",
            ],
          },
        },
        {
          id: "physhl-u4-tr-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The core of a transformer is made of laminated iron. The main reason for laminations is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increase the resistance of the windings" },
              { id: "b", text: "Reduce eddy current losses" },
              { id: "c", text: "Make the transformer lighter" },
              { id: "d", text: "Allow DC to pass through" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transformer losses",
                statement:
                  "Laminated cores reduce eddy currents — thin insulated layers block circulating currents.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Laminations interrupt eddy current loops in the core, reducing iron losses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Reduce eddy current losses",
            commonErrors: [
              "Thinking laminations reduce copper losses — they target eddy currents in the core.",
            ],
          },
        },
        {
          id: "physhl-u4-tr-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is NOT a source of energy loss in a real transformer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flux leakage between coils" },
              { id: "b", text: "$I^2R$ heating in the windings" },
              { id: "c", text: "Induced EMF in the secondary" },
              { id: "d", text: "Eddy currents in the core" },
            ],
            correctChoiceIc: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transformer losses",
                statement:
                  "Losses: copper ($I^2R$), iron (eddy + hysteresis), flux leakage — induced EMF is the useful output.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Induced EMF in the secondary is how the transformer works — it is not a loss.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (d) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Induced EMF is useful output, not a loss",
            commonErrors: [
              "Listing induced EMF as a loss — it is the transformer output mechanism.",
            ],
          },
        },
        {
          id: "physhl-u4-tr-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which transformer would be used to supply 230 V to homes from an 11 kV line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An isolating transformer with $N_s = N_p$" },
              { id: "b", text: "A step-up transformer with $N_s > N_p$" },
              { id: "c", text: "A step-down transformer with $N_s < N_p$" },
              { id: "d", text: "A transformer with no turns ratio" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Step-down",
                statement:
                  "11 kV → 230 V requires reduced voltage → $N_s < N_p$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Voltage must decrease from 11 kV to 230 V → step-down transformer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Step-down ($N_s < N_p$)",
            commonErrors: ["Choosing step-up — voltage is being reduced."],
          },
        },
        {
          id: "physhl-u4-tr-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A transformer has 500 primary turns and 100 secondary turns on a 240 V supply. Calculate the secondary voltage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 48, unit: "V", tolerance: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Transformer ratio",
                statement: "$V_s = V_pN_s/N_p = 240 \\times 100/500$",
              },
            ],
            steps: [
              {
                reasoning: "$V_s = 240 \\times 100/500 = 48$ V.",
                working: "V_s = 240 \\times \\frac{100}{500} = 48 \\text{ V}",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$V_s = 48$ V.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$V_s = 48$ V",
            commonErrors: ["Multiplying by 500/100 instead of 100/500."],
          },
        },
        {
          id: "physhl-u4-tr-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A transformer steps 240 V up to 12 kV. The primary coil has 800 turns. Calculate the number of secondary turns required.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40000, unit: "turns", tolerance: 100 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Transformer ratio",
                statement: "$N_s = N_p V_s/V_p = 800 \\times 12000/240$",
              },
            ],
            steps: [
              {
                reasoning: "Voltage ratio $= 12000/240 = 50$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$N_s = 800 \\times 50 = 40\\,000$ turns.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$N_s = 40\\,000$ turns.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$N_s = 40\\,000$ turns",
            commonErrors: ["Forgetting to convert 12 kV to 12\\,000 V."],
          },
        },
        {
          id: "physhl-u4-tr-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "An ideal transformer has primary voltage 240 V and primary current 2.0 A. The secondary voltage is 48 V.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the secondary current.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "State the turns ratio $N_s/N_p$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Transformer",
                statement: "$I_s = V_pI_p/V_s$; $N_s/N_p = V_s/V_p$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$I_s = 240 \\times 2.0/48 = 10$ A.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$I_s = 10$ A.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$N_s/N_p = V_s/V_p = 48/240 = 0.20$ (or 1:5).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Turns ratio $= 1:5$ step-down.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 10 A. (b) 1:5",
            commonErrors: ["Giving current ratio instead of turns ratio."],
          },
        },
        {
          id: "physhl-u4-tr-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A transformer is 90% efficient. It steps 240 V down to 48 V with a primary current of 2.0 A.",
          parts: [
            { label: "a", prompt: "Calculate the input power.", marks: 1 },
            { label: "b", prompt: "Calculate the output power.", marks: 1 },
            {
              label: "c",
              prompt: "Calculate the secondary current.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Transformer efficiency",
                statement: "$P_{out} = \\eta P_{in}$; $I_s = P_{out}/V_s$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$P_{in} = V_pI_p = 240 \\times 2.0 = 480$ W.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$P_{out} = 0.90 \\times 480 = 432$ W.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$I_s = P_{out}/V_s = 432/48 = 9.0$ A.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$I_s = 9.0$ A.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 480 W. (b) 432 W. (c) 9.0 A",
            commonErrors: [
              "Assuming 100% efficiency — must apply the 90% factor.",
            ],
          },
        },
        {
          id: "physhl-u4-tr-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A transformer has a turns ratio $N_s:N_p = 1:20$ and the primary voltage is 6.0 kV.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the secondary voltage.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "If the primary current is 0.40 A and the transformer is ideal, calculate the secondary current.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Transformer",
                statement: "$V_s = V_pN_s/N_p$; $I_s = V_pI_p/V_s$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$V_s = 6000/20 = 300$ V.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$V_s = 300$ V.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$I_s = V_pI_p/V_s = 6000 \\times 0.40/300 = 8.0$ A.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$I_s = 8.0$ A.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 300 V. (b) 8.0 A",
            commonErrors: [
              "Using 6.0 kV without converting — consistent units required.",
            ],
          },
        },
        {
          id: "physhl-u4-tr-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Describe and explain how a transformer transfers power from the primary to the secondary coil.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transformer operation",
                statement:
                  "AC in primary → changing flux in core → induced EMF in secondary (Faraday's law).",
              },
            ],
            steps: [
              {
                reasoning:
                  "AC current in primary produces a changing magnetic field.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The iron core channels this changing flux through both coils.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Changing flux linkage induces an EMF in the secondary coil (Faraday's law).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The induced voltage ratio equals the turns ratio $V_s/V_p = N_s/N_p$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Power is (ideally) conserved: $V_pI_p = V_sI_s$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Energy is transferred electromagnetically, not by direct electrical connection.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Changing primary current → changing core flux → induced EMF in secondary; voltage ratio = turns ratio, power conserved.",
            commonErrors: [
              "Saying 'current flows through the transformer' — energy transfers via magnetic flux, not conduction.",
            ],
          },
        },
        {
          id: "physhl-u4-tr-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "A transformer is rated 240 V input, 12 V output, 5.0 A output current, with 96% efficiency.",
          parts: [
            { label: "a", prompt: "Calculate the output power.", marks: 2 },
            {
              label: "b",
              prompt: "Calculate the input power required.",
              marks: 2,
            },
            { label: "c", prompt: "Calculate the primary current.", marks: 2 },
            {
              label: "d",
              prompt:
                "State two ways in which a real transformer loses energy.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Transformer",
                statement:
                  "$P_{out} = V_sI_s$; $P_{in} = P_{out}/\\eta$; $I_p = P_{in}/V_p$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$P_{out} = 12 \\times 5.0 = 60$ W.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$P_{out} = 60$ W.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$P_{in} = 60/0.96 = 62.5$ W.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$P_{in} = 62.5$ W.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$I_p = 62.5/240 = 0.26$ A.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$I_p = 0.26$ A.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Copper losses: $I^2R$ heating of windings.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Iron losses: eddy currents and hysteresis in the core.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Flux leakage: not all flux links both coils (also accept this as third valid point).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 60 W. (b) 62.5 W. (c) 0.26 A. (d) Copper I²R, iron eddy/hysteresis losses.",
            commonErrors: [
              "Dividing instead of multiplying by efficiency — $P_{in} = P_{out}/\\eta$.",
            ],
          },
        },
      ],
    },
  ],
};
