import type { Lesson } from "../../../types.ts";

export const lesson46: Lesson = {
  id: "cieibs-u4-lesson-4-6",
  code: "4-6",
  title: "External Environment, Ethics and Exam Synthesis",
  goal: "I CAN analyse external influences, assess ethics and CSR, and synthesise business knowledge for exams.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "External influences + exam technique",
  ],
  vocabulary: [
    {
      term: "PESTLE",
      definition:
        "Framework for external influences: Political, Economic, Social, Technological, Legal, Environmental.",
    },
    {
      term: "CSR",
      definition:
        "Corporate social responsibility — business's duty to society beyond profit.",
    },
    {
      term: "Stakeholder",
      definition: "Anyone affected by or affecting the business.",
    },
    {
      term: "Globalisation",
      definition: "Increasing interconnectedness of world economies.",
    },
    {
      term: "External influences",
      definition: "Factors outside the business that affect its operations.",
    },
    {
      term: "Business cycle",
      definition: "Fluctuations between boom and recession over time.",
    },
  ],
  concepts: [
    {
      id: "cieibs-u4-s6-external",
      title: "External environment and ethics",
      skill: "Analyse external influences and assess ethical responsibilities.",
      lesson: {
        sections: [
          {
            heading: "External influences",
            body: "PESTLE analyses the external environment. Political: government stability, trade policy, subsidies. Economic: growth, inflation, interest rates, exchange rates. Social: demographics, consumer trends, education. Technological: innovation, automation, e-commerce. Legal: employment law, health and safety, consumer protection. Environmental: climate change, sustainability pressures. The business cycle adds timing — booms favour expansion, recessions favour cost control.",
          },
          {
            heading: "Ethics and CSR",
            body: "Business ethics covers honesty, fair treatment, environmental responsibility and avoiding harm. CSR means going beyond legal minimums — supporting communities, reducing environmental impact, ethical sourcing. Stakeholders include shareholders, employees, customers, suppliers, government and the local community — each with different expectations. Balancing stakeholder interests is a core management challenge.",
          },
          {
            heading: "Globalisation and government",
            body: "Globalisation means firms operate across borders — MNCs locate production where costs are low and sell globally. Government influences business through taxes, subsidies, regulations, minimum wage, competition policy and trade agreements. Small businesses often face heavier relative burdens from regulation and taxes than large firms.",
          },
        ],
      },
      questions: [
    {
      id: "cieibs-u4-ex-q1",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What does PESTLE stand for?",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "PESTLE",
            statement: "Six external factors.",
          },
        ],
        steps: [
          {
            reasoning:
              "Political, Economic, Social, Technological, Legal, Environmental.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "Political, Economic, Social, Technological, Legal, Environmental",
      },
    },
    {
      id: "cieibs-u4-ex-q2",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is 'corporate social responsibility' (CSR)?",
      response: {
        type: "mcq",
        choices: [
          {
            id: "a",
            text: "Business's voluntary duty to society beyond profit",
          },
          { id: "b", text: "A type of business organisation" },
          { id: "c", text: "A legal requirement to donate money" },
          { id: "d", text: "Paying taxes on time" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "CSR",
            statement: "Voluntary social duty.",
          },
        ],
        steps: [
          {
            reasoning:
              "CSR is the business's voluntary responsibility to society — ethical conduct, community support, environmental care — beyond legal minimums.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(a)** Business's voluntary duty to society beyond profit",
      },
    },
    {
      id: "cieibs-u4-ex-q3",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is a 'stakeholder'?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only employees" },
          { id: "b", text: "Government officials" },
          { id: "c", text: "Anyone affected by or affecting the business" },
          { id: "d", text: "Only shareholders" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Stakeholder",
            statement: "Affected parties.",
          },
        ],
        steps: [
          {
            reasoning:
              "A stakeholder is anyone affected by or able to affect the business — shareholders, employees, customers, suppliers, community, government.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(c)** Anyone affected by or affecting the business",
      },
    },
    {
      id: "cieibs-u4-ex-q4",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "Name three external influences on business from PESTLE.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "PESTLE factors",
            statement:
              "Political, economic, social, technological, legal, environmental.",
          },
        ],
        steps: [
          {
            reasoning:
              "Any three: political (government policy), economic (interest rates, growth), social (demographics, trends), technological (innovation), legal (employment law), environmental (climate, sustainability).",
            marks: 2,
            markCode: "M",
          },
        ],
        finalAnswer: "Any three PESTLE factors.",
      },
    },
    {
      id: "cieibs-u4-ex-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "How many factors does PESTLE analyse?",
      response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
      markscheme: {
        principles: [
          { kind: "definition", name: "PESTLE", statement: "Six factors." },
        ],
        steps: [
          {
            reasoning: "PESTLE analyses six external factors.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "6",
      },
    },
    {
      id: "cieibs-u4-ex-q6",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how an economic downturn affects a business.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Economic downturn",
            statement: "Lower demand, tighter finance.",
          },
        ],
        steps: [
          {
            reasoning:
              "Consumer spending falls, reducing demand and sales revenue.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Credit becomes harder to obtain and interest rates may rise, increasing costs.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Businesses respond by cutting costs, reducing output, delaying investment or seeking new markets.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Lower demand, tighter credit — businesses cut costs and adapt.",
        commonErrors: ["Claiming downturns only affect large firms."],
      },
    },
    {
      id: "cieibs-u4-ex-q7",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain two benefits of CSR to a business.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "CSR benefits",
            statement: "Reputation, motivation, markets.",
          },
        ],
        steps: [
          {
            reasoning:
              "Strong CSR builds reputation and brand image — customers prefer ethical firms, and it can attract ethically-minded consumers.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It motivates employees — staff feel proud to work for responsible firms and stay longer.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It can open new markets — some customers and investors specifically seek sustainable businesses.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Reputation, employee motivation, new markets.",
        commonErrors: ["Treating CSR as pure cost."],
      },
    },
    {
      id: "cieibs-u4-ex-q8",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how government can influence business activity.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Government influence",
            statement: "Policy tools.",
          },
        ],
        steps: [
          {
            reasoning:
              "Taxes and subsidies change costs and incentives — lower corporation tax encourages investment, subsidies support industries.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Regulations set rules — employment law, health and safety, consumer protection, environmental standards.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Trade policy and competition law affect markets — tariffs protect, competition policy prevents monopolies.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Taxes, subsidies, regulations, trade and competition policy.",
        commonErrors: ["Listing only one influence."],
      },
    },
    {
      id: "cieibs-u4-ex-q9",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain why different stakeholders may have conflicting interests.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Stakeholder conflict",
            statement: "Different priorities.",
          },
        ],
        steps: [
          {
            reasoning:
              "Shareholders want high profits and dividends; employees want higher pay and job security — these can conflict.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Customers want low prices; suppliers want high prices; government wants taxes and regulation compliance.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Management must balance these competing demands — no decision satisfies everyone.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Different priorities create trade-offs management must balance.",
        commonErrors: [
          "Ignoring that stakeholder interests genuinely conflict.",
        ],
      },
    },
    {
      id: "cieibs-u4-ex-q10",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is 'globalisation'?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "A business expanding to one new shop" },
          { id: "b", text: "A type of business merger" },
          { id: "c", text: "A government tax policy" },
          { id: "d", text: "Increasing interconnectedness of world economies" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Globalisation",
            statement: "Interconnected world economies.",
          },
        ],
        steps: [
          {
            reasoning:
              "Globalisation is the increasing interconnectedness of world economies through trade, investment and communication.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(d)** Increasing interconnectedness of world economies",
      },
    },
    {
      id: "cieibs-u4-ex-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "(a) Name two benefits of globalisation for businesses. (b) Name one drawback.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Globalisation effects",
            statement: "Markets and risks.",
          },
        ],
        steps: [
          {
            reasoning:
              "Benefits: access to global markets, cheaper labour and inputs, new customers.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Drawback: exposure to global competition, exchange rate risks, dependence on foreign markets.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "Benefits: global markets, cheaper inputs; drawback: global competition and risk.",
      },
    },
    {
      id: "cieibs-u4-ex-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain why a business might relocate production abroad.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Offshoring",
            statement: "Cost-driven relocation.",
          },
        ],
        steps: [
          {
            reasoning:
              "Lower labour and production costs in developing countries reduce unit costs.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Access to new markets, resources or government incentives.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Risks include longer supply chains, quality control, cultural differences and reputational concerns about labour standards.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Lower costs and market access — with supply-chain and reputational risks.",
        commonErrors: ["One-sided cost-only analysis."],
      },
    },
    {
      id: "cieibs-u4-ex-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess whether CSR is worth the cost for a business.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "CSR cost-benefit.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: CSR has costs but can generate long-term benefits.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Costs: spending on ethical practices, donations, environmental measures reduces short-term profit.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Benefits: better reputation, customer loyalty, employee motivation, reduced risk of boycotts or regulation, possible market access.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: genuine CSR is worthwhile; token gestures without real commitment can backfire.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Worthwhile if genuine; token CSR can backfire.",
        commonErrors: ["Treating CSR as pure cost or pure benefit."],
      },
    },
    {
      id: "cieibs-u4-ex-q14",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess whether government regulation always harms business.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Regulation effects.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: regulation can harm some businesses but also protect markets and consumers.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Costs: compliance expenses, restrictions on practices, reduced flexibility, possible competitive disadvantage vs unregulated rivals.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Benefits: level playing field, consumer trust, prevention of harmful practices, protection from unfair competition, government support sometimes accompanies regulation.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: well-designed regulation protects the market; poorly designed regulation can burden business excessively.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Regulation has costs and benefits; design matters.",
        commonErrors: ["One-sided view of regulation."],
      },
    },
    {
      id: "cieibs-u4-ex-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate the view that small businesses suffer more from external influences than large firms.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "Size and vulnerability.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: small firms are generally more vulnerable to external shocks.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasons: less financial buffer, less bargaining power, fewer resources to adapt, higher relative regulatory burden.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Counter-argument: large firms face greater scrutiny, more complex regulation, higher absolute costs and greater reputational risk; small firms can be more agile.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: small firms are more vulnerable but also more adaptable; both face external pressures differently.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Small firms more vulnerable but more agile.",
        commonErrors: ["Ignoring large-firm disadvantages."],
      },
    },
    {
      id: "cieibs-u4-ex-q16",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess the impact of the business cycle on business decisions.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Business cycle timing.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: the business cycle affects timing of decisions more than the decisions themselves.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "In boom: demand high, firms expand, hire, invest; costs rise; competition intensifies.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "In recession: demand falls, firms cut costs, delay investment, focus on efficiency and survival.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: successful firms time expansion in booms and prepare for downturns — counter-cyclical planning is key.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Cycle affects timing: expand in boom, prepare in recession.",
        commonErrors: ["Treating cycle phases as identical."],
      },
    },
    {
      id: "cieibs-u4-ex-q17",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Which PESTLE factor covers government policy and political stability?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Economic" },
          { id: "b", text: "Technological" },
          { id: "c", text: "Political" },
          { id: "d", text: "Social" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "PESTLE", statement: "Political first." },
        ],
        steps: [
          {
            reasoning:
              "Political covers government policy, stability, trade agreements and political risk.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(c)** Political",
      },
    },
    {
      id: "cieibs-u4-ex-q18",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how technological change affects business.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Technological change",
            statement: "Innovation and disruption.",
          },
        ],
        steps: [
          {
            reasoning:
              "New technology improves efficiency — automation, software, communications reduce costs and increase output.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It creates new products and markets — e-commerce, apps, digital services.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It also disrupts — firms that fail to adapt lose markets to tech-savvy competitors.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Efficiency gains and new markets, but also disruption risk.",
      },
    },
    {
      id: "cieibs-u4-ex-q19",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how a business can respond to an external threat.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "skill",
            name: "External response",
            statement: "Monitor, adapt, diversify.",
          },
        ],
        steps: [
          {
            reasoning:
              "Monitor the environment — track PESTLE factors to anticipate changes.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Adapt — adjust prices, products, processes or markets to fit new conditions.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Diversify — reduce dependence on one market or product to spread risk.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Monitor, adapt and diversify to manage external threats.",
      },
    },
    {
      id: "cieibs-u4-ex-q20",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "'In business studies, the best answers apply theory to the specific case rather than reciting definitions.' Assess this view.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Exam assessment",
            statement: "Application over definition.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: accurate definitions are necessary but insufficient for top marks.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Supporting evidence: examiners reward answers that name the concept AND apply it to the case — generic theory scores poorly.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Counter-argument: definitions show knowledge; some questions explicitly ask for definitions or explanations.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: combine accurate theory with specific application — that is what distinguishes high-scoring answers.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Application distinguishes top answers; definitions alone score lower.",
        commonErrors: ["Recommending definitions only."],
      },
    },
      ],
    },
  ],
};
