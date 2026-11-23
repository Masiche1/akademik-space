import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "ediasbio-u9-lesson-9-1",
  code: "9-1",
  title: "Respiration and ATP Production",
  goal: "I CAN describe aerobic and anaerobic respiration, the stages of each, and the ATP yield per glucose.",
  standards: ["WBI15 Respiration, Internal Environment, Coordination and Gene Technology", "Respiration"],
  
  vocabulary: [
    { term: "Respiration", definition: "Metabolic reactions releasing energy from organic molecules, mainly glucose, to make ATP." },
    { term: "ATP", definition: "Adenosine triphosphate — the universal energy currency of cells, hydrolysed to ADP + Pi releasing energy." },
    { term: "Glycolysis", definition: "First stage of respiration in the cytoplasm: glucose is split to two pyruvate molecules with a net gain of 2 ATP." },
    { term: "Krebs cycle", definition: "Cycle in the mitochondrial matrix that oxidises acetyl-CoA producing CO2, NADH and FADH2." },
    { term: "Electron transport chain", definition: "Series of proteins in the inner mitochondrial membrane that uses electrons from NADH/FADH2 to make most of the ATP." },
    { term: "Anaerobic respiration", definition: "Respiration without oxygen; only glycolysis operates, producing 2 ATP per glucose plus lactate or ethanol." },
    { term: "Lactic acid", definition: "Product of anaerobic respiration in animal muscles; causes fatigue and must be removed using oxygen." },
  ],
  concepts: [
    {
      id: "ediasbio-u9-aerobic",
      title: "Aerobic respiration",
      skill: "Describe the stages of aerobic respiration and the role of mitochondria in ATP production.",
      lesson: {
        sections: [
          {
            heading: "Glycolysis and the link reaction",
            body: "Glycolysis occurs in the cytoplasm: glucose is phosphorylated and split into two triose phosphate molecules, which are oxidised to pyruvate. Net gain: 2 ATP and 2 NADH per glucose. Pyruvate enters the mitochondrion, where the link reaction converts each pyruvate into acetyl-CoA, releasing CO2 and reducing NAD to NADH.",
          },
          {
            heading: "Krebs cycle and oxidative phosphorylation",
            body: "In the mitochondrial matrix, acetyl-CoA combines with oxaloacetate to form citrate. The Krebs cycle decarboxylates the two-carbon units, releasing CO2 and generating NADH and FADH2 while regenerating oxaloacetate. NADH and FADH2 donate electrons to the electron transport chain on the inner membrane (cristae); oxygen is the final electron acceptor, forming water. Energy released pumps H+ into the intermembrane space; H+ diffuse back through ATP synthase producing about 34 ATP. Overall yield is about 36 ATP per glucose.",
          },
          {
            heading: "Mitochondrial adaptations",
            body: "Mitochondria have a double membrane. The inner membrane is folded into cristae, greatly increasing surface area for the electron transport chain and ATP synthase. The matrix contains the enzymes of the link reaction and Krebs cycle; the intermembrane space holds the proton gradient that drives chemiosmosis.",
          },
        ],
        keyFormulas: [
          { name: "Overall equation", statement: "C6H12O6 + 6O2 → 6CO2 + 6H2O + energy (about 36 ATP)" },
          { name: "Glycolysis", statement: "Glucose → 2 pyruvate; net 2 ATP + 2 NADH" },
          { name: "Link reaction", statement: "Pyruvate + CoA + NAD → acetyl-CoA + CO2 + NADH" },
          { name: "Oxygen role", statement: "O2 is the final electron acceptor → forms water" },
        ],
        workedExample: {
          problem: "How many molecules of CO2 are released and how many ATP are produced when one glucose molecule is respired aerobically?",
          solution: "CO2: 2 from the link reaction (one per pyruvate) + 4 from two turns of the Krebs cycle = 6 CO2. ATP: about 36 per glucose (2 glycolysis + about 2 link + about 32 from Krebs/ETC, commonly quoted as 36 total).",
        },
      },
      questions: [
        {
          id: "ediasbio-u9-aer-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which organelle does aerobic respiration mainly occur?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ribosome"
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
                              "text": "Chloroplast"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Aerobic respiration site",
                              "statement": "Mitochondria are the site of aerobic respiration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Aerobic respiration occurs in mitochondria.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Mitochondrion"
},
        },
        {
          id: "ediasbio-u9-aer-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the overall equation for aerobic respiration and state the approximate ATP yield per glucose molecule.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Aerobic respiration",
                              "statement": "Glucose + oxygen → CO2 + water + ATP."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Equation: C6H12O6 + 6O2 → 6CO2 + 6H2O + energy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Yield: about 36 ATP per glucose.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "C6H12O6 + 6O2 → 6CO2 + 6H2O; about 36 ATP"
},
        },
        {
          id: "ediasbio-u9-aer-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe what happens to pyruvate after glycolysis during aerobic respiration.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Link reaction and Krebs cycle",
                              "statement": "Pyruvate → acetyl-CoA → Krebs cycle → electron carriers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pyruvate diffuses into the mitochondrion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Link reaction: pyruvate + CoA + NAD → acetyl-CoA + CO2 + NADH.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Acetyl-CoA enters the Krebs cycle in the matrix.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "NADH/FADH2 carry hydrogen to the electron transport chain for ATP production.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Pyruvate → acetyl-CoA → Krebs cycle → NADH/FADH2 → ETC → ATP"
},
        },
        {
          id: "ediasbio-u9-aer-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why the inner mitochondrial membrane is folded into cristae.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Cristae",
                              "statement": "Folding increases surface area for respiration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cristae greatly increase the surface area of the inner membrane.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More room for electron transport chain complexes and ATP synthase enzymes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More H+ can be pumped into the intermembrane space per unit time.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Steeper proton gradient → faster chemiosmosis → more ATP produced.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Supports the high ATP demand of metabolically active cells.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Cristae increase SA → more ETC/ATP synthase → greater ATP production"
},
        },
        {
          id: "ediasbio-u9-aer-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "State where glycolysis takes place in the cell.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "State the net ATP yield of glycolysis per glucose molecule.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain why oxygen is essential for aerobic respiration.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Name the products of the link reaction.",
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
                              "name": "Stages of aerobic respiration",
                              "statement": "Glycolysis → link → Krebs → ETC; oxygen is final electron acceptor."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Cytoplasm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "2 ATP net per glucose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "O2 is the final electron acceptor in the electron transport chain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Without it the ETC stops, the proton gradient collapses and almost no ATP is made beyond glycolysis.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Products: acetyl-CoA, CO2 and NADH.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "All three named.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cytoplasm; 2 ATP; O2 final acceptor; acetyl-CoA + CO2 + NADH"
},
        },
        {
          id: "ediasbio-u9-aer-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the four stages of aerobic respiration.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe glycolysis.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe the link reaction.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe the Krebs cycle.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Describe oxidative phosphorylation.",
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
                              "name": "Aerobic respiration stages",
                              "statement": "Glycolysis → link → Krebs → ETC in sequence."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Glycolysis occurs in the cytoplasm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Glucose → 2 pyruvate with net 2 ATP + 2 NADH.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pyruvate enters the mitochondrion; CoA and NAD are involved.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Products: acetyl-CoA + CO2 + NADH.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "In the matrix, acetyl-CoA + oxaloacetate → citrate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Decarboxylations release CO2 and produce NADH/FADH2.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Oxaloacetate is regenerated so the cycle can repeat.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "NADH/FADH2 donate electrons to the ETC on the cristae.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Energy pumps H+ into the intermembrane space; H+ return through ATP synthase makes ATP.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "O2 is the final electron acceptor, forming water; most ATP is made here.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Glycolysis, link reaction, Krebs cycle, oxidative phosphorylation",
          "commonErrors": [
                    "Saying glycolysis occurs in the mitochondrion.",
                    "Forgetting oxygen is the final electron acceptor."
          ]
},
        },
      ],
    },
    {
      id: "ediasbio-u9-anaerobic",
      title: "Anaerobic respiration",
      skill: "Compare aerobic and anaerobic respiration and explain the role of oxygen in removing lactate.",
      lesson: {
        sections: [
          {
            heading: "Lactic acid fermentation",
            body: "When oxygen supply is insufficient (e.g. sprinting), pyruvate is reduced to lactate by lactate dehydrogenase. This oxidises NADH back to NAD+, which is essential because NAD+ is needed for glycolysis to continue. Net gain is only 2 ATP per glucose, but ATP is produced rapidly. Lactate accumulates, lowering pH and causing fatigue.",
          },
          {
            heading: "Alcoholic fermentation",
            body: "In yeast and some bacteria, pyruvate is converted to ethanol and CO2: pyruvate → ethanol + CO2, again regenerating NAD+. This is used industrially in brewing, bread-making (CO2 makes dough rise) and biofuel production.",
          },
          {
            heading: "Oxygen debt and uses",
            body: "After exercise, extra oxygen (the oxygen debt, or excess post-exercise oxygen consumption, EPOC) is needed to oxidise and remove accumulated lactate. Aerobic respiration yields about 36 ATP per glucose but is slower; anaerobic yields only 2 ATP but is very fast — useful for short bursts of intense activity.",
          },
        ],
        keyFormulas: [
          { name: "Lactic acid fermentation", statement: "Glucose → 2 lactate + 2 ATP (net)" },
          { name: "Alcoholic fermentation", statement: "Glucose → 2 ethanol + 2 CO2 + 2 ATP (net)" },
          { name: "ATP comparison", statement: "Aerobic ≈ 36 ATP/glucose vs anaerobic = 2 ATP/glucose" },
        ],
        workedExample: {
          problem: "Why do sprinters breathe heavily for several minutes after finishing a 100 m race?",
          solution: "The sprint used anaerobic respiration, producing lactate. The oxygen debt must be repaid: extra oxygen oxidises lactate to CO2 and water, so ventilation and heart rate stay elevated during recovery.",
        },
      },
      questions: [
        {
          id: "ediasbio-u9-ana-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main product of anaerobic respiration in human muscle cells?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Carbon dioxide"
                    },
                    {
                              "id": "b",
                              "text": "Ethanol"
                    },
                    {
                              "id": "c",
                              "text": "Lactic acid"
                    },
                    {
                              "id": "d",
                              "text": "Water"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lactic acid fermentation",
                              "statement": "Pyruvate → lactate in animal muscles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Animal muscles produce lactic acid anaerobically.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** Lactic acid"
},
        },
        {
          id: "ediasbio-u9-ana-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why must NAD+ be regenerated during anaerobic respiration?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "NAD+ regeneration",
                              "statement": "Glycolysis requires NAD+ as an electron carrier."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "NAD+ is needed as an electron carrier in glycolysis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Without oxygen, NADH is oxidised back to NAD+ by reducing pyruvate to lactate/ethanol, allowing glycolysis to continue.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Regenerating NAD+ allows glycolysis to continue without oxygen"
},
        },
        {
          id: "ediasbio-u9-ana-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare the ATP yield of aerobic and anaerobic respiration.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Aerobic vs anaerobic yield",
                              "statement": "36 vs 2 ATP per glucose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Aerobic respiration yields about 36 ATP per glucose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Anaerobic respiration yields only 2 ATP per glucose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Anaerobic uses only glycolysis — no Krebs cycle or electron transport chain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Aerobic is far more efficient but requires oxygen; anaerobic is fast but inefficient.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Aerobic ≈36 ATP, anaerobic = 2 ATP per glucose"
},
        },
        {
          id: "ediasbio-u9-ana-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the term oxygen debt.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Oxygen debt",
                              "statement": "Extra oxygen needed after exercise to remove lactate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "During intense exercise, anaerobic respiration produces lactate that accumulates in muscles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "After exercise, extra oxygen (the oxygen debt) is required to deal with the lactate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Oxygen is used to oxidise lactate to CO2 and water (or to convert it back to glucose in the liver).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Breathing and heart rate therefore stay elevated during recovery.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Also called excess post-exercise oxygen consumption (EPOC).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Extra O2 needed to oxidise/remove accumulated lactate after exercise",
          "commonErrors": [
                    "Saying oxygen debt is oxygen stored in muscles."
          ]
},
        },
        {
          id: "ediasbio-u9-ana-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name a microorganism used for alcoholic fermentation.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "State the products of alcoholic fermentation.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why dough rises during bread-making.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Give two industrial uses of anaerobic fermentation.",
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
                              "name": "Alcoholic fermentation",
                              "statement": "Pyruvate → ethanol + CO2; industrial uses."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Yeast.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Products: ethanol and carbon dioxide.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both products named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "CO2 produced by yeast becomes trapped in the dough, making it rise.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Any two: brewing/beer/wine, yogurt/cheese production, biogas generation, biofuel.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Two valid uses given.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Yeast; ethanol + CO2; CO2 raises dough; brewing, dairy, biogas"
},
        },
        {
          id: "ediasbio-u9-ana-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare aerobic and anaerobic respiration.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the overall equation for aerobic respiration.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Write the overall equation for lactic acid fermentation.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "State the ATP yield of each.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Give examples of organisms using each type.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Compare the advantages and disadvantages of each.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Aerobic vs anaerobic respiration",
                              "statement": "Equations, yield, organisms, efficiency."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "C6H12O6 + 6O2 → 6CO2 + 6H2O + energy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Glucose → 2 lactate + 2 ATP (net).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Aerobic ≈ 36 ATP per glucose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Anaerobic = 2 ATP per glucose.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Aerobic: most eukaryotes and many prokaryotes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Anaerobic: muscle during oxygen debt, yeast (alcoholic), some bacteria.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Aerobic: efficient, complete oxidation, no toxic products; needs oxygen.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Anaerobic: rapid ATP production, works without oxygen; very inefficient, produces lactate/ethanol.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Conclusion: aerobic preferred for sustained activity, anaerobic for short bursts.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Lactate must later be oxidised using oxygen (oxygen debt).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Aerobic ≈36 ATP, needs O2; anaerobic 2 ATP, fast, produces lactate/ethanol"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ediasbio-u9-resp-notes",
      title: "Respiration and ATP — notes",
      summary: "Aerobic respiration ≈36 ATP via glycolysis, link, Krebs, ETC; anaerobic = 2 ATP and produces lactate or ethanol.",
      sections: [
        { heading: "Key idea", body: "Oxygen is only needed at the electron transport chain as the final electron acceptor; without it cells fall back on glycolysis alone (2 ATP)." },
        { heading: "Memory aid", body: "Glycolysis (cytoplasm, 2 ATP) → link (acetyl-CoA) → Krebs (matrix) → oxidative phosphorylation (cristae, most ATP)." },
      ],
    },
  ],
};
