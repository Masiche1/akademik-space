import type { Lesson } from "../../../types.ts";

export const lesson69: Lesson = {
  id: "cieige-u6-lesson-6-9",
  code: "6-9",
  title: "IGCSE Economics Exam Technique and Data Response",
  goal: "I CAN apply exam technique to calculations, diagrams and data response questions.",
  standards: ["Cambridge IGCSE Economics 0455", "Unit 6: exam technique"],
  vocabulary: [
    {
      term: "Data response",
      definition: "Questions based on provided data/text extracts.",
    },
    {
      term: "Calculation question",
      definition: "Numerical answer from given data.",
    },
    {
      term: "Diagram question",
      definition: "Draw/label supply-demand or AD-AS diagrams.",
    },
    {
      term: "Evaluation",
      definition: "Weighing evidence to reach a judgement.",
    },
    {
      term: "Command word",
      definition: "Define, explain, analyse, evaluate, discuss.",
    },
    {
      term: "Marks allocation",
      definition: "How marks distribute across question parts.",
    },
  ],
  concepts: [
    {
      id: "cieige-u6l9-c1-technique",
      title: "Exam technique for economics",
      skill: "Apply structure, diagrams and evaluation to maximise marks.",
      lesson: {
        sections: [
          {
            heading: "Question types",
            body: "**Definitions** (2m) — precise, concise. **Calculations** (3-4m) — show working, units. **Diagrams** (4m) — correct axes, curves, labels, equilibrium. **Explain/Analyse** (6-8m) — mechanism chains, diagrams optional. **Evaluate/Discuss** (10m) — both sides + judgement.",
          },
          {
            heading: "Data response technique",
            body: "Read data carefully — units matter (%, $, millions). Quote figures accurately. Link answers to the specific context given, not generic theory. Use the data as evidence in evaluation answers.",
          },
        ],
        keyFormulas: [
          {
            name: "Answer structure",
            statement: "Define → explain → diagram → evaluate",
          },
          {
            name: "Diagram checklist",
            statement: "Axes, curves, labels, equilibrium, arrows",
          },
        ],
        workedExample: {
          problem: "'Explain why the price of bread rose 10%.' Using CPI data.",
          solution:
            "Quote CPI figure → identify demand-pull or cost-push cause → explain mechanism → link to diagram if helpful.",
        },
      },
      questions: [
        {
          id: "cieige-q-u6l9c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a 4-mark diagram question, you should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only define terms" },
              { id: "b", text: "Calculate only" },
              { id: "c", text: "Draw labelled axes, curves and equilibrium" },
              { id: "d", text: "Write an essay" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Diagram question",
                statement: "Axes, curves, labels.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Labelled diagram",
            commonErrors: ["Prose instead of diagram."],
          },
        },
        {
          id: "cieige-q-u6l9c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'evaluate' require in an economics answer?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Evaluation",
                statement: "Weigh evidence, reach judgement.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "How to do it.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Weighing evidence for and against, then reaching a justified judgement — not just listing points.",
            commonErrors: ["Thinking evaluate = describe."],
          },
        },
        {
          id: "cieige-q-u6l9c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a calculation question, why is showing working important?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Working",
                statement: "Method marks awarded for correct process.",
              },
            ],
            steps: [
              { reasoning: "Method marks.", marks: 1, markCode: "M" },
              { reasoning: "Units matter.", marks: 1, markCode: "M" },
              { reasoning: "Error recovery.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Method marks awarded for correct process — even wrong final answer gets credit if working correct; units must be stated.",
            commonErrors: ["Only final answer."],
          },
        },
        {
          id: "cieige-q-u6l9c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A data response gives 'Unemployment: 8.5% (up from 7.2% last year)'. How should you use this?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Data use",
                statement: "Quote accurately, link to theory.",
              },
            ],
            steps: [
              { reasoning: "Quote correctly.", marks: 1, markCode: "M" },
              { reasoning: "Link to cause.", marks: 1, markCode: "M" },
              { reasoning: "Use in evaluation.", marks: 1, markCode: "M" },
              { reasoning: "Context-specific.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Quote '8.5%, up from 7.2%' → link to possible causes (recession, structural) → use as evidence in evaluation — not generic theory.",
            commonErrors: ["Ignoring the data."],
          },
        },
        {
          id: "cieige-q-u6l9c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Plan a 10-mark 'discuss' answer on 'Is inflation always bad?'",
          parts: [
            { label: "a", prompt: "Structure", marks: 2 },
            { label: "b", prompt: "Evidence points", marks: 2 },
            { label: "c", prompt: "Evaluation/judgement", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Discuss structure",
                statement: "Both sides + judgement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Intro, for, against, judgement.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Clear paragraphs.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Specific evidence/mechanisms.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Multiple points each side.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Qualified conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) intro→for→against→judgement (b) mechanisms + examples (c) 'depends on rate/cause' qualified conclusion",
            commonErrors: ["One-sided or no judgement."],
          },
        },
        {
          id: "cieige-q-u6l9c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should diagrams include arrows showing shifts?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Diagram arrows",
                statement: "Shows direction of change.",
              },
            ],
            steps: [
              { reasoning: "Purpose explained.", marks: 1, markCode: "M" },
              { reasoning: "Mark scheme point.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Arrows show direction of curve shifts — examiners award marks for correctly labelled shifts; missing arrows lose marks.",
            commonErrors: ["Drawing without arrows."],
          },
        },
        {
          id: "cieige-q-u6l9c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Analyse' in an exam question requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Drawing only" },
              { id: "b", text: "Breaking down mechanisms and relationships" },
              { id: "c", text: "Listing facts" },
              { id: "d", text: "Just defining" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Command word",
                statement: "Analyse = break down.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Break down mechanisms",
            commonErrors: ["Confusing with describe."],
          },
        },
        {
          id: "cieige-q-u6l9c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How should you allocate time in a 60-minute economics exam?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Time management",
                statement: "Marks-proportional allocation.",
              },
            ],
            steps: [
              { reasoning: "Method suggested.", marks: 1, markCode: "M" },
              { reasoning: "Review time.", marks: 1, markCode: "M" },
              { reasoning: "Priority logic.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Allocate time proportional to marks (e.g. 10m question = ~12 min), attempt all questions, reserve 5 min review — don't over-invest in one.",
            commonErrors: ["No time plan."],
          },
        },
        {
          id: "cieige-q-u6l9c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "What makes a 'good' economics evaluation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Good evaluation",
                statement: "Evidence both ways + qualified judgement.",
              },
            ],
            steps: [
              { reasoning: "Both sides covered.", marks: 1, markCode: "M" },
              { reasoning: "Specific evidence.", marks: 1, markCode: "M" },
              { reasoning: "Qualified conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Considers evidence for AND against, uses specific examples/mechanisms, and reaches a qualified judgement ('to a large extent', 'depends on…') rather than absolute claim.",
            commonErrors: ["One-sided or absolute."],
          },
        },
        {
          id: "cieige-q-u6l9c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student writes 'Inflation is bad because it reduces purchasing power.' for a 6-mark 'explain' question. Critique and improve.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Answer critique",
                statement: "Add mechanism, examples, nuance.",
              },
            ],
            steps: [
              {
                reasoning: "Identify weakness: assertion only.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add mechanism: how purchasing power falls.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add distribution/example.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Add nuance/conditions.", marks: 1, markCode: "A" },
              {
                reasoning: "Rewritten answer quality.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Weak: assertion without mechanism. Improved: 'Inflation erodes real wages as prices rise faster than nominal incomes — hurts savers/pensioners while borrowers gain; worse if unexpected, moderate if anticipated.'",
            commonErrors: ["Only rewording."],
          },
        },
        {
          id: "cieige-q-u6l9c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For an 'explain' question worth 4 marks, you should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only list examples" },
              { id: "b", text: "Give a clear chain of reasoning" },
              { id: "c", text: "Draw a diagram only" },
              { id: "d", text: "Write a long essay" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Explain question",
                statement: "Mechanism chain earns marks.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Clear chain of reasoning",
            commonErrors: ["Assertions without mechanism."],
          },
        },
        {
          id: "cieige-q-u6l9c1-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "In data response, 'units matter' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignore units in answers" },
              { id: "b", text: "Units are irrelevant" },
              {
                id: "c",
                text: "Check whether figures are %, $, millions before calculating",
              },
              { id: "d", text: "Always convert to dollars" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Units",
                statement: "Check % vs $ vs millions.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Check units before calculating",
            commonErrors: ["Mixing units."],
          },
        },
        {
          id: "cieige-q-u6l9c1-13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A strong conclusion to an evaluation answer should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Qualified and directly answer the question" },
              { id: "b", text: "A repetition of the introduction" },
              { id: "c", text: "As long as possible" },
              { id: "d", text: "Absolute and unconditional" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Conclusion",
                statement: "Qualified judgement answering the question.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Qualified, direct answer",
            commonErrors: ["No judgement."],
          },
        },
        {
          id: "cieige-q-u6l9c1-14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two features of a well-drawn and labelled diagram in an economics exam.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Diagram checklist",
                statement: "Axes, curves, labels, equilibrium, arrows.",
              },
            ],
            steps: [
              { reasoning: "Two valid features.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. correctly labelled axes (price level vs real GDP, or price vs quantity) and curves shifted with arrows showing direction — plus equilibrium point labelled.",
            commonErrors: ["Unlabelled axes."],
          },
        },
        {
          id: "cieige-q-u6l9c1-15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how to structure a 6-mark answer to 'Discuss whether protectionism is justified.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Discuss structure",
                statement: "For, against, judgement.",
              },
            ],
            steps: [
              { reasoning: "Introduction/definition.", marks: 1, markCode: "M" },
              { reasoning: "Arguments for.", marks: 1, markCode: "M" },
              { reasoning: "Arguments against.", marks: 1, markCode: "M" },
              { reasoning: "Judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Define protectionism → present cases for (jobs, infant industries, security) with mechanisms → cases against (higher prices, inefficiency, retaliation) → qualified conclusion weighing both.",
            commonErrors: ["One-sided or no conclusion."],
          },
        },
        {
          id: "cieige-q-u6l9c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Plan an approach to a 10-mark data response question: extract shows 'Inflation rose to 9%, exports fell 12%, unemployment rose to 7%.' Question: 'Analyse the economy's problems.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Data response plan",
                statement: "Extract concepts → apply theory → quote data.",
              },
            ],
            steps: [
              { reasoning: "Identify concepts tested.", marks: 1, markCode: "M" },
              { reasoning: "Link each figure to theory.", marks: 1, markCode: "M" },
              { reasoning: "Quote data accurately.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism chains.", marks: 1, markCode: "A" },
              { reasoning: "Judgement/conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Identify inflation (demand-pull/cost-push), falling exports (competitiveness/exchange rate) and rising unemployment (AD falling) → explain each mechanism linking to the quoted figures → conclude the economy faces stagflationary pressures needing careful policy.",
            commonErrors: ["Generic theory ignoring data."],
          },
        },
      ],
    },
    {
      id: "cieige-u6l9-c2-dataresponse",
      title: "Data response practice",
      skill: "Apply economic concepts to provided data and extracts.",
      lesson: {
        sections: [
          {
            heading: "Reading extracts",
            body: "Data response questions provide tables/text extracts. Skills: identify the economic concept tested, extract relevant figures accurately, apply theory to the specific context, and evaluate using the evidence given — not generic knowledge.",
          },
        ],
      },
      questions: [
        {
          id: "cieige-q-u6l9c2-1",
          difficulty: "core",
          totalMarks: 3,
          stem: "A table shows CPI: Year 1 = 100, Year 2 = 104, Year 3 = 108. Calculate inflation for years 2 and 3.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Inflation calc",
                statement: "(New−Old)/Old ×100.",
              },
            ],
            steps: [
              {
                reasoning: "Year 2: (104−100)/100 = 4%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Year 3: (108−104)/104 ≈ 3.85%.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Units stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Year 2: 4%. Year 3: (108−104)/104 ×100 ≈ 3.85%.",
            commonErrors: ["Using wrong base year."],
          },
        },
        {
          id: "cieige-q-u6l9c2-2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An extract says 'Country X's unemployment rose from 5% to 9% during recession; GDP fell 3%.' Explain the relationship.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unemployment-GDP",
                statement: "Falling output → rising unemployment.",
              },
            ],
            steps: [
              { reasoning: "Link identified.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Data used.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Falling GDP (−3%) means less output → firms lay off workers → unemployment rises (5%→9%) — demand-deficient/cyclical unemployment.",
            commonErrors: ["Generic answer ignoring data."],
          },
        },
        {
          id: "cieige-q-u6l9c2-3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A government announces $50bn infrastructure spending during recession. Evaluate using AD/AS analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Policy evaluation",
                statement: "AD shift → output, jobs, inflation.",
              },
            ],
            steps: [
              {
                reasoning: "AD increases (G component).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "SR: output/jobs rise.", marks: 1, markCode: "M" },
              { reasoning: "Risks: inflation, debt.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "G↑ → AD shifts right → output and employment rise in recession; risks: inflation if economy near capacity, higher debt — appropriate if spare capacity exists.",
            commonErrors: ["One-sided or no AD/AS."],
          },
        },
        {
          id: "cieige-q-u6l9c2-4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A data table shows exports $200bn, imports $180bn. What is the trade balance and what does it indicate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Trade balance",
                statement: "X−M = balance.",
              },
            ],
            steps: [
              {
                reasoning: "Balance = +$20bn surplus.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Interpretation.", marks: 1, markCode: "M" },
              { reasoning: "Caveat.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Trade balance = 200−180 = +$20bn surplus — exports exceed imports; may reflect competitiveness but doesn't guarantee overall BoP surplus.",
            commonErrors: ["Sign error or no interpretation."],
          },
        },
        {
          id: "cieige-q-u6l9c2-5",
          difficulty: "core",
          totalMarks: 3,
          stem: "An extract describes a country with 'Gini 0.45, HDI 0.65, GDP per capita $8,000'. Interpret the development picture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development indicators",
                statement: "HDI vs GDP, inequality.",
              },
            ],
            steps: [
              { reasoning: "HDI interpretation.", marks: 1, markCode: "M" },
              { reasoning: "Gini interpretation.", marks: 1, markCode: "M" },
              { reasoning: "Overall assessment.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "HDI 0.65 = medium development; Gini 0.45 = high inequality — average income hides significant disparity; development incomplete despite moderate GDP.",
            commonErrors: ["Only citing one indicator."],
          },
        },
        {
          id: "cieige-q-u6l9c2-6",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A country's interest rate rises from 2% to 5%. Predict effects on inflation, growth and exchange rate using transmission mechanisms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rate transmission",
                statement: "Borrowing↓, AD↓, currency↑.",
              },
            ],
            steps: [
              { reasoning: "Inflation effect.", marks: 1, markCode: "M" },
              { reasoning: "Growth effect.", marks: 1, markCode: "M" },
              { reasoning: "Exchange rate effect.", marks: 1, markCode: "M" },
              { reasoning: "Weighs trade-offs.", marks: 1, markCode: "R" },
              { reasoning: "Coherent answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Rates↑ → borrowing↓ → AD↓ → inflation↓ but growth slows; capital inflows → currency appreciates → exports less competitive — contractionary but disinflationary.",
            commonErrors: ["Missing channels."],
          },
        },
        {
          id: "cieige-q-u6l9c2-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is quoting exact figures important in data response answers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Data quoting",
                statement: "Accuracy earns marks.",
              },
            ],
            steps: [
              { reasoning: "Why important.", marks: 1, markCode: "M" },
              { reasoning: "Common error.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Exact figures show evidence-based analysis and earn marks — vague 'rose significantly' loses accuracy marks; misquoting figures loses credibility.",
            commonErrors: ["Paraphrasing loosely."],
          },
        },
        {
          id: "cieige-q-u6l9c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A government cuts income tax. Analyse effects on AD and inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Tax cut analysis",
                statement: "C↑ → AD↑; equity depends on progressivity.",
              },
            ],
            steps: [
              { reasoning: "AD effect.", marks: 1, markCode: "M" },
              { reasoning: "Inequality effect.", marks: 1, markCode: "M" },
              { reasoning: "Conditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Tax cut → disposable income↑ → consumption↑ → AD shifts right → growth; equity effect depends on whether cut is progressive (helps poor) or flat (helps rich more).",
            commonErrors: ["Ignoring distribution."],
          },
        },
        {
          id: "cieige-q-u6l9c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "An extract says 'imports rose 15% while exports rose only 5%'. What does this imply for the current account?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "BoP analysis",
                statement: "Import growth > export growth → worsening.",
              },
            ],
            steps: [
              { reasoning: "Direction identified.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Possible causes.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Imports growing faster than exports → trade balance deteriorating → current account likely worsening; could reflect strong domestic demand or weak export competitiveness.",
            commonErrors: ["Ignoring relative growth."],
          },
        },
        {
          id: "cieige-q-u6l9c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Synthesis: A country has 7% inflation, 6% unemployment, and a currency that has depreciated 20%. Analyse the policy dilemma.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Policy dilemma",
                statement: "Inflation vs unemployment vs currency.",
              },
            ],
            steps: [
              { reasoning: "Inflation problem.", marks: 1, markCode: "M" },
              { reasoning: "Unemployment problem.", marks: 1, markCode: "M" },
              { reasoning: "Currency problem.", marks: 1, markCode: "M" },
              { reasoning: "Weighs trade-offs.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Stagflation + weak currency: cutting rates risks more inflation/depreciation; raising rates worsens unemployment — dilemma suggests supply-side policies needed alongside careful monetary/fiscal mix.",
            commonErrors: ["One-sided or ignoring interaction."],
          },
        },
        {
          id: "cieige-q-u6l9c2-11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A table shows GDP: 2019 = $2.0tn, 2020 = $1.8tn. The growth rate is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "−10%" },
              { id: "b", text: "−0.9%" },
              { id: "c", text: "−2%" },
              { id: "d", text: "+10%" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Growth calc",
                statement: "(New−Old)/Old ×100.",
              },
            ],
            steps: [{ reasoning: "(1.8−2.0)/2.0 = −10%.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** −10%",
            commonErrors: ["Wrong base year."],
          },
        },
        {
          id: "cieige-q-u6l9c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "If a country's exports grow faster than its imports, the current account is likely to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Improve (move towards surplus)" },
              { id: "b", text: "Become irrelevant" },
              { id: "c", text: "Worsen" },
              { id: "d", text: "Stay unchanged" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade balance",
                statement: "Faster export growth improves balance.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Improve",
            commonErrors: ["Reversing direction."],
          },
        },
        {
          id: "cieige-q-u6l9c2-13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "CPI: Year 1 = 100, Year 2 = 103, Year 3 = 106. Year 3 inflation is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3.0%" },
              { id: "b", text: "6.0%" },
              { id: "c", text: "2.9%" },
              { id: "d", text: "1.0%" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Inflation calc",
                statement: "(106−103)/103 ×100 ≈ 2.9%.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** ≈ 2.9%",
            commonErrors: ["Using wrong base."],
          },
        },
        {
          id: "cieige-q-u6l9c2-14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should you do first when reading a data response extract?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Extract reading",
                statement: "Identify data, units, context.",
              },
            ],
            steps: [
              { reasoning: "First step correct.", marks: 1, markCode: "M" },
              { reasoning: "Why it matters.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Scan the extract for key figures and units, identify the economic concepts involved, and note the context — this guides which theory to apply to each question.",
            commonErrors: ["Jumping to theory."],
          },
        },
        {
          id: "cieige-q-u6l9c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A table shows unemployment by region: North 4%, South 12%. Interpret this data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Data interpretation",
                statement: "Compare figures, link to theory.",
              },
            ],
            steps: [
              { reasoning: "Figures quoted.", marks: 1, markCode: "M" },
              { reasoning: "Comparison made.", marks: 1, markCode: "M" },
              { reasoning: "Possible causes.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Unemployment is three times higher in the South (12% vs 4%) — suggests regional structural differences (industry mix, skills, investment) rather than a uniform national problem.",
            commonErrors: ["Not using figures."],
          },
        },
        {
          id: "cieige-q-u6l9c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate a policy proposal using this data: 'Government spending cut by $20bn; unemployment 8%; inflation 2%; GDP growth 1.5%.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Policy evaluation with data",
                statement: "AD/AS + quoted figures + judgement.",
              },
            ],
            steps: [
              { reasoning: "AD effect of cut.", marks: 1, markCode: "M" },
              { reasoning: "Unemployment/inflation context.", marks: 1, markCode: "M" },
              { reasoning: "Data used as evidence.", marks: 1, markCode: "M" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Spending cut reduces AD → risks higher unemployment (already 8%) for little inflation benefit (only 2%) — with low inflation and weak growth (1.5%), austerity seems poorly timed; better to maintain demand or target supply-side.",
            commonErrors: ["One-sided or ignoring data."],
          },
        },
      ],
    },
  ],
};
