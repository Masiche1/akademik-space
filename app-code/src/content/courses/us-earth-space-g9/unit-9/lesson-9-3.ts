import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "ess9-u9-lesson-9-3",
  code: "9-3",
  title: "Early Earth and First Life",
  goal: "I CAN describe early Earth conditions and the origin of life.",
  standards: [
    "HS-ESS1-4",
    "HS-ESS2-7",
    "SEP: Constructing Explanations",
    "CCC: Cause and Effect",
  ],
  vocabulary: [
    {
      term: "Early Earth",
      definition: "First ~4 billion years of Earth history.",
    },
    {
      term: "Primordial atmosphere",
      definition: "Early atmosphere: CO₂, N₂, water vapor, no O₂.",
    },
    {
      term: "Great Oxidation Event",
      definition: "~2.4 Ga when O₂ first accumulated.",
    },
    {
      term: "Stromatolites",
      definition: "Fossilized bacterial mats; earliest life evidence.",
    },
    {
      term: "Prokaryote",
      definition: "Single-celled organism without nucleus.",
    },
    {
      term: "Endosymbiosis",
      definition: "Theory that organelles evolved from engulfed bacteria.",
    },
    {
      term: "Cambrian explosion",
      definition: "~541 Ma rapid diversification of complex life.",
    },
  ],
  concepts: [
    {
      id: "ess9-u9-early",
      title: "Early Earth conditions",
      skill: "Describe early Earth's atmosphere and surface.",
      lesson: {
        sections: [
          {
            heading: "Early Earth",
            body: "- Formed ~4.5 billion years ago.\n- Primordial atmosphere: CO₂, N₂, water vapor — no free O₂.\n- Surface: hot, volcanic, constant impacts.\n- Oceans formed from condensed water vapor.",
          },
          {
            heading: "Atmosphere evolution",
            body: "Photosynthesis → O₂ accumulation → Great Oxidation Event (~2.4 Ga).\nO₂ enabled complex life.",
          },
        ],
        keyFormulas: [
          { name: "Primordial", statement: "No free O₂" },
          { name: "GOE", statement: "O₂ accumulation ~2.4 Ga" },
          { name: "Oceans", statement: "From condensed vapor" },
        ],
        workedExample: {
          problem: "What was different about early Earth's atmosphere?",
          solution: "No free oxygen — mostly CO₂, N₂, water vapor.",
        },
      },
      questions: [
        {
          id: "ess9-u9-early-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was missing from early Earth's atmosphere?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CO₂" },
              { id: "b", text: "Free oxygen" },
              { id: "c", text: "Nitrogen" },
              { id: "d", text: "Water vapor" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Primordial",
                statement: "No free O₂.",
              },
            ],
            steps: [
              { reasoning: "No free oxygen early.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Free oxygen",
            commonErrors: ["CO₂."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u9-early-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the Great Oxidation Event?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "GOE", statement: "O₂ accumulation." },
            ],
            steps: [
              {
                reasoning: "GOE = O₂ first accumulated ~2.4 Ga.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "O₂ accumulation ~2.4 Ga.",
            commonErrors: ["Oxygen decrease."],
            examinerNote: "A1 for event.",
          },
        },
        {
          id: "ess9-u9-early-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How did photosynthesis change Earth's atmosphere?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Photosynthesis",
                statement: "O₂ producer.",
              },
            ],
            steps: [
              {
                reasoning: "Cyanobacteria photosynthesize.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Release O₂ as waste.", marks: 1, markCode: "R" },
              { reasoning: "O₂ accumulates → GOE.", marks: 1, markCode: "R" },
              {
                reasoning: "Answer: O₂ accumulation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Photosynthesis → O₂ → atmosphere change.",
            commonErrors: ["No change."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u9-early-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe early Earth's conditions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Early Earth",
                statement: "Multiple conditions.",
              },
            ],
            steps: [
              { reasoning: "Hot, volcanic surface.", marks: 2, markCode: "B" },
              {
                reasoning: "Primordial atmosphere: no O₂.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Oceans formed from water vapor.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: hostile early conditions.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Hot, volcanic, no O₂, oceans forming.",
            commonErrors: ["Like today."],
            examinerNote: "B2 for each condition.",
          },
        },
      ],
    },
    {
      id: "ess9-u9-firstlife",
      title: "First life on Earth",
      skill: "Describe evidence for earliest life forms.",
      lesson: {
        sections: [
          {
            heading: "Earliest life",
            body: "- ~3.5-3.8 Ga: stromatolites (bacterial mats).\n- Prokaryotes: single-celled, no nucleus.\n- First evidence: chemical traces, microfossils.",
          },
          {
            heading: "Evolution of life",
            body: "- Prokaryotes → eukaryotes (~1.5-2 Ga).\n- Endosymbiosis → organelles.\n- Multicellular life ~600 Ma.\n- Cambrian explosion ~541 Ma.",
          },
        ],
        keyFormulas: [
          { name: "Stromatolites", statement: "Earliest life evidence" },
          { name: "Prokaryotes", statement: "First life" },
          { name: "Cambrian", statement: "Complex life ~541 Ma" },
        ],
        workedExample: {
          problem: "What are stromatolites?",
          solution: "Fossilized bacterial mats — earliest life evidence.",
        },
      },
      questions: [
        {
          id: "ess9-u9-firstlife-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are stromatolites?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dinosaurs" },
              { id: "b", text: "Fossilized bacterial mats" },
              { id: "c", text: "Volcanoes" },
              { id: "d", text: "Oceans" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stromatolites",
                statement: "Bacterial mats.",
              },
            ],
            steps: [
              {
                reasoning: "Stromatolites = bacterial mats.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Fossilized bacterial mats",
            commonErrors: ["Dinosaurs."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u9-firstlife-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the first type of life?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Prokaryotes", statement: "First life." },
            ],
            steps: [
              {
                reasoning: "Prokaryotes = first life.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Prokaryotes (single-celled).",
            commonErrors: ["Eukaryotes."],
            examinerNote: "A1 for answer.",
          },
        },
        {
          id: "ess9-u9-firstlife-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What was the Cambrian explosion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Cambrian",
                statement: "Rapid diversification.",
              },
            ],
            steps: [
              {
                reasoning: "~541 Ma rapid diversification.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Most animal groups appeared.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Complex body plans evolved.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: rapid evolution event.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Rapid diversification ~541 Ma.",
            commonErrors: ["Extinction."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u9-firstlife-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe evolution from prokaryotes to complex life.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Evolution",
                statement: "Multiple stages.",
              },
            ],
            steps: [
              {
                reasoning: "Prokaryotes → eukaryotes.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Endosymbiosis → organelles.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Multicellular → Cambrian explosion.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: gradual complexity increase.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Prokaryotes → eukaryotes → multicellular.",
            commonErrors: ["One step."],
            examinerNote: "B2 for each stage.",
          },
        },
      ],
    },
    {
      id: "ess9-u9-evidence",
      title: "Evidence for early life",
      skill: "Evaluate evidence for earliest life on Earth.",
      lesson: {
        sections: [
          {
            heading: "Evidence types",
            body: "- **Stromatolites**: ~3.5 Ga bacterial mats.\n- **Microfossils**: preserved cells in rock.\n- **Chemical signatures**: isotopic evidence of biology.\n- **Sedimentary structures**: traces of microbial activity.",
          },
          {
            heading: "Challenges",
            body: "- Distinguishing biogenic vs abiogenic.\n- Contamination concerns.\n- Preservation bias.",
          },
        ],
        keyFormulas: [
          { name: "Stromatolites", statement: "~3.5 Ga" },
          { name: "Microfossils", statement: "Preserved cells" },
          { name: "Isotopes", statement: "Chemical signatures" },
        ],
        workedExample: {
          problem: "What's the oldest evidence of life?",
          solution: "Stromatolites ~3.5 billion years old.",
        },
      },
      questions: [
        {
          id: "ess9-u9-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's the oldest evidence of life?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dinosaurs" },
              { id: "b", text: "Stromatolites" },
              { id: "c", text: "Mammals" },
              { id: "d", text: "Trees" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Stromatolites",
                statement: "Oldest evidence.",
              },
            ],
            steps: [
              { reasoning: "Stromatolites = oldest.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Stromatolites",
            commonErrors: ["Dinosaurs."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u9-evidence-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of evidence for early life.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Evidence",
                statement: "Multiple types.",
              },
            ],
            steps: [
              {
                reasoning: "Stromatolites, microfossils, isotopes.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Stromatolites, microfossils, isotopes.",
            commonErrors: ["One type."],
            examinerNote: "A1 for two.",
          },
        },
        {
          id: "ess9-u9-evidence-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is identifying early life evidence challenging?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Challenges",
                statement: "Multiple issues.",
              },
            ],
            steps: [
              {
                reasoning: "Distinguish biogenic vs abiogenic.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Contamination concerns.", marks: 1, markCode: "R" },
              { reasoning: "Poor preservation.", marks: 1, markCode: "R" },
              {
                reasoning: "Answer: multiple challenges.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Biogenic vs abiogenic, contamination, preservation.",
            commonErrors: ["Easy."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u9-evidence-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe evidence for early life on Earth.",
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
                reasoning: "Stromatolites: bacterial mats ~3.5 Ga.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Microfossils: preserved cells.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Isotopic signatures: chemical evidence.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: multiple evidence types.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Stromatolites, microfossils, isotopes.",
            commonErrors: ["One evidence."],
            examinerNote: "B2 for each type.",
          },
        },
      ],
    },
  ],
};
