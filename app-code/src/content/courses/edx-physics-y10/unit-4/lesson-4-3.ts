import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "eph10-u4-lesson-4-3",
  code: "4-3",
  title: "Practical Skills: Waves, Light and Radioactivity",
  goal: "I CAN investigate waves, light and radioactivity with appropriate techniques.",
  standards: ["Edexcel IGCSE Physics 4PH1 — Investigative Skills"],
  vocabulary: [
    {
      term: "Ripple tank",
      definition: "Shallow water tank for observing wave behaviour.",
    },
    {
      term: "Geiger counter",
      definition: "Detects ionising radiation — counts per minute.",
    },
    {
      term: "Half-life",
      definition: "Time for activity to halve — constant per isotope.",
    },
    {
      term: "Critical angle",
      definition: "Angle beyond which light totally internally reflects.",
    },
  ],
  concepts: [
    {
      id: "eph10-u4-waves",
      title: "Investigating Waves",
      skill: "Measure wave properties using ripple tanks and oscilloscopes.",
      lesson: {
        sections: [
          {
            heading: "Ripple tank",
            body: "**Setup**: shallow water tray, lamp above, stroboscope for freezing motion. **Measurements**: wavelength from crest spacing, frequency from strobe rate or source frequency, speed = fλ.\n\n**Experiments**: refraction at depth change (speed changes), reflection at barrier, diffraction through gap (compare gap vs wavelength), interference with two sources.",
          },
          {
            heading: "Sound and light",
            body: "**Sound speed**: measure echo — distance ÷ time × 2 (round trip). Or resonance tube — find air column lengths for resonance, calculate speed.\n\n**Light speed**: very hard to measure directly at IGCSE — use known value 3×10⁸ m/s. **Frequency**: oscilloscope — measure time per division × frequency setting, count cycles. **Light experiments**: measure angle of incidence/reflection, critical angle for TIR.",
          },
        ],
        keyFormulas: [
          {
            name: "Wave equation",
            statement: "v = fλ — speed = frequency × wavelength.",
          },
          { name: "Echo", statement: "speed = 2 × distance ÷ time." },
        ],
        workedExample: {
          problem: "Wavelength 2cm, frequency 50Hz. Speed?",
          solution: "v = 50 × 0.02 = 1 m/s.",
        },
      },
      questions: [
        {
          id: "eph10-u4-waves-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a ripple tank, what does a stroboscope do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Freezes wave motion" },
              { id: "b", text: "Measures wavelength" },
              { id: "c", text: "Creates waves" },
              { id: "d", text: "Measures speed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stroboscope",
                statement: "Flashes light at wave frequency — appears frozen.",
              },
            ],
            steps: [
              {
                reasoning: "Freezes wave motion for measurement.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Freezes motion",
            commonErrors: ["Creates waves confused."],
          },
        },
        {
          id: "eph10-u4-waves-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do you measure wavelength in a ripple tank?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wavelength",
                statement: "Distance between adjacent crests/troughs.",
              },
            ],
            steps: [
              {
                reasoning: "Measure several crests.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Divide by number of wavelengths.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Repeat and average.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Measure crest spacing ÷ number of wavelengths — average repeats.",
            commonErrors: ["Single measurement.", "Crest-to-trough confused."],
          },
        },
        {
          id: "eph10-u4-waves-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sound echo: distance 340m, time 2.0s. Calculate speed of sound.",
          response: {
            type: "numeric",
            parts: [{ label: "Speed (m/s)", answer: 340 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Echo",
                statement: "v = 2d/t — round trip.",
              },
            ],
            steps: [
              {
                reasoning: "v = 2×340 ÷ 2.0 = 340 m/s.",
                marks: 4,
                markCode: "M",
              },
            ],
            finalAnswer: "340 m/s",
            commonErrors: ["Forgot ×2 — round trip.", "Wrong formula."],
          },
        },
        {
          id: "eph10-u4-waves-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Investigating diffraction through gaps of different widths.",
          parts: [
            { label: "a", prompt: "Describe ripple tank setup.", marks: 3 },
            {
              label: "b",
              prompt: "Describe procedure and measurements.",
              marks: 3,
            },
            { label: "c", prompt: "State expected relationship.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diffraction",
                statement: "Smaller gap (vs λ) → more spreading.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Ripple tank, barrier with gaps, strobe.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Generate waves, observe through gaps.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning:
                  "(b) Measure gap width, wavelength, spreading angle.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Repeat for different gap widths.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(c) Smaller gap → more diffraction/spreading.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) tank+barrier+strobe (b) measure gaps+λ+angle (c) smaller gap = more spreading",
            commonErrors: ["Wrong variable.", "No repeats."],
          },
        },
      ],
    },
    {
      id: "eph10-u4-radioactivity",
      title: "Investigating Radioactivity",
      skill: "Measure radioactive decay safely and analyse half-life.",
      lesson: {
        sections: [
          {
            heading: "Safe measurement",
            body: "**Geiger-Müller tube**: detects ionising radiation, counts per second/minute. **Background radiation**: measure first, subtract from readings. **Distance**: use tongs/remote handling — never touch source. **Time**: fixed counting intervals for comparison.\n\n**Half-life experiment**: use safe simulation (dice/coins dropping) OR school source if permitted. Measure activity vs time — activity halves each half-life.",
          },
          {
            heading: "Data analysis",
            body: "**Decay curve**: exponential — steep initial drop, flattening over time. **Half-life**: read time for activity to halve — constant regardless of starting activity. **Calculations**: A = A₀(½)^(t/T½) — calculate remaining activity.\n\n**Safety**: lead shielding for storage, minimize exposure time, maximize distance (inverse square law), never point at people.",
          },
        ],
        keyFormulas: [
          {
            name: "Half-life",
            statement: "Time for activity to halve — constant per isotope.",
          },
          { name: "Decay", statement: "A = A₀(½)^(t/T½)." },
        ],
        workedExample: {
          problem: "Activity 800 cpm, half-life 5 min. Activity after 15 min?",
          solution: "3 half-lives: 800 → 400 → 200 → 100 cpm.",
        },
      },
      questions: [
        {
          id: "eph10-u4-radioactivity-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What must be subtracted from Geiger counter readings?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distance" },
              { id: "b", text: "Background radiation" },
              { id: "c", text: "Source activity" },
              { id: "d", text: "Time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Background",
                statement: "Natural radiation always present — subtract.",
              },
            ],
            steps: [
              {
                reasoning: "Background radiation subtracted.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Background",
            commonErrors: ["Source confused."],
          },
        },
        {
          id: "eph10-u4-radioactivity-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does a Geiger counter show decreasing counts over time for a radioactive source?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Radioactive decay",
                statement:
                  "Atoms decay randomly — fewer undecayed atoms remain.",
              },
            ],
            steps: [
              {
                reasoning: "Radioactive atoms decay over time.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Fewer undecayed atoms → fewer decays per second.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Activity decreases exponentially.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Fewer undecayed atoms → lower activity — exponential decay.",
            commonErrors: ["Counter breaks assumed.", "No atom link."],
          },
        },
        {
          id: "eph10-u4-radioactivity-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Half-life is 10 minutes. Activity starts at 400 cpm. Calculate activity after 30 min.",
          response: {
            type: "numeric",
            parts: [{ label: "Activity (cpm)", answer: 50 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Decay",
                statement: "A = A₀(½)^(t/T½).",
              },
            ],
            steps: [
              {
                reasoning: "30 min = 3 half-lives: 400→200→100→50 cpm.",
                marks: 4,
                markCode: "M",
              },
            ],
            finalAnswer: "50 cpm",
            commonErrors: ["Wrong half-life count.", "Linear assumed."],
          },
        },
        {
          id: "eph10-u4-radioactivity-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Safe investigation of radioactive decay using a school source.",
          parts: [
            { label: "a", prompt: "List three safety precautions.", marks: 3 },
            { label: "b", prompt: "Describe measurement procedure.", marks: 3 },
            {
              label: "c",
              prompt: "How to find half-life from data?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Radioactivity safety",
                statement: "Minimize time, maximize distance, use shielding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Tongs/remote handling, lead shielding, minimize exposure time.",
                marks: 2,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "(a) Any three valid precautions.",
                marks: 1,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning:
                  "(b) Measure background, count source activity over fixed intervals.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Repeat readings, subtract background.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(c) Plot activity vs time — read time for halving.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) tongs/shielding/time (b) count+background subtract (c) graph+halving time",
            commonErrors: ["No safety.", "No background."],
          },
        },
      ],
    },
  ],
};
