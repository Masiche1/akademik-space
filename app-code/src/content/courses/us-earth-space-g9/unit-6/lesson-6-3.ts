import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "ess9-u6-lesson-6-3",
  code: "6-3",
  title: "Other Planets and Space Exploration",
  goal: "I CAN compare other planets and describe space exploration.",
  standards: [
    "HS-ESS1-1",
    "HS-ESS1-2",
    "SEP: Obtaining, Evaluating, and Communicating Information",
    "SEP: Developing and Using Models",
  ],
  vocabulary: [
    { term: "Venus", definition: "Hot, dense atmosphere, closest planet." },
    {
      term: "Mars",
      definition: "Red planet, thin atmosphere, potential for life.",
    },
    {
      term: "Jupiter",
      definition: "Largest planet, gas giant, Great Red Spot.",
    },
    { term: "Saturn", definition: "Famous rings, gas giant." },
    { term: "Space probe", definition: "Unmanned spacecraft for exploration." },
    { term: "Rover", definition: "Mobile robot for planetary surface." },
    {
      term: "Telescope",
      definition: "Instrument for observing distant objects.",
    },
  ],
  concepts: [
    {
      id: "ess9-u6-planets",
      title: "Other planets",
      skill: "Compare characteristics of other planets.",
      lesson: {
        sections: [
          {
            heading: "Inner planets",
            body: "- **Mercury**: smallest, extreme temperatures, no atmosphere.\n- **Venus**: hottest, dense CO₂ atmosphere, pressure crushing.\n- **Mars**: thin atmosphere, red (iron oxide), potential for life.\n- **Earth**: habitable, liquid water.",
          },
          {
            heading: "Outer planets",
            body: "- **Jupiter**: largest, gas giant, Great Red Spot storm.\n- **Saturn**: famous rings, gas giant.\n- **Uranus**: ice giant, tilted on side.\n- **Neptune**: ice giant, windiest.",
          },
        ],
        keyFormulas: [
          { name: "Mercury", statement: "Smallest, extreme temps" },
          { name: "Venus", statement: "Hottest, dense atmosphere" },
          { name: "Mars", statement: "Thin atmosphere, red" },
          { name: "Jupiter", statement: "Largest, gas giant" },
        ],
        workedExample: {
          problem: "Which planet is hottest?",
          solution: "Venus — greenhouse effect + dense atmosphere.",
        },
      },
      questions: [
        {
          id: "ess9-u6-planets-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which planet is hottest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mercury" },
              { id: "b", text: "Venus" },
              { id: "c", text: "Mars" },
              { id: "d", text: "Jupiter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Venus", statement: "Hottest planet." },
            ],
            steps: [{ reasoning: "Venus = hottest.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Venus",
            commonErrors: ["Mercury."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u6-planets-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which planet is known for its rings?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Saturn", statement: "Famous rings." },
            ],
            steps: [
              {
                reasoning: "Saturn has prominent rings.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Saturn.",
            commonErrors: ["Jupiter."],
            examinerNote: "A1 for Saturn.",
          },
        },
        {
          id: "ess9-u6-planets-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is Venus hotter than Mercury despite being farther from the Sun?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Venus",
                statement: "Greenhouse effect.",
              },
            ],
            steps: [
              {
                reasoning: "Venus has dense CO₂ atmosphere.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Greenhouse effect traps heat.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Mercury has no atmosphere → heat escapes.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: greenhouse effect.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Venus greenhouse effect traps heat.",
            commonErrors: ["Closer to sun."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u6-planets-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare inner and outer planets.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Planet types",
                statement: "Terrestrial vs gas giants.",
              },
            ],
            steps: [
              {
                reasoning: "Inner: rocky, small, terrestrial.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Outer: gaseous, large, gas giants.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Inner: solid surface; outer: no solid surface.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: rocky vs gaseous.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Inner rocky; outer gaseous.",
            commonErrors: ["Same type."],
            examinerNote: "B2 for each + A1.",
          },
        },
      ],
    },
    {
      id: "ess9-u6-exploration",
      title: "Space exploration",
      skill: "Describe methods and achievements of space exploration.",
      lesson: {
        sections: [
          {
            heading: "Exploration methods",
            body: "- **Telescopes**: observe distant objects.\n- **Probes**: flyby/orbiter missions.\n- **Landers**: touch down on surface.\n- **Rovers**: mobile surface exploration.\n- **Crewed missions**: human spaceflight.",
          },
          {
            heading: "Key achievements",
            body: "- Moon landing (1969).\n- Mars rovers (Curiosity, Perseverance).\n- Voyager probes (interstellar space).\n- ISS (continuous human presence).",
          },
        ],
        keyFormulas: [
          { name: "Telescopes", statement: "Remote observation" },
          { name: "Probes", statement: "Unmanned missions" },
          { name: "Rovers", statement: "Surface exploration" },
        ],
        workedExample: {
          problem: "What's the difference between a probe and a rover?",
          solution: "Probe = flyby/orbiter; rover = surface mobile.",
        },
      },
      questions: [
        {
          id: "ess9-u6-explore-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a space probe?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Crewed spacecraft" },
              { id: "b", text: "Unmanned exploration spacecraft" },
              { id: "c", text: "Satellite" },
              { id: "d", text: "Rocket" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Probe",
                statement: "Unmanned spacecraft.",
              },
            ],
            steps: [
              { reasoning: "Probe = unmanned.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Unmanned exploration spacecraft",
            commonErrors: ["Crewed."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u6-explore-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What's the difference between a probe and a rover?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Probe vs rover",
                statement: "Flyby vs surface.",
              },
            ],
            steps: [
              { reasoning: "Probe: flyby/orbiter.", marks: 1, markCode: "R" },
              { reasoning: "Rover: surface mobile.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Probe = flyby; rover = surface.",
            commonErrors: ["Same."],
            examinerNote: "R1, A1.",
          },
        },
        {
          id: "ess9-u6-explore-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Name three space exploration achievements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Achievements",
                statement: "Multiple milestones.",
              },
            ],
            steps: [
              { reasoning: "Moon landing (1969).", marks: 1, markCode: "B" },
              {
                reasoning: "Mars rovers (Curiosity, Perseverance).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Voyager probes (interstellar).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Answer: three achievements.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Moon landing, Mars rovers, Voyager.",
            commonErrors: ["One achievement."],
            examinerNote: "B1 for each + A1.",
          },
        },
        {
          id: "ess9-u6-explore-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe different space exploration methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Methods",
                statement: "Multiple approaches.",
              },
            ],
            steps: [
              {
                reasoning: "Telescopes: remote observation.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Probes: flyby/orbiter missions.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Rovers/landers: surface exploration.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Crewed missions: human spaceflight.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "Telescopes, probes, rovers, crewed missions.",
            commonErrors: ["One method."],
            examinerNote: "B2 for each method.",
          },
        },
      ],
    },
    {
      id: "ess9-u6-future",
      title: "Future of space exploration",
      skill: "Discuss future space exploration goals and challenges.",
      lesson: {
        sections: [
          {
            heading: "Future goals",
            body: "- **Mars colonization**: human settlement.\n- **Moon base**: Artemis program.\n- **Asteroid mining**: resource extraction.\n- **Interstellar travel**: Breakthrough Starshot.",
          },
          {
            heading: "Challenges",
            body: "- Radiation exposure.\n- Life support systems.\n- Long-duration missions.\n- Cost and technology.",
          },
        ],
        keyFormulas: [
          { name: "Mars", statement: "Colonization goal" },
          { name: "Moon", statement: "Base planned" },
          { name: "Challenges", statement: "Radiation, life support, cost" },
        ],
        workedExample: {
          problem: "What are major challenges for Mars colonization?",
          solution: "Radiation, life support, long travel time, cost.",
        },
      },
      questions: [
        {
          id: "ess9-u6-future-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's a major goal of future space exploration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tourism" },
              { id: "b", text: "Mars colonization" },
              { id: "c", text: "Military" },
              { id: "d", text: "Mining only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Mars",
                statement: "Colonization goal.",
              },
            ],
            steps: [
              {
                reasoning: "Mars colonization = major goal.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Mars colonization",
            commonErrors: ["Tourism."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u6-future-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are challenges for human spaceflight?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Challenges",
                statement: "Multiple obstacles.",
              },
            ],
            steps: [
              {
                reasoning: "Radiation, life support, cost.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Radiation, life support, cost, distance.",
            commonErrors: ["No challenges."],
            examinerNote: "A1 for challenges.",
          },
        },
        {
          id: "ess9-u6-future-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is Mars colonization challenging?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Mars",
                statement: "Multiple challenges.",
              },
            ],
            steps: [
              {
                reasoning: "Long travel time (6-9 months).",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Radiation exposure.", marks: 1, markCode: "R" },
              {
                reasoning: "Life support systems needed.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: multiple challenges.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Distance, radiation, life support, cost.",
            commonErrors: ["Easy."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u6-future-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Discuss future space exploration goals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Goals",
                statement: "Multiple objectives.",
              },
            ],
            steps: [
              { reasoning: "Mars colonization.", marks: 2, markCode: "B" },
              { reasoning: "Moon base (Artemis).", marks: 2, markCode: "B" },
              { reasoning: "Asteroid mining.", marks: 2, markCode: "B" },
              {
                reasoning: "Interstellar travel research.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "Mars, Moon, asteroids, interstellar.",
            commonErrors: ["One goal."],
            examinerNote: "B2 for each goal.",
          },
        },
      ],
    },
  ],
};
