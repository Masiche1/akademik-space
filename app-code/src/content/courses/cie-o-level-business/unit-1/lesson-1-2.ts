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
            { id: "a", text: "Profits are unlimited" },
            { id: "b", text: "The business can't borrow money" },
            { id: "c", text: "The business must close" },
            { id: "d", text: "Owners are personally responsible for all business debts" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Unlimited liability", statement: "Personal responsibility." }], steps: [{ reasoning: "Owners liable for debts.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
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
        {
          id: "olbus-u1-ty-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A sole trader is a business that is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Owned and run by one person" },
            { id: "b", text: "Owned by members" },
            { id: "c", text: "Owned by shareholders" },
            { id: "d", text: "Run by the government" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Sole trader", statement: "One owner." }], steps: [{ reasoning: "Single owner and manager.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** One owner" },
        },
        {
          id: "olbus-u1-ty-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Which business structure offers limited liability to its owners?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sole trader" }, { id: "b", text: "Partnership" }, { id: "c", text: "Limited company" }, { id: "d", text: "None of these" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Limited liability", statement: "Capped at investment." }], steps: [{ reasoning: "Companies have limited liability.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Limited company" },
        },
        {
          id: "olbus-u1-ty-q7", difficulty: "core", totalMarks: 2,
          stem: "Define a partnership.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Partnership", statement: "Shared ownership." }], steps: [
            { reasoning: "A business owned and run by two or more people.", marks: 1, markCode: "AO1" },
            { reasoning: "Partners share profits and liabilities.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "A partnership is a business owned and run by two or more people who share profits and liabilities." },
        },
        {
          id: "olbus-u1-ty-q8", difficulty: "core", totalMarks: 2,
          stem: "What is a shareholder in a limited company?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Shareholder", statement: "Company owner." }], steps: [
            { reasoning: "A person who owns shares in a company.", marks: 1, markCode: "AO1" },
            { reasoning: "Shareholders are the owners; directors manage.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "A shareholder is an owner of shares in a company." },
        },
        {
          id: "olbus-u1-ty-q9", difficulty: "core", totalMarks: 1,
          stem: "A public limited company differs from a private limited company because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It has unlimited liability" },
            { id: "b", text: "It has only one owner" },
            { id: "c", text: "It cannot sell products" },
            { id: "d", text: "Its shares can be bought by the general public" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "PLC", statement: "Public share issue." }], steps: [{ reasoning: "PLC shares are sold to the public.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Shares sold publicly" },
        },
        {
          id: "olbus-u1-ty-q10", difficulty: "core", totalMarks: 2,
          stem: "Name two features of a cooperative business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Cooperative", statement: "Member-owned." }], steps: [
            { reasoning: "Owned and run by members; profits shared among members.", marks: 1, markCode: "AO1" },
            { reasoning: "Two features stated.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Member-owned, run for mutual benefit, profits shared among members." },
        },
        {
          id: "olbus-u1-ty-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two disadvantages of operating as a partnership compared with a limited company.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Partnership", statement: "Drawbacks." }], steps: [
            { reasoning: "Unlimited liability — partners risk personal assets.", marks: 1, markCode: "AO2" },
            { reasoning: "Harder to raise large capital than by selling shares.", marks: 1, markCode: "AO2" },
            { reasoning: "Shared decision-making can cause conflict.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Unlimited liability and limited capital raising are key disadvantages." },
        },
        {
          id: "olbus-u1-ty-q12", difficulty: "challenge", totalMarks: 4,
          stem: "A business wants to raise large amounts of capital by selling shares to the general public while protecting owners' personal assets. Recommend a structure and justify your choice.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Structure choice", statement: "Capital + liability." }], steps: [
            { reasoning: "Public limited company (plc).", marks: 1, markCode: "AO2" },
            { reasoning: "Can sell shares to the public to raise capital.", marks: 1, markCode: "AO2" },
            { reasoning: "Limited liability protects personal assets.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear justification.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "A public limited company — public share issue raises capital and limited liability protects owners." },
        },
        {
          id: "olbus-u1-ty-q13", difficulty: "foundation", totalMarks: 1,
          stem: "Which business structure is owned and run by its members for their mutual benefit?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Partnership" },
            { id: "b", text: "Sole trader" },
            { id: "c", text: "Limited company" },
            { id: "d", text: "Cooperative" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Cooperative", statement: "Member benefit." }], steps: [{ reasoning: "Cooperatives serve members.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Cooperative" },
        },
        {
          id: "olbus-u1-ty-q14", difficulty: "core", totalMarks: 2,
          stem: "Two partners share profits equally. If annual profit is 10000, how much does each partner receive?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Profit sharing", statement: "Equal split." }], steps: [
            { part: "a", reasoning: "10000 ÷ 2 = 5000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Each receives 5000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 5000" },
        },
        {
          id: "olbus-u1-ty-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why limited liability may encourage people to invest in a business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Limited liability", statement: "Investment incentive." }], steps: [
            { reasoning: "Investors risk only their investment, not personal assets.", marks: 1, markCode: "AO2" },
            { reasoning: "Reduces fear of losing savings/home if business fails.", marks: 1, markCode: "AO2" },
            { reasoning: "Makes shares more attractive to buy.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Limited liability caps losses at the investment, making share purchase safer and more attractive." },
        },
        {
          id: "olbus-u1-ty-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Compare a sole trader and a partnership: state two similarities and one difference.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Comparison", statement: "Similarities and difference." }], steps: [
            { reasoning: "Similarity: both have unlimited liability and are easy to set up.", marks: 1, markCode: "AO1" },
            { reasoning: "Similarity: both keep profits directly (no shareholders).", marks: 1, markCode: "AO2" },
            { reasoning: "Difference: partnership has 2+ owners sharing decisions; sole trader has one.", marks: 1, markCode: "AO1" },
            { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Both have unlimited liability and simple setup; partnerships share ownership and decisions." },
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
            { id: "a", text: "Cooperative" },
            { id: "b", text: "Partnership" },
            { id: "c", text: "Sole trader" },
            { id: "d", text: "Limited company" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Structure choice", statement: "Capital + liability." }], steps: [{ reasoning: "Companies offer both.", marks: 1, markCode: "AO2" }], finalAnswer: "**(d)** Limited company" },
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
        {
          id: "olbus-u1-cc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A person wanting to start a small business with full control and simple setup should choose…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Partnership" },
            { id: "b", text: "Public limited company" },
            { id: "c", text: "Sole trader" },
            { id: "d", text: "Cooperative" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Structure choice", statement: "Control and simplicity." }], steps: [{ reasoning: "Sole trader gives full control and simple setup.", marks: 1, markCode: "AO2" }], finalAnswer: "**(c)** Sole trader" },
        },
        {
          id: "olbus-u1-cc-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Sole traders and partnerships typically pay…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Corporation tax only" },
            { id: "b", text: "No tax" },
            { id: "c", text: "Sales tax only" },
            { id: "d", text: "Income tax on profits" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Tax", statement: "Income vs corporation tax." }], steps: [{ reasoning: "Unincorporated businesses pay income tax.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Income tax" },
        },
        {
          id: "olbus-u1-cc-q7", difficulty: "core", totalMarks: 2,
          stem: "Name two factors a business should consider when choosing its structure.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Decision factors", statement: "Choice criteria." }], steps: [
            { reasoning: "Capital needs, risk/liability, control, tax, size — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: capital needs, liability, control, tax, business size." },
        },
        {
          id: "olbus-u1-cc-q8", difficulty: "core", totalMarks: 2,
          stem: "Why might a business operating in a risky industry choose a limited company structure?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Risk", statement: "Liability protection." }], steps: [
            { reasoning: "Limited liability protects owners' personal assets from business debts.", marks: 1, markCode: "AO2" },
            { reasoning: "Suitable when failure risk is high.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "To protect personal assets via limited liability in a risky venture." },
        },
        {
          id: "olbus-u1-cc-q9", difficulty: "core", totalMarks: 1,
          stem: "Which structure allows a business to keep all its profits without sharing them with shareholders?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Private limited company" },
            { id: "b", text: "Cooperative" },
            { id: "c", text: "Sole trader" },
            { id: "d", text: "Public limited company" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Profits", statement: "Who keeps them." }], steps: [{ reasoning: "Sole trader keeps all profit.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Sole trader" },
        },
        {
          id: "olbus-u1-cc-q10", difficulty: "core", totalMarks: 2,
          stem: "What is the main advantage of a partnership over a sole trader?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Partnership advantage", statement: "Shared burden." }], steps: [
            { reasoning: "Partners share workload, decisions and risks.", marks: 1, markCode: "AO1" },
            { reasoning: "Combined skills and capital.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Shared responsibility, skills and capital — though liability remains unlimited." },
        },
        {
          id: "olbus-u1-cc-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a large, growing business would be unlikely to remain a sole trader.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Growth", statement: "Structural limits." }], steps: [
            { reasoning: "A sole trader's capital is limited to personal funds.", marks: 1, markCode: "AO2" },
            { reasoning: "Unlimited liability becomes risky as the business grows.", marks: 1, markCode: "AO2" },
            { reasoning: "Growth needs investment — companies can sell shares.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Growth outstrips a sole trader's capital and risk capacity; companies offer shares and limited liability." },
        },
        {
          id: "olbus-u1-cc-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Discuss whether tax should be a major factor when choosing a business structure.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Tax", statement: "Structure and tax." }], steps: [
            { reasoning: "Sole traders/partnerships pay income tax on profits.", marks: 1, markCode: "AO1" },
            { reasoning: "Companies pay corporation tax — rates may differ.", marks: 1, markCode: "AO1" },
            { reasoning: "Tax matters but must be weighed against liability, control and capital needs.", marks: 1, markCode: "AO2" },
            { reasoning: "Balanced discussion.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Tax is a factor but other considerations (liability, capital, control) may outweigh it." },
        },
        {
          id: "olbus-u1-cc-q13", difficulty: "foundation", totalMarks: 1,
          stem: "Which structure involves two or more owners who share profits and decision-making?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Partnership" },
            { id: "b", text: "Cooperative" },
            { id: "c", text: "Sole trader" },
            { id: "d", text: "Franchise" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Partnership", statement: "Shared ownership." }], steps: [{ reasoning: "Partnerships have 2+ owners.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Partnership" },
        },
        {
          id: "olbus-u1-cc-q14", difficulty: "core", totalMarks: 2,
          stem: "Three consultants want to share workload and decisions while keeping control of their firm. Recommend a structure and give one drawback.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Structure choice", statement: "Fit to needs." }], steps: [
            { reasoning: "Partnership — shares responsibility while partners retain control.", marks: 1, markCode: "AO2" },
            { reasoning: "Drawback: unlimited liability for all partners.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Partnership suits shared control; drawback is unlimited liability." },
        },
        {
          id: "olbus-u1-cc-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A community wants a credit union owned by its members, run for their mutual benefit. Which structure fits and why?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Cooperative", statement: "Member benefit." }], steps: [
            { reasoning: "Cooperative structure.", marks: 1, markCode: "AO2" },
            { reasoning: "Owned and run by members.", marks: 1, markCode: "AO1" },
            { reasoning: "Profits shared among members — mutual benefit.", marks: 1, markCode: "AO1" },
            { reasoning: "Clear fit.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "A cooperative — member-owned and profits shared for mutual benefit." },
        },
        {
          id: "olbus-u1-cc-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Business structure decision review.",
          parts: [
            { label: "a", prompt: "Define limited liability.", marks: 2 },
            { label: "b", prompt: "Name two disadvantages of a limited company.", marks: 2 },
            { label: "c", prompt: "Why do companies need more regulation than sole traders?", marks: 2 },
            { label: "d", prompt: "A solo tutor wants simplest setup and full control. Recommend a structure.", marks: 1 },
            { label: "e", prompt: "A firm needs to raise capital from many investors and protect owners' assets. Recommend a structure.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Structure choice", statement: "Features and selection." },
          ], steps: [
            { part: "a", reasoning: "Liability capped at amount invested.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Personal assets protected.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "More regulation; possible loss of control via shareholders — any two.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Second disadvantage.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Protect shareholders and ensure transparency/accountability.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Sole trader.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Limited company (plc for public shares).", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Limited liability + share issue raise capital.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "(a) capped liability (b) regulation/control (c) protect shareholders (d) sole trader (e) limited company" },
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
