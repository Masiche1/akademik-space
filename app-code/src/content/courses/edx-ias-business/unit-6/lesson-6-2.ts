import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "eiasbiz-u6-lesson-6-2",
  code: "6-2",
  title: "Competition and Globalisation",
  goal: "I CAN analyse competitive forces and the impact of globalisation.",
  standards: [
    "Edexcel IAS Business WBP01 Unit 6 — External Influences on Business Activity",
  ],
  vocabulary: [
    {
      term: "Competition",
      definition: "Rival businesses offering similar products.",
    },
    {
      term: "Market share",
      definition: "Proportion of total market sales held by a business.",
    },
    {
      term: "Globalisation",
      definition: "Increasing interconnectedness of world economies.",
    },
    {
      term: "Multinational",
      definition: "Company operating in multiple countries.",
    },
    {
      term: "Outsourcing",
      definition: "Contracting work to external providers, often abroad.",
    },
    {
      term: "Free trade",
      definition: "Reduced barriers to international trade.",
    },
  ],
  concepts: [
    {
      id: "eiasbiz-u6-competition",
      title: "Competitive Environment",
      skill: "Analyse competition and market dynamics.",
      lesson: {
        sections: [
          {
            heading: "Competition types",
            body: "**Perfect competition**: many sellers, identical products — price takers. **Monopolistic**: many sellers, differentiated products — some price power. **Oligopoly**: few large firms dominate — interdependent pricing. **Monopoly**: single seller — price maker, regulated.\n\n**Competitive strategy**: cost leadership (lowest price), differentiation (unique product), focus (niche segment).",
          },
          {
            heading: "Market dynamics",
            body: "**Market share**: growing share = competitive success. **Barriers to entry**: patents, brand loyalty, economies of scale — protect incumbents. **Contestable markets**: low barriers → even monopolies must price fairly.\n\n**Example**: smartphone market — oligopoly, few brands dominate, intense competition.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Four firms control 90% of market. Structure?",
          solution: "Oligopoly.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u6-comp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is market share?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Company profit" },
              { id: "b", text: "Market size" },
              { id: "c", text: "Total sales" },
              { id: "d", text: "Proportion of total market sales held" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Market share",
                statement: "Sales proportion.",
              },
            ],
            steps: [
              {
                reasoning: "Market share = % of market.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Sales proportion",
            commonErrors: ["Total confused."],
          },
        },
        {
          id: "eiasbiz-u6-comp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two barriers to market entry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Barriers to entry",
                statement: "Entry obstacles.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Economies of scale — incumbents have cost advantage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Brand loyalty — customers prefer established brands.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Patents/licences — legal protection.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Scale, brand, patents.",
            commonErrors: ["Only one.", "Not barrier."],
          },
        },
        {
          id: "eiasbiz-u6-comp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between oligopoly and monopoly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Market structures",
                statement: "Few vs one.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Oligopoly: few large firms — interdependent decisions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Oligopoly: price competition limited — may collude.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Monopoly: single seller — full price control.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Monopoly: often regulated to prevent abuse.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Oligopoly=few firms; monopoly=one seller.",
            commonErrors: ["Same thing.", "No difference."],
          },
        },
        {
          id: "eiasbiz-u6-comp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A small bakery faces competition from a supermarket chain.",
          parts: [
            {
              label: "a",
              prompt: "Identify the competitive challenge.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Suggest two competitive responses.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Competitive response",
                statement: "Differentiate or cost-cut.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Supermarket has economies of scale — lower prices.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Bakery can't compete on price — must differentiate.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Focus on quality/freshness — artisan positioning.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Build local loyalty — community, custom orders.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Niche products — specialised cakes, gluten-free.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) scale disadvantage (b) quality+loyalty+niche",
            commonErrors: ["Price war.", "No differentiation."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u6-global",
      title: "Globalisation and Multinationals",
      skill: "Explain globalisation impacts on businesses and economies.",
      lesson: {
        sections: [
          {
            heading: "Globalisation",
            body: "**Causes**: free trade agreements, technology, transport improvements, multinational expansion. **Effects**: increased trade, cultural exchange, economic interdependence, job shifts.\n\n**Benefits**: access to global markets, cheaper inputs, technology transfer. **Costs**: job losses to low-cost countries, cultural homogenisation, economic vulnerability.",
          },
          {
            heading: "Multinationals",
            body: "**Advantages**: economies of scale, global brand recognition, tax optimisation, transfer of best practices. **Criticisms**: tax avoidance, job displacement, exploitation of cheap labour, environmental damage in developing countries.\n\n**Outsourcing**: contract work to cheaper locations — cost saving but quality/control risks.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Tech company moves call centre to India. Globalisation effect?",
          solution: "Outsourcing for cost advantage.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u6-glob-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is globalisation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Increasing interconnectedness of world economies",
              },
              { id: "b", text: "International travel" },
              { id: "c", text: "Currency exchange" },
              { id: "d", text: "Company size" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Globalisation",
                statement: "World economy links.",
              },
            ],
            steps: [
              {
                reasoning: "Globalisation = interconnected economies.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Interconnected economies",
            commonErrors: ["Travel confused."],
          },
        },
        {
          id: "eiasbiz-u6-glob-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of globalisation for businesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation benefits",
                statement: "Markets + inputs.",
              },
            ],
            steps: [
              {
                reasoning: "Access to global markets — bigger customer base.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Cheaper inputs — labour, materials from low-cost countries.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Technology transfer — learn global best practices.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Markets, cheaper inputs, technology.",
            commonErrors: ["Only one.", "Negative only."],
          },
        },
        {
          id: "eiasbiz-u6-glob-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two criticisms of multinational companies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multinational criticism",
                statement: "Power vs responsibility.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tax avoidance — shift profits to low-tax countries.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Job displacement — move production to cheap labour.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Exploitation — poor wages/conditions in developing countries.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Environmental damage — lax regulations exploited.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Tax avoidance, jobs, exploitation, environment.",
            commonErrors: ["Only benefits.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u6-glob-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A UK retailer considers sourcing products from Asia.",
          parts: [
            {
              label: "a",
              prompt: "Give two benefits of global sourcing.",
              marks: 4,
            },
            { label: "b", prompt: "Give two risks.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Global sourcing",
                statement: "Cost vs risk.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Lower costs — cheaper labour/materials.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Wider product range — access to new suppliers.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Quality control — distance makes monitoring hard.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Supply chain risk — delays, political instability.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) cost+range (b) quality+supply risk",
            commonErrors: ["Only benefits.", "No risks."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u6-tech",
      title: "Technology and Social Responsibility",
      skill:
        "Evaluate technology's business impact and corporate social responsibility.",
      lesson: {
        sections: [
          {
            heading: "Technology influence",
            body: "**E-commerce**: online selling — global reach, lower costs, but competition intense. **Automation/AI**: replace routine tasks — efficiency but job displacement. **Social media**: direct customer engagement — marketing power but reputation risk.\n\n**Disruption**: technology can destroy industries — Blockbuster vs Netflix, taxis vs Uber.",
          },
          {
            heading: "Corporate social responsibility",
            body: "**CSR**: businesses responsible to society — environment, employees, community, ethics. **Triple bottom line**: profit + people + planet. **Stakeholder theory**: consider all affected parties — not just shareholders.\n\n**Benefits**: reputation, customer loyalty, talent attraction, risk management.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Company donates to local schools and uses renewable energy. CSR?",
          solution: "Yes — community + environmental responsibility.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u6-tech-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is CSR?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tax payment" },
              { id: "b", text: "Profit maximisation" },
              { id: "c", text: "Business responsibility to society" },
              { id: "d", text: "Company size" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CSR",
                statement: "Social responsibility.",
              },
            ],
            steps: [
              {
                reasoning: "CSR = social/environmental responsibility.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Social responsibility",
            commonErrors: ["Profit confused."],
          },
        },
        {
          id: "eiasbiz-u6-tech-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways technology disrupts traditional business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tech disruption",
                statement: "New models replace old.",
              },
            ],
            steps: [
              {
                reasoning: "E-commerce replaces high-street retail.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Streaming replaces DVD/CD sales.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Automation replaces manual jobs.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "E-commerce, streaming, automation.",
            commonErrors: ["Only one.", "Not disruption."],
          },
        },
        {
          id: "eiasbiz-u6-tech-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two benefits of CSR for businesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CSR benefits",
                statement: "Reputation + loyalty.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Improved reputation — attracts customers and investors.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Customer loyalty — ethical consumers prefer responsible brands.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Talent attraction — employees prefer ethical employers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Risk management — anticipate regulation, avoid scandals.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Reputation, loyalty, talent, risk.",
            commonErrors: ["Only costs.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u6-tech-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company faces criticism for poor labour practices in its supply chain.",
          parts: [
            { label: "a", prompt: "Explain the CSR issue.", marks: 3 },
            { label: "b", prompt: "Suggest two corrective actions.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CSR response",
                statement: "Accountability + action.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Stakeholder responsibility — company responsible for suppliers.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Ethical sourcing — labour rights violated.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Audit suppliers — verify working conditions.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Switch to certified ethical suppliers.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Publish CSR report — transparency rebuilds trust.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) supply chain ethics (b) audit+switch+report",
            commonErrors: ["Ignore issue.", "No action."],
          },
        },
      ],
    },
  ],
};
