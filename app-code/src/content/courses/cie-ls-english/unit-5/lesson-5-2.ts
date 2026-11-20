import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "cile-u5-lesson-5-2",
  code: "5-2",
  title: "Expository writing: comparing and analysing",
  goal: "I CAN write comparative and analytical explanations that evaluate similarities, differences and significance.",
  standards: ["0861 Writing: comparative and analytical skills"],
  vocabulary: [
    { term: "Comparison", definition: "Identifying similarities between two or more things." },
    { term: "Contrast", definition: "Identifying differences between two or more things." },
    { term: "Analysis", definition: "Breaking something down to examine its parts and relationships." },
    { term: "Significance", definition: "Why something matters — its importance or consequences." },
    { term: "Criteria", definition: "The standards or features used to compare things." },
    { term: "Evaluation", definition: "Judging the value, quality or significance of something." },
  ],
  concepts: [
    {
      id: "cile-u5-comparison-analysis",
      title: "Comparative writing",
      skill: "Write clear comparisons using criteria, balanced structure and analytical depth.",
      lesson: {
        sections: [
          {
            heading: "How to compare",
            body: "- **Choose criteria**: what features will you compare? (price, effectiveness, environmental impact)\n- **Be balanced**: give each subject equal treatment under each criterion.\n- **Be specific**: 'A is better' is weak; 'A costs 20% less and lasts twice as long' is strong.\n- **Analyse, don't just list**: explain WHY differences matter.",
          },
          {
            heading: "Structure options",
            body: "- **Point-by-point**: compare on criterion 1, then criterion 2 — clearer for detailed analysis.\n- **Subject-by-subject**: describe A fully, then B — simpler but risks imbalance.\n- **Hybrid**: introduce both, then alternate criteria — most flexible.",
          },
          {
            heading: "From comparison to analysis",
            body: "Comparison identifies differences; analysis explains their significance. 'Solar is cheaper than coal' is comparison; 'solar's lower cost accelerates adoption in developing countries' is analysis.",
          },
        ],
        keyFormulas: [
          { name: "Comparison + analysis", statement: "Identify criteria → compare fairly → analyse significance of differences." },
        ],
        workedExample: {
          problem: "Compare two phones for a buyer.",
          solution: "Criteria: price, battery, camera. Phone A: cheaper, longer battery, weaker camera. Phone B: expensive, shorter battery, better camera. Analysis: A suits budget buyers; B suits photographers. Significance: the 'best' phone depends on the user's priorities.",
        },
      },
      questions: [
        {
          id: "cile-u5-comp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a criterion for comparing two schools?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Which one the writer prefers" },
              { id: "b", text: "Student-teacher ratio" },
              { id: "c", text: "How long the essay is" },
              { id: "d", text: "Which school has a nicer logo" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Criteria", statement: "Objective features used to compare — student-teacher ratio is measurable." },
            ],
            steps: [
              { reasoning: "A criterion is an objective standard for comparison.", working: "\\text{objective}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Student-teacher ratio",
            commonErrors: ["Choosing (a) — preference is not a criterion."],
          },
        },
        {
          id: "cile-u5-comp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it important to treat both subjects equally in a comparison?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Balanced comparison", statement: "Fair comparison gives each subject equal coverage under each criterion." },
            ],
            steps: [
              { reasoning: "Unequal treatment creates bias — one subject gets more detail or praise.", working: "\\text{bias}", marks: 1, markCode: "AO2" },
              { reasoning: "Readers cannot judge fairly if the comparison is unbalanced.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Equal treatment ensures fairness — unequal coverage creates bias and prevents readers from judging the comparison objectively.",
            commonErrors: ["Saying 'it is polite' — the reason is analytical fairness."],
          },
        },
        {
          id: "cile-u5-comp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes: 'Solar power is better than coal.' Turn this into an analytical comparison with criteria and significance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Analytical comparison", statement: "Criteria + evidence + significance analysis." },
            ],
            steps: [
              { reasoning: "Problem: 'better' is vague — better how? on what criteria?", working: "\\text{vague}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: choose criteria — cost, emissions, reliability, availability.", working: "\\text{criteria}", marks: 1, markCode: "AO2" },
              { reasoning: "Add evidence: solar has lower emissions but intermittent; coal is reliable but polluting.", working: "\\text{evidence}", marks: 1, markCode: "AO2" },
              { reasoning: "Add significance: solar's lower emissions matter for climate goals; coal's reliability matters for grid stability.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'Solar power produces no direct emissions but is intermittent; coal is reliable but polluting. For climate goals, solar's lower emissions are significant; for grid stability, coal's reliability still matters. The comparison depends on which criterion matters most.'",
            commonErrors: ["Adding adjectives ('much better') instead of criteria and evidence."],
          },
        },
        {
          id: "cile-u5-comp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are writing a comparison of two things (e.g. two books, two technologies, two places).",
          parts: [
            { label: "a", prompt: "State your criteria for comparison.", marks: 2 },
            { label: "b", prompt: "Write one paragraph comparing both subjects on one criterion.", marks: 3 },
            { label: "c", prompt: "Explain the significance of the difference you identified.", marks: 2 },
            { label: "d", prompt: "Suggest which subject you would recommend and why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comparative writing", statement: "Criteria → fair comparison → significance analysis → justified recommendation." },
            ],
            steps: [
              { part: "a", reasoning: "Two or more clear criteria stated.", working: "\\text{criteria}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Criteria are relevant and measurable.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Both subjects treated equally under the criterion.", working: "\\text{balanced}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Specific evidence provided for each.", working: "\\text{evidence}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear and accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Significance of difference explained.", working: "\\text{significance}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Link to real-world implication.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Recommendation made with justification.", working: "\\text{recommendation}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Justification references criteria.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) clear criteria (b) balanced evidence-based paragraph (c) significance explained (d) justified recommendation",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear relevant criteria.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Balanced, evidence-based paragraph.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Significance explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Justified recommendation.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (b) favouring one subject — comparison requires balance."],
          },
        },
      ],
    },
    {
      id: "cile-u5-analytical-exposition",
      title: "Analytical exposition",
      skill: "Write analytical explanations that break down complex ideas into components and explain relationships.",
      lesson: {
        sections: [
          {
            heading: "What analysis is",
            body: "Analysis breaks a complex idea into parts and explains how they relate:\n\n- **Decompose**: what are the components?\n- **Relate**: how do they interact?\n- **Explain**: why does this matter?",
          },
          {
            heading: "Analytical structure",
            body: "- **Introduce the whole**: what you are analysing and why.\n- **Examine parts**: each component or aspect in turn.\n- **S synthesise**: how the parts create the whole — the significance.",
          },
          {
            heading: "Analytical language",
            body: "- 'This shows that...', 'This suggests...', 'The significance is...'\n- 'On one hand... on the other...' for balanced analysis.\n- 'Consequently', 'therefore', 'as a result' for logical links.",
          },
        ],
        keyFormulas: [
          { name: "Analysis structure", statement: "Introduce whole → examine parts → synthesise significance." },
        ],
        workedExample: {
          problem: "Analyse why a school might have low attendance.",
          solution: "Components: transport issues, engagement, school culture, external factors (work, caring). Relationships: transport affects attendance directly; engagement affects it indirectly. Significance: solutions must address multiple components, not just one.",
        },
      },
      questions: [
        {
          id: "cile-u5-anal-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first step in analytical writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Give your opinion" },
              { id: "b", text: "Introduce the whole you will analyse" },
              { id: "c", text: "List random facts" },
              { id: "d", text: "Write the conclusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Analytical structure", statement: "Start by introducing the whole before examining parts." },
            ],
            steps: [
              { reasoning: "Analysis begins with the whole, then breaks into parts.", working: "\\text{whole first}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Introduce the whole you will analyse",
            commonErrors: ["Choosing (a) — analysis is objective, not opinion-led."],
          },
        },
        {
          id: "cile-u5-anal-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between description and analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Analysis vs description", statement: "Description says what; analysis explains how and why." },
            ],
            steps: [
              { reasoning: "Description: states facts — 'The school has low attendance.'", working: "\\text{what}", marks: 1, markCode: "AO2" },
              { reasoning: "Analysis: breaks down causes — 'Low attendance results from transport gaps, disengagement, and competing responsibilities.'", working: "\\text{how/why}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Description states what something is or does; analysis breaks it into components and explains how and why they produce the observed result.",
            commonErrors: ["Saying 'analysis is longer' — it is deeper, not just longer."],
          },
        },
        {
          id: "cile-u5-anal-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes: 'The internet is good and bad.' Develop this into an analytical explanation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Analytical development", statement: "Break 'good and bad' into specific aspects and explain their mechanisms." },
            ],
            steps: [
              { reasoning: "Problem: 'good and bad' is vague — which aspects?", working: "\\text{vague}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: identify aspects — information access, communication, commerce, privacy, attention.", working: "\\text{aspects}", marks: 1, markCode: "AO2" },
              { reasoning: "Explain mechanisms: 'good' = instant information; 'bad' = attention fragmentation and privacy risks.", working: "\\text{mechanisms}", marks: 1, markCode: "AO2" },
              { reasoning: "Synthesis: the internet's value depends on how these aspects are managed.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'The internet democratizes information access but fragments attention and creates privacy risks. Its net value depends on whether users and regulators manage these trade-offs — it is neither inherently good nor bad, but a tool whose effects depend on use.'",
            commonErrors: ["Listing pros and cons without explaining mechanisms or synthesising."],
          },
        },
        {
          id: "cile-u5-anal-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are writing an analytical explanation of a complex topic (e.g. climate change, social media's effect on society, how a machine works).",
          parts: [
            { label: "a", prompt: "Introduce the topic and state what you will analyse.", marks: 2 },
            { label: "b", prompt: "Identify two or three components or aspects.", marks: 2 },
            { label: "c", prompt: "Explain how one component works or contributes.", marks: 2 },
            { label: "d", prompt: "Synthesis: explain the overall significance or how parts create the whole.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Analytical structure", statement: "Whole → parts → synthesis." },
            ],
            steps: [
              { part: "a", reasoning: "Topic introduced clearly with analytical purpose.", working: "\\text{introduction}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Scope defined.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Components identified logically.", working: "\\text{components}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Components cover the topic adequately.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "One component explained accurately.", working: "\\text{explanation}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Mechanism or contribution clear.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Synthesis explains how parts create the whole.", working: "\\text{synthesis}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Significance stated.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion is insightful.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) clear analytical introduction (b) logical components (c) accurate component explanation (d) insightful synthesis",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear introduction.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Logical components.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Accurate explanation.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Insightful synthesis.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) repeating parts instead of synthesising the whole."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u5-comparison-analysis-notes",
      title: "Comparison and analysis — revision notes",
      summary: "Comparative criteria, analytical structure, and moving from description to significance.",
      sections: [
        {
          heading: "Comparison",
          body: "Choose criteria → treat subjects equally → provide evidence → analyse significance. Avoid vague 'better/worse' — specify how and why.",
        },
        {
          heading: "Analysis",
          body: "Introduce whole → examine parts → synthesise significance. Description says what; analysis explains how and why.",
        },
        {
          heading: "Writing checklist",
          body: "Are criteria clear and fair? Is the analysis balanced? Does the conclusion synthesise rather than repeat?",
        },
      ],
    },
  ],
};
