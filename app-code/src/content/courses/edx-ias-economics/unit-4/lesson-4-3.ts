import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "eias-econ-u4-lesson-4-3",
  code: "4-3",
  title: "Supply-Side Policies",
  goal: "I CAN explain supply-side policies and their long-term effects.",
  standards: [
    "Edexcel IAS Economics 9EC01 Unit 4 — Government Macroeconomic Policy",
  ],
  vocabulary: [
    {
      term: "Supply-side policy",
      definition: "Policies to increase productive capacity (LRAS).",
    },
    {
      term: "LRAS",
      definition: "Long-run aggregate supply — maximum sustainable output.",
    },
    {
      term: "Deregulation",
      definition: "Removing barriers to business — less red tape.",
    },
    {
      term: "Privatisation",
      definition: "Selling state-owned assets to private sector.",
    },
    {
      term: "Labour market flexibility",
      definition: "Ease of hiring/firing, wage flexibility.",
    },
    { term: "Human capital", definition: "Skills and education of workforce." },
  ],
  concepts: [
    {
      id: "eias-econ-u4-ssp",
      title: "Supply-Side Policy Types",
      skill: "Explain market-based and interventionist supply-side policies.",
      lesson: {
        sections: [
          {
            heading: "Market-based policies",
            body: "**Deregulation**: reduce bureaucracy, simplify rules — lower business costs. **Privatisation**: state assets to private sector — efficiency incentives. **Tax cuts**: lower income/corporation tax — work incentives, investment. **Labour flexibility**: easier hiring/firing — labour market adapts.\n\n**Free-market approach**: let markets allocate resources — minimal government interference.",
          },
          {
            heading: "Interventionist policies",
            body: "**Education/training**: improve human capital — skilled workforce. **Infrastructure**: transport, digital — reduce business costs. **R&D support**: innovation, technology. **Regional policy**: reduce unemployment disparities.\n\n**Evaluation**: supply-side takes time to work — long lags; benefits may take years to materialise.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Government cuts corporation tax to encourage investment. Policy type?",
          solution: "Market-based supply-side.",
        },
      },
      questions: [
        {
          id: "eias-econ-u4-ssp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is supply-side policy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Taxation only" },
              { id: "b", text: "Increasing productive capacity (LRAS)" },
              { id: "c", text: "Demand management" },
              { id: "d", text: "Interest rates" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Supply-side",
                statement: "Capacity increase.",
              },
            ],
            steps: [
              {
                reasoning: "Supply-side = LRAS increase.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Capacity increase",
            commonErrors: ["Demand confused."],
          },
        },
        {
          id: "eias-econ-u4-ssp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two market-based supply-side policies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Market-based SSP",
                statement: "Deregulation + incentives.",
              },
            ],
            steps: [
              {
                reasoning: "Deregulation — reduce bureaucracy, lower costs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Tax cuts — improve work/investment incentives.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Privatisation — private sector efficiency.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Deregulation, tax cuts, privatisation.",
            commonErrors: ["Interventionist.", "Only one."],
          },
        },
        {
          id: "eias-econ-u4-ssp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how education improves long-run growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Human capital",
                statement: "Skills → productivity.",
              },
            ],
            steps: [
              {
                reasoning: "Better education → more skilled workers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Skilled workers more productive — higher output per worker.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Innovation — educated workforce drives new ideas/technology.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Raises LRAS — sustainable long-run growth.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Education → skills → productivity → LRAS↑.",
            commonErrors: ["AD only.", "No mechanism."],
          },
        },
        {
          id: "eias-econ-u4-ssp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Government wants sustainable long-run growth without inflation.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two supply-side policies.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Explain why they avoid inflation.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Supply-side growth",
                statement: "Capacity not demand.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Education/training — improve human capital.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Infrastructure investment — reduce business costs.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Increases LRAS — supply grows with demand.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) No demand-pull inflation — capacity keeps pace.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) education+infrastructure (b) LRAS not AD",
            commonErrors: ["Demand policy.", "Inflation risk."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u4-ssp-eval",
      title: "Supply-Side Policy Evaluation",
      skill: "Evaluate supply-side policies' effectiveness and limitations.",
      lesson: {
        sections: [
          {
            heading: "Advantages",
            body: "**Sustainable**: increases capacity — growth without inflation. **Supply-side**: doesn't just boost demand temporarily — real improvement. **Productivity**: improves efficiency — higher living standards.\n\n**Supply-side policies**: shift LRAS right — sustainable long-run growth.",
          },
          {
            heading: "Disadvantages",
            body: "**Time lags**: education/infrastructure take years — slow results. **Costs**: government investment expensive — budget pressure. **Inequality**: benefits may accrue to skilled/wealthy — widening gap. **Uncertain**: can't guarantee firms invest or workers train.\n\n**Evaluation**: best combined with demand management — supply-side for long-term, demand-side for short-term stabilisation.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Government invests in schools but results take 10 years. Limitation?",
          solution: "Long time lags.",
        },
      },
      questions: [
        {
          id: "eias-econ-u4-sspeval-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main advantage of supply-side policies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Low cost" },
              { id: "b", text: "Sustainable growth without inflation" },
              { id: "c", text: "Quick results" },
              { id: "d", text: "Immediate jobs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SSP advantage",
                statement: "LRAS increase.",
              },
            ],
            steps: [
              {
                reasoning: "SSP = sustainable capacity growth.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Sustainable growth",
            commonErrors: ["Quick confused."],
          },
        },
        {
          id: "eias-econ-u4-sspeval-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two disadvantages of supply-side policies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SSP drawbacks",
                statement: "Lags + costs.",
              },
            ],
            steps: [
              {
                reasoning: "Long time lags — results take years.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "High cost — government investment expensive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Uncertain — can't guarantee firms/workers respond.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Lags, cost, uncertainty.",
            commonErrors: ["Only benefits.", "Only one."],
          },
        },
        {
          id: "eias-econ-u4-sspeval-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why supply-side policies may increase inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SSP inequality",
                statement: "Skilled benefit more.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tax cuts benefit high earners more — progressive vs regressive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Education/training benefits those who can access — may widen gap.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Privatisation may reduce jobs/services in deprived areas.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Growth benefits may concentrate in already-wealthy regions.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Skilled/wealthy benefit disproportionately.",
            commonErrors: ["Equal benefits.", "No mechanism."],
          },
        },
        {
          id: "eias-econ-u4-sspeval-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Government wants long-term growth but faces short-term recession.",
          parts: [
            { label: "a", prompt: "Suggest complementary policies.", marks: 4 },
            { label: "b", prompt: "Explain the timing logic.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy mix",
                statement: "Short + long term.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Demand management now — stimulus to exit recession.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Supply-side investment — education, infrastructure for future.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Demand policy acts fast — immediate AD boost.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Supply-side acts slowly — capacity grows over years.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) demand now+supply long-term (b) timing differs",
            commonErrors: ["One policy.", "No timing."],
          },
        },
      ],
    },
  ],
};
