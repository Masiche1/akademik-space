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
            { id: "a", text: "Press releases" },
            { id: "b", text: "Discounts and free samples" },
            { id: "c", text: "TV advertisements" },
            { id: "d", text: "Salary payments" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Sales promotion", statement: "Short-term incentives." }], steps: [{ reasoning: "Discounts/samples/coupons.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
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
        {
          id: "olbus-u2-pr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Public relations aims to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cut prices temporarily" },
            { id: "b", text: "Build a positive image through media and community" },
            { id: "c", text: "Train sales staff" },
            { id: "d", text: "Pay for TV advertisements" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Public relations", statement: "Image building." }], steps: [{ reasoning: "PR builds a positive image.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u2-pr-q6", difficulty: "core", totalMarks: 1,
          stem: "Digital marketing includes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Social media and email campaigns" },
            { id: "b", text: "Billboard posters only" },
            { id: "c", text: "Trade fairs only" },
            { id: "d", text: "Door-to-door selling only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Digital marketing", statement: "Online promotion." }], steps: [{ reasoning: "Digital marketing uses internet/social media/email.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u2-pr-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Advertising is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Product design" },
            { id: "b", text: "Internal staff training" },
            { id: "c", text: "Unpaid word-of-mouth" },
            { id: "d", text: "Paid communication through media to promote products" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Advertising", statement: "Paid media." }], steps: [{ reasoning: "Advertising = paid media promotion.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u2-pr-q8", difficulty: "core", totalMarks: 2,
          stem: "A business spends $3,000 on TV adverts and $2,000 on social media promotion. What is its total advertising spend?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Ad spend", statement: "Sum of costs." }], steps: [
            { part: "a", reasoning: "3000 + 2000 = 5000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Total = $5,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $5,000" },
        },
        {
          id: "olbus-u2-pr-q9", difficulty: "challenge", totalMarks: 3,
          stem: "A promotion budget of $20,000 is split 60% for digital marketing and 40% for print advertising. (a) How much is spent on digital marketing? (b) How much is spent on print advertising?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 12000, unit: "$" },
            { label: "b", answer: 8000, unit: "$" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Budget split", statement: "% of budget." }], steps: [
            { part: "a", reasoning: "60% × 20000 = 12000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "40% × 20000 = 8000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Print = $8,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $12,000; **(b)** $8,000" },
        },
        {
          id: "olbus-u2-pr-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain one advantage of digital marketing over traditional advertising.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Digital marketing", statement: "Advantages." }], steps: [
            { reasoning: "Can be targeted to specific audiences.", marks: 1, markCode: "AO2" },
            { reasoning: "Results are measurable and it is often cheaper.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Targeted, measurable and cost-effective." },
        },
        {
          id: "olbus-u2-pr-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a business might combine several promotion methods rather than rely on just one.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Promotion mix", statement: "Combined methods." }], steps: [
            { reasoning: "Different methods reach different audiences.", marks: 1, markCode: "AO2" },
            { reasoning: "Reinforces the message through multiple channels.", marks: 1, markCode: "AO2" },
            { reasoning: "Balances cost and reach.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Combining methods widens reach, reinforces messages and balances cost." },
        },
        {
          id: "olbus-u2-pr-q12", difficulty: "challenge", totalMarks: 1,
          stem: "A business offers '20% off this weekend only' to boost short-term sales. This is an example of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Personal selling" },
            { id: "b", text: "Market research" },
            { id: "c", text: "Sales promotion" },
            { id: "d", text: "Public relations" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Sales promotion", statement: "Short-term incentives." }], steps: [{ reasoning: "Time-limited discount = sales promotion.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Sales promotion" },
        },
        {
          id: "olbus-u2-pr-q13", difficulty: "core", totalMarks: 2,
          stem: "A sales promotion costs $1,500 and generates $6,000 of extra revenue. What is the net benefit?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4500, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Net benefit", statement: "Extra revenue - cost." }], steps: [
            { part: "a", reasoning: "6000 - 1500 = 4500.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Net benefit = $4,500.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $4,500" },
        },
        {
          id: "olbus-u2-pr-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Personal selling is most suitable for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Mass-market online sales" },
            { id: "b", text: "High-value products needing face-to-face persuasion" },
            { id: "c", text: "Cheap everyday goods" },
            { id: "d", text: "Internal staff communications" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Personal selling", statement: "High-value persuasion." }], steps: [{ reasoning: "Personal selling suits high-value/B2B products.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u2-pr-q15", difficulty: "core", totalMarks: 2,
          stem: "A company allocates 12% of its $150,000 sales revenue to marketing. What is its marketing budget?",
          response: { type: "numeric", parts: [{ label: "a", answer: 18000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Budget calc", statement: "% of sales." }], steps: [
            { part: "a", reasoning: "12% × 150000 = 18000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Budget = $18,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $18,000" },
        },
        {
          id: "olbus-u2-pr-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Promotion methods extended review.",
          parts: [
            { label: "a", prompt: "Define advertising.", marks: 1 },
            { label: "b", prompt: "Define sales promotion.", marks: 1 },
            { label: "c", prompt: "Name three promotion methods.", marks: 2 },
            { label: "d", prompt: "When is personal selling most effective?", marks: 2 },
            { label: "e", prompt: "Explain why digital marketing has grown in popularity.", marks: 3 },
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
            { id: "a", text: "Money allocated to marketing activities" },
            { id: "b", text: "Product costs" },
            { id: "c", text: "Employee salaries" },
            { id: "d", text: "Total business revenue" },
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
        {
          id: "olbus-u2-mb-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which budget method sets spending based on the activities a campaign requires?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Fixed" },
            { id: "b", text: "Percentage of sales" },
            { id: "c", text: "Competitive" },
            { id: "d", text: "Task-based" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Task-based budget", statement: "Activity-driven." }], steps: [{ reasoning: "Task-based sets budget by required activities.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Task-based" },
        },
        {
          id: "olbus-u2-mb-q6", difficulty: "core", totalMarks: 1,
          stem: "Under the percentage-of-sales method, if sales are $80,000 and the marketing budget is 5% of sales, the budget is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$4,000" },
            { id: "b", text: "$400" },
            { id: "c", text: "$8,000" },
            { id: "d", text: "$40,000" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Budget calc", statement: "% of sales." }], steps: [{ reasoning: "5% × 80000 = 4000.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** $4,000" },
        },
        {
          id: "olbus-u2-mb-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Campaign planning typically begins with…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Hiring sales staff" },
            { id: "b", text: "Buying media space" },
            { id: "c", text: "Setting prices" },
            { id: "d", text: "Setting objectives" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Campaign planning", statement: "Steps." }], steps: [{ reasoning: "Objectives come first in campaign planning.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u2-mb-q8", difficulty: "core", totalMarks: 2,
          stem: "A business has sales of $250,000 and allocates 6% of sales to marketing. What is its marketing budget?",
          response: { type: "numeric", parts: [{ label: "a", answer: 15000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Budget calc", statement: "% of sales." }], steps: [
            { part: "a", reasoning: "6% × 250000 = 15000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Budget = $15,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $15,000" },
        },
        {
          id: "olbus-u2-mb-q9", difficulty: "challenge", totalMarks: 3,
          stem: "A task-based budget requires $4,000 for advertising, $3,000 for sales promotion and $2,000 for digital marketing. (a) What is the total budget? (b) If 10% of the budget must be kept as contingency, how much is reserved?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 9000, unit: "$" },
            { label: "b", answer: 900, unit: "$" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Task-based budget", statement: "Sum + contingency." }], steps: [
            { part: "a", reasoning: "4000 + 3000 + 2000 = 9000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "10% × 9000 = 900.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Contingency = $900.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $9,000; **(b)** $900" },
        },
        {
          id: "olbus-u2-mb-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain one advantage of the task-based budget method.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Task-based budget", statement: "Advantage." }], steps: [
            { reasoning: "Budget matches actual campaign needs.", marks: 1, markCode: "AO2" },
            { reasoning: "Avoids under/over-spending linked to sales.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "It links spending directly to required activities, avoiding waste." },
        },
        {
          id: "olbus-u2-mb-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a business should review its marketing campaign after it ends.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Review", statement: "Evaluation." }], steps: [
            { reasoning: "To measure whether objectives were achieved.", marks: 1, markCode: "AO2" },
            { reasoning: "To assess return on marketing spend.", marks: 1, markCode: "AO2" },
            { reasoning: "To improve future campaigns.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Reviewing measures success and informs better future campaigns." },
        },
        {
          id: "olbus-u2-mb-q12", difficulty: "challenge", totalMarks: 1,
          stem: "A business sets its marketing spend to match its main competitor's spending. This is the…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Task-based method" },
            { id: "b", text: "Competitive budget method" },
            { id: "c", text: "Percentage-of-sales method" },
            { id: "d", text: "Zero-based method" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Competitive budget", statement: "Match rivals." }], steps: [{ reasoning: "Matching competitors = competitive method.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u2-mb-q13", difficulty: "core", totalMarks: 2,
          stem: "A business spends $18,000 on marketing and achieves sales of $120,000. What percentage of sales is the marketing spend?",
          response: { type: "numeric", parts: [{ label: "a", answer: 15, unit: "%" }] },
          markscheme: { principles: [{ kind: "principle", name: "Percentage of sales", statement: "Spend / sales × 100." }], steps: [
            { part: "a", reasoning: "18000 ÷ 120000 × 100 = 15%.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "15% of sales.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 15%" },
        },
        {
          id: "olbus-u2-mb-q14", difficulty: "foundation", totalMarks: 1,
          stem: "The final step in planning a marketing campaign is usually to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Allocate the budget" },
            { id: "b", text: "Choose the marketing mix" },
            { id: "c", text: "Set the objectives" },
            { id: "d", text: "Monitor and review the results" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Campaign planning", statement: "Steps." }], steps: [{ reasoning: "Review/monitor comes last.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u2-mb-q15", difficulty: "core", totalMarks: 2,
          stem: "A business plans marketing spend of $6,000, $9,000 and $15,000 across three campaigns. What is the average spend per campaign?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Average", statement: "Total / count." }], steps: [
            { part: "a", reasoning: "(6000 + 9000 + 15000) ÷ 3 = 30000 ÷ 3.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Average = $10,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $10,000" },
        },
        {
          id: "olbus-u2-mb-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Marketing budget extended review.",
          parts: [
            { label: "a", prompt: "Define marketing budget.", marks: 1 },
            { label: "b", prompt: "Name two budget-setting methods.", marks: 2 },
            { label: "c", prompt: "Calculate the budget if 6% of $200,000 sales is allocated to marketing.", marks: 2 },
            { label: "d", prompt: "List the steps in campaign planning.", marks: 2 },
            { label: "e", prompt: "Why must a marketing budget balance cost and expected return?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Marketing budget", statement: "Budget and planning." },
          ], steps: [
            { part: "a", reasoning: "Money for marketing activities.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two methods.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "6% × 200000 = 12000.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Budget = $12,000.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Objectives → target → mix → budget → implement → review.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Logical order.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Overspending wastes money; underspending misses opportunities.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear balance.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 2 methods (c) 12000 (d) plan steps (e) cost vs return" },
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
