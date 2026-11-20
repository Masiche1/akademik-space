module.exports = [
  {
    file: "lesson-1-1.ts", exportName: "lesson371",
    lesson: {
      id: "ciealbus-u1-lesson-1-1", code: "1-1",
      title: "Business Objectives and Stakeholders",
      goal: "I CAN explain business objectives and analyse stakeholder interests.",
      standards: ["Cambridge A Level Business 9707", "Paper 1: business activity"],
      vocabulary: [
        { term: "Profit maximisation", definition: "Objective of achieving highest possible profit." },
        { term: "Sales revenue maximisation", definition: "Objective of achieving highest possible revenue." },
        { term: "Market share", definition: "Percentage of market controlled by business." },
        { term: "Social enterprise", definition: "Business prioritising social/environmental aims." },
        { term: "Stakeholder", definition: "Any group/person affected by business decisions." },
        { term: "Conflict of objectives", definition: "When different objectives cannot all be achieved." },
      ],
      concept: {
        id: "ciealbus-u1-s1-obj", title: "Business objectives",
        skill: "Analyse business aims and stakeholder conflicts.",
        sections: [
          { heading: "Profit-based objectives", body: "Profit maximisation assumes perfect knowledge and rationality — unrealistic. Sales revenue maximisation: achieves highest turnover but may sacrifice profit. Market share: long-term survival strategy." },
          { heading: "Non-profit objectives", body: "Social enterprises balance profit with social/environmental aims. Survival is primary objective for small/new businesses. Growth objectives: organic (internal) vs external (mergers/acquisitions)." },
          { heading: "Stakeholder analysis", body: "Owners want profit; employees want job security/wages; customers want quality/low prices; suppliers want reliable payment; government wants tax/jobs; local community wants environmental responsibility." },
        ],
        keyFormulas: [
          { name: "Profit max", statement: "highest possible profit" },
          { name: "Revenue max", statement: "highest possible turnover" },
          { name: "Stakeholders", statement: "owners, employees, customers, suppliers, government, community" },
        ],
        workedExample: {
          problem: "A business wants to maximise profit but employees demand higher wages. How to resolve?",
          solution: "Conflict of objectives — higher wages reduce profit. Business must balance stakeholder interests, possibly through productivity gains or accepting lower profit margin.",
        },
        questions: [
          {
            id: "ciealbus-u1-ob-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is profit maximisation?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Objective of achieving highest possible profit" }, { id: "b", text: "Highest revenue" }, { id: "c", text: "Largest market share" }, { id: "d", text: "Social aims" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Profit maximisation", statement: "Highest profit objective." }],
              steps: [{ reasoning: "Profit maximisation = highest possible profit.", marks: 1, markCode: "M" }],
              finalAnswer: "Highest possible profit",
            },
          },
          {
            id: "ciealbus-u1-ob-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Who are stakeholders? Give three examples.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Stakeholder", statement: "Affected by business." }],
              steps: [
                { reasoning: "Any group/person affected by business decisions.", marks: 1, markCode: "M" },
                { reasoning: "Examples: owners, employees, customers, suppliers, government, community.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Affected parties",
            },
          },
          {
            id: "ciealbus-u1-ob-q3", difficulty: "core", totalMarks: 3,
            stem: "What is a conflict of objectives? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Conflict", statement: "Incompatible objectives." }],
              steps: [
                { reasoning: "When different objectives cannot all be achieved.", marks: 1, markCode: "M" },
                { reasoning: "Example: profit vs employee wages.", marks: 1, markCode: "M" },
                { reasoning: "Requires prioritisation/balancing.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Incompatible objectives example",
            },
          },
          {
            id: "ciealbus-u1-ob-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define profit maximisation, sales revenue maximisation, market share, social enterprise, stakeholder, conflict of objectives. (b) What is profit maximisation? (c) What is sales revenue maximisation? (d) What is a social enterprise? (e) Who are stakeholders? Give three. (f) What is conflict of objectives? Give example. (g) Why might profit maximisation be unrealistic? (h) Evaluate whether businesses should prioritise profit or social aims.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Objectives", statement: "Analysis, stakeholders." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Highest profit objective.", marks: 1, markCode: "M" },
                { reasoning: "(c) Highest turnover objective.", marks: 1, markCode: "M" },
                { reasoning: "(d) Social/environmental aims.", marks: 1, markCode: "M" },
                { reasoning: "(e) Owners, employees, customers etc.", marks: 1, markCode: "M" },
                { reasoning: "(f) Incompatible objectives.", marks: 1, markCode: "M" },
                { reasoning: "(g) Assumes perfect knowledge/rationality.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Business objectives and stakeholders.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealbus-u1-ob-notes", title: "Objectives — notes",
      summary: "Profit max vs revenue max vs social aims. Stakeholders have competing interests → conflicts.",
      sections: [
        { heading: "Key idea", body: "Business objectives must balance competing stakeholder interests." },
        { heading: "Conflicts", body: "Profit vs wages, growth vs stability, short vs long-term aims." },
      ],
    },
  },
  {
    file: "lesson-1-2.ts", exportName: "lesson372",
    lesson: {
      id: "ciealbus-u1-lesson-1-2", code: "1-2",
      title: "Business Ownership and Legal Forms",
      goal: "I CAN compare different forms of business ownership and their implications.",
      standards: ["Cambridge A Level Business 9707", "Paper 1: business activity"],
      vocabulary: [
        { term: "Sole trader", definition: "Business owned by one person." },
        { term: "Partnership", definition: "Business owned by two or more people." },
        { term: "Private limited company (Ltd)", definition: "Company with limited liability, shares not publicly traded." },
        { term: "Public limited company (PLC)", definition: "Company with shares traded on stock exchange." },
        { term: "Limited liability", definition: "Owners' personal assets protected from business debts." },
        { term: "Unlimited liability", definition: "Owners personally responsible for business debts." },
      ],
      concept: {
        id: "ciealbus-u1-s2-own", title: "Business ownership",
        skill: "Compare legal forms of business.",
        sections: [
          { heading: "Sole trader", body: "One owner, unlimited liability, easy setup, owner keeps all profit but bears all risk. Limited capital raising ability." },
          { heading: "Partnership", body: "Two+ owners share profits/liabilities. Unlimited liability unless LLP. Shared expertise but potential for disputes." },
          { heading: "Limited companies", body: "Ltd: private shares, limited liability, easier capital raising. PLC: public shares, limited liability, can raise large capital but must disclose information and answer to shareholders." },
        ],
        keyFormulas: [
          { name: "Sole trader", statement: "one owner, unlimited liability" },
          { name: "Partnership", statement: "shared ownership" },
          { name: "Ltd/PLC", statement: "limited liability companies" },
        ],
        workedExample: {
          problem: "Why might a growing business convert from sole trader to Ltd?",
          solution: "Limited liability protects personal assets, easier to raise capital by selling shares, more credibility with customers/suppliers.",
        },
        questions: [
          {
            id: "ciealbus-u1-own-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a sole trader?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Business owned by one person" }, { id: "b", text: "Two or more owners" }, { id: "c", text: "Public company" }, { id: "d", text: "Non-profit" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Sole trader", statement: "One owner." }],
              steps: [{ reasoning: "Sole trader = one owner.", marks: 1, markCode: "M" }],
              finalAnswer: "One owner",
            },
          },
          {
            id: "ciealbus-u1-own-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is limited liability?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Limited liability", statement: "Assets protected." }],
              steps: [
                { reasoning: "Owners' personal assets protected from business debts.", marks: 1, markCode: "M" },
                { reasoning: "Applies to limited companies.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Assets protected",
            },
          },
          {
            id: "ciealbus-u1-own-q3", difficulty: "core", totalMarks: 3,
            stem: "Compare sole trader and partnership.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Ownership comparison", statement: "Sole trader vs partnership." }],
              steps: [
                { reasoning: "Sole trader: one owner, unlimited liability.", marks: 1, markCode: "M" },
                { reasoning: "Partnership: shared ownership, shared profits/liabilities.", marks: 1, markCode: "M" },
                { reasoning: "Both easier setup than companies.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Ownership comparison",
            },
          },
          {
            id: "ciealbus-u1-own-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define sole trader, partnership, Ltd, PLC, limited liability, unlimited liability. (b) What is a sole trader? (c) What is limited liability? (d) Compare sole trader and partnership. (e) Compare Ltd and PLC. (f) Why convert to limited company? (g) What are advantages of PLC? (h) Evaluate best ownership form for different business sizes.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Ownership", statement: "Comparison, implications." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) One owner.", marks: 1, markCode: "M" },
                { reasoning: "(c) Assets protected.", marks: 1, markCode: "M" },
                { reasoning: "(d) Sole trader vs partnership.", marks: 1, markCode: "M" },
                { reasoning: "(e) Ltd private vs PLC public.", marks: 1, markCode: "M" },
                { reasoning: "(f) Liability protection, capital raising.", marks: 1, markCode: "M" },
                { reasoning: "(g) Large capital, credibility.", marks: 1, markCode: "M" },
                { reasoning: "(h) Context-dependent evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Business ownership forms.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealbus-u1-own-notes", title: "Ownership — notes",
      summary: "Sole trader→partnership→Ltd→PLC. Liability and capital raising drive choices.",
      sections: [
        { heading: "Key idea", body: "Ownership form affects liability, capital access, control, and credibility." },
        { heading: "Growth path", body: "Businesses often start as sole traders and convert to companies as they grow." },
      ],
    },
  },
  {
    file: "lesson-1-3.ts", exportName: "lesson373",
    lesson: {
      id: "ciealbus-u1-lesson-1-3", code: "1-3",
      title: "External Influences on Business",
      goal: "I CAN analyse economic, social, technological, environmental, political and legal influences.",
      standards: ["Cambridge A Level Business 9707", "Paper 1: external influences"],
      vocabulary: [
        { term: "Economic influence", definition: "GDP, inflation, interest rates, exchange rates affecting business." },
        { term: "Social influence", definition: "Demographics, lifestyle changes, consumer trends." },
        { term: "Technological influence", definition: "New technologies, automation, digitalisation." },
        { term: "Environmental influence", definition: "Climate change, sustainability, regulations." },
        { term: "Political/legal influence", definition: "Government policies, laws, regulations." },
        { term: "PESTLE analysis", definition: "Framework for analysing external influences." },
      ],
      concept: {
        id: "ciealbus-u1-s3-ext", title: "External influences",
        skill: "Analyse PESTLE factors affecting business.",
        sections: [
          { heading: "PESTLE framework", body: "Political: government stability, policies. Economic: growth, inflation, interest rates. Social: demographics, trends. Technological: innovation, automation. Legal: laws, regulations. Environmental: climate, sustainability." },
          { heading: "Impact analysis", body: "Each factor can create opportunities or threats. Businesses must monitor and adapt. Some factors beyond control — need contingency planning." },
        ],
        keyFormulas: [
          { name: "PESTLE", statement: "Political, Economic, Social, Technological, Legal, Environmental" },
          { name: "External", statement: "factors beyond business control" },
        ],
        workedExample: {
          problem: "How does rising interest rate affect a business?",
          solution: "Higher borrowing costs, reduced consumer spending, increased mortgage payments → lower demand for discretionary goods.",
        },
        questions: [
          {
            id: "ciealbus-u1-ext-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does PESTLE stand for?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Political, Economic, Social, Technological, Legal, Environmental" }, { id: "b", text: "Profit, Expense, Sales, Tax, Legal, Economic" }, { id: "c", text: "Planning, Execution, Strategy, Tactics, Leadership, Evaluation" }, { id: "d", text: "Production, Efficiency, Sales, Technology, Logistics, Economics" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "PESTLE", statement: "External analysis framework." }],
              steps: [{ reasoning: "PESTLE = Political, Economic, Social, Technological, Legal, Environmental.", marks: 1, markCode: "M" }],
              finalAnswer: "PESTLE framework",
            },
          },
          {
            id: "ciealbus-u1-ext-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What are external influences on business?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "External influences", statement: "Beyond control." }],
              steps: [
                { reasoning: "Factors beyond business control.", marks: 1, markCode: "M" },
                { reasoning: "Economic, social, technological, environmental, political, legal.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Beyond control factors",
            },
          },
          {
            id: "ciealbus-u1-ext-q3", difficulty: "core", totalMarks: 3,
            stem: "How does technology affect business?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Technological influence", statement: "Innovation impact." }],
              steps: [
                { reasoning: "New technologies create opportunities/threats.", marks: 1, markCode: "M" },
                { reasoning: "Automation, digitalisation, e-commerce.", marks: 1, markCode: "M" },
                { reasoning: "Must adapt or risk obsolescence.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Innovation impact",
            },
          },
          {
            id: "ciealbus-u1-ext-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define PESTLE, economic influence, social influence, technological influence, environmental influence, political/legal influence. (b) What is PESTLE? (c) What are external influences? (d) How does economic influence affect business? (e) How does technology affect business? (f) How does environmental influence affect business? (g) How does legal influence affect business? (h) Evaluate whether businesses can control external influences.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "External influences", statement: "PESTLE analysis." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) PESTLE framework.", marks: 1, markCode: "M" },
                { reasoning: "(c) Beyond control factors.", marks: 1, markCode: "M" },
                { reasoning: "(d) GDP, inflation, interest rates.", marks: 1, markCode: "M" },
                { reasoning: "(e) Innovation, automation.", marks: 1, markCode: "M" },
                { reasoning: "(f) Climate, sustainability.", marks: 1, markCode: "M" },
                { reasoning: "(g) Laws, regulations.", marks: 1, markCode: "M" },
                { reasoning: "(h) Limited control — adapt strategy.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "External influences analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealbus-u1-ext-notes", title: "External influences — notes",
      summary: "PESTLE=Political, Economic, Social, Technological, Legal, Environmental. Monitor and adapt.",
      sections: [
        { heading: "Key idea", body: "External factors create opportunities and threats — businesses must monitor and respond." },
        { heading: "Adaptation", body: "Cannot control external environment but can adapt strategy." },
      ],
    },
  },
  {
    file: "lesson-1-4.ts", exportName: "lesson374",
    lesson: {
      id: "ciealbus-u1-lesson-1-4", code: "1-4",
      title: "Marketing and Operations Management",
      goal: "I CAN explain marketing functions and operations management.",
      standards: ["Cambridge A Level Business 9707", "Paper 1: business functions"],
      vocabulary: [
        { term: "Marketing mix (4Ps)", definition: "Product, Price, Place, Promotion." },
        { term: "Operations management", definition: "Managing production of goods/services." },
        { term: "Product life cycle", definition: "Stages: introduction, growth, maturity, decline." },
        { term: "Quality control", definition: "Ensuring products meet standards." },
        { term: "Lean production", definition: "Minimising waste in production." },
        { term: "Supply chain", definition: "Network from raw materials to customer." },
      ],
      concept: {
        id: "ciealbus-u1-s4-mkt", title: "Marketing and operations",
        skill: "Understand business functions.",
        sections: [
          { heading: "Marketing mix", body: "Product: design/features. Price: cost-plus, penetration, skimming. Place: distribution channels. Promotion: advertising, sales promotion, public relations." },
          { heading: "Operations management", body: "Production methods: job, batch, flow. Quality management: TQM, ISO standards. Lean production: reduce waste, just-in-time inventory. Supply chain management: efficiency, reliability." },
        ],
        keyFormulas: [
          { name: "4Ps", statement: "Product, Price, Place, Promotion" },
          { name: "Operations", statement: "production management" },
        ],
        workedExample: {
          problem: "A company wants to launch a new product. What marketing mix decisions needed?",
          solution: "Product design/features, pricing strategy (penetration vs skimming), distribution channels, promotion methods.",
        },
        questions: [
          {
            id: "ciealbus-u1-mk-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What are the 4Ps of marketing?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Product, Price, Place, Promotion" }, { id: "b", text: "People, Process, Physical, Price" }, { id: "c", text: "Production, Profit, Planning, Promotion" }, { id: "d", text: "Purchase, Payment, Place, Price" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "4Ps", statement: "Marketing mix." }],
              steps: [{ reasoning: "4Ps = Product, Price, Place, Promotion.", marks: 1, markCode: "M" }],
              finalAnswer: "Product, Price, Place, Promotion",
            },
          },
          {
            id: "ciealbus-u1-mk-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is operations management?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Operations", statement: "Production management." }],
              steps: [
                { reasoning: "Managing production of goods/services.", marks: 1, markCode: "M" },
                { reasoning: "Includes quality, efficiency, supply chain.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Production management",
            },
          },
          {
            id: "ciealbus-u1-mk-q3", difficulty: "core", totalMarks: 3,
            stem: "What is lean production?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Lean production", statement: "Waste reduction." }],
              steps: [
                { reasoning: "Minimising waste in production.", marks: 1, markCode: "M" },
                { reasoning: "Just-in-time inventory, continuous improvement.", marks: 1, markCode: "M" },
                { reasoning: "Increases efficiency, reduces costs.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Waste reduction method",
            },
          },
          {
            id: "ciealbus-u1-mk-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define 4Ps, operations management, product life cycle, quality control, lean production, supply chain. (b) What are 4Ps? (c) What is operations management? (d) What is product life cycle? (e) What is quality control? (f) What is lean production? (g) What is supply chain? (h) Evaluate importance of marketing vs operations in business success.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Functions", statement: "Marketing, operations." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Product, Price, Place, Promotion.", marks: 1, markCode: "M" },
                { reasoning: "(c) Production management.", marks: 1, markCode: "M" },
                { reasoning: "(d) Life cycle stages.", marks: 1, markCode: "M" },
                { reasoning: "(e) Quality standards.", marks: 1, markCode: "M" },
                { reasoning: "(f) Waste reduction.", marks: 1, markCode: "M" },
                { reasoning: "(g) Raw materials to customer.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation — both essential.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Marketing and operations.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealbus-u1-mk-notes", title: "Functions — notes",
      summary: "4Ps marketing mix. Operations: production methods, quality, lean, supply chain.",
      sections: [
        { heading: "Key idea", body: "Marketing drives demand; operations delivers product efficiently." },
        { heading: "Integration", body: "Functions must work together for business success." },
      ],
    },
  },
];
