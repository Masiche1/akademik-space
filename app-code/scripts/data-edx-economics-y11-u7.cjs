module.exports = [
  {
    file: "lesson-7-1.ts", exportName: "lesson71",
    lesson: {
      id: "ecn11-u7-lesson-7-1", code: "7-1",
      title: "Business Activity, Enterprise and Objectives",
      goal: "I CAN explain business activity, the factors of production and the objectives of business.",
      standards: ["Edexcel IGCSE Economics 4EC1 — Paper 1: Investigating small businesses"],
      vocabulary: [
        { term: "Business activity", definition: "The production of goods and services to satisfy wants and needs in exchange for payment." },
        { term: "Factors of production", definition: "The resources used to produce goods and services: land, labour, capital and enterprise." },
        { term: "Land", definition: "Natural resources used in production, including raw materials and space." },
        { term: "Labour", definition: "The human effort, skills and time used in production." },
        { term: "Capital", definition: "Man-made resources used in production, such as machinery, tools and buildings." },
        { term: "Enterprise", definition: "The willingness and ability of an entrepreneur to organise the other factors of production and take risk." },
        { term: "Profit", definition: "The reward for enterprise, calculated as total revenue minus total cost." },
      ],
      concepts: [
        {
          id: "ecn11-u7-activity", title: "Business Activity and the Factors of Production",
          skill: "Identify and explain the four factors of production used in business activity.",
          sections: [
            { heading: "What business activity is", body: "**Business activity** is the production and sale of goods and services in exchange for money. Every economy depends on businesses converting **factors of production** into output that satisfies consumer wants and needs. The four factors are **land** (natural resources), **labour** (human effort and skills), **capital** (man-made resources such as machinery and buildings) and **enterprise** (the entrepreneur who organises the other factors and takes risk)." },
            { heading: "Rewards to the factors", body: "Each factor earns a reward: land earns **rent**, labour earns **wages or salaries**, capital earns **interest**, and enterprise earns **profit**. Profit is therefore not a factor of production — it is the reward for organising the factors and bearing uncertainty. If a business makes a loss, enterprise has failed to cover all costs." },
          ],
          keyFormulas: [
            { name: "Profit", statement: "total revenue − total cost" },
          ],
          workedExample: {
            problem: "A farmer uses a field (land), workers (labour), a tractor (capital) and his own organisation (enterprise) to grow wheat. Identify the reward each factor earns.",
            solution: "Land earns rent, labour earns wages, capital earns interest, and enterprise earns profit (or suffers the loss if revenue does not cover costs).",
          },
          questions: [
            {
              id: "ecn11-u7-activity-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which of the following is NOT a factor of production?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Land" },
                { id: "b", text: "Labour" },
                { id: "c", text: "Enterprise" },
                { id: "d", text: "Profit" },
              ], correctChoiceId: "d" },
              markscheme: {
                principles: [{ kind: "definition", name: "Factors of production", statement: "Land, labour, capital and enterprise." }],
                steps: [{ reasoning: "Profit is the reward for enterprise, not a factor of production.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(d)** Profit",
                commonErrors: ["Confusing profit with enterprise."],
              },
            },
            {
              id: "ecn11-u7-activity-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Explain the role of the entrepreneur in business activity.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Enterprise", statement: "Organising the other factors and taking risk." }],
                steps: [
                  { reasoning: "The entrepreneur organises land, labour and capital into a productive business.", marks: 1, markCode: "AO1" },
                  { reasoning: "They take risks — the business may fail and they may lose money.", marks: 1, markCode: "AO1" },
                  { reasoning: "In return they earn profit if the business is successful.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Organises the factors, takes risk, earns profit.",
                commonErrors: ["Only mentioning profit, not organisation or risk."],
              },
            },
            {
              id: "ecn11-u7-activity-q3", difficulty: "core", totalMarks: 4,
              stem: "Distinguish between capital and enterprise as factors of production.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Capital vs enterprise", statement: "Capital is a resource; enterprise is the organising role." }],
                steps: [
                  { reasoning: "Capital = man-made resources such as machinery, tools and buildings.", marks: 1, markCode: "AO1" },
                  { reasoning: "Capital is a passive resource — it is used, not decision-making.", marks: 1, markCode: "AO2" },
                  { reasoning: "Enterprise = the entrepreneur who combines and manages all factors.", marks: 1, markCode: "AO1" },
                  { reasoning: "Enterprise takes the risk and earns profit; capital only earns interest.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Capital = man-made resources earning interest; enterprise = organising role earning profit and bearing risk.",
                commonErrors: ["Treating capital and enterprise as the same thing."],
              },
            },
            {
              id: "ecn11-u7-activity-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Aisha opens a clothing shop in her town centre.",
              parts: [
                { label: "a", prompt: "Identify two factors of production Aisha uses and give an example of each.", marks: 2 },
                { label: "b", prompt: "Explain how enterprise adds value to these other factors.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Applying factors of production", statement: "Match real examples to land, labour, capital, enterprise." }],
                steps: [
                  { reasoning: "(a) Any two with examples, e.g. premises = land, staff = labour, stock/display units = capital.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Aisha organises the factors into a working shop.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) She takes risk — the shop may lose money.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Her decisions (location, stock, pricing) determine whether profit is earned.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Two factors with examples. (b) Enterprise organises factors, takes risk, drives profit.",
                commonErrors: ["Listing factors without examples.", "No link to risk or reward."],
              },
            },
            {
              id: "ecn11-u7-activity-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A student is considering starting a small business after graduation.",
              parts: [
                { label: "a", prompt: "State three objectives a new business might have.", marks: 3 },
                { label: "b", prompt: "Explain why survival is often the first objective of a new business.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Business objectives", statement: "New firms prioritise survival before growth or profit." }],
                steps: [
                  { reasoning: "(a) Any three of: survival, profit, growth, market share, customer satisfaction.", marks: 3, markCode: "AO1", part: "a" },
                  { reasoning: "(b) New businesses face uncertainty and may run out of cash.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) If the business fails there is no chance to pursue other objectives.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Survival requires covering costs and building customers first.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) e.g. survival, profit, growth. (b) Failure risk means survival comes first.",
                commonErrors: ["Only one objective listed.", "No explanation of risk."],
              },
            },
            {
              id: "ecn11-u7-activity-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A bakery converts flour, ovens, bakers and the owner's management into loaves of bread.",
              parts: [
                { label: "a", prompt: "Define business activity.", marks: 2 },
                { label: "b", prompt: "Name the four factors of production and give one example from the bakery for each.", marks: 4 },
                { label: "c", prompt: "Explain why enterprise is described as the most important factor of production.", marks: 2 },
                { label: "d", prompt: "Evaluate the view that profit is the only objective of a business.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Factors of production", statement: "Land, labour, capital, enterprise — each essential." }],
                steps: [
                  { reasoning: "(a) Production of goods/services for payment to satisfy wants.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Land — flour/wheat fields; labour — bakers; capital — ovens/machines; enterprise — owner.", marks: 4, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Enterprise organises the other factors and bears the risk of failure.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Without enterprise the other factors remain uncombined and unproductive.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Profit is important but businesses also pursue growth, market share, survival, social aims.", marks: 1, markCode: "AO3", part: "d" },
                  { reasoning: "(d) However profit is needed to reward enterprise and fund future activity.", marks: 1, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) production for payment; (b) four factors with bakery examples; (c) enterprise organises and risks; (d) profit important but not the only objective.",
                commonErrors: ["Missing an example in (b).", "One-sided evaluation in (d)."],
              },
            },
          ],
        },
        {
          id: "ecn11-u7-objectives", title: "Business Objectives and Stakeholders",
          skill: "Explain business objectives and the conflicting aims of stakeholders.",
          sections: [
            { heading: "Business objectives", body: "Businesses pursue several objectives: **profit maximisation**, **growth** (higher output or market share), **survival**, **customer satisfaction**, **market leadership** and, for some firms, **social or environmental aims**. Objectives differ by business type and stage — a new firm prioritises survival, a mature firm may prioritise profit or growth, and a social enterprise may put its mission before profit." },
            { heading: "Stakeholders", body: "**Stakeholders** are groups affected by or with an interest in a business: **internal** stakeholders include owners, managers and employees; **external** stakeholders include customers, suppliers, the government, the local community and pressure groups. Each stakeholder has its own objectives — employees want job security and pay, customers want quality and low prices, owners want returns — so objectives often **conflict** and managers must balance them." },
          ],
          keyFormulas: [
            { name: "Profit", statement: "total revenue − total cost" },
          ],
          workedExample: {
            problem: "A factory announces plans to automate, cutting 200 jobs but raising profits. Identify two groups of stakeholders affected and their likely reactions.",
            solution: "Employees (internal): lose jobs — oppose the plan, want redundancy pay or retraining. Shareholders/owners: gain higher profits — support the plan. The conflict shows why managers must balance stakeholder objectives.",
          },
          questions: [
            {
              id: "ecn11-u7-objectives-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which of the following is an internal stakeholder of a business?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Employees" },
                { id: "b", text: "Customers" },
                { id: "c", text: "Government" },
                { id: "d", text: "Local community" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Internal stakeholder", statement: "Part of the business organisation, e.g. owners, managers, employees." }],
                steps: [{ reasoning: "Employees work inside the business, so they are internal stakeholders.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(a)** Employees",
                commonErrors: ["Confusing internal with external stakeholders."],
              },
            },
            {
              id: "ecn11-u7-objectives-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three possible objectives of a business.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Business objectives", statement: "Profit, growth, survival, market share, customer satisfaction." }],
                steps: [
                  { reasoning: "Any one objective, e.g. profit or survival.", marks: 1, markCode: "AO1" },
                  { reasoning: "Second objective, e.g. growth or market share.", marks: 1, markCode: "AO1" },
                  { reasoning: "Third objective, e.g. customer satisfaction or market leadership.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Any three of: profit, growth, survival, market share, customer satisfaction.",
                commonErrors: ["Repeating the same objective.", "Listing stakeholders instead of objectives."],
              },
            },
            {
              id: "ecn11-u7-objectives-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how the objective of profit can conflict with the objective of growth.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Objective conflict", statement: "Resources used for one objective may reduce another." }],
                steps: [
                  { reasoning: "Profit maximisation may mean keeping costs low and prices high.", marks: 1, markCode: "AO2" },
                  { reasoning: "Growth requires investment — new premises, staff, marketing — which cuts short-run profit.", marks: 1, markCode: "AO2" },
                  { reasoning: "A firm chasing growth may sacrifice profit in the short term.", marks: 1, markCode: "AO2" },
                  { reasoning: "Conversely, a firm maximising short-run profit may under-invest and fail to grow.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Growth needs investment that reduces short-run profit — the objectives conflict.",
                commonErrors: ["Saying objectives never conflict.", "No explanation of why."],
              },
            },
            {
              id: "ecn11-u7-objectives-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A supermarket decides to pay all staff the 'real living wage', which raises costs.",
              parts: [
                { label: "a", prompt: "Identify two stakeholder groups affected by this decision.", marks: 2 },
                { label: "b", prompt: "Explain how the objectives of these stakeholders may conflict with each other.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Stakeholder conflicts", statement: "Different groups want different outcomes from the same decision." }],
                steps: [
                  { reasoning: "(a) Any two: employees, owners/shareholders, customers, local community.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Employees want higher pay; owners want lower costs/higher profit.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Customers may benefit from better service but face higher prices.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Managers must weigh these conflicting objectives when deciding.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) e.g. employees and owners. (b) Pay vs profit; possibly prices vs service quality.",
                commonErrors: ["Only one stakeholder.", "No explanation of the conflict."],
              },
            },
            {
              id: "ecn11-u7-objectives-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A family-owned restaurant must choose between modernising its kitchen (costly) or keeping profits for the owners.",
              parts: [
                { label: "a", prompt: "Identify two internal and two external stakeholders in this business.", marks: 3 },
                { label: "b", prompt: "Explain one way the owners' objectives may differ from those of customers.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Internal vs external stakeholders", statement: "Internal = inside the firm; external = affected from outside." }],
                steps: [
                  { reasoning: "(a) Internal: owners, managers, kitchen staff. External: customers, suppliers, local council.", marks: 3, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Owners want profit and possibly higher prices or lower costs.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Customers want quality food at low prices and good service.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Modernising may raise prices, so the objectives can conflict.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Internal: owners/managers/staff; external: customers/suppliers/council. (b) Owners want profit; customers want quality and low prices.",
                commonErrors: ["Misclassifying stakeholders.", "No conflict identified."],
              },
            },
            {
              id: "ecn11-u7-objectives-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A high street retailer is debating whether to expand overseas or reward shareholders with higher dividends.",
              parts: [
                { label: "a", prompt: "Define the term stakeholder.", marks: 2 },
                { label: "b", prompt: "Name two internal and two external stakeholders of the retailer.", marks: 2 },
                { label: "c", prompt: "Explain two business objectives the retailer might pursue in this situation.", marks: 3 },
                { label: "d", prompt: "Evaluate the view that businesses should always put profit before other objectives.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Stakeholders and objectives", statement: "Firms balance competing objectives of different groups." }],
                steps: [
                  { reasoning: "(a) Anyone affected by or with an interest in the business.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Internal: shareholders, managers/employees. External: customers, suppliers or government.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Growth — expanding overseas increases size and market share.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Profit/dividends — rewarding owners; possibly survival or market leadership.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Profit rewards enterprise and funds investment — important.", marks: 1, markCode: "AO3", part: "d" },
                  { reasoning: "(d) But growth, survival, jobs and reputation also matter; ignoring stakeholders can hurt long-run profit.", marks: 2, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) interested/affected party; (b) two internal + two external; (c) growth and dividends; (d) profit important but not everything.",
                commonErrors: ["Only one-sided evaluation.", "Stakeholders not split correctly."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn11-u7-activity-notes", title: "Business activity and objectives — revision notes",
      summary: "Business = production for payment using land, labour, capital and enterprise. Rewards: rent, wages, interest, profit. Objectives include profit, growth, survival; stakeholders have conflicting aims.",
      sections: [
        { heading: "Factors of production", body: "Land earns rent, labour earns wages, capital earns interest, enterprise earns profit — profit is a reward, not a factor." },
        { heading: "Objectives", body: "Profit, growth, survival, market share and customer satisfaction; new firms prioritise survival." },
        { heading: "Stakeholders", body: "Internal (owners, managers, employees) and external (customers, suppliers, government); their objectives often conflict." },
      ],
    },
  },
  {
    file: "lesson-7-2.ts", exportName: "lesson72",
    lesson: {
      id: "ecn11-u7-lesson-7-2", code: "7-2",
      title: "Types of Business Organisation",
      goal: "I CAN compare sole traders, partnerships, companies and other forms of business organisation.",
      standards: ["Edexcel IGCSE Economics 4EC1 — Paper 1: Investigating small businesses"],
      vocabulary: [
        { term: "Sole trader", definition: "A business owned and controlled by one person who keeps all the profit and bears all the risk." },
        { term: "Partnership", definition: "A business owned by two or more people who share profit, risk and usually unlimited liability." },
        { term: "Limited liability", definition: "Owners' responsibility for business debts is limited to the amount they invested." },
        { term: "Private limited company (Ltd)", definition: "A company whose shares are not offered to the general public; often has limited liability." },
        { term: "Public limited company (PLC)", definition: "A company that can sell shares to the general public on the stock exchange." },
        { term: "Franchise", definition: "A business that pays a fee to use an established brand, system and support." },
        { term: "Unlimited liability", definition: "Owners are personally responsible for all business debts." },
      ],
      concepts: [
        {
          id: "ecn11-u7-unincorporated", title: "Sole Traders, Partnerships and Franchises",
          skill: "Explain the features, advantages and disadvantages of unincorporated businesses.",
          sections: [
            { heading: "Sole traders", body: "A **sole trader** is owned and run by one person. **Advantages**: easy and cheap to set up; owner keeps all profit; full control; flexible and quick decisions. **Disadvantages**: unlimited liability — personal assets can be seized to pay business debts; limited capital and skills; no continuity if the owner dies or retires." },
            { heading: "Partnerships and franchises", body: "A **partnership** has two or more owners who share work, capital, profit and risk; it usually has **unlimited liability** unless it is a limited liability partnership. **Advantages**: more capital and skills; shared decisions and workload. **Disadvantages**: disagreements between partners; each partner is liable for the others' mistakes. A **franchise** lets a business buy the right to trade under an established brand (e.g. a fast-food chain), gaining training and marketing support but paying fees and following the franchisor's rules." },
          ],
          keyFormulas: [
            { name: "Liability", statement: "unlimited = personal assets at risk; limited = only the investment at risk" },
          ],
          workedExample: {
            problem: "Two friends open a café as a partnership. The business fails owing £50,000. Explain what happens to their personal savings.",
            solution: "In an ordinary partnership each partner has unlimited liability — both friends are personally responsible for the £50,000 debt, so their personal savings and possessions can be used to pay it.",
          },
          questions: [
            {
              id: "ecn11-u7-unincorporated-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What does 'unlimited liability' mean for a business owner?",
              response: { type: "mcq", choices: [
                { id: "a", text: "The owner can only lose the money they invested" },
                { id: "b", text: "The owner is personally responsible for all business debts" },
                { id: "c", text: "The business cannot borrow money" },
                { id: "d", text: "The owner must pay unlimited tax" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Unlimited liability", statement: "Personal assets can be used to settle business debts." }],
                steps: [{ reasoning: "Unlimited liability means the owner's personal wealth is at risk for business debts.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Personally responsible for all debts",
                commonErrors: ["Confusing limited and unlimited liability."],
              },
            },
            {
              id: "ecn11-u7-unincorporated-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three advantages of operating as a sole trader.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Sole trader advantages", statement: "Easy setup, full control, keep all profit." }],
                steps: [
                  { reasoning: "Easy and cheap to set up and run.", marks: 1, markCode: "AO1" },
                  { reasoning: "Owner keeps all the profit.", marks: 1, markCode: "AO1" },
                  { reasoning: "Full control over decisions — fast and flexible.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Easy setup, keep all profit, full control.",
                commonErrors: ["Listing disadvantages instead.", "Only one advantage."],
              },
            },
            {
              id: "ecn11-u7-unincorporated-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two disadvantages of running a business as a partnership.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Partnership disadvantages", statement: "Unlimited liability and shared decision-making risks." }],
                steps: [
                  { reasoning: "Unlimited liability — partners are personally responsible for all debts.", marks: 1, markCode: "AO2" },
                  { reasoning: "Each partner is liable for the mistakes or debts of the others.", marks: 1, markCode: "AO2" },
                  { reasoning: "Disagreements between partners can disrupt the business.", marks: 1, markCode: "AO2" },
                  { reasoning: "Profit must be shared, reducing each partner's reward.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Unlimited liability, joint liability for partners' actions, disagreements, shared profit.",
                commonErrors: ["Only advantages given.", "No explanation of liability."],
              },
            },
            {
              id: "ecn11-u7-unincorporated-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Two friends want to start a hairdressing business.",
              parts: [
                { label: "a", prompt: "Compare operating as two sole traders versus a partnership.", marks: 3 },
                { label: "b", prompt: "State one advantage a franchise might offer this business instead.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Business forms", statement: "Sole trader = one owner, all profit/risk; partnership = shared." }],
                steps: [
                  { reasoning: "(a) Two sole traders: each keeps all own profit, full control, but separate businesses — less capital and no sharing.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Partnership: share capital, skills and workload; share profit and risk; unlimited liability for both.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) A franchise provides a known brand, training, suppliers and marketing support.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) Partnership shares capital/skills but shares risk; sole traders keep control and profit. (b) Brand, training, support.",
                commonErrors: ["No comparison — only one form described.", "Franchise advantage too vague."],
              },
            },
            {
              id: "ecn11-u7-unincorporated-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A partnership of three builders is expanding and wants to reduce the owners' personal risk.",
              parts: [
                { label: "a", prompt: "Explain why unlimited liability is a risk for the partners.", marks: 3 },
                { label: "b", prompt: "Suggest two ways the business could be reorganised to reduce this risk.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Liability and structure", statement: "Business form determines how much personal wealth is at risk." }],
                steps: [
                  { reasoning: "(a) If the business fails, partners must pay all debts from personal savings.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) One partner's mistakes can create debts the others must repay.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Personal assets — homes, savings — can be seized.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Convert to a limited company — owners' liability limited to shares invested.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Or take out appropriate insurance, or split risky work into a separate firm.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Personal assets at risk for all debts. (b) Incorporate as limited company or insure/split risks.",
                commonErrors: ["No link to personal assets.", "Suggestions unrelated to liability."],
              },
            },
            {
              id: "ecn11-u7-unincorporated-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Amara wants to open a bakery and is choosing between being a sole trader, joining a partnership or buying a franchise.",
              parts: [
                { label: "a", prompt: "Define the term sole trader.", marks: 2 },
                { label: "b", prompt: "Give two advantages and two disadvantages of being a sole trader.", marks: 4 },
                { label: "c", prompt: "Explain what a franchise is and one advantage it offers.", marks: 2 },
                { label: "d", prompt: "Recommend a business form for Amara and justify your choice.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Choosing a business form", statement: "Match structure to control, capital needs and risk." }],
                steps: [
                  { reasoning: "(a) Business owned and controlled by one person.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Advantages: easy setup, keep all profit, full control.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Disadvantages: unlimited liability, limited capital/skills, no continuity.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Franchise = buying the right to trade under an established brand; gains support/training.", marks: 2, markCode: "AO1", part: "c" },
                  { reasoning: "(d) Any justified choice — e.g. franchise if Amara wants a proven model and support; sole trader if she wants control.", marks: 2, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) one owner; (b) two advantages + two disadvantages; (c) franchise definition + advantage; (d) justified recommendation.",
                commonErrors: ["Recommendation with no justification.", "Unbalanced advantages/disadvantages."],
              },
            },
          ],
        },
        {
          id: "ecn11-u7-corporate", title: "Companies and Other Business Forms",
          skill: "Compare limited companies, public limited companies, public sector bodies and social enterprises.",
          sections: [
            { heading: "Limited companies", body: "A **private limited company (Ltd)** is owned by shareholders but shares are not sold publicly; it has **limited liability** — owners risk only their investment. A **public limited company (PLC)** can sell shares on the stock exchange, raising large amounts of capital, but must meet stricter legal requirements and disclose more information. Companies are **separate legal entities** — they can own property, sue and be sued in their own name, giving **perpetual succession** (the business survives owners' deaths)." },
            { heading: "Public sector and social enterprises", body: "The **public sector** includes government-owned businesses providing services such as transport or postal services; they serve public aims rather than profit. **Social enterprises** trade commercially but reinvest most profit into social or environmental goals. **Co-operatives** are owned and controlled by their members (e.g. workers or customers), who share profits." },
          ],
          keyFormulas: [
            { name: "Limited liability", statement: "maximum loss = amount invested in shares" },
          ],
          workedExample: {
            problem: "A PLC raises £50m by issuing shares. One shareholder owns shares worth £10,000. The company collapses owing £50m. What does the shareholder lose?",
            solution: "Only the £10,000 invested — limited liability means shareholders cannot be made to pay the company's debts beyond their shareholding.",
          },
          questions: [
            {
              id: "ecn11-u7-corporate-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is the main advantage of limited liability for shareholders?",
              response: { type: "mcq", choices: [
                { id: "a", text: "They can sell shares easily" },
                { id: "b", text: "They keep all the profit" },
                { id: "c", text: "They can only lose what they invested" },
                { id: "d", text: "They do not pay tax" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Limited liability", statement: "Loss limited to the amount invested." }],
                steps: [{ reasoning: "Limited liability caps shareholders' losses at their investment.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(c)** Only lose what they invested",
                commonErrors: ["Confusing limited liability with tax."],
              },
            },
            {
              id: "ecn11-u7-corporate-q2", difficulty: "foundation", totalMarks: 3,
              stem: "State three differences between a private limited company and a public limited company.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Ltd vs PLC", statement: "Share sale, regulation and disclosure differ." }],
                steps: [
                  { reasoning: "PLC can sell shares to the general public; Ltd cannot.", marks: 1, markCode: "AO1" },
                  { reasoning: "PLC faces stricter legal requirements and more disclosure.", marks: 1, markCode: "AO1" },
                  { reasoning: "PLC can raise more capital through share sales; Ltd raises capital privately.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Public share sales, stricter rules/disclosure, greater capital-raising for PLCs.",
                commonErrors: ["Saying they are identical.", "Confusing Ltd with sole trader."],
              },
            },
            {
              id: "ecn11-u7-corporate-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain the concept of 'perpetual succession' and why it benefits a company.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Perpetual succession", statement: "The business continues regardless of changes in ownership." }],
                steps: [
                  { reasoning: "A company is a separate legal entity from its owners.", marks: 1, markCode: "AO1" },
                  { reasoning: "If a shareholder dies or sells shares, the company continues.", marks: 1, markCode: "AO2" },
                  { reasoning: "Unlike a sole trader, there is no interruption to trading.", marks: 1, markCode: "AO2" },
                  { reasoning: "This gives stability for customers, employees and investors.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Company survives changes in ownership — continuity and stability.",
                commonErrors: ["No link to separate legal entity."],
              },
            },
            {
              id: "ecn11-u7-corporate-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A successful family restaurant wants to raise £2 million to open new branches but the owners do not want to give up control.",
              parts: [
                { label: "a", prompt: "Suggest two forms of business organisation that could raise this capital.", marks: 3 },
                { label: "b", prompt: "Explain the trade-off the owners face between raising capital and losing control.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Capital vs control", statement: "More capital often means sharing ownership and decisions." }],
                steps: [
                  { reasoning: "(a) Private limited company selling shares privately; or a PLC issuing shares publicly.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Alternatively retaining profits over time, or bank loans (though this adds debt).", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) New shareholders gain a say in decisions — the family may lose control.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Keeping control may mean slower growth or higher debt costs.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) Ltd/PLC share issue or retained profits/loans. (b) Capital comes with shared ownership and decisions.",
                commonErrors: ["Suggesting a sole trader — cannot raise this capital.", "No trade-off explained."],
              },
            },
            {
              id: "ecn11-u7-corporate-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A city council runs its own waste collection service, while a private company also offers waste collection to households.",
              parts: [
                { label: "a", prompt: "Identify the sector each organisation operates in and explain the difference.", marks: 3 },
                { label: "b", prompt: "Give two reasons why a government might choose to provide a service itself rather than via a private company.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Public vs private sector", statement: "Public aims at service; private aims at profit." }],
                steps: [
                  { reasoning: "(a) Council = public sector — owned by government, aims to serve the public.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Private company = private sector — owned by shareholders, aims at profit.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Essential services may be unprofitable but necessary — private firms may refuse them.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Public provision ensures accountability and universal coverage.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) Public vs private sector. (b) Service may be unprofitable; accountability/universal coverage.",
                commonErrors: ["Sectors reversed.", "Only one reason given."],
              },
            },
            {
              id: "ecn11-u7-corporate-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Two friends want to build a large tech company. They must choose between a private limited company, a public limited company or staying a partnership.",
              parts: [
                { label: "a", prompt: "Define limited liability.", marks: 2 },
                { label: "b", prompt: "State one advantage and one disadvantage of becoming a PLC.", marks: 3 },
                { label: "c", prompt: "Explain why a partnership would be unsuitable if they want to raise very large amounts of capital.", marks: 2 },
                { label: "d", prompt: "Recommend a business form and justify your recommendation.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Company structures", statement: "Companies offer limited liability and capital access; partnerships offer control but limited capital." }],
                steps: [
                  { reasoning: "(a) Owners' losses limited to the amount they invested.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Advantage: can sell shares publicly to raise large capital.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Disadvantage: stricter rules, more disclosure, loss of control to shareholders.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Partnerships cannot sell shares publicly — capital limited to partners' savings and loans.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Any justified choice — e.g. PLC for maximum capital; Ltd if they want limited liability without public disclosure.", marks: 3, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) loss capped at investment; (b) capital access vs disclosure/control; (c) partnerships cannot sell shares; (d) justified recommendation.",
                commonErrors: ["Unjustified recommendation.", "Confusing Ltd and PLC."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn11-u7-organisation-notes", title: "Types of business organisation — revision notes",
      summary: "Sole traders and partnerships have unlimited liability; companies have limited liability and perpetual succession. PLCs can sell shares publicly; social enterprises and public sector bodies pursue non-profit aims.",
      sections: [
        { heading: "Unincorporated", body: "Sole trader: one owner, all profit, unlimited liability. Partnership: shared capital/skills, shared risk." },
        { heading: "Companies", body: "Ltd = private shares, limited liability. PLC = public share sales, more capital, more regulation." },
        { heading: "Other forms", body: "Franchise = buy a brand/system. Public sector = government-owned. Social enterprise/co-operative = member or mission-owned." },
      ],
    },
  },
  {
    file: "lesson-7-3.ts", exportName: "lesson73",
    lesson: {
      id: "ecn11-u7-lesson-7-3", code: "7-3",
      title: "Business Size, Growth and Economies of Scale",
      goal: "I CAN measure business size and explain economies and diseconomies of scale.",
      standards: ["Edexcel IGCSE Economics 4EC1 — Paper 1: Investigating small businesses"],
      vocabulary: [
        { term: "Business size", definition: "The scale of a business, measured by output, employment, capital, market share or revenue." },
        { term: "Organic growth", definition: "Growth achieved by expanding a firm's own operations, e.g. new products or markets." },
        { term: "Inorganic growth", definition: "Growth achieved by merging with or acquiring other businesses." },
        { term: "Merger", definition: "Two businesses joining to form one larger business." },
        { term: "Takeover", definition: "One business gaining control of another, often against its wishes." },
        { term: "Economies of scale", definition: "Cost advantages a large firm gains as output increases." },
        { term: "Diseconomies of scale", definition: "Cost disadvantages that arise when a firm becomes too large." },
      ],
      concepts: [
        {
          id: "ecn11-u7-growth", title: "Measuring Business Size and Growth",
          skill: "Explain ways to measure business size and methods of business growth.",
          sections: [
            { heading: "Measuring size", body: "Business size can be measured by **output** (units produced or value of sales), **employment** (number of workers), **capital employed** (value of assets), **market share** (percentage of the market served) or **profit/revenue**. Different measures can give different answers — a capital-intensive firm may employ few people but be very large by output." },
            { heading: "Methods of growth", body: "**Organic growth** comes from inside the firm: increasing output, entering new markets, new products or more branches. **Inorganic growth** comes from outside: **mergers** (two firms combine) and **takeovers** (one firm acquires another). Firms may also **franchise** to expand quickly. Growth can bring economies of scale but also risk — large firms can suffer diseconomies and face tougher competition regulation." },
          ],
          keyFormulas: [
            { name: "Market share", statement: "firm's sales ÷ total market sales × 100" },
          ],
          workedExample: {
            problem: "A market sells 2 million phones a year. A firm sells 300,000. What is its market share?",
            solution: "Market share = (300,000 ÷ 2,000,000) × 100 = 15%.",
          },
          questions: [
            {
              id: "ecn11-u7-growth-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which of the following is a measure of business size?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Number of shareholders only" },
                { id: "b", text: "Number of employees" },
                { id: "c", text: "Colour of the logo" },
                { id: "d", text: "Day of the week" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Business size", statement: "Measured by output, employment, capital, market share or revenue." }],
                steps: [{ reasoning: "Employment is one accepted measure of business size.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Number of employees",
                commonErrors: ["Choosing irrelevant options."],
              },
            },
            {
              id: "ecn11-u7-growth-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Distinguish between organic growth and inorganic growth.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Organic vs inorganic growth", statement: "Internal expansion vs mergers and takeovers." }],
                steps: [
                  { reasoning: "Organic growth = expanding from within — more output, new products, new markets.", marks: 1, markCode: "AO1" },
                  { reasoning: "Inorganic growth = growth through mergers or takeovers of other firms.", marks: 1, markCode: "AO1" },
                  { reasoning: "Organic is slower but keeps control; inorganic is faster but risks culture clashes.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Organic = internal expansion; inorganic = mergers/takeovers.",
                commonErrors: ["Definitions swapped."],
              },
            },
            {
              id: "ecn11-u7-growth-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two reasons why a small business might want to grow.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Reasons for growth", statement: "Survival, economies of scale, market position." }],
                steps: [
                  { reasoning: "Economies of scale — larger output can lower average costs.", marks: 1, markCode: "AO2" },
                  { reasoning: "Survival — bigger firms can compete better and survive downturns.", marks: 1, markCode: "AO2" },
                  { reasoning: "Market share — growth can secure a leading position against rivals.", marks: 1, markCode: "AO2" },
                  { reasoning: "More profit potential and ability to reward owners/staff.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Economies of scale, survival, market share, higher profits.",
                commonErrors: ["Only one reason.", "Vague answers."],
              },
            },
            {
              id: "ecn11-u7-growth-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A firm selling 200,000 units in a total market of 1,000,000 units plans to double its sales next year while the market grows to 1,200,000 units.",
              parts: [
                { label: "a", prompt: "Calculate the firm's current market share.", marks: 2 },
                { label: "b", prompt: "Calculate its market share next year and state whether it rose or fell.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Market share", statement: "firm sales ÷ total market sales × 100." }],
                steps: [
                  { reasoning: "(a) Current share = (200,000 ÷ 1,000,000) × 100 = 20%.", marks: 2, markCode: "M", part: "a" },
                  { reasoning: "(b) Next year sales = 400,000; share = (400,000 ÷ 1,200,000) × 100 = 33.3%.", marks: 2, markCode: "M", part: "b" },
                  { reasoning: "(b) Share rose from 20% to 33.3%.", marks: 1, markCode: "A", part: "b" },
                ],
                finalAnswer: "(a) 20%. (b) 33.3% — rose.",
                commonErrors: ["Using old market size for (b).", "Arithmetic slips."],
              },
            },
            {
              id: "ecn11-u7-growth-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A local bakery wants to expand into three neighbouring towns.",
              parts: [
                { label: "a", prompt: "Explain two methods of organic growth the bakery could use.", marks: 3 },
                { label: "b", prompt: "Explain one advantage and one disadvantage of growth through a takeover compared with organic growth.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Growth methods", statement: "Organic keeps control; takeover is fast but risky." }],
                steps: [
                  { reasoning: "(a) Open new branches in the towns; or expand product range/delivery service.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Could also enter new markets or increase output gradually.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Takeover advantage: instant market presence and existing customers; disadvantage: high cost, culture clashes, debt.", marks: 3, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) New branches/products/markets. (b) Takeover = fast but costly and risky.",
                commonErrors: ["Takeover described as organic.", "Only one side of comparison."],
              },
            },
            {
              id: "ecn11-u7-growth-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A small coffee-shop chain is deciding how to grow from 5 to 50 shops.",
              parts: [
                { label: "a", prompt: "Define the term business growth.", marks: 2 },
                { label: "b", prompt: "Name two measures that could be used to show the chain has grown.", marks: 2 },
                { label: "c", prompt: "Explain two ways the chain could achieve organic growth.", marks: 3 },
                { label: "d", prompt: "Evaluate whether a takeover would be a better growth strategy than organic growth for this chain.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Business growth", statement: "Expansion by internal means or acquisition; each has trade-offs." }],
                steps: [
                  { reasoning: "(a) Increase in the size or scale of the business's operations.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Any two: number of shops, revenue, market share, employees.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Open new shops in new areas; expand product range (e.g. food, loyalty scheme).", marks: 3, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Takeover gives instant scale but costs more and risks culture clashes; organic keeps control but is slower — judgement depends on funds and speed needed.", marks: 3, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) expansion of scale; (b) two measures; (c) two organic methods; (d) balanced evaluation.",
                commonErrors: ["One-sided evaluation in (d).", "Missing a part."],
              },
            },
          ],
        },
        {
          id: "ecn11-u7-eos", title: "Economies and Diseconomies of Scale",
          skill: "Explain internal and external economies and diseconomies of scale.",
          sections: [
            { heading: "Economies of scale", body: "As output rises, **average cost per unit falls** — this is economies of scale. **Internal economies** come from within the firm: **purchasing** (bulk-buying discounts), **marketing** (spreading advertising over more units), **technical** (specialist machinery), **managerial** (division of labour and expert managers) and **financial** (borrowing at lower interest). **External economies** come from the industry or location growing — e.g. a skilled labour pool, specialist suppliers and better transport links." },
            { heading: "Diseconomies of scale", body: "Very large firms can face **diseconomies of scale** — average costs rise again. Causes: communication breakdowns in tall hierarchies, worker alienation and demotivation, coordination problems, and industrial relations disputes. **External diseconomies** affect the whole industry — e.g. congestion, rising land and labour costs as firms cluster together." },
          ],
          keyFormulas: [
            { name: "Average cost", statement: "total cost ÷ output" },
          ],
          workedExample: {
            problem: "A firm produces 1,000 units at total cost £10,000, then 2,000 units at total cost £16,000. Calculate average cost at each output.",
            solution: "AC at 1,000 = 10,000 ÷ 1,000 = £10. AC at 2,000 = 16,000 ÷ 2,000 = £8. Average cost fell — economies of scale.",
          },
          questions: [
            {
              id: "ecn11-u7-eos-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What happens to average cost when a firm enjoys economies of scale?",
              response: { type: "mcq", choices: [
                { id: "a", text: "It rises" },
                { id: "b", text: "It stays the same" },
                { id: "c", text: "It falls" },
                { id: "d", text: "It becomes zero" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Economies of scale", statement: "Average cost falls as output rises." }],
                steps: [{ reasoning: "Economies of scale mean cost per unit decreases with higher output.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(c)** It falls",
                commonErrors: ["Confusing economies with diseconomies."],
              },
            },
            {
              id: "ecn11-u7-eos-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three examples of internal economies of scale.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Internal economies", statement: "Cost advantages from within the firm." }],
                steps: [
                  { reasoning: "Purchasing — bulk-buying discounts from suppliers.", marks: 1, markCode: "AO1" },
                  { reasoning: "Technical — specialist machinery producing at lower cost.", marks: 1, markCode: "AO1" },
                  { reasoning: "Managerial/marketing/financial — e.g. division of labour, spread advertising, cheaper borrowing.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Any three of: purchasing, technical, managerial, marketing, financial.",
                commonErrors: ["Giving external economies.", "Repeating one type."],
              },
            },
            {
              id: "ecn11-u7-eos-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain the difference between internal and external economies of scale.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Internal vs external economies", statement: "Firm-level vs industry/location-level advantages." }],
                steps: [
                  { reasoning: "Internal economies arise within the firm — e.g. bulk buying, specialist machinery.", marks: 1, markCode: "AO1" },
                  { reasoning: "External economies arise outside the firm but benefit it — e.g. skilled labour pool, suppliers nearby.", marks: 1, markCode: "AO1" },
                  { reasoning: "Internal economies depend on the firm's own decisions.", marks: 1, markCode: "AO2" },
                  { reasoning: "External economies depend on the growth of the whole industry or location.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Internal = firm's own efficiencies; external = industry/location benefits.",
                commonErrors: ["Definitions swapped."],
              },
            },
            {
              id: "ecn11-u7-eos-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A car manufacturer produces 50,000 cars at total cost £250m, then 100,000 cars at total cost £420m.",
              parts: [
                { label: "a", prompt: "Calculate the average cost per car at each level of output.", marks: 3 },
                { label: "b", prompt: "State whether economies or diseconomies of scale are present and justify your answer.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Average cost", statement: "total cost ÷ output." }],
                steps: [
                  { reasoning: "(a) AC at 50,000 = 250,000,000 ÷ 50,000 = £5,000 per car.", marks: 2, markCode: "M", part: "a" },
                  { reasoning: "(a) AC at 100,000 = 420,000,000 ÷ 100,000 = £4,200 per car.", marks: 1, markCode: "M", part: "a" },
                  { reasoning: "(b) Economies of scale — average cost fell from £5,000 to £4,200 as output doubled.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) £5,000 and £4,200. (b) Economies — AC fell.",
                commonErrors: ["Dividing cost by wrong output figure.", "Wrong conclusion."],
              },
            },
            {
              id: "ecn11-u7-eos-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A national supermarket chain has grown so large that communication between head office and stores has become difficult.",
              parts: [
                { label: "a", prompt: "Explain two causes of diseconomies of scale the chain may face.", marks: 3 },
                { label: "b", prompt: "Suggest two ways management could reduce these diseconomies.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Diseconomies of scale", statement: "Size can raise average costs through coordination and motivation problems." }],
                steps: [
                  { reasoning: "(a) Communication breakdowns — messages take longer through many layers.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Worker alienation — staff feel like cogs, losing motivation.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Coordination problems — departments fail to work together.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Flatten the hierarchy / improve communication systems.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Empower workers, improve motivation, delegate decisions.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Communication, alienation, coordination. (b) Flatten structure, motivate/delegate.",
                commonErrors: ["Diseconomies confused with economies.", "Suggestions unrelated to causes."],
              },
            },
            {
              id: "ecn11-u7-eos-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A bakery doubles output from 10,000 to 20,000 loaves. Total cost rises from £30,000 to £50,000.",
              parts: [
                { label: "a", prompt: "Calculate average cost per loaf at each output level.", marks: 3 },
                { label: "b", prompt: "Name three types of internal economy the bakery might be experiencing.", marks: 3 },
                { label: "c", prompt: "Explain one external economy the bakery might enjoy if many bakeries cluster in the area.", marks: 2 },
                { label: "d", prompt: "Evaluate whether continued growth would always reduce average cost.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Average cost and scale", statement: "AC = total cost ÷ output; economies fall, diseconomies rise." }],
                steps: [
                  { reasoning: "(a) AC at 10,000 = 30,000 ÷ 10,000 = £3 per loaf.", marks: 2, markCode: "M", part: "a" },
                  { reasoning: "(a) AC at 20,000 = 50,000 ÷ 20,000 = £2.50 per loaf.", marks: 1, markCode: "M", part: "a" },
                  { reasoning: "(b) Any three: purchasing (bulk flour), technical (bigger ovens), managerial (specialist staff), marketing, financial.", marks: 3, markCode: "AO1", part: "b" },
                  { reasoning: "(c) E.g. skilled bakers available locally or specialist suppliers nearby.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) No — beyond a point diseconomies (communication, motivation) can raise AC.", marks: 2, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) £3 and £2.50. (b) three economies. (c) labour pool/suppliers. (d) not always — diseconomies possible.",
                commonErrors: ["Calculation errors.", "One-sided answer in (d)."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn11-u7-scale-notes", title: "Growth and economies of scale — revision notes",
      summary: "Measure size by output, employment, capital, market share. Grow organically or by merger/takeover. Economies of scale lower average cost; diseconomies raise it.",
      sections: [
        { heading: "Measuring size", body: "Output, employment, capital employed, market share and revenue are all valid measures." },
        { heading: "Growth", body: "Organic = internal expansion; inorganic = mergers and takeovers." },
        { heading: "Scale", body: "Internal economies: purchasing, technical, managerial, marketing, financial. Diseconomies: communication breakdown, alienation." },
      ],
    },
  },
];
