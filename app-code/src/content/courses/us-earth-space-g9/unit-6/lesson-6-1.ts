import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ess9-u6-lesson-6-1",
  code: "6-1",
  title: "Solar System and Earth's Position",
  goal: "I CAN describe the solar system and Earth's position within it.",
  standards: [
    "HS-ESS1-1",
    "HS-ESS1-2",
    "SEP: Developing and Using Models",
    "SEP: Obtaining, Evaluating, and Communicating Information",
  ],
  vocabulary: [
    {
      term: "Solar system",
      definition: "Sun + planets + moons + asteroids + comets.",
    },
    {
      term: "Terrestrial planets",
      definition: "Rocky inner planets: Mercury, Venus, Earth, Mars.",
    },
    {
      term: "Gas giants",
      definition: "Large outer planets: Jupiter, Saturn, Uranus, Neptune.",
    },
    {
      term: "Asteroid belt",
      definition: "Region of rocky debris between Mars and Jupiter.",
    },
    {
      term: "Kuiper belt",
      definition: "Region of icy objects beyond Neptune.",
    },
    {
      term: "Oort cloud",
      definition: "Hypothetical sphere of comets at solar system edge.",
    },
  ],
  concepts: [
    {
      id: "ess9-u6-solarsystem",
      title: "Solar system structure",
      skill: "Describe the solar system's components and structure.",
      lesson: {
        sections: [
          {
            heading: "Solar system components",
            body: "- **Sun**: central star, 99.8% of mass.\n- **Planets**: 8 planets orbiting Sun.\n- **Moons**: natural satellites.\n- **Asteroids**: rocky debris (main belt).\n- **Comets**: icy bodies with tails.",
          },
          {
            heading: "Planet groups",
            body: "- **Terrestrial** (inner): Mercury, Venus, Earth, Mars — rocky, small.\n- **Gas giants** (outer): Jupiter, Saturn — large, gaseous.\n- **Ice giants**: Uranus, Neptune — frozen gases.",
          },
        ],
        keyFormulas: [
          { name: "Terrestrial", statement: "Inner rocky planets" },
          { name: "Gas giants", statement: "Outer large planets" },
          { name: "Sun", statement: "99.8% of mass" },
        ],
        workedExample: {
          problem: "Which planets are terrestrial?",
          solution: "Mercury, Venus, Earth, Mars.",
        },
      },
      questions: [
        {
          id: "ess9-u6-solar-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are Earth's terrestrial neighbors?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Jupiter, Saturn" },
              { id: "b", text: "Mercury, Venus, Mars" },
              { id: "c", text: "Uranus, Neptune" },
              { id: "d", text: "Pluto, Ceres" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Terrestrial",
                statement: "Mercury, Venus, Earth, Mars.",
              },
            ],
            steps: [
              {
                reasoning: "Terrestrial = Mercury, Venus, Earth, Mars.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Mercury, Venus, Mars",
            commonErrors: ["Jupiter, Saturn."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u6-solar-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What percentage of solar system mass is the Sun?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "fact", name: "Sun", statement: "99.8%." }],
            steps: [
              { reasoning: "Sun = 99.8% of mass.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "99.8%.",
            commonErrors: ["50%."],
            examinerNote: "A1 for 99.8%.",
          },
        },
        {
          id: "ess9-u6-solar-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What's the difference between terrestrial and gas giant planets?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Planet types",
                statement: "Rocky vs gaseous.",
              },
            ],
            steps: [
              {
                reasoning: "Terrestrial: rocky, small, inner.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Gas giants: gaseous, large, outer.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Terrestrial: solid surface; giants: no solid surface.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Answer: rocky vs gaseous.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Terrestrial rocky; gas giants gaseous.",
            commonErrors: ["Same type."],
            examinerNote: "B1 for each + A1.",
          },
        },
        {
          id: "ess9-u6-solar-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe the solar system's structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Structure",
                statement: "Sun + planets + debris.",
              },
            ],
            steps: [
              {
                reasoning: "Sun: central star, 99.8% mass.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Terrestrial planets: inner rocky.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Gas giants: outer large.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Asteroids, comets, Kuiper belt.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "Sun + terrestrial + gas giants + debris.",
            commonErrors: ["Incomplete."],
            examinerNote: "B2 for each component.",
          },
        },
      ],
    },
    {
      id: "ess9-u6-earthorbit",
      title: "Earth's orbit and rotation",
      skill: "Describe Earth's orbital and rotational motion.",
      lesson: {
        sections: [
          {
            heading: "Earth's motions",
            body: "- **Rotation**: 24 hours → day/night.\n- **Revolution**: 365.25 days → year.\n- **Axial tilt**: 23.5° → seasons.",
          },
          {
            heading: "Orbital characteristics",
            body: "- **Orbit**: slightly elliptical.\n- **Distance**: 1 AU = 150 million km.\n- **Speed**: ~30 km/s.",
          },
        ],
        keyFormulas: [
          { name: "Rotation", statement: "24 hours" },
          { name: "Revolution", statement: "365.25 days" },
          { name: "Axial tilt", statement: "23.5°" },
        ],
        workedExample: {
          problem: "What causes day and night?",
          solution: "Earth's rotation on axis.",
        },
      },
      questions: [
        {
          id: "ess9-u6-orbit-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes day and night?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Revolution" },
              { id: "b", text: "Rotation" },
              { id: "c", text: "Axial tilt" },
              { id: "d", text: "Moon" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Rotation", statement: "Day/night." },
            ],
            steps: [
              { reasoning: "Rotation → day/night.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Rotation",
            commonErrors: ["Revolution."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u6-orbit-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What causes seasons?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Seasons", statement: "Axial tilt." },
            ],
            steps: [
              {
                reasoning: "Axial tilt 23.5° → seasons.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Axial tilt.",
            commonErrors: ["Distance from sun."],
            examinerNote: "A1 for axial tilt.",
          },
        },
        {
          id: "ess9-u6-orbit-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What's the difference between rotation and revolution?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Motion", statement: "Spin vs orbit." },
            ],
            steps: [
              {
                reasoning: "Rotation: spin on axis (24h).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Revolution: orbit Sun (365d).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Rotation → day/night; revolution → year.",
                marks: 1,
                markCode: "B",
              },
              { reasoning: "Answer: spin vs orbit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rotation = spin; revolution = orbit.",
            commonErrors: ["Same."],
            examinerNote: "B1 for each + A1.",
          },
        },
        {
          id: "ess9-u6-orbit-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe Earth's orbital characteristics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Orbit",
                statement: "Elliptical, 1 AU.",
              },
            ],
            steps: [
              {
                reasoning: "Orbit slightly elliptical.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Distance: 1 AU = 150 million km.",
                marks: 2,
                markCode: "B",
              },
              { reasoning: "Speed: ~30 km/s.", marks: 2, markCode: "B" },
              { reasoning: "Period: 365.25 days.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "Elliptical orbit, 1 AU, 365.25 days.",
            commonErrors: ["Circular only."],
            examinerNote: "B2 for each characteristic.",
          },
        },
      ],
    },
    {
      id: "ess9-u6-habitable",
      title: "Habitable zone and conditions",
      skill: "Explain conditions that make Earth habitable.",
      lesson: {
        sections: [
          {
            heading: "Habitable zone",
            body: "Region where liquid water can exist.\nEarth is in Sun's habitable zone.\nToo close → too hot; too far → too cold.",
          },
          {
            heading: "Earth's favorable conditions",
            body: "- Right distance from Sun.\n- Atmosphere with greenhouse gases.\n- Magnetic field protects from solar wind.\n- Liquid water abundant.\n- Plate tectonics regulates climate.",
          },
        ],
        keyFormulas: [
          { name: "Habitable zone", statement: "Liquid water possible" },
          { name: "Earth", statement: "In habitable zone" },
          {
            name: "Conditions",
            statement: "Atmosphere, water, magnetic field",
          },
        ],
        workedExample: {
          problem: "Why is Earth habitable?",
          solution: "Right distance, atmosphere, water, magnetic field.",
        },
      },
      questions: [
        {
          id: "ess9-u6-hab-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the habitable zone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zone with oxygen" },
              { id: "b", text: "Zone where liquid water can exist" },
              { id: "c", text: "Zone with life" },
              { id: "d", text: "Zone with plants" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Habitable zone",
                statement: "Liquid water possible.",
              },
            ],
            steps: [
              {
                reasoning: "Habitable = liquid water.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Liquid water possible",
            commonErrors: ["Oxygen."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u6-hab-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is Earth habitable? Name two reasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Habitable",
                statement: "Multiple conditions.",
              },
            ],
            steps: [
              {
                reasoning: "Right distance from Sun.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Atmosphere + water + magnetic field.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Right distance, atmosphere, water, magnetic field.",
            commonErrors: ["One reason."],
            examinerNote: "B1 for each.",
          },
        },
        {
          id: "ess9-u6-hab-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What would happen if Earth were closer to the Sun?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Habitable zone",
                statement: "Too close → too hot.",
              },
            ],
            steps: [
              { reasoning: "Higher temperature.", marks: 1, markCode: "R" },
              { reasoning: "Water would evaporate.", marks: 1, markCode: "R" },
              {
                reasoning: "Atmosphere might escape.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: too hot for life.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Too hot — water evaporates, atmosphere escapes.",
            commonErrors: ["No change."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u6-hab-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "List conditions that make Earth habitable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Conditions",
                statement: "Multiple favorable factors.",
              },
            ],
            steps: [
              {
                reasoning: "Right distance from Sun (habitable zone).",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Atmosphere with greenhouse gases.",
                marks: 2,
                markCode: "B",
              },
              { reasoning: "Liquid water abundant.", marks: 2, markCode: "B" },
              {
                reasoning: "Magnetic field + plate tectonics.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Distance, atmosphere, water, magnetic field, tectonics.",
            commonErrors: ["One condition."],
            examinerNote: "B2 for each condition.",
          },
        },
      ],
    },
  ],
};
