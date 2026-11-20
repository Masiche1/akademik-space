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
            { id: "a", text: "A person who starts a business and takes risks" }, { id: "b", text: "A bank manager" }, { id: "c", text: "A government official" }, { id: "d", text: "An employee" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Entrepreneur", statement: "Starts business, takes risk." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
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
            { id: "a", text: "Test viability and guide decisions" }, { id: "b", text: "Pay taxes" }, { id: "c", text: "Hire employees" }, { id: "d", text: "Register the business" },
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
