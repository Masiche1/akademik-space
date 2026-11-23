import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "ess9-u9-lesson-9-1",
  code: "9-1",
  title: "Geologic Time Scale",
  goal: "I CAN describe Earth's history using the geologic time scale.",
  standards: [
    "HS-ESS1-4",
    "HS-ESS1-5",
    "SEP: Analyzing and Interpreting Data",
    "CCC: Patterns",
  ],
  vocabulary: [
    {
      term: "Geologic time scale",
      definition:
        "Timeline of Earth's history based on rock layers and fossils.",
    },
    { term: "Eon", definition: "Largest time division (e.g., Phanerozoic)." },
    { term: "Era", definition: "Major division within eon (e.g., Mesozoic)." },
    { term: "Period", definition: "Smaller division (e.g., Jurassic)." },
    { term: "Fossil", definition: "Preserved remains of ancient organisms." },
    {
      term: "Relative dating",
      definition: "Determining age by rock layer position.",
    },
    {
      term: "Absolute dating",
      definition: "Determining exact age using radiometric methods.",
    },
  ],
  concepts: [
    {
      id: "ess9-u9-timescale",
      title: "Geologic time divisions",
      skill: "Describe major divisions of geologic time.",
      lesson: {
        sections: [
          {
            heading: "Divisions",
            body: "- **Eon**: largest (e.g., Phanerozoic, ~541 Ma-present).\n- **Era**: within eon (e.g., Paleozoic, Mesozoic, Cenozoic).\n- **Period**: within era (e.g., Jurassic, Cretaceous).",
          },
          {
            heading: "Key events",
            body: "- Precambrian: early Earth, first life.\n- Paleozoic: complex life, land plants.\n- Mesozoic: dinosaurs.\n- Cenozoic: mammals, humans.",
          },
        ],
        keyFormulas: [
          { name: "Eon", statement: "Largest division" },
          { name: "Era", statement: "Within eon" },
          { name: "Period", statement: "Within era" },
        ],
        workedExample: {
          problem: "When did dinosaurs dominate?",
          solution: "Mesozoic era (Triassic-Jurassic-Cretaceous).",
        },
      },
      questions: [
        {
          id: "ess9-u9-timescale-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the largest division of geologic time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Era" },
              { id: "b", text: "Eon" },
              { id: "c", text: "Period" },
              { id: "d", text: "Epoch" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Eon",
                statement: "Largest division.",
              },
            ],
            steps: [{ reasoning: "Eon = largest.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Eon",
            commonErrors: ["Era."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u9-timescale-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "During which era did dinosaurs dominate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Mesozoic", statement: "Dinosaur era." },
            ],
            steps: [
              {
                reasoning: "Mesozoic era = dinosaurs.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Mesozoic era.",
            commonErrors: ["Paleozoic."],
            examinerNote: "A1 for era.",
          },
        },
        {
          id: "ess9-u9-timescale-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do rock layers reveal Earth's history?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Rock layers",
                statement: "Historical record.",
              },
            ],
            steps: [
              {
                reasoning: "Older layers below newer.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Fossils show past life.", marks: 1, markCode: "R" },
              {
                reasoning: "Layer composition reveals environment.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: layers = historical record.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Rock layers = chronological record.",
            commonErrors: ["No record."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u9-timescale-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe the major eras of the Phanerozoic eon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Eras", statement: "Three major eras." },
            ],
            steps: [
              {
                reasoning: "Paleozoic: complex life, land plants.",
                marks: 2,
                markCode: "B",
              },
              { reasoning: "Mesozoic: dinosaurs.", marks: 2, markCode: "B" },
              {
                reasoning: "Cenozoic: mammals, humans.",
                marks: 2,
                markCode: "B",
              },
              { reasoning: "Answer: three eras.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Paleozoic → Mesozoic → Cenozoic.",
            commonErrors: ["One era."],
            examinerNote: "B2 for each era.",
          },
        },
      ],
    },
    {
      id: "ess9-u9-dating",
      title: "Dating Earth's history",
      skill: "Compare relative and absolute dating methods.",
      lesson: {
        sections: [
          {
            heading: "Relative dating",
            body: "- Law of superposition: older below.\n- Law of cross-cutting: younger cuts older.\n- Fossil correlation: matching fossils.",
          },
          {
            heading: "Absolute dating",
            body: "- Radiometric dating: decay of isotopes.\n- Carbon-14: recent organic material.\n- Potassium-argon: older rocks.",
          },
        ],
        keyFormulas: [
          { name: "Relative", statement: "Layer position" },
          { name: "Absolute", statement: "Radiometric" },
          { name: "Carbon-14", statement: "Recent organic" },
        ],
        workedExample: {
          problem:
            "What's the difference between relative and absolute dating?",
          solution: "Relative = order only; absolute = exact age.",
        },
      },
      questions: [
        {
          id: "ess9-u9-dating-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does relative dating determine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exact age" },
              { id: "b", text: "Relative order" },
              { id: "c", text: "Composition" },
              { id: "d", text: "Location" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Relative dating",
                statement: "Order only.",
              },
            ],
            steps: [
              { reasoning: "Relative = order.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Relative order",
            commonErrors: ["Exact age."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u9-dating-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is radiometric dating?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Radiometric",
                statement: "Isotope decay.",
              },
            ],
            steps: [
              {
                reasoning: "Radiometric = isotope decay measurement.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Isotope decay → exact age.",
            commonErrors: ["Layer position."],
            examinerNote: "A1 for definition.",
          },
        },
        {
          id: "ess9-u9-dating-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is carbon-14 used for recent materials?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "C-14", statement: "Short half-life." },
            ],
            steps: [
              { reasoning: "Half-life ~5,730 years.", marks: 1, markCode: "R" },
              {
                reasoning: "Effective for ~50,000 years.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Too short for older rocks.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: short half-life → recent only.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Short half-life → recent materials only.",
            commonErrors: ["All ages."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u9-dating-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare relative and absolute dating.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Dating",
                statement: "Different methods.",
              },
            ],
            steps: [
              {
                reasoning: "Relative: order only, no exact age.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Absolute: exact age via radiometric.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Answer: order vs exact age.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Relative = order; absolute = exact age.",
            commonErrors: ["Same."],
            examinerNote: "B3 for each + A1.",
          },
        },
      ],
    },
    {
      id: "ess9-u9-extinction",
      title: "Mass extinctions and Earth's history",
      skill: "Describe major mass extinctions and their causes.",
      lesson: {
        sections: [
          {
            heading: "Major extinctions",
            body: "- **End-Ordovician**: ~85% species.\n- **End-Devonian**: ~75% species.\n- **End-Permian**: ~96% species (worst).\n- **End-Triassic**: ~80% species.\n- **End-Cretaceous**: ~75% species (dinosaurs).",
          },
          {
            heading: "Causes",
            body: "- Asteroid impacts.\n- Volcanic activity.\n- Climate change.\n- Sea level changes.",
          },
        ],
        keyFormulas: [
          { name: "End-Permian", statement: "Worst (~96%)" },
          { name: "End-Cretaceous", statement: "Dinosaurs (~75%)" },
          { name: "Causes", statement: "Asteroid, volcanoes, climate" },
        ],
        workedExample: {
          problem: "What caused dinosaur extinction?",
          solution: "End-Cretaceous asteroid impact (~66 Ma).",
        },
      },
      questions: [
        {
          id: "ess9-u9-extinction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What caused dinosaur extinction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Volcanoes only" },
              { id: "b", text: "Asteroid impact" },
              { id: "c", text: "Ice age" },
              { id: "d", text: "Disease" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Cretaceous",
                statement: "Asteroid impact.",
              },
            ],
            steps: [
              {
                reasoning: "Asteroid = dinosaur extinction.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Asteroid impact",
            commonErrors: ["Volcanoes only."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u9-extinction-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which was the worst mass extinction?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "End-Permian",
                statement: "~96% species lost.",
              },
            ],
            steps: [
              { reasoning: "End-Permian = worst.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "End-Permian (~96% loss).",
            commonErrors: ["Cretaceous."],
            examinerNote: "A1 for extinction.",
          },
        },
        {
          id: "ess9-u9-extinction-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What evidence supports asteroid impact theory?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Evidence",
                statement: "Multiple lines.",
              },
            ],
            steps: [
              {
                reasoning: "Iridium layer (rare on Earth).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Impact crater (Chicxulub).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Shock quartz, soot layer.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: iridium + crater.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Iridium layer + impact crater.",
            commonErrors: ["No evidence."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u9-extinction-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe causes of mass extinctions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Causes",
                statement: "Multiple factors.",
              },
            ],
            steps: [
              { reasoning: "Asteroid impacts.", marks: 2, markCode: "B" },
              { reasoning: "Volcanic activity.", marks: 2, markCode: "B" },
              { reasoning: "Climate change.", marks: 2, markCode: "B" },
              {
                reasoning: "Answer: multiple causes.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Asteroid, volcanoes, climate change.",
            commonErrors: ["One cause."],
            examinerNote: "B2 for each cause.",
          },
        },
      ],
    },
  ],
};
