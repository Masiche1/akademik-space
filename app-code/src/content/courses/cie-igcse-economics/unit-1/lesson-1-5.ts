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
                              "text": "Demand is constant"
                    },
                    {
                              "id": "b",
                              "text": "Higher price → higher quantity"
                    },
                    {
                              "id": "c",
                              "text": "Higher price → lower quantity demanded"
                    },
                    {
                              "id": "d",
                              "text": "Price doesn't affect demand"
                    }
          ],
          "correctChoiceId": "c"
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
        {
          id: "cieiec-u1-ds-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The demand curve slopes downward because, in general:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Supply falls as price rises"
                    },
                    {
                              "id": "b",
                              "text": "A higher price reduces the quantity demanded"
                    },
                    {
                              "id": "c",
                              "text": "Consumers always buy more when prices rise"
                    },
                    {
                              "id": "d",
                              "text": "A higher price increases the quantity demanded"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Law of demand",
                              "statement": "Inverse price-quantity relationship."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher price -> lower quantity demanded.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Higher price reduces quantity demanded"
},
        },
        {
          id: "cieiec-u1-ds-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The supply curve slopes upward because, in general:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Consumers buy less at higher prices"
                    },
                    {
                              "id": "b",
                              "text": "A higher price encourages producers to supply more"
                    },
                    {
                              "id": "c",
                              "text": "Supply is fixed at every price"
                    },
                    {
                              "id": "d",
                              "text": "A higher price reduces production costs"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Law of supply",
                              "statement": "Direct price-quantity relationship."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher price -> higher quantity supplied.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Higher price encourages more supply"
},
        },
        {
          id: "cieiec-u1-ds-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "If the market price is below the equilibrium price, the market experiences a:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Price ceiling"
                    },
                    {
                              "id": "b",
                              "text": "Surplus"
                    },
                    {
                              "id": "c",
                              "text": "Shortage"
                    },
                    {
                              "id": "d",
                              "text": "Stable equilibrium"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Shortage",
                              "statement": "Demand exceeds supply."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Below equilibrium, demand exceeds supply = shortage.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Shortage"
},
        },
        {
          id: "cieiec-u1-ds-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which event would shift the demand curve for coffee to the right?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fewer people drinking coffee"
                    },
                    {
                              "id": "b",
                              "text": "A fall in the price of coffee"
                    },
                    {
                              "id": "c",
                              "text": "A rise in the cost of coffee beans"
                    },
                    {
                              "id": "d",
                              "text": "A rise in the income of coffee drinkers"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Demand shifts",
                              "statement": "Non-price determinants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher income raises demand at every price = rightward shift.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Rise in income of coffee drinkers"
},
        },
        {
          id: "cieiec-u1-ds-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "At a price of $4, quantity demanded is 120 units but quantity supplied is 90 units. What is the size of the shortage, in units?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 30,
                              "unit": "units"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Shortage",
                              "statement": "Demand exceeds supply."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shortage = Qd - Qs = 120 - 90.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Shortage = 30 units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "30 units"
},
        },
        {
          id: "cieiec-u1-ds-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "At a price of $8, quantity supplied is 200 units but quantity demanded is 150 units. What is the size of the surplus, in units?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 50,
                              "unit": "units"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Surplus",
                              "statement": "Supply exceeds demand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Surplus = Qs - Qd = 200 - 150.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Surplus = 50 units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "50 units"
},
        },
        {
          id: "cieiec-u1-ds-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When the price rises from $5 to $7, quantity demanded falls from 80 units to 60 units. By how many units does quantity demanded fall?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 20,
                              "unit": "units"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Movement along demand",
                              "statement": "Price change changes quantity demanded."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "80 - 60 = 20 units fall.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "20 units"
},
        },
        {
          id: "cieiec-u1-ds-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a surplus in a market, and what typically happens to the price as a result?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Surplus",
                              "statement": "Supply exceeds demand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Surplus = quantity supplied exceeds quantity demanded.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Unsold stock pushes price down toward equilibrium.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Supply exceeds demand; price falls"
},
        },
        {
          id: "cieiec-u1-ds-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two factors that can cause the supply curve for a product to shift to the right.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Supply shifts",
                              "statement": "Non-price determinants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lower production costs (e.g. cheaper raw materials).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Improved technology raising productivity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More producers entering the market.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Lower costs, better technology, more firms"
},
        },
        {
          id: "cieiec-u1-ds-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "The market price is above the equilibrium price. Explain the process by which the market returns to equilibrium.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Equilibrium",
                              "statement": "Market adjustment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Above equilibrium, quantity supplied exceeds quantity demanded (surplus).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Producers cut price / output to clear stock.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Price falls until demand equals supply again.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Surplus -> price falls -> equilibrium restored"
},
        },
        {
          id: "cieiec-u1-ds-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between a movement along the demand curve and a shift of the demand curve.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Demand curve",
                              "statement": "Movement vs shift."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Movement: caused by a change in the product's own price.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Shift: caused by non-price factors (income, tastes, related prices).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Shift changes demand at every price; movement changes quantity at one price.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Movement=own price; shift=non-price factors"
},
        },
        {
          id: "cieiec-u1-ds-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether government maximum prices can improve outcomes in markets.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Price controls",
                              "statement": "Evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benefit: makes essential goods affordable for low-income consumers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cost: below equilibrium price causes persistent shortages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cost: reduces producers' incentive to supply, worsening scarcity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "May encourage illegal markets / black markets.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Judgement: helpful for equity but distortionary — context-dependent.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Mixed — equity gains but shortages"
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
