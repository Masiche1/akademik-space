import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "ebz10-u3-lesson-3-1",
  code: "3-1",
  title: "Operations and Production",
  goal: "I CAN explain operations management and production methods.",
  standards: ["Edexcel IGCSE Business 4BS0 — Operations Management"],
  vocabulary: [
    {
      term: "Operations management",
      definition: "Managing the production of goods/services.",
    },
    {
      term: "Job production",
      definition: "Making one item at a time — bespoke.",
    },
    {
      term: "Batch production",
      definition: "Making groups of identical items.",
    },
    {
      term: "Flow production",
      definition: "Continuous production line — high volume.",
    },
    {
      term: "Lean production",
      definition: "Minimising waste — just-in-time, kaizen.",
    },
  ],
  concepts: [
    {
      id: "ebz10-u3-production",
      title: "Methods of Production",
      skill: "Compare job, batch and flow production.",
      lesson: {
        sections: [
          {
            heading: "Production methods",
            body: "**Job production**: one-off/custom — tailor-made suits, bespoke furniture. Flexible, skilled workers, but expensive per unit and slow.\n**Batch production**: groups of identical items — bakery batches, clothing runs. Balances flexibility and efficiency, but changeovers cost time.\n**Flow production**: continuous assembly line — cars, electronics. Very efficient, low cost per unit, but inflexible and high setup cost.",
          },
          {
            heading: "Choosing a method",
            body: "**Volume**: low → job; medium → batch; high → flow. **Customisation**: high → job; low → flow. **Cost**: flow lowest per unit at scale but highest setup. **Flexibility**: job most flexible, flow least.\n\n**Lean production**: minimise waste — just-in-time (JIT) delivers materials as needed, kaizen (continuous improvement), total quality management. Reduces costs but risks stock-outs if supply fails.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A car manufacturer makes 1000 identical cars per day. Best method?",
          solution:
            "Flow production — high volume, standardised product, assembly line efficiency.",
        },
      },
      questions: [
        {
          id: "ebz10-u3-production-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is batch production?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Continuous assembly line" },
              { id: "b", text: "Making one item at a time" },
              { id: "c", text: "Making products to order only" },
              { id: "d", text: "Making groups of identical items" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Batch production",
                statement: "Groups of identical items produced together.",
              },
            ],
            steps: [
              {
                reasoning: "Batch = groups of identical items.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Groups of identical items",
            commonErrors: ["Job/flow confused."],
          },
        },
        {
          id: "ebz10-u3-production-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of flow production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Flow production",
                statement: "High efficiency, low unit cost.",
              },
            ],
            steps: [
              {
                reasoning: "Very efficient — high output, low cost per unit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consistent quality — standardised process.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Fast production rate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Efficiency, low unit cost, consistent quality, speed.",
            commonErrors: ["Job production advantages.", "Vague."],
          },
        },
        {
          id: "ebz10-u3-production-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a small bakery might use batch production rather than flow production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Batch vs flow",
                statement: "Batch more flexible, lower setup cost.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Low volume — flow needs huge output to be efficient.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Batch allows product variety — different bread types.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Flow setup cost too high for small business.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Batch still gets some efficiency benefits.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Low volume + variety needed — batch balances efficiency and flexibility.",
            commonErrors: ["Flow always better.", "No volume link."],
          },
        },
        {
          id: "ebz10-u3-production-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A furniture maker produces both custom sofas and standard chairs.",
          parts: [
            {
              label: "a",
              prompt: "Which production method for custom sofas? Why?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Which method for standard chairs? Why?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain one benefit of using both methods.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mixed production",
                statement: "Match method to product type.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Job production — one-off, customised.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Flexible, skilled workers, high price.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Batch or flow — standardised, repeated.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Efficient, lower cost per unit.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Serves both markets — luxury and volume.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) job — custom (b) batch/flow — standard (c) serves both markets",
            commonErrors: ["Same method both.", "No reasoning."],
          },
        },
      ],
    },
    {
      id: "ebz10-u3-quality",
      title: "Quality Management",
      skill: "Understand quality control and quality assurance.",
      lesson: {
        sections: [
          {
            heading: "Quality control vs assurance",
            body: "**Quality control (QC)**: inspect finished products — reject defects. Reactive, catches problems after they occur.\n**Quality assurance (QA)**: prevent defects — improve processes, train staff, set standards. Proactive, stops problems before they happen.\n\n**Total Quality Management (TQM)**: everyone responsible for quality — continuous improvement, customer focus, employee involvement.",
          },
          {
            heading: "Importance of quality",
            body: "**Benefits**: customer satisfaction, fewer returns/warranty claims, brand reputation, repeat business, can charge premium prices. **Costs of poor quality**: refunds, repairs, lost customers, damage to reputation.\n\n**Quality standards**: ISO 9001 (quality management), industry-specific standards. **Inspection methods**: sampling, testing, statistical process control.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A phone manufacturer inspects each phone before shipping. QC or QA?",
          solution: "Quality control — inspecting finished products.",
        },
      },
      questions: [
        {
          id: "ebz10-u3-quality-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is quality assurance?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Preventing defects through process improvement",
              },
              { id: "b", text: "Hiring more inspectors" },
              { id: "c", text: "Inspecting finished products" },
              { id: "d", text: "Rejecting bad products" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quality assurance",
                statement: "Preventing defects — proactive, process-focused.",
              },
            ],
            steps: [
              {
                reasoning: "QA = preventing defects, not inspecting.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Preventing defects",
            commonErrors: ["QC confused."],
          },
        },
        {
          id: "ebz10-u3-quality-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of high product quality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quality benefits",
                statement: "Customer satisfaction, reputation, fewer costs.",
              },
            ],
            steps: [
              {
                reasoning: "Customer satisfaction → repeat business.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Fewer returns/warranty claims → lower costs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Better reputation → can charge premium prices.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Customer satisfaction, fewer costs, better reputation/pricing.",
            commonErrors: ["Only one benefit.", "No business link."],
          },
        },
        {
          id: "ebz10-u3-quality-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between quality control and quality assurance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "QC vs QA",
                statement: "Inspection vs prevention.",
              },
            ],
            steps: [
              {
                reasoning: "QC = inspect finished products, reject defects.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "QC is reactive — catches problems after they occur.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "QA = prevent defects through process improvement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "QA is proactive — stops problems before they happen.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "QC = reactive inspection; QA = proactive prevention.",
            commonErrors: ["Same thing.", "No timing link."],
          },
        },
        {
          id: "ebz10-u3-quality-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A bakery has many complaints about inconsistent bread quality.",
          parts: [
            {
              label: "a",
              prompt: "Identify two possible causes of inconsistency.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest two quality assurance measures.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quality improvement",
                statement:
                  "Standardise processes, train staff, control inputs.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Inconsistent ingredients/measurements.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Staff not following recipe/process.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Standardise recipes and procedures.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Train staff, implement quality checks.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) ingredients/staff inconsistency (b) standardise+train+check",
            commonErrors: ["No cause.", "No action."],
          },
        },
      ],
    },
  ],
};
