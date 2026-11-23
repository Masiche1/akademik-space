import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "aphg-u4-lesson-4-1",
  code: "4-1",
  title: "Agricultural Systems",
  goal: "I CAN compare subsistence and commercial agriculture and analyze agricultural location.",
  standards: ["Unit 6"],
  vocabulary: [
    { term: "Subsistence agriculture", definition: "Farming for family's own consumption — no surplus for market." },
    { term: "Commercial agriculture", definition: "Farming for market sale — specialized, mechanized, large-scale." },
    { term: "Von Thünen model", definition: "Agricultural location model — land use forms concentric rings around market (intensive near, extensive far)." },
    { term: "Green Revolution", definition: "1950s-60s agricultural modernization — high-yield varieties, fertilizers, irrigation; increased yields but environmental costs." },
    { term: "Pastoral nomadism", definition: "Mobile livestock herding following seasonal pastures — adaptation to arid/semi-arid regions." },
    { term: "Shifting cultivation", definition: "Slash-and-burn agriculture — clear forest, farm briefly, move on; sustainable if fallow periods maintained." },
  ],
  concepts: [
    {
      id: "aphg-u4-agriculture-systems",
      title: "How people feed themselves",
      skill: "Compare agricultural systems and analyze location factors.",
      lesson: {
        sections: [
          {
            heading: "Agricultural types",
            body: "Subsistence (family consumption) vs. commercial (market sale); von Thünen shows intensive agriculture near markets, extensive farther; pastoral nomadism adapts to arid lands; shifting cultivation to tropical forests.",
          },
          {
            heading: "Green Revolution",
            body: "High-yield crop varieties + fertilizers + irrigation dramatically increased yields (especially Asia) but caused environmental degradation and dependency.",
          },
        ],
        keyFormulas: [
          { name: "Agriculture types", statement: "Subsistence / Commercial / Pastoral / Shifting cultivation" },
          { name: "Von Thünen", statement: "Intensive (near market) → Extensive (far from market) rings" },
        ],
        workedExample: {
          problem: "Why does von Thünen predict intensive agriculture near cities?",
          solution: "Perishable, high-value products (vegetables, dairy) are best near markets to minimize transport costs; extensive products (grains, livestock) can be farther — creating concentric land-use rings.",
        },
      },
      questions: [
        {
          id: "aphg-u4-agriculture-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Subsistence agriculture differs from commercial because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "uses more technology"
                    },
                    {
                              "id": "b",
                              "text": "produces food for family's own consumption"
                    },
                    {
                              "id": "c",
                              "text": "is more profitable"
                    },
                    {
                              "id": "d",
                              "text": "uses larger farms"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Subsistence agriculture",
                              "statement": "Self-consumption farming."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subsistence agriculture produces food primarily for the farmer's family — no market surplus; commercial agriculture produces for sale.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Self-consumption",
          "commonErrors": [
                    "Confusing with commercial (market-oriented)."
          ]
},
        },
        {
          id: "aphg-u4-agriculture-systems-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Von Thünen's model predicts ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "random agricultural distribution"
                    },
                    {
                              "id": "b",
                              "text": "intensive agriculture near markets, extensive farther away"
                    },
                    {
                              "id": "c",
                              "text": "all agriculture equally distributed"
                    },
                    {
                              "id": "d",
                              "text": "only subsistence near cities"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Von Thünen model",
                              "statement": "Agricultural location theory."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Von Thünen predicts concentric rings — intensive, perishable agriculture near markets; extensive, less perishable farther — driven by transport costs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It assumes isolated state, uniform terrain, single market — simplified but influential.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Intensive near, extensive far",
          "commonErrors": [
                    "Ignoring transport cost logic."
          ]
},
        },
        {
          id: "aphg-u4-agriculture-systems-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Green Revolution began in the 1960s. If it started in 1965 and high-yield varieties were widely adopted by 1975, how many years is that? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Years",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Date subtraction",
                              "statement": "$1975 - 1965 = 10$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$1975 - 1965 = 10$ years for initial adoption.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $10$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "10",
          "commonErrors": [
                    "Using wrong endpoints."
          ]
},
        },
        {
          id: "aphg-u4-agriculture-systems-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare subsistence and commercial agriculture, citing differences in scale, technology, and purpose.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Agriculture types",
                              "statement": "Self-sufficiency vs. market."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subsistence: small family farms, manual labor, diverse crops for self-consumption, low productivity, little surplus; found in developing countries.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Commercial: large mechanized farms, specialization (monoculture), market-oriented, high productivity, global supply chains; found in developed countries and export agriculture.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Key difference: subsistence feeds family; commercial feeds markets — different scales, technologies, and economic purposes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Subsistence = small/self-sufficient; Commercial = large/market-oriented",
          "commonErrors": [
                    "Conflating the two — different scales and purposes."
          ]
},
        },
        {
          id: "aphg-u4-agriculture-systems-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the Green Revolution's impact on global food security and environment. Was it a net positive?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Green Revolution assessment",
                              "statement": "Yields vs. environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Positive: high-yield varieties + fertilizers + irrigation dramatically increased food production — prevented predicted famines, fed billions, reduced hunger in Asia (India, China self-sufficient in grain).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Negative: environmental costs — soil degradation, water pollution (fertilizer runoff), biodiversity loss (monoculture), pesticide resistance; increased dependency on purchased inputs; inequality (wealthy farmers benefited more).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Long-term: yields plateaued; sustainability questions raised; organic/sustainable agriculture emerges as alternative; climate change threatens gains.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: Green Revolution prevented mass famine but at environmental cost — necessary but unsustainable in long term; future food security requires sustainable intensification.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Green Revolution fed billions but caused environmental degradation",
          "commonErrors": [
                    "One-sided — massive benefits with real environmental costs."
          ]
},
        },
      ],
    },
  ],
};
