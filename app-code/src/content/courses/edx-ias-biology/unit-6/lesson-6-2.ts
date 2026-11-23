import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ediasbio-u6-lesson-6-2",
  code: "6-2",
  title: "Ecology and Populations",
  goal: "I CAN describe ecosystems, energy flow and factors affecting populations and succession.",
  standards: ["WBI14 Energy, environment and ecology", "Ecology"],
  
  vocabulary: [
    { term: "Ecosystem", definition: "Community of organisms interacting with their physical environment." },
    { term: "Producer", definition: "Autotroph (plant/alga) making food by photosynthesis — first trophic level." },
    { term: "Consumer", definition: "Organism eating other organisms — primary (herbivore), secondary, tertiary." },
    { term: "Decomposer", definition: "Organism (bacteria/fungi) breaking down dead matter releasing nutrients." },
    { term: "Food chain / web", definition: "Linear feeding sequence / interlinked chains in an ecosystem." },
    { term: "Trophic level", definition: "Position in a food chain (producer = 1st)." },
    { term: "Succession", definition: "Directional change in community over time from pioneer to climax." },
    { term: "Population", definition: "Group of organisms of one species in an area." },
  ],
  concepts: [
    {
      id: "ediasbio-u6-eco",
      title: "Ecosystems and energy flow",
      skill: "Describe feeding relationships, trophic levels and energy transfer in ecosystems.",
      lesson: {
        sections: [
          {
            heading: "Feeding relationships",
            body: "Producers (plants, algae) photosynthesise → primary consumers (herbivores) → secondary consumers (carnivores) → tertiary consumers (top predators). Decomposers break down all dead material, recycling nutrients.",
          },
          {
            heading: "Food chains and webs",
            body: "A food chain is a single feeding sequence; real ecosystems have food webs of interlinked chains. Arrows point from food to eater (energy flow direction).",
          },
          {
            heading: "Energy transfer",
            body: "Only ~10% of energy passes to the next trophic level; most is lost as heat, waste and uneaten parts. This limits food chain length to ~4-5 levels. Pyramids of numbers, biomass and energy all decrease upward.",
          },
        ],
        keyFormulas: [
          { name: "Energy transfer", statement: "~10% per trophic level; rest lost as heat/waste" },
          { name: "Arrow direction", statement: "Food → eater (energy flows that way)" },
          { name: "Decomposers", statement: "Recycle nutrients; release CO₂ back to atmosphere" },
        ],
        workedExample: {
          problem: "A food chain is grass → grasshopper → frog → snake. Why can there be no level above the snake?",
          solution: "Each level transfers only ~10% energy. By the fourth level so little energy remains that a fifth consumer could not get enough to survive — energy limits chain length.",
        },
      },
      questions: [
        {
          id: "ediasbio-u6-eco-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organisms are producers in an ecosystem?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Herbivores"
                    },
                    {
                              "id": "b",
                              "text": "Decomposers"
                    },
                    {
                              "id": "c",
                              "text": "Plants and algae"
                    },
                    {
                              "id": "d",
                              "text": "Top predators"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Producer",
                              "statement": "Autotroph at first trophic level."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Producers photosynthesise — plants/algae.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** Plants and algae"
},
        },
        {
          id: "ediasbio-u6-eco-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a food chain grass → rabbit → fox, name the trophic level of each organism.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Trophic level",
                              "statement": "Position in food chain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grass = producer = level 1; rabbit = primary consumer = level 2.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fox = secondary consumer = level 3.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Grass 1, rabbit 2, fox 3"
},
        },
        {
          id: "ediasbio-u6-eco-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why only about 10% of energy is transferred between trophic levels.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Energy loss",
                              "statement": "Most energy lost as heat, waste, uneaten tissue."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Much energy is lost as heat during respiration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Some energy goes to waste products and uneaten parts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Only consumed biomass transfers energy upward.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Result: ~10% efficiency limits chain length.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Heat + waste + uneaten losses → ~10% transfer"
},
        },
        {
          id: "ediasbio-u6-eco-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Distinguish between a food chain and a food web.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Chain vs web",
                              "statement": "Single path vs interlinked network."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Food chain: linear sequence of who eats whom.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Shows one feeding pathway only.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Food web: many interlinked chains showing all feeding relationships.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More realistic — organisms eat multiple foods.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Webs show ecosystem stability (alternative food sources).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Chain = one path; web = interlinked network"
},
        },
        {
          id: "ediasbio-u6-eco-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Define producer, consumer and decomposer.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State the role of decomposers.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Trophic groups",
                              "statement": "Producers, consumers, decomposers."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Producer: autotroph photosynthesising.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Consumer: eats other organisms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Decomposer: breaks down dead matter.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Decomposers release nutrients back to soil/atmosphere.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Recycle minerals for producers.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Complete nutrient cycling in ecosystem.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Trophic groups; decomposer nutrient recycling"
},
        },
        {
          id: "ediasbio-u6-eco-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Define ecosystem. (b) Name the three trophic groups. (c) Give an example of each. (d) What does ~10% energy transfer mean? (e) Why are food chains short? (f) What is a food web? (g) Why do arrows in food chains point food → eater? (h) Name the pyramid that always decreases upward.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define ecosystem.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Three trophic groups.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Example of each.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Meaning of ~10% transfer.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Why food chains are short.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Define food web.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Arrow direction reason.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Pyramid that decreases upward.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ecology",
                              "statement": "Trophic groups, energy flow, webs."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Community of organisms + physical environment interacting.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Producer, consumer, decomposer.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "All three named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Correct grouping.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Plant, herbivore, fungus (any valid examples).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Only ~10% of energy passes to next level.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Energy too low to support more levels after ~4-5.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Interlinked food chains showing all feeding relationships.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Arrows show energy flow direction (food → eater).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "h",
                              "reasoning": "Pyramid of energy (always decreases upward).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Ecosystem trophic structure and energy flow",
          "commonErrors": [
                    "Drawing arrows eater → food."
          ]
},
        },
      ],
    },
    {
      id: "ediasbio-u6-pop",
      title: "Populations, succession and conservation",
      skill: "Explain population factors, sampling, succession and conservation.",
      lesson: {
        sections: [
          {
            heading: "Population size",
            body: "Population changes by births, deaths, immigration and emigration. Factors affecting size: food availability, predation, disease, competition, habitat, climate. Exponential growth → logistic growth limited by carrying capacity.",
          },
          {
            heading: "Sampling and succession",
            body: "Quadrats estimate population size/density; random sampling avoids bias. Succession: pioneer species (lichens, mosses) → shrubs → trees → climax community. Primary succession on bare rock; secondary after disturbance.",
          },
          {
            heading: "Conservation",
            body: "Biodiversity loss from habitat destruction, pollution, overexploitation, invasive species, climate change. Conservation: protected areas, sustainable use, captive breeding, reforestation, pollution control.",
          },
        ],
        keyFormulas: [
          { name: "Population change", statement: "Births + immigration − deaths − emigration" },
          { name: "Succession", statement: "Pioneer → intermediate → climax community" },
          { name: "Carrying capacity", statement: "Max population an environment can sustain" },
        ],
        workedExample: {
          problem: "A meadow is cleared and left. Describe the likely succession.",
          solution: "Annual plants (pioneer) colonise → perennial grasses and shrubs → shrubs and young trees → deciduous woodland (climax) over decades.",
        },
      },
      questions: [
        {
          id: "ediasbio-u6-pop-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which factor does NOT directly change population size?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Births"
                    },
                    {
                              "id": "b",
                              "text": "Immigration"
                    },
                    {
                              "id": "c",
                              "text": "Photosynthesis rate"
                    },
                    {
                              "id": "d",
                              "text": "Emigration"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Population change",
                              "statement": "Births, deaths, migration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Photosynthesis is not a demographic factor.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** Photosynthesis rate"
},
        },
        {
          id: "ediasbio-u6-pop-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two factors that limit population growth.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Limiting factors",
                              "statement": "Resources and pressures limiting growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two: food availability, predation, disease, space, water.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Second factor named.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "E.g. food shortage and predation"
},
        },
        {
          id: "ediasbio-u6-pop-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what a quadrat is used for in ecology.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Quadrat sampling",
                              "statement": "Frame estimating density/cover."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Quadrat is a square frame placed randomly in habitat.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Counts organisms or estimates percentage cover inside.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Multiple random quadrats estimate population density.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Avoids bias and allows comparison between areas.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Random quadrats → estimate density/cover"
},
        },
        {
          id: "ediasbio-u6-pop-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe the stages of primary succession on bare rock.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Succession",
                              "statement": "Pioneer → shrub → tree → climax."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pioneer: lichens and mosses break down rock, trap soil particles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Annual then perennial herbs and grasses establish.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Shrubs and small trees colonise; soil deepens.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Climax community: mature woodland ecosystem stable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Each stage changes conditions enabling the next.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Lichens → grasses → shrubs → woodland climax"
},
        },
        {
          id: "ediasbio-u6-pop-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "List the four factors changing population size.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain carrying capacity.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give two conservation strategies.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Populations and conservation",
                              "statement": "Demography, limits, protection."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Births, deaths, immigration, emigration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "All four listed.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Maximum population an environment can sustain long-term.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Limited by resources (food, space).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Protected areas and sustainable use.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Second strategy: captive breeding/reforestation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Demographic factors; carrying capacity; conservation"
},
        },
        {
          id: "ediasbio-u6-pop-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Define population. (b) Name the four factors changing population size. (c) Give two limiting factors. (d) Define carrying capacity. (e) What is a quadrat? (f) What is succession? (g) Name the pioneer stage organisms. (h) Give two threats to biodiversity. (i) Give two conservation methods.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define population.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Four demographic factors.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Two limiting factors.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Define carrying capacity.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Define quadrat.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Define succession.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Pioneer organisms.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Two biodiversity threats.",
                    "marks": 1
          },
          {
                    "label": "i",
                    "prompt": "Two conservation methods.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ecology",
                              "statement": "Populations, sampling, succession."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Group of one species in an area.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Births, deaths, immigration, emigration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "All four named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Food, space, predation, disease (any two).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Max population sustainable by environment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Square frame for sampling quadrats.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Directional community change over time.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Lichens/mosses on bare rock.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "Habitat destruction, pollution, overexploitation, invasives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "i",
                              "reasoning": "Protected areas, sustainable use, reforestation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Population ecology and conservation",
          "commonErrors": [
                    "Thinking succession only happens on bare rock."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ediasbio-u6-eco-notes",
      title: "Ecology — notes",
      summary: "Producers → consumers → decomposers; ~10% energy per level; populations change by births/deaths/migration; succession pioneer → climax.",
      sections: [
        { heading: "Energy", body: "Only ~10% of energy transfers up each trophic level — heat and waste losses limit chains." },
        { heading: "Populations", body: "Births + immigration − deaths − emigration; limited by resources and carrying capacity." },
        { heading: "Succession", body: "Pioneers (lichens) → herbs → shrubs → climax woodland; quadrats sample populations." },
      ],
    },
  ],
};
