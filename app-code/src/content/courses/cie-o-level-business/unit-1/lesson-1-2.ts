import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "olbus-u1-lesson-1-2",
  code: "1-2",
  title: "Types of Business Organisation",
  goal: "I CAN distinguish between sole traders, partnerships, companies and cooperatives.",
  standards: ["7100 1.2"],
  vocabulary: [
    { term: "Sole trader", definition: "Business owned and run by one person." },
    { term: "Partnership", definition: "Business owned by two or more people." },
    { term: "Private limited company", definition: "Company owned by shareholders, not listed publicly." },
    { term: "Public limited company", definition: "Company whose shares can be bought by the public." },
    { term: "Cooperative", definition: "Business owned and run by its members for mutual benefit." },
    { term: "Shareholder", definition: "Owner of shares in a company." },
    { term: "Limited liability", definition: "Owners' liability limited to their investment." },
  ],
  concepts: [
    {
      id: "olbus-u1-types",
      title: "Business structures",
      skill: "Compare sole traders, partnerships, companies and cooperatives.",
      lesson: {
        sections: [
          { heading: "Sole trader", body: "One owner, simple to set up, keeps all profit, unlimited liability — owner personally responsible for debts. Common for small businesses." },
          { heading: "Partnership", body: "2+ owners share profits and liabilities. Unlimited liability — partners can lose personal assets. Simple but riskier than companies." },
          { heading: "Limited company", body: "Owned by shareholders; directors manage. **Limited liability** protects personal assets. Can raise capital by selling shares. More regulation required." },
          { heading: "Cooperative", body: "Owned by members (customers/workers); profits shared among members. Examples: credit unions, agricultural co-ops." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A business wants to raise large capital while protecting owners' personal assets. Which structure?",
          solution: "A public limited company — can sell shares publicly and offers limited liability.",
        },
      },
      questions: [
        {
          id: "olbus-u1-ty-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Unlimited liability means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Owners are personally responsible for all business debts" }, { id: "b", text: "The business can't borrow money" }, { id: "c", text: "Profits are unlimited" }, { id: "d", text: "The business must close" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Unlimited liability", statement: "Personal responsibility." }], steps: [{ reasoning: "Owners liable for debts.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u1-ty-q2", difficulty: "core", totalMarks: 2,
          stem: "What is limited liability?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Limited liability", statement: "Liability capped at investment." }], steps: [
            { reasoning: "Owners lose only their investment, not personal assets.", marks: 1, markCode: "AO1" },
            { reasoning: "Applies to companies.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Owners' liability limited to amount invested in the company." },
        },
        {
          id: "olbus-u1-ty-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two advantages of operating as a limited company rather than a sole trader.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Limited company", statement: "Advantages over sole trader." }], steps: [
            { reasoning: "Limited liability protects personal assets.", marks: 1, markCode: "AO2" },
            { reasoning: "Can raise capital by selling shares.", marks: 1, markCode: "AO2" },
            { reasoning: "Easier to attract investors/lenders.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Limited liability and easier capital raising are key advantages." },
        },
        {
          id: "olbus-u1-ty-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Business structures review.",
          parts: [
            { label: "a", prompt: "Define sole trader.", marks: 1 },
            { label: "b", prompt: "Define partnership.", marks: 1 },
            { label: "c", prompt: "What is limited liability?", marks: 2 },
            { label: "d", prompt: "How do companies raise capital?", marks: 2 },
            { label: "e", prompt: "A business owner fears losing personal savings if the business fails. Which structure avoids this?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Business structures", statement: "Types and features." },
          ], steps: [
            { part: "a", reasoning: "One owner.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "2+ owners sharing profits.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Liability capped at investment.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Personal assets protected.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "By selling shares to investors.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Public companies especially.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Limited company (ltd or plc).", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Because of limited liability.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear reasoning.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) 1 owner (b) 2+ owners (c) capped liability (d) shares (e) limited company" },
        },
      ],
    },
    {
      id: "olbus-u1-compare",
      title: "Choosing a Business Structure",
      skill: "Select appropriate business structures for different situations.",
      lesson: {
        sections: [
          { heading: "Decision factors", body: "- **Size/capital needs**: large capital → company; small → sole trader/partnership.\n- **Risk tolerance**: want protection → limited company; accept risk → sole trader.\n- **Control**: want full control → sole trader; share control → partnership/company.\n- **Tax**: sole traders pay income tax; companies pay corporation tax." },
          { heading: "Growth path", body: "Many businesses start as sole traders and convert to limited companies as they grow and need capital." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Two friends want to start a consultancy and retain full control while sharing workload. Best structure?",
          solution: "Partnership — allows shared responsibility while keeping control (though unlimited liability applies).",
        },
      },
      questions: [
        {
          id: "olbus-u1-cc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A business needing large capital with limited liability should choose…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Limited company" }, { id: "b", text: "Sole trader" }, { id: "c", text: "Partnership" }, { id: "d", text: "Cooperative" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Structure choice", statement: "Capital + liability." }], steps: [{ reasoning: "Companies offer both.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Limited company" },
        },
        {
          id: "olbus-u1-cc-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two disadvantages of a sole trader structure.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Sole trader", statement: "Drawbacks." }], steps: [
            { reasoning: "Unlimited liability; limited capital raising ability.", marks: 1, markCode: "AO1" },
            { reasoning: "Two listed.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Unlimited liability and difficulty raising large capital." },
        },
        {
          id: "olbus-u1-cc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a growing business might convert from sole trader to limited company.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Growth", statement: "Reasons to incorporate." }], steps: [
            { reasoning: "Needs more capital for expansion.", marks: 1, markCode: "AO2" },
            { reasoning: "Wants limited liability as risk grows.", marks: 1, markCode: "AO2" },
            { reasoning: "Attracts investors via shares.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Companies offer capital access, limited liability and investor appeal." },
        },
        {
          id: "olbus-u1-cc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Business structure choice review.",
          parts: [
            { label: "a", prompt: "Two advantages of sole trader?", marks: 2 },
            { label: "b", prompt: "Two disadvantages of partnership?", marks: 2 },
            { label: "c", prompt: "Why do companies need more regulation?", marks: 2 },
            { label: "d", prompt: "A family business wants to involve community members as owners. Which structure?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Structure choice", statement: "Features and selection." },
          ], steps: [
            { part: "a", reasoning: "Simple setup; keep all profit (or full control).", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Two listed.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Unlimited liability; shared decision-making conflicts.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two listed.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Protect shareholders and ensure transparency.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Cooperative.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Member-owned, mutual benefit.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) simple/profit (b) liability/conflict (c) protect shareholders (d) cooperative" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u1-1-2-notes", title: "Business structures — notes", summary: "Sole traders, partnerships, companies, cooperatives.",
      sections: [
        { heading: "Structures", body: "Sole trader (1 owner, unlimited liability); partnership (2+, shared); limited company (shareholders, limited liability); cooperative (member-owned)." },
        { heading: "Choice", body: "Consider capital needs, risk, control, tax and growth stage." },
      ] },
  ],
};
