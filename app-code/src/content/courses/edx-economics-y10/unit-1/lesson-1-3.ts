import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ecn10-u1-lesson-1-3",
  code: "1-3",
  title: "Production Possibility and Growth",
  goal: "I CAN use production possibility curves to analyse choices and growth.",
  standards: ["Edexcel IGCSE Economics 4EC1 — The Market System"],
  vocabulary: [
    {
      term: "Production possibility curve (PPC)",
      definition: "Graph showing max output of two goods.",
    },
    {
      term: "Economic growth",
      definition: "Increase in productive capacity/output.",
    },
    { term: "Efficiency", definition: "Using resources fully — on the curve." },
    {
      term: "Inefficiency",
      definition: "Unused resources — inside the curve.",
    },
    { term: "Trade-off", definition: "Giving up one thing for another." },
  ],
  concepts: [
    {
      id: "ecn10-u1-ppc",
      title: "Production Possibility Curves",
      skill: "Read and interpret PPCs for efficiency and growth.",
      lesson: {
        sections: [
          {
            heading: "Reading the PPC",
            body: "**PPC** shows maximum combinations of two goods an economy can produce with given resources. **On the curve** = efficient (all resources used). **Inside** = inefficient (unused resources). **Outside** = unattainable (not enough resources).\n\n**Shape**: bowed outward — increasing opportunity cost as you produce more of one good (resources less suited to it).",
          },
          {
            heading: "PPC and growth",
            body: "**Economic growth** = shift outward of PPC — more resources or better technology. **Movement along** = changing production mix. **Unemployment** = inside curve. **Trade-offs**: producing more of one good means less of another — opportunity cost shown by curve slope.\n\n**Example**: economy chooses between consumer goods and capital goods — more capital goods now = more growth later.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "An economy produces at a point inside its PPC. What does this mean?",
          solution: "Inefficiency — resources are unemployed or underutilised.",
        },
      },
      questions: [
        {
          id: "ecn10-u1-ppc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a point inside the PPC represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unattainable output" },
              { id: "b", text: "Maximum output" },
              { id: "c", text: "Inefficiency — unused resources" },
              { id: "d", text: "Economic growth" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PPC",
                statement:
                  "Inside = inefficient; on = efficient; outside = unattainable.",
              },
            ],
            steps: [
              {
                reasoning: "Inside PPC = inefficiency.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Inefficiency",
            commonErrors: ["On curve confused."],
          },
        },
        {
          id: "ecn10-u1-ppc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What causes the PPC to shift outward?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PPC shift",
                statement: "More resources or better technology.",
              },
            ],
            steps: [
              {
                reasoning: "Discovery of new resources.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Improved technology/productivity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Increase in labour/capital.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "More resources, better technology, more factors of production.",
            commonErrors: ["Movement along confused.", "Only one."],
          },
        },
        {
          id: "ecn10-u1-ppc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the PPC is bowed outward rather than straight.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PPC shape",
                statement: "Increasing opportunity cost.",
              },
            ],
            steps: [
              {
                reasoning: "Resources not equally suited to all goods.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "As you produce more of one good, resources less suited.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Opportunity cost increases — curve bows.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: farmland vs factories.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Resources less suited as production shifts — increasing opportunity cost.",
            commonErrors: ["Straight assumed.", "No reason."],
          },
        },
        {
          id: "ecn10-u1-ppc-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An economy produces consumer goods and capital goods.",
          parts: [
            {
              label: "a",
              prompt: "Explain the trade-off shown on a PPC.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Why might an economy choose more capital goods?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PPC trade-offs",
                statement: "Present consumption vs future growth.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) More consumer goods = fewer capital goods — opportunity cost.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Movement along PPC shows this trade-off.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Capital goods = machinery, infrastructure — boost future production.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Sacrifice current consumption for long-term growth.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) consumer vs capital trade-off (b) capital=investment for future growth",
            commonErrors: ["No trade-off.", "No future link."],
          },
        },
      ],
    },
    {
      id: "ecn10-u1-growth",
      title: "Economic Growth and Development",
      skill: "Understand economic growth, its causes and measurement.",
      lesson: {
        sections: [
          {
            heading: "Measuring growth",
            body: "**GDP** (Gross Domestic Product): total value of output in an economy — main measure of economic size/growth. **Real GDP**: adjusted for inflation — shows true growth. **GDP per capita**: GDP ÷ population — average income.\n\n**Growth rate**: % change in real GDP year-on-year. Positive = growing; negative = recession.",
          },
          {
            heading: "Causes of growth",
            body: "**Investment**: capital goods, infrastructure, technology. **Education**: skilled workforce. **Innovation**: new products, processes, R&D. **Trade**: exports, specialisation. **Institutions**: stable government, property rights, rule of law.\n\n**Costs of growth**: environmental damage, resource depletion, inequality, pollution. **Sustainable growth**: growth that doesn't compromise future generations.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Country's real GDP grows 3% per year. What does this mean?",
          solution: "Output is increasing — economy growing at 3% annually.",
        },
      },
      questions: [
        {
          id: "ecn10-u1-growth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is GDP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Average income" },
              { id: "b", text: "Total exports" },
              { id: "c", text: "Total government spending" },
              { id: "d", text: "Total value of output in an economy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GDP",
                statement: "Total value of output.",
              },
            ],
            steps: [
              {
                reasoning: "GDP = total output value.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Total output",
            commonErrors: ["Exports confused."],
          },
        },
        {
          id: "ecn10-u1-growth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two causes of economic growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth causes",
                statement: "Investment, education, innovation.",
              },
            ],
            steps: [
              {
                reasoning: "Investment in capital and infrastructure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Education and skilled workforce.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Innovation and technology.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Investment, education, innovation.",
            commonErrors: ["Only one.", "Recession causes."],
          },
        },
        {
          id: "ecn10-u1-growth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why GDP per capita is a better measure of living standards than total GDP.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GDP per capita",
                statement: "Average income — accounts for population.",
              },
            ],
            steps: [
              {
                reasoning: "Total GDP doesn't account for population size.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Per capita = average income per person.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Better reflects individual living standards.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: large country high GDP but low per capita.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Per capita = average income — better reflects living standards.",
            commonErrors: ["Same measure.", "No population link."],
          },
        },
        {
          id: "ecn10-u1-growth-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A developing country wants to increase economic growth.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two policies to promote growth.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Identify one cost of rapid growth.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth policy",
                statement:
                  "Investment+education vs environmental/social costs.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Invest in education/skills.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Invest in infrastructure/technology.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Environmental damage — pollution, resource depletion.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Inequality — benefits may not be shared.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) education/infrastructure (b) environment/inequality",
            commonErrors: ["No policy.", "No cost."],
          },
        },
      ],
    },
  ],
};
