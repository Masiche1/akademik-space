module.exports = [
  {
    file: "lesson-2-1.ts", exportName: "lesson261",
    lesson: {
      id: "cieibs-u2-lesson-2-1", code: "2-1",
      title: "External Influences on Business Activity",
      goal: "I CAN identify external influences: economic, social, technological, political, legal, environmental.",
      standards: ["Cambridge IGCSE Business Studies 0450", "Paper 2: external influences"],
      vocabulary: [
        { term: "External influence", definition: "Factor outside business affecting operations." },
        { term: "Economic environment", definition: "Economic conditions affecting business." },
        { term: "Social trends", definition: "Changing societal attitudes/behaviour." },
        { term: "Technological change", definition: "New technologies affecting business." },
        { term: "Political/legal", definition: "Government policies and laws." },
        { term: "Environmental factors", definition: "Natural/physical conditions affecting business." },
      ],
      concept: {
        id: "cieibs-u2-s1-ext", title: "External influences",
        skill: "Identify and analyse external influences on business.",
        sections: [
          { heading: "External influences", body: "Economic: inflation, interest rates, exchange rates, economic growth. Social: demographics, lifestyle changes, consumer attitudes. Technological: internet, automation, digitalisation. Political/legal: government policies, regulations, taxes. Environmental: climate change, resource availability." },
          { heading: "Impact analysis", body: "Businesses must monitor external environment and adapt. Positive influences create opportunities; negative create threats. PESTLE analysis framework helps organise analysis." },
        ],
        keyFormulas: [
          { name: "PESTLE", statement: "Political, Economic, Social, Technological, Legal, Environmental" },
        ],
        workedExample: {
          problem: "How does rising interest rates affect a small business?",
          solution: "Higher borrowing costs, reduced consumer spending, slower growth — negative economic influence requiring adaptation.",
        },
        questions: [
          {
            id: "cieibs-u2-ex-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is PESTLE analysis?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Framework for analysing external influences" }, { id: "b", text: "A type of market research" }, { id: "c", text: "A financial calculation" }, { id: "d", text: "A marketing strategy" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "PESTLE", statement: "External influence framework." }],
              steps: [{ reasoning: "PESTLE analyses political, economic, social, technological, legal, environmental factors.", marks: 1, markCode: "M" }],
              finalAnswer: "External influence framework",
            },
          },
          {
            id: "cieibs-u2-ex-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What does PESTLE stand for?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "PESTLE", statement: "Six external factors." }],
              steps: [
                { reasoning: "Political, Economic, Social, Technological, Legal, Environmental.", marks: 1, markCode: "M" },
                { reasoning: "All six correctly identified.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Political, Economic, Social, Technological, Legal, Environmental",
            },
          },
          {
            id: "cieibs-u2-ex-q3", difficulty: "core", totalMarks: 3,
            stem: "Give an example of a technological influence on business.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Technological influence", statement: "Tech impact on business." }],
              steps: [
                { reasoning: "Valid example (e.g. internet, automation, AI).", marks: 1, markCode: "M" },
                { reasoning: "Explains impact on business.", marks: 1, markCode: "M" },
                { reasoning: "Clear connection.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Valid technological influence example",
            },
          },
          {
            id: "cieibs-u2-ex-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define external influence, economic environment, social trends, technological change, political/legal, environmental factors, PESTLE. (b) What is PESTLE? (c) What is an external influence? (d) Give an economic influence example. (e) Give a social influence example. (f) Give a technological influence example. (g) Give a political/legal influence example. (h) Analyse how a small business can respond to external influences.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "External influences", statement: "PESTLE analysis." }],
              steps: [
                { reasoning: "(a) All seven definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Six-factor framework.", marks: 1, markCode: "M" },
                { reasoning: "(c) Factor outside business affecting operations.", marks: 1, markCode: "M" },
                { reasoning: "(d) Valid economic example.", marks: 1, markCode: "M" },
                { reasoning: "(e) Valid social example.", marks: 1, markCode: "M" },
                { reasoning: "(f) Valid technological example.", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid political/legal example.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid response strategy.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "External influences and PESTLE.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieibs-u2-ex-notes", title: "External influences — notes",
      summary: "PESTLE: Political, Economic, Social, Technological, Legal, Environmental. Businesses must adapt to external changes.",
      sections: [
        { heading: "Key idea", body: "External environment creates both opportunities and threats." },
        { heading: "PESTLE", body: "Framework for systematic external analysis." },
      ],
    },
  },
  {
    file: "lesson-2-2.ts", exportName: "lesson262",
    lesson: {
      id: "cieibs-u2-lesson-2-2", code: "2-2",
      title: "Globalisation and Multinational Corporations",
      goal: "I CAN explain globalisation and the role of multinational corporations.",
      standards: ["Cambridge IGCSE Business Studies 0450", "Paper 2: globalisation"],
      vocabulary: [
        { term: "Globalisation", definition: "Increasing interconnectedness of world economies." },
        { term: "Multinational corporation (MNC)", definition: "Company operating in multiple countries." },
        { term: "Offshoring", definition: "Moving production to lower-cost countries." },
        { term: "Outsourcing", definition: "Contracting work to external providers." },
        { term: "Free trade", definition: "Trade without tariffs/quotas between countries." },
        { term: "Trade bloc", definition: "Group of countries with trade agreements." },
      ],
      concept: {
        id: "cieibs-u2-s2-glob", title: "Globalisation",
        skill: "Understand globalisation and MNCs.",
        sections: [
          { heading: "Globalisation", body: "Increased international trade, investment, communication. Driven by technology, transport improvements, trade agreements. Creates opportunities (new markets, cheaper inputs) and challenges (competition, cultural impact)." },
          { heading: "MNCs", body: "Large companies operating globally: Apple, Samsung, Coca-Cola. Benefits: jobs, investment, technology transfer. Concerns: tax avoidance, exploitation, environmental impact, cultural homogenisation." },
        ],
        keyFormulas: [
          { name: "Globalisation", statement: "world economic interconnectedness" },
          { name: "MNC", statement: "multi-country operations" },
        ],
        workedExample: {
          problem: "A factory moves production from UK to Vietnam. What is this and what are implications?",
          solution: "Offshoring — lower labour costs but job losses in UK, potential exploitation concerns, cheaper products for consumers.",
        },
        questions: [
          {
            id: "cieibs-u2-gq-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is globalisation?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Increasing interconnectedness of world economies" }, { id: "b", text: "A type of tax" }, { id: "c", text: "A marketing strategy" }, { id: "d", text: "A legal requirement" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Globalisation", statement: "World economic integration." }],
              steps: [{ reasoning: "Globalisation = increasing world economic interconnectedness.", marks: 1, markCode: "M" }],
              finalAnswer: "World economic integration",
            },
          },
          {
            id: "cieibs-u2-gq-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a multinational corporation?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "MNC", statement: "Multi-country company." }],
              steps: [
                { reasoning: "Company operating in multiple countries.", marks: 1, markCode: "M" },
                { reasoning: "e.g. Apple, Samsung, Coca-Cola.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Multi-country company",
            },
          },
          {
            id: "cieibs-u2-gq-q3", difficulty: "core", totalMarks: 3,
            stem: "What is offshoring? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Offshoring", statement: "Production relocation." }],
              steps: [
                { reasoning: "Moving production to lower-cost countries.", marks: 1, markCode: "M" },
                { reasoning: "Example: manufacturing moved to Asia.", marks: 1, markCode: "M" },
                { reasoning: "Driven by lower labour costs.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Production relocation",
            },
          },
          {
            id: "cieibs-u2-gq-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define globalisation, MNC, offshoring, outsourcing, free trade, trade bloc. (b) What is globalisation? (c) What is an MNC? Give an example. (d) What is offshoring? (e) What is outsourcing? (f) What is free trade? (g) What is a trade bloc? (h) Evaluate benefits and drawbacks of globalisation.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Globalisation", statement: "MNCs, trade, impacts." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) World economic integration.", marks: 1, markCode: "M" },
                { reasoning: "(c) Multi-country company; valid example.", marks: 1, markCode: "M" },
                { reasoning: "(d) Production relocation.", marks: 1, markCode: "M" },
                { reasoning: "(e) Contracting to external providers.", marks: 1, markCode: "M" },
                { reasoning: "(f) Trade without tariffs/quotas.", marks: 1, markCode: "M" },
                { reasoning: "(g) Country group with trade agreements.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Globalisation and MNCs.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieibs-u2-gq-notes", title: "Globalisation — notes",
      summary: "Globalisation=world economic integration. MNCs=multi-country companies. Offshoring=production relocation.",
      sections: [
        { heading: "Key idea", body: "Globalisation creates opportunities (markets, cheap inputs) and challenges (competition, exploitation)." },
        { heading: "MNCs", body: "Large global companies — bring investment but also concerns about power and ethics." },
      ],
    },
  },
  {
    file: "lesson-2-3.ts", exportName: "lesson263",
    lesson: {
      id: "cieibs-u2-lesson-2-3", code: "2-3",
      title: "Business Ethics and Corporate Social Responsibility",
      goal: "I CAN explain ethical issues, CSR and stakeholder responsibilities.",
      standards: ["Cambridge IGCSE Business Studies 0450", "Paper 2: ethics and CSR"],
      vocabulary: [
        { term: "Business ethics", definition: "Principles of right and wrong in business." },
        { term: "Corporate social responsibility (CSR)", definition: "Business responsibility to society/environment." },
        { term: "Fair trade", definition: "Trade ensuring fair prices/conditions for producers." },
        { term: "Sustainability", definition: "Meeting present needs without compromising future." },
        { term: "Ethical consumerism", definition: "Buying based on ethical considerations." },
        { term: "Triple bottom line", definition: "People, planet, profit." },
      ],
      concept: {
        id: "cieibs-u2-s3-eth", title: "Ethics and CSR",
        skill: "Understand ethical business practices.",
        sections: [
          { heading: "Business ethics", body: "Ethical issues: fair wages, safe working conditions, environmental responsibility, honest advertising, anti-corruption. Unethical practices: exploitation, pollution, misleading claims, tax avoidance." },
          { heading: "CSR", body: "Businesses have responsibilities beyond profit: to employees (fair treatment), customers (quality/safety), environment (sustainability), community (employment/support). Triple bottom line: people, planet, profit." },
        ],
        keyFormulas: [
          { name: "Ethics", statement: "right/wrong principles" },
          { name: "CSR", statement: "responsibility beyond profit" },
          { name: "Triple bottom line", statement: "people, planet, profit" },
        ],
        workedExample: {
          problem: "A clothing company uses sweatshop labour. What are the ethical issues?",
          solution: "Exploitation of workers, unsafe conditions, unfair wages — violates business ethics. CSR would require fair treatment and safe conditions.",
        },
        questions: [
          {
            id: "cieibs-u2-eth-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is corporate social responsibility?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Business responsibility to society/environment" }, { id: "b", text: "A type of tax" }, { id: "c", text: "A marketing strategy" }, { id: "d", text: "A legal requirement" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "CSR", statement: "Social/environmental responsibility." }],
              steps: [{ reasoning: "CSR = responsibility beyond profit to society/environment.", marks: 1, markCode: "M" }],
              finalAnswer: "Social/environmental responsibility",
            },
          },
          {
            id: "cieibs-u2-eth-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the triple bottom line?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Triple bottom line", statement: "People, planet, profit." }],
              steps: [
                { reasoning: "People (social), planet (environmental), profit (economic).", marks: 1, markCode: "M" },
                { reasoning: "Three dimensions of sustainability.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "People, planet, profit",
            },
          },
          {
            id: "cieibs-u2-eth-q3", difficulty: "core", totalMarks: 3,
            stem: "What is fair trade? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Fair trade", statement: "Fair producer conditions." }],
              steps: [
                { reasoning: "Trade ensuring fair prices/conditions for producers.", marks: 1, markCode: "M" },
                { reasoning: "Example: fair trade coffee/chocolate.", marks: 1, markCode: "M" },
                { reasoning: "Supports sustainable livelihoods.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Fair producer conditions",
            },
          },
          {
            id: "cieibs-u2-eth-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define business ethics, CSR, fair trade, sustainability, ethical consumerism, triple bottom line. (b) What is business ethics? (c) What is CSR? (d) What is fair trade? (e) What is the triple bottom line? (f) Give an ethical business issue. (g) Give an unethical business practice. (h) Evaluate whether businesses should prioritise ethics over profit.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Ethics/CSR", statement: "Ethical practices, responsibility." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Right/wrong principles in business.", marks: 1, markCode: "M" },
                { reasoning: "(c) Responsibility beyond profit.", marks: 1, markCode: "M" },
                { reasoning: "(d) Fair producer conditions.", marks: 1, markCode: "M" },
                { reasoning: "(e) People, planet, profit.", marks: 1, markCode: "M" },
                { reasoning: "(f) Valid ethical issue.", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid unethical practice.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Business ethics and CSR.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieibs-u2-eth-notes", title: "Ethics/CSR — notes",
      summary: "Ethics=right/wrong; CSR=responsibility beyond profit; triple bottom line=people/planet/profit.",
      sections: [
        { heading: "Key idea", body: "Ethical businesses balance profit with social/environmental responsibility." },
        { heading: "Fair trade", body: "Ensures fair prices and conditions for producers in developing countries." },
      ],
    },
  },
  {
    file: "lesson-2-4.ts", exportName: "lesson264",
    lesson: {
      id: "cieibs-u2-lesson-2-4", code: "2-4",
      title: "Government Influence on Business",
      goal: "I CAN explain how government policies affect business activity.",
      standards: ["Cambridge IGCSE Business Studies 0450", "Paper 2: government influence"],
      vocabulary: [
        { term: "Government policy", definition: "Government decisions affecting business." },
        { term: "Taxation", definition: "Government revenue from businesses/individuals." },
        { term: "Subsidy", definition: "Government financial support to businesses." },
        { term: "Regulation", definition: "Government rules controlling business." },
        { term: "Minimum wage", definition: "Legal minimum hourly pay." },
        { term: "Competition policy", definition: "Rules preventing unfair business practices." },
      ],
      concept: {
        id: "cieibs-u2-s4-gov", title: "Government influence",
        skill: "Understand government-business relationships.",
        sections: [
          { heading: "Government tools", body: "Taxation: income tax, corporation tax, VAT — raises revenue, affects behaviour. Subsidies: support specific industries. Regulation: health/safety, employment, environmental rules. Competition policy: prevent monopolies." },
          { heading: "Impact on business", body: "Government policies create opportunities (subsidies, infrastructure) and constraints (taxes, regulations). Businesses must comply with legal requirements." },
        ],
        keyFormulas: [
          { name: "Taxation", statement: "government revenue" },
          { name: "Subsidy", statement: "government support" },
          { name: "Regulation", statement: "government rules" },
        ],
        workedExample: {
          problem: "How does a minimum wage affect a restaurant business?",
          solution: "Increases labour costs but may improve employee retention/motivation. Business must comply with legal requirement.",
        },
        questions: [
          {
            id: "cieibs-u2-gov-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a subsidy?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Government financial support to businesses" }, { id: "b", text: "A type of tax" }, { id: "c", text: "A marketing strategy" }, { id: "d", text: "A legal requirement" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Subsidy", statement: "Government support." }],
              steps: [{ reasoning: "Subsidy = government financial support.", marks: 1, markCode: "M" }],
              finalAnswer: "Government support",
            },
          },
          {
            id: "cieibs-u2-gov-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is regulation?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Regulation", statement: "Government rules." }],
              steps: [
                { reasoning: "Government rules controlling business.", marks: 1, markCode: "M" },
                { reasoning: "e.g. health/safety, employment, environmental.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Government rules",
            },
          },
          {
            id: "cieibs-u2-gov-q3", difficulty: "core", totalMarks: 3,
            stem: "How does taxation affect business?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Taxation", statement: "Tax impact on business." }],
              steps: [
                { reasoning: "Reduces profit/income available to business.", marks: 1, markCode: "M" },
                { reasoning: "May affect pricing and investment decisions.", marks: 1, markCode: "M" },
                { reasoning: "Different taxes have different impacts.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Tax impact on business",
            },
          },
          {
            id: "cieibs-u2-gov-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define government policy, taxation, subsidy, regulation, minimum wage, competition policy. (b) What is a subsidy? (c) What is regulation? (d) What is taxation? (e) Give 3 examples of government tools. (f) How does taxation affect business? (g) How does regulation affect business? (h) Evaluate whether government should support small businesses.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Government influence", statement: "Policies, tools, impact." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Government financial support.", marks: 1, markCode: "M" },
                { reasoning: "(c) Government rules.", marks: 1, markCode: "M" },
                { reasoning: "(d) Government revenue tool.", marks: 1, markCode: "M" },
                { reasoning: "(e) Three valid tools.", marks: 1, markCode: "M" },
                { reasoning: "(f) Reduces profit, affects decisions.", marks: 1, markCode: "M" },
                { reasoning: "(g) Adds compliance costs, protects stakeholders.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Government influence on business.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieibs-u2-gov-notes", title: "Government influence — notes",
      summary: "Government tools: taxation, subsidies, regulation, competition policy. Policies create opportunities and constraints.",
      sections: [
        { heading: "Key idea", body: "Government balances economic growth with social/environmental protection." },
        { heading: "Regulation", body: "Rules protect workers, consumers, environment but add compliance costs." },
      ],
    },
  },
  {
    file: "lesson-2-5.ts", exportName: "lesson265",
    lesson: {
      id: "cieibs-u2-lesson-2-5", code: "2-5",
      title: "Small Businesses and Entrepreneurs",
      goal: "I CAN describe small business characteristics, challenges and support.",
      standards: ["Cambridge IGCSE Business Studies 0450", "Paper 2: small businesses"],
      vocabulary: [
        { term: "Small business", definition: "Business with limited size/employees." },
        { term: "Entrepreneurship", definition: "Starting and running new businesses." },
        { term: "Business plan", definition: "Document outlining business strategy." },
        { term: "Startup", definition: "Newly established business." },
        { term: "Growth barrier", definition: "Obstacle preventing business expansion." },
        { term: "Support network", definition: "Resources helping small businesses." },
      ],
      concept: {
        id: "cieibs-u2-s5-small", title: "Small businesses",
        skill: "Understand small business dynamics.",
        sections: [
          { heading: "Small business characteristics", body: "Advantages: flexibility, close customer relationships, lower overheads, quick decisions. Challenges: limited capital, lack of economies of scale, vulnerability to competition, difficulty accessing finance." },
          { heading: "Support and growth", body: "Support: government grants, business incubators, mentoring, training. Growth barriers: finance, skills, market access, regulation. Successful small businesses innovate and find niches." },
        ],
        keyFormulas: [
          { name: "Small business", statement: "limited size/employees" },
          { name: "Growth barriers", statement: "finance, skills, market access" },
        ],
        workedExample: {
          problem: "Why do most small businesses fail in first 5 years?",
          solution: "Insufficient capital, poor planning, competition, cash flow problems, lack of experience.",
        },
        questions: [
          {
            id: "cieibs-u2-sm-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a small business?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Business with limited size/employees" }, { id: "b", text: "A multinational company" }, { id: "c", text: "A government agency" }, { id: "d", text: "A type of tax" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Small business", statement: "Limited size." }],
              steps: [{ reasoning: "Small business = limited size/employees.", marks: 1, markCode: "M" }],
              finalAnswer: "Limited size business",
            },
          },
          {
            id: "cieibs-u2-sm-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a business plan?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Business plan", statement: "Business strategy document." }],
              steps: [
                { reasoning: "Document outlining business strategy.", marks: 1, markCode: "M" },
                { reasoning: "Used for planning and securing finance.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Business strategy document",
            },
          },
          {
            id: "cieibs-u2-sm-q3", difficulty: "core", totalMarks: 3,
            stem: "What are advantages of small businesses?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Small business advantages", statement: "Flexibility, relationships." }],
              steps: [
                { reasoning: "Flexibility, close customer relationships.", marks: 1, markCode: "M" },
                { reasoning: "Lower overheads, quick decisions.", marks: 1, markCode: "M" },
                { reasoning: "Personal service, local knowledge.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Flexibility, relationships, lower costs",
            },
          },
          {
            id: "cieibs-u2-sm-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define small business, entrepreneurship, business plan, startup, growth barrier, support network. (b) What is a small business? (c) What is a business plan? (d) What is entrepreneurship? (e) Give 3 advantages of small businesses. (f) Give 3 challenges of small businesses. (g) What support helps small businesses? (h) Design a support strategy for a new restaurant.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Small businesses", statement: "Characteristics, challenges, support." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Limited size/employees.", marks: 1, markCode: "M" },
                { reasoning: "(c) Business strategy document.", marks: 1, markCode: "M" },
                { reasoning: "(d) Starting/running new businesses.", marks: 1, markCode: "M" },
                { reasoning: "(e) Three valid advantages.", marks: 1, markCode: "M" },
                { reasoning: "(f) Three valid challenges.", marks: 1, markCode: "M" },
                { reasoning: "(g) Grants, incubators, mentoring, training.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid support strategy.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Small businesses and entrepreneurs.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieibs-u2-sm-notes", title: "Small businesses — notes",
      summary: "Small businesses: flexible but vulnerable. Challenges: finance, scale, competition. Support: grants, mentoring, training.",
      sections: [
        { heading: "Key idea", body: "Small businesses drive innovation and employment but face significant challenges." },
        { heading: "Growth", body: "Successful small businesses find niches, innovate, and scale carefully." },
      ],
    },
  },
  {
    file: "lesson-2-6.ts", exportName: "lesson266",
    lesson: {
      id: "cieibs-u2-lesson-2-6", code: "2-6",
      title: "Business Failure and Decline",
      goal: "I CAN identify causes of business failure and strategies for turnaround.",
      standards: ["Cambridge IGCSE Business Studies 0450", "Paper 2: business failure"],
      vocabulary: [
        { term: "Business failure", definition: "Business ceasing operations." },
        { term: "Insolvency", definition: "Inability to pay debts." },
        { term: "Liquidation", definition: "Closing business and selling assets." },
        { term: "Administration", definition: "Protection from creditors while restructuring." },
        { term: "Turnaround", definition: "Actions to rescue failing business." },
        { term: "Failure rate", definition: "Proportion of businesses that fail." },
      ],
      concept: {
        id: "cieibs-u2-s6-fail", title: "Business failure",
        skill: "Understand causes and responses to failure.",
        sections: [
          { heading: "Causes of failure", body: "Internal: poor management, inadequate capital, bad products, cash flow problems. External: competition, economic downturn, changing consumer preferences, regulation changes. Most failures in first 5 years." },
          { heading: "Failure responses", body: "Liquidation: close and sell assets. Administration: protect while restructuring. Turnaround: cost cutting, new management, product changes. Prevention: planning, cash flow management, market research." },
        ],
        keyFormulas: [
          { name: "Insolvency", statement: "can't pay debts" },
          { name: "Liquidation", statement: "close and sell assets" },
          { name: "Turnaround", statement: "rescue failing business" },
        ],
        workedExample: {
          problem: "A restaurant fails after 2 years. What are likely causes and what could have prevented it?",
          solution: "Causes: poor location, insufficient capital, competition, cash flow. Prevention: market research, better planning, adequate funding.",
        },
        questions: [
          {
            id: "cieibs-u2-fl-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is business failure?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Business ceasing operations" }, { id: "b", text: "Business expanding" }, { id: "c", text: "Business merging" }, { id: "d", text: "Business growing" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Business failure", statement: "Ceasing operations." }],
              steps: [{ reasoning: "Failure = business stops operating.", marks: 1, markCode: "M" }],
              finalAnswer: "Ceasing operations",
            },
          },
          {
            id: "cieibs-u2-fl-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is insolvency?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Insolvency", statement: "Can't pay debts." }],
              steps: [
                { reasoning: "Inability to pay debts as they fall due.", marks: 1, markCode: "M" },
                { reasoning: "Often leads to failure/liquidation.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Can't pay debts",
            },
          },
          {
            id: "cieibs-u2-fl-q3", difficulty: "core", totalMarks: 3,
            stem: "What are internal causes of business failure?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Failure causes", statement: "Internal vs external." }],
              steps: [
                { reasoning: "Internal: poor management, inadequate capital, bad products.", marks: 1, markCode: "M" },
                { reasoning: "Cash flow problems, lack of planning.", marks: 1, markCode: "M" },
                { reasoning: "All internal factors identified.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Internal failure causes",
            },
          },
          {
            id: "cieibs-u2-fl-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define business failure, insolvency, liquidation, administration, turnaround, failure rate. (b) What is business failure? (c) What is insolvency? (d) What is liquidation? (e) Give 3 internal causes of failure. (f) Give 3 external causes of failure. (g) What is turnaround? (h) Design a prevention strategy for a new business.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Business failure", statement: "Causes, responses, prevention." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Ceasing operations.", marks: 1, markCode: "M" },
                { reasoning: "(c) Can't pay debts.", marks: 1, markCode: "M" },
                { reasoning: "(d) Close and sell assets.", marks: 1, markCode: "M" },
                { reasoning: "(e) Three valid internal causes.", marks: 1, markCode: "M" },
                { reasoning: "(f) Three valid external causes.", marks: 1, markCode: "M" },
                { reasoning: "(g) Actions to rescue business.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid prevention strategy.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Business failure causes and prevention.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieibs-u2-fl-notes", title: "Business failure — notes",
      summary: "Failure causes: internal (management, capital) + external (competition, economy). Prevention: planning, cash flow, research.",
      sections: [
        { heading: "Key idea", body: "Most failures occur in first 5 years — planning and cash management critical." },
        { heading: "Turnaround", body: "Rescue strategies: cost cutting, new management, product changes." },
      ],
    },
  },
  {
    file: "lesson-2-7.ts", exportName: "lesson267",
    lesson: {
      id: "cieibs-u2-lesson-2-7", code: "2-7",
      title: "Economic Environment and Business Cycle",
      goal: "I CAN explain economic indicators and how business cycle affects business.",
      standards: ["Cambridge IGCSE Business Studies 0450", "Paper 2: economic environment"],
      vocabulary: [
        { term: "Economic environment", definition: "Overall economic conditions." },
        { term: "Business cycle", definition: "Fluctuations in economic activity." },
        { term: "Inflation", definition: "Rising general price level." },
        { term: "Interest rate", definition: "Cost of borrowing money." },
        { term: "Exchange rate", definition: "Value of one currency in another." },
        { term: "Economic growth", definition: "Increase in economic output." },
      ],
      concept: {
        id: "cieibs-u2-s7-econ", title: "Economic environment",
        skill: "Understand economic indicators and business cycle.",
        sections: [
          { heading: "Economic indicators", body: "Inflation: rising prices reduce purchasing power. Interest rates: cost of borrowing — high rates discourage investment/consumer spending. Exchange rates: affect import/export costs. Economic growth: expansion creates opportunities; recession creates challenges." },
          { heading: "Business cycle", body: "Boom: high growth, high demand, rising prices. Recession: low growth, falling demand, unemployment. Recovery: gradual improvement. Businesses must adapt to different phases." },
        ],
        keyFormulas: [
          { name: "Inflation", statement: "rising price level" },
          { name: "Interest rate", statement: "cost of borrowing" },
          { name: "Business cycle", statement: "boom→recession→recovery" },
        ],
        workedExample: {
          problem: "How does high inflation affect a supermarket?",
          solution: "Rising costs, reduced consumer purchasing power, pressure on margins — must manage costs and pricing carefully.",
        },
        questions: [
          {
            id: "cieibs-u2-ec-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is inflation?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Rising general price level" }, { id: "b", text: "Falling prices" }, { id: "c", text: "Economic growth" }, { id: "d", text: "A type of tax" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Inflation", statement: "Rising prices." }],
              steps: [{ reasoning: "Inflation = general rise in price level.", marks: 1, markCode: "M" }],
              finalAnswer: "Rising price level",
            },
          },
          {
            id: "cieibs-u2-ec-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the business cycle?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Business cycle", statement: "Economic fluctuations." }],
              steps: [
                { reasoning: "Fluctuations in economic activity.", marks: 1, markCode: "M" },
                { reasoning: "Boom→recession→recovery phases.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Economic fluctuations",
            },
          },
          {
            id: "cieibs-u2-ec-q3", difficulty: "core", totalMarks: 3,
            stem: "How do interest rates affect business?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Interest rates", statement: "Rate impact on business." }],
              steps: [
                { reasoning: "High rates = higher borrowing costs.", marks: 1, markCode: "M" },
                { reasoning: "Reduces investment and consumer spending.", marks: 1, markCode: "M" },
                { reasoning: "Low rates encourage borrowing/growth.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Borrowing cost impact",
            },
          },
          {
            id: "cieibs-u2-ec-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define economic environment, business cycle, inflation, interest rate, exchange rate, economic growth. (b) What is inflation? (c) What is the business cycle? (d) What is an interest rate? (e) How does inflation affect business? (f) How do interest rates affect business? (g) How does exchange rate affect business? (h) Analyse how a business should respond to economic downturn.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Economic environment", statement: "Indicators, business cycle." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Rising price level.", marks: 1, markCode: "M" },
                { reasoning: "(c) Economic fluctuations.", marks: 1, markCode: "M" },
                { reasoning: "(d) Cost of borrowing.", marks: 1, markCode: "M" },
                { reasoning: "(e) Reduces purchasing power, raises costs.", marks: 1, markCode: "M" },
                { reasoning: "(f) High rates discourage borrowing/spending.", marks: 1, markCode: "M" },
                { reasoning: "(g) Affects import/export costs.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid downturn response.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Economic environment and business cycle.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieibs-u2-ec-notes", title: "Economic environment — notes",
      summary: "Economic indicators: inflation, interest rates, exchange rates, growth. Business cycle: boom→recession→recovery.",
      sections: [
        { heading: "Key idea", body: "Economic conditions significantly impact business performance and strategy." },
        { heading: "Business cycle", body: "Businesses must adapt to different economic phases." },
      ],
    },
  },
];
