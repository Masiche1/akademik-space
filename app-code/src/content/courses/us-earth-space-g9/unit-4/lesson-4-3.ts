import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ess9-u4-lesson-4-3",
  code: "4-3",
  title: "Plate Tectonics Applications and History",
  goal: "I CAN explain the history of plate tectonic theory and its modern applications.",
  standards: [
    "HS-ESS2-1",
    "HS-ESS2-2",
    "SEP: Constructing Explanations",
    "SEP: Obtaining, Evaluating, and Communicating Information",
  ],
  vocabulary: [
    {
      term: "Continental drift",
      definition: "Wegener's theory that continents move.",
    },
    {
      term: "Pangaea",
      definition: "Supercontinent that broke apart ~200 million years ago.",
    },
    {
      term: "Wegener",
      definition: "Scientist who proposed continental drift in 1912.",
    },
    { term: "Hess", definition: "Scientist who proposed seafloor spreading." },
    {
      term: "Magnetic striping",
      definition: "Pattern of magnetic reversals in ocean floor.",
    },
    {
      term: "Hot spot",
      definition: "Fixed plume of magma creating volcanic chain.",
    },
    {
      term: "Supercontinent cycle",
      definition: "Continents periodically join and split.",
    },
  ],
  concepts: [
    {
      id: "ess9-u4-history",
      title: "History of plate tectonic theory",
      skill: "Trace the development of plate tectonic theory.",
      lesson: {
        sections: [
          {
            heading: "Historical development",
            body: "- **1912**: Wegener proposes continental drift (Pangaea). Rejected due to no mechanism.\n- **1960s**: Hess proposes seafloor spreading; magnetic striping discovered.\n- **1965-1968**: Plate tectonic theory unified.",
          },
          {
            heading: "Key evidence",
            body: "- Matching coastlines and fossils.\n- Seafloor spreading at ridges.\n- Magnetic striping (reversals recorded).\n- Earthquake/volcano distribution.",
          },
        ],
        keyFormulas: [
          { name: "1912", statement: "Wegener: continental drift" },
          { name: "1960s", statement: "Hess: seafloor spreading" },
          { name: "1968", statement: "Plate tectonics accepted" },
        ],
        workedExample: {
          problem: "Who proposed continental drift?",
          solution: "Alfred Wegener in 1912.",
        },
      },
      questions: [
        {
          id: "ess9-u4-history-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who proposed continental drift?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hess" },
              { id: "b", text: "Wegener" },
              { id: "c", text: "Darwin" },
              { id: "d", text: "Einstein" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Wegener",
                statement: "Proposed continental drift 1912.",
              },
            ],
            steps: [
              { reasoning: "Wegener proposed drift.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Wegener",
            commonErrors: ["Hess."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u4-history-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is Pangaea?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pangaea",
                statement: "Supercontinent ~200 mya.",
              },
            ],
            steps: [
              {
                reasoning: "Supercontinent that broke apart.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Supercontinent that broke apart ~200 mya.",
            commonErrors: ["Current continents."],
            examinerNote: "A1 for correct definition.",
          },
        },
        {
          id: "ess9-u4-history-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why was Wegener's theory initially rejected?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Rejection",
                statement: "No mechanism proposed.",
              },
            ],
            steps: [
              {
                reasoning: "Continents can't plow through ocean floor.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "No mechanism for movement proposed.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Lacked seafloor spreading evidence.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Answer: no mechanism.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No mechanism for continental movement.",
            commonErrors: ["Wrong evidence."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u4-history-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe the development of plate tectonic theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Development",
                statement: "1912 drift → 1960s spreading → 1968 acceptance.",
              },
            ],
            steps: [
              {
                reasoning: "1912: Wegener proposes continental drift.",
                marks: 2,
                markCode: "B",
              },
              { reasoning: "Rejected: no mechanism.", marks: 1, markCode: "B" },
              {
                reasoning:
                  "1960s: Hess proposes seafloor spreading; magnetic striping found.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "1968: plate tectonic theory accepted.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: gradual acceptance with evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "1912 drift → rejected → 1960s spreading → 1968 accepted.",
            commonErrors: ["Instant acceptance."],
            examinerNote: "B2 for each stage + A1.",
          },
        },
      ],
    },
    {
      id: "ess9-u4-applications",
      title: "Plate tectonics applications",
      skill: "Apply plate tectonic theory to real-world situations.",
      lesson: {
        sections: [
          {
            heading: "Practical applications",
            body: "- **Earthquake prediction**: plate boundary mapping.\n- **Volcano monitoring**: subduction zone tracking.\n- **Resource exploration**: ore deposits near boundaries.\n- **Geological hazards**: tsunami, landslide risk.",
          },
          {
            heading: "Hot spots and intraplate activity",
            body: "Hot spots are fixed magma plumes creating volcanic chains (Hawaii).\nIntraplate earthquakes occur away from boundaries (rare).",
          },
        ],
        keyFormulas: [
          { name: "Applications", statement: "Hazards, resources, prediction" },
          { name: "Hot spots", statement: "Fixed plumes" },
          { name: "Intraplate", statement: "Away from boundaries" },
        ],
        workedExample: {
          problem: "Why is Hawaii in the middle of the Pacific plate?",
          solution: "Hot spot — fixed magma plume; plate moves over it.",
        },
      },
      questions: [
        {
          id: "ess9-u4-apps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a hot spot?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plate boundary" },
              { id: "b", text: "Fixed magma plume" },
              { id: "c", text: "Earthquake zone" },
              { id: "d", text: "Ocean trench" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hot spot",
                statement: "Fixed magma plume.",
              },
            ],
            steps: [
              { reasoning: "Hot spot = fixed plume.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Fixed magma plume",
            commonErrors: ["Plate boundary."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u4-apps-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does plate tectonics help predict earthquakes?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Prediction",
                statement: "Boundary mapping → risk zones.",
              },
            ],
            steps: [
              { reasoning: "Map plate boundaries.", marks: 1, markCode: "R" },
              {
                reasoning: "Identify high-risk zones.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Boundary mapping identifies risk zones.",
            commonErrors: ["Exact prediction."],
            examinerNote: "R1, A1.",
          },
        },
        {
          id: "ess9-u4-apps-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is Hawaii volcanic activity unusual?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Hawaii",
                statement: "Hot spot in plate interior.",
              },
            ],
            steps: [
              {
                reasoning: "Hawaii in middle of Pacific plate.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Hot spot = fixed magma plume.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Plate moves over plume → volcanic chain.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: hot spot, not boundary.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Hot spot in plate interior.",
            commonErrors: ["Plate boundary."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u4-apps-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "List three applications of plate tectonic theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Applications",
                statement: "Multiple practical uses.",
              },
            ],
            steps: [
              {
                reasoning: "Earthquake/volcano hazard mapping.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Mineral/ore exploration near boundaries.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Tsunami/geological risk assessment.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: hazard + resource applications.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Hazard mapping, resource exploration, risk assessment.",
            commonErrors: ["Theoretical only."],
            examinerNote: "B2 for each + A1.",
          },
        },
      ],
    },
    {
      id: "ess9-u4-future",
      title: "Future of plate tectonics",
      skill: "Predict future plate movements and geological changes.",
      lesson: {
        sections: [
          {
            heading: "Future plate movements",
            body: "Current plate movements will continue:\n- Atlantic widening, Pacific shrinking.\n- Africa may split further.\n- New supercontinent in ~250 million years (Pangaea Ultima).",
          },
          {
            heading: "Long-term changes",
            body: "- Continents will eventually collide again.\n- Ocean basins will open/close.\n- Climate and geography will change dramatically.",
          },
        ],
        keyFormulas: [
          { name: "Atlantic", statement: "Widening" },
          { name: "Pacific", statement: "Shrinking" },
          { name: "Future", statement: "New supercontinent" },
        ],
        workedExample: {
          problem: "What will happen to the Atlantic Ocean?",
          solution: "Continue widening as plates separate.",
        },
      },
      questions: [
        {
          id: "ess9-u4-future-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What will happen to the Atlantic Ocean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Close" },
              { id: "b", text: "Widen" },
              { id: "c", text: "Stay same" },
              { id: "d", text: "Disappear" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Atlantic", statement: "Widening." },
            ],
            steps: [
              { reasoning: "Atlantic widening.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Widen",
            commonErrors: ["Close."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u4-future-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is predicted for Earth's plates in the future?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Future",
                statement: "Continued movement → new supercontinent.",
              },
            ],
            steps: [
              {
                reasoning: "Continued plate movement.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "New supercontinent in ~250 mya.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "New supercontinent in ~250 million years.",
            commonErrors: ["No change."],
            examinerNote: "R1, A1.",
          },
        },
        {
          id: "ess9-u4-future-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How will plate tectonics affect Earth's climate in the future?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Climate",
                statement: "Geography changes → climate changes.",
              },
            ],
            steps: [
              {
                reasoning: "Continents move → ocean currents change.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Mountain ranges affect weather patterns.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Continental positions affect climate zones.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: major climate changes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Geographic changes → major climate shifts.",
            commonErrors: ["No effect."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u4-future-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Predict Earth's geography 250 million years from now.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Future",
                statement: "New supercontinent (Pangaea Ultima).",
              },
            ],
            steps: [
              {
                reasoning: "Continents will collide again.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "New supercontinent forms (Pangaea Ultima).",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Atlantic may close; Pacific may dominate.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: new supercontinent cycle.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "New supercontinent ~250 mya.",
            commonErrors: ["Same geography."],
            examinerNote:
              "B2 for collision + B2 for supercontinent + B2 for oceans + A1.",
          },
        },
      ],
    },
  ],
};
