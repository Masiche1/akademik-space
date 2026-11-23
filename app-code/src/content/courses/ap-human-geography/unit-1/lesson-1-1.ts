import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "aphg-u1-lesson-1-1",
  code: "1-1",
  title: "Population Dynamics",
  goal: "I CAN analyze population growth, composition, and the demographic transition model.",
  standards: ["Unit 2"],
  vocabulary: [
    { term: "Demographic transition", definition: "Model of population change through stages: high birth/death → falling death → falling birth → low birth/death." },
    { term: "Crude birth rate", definition: "Annual births per 1,000 population." },
    { term: "Crude death rate", definition: "Annual deaths per 1,000 population." },
    { term: "Total fertility rate", definition: "Average children a woman would bear in her lifetime." },
    { term: "Dependency ratio", definition: "Proportion of dependents (young + elderly) to working-age population." },
    { term: "Population pyramid", definition: "Graph showing age/sex distribution — shape reveals development stage." },
  ],
  concepts: [
    {
      id: "aphg-u1-population-dynamics",
      title: "Population change and structure",
      skill: "Analyze population growth and demographic patterns.",
      lesson: {
        sections: [
          {
            heading: "Population measures",
            body: "Crude birth/death rates measure annual changes per 1,000; total fertility rate measures lifetime births; population pyramids visualize age structure — wide base = high birth rates (developing), rectangular = low birth/death (developed).",
          },
          {
            heading: "Demographic transition",
            body: "Stage 1: high birth/death (pre-industrial). Stage 2: falling death, high birth (population boom). Stage 3: falling birth. Stage 4: low birth/death (industrialized). Stage 5 (possible): declining population.",
          },
        ],
        keyFormulas: [
          { name: "Growth rate", statement: "$\\text{Birth rate} - \\text{Death rate} + \\text{Migration}$" },
          { name: "Dependency ratio", statement: "$(\\text{Young} + \\text{Elderly}) / \\text{Working age}$" },
        ],
        workedExample: {
          problem: "Why does Stage 2 of demographic transition produce population booms?",
          solution: "Death rates fall rapidly (better medicine, sanitation, food) while birth rates remain high — creating a large gap between births and deaths → rapid population growth until birth rates also fall.",
        },
      },
      questions: [
        {
          id: "aphg-u1-population-dynamics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A population pyramid with a wide base indicates ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "low birth rates"
                    },
                    {
                              "id": "b",
                              "text": "high birth rates typical of developing countries"
                    },
                    {
                              "id": "c",
                              "text": "an aging population"
                    },
                    {
                              "id": "d",
                              "text": "negative growth"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Population pyramids",
                              "statement": "Wide base = young population."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A wide-based pyramid indicates high birth rates — typical of developing countries in Stage 2-3 of demographic transition.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "High birth rates",
          "commonErrors": [
                    "Confusing with aging population (top-heavy)."
          ]
},
        },
        {
          id: "aphg-u1-population-dynamics-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Stage 2 of demographic transition is characterized by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "high birth and death rates"
                    },
                    {
                              "id": "b",
                              "text": "falling death rates but still-high birth rates"
                    },
                    {
                              "id": "c",
                              "text": "low birth and death rates"
                    },
                    {
                              "id": "d",
                              "text": "rising death rates"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Demographic transition",
                              "statement": "Stage 2 = death falls, birth stays high."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stage 2 sees death rates fall (improved sanitation, medicine) while birth rates remain high — producing rapid population growth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Most developing countries are in Stage 2 or 3 today.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Falling death, high birth",
          "commonErrors": [
                    "Confusing Stage 1 (both high) or Stage 4 (both low)."
          ]
},
        },
        {
          id: "aphg-u1-population-dynamics-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If a country has a crude birth rate of 30 per 1,000 and crude death rate of 10 per 1,000, what is its natural increase rate per 1,000? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Rate per 1,000",
                              "answer": 20
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Birth - death",
                              "statement": "$30 - 10 = 20$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$30 - 10 = 20$ per 1,000 natural increase.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $20$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "20",
          "commonErrors": [
                    "Adding instead of subtracting."
          ]
},
        },
        {
          id: "aphg-u1-population-dynamics-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why Stage 2 of demographic transition produces rapid population growth, using specific rate changes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Demographic transition",
                              "statement": "Death falls before birth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In Stage 2, death rates fall rapidly due to improved sanitation, medicine (vaccines, antibiotics), and food production — but birth rates remain high because traditional practices and lack of contraception persist.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The gap between high births and falling deaths creates natural increase — populations can double in 20-30 years.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This explains why most population growth today occurs in developing countries still in Stage 2-3.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Death falls before birth → population boom",
          "commonErrors": [
                    "Thinking birth falls first — it lags behind death decline."
          ]
},
        },
        {
          id: "aphg-u1-population-dynamics-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the consequences of a declining dependency ratio for a developing country. Is it beneficial or problematic?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Dependency ratio",
                              "statement": "Working-age vs. dependents."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Declining dependency ratio (fewer dependents per worker) can be beneficial — 'demographic dividend' where more workers support fewer dependents → potential for economic growth if jobs exist.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "But it requires job creation — without employment, the dividend becomes a liability (youth unemployment).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "East Asian tigers (South Korea, Taiwan) capitalized on demographic dividend for rapid growth; countries failing to create jobs missed the opportunity.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: declining dependency ratio is an opportunity, not a guarantee — success depends on economic policy and job creation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Demographic dividend is opportunity requiring job creation",
          "commonErrors": [
                    "Assuming it's automatically beneficial — it requires economic conditions."
          ]
},
        },
      ],
    },
  ],
};
