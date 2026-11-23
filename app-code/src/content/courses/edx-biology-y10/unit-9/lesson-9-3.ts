import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "ebi10-u9-lesson-9-3",
  code: "9-3",
  title: "Conservation and Sustainable Resource Use",
  goal: "I CAN explain the importance of biodiversity, describe conservation methods and discuss sustainable use of resources.",
  standards: ["4BI1 4.21", "4BI1 4.22", "4BI1 4.23", "4BI1 4.24"],
  
  vocabulary: [
    { term: "Biodiversity", definition: "The variety of living organisms, including species diversity, genetic diversity and ecosystem diversity." },
    { term: "Conservation", definition: "The protection and management of species, habitats and ecosystems to maintain biodiversity." },
    { term: "Sustainable development", definition: "Development that meets present needs without compromising the ability of future generations to meet theirs." },
    { term: "Habitat loss", definition: "Destruction or fragmentation of natural habitats by human activities such as deforestation and building." },
    { term: "Protected area", definition: "A region where human activity is restricted to conserve wildlife and habitats." },
    { term: "Captive breeding", definition: "Breeding endangered species in zoos, aviaries or reserves to increase numbers for release." },
    { term: "Renewable resource", definition: "A resource that can be replaced naturally within a human timescale, e.g. timber, fish, solar energy." },
  ],
  concepts: [
    {
      id: "ebi10-u9-biodiversity-conservation",
      title: "Biodiversity and conservation",
      skill: "Explain why biodiversity matters, describe threats to it and evaluate conservation strategies.",
      lesson: {
        sections: [
          {
            heading: "What is biodiversity and why does it matter?",
            body: "**Biodiversity** has three levels:\n- **Species diversity** — the number and variety of species in an area\n- **Genetic diversity** — the variety of genes within a species\n- **Ecosystem diversity** — the variety of habitats and communities\n\nBiodiversity is important because:\n- It provides **ecosystem services**: food, medicine, pollination, water purification, climate regulation\n- It maintains **resilience** — diverse ecosystems recover better from disturbance\n- Many species may hold **undiscovered resources** (e.g. medicinal compounds)\n- It has intrinsic value — species have a right to exist",
          },
          {
            heading: "Threats to biodiversity",
            body: "Major threats include:\n\n- **Habitat loss** — deforestation, building, farming (the biggest threat)\n- **Overexploitation** — overfishing, poaching, overhunting\n- **Pollution** — air, water and soil pollution\n- **Invasive species** — introduced species outcompete natives\n- **Climate change** — shifts habitats faster than species can adapt\n- **Disease** — e.g. chytrid fungus devastating amphibians",
          },
          {
            heading: "Conservation strategies",
            body: "Methods to conserve biodiversity:\n\n- **Protected areas** — national parks, reserves, marine protected areas where exploitation is restricted\n- **Captive breeding** — breeding endangered species in controlled conditions for release into the wild\n- **Seed banks** — storing seeds of crop wild relatives and rare plants\n- **Sustainable use** — managing resources so they are not depleted (e.g. quotas, certification)\n- **Legislation** — laws protecting endangered species and habitats\n- **Education and ecotourism** — raising awareness and giving local communities economic reasons to protect nature",
          },
        ],
        keyFormulas: [
          { name: "Biodiversity levels", statement: "Species diversity + genetic diversity + ecosystem diversity" },
          { name: "Main threats", statement: "Habitat loss, overexploitation, pollution, invasive species, climate change" },
        ],
        workedExample: {
          problem: "A rare orchid is threatened by deforestation. Suggest two conservation strategies.",
          solution: "Protect its remaining habitat in a designated reserve; and/or collect seeds for a seed bank and propagate plants in cultivation for later reintroduction.",
        },
      },
      questions: [
        {
          id: "ebi10-u9-biodiversity-conservation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following best describes biodiversity?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The variety of living organisms in an area"
                    },
                    {
                              "id": "b",
                              "text": "The total number of animals only"
                    },
                    {
                              "id": "c",
                              "text": "The size of an ecosystem"
                    },
                    {
                              "id": "d",
                              "text": "The number of predators in a food web"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Biodiversity",
                              "statement": "Variety of species, genes and ecosystems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Biodiversity is the variety of life, not just animal numbers or area.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** The variety of living organisms",
          "commonErrors": [
                    "Equating biodiversity with species count only; it includes genetic and ecosystem diversity."
          ]
},
        },
        {
          id: "ebi10-u9-biodiversity-conservation-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two reasons why conserving biodiversity is important.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Biodiversity value",
                              "statement": "Provides ecosystem services, resources, resilience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two valid reasons: ecosystem services (food, medicine, pollination); genetic resources; resilience to change; intrinsic value.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Second distinct reason.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Ecosystem services; genetic/medical resources; resilience; intrinsic value.",
          "commonErrors": [
                    "Repeating the same reason in different words."
          ]
},
        },
        {
          id: "ebi10-u9-biodiversity-conservation-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how habitat loss reduces biodiversity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Habitat loss",
                              "statement": "Destroying habitats removes the resources species need."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Deforestation/building/farming destroys the homes and food sources of many species.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Species cannot survive without their habitat and their populations decline.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fragmentation isolates populations, reducing genetic diversity and making extinction more likely.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Habitat destroyed $\\rightarrow$ species lose resources $\\rightarrow$ populations decline $\\rightarrow$ extinction.",
          "commonErrors": [
                    "Saying species simply 'move' — many cannot adapt to the new habitat."
          ]
},
        },
        {
          id: "ebi10-u9-biodiversity-conservation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A species of bird is declining rapidly due to habitat loss.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define conservation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe two conservation methods that could help the bird.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State the role of a seed bank in conserving plants.",
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
                              "name": "Conservation",
                              "statement": "Protection and management of species and habitats."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Protection and management of species, habitats and ecosystems.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Aim is to maintain biodiversity for present and future generations.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Two methods: protected habitat/reserve; captive breeding and release; legislation; habitat restoration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Captive breeding in aviaries, then release into protected habitat.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Seed banks store seeds of rare/crop species for future propagation and reintroduction.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) protect/manage species+habitats (b) reserves, captive breeding (c) stores seeds for future use",
          "commonErrors": [
                    "Only naming one method; need two distinct conservation approaches."
          ]
},
        },
        {
          id: "ebi10-u9-biodiversity-conservation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A tropical rainforest is being cleared for palm oil plantations.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two ways deforestation threatens biodiversity.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe how protected areas and captive breeding could help conserve rainforest species.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Discuss why sustainable use of forest resources might be better than clearance.",
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
                              "name": "Deforestation and conservation",
                              "statement": "Clearing destroys habitats; protected areas and sustainable use conserve them."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Destroys habitats so species lose homes/food; also releases stored carbon.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Second threat: extinction of specialists; fragmentation isolates populations.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Protected areas preserve remaining habitat; captive breeding boosts endangered populations for release.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second conservation method for rainforest species described.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Sustainable logging/eco-tourism gives income without destroying the forest, maintaining biodiversity long-term.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Clearance gives short-term profit but permanent biodiversity loss; sustainable use balances needs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) habitat loss + carbon release (b) protected areas + captive breeding (c) sustainable use = income + conservation",
          "commonErrors": [
                    "Only describing the problem without the conservation solution."
          ]
},
        },
        {
          id: "ebi10-u9-biodiversity-conservation-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts on biodiversity and conservation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define biodiversity and explain its three levels.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe three threats to biodiversity.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Describe three conservation strategies.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate the effectiveness of captive breeding as a conservation method.",
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
                              "name": "Biodiversity",
                              "statement": "Species, genetic and ecosystem diversity."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Biodiversity = variety of life in an area.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Species diversity: number of species; genetic diversity: genes within species.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Ecosystem diversity: variety of habitats and communities.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Three threats named: habitat loss, overexploitation, pollution, invasive species, climate change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each threat correctly described with its mechanism (e.g. habitat loss removes resources).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Third distinct threat described.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Three strategies named: protected areas, captive breeding, seed banks, sustainable use, legislation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Two distinct strategies described in enough detail.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Captive breeding increases numbers of endangered species for release and preserves genetic diversity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Limitations: costly, released animals may not survive, does not protect habitat — balanced judgement required.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) biodiversity + 3 levels (b) habitat loss/overexploitation/pollution (c) reserves/captive breeding/seed banks (d) pros + cons of captive breeding",
          "commonErrors": [
                    "Listing only benefits of captive breeding without evaluation."
          ]
},
        },
      ],
    },
    {
      id: "ebi10-u9-sustainable-resources",
      title: "Sustainable resource use",
      skill: "Distinguish renewable and non-renewable resources and explain sustainable development and waste reduction.",
      lesson: {
        sections: [
          {
            heading: "Renewable and non-renewable resources",
            body: "**Non-renewable resources** are used faster than they form and will eventually run out: fossil fuels (coal, oil, gas), metal ores, and many minerals.\n\n**Renewable resources** can be replaced naturally within a human timescale: timber (if forests are managed), fish stocks (if sustainably fished), water, and energy from sun, wind and waves. However, 'renewable' does not mean infinite — overuse can still deplete them (e.g. overfishing).",
          },
          {
            heading: "Sustainable development",
            body: "**Sustainable development** meets the needs of the present without compromising the ability of future generations to meet their needs. In biology this means:\n\n- Using resources at or below their rate of renewal\n- Minimising waste and pollution\n- Protecting biodiversity and ecosystems\n- Ensuring economic activities do not destroy the natural capital they depend on\n\nExamples: certified sustainable forestry (replanting trees), sustainable fishing quotas, organic farming, and recycling.",
          },
          {
            heading: "Reducing waste and pollution",
            body: "Ways to reduce human impact include:\n\n- **Recycling** — reusing paper, glass, metals and plastics reduces demand for raw materials and energy\n- **Composting** — organic waste returns nutrients to soil instead of landfill\n- **Reducing consumption** — using less energy, water and products\n- **Renewable energy** — solar, wind, hydroelectric reduce fossil fuel use\n- **Sustainable agriculture** — crop rotation, reduced fertiliser, integrated pest management\n\nThe goal is a **circular economy** where waste from one process becomes raw material for another.",
          },
        ],
        keyFormulas: [
          { name: "Renewable vs non-renewable", statement: "Renewable: replaced naturally (timber, fish, solar). Non-renewable: finite (fossil fuels, ores)." },
          { name: "Sustainable development", statement: "Meet present needs without compromising future generations." },
        ],
        workedExample: {
          problem: "A company wants to show its timber is sustainable. What practices should it use?",
          solution: "Harvest only mature trees at a rate below their growth rate, replant seedlings for every tree cut, protect biodiversity in the forest, and avoid damaging soil and waterways.",
        },
      },
      questions: [
        {
          id: "ebi10-u9-sustainable-resources-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a renewable resource?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Solar energy"
                    },
                    {
                              "id": "b",
                              "text": "Coal"
                    },
                    {
                              "id": "c",
                              "text": "Iron ore"
                    },
                    {
                              "id": "d",
                              "text": "Natural gas"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Renewable resource",
                              "statement": "Replaced naturally within a human timescale."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solar energy is renewable; coal, iron ore and gas are non-renewable.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Solar energy",
          "commonErrors": [
                    "Thinking all natural resources are renewable; fossil fuels are finite."
          ]
},
        },
        {
          id: "ebi10-u9-sustainable-resources-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two ways households can reduce waste and pollution.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Waste reduction",
                              "statement": "Recycle, compost, reduce consumption, use renewables."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two valid methods: recycling paper/glass/metal; composting organic waste; reducing energy/water use; using renewable energy.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Second distinct method.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "E.g. recycling and composting (also reducing consumption, renewables).",
          "commonErrors": [
                    "Repeating 'recycle' twice as both answers."
          ]
},
        },
        {
          id: "ebi10-u9-sustainable-resources-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what is meant by sustainable development.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sustainable development",
                              "statement": "Meet present needs without compromising future generations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Development that meets the needs of the present generation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Without compromising the ability of future generations to meet their own needs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "In biology: use resources sustainably, protect biodiversity, minimise pollution.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Meet present needs without compromising future generations' ability to meet theirs.",
          "commonErrors": [
                    "Defining it only as 'saving energy' without the intergenerational aspect."
          ]
},
        },
        {
          id: "ebi10-u9-sustainable-resources-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A forest is being logged for timber.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Distinguish between renewable and non-renewable resources, giving one example of each.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits of recycling timber and paper.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one way logging could be made sustainable.",
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
                              "name": "Renewable vs non-renewable",
                              "statement": "Renewable replaced naturally; non-renewable finite."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Renewable: replaced naturally (e.g. timber, fish, solar); non-renewable: finite (e.g. coal, oil, ores).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "One example of each type.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Reduces demand for new timber, preserving forests; saves energy and reduces waste/landfill.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second benefit: reduces energy use in manufacturing and keeps waste out of landfill.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Replant trees, harvest below growth rate, protect biodiversity, avoid soil damage.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) renewable = replaced (timber); non-renewable = finite (coal) (b) saves forests/energy (c) replanting",
          "commonErrors": [
                    "Calling timber non-renewable; it is renewable only if managed sustainably."
          ]
},
        },
        {
          id: "ebi10-u9-sustainable-resources-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A coastal community depends on fishing for its economy.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two consequences of overusing fish stocks.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe two sustainable fishing practices.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest two actions individuals could take to reduce environmental impact.",
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
                              "name": "Sustainable fishing",
                              "statement": "Catch $\\leq$ reproduction; protected areas; selective gear."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Stock collapse reduces food/income; disrupted marine food webs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Second consequence: loss of biodiversity as predators lose prey / economic damage to fishing communities.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Two practices: quotas, protected areas, minimum size, closed seasons, selective gear.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second distinct practice.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Two valid: recycle, reduce energy/water use, choose sustainable seafood, use public transport.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Second distinct action.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) collapse + food web damage (b) quotas + protected areas (c) recycling + sustainable choices",
          "commonErrors": [
                    "Confusing sustainable fishing with a total fishing ban."
          ]
},
        },
        {
          id: "ebi10-u9-sustainable-resources-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts on sustainable resource use.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define sustainable development and explain how it applies to resource use.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Distinguish between renewable and non-renewable resources with two examples of each.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Describe two sustainable practices for managing forests or fisheries.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Discuss the role of individuals and governments in promoting sustainability.",
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
                              "name": "Sustainable development",
                              "statement": "Meet present needs without compromising future generations."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Development meeting present needs.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Without compromising future generations' ability to meet theirs.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Applied to resources: use at or below renewal rate, protect ecosystems.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Renewable: replaced naturally (timber, fish, solar, water); non-renewable: finite (coal, oil, metal ores).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Two examples of each type correctly classified.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Renewable examples continue to be replaced; non-renewable examples are finite and will run out.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Two distinct sustainable practices named: replanting/selective logging; quotas/protected areas; certification.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Second distinct practice described with how it conserves the resource.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Governments: legislation, protected areas, incentives; individuals: recycling, reducing consumption, sustainable choices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Both levels of responsibility described.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) sustainable development definition + resource application (b) renewable vs non-renewable + examples (c) 2 practices (d) government + individual roles",
          "commonErrors": [
                    "Only discussing government or only individuals; both are needed."
          ]
},
        },
      ],
    },
  ],

};
