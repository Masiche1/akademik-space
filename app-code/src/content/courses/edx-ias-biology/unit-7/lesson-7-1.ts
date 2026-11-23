import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ediasbio-u7-lesson-7-1",
  code: "7-1",
  title: "Respiration and ATP",
  goal: "I CAN explain aerobic respiration, the role of ATP and compare aerobic with anaerobic respiration.",
  standards: ["WBI14 Energy and respiration", "Respiration and ATP"],
  
  vocabulary: [
    { term: "Respiration", definition: "Release of energy from organic molecules (e.g. glucose) inside cells." },
    { term: "Aerobic respiration", definition: "Complete breakdown of glucose using oxygen, releasing large amounts of energy." },
    { term: "Anaerobic respiration", definition: "Incomplete breakdown of glucose without oxygen, releasing little energy." },
    { term: "ATP", definition: "Adenosine triphosphate — the energy currency molecule of the cell." },
    { term: "ADP", definition: "Adenosine diphosphate — ATP with one phosphate group removed." },
    { term: "Mitochondrion", definition: "Organelle where most aerobic respiration takes place." },
    { term: "Lactic acid", definition: "Product of anaerobic respiration in animal cells during oxygen shortage." },
    { term: "Oxygen debt", definition: "Extra oxygen needed after exercise to oxidise accumulated lactic acid." },
  ],
  concepts: [
    {
      id: "ediasbio-u7-resp",
      title: "Aerobic respiration and ATP",
      skill: "Describe aerobic respiration, ATP hydrolysis and uses of energy in cells.",
      lesson: {
        sections: [
          {
            heading: "What is respiration?",
            body: "Respiration is the release of energy from glucose and other substrates inside cells. **All living cells respire continuously** — energy is needed for movement, active transport, protein synthesis, cell division and maintaining body temperature. In eukaryotes, most aerobic respiration occurs in the **mitochondria**.",
          },
          {
            heading: "The aerobic respiration equation",
            body: "Aerobic respiration fully oxidises glucose using oxygen: **C6H12O6 + 6O2 → 6CO2 + 6H2O + energy**. About 2870 kJ of energy is released per mole of glucose, of which roughly 36–38 ATP molecules are produced at IAS level. The energy is trapped in ATP rather than released all at once as heat.",
          },
          {
            heading: "ATP — the energy currency",
            body: "ATP (adenosine triphosphate) is a small nucleotide with three phosphate groups. Hydrolysis **ATP → ADP + Pi + energy** powers cell processes; ADP is rephosphorylated to ATP using energy from respiration and photosynthesis. Cells keep only a small ATP pool because ATP is unstable and used up in seconds — it is regenerated continuously.",
          },
        ],
        keyFormulas: [
          { name: "Aerobic respiration", statement: "C6H12O6 + 6O2 → 6CO2 + 6H2O + energy (~2870 kJ/mol; ~36–38 ATP)" },
          { name: "ATP hydrolysis", statement: "ATP → ADP + Pi + usable energy" },
          { name: "ATP regeneration", statement: "ADP + Pi + energy → ATP (from respiration/photosynthesis)" },
        ],
        workedExample: {
          problem: "A sprinter runs a 100 m race. Why do the muscles switch to anaerobic respiration, and what happens in the minutes afterwards?",
          solution: "During the sprint, oxygen cannot be delivered to the muscles fast enough, so glucose is broken down anaerobically, producing lactic acid and only 2 ATP per glucose — fast but inefficient. After the race the athlete breathes heavily (oxygen debt) to supply oxygen that oxidises the accumulated lactic acid.",
        },
      },
      questions: [
        {
          id: "ediasbio-u7-resp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does most aerobic respiration take place in a eukaryotic cell?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Cytoplasm"
                    },
                    {
                              "id": "b",
                              "text": "Mitochondrion"
                    },
                    {
                              "id": "c",
                              "text": "Nucleus"
                    },
                    {
                              "id": "d",
                              "text": "Ribosome"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mitochondrion",
                              "statement": "Site of aerobic respiration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Most aerobic respiration occurs in mitochondria.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Mitochondrion"
},
        },
        {
          id: "ediasbio-u7-resp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the word equation for aerobic respiration.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Aerobic respiration",
                              "statement": "Glucose + oxygen → CO2 + water + energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reactants: glucose and oxygen.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Products: carbon dioxide, water and energy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Glucose + oxygen → carbon dioxide + water + energy"
},
        },
        {
          id: "ediasbio-u7-resp-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why ATP is called the 'energy currency' of the cell.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ATP",
                              "statement": "Energy carrier molecule."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ATP stores energy in its phosphate bonds and releases it on demand.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "ATP ↔ ADP cycle transfers energy to cell processes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It powers specific processes: muscle contraction, active transport, protein synthesis.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Like money, it is a universal medium of energy exchange between reactions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "ATP is a universal, reusable energy carrier"
},
        },
        {
          id: "ediasbio-u7-resp-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe how aerobic respiration supplies the energy needed for active transport across a cell membrane.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Energy for transport",
                              "statement": "ATP drives carrier proteins."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Glucose and oxygen are respired in mitochondria.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Energy released is trapped in ATP molecules.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "ATP hydrolysis at the membrane powers carrier proteins.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Carrier proteins move substances against their concentration gradient.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Aerobic respiration yields ~36 ATP per glucose, far more than anaerobic.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Respiration → ATP → powered carrier proteins → active transport"
},
        },
        {
          id: "ediasbio-u7-resp-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the word equation for aerobic respiration.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State two uses of ATP in cells.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why cells keep only a small pool of ATP.",
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
                              "name": "ATP cycle",
                              "statement": "Equation, uses, turnover."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Glucose + oxygen → carbon dioxide + water + energy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Equation complete and correct.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Any two: muscle contraction, active transport, protein synthesis, cell division, nerve impulses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second use named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "ATP is unstable and hydrolysed within seconds.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "It is regenerated continuously by respiration/photosynthesis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Aerobic equation; ATP uses; small ATP pool"
},
        },
        {
          id: "ediasbio-u7-resp-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Define respiration. (b) Name the organelle where most aerobic respiration occurs. (c) State the reactants of aerobic respiration. (d) State the products of aerobic respiration. (e) How many ATP molecules are roughly produced per glucose? (f) What does ATP stand for? (g) What is released when ATP is hydrolysed? (h) Give two uses of ATP. (i) Why does the inner mitochondrial membrane have many folds (cristae)?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define respiration.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Organelle for aerobic respiration.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Reactants.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Products.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "ATP yield per glucose.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "What ATP stands for.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Product of ATP hydrolysis.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Two uses of ATP.",
                    "marks": 2
          },
          {
                    "label": "i",
                    "prompt": "Why cristae?",
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
                              "name": "Respiration",
                              "statement": "Energy release and ATP."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Release of energy from organic molecules in cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Mitochondrion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Glucose and oxygen.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Carbon dioxide, water and energy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "About 36–38 ATP per glucose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Adenosine triphosphate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Energy (plus ADP and inorganic phosphate).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "Any two uses: muscle contraction, active transport, protein synthesis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "Second use named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "i",
                              "reasoning": "Increases surface area for respiratory enzymes/ATP production.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Respiration and ATP fundamentals",
          "commonErrors": [
                    "Confusing respiration with breathing (ventilation)."
          ]
},
        },
      ],
    },
    {
      id: "ediasbio-u7-ana",
      title: "Anaerobic respiration",
      skill: "Compare aerobic and anaerobic respiration and explain oxygen debt and fermentation.",
      lesson: {
        sections: [
          {
            heading: "Anaerobic respiration in animals",
            body: "When oxygen supply is too low (e.g. intense exercise), glucose is broken down incompletely in the cytoplasm to **lactic acid**, releasing only about **2 ATP per glucose**. Lactic acid lowers pH and causes muscle fatigue. Afterwards the athlete breathes heavily to repay the **oxygen debt** — extra oxygen oxidises the lactate.",
          },
          {
            heading: "Anaerobic respiration in yeast and bacteria",
            body: "Yeast ferments glucose to **ethanol + carbon dioxide + energy** — used in bread making (CO2 makes dough rise) and brewing. Lactic acid bacteria ferment lactose/sugars to lactic acid — used in yoghurt, cheese and pickles. Fermentation is fast but inefficient compared with aerobic respiration.",
          },
          {
            heading: "Aerobic vs anaerobic",
            body: "Aerobic: complete breakdown, needs O2, ~36 ATP, products CO2 + water. Anaerobic: incomplete, no O2, 2 ATP, products lactic acid (animals) or ethanol + CO2 (yeast). Anaerobic gives energy faster per second but wastes most of the glucose's energy — it is a short-term emergency supply.",
          },
        ],
        keyFormulas: [
          { name: "Animal anaerobic", statement: "Glucose → lactic acid + small energy (2 ATP)" },
          { name: "Yeast fermentation", statement: "Glucose → ethanol + CO2 + small energy" },
          { name: "Yield comparison", statement: "Aerobic ~36 ATP vs anaerobic 2 ATP per glucose" },
        ],
        workedExample: {
          problem: "Explain why bread dough rises during proving and baking.",
          solution: "Yeast in the dough respires anaerobically, fermenting sugars to ethanol and carbon dioxide. The CO2 gas becomes trapped in the gluten network, making the dough expand. The ethanol mostly evaporates during baking; a little remains for flavour.",
        },
      },
      questions: [
        {
          id: "ediasbio-u7-ana-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What product is formed by anaerobic respiration in human muscle cells?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ethanol"
                    },
                    {
                              "id": "b",
                              "text": "Lactic acid"
                    },
                    {
                              "id": "c",
                              "text": "Citric acid"
                    },
                    {
                              "id": "d",
                              "text": "Glucose"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lactic acid",
                              "statement": "Product of anaerobic respiration in animals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Animal cells produce lactic acid anaerobically.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Lactic acid"
},
        },
        {
          id: "ediasbio-u7-ana-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the two products of anaerobic respiration in yeast.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Yeast fermentation",
                              "statement": "Glucose → ethanol + CO2 + energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ethanol (alcohol).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Carbon dioxide.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Ethanol and carbon dioxide"
},
        },
        {
          id: "ediasbio-u7-ana-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why an athlete breathes heavily for several minutes after finishing a sprint.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Oxygen debt",
                              "statement": "Repay lactic acid after anaerobic exercise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "During the sprint, oxygen supply cannot meet demand.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Muscles respire anaerobically, producing lactic acid.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Extra oxygen is needed to oxidise the accumulated lactate.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Heavy breathing repays the oxygen debt; breathing rate returns to normal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Heavy breathing repays the oxygen debt"
},
        },
        {
          id: "ediasbio-u7-ana-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare aerobic and anaerobic respiration in terms of oxygen requirement, energy yield and products.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Aerobic vs anaerobic",
                              "statement": "Complete vs incomplete breakdown."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Aerobic needs oxygen; anaerobic does not.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Aerobic yields ~36 ATP per glucose; anaerobic only 2.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Aerobic products: CO2 + water; anaerobic: lactic acid or ethanol + CO2.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Aerobic is a complete breakdown; anaerobic is incomplete.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Anaerobic is faster but far less efficient — used when O2 is short.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Aerobic = O2, ~36 ATP, CO2+water; anaerobic = no O2, 2 ATP, lactate/ethanol"
},
        },
        {
          id: "ediasbio-u7-ana-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Give the products of anaerobic respiration in yeast.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain what oxygen debt is.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give one industrial use of yeast fermentation.",
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
                              "name": "Anaerobic respiration",
                              "statement": "Products, debt, uses."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Ethanol and carbon dioxide.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both products named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Extra oxygen needed after exercise to oxidise lactic acid.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Caused by anaerobic respiration during oxygen shortage.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Bread making (CO2 raises dough) or brewing (ethanol).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Explanation of the use.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Yeast products; oxygen debt; fermentation uses"
},
        },
        {
          id: "ediasbio-u7-ana-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Define anaerobic respiration. (b) Where in the cell does anaerobic respiration occur? (c) Name the product made by animal cells. (d) Name the two products made by yeast. (e) Compare ATP yield: aerobic vs anaerobic. (f) What is oxygen debt? (g) Why does lactic acid cause fatigue? (h) Give one food made using lactic acid bacteria. (i) Why is anaerobic respiration useful despite low ATP yield?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define anaerobic respiration.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Where it occurs.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Animal cell product.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Yeast products.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "ATP yield comparison.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Define oxygen debt.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Why lactic acid causes fatigue.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Food using lactic acid bacteria.",
                    "marks": 1
          },
          {
                    "label": "i",
                    "prompt": "Why anaerobic is useful.",
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
                              "name": "Anaerobic respiration",
                              "statement": "Incomplete breakdown without O2."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Incomplete breakdown of glucose without oxygen.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Cytoplasm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Lactic acid.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Ethanol and carbon dioxide.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Both named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Aerobic ~36 ATP vs anaerobic 2 ATP per glucose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Extra O2 needed after exercise to oxidise lactic acid.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Lactic acid build-up lowers pH, interfering with enzymes/muscle function.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "h",
                              "reasoning": "Yoghurt, cheese or pickles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "i",
                              "reasoning": "Provides energy quickly when oxygen is unavailable.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Anaerobic respiration, oxygen debt, fermentation",
          "commonErrors": [
                    "Saying anaerobic respiration makes no ATP — it makes 2 ATP."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ediasbio-u7-resp-notes",
      title: "Respiration and ATP — notes",
      summary: "Respiration releases energy from glucose; aerobic gives ~36 ATP in mitochondria; anaerobic gives 2 ATP (lactic acid in animals, ethanol + CO2 in yeast); ATP is the energy currency.",
      sections: [
        { heading: "Aerobic", body: "C6H12O6 + 6O2 → 6CO2 + 6H2O + energy; ~36 ATP per glucose; occurs in mitochondria." },
        { heading: "Anaerobic", body: "Animals → lactic acid (oxygen debt repaid by heavy breathing); yeast → ethanol + CO2 (bread, brewing); only 2 ATP per glucose." },
        { heading: "ATP", body: "ATP → ADP + Pi + energy powers cell processes; regenerated continuously — cells keep only a small pool." },
      ],
    },
  ],
};
