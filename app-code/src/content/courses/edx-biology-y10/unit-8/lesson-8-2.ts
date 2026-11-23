import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "ebi10-u8-lesson-8-2",
  code: "8-2",
  title: "Populations and Abiotic Factors",
  goal: "I CAN describe how abiotic and biotic factors affect populations and use quadrats to sample and estimate population size.",
  standards: ["4BI1 4.5", "4BI1 4.6", "4BI1 4.7", "4BI1 4.8"],
  
  vocabulary: [
    { term: "Population", definition: "All the organisms of one species living in a particular area at a particular time." },
    { term: "Community", definition: "All the populations of different species living together in an area." },
    { term: "Abiotic factor", definition: "A non-living environmental factor such as light, temperature, water or soil pH." },
    { term: "Biotic factor", definition: "A living factor affecting a population, such as food supply, predators or disease." },
    { term: "Limiting factor", definition: "An environmental factor that limits the rate of a process or the size of a population." },
    { term: "Carrying capacity", definition: "The maximum population size an environment can support with its available resources." },
    { term: "Quadrat", definition: "A square frame used to sample the organisms or percentage cover within a defined area." },
  ],
  concepts: [
    {
      id: "ebi10-u8-population-growth-limiting-factors",
      title: "Population size and limiting factors",
      skill: "Explain how abiotic and biotic factors limit population growth and describe population change over time.",
      lesson: {
        sections: [
          {
            heading: "Abiotic and biotic factors",
            body: "A population's size is controlled by factors in its environment:\n\n**Abiotic (non-living) factors**: light intensity, temperature, rainfall and soil moisture, soil pH, wind, oxygen levels and availability of minerals/nitrates.\n\n**Biotic (living) factors**: food supply, predators, parasites and disease, competition for resources, and reproduction rates.\n\nA **limiting factor** is whichever factor is in shortest supply — for example, in winter low temperature may limit plant growth even when light and water are abundant. Populations grow fastest when all factors are favourable; when one becomes limiting, growth slows or the population declines.",
          },
          {
            heading: "Population growth over time",
            body: "When a population colonises a new area with few predators and abundant resources, it grows rapidly in a **sigmoid (S-shaped) curve**:\n\n1. **Lag phase**: slow growth while organisms adapt\n2. **Log (exponential) phase**: rapid growth — doubling at a constant rate, no limiting factors\n3. **Stationary phase**: growth slows and levels off as limiting factors (food, space, predators, disease) act\n4. **Death phase**: population may decline if conditions deteriorate\n\nThe maximum sustainable population is the **carrying capacity** of the environment.",
          },
          {
            heading: "Interactions between populations",
            body: "Predator and prey populations are linked: when prey numbers rise, predators have more food and their numbers rise; more predators then reduce prey numbers, which in turn causes predator numbers to fall — producing repeating cycles. Competition between individuals of the same species (intraspecific) or different species (interspecific) for the same resource also limits population growth. Disease and parasites spread faster in dense populations, acting as a biotic check on numbers.",
          },
        ],
        keyFormulas: [
          { name: "Doubling", statement: "$\\text{population after } n \\text{ doublings} = \\text{initial} \\times 2^n$" },
          { name: "Growth curve", statement: "Lag $\\rightarrow$ log (exponential) $\\rightarrow$ stationary $\\rightarrow$ death phase" },
        ],
        workedExample: {
          problem: "A population of 200 bacteria doubles every hour. Assuming unlimited resources, how many bacteria after 5 hours?",
          solution: "5 hours gives 5 doublings. Population $= 200 \\times 2^5 = 200 \\times 32 = 6400$ bacteria.",
        },
      },
      questions: [
        {
          id: "ebi10-u8-population-growth-limiting-factors-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an abiotic factor affecting a plant population?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rainfall"
                    },
                    {
                              "id": "b",
                              "text": "Number of insect predators"
                    },
                    {
                              "id": "c",
                              "text": "Disease"
                    },
                    {
                              "id": "d",
                              "text": "Competition for light by other plants"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Abiotic factor",
                              "statement": "A non-living environmental factor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rainfall is non-living; predators, disease and competition are living (biotic) factors.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Rainfall",
          "commonErrors": [
                    "Choosing competition — it involves living organisms so is biotic, even though light itself is abiotic."
          ]
},
        },
        {
          id: "ebi10-u8-population-growth-limiting-factors-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two abiotic factors and two biotic factors that can limit the growth of an animal population.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Limiting factors",
                              "statement": "Abiotic = non-living; biotic = living factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two abiotic factors, e.g. temperature, rainfall, oxygen availability, light.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Two biotic factors, e.g. food supply, predators, parasites, disease, competition.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Abiotic: e.g. temperature and rainfall; biotic: e.g. food supply and predators.",
          "commonErrors": [
                    "Listing the same type twice or giving factors that do not limit (e.g. 'the animal itself')."
          ]
},
        },
        {
          id: "ebi10-u8-population-growth-limiting-factors-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the population of a prey animal is affected by the population of its predator.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Predator-prey interaction",
                              "statement": "The two populations are linked and change together over time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "When prey numbers increase, there is more food for predators so predator numbers rise.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More predators then eat more prey, so prey numbers fall.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fewer prey then causes predator numbers to fall, and the cycle repeats.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Prey up $\\rightarrow$ predators up $\\rightarrow$ prey down $\\rightarrow$ predators down (cyclic).",
          "commonErrors": [
                    "Describing only a one-way effect without the feedback cycle."
          ]
},
        },
        {
          id: "ebi10-u8-population-growth-limiting-factors-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A population of rabbits is introduced into a fenced reserve.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define carrying capacity.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why the rabbit population levels off after initial rapid growth.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest two reasons why the population might then decline.",
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
                              "name": "Carrying capacity",
                              "statement": "Maximum population an environment can support."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The maximum population size that an environment can support sustainably.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Limited by available resources such as food, water, space and mates.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "As numbers rise, limiting factors (food, space, waste, disease, predators) begin to restrict growth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Birth rate falls or death rate rises until the population stabilises at carrying capacity.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Any valid reason: food runs out, disease spreads in dense population, predators increase, harsh weather.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) max sustainable population (b) limiting factors equalise birth/death rates (c) e.g. food shortage or disease",
          "commonErrors": [
                    "Saying the population stops growing 'because it reached the fence'; resources, not space alone, set carrying capacity."
          ]
},
        },
        {
          id: "ebi10-u8-population-growth-limiting-factors-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A colony of yeast starts with 500 cells and doubles every 2 hours.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the number of cells after 6 hours, assuming unlimited nutrients.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why the real population in a closed flask would not keep doubling.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Name one limiting factor in the flask and one outside it.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Exponential growth",
                              "statement": "$N = N_0 \\times 2^n$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "6 hours $\\div$ 2 hours = 3 doublings.",
                              "working": "6 \\div 2 = 3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "$500 \\times 2^3 = 500 \\times 8 = 4000$ cells.",
                              "working": "500 \\times 2^3 = 4000",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Nutrients are used up, waste products accumulate and space becomes limiting.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Growth slows and the population reaches a stationary phase instead of continuing to double.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Inside: e.g. glucose/nutrients or oxygen; outside: e.g. predators, disease or food supply.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "One factor named for each context.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) 4000 cells (b) nutrients run out, waste builds up (c) e.g. glucose inside; predators outside",
          "commonErrors": [
                    "Using 6 doublings (one per hour) instead of 3.",
                    "Answering 3000 by multiplying by 6 rather than $2^3$."
          ]
},
        },
        {
          id: "ebi10-u8-population-growth-limiting-factors-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts on populations in ecosystems.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Distinguish between abiotic and biotic factors, giving two examples of each.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Describe the four stages of a sigmoid population growth curve.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain what happens to prey and predator populations if all the predators are removed.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State one way human activities can act as a limiting factor on a wild population.",
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
                              "name": "Population factors",
                              "statement": "Abiotic factors are non-living; biotic factors involve living organisms."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Abiotic: non-living environmental factors (e.g. temperature, rainfall, light, soil pH).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Two correct abiotic examples.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Biotic: living factors (e.g. food supply, predators, parasites, disease, competition).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Two correct biotic examples.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Lag: slow initial growth; log/exponential: rapid doubling; stationary: growth levels at carrying capacity; death: decline.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "All four stages described in correct order.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "The curve is sigmoid/S-shaped because limiting factors only act once resources become scarce.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Without predators the prey population initially grows rapidly (released from predation).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Then other limiting factors (food, disease) reduce it to a new carrying capacity.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Any valid example: hunting, habitat destruction, pollution, introduced species.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) abiotic e.g. temperature/rainfall; biotic e.g. food/predators (b) lag, log, stationary, death (c) prey rises then is limited by other factors (d) e.g. habitat destruction",
          "commonErrors": [
                    "Describing the curve as always rising; it levels off at carrying capacity."
          ]
},
        },
      ],
    },
    {
      id: "ebi10-u8-quadrat-sampling",
      title: "Sampling populations with quadrats",
      skill: "Describe and use quadrat and transect sampling to estimate population size and percentage cover.",
      lesson: {
        sections: [
          {
            heading: "Why sample?",
            body: "It is impossible to count every organism in an ecosystem, so ecologists take **samples** — small areas chosen at random — and use them to estimate the whole population. Sampling must be **random** so that every part of the area has an equal chance of being chosen; this avoids **bias**. A **quadrat** is a square frame (commonly 0.5 m $\\times$ 0.5 m or 1 m $\\times$ 1 m) placed at random positions, or along a **transect** (a straight line across the habitat) when investigating how a factor such as light changes across an area.",
          },
          {
            heading: "Recording and calculating",
            body: "For each quadrat, count the number of each species (for mobile animals) or estimate the **percentage cover** of each species (for plants, where individuals overlap). Results are averaged across all quadrats:\n\n$$\\text{mean number per quadrat} = \\frac{\\text{total count}}{\\text{number of quadrats}}$$\n\nTo convert to a density per square metre, divide the mean count by the quadrat area in m$^2$. To estimate the population of a whole area, multiply the density by the total area:\n\n$$\\text{population estimate} = \\text{density per m}^2 \\times \\text{total area in m}^2$$",
          },
          {
            heading: "Improving reliability",
            body: "More quadrats give a more reliable estimate because random variation is averaged out. Sampling at different times of day and in different weather conditions improves validity for mobile animals. When using a transect, place quadrats at regular intervals along the line (a **systematic sample**) so that a factor such as distance from a river or shade is recorded for each position. Always record abiotic data (light, soil moisture, pH) alongside biotic data so correlations between organisms and environment can be investigated.",
          },
        ],
        keyFormulas: [
          { name: "Mean per quadrat", statement: "$\\text{mean} = \\frac{\\text{sum of counts}}{\\text{number of quadrats}}$" },
          { name: "Density", statement: "$\\text{density} = \\frac{\\text{mean count}}{\\text{quadrat area (m}^2\\text{)}}$" },
          { name: "Population estimate", statement: "$\\text{estimate} = \\text{density} \\times \\text{total area}$" },
        ],
        workedExample: {
          problem: "Five 1 m $\\times$ 1 m quadrats in a meadow gave counts of dandelions 4, 7, 3, 8 and 6. Estimate the number of dandelions in a 200 m$^2$ meadow.",
          solution: "Mean per quadrat $= \\frac{4+7+3+8+6}{5} = \\frac{28}{5} = 5.6$. Density $= 5.6$ per m$^2$. Estimate $= 5.6 \\times 200 = 1120$ dandelions.",
        },
      },
      questions: [
        {
          id: "ebi10-u8-quadrat-sampling-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of using a quadrat in ecology?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To count or estimate organisms in a sampled area"
                    },
                    {
                              "id": "b",
                              "text": "To measure the temperature of soil"
                    },
                    {
                              "id": "c",
                              "text": "To trap small animals"
                    },
                    {
                              "id": "d",
                              "text": "To identify species under a microscope"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Quadrat",
                              "statement": "A square frame used to sample organisms in a defined area."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A quadrat samples a small area so population size can be estimated; the other options describe other equipment.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** To count/estimate organisms in a sampled area",
          "commonErrors": [
                    "Confusing a quadrat with a pitfall trap or thermometer."
          ]
},
        },
        {
          id: "ebi10-u8-quadrat-sampling-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Four quadrats each of area 0.25 m$^2$ gave counts of woodlice 8, 4, 12 and 8. Calculate the mean number of woodlice per quadrat.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Mean count",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Mean per quadrat",
                              "statement": "$\\text{mean} = \\frac{\\text{total}}{\\text{number of quadrats}}$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Add the counts: $8+4+12+8 = 32$.",
                              "working": "8+4+12+8=32",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Divide by 4 quadrats.",
                              "working": "32 \\div 4 = 8",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$8$ woodlice per quadrat",
          "commonErrors": [
                    "Dividing by the quadrat area instead of the number of quadrats."
          ]
},
        },
        {
          id: "ebi10-u8-quadrat-sampling-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how you would use quadrats to compare the percentage cover of two plant species in a meadow.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Quadrat sampling",
                              "statement": "Place quadrats randomly, record data, average results."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Place a number of quadrats at random positions across the meadow.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Within each quadrat estimate the percentage cover of each species (using a grid or visual estimate).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Calculate the mean percentage cover for each species across all quadrats and compare.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Random quadrat placement $\\rightarrow$ estimate % cover per species per quadrat $\\rightarrow$ average and compare.",
          "commonErrors": [
                    "Counting individuals for plants where cover is the correct measure; plants overlap."
          ]
},
        },
        {
          id: "ebi10-u8-quadrat-sampling-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student placed five 0.5 m $\\times$ 0.5 m quadrats randomly in a field and counted daisies: 10, 14, 8, 12, 16.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the mean number of daisies per quadrat and the density per m$^2$.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Suggest two ways the student could reduce bias in the sampling.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State why random placement of quadrats is important.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Density",
                              "statement": "$\\text{density} = \\frac{\\text{mean count}}{\\text{area}}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Mean $= \\frac{10+14+8+12+16}{5} = \\frac{60}{5} = 12$ per quadrat.",
                              "working": "60 \\div 5 = 12",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Quadrat area $= 0.25$ m$^2$, so density $= 12 \\div 0.25 = 48$ per m$^2$.",
                              "working": "12 \\div 0.25 = 48",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use more quadrats; place them truly randomly (e.g. random numbers/grid).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sample at different times/weather; avoid choosing quadrat positions deliberately.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Random placement gives every part of the field an equal chance of being sampled, avoiding systematic bias.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) 12 per quadrat; 48 per m$^2$ (b) more quadrats, random placement, repeat sampling (c) avoids bias",
          "commonErrors": [
                    "Forgetting to divide by quadrat area to get density."
          ]
},
        },
        {
          id: "ebi10-u8-quadrat-sampling-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Ten 1 m$^2$ quadrats placed along a transect from a riverbank gave counts of a plant species: 20, 15, 10, 6, 4, 3, 2, 1, 1, 1.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the mean number of plants per quadrat.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain what the transect data suggest about where the plant grows best.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State two abiotic measurements that would help explain the pattern.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Mean per quadrat",
                              "statement": "$\\text{mean} = \\frac{\\text{total}}{n}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Total $= 20+15+10+6+4+3+2+1+1+1 = 63$.",
                              "working": "63",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Mean $= 63 \\div 10 = 6.3$ per m$^2$.",
                              "working": "63 \\div 10 = 6.3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Numbers are highest near the river and fall with distance, so the plant prefers the damper, shaded conditions near the water.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Some factor (water, light, soil) changes along the transect and limits growth further from the river.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Any two: soil moisture, light intensity, soil pH, distance from water.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Two correct abiotic measurements named.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) 6.3 per m$^2$ (b) best near river — moisture/light gradient (c) e.g. soil moisture and light intensity",
          "commonErrors": [
                    "Ignoring the trend and quoting only the mean."
          ]
},
        },
        {
          id: "ebi10-u8-quadrat-sampling-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts on sampling in ecology.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe how a student could estimate the population of daisies in a 500 m$^2$ field using quadrats.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Counts from five 1 m$^2$ quadrats were 8, 12, 10, 6 and 14. Calculate the estimated total number of daisies in the field.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Discuss two ways the reliability of the estimate could be improved.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Population estimation",
                              "statement": "Mean density from random quadrats multiplied by total area."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Place quadrats at random positions across the field (random numbers or grid).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Count daisies (or estimate cover) in each quadrat.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Calculate mean count per quadrat and hence density per m$^2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Multiply density by total field area (500 m$^2$) to estimate population.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Mean $= \\frac{8+12+10+6+14}{5} = \\frac{50}{5} = 10$ per m$^2$.",
                              "working": "50 \\div 5 = 10",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Estimate $= 10 \\times 500$.",
                              "working": "10 \\times 500",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$= 5000$ daisies.",
                              "working": "= 5000",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use more quadrats to reduce the effect of chance variation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Repeat sampling at different times/places; ensure truly random placement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Larger sample size and repeat trials make the estimate more reliable/representative.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) random quadrats $\\rightarrow$ mean density $\\times$ area (b) 5000 daisies (c) more quadrats; repeat sampling",
          "commonErrors": [
                    "Multiplying mean count by number of quadrats instead of total area."
          ]
},
        },
      ],
    },
  ],

};
