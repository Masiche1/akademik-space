import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "olbus-u1-lesson-1-3",
  code: "1-3",
  title: "Enterprise and Entrepreneurship",
  goal: "I CAN explain enterprise skills and the role of entrepreneurs in business.",
  standards: ["7100 1.3"],
  vocabulary: [
    { term: "Entrepreneur", definition: "Person who starts and runs a business, taking risks for profit." },
    { term: "Enterprise skills", definition: "Abilities needed to start and grow a business." },
    { term: "Innovation", definition: "Introducing new ideas, products or methods." },
    { term: "Risk-taking", definition: "Willingness to invest with uncertain outcomes." },
    { term: "Business plan", definition: "Document describing business idea, strategy and finances." },
    { term: "Franchise", definition: "Business operating under another's brand and model for a fee." },
  ],
  concepts: [
    {
      id: "olbus-u1-enterprise",
      title: "Entrepreneurship",
      skill: "Explain what entrepreneurs do and the skills they need.",
      lesson: {
        sections: [
          { heading: "Role of entrepreneur", body: "Identifies opportunities, organises resources, takes risks, makes decisions, innovates and drives growth. The entrepreneur is the 'enterprise' factor of production." },
          { heading: "Key skills", body: "- **Risk-taking**: invest despite uncertainty.\n- **Innovation**: new products/processes.\n- **Leadership**: motivate and direct others.\n- **Planning**: research, budgeting, forecasting.\n- **Communication**: negotiate with suppliers/customers." },
          { heading: "Franchising", body: "Franchisees buy the right to operate under an established brand — lower risk than starting from scratch, but less independence and ongoing fees." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Someone spots a gap in the market for vegan meals and opens a restaurant. Identify enterprise skills shown.",
          solution: "Opportunity identification (innovation), risk-taking (investing savings), planning (menu/costs), leadership (hiring staff).",
        },
      },
      questions: [
        {
          id: "olbus-u1-en-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An entrepreneur is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "An employee" },
            { id: "b", text: "A bank manager" },
            { id: "c", text: "A government official" },
            { id: "d", text: "A person who starts a business and takes risks" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Entrepreneur", statement: "Starts business, takes risk." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u1-en-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two enterprise skills.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Enterprise skills", statement: "Key abilities." }], steps: [
            { reasoning: "Risk-taking, innovation, leadership, planning, communication — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: risk-taking, innovation, leadership, planning, communication." },
        },
        {
          id: "olbus-u1-en-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why risk-taking is essential to enterprise.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Risk-taking", statement: "Essential for enterprise." }], steps: [
            { reasoning: "Business success is uncertain — no guarantee of profit.", marks: 1, markCode: "AO2" },
            { reasoning: "Entrepreneur invests own resources facing possible loss.", marks: 1, markCode: "AO2" },
            { reasoning: "Without risk-taking, no new businesses would start.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Risk is inherent in business; entrepreneurs bear it for potential reward." },
        },
        {
          id: "olbus-u1-en-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Enterprise review.",
          parts: [
            { label: "a", prompt: "Define entrepreneur.", marks: 1 },
            { label: "b", prompt: "List three enterprise skills.", marks: 2 },
            { label: "c", prompt: "What is a franchise?", marks: 2 },
            { label: "d", prompt: "Advantage and disadvantage of franchising?", marks: 2 },
            { label: "e", prompt: "Why do entrepreneurs need a business plan?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Enterprise", statement: "Skills, franchising, planning." },
          ], steps: [
            { part: "a", reasoning: "Starts business, takes risks.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Any three skills.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Operate under established brand for fee.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Clear definition.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Adv: proven model, brand support. Disadv: fees, less independence.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Both stated.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Tests viability, secures funding, guides decisions.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear reasons.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 3 skills (c) franchise def (d) adv/disadv (e) viability+funding" },
        },
        {
          id: "olbus-u1-en-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Risk-taking as an enterprise skill means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Avoiding all possible losses" },
            { id: "b", text: "Investing despite uncertain outcomes" },
            { id: "c", text: "Borrowing money from a bank" },
            { id: "d", text: "Working without pay" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Risk-taking", statement: "Investing with uncertainty." }], steps: [{ reasoning: "Willingness to invest despite uncertain outcomes.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u1-en-q6", difficulty: "core", totalMarks: 1,
          stem: "A franchisee is a person who…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Invents a completely new product" },
            { id: "b", text: "Buys the right to operate under an established brand for a fee" },
            { id: "c", text: "Registers a trademark" },
            { id: "d", text: "Lends money to other businesses" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Franchisee", statement: "Operates under a brand." }], steps: [{ reasoning: "Franchisee pays for the right to use the brand/model.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u1-en-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these is NOT typically classed as an enterprise skill?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Leadership" },
            { id: "b", text: "Memorising facts" },
            { id: "c", text: "Innovation" },
            { id: "d", text: "Risk-taking" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Enterprise skills", statement: "Key abilities." }], steps: [{ reasoning: "Memorising facts is not an enterprise skill; the others are.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Memorising facts" },
        },
        {
          id: "olbus-u1-en-q8", difficulty: "core", totalMarks: 2,
          stem: "A new café earns revenue of $120,000 in its first year and has total costs of $95,000. What is its profit?",
          response: { type: "numeric", parts: [{ label: "a", answer: 25000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Profit", statement: "Revenue - costs." }], steps: [
            { part: "a", reasoning: "Profit = 120000 - 95000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Profit = $25,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $25,000" },
        },
        {
          id: "olbus-u1-en-q9", difficulty: "challenge", totalMarks: 3,
          stem: "A franchise charges a fee of $5,000 plus 4% of annual sales. If sales are $80,000, calculate the total annual cost to the franchisee.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 3200, unit: "$" },
            { label: "b", answer: 8200, unit: "$" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Franchise costs", statement: "Fee + percentage of sales." }], steps: [
            { part: "a", reasoning: "Royalty = 4% × 80000 = 3200.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Total = 5000 + 3200.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Total = $8,200.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $3,200; **(b)** $8,200" },
        },
        {
          id: "olbus-u1-en-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain one advantage of buying a franchise rather than starting a business from scratch.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Franchising", statement: "Lower risk." }], steps: [
            { reasoning: "Proven business model and brand reduce risk.", marks: 1, markCode: "AO2" },
            { reasoning: "Franchisor provides training and support.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Lower risk because the model and brand are already proven, plus ongoing support." },
        },
        {
          id: "olbus-u1-en-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why communication is an important enterprise skill for an entrepreneur.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Communication", statement: "Enterprise skill." }], steps: [
            { reasoning: "Needed to negotiate with suppliers and customers.", marks: 1, markCode: "AO2" },
            { reasoning: "Needed to motivate and direct employees.", marks: 1, markCode: "AO2" },
            { reasoning: "Needed to present the business plan to investors or lenders.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Communication is vital for negotiating, leading staff and securing finance." },
        },
        {
          id: "olbus-u1-en-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which situation best illustrates innovation by an entrepreneur?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Copying a competitor's product exactly" },
            { id: "b", text: "Introducing a new product or process to the market" },
            { id: "c", text: "Cutting the number of staff" },
            { id: "d", text: "Raising prices on existing products" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Innovation", statement: "New ideas/products." }], steps: [{ reasoning: "Innovation = introducing new products or methods.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** New product or process" },
        },
        {
          id: "olbus-u1-en-q13", difficulty: "core", totalMarks: 2,
          stem: "Two entrepreneurs share profits equally. The business makes a profit of $64,000. How much does each entrepreneur receive?",
          response: { type: "numeric", parts: [{ label: "a", answer: 32000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Profit sharing", statement: "Equal split." }], steps: [
            { part: "a", reasoning: "64000 ÷ 2 = 32000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Each receives $32,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $32,000" },
        },
        {
          id: "olbus-u1-en-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Which enterprise skill involves organising resources and making decisions about the future of the business?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Advertising" },
            { id: "b", text: "Accounting" },
            { id: "c", text: "Planning" },
            { id: "d", text: "Packaging" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Planning", statement: "Research, budgeting, forecasting." }], steps: [{ reasoning: "Planning covers research, budgeting and forecasting.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Planning" },
        },
        {
          id: "olbus-u1-en-q15", difficulty: "core", totalMarks: 2,
          stem: "A business has sales of $200,000 and a profit margin of 15%. What is its profit?",
          response: { type: "numeric", parts: [{ label: "a", answer: 30000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Profit margin", statement: "Margin × sales." }], steps: [
            { part: "a", reasoning: "Profit = 15% × 200000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Profit = $30,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $30,000" },
        },
        {
          id: "olbus-u1-en-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Enterprise extended review.",
          parts: [
            { label: "a", prompt: "Define entrepreneur.", marks: 1 },
            { label: "b", prompt: "Name three enterprise skills.", marks: 2 },
            { label: "c", prompt: "What is a franchise? Give one advantage.", marks: 2 },
            { label: "d", prompt: "Why might an entrepreneur choose franchising over starting from scratch?", marks: 2 },
            { label: "e", prompt: "A friend wants to start a café but fears failure. Recommend franchising or an independent start-up and justify your choice.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Enterprise", statement: "Skills, franchising, judgement." },
          ], steps: [
            { part: "a", reasoning: "Starts a business and takes risks.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Any three skills named.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Operate under established brand for a fee.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Advantage e.g. lower risk.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Lower risk, proven model, support.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear justification.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Reasoned recommendation.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Justification linked to risk/independence.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 3 skills (c) franchise def+adv (d) lower risk (e) justified choice" },
        },
      ],
    },
    {
      id: "olbus-u1-plan",
      title: "Business Plans and Start-ups",
      skill: "Understand the purpose and contents of a business plan.",
      lesson: {
        sections: [
          { heading: "Purpose", body: "A business plan tests whether an idea is viable, helps secure finance, and guides the entrepreneur's decisions in the first years." },
          { heading: "Contents", body: "- Executive summary\n- Business description and objectives\n- Market analysis\n- Marketing plan\n- Operations plan\n- Financial forecasts (sales, costs, profit, cash flow)" },
          { heading: "Start-up challenges", body: "New businesses face: raising capital, building customer base, competing with established firms, cash flow pressure, and survival risk." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does a bank require a business plan before lending to a start-up?",
          solution: "To assess the viability of the idea and the entrepreneur's ability to repay the loan.",
        },
      },
      questions: [
        {
          id: "olbus-u1-bp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A business plan is primarily used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Test viability and guide decisions" },
            { id: "b", text: "Hire employees" },
            { id: "c", text: "Register the business" },
            { id: "d", text: "Pay taxes" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Business plan", statement: "Viability + guidance." }], steps: [{ reasoning: "Tests idea and guides.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u1-bp-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two sections of a business plan.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Plan contents", statement: "Key sections." }], steps: [
            { reasoning: "Market analysis, financial forecasts, marketing plan, operations — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: market analysis, financial forecasts, marketing plan, operations plan." },
        },
        {
          id: "olbus-u1-bp-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two challenges faced by new businesses.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Start-up challenges", statement: "Common difficulties." }], steps: [
            { reasoning: "Raising capital / building customer base.", marks: 1, markCode: "AO1" },
            { reasoning: "Competing with established firms / cash flow pressure.", marks: 1, markCode: "AO1" },
            { reasoning: "Two explained.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Capital, customers, competition, cash flow — explain two." },
        },
        {
          id: "olbus-u1-bp-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Business plan review.",
          parts: [
            { label: "a", prompt: "Purpose of a business plan?", marks: 2 },
            { label: "b", prompt: "Name three sections.", marks: 2 },
            { label: "c", prompt: "Why do banks require one?", marks: 2 },
            { label: "d", prompt: "Two start-up challenges?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Business plan", statement: "Purpose, contents, challenges." },
          ], steps: [
            { part: "a", reasoning: "Test viability, guide decisions, secure finance.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Clear purpose.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Three sections named.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Assess viability and repayment ability.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Two challenges explained.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Second challenge.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) viability (b) 3 sections (c) assess risk (d) 2 challenges" },
        },
        {
          id: "olbus-u1-bp-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A business plan helps a start-up mainly by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Testing viability and guiding decisions" },
            { id: "b", text: "Guaranteeing a profit" },
            { id: "c", text: "Reducing tax bills" },
            { id: "d", text: "Eliminating competition" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Business plan", statement: "Viability + guidance." }], steps: [{ reasoning: "Tests the idea and guides early decisions.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u1-bp-q6", difficulty: "core", totalMarks: 1,
          stem: "Which section of a business plan contains projected sales, costs and profit?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Operations plan" },
            { id: "b", text: "Market analysis" },
            { id: "c", text: "Financial forecasts" },
            { id: "d", text: "Executive summary" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Plan contents", statement: "Financial forecasts." }], steps: [{ reasoning: "Financial forecasts contain sales/cost/profit projections.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Financial forecasts" },
        },
        {
          id: "olbus-u1-bp-q7", difficulty: "foundation", totalMarks: 1,
          stem: "The financial forecasts section of a business plan typically includes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Staff photographs" },
            { id: "b", text: "Only the mission statement" },
            { id: "c", text: "Competitor logos" },
            { id: "d", text: "Projected sales, costs and profit" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Financial forecasts", statement: "Projections." }], steps: [{ reasoning: "Forecasts project sales, costs and profit.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u1-bp-q8", difficulty: "core", totalMarks: 2,
          stem: "A start-up forecasts Year 1 sales of $150,000 and Year 2 sales of $180,000. What is the increase in sales?",
          response: { type: "numeric", parts: [{ label: "a", answer: 30000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Sales growth", statement: "Year 2 - Year 1." }], steps: [
            { part: "a", reasoning: "180000 - 150000 = 30000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Increase = $30,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $30,000" },
        },
        {
          id: "olbus-u1-bp-q9", difficulty: "challenge", totalMarks: 3,
          stem: "A business plan forecasts costs of $60,000 and sales of $80,000 in Year 1. In Year 2 sales rise by 10% with the same costs. Calculate the forecast profit for each year.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 20000, unit: "$" },
            { label: "b", answer: 28000, unit: "$" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Forecast profit", statement: "Sales - costs." }], steps: [
            { part: "a", reasoning: "Year 1 profit = 80000 - 60000 = 20000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Year 2 sales = 80000 × 1.1 = 88000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Year 2 profit = 88000 - 60000 = 28000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $20,000; **(b)** $28,000" },
        },
        {
          id: "olbus-u1-bp-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain why banks require a business plan before lending to a start-up.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Business plan", statement: "Lender assessment." }], steps: [
            { reasoning: "To assess the viability of the business idea.", marks: 1, markCode: "AO2" },
            { reasoning: "To judge the entrepreneur's ability to repay the loan.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Banks use the plan to assess viability and repayment ability." },
        },
        {
          id: "olbus-u1-bp-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two challenges a new business faces in its first year.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Start-up challenges", statement: "Early difficulties." }], steps: [
            { reasoning: "Raising capital / building a customer base.", marks: 1, markCode: "AO1" },
            { reasoning: "Competing with established firms / cash flow pressure.", marks: 1, markCode: "AO1" },
            { reasoning: "Two explained with effects.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Capital, customers, competition, cash flow — explain two." },
        },
        {
          id: "olbus-u1-bp-q12", difficulty: "challenge", totalMarks: 1,
          stem: "What is the main purpose of the market analysis section of a business plan?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To design the logo" },
            { id: "b", text: "To describe the legal structure" },
            { id: "c", text: "To list employee salaries" },
            { id: "d", text: "To research competitors and customer needs" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Market analysis", statement: "Research section." }], steps: [{ reasoning: "Market analysis covers competitors and customer needs.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u1-bp-q13", difficulty: "core", totalMarks: 2,
          stem: "A start-up budgets $12,000 for equipment, $8,000 for marketing and $20,000 for premises. What are its total start-up costs?",
          response: { type: "numeric", parts: [{ label: "a", answer: 40000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Start-up costs", statement: "Sum of budgets." }], steps: [
            { part: "a", reasoning: "12000 + 8000 + 20000 = 40000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Total = $40,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $40,000" },
        },
        {
          id: "olbus-u1-bp-q14", difficulty: "foundation", totalMarks: 1,
          stem: "A business plan is a document that describes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only tax returns" },
            { id: "b", text: "The business idea, strategy and finances" },
            { id: "c", text: "The building lease" },
            { id: "d", text: "Employee contracts" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Business plan", statement: "Idea + strategy + finances." }], steps: [{ reasoning: "A plan covers idea, strategy and financial forecasts.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u1-bp-q15", difficulty: "core", totalMarks: 2,
          stem: "A start-up plans to sell 500 units at $20 each. What is its forecast revenue?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Revenue", statement: "Price × quantity." }], steps: [
            { part: "a", reasoning: "Revenue = 500 × 20 = 10000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Revenue = $10,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $10,000" },
        },
        {
          id: "olbus-u1-bp-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Business plan extended review.",
          parts: [
            { label: "a", prompt: "State two purposes of a business plan.", marks: 2 },
            { label: "b", prompt: "Name three sections of a business plan.", marks: 2 },
            { label: "c", prompt: "Why do banks require a business plan?", marks: 2 },
            { label: "d", prompt: "Give two challenges faced by new businesses.", marks: 2 },
            { label: "e", prompt: "A friend has a business idea but no plan. Should they write one? Justify your answer.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Business plan", statement: "Purpose, contents, application." },
          ], steps: [
            { part: "a", reasoning: "Test viability; secure finance / guide decisions.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Second purpose.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Three sections named.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Assess viability and repayment ability.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Two challenges.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Second challenge.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Yes — reduces risk and helps secure finance.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) 2 purposes (b) 3 sections (c) assess risk (d) 2 challenges (e) yes, justified" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u1-1-3-notes", title: "Enterprise — notes", summary: "Entrepreneurs, skills, franchising and business plans.",
      sections: [
        { heading: "Enterprise", body: "Entrepreneurs take risks, innovate and organise resources. Skills: risk-taking, innovation, leadership, planning, communication." },
        { heading: "Plans", body: "Business plans test viability and secure finance; sections include market analysis and financial forecasts." },
      ] },
  ],
};
