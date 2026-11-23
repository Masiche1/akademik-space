import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "ess9-u9-lesson-9-2",
  code: "9-2",
  title: "Fossils and Earth's History",
  goal: "I CAN describe fossil formation and what fossils reveal.",
  standards: [
    "HS-ESS1-4",
    "HS-ESS1-5",
    "SEP: Analyzing and Interpreting Data",
    "SEP: Obtaining, Evaluating, and Communicating Information",
  ],
  vocabulary: [
    {
      term: "Fossil",
      definition: "Preserved remains or traces of ancient organisms.",
    },
    {
      term: "Index fossil",
      definition: "Fossil used to date rock layers; widespread, short-lived.",
    },
    {
      term: "Amber",
      definition: "Fossilized tree resin preserving organisms.",
    },
    { term: "Imprint", definition: "Fossilized impression of organism." },
    {
      term: "Mineralization",
      definition: "Fossil formed by mineral replacement.",
    },
    { term: "Petrified wood", definition: "Wood replaced by minerals." },
    {
      term: "Fossil record",
      definition: "All known fossils; incomplete but informative.",
    },
  ],
  concepts: [
    {
      id: "ess9-u9-formation",
      title: "Fossil formation",
      skill: "Describe how fossils form and preserve.",
      lesson: {
        sections: [
          {
            heading: "Formation",
            body: "Organisms buried quickly → protected from decay.\nConditions: water, sediment, lack of oxygen.\nTypes: mineralization, amber, imprint, petrification.",
          },
          {
            heading: "Preservation",
            body: "Hard parts (bones, shells) fossilize best.\nSoft tissues rarely preserved (except amber, ice).",
          },
        ],
        keyFormulas: [
          { name: "Formation", statement: "Rapid burial" },
          { name: "Types", statement: "Mineralization, amber, imprint" },
          { name: "Preservation", statement: "Hard parts best" },
        ],
        workedExample: {
          problem: "Why are hard parts fossilized more often?",
          solution: "They resist decay better than soft tissue.",
        },
      },
      questions: [
        {
          id: "ess9-u9-formation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What conditions favor fossil formation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dry, hot surface" },
              { id: "b", text: "Rapid burial in sediment" },
              { id: "c", text: "Oxygen-rich water" },
              { id: "d", text: "Surface exposure" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Formation",
                statement: "Rapid burial.",
              },
            ],
            steps: [
              {
                reasoning: "Rapid burial preserves fossils.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Rapid burial in sediment",
            commonErrors: ["Dry surface."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u9-formation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of fossils.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Types", statement: "Multiple types." },
            ],
            steps: [
              {
                reasoning: "Mineralization, amber, imprint, petrification.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Mineralization, amber, imprint, petrification.",
            commonErrors: ["One type."],
            examinerNote: "A1 for two.",
          },
        },
        {
          id: "ess9-u9-formation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are hard parts fossilized more often?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Preservation",
                statement: "Hard parts resist decay.",
              },
            ],
            steps: [
              {
                reasoning: "Bones/shells resist decomposition.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Soft tissue decays quickly.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: durability difference.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Hard parts resist decay → fossilize.",
            commonErrors: ["Random."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "ess9-u9-formation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe fossil formation process.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Formation",
                statement: "Multiple steps.",
              },
            ],
            steps: [
              {
                reasoning: "Organism dies → buried quickly.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Sediment covers → protects from decay.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Minerals replace/imbue over time.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: burial → mineralization.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Death → burial → mineralization.",
            commonErrors: ["One step."],
            examinerNote: "B2 for each step.",
          },
        },
      ],
    },
    {
      id: "ess9-u9-index",
      title: "Index fossils and dating",
      skill: "Describe how index fossils date rock layers.",
      lesson: {
        sections: [
          {
            heading: "Index fossils",
            body: "Characteristics:\n- Widespread geographically.\n- Short time range (evolve quickly).\n- Easy to identify.\nExample: trilobites, ammonites.",
          },
          {
            heading: "Dating rock layers",
            body: "Match fossils across locations → correlate ages.\nIndex fossils define time intervals.",
          },
        ],
        keyFormulas: [
          { name: "Index fossil", statement: "Widespread, short-lived" },
          { name: "Correlation", statement: "Match across locations" },
          { name: "Examples", statement: "Trilobites, ammonites" },
        ],
        workedExample: {
          problem: "What makes a good index fossil?",
          solution: "Widespread, short-lived, easy to identify.",
        },
      },
      questions: [
        {
          id: "ess9-u9-index-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an index fossil?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Any fossil" },
              { id: "b", text: "Fossil used to date rock layers" },
              { id: "c", text: "Rare fossil" },
              { id: "d", text: "Large fossil" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Index fossil",
                statement: "Dating tool.",
              },
            ],
            steps: [
              {
                reasoning: "Index fossil = dating tool.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Fossil used to date rock layers",
            commonErrors: ["Any fossil."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u9-index-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What characteristics make a good index fossil?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Index fossil",
                statement: "Specific traits.",
              },
            ],
            steps: [
              {
                reasoning: "Widespread, short-lived, easy to identify.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Widespread, short-lived, identifiable.",
            commonErrors: ["Any fossil."],
            examinerNote: "A1 for traits.",
          },
        },
        {
          id: "ess9-u9-index-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do index fossils help date rock layers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Index fossils",
                statement: "Correlation tool.",
              },
            ],
            steps: [
              {
                reasoning: "Same index fossil = same time period.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Match across locations → correlate ages.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Defines time intervals.", marks: 1, markCode: "R" },
              {
                reasoning: "Answer: correlation → dating.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Match fossils → correlate rock ages.",
            commonErrors: ["No help."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u9-index-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Name two examples of index fossils.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Examples",
                statement: "Multiple index fossils.",
              },
            ],
            steps: [
              { reasoning: "Trilobites (Paleozoic).", marks: 2, markCode: "B" },
              { reasoning: "Ammonites (Mesozoic).", marks: 2, markCode: "B" },
              {
                reasoning: "Answer: index fossil examples.",
                marks: 4,
                markCode: "A",
              },
            ],
            finalAnswer: "Trilobites, ammonites.",
            commonErrors: ["One example."],
            examinerNote: "B2 for each + A1.",
          },
        },
      ],
    },
    {
      id: "ess9-u9-record",
      title: "The fossil record",
      skill: "Evaluate what the fossil record reveals about Earth's history.",
      lesson: {
        sections: [
          {
            heading: "Fossil record",
            body: "Incomplete but informative:\n- Shows evolution over time.\n- Reveals past environments.\n- Documents mass extinctions.\n- Shows biodiversity changes.",
          },
          {
            heading: "Limitations",
            body: "- Preservation bias: hard parts favored.\n- Geographic bias: some areas better preserved.\n- Temporal gaps.",
          },
        ],
        keyFormulas: [
          { name: "Record", statement: "Incomplete but useful" },
          { name: "Shows", statement: "Evolution, environments, extinctions" },
          { name: "Bias", statement: "Hard parts favored" },
        ],
        workedExample: {
          problem: "What does the fossil record show?",
          solution: "Evolution, past environments, extinctions.",
        },
      },
      questions: [
        {
          id: "ess9-u9-record-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the fossil record show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only dinosaurs" },
              { id: "b", text: "Evolution over time" },
              { id: "c", text: "Future life" },
              { id: "d", text: "Current species only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Fossil record",
                statement: "Evolution evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Fossil record = evolution.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Evolution over time",
            commonErrors: ["Only dinosaurs."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u9-record-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Is the fossil record complete?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Record", statement: "Incomplete." },
            ],
            steps: [
              {
                reasoning: "No — incomplete but informative.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "No — incomplete but useful.",
            commonErrors: ["Complete."],
            examinerNote: "A1 for answer.",
          },
        },
        {
          id: "ess9-u9-record-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is the fossil record biased?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Bias",
                statement: "Preservation bias.",
              },
            ],
            steps: [
              {
                reasoning: "Hard parts fossilize better.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Geographic preservation varies.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Temporal gaps exist.", marks: 1, markCode: "R" },
              {
                reasoning: "Answer: preservation bias.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Hard parts + geography → bias.",
            commonErrors: ["Unbiased."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u9-record-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "What does the fossil record reveal?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Record",
                statement: "Multiple insights.",
              },
            ],
            steps: [
              { reasoning: "Evolution over time.", marks: 2, markCode: "B" },
              { reasoning: "Past environments.", marks: 2, markCode: "B" },
              { reasoning: "Mass extinctions.", marks: 2, markCode: "B" },
              {
                reasoning: "Answer: multiple insights.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Evolution, environments, extinctions.",
            commonErrors: ["One insight."],
            examinerNote: "B2 for each insight.",
          },
        },
      ],
    },
  ],
};
