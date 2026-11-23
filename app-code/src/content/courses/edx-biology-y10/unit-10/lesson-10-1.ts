import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "ebi10-u10-lesson-10-1",
  code: "10-1",
  title: "Fermentation and Industrial Microbiology",
  goal: "I CAN describe fermentation in fermenters and the industrial production of penicillin and antibiotics.",
  standards: ["4BI1 5.1", "4BI1 5.2", "4BI1 5.3", "4BI1 5.4"],
  
  vocabulary: [
    { term: "Fermentation", definition: "The anaerobic breakdown of glucose by microorganisms to release energy, producing ethanol or lactic acid." },
    { term: "Fermenter", definition: "A large sealed vessel used to culture microorganisms under controlled conditions for industrial production." },
    { term: "Batch culture", definition: "Growing microorganisms in a fixed volume of nutrient medium until nutrients run out." },
    { term: "Continuous culture", definition: "Maintaining a fermenter at steady state by continuously adding fresh medium and removing product." },
    { term: "Antibiotic", definition: "A substance produced by microorganisms that kills or inhibits the growth of bacteria." },
    { term: "Penicillin", definition: "The first antibiotic, produced by the mould Penicillium, which kills many bacteria." },
    { term: "Antibiotic resistance", definition: "The ability of bacteria to survive exposure to an antibiotic that would normally kill them." },
  ],
  concepts: [
    {
      id: "ebi10-u10-fermenters-yeast",
      title: "Fermenters and yeast products",
      skill: "Describe the conditions in fermenters and the industrial uses of yeast fermentation.",
      lesson: {
        sections: [
          {
            heading: "What fermentation is",
            body: "**Fermentation** is the anaerobic (without oxygen) breakdown of glucose by microorganisms such as yeast, releasing energy. Yeast can respire aerobically when oxygen is available, but in the absence of oxygen it ferments glucose:\n\n$$\\text{glucose} \\rightarrow \\text{ethanol} + \\text{carbon dioxide} + \\text{energy}$$\n\nIn other organisms (e.g. muscles during hard exercise, or lactic acid bacteria in yoghurt) fermentation produces **lactic acid** instead:\n\n$$\\text{glucose} \\rightarrow \\text{lactic acid} + \\text{energy}$$",
          },
          {
            heading: "Conditions in a fermenter",
            body: "Industrial fermenters are large vessels that keep microorganisms under optimal conditions:\n\n- **Sterile** — all equipment is sterilised to prevent contamination by unwanted microbes\n- **Nutrient medium** — glucose or other sugars plus mineral ions\n- **Optimal temperature** — usually around 30–35 °C for yeast; too hot kills cells, too cold slows growth\n- **pH control** — maintained at the optimum for the organism\n- **Oxygen supply** — aerobic fermentations need oxygen pumped in; anaerobic ones are sealed\n- **Agitation** — mixing keeps nutrients and cells evenly distributed\n- **pH and temperature probes** — monitored continuously",
          },
          {
            heading: "Industrial uses of fermentation",
            body: "Fermentation produces many useful products:\n\n- **Bread** — yeast ferments dough sugars, releasing CO$_2$ which makes the dough rise\n- **Alcoholic drinks** — yeast ferments sugars in fruit/wheat to produce ethanol (beer, wine)\n- **Yoghurt and cheese** — lactic acid bacteria ferment lactose in milk to lactic acid\n- **Single-cell protein** — yeasts and bacteria grown on waste produce protein-rich food for animals\n- **Biogas** — anaerobic digestion of waste produces methane for fuel\n- **Antibiotics** — penicillin and other drugs are produced by fermenting moulds/bacteria",
          },
        ],
        keyFormulas: [
          { name: "Alcoholic fermentation", statement: "$\\text{glucose} \\rightarrow \\text{ethanol} + \\text{CO}_2 + \\text{energy}$ (yeast, anaerobic)`" },
          { name: "Lactic fermentation", statement: "$\\text{glucose} \\rightarrow \\text{lactic acid} + \\text{energy}$ (muscle, bacteria)`" },
          { name: "Fermenter conditions", statement: "Sterile + nutrients + optimal temperature/pH + oxygen (if aerobic) + agitation" },
        ],
        workedExample: {
          problem: "Explain why bread dough rises when yeast is added.",
          solution: "Yeast ferments the sugars in flour anaerobically, producing carbon dioxide gas. The CO$_2$ forms bubbles trapped in the dough, causing it to expand and rise. The ethanol produced evaporates during baking.",
        },
      },
      questions: [
        {
          id: "ebi10-u10-fermenters-yeast-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main product of yeast fermentation used in bread-making?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Carbon dioxide"
                    },
                    {
                              "id": "b",
                              "text": "Oxygen"
                    },
                    {
                              "id": "c",
                              "text": "Lactic acid"
                    },
                    {
                              "id": "d",
                              "text": "Nitrogen"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Yeast fermentation",
                              "statement": "Glucose $\\rightarrow$ ethanol + CO$_2$ + energy, anaerobically."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CO$_2$ gas makes bread rise; ethanol evaporates during baking.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Carbon dioxide",
          "commonErrors": [
                    "Choosing oxygen; fermentation is anaerobic and does not produce O$_2$."
          ]
},
        },
        {
          id: "ebi10-u10-fermenters-yeast-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two conditions that must be maintained in a fermenter for yeast to grow well.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fermenter conditions",
                              "statement": "Sterile, nutrients, optimal temperature/pH, oxygen control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two conditions: optimal temperature (~30°C), nutrient medium, correct pH, sterile conditions, oxygen control.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Second distinct condition.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "E.g. optimal temperature and nutrient medium (also pH, sterility, oxygen).",
          "commonErrors": [
                    "Saying 'any temperature'; yeast has a narrow optimum around 30–35 °C."
          ]
},
        },
        {
          id: "ebi10-u10-fermenters-yeast-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how yeast is used to make alcoholic drinks.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Alcoholic fermentation",
                              "statement": "Yeast converts sugars to ethanol + CO$_2$ anaerobically."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Yeast is added to a sugar solution (fruit juice, wort) in a fermenter.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Under anaerobic conditions yeast ferments glucose to ethanol and CO$_2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The ethanol is the alcohol in beer/wine; CO$_2$ may be retained for carbonation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Yeast + sugar $\\rightarrow$ anaerobic fermentation $\\rightarrow$ ethanol (alcohol) produced.",
          "commonErrors": [
                    "Saying yeast 'eats' sugar and produces alcohol directly; it ferments glucose anaerobically."
          ]
},
        },
        {
          id: "ebi10-u10-fermenters-yeast-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "An industrial fermenter is used to produce penicillin.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe three conditions that must be controlled in the fermenter.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why the fermenter must be kept sterile.",
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
                              "name": "Fermenter conditions",
                              "statement": "Temperature, pH, oxygen, nutrients and sterility all controlled."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Three controlled conditions: temperature (~25–30°C for Penicillium), pH, oxygen supply, nutrient medium, agitation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Second condition correctly described.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Third condition correctly described.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sterile conditions prevent contamination by unwanted microbes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Contaminants would compete for nutrients, reduce penicillin yield, or produce toxins.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) temperature/pH/oxygen/nutrients controlled (b) sterility prevents contamination reducing yield",
          "commonErrors": [
                    "Listing conditions without explaining why each matters."
          ]
},
        },
        {
          id: "ebi10-u10-fermenters-yeast-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A company compares batch and continuous fermentation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the word equation for alcoholic fermentation by yeast.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two uses of fermentation products in food and drink.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe the difference between batch and continuous culture.",
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
                              "name": "Batch vs continuous",
                              "statement": "Batch: fixed volume until nutrients run out; continuous: steady-state with fresh medium added."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Glucose $\\rightarrow$ ethanol + carbon dioxide + energy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both products (ethanol and CO$_2$) named with energy released.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bread: CO$_2$ makes dough rise; alcohol: ethanol is the drink.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Yoghurt: lactic acid bacteria ferment lactose to lactic acid.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Batch: microorganisms grow in fixed volume until nutrients run out, then harvested.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Continuous: fresh nutrient medium added and product removed continuously, keeping steady growth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) glucose $\\rightarrow$ ethanol + CO$_2$ + energy (b) bread/alcohol/yoghurt (c) batch = fixed volume; continuous = steady state",
          "commonErrors": [
                    "Writing the aerobic respiration equation instead of fermentation."
          ]
},
        },
        {
          id: "ebi10-u10-fermenters-yeast-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts on industrial fermentation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the design and conditions of an industrial fermenter.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain the difference between alcoholic and lactic acid fermentation.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Discuss three industrial uses of fermentation.",
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
                              "name": "Fermenter",
                              "statement": "Large sterile vessel; controlled temp, pH, oxygen, nutrients."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Large sealed vessel with nutrient medium, stirrer, temperature and pH probes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Sterile conditions maintained throughout to prevent contamination.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Oxygen supplied for aerobic fermentations; sealed for anaerobic ones.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Agitation mixes nutrients and cells; temperature and pH kept at optimum.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Alcoholic: yeast, glucose $\\rightarrow$ ethanol + CO$_2$ (bread, alcohol).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Lactic acid: bacteria/muscle, glucose $\\rightarrow$ lactic acid (yoghurt, cheese).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Three uses: bread-making; alcoholic drinks; yoghurt/cheese; single-cell protein; biogas; antibiotics.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Each use correctly linked to the fermentation product.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Third distinct industrial use described (e.g. single-cell protein or biogas).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "All three uses clearly explained with the organism and product.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) sterile vessel + controlled conditions (b) ethanol+CO$_2$ vs lactic acid (c) bread/alcohol/yoghurt/etc.",
          "commonErrors": [
                    "Confusing aerobic respiration with fermentation."
          ]
},
        },
      ],
    },
    {
      id: "ebi10-u10-antibiotics-penicillin",
      title: "Penicillin and antibiotics",
      skill: "Describe the discovery and production of penicillin and discuss antibiotic resistance.",
      lesson: {
        sections: [
          {
            heading: "Discovery of penicillin",
            body: "In 1928, **Alexander Fleming** noticed that a mould called *Penicillium notatum* had contaminated a bacterial culture plate and was killing the bacteria around it. He identified the active substance as **penicillin** — the first antibiotic.\n\nPenicillin works by interfering with bacterial cell wall synthesis, causing bacteria to burst and die. It is effective against many Gram-positive bacteria but not against viruses (which have no cell walls) or many Gram-negative bacteria.",
          },
          {
            heading: "Industrial production",
            body: "Penicillin is produced on an industrial scale by fermenting the mould *Penicillium chrysogenum* in large fermenters:\n\n1. Mould spores are grown in a nutrient medium\n2. The mould produces penicillin as a secondary metabolite\n3. After several days the broth is harvested\n4. Penicillin is extracted and purified\n\nThe process requires sterile conditions, optimal temperature and pH, and oxygen supply (aerobic fermentation). Other antibiotics are produced similarly using different microorganisms, or by chemical synthesis.",
          },
          {
            heading: "Antibiotic resistance",
            body: "**Antibiotic resistance** is a serious problem. Bacteria can mutate or acquire resistance genes, producing enzymes that destroy antibiotics or altered target sites that antibiotics cannot bind to. Resistance spreads rapidly because bacteria reproduce quickly and can transfer resistance genes to each other.\n\nResistance develops when antibiotics are:\n- prescribed unnecessarily (e.g. for viral infections)\n- not completed (patients stop early, leaving resistant survivors)\n- used in animal feed and agriculture\n\nTo slow resistance: only use antibiotics when necessary, complete the full course, and develop new antibiotics.",
          },
        ],
        keyFormulas: [
          { name: "Penicillin mechanism", statement: "Inhibits bacterial cell wall synthesis $\\rightarrow$ bacteria burst and die" },
          { name: "Resistance", statement: "Bacteria survive antibiotics via mutation or gene transfer; resistance spreads quickly" },
        ],
        workedExample: {
          problem: "Why is penicillin ineffective against viruses?",
          solution: "Penicillin works by interfering with bacterial cell wall synthesis. Viruses have no cells or cell walls — they are non-cellular particles — so penicillin has no target and cannot affect them.",
        },
      },
      questions: [
        {
          id: "ebi10-u10-antibiotics-penicillin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organism produces penicillin?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The mould Penicillium"
                    },
                    {
                              "id": "b",
                              "text": "A bacterium called Staphylococcus"
                    },
                    {
                              "id": "c",
                              "text": "A virus"
                    },
                    {
                              "id": "d",
                              "text": "A yeast"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Penicillin",
                              "statement": "Antibiotic produced by the mould Penicillium."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Penicillin is produced by Penicillium moulds, discovered by Fleming in 1928.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** The mould Penicillium",
          "commonErrors": [
                    "Confusing the producer (Penicillium mould) with the target (bacteria)."
          ]
},
        },
        {
          id: "ebi10-u10-antibiotics-penicillin-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two ways antibiotics are used to treat disease.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Antibiotic use",
                              "statement": "Kills or inhibits bacteria causing infection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two valid uses: treat bacterial infections (e.g. pneumonia, sepsis); prevent infection in surgery/wounds; treat animal diseases.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Second distinct use.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Treat bacterial infections; prevent post-surgical infection.",
          "commonErrors": [
                    "Saying antibiotics treat viruses; they only work on bacteria."
          ]
},
        },
        {
          id: "ebi10-u10-antibiotics-penicillin-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how penicillin is produced on an industrial scale.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Penicillin production",
                              "statement": "Ferment Penicillium mould in sterile fermenters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Penicillium chrysogenum mould spores are cultured in a nutrient medium.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Under controlled temperature, pH and oxygen the mould produces penicillin.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The broth is harvested and penicillin extracted and purified.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Culture Penicillium $\\rightarrow$ ferment under controlled conditions $\\rightarrow$ extract and purify penicillin.",
          "commonErrors": [
                    "Saying penicillin is synthesised chemically only; it is produced by fermentation."
          ]
},
        },
        {
          id: "ebi10-u10-antibiotics-penicillin-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Alexander Fleming discovered penicillin in 1928.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe how Fleming discovered penicillin.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how penicillin kills bacteria.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State why penicillin is not effective against viral infections.",
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
                              "name": "Penicillin discovery",
                              "statement": "Mould killed bacteria on culture plate; active substance identified."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Fleming noticed a Penicillium mould contaminating a bacterial culture plate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Bacteria around the mould were killed; he isolated the active substance — penicillin.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Penicillin interferes with bacterial cell wall synthesis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bacteria cannot maintain their cell walls and burst/die.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Viruses have no cells or cell walls, so penicillin has no target.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) mould contaminated plate, killed bacteria (b) inhibits cell wall synthesis (c) viruses have no cell walls",
          "commonErrors": [
                    "Saying penicillin kills viruses; it only works on bacteria."
          ]
},
        },
        {
          id: "ebi10-u10-antibiotics-penicillin-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Antibiotic resistance is increasing worldwide.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe how bacteria become resistant to antibiotics.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why resistance spreads quickly through a bacterial population.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest one way to slow the development of resistance.",
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
                              "name": "Antibiotic resistance",
                              "statement": "Mutations or gene transfer give bacteria survival advantage."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Bacteria can mutate, producing enzymes that destroy antibiotics or altered target sites.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Resistance genes can be transferred between bacteria (conjugation).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Resistant bacteria survive antibiotic treatment and multiply.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bacteria reproduce rapidly by binary fission, so resistant strains quickly dominate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Gene transfer spreads resistance to other bacteria in the population.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Only use antibiotics when necessary; complete the full course; develop new antibiotics.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) mutation or gene transfer (b) rapid reproduction spreads resistance (c) use only when needed",
          "commonErrors": [
                    "Saying humans become resistant; bacteria do."
          ]
},
        },
        {
          id: "ebi10-u10-antibiotics-penicillin-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts on antibiotics.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the discovery and mechanism of penicillin.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how penicillin is produced industrially.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Discuss the problem of antibiotic resistance and how it can be reduced.",
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
                              "name": "Antibiotics",
                              "statement": "Substances that kill/inhibit bacteria; resistance is a growing problem."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Fleming discovered penicillin from Penicillium mould in 1928.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "The mould killed bacteria around it on a culture plate; he isolated penicillin.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Penicillin inhibits bacterial cell wall synthesis, so bacteria burst and die.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Viruses are unaffected because they have no cells or cell walls.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Penicillium chrysogenum is cultured in a nutrient medium in a fermenter.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Temperature, pH and oxygen are controlled for optimal growth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "The broth is harvested and penicillin extracted and purified.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Bacteria mutate or transfer resistance genes; they survive antibiotics and spread.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Caused by over-prescription, incomplete courses and agricultural use.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Reduce by prescribing only when necessary, completing courses, developing new antibiotics.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) Fleming + cell wall mechanism (b) fermenter production (c) resistance via mutation/transfer + responsible use",
          "commonErrors": [
                    "Saying antibiotics work on viruses."
          ]
},
        },
      ],
    },
  ],

};
