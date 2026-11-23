import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "ech11-u8-lesson-8-1",
  code: "8-1",
  title: "Acids, Bases and pH",
  goal: "I CAN describe the properties of acids and alkalis, use indicators and the pH scale, and explain neutralisation.",
  standards: ["4CH1 2.9", "4CH1 2.10", "4CH1 2.11", "4CH1 2.12"],
  
  vocabulary: [
    { term: "Acid", definition: "A substance that produces hydrogen ions (H$^+$) when dissolved in water." },
    { term: "Alkali", definition: "A soluble base that produces hydroxide ions (OH$^-$) when dissolved in water, e.g. NaOH." },
    { term: "Base", definition: "A substance that reacts with an acid to form a salt and water; includes soluble alkalis and insoluble oxides/hydroxides." },
    { term: "pH scale", definition: "A scale from 0 to 14 measuring acidity or alkalinity; pH 7 is neutral." },
    { term: "Indicator", definition: "A dye that changes colour depending on whether a solution is acidic or alkaline, e.g. litmus, phenolphthalein, universal indicator." },
    { term: "Neutralisation", definition: "The reaction of an acid with a base to form a salt and water." },
    { term: "Strong acid", definition: "An acid that is completely ionised in water, producing a high concentration of H$^+$ ions." },
  ],
  concepts: [
    {
      id: "ech11-u8-acids-bases-indicators",
      title: "Acids, alkalis and indicators",
      skill: "Describe the properties of acids and alkalis, distinguish strong from weak acids, and use indicators and the pH scale.",
      lesson: {
        sections: [
          {
            heading: "Acids and alkalis",
            body: "An **acid** is a substance that produces hydrogen ions, H$^+$, when dissolved in water. Common properties: they have a sour taste (never taste chemicals in the lab!), turn blue litmus red, and react with metals, carbonates and bases. Examples: hydrochloric acid (HCl), sulfuric acid (H$_2$SO$_4$), nitric acid (HNO$_3$), ethanoic acid (CH$_3$COOH, a weak acid found in vinegar).\n\nAn **alkali** is a soluble base — a substance that produces hydroxide ions, OH$^-$. Alkalis feel slippery and turn red litmus blue. Examples: sodium hydroxide (NaOH), potassium hydroxide (KOH), calcium hydroxide (Ca(OH)$_2$, limewater). Bases that are insoluble in water, such as copper(II) oxide (CuO), still react with acids.",
          },
          {
            heading: "Strong and weak acids",
            body: "A **strong acid** is completely ionised in water — nearly every molecule releases its H$^+$, so the solution has a high H$^+$ concentration (very low pH). HCl, H$_2$SO$_4$ and HNO$_3$ are strong. A **weak acid** is only partly ionised, so fewer H$^+$ ions are produced; ethanoic acid is weak. Strength is about degree of ionisation, not concentration — a dilute strong acid can have the same pH as a concentrated weak acid.",
          },
          {
            heading: "Indicators and the pH scale",
            body: "Indicators change colour with acidity:\n- **Litmus:** red in acid, blue in alkali, purple in neutral solution.\n- **Phenolphthalein:** colourless in acid, pink in alkali.\n- **Methyl orange:** red in acid, orange near neutral, yellow in alkali.\n- **Universal indicator:** a mixture giving a range of colours matched to a pH chart.\n\nThe **pH scale** runs from 0 to 14: below 7 acidic, 7 neutral, above 7 alkaline. The lower the pH, the more acidic (more H$^+$) the solution; the higher the pH, the more alkaline (more OH$^-$).",
          },
        ],
        keyFormulas: [
          { name: "Acid definition", statement: "acid + water $\\rightarrow$ H$^+$ ions + salt anion" },
          { name: "Alkali definition", statement: "alkali $\\rightarrow$ OH$^-$ ions in water" },
          { name: "pH scale", statement: "0–6 acidic, 7 neutral, 8–14 alkaline" },
          { name: "Strong acid", statement: "completely ionised in water" },
        ],
        workedExample: {
          problem: "A student tests three solutions with universal indicator: solution A turns red (pH 2), solution B turns green (pH 7), solution C turns purple (pH 12). Identify which is acidic, neutral and alkaline, and state which contains the most H$^+$ ions.",
          solution: "A (pH 2) is acidic, B (pH 7) is neutral, C (pH 12) is alkaline. The lowest pH has the most H$^+$ ions, so solution A contains the most hydrogen ions.",
        },
      },
      questions: [
        {
          id: "ech11-u8-acids-bases-indicators-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which ion is produced when an acid dissolves in water?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "OH$^-$"
                    },
                    {
                              "id": "b",
                              "text": "H$^+$"
                    },
                    {
                              "id": "c",
                              "text": "O$^{2-}$"
                    },
                    {
                              "id": "d",
                              "text": "Na$^+$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Acid",
                              "statement": "An acid produces hydrogen ions (H$^+$) in water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Acids release H$^+$ ions; hydroxide ions come from alkalis.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) H$^+$",
          "commonErrors": [
                    "Choosing OH$^-$, which is produced by alkalis, not acids."
          ]
},
        },
        {
          id: "ech11-u8-acids-bases-indicators-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State what is meant by an alkali and give one example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Alkali",
                              "statement": "A soluble base that produces hydroxide ions (OH$^-$) in water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "An alkali is a soluble base that produces OH$^-$ ions in water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Any one of: NaOH, KOH, Ca(OH)$_2$ (limewater), NH$_3$ solution.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "A soluble base producing OH$^-$ ions; e.g. sodium hydroxide.",
          "commonErrors": [
                    "Giving an insoluble base such as CuO — that is a base but not an alkali."
          ]
},
        },
        {
          id: "ech11-u8-acids-bases-indicators-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a strong acid and a weak acid, using hydrochloric acid and ethanoic acid as examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Strong and weak acids",
                              "statement": "Strong acids are completely ionised; weak acids are only partly ionised in water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A strong acid such as HCl is completely ionised in water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "A weak acid such as ethanoic acid is only partly ionised.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "So a strong acid gives a higher H$^+$ concentration (lower pH) at the same concentration.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Strong = fully ionised (HCl); weak = partly ionised (ethanoic acid); strong gives more H$^+$ at same concentration.",
          "commonErrors": [
                    "Confusing strength with concentration — a dilute strong acid can be weaker in effect than a concentrated weak acid."
          ]
},
        },
        {
          id: "ech11-u8-acids-bases-indicators-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "The pH scale is used to measure how acidic or alkaline a solution is.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the pH of a neutral solution and the pH ranges that are acidic and alkaline.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "A solution has pH 3. State whether it is acidic or alkaline and whether it has more H$^+$ or OH$^-$ ions.",
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
                              "name": "pH scale",
                              "statement": "pH below 7 acidic, 7 neutral, above 7 alkaline."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Neutral pH is 7.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "pH 0–6 is acidic; pH 8–14 is alkaline.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The scale runs from 0 to 14 (each unit a tenfold change in H$^+$ concentration).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "pH 3 is acidic.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It contains more H$^+$ ions than OH$^-$ ions.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) neutral 7; acid 0–6, alkali 8–14 (b) acidic, more H$^+$.",
          "commonErrors": [
                    "Thinking pH above 7 is acidic — high pH means alkaline."
          ]
},
        },
        {
          id: "ech11-u8-acids-bases-indicators-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A chemistry club tests household liquids with indicators.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name two indicators and state the colour each gives in acid and in alkali.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why universal indicator is more useful than litmus for this investigation.",
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
                              "name": "Indicators",
                              "statement": "Indicators change colour with acidity or alkalinity."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Litmus: red in acid, blue in alkali.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Phenolphthalein: colourless in acid, pink in alkali.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Methyl orange: red in acid, yellow in alkali (orange near neutral).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Litmus only distinguishes acid/neutral/alkali roughly.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Universal indicator gives a colour matching a pH value.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "So the approximate pH of each liquid can be estimated and compared.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) litmus/phenolphthalein/methyl orange with colours (b) universal indicator gives approximate pH.",
          "commonErrors": [
                    "Saying universal indicator is 'more accurate' — it estimates pH, it does not measure it precisely like a pH meter."
          ]
},
        },
        {
          id: "ech11-u8-acids-bases-indicators-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Universal indicator is added to five colourless solutions and the results are recorded.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Solution 1 turns orange-red, solution 2 turns green, solution 3 turns blue-purple, solution 4 turns yellow, solution 5 turns orange. Estimate the pH of each solution and state whether it is acidic, neutral or alkaline.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Two solutions, P and Q, have pH values 4 and 9. State which has more H$^+$ ions and explain your answer.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "State one limitation of using litmus paper to test the five solutions.",
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
                              "name": "Universal indicator",
                              "statement": "Gives a colour corresponding to an approximate pH on a chart."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "pH ~3–4 acidic (orange-red), ~7 neutral (green), ~11–12 alkaline (blue-purple), ~9–10 alkaline (yellow/orange) — accept reasonable estimates.",
                              "marks": 4,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Solution P (pH 4) has more H$^+$ ions.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Lower pH means higher H$^+$ concentration; pH 4 is acidic and pH 9 is alkaline.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Alkaline solutions have more OH$^-$ than H$^+$ ions.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Litmus only distinguishes acid/neutral/alkali — it cannot give a pH value or distinguish between two acids or two alkalis.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) ~3–4 acid, 7 neutral, ~11 alkali, ~9–10 alkali, ~5–6 acid (b) P has more H$^+$ (c) litmus gives no pH value.",
          "commonErrors": [
                    "Assuming higher pH means more H$^+$ — it means more OH$^-$."
          ]
},
        },
      ],
    },
    {
      id: "ech11-u8-neutralisation-ph",
      title: "Neutralisation and the pH scale",
      skill: "Explain neutralisation reactions, write equations and describe uses of neutralisation in everyday life.",
      lesson: {
        sections: [
          {
            heading: "Neutralisation reactions",
            body: "When an acid reacts with a base, **neutralisation** occurs: the H$^+$ ions from the acid combine with OH$^-$ ions to form water, and a **salt** is formed from the remaining ions.\n\n$$\\text{acid} + \\text{base} \\rightarrow \\text{salt} + \\text{water}$$\n\nExample: $\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$. The ionic equation is $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$. In solution, the pH moves towards 7 as the reaction proceeds.",
          },
          {
            heading: "The pH scale in detail",
            body: "The pH scale is logarithmic: each unit represents a tenfold difference in H$^+$ concentration. pH 3 is ten times more acidic than pH 4 and a hundred times more acidic than pH 5. Pure water has pH 7. Very acidic solutions (pH 0–2) can be corrosive; strongly alkaline solutions (pH 13–14) are also corrosive.",
          },
          {
            heading: "Uses of neutralisation",
            body: "- **Indigestion:** excess stomach acid (HCl) is neutralised by **antacids** such as magnesium hydroxide or sodium hydrogencarbonate.\n- **Soil treatment:** acidic soil (from acid rain or fertilisers) is treated with **lime (CaO or Ca(OH)$_2$)** to raise the pH for crops.\n- **Bee and wasp stings:** wasp stings are acidic and treated with a weak alkali such as baking soda; bee stings are alkaline and treated with vinegar.\n- **Industry:** acidic or alkaline factory waste is neutralised before release to rivers.\n- **Cleaning:** dilute acids remove limescale (calcium carbonate); alkalis remove grease.",
          },
        ],
        keyFormulas: [
          { name: "Neutralisation", statement: "acid + base $\\rightarrow$ salt + water" },
          { name: "Ionic equation", statement: "$\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$" },
          { name: "Example", statement: "HCl + NaOH $\\rightarrow$ NaCl + H$_2$O" },
        ],
        workedExample: {
          problem: "Write a balanced symbol equation for the reaction between sulfuric acid and sodium hydroxide, and name the salt formed.",
          solution: "Sulfuric acid H$_2$SO$_4$ is diprotic, so two NaOH are needed: $\\text{H}_2\\text{SO}_4 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$. The salt is sodium sulfate.",
        },
      },
      questions: [
        {
          id: "ech11-u8-neutralisation-ph-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products of a neutralisation reaction between an acid and a base?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Salt and hydrogen"
                    },
                    {
                              "id": "b",
                              "text": "Salt and water"
                    },
                    {
                              "id": "c",
                              "text": "Salt and carbon dioxide"
                    },
                    {
                              "id": "d",
                              "text": "Water and carbon dioxide"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Neutralisation",
                              "statement": "acid + base $\\rightarrow$ salt + water"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Neutralisation always gives a salt and water.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) salt and water",
          "commonErrors": [
                    "Choosing salt and carbon dioxide — that is the reaction of an acid with a carbonate."
          ]
},
        },
        {
          id: "ech11-u8-neutralisation-ph-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The pH scale runs from 0 to ___. Complete the sentence: a solution with pH below 7 is ___ and a solution with pH above 7 is ___.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "pH scale",
                              "statement": "Scale from 0 (strongly acidic) to 14 (strongly alkaline)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The pH scale runs from 0 to 14.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "pH below 7 is acidic; above 7 is alkaline.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "0 to 14; acidic; alkaline.",
          "commonErrors": [
                    "Answering the scale as 0–10 or thinking pH 7 is the maximum."
          ]
},
        },
        {
          id: "ech11-u8-neutralisation-ph-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a balanced symbol equation for the neutralisation of hydrochloric acid by sodium hydroxide, and name the salt formed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Neutralisation equation",
                              "statement": "HCl + NaOH $\\rightarrow$ NaCl + H$_2$O"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correct formulae for reactants and products.",
                              "working": "HCl + NaOH \\rightarrow NaCl + H_2O",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Atoms balanced: 1 Na, 1 Cl, 1 H$_2$O on each side.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "The salt is sodium chloride.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "HCl + NaOH $\\rightarrow$ NaCl + H$_2$O; sodium chloride.",
          "commonErrors": [
                    "Writing NaOH + HCl $\\rightarrow$ NaCl + HO or forgetting to balance."
          ]
},
        },
        {
          id: "ech11-u8-neutralisation-ph-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A person suffers from indigestion caused by excess hydrochloric acid in the stomach and takes an antacid containing magnesium hydroxide, Mg(OH)$_2$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how the antacid relieves the symptoms.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write a balanced symbol equation for the reaction, and name the salt formed.",
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
                              "name": "Neutralisation",
                              "statement": "acid + base $\\rightarrow$ salt + water"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Magnesium hydroxide is a base that neutralises the excess stomach acid.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "This reduces the acidity (raises pH) in the stomach, relieving pain.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Equation: Mg(OH)$_2$ + 2HCl $\\rightarrow$ MgCl$_2$ + 2H$_2$O.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Balanced: 1 Mg, 2 O, 2 Cl, 4 H each side.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "The salt is magnesium chloride.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) neutralises excess HCl (b) Mg(OH)$_2$ + 2HCl $\\rightarrow$ MgCl$_2$ + 2H$_2$O, magnesium chloride.",
          "commonErrors": [
                    "Forgetting the coefficient 2 on HCl and H$_2$O."
          ]
},
        },
        {
          id: "ech11-u8-neutralisation-ph-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A farmer finds that crops grow poorly in a field where the soil pH is 4.5. The farmer spreads crushed limestone (calcium carbonate, CaCO$_3$) or slaked lime (calcium hydroxide, Ca(OH)$_2$) on the soil.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why the crops grow poorly in acidic soil.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how adding calcium hydroxide raises the soil pH.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one other use of neutralisation in agriculture or the home.",
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
                              "name": "Neutralisation",
                              "statement": "Bases such as Ca(OH)$_2$ neutralise acids in soil."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "pH 4.5 is acidic; most crops grow best near neutral pH.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Acidic soil can release toxic ions (e.g. aluminium) and reduce nutrient uptake.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Ca(OH)$_2$ is a base that neutralises the acid in the soil (H$^+$ + OH$^-$$\\rightarrow$ H$_2$O).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The H$^+$ concentration falls, so the pH rises towards neutral.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Any one: antacids for indigestion; treating acid spills; bee/wasp sting remedies; adjusting pH of compost.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) acidic soil harms growth (b) Ca(OH)$_2$ neutralises acid, pH rises (c) e.g. antacids.",
          "commonErrors": [
                    "Saying lime 'adds nutrients' — it works by neutralising acid."
          ]
},
        },
        {
          id: "ech11-u8-neutralisation-ph-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Neutralisation reactions occur in many situations.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the ionic equation for neutralisation and explain what happens to the pH as acid is added to alkali.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State two uses of neutralisation in medicine or industry, with a reason for each.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain why pure water has pH 7.",
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
                              "name": "Neutralisation ionic equation",
                              "statement": "H$^+$ + OH$^-$ $\\rightarrow$ H$_2$O"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Ionic equation: H$^+$ + OH$^-$$\\rightarrow$ H$_2$O.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "The H$^+$ and OH$^-$ combine to form water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "pH falls from alkaline towards 7 (and can go below if excess acid is added).",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Any two uses with reasons, e.g. antacid neutralises stomach acid; lime treats acidic soil; factory waste neutralised before rivers; bee-sting treatment.",
                              "marks": 4,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Pure water contains equal H$^+$ and OH$^-$ ions from slight ionisation (H$_2$O $\\rightleftharpoons$ H$^+$ + OH$^-$).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Equal concentrations of H$^+$ and OH$^-$ give pH 7.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) H$^+$ + OH$^-$ $\\rightarrow$ H$_2$O; pH falls towards 7 (b) two valid uses (c) equal H$^+$ and OH$^-$ give pH 7.",
          "commonErrors": [
                    "Writing H$^+$ + OH$^-$ $\\rightarrow$ H$_2$ with wrong atoms; forgetting water is the product."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech11-u8-acids-ph-notes",
      title: "Acids, bases and pH — notes",
      summary: "Acids give H$^+$, alkalis give OH$^-$. pH 0–14: acid <7, neutral 7, alkali >7. Neutralisation: acid + base $\\rightarrow$ salt + water.",
      sections: [
        { heading: "Definitions to memorise", body: "Acid = produces H$^+$ in water. Alkali = soluble base producing OH$^-$. Base = reacts with acid to form salt + water. Strong acid = fully ionised; weak = partly ionised." },
        { heading: "Indicator colours", body: "Litmus: red acid / blue alkali. Phenolphthalein: colourless acid / pink alkali. Methyl orange: red acid / yellow alkali. Universal indicator: colour $\\rightarrow$ approximate pH." },
        { heading: "Neutralisation uses", body: "Antacids, soil liming, bee/wasp stings, treating acidic factory waste, descaling. Ionic equation: H$^+$ + OH$^-$ $\\rightarrow$ H$_2$O." },
      ],
    },
  ],
};
