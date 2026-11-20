module.exports = [
  {
    file: "lesson-2-1.ts", exportName: "lesson381",
    lesson: {
      id: "ciealbus-u2-lesson-2-1", code: "2-1",
      title: "Business Growth and Development",
      goal: "I CAN explain organic and external growth strategies.",
      standards: ["Cambridge A Level Business 9707", "Paper 2: business growth"],
      vocabulary: [
        { term: "Organic growth", definition: "Growth through internal expansion." },
        { term: "External growth", definition: "Growth through mergers/acquisitions." },
        { term: "Merger", definition: "Two businesses combine to form new entity." },
        { term: "Acquisition", definition: "One business buys another." },
        { term: "Takeover", definition: "Acquisition against target's wishes." },
        { term: "Synergy", definition: "Combined value greater than sum of parts." },
      ],
      concept: {
        id: "ciealbus-u2-s1-grow", title: "Business growth",
        skill: "Analyse growth strategies and implications.",
        sections: [
          { heading: "Organic growth", body: "Internal expansion: new products, markets, increased production. Slower but maintains control, less risky. Limited by internal resources." },
          { heading: "External growth", body: "Mergers: two firms combine (horizontal, vertical, conglomerate). Acquisitions: buy existing business. Faster access to markets/resources but integration challenges, higher risk." },
          { heading: "Growth implications", body: "Economies of scale vs diseconomies of scale. Increased market power but potential loss of control. Cultural integration issues." },
        ],
        keyFormulas: [
          { name: "Organic", statement: "internal expansion" },
          { name: "External", statement: "mergers/acquisitions" },
          { name: "Synergy", statement: "1+1>2" },
        ],
        workedExample: {
          problem: "Why might a business prefer organic over external growth?",
          solution: "Maintains control, less risky, no integration issues, but slower growth and limited by internal resources.",
        },
        questions: [
          {
            id: "ciealbus-u2-gr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is organic growth?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Growth through internal expansion" }, { id: "b", text: "Mergers" }, { id: "c", text: "Acquisitions" }, { id: "d", text: "Takeovers" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Organic growth", statement: "Internal expansion." }],
              steps: [{ reasoning: "Organic = internal expansion.", marks: 1, markCode: "M" }],
              finalAnswer: "Internal expansion",
            },
          },
          {
            id: "ciealbus-u2-gr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a merger?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Merger", statement: "Business combination." }],
              steps: [
                { reasoning: "Two businesses combine to form new entity.", marks: 1, markCode: "M" },
                { reasoning: "Often mutual agreement.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Business combination",
            },
          },
          {
            id: "ciealbus-u2-gr-q3", difficulty: "core", totalMarks: 3,
            stem: "What is synergy? Why does it matter?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Synergy", statement: "Combined value." }],
              steps: [
                { reasoning: "Combined value greater than sum of parts.", marks: 1, markCode: "M" },
                { reasoning: "Justifies mergers/acquisitions.", marks: 1, markCode: "M" },
                { reasoning: "May not always materialise.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "1+1>2 value",
            },
          },
          {
            id: "ciealbus-u2-gr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define organic growth, external growth, merger, acquisition, takeover, synergy. (b) What is organic growth? (c) What is a merger? (d) What is an acquisition? (e) What is synergy? (f) Compare organic vs external growth. (g) Why might merger fail? (h) Evaluate best growth strategy for different situations.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Growth", statement: "Strategies, implications." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Internal expansion.", marks: 1, markCode: "M" },
                { reasoning: "(c) Business combination.", marks: 1, markCode: "M" },
                { reasoning: "(d) Buying another business.", marks: 1, markCode: "M" },
                { reasoning: "(e) 1+1>2 value.", marks: 1, markCode: "M" },
                { reasoning: "(f) Organic slower/safer vs external faster/riskier.", marks: 1, markCode: "M" },
                { reasoning: "(g) Integration issues, culture clash.", marks: 1, markCode: "M" },
                { reasoning: "(h) Context-dependent evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Business growth strategies.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealbus-u2-gr-notes", title: "Growth — notes",
      summary: "Organic=internal; external=mergers/acquisitions. Synergy drives M&A but integration is hard.",
      sections: [
        { heading: "Key idea", body: "Growth strategy depends on resources, risk tolerance, market conditions." },
        { heading: "Challenges", body: "External growth faster but integration/culture issues common." },
      ],
    },
  },
  {
    file: "lesson-2-2.ts", exportName: "lesson382",
    lesson: {
      id: "ciealbus-u2-lesson-2-2", code: "2-2",
      title: "Human Resource Management",
      goal: "I CAN explain HRM functions and motivation theories.",
      standards: ["Cambridge A Level Business 9707", "Paper 2: HRM"],
      vocabulary: [
        { term: "HRM", definition: "Managing human resources." },
        { term: "Recruitment", definition: "Hiring new employees." },
        { term: "Training", definition: "Developing employee skills." },
        { term: "Motivation", definition: "Driving employee performance." },
        { term: "Maslow's hierarchy", definition: "Needs hierarchy: physiological→safety→belonging→esteem→self-actualisation." },
        { term: "Herzberg's theory", definition: "Hygiene factors vs motivators." },
      ],
      concept: {
        id: "ciealbus-u2-s2-hrm", title: "Human resource management",
        skill: "Understand HRM functions and motivation.",
        sections: [
          { heading: "HRM functions", body: "Recruitment and selection, training and development, performance management, remuneration, industrial relations, health and safety." },
          { heading: "Motivation theories", body: "Maslow: hierarchy of needs — lower needs must be met before higher. Herzberg: hygiene factors (salary, conditions) prevent dissatisfaction; motivators (achievement, recognition) create satisfaction." },
        ],
        keyFormulas: [
          { name: "HRM", statement: "human resource management" },
          { name: "Maslow", statement: "needs hierarchy" },
          { name: "Herzberg", statement: "hygiene vs motivators" },
        ],
        workedExample: {
          problem: "An employee is paid well but unmotivated. What could explain this?",
          solution: "Herzberg: salary is hygiene factor — prevents dissatisfaction but doesn't motivate. Need motivators: recognition, achievement, responsibility.",
        },
        questions: [
          {
            id: "ciealbus-u2-hr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is HRM?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Managing human resources" }, { id: "b", text: "Marketing" }, { id: "c", text: "Finance" }, { id: "d", text: "Operations" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "HRM", statement: "Human resources." }],
              steps: [{ reasoning: "HRM = managing human resources.", marks: 1, markCode: "M" }],
              finalAnswer: "Human resources",
            },
          },
          {
            id: "ciealbus-u2-hr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is Maslow's hierarchy?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Maslow", statement: "Needs hierarchy." }],
              steps: [
                { reasoning: "Hierarchy of needs: physiological→safety→belonging→esteem→self-actualisation.", marks: 1, markCode: "M" },
                { reasoning: "Lower needs must be met first.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Needs hierarchy",
            },
          },
          {
            id: "ciealbus-u2-hr-q3", difficulty: "core", totalMarks: 3,
            stem: "What is Herzberg's two-factor theory?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Herzberg", statement: "Hygiene vs motivators." }],
              steps: [
                { reasoning: "Hygiene factors prevent dissatisfaction (salary, conditions).", marks: 1, markCode: "M" },
                { reasoning: "Motivators create satisfaction (achievement, recognition).", marks: 1, markCode: "M" },
                { reasoning: "Different factors for different outcomes.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Hygiene vs motivators",
            },
          },
          {
            id: "ciealbus-u2-hr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define HRM, recruitment, training, motivation, Maslow's hierarchy, Herzberg's theory. (b) What is HRM? (c) What are HRM functions? (d) What is Maslow's hierarchy? (e) What is Herzberg's theory? (f) Compare Maslow and Herzberg. (g) How does motivation affect productivity? (h) Evaluate which motivation theory is most useful for managers.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "HRM", statement: "Functions, motivation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Human resources.", marks: 1, markCode: "M" },
                { reasoning: "(c) Recruitment, training, performance, remuneration.", marks: 1, markCode: "M" },
                { reasoning: "(d) Needs hierarchy.", marks: 1, markCode: "M" },
                { reasoning: "(e) Hygiene vs motivators.", marks: 1, markCode: "M" },
                { reasoning: "(f) Maslow hierarchy vs Herzberg factors.", marks: 1, markCode: "M" },
                { reasoning: "(g) Motivated employees more productive.", marks: 1, markCode: "M" },
                { reasoning: "(h) Context-dependent evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "HRM and motivation theories.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealbus-u2-hr-notes", title: "HRM — notes",
      summary: "HRM functions: recruitment→training→performance→remuneration. Maslow vs Herzberg motivation.",
      sections: [
        { heading: "Key idea", body: "Human resources are key competitive advantage — motivation drives performance." },
        { heading: "Theories", body: "Maslow: needs hierarchy. Herzberg: hygiene prevents dissatisfaction, motivators create satisfaction." },
      ],
    },
  },
  {
    file: "lesson-2-3.ts", exportName: "lesson383",
    lesson: {
      id: "ciealbus-u2-lesson-2-3", code: "2-3",
      title: "Finance and Accounting",
      goal: "I CAN explain financial statements, ratios and financial decisions.",
      standards: ["Cambridge A Level Business 9707", "Paper 2: finance"],
      vocabulary: [
        { term: "Profit and loss account", definition: "Statement showing revenue, costs, profit." },
        { term: "Balance sheet", definition: "Statement showing assets, liabilities, equity." },
        { term: "Gross profit", definition: "Revenue minus cost of sales." },
        { term: "Net profit", definition: "Profit after all expenses including tax." },
        { term: "Liquidity ratio", definition: "Ability to meet short-term debts." },
        { term: "Profitability ratio", definition: "Return on sales/assets/equity." },
      ],
      concept: {
        id: "ciealbus-u2-s3-fin", title: "Finance and accounting",
        skill: "Analyse financial statements and ratios.",
        sections: [
          { heading: "Financial statements", body: "Profit & loss: revenue → gross profit → operating profit → net profit. Balance sheet: assets = liabilities + equity. Cash flow: inflows vs outflows." },
          { heading: "Financial ratios", body: "Liquidity: current ratio (current assets/current liabilities), acid test. Profitability: gross margin, net margin, ROCE. Gearing: debt vs equity." },
        ],
        keyFormulas: [
          { name: "Gross profit", statement: "revenue - cost of sales" },
          { name: "Net profit", statement: "after all expenses" },
          { name: "Current ratio", statement: "current assets/liabilities" },
        ],
        workedExample: {
          problem: "A business has current assets £50,000 and current liabilities £25,000. Calculate current ratio.",
          solution: "Current ratio = £50,000/£25,000 = 2:1. Indicates good short-term liquidity.",
        },
        questions: [
          {
            id: "ciealbus-u2-fin-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is gross profit?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Revenue minus cost of sales" }, { id: "b", text: "Revenue minus all expenses" }, { id: "c", text: "Assets minus liabilities" }, { id: "d", text: "Cash inflow" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Gross profit", statement: "Revenue - cost of sales." }],
              steps: [{ reasoning: "Gross profit = revenue - cost of sales.", marks: 1, markCode: "M" }],
              finalAnswer: "Revenue - cost of sales",
            },
          },
          {
            id: "ciealbus-u2-fin-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the current ratio?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Current ratio", statement: "Liquidity measure." }],
              steps: [
                { reasoning: "Current assets / current liabilities.", marks: 1, markCode: "M" },
                { reasoning: "Measures short-term liquidity.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Current assets/liabilities",
            },
          },
          {
            id: "ciealbus-u2-fin-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the difference between gross and net profit?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Gross vs net", statement: "Profit levels." }],
              steps: [
                { reasoning: "Gross = revenue - cost of sales.", marks: 1, markCode: "M" },
                { reasoning: "Net = after all expenses including tax.", marks: 1, markCode: "M" },
                { reasoning: "Net is final profit.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Gross vs net profit",
            },
          },
          {
            id: "ciealbus-u2-fin-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define gross profit, net profit, balance sheet, liquidity ratio, profitability ratio, current ratio. (b) What is gross profit? (c) What is net profit? (d) What is current ratio? (e) How calculate current ratio? (f) What does low current ratio indicate? (g) What are financial statements? (h) Evaluate importance of financial analysis for business decisions.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Finance", statement: "Statements, ratios." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Revenue - cost of sales.", marks: 1, markCode: "M" },
                { reasoning: "(c) After all expenses.", marks: 1, markCode: "M" },
                { reasoning: "(d) Liquidity measure.", marks: 1, markCode: "M" },
                { reasoning: "(e) Current assets/liabilities.", marks: 1, markCode: "M" },
                { reasoning: "(f) Poor short-term liquidity.", marks: 1, markCode: "M" },
                { reasoning: "(g) P&L, balance sheet, cash flow.", marks: 1, markCode: "M" },
                { reasoning: "(h) Informs decisions, identifies problems.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Finance and accounting.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealbus-u2-fin-notes", title: "Finance — notes",
      summary: "P&L: revenue→gross→net profit. Balance sheet: assets=liabilities+equity. Ratios measure performance.",
      sections: [
        { heading: "Key idea", body: "Financial statements and ratios inform business decisions." },
        { heading: "Ratios", body: "Liquidity (current ratio), profitability (margins), gearing (debt/equity)." },
      ],
    },
  },
  {
    file: "lesson-2-4.ts", exportName: "lesson384",
    lesson: {
      id: "ciealbus-u2-lesson-2-4", code: "2-4",
      title: "Market Structures",
      goal: "I CAN compare perfect competition, monopoly, oligopoly and monopolistic competition.",
      standards: ["Cambridge A Level Business 9707", "Paper 2: market structures"],
      vocabulary: [
        { term: "Perfect competition", definition: "Many sellers, identical products, no barriers." },
        { term: "Monopoly", definition: "Single seller dominates market." },
        { term: "Oligopoly", definition: "Few large firms dominate market." },
        { term: "Monopolistic competition", definition: "Many firms, differentiated products." },
        { term: "Barriers to entry", definition: "Obstacles preventing new firms entering market." },
        { term: "Price elasticity of demand", definition: "Responsiveness of demand to price changes." },
      ],
      concept: {
        id: "ciealbus-u2-s4-mkt", title: "Market structures",
        skill: "Compare market structures and implications.",
        sections: [
          { heading: "Perfect competition", body: "Many firms, identical products, no barriers. Firms are price takers. Normal profit only in long run. Rare in reality." },
          { heading: "Monopoly", body: "Single seller, high barriers. Price maker. Can earn supernormal profit. May reduce consumer welfare through higher prices." },
          { heading: "Oligopoly", body: "Few dominant firms (airlines, telecoms). Interdependent — each considers rivals' reactions. Collusion possible. High barriers." },
          { heading: "Monopolistic competition", body: "Many firms, differentiated products. Some price power but limited. Normal profit in long run." },
        ],
        keyFormulas: [
          { name: "Perfect competition", statement: "many firms, identical products" },
          { name: "Monopoly", statement: "single seller" },
          { name: "Oligopoly", statement: "few firms" },
        ],
        workedExample: {
          problem: "Why do telecom companies avoid price wars?",
          solution: "Oligopoly — few dominant firms are interdependent. Price war would reduce profits for all. Collusion or tacit agreement more profitable.",
        },
        questions: [
          {
            id: "ciealbus-u2-ms-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a monopoly?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Single seller dominates market" }, { id: "b", text: "Many sellers" }, { id: "c", text: "Few sellers" }, { id: "d", text: "Identical products" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Monopoly", statement: "Single seller." }],
              steps: [{ reasoning: "Monopoly = single seller dominates market.", marks: 1, markCode: "M" }],
              finalAnswer: "Single seller",
            },
          },
          {
            id: "ciealbus-u2-ms-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is an oligopoly? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Oligopoly", statement: "Few dominant firms." }],
              steps: [
                { reasoning: "Few large firms dominate market.", marks: 1, markCode: "M" },
                { reasoning: "Example: airlines, telecoms.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Few dominant firms example",
            },
          },
          {
            id: "ciealbus-u2-ms-q3", difficulty: "core", totalMarks: 3,
            stem: "What are barriers to entry? Why do they matter?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Barriers", statement: "Entry obstacles." }],
              steps: [
                { reasoning: "Obstacles preventing new firms entering market.", marks: 1, markCode: "M" },
                { reasoning: "Examples: economies of scale, patents, brand loyalty.", marks: 1, markCode: "M" },
                { reasoning: "Protect existing firms from competition.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Entry obstacles",
            },
          },
          {
            id: "ciealbus-u2-ms-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define perfect competition, monopoly, oligopoly, monopolistic competition, barriers to entry, price elasticity. (b) What is perfect competition? (c) What is a monopoly? (d) What is an oligopoly? (e) What is monopolistic competition? (f) Compare monopoly and oligopoly. (g) Why do oligopolies avoid price wars? (h) Evaluate whether competition benefits consumers.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Market structures", statement: "Comparison, implications." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Many firms, identical products.", marks: 1, markCode: "M" },
                { reasoning: "(c) Single seller.", marks: 1, markCode: "M" },
                { reasoning: "(d) Few dominant firms.", marks: 1, markCode: "M" },
                { reasoning: "(e) Many firms, differentiated.", marks: 1, markCode: "M" },
                { reasoning: "(f) Monopoly single vs oligopoly few.", marks: 1, markCode: "M" },
                { reasoning: "(g) Interdependence, mutual destruction.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation — competition vs efficiency.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Market structures.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealbus-u2-ms-notes", title: "Market structures — notes",
      summary: "Perfect competition→monopolistic→oligopoly→monopoly spectrum. Barriers determine structure.",
      sections: [
        { heading: "Key idea", body: "Market structure affects pricing power, efficiency, consumer welfare." },
        { heading: "Oligopoly", body: "Interdependence means strategic behaviour — collusion, price leadership." },
      ],
    },
  },
  {
    file: "lesson-2-5.ts", exportName: "lesson385",
    lesson: {
      id: "ciealbus-u2-lesson-2-5", code: "2-5",
      title: "Globalisation and International Business",
      goal: "I CAN explain globalisation drivers and international business strategies.",
      standards: ["Cambridge A Level Business 9707", "Paper 2: international"],
      vocabulary: [
        { term: "Globalisation", definition: "Increasing interconnectedness of world economies." },
        { term: "Multinational corporation (MNC)", definition: "Company operating in multiple countries." },
        { term: "Foreign direct investment (FDI)", definition: "Investment in foreign business operations." },
        { term: "Outsourcing", definition: "Contracting work to external providers." },
        { term: "Offshoring", definition: "Moving production to lower-cost countries." },
        { term: "Supply chain", definition: "Global network of suppliers/producers." },
      ],
      concept: {
        id: "ciealbus-u2-s5-glob", title: "Globalisation",
        skill: "Understand global business drivers and strategies.",
        sections: [
          { heading: "Globalisation drivers", body: "Technology (internet, transport), trade liberalisation, MNC expansion, economic integration. Reduces barriers, increases interdependence." },
          { heading: "International strategies", body: "Exporting, licensing, franchising, joint ventures, wholly-owned subsidiaries. MNCs seek markets, resources, cost advantages." },
          { heading: "Implications", body: "Benefits: economies of scale, market access, technology transfer. Costs: job losses in home country, exploitation in developing countries, environmental damage." },
        ],
        keyFormulas: [
          { name: "Globalisation", statement: "world economic integration" },
          { name: "MNC", statement: "multinational corporation" },
          { name: "FDI", statement: "foreign direct investment" },
        ],
        workedExample: {
          problem: "Why do companies offshore production?",
          solution: "Lower labour costs, weaker regulations, access to resources/markets. But risks: quality control, ethical concerns, supply chain disruption.",
        },
        questions: [
          {
            id: "ciealbus-u2-gb-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is globalisation?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Increasing interconnectedness of world economies" }, { id: "b", text: "A type of tax" }, { id: "c", text: "A trade barrier" }, { id: "d", text: "A business structure" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Globalisation", statement: "World integration." }],
              steps: [{ reasoning: "Globalisation = interconnected world economies.", marks: 1, markCode: "M" }],
              finalAnswer: "World integration",
            },
          },
          {
            id: "ciealbus-u2-gb-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is an MNC? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "MNC", statement: "Multinational corporation." }],
              steps: [
                { reasoning: "Company operating in multiple countries.", marks: 1, markCode: "M" },
                { reasoning: "Example: Coca-Cola, McDonald's, Toyota.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Multinational corporation example",
            },
          },
          {
            id: "ciealbus-u2-gb-q3", difficulty: "core", totalMarks: 3,
            stem: "What are the benefits and costs of globalisation?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Globalisation", statement: "Benefits vs costs." }],
              steps: [
                { reasoning: "Benefits: economies of scale, market access.", marks: 1, markCode: "M" },
                { reasoning: "Costs: job losses, exploitation, environment.", marks: 1, markCode: "M" },
                { reasoning: "Complex trade-offs.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Benefits vs costs",
            },
          },
          {
            id: "ciealbus-u2-gb-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define globalisation, MNC, FDI, outsourcing, offshoring, supply chain. (b) What is globalisation? (c) What is an MNC? (d) What is FDI? (e) What are globalisation drivers? (f) What are international business strategies? (g) What are benefits of globalisation? (h) Evaluate whether globalisation benefits or harms developing countries.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Globalisation", statement: "Drivers, strategies." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) World integration.", marks: 1, markCode: "M" },
                { reasoning: "(c) Multinational corporation.", marks: 1, markCode: "M" },
                { reasoning: "(d) Foreign direct investment.", marks: 1, markCode: "M" },
                { reasoning: "(e) Technology, trade liberalisation.", marks: 1, markCode: "M" },
                { reasoning: "(f) Exporting, licensing, FDI.", marks: 1, markCode: "M" },
                { reasoning: "(g) Scale, markets, technology.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Globalisation and international business.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealbus-u2-gb-notes", title: "Globalisation — notes",
      summary: "Technology+trade liberalisation→globalisation. MNCs seek markets/resources. Benefits vs costs complex.",
      sections: [
        { heading: "Key idea", body: "Globalisation integrates economies but creates winners and losers." },
        { heading: "Strategies", body: "Exporting→licensing→joint ventures→wholly-owned subsidiaries." },
      ],
    },
  },
];
