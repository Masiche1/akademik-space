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
              { id: "c", text: "Just-in-time production" },
              { id: "d", text: "Job production" },
            ],
            dorrectChoiceId: "c",
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
        {
          id: "cieibs-u3-ops-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which production method is typically used to make cars on an assembly line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flow production" },
              { id: "b", text: "Batch production" },
              { id: "c", text: "Craft production" },
              { id: "d", text: "Job production" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Flow production",
                statement:
                  "Continuous assembly-line production of standardised goods.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cars are standardised and made continuously — flow production.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Flow production",
          },
        },
        {
          id: "cieibs-u3-ops-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does quality control involve?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Designing quality into every stage" },
              { id: "b", text: "Advertising product quality" },
              { id: "c", text: "Paying higher wages" },
              { id: "d", text: "Inspecting finished products for faults" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quality control",
                statement:
                  "Checking finished products and rejecting faulty ones.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Quality control is end-of-line inspection of finished goods.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Inspecting finished products for faults",
          },
        },
        {
          id: "cieibs-u3-ops-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cabinet maker uses job production: total costs are $5,000 for 5 custom units. A rival using batch production spends $6,000 on 20 identical units. (a) Calculate cost per unit for the job production firm. (b) Calculate cost per unit for the batch production firm.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1000, unit: "$" },
              { label: "b", answer: 300, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Unit cost",
                statement: "Cost per unit = total cost / units produced.",
              },
            ],
            steps: [
              {
                reasoning: "Job: 5000 / 5 = $1,000 per unit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Batch: 6000 / 20 = $300 per unit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $1,000, b) $300",
          },
        },
        {
          id: "cieibs-u3-ops-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between job production and batch production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Job vs batch",
                statement: "One-off custom items vs groups of identical items.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Job production makes one product at a time for a specific customer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Batch production makes a group of identical items together.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Job = one-off custom; batch = identical groups",
          },
        },
        {
          id: "cieibs-u3-ops-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is quality assurance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hiring quality inspectors" },
              { id: "b", text: "Selling products with guarantees" },
              {
                id: "c",
                text: "Systems ensuring quality at every stage of production",
              },
              { id: "d", text: "Checking finished products only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quality assurance",
                statement:
                  "Systems ensuring quality at every stage — prevention not detection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "QA builds quality into the whole process, unlike QC which inspects at the end.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Quality built into every stage",
          },
        },
        {
          id: "cieibs-u3-ops-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A factory produces 2,000 items with a defect rate of 5%. Quality assurance reduces defects to 2%. (a) Calculate defects before QA. (b) Calculate defects after QA.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 100, unit: "defects" },
              { label: "b", answer: 40, unit: "defects" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Defect rate",
                statement: "Defects = output x defect rate.",
              },
            ],
            steps: [
              {
                reasoning: "Before: 2000 x 0.05 = 100 defects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "After: 2000 x 0.02 = 40 defects.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 100, b) 40 defects",
          },
        },
        {
          id: "cieibs-u3-ops-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between quality control and quality assurance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "QC vs QA",
                statement: "Detection at the end vs prevention throughout.",
              },
            ],
            steps: [
              {
                reasoning:
                  "QC inspects finished products and rejects faults — finds problems late.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "QA builds quality into every stage, reducing faults and waste.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "QC = end inspection; QA = built-in prevention",
          },
        },
        {
          id: "cieibs-u3-ops-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which product is most suitable for job production?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A bespoke wedding cake" },
              { id: "b", text: "Mass-produced t-shirts" },
              { id: "c", text: "Bottled water" },
              { id: "d", text: "Standardised pencils" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Job production",
                statement: "One-off items made for specific customers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bespoke items need customisation — suited to job production.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Bespoke wedding cake",
          },
        },
        {
          id: "cieibs-u3-ops-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "An assembly line produces 120 units per hour and operates 8 hours per day, 5 days per week. (a) Calculate daily output. (b) Calculate weekly output.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 960, unit: "units" },
              { label: "b", answer: 4800, unit: "units" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Output calculation",
                statement: "Daily = rate x hours; weekly = daily x days.",
              },
            ],
            steps: [
              {
                reasoning: "Daily = 120 x 8 = 960 units.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weekly = 960 x 5 = 4,800 units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 960, b) 4,800 units",
          },
        },
        {
          id: "cieibs-u3-ops-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A car manufacturer currently uses batch production. Evaluate whether flow production would be better, considering efficiency, cost and flexibility.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Production choice",
                statement:
                  "Match method to volume, standardisation and flexibility.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Flow suits high-volume standardised cars — very efficient unit costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But high setup cost and inflexible — model changes are difficult.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Batch allows some variety; flow only suits if demand is stable and huge.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Justified recommendation linked to the scenario.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Flow if huge stable volume; batch if variety needed — justified judgement",
          },
        },
        {
          id: "cieibs-u3-ops-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an example of batch production?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A custom engagement ring" },
              { id: "b", text: "A single prototype aircraft" },
              { id: "c", text: "A handmade suit" },
              { id: "d", text: "A batch of school uniforms" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Batch production",
                statement: "Making a group of identical products together.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Uniforms are made in identical groups — batch production.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "School uniforms",
          },
        },
        {
          id: "cieibs-u3-ops-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define job, batch and flow production, quality control, quality assurance. (b) What is job production? Give one example. (c) What is batch production? Give one example. (d) What is flow production? Give one example. (e) What is the difference between quality control and quality assurance? (f) A line makes 240 units/hour for 6 hours — calculate daily output. (g) Explain one advantage of quality assurance over quality control. (h) Recommend a production method for a bakery making 300 identical loaves each morning and justify your choice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Production and quality",
                statement: "Methods, QC/QA, calculation, recommendation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All five definitions given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) One-off custom items; e.g. tailored suits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Groups of identical items; e.g. uniforms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Continuous standardised production; e.g. cars.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) QC = inspect at end; QA = prevent throughout.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Daily output = 240 x 6 = 1,440 units.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) QA prevents faults rather than detecting them — less waste.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Batch production justified — identical loaves in groups, balances volume and flexibility.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Production methods, quality, calculation, recommendation.",
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
