import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "apbio-u3-lesson-3-1",
  code: "3-1",
  title: "Energy Flow and Ecosystem Ecology",
  goal: "I CAN describe trophic levels, productivity, and biogeochemical cycles.",
  standards: ["ECO-1"],
  vocabulary: [
    { term: "Trophic level", definition: "Position in a food chain: producers, primary/secondary/tertiary consumers, decomposers." },
    { term: "Gross primary productivity", definition: "Total energy captured by producers via photosynthesis." },
    { term: "Net primary productivity", definition: "GPP minus respiration — energy available to consumers." },
    { term: "10% rule", definition: "Only about $10\\%$ of energy transfers between trophic levels." },
    { term: "Biogeochemical cycle", definition: "Movement of nutrients (carbon, nitrogen, water) through organisms and environment." },
  ],
  concepts: [
    {
      id: "apbio-u3-energy-flow-ecosystems",
      title: "Energy and matter in ecosystems",
      skill: "Trace energy flow and nutrient cycling through ecosystems.",
      lesson: {
        sections: [
          {
            heading: "Energy flow",
            body: "Producers capture solar energy; energy flows one way through trophic levels — producers $\\to$ herbivores $\\to$ carnivores $\\to$ decomposers. Only $\\sim 10\\%$ transfers each level; the rest is lost as heat through respiration. This is why food chains rarely exceed $4$-$5$ levels.",
          },
          {
            heading: "Nutrient cycles",
            body: "Unlike energy, matter is recycled. **Carbon** cycles via photosynthesis/respiration/combustion; **nitrogen** via fixation, nitrification, denitrification (only bacteria fix $N_2$); **water** cycles through evaporation, condensation, precipitation. Decomposers return nutrients to soil.",
          },
        ],
        keyFormulas: [
          { name: "10% rule", statement: "$E_{n+1} \\approx 0.1 \\, E_n$ between trophic levels" },
          { name: "NPP", statement: "$NPP = GPP - R_a$ (respiration)" },
        ],
        workedExample: {
          problem: "Producers capture $10{,}000$ kcal. Approximately how much reaches tertiary consumers?",
          solution: "$10{,}000 \\times 0.1 \\times 0.1 \\times 0.1 = 10$ kcal — three transfers of $10\\%$ each.",
        },
      },
      questions: [
        {
          id: "apbio-u3-energy-flow-ecosystems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Energy in an ecosystem flows ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "in cycles like nutrients"
                    },
                    {
                              "id": "b",
                              "text": "one direction from producers to consumers"
                    },
                    {
                              "id": "c",
                              "text": "from consumers to producers"
                    },
                    {
                              "id": "d",
                              "text": "randomly"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Energy flow",
                              "statement": "Energy is lost as heat — it cannot be recycled."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Energy enters as sunlight and flows one way, dissipating as heat at each level.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "One direction",
          "commonErrors": [
                    "Confusing energy flow with nutrient cycling."
          ]
},
        },
        {
          id: "apbio-u3-energy-flow-ecosystems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which organisms are primarily responsible for nitrogen fixation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Plants"
                    },
                    {
                              "id": "b",
                              "text": "Nitrogen-fixing bacteria"
                    },
                    {
                              "id": "c",
                              "text": "Fungi"
                    },
                    {
                              "id": "d",
                              "text": "Herbivores"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Nitrogen cycle",
                              "statement": "Only certain bacteria convert $N_2$ to usable forms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rhizobium and other diazotrophs fix atmospheric $N_2$ into ammonia/nitrates.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Nitrogen-fixing bacteria",
          "commonErrors": [
                    "Thinking plants can fix $N_2$ directly."
          ]
},
        },
        {
          id: "apbio-u3-energy-flow-ecosystems-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If GPP $= 5000$ kcal/m$^2$/yr and producers respire $2000$ kcal/m$^2$/yr, what is NPP? Enter the value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "NPP",
                              "answer": 3000
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "NPP",
                              "statement": "$NPP = GPP - R_a$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$NPP = 5000 - 2000 = 3000$ kcal/m$^2$/yr.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$3000$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$3000$ kcal/m$^2$/yr",
          "commonErrors": [
                    "Adding respiration instead of subtracting."
          ]
},
        },
        {
          id: "apbio-u3-energy-flow-ecosystems-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why food chains rarely exceed four or five trophic levels, using the 10% rule.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "10% rule",
                              "statement": "Only $\\sim 10\\%$ of energy transfers up each level."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each trophic transfer loses $\\sim 90\\%$ of energy as heat via respiration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "After $4$-$5$ transfers, too little energy remains to support a viable population of top predators.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Pyramids of energy always decrease upward — unlike biomass pyramids which can invert.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Energy loss limits chain length to $\\sim$4-5 levels",
          "commonErrors": [
                    "Ignoring energy loss or claiming matter is also lost."
          ]
},
        },
      ],
    },
  ],
};
