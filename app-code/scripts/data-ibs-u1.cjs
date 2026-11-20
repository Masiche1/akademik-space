module.exports = [
  {
    file: "lesson-1-1.ts", exportName: "lesson251",
    lesson: {
      id: "cieibs-u1-lesson-1-1", code: "1-1",
      title: "Business Activity, Enterprise and Entrepreneurship",
      goal: "I CAN define business activity, enterprise and entrepreneurship and explain their roles.",
      standards: ["Cambridge IGCSE Business Studies 0450", "Paper 1: understanding business activity"],
      vocabulary: [
        { term: "Business activity", definition: "Process of producing and selling goods/services." },
        { term: "Enterprise", definition: "Organisation that produces/sells goods or services." },
        { term: "Entrepreneur", definition: "Person who starts and runs a business, taking risks." },
        { term: "Factors of production", definition: "Land, labour, capital, enterprise." },
        { term: "Added value", definition: "Increase in value from production process." },
        { term: "Opportunity cost", definition: "Next best alternative foregone." },
      ],
      concept: {
        id: "cieibs-u1-s1-ent", title: "Business activity and enterprise",
        skill: "Understand business fundamentals at IGCSE level.",
        sections: [
          { heading: "Business activity", body: "Business activity involves producing goods/services to satisfy needs/wants. Factors of production: land (natural resources), labour (human effort), capital (money/machinery), enterprise (entrepreneurship). Added value = selling price minus cost of inputs." },
          { heading: "Enterprise and entrepreneurship", body: "Enterprise = business organisation. Entrepreneur = person who identifies opportunities, takes risks, organises resources. Entrepreneurs drive innovation, create jobs, contribute to economic growth." },
        ],
        keyFormulas: [
          { name: "Factors", statement: "land, labour, capital, enterprise" },
          { name: "Added value", statement: "selling price - input costs" },
          { name: "Opportunity cost", statement: "next best alternative" },
        ],
        workedExample: {
          problem: "A farmer grows wheat, mills it into flour, sells to baker who makes bread. Where is value added?",
          solution: "Each stage adds value: wheat→flour (processing), flour→bread (baking). Total value = bread price - wheat cost.",
        },
        questions: [
          {
            id: "cieibs-u1-ba-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What are the factors of production?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Land, labour, capital, enterprise" }, { id: "b", text: "Money, machines, materials, managers" }, { id: "c", text: "Supply, demand, price, profit" }, { id: "d", text: "Raw materials, finished goods, services, profits" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Factors of production", statement: "Land, labour, capital, enterprise." }],
              steps: [{ reasoning: "Four factors: land, labour, capital, enterprise.", marks: 1, markCode: "M" }],
              finalAnswer: "Land, labour, capital, enterprise",
            },
          },
          {
            id: "cieibs-u1-ba-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is an entrepreneur?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Entrepreneur", statement: "Business starter taking risks." }],
              steps: [
                { reasoning: "Person who starts and runs a business.", marks: 1, markCode: "M" },
                { reasoning: "Takes financial risks, identifies opportunities.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Business starter taking risks",
            },
          },
          {
            id: "cieibs-u1-ba-q3", difficulty: "core", totalMarks: 3,
            stem: "What is added value? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Added value", statement: "Value increase from production." }],
              steps: [
                { reasoning: "Added value = selling price - input costs.", marks: 1, markCode: "M" },
                { reasoning: "Example: wood→furniture adds value.", marks: 1, markCode: "M" },
                { reasoning: "Shows production creates value.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Value increase from production",
            },
          },
          {
            id: "cieibs-u1-ba-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define business activity, enterprise, entrepreneur, factors of production, added value, opportunity cost. (b) What are the four factors? (c) What is an entrepreneur? (d) What is added value? (e) What is opportunity cost? (f) Give an example of added value. (g) Why do entrepreneurs matter? (h) Explain how a bakery creates added value.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Business fundamentals", statement: "Activity, enterprise, value." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Land, labour, capital, enterprise.", marks: 1, markCode: "M" },
                { reasoning: "(c) Business starter taking risks.", marks: 1, markCode: "M" },
                { reasoning: "(d) Selling price minus input costs.", marks: 1, markCode: "M" },
                { reasoning: "(e) Next best alternative foregone.", marks: 1, markCode: "M" },
                { reasoning: "(f) Valid added value example.", marks: 1, markCode: "M" },
                { reasoning: "(g) Create jobs, innovate, drive growth.", marks: 1, markCode: "M" },
                { reasoning: "(h) Flour→bread adds value through baking.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Business activity and enterprise.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieibs-u1-ba-notes", title: "Business activity — notes",
      summary: "Business produces/sells goods/services. Factors: land, labour, capital, enterprise. Entrepreneurs take risks.",
      sections: [
        { heading: "Key idea", body: "Business activity transforms inputs into outputs, adding value." },
        { heading: "Entrepreneurs", body: "Identify opportunities, organise resources, take risks." },
      ],
    },
  },
  {
    file: "lesson-1-2.ts", exportName: "lesson252",
    lesson: {
      id: "cieibs-u1-lesson-1-2", code: "1-2",
      title: "Types of Business Organisation",
      goal: "I CAN compare sole traders, partnerships, private and public limited companies.",
      standards: ["Cambridge IGCSE Business Studies 0450", "Paper 1: types of business"],
      vocabulary: [
        { term: "Sole trader", definition: "Business owned and run by one person." },
        { term: "Partnership", definition: "Business owned by 2+ people sharing profits." },
        { term: "Private limited company", definition: "Company with limited liability, shares not publicly traded." },
        { term: "Public limited company", definition: "Company selling shares to public on stock exchange." },
        { term: "Limited liability", definition: "Owners' personal assets protected from business debts." },
        { term: "Shareholder", definition: "Owner of company shares." },
      ],
      concept: {
        id: "cieibs-u1-s2-org", title: "Business organisation types",
        skill: "Compare business structures at IGCSE level.",
        sections: [
          { heading: "Unincorporated businesses", body: "Sole trader: one owner, unlimited liability, easy to set up, keeps all profit. Partnership: 2+ owners, shared profits/liabilities, more capital, shared decisions." },
          { heading: "Incorporated companies", body: "Private limited (Ltd): limited liability, shares not sold publicly, easier to raise capital than sole trader. Public limited (PLC): sells shares publicly, limited liability, can raise large capital, more regulations." },
        ],
        keyFormulas: [
          { name: "Sole trader", statement: "1 owner, unlimited liability" },
          { name: "Partnership", statement: "2+ owners, shared liability" },
          { name: "Ltd/PLC", statement: "limited liability, shares" },
        ],
        workedExample: {
          problem: "Why might a growing business convert from sole trader to Ltd?",
          solution: "Limited liability protects personal assets; can issue shares to raise capital; more credibility with customers/suppliers.",
        },
        questions: [
          {
            id: "cieibs-u1-org-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a sole trader?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Business owned and run by one person" }, { id: "b", text: "Company with shareholders" }, { id: "c", text: "Partnership of two people" }, { id: "d", text: "Government business" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Sole trader", statement: "One-person business." }],
              steps: [{ reasoning: "Sole trader = one owner, unlimited liability.", marks: 1, markCode: "M" }],
              finalAnswer: "One-person business",
            },
          },
          {
            id: "cieibs-u1-org-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is limited liability?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Limited liability", statement: "Protected personal assets." }],
              steps: [
                { reasoning: "Owners' personal assets protected from business debts.", marks: 1, markCode: "M" },
                { reasoning: "Applies to companies (Ltd/PLC).", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Protected personal assets",
            },
          },
          {
            id: "cieibs-u1-org-q3", difficulty: "core", totalMarks: 3,
            stem: "Compare sole trader and private limited company.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Business comparison", statement: "Structure comparison." }],
              steps: [
                { reasoning: "Sole trader: unlimited liability, easy setup, keeps all profit.", marks: 1, markCode: "M" },
                { reasoning: "Ltd: limited liability, can raise capital via shares.", marks: 1, markCode: "M" },
                { reasoning: "Ltd more complex to set up.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Sole trader vs Ltd comparison",
            },
          },
          {
            id: "cieibs-u1-org-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define sole trader, partnership, private limited company, public limited company, limited liability, shareholder. (b) What is a sole trader? (c) What is a partnership? (d) What is a private limited company? (e) What is a public limited company? (f) What is limited liability? (g) Why convert to Ltd? (h) Choose the best structure for a small bakery.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Business structures", statement: "Comparison and selection." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) One-person business.", marks: 1, markCode: "M" },
                { reasoning: "(c) Shared ownership business.", marks: 1, markCode: "M" },
                { reasoning: "(d) Limited liability, private shares.", marks: 1, markCode: "M" },
                { reasoning: "(e) Public shares on stock exchange.", marks: 1, markCode: "M" },
                { reasoning: "(f) Protected personal assets.", marks: 1, markCode: "M" },
                { reasoning: "(g) Liability protection, capital raising.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid structure choice with reasoning.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Business organisation types.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieibs-u1-org-notes", title: "Business structures — notes",
      summary: "Sole trader=1 owner; partnership=shared; Ltd/PLC=limited liability+shares. Choose by size/risk/capital needs.",
      sections: [
        { heading: "Key idea", body: "Liability protection vs simplicity — trade-off in business structure choice." },
        { heading: "PLC", body: "Public shares enable large capital raising but more regulation." },
      ],
    },
  },
  {
    file: "lesson-1-3.ts", exportName: "lesson253",
    lesson: {
      id: "cieibs-u1-lesson-1-3", code: "1-3",
      title: "Business Objectives and Stakeholders",
      goal: "I CAN explain business objectives and identify stakeholder interests.",
      standards: ["Cambridge IGCSE Business Studies 0450", "Paper 1: objectives and stakeholders"],
      vocabulary: [
        { term: "Business objective", definition: "Goal the business aims to achieve." },
        { term: "Profit maximisation", definition: "Maximising profit as primary objective." },
        { term: "Market share", definition: "Proportion of market controlled by business." },
        { term: "Survival", definition: "Staying in business as primary objective." },
        { term: "Stakeholder", definition: "Person/group affected by business decisions." },
        { term: "Shareholder", definition: "Owner of company shares — stakeholder." },
      ],
      concept: {
        id: "cieibs-u1-s3-obj", title: "Objectives and stakeholders",
        skill: "Understand business goals and stakeholder interests.",
        sections: [
          { heading: "Business objectives", body: "Profit maximisation: highest profit. Survival: stay in business (especially small firms/new ventures). Market share: dominate market. Growth: expand size/reach. Social objectives: ethical/environmental goals." },
          { heading: "Stakeholders", body: "Owners/shareholders want profit/dividends. Employees want job security/wages. Customers want quality/price. Suppliers want payment. Government wants tax/jobs. Local community wants employment/environment." },
        ],
        keyFormulas: [
          { name: "Profit max", statement: "highest profit objective" },
          { name: "Survival", statement: "stay in business" },
          { name: "Stakeholders", statement: "owners, employees, customers, suppliers, government, community" },
        ],
        workedExample: {
          problem: "A company wants to increase prices but customers complain. How do stakeholders conflict?",
          solution: "Shareholders want profit (higher prices OK); customers want low prices (object); employees may fear losing customers/jobs.",
        },
        questions: [
          {
            id: "cieibs-u1-obj-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a business objective?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Goal the business aims to achieve" }, { id: "b", text: "A type of tax" }, { id: "c", text: "A marketing strategy" }, { id: "d", text: "A legal requirement" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Business objective", statement: "Business goal." }],
              steps: [{ reasoning: "Objective = what business aims to achieve.", marks: 1, markCode: "M" }],
              finalAnswer: "Business goal",
            },
          },
          {
            id: "cieibs-u1-obj-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name three stakeholders.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Stakeholders", statement: "Affected parties." }],
              steps: [
                { reasoning: "Three valid stakeholders (e.g. owners, employees, customers).", marks: 1, markCode: "M" },
                { reasoning: "All correctly identified.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Three stakeholders",
            },
          },
          {
            id: "cieibs-u1-obj-q3", difficulty: "core", totalMarks: 3,
            stem: "What is profit maximisation? When might survival be more important?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Objectives", statement: "Profit vs survival." }],
              steps: [
                { reasoning: "Profit maximisation = highest possible profit.", marks: 1, markCode: "M" },
                { reasoning: "Survival important for new/small businesses.", marks: 1, markCode: "M" },
                { reasoning: "Survival precedes profit in early stages.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Profit vs survival objectives",
            },
          },
          {
            id: "cieibs-u1-obj-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define business objective, profit maximisation, market share, survival, stakeholder, shareholder. (b) What is profit maximisation? (c) What is market share? (d) What is survival? (e) Name four stakeholders. (f) What do shareholders want? (g) What do employees want? (h) Explain stakeholder conflict in a business decision.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Objectives/stakeholders", statement: "Goals and interests." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Highest profit objective.", marks: 1, markCode: "M" },
                { reasoning: "(c) Market proportion controlled.", marks: 1, markCode: "M" },
                { reasoning: "(d) Staying in business.", marks: 1, markCode: "M" },
                { reasoning: "(e) Four valid stakeholders.", marks: 1, markCode: "M" },
                { reasoning: "(f) Profit/dividends.", marks: 1, markCode: "M" },
                { reasoning: "(g) Job security/wages.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid stakeholder conflict explanation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Business objectives and stakeholders.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieibs-u1-obj-notes", title: "Objectives — notes",
      summary: "Objectives: profit max, survival, market share, growth, social. Stakeholders have conflicting interests.",
      sections: [
        { heading: "Key idea", body: "Businesses balance competing stakeholder needs while pursuing objectives." },
        { heading: "Conflict", body: "Shareholders want profit; employees want security; customers want low prices." },
      ],
    },
  },
  {
    file: "lesson-1-4.ts", exportName: "lesson254",
    lesson: {
      id: "cieibs-u1-lesson-1-4", code: "1-4",
      title: "Business Growth and Size",
      goal: "I CAN explain internal and external growth and measure business size.",
      standards: ["Cambridge IGCSE Business Studies 0450", "Paper 1: growth and size"],
      vocabulary: [
        { term: "Internal growth", definition: "Business expands using its own resources." },
        { term: "External growth", definition: "Business grows by merging with or acquiring others." },
        { term: "Merger", definition: "Two businesses combine into one." },
        { term: "Takeover", definition: "One business buys control of another." },
        { term: "Economies of scale", definition: "Cost advantages from increased size." },
        { term: "Turnover", definition: "Total revenue from sales." },
      ],
      concept: {
        id: "cieibs-u1-s4-grow", title: "Business growth",
        skill: "Understand growth strategies and measurement.",
        sections: [
          { heading: "Growth methods", body: "Internal: organic growth through reinvested profits, new products, markets. External: merger (combine equals), takeover (acquire control), franchise (license business model)." },
          { heading: "Measuring size", body: "Turnover (revenue), number of employees, market share, profit. Economies of scale: bulk buying discounts, spreading fixed costs, specialisation — larger businesses can be more efficient." },
        ],
        keyFormulas: [
          { name: "Internal growth", statement: "organic expansion" },
          { name: "External growth", statement: "merger/takeover/franchise" },
          { name: "Size measures", statement: "turnover, employees, market share, profit" },
        ],
        workedExample: {
          problem: "A small bakery opens a second location using profits. What type of growth?",
          solution: "Internal growth — expanding using own resources without merging with another business.",
        },
        questions: [
          {
            id: "cieibs-u1-gr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is internal growth?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Business expands using its own resources" }, { id: "b", text: "Business merges with another" }, { id: "c", text: "Business is sold" }, { id: "d", text: "Business closes" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Internal growth", statement: "Organic expansion." }],
              steps: [{ reasoning: "Internal = organic growth using own resources.", marks: 1, markCode: "M" }],
              finalAnswer: "Organic expansion",
            },
          },
          {
            id: "cieibs-u1-gr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a merger?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Merger", statement: "Two businesses combine." }],
              steps: [
                { reasoning: "Two businesses combine into one.", marks: 1, markCode: "M" },
                { reasoning: "Typically similar-sized companies.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Two businesses combine",
            },
          },
          {
            id: "cieibs-u1-gr-q3", difficulty: "core", totalMarks: 3,
            stem: "What are economies of scale? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Economies of scale", statement: "Cost advantages from size." }],
              steps: [
                { reasoning: "Cost advantages from increased size.", marks: 1, markCode: "M" },
                { reasoning: "Example: bulk buying discounts.", marks: 1, markCode: "M" },
                { reasoning: "Larger firms can be more efficient.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Cost advantages from size",
            },
          },
          {
            id: "cieibs-u1-gr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define internal growth, external growth, merger, takeover, economies of scale, turnover. (b) What is internal growth? (c) What is external growth? (d) What is a merger? (e) What is a takeover? (f) What are economies of scale? (g) How measure business size? (h) Evaluate merger vs organic growth for a small business.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Business growth", statement: "Methods, measurement." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Organic expansion.", marks: 1, markCode: "M" },
                { reasoning: "(c) Mergers/takeovers/franchises.", marks: 1, markCode: "M" },
                { reasoning: "(d) Two businesses combine.", marks: 1, markCode: "M" },
                { reasoning: "(e) One buys control of another.", marks: 1, markCode: "M" },
                { reasoning: "(f) Cost advantages from size.", marks: 1, markCode: "M" },
                { reasoning: "(g) Turnover, employees, market share, profit.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation with reasoning.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Business growth methods and measurement.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieibs-u1-gr-notes", title: "Growth — notes",
      summary: "Internal=organic; external=merger/takeover. Size measured by turnover, employees, market share. Economies of scale reduce costs.",
      sections: [
        { heading: "Key idea", body: "Growth strategies depend on business goals, resources and market conditions." },
        { heading: "Economies of scale", body: "Larger businesses achieve lower unit costs through efficiency." },
      ],
    },
  },
  {
    file: "lesson-1-5.ts", exportName: "lesson255",
    lesson: {
      id: "cieibs-u1-lesson-1-5", code: "1-5",
      title: "Revenue, Costs and Profit",
      goal: "I CAN calculate revenue, costs, profit and break-even point.",
      standards: ["Cambridge IGCSE Business Studies 0450", "Paper 1: financial performance"],
      vocabulary: [
        { term: "Revenue", definition: "Total income from sales." },
        { term: "Fixed costs", definition: "Costs that don't change with output." },
        { term: "Variable costs", definition: "Costs that change with output." },
        { term: "Total costs", definition: "Fixed + variable costs." },
        { term: "Profit", definition: "Revenue minus total costs." },
        { term: "Break-even", definition: "Point where revenue equals total costs." },
      ],
      concept: {
        id: "cieibs-u1-s5-fin", title: "Financial performance",
        skill: "Calculate revenue, costs, profit and break-even.",
        sections: [
          { heading: "Revenue and costs", body: "Revenue = price × quantity sold. Fixed costs: rent, salaries, insurance — don't change with output. Variable costs: materials, labour per unit — change with output. Total costs = fixed + variable." },
          { heading: "Profit and break-even", body: "Profit = revenue - total costs. Loss = total costs - revenue. Break-even point: revenue = total costs (no profit/loss). Formula: BEP (units) = fixed costs / (price - variable cost per unit)." },
        ],
        keyFormulas: [
          { name: "Revenue", statement: "price × quantity" },
          { name: "Total costs", statement: "fixed + variable" },
          { name: "Profit", statement: "revenue - total costs" },
          { name: "Break-even", statement: "fixed costs / (price - variable cost)" },
        ],
        workedExample: {
          problem: "Fixed costs = $5000, price = $10, variable cost = $6/unit. Find break-even point and profit at 2000 units.",
          solution: "BEP = 5000 / (10-6) = 1250 units. At 2000: Revenue = 2000×10 = $20000. Costs = 5000 + (2000×6) = $17000. Profit = $3000.",
        },
        questions: [
          {
            id: "cieibs-u1-fin-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is revenue?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Total income from sales" }, { id: "b", text: "Total costs" }, { id: "c", text: "Profit" }, { id: "d", text: "A type of tax" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Revenue", statement: "Total sales income." }],
              steps: [{ reasoning: "Revenue = total income from sales.", marks: 1, markCode: "M" }],
              finalAnswer: "Total sales income",
            },
          },
          {
            id: "cieibs-u1-fin-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between fixed and variable costs?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Fixed vs variable", statement: "Constant vs changing." }],
              steps: [
                { reasoning: "Fixed costs don't change with output.", marks: 1, markCode: "M" },
                { reasoning: "Variable costs change with output.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Constant vs changing costs",
            },
          },
          {
            id: "cieibs-u1-fin-q3", difficulty: "core", totalMarks: 3,
            stem: "Fixed costs = $2000, price = $5, variable cost = $3. Find break-even point.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Break-even", statement: "BEP calculation." }],
              steps: [
                { reasoning: "BEP = fixed costs / (price - variable cost).", marks: 1, markCode: "M" },
                { reasoning: "BEP = 2000 / (5-3) = 1000 units.", marks: 1, markCode: "M" },
                { reasoning: "Answer: 1000 units.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "1000 units",
            },
          },
          {
            id: "cieibs-u1-fin-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define revenue, fixed costs, variable costs, total costs, profit, break-even. (b) What is revenue? (c) What are fixed costs? Give 2 examples. (d) What are variable costs? Give 2 examples. (e) What is profit? (f) What is break-even? (g) Calculate: FC=$3000, P=$8, VC=$5, Q=1000. (h) Find BEP and profit.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Financial performance", statement: "Revenue, costs, profit, BEP." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Total sales income.", marks: 1, markCode: "M" },
                { reasoning: "(c) Rent, insurance; don't change with output.", marks: 1, markCode: "M" },
                { reasoning: "(d) Materials, labour; change with output.", marks: 1, markCode: "M" },
                { reasoning: "(e) Revenue - total costs.", marks: 1, markCode: "M" },
                { reasoning: "(f) Revenue = total costs point.", marks: 1, markCode: "M" },
                { reasoning: "(g) Revenue=8000, costs=8000, profit=0.", marks: 1, markCode: "M" },
                { reasoning: "(h) BEP=3000/(8-5)=1000 units.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Revenue, costs, profit, break-even.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieibs-u1-fin-notes", title: "Financial performance — notes",
      summary: "Revenue=price×qty; costs=fixed+variable; profit=revenue-costs; BEP=FC/(price-VC).",
      sections: [
        { heading: "Key idea", body: "Break-even shows minimum sales needed to avoid losses." },
        { heading: "Profit", body: "Profit = revenue - total costs. Loss when costs exceed revenue." },
      ],
    },
  },
  {
    file: "lesson-1-6.ts", exportName: "lesson256",
    lesson: {
      id: "cieibs-u1-lesson-1-6", code: "1-6",
      title: "Cash Flow and Cash Flow Forecasts",
      goal: "I CAN explain cash flow and interpret cash flow forecasts.",
      standards: ["Cambridge IGCSE Business Studies 0450", "Paper 1: cash flow"],
      vocabulary: [
        { term: "Cash flow", definition: "Movement of money in and out of business." },
        { term: "Cash inflow", definition: "Money coming into business." },
        { term: "Cash outflow", definition: "Money going out of business." },
        { term: "Cash flow forecast", definition: "Prediction of future cash movements." },
        { term: "Cash flow problem", definition: "Insufficient cash despite profit." },
        { term: "Liquidity", definition: "Ability to meet short-term financial obligations." },
      ],
      concept: {
        id: "cieibs-u1-s6-cash", title: "Cash flow",
        skill: "Understand cash flow management.",
        sections: [
          { heading: "Cash flow basics", body: "Cash inflow: sales receipts, loans, investments. Cash outflow: purchases, wages, rent, taxes. Net cash flow = inflows - outflows. Positive = surplus; negative = deficit." },
          { heading: "Cash flow problems", body: "Profitable businesses can still fail if cash flow negative — customers pay late, inventory ties up cash. Solutions: credit control, inventory management, overdrafts, loans." },
        ],
        keyFormulas: [
          { name: "Net cash flow", statement: "inflows - outflows" },
          { name: "Liquidity", statement: "short-term cash availability" },
        ],
        workedExample: {
          problem: "A business has $10,000 sales but $12,000 costs. Is it profitable? Explain cash flow implications.",
          solution: "If costs exceed revenue, it's loss-making. But even profitable businesses can have cash flow problems if customers pay late or inventory ties up cash.",
        },
        questions: [
          {
            id: "cieibs-u1-cf-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is cash flow?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Movement of money in and out of business" }, { id: "b", text: "Total profit" }, { id: "c", text: "A type of tax" }, { id: "d", text: "A marketing strategy" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Cash flow", statement: "Money movement." }],
              steps: [{ reasoning: "Cash flow = money in/out of business.", marks: 1, markCode: "M" }],
              finalAnswer: "Money movement",
            },
          },
          {
            id: "cieibs-u1-cf-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a cash flow forecast?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Cash flow forecast", statement: "Future cash prediction." }],
              steps: [
                { reasoning: "Prediction of future cash movements.", marks: 1, markCode: "M" },
                { reasoning: "Helps plan for cash needs.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Future cash prediction",
            },
          },
          {
            id: "cieibs-u1-cf-q3", difficulty: "core", totalMarks: 3,
            stem: "Why can a profitable business have cash flow problems?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Cash flow problems", statement: "Profit vs cash." }],
              steps: [
                { reasoning: "Customers pay late — revenue recognised but cash not received.", marks: 1, markCode: "M" },
                { reasoning: "Inventory ties up cash — bought but not sold.", marks: 1, markCode: "M" },
                { reasoning: "Timing mismatch between income and expenses.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Timing/cash vs profit mismatch",
            },
          },
          {
            id: "cieibs-u1-cf-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define cash flow, cash inflow, cash outflow, cash flow forecast, cash flow problem, liquidity. (b) What is cash flow? (c) What is a cash flow forecast? (d) Give 3 cash inflows. (e) Give 3 cash outflows. (f) What is net cash flow? (g) Why can profitable businesses fail? (h) How would you manage cash flow for a seasonal business?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Cash flow", statement: "Management, forecasting." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Money movement in/out.", marks: 1, markCode: "M" },
                { reasoning: "(c) Future cash prediction.", marks: 1, markCode: "M" },
                { reasoning: "(d) Three valid inflows.", marks: 1, markCode: "M" },
                { reasoning: "(e) Three valid outflows.", marks: 1, markCode: "M" },
                { reasoning: "(f) Inflows - outflows.", marks: 1, markCode: "M" },
                { reasoning: "(g) Late payments, inventory, timing.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid seasonal cash management.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Cash flow management.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieibs-u1-cf-notes", title: "Cash flow — notes",
      summary: "Cash flow=money in/out; forecast=predict future; profitable≠cash positive. Manage timing and inventory.",
      sections: [
        { heading: "Key idea", body: "Cash flow problems kill businesses even when profitable." },
        { heading: "Management", body: "Credit control, inventory management, overdrafts, loans." },
      ],
    },
  },
  {
    file: "lesson-1-7.ts", exportName: "lesson257",
    lesson: {
      id: "cieibs-u1-lesson-1-7", code: "1-7",
      title: "Market Research and Marketing",
      goal: "I CAN explain market research methods and the marketing mix.",
      standards: ["Cambridge IGCSE Business Studies 0450", "Paper 1: marketing"],
      vocabulary: [
        { term: "Market research", definition: "Gathering information about markets/customers." },
        { term: "Primary research", definition: "New data collected directly." },
        { term: "Secondary research", definition: "Using existing data." },
        { term: "Marketing mix", definition: "Product, price, place, promotion." },
        { term: "Target market", definition: "Specific customer group business aims to serve." },
        { term: "Market segmentation", definition: "Dividing market into groups." },
      ],
      concept: {
        id: "cieibs-u1-s7-mkt", title: "Market research and marketing",
        skill: "Understand research methods and marketing mix.",
        sections: [
          { heading: "Market research", body: "Primary: questionnaires, interviews, observations, experiments — new data. Secondary: government statistics, reports, competitor data — existing data. Both inform marketing decisions." },
          { heading: "Marketing mix", body: "Product: features/quality. Price: pricing strategy. Place: distribution channels. Promotion: advertising/PR. Target market: specific customer segment. Segmentation: divide market by age, income, location, lifestyle." },
        ],
        keyFormulas: [
          { name: "Primary", statement: "new data collected" },
          { name: "Secondary", statement: "existing data used" },
          { name: "4Ps", statement: "product, price, place, promotion" },
        ],
        workedExample: {
          problem: "A new coffee shop wants to understand its market. What research should it do?",
          solution: "Primary: survey potential customers, observe foot traffic. Secondary: local demographics, competitor analysis.",
        },
        questions: [
          {
            id: "cieibs-u1-mr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is market research?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Gathering information about markets/customers" }, { id: "b", text: "Selling products" }, { id: "c", text: "A type of tax" }, { id: "d", text: "A legal requirement" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Market research", statement: "Market information gathering." }],
              steps: [{ reasoning: "Research = gathering market/customer info.", marks: 1, markCode: "M" }],
              finalAnswer: "Market information gathering",
            },
          },
          {
            id: "cieibs-u1-mr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the marketing mix?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Marketing mix", statement: "4Ps." }],
              steps: [
                { reasoning: "Product, price, place, promotion.", marks: 1, markCode: "M" },
                { reasoning: "Four elements of marketing strategy.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Product, price, place, promotion",
            },
          },
          {
            id: "cieibs-u1-mr-q3", difficulty: "core", totalMarks: 3,
            stem: "Compare primary and secondary research.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Research types", statement: "Primary vs secondary." }],
              steps: [
                { reasoning: "Primary = new data collected directly.", marks: 1, markCode: "M" },
                { reasoning: "Secondary = existing data used.", marks: 1, markCode: "M" },
                { reasoning: "Primary more expensive but tailored; secondary cheaper but less specific.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "New vs existing data",
            },
          },
          {
            id: "cieibs-u1-mr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define market research, primary research, secondary research, marketing mix, target market, market segmentation. (b) What is market research? (c) What is primary research? Give 2 examples. (d) What is secondary research? Give 2 examples. (e) What is the marketing mix? (f) What are the 4Ps? (g) What is market segmentation? (h) Design a marketing plan for a new bakery.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Marketing", statement: "Research, mix, segmentation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Market information gathering.", marks: 1, markCode: "M" },
                { reasoning: "(c) New data; questionnaires, interviews.", marks: 1, markCode: "M" },
                { reasoning: "(d) Existing data; government stats, reports.", marks: 1, markCode: "M" },
                { reasoning: "(e) Product, price, place, promotion.", marks: 1, markCode: "M" },
                { reasoning: "(f) Four Ps correctly identified.", marks: 1, markCode: "M" },
                { reasoning: "(g) Dividing market into groups.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid marketing plan.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Market research and marketing.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieibs-u1-mr-notes", title: "Marketing — notes",
      summary: "Research=primary(new)/secondary(existing). Marketing mix=4Ps. Segmentation=target specific groups.",
      sections: [
        { heading: "Key idea", body: "Marketing mix coordinates product, price, place, promotion for target market." },
        { heading: "Segmentation", body: "Divide market by demographics, psychographics, behaviour." },
      ],
    },
  },
  {
    file: "lesson-1-8.ts", exportName: "lesson258",
    lesson: {
      id: "cieibs-u1-lesson-1-8", code: "1-8",
      title: "Human Resources and Motivation",
      goal: "I CAN explain HR functions and motivation theories.",
      standards: ["Cambridge IGCSE Business Studies 0450", "Paper 1: human resources"],
      vocabulary: [
        { term: "Human resources", definition: "Management of employees." },
        { term: "Recruitment", definition: "Hiring new employees." },
        { term: "Training", definition: "Developing employee skills." },
        { term: "Motivation", definition: "Drive to achieve goals." },
        { term: "Maslow's hierarchy", definition: "Motivation theory: needs hierarchy." },
        { term: "Herzberg's theory", definition: "Motivation: hygiene vs motivator factors." },
      ],
      concept: {
        id: "cieibs-u1-s8-hr", title: "Human resources",
        skill: "Understand HR functions and motivation.",
        sections: [
          { heading: "HR functions", body: "Recruitment: attract/select candidates. Training: develop skills. Appraisal: evaluate performance. Discipline: manage conduct. Remuneration: pay/benefits. Motivation: encourage performance." },
          { heading: "Motivation theories", body: "Maslow: hierarchy of needs (physiological→safety→social→esteem→self-actualisation). Herzberg: hygiene factors (pay, conditions) prevent dissatisfaction; motivators (achievement, recognition) create satisfaction." },
        ],
        keyFormulas: [
          { name: "HR functions", statement: "recruit, train, appraise, remunerate" },
          { name: "Maslow", statement: "needs hierarchy" },
          { name: "Herzberg", statement: "hygiene vs motivators" },
        ],
        workedExample: {
          problem: "An employee is paid well but feels unappreciated. What motivates them?",
          solution: "Herzberg: pay is hygiene factor (prevents dissatisfaction). Recognition/achievement are motivators — need praise, challenging work, growth opportunities.",
        },
        questions: [
          {
            id: "cieibs-u1-hr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is human resources?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Management of employees" }, { id: "b", text: "A type of tax" }, { id: "c", text: "A marketing strategy" }, { id: "d", text: "A legal requirement" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "HR", statement: "Employee management." }],
              steps: [{ reasoning: "HR = managing employees.", marks: 1, markCode: "M" }],
              finalAnswer: "Employee management",
            },
          },
          {
            id: "cieibs-u1-hr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is Maslow's hierarchy?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Maslow", statement: "Needs hierarchy." }],
              steps: [
                { reasoning: "Hierarchy of needs: physiological→safety→social→esteem→self-actualisation.", marks: 1, markCode: "M" },
                { reasoning: "Lower needs must be met before higher.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Needs hierarchy",
            },
          },
          {
            id: "cieibs-u1-hr-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the difference between Herzberg's hygiene and motivator factors?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Herzberg", statement: "Hygiene vs motivators." }],
              steps: [
                { reasoning: "Hygiene factors prevent dissatisfaction (pay, conditions).", marks: 1, markCode: "M" },
                { reasoning: "Motivators create satisfaction (achievement, recognition).", marks: 1, markCode: "M" },
                { reasoning: "Both needed for motivation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Hygiene vs motivators",
            },
          },
          {
            id: "cieibs-u1-hr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define human resources, recruitment, training, motivation, Maslow's hierarchy, Herzberg's theory. (b) What is HR? (c) What is recruitment? (d) What is training? (e) What is Maslow's hierarchy? (f) What is Herzberg's theory? (g) Give 3 hygiene factors. (h) Design a motivation programme for a restaurant.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "HR", statement: "Functions, motivation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Employee management.", marks: 1, markCode: "M" },
                { reasoning: "(c) Hiring employees.", marks: 1, markCode: "M" },
                { reasoning: "(d) Developing skills.", marks: 1, markCode: "M" },
                { reasoning: "(e) Needs hierarchy.", marks: 1, markCode: "M" },
                { reasoning: "(f) Hygiene vs motivators.", marks: 1, markCode: "M" },
                { reasoning: "(g) Three valid hygiene factors.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid motivation programme.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Human resources and motivation.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieibs-u1-hr-notes", title: "HR — notes",
      summary: "HR=recruit, train, appraise, remunerate. Maslow=needs hierarchy; Herzberg=hygiene vs motivators.",
      sections: [
        { heading: "Key idea", body: "Motivation requires both hygiene factors and motivators." },
        { heading: "Maslow", body: "Lower needs (physiological, safety) must be met before higher (esteem, self-actualisation)." },
      ],
    },
  },
];
