import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "ebi10-u10-lesson-10-3",
  code: "10-3",
  title: "Biological Resources and Pest Control",
  goal: "I CAN describe biogas and biofuel production and explain biological methods of pest control.",
  standards: ["4BI1 5.9", "4BI1 5.10", "4BI1 5.11", "4BI1 5.12"],
  
  vocabulary: [
    { term: "Biogas", definition: "A mixture of methane and carbon dioxide produced by anaerobic digestion of organic waste." },
    { term: "Anaerobic digestion", definition: "The breakdown of organic matter by microorganisms without oxygen." },
    { term: "Biofuel", definition: "Fuel produced from biological material such as crops or waste." },
    { term: "Biological control", definition: "Using natural predators, parasites or pathogens to control pest populations." },
    { term: "Bacillus thuringiensis (Bt)", definition: "A bacterium producing a toxin used as a biological pesticide." },
    { term: "Integrated pest management (IPM)", definition: "Combining biological, chemical and cultural methods to control pests with minimal environmental damage." },
    { term: "Single-cell protein (SCP)", definition: "Protein-rich food produced by growing microorganisms such as yeast or bacteria on waste." },
  ],
  concepts: [
    {
      id: "ebi10-u10-biogas-biofuels",
      title: "Biogas, biofuels and single-cell protein",
      skill: "Describe anaerobic digestion, biofuel production and single-cell protein as uses of biological resources.",
      lesson: {
        sections: [
          {
            heading: "Anaerobic digestion and biogas",
            body: "**Anaerobic digestion** is the breakdown of organic waste (manure, sewage, food waste, crop residues) by microorganisms without oxygen. It produces:\n\n- **Biogas** — mainly methane (CH$_4$) with some CO$_2$, used as fuel for cooking, heating and electricity generation\n- **Digestate** — the remaining slurry, rich in nitrates, used as fertiliser\n\nThe process occurs in a sealed **digester** (biogas plant). It reduces waste, produces renewable energy and recycles nutrients.",
          },
          {
            heading: "Biofuels",
            body: "**Biofuels** are produced from biological material:\n\n- **Ethanol** — produced by fermenting sugars from crops (e.g. sugar cane, corn) or waste; used as a petrol additive or fuel\n- **Biodiesel** — produced from vegetable oils or animal fats by transesterification\n- **Biogas** — methane from anaerobic digestion (above)\n\nBiofuels are renewable because the plants absorb CO$_2$ as they grow, partially offsetting the CO$_2$ released when the fuel is burned. However, growing fuel crops can compete with food crops for land.",
          },
          {
            heading: "Single-cell protein (SCP)",
            body: "**SCP** is protein produced by growing microorganisms (yeast, bacteria, fungi) on waste substrates such as molasses, sewage or wood pulp. The microbial biomass is harvested, dried and used as animal feed or human food supplement.\n\n**Advantages**: produced quickly, uses waste materials, high protein content, can be grown on non-arable land.\n\n**Limitations**: some microbes produce toxins, purification needed, public acceptance as food may be low.",
          },
        ],
        keyFormulas: [
          { name: "Biogas composition", statement: "Methane (CH$_4$) + carbon dioxide, from anaerobic digestion" },
          { name: "Biofuel cycle", statement: "Plants absorb CO$_2$ growing $\\rightarrow$ fuel burned releases CO$_2$ (partially carbon-neutral)" },
        ],
        workedExample: {
          problem: "Explain how a farm could use anaerobic digestion to manage manure waste and produce energy.",
          solution: "Manure is fed into a sealed digester where anaerobic bacteria break it down. The biogas (methane) produced is collected and used for heating or electricity. The remaining digestate is used as fertiliser, recycling nutrients.",
        },
      },
      questions: [
        {
          id: "ebi10-u10-biogas-biofuels-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main gas in biogas?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Methane"
                    },
                    {
                              "id": "b",
                              "text": "Oxygen"
                    },
                    {
                              "id": "c",
                              "text": "Nitrogen"
                    },
                    {
                              "id": "d",
                              "text": "Hydrogen"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Biogas",
                              "statement": "Mainly methane from anaerobic digestion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Biogas is mostly methane (CH$_4$) plus CO$_2$; used as fuel.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Methane",
          "commonErrors": [
                    "Confusing biogas with natural gas; biogas comes from organic waste."
          ]
},
        },
        {
          id: "ebi10-u10-biogas-biofuels-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two advantages of producing biogas from organic waste.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Biogas benefits",
                              "statement": "Renewable energy + waste reduction + nutrient recycling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two advantages: produces renewable fuel; reduces landfill waste; digestate used as fertiliser.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Second distinct advantage.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "E.g. renewable energy + waste reduction (also fertiliser production).",
          "commonErrors": [
                    "Repeating 'good for environment' without specifics."
          ]
},
        },
        {
          id: "ebi10-u10-biogas-biofuels-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how biogas is produced by anaerobic digestion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Anaerobic digestion",
                              "statement": "Microbes break down organic matter without oxygen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Organic waste (manure, sewage, food waste) is placed in a sealed digester.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Anaerobic microorganisms break down the matter without oxygen.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Biogas (methane + CO$_2$) is produced; digestate remains as fertiliser.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Waste $\\rightarrow$ anaerobic microbes $\\rightarrow$ biogas + digestate.",
          "commonErrors": [
                    "Saying oxygen is needed; anaerobic means without oxygen."
          ]
},
        },
        {
          id: "ebi10-u10-biogas-biofuels-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A village wants to set up a biogas plant using animal manure.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how the biogas plant would work.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe two uses of the biogas produced.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State what happens to the remaining waste after digestion.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Biogas plant",
                              "statement": "Sealed digester; anaerobic breakdown; methane collected."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Manure fed into sealed digester; anaerobic bacteria break it down.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Biogas (methane) collected as fuel; conditions kept anaerobic.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Uses: cooking/heating; electricity generation; vehicle fuel.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second distinct use described.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Digestate remains — nutrient-rich slurry used as fertiliser.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) digester + anaerobic microbes (b) cooking/electricity (c) digestate as fertiliser",
          "commonErrors": [
                    "Forgetting the digestate residue is useful as fertiliser."
          ]
},
        },
        {
          id: "ebi10-u10-biogas-biofuels-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A country is considering replacing petrol with bioethanol made from sugar cane.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe how bioethanol is produced from sugar cane.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why bioethanol is considered more sustainable than petrol.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Discuss one disadvantage of growing crops for biofuel.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Bioethanol",
                              "statement": "Ferment sugars from crops to ethanol."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sugars extracted from sugar cane; fermented by yeast to ethanol.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Ethanol distilled/purified and used as fuel or petrol additive.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sugar cane absorbs CO$_2$ as it grows, offsetting CO$_2$ released when fuel burned.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Renewable because feedstock regrows, unlike finite fossil fuels.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Crop land used for fuel competes with food production.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Further drawback: fertiliser/pesticide use or processing emissions — balanced judgement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) ferment sugar $\\rightarrow$ ethanol (b) carbon-neutral, renewable (c) competes with food crops",
          "commonErrors": [
                    "Claiming biofuels release zero CO$_2$; they release CO$_2$ but crops absorb some."
          ]
},
        },
        {
          id: "ebi10-u10-biogas-biofuels-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts on biological resources.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe anaerobic digestion and the products formed.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how biofuels are produced and why they are renewable.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Discuss single-cell protein as a food source.",
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
                              "name": "Biological resources",
                              "statement": "Biogas, biofuels, SCP all use microorganisms on organic material."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Organic waste broken down by anaerobic microbes in sealed digester.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Produces biogas (methane + CO$_2$) used as fuel.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Digestate remains as fertiliser.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Reduces waste and produces renewable energy.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Crops/waste fermented or processed to produce ethanol/biodiesel.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Plants absorb CO$_2$ growing, offsetting CO$_2$ released on burning — partially carbon-neutral.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Renewable because feedstock regrows, unlike fossil fuels.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "SCP: microbes grown on waste produce protein-rich biomass.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Advantages: quick production, uses waste, high protein.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Limitations: toxins, purification, acceptance — balanced judgement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) digestion $\\rightarrow$ biogas + digestate (b) fermentation $\\rightarrow$ fuel, carbon-neutral (c) SCP advantages/limits",
          "commonErrors": [
                    "Saying SCP is made from animals; it is microbial protein."
          ]
},
        },
      ],
    },
    {
      id: "ebi10-u10-biological-pest-control",
      title: "Biological pest control",
      skill: "Describe biological methods of controlling pests and compare them with chemical pesticides.",
      lesson: {
        sections: [
          {
            heading: "What is biological control?",
            body: "**Biological control** uses natural enemies or pathogens to reduce pest populations, instead of (or alongside) chemical pesticides. Methods include:\n\n- **Predators** — releasing ladybirds to eat aphids; introducing parasitic wasps that lay eggs in caterpillars\n- **Parasites** — organisms that live on or in pests and weaken them\n- **Pathogens** — bacteria, viruses or fungi that infect and kill pests\n- **Sterile insect technique** — releasing sterilised males to reduce reproduction\n- **Pheromone traps** — using chemical signals to lure and trap pests",
          },
          {
            heading: "Bacillus thuringiensis (Bt)",
            body: "**Bt** is a soil bacterium that produces a toxin deadly to certain insect larvae (e.g. caterpillars). It is used in two ways:\n\n1. **Sprayed as a bioinsecticide** — the bacterial toxin is applied to crops\n2. **Genetically engineered into crops** — GM crops (e.g. Bt cotton, Bt maize) produce the toxin themselves, so insects feeding on them die\n\nBt is specific to target insects and breaks down in the environment, so it does not persist like chemical pesticides. However, overuse can lead to resistance in pest populations.",
          },
          {
            heading: "Advantages and limitations",
            body: "**Advantages of biological control**:\n- Target-specific — does not harm beneficial organisms like bees\n- Does not leave harmful chemical residues\n- Pests do not easily become resistant\n- Self-sustaining once established\n\n**Limitations**:\n- Slower acting than chemical pesticides\n- Requires knowledge of pest biology and natural enemies\n- Natural enemies may also attack beneficial species\n- Can be expensive to develop and release\n- Not always effective enough alone — may need IPM combining methods",
          },
        ],
        keyFormulas: [
          { name: "Biological control methods", statement: "Predators, parasites, pathogens, sterile insects, pheromones" },
          { name: "Bt toxin", statement: "Specific to insect larvae; breaks down in environment; used as spray or in GM crops" },
        ],
        workedExample: {
          problem: "A farmer has an aphid infestation on his roses. Suggest a biological control method.",
          solution: "Introduce ladybirds, which are natural predators of aphids. The ladybirds will eat the aphids, reducing their numbers without chemical pesticides. This is biological control using a predator.",
        },
      },
      questions: [
        {
          id: "ebi10-u10-biological-pest-control-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an example of biological pest control?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Releasing ladybirds to eat aphids"
                    },
                    {
                              "id": "b",
                              "text": "Spraying crops with insecticide"
                    },
                    {
                              "id": "c",
                              "text": "Using herbicide to kill weeds"
                    },
                    {
                              "id": "d",
                              "text": "Burning infected plants"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Biological control",
                              "statement": "Using natural enemies/pathogens to control pests."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ladybirds eating aphids is biological control; insecticide/herbicide are chemical.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Releasing ladybirds to eat aphids",
          "commonErrors": [
                    "Confusing biological control with chemical pesticides."
          ]
},
        },
        {
          id: "ebi10-u10-biological-pest-control-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two advantages of biological control over chemical pesticides.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Biological control advantages",
                              "statement": "Target-specific, no residues, self-sustaining."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two advantages: target-specific (doesn't harm beneficial insects); no harmful residues; self-sustaining; pests less likely to become resistant.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Second distinct advantage.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "E.g. target-specific + no residues (also self-sustaining, less resistance).",
          "commonErrors": [
                    "Saying biological control is always faster; it is usually slower."
          ]
},
        },
        {
          id: "ebi10-u10-biological-pest-control-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how Bacillus thuringiensis is used to control insect pests.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bt",
                              "statement": "Bacterium producing toxin specific to insect larvae."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bt produces a toxin that is toxic to specific insect larvae (e.g. caterpillars) when eaten.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It can be sprayed onto crops as a bioinsecticide or engineered into GM crops.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Insects feeding on treated plants ingest the toxin and die; it is specific and breaks down in environment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Bt toxin kills target larvae when ingested; used as spray or in GM crops.",
          "commonErrors": [
                    "Saying Bt kills all insects; it is specific to certain larvae."
          ]
},
        },
        {
          id: "ebi10-u10-biological-pest-control-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A greenhouse grower wants to control whitefly without harming beneficial insects.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define biological control.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two examples of biological control agents.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why biological control is better than chemical spray in this case.",
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
                              "name": "Biological control",
                              "statement": "Using natural enemies/pathogens to reduce pests."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Using natural predators, parasites or pathogens to control pest populations.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Aim: reduce pests without harming beneficial insects.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Two examples: parasitic wasps that attack whitefly; ladybirds; Bt; predatory mites.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second example correctly named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Target-specific — does not harm beneficial insects; no chemical residues.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) natural enemies/pathogens (b) parasitic wasps, ladybirds, Bt (c) target-specific, no harm to beneficials",
          "commonErrors": [
                    "Choosing a broad-spectrum insecticide which would also kill beneficials."
          ]
},
        },
        {
          id: "ebi10-u10-biological-pest-control-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Bt cotton has been genetically modified to produce the Bt toxin.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how Bt toxin protects the cotton plant.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Discuss one advantage and one disadvantage of using Bt crops.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State another biological method of pest control.",
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
                              "name": "Bt crops",
                              "statement": "GM plants produce insecticidal toxin themselves."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Bt gene inserted into cotton; plant produces Bt toxin in its tissues.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Insect pests (e.g. bollworm larvae) feeding on plant ingest toxin.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Toxin kills the larvae, protecting the crop without spraying.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Advantage: reduced pesticide spraying, targeted protection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Disadvantage: pest resistance may develop / ecological concerns.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Another method: introducing predators/parasites, sterile insect technique, pheromone traps.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) plant produces toxin, larvae die (b) less spraying vs resistance/ecological concerns (c) e.g. parasitic wasps",
          "commonErrors": [
                    "Saying Bt kills all pests; it is specific to certain larvae."
          ]
},
        },
        {
          id: "ebi10-u10-biological-pest-control-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts on pest control.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe three biological methods of pest control.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Compare biological control with chemical pesticide use.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the use of Bt crops for pest management.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Pest control",
                              "statement": "Biological = natural enemies; chemical = pesticides; IPM combines both."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Three methods named: predators (ladybirds), parasites (wasps), pathogens (Bt, fungi), sterile insects, pheromone traps.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Each method correctly described with an example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Third distinct method described.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Biological: target-specific, no residues, self-sustaining, slower acting.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Chemical: fast-acting, broad-spectrum, but harms beneficials, leaves residues, resistance develops.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Comparison weighs pros and cons of both approaches with a conclusion.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Bt crops produce toxin internally, protecting plants without spraying.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Target-specific to pests, reduces chemical pesticide use.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Concerns: pest resistance may evolve, ecological effects, GM controversy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evaluation balances benefits against risks; IPM may be the best approach.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) predators/parasites/pathogens (b) biological vs chemical compared (c) Bt benefits vs resistance/ecological concerns",
          "commonErrors": [
                    "One-sided evaluation; needs both benefits and drawbacks."
          ]
},
        },
      ],
    },
  ],

};
