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
                              "text": "Responsiveness of quantity demanded to price changes"
                    },
                    {
                              "id": "b",
                              "text": "Total revenue"
                    },
                    {
                              "id": "c",
                              "text": "Market share"
                    },
                    {
                              "id": "d",
                              "text": "Production cost"
                    }
          ],
          "correctChoiceId": "a"
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
