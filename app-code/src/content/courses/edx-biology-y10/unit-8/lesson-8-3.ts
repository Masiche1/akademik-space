import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "ebi10-u8-lesson-8-3",
  code: "8-3",
  title: "The Carbon and Nitrogen Cycles",
  goal: "I CAN describe the carbon and nitrogen cycles, including the roles of photosynthesis, respiration, decomposition and nitrogen fixation.",
  standards: ["4BI1 4.9", "4BI1 4.10", "4BI1 4.11", "4BI1 4.12"],
  
  vocabulary: [
    { term: "Carbon cycle", definition: "The continuous movement of carbon between the atmosphere, organisms, soil and rocks." },
    { term: "Nitrogen cycle", definition: "The movement of nitrogen between the atmosphere, soil, plants and animals." },
    { term: "Photosynthesis", definition: "Process by which producers use carbon dioxide and water to make glucose, releasing oxygen." },
    { term: "Decomposition", definition: "Breakdown of dead organic matter by decomposers, releasing nutrients and carbon dioxide." },
    { term: "Nitrogen fixation", definition: "Conversion of atmospheric nitrogen into usable nitrogen compounds such as ammonium or nitrate." },
    { term: "Nitrification", definition: "Conversion of ammonium ions into nitrite then nitrate ions by bacteria." },
    { term: "Denitrification", definition: "Conversion of nitrates back into nitrogen gas by bacteria in anaerobic conditions." },
  ],
  concepts: [
    {
      id: "ebi10-u8-carbon-cycle",
      title: "The carbon cycle",
      skill: "Describe how carbon moves between the atmosphere, living organisms, soil and fossil fuels.",
      lesson: {
        sections: [
          {
            heading: "Carbon in living things",
            body: "Carbon is the basis of all biological molecules — carbohydrates, proteins, lipids and DNA. Carbon enters living organisms when producers carry out **photosynthesis**, using carbon dioxide from the atmosphere:\n\n$$\\text{carbon dioxide} + \\text{water} \\xrightarrow{\\text{light}} \\text{glucose} + \\text{oxygen}$$\n\nThe glucose is built into plant tissue, and carbon passes to consumers when they eat plants or other animals. Carbon returns to the atmosphere when organisms carry out **respiration** (aerobic or anaerobic), releasing carbon dioxide.",
          },
          {
            heading: "Carbon in soil and rocks",
            body: "When organisms die, **decomposers** (bacteria and fungi) break down their tissues. Some carbon returns to the atmosphere as carbon dioxide; some becomes **humus** in the soil, where it can remain for a long time. Over millions of years, buried organic matter can be compressed into **fossil fuels** (coal, oil, natural gas). When fossil fuels are burned (combustion) or when deforestation exposes soil carbon, carbon dioxide returns to the atmosphere. Carbon dioxide also dissolves in oceans, forming carbonates in shells and rocks.",
          },
          {
            heading: "Human influence on the carbon cycle",
            body: "Human activities have greatly increased the rate at which carbon dioxide returns to the atmosphere:\n\n- **Burning fossil fuels** for energy and transport\n- **Deforestation** — fewer trees to absorb CO$_2$, plus burning of cleared vegetation\n- **Decomposition** of organic waste\n\nThis extra CO$_2$ enhances the **greenhouse effect**, contributing to global warming — a topic covered in the next unit. The carbon cycle is a closed cycle: carbon is neither created nor destroyed, only moved between reservoirs.",
          },
        ],
        keyFormulas: [
          { name: "Photosynthesis", statement: "$\\text{CO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{glucose} + \\text{O}_2$ (light, chlorophyll)" },
          { name: "Respiration", statement: "$\\text{glucose} + \\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O} + \\text{energy}$" },
          { name: "Carbon reservoirs", statement: "Atmosphere $\\rightleftarrows$ plants/animals $\\rightleftarrows$ soil/humus $\\rightleftarrows$ fossil fuels/oceans" },
        ],
        workedExample: {
          problem: "Trace the path of a carbon atom from the atmosphere into a human and back to the atmosphere.",
          solution: "A plant absorbs CO$_2$ in photosynthesis and builds it into glucose. A human eats the plant (or an animal that ate it), incorporating carbon into body molecules. The human respires aerobically, releasing CO$_2$ back to the atmosphere.",
        },
      },
      questions: [
        {
          id: "ebi10-u8-carbon-cycle-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process removes carbon dioxide from the atmosphere?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Respiration"
                    },
                    {
                              "id": "b",
                              "text": "Photosynthesis"
                    },
                    {
                              "id": "c",
                              "text": "Combustion"
                    },
                    {
                              "id": "d",
                              "text": "Decomposition"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Photosynthesis",
                              "statement": "Producers use CO$_2$ and water to make glucose, releasing oxygen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Photosynthesis takes in CO$_2$; respiration, combustion and decomposition release it.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Photosynthesis",
          "commonErrors": [
                    "Choosing decomposition — it releases some CO$_2$ back to the atmosphere."
          ]
},
        },
        {
          id: "ebi10-u8-carbon-cycle-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two processes that return carbon dioxide to the atmosphere.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Carbon dioxide sources",
                              "statement": "Respiration, combustion and decomposition all release CO$_2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two correct processes, e.g. respiration by organisms; combustion of fossil fuels/wood.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Alternatively decomposition of dead matter or volcanic activity.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "E.g. respiration and combustion (also decomposition).",
          "commonErrors": [
                    "Listing photosynthesis, which removes rather than returns CO$_2$."
          ]
},
        },
        {
          id: "ebi10-u8-carbon-cycle-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the journey of carbon through the carbon cycle from the atmosphere, through living organisms, and back to the atmosphere.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Carbon cycle sequence",
                              "statement": "Photosynthesis $\\rightarrow$ feeding $\\rightarrow$ respiration/decomposition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Producers absorb CO$_2$ from the atmosphere during photosynthesis and build it into glucose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Carbon passes to consumers as they eat producers and each other; it is incorporated into body molecules.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Respiration by all organisms (and decomposition of dead matter) releases CO$_2$ back to the atmosphere.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Atmosphere $\\rightarrow$ photosynthesis $\\rightarrow$ food chain $\\rightarrow$ respiration/decomposition $\\rightarrow$ atmosphere.",
          "commonErrors": [
                    "Omitting decomposers or treating carbon as destroyed rather than recycled."
          ]
},
        },
        {
          id: "ebi10-u8-carbon-cycle-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A forest is cleared and the wood is burned.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the immediate effect of burning on the carbon cycle.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the longer-term effect of removing the trees on atmospheric carbon dioxide.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one way the carbon stored in the forest could have been released without burning.",
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
                              "name": "Carbon reservoirs",
                              "statement": "Forests store carbon; burning releases it as CO$_2$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Combustion releases the carbon stored in wood as carbon dioxide to the atmosphere.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "This is a rapid transfer of carbon from the biosphere/soil reservoir to the atmosphere.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Fewer trees remain to absorb CO$_2$ by photosynthesis, so less carbon is removed from the air.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Meanwhile decomposition of remaining organic matter and soil carbon may also release CO$_2$, raising atmospheric levels.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Decomposition by bacteria and fungi of dead wood and leaf litter.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) burning releases stored carbon as CO$_2$ (b) less photosynthesis + decomposition raises CO$_2$ (c) decomposition",
          "commonErrors": [
                    "Saying carbon is 'created' by burning; it is released from stored organic matter."
          ]
},
        },
        {
          id: "ebi10-u8-carbon-cycle-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Fossil fuels such as coal and oil formed from the remains of ancient organisms.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how carbon became locked away in fossil fuels.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how burning fossil fuels affects the carbon cycle and climate.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one natural process that also releases carbon dioxide to the atmosphere.",
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
                              "name": "Fossil fuels",
                              "statement": "Buried organic matter compressed over millions of years into coal, oil and gas."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Dead plants and animals were buried before decomposers could fully break them down.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Over millions of years heat and pressure converted the remains into fossil fuels.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "The carbon is stored out of the active cycle for geological time.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Combustion rapidly releases this stored carbon as CO$_2$ into the atmosphere.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Extra CO$_2$ enhances the greenhouse effect, contributing to global warming.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Any valid: respiration, volcanic eruptions, decomposition, forest fires.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) buried remains $\\rightarrow$ heat/pressure $\\rightarrow$ fossil fuels (b) combustion releases CO$_2$, enhances greenhouse effect (c) e.g. respiration",
          "commonErrors": [
                    "Claiming fossil fuels are a new source of carbon; they are stored organic carbon released rapidly."
          ]
},
        },
        {
          id: "ebi10-u8-carbon-cycle-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts on the carbon cycle.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the main processes in the carbon cycle, naming the organisms or processes involved at each stage.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain the role of decomposers in the carbon cycle.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain how increasing atmospheric carbon dioxide affects global temperature.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Discuss two human activities that increase atmospheric carbon dioxide.",
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
                              "name": "Carbon cycle",
                              "statement": "Photosynthesis removes CO$_2$; respiration, combustion and decomposition return it."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Photosynthesis by producers removes CO$_2$ from air and builds carbohydrates.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Feeding transfers carbon to consumers; respiration by all organisms releases CO$_2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Decomposers break down dead matter, releasing CO$_2$ or forming humus/soil carbon.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Combustion of fossil fuels and deforestation return large amounts of CO$_2$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bacteria and fungi decompose dead organic matter.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "They respire, releasing CO$_2$, and convert some carbon to humus stored in soil.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "CO$_2$ is a greenhouse gas that traps heat in the atmosphere.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "More CO$_2$ means more heat trapped, raising global temperature (enhanced greenhouse effect).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Two valid activities: burning fossil fuels for energy/transport; deforestation and burning vegetation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Both add CO$_2$ faster than it is removed by photosynthesis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) photosynthesis $\\rightarrow$ feeding $\\rightarrow$ respiration/decomposition/combustion (b) decompose and respire carbon (c) greenhouse gas traps heat (d) fossil fuels; deforestation",
          "commonErrors": [
                    "Treating the cycle as one-way rather than cyclic."
          ]
},
        },
      ],
    },
    {
      id: "ebi10-u8-nitrogen-cycle",
      title: "The nitrogen cycle",
      skill: "Describe nitrogen fixation, nitrification, plant uptake, feeding and denitrification in the nitrogen cycle.",
      lesson: {
        sections: [
          {
            heading: "Why nitrogen must be 'fixed'",
            body: "About 78% of the atmosphere is nitrogen gas (N$_2$), but plants cannot use it directly because the N$\\equiv$N triple bond is very strong. Nitrogen must first be converted into usable compounds such as **ammonium ions** (NH$_4^+$) or **nitrate ions** (NO$_3^-$) — a process called **nitrogen fixation**. Fixation happens by:\n\n- **Lightning** — provides energy to combine N$_2$ with oxygen, forming nitrates that wash into soil\n- **Nitrogen-fixing bacteria** — some free-living in soil, and **Rhizobium** bacteria living in root nodules of legume plants (peas, beans), which have a mutualistic relationship with the plant\n- **Decomposers** — break down proteins in dead matter and waste into ammonium compounds",
          },
          {
            heading: "From soil to plants to animals",
            body: "Plants absorb **nitrate ions** (and some ammonium) from the soil through their roots and use them to make amino acids and proteins — essential for growth. Animals obtain nitrogen by eating plants or other animals. When organisms excrete or die, nitrogen returns to the soil as urea or proteins, which decomposers convert to ammonium.\n\n**Nitrification**: certain bacteria oxidise ammonium ions to nitrite ions, then to nitrate ions — the form plants prefer.\n\n**Denitrification**: other bacteria in anaerobic (waterlogged) soil convert nitrates back to nitrogen gas, which returns to the atmosphere. This completes the cycle.",
          },
          {
            heading: "Nitrogen and humans",
            body: "Artificial **nitrogen fertilisers** (made by the Haber process) add nitrates to soil to increase crop yield, but excess fertiliser washed into rivers and lakes causes **eutrophication** — covered in the human influences unit. Legume crops are often grown in rotation partly because Rhizobium fixes nitrogen naturally, reducing the need for fertiliser.",
          },
        ],
        keyFormulas: [
          { name: "Nitrogen fixation", statement: "$\\text{N}_2 \\rightarrow \\text{NH}_4^+ \\text{ or } \\text{NO}_3^-$ (lightning, Rhizobium, some bacteria)" },
          { name: "Nitrification", statement: "$\\text{NH}_4^+ \\rightarrow \\text{NO}_2^- \\rightarrow \\text{NO}_3^-$ (nitrifying bacteria)" },
          { name: "Denitrification", statement: "$\\text{NO}_3^- \\rightarrow \\text{N}_2$ (anaerobic bacteria)" },
          { name: "Plant uptake", statement: "Roots absorb $\\text{NO}_3^-$ and $\\text{NH}_4^+$ to make amino acids/proteins" },
        ],
        workedExample: {
          problem: "A farmer grows peas, then wheat the following year. Explain how the peas help the wheat crop.",
          solution: "Peas are legumes; Rhizobium bacteria in their root nodules fix atmospheric nitrogen into ammonium/nitrates in the soil. After harvest and decomposition, these nitrates remain available, so the following wheat crop needs less fertiliser.",
        },
      },
      questions: [
        {
          id: "ebi10-u8-nitrogen-cycle-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process converts ammonium ions into nitrate ions in the soil?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Denitrification"
                    },
                    {
                              "id": "b",
                              "text": "Nitrogen fixation"
                    },
                    {
                              "id": "c",
                              "text": "Nitrification"
                    },
                    {
                              "id": "d",
                              "text": "Photosynthesis"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Nitrification",
                              "statement": "Bacteria convert ammonium to nitrite then nitrate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nitrification specifically converts NH$_4^+$ to NO$_3^-$; the others are different processes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** Nitrification",
          "commonErrors": [
                    "Confusing nitrification (ammonium $\\rightarrow$ nitrate) with nitrogen fixation (N$_2$ $\\rightarrow$ compounds)."
          ]
},
        },
        {
          id: "ebi10-u8-nitrogen-cycle-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two ways that nitrogen enters the soil in forms plants can use.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Nitrogen inputs",
                              "statement": "Fixation by lightning/bacteria and decomposition of organic matter add usable nitrogen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nitrogen fixation by lightning or nitrogen-fixing bacteria (e.g. Rhizobium in legumes).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Decomposition of dead organisms and waste by decomposers releases ammonium compounds.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Nitrogen fixation (lightning/Rhizobium); decomposition of organic matter.",
          "commonErrors": [
                    "Saying plants 'breathe in' nitrogen gas; they cannot use N$_2$ directly."
          ]
},
        },
        {
          id: "ebi10-u8-nitrogen-cycle-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the stages of the nitrogen cycle, starting from nitrogen gas in the atmosphere.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Nitrogen cycle",
                              "statement": "Fixation $\\rightarrow$ nitrification $\\rightarrow$ plant uptake $\\rightarrow$ feeding $\\rightarrow$ decomposition $\\rightarrow$ denitrification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nitrogen gas is fixed by lightning or bacteria into ammonium/nitrate compounds in soil.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Nitrifying bacteria convert ammonium to nitrates; plants absorb nitrates to make proteins.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Animals eat plants; decomposers return nitrogen as ammonium; denitrifying bacteria convert nitrates back to N$_2$ gas.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "N$_2$ $\\rightarrow$ fixation $\\rightarrow$ nitrates $\\rightarrow$ plants $\\rightarrow$ animals $\\rightarrow$ decomposition $\\rightarrow$ denitrification $\\rightarrow$ N$_2$.",
          "commonErrors": [
                    "Omitting denitrification so the cycle appears incomplete."
          ]
},
        },
        {
          id: "ebi10-u8-nitrogen-cycle-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Pea plants have nodules on their roots containing Rhizobium bacteria.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define nitrogen fixation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the relationship between Rhizobium and the pea plant is beneficial to both.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State why plants need nitrogen compounds.",
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
                              "name": "Nitrogen fixation",
                              "statement": "Conversion of atmospheric N$_2$ into usable nitrogen compounds."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Conversion of atmospheric nitrogen gas into usable nitrogen compounds (ammonium/nitrates).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Done by lightning or nitrogen-fixing bacteria such as Rhizobium.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Rhizobium fixes nitrogen for the plant, providing nitrates/ammonium for growth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "The plant provides the bacteria with carbohydrates/energy and a protected environment (mutualism).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Nitrogen is needed to make amino acids, proteins and DNA for growth.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) N$_2$ $\\rightarrow$ usable compounds (b) mutualism: bacteria fix N, plant supplies food/shelter (c) amino acids/proteins/DNA",
          "commonErrors": [
                    "Calling it parasitism; both partners benefit."
          ]
},
        },
        {
          id: "ebi10-u8-nitrogen-cycle-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Waterlogged soil becomes anaerobic (without oxygen).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe what denitrification is and when it occurs.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the effect of denitrification on soil fertility.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State why animals cannot use nitrogen gas directly from the air.",
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
                              "name": "Denitrification",
                              "statement": "Anaerobic bacteria convert nitrates back to nitrogen gas."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Denitrifying bacteria convert nitrate ions (NO$_3^-$) into nitrogen gas (N$_2$).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "It occurs in anaerobic conditions such as waterlogged soil.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "The N$_2$ returns to the atmosphere, completing the cycle.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Nitrates are lost from the soil as N$_2$ gas, reducing available nitrogen.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Soil fertility decreases, so crops may need fertiliser.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "The N$\\equiv$N triple bond is too strong for animals/plants to break without fixation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) nitrates $\\rightarrow$ N$_2$ by anaerobic bacteria in waterlogged soil (b) loses nitrates, lowers fertility (c) N$_2$ triple bond too strong",
          "commonErrors": [
                    "Saying denitrification adds nitrogen to soil; it removes it."
          ]
},
        },
        {
          id: "ebi10-u8-nitrogen-cycle-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts on the nitrogen cycle.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the complete nitrogen cycle, naming the processes and the organisms involved.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain the mutualistic relationship between Rhizobium bacteria and legume plants.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain two consequences of adding large amounts of nitrogen fertiliser to farmland.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Compare the carbon and nitrogen cycles in terms of their main reservoirs.",
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
                              "name": "Nitrogen cycle",
                              "statement": "Fixation $\\rightarrow$ nitrification $\\rightarrow$ uptake $\\rightarrow$ feeding $\\rightarrow$ decomposition $\\rightarrow$ denitrification."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Nitrogen fixation by lightning/Rhizobium converts N$_2$ to ammonium/nitrates.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Nitrifying bacteria convert ammonium to nitrate; plants absorb nitrates for proteins.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Animals eat plants; decomposers return nitrogen as ammonium from dead matter/waste.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Denitrifying bacteria in anaerobic soil convert nitrates back to N$_2$ gas.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Rhizobium fixes atmospheric nitrogen into compounds the plant can use.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "The plant provides carbohydrates and a protected nodule environment — mutualism.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Excess nitrate washes into rivers causing eutrophication; or denitrification returns N$_2$ wastefully.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Cost of fertiliser; or soil acidification; any two valid consequences.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Carbon cycle involves CO$_2$ in air, organisms, soil and fossil fuels; nitrogen cycle involves N$_2$ gas and nitrogen compounds in soil.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Both are cyclic with atmosphere and living organisms as key reservoirs, but nitrogen requires fixation before use.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) full cycle described (b) mutualism (c) eutrophication/fertiliser cost (d) both cyclic, N needs fixation",
          "commonErrors": [
                    "Saying animals get nitrogen from air; they get it from food."
          ]
},
        },
      ],
    },
  ],

};
