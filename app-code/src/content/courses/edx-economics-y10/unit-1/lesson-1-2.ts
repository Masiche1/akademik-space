import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ecn10-u1-lesson-1-2",
  code: "1-2",
  title: "Economic Systems",
  goal: "I CAN compare free market, command and mixed economies.",
  standards: ["Edexcel IGCSE Economics 4EC1 — The Market System"],
  vocabulary: [
    {
      term: "Free market economy",
      definition: "Resources allocated by supply and demand.",
    },
    {
      term: "Command economy",
      definition: "Government controls all economic decisions.",
    },
    {
      term: "Mixed economy",
      definition: "Combination of market and government control.",
    },
    {
      term: "Price mechanism",
      definition: "Supply and demand determine prices.",
    },
    {
      term: "Invisible hand",
      definition: "Adam Smith — market self-regulates.",
    },
  ],
  concepts: [
    {
      id: "ecn10-u1-systems",
      title: "Types of Economic System",
      skill: "Compare free market, command and mixed economies.",
      lesson: {
        sections: [
          {
            heading: "Free market",
            body: "**Free market**: consumers and businesses decide — prices set by supply/demand, private ownership, minimal government. **Advantages**: efficiency, choice, innovation, incentives. **Disadvantages**: inequality, market failure, no public goods, monopolies.\n\n**Command economy**: government controls — central planning, state ownership, quotas. **Advantages**: equality, no unemployment (theoretically), public goods provided. **Disadvantages**: inefficiency, shortages, no choice, no innovation incentives.",
          },
          {
            heading: "Mixed economy",
            body: "**Mixed**: market with government intervention — most real economies. Government provides public services, regulates markets, redistributes income. **Advantages**: balances efficiency and equity. **Disadvantages**: government failure, bureaucracy, tax burden.\n\n**Examples**: USA (more market), China (more command), UK (mixed). **Transition**: many former command economies moving to mixed.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A country has private businesses but government provides healthcare and education. What system?",
          solution: "Mixed economy.",
        },
      },
      questions: [
        {
          id: "ecn10-u1-systems-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a free market economy, who decides what to produce?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trade unions" },
              { id: "b", text: "The government" },
              { id: "c", text: "Central planners" },
              { id: "d", text: "Consumers and businesses" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Free market",
                statement: "Supply/demand decides — consumers and businesses.",
              },
            ],
            steps: [
              {
                reasoning: "Free market = consumers/businesses decide.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Consumers and businesses",
            commonErrors: ["Government confused."],
          },
        },
        {
          id: "ecn10-u1-systems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of a free market economy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Free market benefits",
                statement: "Efficiency, choice, innovation.",
              },
            ],
            steps: [
              {
                reasoning: "Efficient allocation — resources to where wanted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consumer choice and competition.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Innovation incentives — profit motive.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Efficiency, choice, innovation.",
            commonErrors: ["Command economy benefits.", "Only one."],
          },
        },
        {
          id: "ecn10-u1-systems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why most countries have mixed economies rather than pure systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mixed economy",
                statement: "Balances efficiency and equity.",
              },
            ],
            steps: [
              {
                reasoning: "Free market alone → inequality, market failure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Command alone → inefficiency, shortages.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Mixed combines benefits of both.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Government corrects market failures.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Pure systems have flaws — mixed balances efficiency and equity.",
            commonErrors: ["One system better.", "No balance."],
          },
        },
        {
          id: "ecn10-u1-systems-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare free market and command economies.",
          parts: [
            {
              label: "a",
              prompt: "How are resources allocated in each?",
              marks: 4,
            },
            { label: "b", prompt: "Give one advantage of each.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Economic systems",
                statement: "Market vs central planning.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Free market: supply/demand, price mechanism.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Command: government planning, quotas.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Free market: efficiency/choice/innovation.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Command: equality/public goods.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) market=supply/demand vs command=planning (b) market=efficiency vs command=equality",
            commonErrors: ["Same system.", "No comparison."],
          },
        },
      ],
    },
    {
      id: "ecn10-u1-specialisation",
      title: "Specialisation and Division of Labour",
      skill: "Explain benefits and drawbacks of specialisation.",
      lesson: {
        sections: [
          {
            heading: "What is specialisation?",
            body: "Focusing on one task or product — **division of labour** breaks production into specialised tasks. Workers become experts, machines specialised, regions focus on comparative advantage.\n\n**Benefits**: higher productivity, lower costs, skill development, efficiency. **Drawbacks**: boredom, repetitive work, dependency, unemployment risk if demand falls.",
          },
          {
            heading: "Comparative advantage",
            body: "Countries/regions specialise where they have **comparative advantage** — lowest opportunity cost. Even if less efficient overall, specialising and trading is better than self-sufficiency.\n\n**Example**: country A better at both farming and manufacturing but relatively better at farming → specialise in farming, import manufactured goods.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A factory makes cars. Workers each do one task — engine, paint, assembly. What's this?",
          solution: "Division of labour — specialisation of tasks.",
        },
      },
      questions: [
        {
          id: "ecn10-u1-specialisation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is specialisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Focusing on one task or product" },
              { id: "b", text: "Using many machines" },
              { id: "c", text: "Doing many different jobs" },
              { id: "d", text: "Working alone" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Specialisation",
                statement: "Focus on one task/product.",
              },
            ],
            steps: [
              {
                reasoning: "Specialisation = focus on one thing.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Focus on one task",
            commonErrors: ["Generalisation confused."],
          },
        },
        {
          id: "ecn10-u1-specialisation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of specialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Specialisation benefits",
                statement: "Productivity, skills, efficiency.",
              },
            ],
            steps: [
              {
                reasoning: "Higher productivity — workers become experts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lower costs — efficiency gains.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Skill development — deeper expertise.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Productivity, lower costs, skill development.",
            commonErrors: ["Only one.", "Drawbacks listed."],
          },
        },
        {
          id: "ecn10-u1-specialisation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one drawback of specialisation for workers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Specialisation drawbacks",
                statement: "Boredom, dependency, unemployment risk.",
              },
            ],
            steps: [
              {
                reasoning: "Repetitive work → boredom.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Skills limited to one task — less transferable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "If industry declines, workers struggle to find work.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Dependency on employer/industry.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Boredom, limited skills, unemployment risk.",
            commonErrors: ["Only benefits.", "No drawback."],
          },
        },
        {
          id: "ecn10-u1-specialisation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Country A can produce 100 cars or 200 phones; Country B can produce 50 cars or 100 phones.",
          parts: [
            {
              label: "a",
              prompt: "Which country has absolute advantage in cars?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate opportunity cost of cars for each country.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "Which should specialise in cars?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparative advantage",
                statement: "Lowest opportunity cost wins.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Country A — produces more cars (100 vs 50).",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) A: 100 cars = 200 phones → 1 car = 2 phones.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(b) B: 50 cars = 100 phones → 1 car = 2 phones.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "(c) Neither has comparative advantage — same ratio.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) A (b) both 1 car=2 phones (c) no comparative advantage",
            commonErrors: ["Absolute=comparative.", "Wrong calculation."],
          },
        },
      ],
    },
  ],
};
