import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "ebi10-u9-lesson-9-1",
  code: "9-1",
  title: "Pollution and Its Effects",
  goal: "I CAN describe how human activities pollute water, soil and air and explain the effects of eutrophication and the enhanced greenhouse effect.",
  standards: ["4BI1 4.13", "4BI1 4.14", "4BI1 4.15", "4BI1 4.16"],
  
  vocabulary: [
    { term: "Pollution", definition: "The introduction of harmful substances or energy into the environment at levels that cause harm." },
    { term: "Eutrophication", definition: "Enrichment of water with nutrients (especially nitrates) causing excessive algal growth and deoxygenation." },
    { term: "Biochemical oxygen demand (BOD)", definition: "The amount of oxygen needed by decomposers to break down organic matter in water." },
    { term: "Greenhouse gas", definition: "A gas such as carbon dioxide or methane that traps heat in the atmosphere." },
    { term: "Global warming", definition: "The increase in average global temperature caused by an enhanced greenhouse effect." },
    { term: "Sewage", definition: "Waste water containing faeces, urine and other organic matter from homes and industry." },
    { term: "Particulate matter", definition: "Tiny solid particles in the air from burning fuels, dust and smoke." },
  ],
  concepts: [
    {
      id: "ebi10-u9-water-soil-pollution",
      title: "Water and soil pollution",
      skill: "Explain eutrophication and the effects of sewage, fertiliser and industrial pollutants on aquatic ecosystems.",
      lesson: {
        sections: [
          {
            heading: "Sources of water pollution",
            body: "Water is polluted by:\n\n- **Sewage** — untreated or partially treated sewage adds organic matter and pathogens\n- **Fertiliser runoff** — nitrates and phosphates wash from farmland into rivers and lakes\n- **Industrial effluent** — chemicals, heavy metals and hot water from factories\n- **Oil spills** — oil coats water surfaces, blocking light and oxygen and poisoning organisms\n\nAll of these can kill aquatic organisms directly or disrupt the ecosystem.",
          },
          {
            heading: "Eutrophication",
            body: "When nitrate or phosphate fertilisers wash into a lake or slow river, they act as extra nutrients. The sequence is:\n\n1. **Algal bloom** — algae multiply rapidly using the extra nutrients\n2. Algae block light, so submerged plants die\n3. Algae die and **decomposers** (bacteria) break them down\n4. Decomposers respire aerobically, using up dissolved oxygen\n5. Oxygen falls below what fish and other animals need — they die\n\nThe water's **biochemical oxygen demand (BOD)** rises, which is used as a measure of pollution.",
          },
          {
            heading: "Soil pollution",
            body: "Soil is polluted by pesticides, herbicides, industrial chemicals, heavy metals and acid rain (from sulphur dioxide and nitrogen oxides in the air). Pollutants can accumulate in soil, be absorbed by plants and enter food chains — a process called **bioaccumulation**. Pesticides such as DDT become more concentrated at each trophic level (**biomagnification**), harming top predators such as birds of prey. Acid rain also leaches minerals from soil, reducing fertility.",
          },
        ],
        keyFormulas: [
          { name: "Eutrophication sequence", statement: "Fertiliser runoff $\\rightarrow$ algal bloom $\\rightarrow$ decomposition $\\rightarrow$ oxygen depletion $\\rightarrow$ fish deaths" },
          { name: "BOD", statement: "Higher BOD = more organic pollution = less dissolved oxygen for aquatic life" },
        ],
        workedExample: {
          problem: "A farmer's field drains into a lake. Explain the sequence of events that leads to fish dying in the lake after heavy rain.",
          solution: "Rain washes nitrate fertiliser into the lake. Algae use the extra nutrients and bloom. When algae die, bacteria decompose them and respire, using up dissolved oxygen. Oxygen levels fall and fish suffocate.",
        },
      },
      questions: [
        {
          id: "ebi10-u9-water-soil-pollution-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main cause of eutrophication in lakes and rivers?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Excess nitrate and phosphate fertilisers entering the water"
                    },
                    {
                              "id": "b",
                              "text": "Oil spills on the water surface"
                    },
                    {
                              "id": "c",
                              "text": "Acid rain falling on forests"
                    },
                    {
                              "id": "d",
                              "text": "Plastic litter in the sea"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Eutrophication",
                              "statement": "Nutrient enrichment causing algal blooms and oxygen depletion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Eutrophication is caused by excess nitrates/phosphates, usually from fertiliser runoff.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Nitrate and phosphate fertilisers entering the water",
          "commonErrors": [
                    "Choosing oil — oil pollutes but does not cause eutrophication."
          ]
},
        },
        {
          id: "ebi10-u9-water-soil-pollution-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two effects of water pollution on aquatic organisms.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Water pollution effects",
                              "statement": "Kills organisms directly, reduces oxygen, blocks light, introduces pathogens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two valid effects: fish kill from low oxygen (eutrophication); poisoning by chemicals/oil; blocked light stopping photosynthesis; pathogens from sewage.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Second distinct valid effect.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "E.g. oxygen depletion killing fish; chemical poisoning; blocked light; sewage pathogens.",
          "commonErrors": [
                    "Repeating the same effect twice."
          ]
},
        },
        {
          id: "ebi10-u9-water-soil-pollution-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the stages of eutrophication in a lake.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Eutrophication",
                              "statement": "Nutrients $\\rightarrow$ algal bloom $\\rightarrow$ decomposition $\\rightarrow$ oxygen depletion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fertiliser nitrates/phosphates wash into the lake, adding nutrients.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Algae multiply rapidly (algal bloom), die and are decomposed by bacteria.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Decomposer respiration uses up dissolved oxygen, killing fish and other aquatic organisms.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Fertiliser runoff $\\rightarrow$ algal bloom $\\rightarrow$ decomposition $\\rightarrow$ oxygen depletion $\\rightarrow$ fish deaths.",
          "commonErrors": [
                    "Saying the algae themselves use all the oxygen; it is the decomposers' respiration that depletes oxygen."
          ]
},
        },
        {
          id: "ebi10-u9-water-soil-pollution-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Untreated sewage is discharged into a river.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how sewage causes deoxygenation of the water.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State two effects this has on aquatic life.",
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
                              "name": "Organic pollution",
                              "statement": "Decomposers respire organic matter, removing dissolved oxygen."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sewage adds organic matter (faeces, food waste) to the water.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Decomposer bacteria/fungi break down the organic matter.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Decomposers respire aerobically, consuming dissolved oxygen faster than it is replaced.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Fish and other aerobic organisms suffocate/die; water becomes cloudy and odorous.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pathogens in sewage can cause disease; anaerobic conditions favour harmful microbes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) organic matter $\\rightarrow$ decomposer respiration $\\rightarrow$ O$_2$ depleted (b) fish kill; disease risk",
          "commonErrors": [
                    "Saying sewage 'uses up' oxygen directly rather than via decomposer respiration."
          ]
},
        },
        {
          id: "ebi10-u9-water-soil-pollution-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A lake near farmland develops an algal bloom every summer.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the full sequence of eutrophication in the lake.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why fish die during the bloom.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest two ways farmers could reduce fertiliser reaching the lake.",
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
                              "name": "Eutrophication",
                              "statement": "Nutrient enrichment $\\rightarrow$ bloom $\\rightarrow$ decomposition $\\rightarrow$ oxygen depletion."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Nitrate/phosphate fertiliser washes into the lake from farmland.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Algae use the nutrients and multiply rapidly; when they die decomposers break them down.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Decomposer respiration depletes dissolved oxygen and increases BOD.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Low oxygen suffocates fish and other aquatic animals.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Blocked light kills submerged plants, removing oxygen producers and food.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Any valid: buffer strips, controlled-release fertiliser, reduced application, avoiding spreading near water.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) runoff $\\rightarrow$ bloom $\\rightarrow$ decomposition $\\rightarrow$ O$_2$ depletion (b) suffocation + loss of plants (c) e.g. buffer strips",
          "commonErrors": [
                    "Attributing fish deaths to the algae directly rather than oxygen depletion."
          ]
},
        },
        {
          id: "ebi10-u9-water-soil-pollution-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts on water and soil pollution.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the process of eutrophication step by step.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain what is meant by biochemical oxygen demand (BOD) and how it indicates pollution.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe two other forms of water pollution besides fertiliser runoff.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Discuss two ways of reducing water pollution from agriculture.",
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
                              "name": "Eutrophication and BOD",
                              "statement": "Nutrients cause blooms; decomposition raises BOD and lowers oxygen."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Fertiliser nitrates/phosphates enter the water.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Algal bloom blocks light; algae die.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Decomposers break down algae and respire.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Oxygen depleted; fish and aquatic life die.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "BOD is the oxygen needed by decomposers to break down organic matter.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "High BOD means heavy organic pollution and low oxygen for aquatic life.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Two valid: sewage discharge; industrial chemicals/heavy metals; oil spills; acid rain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Two distinct pollutants described.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Two valid methods: buffer strips, reduced/targeted fertiliser use, sewage treatment, controlling pesticide runoff.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Two distinct methods stated.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) runoff $\\rightarrow$ bloom $\\rightarrow$ decomposition $\\rightarrow$ O$_2$ loss (b) BOD = O$_2$ needed by decomposers; high = polluted (c) sewage/oil/chemicals (d) buffer strips; reduced fertiliser",
          "commonErrors": [
                    "Confusing BOD with oxygen produced rather than consumed."
          ]
},
        },
      ],
    },
    {
      id: "ebi10-u9-air-pollution-climate",
      title: "Air pollution and climate change",
      skill: "Explain the greenhouse effect, causes of air pollution and the consequences of global warming.",
      lesson: {
        sections: [
          {
            heading: "Air pollutants",
            body: "Burning fossil fuels and other human activities release pollutants into the air:\n\n- **Carbon dioxide (CO$_2$)** — the main greenhouse gas from combustion\n- **Sulphur dioxide (SO$_2$)** — from burning sulphur-containing fuels; causes acid rain\n- **Nitrogen oxides (NO$_x$)** — from vehicle engines and power stations; contribute to acid rain and smog\n- **Carbon monoxide (CO)** — from incomplete combustion; poisonous\n- **Particulates** — soot and dust particles that damage lungs and reduce visibility\n\nThese cause **smog**, **acid rain** (which damages buildings, forests and soils) and harm human health.",
          },
          {
            heading: "The greenhouse effect and global warming",
            body: "The **greenhouse effect** is natural: gases such as CO$_2$, methane and water vapour in the atmosphere absorb heat radiated from the Earth's surface and re-radiate some back, keeping the planet warm enough for life.\n\nHuman activities — mainly **burning fossil fuels**, **deforestation** and agriculture — have increased greenhouse gas concentrations. This **enhanced greenhouse effect** traps more heat, causing **global warming**. Consequences include rising sea levels (melting ice and thermal expansion), more frequent extreme weather, changes in rainfall patterns affecting agriculture, and loss of habitats as species cannot adapt quickly enough.",
          },
          {
            heading: "Reducing air pollution and emissions",
            body: "Ways to reduce air pollution and greenhouse emissions include:\n\n- Using **renewable energy** (solar, wind, hydroelectric) instead of fossil fuels\n- Improving **energy efficiency** in homes, industry and transport\n- Using **catalytic converters** in vehicles to reduce CO and NO$_x$\n- **Reforestation** to absorb CO$_2$\n- Switching to **electric vehicles** and public transport\n- Reducing waste and recycling to cut energy use",
          },
        ],
        keyFormulas: [
          { name: "Greenhouse effect", statement: "Sunlight warms Earth $\\rightarrow$ heat radiated back $\\rightarrow$ greenhouse gases absorb and re-radiate heat" },
          { name: "Acid rain", statement: "SO$_2$ + NO$_x$ $\\rightarrow$ sulphuric/nitric acids $\\rightarrow$ acid rain" },
          { name: "Enhanced greenhouse effect", statement: "More CO$_2$/CH$_4$ $\\rightarrow$ more heat trapped $\\rightarrow$ global warming" },
        ],
        workedExample: {
          problem: "Explain how burning coal for electricity contributes to global warming.",
          solution: "Coal contains carbon. Burning it releases carbon dioxide, a greenhouse gas. Extra CO$_2$ in the atmosphere absorbs more of the heat radiated from Earth, enhancing the greenhouse effect and raising global temperatures.",
        },
      },
      questions: [
        {
          id: "ebi10-u9-air-pollution-climate-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas is the main contributor to the enhanced greenhouse effect from burning fossil fuels?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Oxygen"
                    },
                    {
                              "id": "b",
                              "text": "Carbon dioxide"
                    },
                    {
                              "id": "c",
                              "text": "Nitrogen"
                    },
                    {
                              "id": "d",
                              "text": "Helium"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Greenhouse gas",
                              "statement": "A gas that absorbs and re-radiates heat, e.g. CO$_2$, methane."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Combustion of fossil fuels releases carbon dioxide, the main anthropogenic greenhouse gas.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Carbon dioxide",
          "commonErrors": [
                    "Choosing oxygen or nitrogen, which are not greenhouse gases."
          ]
},
        },
        {
          id: "ebi10-u9-air-pollution-climate-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two greenhouse gases other than carbon dioxide.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Greenhouse gases",
                              "statement": "CO$_2$, methane (CH$_4$), water vapour, nitrous oxide."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two correct gases: methane, water vapour, nitrous oxide.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Two distinct correct answers required.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "E.g. methane and water vapour (also nitrous oxide).",
          "commonErrors": [
                    "Naming oxygen or nitrogen as greenhouse gases."
          ]
},
        },
        {
          id: "ebi10-u9-air-pollution-climate-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the enhanced greenhouse effect.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Enhanced greenhouse effect",
                              "statement": "Increased greenhouse gases trap more heat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Human activities (burning fossil fuels, deforestation) increase CO$_2$ and other greenhouse gases.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "These gases absorb more of the heat radiated from Earth's surface.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More heat is trapped, raising average global temperature — global warming.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "More greenhouse gases $\\rightarrow$ more heat absorbed/trapped $\\rightarrow$ global warming.",
          "commonErrors": [
                    "Saying the greenhouse effect itself is bad; the natural effect is essential — the enhancement is the problem."
          ]
},
        },
        {
          id: "ebi10-u9-air-pollution-climate-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Vehicle exhausts and power stations release pollutants into the atmosphere.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe how sulphur dioxide in the atmosphere leads to acid rain.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two harmful effects of acid rain.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one technology used to reduce vehicle exhaust pollution.",
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
                              "name": "Acid rain",
                              "statement": "SO$_2$/NO$_x$ form acids that fall as acid rain."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "SO$_2$ (and NO$_x$) react with water vapour in the atmosphere to form sulphuric/nitric acids.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "These acids fall to Earth as acid rain (or dry deposition).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Two effects: damages forests/plant leaves; acidifies soil and water; corrodes buildings/limestone; harms aquatic life.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second distinct effect.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Catalytic converter (or low-sulphur fuel, filters).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) SO$_2$ + water $\\rightarrow$ acid $\\rightarrow$ acid rain (b) forest/soil/building damage (c) catalytic converter",
          "commonErrors": [
                    "Saying acid rain is caused directly by CO$_2$; it is mainly SO$_2$ and NO$_x$."
          ]
},
        },
        {
          id: "ebi10-u9-air-pollution-climate-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Global temperatures are rising.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why methane is a more powerful greenhouse gas than carbon dioxide per molecule.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe two consequences of global warming for ecosystems or human societies.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest two ways to reduce greenhouse gas emissions.",
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
                              "name": "Greenhouse gases",
                              "statement": "Different gases absorb heat differently; methane is a stronger absorber."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Methane absorbs more heat per molecule than CO$_2$; it is produced by cattle, rice fields, landfills and fossil fuel extraction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Though less abundant, its warming potential per molecule is higher.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Two consequences: sea level rise; extreme weather; habitat/species loss; crop failure; water shortages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second distinct consequence.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Two valid: renewable energy; energy efficiency; reforestation; public transport/electric vehicles; reducing waste.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Second distinct method.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) CH$_4$ absorbs more heat per molecule (b) sea-level rise/extreme weather (c) renewables; efficiency",
          "commonErrors": [
                    "Saying methane is 'more common' than CO$_2$; it is less abundant but stronger per molecule."
          ]
},
        },
        {
          id: "ebi10-u9-air-pollution-climate-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts on air pollution and climate change.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the natural greenhouse effect and how human activity enhances it.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe three air pollutants and one harmful effect of each.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Discuss two consequences of global warming for the environment or people.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate one strategy for reducing greenhouse gas emissions.",
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
                              "name": "Greenhouse effect",
                              "statement": "Greenhouse gases trap heat; enhanced by human emissions."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Greenhouse gases absorb heat radiated from Earth's surface and re-radiate it, warming the planet.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Burning fossil fuels and deforestation increase CO$_2$ and other greenhouse gases.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "More heat is trapped, causing enhanced greenhouse effect and global warming.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Three pollutants with effects, e.g. SO$_2$ $\\rightarrow$ acid rain; NO$_x$ $\\rightarrow$ smog/acid rain; particulates $\\rightarrow$ lung damage; CO $\\rightarrow$ poisoning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each pollutant correctly paired with a distinct effect.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Third correct pollutant-effect pair.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Two valid consequences: sea level rise, extreme weather, habitat loss, crop failure, water shortages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Second distinct consequence explained with mechanism.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Any strategy evaluated: renewables, efficiency, reforestation, transport changes — with a benefit and limitation.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) natural warming enhanced by CO$_2$ (b) SO$_2$/NO$_x$/particulates + effects (c) sea-level/extreme weather (d) evaluated strategy",
          "commonErrors": [
                    "Claiming the natural greenhouse effect causes global warming; it is the enhancement."
          ]
},
        },
      ],
    },
  ],

};
