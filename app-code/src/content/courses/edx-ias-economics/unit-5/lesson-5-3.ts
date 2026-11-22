import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "eias-econ-u5-lesson-5-3",
  code: "5-3",
  title: "Multinationals and Globalisation Impacts",
  goal: "I CAN evaluate multinational companies' effects on host economies.",
  standards: ["Edexcel IAS Economics 9EC01 Unit 5 — The International Economy"],
  vocabulary: [
    {
      term: "Multinational corporation (MNC)",
      definition: "Company operating in multiple countries.",
    },
    {
      term: "Foreign direct investment (FDI)",
      definition: "Investment in productive assets abroad.",
    },
    {
      term: "Transfer pricing",
      definition: "Internal prices between MNC divisions — tax avoidance.",
    },
    {
      term: "Offshoring",
      definition: "Moving production/services to lower-cost countries.",
    },
    {
      term: "Host country",
      definition: "Country receiving foreign investment.",
    },
    { term: "Home country", definition: "Country where MNC is headquartered." },
  ],
  concepts: [
    {
      id: "eias-econ-u5-mnc",
      title: "Multinationals and Host Countries",
      skill: "Evaluate MNC benefits and costs for host economies.",
      lesson: {
        sections: [
          {
            heading: "Benefits for host",
            body: "**Jobs**: employment creation — direct and indirect. **Capital**: FDI brings investment, technology. **Skills**: training, knowledge transfer. **Tax revenue**: corporate taxes, employment taxes. **Infrastructure**: MNCs may build roads, utilities.\n\n**Example**: car plant in developing country — jobs, supplier network, skills transfer.",
          },
          {
            heading: "Costs and criticisms",
            body: "**Job displacement**: local firms can't compete — MNCs dominate. **Profit repatriation**: profits sent home — limited local benefit. **Tax avoidance**: transfer pricing — shift profits to low-tax countries. **Exploitation**: low wages, poor conditions, environmental damage.\n\n**Evaluation**: depends on host country policies — strong regulation mitigates costs.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "MNC builds factory in poor country, exports profits home. Benefit to host?",
          solution: "Jobs and investment, but limited if profits leave.",
        },
      },
      questions: [
        {
          id: "eias-econ-u5-mnc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is foreign direct investment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Investment in productive assets abroad" },
              { id: "b", text: "Bank loans" },
              { id: "c", text: "Stock purchases" },
              { id: "d", text: "Foreign aid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "FDI",
                statement: "Physical investment.",
              },
            ],
            steps: [
              {
                reasoning: "FDI = real assets, not just financial flows.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Productive assets",
            commonErrors: ["Portfolio confused."],
          },
        },
        {
          id: "eias-econ-u5-mnc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of MNCs for host countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MNC benefits",
                statement: "Jobs + capital.",
              },
            ],
            steps: [
              {
                reasoning: "Job creation — direct employment + supplier jobs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Capital investment — brings money, technology.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Skills transfer — training, knowledge.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Jobs, capital, skills.",
            commonErrors: ["Only costs.", "Only one."],
          },
        },
        {
          id: "eias-econ-u5-mnc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how transfer pricing works for tax avoidance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transfer pricing",
                statement: "Profit shifting.",
              },
            ],
            steps: [
              {
                reasoning: "MNC sets internal prices between divisions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shifts profits to low-tax countries artificially.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Host country loses tax revenue — profits recorded elsewhere.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Illegal in many jurisdictions — tax evasion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Internal prices → profit to low-tax → host loses tax.",
            commonErrors: ["Legal always.", "No mechanism."],
          },
        },
        {
          id: "eias-econ-u5-mnc-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A developing country attracts a major MNC factory.",
          parts: [
            { label: "a", prompt: "Give two benefits.", marks: 4 },
            { label: "b", prompt: "Give two risks.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MNC evaluation",
                statement: "For and against.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Jobs — employment, income, poverty reduction.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Technology/skills transfer — knowledge spillovers.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Dependency — economy reliant on MNC.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Profit repatriation — little benefit stays local.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) jobs+skills (b) dependency+repatriation",
            commonErrors: ["Only benefits.", "Only risks."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u5-globalisation",
      title: "Globalisation Impacts and Sustainability",
      skill:
        "Evaluate globalisation's economic, social and environmental effects.",
      lesson: {
        sections: [
          {
            heading: "Economic impacts",
            body: "**Developed countries**: job losses in manufacturing, cheaper imports, lower inflation. **Developing countries**: FDI inflows, export-led growth, technology transfer, but also exploitation and dependency.\n\n**Inequality**: globalisation may widen gap — skilled workers in developed countries gain; unskilled in both may lose.",
          },
          {
            heading: "Social and environmental",
            body: "**Social**: cultural exchange, but also cultural homogenisation — Western brands dominate. **Environmental**: increased production/consumption → pollution, resource depletion, carbon emissions. **Regulatory arbitrage**: firms locate in lax-environment countries.\n\n**Sustainable globalisation**: policies to share gains, protect environment, ensure fair labour standards.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Factory moves to country with weak pollution laws. Environmental impact?",
          solution: "Regulatory arbitrage — pollution increases.",
        },
      },
      questions: [
        {
          id: "eias-econ-u5-gi-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is regulatory arbitrage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Following regulations" },
              { id: "b", text: "High compliance" },
              { id: "c", text: "International trade" },
              { id: "d", text: "Locating in lax-regulation countries" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Regulatory arbitrage",
                statement: "Lax jurisdiction.",
              },
            ],
            steps: [
              {
                reasoning: "Arbitrage = exploit regulatory differences.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Lax jurisdiction",
            commonErrors: ["Compliance confused."],
          },
        },
        {
          id: "eias-econ-u5-gi-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two economic benefits of globalisation for developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation benefits",
                statement: "FDI + markets.",
              },
            ],
            steps: [
              {
                reasoning: "FDI inflows — capital, jobs, technology.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Export-led growth — access to global markets.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Knowledge transfer — skills, best practices.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "FDI, exports, knowledge.",
            commonErrors: ["Only developed.", "Only one."],
          },
        },
        {
          id: "eias-econ-u5-gi-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how globalisation can increase inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation inequality",
                statement: "Skill premium.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Skilled workers in developed countries gain — higher wages.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Unskilled workers lose jobs to low-wage countries.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Capital owners gain more than labour — wealth concentration.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Developing countries may have unequal gains — elites benefit most.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Skill premium + capital vs labour.",
            commonErrors: ["Equal gains.", "No mechanism."],
          },
        },
        {
          id: "eias-econ-u5-gi-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Globalisation increases carbon emissions through trade.",
          parts: [
            { label: "a", prompt: "Explain the environmental link.", marks: 4 },
            {
              label: "b",
              prompt: "Suggest two policies to mitigate.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Environmental globalisation",
                statement: "Trade vs planet.",
              },
            ],
            steps: [
              {
                reasoning: "(a) More production/consumption → more emissions.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Transport emissions — shipping goods globally.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Carbon taxes — price emissions, incentivise reduction.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) International agreements — Paris Agreement, emissions targets.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) production+transport (b) carbon tax+agreements",
            commonErrors: ["No link.", "No policy."],
          },
        },
      ],
    },
  ],
};
