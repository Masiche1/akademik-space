import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "olbus-u2-lesson-2-3",
  code: "2-3",
  title: "Marketing Strategies and Budget",
  goal: "I CAN explain promotional methods and how businesses plan marketing budgets.",
  standards: ["7100 2.3"],
  vocabulary: [
    { term: "Advertising", definition: "Paid communication through media to promote products." },
    { term: "Sales promotion", definition: "Short-term incentives to encourage purchase." },
    { term: "Public relations", definition: "Building positive image through media and community." },
    { term: "Personal selling", definition: "Face-to-face selling by salespeople." },
    { term: "Marketing budget", definition: "Amount allocated to marketing activities." },
    { term: "Digital marketing", definition: "Marketing using internet, social media and online platforms." },
  ],
  concepts: [
    {
      id: "olbus-u2-promo",
      title: "Promotion methods",
      skill: "Identify and compare different promotional methods.",
      lesson: {
        sections: [
          { heading: "Promotion mix", body: "- **Advertising**: TV, radio, print, online — wide reach, high cost.\n- **Sales promotion**: discounts, coupons, free samples — short-term boost.\n- **Public relations**: press releases, sponsorship, community events — builds image.\n- **Personal selling**: face-to-face — high cost per contact but persuasive.\n- **Digital marketing**: social media, email, websites — targeted, measurable, cost-effective." },
          { heading: "Choosing methods", body: "Depends on target market, budget, product type and objectives. Digital marketing suits younger audiences; personal selling suits high-value B2B products." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A luxury car brand wants to promote a new model. Which promotion method fits best?",
          solution: "Advertising (TV/print for prestige) + personal selling (dealership experience) + public relations (launch events).",
        },
      },
      questions: [
        {
          id: "olbus-u2-pr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Sales promotion includes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Discounts and free samples" }, { id: "b", text: "TV advertisements" }, { id: "c", text: "Press releases" }, { id: "d", text: "Salary payments" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Sales promotion", statement: "Short-term incentives." }], steps: [{ reasoning: "Discounts/samples/coupons.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u2-pr-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two promotional methods.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Promotion methods", statement: "Communication tools." }], steps: [
            { reasoning: "Advertising, sales promotion, PR, personal selling, digital — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: advertising, sales promotion, PR, personal selling, digital marketing." },
        },
        {
          id: "olbus-u2-pr-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Compare advertising and personal selling — one advantage of each.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Promotion comparison", statement: "Trade-offs." }], steps: [
            { reasoning: "Advertising: wide reach, cost-effective per contact.", marks: 1, markCode: "AO1" },
            { reasoning: "Personal selling: persuasive, builds relationships.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct comparison.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Advertising reaches many cheaply; personal selling is persuasive but costly." },
        },
        {
          id: "olbus-u2-pr-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Promotion methods review.",
          parts: [
            { label: "a", prompt: "Define advertising.", marks: 1 },
            { label: "b", prompt: "Define sales promotion.", marks: 1 },
            { label: "c", prompt: "Name three promotion methods.", marks: 2 },
            { label: "d", prompt: "When is personal selling most effective?", marks: 2 },
            { label: "e", prompt: "Why has digital marketing grown?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Promotion", statement: "Methods and selection." },
          ], steps: [
            { part: "a", reasoning: "Paid media communication.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Short-term purchase incentives.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Three methods.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "High-value/B2B products needing persuasion.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear context.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Targeted, measurable, cost-effective.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Reaches large audiences cheaply.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear reasons.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) paid media (b) incentives (c) 3 methods (d) B2B/high-value (e) targeted+cheap" },
        },
      ],
    },
    {
      id: "olbus-u2-budget",
      title: "Marketing Budget and Planning",
      skill: "Explain how businesses allocate marketing budgets and plan campaigns.",
      lesson: {
        sections: [
          { heading: "Marketing budget", body: "The amount allocated to marketing activities. Often a percentage of sales or a fixed amount. Must balance cost with expected return." },
          { heading: "Budget methods", body: "- **Percentage of sales**: simple but may under/over-spend.\n- **Task-based**: budget set by required activities.\n- **Competitive**: match competitors' spending." },
          { heading: "Campaign planning", body: "Set objectives → choose target market → select marketing mix → allocate budget → implement → monitor and review results." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A business allocates 5% of sales to marketing. Sales are $200,000. What's the budget?",
          solution: "Marketing budget = 5% × $200,000 = $10,000.",
        },
      },
      questions: [
        {
          id: "olbus-u2-mb-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A marketing budget is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Money allocated to marketing activities" }, { id: "b", text: "Total business revenue" }, { id: "c", text: "Employee salaries" }, { id: "d", text: "Product costs" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Marketing budget", statement: "Marketing spend." }], steps: [{ reasoning: "Allocated to marketing.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u2-mb-q2", difficulty: "core", totalMarks: 2,
          stem: "Sales $100,000, marketing budget 8% of sales. Budget?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Budget calc", statement: "% of sales." }], steps: [
            { reasoning: "$100000 × 8% = $8,000.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "$8,000" },
        },
        {
          id: "olbus-u2-mb-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain one disadvantage of using a fixed percentage of sales for marketing budget.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Budget methods", statement: "Limitations." }], steps: [
            { reasoning: "Budget automatically falls when sales fall — may need more marketing then.", marks: 1, markCode: "AO2" },
            { reasoning: "Doesn't account for specific campaign needs.", marks: 1, markCode: "AO2" },
            { reasoning: "May under/over-spend.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Rigid link to sales may cause under/over-spending and ignores campaign needs." },
        },
        {
          id: "olbus-u2-mb-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Marketing budget review.",
          parts: [
            { label: "a", prompt: "Define marketing budget.", marks: 1 },
            { label: "b", prompt: "Name two budget methods.", marks: 2 },
            { label: "c", prompt: "Sales $50k, budget 10%. Amount?", marks: 1 },
            { label: "d", prompt: "List steps in campaign planning.", marks: 3 },
            { label: "e", prompt: "Why must budget balance cost and return?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Marketing budget", statement: "Budget and planning." },
          ], steps: [
            { part: "a", reasoning: "Money for marketing.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Percentage of sales; task-based; competitive — any two.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "$5,000.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Objectives → target → mix → budget → implement → review.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "All steps.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Logical order.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Overspending wastes money; underspending misses opportunities.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear balance.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 2 methods (c) 5000 (d) plan steps (e) cost vs return" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u2-2-3-notes", title: "Promotion and budget — notes", summary: "Promotion methods and marketing budget planning.",
      sections: [
        { heading: "Promotion", body: "Advertising, sales promotion, PR, personal selling, digital — choose based on target and budget." },
        { heading: "Budget", body: "Often % of sales; plan: objectives → target → mix → budget → implement → review." },
      ] },
  ],
};
