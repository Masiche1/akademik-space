import type { Lesson } from "../../../types.ts";

export const lesson275: Lesson = {
  id: "cieiec-u1-lesson-1-5",
  code: "1-5",
  title: "Demand and Supply: Basic Analysis",
  goal: "I CAN draw and interpret demand and supply diagrams.",
  standards: ["Cambridge IGCSE Economics 0455", "Paper 4: microeconomics"],
  
  vocabulary: [
    { term: "Demand", definition: "Quantity consumers willing/able to buy at each price." },
    { term: "Supply", definition: "Quantity producers willing/able to sell at each price." },
    { term: "Equilibrium", definition: "Price/quantity where demand=supply." },
    { term: "Shortage", definition: "Demand exceeds supply at current price." },
    { term: "Surplus", definition: "Supply exceeds demand at current price." },
    { term: "Law of demand", definition: "Higher price → lower quantity demanded." },
  ],
  concepts: [
    {
      id: "cieiec-u1-s5-ds",
      title: "Demand and supply",
      skill: "Draw and interpret basic D&S diagrams.",
      lesson: {
        sections: [
          {
            heading: "Demand curve",
            body: "Downward sloping — higher price → lower quantity demanded. Shifts: income changes, tastes, prices of substitutes/complements, expectations.",
          },
          {
            heading: "Supply curve",
            body: "Upward sloping — higher price → higher quantity supplied. Shifts: costs, technology, number of producers, expectations.",
          },
          {
            heading: "Equilibrium",
            body: "Where demand=supply — market clearing price/quantity. Shortage below equilibrium; surplus above.",
          },
        ],
        keyFormulas: [
          { name: "Demand", statement: "price↑ → quantity↓" },
          { name: "Supply", statement: "price↑ → quantity↑" },
          { name: "Equilibrium", statement: "demand = supply" },
        ],
        workedExample: {
          problem: "At $5, demand=100 but supply=80. What happens?",
          solution: "Shortage — price rises, quantity supplied increases, quantity demanded decreases until equilibrium.",
        },
      },
      questions: [
        {
          id: "cieiec-u1-ds-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the law of demand?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Higher price → lower quantity demanded"
                    },
                    {
                              "id": "b",
                              "text": "Higher price → higher quantity"
                    },
                    {
                              "id": "c",
                              "text": "Price doesn't affect demand"
                    },
                    {
                              "id": "d",
                              "text": "Demand is constant"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Law of demand",
                              "statement": "Inverse relationship."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher price → lower quantity demanded.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Price↑ → quantity↓"
},
        },
        {
          id: "cieiec-u1-ds-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is equilibrium in a market?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Equilibrium",
                              "statement": "Demand=supply."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Price/quantity where demand equals supply.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Market clearing point.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Demand=supply point"
},
        },
        {
          id: "cieiec-u1-ds-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What causes the demand curve to shift?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Demand shifts",
                              "statement": "Determinants of demand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Income changes, tastes/preferences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Prices of substitutes/complements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Expectations, population changes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Income, tastes, related prices"
},
        },
        {
          id: "cieiec-u1-ds-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define demand, supply, equilibrium, shortage, surplus, law of demand, law of supply. (b) What is demand? (c) What is supply? (d) What is equilibrium? (e) What is shortage? (f) What is surplus? (g) What causes demand to increase? (h) Draw a demand and supply diagram showing equilibrium.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Demand/supply",
                              "statement": "Basic analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All seven definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Quantity consumers will buy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Quantity producers will sell.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Demand=supply point.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Demand exceeds supply.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Supply exceeds demand.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Income↑, tastes change, substitute prices↑.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid D&S diagram.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Demand and supply analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieiec-u1-ds-notes",
      title: "Demand/supply — notes",
      summary: "Demand=downward, supply=upward, equilibrium=intersection. Shortage below, surplus above.",
      sections: [
        { heading: "Key idea", body: "Markets tend toward equilibrium through price adjustments." },
        { heading: "Shifts", body: "Non-price factors shift curves; price changes move along curves." },
      ],
    },
  ],
};
