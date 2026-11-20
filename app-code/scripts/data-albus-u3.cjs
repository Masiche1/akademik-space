module.exports = [
  {
    file: "lesson-3-1.ts", exportName: "lesson391",
    lesson: {
      id: "ciealbus-u3-lesson-3-1", code: "3-1",
      title: "Strategic Management and Competitive Advantage",
      goal: "I CAN explain strategic management and sources of competitive advantage.",
      standards: ["Cambridge A Level Business 9707", "Paper 3: strategy"],
      vocabulary: [
        { term: "Strategic management", definition: "Long-term planning and decision-making." },
        { term: "Competitive advantage", definition: "Advantage over competitors." },
        { term: "Cost leadership", definition: "Competing on lowest costs." },
        { term: "Differentiation", definition: "Competing on unique features/quality." },
        { term: "Niche strategy", definition: "Focusing on narrow market segment." },
        { term: "SWOT analysis", definition: "Strengths, Weaknesses, Opportunities, Threats." },
      ],
      concept: {
        id: "ciealbus-u3-s1-strat", title: "Strategic management",
        skill: "Analyse competitive strategies.",
        sections: [
          { heading: "Porter's generic strategies", body: "Cost leadership: lowest costs in industry. Differentiation: unique product/service. Focus: niche market — either cost or differentiation focus." },
          { heading: "SWOT analysis", body: "Internal: strengths, weaknesses. External: opportunities, threats. Used to formulate strategy." },
        ],
        keyFormulas: [
          { name: "Cost leadership", statement: "lowest costs" },
          { name: "Differentiation", statement: "unique features" },
          { name: "SWOT", statement: "Strengths, Weaknesses, Opportunities, Threats" },
        ],
        workedExample: {
          problem: "A company wants to compete in luxury market. Which strategy?",
          solution: "Differentiation focus — unique features, premium quality, target niche luxury segment.",
        },
        questions: [
          {
            id: "ciealbus-u3-sm-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is competitive advantage?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Advantage over competitors" }, { id: "b", text: "A type of tax" }, { id: "c", text: "A market structure" }, { id: "d", text: "A business objective" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Competitive advantage", statement: "Edge over rivals." }],
              steps: [{ reasoning: "Competitive advantage = advantage over competitors.", marks: 1, markCode: "M" }],
              finalAnswer: "Advantage over rivals",
            },
          },
          {
            id: "ciealbus-u3-sm-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is SWOT analysis?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "SWOT", statement: "Strategic analysis." }],
              steps: [
                { reasoning: "Strengths, Weaknesses, Opportunities, Threats.", marks: 1, markCode: "M" },
                { reasoning: "Internal and external analysis.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "SWOT analysis",
            },
          },
          {
            id: "ciealbus-u3-sm-q3", difficulty: "core", totalMarks: 3,
            stem: "Compare cost leadership and differentiation.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Generic strategies", statement: "Cost vs differentiation." }],
              steps: [
                { reasoning: "Cost leadership: lowest costs in industry.", marks: 1, markCode: "M" },
                { reasoning: "Differentiation: unique features/quality.", marks: 1, markCode: "M" },
                { reasoning: "Both aim for competitive advantage.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Cost vs differentiation",
            },
          },
          {
            id: "ciealbus-u3-sm-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define strategic management, competitive advantage, cost leadership, differentiation, niche strategy, SWOT. (b) What is strategic management? (c) What is competitive advantage? (d) What are Porter's generic strategies? (e) What is SWOT? (f) Compare cost leadership and differentiation. (g) What is niche strategy? (h) Evaluate which generic strategy suits a small business.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Strategy", statement: "Competitive advantage." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Long-term planning.", marks: 1, markCode: "M" },
                { reasoning: "(c) Edge over rivals.", marks: 1, markCode: "M" },
                { reasoning: "(d) Cost, differentiation, focus.", marks: 1, markCode: "M" },
                { reasoning: "(e) SWOT analysis.", marks: 1, markCode: "M" },
                { reasoning: "(f) Cost vs differentiation.", marks: 1, markCode: "M" },
                { reasoning: "(g) Niche market focus.", marks: 1, markCode: "M" },
                { reasoning: "(h) Context-dependent evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Strategic management.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealbus-u3-sm-notes", title: "Strategy — notes",
      summary: "Porter: cost leadership, differentiation, focus. SWOT analyses internal/external factors.",
      sections: [
        { heading: "Key idea", body: "Sustainable competitive advantage requires consistent strategy execution." },
        { heading: "SWOT", body: "Internal strengths/weaknesses vs external opportunities/threats." },
      ],
    },
  },
  {
    file: "lesson-3-2.ts", exportName: "lesson392",
    lesson: {
      id: "ciealbus-u3-lesson-3-2", code: "3-2",
      title: "International Trade and Exchange Rates",
      goal: "I CAN explain international trade, exchange rates and their business impact.",
      standards: ["Cambridge A Level Business 9707", "Paper 4: global business"],
      vocabulary: [
        { term: "Exchange rate", definition: "Value of one currency in terms of another." },
        { term: "Appreciation", definition: "Increase in currency value." },
        { term: "Depreciation", definition: "Decrease in currency value." },
        { term: "Balance of trade", definition: "Difference between exports and imports." },
        { term: "Tariff", definition: "Tax on imported goods." },
        { term: "Quota", definition: "Limit on quantity of imports." },
      ],
      concept: {
        id: "ciealbus-u3-s2-trade", title: "International trade",
        skill: "Understand exchange rates and trade barriers.",
        sections: [
          { heading: "Exchange rates", body: "Strong currency: exports expensive, imports cheap. Weak currency: exports cheap, imports expensive. Affects competitiveness and profit margins." },
          { heading: "Trade barriers", body: "Tariffs: taxes on imports protect domestic industry. Quotas: limit import quantities. Non-tariff barriers: regulations, standards. Free trade agreements reduce barriers." },
        ],
        keyFormulas: [
          { name: "Exchange rate", statement: "currency value" },
          { name: "Appreciation", statement: "currency strengthens" },
          { name: "Depreciation", statement: "currency weakens" },
        ],
        workedExample: {
          problem: "A UK exporter sells to US. Pound appreciates 20%. What happens?",
          solution: "Exports become more expensive in dollars — US customers buy less. Exporter's revenue may fall unless prices adjusted.",
        },
        questions: [
          {
            id: "ciealbus-u3-tr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is an exchange rate?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Value of one currency in terms of another" }, { id: "b", text: "A type of tax" }, { id: "c", text: "A trade barrier" }, { id: "d", text: "A business objective" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Exchange rate", statement: "Currency value." }],
              steps: [{ reasoning: "Exchange rate = currency value ratio.", marks: 1, markCode: "M" }],
              finalAnswer: "Currency value",
            },
          },
          {
            id: "ciealbus-u3-tr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a tariff?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Tariff", statement: "Import tax." }],
              steps: [
                { reasoning: "Tax on imported goods.", marks: 1, markCode: "M" },
                { reasoning: "Protects domestic industry from competition.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Import tax",
            },
          },
          {
            id: "ciealbus-u3-tr-q3", difficulty: "core", totalMarks: 3,
            stem: "How does currency depreciation affect a business?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Depreciation", statement: "Business impact." }],
              steps: [
                { reasoning: "Exports become cheaper — more competitive.", marks: 1, markCode: "M" },
                { reasoning: "Imports become expensive — higher costs.", marks: 1, markCode: "M" },
                { reasoning: "Affects profit margins and competitiveness.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Currency depreciation impact",
            },
          },
          {
            id: "ciealbus-u3-tr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define exchange rate, appreciation, depreciation, balance of trade, tariff, quota. (b) What is an exchange rate? (c) What is depreciation? (d) What is a tariff? (e) How does currency appreciation affect exporters? (f) What is balance of trade? (g) What are trade barriers? (h) Evaluate whether tariffs benefit or harm an economy.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Trade", statement: "Exchange rates, barriers." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Currency value ratio.", marks: 1, markCode: "M" },
                { reasoning: "(c) Currency weakens.", marks: 1, markCode: "M" },
                { reasoning: "(d) Import tax.", marks: 1, markCode: "M" },
                { reasoning: "(e) Exports more expensive.", marks: 1, markCode: "M" },
                { reasoning: "(f) Exports minus imports.", marks: 1, markCode: "M" },
                { reasoning: "(g) Tariffs, quotas, regulations.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "International trade and exchange rates.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealbus-u3-tr-notes", title: "Trade — notes",
      summary: "Exchange rates affect competitiveness. Tariffs/quotas protect domestic industry but may harm economy.",
      sections: [
        { heading: "Key idea", body: "Currency movements and trade barriers significantly impact international business." },
        { heading: "Trade-offs", body: "Protectionism vs free trade — complex economic and political debate." },
      ],
    },
  },
  {
    file: "lesson-3-3.ts", exportName: "lesson393",
    lesson: {
      id: "ciealbus-u3-lesson-3-3", code: "3-3",
      title: "Business Ethics and Social Responsibility",
      goal: "I CAN explain ethical issues and corporate social responsibility.",
      standards: ["Cambridge A Level Business 9707", "Paper 3: ethics"],
      vocabulary: [
        { term: "Business ethics", definition: "Moral principles guiding business behaviour." },
        { term: "Corporate social responsibility (CSR)", definition: "Business responsibility to society/environment." },
        { term: "Stakeholder theory", definition: "Business should consider all stakeholders." },
        { term: "Ethical dilemma", definition: "Situation requiring choice between competing values." },
        { term: "Sustainability", definition: "Meeting present needs without compromising future." },
        { term: "Triple bottom line", definition: "People, planet, profit." },
      ],
      concept: {
        id: "ciealbus-u3-s3-eth", title: "Ethics and CSR",
        skill: "Evaluate ethical business decisions.",
        sections: [
          { heading: "Business ethics", body: "Ethical frameworks: utilitarianism (greatest good), deontology (duty), virtue ethics (character). Businesses face dilemmas: profit vs ethics, short vs long-term." },
          { heading: "CSR", body: "Triple bottom line: people (social), planet (environmental), profit (economic). CSR can build reputation, attract customers, retain employees but may increase costs." },
        ],
        keyFormulas: [
          { name: "Ethics", statement: "moral principles" },
          { name: "CSR", statement: "social responsibility" },
          { name: "Triple bottom line", statement: "people, planet, profit" },
        ],
        workedExample: {
          problem: "A company can cut costs by using cheaper but polluting suppliers. Ethical issues?",
          solution: "Environmental damage vs profit. CSR suggests sustainable suppliers. Short-term savings vs long-term reputation/regulatory risk.",
        },
        questions: [
          {
            id: "ciealbus-u3-et-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is business ethics?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Moral principles guiding business behaviour" }, { id: "b", text: "A type of tax" }, { id: "c", text: "A market structure" }, { id: "d", text: "A business objective" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Ethics", statement: "Moral principles." }],
              steps: [{ reasoning: "Ethics = moral principles for business.", marks: 1, markCode: "M" }],
              finalAnswer: "Moral principles",
            },
          },
          {
            id: "ciealbus-u3-et-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is CSR?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "CSR", statement: "Social responsibility." }],
              steps: [
                { reasoning: "Business responsibility to society/environment.", marks: 1, markCode: "M" },
                { reasoning: "Triple bottom line: people, planet, profit.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Social responsibility",
            },
          },
          {
            id: "ciealbus-u3-et-q3", difficulty: "core", totalMarks: 3,
            stem: "What is an ethical dilemma in business? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Dilemma", statement: "Competing values." }],
              steps: [
                { reasoning: "Situation requiring choice between competing values.", marks: 1, markCode: "M" },
                { reasoning: "Example: profit vs employee welfare.", marks: 1, markCode: "M" },
                { reasoning: "No easy 'right' answer.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Competing values example",
            },
          },
          {
            id: "ciealbus-u3-et-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define business ethics, CSR, stakeholder theory, ethical dilemma, sustainability, triple bottom line. (b) What is business ethics? (c) What is CSR? (d) What is stakeholder theory? (e) What is an ethical dilemma? Give example. (f) What is sustainability? (g) What is triple bottom line? (h) Evaluate whether businesses should prioritise ethics over profit.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Ethics", statement: "CSR, dilemmas." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Moral principles.", marks: 1, markCode: "M" },
                { reasoning: "(c) Social responsibility.", marks: 1, markCode: "M" },
                { reasoning: "(d) All stakeholders matter.", marks: 1, markCode: "M" },
                { reasoning: "(e) Competing values example.", marks: 1, markCode: "M" },
                { reasoning: "(f) Future needs preserved.", marks: 1, markCode: "M" },
                { reasoning: "(g) People, planet, profit.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Business ethics and CSR.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealbus-u3-et-notes", title: "Ethics — notes",
      summary: "Ethics=moral principles. CSR=people/planet/profit. Dilemmas require balancing competing values.",
      sections: [
        { heading: "Key idea", body: "Ethical business builds reputation but may sacrifice short-term profit." },
        { heading: "Frameworks", body: "Utilitarianism, deontology, virtue ethics guide decisions." },
      ],
    },
  },
  {
    file: "lesson-3-4.ts", exportName: "lesson394",
    lesson: {
      id: "ciealbus-u3-lesson-3-4", code: "3-4",
      title: "Business Decisions and Decision-Making",
      goal: "I CAN explain decision-making models and factors influencing business decisions.",
      standards: ["Cambridge A Level Business 9707", "Paper 3: decision-making"],
      vocabulary: [
        { term: "Decision-making", definition: "Process of choosing between alternatives." },
        { term: "Rational decision-making", definition: "Systematic analysis of options." },
        { term: "Bounded rationality", definition: "Limited information/cognitive capacity." },
        { term: "Risk", definition: "Uncertainty with known probabilities." },
        { term: "Uncertainty", definition: "Unknown probabilities/outcomes." },
        { term: "Decision tree", definition: "Visual representation of choices and outcomes." },
      ],
      concept: {
        id: "ciealbus-u3-s4-dec", title: "Decision-making",
        skill: "Analyse decision-making processes.",
        sections: [
          { heading: "Decision models", body: "Rational: identify problem, gather info, evaluate options, choose best. Bounded rationality: limited info/time means satisficing (good enough) not optimising." },
          { heading: "Risk and uncertainty", body: "Risk: known probabilities — can calculate expected value. Uncertainty: unknown probabilities — judgment required. Decision trees map choices/outcomes." },
        ],
        keyFormulas: [
          { name: "Rational", statement: "systematic analysis" },
          { name: "Satisficing", statement: "good enough choice" },
          { name: "Decision tree", statement: "choices/outcomes map" },
        ],
        workedExample: {
          problem: "A business must choose between two projects with different risks. How decide?",
          solution: "Evaluate expected value (probability × outcome), risk tolerance, strategic fit. Decision tree helps visualise options.",
        },
        questions: [
          {
            id: "ciealbus-u3-dm-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is rational decision-making?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Systematic analysis of options" }, { id: "b", text: "Random choice" }, { id: "c", text: "Gut feeling" }, { id: "d", text: "Following rules blindly" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Rational", statement: "Systematic analysis." }],
              steps: [{ reasoning: "Rational = systematic option analysis.", marks: 1, markCode: "M" }],
              finalAnswer: "Systematic analysis",
            },
          },
          {
            id: "ciealbus-u3-dm-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between risk and uncertainty?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Risk vs uncertainty", statement: "Known vs unknown." }],
              steps: [
                { reasoning: "Risk: known probabilities.", marks: 1, markCode: "M" },
                { reasoning: "Uncertainty: unknown probabilities.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Known vs unknown",
            },
          },
          {
            id: "ciealbus-u3-dm-q3", difficulty: "core", totalMarks: 3,
            stem: "What is satisficing? Why do businesses satisfice?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Satisficing", statement: "Good enough." }],
              steps: [
                { reasoning: "Choosing good enough rather than optimal.", marks: 1, markCode: "M" },
                { reasoning: "Limited info/time prevents full optimisation.", marks: 1, markCode: "M" },
                { reasoning: "Bounded rationality.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Good enough choice",
            },
          },
          {
            id: "ciealbus-u3-dm-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define decision-making, rational decision-making, bounded rationality, risk, uncertainty, decision tree. (b) What is rational decision-making? (c) What is bounded rationality? (d) What is satisficing? (e) What is a decision tree? (f) What is the difference between risk and uncertainty? (g) How do businesses make decisions? (h) Evaluate whether businesses should aim for optimal or satisfactory decisions.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Decision-making", statement: "Models, factors." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Systematic analysis.", marks: 1, markCode: "M" },
                { reasoning: "(c) Limited rationality.", marks: 1, markCode: "M" },
                { reasoning: "(d) Good enough choice.", marks: 1, markCode: "M" },
                { reasoning: "(e) Choices/outcomes map.", marks: 1, markCode: "M" },
                { reasoning: "(f) Known vs unknown probabilities.", marks: 1, markCode: "M" },
                { reasoning: "(g) Analysis, judgment, experience.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Decision-making models.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealbus-u3-dm-notes", title: "Decision-making — notes",
      summary: "Rational vs bounded rationality. Risk=known probabilities, uncertainty=unknown.",
      sections: [
        { heading: "Key idea", body: "Real-world decisions are constrained by information, time, cognitive limits." },
        { heading: "Tools", body: "Decision trees, expected value calculations aid complex choices." },
      ],
    },
  },
];
