import type { Lesson } from "../../../types.ts";

export const lesson411: Lesson = {
  id: "ciealecon-u1-lesson-1-1",
  code: "1-1",
  title: "Demand and Supply",
  goal: "I CAN explain demand/supply curves, shifts and market equilibrium.",
  standards: ["Cambridge A Level Economics 9708", "Paper 1: microeconomics"],
  
  vocabulary: [
    { term: "Demand", definition: "Quantity of good consumers willing/able to buy at each price." },
    { term: "Supply", definition: "Quantity producers willing/able to sell at each price." },
    { term: "Market equilibrium", definition: "Price where demand equals supply." },
    { term: "Shift in demand", definition: "Change in quantity demanded at all prices." },
    { term: "Extension/contraction", definition: "Movement along demand curve due to price." },
    { term: "Consumer surplus", definition: "Difference between willingness to pay and actual price." },
  ],
  concepts: [
    {
      id: "ciealecon-u1-s1-ds",
      title: "Demand and supply",
      skill: "Analyse market equilibrium and shifts.",
      lesson: {
        sections: [
          {
            heading: "Demand curve",
            body: "Downward sloping — law of demand. Price ↑ → quantity demanded ↓. Shifts caused by non-price factors: income, preferences, prices of substitutes/complements, expectations.",
          },
          {
            heading: "Supply curve",
            body: "Upward sloping — law of supply. Price ↑ → quantity supplied ↑. Shifts caused by: costs of production, technology, number of sellers, expectations, taxes/subsidies.",
          },
          {
            heading: "Equilibrium",
            body: "Where demand = supply. Price adjusts to clear market. Surplus: supply > demand → price falls. Shortage: demand > supply → price rises.",
          },
        ],
        keyFormulas: [
          { name: "Law of demand", statement: "P↑ → Qd↓" },
          { name: "Law of supply", statement: "P↑ → Qs↑" },
          { name: "Equilibrium", statement: "Qd = Qs" },
        ],
        workedExample: {
          problem: "Demand increases (shift right) but supply unchanged. What happens to price and quantity?",
          solution: "New equilibrium: higher price, higher quantity. Both consumers and producers benefit from increased trade.",
        },
      },
      questions: [
        {
          id: "ciealecon-u1-ds-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the law of demand?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Price ↓ → quantity supplied ↓"
                    },
                    {
                              "id": "b",
                              "text": "Price ↑ → quantity demanded ↑"
                    },
                    {
                              "id": "c",
                              "text": "Price ↑ → quantity demanded ↓"
                    },
                    {
                              "id": "d",
                              "text": "Price and quantity always move together"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Law of demand",
                              "statement": "Inverse relationship."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "As price rises, quantity demanded falls.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "P↑ → Qd↓"
},
        },
        {
          id: "ciealecon-u1-ds-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What causes a shift in demand (not movement along)?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Shift in demand",
                              "statement": "Non-price factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Changes at all price levels.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Income, preferences, substitute/complement prices, expectations.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Non-price factors"
},
        },
        {
          id: "ciealecon-u1-ds-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is market equilibrium? What happens if price is above equilibrium?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Equilibrium",
                              "statement": "Qd = Qs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Price where demand = supply.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Above equilibrium: surplus, price falls.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Below equilibrium: shortage, price rises.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Qd = Qs equilibrium"
},
        },
        {
          id: "ciealecon-u1-ds-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define demand, supply, equilibrium, shift, extension/contraction, consumer surplus. (b) What is law of demand? (c) What is law of supply? (d) What causes demand shifts? (e) What causes supply shifts? (f) What is market equilibrium? (g) What happens if price above/below equilibrium? (h) Evaluate whether price mechanism efficiently allocates resources.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Demand/supply",
                              "statement": "Analysis, equilibrium."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) P↑ Qd↓.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) P↑ Qs↑.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Income, preferences, etc.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Costs, technology, taxes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Qd = Qs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Surplus/shortage adjustments.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Demand and supply analysis."
},
        },
        {
          id: "ciealecon-u1-ds-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a normal good, which of the following would cause the demand curve to shift to the right?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A fall in the price of the good itself"
                    },
                    {
                              "id": "b",
                              "text": "A rise in the price of a substitute good"
                    },
                    {
                              "id": "c",
                              "text": "A weakening of consumer tastes for the good"
                    },
                    {
                              "id": "d",
                              "text": "A fall in consumer income"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Shift in demand",
                              "statement": "Non-price factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A substitute becoming dearer raises demand for this good at all prices — a rightward shift. A price fall of the good itself is a movement along the curve, and lower income/tastes shift demand left for a normal good.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** A rise in the price of a substitute good"
},
        },
        {
          id: "ciealecon-u1-ds-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A movement along the demand curve for a good is caused by",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a change in consumer preferences"
                    },
                    {
                              "id": "b",
                              "text": "a change in the price of the good itself"
                    },
                    {
                              "id": "c",
                              "text": "a change in the price of a substitute"
                    },
                    {
                              "id": "d",
                              "text": "a change in consumer income"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Movement along demand",
                              "statement": "Price change of the good."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only a change in the good's own price moves along the curve; income, substitute prices and preferences cause shifts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** a change in the price of the good itself"
},
        },
        {
          id: "ciealecon-u1-ds-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "At the current market price, quantity supplied exceeds quantity demanded. The market will adjust by",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the price rising until quantity demanded equals quantity supplied"
                    },
                    {
                              "id": "b",
                              "text": "the demand curve shifting to the right"
                    },
                    {
                              "id": "c",
                              "text": "the price falling until quantity demanded equals quantity supplied"
                    },
                    {
                              "id": "d",
                              "text": "the supply curve shifting to the left"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Market adjustment",
                              "statement": "Surplus → price falls."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A surplus means the price is above equilibrium; unsold output pushes the price down until Qd = Qs.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(c)** the price falling until quantity demanded equals quantity supplied"
},
        },
        {
          id: "ciealecon-u1-ds-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A subsidy paid to producers of a good will",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "shift the supply curve to the right and increase the quantity traded"
                    },
                    {
                              "id": "b",
                              "text": "raise the equilibrium price"
                    },
                    {
                              "id": "c",
                              "text": "reduce the quantity traded"
                    },
                    {
                              "id": "d",
                              "text": "shift the demand curve to the left"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Subsidy",
                              "statement": "Shifts supply right."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A subsidy lowers producers' effective costs, shifting supply right/down: lower price to consumers, higher quantity.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** shift the supply curve to the right and increase the quantity traded"
},
        },
        {
          id: "ciealecon-u1-ds-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Consumer surplus is best defined as",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the difference between the maximum price consumers are willing to pay and the price actually paid"
                    },
                    {
                              "id": "b",
                              "text": "the tax revenue collected by government"
                    },
                    {
                              "id": "c",
                              "text": "the total revenue earned by producers"
                    },
                    {
                              "id": "d",
                              "text": "the profit earned by firms"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Consumer surplus",
                              "statement": "WTP minus price."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Consumer surplus measures the extra benefit consumers gain because the market price is below their willingness to pay.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** the difference between the maximum price consumers are willing to pay and the price actually paid"
},
        },
        {
          id: "ciealecon-u1-ds-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "If demand and supply both increase by the same amount, the new market equilibrium will have",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a lower price and a higher quantity traded"
                    },
                    {
                              "id": "b",
                              "text": "an unchanged quantity traded"
                    },
                    {
                              "id": "c",
                              "text": "a higher quantity traded and an unchanged price"
                    },
                    {
                              "id": "d",
                              "text": "a higher price and a higher quantity traded"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Simultaneous shifts",
                              "statement": "Equal shifts → price constant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Equal rightward shifts of demand and supply leave equilibrium price unchanged while quantity rises; the result is indeterminate only when the shifts differ in size.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(c)** a higher quantity traded and an unchanged price"
},
        },
        {
          id: "ciealecon-u1-ds-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The price of a good rises by 20% and quantity demanded falls by 30%. Calculate the price elasticity of demand (PED).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1.5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "PED",
                              "statement": "%ΔQd / %ΔP."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PED = percentage change in quantity demanded divided by percentage change in price.",
                              "working": "PED = 30 / 20",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "PED = 1.5"
},
        },
        {
          id: "ciealecon-u1-ds-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "At a market price of $8, quantity demanded is 50 units and quantity supplied is 80 units. Calculate the size of the market surplus in units.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 30
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Surplus",
                              "statement": "Qs > Qd."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Surplus equals quantity supplied minus quantity demanded at the given price.",
                              "working": "80 - 50 = 30",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "30 units"
},
        },
        {
          id: "ciealecon-u1-ds-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "The demand curve is Qd = 100 - 5P and the supply curve is Qs = 20 + 5P, where P is the price in dollars. Find (a) the equilibrium price and (b) the equilibrium quantity.",
          parts: [
                    {
                              "label": "a",
                              "prompt": "Equilibrium price (P)",
                              "marks": 1
                    },
                    {
                              "label": "b",
                              "prompt": "Equilibrium quantity (Q)",
                              "marks": 1
                    }
          ],
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 8
                    },
                    {
                              "label": "b",
                              "answer": 60
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Equilibrium",
                              "statement": "Qd = Qs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Set quantity demanded equal to quantity supplied and solve for P.",
                              "working": "100 - 5P = 20 + 5P \\Rightarrow P = 8",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Substitute P = 8 into either curve to find equilibrium quantity.",
                              "working": "Q = 100 - 5(8) = 60",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "P = $8, Q = 60 units"
},
        },
        {
          id: "ciealecon-u1-ds-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Consumers are willing to pay up to $10 for the first unit of a good. The market price is $6 and 50 units are traded. Calculate the total consumer surplus.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 200
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Consumer surplus",
                              "statement": "WTP minus price, summed over units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Consumer surplus per unit is the difference between willingness to pay and the market price.",
                              "working": "10 - 6 = 4",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Total consumer surplus is per-unit surplus multiplied by the quantity traded.",
                              "working": "4 \\times 50 = 200",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$200"
},
        },
        {
          id: "ciealecon-u1-ds-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Using demand and supply analysis, answer the following.",
          parts: [
                    {
                              "label": "a",
                              "prompt": "Explain what is meant by a shift in the demand curve.",
                              "marks": 2
                    },
                    {
                              "label": "b",
                              "prompt": "Give two factors that could shift the demand curve for a normal good to the right.",
                              "marks": 2
                    },
                    {
                              "label": "c",
                              "prompt": "Explain the difference between a movement along and a shift of the demand curve.",
                              "marks": 2
                    }
          ],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Shift vs movement",
                              "statement": "Non-price vs price factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A shift is a change in quantity demanded at every price level.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "It is caused by non-price factors, not by the good's own price.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Any two valid factors, e.g. higher income, higher price of a substitute, stronger preferences, higher price of a complement falling.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Second valid factor with brief justification.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "A movement along is caused only by a change in the good's own price.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "A shift changes quantity demanded at all prices and is caused by non-price determinants.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Shift = non-price change at all prices; movement = own-price change."
},
        },
        {
          id: "ciealecon-u1-ds-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the view that the price mechanism leads to an efficient allocation of resources.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Price mechanism",
                              "statement": "Allocative efficiency at P = MC."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "At equilibrium, price equals marginal cost, so resources go to the uses consumers value most — allocative efficiency.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Prices act as signals and incentives, guiding producers and consumers without central direction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "However, externalities mean private costs/benefits differ from social costs/benefits, so the free market over- or under-provides goods.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Public goods and information asymmetry also cause market failure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Market power (monopoly) can restrict output and raise prices above marginal cost.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Overall judgement: the price mechanism is efficient only under strict conditions; real markets often require intervention.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Efficient only when no market failure exists; externalities, public goods and monopoly power limit it."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealecon-u1-ds-notes",
      title: "Demand/supply — notes",
      summary: "Law of demand: P↑Qd↓. Law of supply: P↑Qs↑. Equilibrium where Qd=Qs.",
      sections: [
        { heading: "Key idea", body: "Price mechanism allocates resources through supply/demand equilibrium." },
        { heading: "Shifts vs movements", body: "Shifts = non-price factors; movements = price changes." },
      ],
    },
  ],
};
