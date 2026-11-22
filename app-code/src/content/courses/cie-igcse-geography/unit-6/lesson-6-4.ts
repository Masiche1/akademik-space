import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "cieigeo-u6-lesson-6-4",
  code: "6-4",
  title: "Development, Environments and Synthesis",
  goal: "I CAN integrate physical and human geography for extended answers and evaluation.",
  standards: [
    "Cambridge IGCSE Geography 0460",
    "Unit 6: human geography depth",
  ],
  vocabulary: [
    {
      term: "Sustainable development",
      definition: "Meeting needs without harming future.",
    },
    {
      term: "Environmental degradation",
      definition: "Damage to natural environment.",
    },
    {
      term: "Ecosystem services",
      definition: "Benefits nature provides humans.",
    },
    {
      term: "Synthesis",
      definition: "Combining ideas into coherent argument.",
    },
    { term: "Evaluation", definition: "Weighing evidence for judgement." },
    { term: "Stakeholder", definition: "Person/group affected by decisions." },
  ],
  concepts: [
    {
      id: "cieigeo-u6l4-c1-development-env",
      title: "Development-environment interactions",
      skill: "Analyse how development affects environments and vice versa.",
      lesson: {
        sections: [
          {
            heading: "Development vs environment",
            body: "Development often degrades environment: deforestation for agriculture, pollution from industry, overfishing, urban expansion. **Ecosystem services**: forests regulate climate, wetlands filter water, coral reefs protect coasts — losing them harms development. **Sustainable development**: meet needs without compromising future — requires balancing growth with conservation, green technologies, circular economy.",
          },
          {
            heading: "Environmental management",
            body: "**Conservation**: protected areas, sustainable harvesting — preserves resources but may restrict development. **Market solutions**: carbon trading, payments for ecosystem services — economic incentives for conservation. **Technology**: renewable energy, precision agriculture, waste recycling — decouples growth from environmental damage. **Governance**: international agreements (Paris, CITES) coordinate global responses.",
          },
        ],
        keyFormulas: [
          { name: "Sustainable dev", statement: "Now + future" },
          { name: "Ecosystem services", statement: "Nature's benefits" },
          { name: "Decoupling", statement: "Growth without damage" },
        ],
        workedExample: {
          problem:
            "How does deforestation illustrate development-environment conflict?",
          solution:
            "Forests cleared for farmland/ timber → short-term economic gain; but loses ecosystem services (climate regulation, soil protection, biodiversity) → long-term costs (soil erosion, climate change, lost tourism) exceed gains — need sustainable forestry.",
        },
      },
      questions: [
        {
          id: "cieigeo-q-u6l4c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Sustainable development' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximum growth now" },
              { id: "b", text: "Stopping all development" },
              { id: "c", text: "Only economic growth" },
              {
                id: "d",
                text: "Meeting needs without harming future generations",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainable",
                statement: "Future-safe.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Future-safe",
            commonErrors: ["Growth only."],
          },
        },
        {
          id: "cieigeo-q-u6l4c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are 'ecosystem services'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ecosystem services",
                statement: "Nature benefits.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Benefits nature provides to humans — forests regulate climate, wetlands filter water, coral reefs protect coasts, pollinators enable crops; losing ecosystems = losing services.",
            commonErrors: ["Only timber."],
          },
        },
        {
          id: "cieigeo-q-u6l4c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways development degrades the environment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Dev-env", statement: "Damage." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. deforestation (clearing forests for farmland/timber) and pollution (industrial waste contaminating air/water) — also overfishing, urban expansion, soil degradation.",
            commonErrors: ["No damage."],
          },
        },
        {
          id: "cieigeo-q-u6l4c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how 'decoupling' addresses development-environment conflict.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decoupling",
                statement: "Growth without damage.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Economic growth without proportional environmental damage — via renewable energy, efficiency, circular economy (reuse/recycle), green technology; allows development while reducing impact; key to sustainability.",
            commonErrors: ["Impossible."],
          },
        },
        {
          id: "cieigeo-q-u6l4c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate market-based solutions to environmental problems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Market solutions",
                statement: "Incentives.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Carbon trading, payments for ecosystem services — use economic incentives efficiently, fund conservation — but hard to value nature, may not reach poorest, enforcement difficult; complements regulation not replaces.",
            commonErrors: ["Perfect solution."],
          },
        },
        {
          id: "cieigeo-q-u6l4c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'environmental degradation'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Degradation", statement: "Damage." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Damage to natural environment reducing its quality/value — deforestation, pollution, soil erosion, biodiversity loss, climate change; often result of unsustainable development.",
            commonErrors: ["Improvement."],
          },
        },
        {
          id: "cieigeo-q-u6l4c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an 'ecosystem service'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forest regulating climate" },
              { id: "b", text: "Mining" },
              { id: "c", text: "Factory production" },
              { id: "d", text: "Road building" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Ecosystem service",
                statement: "Nature benefit.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Forest climate",
            commonErrors: ["Human activity."],
          },
        },
        {
          id: "cieigeo-q-u6l4c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways conservation can conflict with development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Conservation conflict",
                statement: "Trade-offs.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. protected areas restrict farming/mining (lost economic opportunities) and conservation costs money that could fund development — short-term growth vs long-term sustainability tension.",
            commonErrors: ["No conflict."],
          },
        },
        {
          id: "cieigeo-q-u6l4c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'tragedy of the commons'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tragedy",
                statement: "Shared resources.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Shared resources (fisheries, forests, atmosphere) overused because individuals gain while costs shared — each user has incentive to exploit more; leads to depletion; needs collective management/regulation.",
            commonErrors: ["No problem."],
          },
        },
        {
          id: "cieigeo-q-u6l4c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate international environmental agreements like the Paris Agreement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Env agreements",
                statement: "Cooperation.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Global coordination necessary (emissions transboundary) — but voluntary targets, enforcement weak, some withdrawals; necessary framework but implementation gap; needs binding commitments, climate finance, technology transfer.",
            commonErrors: ["Perfect/failed."],
          },
        },
        {
          id: "cieigeo-q-u6l4c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Deforestation for farmland is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Environmental conservation" },
              { id: "b", text: "Sustainable development" },
              { id: "c", text: "Ecosystem services" },
              {
                id: "d",
                text: "Development degrading the environment",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Development-environment conflict",
                statement: "Growth damages nature.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Degrading environment",
            commonErrors: ["Sustainable."],
          },
        },
        {
          id: "cieigeo-q-u6l4c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two green technologies that decouple growth from environmental damage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Green technology",
                statement: "Clean production.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. renewable energy (solar/wind replace fossil fuels, cutting emissions per unit of output) and precision agriculture/waste recycling (less input waste, circular economy) — allows output growth without proportional environmental harm.",
            commonErrors: ["No technologies."],
          },
        },
        {
          id: "cieigeo-q-u6l4c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'payments for ecosystem services' encourage conservation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "PES",
                statement: "Pay for protection.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Landowners/users are paid to maintain ecosystems (forests, wetlands, watersheds) — e.g. REDD+ pays for avoided deforestation, Costa Rica's PES scheme; aligns economic incentive with conservation, making protection more profitable than exploitation.",
            commonErrors: ["No payment link."],
          },
        },
        {
          id: "cieigeo-q-u6l4c1-14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how climate change links development and the environment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate linkage",
                statement: "Feedback loop.",
              },
            ],
            steps: [
              { reasoning: "Physical link.", marks: 1, markCode: "M" },
              { reasoning: "Human link.", marks: 1, markCode: "M" },
              { reasoning: "Feedback.", marks: 1, markCode: "A" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Emissions from development (industry, transport, deforestation) drive climate change → impacts (drought, floods, sea-level rise) damage agriculture, infrastructure, health — especially in poor countries least responsible; meanwhile LICs need growth to adapt — creates vicious cycle requiring low-carbon development.",
            commonErrors: ["One-direction link."],
          },
        },
        {
          id: "cieigeo-q-u6l4c1-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which international agreement focuses on climate change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The WTO" },
              { id: "b", text: "NAFTA" },
              { id: "c", text: "The Paris Agreement" },
              { id: "d", text: "CITES" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Paris Agreement",
                statement: "Climate treaty.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Paris Agreement",
            commonErrors: ["Trade bodies."],
          },
        },
        {
          id: "cieigeo-q-u6l4c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether economic growth and environmental protection are compatible.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Growth vs protection",
                statement: "Compatibility.",
              },
            ],
            steps: [
              { reasoning: "Growth needs.", marks: 1, markCode: "M" },
              { reasoning: "Protection needs.", marks: 1, markCode: "M" },
              { reasoning: "Compatibility evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Historically linked — growth degraded environments — but decoupling via renewables, efficiency and circular economy shows compatibility is possible; however green transition costs and LICs' right to develop create tension; compatible only with deliberate sustainable policies, not automatic.",
            commonErrors: ["Impossible/automatic."],
          },
        },
      ],
    },
    {
      id: "cieigeo-u6l4-c2-synthesis",
      title: "Synthesis and evaluation for extended answers",
      skill: "Integrate physical and human geography for high-level responses.",
      lesson: {
        sections: [
          {
            heading: "Synthesis skills",
            body: "Extended answers need **integrated thinking**: link physical and human factors — e.g. climate (physical) affects agriculture (human), which affects development. **Structure**: clear introduction, logical paragraphs, each point developed with examples, conclusion answering question. Use case studies, data, maps to support. **Evaluation**: weigh evidence, consider multiple perspectives, reach justified judgement — 'it depends' with reasons.",
          },
          {
            heading: "Common extended answer types",
            body: "**Discuss**: present multiple viewpoints + your judgement. **Evaluate**: strengths AND weaknesses + conclusion. **To what extent**: degree of agreement with judgement. **Analyse**: break down causes/effects systematically. **Compare**: similarities AND differences. Each needs balanced argument, not one-sided description.",
          },
        ],
        keyFormulas: [
          { name: "Synthesis", statement: "Integrated thinking" },
          { name: "Evaluate", statement: "Both sides+judgement" },
          { name: "To what extent", statement: "Degree" },
        ],
        workedExample: {
          problem:
            "Structure an answer to 'To what extent is urbanisation beneficial?'",
          solution:
            "Introduction: define urbanisation, thesis (depends on management). Para 1: benefits (jobs, services, economies). Para 2: drawbacks (slums, pollution, inequality). Para 3: evaluation (benefits IF well-managed; LIC rapid growth problematic). Conclusion: degree — beneficial with caveats.",
        },
      },
      questions: [
        {
          id: "cieigeo-q-u6l4c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Synthesis' in geography means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only physical geography" },
              { id: "b", text: "Combining physical and human factors" },
              { id: "c", text: "Copying notes" },
              { id: "d", text: "Only maps" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Synthesis", statement: "Integration." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Integration",
            commonErrors: ["One aspect."],
          },
        },
        {
          id: "cieigeo-q-u6l4c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'evaluate' require in an exam answer?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Evaluate", statement: "Both sides." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Components.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Weigh evidence for and against — present strengths AND weaknesses, then reach justified conclusion/judgement; not just describe, must argue.",
            commonErrors: ["One side."],
          },
        },
        {
          id: "cieigeo-q-u6l4c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How should you structure an extended geography answer?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Answer structure", statement: "Logical." },
            ],
            steps: [
              { reasoning: "Intro.", marks: 1, markCode: "M" },
              { reasoning: "Body.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Introduction (define terms, thesis) → body paragraphs (one point each, developed with examples/evidence) → conclusion (answer question directly, evaluation); logical flow, clear paragraphs.",
            commonErrors: ["No structure."],
          },
        },
        {
          id: "cieigeo-q-u6l4c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how to integrate physical and human geography in answers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Integration", statement: "Linking." },
            ],
            steps: [
              { reasoning: "Link mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Connect factors — e.g. climate (physical) affects agriculture (human), which affects development; shows holistic understanding, higher-level thinking; examiners reward integrated answers over separate descriptions.",
            commonErrors: ["Separate answers."],
          },
        },
        {
          id: "cieigeo-q-u6l4c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse what distinguishes a top-band extended answer from a middle-band one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bands", statement: "Quality." },
            ],
            steps: [
              { reasoning: "Middle band.", marks: 1, markCode: "M" },
              { reasoning: "Top band.", marks: 1, markCode: "M" },
              { reasoning: "Key difference.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Middle: description, some evaluation, case study mention. Top: synthesis (physical+human linked), evaluation throughout, detailed examples, clear judgement answering question precisely; depth + integration + critical thinking.",
            commonErrors: ["Just longer."],
          },
        },
        {
          id: "cieigeo-q-u6l4c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'evaluation' in geography answers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation",
                statement: "Judgement.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Method.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Weighing evidence for and against to reach justified judgement — consider strengths/weaknesses, multiple perspectives, reach conclusion; essential for high marks in 'evaluate'/'to what extent' questions.",
            commonErrors: ["Just opinion."],
          },
        },
        {
          id: "cieigeo-q-u6l4c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'To what extent' questions require:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only yes" },
              { id: "b", text: "Degree of agreement with judgement" },
              { id: "c", text: "Only no" },
              { id: "d", text: "Description only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "To what extent", statement: "Degree." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Degree+judgement",
            commonErrors: ["Binary."],
          },
        },
        {
          id: "cieigeo-q-u6l4c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways to support arguments in extended answers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Evidence", statement: "Support." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. named case studies (specific examples show understanding) and data/statistics (quantify claims) — also maps, diagrams, quotes from sources; evidence elevates answers from assertion to argument.",
            commonErrors: ["No evidence."],
          },
        },
        {
          id: "cieigeo-q-u6l4c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between 'describe' and 'explain' in geography questions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Command words",
                statement: "What vs why.",
              },
            ],
            steps: [
              { reasoning: "Describe.", marks: 1, markCode: "M" },
              { reasoning: "Explain.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Describe: state what happens/characteristics (facts). Explain: give reasons why/how (causes, mechanisms, processes) — 'explain' needs deeper understanding than 'describe'.",
            commonErrors: ["Same."],
          },
        },
        {
          id: "cieigeo-q-u6l4c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the importance of case studies in IGCSE Geography.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Case studies",
                statement: "Evidence.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Essential for evidence-based answers — specific examples prove understanding, enable evaluation; but risk over-reliance (one case ≠ universal), need breadth across regions/topics; best used to illustrate principles not replace them.",
            commonErrors: ["Not needed."],
          },
        },
        {
          id: "cieigeo-q-u6l4c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which command word requires strengths, weaknesses and a judgement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "List" },
              { id: "b", text: "Describe" },
              { id: "c", text: "Evaluate" },
              { id: "d", text: "State" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluate",
                statement: "Both sides + judgement.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Evaluate",
            commonErrors: ["Describe."],
          },
        },
        {
          id: "cieigeo-q-u6l4c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways to make a conclusion directly answer the question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Conclusion technique",
                statement: "Direct response.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. restate your judgement explicitly using the question's own terms ('to a large extent...') and summarise the decisive points — avoid introducing new ideas; a vague conclusion loses marks even in strong answers.",
            commonErrors: ["Vague endings."],
          },
        },
        {
          id: "cieigeo-q-u6l4c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how an 'analyse' answer should be structured.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Analyse",
                statement: "Break down systematically.",
              },
            ],
            steps: [
              { reasoning: "Break-down.", marks: 1, markCode: "M" },
              { reasoning: "Causes/effects.", marks: 1, markCode: "M" },
              { reasoning: "Logical sequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Decompose the issue into components, examine causes and consequences of each systematically, and link factors — 'analyse' rewards organised examination of parts, not just description or a single judgement.",
            commonErrors: ["Just describe."],
          },
        },
        {
          id: "cieigeo-q-u6l4c2-14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the differences between 'discuss' and 'evaluate' questions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Discuss vs evaluate",
                statement: "Command word demands.",
              },
            ],
            steps: [
              { reasoning: "Discuss requirements.", marks: 1, markCode: "M" },
              { reasoning: "Evaluate requirements.", marks: 1, markCode: "M" },
              { reasoning: "Similarities/differences.", marks: 1, markCode: "A" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Both need multiple viewpoints — 'discuss' presents and explores different perspectives with your view; 'evaluate' specifically weighs strengths/weaknesses to reach a justified judgement; evaluate demands a clearer verdict, discuss allows more open exploration.",
            commonErrors: ["Treated as identical."],
          },
        },
        {
          id: "cieigeo-q-u6l4c2-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The best structure for an extended geography answer is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Introduction, developed paragraphs, conclusion",
              },
              { id: "b", text: "No conclusion needed" },
              { id: "c", text: "Bullet points only" },
              { id: "d", text: "One long unstructured paragraph" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Answer structure",
                statement: "Intro-body-conclusion.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Intro-body-conclusion",
            commonErrors: ["Unstructured."],
          },
        },
        {
          id: "cieigeo-q-u6l4c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the importance of reaching a justified judgement in geography answers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Judgement",
                statement: "Reasoned verdict.",
              },
            ],
            steps: [
              { reasoning: "Role of judgement.", marks: 1, markCode: "M" },
              { reasoning: "'It depends' with reasons.", marks: 1, markCode: "M" },
              { reasoning: "Risk of no judgement.", marks: 1, markCode: "A" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Mark schemes reward answers that answer the question — a reasoned 'it depends' with conditions beats unsupported extremes; answers without judgement cap at middle band; judgement must be supported by evidence throughout, not just asserted in the conclusion.",
            commonErrors: ["Opinion without evidence."],
          },
        },
      ],
    },
  ],
};
