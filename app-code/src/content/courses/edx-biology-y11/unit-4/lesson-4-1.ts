import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ebi11-u4-lesson-4-1",
  code: "4-1",
  title: "Investigating Coordination and Response",
  goal: "I CAN investigate reflexes, hormones and homeostasis experimentally.",
  standards: ["Edexcel IGCSE Biology 4BI1 — Investigative Skills"],
  vocabulary: [
    {
      term: "Reaction time",
      definition:
        "Time between stimulus and response — measured in milliseconds.",
    },
    {
      term: "Ruler drop test",
      definition: "Catch falling ruler to measure reaction time.",
    },
    {
      term: "Homeostasis",
      definition: "Maintaining constant internal conditions.",
    },
    {
      term: "Glucose tolerance test",
      definition: "Measuring blood glucose response to sugar load.",
    },
  ],
  concepts: [
    {
      id: "ebi11-u4-reflex",
      title: "Investigating Reflexes and Reaction Time",
      skill: "Measure and analyse reaction times and reflex responses.",
      lesson: {
        sections: [
          {
            heading: "Reaction time experiments",
            body: "**Ruler drop**: partner holds ruler at 0 cm, you catch it — distance fallen × calibration = reaction time. Repeat 10+ times, discard anomalies, calculate mean. **Variables**: distractions (music, talking), age, fatigue, caffeine, practice.\n\n**Catch trial**: partner says 'catch' randomly — catches ruler when dropped. **Factors**: practice improves, distractions slow, alcohol/drugs impair. **Safety**: ensure clear space, don't aim at face.",
          },
          {
            heading: "Reflex arc investigation",
            body: "**Patellar reflex**: tap knee ligament with hammer → leg kicks. Measure strength/timing. **Pupil reflex**: shine light → pupil constricts — measure with ruler/pupil card.\n\n**Data handling**: multiple trials, mean reaction time, compare conditions (rested vs tired, with/without distraction). **Errors**: ruler grip position, anticipation, inconsistent release.",
          },
        ],
        keyFormulas: [
          {
            name: "Reaction time",
            statement:
              "Distance fallen correlates with time — longer distance = slower reaction.",
          },
          {
            name: "Reflex",
            statement: "Automatic response — faster than voluntary actions.",
          },
        ],
        workedExample: {
          problem: "Ruler falls 15 cm before catch. Reaction time?",
          solution: "~0.17 seconds (using t = √(2h/g) or calibration chart).",
        },
      },
      questions: [
        {
          id: "ebi11-u4-reflex-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the ruler drop test measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vision" },
              { id: "b", text: "Memory" },
              { id: "c", text: "Reaction time" },
              { id: "d", text: "Strength" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ruler drop",
                statement: "Measures reaction time via distance fallen.",
              },
            ],
            steps: [
              {
                reasoning: "Measures reaction time.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Reaction time",
            commonErrors: ["Vision assumed."],
          },
        },
        {
          id: "ebi11-u4-reflex-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are multiple trials needed for reaction time?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Repeated trials",
                statement: "Single readings unreliable — need average.",
              },
            ],
            steps: [
              {
                reasoning: "Single trial may be anomaly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Multiple trials give reliable mean.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Discard outliers before averaging.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Single readings unreliable — multiple trials + mean gives accurate result.",
            commonErrors: ["One trial enough.", "No averaging."],
          },
        },
        {
          id: "ebi11-u4-reflex-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why reaction time increases with distractions like music.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Distraction effect",
                statement: "Brain processes multiple stimuli — slows response.",
              },
            ],
            steps: [
              {
                reasoning: "Brain divides attention between stimuli.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Slower processing = slower reaction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reflex arc still fast but perception delayed.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Distractions compete for brain processing — slows stimulus recognition and response.",
            commonErrors: ["Muscles blamed.", "No processing link."],
          },
        },
        {
          id: "ebi11-u4-reflex-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Investigating effect of caffeine on reaction time.",
          parts: [
            { label: "a", prompt: "State variables and method.", marks: 4 },
            { label: "b", prompt: "Predict expected results.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Caffeine experiment",
                statement:
                  "Compare reaction times before/after caffeine — controls essential.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Independent: caffeine; dependent: reaction time.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Controls: same person, same time of day, rested.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Caffeine likely speeds reaction (stimulant).",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Effect may be small — need large sample.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) caffeine/time, ruler drop, controls (b) caffeine may speed slightly, small effect",
            commonErrors: ["Different people.", "No controls."],
          },
        },
      ],
    },
    {
      id: "ebi11-u4-homeostasis",
      title: "Investigating Homeostasis",
      skill: "Measure physiological parameters related to homeostasis.",
      lesson: {
        sections: [
          {
            heading: "Temperature regulation",
            body: "**Skin temperature**: measure with thermometer/thermal camera at rest vs after exercise vs in cold. **Sweating**: observe/pat skin — measure sweat production. **Blood flow**: observe skin colour changes (vasodilation/vasoconstriction).\n\n**Experiments**: hand in ice water (vasoconstriction), hand in warm water (vasodilation), exercise (sweating). Measure skin temp, colour, sweating rate.",
          },
          {
            heading: "Blood glucose and water balance",
            body: "**Glucose**: can't measure directly without equipment — use urine test strips (glucose in urine = high blood glucose) or discuss diabetic monitoring. **Water balance**: measure urine output/colour vs water intake — colour chart (pale = dilute, dark = concentrated).\n\n**Kidney function**: can't measure directly — discuss dialysis, urine tests for protein/glucose (kidney damage indicators).",
          },
        ],
        keyFormulas: [
          {
            name: "Homeostasis",
            statement:
              "Maintain constant internal conditions despite external changes.",
          },
          {
            name: "Vasodilation/vasoconstriction",
            statement: "Blood vessel diameter changes control heat loss.",
          },
        ],
        workedExample: {
          problem: "Hand in ice water turns pale. Why?",
          solution:
            "Vasoconstriction — blood diverted from skin to conserve heat.",
        },
      },
      questions: [
        {
          id: "ebi11-u4-homeostasis-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What happens to skin blood vessels in cold conditions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Burst" },
              { id: "b", text: "Dilate" },
              { id: "c", text: "Stay same" },
              { id: "d", text: "Constrict" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vasoconstriction",
                statement: "Cold → vessels constrict → less heat loss.",
              },
            ],
            steps: [
              {
                reasoning: "Vasoconstriction in cold.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Constrict",
            commonErrors: ["Dilate confused — that's heat loss."],
          },
        },
        {
          id: "ebi11-u4-homeostasis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does skin colour change in cold vs warm conditions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Blood flow",
                statement:
                  "Vasoconstriction reduces skin blood → pale; vasodilation increases → flushed.",
              },
            ],
            steps: [
              {
                reasoning: "Cold: less blood to skin → pale.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Warm: more blood to skin → flushed/red.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Controls heat loss/gain.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Blood flow changes alter skin colour — pale when cold (constricted), red when warm (dilated).",
            commonErrors: ["Colour unrelated.", "No blood flow link."],
          },
        },
        {
          id: "ebi11-u4-homeostasis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how urine colour indicates hydration level.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Water balance",
                statement: "Concentrated urine = dark; dilute = pale.",
              },
            ],
            steps: [
              {
                reasoning: "Kidneys concentrate/dilute urine.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Dehydrated → less water → concentrated → dark.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Hydrated → more water → dilute → pale.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "ADH controls water reabsorption.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Dark = concentrated (dehydrated); pale = dilute (hydrated) — ADH controls concentration.",
            commonErrors: ["Colour meaningless.", "No ADH link."],
          },
        },
        {
          id: "ebi11-u4-homeostasis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Investigating temperature regulation during exercise.",
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
                name: "Temperature experiment",
                statement: "Measure skin temp/sweating at rest vs exercise.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Independent: exercise; dependent: skin temp/sweat rate.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Resting measurements → exercise → immediate + recovery measurements.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Same person, controlled conditions.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Skin temp rises then sweating cools; returns to normal after rest.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Homeostasis maintains ~37°C core temp.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) exercise/temp+sweat (b) before/during/after (c) temp rises→sweat→returns to ~37°C",
            commonErrors: ["No controls.", "No prediction."],
          },
        },
      ],
    },
  ],
};
