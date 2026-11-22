import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "eiasbiz-u4-lesson-4-1",
  code: "4-1",
  title: "Production Methods and Quality",
  goal: "I CAN compare job, batch and flow production and explain quality management.",
  standards: ["Edexcel IAS Business WBP01 Unit 4 — Operations Management"],
  vocabulary: [
    {
      term: "Job production",
      definition: "Making one product at a time — bespoke work.",
    },
    {
      term: "Batch production",
      definition: "Making groups of identical products.",
    },
    {
      term: "Flow production",
      definition: "Continuous production line — high volume.",
    },
    {
      term: "Quality control",
      definition: "Checking products meet standards during production.",
    },
    {
      term: "Quality assurance",
      definition: "Building quality into every process step.",
    },
    {
      term: "TQM",
      definition:
        "Total Quality Management — whole-organisation quality focus.",
    },
  ],
  concepts: [
    {
      id: "eiasbiz-u4-production",
      title: "Production Methods",
      skill: "Choose between job, batch and flow production.",
      lesson: {
        sections: [
          {
            heading: "Production types",
            body: "**Job production**: one-off bespoke products — tailoring, furniture, repairs. Low volume, high skill, flexible, expensive per unit. **Batch production**: groups of identical items — bakery batch of 500 loaves, clothing runs. Medium volume, some flexibility. **Flow production**: continuous line — cars, bottles, electronics. High volume, low cost per unit, inflexible, high capital cost.\n\n**Lean production**: minimise waste — just-in-time inventory, kaizen continuous improvement.",
          },
          {
            heading: "Choosing method",
            body: "Volume, customisation, cost, flexibility determine choice. Job=custom, flow=standardised high volume. Many businesses combine — flow for standard parts, job for custom finishes.\n\n**Evaluation**: flow cheapest per unit but rigid; job flexible but costly; batch balances both.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Car factory producing thousands daily. Method?",
          solution: "Flow production.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u4-prod-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is flow production?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One product at a time" },
              { id: "b", text: "Small batches" },
              { id: "c", text: "Manual labour only" },
              { id: "d", text: "Continuous production line, high volume" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Flow production",
                statement: "Continuous line.",
              },
            ],
            steps: [
              {
                reasoning: "Flow = continuous high volume.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Continuous line",
            commonErrors: ["Job confused."],
          },
        },
        {
          id: "eiasbiz-u4-prod-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of batch production over flow production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Batch vs flow",
                statement: "Flexibility.",
              },
            ],
            steps: [
              {
                reasoning: "More flexible — can switch between product types.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lower capital cost — less specialised machinery.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Suited to medium-volume varied demand.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Flexibility, lower capital cost.",
            commonErrors: ["Flow advantages.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u4-prod-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a furniture maker might use job production despite higher costs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Job production",
                statement: "Customisation premium.",
              },
            ],
            steps: [
              {
                reasoning: "Customers want bespoke designs — customisation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Premium pricing possible — unique products.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Skilled craftspeople — reputation for quality.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Low volume market — flow not viable.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Customisation + premium + reputation.",
            commonErrors: ["Flow better.", "No justification."],
          },
        },
        {
          id: "eiasbiz-u4-prod-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A bakery must choose a production method.",
          parts: [
            { label: "a", prompt: "Recommend a method and justify.", marks: 4 },
            { label: "b", prompt: "Suggest one quality measure.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Production choice",
                statement: "Volume vs flexibility.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Batch — daily bread batches, varied products.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Batch balances volume with product variety.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Quality control — check freshness, weight, appearance.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) HACCP food safety checks throughout process.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) batch (b) quality control",
            commonErrors: ["Job/flow only.", "No quality."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u4-quality",
      title: "Quality Management",
      skill: "Explain quality control, assurance and TQM.",
      lesson: {
        sections: [
          {
            heading: "Quality approaches",
            body: "**Quality control (QC)**: inspect finished products — reject defects. Reactive, end-of-line. **Quality assurance (QA)**: build quality into process — check at each stage, prevent defects. **TQM**: everyone responsible — continuous improvement, customer focus, zero defects goal.\n\n**Kaizen**: continuous small improvements by all staff. **Six Sigma**: reduce defects to 3.4 per million — data-driven.",
          },
          {
            heading: "Quality benefits",
            body: "Higher prices (premium), customer loyalty, fewer returns/waste, competitive advantage. **Costs**: inspection time, training, certification.\n\n**ISO 9001**: international quality management standard — certification proves consistent quality.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Factory checks every bolt before shipping. Approach?",
          solution: "Quality control.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u4-qual-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is quality assurance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Building quality into every process step" },
              { id: "b", text: "Checking final products" },
              { id: "c", text: "Reducing prices" },
              { id: "d", text: "Hiring inspectors" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quality assurance",
                statement: "Process quality.",
              },
            ],
            steps: [
              {
                reasoning: "QA = process-level quality.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Process quality",
            commonErrors: ["QC confused."],
          },
        },
        {
          id: "eiasbiz-u4-qual-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of TQM.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "TQM",
                statement: "Everyone responsible.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Whole organisation focuses on quality — not just inspectors.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Continuous improvement — kaizen culture.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Higher quality → customer satisfaction → loyalty.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Org-wide quality, continuous improvement, satisfaction.",
            commonErrors: ["QC confused.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u4-qual-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between quality control and quality assurance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "QC vs QA",
                statement: "End vs process.",
              },
            ],
            steps: [
              {
                reasoning: "QC: inspect finished products, reject defects.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "QC: reactive — finds problems after they occur.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "QA: prevent defects — check process steps.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "QA: proactive — quality built in.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "QC=end inspection; QA=process prevention.",
            commonErrors: ["Same thing.", "No difference."],
          },
        },
        {
          id: "eiasbiz-u4-qual-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A manufacturer has rising defect rates.",
          parts: [
            { label: "a", prompt: "Identify two possible causes.", marks: 4 },
            {
              label: "b",
              prompt: "Suggest a quality improvement approach.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quality improvement",
                statement: "Root cause + TQM.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Poor training — staff errors.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Equipment wear — faulty machines.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Implement TQM — staff involvement in quality.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Quality assurance checks at each stage.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) training+equipment (b) TQM+QA",
            commonErrors: ["Only QC.", "No cause."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u4-supply",
      title: "Supply Chain and Inventory",
      skill: "Explain supply chain management and inventory control methods.",
      lesson: {
        sections: [
          {
            heading: "Supply chain",
            body: "**Supply chain**: network from raw materials to customer — suppliers, manufacturers, distributors, retailers. **Supply chain management**: coordinate flows — information, materials, money. **Just-in-time (JIT)**: receive materials only when needed — reduces storage costs, but risky if supply fails.\n\n**Outsourcing**: contract production to specialists — lower costs, less control. **Vertical integration**: control own supply chain — buy suppliers or retailers.",
          },
          {
            heading: "Inventory control",
            body: "**Stock control**: balance holding costs vs stockout costs. **Economic order quantity (EOQ)**: optimal order size minimising total inventory cost. **ABC analysis**: classify items by value — A=high value (tight control), C=low value (bulk ordering).\n\n**Buffer stock**: safety stock against demand spikes or supply delays.",
          },
        ],
        keyFormulas: [
          {
            name: "Inventory cost",
            statement: "Holding cost + ordering cost — minimised by EOQ.",
          },
        ],
        workedExample: {
          problem: "Car maker receives parts daily, no warehouse. Method?",
          solution: "Just-in-time.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u4-supply-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is just-in-time (JIT) inventory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bulk ordering" },
              { id: "b", text: "Safety stock" },
              { id: "c", text: "Large warehouses" },
              { id: "d", text: "Materials received only when needed" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "JIT",
                statement: "On-demand delivery.",
              },
            ],
            steps: [
              { reasoning: "JIT = no stockpiling.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** On-demand",
            commonErrors: ["Bulk confused."],
          },
        },
        {
          id: "eiasbiz-u4-supply-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of JIT inventory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "JIT benefits",
                statement: "Low storage, efficiency.",
              },
            ],
            steps: [
              {
                reasoning: "Reduces storage costs — less warehouse space.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Less waste — materials used immediately.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Frees up cash — less tied up in stock.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Lower storage, less waste, cash flow.",
            commonErrors: ["Stockpile.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u4-supply-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the main risk of JIT inventory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "JIT risk",
                statement: "Supply vulnerability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Supply disruption — delayed delivery stops production.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "No buffer stock — can't cope with unexpected demand.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Supplier dependency — problems pass to you.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: factory halt when supplier fails.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Supply disruption stops production.",
            commonErrors: ["No risk.", "Storage only."],
          },
        },
        {
          id: "eiasbiz-u4-supply-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A retailer struggles with stock levels — too much slow stock, too little fast stock.",
          parts: [
            { label: "a", prompt: "Explain ABC analysis.", marks: 4 },
            {
              label: "b",
              prompt: "Suggest an inventory improvement.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inventory management",
                statement: "Prioritise by value.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Classify items: A=high value/volume, B=medium, C=low.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Tight control on A items; bulk order C items.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Use ABC to set reorder levels per category.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Or JIT for fast-moving items, buffer for A items.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) ABC classify (b) category controls",
            commonErrors: ["No ABC.", "No improvement."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u4-lean",
      title: "Lean Operations and Productivity",
      skill: "Explain lean principles, productivity measures and bottlenecks.",
      lesson: {
        sections: [
          {
            heading: "Lean principles",
            body: "**Eliminate waste**: overproduction, waiting, transport, over-processing, inventory, motion, defects. **Just-in-time**: produce only what's needed. **Kaizen**: continuous improvement — everyone suggests improvements. **5S**: Sort, Set in order, Shine, Standardise, Sustain — workplace organisation.\n\n**Productivity**: output ÷ input. **Labour productivity**: output per worker. **Capital productivity**: output per machine. Higher = more efficient.",
          },
          {
            heading: "Bottlenecks",
            body: "**Bottleneck**: slowest step limiting whole process — capacity of system = capacity of bottleneck. **Theory of constraints**: improve bottleneck to increase output — other steps have spare capacity.\n\n**Example**: assembly line — if welding takes 5 min and painting takes 3 min, welding is bottleneck; speeding painting doesn't help.",
          },
        ],
        keyFormulas: [
          {
            name: "Productivity",
            statement: "Output ÷ input (labour, capital, materials).",
          },
        ],
        workedExample: {
          problem:
            "Line produces 100 units/day, bottleneck at step 3. What helps?",
          solution: "Speed up or add capacity at step 3.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u4-lean-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a production bottleneck?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Storage area" },
              { id: "b", text: "Fastest step" },
              { id: "c", text: "Quality check" },
              { id: "d", text: "Slowest step limiting output" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bottleneck",
                statement: "Constraint step.",
              },
            ],
            steps: [
              {
                reasoning: "Bottleneck = limiting step.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Limiting step",
            commonErrors: ["Fastest confused."],
          },
        },
        {
          id: "eiasbiz-u4-lean-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of waste in lean production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lean waste",
                statement: "7 wastes.",
              },
            ],
            steps: [
              {
                reasoning: "Overproduction — making more than needed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Waiting — idle time between steps.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Defects — rework and scrap.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Overproduction, waiting, defects.",
            commonErrors: ["Only one.", "Not waste."],
          },
        },
        {
          id: "eiasbiz-u4-lean-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why improving a non-bottleneck step doesn't increase output.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Theory of constraints",
                statement: "System limited by bottleneck.",
              },
            ],
            steps: [
              {
                reasoning: "Output determined by slowest step only.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Other steps already have spare capacity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Improving fast steps creates no benefit — work piles up.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Only bottleneck improvement raises throughput.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Only bottleneck limits system output.",
            commonErrors: ["Any step helps.", "No reasoning."],
          },
        },
        {
          id: "eiasbiz-u4-lean-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A factory wants to improve productivity.",
          parts: [
            { label: "a", prompt: "Suggest two lean improvements.", marks: 4 },
            {
              label: "b",
              prompt: "Explain how to measure productivity.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Productivity",
                statement: "Output/input.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) 5S workplace organisation — reduce motion waste.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Kaizen — staff suggest improvements continuously.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Labour productivity = output per worker per period.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Capital productivity = output per machine/hour.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) 5S+kaizen (b) output/input",
            commonErrors: ["No lean.", "No measure."],
          },
        },
      ],
    },
  ],
};
