import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "ecn10-u2-lesson-2-1",
  code: "2-1",
  title: "Demand",
  goal: "I CAN explain demand, the demand curve and factors affecting demand.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Demand and Supply"],
  vocabulary: [
    {
      term: "Demand",
      definition: "Quantity buyers willing and able to buy at a price.",
    },
    {
      term: "Demand curve",
      definition: "Graph showing price-quantity demanded relationship.",
    },
    {
      term: "Law of demand",
      definition: "Higher price → lower quantity demanded.",
    },
    {
      term: "Movement along",
      definition: "Change in quantity demanded due to price change.",
    },
    {
      term: "Shift in demand",
      definition: "Change in demand due to non-price factors.",
    },
  ],
  concepts: [
    {
      id: "ecn10-u2-demand",
      title: "Demand and the Demand Curve",
      skill: "Understand demand, the law of demand and demand curve shifts.",
      lesson: {
        sections: [
          {
            heading: "Law of demand",
            body: "**Law of demand**: as price rises, quantity demanded falls (ceteris paribus). **Demand curve** slopes downward — each price has a corresponding quantity. **Movement along** = price change → movement along curve.\n\n**Why**: substitution effect (cheaper alternatives), income effect (affordability), diminishing marginal utility.",
          },
          {
            heading: "Demand shifters",
            body: "**Non-price factors** shift the whole curve: **income** (higher income → more demand for normal goods), **tastes/preferences**, **prices of substitutes/complements**, **population**, **expectations**.\n\n**Shift right** = increased demand at all prices. **Shift left** = decreased demand. Distinguish from movement along (price change).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Price of coffee rises. What happens to demand for tea?",
          solution: "Demand for tea increases — substitute good, shift right.",
        },
      },
      questions: [
        {
          id: "ecn10-u2-demand-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the law of demand state?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Price doesn't affect demand" },
              { id: "b", text: "Higher price → higher demand" },
              { id: "c", text: "Demand is constant" },
              { id: "d", text: "Higher price → lower quantity demanded" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Law of demand",
                statement: "Price up → quantity demanded down.",
              },
            ],
            steps: [
              {
                reasoning: "Law of demand = inverse relationship.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Price up → quantity down",
            commonErrors: ["Direct relationship assumed."],
          },
        },
        {
          id: "ecn10-u2-demand-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two non-price factors that shift the demand curve.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Demand shifters",
                statement: "Income, tastes, related prices, population.",
              },
            ],
            steps: [
              {
                reasoning: "Income changes — normal vs inferior goods.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Tastes/preferences or population changes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prices of substitutes/complements.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Income, tastes, substitute/complement prices, population.",
            commonErrors: ["Price confused — that's movement.", "Only one."],
          },
        },
        {
          id: "ecn10-u2-demand-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between a movement along and a shift in the demand curve.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Movement vs shift",
                statement: "Price change vs non-price factors.",
              },
            ],
            steps: [
              {
                reasoning: "Movement along = price change only.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Shift = non-price factor changes demand at all prices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Movement = new point on same curve.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shift = whole curve moves left/right.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Movement = price change on same curve; shift = non-price factor moves curve.",
            commonErrors: ["Same thing.", "No distinction."],
          },
        },
        {
          id: "ecn10-u2-demand-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Smartphone prices fall and consumer income rises.",
          parts: [
            {
              label: "a",
              prompt: "Explain the effect of price fall on quantity demanded.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain the effect of income rise on demand.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Distinguish movement along vs shift.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Demand analysis",
                statement: "Price = movement; income = shift.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Lower price → higher quantity demanded (law of demand).",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Movement along demand curve.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Higher income → more demand for normal goods.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Shift right of demand curve.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Price = movement; income = shift.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) price fall→more qty, movement (b) income rise→shift right (c) distinguish",
            commonErrors: ["Both shifts.", "No distinction."],
          },
        },
      ],
    },
    {
      id: "ecn10-u2-supply",
      title: "Supply",
      skill:
        "Understand supply, the supply curve and factors affecting supply.",
      lesson: {
        sections: [
          {
            heading: "Law of supply",
            body: "**Law of supply**: as price rises, quantity supplied rises (ceteris paribus). **Supply curve** slopes upward — producers supply more at higher prices. **Movement along** = price change.\n\n**Why**: higher prices = more profit = incentive to produce more.",
          },
          {
            heading: "Supply shifters",
            body: "**Non-price factors**: **costs of production** (wages, raw materials — up costs = less supply), **technology** (improves efficiency = more supply), **number of firms**, **government subsidies/taxes**, **expectations**.\n\n**Shift right** = increased supply. **Shift left** = decreased supply. Distinguish from movement along.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Wages increase for farmers. What happens to supply of crops?",
          solution: "Supply decreases — costs up, shift left.",
        },
      },
      questions: [
        {
          id: "ecn10-u2-supply-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the law of supply state?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Higher price → less supply" },
              { id: "b", text: "Supply is constant" },
              { id: "c", text: "Price doesn't affect supply" },
              { id: "d", text: "Higher price → more quantity supplied" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Law of supply",
                statement: "Price up → quantity supplied up.",
              },
            ],
            steps: [
              {
                reasoning: "Law of supply = direct relationship.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Price up → supply up",
            commonErrors: ["Inverse confused."],
          },
        },
        {
          id: "ecn10-u2-supply-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two non-price factors that shift the supply curve.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Supply shifters",
                statement: "Costs, technology, number of firms, taxes.",
              },
            ],
            steps: [
              {
                reasoning: "Production costs — wages, raw materials.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Technology improvements.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Number of firms or government policy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Costs, technology, number of firms, taxes/subsidies.",
            commonErrors: ["Price confused.", "Only one."],
          },
        },
        {
          id: "ecn10-u2-supply-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a rise in production costs shifts supply left.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cost effect",
                statement: "Higher costs = less profit = less supply.",
              },
            ],
            steps: [
              {
                reasoning: "Costs rise → profit per unit falls.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Less incentive to produce at same prices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Producers supply less at each price.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Supply curve shifts left.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Higher costs → less profit → less supply → shift left.",
            commonErrors: ["Shift right.", "No profit link."],
          },
        },
        {
          id: "ecn10-u2-supply-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "New technology makes car production cheaper and faster.",
          parts: [
            { label: "a", prompt: "Explain effect on supply curve.", marks: 3 },
            {
              label: "b",
              prompt: "Explain effect on costs and prices.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Distinguish supply shift from movement.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Technology effect",
                statement: "Efficiency → more supply, lower costs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Technology → more efficient → supply increases, shift right.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Non-price factor — shifts curve.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Lower costs → lower prices possible.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) More supply at each price.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Technology = shift; price = movement.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) shift right (b) lower costs/prices (c) technology=shift, price=movement",
            commonErrors: ["Movement confused.", "No cost link."],
          },
        },
      ],
    },
  ],
};
