import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "aphg-u4-lesson-4-2",
  code: "4-2",
  title: "Industrialization and Development",
  goal: "I CAN explain industrial location, development indicators, and core-periphery patterns.",
  standards: ["Unit 7"],
  vocabulary: [
    { term: "Industrial location", definition: "Factors: raw materials, labor, capital, market access, transport, government incentives." },
    { term: "Core-periphery model", definition: "Wallerstein's world-systems theory — core (developed), semi-periphery, periphery (exploited) countries." },
    { term: "Human Development Index", definition: "Composite measure: life expectancy + education + income — broader than GDP." },
    { term: "GDP per capita", definition: "Economic output per person — common but incomplete development measure." },
    { term: "Deindustrialization", definition: "Decline of manufacturing employment — shift to services in developed economies." },
    { term: "Offshoring", definition: "Moving production to lower-cost countries — global supply chains." },
  ],
  concepts: [
    {
      id: "aphg-u4-industrialization-development",
      title: "Industry and development",
      skill: "Analyze industrial patterns and development measures.",
      lesson: {
        sections: [
          {
            heading: "Industrial location",
            body: "Manufacturing follows factors: raw materials (historically), labor costs (offshoring to Asia), market access (near consumers), transport (ports, highways), agglomeration economies (clustering).",
          },
          {
            heading: "Development measures",
            body: "GDP per capita measures economic output; HDI adds health and education; core-periphery explains how developed countries exploit developing ones through unequal exchange.",
          },
        ],
        keyFormulas: [
          { name: "HDI components", statement: "Life expectancy + education + GNI per capita" },
          { name: "World systems", statement: "Core / Semi-periphery / Periphery" },
        ],
        workedExample: {
          problem: "Why does HDI better measure development than GDP?",
          solution: "GDP measures only economic output; HDI adds health (life expectancy) and education — capturing human well-being, not just wealth; a country can have high GDP but low HDI if inequality/poor services.",
        },
      },
      questions: [
        {
          id: "aphg-u4-industrialization-development-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Human Development Index measures ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only economic output"
                    },
                    {
                              "id": "b",
                              "text": "health, education, and income combined"
                    },
                    {
                              "id": "c",
                              "text": "only income"
                    },
                    {
                              "id": "d",
                              "text": "only life expectancy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "HDI",
                              "statement": "Composite development measure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "HDI combines life expectancy, education (mean/expected years), and GNI per capita — capturing health, knowledge, and living standards beyond GDP.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Health + education + income",
          "commonErrors": [
                    "Confusing with GDP (economic only)."
          ]
},
        },
        {
          id: "aphg-u4-industrialization-development-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Wallerstein's core-periphery model describes ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "random global development"
                    },
                    {
                              "id": "b",
                              "text": "developed core exploiting developing periphery through unequal exchange"
                    },
                    {
                              "id": "c",
                              "text": "equal global development"
                    },
                    {
                              "id": "d",
                              "text": "only European development"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "World-systems theory",
                              "statement": "Core exploits periphery."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wallerstein's world-systems theory describes a global capitalist system where core countries (developed) exploit periphery countries (developing) through unequal exchange of goods and labor.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Semi-periphery countries are intermediate — some industrializing, some deindustrializing.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Core exploits periphery",
          "commonErrors": [
                    "Thinking it's about geography only — it's about economic relationships."
          ]
},
        },
        {
          id: "aphg-u4-industrialization-development-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If a country has HDI of 0.95, is it considered 'very high' human development? Enter 1 for yes, 0 for no (threshold ~0.80).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Very high?",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Threshold check",
                              "statement": "$0.95 > 0.80$ — yes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "HDI of 0.95 exceeds the 'very high' threshold (~0.80) — indicating very high human development.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $1$ (yes).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "1",
          "commonErrors": [
                    "Confusing HDI scale (0-1)."
          ]
},
        },
        {
          id: "aphg-u4-industrialization-development-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how offshoring affects both developed and developing countries.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Offshoring",
                              "statement": "Global production shifts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Developed countries: lose manufacturing jobs (deindustrialization); gain cheaper goods; but hollow out industrial base and face inequality (rust belt).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Developing countries: gain factory jobs and industrialization opportunity (China, Vietnam); but face low wages, poor working conditions, environmental degradation; dependent on export markets.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Net effect: global efficiency but uneven distribution — developed lose jobs, developing gain jobs but at low cost to workers/environment.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Offshoring shifts jobs: developed lose, developing gain at cost",
          "commonErrors": [
                    "One-sided — effects differ by country type."
          ]
},
        },
        {
          id: "aphg-u4-industrialization-development-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether GDP or HDI better measures national development. Which should policymakers prioritize?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Development measures",
                              "statement": "Economic vs. human well-being."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "GDP advantages: objective, comparable, measures economic capacity; but ignores inequality, health, education, environment — a country can be rich but unhealthy/uneducated.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "HDI advantages: captures health, education, income — broader well-being; but still averages (hides inequality); doesn't measure political freedom, environment, happiness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Neither perfect: GDP measures means, HDI measures some ends; both miss inequality, sustainability, freedom — policymakers should use multiple measures.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: HDI better captures development's human dimension but neither suffices alone — comprehensive development requires economic + social + environmental + political indicators.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "HDI better captures well-being but neither measure is complete",
          "commonErrors": [
                    "Simple preference — both have limitations requiring complementary measures."
          ]
},
        },
      ],
    },
  ],
};
