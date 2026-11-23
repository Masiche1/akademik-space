import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ess9-u6-lesson-6-2",
  code: "6-2",
  title: "Moon and Tides",
  goal: "I CAN describe the Moon's effects on Earth and explain tides.",
  standards: [
    "HS-ESS1-1",
    "HS-ESS1-2",
    "SEP: Developing and Using Models",
    "CCC: Cause and Effect",
  ],
  vocabulary: [
    { term: "Moon", definition: "Earth's natural satellite." },
    { term: "Tides", definition: "Periodic rise/fall of sea level." },
    {
      term: "Spring tide",
      definition: "Higher than normal tides (full/new moon).",
    },
    {
      term: "Neap tide",
      definition: "Lower than normal tides (quarter moons).",
    },
    { term: "Lunar month", definition: "29.5 days for Moon to orbit Earth." },
    {
      term: "Tidal locking",
      definition: "Same side of Moon always faces Earth.",
    },
  ],
  concepts: [
    {
      id: "ess9-u6-moon",
      title: "Moon properties",
      skill: "Describe the Moon's characteristics and relationship to Earth.",
      lesson: {
        sections: [
          {
            heading: "Moon facts",
            body: "- **Distance**: 384,400 km from Earth.\n- **Diameter**: 3,474 km (1/4 Earth's).\n- **Orbit**: 29.5 days (lunar month).\n- **Tidal locking**: same side always faces Earth.",
          },
          {
            heading: "Moon's effects",
            body: "- **Tides**: gravitational pull on oceans.\n- **Stabilizes axis**: prevents extreme tilt changes.\n- **Eclipses**: alignment of Sun-Earth-Moon.",
          },
        ],
        keyFormulas: [
          { name: "Distance", statement: "384,400 km" },
          { name: "Diameter", statement: "3,474 km" },
          { name: "Orbit", statement: "29.5 days" },
        ],
        workedExample: {
          problem: "Why does the Moon always show the same face?",
          solution: "Tidal locking — same rotation and orbital periods.",
        },
      },
      questions: [
        {
          id: "ess9-u6-moon-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why does the Moon always show the same face?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No rotation" },
              { id: "b", text: "Tidal locking" },
              { id: "c", text: "Earth's shadow" },
              { id: "d", text: "Coincidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Tidal locking",
                statement: "Same face always.",
              },
            ],
            steps: [
              {
                reasoning: "Tidal locking → same face.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Tidal locking",
            commonErrors: ["No rotation."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u6-moon-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What causes tides?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Tides", statement: "Moon's gravity." },
            ],
            steps: [
              {
                reasoning: "Moon's gravity pulls oceans.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Moon's gravitational pull.",
            commonErrors: ["Wind."],
            examinerNote: "A1 for gravity.",
          },
        },
        {
          id: "ess9-u6-moon-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What's the difference between spring and neap tides?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Tides",
                statement: "Alignment determines type.",
              },
            ],
            steps: [
              {
                reasoning: "Spring: full/new moon → Sun+Moon align → higher.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Neap: quarter moons → perpendicular → lower.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Spring > neap in height.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Answer: alignment determines height.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Spring = aligned (higher); neap = perpendicular (lower).",
            commonErrors: ["Same."],
            examinerNote: "B1 for each + A1.",
          },
        },
        {
          id: "ess9-u6-moon-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe the Moon's effects on Earth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Effects",
                statement: "Multiple influences.",
              },
            ],
            steps: [
              {
                reasoning: "Tides: gravitational pull on oceans.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Stabilizes Earth's axial tilt.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Eclipses: Sun-Earth-Moon alignment.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Cultural: calendar, mythology.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "Tides, axis stability, eclipses, cultural.",
            commonErrors: ["Tides only."],
            examinerNote: "B2 for each effect.",
          },
        },
      ],
    },
    {
      id: "ess9-u6-tides",
      title: "Tides and lunar cycles",
      skill: "Explain tide mechanisms and lunar phases.",
      lesson: {
        sections: [
          {
            heading: "Tide mechanisms",
            body: "Moon's gravity pulls water toward it → bulge on near side.\nEarth's rotation carries bulge → high/low tides.\nTwo bulges: near side + far side (inertia).",
          },
          {
            heading: "Lunar phases",
            body: "Moon's appearance changes as it orbits Earth:\nNew → waxing crescent → first quarter → waxing gibbous → full → waning gibbous → third quarter → waning crescent.",
          },
        ],
        keyFormulas: [
          { name: "Tides", statement: "Gravity + rotation" },
          { name: "Phases", statement: "29.5-day cycle" },
          { name: "Bulges", statement: "Near + far side" },
        ],
        workedExample: {
          problem: "Why are there two tidal bulges?",
          solution:
            "Near side: gravity pulls; far side: inertia carries water away.",
        },
      },
      questions: [
        {
          id: "ess9-u6-tides-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why are there two tidal bulges?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two moons" },
              { id: "b", text: "Gravity + inertia" },
              { id: "c", text: "Wind" },
              { id: "d", text: "Random" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Bulges",
                statement: "Gravity near, inertia far.",
              },
            ],
            steps: [
              {
                reasoning: "Near: gravity; far: inertia.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Gravity + inertia",
            commonErrors: ["Two moons."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u6-tides-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many high tides occur per day?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Tides",
                statement: "Two high tides per day.",
              },
            ],
            steps: [
              {
                reasoning: "Two high tides per day (~12.4 hours apart).",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Two.",
            commonErrors: ["One."],
            examinerNote: "A1 for two.",
          },
        },
        {
          id: "ess9-u6-tides-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What causes lunar phases?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Phases",
                statement: "Sun-Moon-Earth geometry.",
              },
            ],
            steps: [
              { reasoning: "Moon orbits Earth.", marks: 1, markCode: "R" },
              {
                reasoning: "Sun illuminates different portions.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "We see varying amounts of lit side.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: orbital position determines phase.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Orbital position → different lit portions.",
            commonErrors: ["Earth's shadow."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u6-tides-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain the mechanism of tides.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Tides",
                statement: "Gravity + rotation.",
              },
            ],
            steps: [
              {
                reasoning: "Moon's gravity pulls water toward it.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Creates bulge on near side.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Inertia creates bulge on far side.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Earth's rotation → two high/low tides daily.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "Gravity + inertia → two bulges → two tides.",
            commonErrors: ["One bulge."],
            examinerNote: "B2 for each mechanism.",
          },
        },
      ],
    },
    {
      id: "ess9-u6-eclipses",
      title: "Eclipses and lunar phenomena",
      skill: "Explain solar and lunar eclipses and their conditions.",
      lesson: {
        sections: [
          {
            heading: "Solar eclipse",
            body: "Moon passes between Sun and Earth → blocks sunlight.\n- **Total**: Moon completely covers Sun.\n- **Partial**: Moon covers part of Sun.\n- **Annular**: Moon too far → ring of fire.",
          },
          {
            heading: "Lunar eclipse",
            body: "Earth passes between Sun and Moon → Earth's shadow on Moon.\n- **Total**: Moon completely in shadow (red).\n- **Partial**: part in shadow.",
          },
        ],
        keyFormulas: [
          { name: "Solar", statement: "Moon between Sun-Earth" },
          { name: "Lunar", statement: "Earth between Sun-Moon" },
          { name: "Total", statement: "Complete coverage" },
        ],
        workedExample: {
          problem: "Why doesn't every new moon cause a solar eclipse?",
          solution: "Moon's orbit tilted 5° → rarely aligned perfectly.",
        },
      },
      questions: [
        {
          id: "ess9-u6-eclipse-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes a solar eclipse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Earth blocks Sun" },
              { id: "b", text: "Moon blocks Sun" },
              { id: "c", text: "Clouds block Sun" },
              { id: "d", text: "Stars block Sun" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Solar eclipse",
                statement: "Moon blocks Sun.",
              },
            ],
            steps: [{ reasoning: "Moon blocks Sun.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Moon blocks Sun",
            commonErrors: ["Earth blocks."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u6-eclipse-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why doesn't every new moon cause a solar eclipse?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Eclipses",
                statement: "Orbital tilt prevents alignment.",
              },
            ],
            steps: [
              { reasoning: "Moon's orbit tilted 5°.", marks: 1, markCode: "R" },
              {
                reasoning: "Rarely perfectly aligned.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Orbital tilt prevents perfect alignment.",
            commonErrors: ["Every new moon."],
            examinerNote: "R1, A1.",
          },
        },
        {
          id: "ess9-u6-eclipse-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What's the difference between solar and lunar eclipses?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Eclipses",
                statement: "Different alignments.",
              },
            ],
            steps: [
              {
                reasoning: "Solar: Moon between Sun-Earth.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Lunar: Earth between Sun-Moon.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Solar affects Earth; lunar affects Moon.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Answer: different alignments.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Solar: Moon blocks Sun; lunar: Earth shadows Moon.",
            commonErrors: ["Same."],
            examinerNote: "B1 for each + A1.",
          },
        },
        {
          id: "ess9-u6-eclipse-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe types of solar eclipses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Solar eclipses",
                statement: "Total, partial, annular.",
              },
            ],
            steps: [
              {
                reasoning: "Total: Moon completely covers Sun.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Partial: Moon covers part of Sun.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Annular: Moon too far → ring of fire.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: three types based on alignment/distance.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Total, partial, annular.",
            commonErrors: ["One type."],
            examinerNote: "B2 for each type.",
          },
        },
      ],
    },
  ],
};
