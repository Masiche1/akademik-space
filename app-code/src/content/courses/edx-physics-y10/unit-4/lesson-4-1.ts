import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "eph10-u4-lesson-4-1",
  code: "4-1",
  title: "Practical Skills: Measurement and Uncertainty",
  goal: "I CAN use measuring instruments correctly and estimate uncertainties.",
  standards: ["Edexcel IGCSE Physics 4PH1 — Investigative Skills"],
  vocabulary: [
    {
      term: "Resolution",
      definition: "Smallest division an instrument can read.",
    },
    {
      term: "Uncertainty",
      definition:
        "± range within which true value lies — half smallest division.",
    },
    {
      term: "Parallax",
      definition: "Reading error from viewing scale at an angle.",
    },
    {
      term: "Zero error",
      definition: "Instrument reads non-zero when nothing measured.",
    },
  ],
  concepts: [
    {
      id: "eph10-u4-measurement",
      title: "Measuring Instruments and Uncertainty",
      skill:
        "Use instruments correctly and estimate measurement uncertainties.",
      lesson: {
        sections: [
          {
            heading: "Instruments",
            body: "**Ruler**: mm resolution, ±0.5mm uncertainty — read at eye level. **Vernier calipers**: 0.01mm — main + vernier scale. **Micrometer screw**: 0.01mm — thimble + ratchet. **Thermometer**: check range, wait for stabilisation. **Balance**: tare/zero first, wait for reading to settle.\n\n**Parallax**: always read at eye level — angle causes error. **Zero error**: check instrument reads zero — correct by subtracting offset. **Uncertainty** = half smallest division for single readings.",
          },
          {
            heading: "Recording and repeats",
            body: "Record to instrument precision — don't estimate beyond resolution unless instructed. **Repeats**: take 3+ readings, calculate mean, note range as uncertainty estimate. **Anomalies**: investigate before discarding — repeat if possible.\n\n**Significant figures**: match result precision to measurement precision — 2 sig figs for ruler, 3-4 for digital. **Units**: always include, convert consistently.",
          },
        ],
        keyFormulas: [
          {
            name: "Uncertainty",
            statement: "Half smallest division for single readings.",
          },
          {
            name: "Mean ± uncertainty",
            statement: "Average repeats ± half range.",
          },
        ],
        workedExample: {
          problem: "Ruler reads 5.2 cm. What's the uncertainty?",
          solution: "±0.05 cm — half of 1mm smallest division.",
        },
      },
      questions: [
        {
          id: "eph10-u4-measurement-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A ruler has mm divisions. What is the uncertainty of one reading?",
          response: {
            type: "numeric",
            parts: [{ label: "Uncertainty (mm)", answer: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Uncertainty",
                statement: "Half smallest division = 0.5 mm.",
              },
            ],
            steps: [{ reasoning: "0.5 mm.", marks: 2, markCode: "M" }],
            finalAnswer: "±0.5 mm",
            commonErrors: ["1 mm assumed."],
          },
        },
        {
          id: "eph10-u4-measurement-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is parallax error avoided by reading at eye level?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Parallax",
                statement:
                  "Angle changes apparent position — eye level eliminates.",
              },
            ],
            steps: [
              {
                reasoning: "Scale viewed at angle appears shifted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Eye level = perpendicular view.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "True position read accurately.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Perpendicular view eliminates parallax — accurate position reading.",
            commonErrors: ["Faster assumed.", "No angle link."],
          },
        },
        {
          id: "eph10-u4-measurement-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A micrometer has zero error of +0.02 mm. A reading is 5.45 mm. Correct it.",
          response: {
            type: "numeric",
            parts: [{ label: "Corrected (mm)", answer: 5.43 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Zero error",
                statement: "Subtract zero error from readings.",
              },
            ],
            steps: [
              { reasoning: "5.45 − 0.02 = 5.43 mm.", marks: 4, markCode: "M" },
            ],
            finalAnswer: "5.43 mm",
            commonErrors: ["Added instead.", "Ignored zero error."],
          },
        },
        {
          id: "eph10-u4-measurement-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Measuring diameter of wire with micrometer: readings 0.52, 0.54, 0.53, 0.78 mm.",
          parts: [
            {
              label: "a",
              prompt: "Identify and justify excluding any reading.",
              marks: 3,
            },
            { label: "b", prompt: "Calculate mean and uncertainty.", marks: 3 },
            {
              label: "c",
              prompt: "State final result with uncertainty.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data processing",
                statement: "Exclude anomalies, mean ± half range.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 0.78 is anomaly — far from others.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Justify: inconsistent with cluster.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Mean of 0.52-0.54 = 0.53 mm.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(b) Range = 0.02, uncertainty = ±0.01 mm.",
                marks: 2,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "(c) 0.53 ± 0.01 mm.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer: "(a) exclude 0.78 (b) 0.53±0.01 (c) 0.53±0.01 mm",
            commonErrors: ["Included anomaly.", "Wrong uncertainty."],
          },
        },
      ],
    },
    {
      id: "eph10-u4-circuits",
      title: "Electrical Practical Skills",
      skill: "Set up circuits correctly and measure electrical quantities.",
      lesson: {
        sections: [
          {
            heading: "Circuit setup",
            body: "**Components**: power supply, ammeter (series), voltmeter (parallel), resistors, variable resistor, switch. **Wiring**: connect securely, check polarity, ammeter in series with component, voltmeter across component.\n\n**Measurements**: read analogue meters at eye level, digital to appropriate precision. **V-I characteristics**: vary current via variable resistor, record V and I pairs, plot graph.",
          },
          {
            heading: "Data analysis",
            body: "**Ohmic conductors**: straight line through origin — R = V/I constant. **Non-ohmic**: filament bulb curves (R increases with temp), diode (one direction only). **Calculations**: R = V/I at each point — average for consistency. **Power**: P = VI — verify with measurements.",
          },
        ],
        keyFormulas: [
          {
            name: "Circuit rules",
            statement: "Ammeter series, voltmeter parallel.",
          },
          { name: "Ohm's law", statement: "V = IR — R = V/I." },
        ],
        workedExample: {
          problem: "V=6V, I=0.5A. Resistance?",
          solution: "R = 6/0.5 = 12 Ω.",
        },
      },
      questions: [
        {
          id: "eph10-u4-circuits-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Where is an ammeter connected?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Across battery" },
              { id: "b", text: "Parallel" },
              { id: "c", text: "Either" },
              { id: "d", text: "Series" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Ammeter",
                statement: "Series — measures current through circuit.",
              },
            ],
            steps: [
              { reasoning: "Ammeter in series.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Series",
            commonErrors: ["Parallel confused with voltmeter."],
          },
        },
        {
          id: "eph10-u4-circuits-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A filament bulb's V-I graph curves. Why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-ohmic",
                statement:
                  "Resistance increases with temperature — filament heats.",
              },
            ],
            steps: [
              {
                reasoning: "Current heats filament.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Higher temp → higher resistance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "V=IR — curve bends as R increases.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Filament heats → resistance increases → curve bends (non-ohmic).",
            commonErrors: ["Broken assumed.", "No temp link."],
          },
        },
        {
          id: "eph10-u4-circuits-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student measures R = V/I at each point and gets varying values. Explain and suggest fix.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resistance variation",
                statement: "Non-ohmic or measurement errors cause variation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Component may be non-ohmic (temperature-dependent).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Or measurement errors/parallax.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Use ohmic resistor for consistent R.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Or take readings at consistent temperature.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Non-ohmic component or errors — use ohmic resistor or consistent conditions.",
            commonErrors: ["Same R expected.", "No cause identified."],
          },
        },
        {
          id: "eph10-u4-circuits-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Investigating V-I characteristics of a resistor.",
          parts: [
            { label: "a", prompt: "Describe circuit setup.", marks: 3 },
            { label: "b", prompt: "Describe measurement procedure.", marks: 3 },
            { label: "c", prompt: "State expected graph shape.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "V-I experiment",
                statement: "Vary current, measure V and I pairs, plot graph.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Power supply, variable resistor, ammeter series, voltmeter parallel.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Check connections/polarity.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning:
                  "(b) Vary resistor → record V, I pairs → repeat 5+ times.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Plot V vs I graph.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning:
                  "(c) Straight line through origin for ohmic resistor.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) circuit+meters (b) vary+record+plot (c) straight line for ohmic",
            commonErrors: ["Wrong meter placement.", "No graph."],
          },
        },
      ],
    },
  ],
};
