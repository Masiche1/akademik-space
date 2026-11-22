import type { Lesson } from "../../../types.ts";

export const lesson281: Lesson = {
  id: "cieiec-u2-lesson-2-1",
  code: "2-1",
  title: "Price Elasticity of Demand",
  goal: "I CAN calculate and interpret price elasticity of demand.",
  standards: ["Cambridge IGCSE Economics 0455", "Paper 4: elasticity"],
  
  vocabulary: [
    { term: "Price elasticity of demand (PED)", definition: "Responsiveness of quantity demanded to price changes." },
    { term: "Elastic demand", definition: "PED > 1 — quantity changes more than price." },
    { term: "Inelastic demand", definition: "PED < 1 — quantity changes less than price." },
    { term: "Unit elastic", definition: "PED = 1 — proportional changes." },
    { term: "Perfectly elastic", definition: "PED = ∞ — any price change causes infinite response." },
    { term: "Perfectly inelastic", definition: "PED = 0 — quantity doesn't change with price." },
  ],
  concepts: [
    {
      id: "cieiec-u2-s1-ped",
      title: "Price elasticity of demand",
      skill: "Calculate and interpret PED.",
      lesson: {
        sections: [
          {
            heading: "PED calculation",
            body: "PED = % change in quantity demanded / % change in price. Use midpoint formula: (ΔQ/Q_avg) / (ΔP/P_avg).",
          },
          {
            heading: "Elasticity types",
            body: "Elastic (>1): luxury goods, many substitutes. Inelastic (<1): necessities, few substitutes, habit-forming. Perfectly inelastic (0): life-saving drugs. Perfectly elastic (∞): rare.",
          },
          {
            heading: "Factors affecting PED",
            body: "Substitutes availability, necessity vs luxury, proportion of income, time period, brand loyalty.",
          },
        ],
        keyFormulas: [
          { name: "PED", statement: "%ΔQ / %ΔP" },
          { name: "Elastic", statement: "PED > 1" },
          { name: "Inelastic", statement: "PED < 1" },
        ],
        workedExample: {
          problem: "Price rises from $10 to $12, quantity falls from 100 to 80. Calculate PED.",
          solution: "%ΔQ = -20/90 = -22.2%, %ΔP = 2/11 = 18.2%. PED = 22.2/18.2 = 1.22 — elastic.",
        },
      },
      questions: [
        {
          id: "cieiec-u2-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is price elasticity of demand?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Production cost"
                    },
                    {
                              "id": "b",
                              "text": "Responsiveness of quantity demanded to price changes"
                    },
                    {
                              "id": "c",
                              "text": "Total revenue"
                    },
                    {
                              "id": "d",
                              "text": "Market share"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "PED",
                              "statement": "Price responsiveness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PED measures how quantity responds to price.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Price responsiveness"
},
        },
        {
          id: "cieiec-u2-pe-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does PED > 1 mean?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Elastic demand",
                              "statement": "PED > 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Elastic — quantity changes more than price.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Consumers are price sensitive.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Quantity changes more than price"
},
        },
        {
          id: "cieiec-u2-pe-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Price rises from $5 to $6, quantity falls from 200 to 160. Calculate PED using midpoint formula.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "PED calculation",
                              "statement": "Midpoint formula."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "%ΔQ = -40/180 = -22.2%, %ΔP = 1/5.5 = 18.2%.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "PED = 22.2/18.2 = 1.22.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Elastic demand.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "PED = 1.22, elastic"
},
        },
        {
          id: "cieiec-u2-pe-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define PED, elastic, inelastic, unit elastic, perfectly elastic, perfectly inelastic. (b) What is PED? (c) What does PED > 1 mean? (d) What does PED < 1 mean? (e) What factors affect PED? (f) Give an example of elastic demand. (g) Give an example of inelastic demand. (h) Why does a firm need to know PED?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "PED",
                              "statement": "Calculation, interpretation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Price responsiveness measure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Quantity changes more than price.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Quantity changes less than price.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Substitutes, necessity, income share, time.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Valid elastic example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid inelastic example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Pricing decisions, revenue maximisation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Price elasticity of demand."
},
        },
        {
          id: "cieiec-u2-pe-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Price elasticity of demand is calculated as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "% change in price / % change in quantity demanded"
                    },
                    {
                              "id": "b",
                              "text": "Total revenue / total cost"
                    },
                    {
                              "id": "c",
                              "text": "Quantity demanded x price"
                    },
                    {
                              "id": "d",
                              "text": "% change in quantity demanded / % change in price"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "PED",
                              "statement": "%ΔQ / %ΔP."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PED = %ΔQ / %ΔP.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "%ΔQ / %ΔP"
},
        },
        {
          id: "cieiec-u2-pe-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Perfectly inelastic demand has a PED of:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1"
                    },
                    {
                              "id": "b",
                              "text": "0"
                    },
                    {
                              "id": "c",
                              "text": "It varies by good"
                    },
                    {
                              "id": "d",
                              "text": "Infinity"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Perfectly inelastic",
                              "statement": "PED = 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Quantity does not change with price -> PED = 0.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "0"
},
        },
        {
          id: "cieiec-u2-pe-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A good with PED = 0.5 has:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Inelastic demand"
                    },
                    {
                              "id": "b",
                              "text": "Elastic demand"
                    },
                    {
                              "id": "c",
                              "text": "Perfectly elastic demand"
                    },
                    {
                              "id": "d",
                              "text": "Unit elastic demand"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Inelastic demand",
                              "statement": "PED < 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PED < 1 means quantity changes less than price = inelastic.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Inelastic demand"
},
        },
        {
          id: "cieiec-u2-pe-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which good is most likely to have the most elastic demand?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Essential bus fares for commuters"
                    },
                    {
                              "id": "b",
                              "text": "Table salt"
                    },
                    {
                              "id": "c",
                              "text": "Luxury cars"
                    },
                    {
                              "id": "d",
                              "text": "Life-saving insulin"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "PED factors",
                              "statement": "Luxuries and many substitutes = elastic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Luxury cars have substitutes and are discretionary -> most elastic.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Luxury cars"
},
        },
        {
          id: "cieiec-u2-pe-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Price falls from $10 to $8 and quantity demanded rises from 100 to 140 units. Using the midpoint formula, calculate PED.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1.5,
                              "tolerance": 0.01
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "PED calculation",
                              "statement": "Midpoint formula."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "%ΔQ = 40/120 = 33.3%; %ΔP = -2/9 = -22.2%.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "PED = 33.3/22.2 = 1.5.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "PED = 1.5 (elastic).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "PED = 1.5, elastic"
},
        },
        {
          id: "cieiec-u2-pe-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Price rises from $4 to $5 and quantity demanded falls from 200 to 150 units. Using the midpoint formula, calculate PED.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1.29,
                              "tolerance": 0.01
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "PED calculation",
                              "statement": "Midpoint formula."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "%ΔQ = -50/175 = -28.6%; %ΔP = 1/4.5 = 22.2%.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "PED = 28.6/22.2 = 1.29.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "PED = 1.29 (elastic).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "PED = 1.29, elastic"
},
        },
        {
          id: "cieiec-u2-pe-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 20% rise in price causes a 30% fall in quantity demanded. Calculate PED.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1.5,
                              "tolerance": 0.01
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "PED calculation",
                              "statement": "%ΔQ / %ΔP."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PED = 30 / 20 = 1.5.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "PED = 1.5 (elastic).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "PED = 1.5"
},
        },
        {
          id: "cieiec-u2-pe-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "PED = 1.25 for a product. If the price rises by 10%, by what percentage does quantity demanded fall?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 12.5,
                              "unit": "%"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "PED calculation",
                              "statement": "PED = %ΔQ / %ΔP."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "%ΔQ = PED x %ΔP = 1.25 x 10%.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Quantity falls by 12.5%.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer = 12.5% fall.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "12.5%"
},
        },
        {
          id: "cieiec-u2-pe-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two factors that make the demand for a good price inelastic.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "PED factors",
                              "statement": "Determinants of elasticity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The good is a necessity with few substitutes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It takes a small share of income so price changes matter little.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Consumers are habit-forming / brand loyal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Necessity, small income share, habit"
},
        },
        {
          id: "cieiec-u2-pe-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a firm needs to know the PED of its product before changing its price.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "PED application",
                              "statement": "Pricing decisions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PED shows how quantity (and revenue) responds to price.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "If demand is elastic, a price rise reduces total revenue.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Helps firm choose profit-maximising price.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "PED guides pricing and revenue strategy"
},
        },
        {
          id: "cieiec-u2-pe-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between elastic and inelastic demand.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Elasticity types",
                              "statement": "PED > 1 vs PED < 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Elastic: PED > 1, quantity changes more than price.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Inelastic: PED < 1, quantity changes less than price.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Elastic>1; inelastic<1"
},
        },
        {
          id: "cieiec-u2-pe-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that firms should always charge the highest price the market will bear.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "PED application",
                              "statement": "Pricing strategy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "If demand is inelastic, high prices raise revenue.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "If demand is elastic, high prices sharply cut quantity and revenue.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "High prices may attract competitors or reduce market share.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Consumer goodwill and long-term demand effects.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Judgement: optimal price depends on PED and objectives.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Depends on elasticity and objectives"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieiec-u2-pe-notes",
      title: "PED — notes",
      summary: "PED=%ΔQ/%ΔP. Elastic>1, inelastic<1, unit=1. Factors: substitutes, necessity, income share.",
      sections: [
        { heading: "Key idea", body: "PED determines whether price increases raise or lower total revenue." },
        { heading: "Application", body: "Firms use PED for pricing strategy — elastic goods can't raise prices." },
      ],
    },
  ],
};
