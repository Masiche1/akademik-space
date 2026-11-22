import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "cieibs-u4-lesson-4-3",
  code: "4-3",
  title: "Operations in Depth: Production, Quality and Lean Methods",
  goal: "I CAN compare production methods, assess quality systems and explain lean techniques.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Operations section"],
  vocabulary: [
    {
      term: "Job production",
      definition: "Making one-off, customised products.",
    },
    {
      term: "Batch production",
      definition: "Making groups of identical products.",
    },
    {
      term: "Flow production",
      definition: "Continuous production on an assembly line.",
    },
    {
      term: "Quality control",
      definition: "Inspecting output to find defects.",
    },
    {
      term: "Quality assurance",
      definition: "Designing processes to prevent defects.",
    },
    {
      term: "Lean production",
      definition: "Minimising waste in the production process.",
    },
  ],
  concepts: [
    {
      id: "cieibs-u4-s3-ops",
      title: "Production methods and quality",
      skill: "Choose production methods and quality systems.",
      lesson: {
        sections: [
          {
            heading: "Production methods",
            body: "Job production makes individual customised items — suits tailoring, furniture, specialist equipment; high skill, high cost per unit. Batch production makes groups of identical products — suits bakery goods, clothing runs; balances flexibility and efficiency. Flow production is continuous on an assembly line — suits cars, electronics; high capital cost but low unit cost at high volume.",
          },
          {
            heading: "Quality",
            body: "Quality control inspects finished output to find and remove defects — reactive. Quality assurance builds quality into the process through training, standards and checks — proactive. Total quality management (TQM) extends quality responsibility to every employee and every stage.",
          },
          {
            heading: "Lean production and location",
            body: "Lean production minimises waste — just-in-time delivers inputs only when needed, kaizen encourages continuous improvement, and cell production organises workers into teams. Location decisions weigh costs (labour, rent, transport), markets, skills, infrastructure and government incentives.",
          },
        ],
      },
      questions: [
    {
      id: "cieibs-u4-op-q1",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is 'job production'?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Producing only for export" },
          { id: "b", text: "Making groups of identical products" },
          { id: "c", text: "Making one-off, customised products" },
          { id: "d", text: "Continuous assembly line production" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Job production",
            statement: "One-off custom products.",
          },
        ],
        steps: [
          {
            reasoning:
              "Job production makes individual, customised products to customer specification.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(c)** Making one-off, customised products",
      },
    },
    {
      id: "cieibs-u4-op-q2",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is 'flow production'?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Making products to order" },
          { id: "b", text: "Continuous production on an assembly line" },
          { id: "c", text: "Producing in small batches" },
          { id: "d", text: "Hand-crafting each item" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Flow production",
            statement: "Continuous assembly line.",
          },
        ],
        steps: [
          {
            reasoning:
              "Flow production is continuous production moving along an assembly line.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** Continuous production on an assembly line",
      },
    },
    {
      id: "cieibs-u4-op-q3",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the difference between quality control and quality assurance?",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Quality control",
            statement: "Inspecting output for defects.",
          },
          {
            kind: "definition",
            name: "Quality assurance",
            statement: "Preventing defects in process.",
          },
        ],
        steps: [
          {
            reasoning:
              "Quality control inspects finished products to find defects (reactive); quality assurance designs processes to prevent defects (proactive).",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "QC = check output; QA = build quality into process.",
      },
    },
    {
      id: "cieibs-u4-op-q4",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is 'just-in-time' production?",
      response: {
        type: "mcq",
        choices: [
          {
            id: "a",
            text: "Delivering inputs only when needed to reduce waste",
          },
          { id: "b", text: "Producing as fast as possible" },
          { id: "c", text: "Shipping products immediately after making them" },
          { id: "d", text: "Hiring temporary workers for peaks" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Just-in-time",
            statement: "Inputs on demand.",
          },
        ],
        steps: [
          {
            reasoning:
              "Just-in-time delivers materials only when needed in production, reducing storage costs and waste.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(a)** Delivering inputs only when needed to reduce waste",
      },
    },
    {
      id: "cieibs-u4-op-q5",
      difficulty: "foundation",
      totalMarks: 3,
      stem: "Name the three main production methods and give one example of each.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Production methods",
            statement: "Job, batch, flow.",
          },
        ],
        steps: [
          {
            reasoning:
              "Job production: customised one-offs, e.g., tailoring or bespoke furniture.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Batch production: groups of identical items, e.g., bakery batches or clothing runs.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Flow production: continuous assembly, e.g., car manufacturing or electronics.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Job (tailoring), batch (bakery), flow (cars).",
      },
    },
    {
      id: "cieibs-u4-op-q6",
      difficulty: "core",
      totalMarks: 3,
      stem: "Compare job production and flow production in terms of cost and flexibility.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Job production",
            statement: "Flexible, high unit cost.",
          },
          {
            kind: "definition",
            name: "Flow production",
            statement: "Inflexible, low unit cost.",
          },
        ],
        steps: [
          {
            reasoning:
              "Job production is highly flexible — products can be customised — but unit costs are high due to skilled labour and no economies of scale.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Flow production has very low unit costs at high volume through automation and specialisation, but is inflexible — changing the product is costly.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The choice depends on volume and customisation needs: low-volume custom → job; high-volume standard → flow.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Job = flexible/high cost; flow = inflexible/low cost.",
        commonErrors: ["Claiming flow production is flexible."],
      },
    },
    {
      id: "cieibs-u4-op-q7",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain two advantages of batch production.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Batch advantages",
            statement: "Balance of flexibility and efficiency.",
          },
        ],
        steps: [
          {
            reasoning:
              "It balances flexibility and efficiency — different batches can be different products, but within a batch machines run continuously.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It suits moderate volumes where job production is too costly but flow production is unnecessary.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Labour can be shared across batches and equipment utilisation is higher than in job production.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Flexibility plus efficiency at moderate volumes.",
        commonErrors: ["Claiming batch production is continuous."],
      },
    },
    {
      id: "cieibs-u4-op-q8",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain why a car manufacturer would use flow production.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Flow production",
            statement: "High volume, low cost.",
          },
        ],
        steps: [
          {
            reasoning:
              "Car manufacturing needs very high output volumes — millions of identical or near-identical vehicles.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Flow production's assembly line minimises unit cost through specialisation, automation and continuous operation.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Quality can be controlled at each stage, and just-in-time delivery keeps inventory low.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "High volume and standardised product suit flow production's low unit costs.",
        commonErrors: ["Ignoring the volume requirement."],
      },
    },
    {
      id: "cieibs-u4-op-q9",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain the difference between quality control and quality assurance with examples.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Quality control",
            statement: "Inspect output.",
          },
          {
            kind: "definition",
            name: "Quality assurance",
            statement: "Prevent defects.",
          },
        ],
        steps: [
          {
            reasoning:
              "Quality control inspects finished products — e.g., checking a batch of phones for defects and rejecting faulty units.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Quality assurance prevents defects at source — e.g., training workers, calibrating machines, standardising procedures so defects never occur.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Assurance is proactive and cheaper long-term; control is reactive and can be costly if defects are found late.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "QC inspects output; QA prevents defects through process design.",
        commonErrors: ["Treating them as the same."],
      },
    },
    {
      id: "cieibs-u4-op-q10",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which production method is most suitable for a bespoke wedding dress?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Job production" },
          { id: "b", text: "Batch production" },
          { id: "c", text: "Mass production" },
          { id: "d", text: "Flow production" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Job production",
            statement: "Custom one-offs.",
          },
        ],
        steps: [
          {
            reasoning:
              "A bespoke wedding dress is a customised one-off product — job production is most suitable.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(a)** Job production",
      },
    },
    {
      id: "cieibs-u4-op-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "(a) What is 'kaizen'? (b) What does it aim to achieve?",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Kaizen",
            statement: "Continuous improvement.",
          },
        ],
        steps: [
          {
            reasoning:
              "Kaizen is a lean production technique of continuous, incremental improvement involving all employees.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It aims to reduce waste and improve efficiency through small ongoing changes.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "Kaizen = continuous small improvements to cut waste.",
      },
    },
    {
      id: "cieibs-u4-op-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain two advantages of quality assurance over quality control.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Assurance vs control",
            statement: "Prevention cheaper than inspection.",
          },
        ],
        steps: [
          {
            reasoning:
              "Assurance prevents defects at source, reducing the cost of rework, waste and returns that control discovers too late.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It builds quality into every process step and involves all employees, creating a quality culture.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Consistent processes produce more reliable output and better customer satisfaction.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Prevention is cheaper and builds consistent quality.",
        commonErrors: ["Claiming control is always better."],
      },
    },
    {
      id: "cieibs-u4-op-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A furniture maker produces 50 custom pieces per month. Assess whether it should switch to batch or flow production.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Production method choice.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: at 50 custom pieces monthly, job production suits current customisation needs.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Supporting evidence for batch: if standard designs emerge, batches could reduce costs while keeping some flexibility.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Counter-argument: flow production requires high volume and standardisation that 50 custom pieces cannot support.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: keep job production; consider batch only if demand shifts to repeated standard designs.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Stay with job production; batch only if standardisation emerges.",
        commonErrors: ["Recommending flow production for low volume."],
      },
    },
    {
      id: "cieibs-u4-op-q14",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess whether just-in-time production is suitable for all businesses.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "JIT suitability.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: JIT benefits many manufacturers but has significant risks.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Advantages: minimal inventory, lower storage costs, less waste, exposes process problems quickly.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Risks: any supply disruption halts production — no buffer stock; requires reliable suppliers, accurate forecasting and efficient logistics.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: JIT suits firms with stable demand and reliable supply chains; risky for those with volatile inputs.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Valuable but risky without reliable supply chains.",
        commonErrors: ["Ignoring supply-disruption risk."],
      },
    },
    {
      id: "cieibs-u4-op-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess the view that location decisions are mainly about labour costs.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Location factors.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: labour cost matters but is only one of many location factors.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Other factors: transport links to markets and suppliers, availability of skilled labour, infrastructure, energy costs, government incentives and taxes.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Counter-argument: cheap labour can be offset by poor transport or skills shortages, so cost alone misleads.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: location decisions weigh multiple factors; labour cost is important but not dominant.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Labour cost is one factor among many.",
        commonErrors: ["One-factor analysis."],
      },
    },
    {
      id: "cieibs-u4-op-q16",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate whether total quality management is better than simple quality control.",
      response: { type: "open" },
      markscheme: {
        principles: [
          { kind: "technique", name: "Evaluation", statement: "TQM vs QC." },
        ],
        steps: [
          {
            reasoning:
              "Thesis: TQM is more comprehensive but requires greater commitment.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "TQM advantages: quality responsibility shared by all, prevention focus, continuous improvement, better long-term results.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Limitations: needs training, culture change and management commitment; may be overkill for small operations.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: TQM is superior for firms seeking sustained quality; QC alone is reactive and limited.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "TQM is better long-term but needs commitment.",
        commonErrors: ["Ignoring implementation costs."],
      },
    },
    {
      id: "cieibs-u4-op-q17",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Which production method combines flexibility with some efficiency?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Batch production" },
          { id: "b", text: "Job production" },
          { id: "c", text: "Flow production" },
          { id: "d", text: "Continuous production" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Batch production",
            statement: "Flexibility-efficiency balance.",
          },
        ],
        steps: [
          {
            reasoning:
              "Batch production balances flexibility (different batches) with efficiency (identical items within a batch).",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(a)** Batch production",
      },
    },
    {
      id: "cieibs-u4-op-q18",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain why flow production requires high capital investment.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Flow capital intensity",
            statement: "Machinery and automation.",
          },
        ],
        steps: [
          {
            reasoning:
              "Flow production uses specialised machinery, assembly lines and automation — all costly to buy and install.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The fixed costs are high, but they are spread over very large output volumes, reducing unit cost.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "This makes flow production viable only at high volume — it is a fixed-cost-heavy method.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Specialised machinery and automation require high upfront capital.",
      },
    },
    {
      id: "cieibs-u4-op-q19",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe how a business can use cell production to improve efficiency.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Cell production",
            statement: "Team-based production units.",
          },
        ],
        steps: [
          {
            reasoning:
              "Workers are organised into small teams (cells), each responsible for a complete stage or product family.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "This reduces waiting time, improves communication and gives workers responsibility for quality.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It combines some flexibility of job production with efficiency of flow production.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Cell production organises teams for faster, more flexible output.",
      },
    },
    {
      id: "cieibs-u4-op-q20",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate the view that automation always improves a business's competitiveness.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "Automation trade-offs.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: automation can improve competitiveness but is not universally beneficial.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Advantages: higher productivity, consistent quality, lower unit labour cost, ability to run continuously.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Limitations: high capital cost, job losses and skills obsolescence, inflexibility when demand changes, maintenance dependence.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: automation suits stable, high-volume production; its value depends on volume, capital availability and labour market effects.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Automation helps at scale but has costs and limits.",
        commonErrors: ["One-sided praise or criticism."],
      },
    },
      ],
    },
  ],
};
