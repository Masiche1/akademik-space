import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ebi10-u4-lesson-4-3",
  code: "4-3",
  title: "Biology Practical Skills III: Circulation and Respiration",
  goal: "I CAN measure physiological parameters safely and interpret results.",
  standards: ["Edexcel IGCSE Biology 4BI1 — Investigative Skills"],
  vocabulary: [
    {
      term: "Pulse rate",
      definition: "Heartbeats per minute — measured at wrist or neck.",
    },
    {
      term: "Vital capacity",
      definition: "Maximum air breathed in/out in one breath.",
    },
    { term: "Spirometer", definition: "Instrument measuring lung volumes." },
    {
      term: "Recovery rate",
      definition: "How quickly pulse returns to normal after exercise.",
    },
  ],
  concepts: [
    {
      id: "ebi10-u4-circulation",
      title: "Measuring Circulation and Respiration",
      skill: "Measure pulse, lung capacity and recovery safely.",
      lesson: {
        sections: [
          {
            heading: "Pulse and exercise",
            body: "**Pulse measurement**: count beats at wrist (radial artery) or neck (carotid) for 30s ×2. **Exercise test**: measure resting pulse → exercise (step-ups/star jumps) → measure pulse immediately and at intervals → recovery rate.\n\n**Variables**: independent = exercise intensity/duration; dependent = pulse rate; controls = same person, same exercise, rest period. **Safety**: warm up, stop if dizzy, medical conditions check, hydration.",
          },
          {
            heading: "Lung capacity",
            body: "**Spirometer**: breathe normally then forcefully in/out — measures vital capacity and breathing rate. **Peak flow meter**: measures maximum exhale speed — used for asthma monitoring.\n\n**Data handling**: record multiple breaths, calculate average. Compare before/after exercise — breathing rate increases. **Errors**: incomplete breaths, leak in spirometer, not standing upright.",
          },
        ],
        keyFormulas: [
          {
            name: "Pulse rate",
            statement: "Beats per minute — count 30s × 2 or 60s.",
          },
          {
            name: "Recovery",
            statement: "Time for pulse to return to resting rate.",
          },
        ],
        workedExample: {
          problem: "Pulse = 32 beats in 30s. Rate?",
          solution: "32 × 2 = 64 bpm.",
        },
      },
      questions: [
        {
          id: "ebi10-u4-circulation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Where can pulse be measured?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wrist or neck" },
              { id: "b", text: "Only neck" },
              { id: "c", text: "Elbow" },
              { id: "d", text: "Only wrist" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Pulse sites",
                statement: "Radial artery (wrist) or carotid (neck).",
              },
            ],
            steps: [
              {
                reasoning: "Wrist or neck both work.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Wrist or neck",
            commonErrors: ["Single site assumed."],
          },
        },
        {
          id: "ebi10-u4-circulation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why measure resting pulse before exercise?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Baseline",
                statement: "Resting rate = baseline for comparison.",
              },
            ],
            steps: [
              {
                reasoning: "Baseline for comparison.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shows how much exercise raises rate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Recovery measured against resting value.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Baseline comparison — shows exercise effect and recovery target.",
            commonErrors: ["No baseline needed view.", "Vague."],
          },
        },
        {
          id: "ebi10-u4-circulation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student's pulse is 140 bpm after exercise but only drops to 120 after 2 minutes. Interpret this.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Recovery",
                statement:
                  "Slow recovery may indicate poor fitness or need for more rest.",
              },
            ],
            steps: [
              {
                reasoning: "High pulse after exercise = expected.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Slow recovery suggests cardiovascular strain.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "May indicate low fitness or overexertion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Recommend rest, gradual fitness improvement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Slow recovery suggests strain/low fitness — rest and gradual exercise recommended.",
            commonErrors: ["Normal assumed.", "No interpretation."],
          },
        },
        {
          id: "ebi10-u4-circulation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design an experiment: effect of exercise intensity on pulse rate.",
          parts: [
            { label: "a", prompt: "State variables.", marks: 2 },
            { label: "b", prompt: "Describe method safely.", marks: 3 },
            { label: "c", prompt: "Predict expected results.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exercise experiment",
                statement: "Vary intensity, measure pulse — safety first.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Independent: exercise intensity; dependent: pulse rate.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Resting pulse → low exercise → measure → high exercise → measure → recovery.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Same person, warm-up, rest between trials.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning:
                  "(c) Higher intensity → higher pulse; faster return for fit individuals.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Recovery rate inversely related to fitness.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) intensity/pulse (b) progressive exercise+measurements (c) higher intensity→higher pulse, fitness→faster recovery",
            commonErrors: ["Unsafe method.", "No controls."],
          },
        },
      ],
    },
    {
      id: "ebi10-u4-respiration",
      title: "Respiration and Gas Exchange Investigations",
      skill: "Investigate breathing rate and gas exchange in organisms.",
      lesson: {
        sections: [
          {
            heading: "Breathing investigations",
            body: "**Breathing rate**: count chest movements for 30s × 2 at rest, after exercise, during recovery. **Lung capacity**: spirometer measures vital capacity — maximum breath in/out. **Peak flow**: maximum exhale speed.\n\n**Investigations**: effect of exercise on breathing rate, effect of altitude (simulated), comparison between individuals. Controls: same position, same counting method, rest periods.",
          },
          {
            heading: "Gas exchange and photosynthesis",
            body: "**Hydrogencarbonate indicator**: CO₂ levels change colour — yellow (high CO₂) → purple (low CO₂). Used to measure respiration/photosynthesis rates. **Bromothymol blue**: same principle — yellow = CO₂.\n\n**Pondweed experiment**: count oxygen bubbles released per minute at different light intensities — measures photosynthesis rate. Controls: same plant, temperature, hydrogencarbonate concentration. **Respirometer**: measures oxygen uptake in germinating seeds.",
          },
        ],
        keyFormulas: [
          {
            name: "Breathing rate",
            statement: "Breaths per minute — count chest movements ×2.",
          },
          {
            name: "Bicarbonate indicator",
            statement: "Yellow=high CO₂, purple=low — tracks gas exchange.",
          },
        ],
        workedExample: {
          problem:
            "Pondweed releases 20 bubbles/min in bright light, 5 in dim. What does this show?",
          solution:
            "Photosynthesis rate higher in bright light — more light energy available.",
        },
      },
      questions: [
        {
          id: "ebi10-u4-respiration-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does hydrogencarbonate indicator detect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature" },
              { id: "b", text: "Carbon dioxide" },
              { id: "c", text: "pH only" },
              { id: "d", text: "Oxygen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bicarbonate indicator",
                statement: "Colour changes with CO₂ concentration.",
              },
            ],
            steps: [
              { reasoning: "Detects CO₂ levels.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Carbon dioxide",
            commonErrors: ["Oxygen confused."],
          },
        },
        {
          id: "ebi10-u4-respiration-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does breathing rate increase during exercise?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exercise breathing",
                statement:
                  "More O₂ needed for respiration; more CO₂ to remove.",
              },
            ],
            steps: [
              {
                reasoning: "Muscles need more oxygen.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "More CO₂ produced by respiration.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Faster breathing meets both needs.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "More O₂ needed + more CO₂ to remove — faster breathing meets demand.",
            commonErrors: ["Cooling assumed.", "No gas exchange link."],
          },
        },
        {
          id: "ebi10-u4-respiration-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why pondweed releases more oxygen bubbles in bright light.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Photosynthesis rate",
                statement:
                  "Light is limiting factor — more light = faster photosynthesis = more O₂.",
              },
            ],
            steps: [
              {
                reasoning: "Light provides energy for photosynthesis.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "More light = faster rate = more O₂ released.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Bubbles = oxygen byproduct.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "More light energy → faster photosynthesis → more O₂ bubbles released.",
            commonErrors: ["Respiration confused.", "No limiting factor."],
          },
        },
        {
          id: "ebi10-u4-respiration-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Investigating effect of light intensity on pondweed oxygen production.",
          parts: [
            { label: "a", prompt: "State variables.", marks: 2 },
            { label: "b", prompt: "Describe method.", marks: 3 },
            { label: "c", prompt: "Predict expected results.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pondweed experiment",
                statement:
                  "Count O₂ bubbles vs light intensity — controls essential.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Independent: light intensity; dependent: O₂ bubbles/min.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Same pondweed, temperature, hydrogencarbonate; vary lamp distance; count bubbles 1 min.",
                marks: 3,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning:
                  "(c) Rate increases with light then plateaus (other factors limit).",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning:
                  "(c) At high light, temperature/CO₂ becomes limiting.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) light/O₂ rate (b) same plant+conditions, vary distance, count bubbles (c) rises then plateaus",
            commonErrors: ["No controls.", "Linear expected."],
          },
        },
      ],
    },
  ],
};
