import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "ecn10-u2-lesson-2-2",
  code: "2-2",
  title: "Price Mechanism and Equilibrium",
  goal: "I CAN explain how prices coordinate markets through supply and demand.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Demand and Supply"],
  vocabulary: [
    {
      term: "Equilibrium",
      definition: "Price where quantity demanded = quantity supplied.",
    },
    {
      term: "Excess demand",
      definition: "Demand > supply — shortage at current price.",
    },
    {
      term: "Excess supply",
      definition: "Supply > demand — surplus at current price.",
    },
    {
      term: "Price mechanism",
      definition: "Supply and demand interacting to set prices.",
    },
    {
      term: "Rationing function",
      definition: "Price limits demand when scarce.",
    },
  ],
  concepts: [
    {
      id: "ecn10-u2-equilibrium",
      title: "Equilibrium Price",
      skill: "Find equilibrium and explain how prices adjust.",
      lesson: {
        sections: [
          {
            heading: "Finding equilibrium",
            body: "**Equilibrium** = where demand curve meets supply curve — quantity demanded = quantity supplied. **Equilibrium price** = market-clearing price.\n\n**Below equilibrium**: demand > supply → shortage → prices rise (buyers compete). **Above equilibrium**: supply > demand → surplus → prices fall (sellers compete). **Market forces** push price to equilibrium.",
          },
          {
            heading: "Functions of price",
            body: "**Rationing**: price limits demand — scarce goods go to those who can pay. **Signalling**: prices tell producers what consumers want — high price = produce more. **Incentive**: high prices reward production, low prices discourage.\n\n**Adam Smith's invisible hand**: self-interest leads to social benefit — market allocates resources efficiently without central planning.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "At £5, demand is 100 units but supply is 80. What happens?",
          solution: "Shortage → price rises until demand = supply.",
        },
      },
      questions: [
        {
          id: "ecn10-u2-equilibrium-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is equilibrium price?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Price where demand = supply" },
              { id: "b", text: "Lowest possible price" },
              { id: "c", text: "Government-set price" },
              { id: "d", text: "Highest possible price" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equilibrium",
                statement: "Demand = supply — market clears.",
              },
            ],
            steps: [
              {
                reasoning: "Equilibrium = demand equals supply.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Demand = supply",
            commonErrors: ["Max/min confused."],
          },
        },
        {
          id: "ecn10-u2-equilibrium-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What happens if price is below equilibrium?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Below equilibrium",
                statement: "Shortage → price rises.",
              },
            ],
            steps: [
              {
                reasoning: "Demand > supply — shortage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Buyers compete for limited goods.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Price rises until equilibrium.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Shortage → price rises to equilibrium.",
            commonErrors: ["Surplus confused.", "No mechanism."],
          },
        },
        {
          id: "ecn10-u2-equilibrium-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the rationing function of price.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rationing",
                statement: "Price limits demand for scarce goods.",
              },
            ],
            steps: [
              {
                reasoning: "Scarce goods have high prices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "High price reduces quantity demanded.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Only those who can pay get the good.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prevents queues/shortages.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Price limits demand — scarce goods go to those who can pay.",
            commonErrors: ["No rationing link.", "Inequality ignored."],
          },
        },
        {
          id: "ecn10-u2-equilibrium-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Market for apples: at £2, demand=150kg, supply=100kg. At £4, demand=80kg, supply=120kg.",
          parts: [
            {
              label: "a",
              prompt: "Identify which price is below/above equilibrium.",
              marks: 3,
            },
            { label: "b", prompt: "What happens at each price?", marks: 3 },
            {
              label: "c",
              prompt: "Estimate equilibrium price range.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equilibrium finding",
                statement: "Match demand and supply.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) £2 below equilibrium (shortage); £4 above (surplus).",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Correct identification.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) £2: shortage → price rises. £4: surplus → price falls.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Both move toward equilibrium.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Equilibrium between £2 and £4.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) £2 below, £4 above (b) £2→rise, £4→fall (c) £2-£4",
            commonErrors: ["Wrong direction.", "No range."],
          },
        },
      ],
    },
    {
      id: "ecn10-u2-elasticity",
      title: "Price Elasticity of Demand",
      skill: "Calculate and interpret PED.",
      lesson: {
        sections: [
          {
            heading: "PED formula",
            body: "**PED** = % change in quantity demanded ÷ % change in price. **PED > 1** = elastic (quantity responds strongly). **PED = 1** = unit elastic. **PED < 1** = inelastic (quantity barely responds).\n\n**Calculation**: new quantity − old quantity ÷ average × 100, same for price. Or simple: %ΔQ ÷ %ΔP.",
          },
          {
            heading: "Factors affecting PED",
            body: "**Substitutes**: more substitutes → more elastic. **Necessity vs luxury**: necessities inelastic, luxuries elastic. **Proportion of income**: small % → inelastic. **Addiction/habit**: inelastic. **Time**: more time → more elastic.\n\n**Applications**: firms with inelastic demand can raise prices (few substitutes); elastic demand → price cuts to gain revenue.",
          },
        ],
        keyFormulas: [
          { name: "PED", statement: "%ΔQd ÷ %ΔP — >1 elastic, <1 inelastic." },
        ],
        workedExample: {
          problem: "Price rises 10%, quantity falls 20%. PED?",
          solution: "PED = 20/10 = 2 — elastic.",
        },
      },
      questions: [
        {
          id: "ecn10-u2-elasticity-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does PED = 2 mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Elastic demand — quantity responds strongly" },
              { id: "b", text: "Unit elastic" },
              { id: "c", text: "No demand" },
              { id: "d", text: "Inelastic demand" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PED",
                statement: ">1 elastic, <1 inelastic.",
              },
            ],
            steps: [
              { reasoning: "PED 2 = elastic.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Elastic",
            commonErrors: ["Inelastic confused."],
          },
        },
        {
          id: "ecn10-u2-elasticity-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Price rises 10%, quantity falls 5%. Calculate PED and state if elastic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "PED",
                statement: "PED = %ΔQ ÷ %ΔP = 5/10 = 0.5.",
              },
            ],
            steps: [
              { reasoning: "PED = 5% ÷ 10% = 0.5.", marks: 1, markCode: "M" },
              { reasoning: "PED < 1 = inelastic.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Quantity barely responds to price.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "PED = 0.5 — inelastic.",
            commonErrors: ["Wrong formula.", "Elastic assumed."],
          },
        },
        {
          id: "ecn10-u2-elasticity-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is demand for petrol usually inelastic?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inelastic demand",
                statement: "Necessity, few substitutes, small income share.",
              },
            ],
            steps: [
              {
                reasoning: "Petrol is necessity — needed for transport.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Few substitutes — limited alternatives.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Small % of income for many.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "People can't easily reduce consumption.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Necessity + few substitutes + small income share = inelastic.",
            commonErrors: ["Elastic assumed.", "No factors."],
          },
        },
        {
          id: "ecn10-u2-elasticity-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A firm sells product A (PED=0.5) and product B (PED=2.5).",
          parts: [
            {
              label: "a",
              prompt: "Which product has elastic demand?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "If firm raises price of each by 10%, which loses more revenue?",
              marks: 4,
            },
            {
              label: "c",
              prompt: "Which product should firm raise price on?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PED application",
                statement: "Elastic = big quantity response.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Product B — PED 2.5 > 1 = elastic.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) B loses more — quantity falls ~25% vs A ~5%.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Revenue = price × quantity — B loses more.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Raise price on A (inelastic) — quantity won't fall much.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer: "(a) B (b) B loses more (c) raise A's price",
            commonErrors: ["Wrong product.", "No revenue link."],
          },
        },
      ],
    },
  ],
};
