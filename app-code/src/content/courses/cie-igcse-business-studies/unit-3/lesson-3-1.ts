import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cieibs-u3-lesson-3-1",
  code: "3-1",
  title: "Production Methods and Quality",
  goal: "I CAN compare job, batch and flow production and explain quality control versus quality assurance.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "Operations: production methods, quality",
  ],
  vocabulary: [
    {
      term: "Job production",
      definition: "Making one product at a time for a specific customer.",
    },
    {
      term: "Batch production",
      definition: "Making a group of identical products together.",
    },
    {
      term: "Flow production",
      definition: "Continuous assembly-line production of standardised goods.",
    },
    {
      term: "Quality control",
      definition: "Checking finished products for faults.",
    },
    {
      term: "Quality assurance",
      definition: "Systems ensuring quality at every stage of production.",
    },
  ],
  concepts: [
    {
      id: "cieibs-u3-s1-ops",
      title: "Production methods and quality",
      skill:
        "Compare production methods and distinguish quality control from assurance.",
      lesson: {
        sections: [
          {
            heading: "Production methods",
            body: "Job production: one-off items (tailored suits, handmade furniture) — flexible but costly per unit. Batch production: groups of identical items (bakery loaves, school uniforms) — balances flexibility and efficiency. Flow production: continuous assembly lines (cars, electronics) — very efficient for standardised goods but inflexible and expensive to set up.",
          },
          {
            heading: "Quality",
            body: "Quality control inspects finished products and rejects faulty ones — faults are found late, wasting materials. Quality assurance builds quality into every stage of the process — prevention rather than detection, reducing waste overall.",
          },
        ],
        keyFormulas: [
          {
            name: "Production choice",
            statement:
              "job = flexible/low volume; batch = medium; flow = high volume/standardised",
          },
          {
            name: "QC vs QA",
            statement:
              "control = inspect at end; assurance = build in throughout",
          },
        ],
        workedExample: {
          problem:
            "A car manufacturer produces 500 identical vehicles per day on a moving line. Which method and why?",
          solution:
            "Flow production — high volume of standardised goods suits an assembly line.",
        },
      },
      questions: [
        {
          id: "cieibs-u3-ops-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which production method is most suitable for a workshop making one-off handmade guitars?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flow production" },
              { id: "b", text: "Batch production" },
              { id: "c", text: "Job production" },
              { id: "d", text: "Just-in-time production" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Job production",
                statement: "One product at a time.",
              },
            ],
            steps: [
              {
                reasoning: "One-off handmade items suit job production.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Job production",
          },
        },
        {
          id: "cieibs-u3-ops-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two advantages of flow production for a large electronics manufacturer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Flow production",
                statement: "Continuous line for standardised output.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Very high output and low cost per unit for standardised products.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Consistent quality and efficient use of labour through specialisation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "High volume at low unit cost; consistent quality",
          },
        },
        {
          id: "cieibs-u3-ops-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between quality control and quality assurance, giving one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "QC vs QA",
                statement: "Inspection at end vs prevention throughout.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Quality control inspects finished products and rejects faults — e.g. checking phones before dispatch.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Quality assurance prevents faults at every stage — e.g. staff training and process checks during assembly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "QA reduces waste by catching problems early; QC finds them late.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Control = inspect at end; assurance = prevent faults throughout production",
          },
        },
        {
          id: "cieibs-u3-ops-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A bakery produces 200 loaves each morning in identical batches. Recommend a production method and justify your choice against two alternatives.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Method selection",
                statement:
                  "Match method to volume, variety and flexibility needs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recommend batch production — identical loaves made together in groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Job production rejected: too slow and costly for daily volume.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Flow production rejected: overkill for a small bakery; batch allows variety (different bread types) with decent efficiency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Justified recommendation linking method to volume and flexibility.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Batch production — balances daily volume with flexibility for different bread types",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u3-prod-notes",
      title: "Production and quality — revision notes",
      summary: "Job/batch/flow production; quality control vs assurance.",
      sections: [
        {
          heading: "Key skills",
          body: "Match production method to product type and volume; explain QC as end inspection and QA as built-in prevention.",
        },
        {
          heading: "Exam tips",
          body: "Always justify method choice with volume, standardisation and flexibility — examiners want reasoning, not just naming.",
        },
      ],
    },
  ],
};
