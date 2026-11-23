import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "ebi10-u8-lesson-8-1",
  code: "8-1",
  title: "Feeding Relationships and Energy Transfer",
  goal: "I CAN describe food chains and food webs, identify trophic levels, and explain how energy is transferred between trophic levels.",
  standards: ["4BI1 4.1", "4BI1 4.2", "4BI1 4.3", "4BI1 4.4"],
  
  vocabulary: [
    { term: "Producer", definition: "An organism that makes its own food by photosynthesis, usually a green plant or alga." },
    { term: "Consumer", definition: "An organism that obtains energy by eating other organisms." },
    { term: "Herbivore", definition: "An animal that feeds only on plants." },
    { term: "Carnivore", definition: "An animal that feeds only on other animals." },
    { term: "Omnivore", definition: "An animal that feeds on both plants and animals." },
    { term: "Trophic level", definition: "A feeding level in a food chain; each step from producers to top consumers." },
    { term: "Decomposer", definition: "An organism such as a bacterium or fungus that breaks down dead organic matter." },
  ],
  concepts: [
    {
      id: "ebi10-u8-food-chains-trophic-levels",
      title: "Food chains, food webs and trophic levels",
      skill: "Construct and interpret food chains and food webs and identify producers, consumers and trophic levels.",
      lesson: {
        sections: [
          {
            heading: "Food chains and feeding levels",
            body: "A **food chain** shows the feeding relationships in a simple linear sequence, for example:\n\ngrass $\\rightarrow$ grasshopper $\\rightarrow$ frog $\\rightarrow$ snake $\\rightarrow$ eagle\n\nThe **first trophic level** is always producers (plants or algae). Then come the primary consumers (herbivores), secondary consumers (carnivores that eat herbivores), tertiary consumers and so on. Arrows point in the direction of **energy flow** — from the organism that is eaten to the organism that eats it.\n\nOrganisms are classified by diet: **herbivores** eat plants, **carnivores** eat animals, **omnivores** eat both, and **decomposers** (bacteria and fungi) break down dead matter.",
          },
          {
            heading: "Food webs",
            body: "In nature feeding relationships are rarely simple chains. Most organisms eat several kinds of food and are eaten by several predators, so the relationships form a **food web** — many interlinked food chains. A food web is a more accurate model of an ecosystem because it shows that removing one species can affect many others, not just the one species it fed on or was eaten by.",
          },
          {
            heading: "Decomposers and detritivores",
            body: "Dead plants and animals, plus waste products, provide food for **decomposers** (bacteria and fungi) and **detritivores** (animals such as earthworms, woodlice and maggots that physically break down dead matter). Decomposers release nutrients back into the soil for producers to use again, recycling matter through the ecosystem. Decomposers feed at every trophic level because they act on all dead organic material.",
          },
        ],
        keyFormulas: [
          { name: "Energy flow direction", statement: "Arrows in a food chain point from food to feeder: $\\text{grass} \\rightarrow \\text{rabbit}$ means energy flows grass $\\rightarrow$ rabbit." },
          { name: "Trophic level", statement: "Producer = level 1, herbivore = level 2, carnivore eating herbivore = level 3." },
        ],
        workedExample: {
          problem: "In the chain oak tree $\\rightarrow$ caterpillar $\\rightarrow$ blue tit $\\rightarrow$ sparrowhawk, name the producer and the tertiary consumer.",
          solution: "The oak tree makes its own food, so it is the producer (level 1). The caterpillar is a primary consumer (level 2), the blue tit a secondary consumer (level 3), so the sparrowhawk eating the blue tit is the tertiary consumer (level 4).",
        },
      },
      questions: [
        {
          id: "ebi10-u8-food-chains-trophic-levels-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a food chain, which organism is the producer?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The grass"
                    },
                    {
                              "id": "b",
                              "text": "The rabbit"
                    },
                    {
                              "id": "c",
                              "text": "The fox"
                    },
                    {
                              "id": "d",
                              "text": "The mushroom"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Producer",
                              "statement": "A producer makes its own food, usually by photosynthesis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grass is a green plant that photosynthesises; rabbit and fox are consumers and mushroom is a decomposer.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** The grass",
          "commonErrors": [
                    "Choosing the mushroom, forgetting fungi are decomposers, not producers."
          ]
},
        },
        {
          id: "ebi10-u8-food-chains-trophic-levels-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State what is meant by a trophic level and name the trophic level of a herbivore.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Trophic level",
                              "statement": "A feeding level in a food chain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A trophic level is a feeding level/step in a food chain.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "A herbivore eats producers, so it is a primary consumer at the second trophic level.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "A feeding level in a food chain; herbivore = second trophic level (primary consumer).",
          "commonErrors": [
                    "Calling the herbivore the first trophic level; producers are first."
          ]
},
        },
        {
          id: "ebi10-u8-food-chains-trophic-levels-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways in which a food web is a better model of an ecosystem than a single food chain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Food web",
                              "statement": "Many interlinked food chains showing the feeding relationships in an ecosystem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In a food web most organisms eat several different foods, whereas a chain shows only one food source.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Most organisms are eaten by several different predators, so a chain shows only one predator.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This means the effect of losing or adding one species can be predicted more accurately.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "A food web therefore represents the real feeding relationships of the whole ecosystem more completely.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Shows multiple food sources and multiple predators per organism; predicts effects of species loss more accurately.",
          "commonErrors": [
                    "Saying a food web is simply 'bigger' without explaining why that matters."
          ]
},
        },
        {
          id: "ebi10-u8-food-chains-trophic-levels-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Consider the food chain: algae $\\rightarrow$ water flea $\\rightarrow$ small fish $\\rightarrow$ heron.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the producer and the primary consumer in the chain.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the trophic level of the small fish.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Suggest two reasons why the number of herons is much smaller than the number of algae.",
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
                              "name": "Energy loss between levels",
                              "statement": "Only a small fraction of energy passes to the next trophic level, so numbers decrease upwards."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Algae are the producer (they photosynthesise).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Water flea is the primary consumer (it eats algae).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Small fish eats the water flea (a secondary consumer), so small fish is at the fourth trophic level / tertiary consumer.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "First reason: only about 10% of the energy is transferred at each step, so little energy reaches the top level.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Second reason: each level needs a large biomass below it to support a small number of top predators.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) algae = producer, water flea = primary consumer (b) fourth trophic level (c) energy loss at each step; large lower biomass needed",
          "commonErrors": [
                    "Calling the small fish a secondary consumer without checking what it eats; it eats a secondary consumer."
          ]
},
        },
        {
          id: "ebi10-u8-food-chains-trophic-levels-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An ecosystem contains: grass, clover, rabbits, mice, foxes and owls.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define the terms herbivore and decomposer.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Draw or describe in words a food web linking at least four of these organisms, showing the direction of energy flow with arrows.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why decomposers can be said to feed at every trophic level.",
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
                              "name": "Herbivore and decomposer",
                              "statement": "Herbivore eats plants; decomposer breaks down dead organic matter."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Herbivore: an animal that feeds only on plants.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Decomposer: an organism (bacterium/fungus) that breaks down dead organic matter.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A valid web, e.g. grass $\\rightarrow$ rabbit $\\rightarrow$ fox and clover $\\rightarrow$ mouse $\\rightarrow$ owl, with arrows pointing from food to feeder.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "At least four organisms linked with correct arrow direction.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Decomposers feed on dead material from all trophic levels — dead plants, herbivores and carnivores.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "They obtain energy from whatever dead organic matter is available regardless of its original trophic level.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Herbivore = plant-eater; decomposer = breaks down dead matter; web arrows point food $\\rightarrow$ feeder; decomposers feed on dead matter from all levels.",
          "commonErrors": [
                    "Drawing arrows pointing from predator to prey (direction of hunting, not energy flow)."
          ]
},
        },
        {
          id: "ebi10-u8-food-chains-trophic-levels-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts about feeding relationships in a pond ecosystem containing pondweed, algae, water fleas, small fish, herons, bacteria and fungi.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define the following terms: producer, primary consumer, secondary consumer, omnivore, decomposer.",
                    "marks": 5
          },
          {
                    "label": "b",
                    "prompt": "State the trophic level of the small fish if it eats water fleas that eat algae.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain two reasons why a food web is a more accurate representation of this ecosystem than a single food chain.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Describe the role of bacteria and fungi in this ecosystem.",
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
                              "name": "Feeding terms",
                              "statement": "Producer makes food; consumers eat other organisms; decomposers break down dead matter."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Producer: makes its own food by photosynthesis.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Primary consumer: herbivore eating producers.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Secondary consumer: carnivore eating primary consumers.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Omnivore: feeds on both plants and animals.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Decomposer: breaks down dead organic matter.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Algae = level 1, water flea = level 2, small fish = level 3 (secondary consumer).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "First reason: organisms eat several foods, not just one, so a chain is oversimplified.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Second reason: organisms are eaten by several predators, so the effect of losing one species is better predicted.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "They break down dead plants and animals (and waste) into simpler substances.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "This releases nutrients/nitrates back into the water for producers to reuse, recycling matter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) five correct definitions (b) level 3 (c) multiple foods and predators per organism (d) decompose dead matter and recycle nutrients",
          "commonErrors": [
                    "Confusing secondary consumer with 'second organism eaten' rather than 'eats primary consumers'."
          ]
},
        },
      ],
    },
    {
      id: "ebi10-u8-energy-transfer-pyramids",
      title: "Energy transfer and ecological pyramids",
      skill: "Calculate energy transfer between trophic levels and interpret pyramids of numbers, biomass and energy.",
      lesson: {
        sections: [
          {
            heading: "Energy flow and the 10% rule",
            body: "Energy enters an ecosystem as sunlight and is trapped by producers during photosynthesis. When one organism eats another, only about **10% of the energy stored in its food is transferred to the next trophic level**. The rest is lost, mainly as:\n\n- **respiration** — released as heat (and used for life processes)\n- **movement and other life processes** — also released as heat\n- **egestion** — energy in faeces never absorbed\n- **not being eaten** — dead parts and organisms not consumed\n\nSo energy flow is one-way: it cannot be recycled like matter. This is why food chains are rarely more than four or five trophic levels long.",
          },
          {
            heading: "Pyramids of numbers, biomass and energy",
            body: "**Pyramid of numbers**: shows the number of organisms at each trophic level. It is usually upright (numbers decrease upwards) but can be inverted — one oak tree supports thousands of caterpillars.\n\n**Pyramid of biomass**: shows the total dry mass of living organisms at each level. It is usually upright because biomass and stored energy decrease upwards. It can occasionally be inverted where the producer has a very rapid turnover (for example phytoplankton eaten faster than it reproduces).\n\n**Pyramid of energy**: shows the energy stored at each level per unit time. It is **always** upright because energy is lost at every transfer, so less energy is always available at higher levels.",
          },
          {
            heading: "Why numbers decrease upwards",
            body: "Because each trophic level needs a large amount of food (biomass and energy) below it, the number of organisms must decrease towards the top of the food chain. A single top predator may need the annual production of a huge area of producers. This is why apex predators are rare and why loss of producers has such dramatic effects on the whole ecosystem.",
          },
        ],
        keyFormulas: [
          { name: "Energy transferred", statement: "$\\text{energy to next level} \\approx 10\\% \\text{ of energy at current level}$" },
          { name: "Losses", statement: "$\\text{respiration (heat)} + \\text{egestion} + \\text{movement} + \\text{not eaten}$" },
          { name: "Pyramid of energy", statement: "Always upright — energy is never gained between trophic levels." },
        ],
        workedExample: {
          problem: "Producers in a grassland store $20000$ kJ of energy per square metre per year. Assuming 10% transfer, calculate the energy available to primary consumers and to secondary consumers.",
          solution: "Primary consumers receive $10\\% \\times 20000 = 2000$ kJ. Secondary consumers receive $10\\% \\times 2000 = 200$ kJ. A tertiary consumer would receive only $20$ kJ.",
        },
      },
      questions: [
        {
          id: "ebi10-u8-energy-transfer-pyramids-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Approximately what percentage of the energy in food is transferred from one trophic level to the next?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1%"
                    },
                    {
                              "id": "b",
                              "text": "10%"
                    },
                    {
                              "id": "c",
                              "text": "50%"
                    },
                    {
                              "id": "d",
                              "text": "100%"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Ten per cent rule",
                              "statement": "About 10% of energy is transferred between trophic levels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only about 10% of the energy stored at one level reaches the next level; the rest is lost.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** 10%",
          "commonErrors": [
                    "Choosing 100% by assuming all food energy is passed on; most is lost as heat."
          ]
},
        },
        {
          id: "ebi10-u8-energy-transfer-pyramids-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a food chain, producers store $5000$ kJ of energy. Using the 10% rule, calculate the energy transferred to primary consumers.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Energy (kJ)",
                              "answer": 500
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Energy transfer",
                              "statement": "$\\text{next level} = 0.10 \\times \\text{current level}$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Apply 10% of the producer energy.",
                              "working": "0.10 \\times 5000",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluate.",
                              "working": "500\\text{ kJ}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$500$ kJ",
          "commonErrors": [
                    "Multiplying by 10 instead of 0.1, giving 50000 kJ."
          ]
},
        },
        {
          id: "ebi10-u8-energy-transfer-pyramids-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why so little of the energy in food is available to the organism that eats it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Energy losses",
                              "statement": "Most energy is lost through respiration, movement, egestion and material never eaten."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Much energy is released as heat by respiration to release energy for life processes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Energy is used for movement, maintaining body temperature and other processes, all released as heat.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Some energy is lost in egestion (faeces) and in parts of prey not eaten.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Therefore only about 10% is stored as biomass that can pass to the next trophic level.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Heat from respiration and movement, egestion, and uneaten material mean only ~10% is transferred.",
          "commonErrors": [
                    "Saying energy is 'destroyed'; it is converted to heat which cannot be reused by the ecosystem."
          ]
},
        },
        {
          id: "ebi10-u8-energy-transfer-pyramids-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A pyramid of numbers for a grassland shows 100 000 grass plants, 5000 grasshoppers, 200 small birds and 5 hawks.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why the number of organisms decreases at each trophic level.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State why a pyramid of numbers for a single oak tree and its caterpillars might be inverted.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State which type of pyramid is always upright and explain why.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Pyramids",
                              "statement": "Numbers/biomass usually decrease upwards; energy always decreases upwards."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Only about 10% of energy is transferred each step, so each higher level needs a large biomass below it.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Hence fewer organisms can be supported at higher trophic levels.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "One producer (the tree) can support thousands of primary consumers (caterpillars), so numbers increase at level 2.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pyramids of numbers can therefore be inverted.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Pyramid of energy is always upright because energy is lost at every transfer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) 10% energy transfer needs large lower biomass (b) one tree supports many caterpillars (c) energy pyramid — energy always lost",
          "commonErrors": [
                    "Claiming all pyramids are always upright; only the energy pyramid must be."
          ]
},
        },
        {
          id: "ebi10-u8-energy-transfer-pyramids-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Producers in a food chain store $30000$ kJ of energy per year.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the energy available at the primary consumer, secondary consumer and tertiary consumer levels, assuming 10% transfer at each step.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why top predators such as eagles are rare in an ecosystem.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State what a pyramid of energy shows.",
                    "marks": 1
          }
],
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "(a) Primary (kJ)",
                              "answer": 3000
                    },
                    {
                              "label": "(b) Secondary (kJ)",
                              "answer": 300
                    },
                    {
                              "label": "(c) Tertiary (kJ)",
                              "answer": 30
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Ten per cent rule",
                              "statement": "$E_{n+1} = 0.10 \\times E_n$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Each level multiplies by 0.10: $30000 \\times 0.1 = 3000$ kJ at primary consumers.",
                              "working": "30000 \\times 0.10 = 3000",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Secondary: $3000 \\times 0.10 = 300$ kJ; tertiary: $300 \\times 0.10 = 30$ kJ.",
                              "working": "3000 \\times 0.10 = 300;\\ 300 \\times 0.10 = 30",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "All three values correct.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "After several transfers very little energy remains at the top level.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "So only a small population of top predators can be supported by the large producer biomass below.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "The amount of energy stored at each trophic level per unit time (usually per year).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) 3000, 300, 30 kJ (b) little energy reaches the top so few predators (c) energy stored per trophic level per unit time",
          "commonErrors": [
                    "Applying 10% once and using the same value for all levels.",
                    "Answering 30000/10 = 3000 for every level."
          ]
},
        },
        {
          id: "ebi10-u8-energy-transfer-pyramids-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts on ecological pyramids.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define pyramid of numbers, pyramid of biomass and pyramid of energy.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Producers store $40000$ kJ. Calculate the energy at secondary consumer level.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why a pyramid of numbers can be inverted, giving an example.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why a pyramid of energy can never be inverted.",
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
                              "name": "Ecological pyramids",
                              "statement": "Numbers = count of organisms; biomass = dry mass; energy = stored energy per unit time."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Pyramid of numbers: shows number of organisms at each trophic level.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Pyramid of biomass: shows total dry mass of organisms at each level.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Pyramid of energy: shows energy stored at each level per unit time.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Primary consumers: $40000 \\times 0.10 = 4000$ kJ.",
                              "working": "40000 \\times 0.10 = 4000",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Secondary consumers: $4000 \\times 0.10$.",
                              "working": "4000 \\times 0.10",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$= 400$ kJ.",
                              "working": "= 400\\text{ kJ}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "One producer can support many consumers, e.g. one tree with thousands of caterpillars.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "So numbers can increase at level 2, inverting the pyramid.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Energy is always lost between trophic levels (heat, egestion, not eaten).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Therefore energy at higher levels can never exceed energy at lower levels.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) numbers/biomass/energy definitions (b) 400 kJ (c) one producer many consumers (d) energy always lost so never inverted",
          "commonErrors": [
                    "Stating a pyramid of biomass is always upright; it can rarely be inverted."
          ]
},
        },
      ],
    },
  ],

};
