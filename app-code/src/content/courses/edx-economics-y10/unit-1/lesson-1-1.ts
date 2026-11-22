import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ecn10-u1-lesson-1-1",
  code: "1-1",
  title: "The Basic Economic Problem",
  goal: "I CAN explain scarcity, choice and opportunity cost.",
  standards: ["Edexcel IGCSE Economics 4EC1 — The Market System"],
  vocabulary: [
    { term: "Scarcity", definition: "Limited resources vs unlimited wants." },
    { term: "Opportunity cost", definition: "Next best alternative forgone." },
    {
      term: "Factors of production",
      definition: "Land, labour, capital, enterprise.",
    },
    {
      term: "Economic problem",
      definition: "How to allocate scarce resources.",
    },
  ],
  concepts: [
    {
      id: "ecn10-u1-scarcity",
      title: "Scarcity and Choice",
      skill: "Explain scarcity and why choices must be made.",
      lesson: {
        sections: [
          {
            heading: "The economic problem",
            body: "Resources are **scarce** — land, labour, capital, enterprise are limited. Wants are **unlimited** — we always want more. This creates the **economic problem**: how to allocate scarce resources to satisfy unlimited wants.\n\n**Three questions**: What to produce? How to produce it? For whom to produce? Every society must answer these.",
          },
          {
            heading: "Opportunity cost",
            body: "Every choice has a cost — the **next best alternative forgone**. If you spend £20 on a book, the cost is what you could have bought instead.\n\n**Government choices**: spend on healthcare vs defence vs education — opportunity cost of each. **Individuals**: time, money — choosing one thing means giving up another.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A government spends £10bn on defence instead of hospitals. What's the opportunity cost?",
          solution: "The healthcare that £10bn could have provided.",
        },
      },
      questions: [
        {
          id: "ecn10-u1-scarcity-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is scarcity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Limited resources vs unlimited wants" },
              { id: "b", text: "Unlimited resources" },
              { id: "c", text: "High prices" },
              { id: "d", text: "Poverty" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Scarcity",
                statement: "Limited resources vs unlimited wants.",
              },
            ],
            steps: [
              {
                reasoning: "Scarcity = limited vs unlimited.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Limited vs unlimited",
            commonErrors: ["Poverty confused."],
          },
        },
        {
          id: "ecn10-u1-scarcity-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Define opportunity cost and give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Opportunity cost",
                statement: "Next best alternative forgone.",
              },
            ],
            steps: [
              {
                reasoning: "Next best alternative forgone.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Example: spending money on one thing loses another.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Applies to individuals and governments.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Next best alternative forgone — e.g., £20 book vs cinema ticket.",
            commonErrors: ["Money cost confused.", "No example."],
          },
        },
        {
          id: "ecn10-u1-scarcity-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the three questions every economy must answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Economic questions",
                statement: "What, how, for whom.",
              },
            ],
            steps: [
              {
                reasoning: "What to produce — which goods/services.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "How to produce — methods, resources.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "For whom — distribution among population.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Scarcity forces these choices.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "What, how, for whom — scarcity forces choices.",
            commonErrors: ["Only one question.", "No scarcity link."],
          },
        },
        {
          id: "ecn10-u1-scarcity-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student has 4 hours free and must choose between work, study and sport.",
          parts: [
            { label: "a", prompt: "Define opportunity cost.", marks: 2 },
            {
              label: "b",
              prompt:
                "If they choose study for 4 hours, what's the opportunity cost?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain how opportunity cost applies to a government budget.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Opportunity cost application",
                statement: "Every choice has a cost.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Next best alternative forgone.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) Foregone work income + sport enjoyment.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) The next best alternative (work or sport).",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Spending on one service means less for others.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Example: defence vs healthcare.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) next best alternative (b) work+sport forgone (c) defence vs healthcare",
            commonErrors: ["Money confused.", "No application."],
          },
        },
      ],
    },
    {
      id: "ecn10-u1-factors",
      title: "Factors of Production",
      skill: "Identify and understand land, labour, capital and enterprise.",
      lesson: {
        sections: [
          {
            heading: "The four factors",
            body: "**Land**: natural resources — soil, water, minerals, oil. **Labour**: human effort — workers, skills, knowledge. **Capital**: man-made resources — machinery, tools, buildings, technology. **Enterprise**: the entrepreneur who organises the other factors and takes risk.\n\n**Factor incomes**: land → rent, labour → wages, capital → interest/profit, enterprise → profit.",
          },
          {
            heading: "Factor mobility",
            body: "**Geographic mobility**: can workers/resources move to where needed? **Occupational mobility**: can workers change jobs/skills? **Barriers**: skills mismatch, housing costs, family ties, licensing.\n\n**Productivity**: output per worker — higher productivity = more output for same input = economic growth.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A farmer uses a tractor (capital) to work land with hired workers (labour). Which factor is the farmer?",
          solution: "Enterprise — the entrepreneur organising other factors.",
        },
      },
      questions: [
        {
          id: "ecn10-u1-factors-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which factor of production is a tractor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Land" },
              { id: "b", text: "Labour" },
              { id: "c", text: "Enterprise" },
              { id: "d", text: "Capital" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Capital",
                statement: "Man-made resources — machinery, tools.",
              },
            ],
            steps: [
              {
                reasoning: "Tractor = capital (man-made).",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Capital",
            commonErrors: ["Land confused — natural."],
          },
        },
        {
          id: "ecn10-u1-factors-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the four factors of production and give an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Factors",
                statement: "Land, labour, capital, enterprise.",
              },
            ],
            steps: [
              {
                reasoning: "Land and labour with examples.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Capital and enterprise with examples.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "All four correctly identified.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Land (soil), labour (workers), capital (machinery), enterprise (entrepreneur).",
            commonErrors: ["Missing factor.", "No example."],
          },
        },
        {
          id: "ecn10-u1-factors-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between land and capital.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Land vs capital",
                statement: "Natural vs man-made.",
              },
            ],
            steps: [
              {
                reasoning: "Land = natural resources — soil, minerals, water.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Capital = man-made — machinery, buildings, technology.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Land is original factor; capital is produced.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: oil field (land) vs oil rig (capital).",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Land = natural; capital = man-made — original vs produced.",
            commonErrors: ["Same thing.", "No example."],
          },
        },
        {
          id: "ecn10-u1-factors-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A country wants to increase productivity in manufacturing.",
          parts: [
            {
              label: "a",
              prompt: "Name two factors that could improve productivity.",
              marks: 4,
            },
            { label: "b", prompt: "Explain how each would help.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Productivity",
                statement: "More output per input.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Capital investment — better machinery.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Labour skills — training/education.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Capital: machines faster/more precise.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Labour: skilled workers more efficient.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) capital+labour (b) machines faster+skills efficient",
            commonErrors: ["No factors.", "No mechanism."],
          },
        },
      ],
    },
  ],
};
