import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "ech11-u9-lesson-9-3",
  code: "9-3",
  title: "Titrations in Practice",
  goal: "I CAN describe back titrations for insoluble samples and uses of titration in industry and medicine.",
  standards: ["4CH1 2.22", "4CH1 3.5", "4CH1 3.6", "4CH1 4.2"],
  
  vocabulary: [
    { term: "Back titration", definition: "Adding excess standard reagent to a sample, then titrating the leftover excess to find how much reacted." },
    { term: "Purity", definition: "The percentage of a sample that is the desired pure substance." },
    { term: "Limestone", definition: "Rock mainly calcium carbonate (CaCO$_3$), used in building and industry." },
    { term: "Assay", definition: "A quantitative test to find the amount or purity of a substance in a sample." },
    { term: "Volumetric analysis", definition: "Using measured volumes of solutions (titrations) to determine amounts of substances." },
  ],
  concepts: [
    {
      id: "ech11-u9-titrating-carbonates",
      title: "Titrating carbonates and back titrations",
      skill: "Explain how insoluble carbonates are analysed by reaction with excess acid followed by back titration.",
      lesson: {
        sections: [
          {
            heading: "Why a back titration?",
            body: "Insoluble solids such as CaCO$_3$ cannot be titrated directly. Instead a **known excess** of standard acid is added to the sample. The acid that does not react is then titrated with a standard alkali — this is a **back titration**. The amount reacted = initial acid − excess acid.",
          },
          {
            heading: "The method",
            body: "1. Weigh the impure sample accurately.\n2. Add a measured volume of standard acid in excess.\n3. Filter if needed and titrate the leftover acid with standard NaOH and an indicator.\n4. Calculate moles of acid reacted, hence moles and mass of CaCO$_3$, then percentage purity.",
          },
          {
            heading: "Example calculation",
            body: "1.00 g of impure CaCO$_3$ is reacted with 50.0 cm$^3$ of 0.200 mol/dm$^3$ HCl. The excess acid needs 25.0 cm$^3$ of 0.100 mol/dm$^3$ NaOH.\n- Initial HCl: $0.200 \\times 50.0 \\div 1000 = 0.0100$ mol\n- Excess HCl = n(NaOH) = $0.100 \\times 25.0 \\div 1000 = 0.00250$ mol\n- Reacted HCl = $0.0100 - 0.00250 = 0.00750$ mol\n- n(CaCO$_3$) = $0.00750 \\div 2 = 0.00375$ mol → mass = $0.00375 \\times 100 = 0.375$ g\n- Purity = $0.375 \\div 1.00 \\times 100 = 37.5\\%$",
          },
        ],
        keyFormulas: [
          { name: "Back titration", statement: "amount reacted = initial − excess (titrated)" },
          { name: "CaCO$_3$ : HCl ratio", statement: "1 : 2" },
          { name: "Purity", statement: "mass of pure substance ÷ mass of sample × 100%" },
        ],
        workedExample: {
          problem: "0.500 g of impure CaCO$_3$ is reacted with excess 0.100 mol/dm$^3$ HCl; the leftover acid needs 20.0 cm$^3$ of 0.200 mol/dm$^3$ NaOH after the solid is filtered off. Find the percentage purity. (Assume 50.0 cm$^3$ of 0.100 mol/dm$^3$ HCl was used.)",
          solution: "n(HCl) initial = 0.00500 mol; excess = n(NaOH) = 0.00400 mol; reacted = 0.00100 mol; n(CaCO$_3$) = 0.000500 mol; mass = 0.0500 g; purity = 10.0%.",
        },
      },
      questions: [
        {
          id: "ech11-u9-titrating-carbonates-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is a back titration used to find the percentage of calcium carbonate in an impure limestone sample?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "CaCO$_3$ is a gas"
                    },
                    {
                              "id": "b",
                              "text": "CaCO$_3$ is insoluble so cannot be titrated directly"
                    },
                    {
                              "id": "c",
                              "text": "It reacts too slowly"
                    },
                    {
                              "id": "d",
                              "text": "It contains no ions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Back titration",
                              "statement": "Used for insoluble samples reacted with excess reagent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Insoluble solids cannot be titrated directly; react with excess acid then titrate leftover.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) CaCO$_3$ insoluble — use excess acid + back titration",
          "commonErrors": [
                    "Saying limestone is unreactive — it does react with acid."
          ]
},
        },
        {
          id: "ech11-u9-titrating-carbonates-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a balanced symbol equation for the reaction of calcium carbonate with hydrochloric acid.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Carbonate + acid",
                              "statement": "CaCO$_3$ + 2HCl $\\rightarrow$ CaCl$_2$ + H$_2$O + CO$_2$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correct products: calcium chloride, water, carbon dioxide.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Balanced: 1 Ca, 2 Cl, 2 H, 5 O each side.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "CaCO$_3$ + 2HCl $\\rightarrow$ CaCl$_2$ + H$_2$O + CO$_2$",
          "commonErrors": [
                    "Writing CaCl instead of CaCl$_2$ or omitting CO$_2$."
          ]
},
        },
        {
          id: "ech11-u9-titrating-carbonates-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why excess acid is added to the limestone sample in a back titration.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Back titration",
                              "statement": "Excess reagent ensures all of the sample reacts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A measured excess of standard acid is added so that all the CaCO$_3$ reacts.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The leftover acid is then titrated to find how much did NOT react.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Subtracting gives the acid that reacted, hence the amount of CaCO$_3$.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Excess acid guarantees complete reaction; leftover is titrated to find amount reacted.",
          "commonErrors": [
                    "Thinking excess acid wastes — it is necessary for the method."
          ]
},
        },
        {
          id: "ech11-u9-titrating-carbonates-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "An impure limestone sample is analysed by adding excess hydrochloric acid and then titrating the leftover acid with sodium hydroxide.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why excess acid is used.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State what is used to detect the end point of the back titration.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Write the expression linking initial acid, excess acid and acid reacted.",
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
                              "name": "Back titration",
                              "statement": "n(reacted) = n(initial) − n(excess)"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Excess ensures all CaCO$_3$ in the sample reacts completely.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "An indicator (e.g. phenolphthalein) detects when leftover acid is neutralised.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "n(HCl reacted) = n(HCl initial) − n(HCl excess = n(NaOH)).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) excess for complete reaction (b) indicator for end point (c) reacted = initial − excess.",
          "commonErrors": [
                    "Confusing which acid is titrated — the leftover acid is titrated with NaOH."
          ]
},
        },
        {
          id: "ech11-u9-titrating-carbonates-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "1.00 g of impure CaCO$_3$ is reacted with 50.0 cm$^3$ of 0.200 mol/dm$^3$ HCl. The excess acid needs 25.0 cm$^3$ of 0.100 mol/dm$^3$ NaOH to neutralise.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the initial moles of HCl added.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the moles of excess HCl.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the moles of CaCO$_3$ that reacted.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Calculate the percentage purity of the sample.",
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
                              "name": "Back titration calculation",
                              "statement": "reacted = initial − excess; CaCO$_3$:HCl = 1:2"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "n = 0.200 × 50.0 ÷ 1000 = 0.0100 mol.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "n(NaOH) = 0.100 × 25.0 ÷ 1000 = 0.00250 mol = excess HCl.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Reacted HCl = 0.0100 − 0.00250 = 0.00750; n(CaCO$_3$) = 0.00750 ÷ 2 = 0.00375 mol.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "mass = 0.00375 × 100 = 0.375 g; purity = 0.375 ÷ 1.00 × 100 = 37.5%.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) 0.0100 mol (b) 0.00250 mol (c) 0.00375 mol (d) 37.5%.",
          "commonErrors": [
                    "Using 1:1 ratio for CaCO$_3$ + HCl — it is 1:2."
          ]
},
        },
        {
          id: "ech11-u9-titrating-carbonates-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "2.00 g of an impure limestone sample is reacted with 100.0 cm$^3$ of 0.500 mol/dm$^3$ HCl. The excess acid is titrated with 0.800 mol/dm$^3$ NaOH, giving a mean titre of 18.75 cm$^3$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the initial moles of HCl.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the moles of excess HCl.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the moles of HCl that reacted with the sample.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Calculate the mass of CaCO$_3$ in the sample.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Calculate the percentage purity.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Suggest one reason why a back titration gives a more reliable result than trying to titrate the solid directly.",
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
                              "name": "Back titration",
                              "statement": "reacted = initial − excess; purity = pure mass ÷ sample mass × 100%"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "n = 0.500 × 100.0 ÷ 1000 = 0.0500 mol.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "n(NaOH) = 0.800 × 18.75 ÷ 1000 = 0.0150 mol = excess HCl.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Reacted = 0.0500 − 0.0150 = 0.0350 mol.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "n(CaCO$_3$) = 0.0350 ÷ 2 = 0.0175 mol; mass = 0.0175 × 100 = 1.75 g.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Purity = 1.75 ÷ 2.00 × 100 = 87.5%.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "The insoluble solid cannot be titrated directly; excess acid guarantees complete reaction.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "f",
                              "reasoning": "The leftover acid is a solution that can be titrated accurately with an indicator.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 0.0500 mol (b) 0.0150 mol (c) 0.0350 mol (d) 1.75 g (e) 87.5% (f) insoluble solid needs indirect method.",
          "commonErrors": [
                    "Forgetting CaCO$_3$ : HCl is 1:2."
          ]
},
        },
      ],
    },
    {
      id: "ech11-u9-titration-applications",
      title: "Uses of titration",
      skill: "Describe industrial and medical uses of titration and compare it with other analytical methods.",
      lesson: {
        sections: [
          {
            heading: "Industry and medicine",
            body: "Titrations are used to check and control quality:\n- **Food industry:** measuring citric acid in drinks, salt concentration, vitamin content.\n- **Medicine:** assaying tablets and injections to confirm they contain the stated amount of active ingredient.\n- **Water treatment:** checking acidity/alkalinity and chlorine levels.\n- **Chemical industry:** determining concentrations of acids, alkalis and salts in production.",
          },
          {
            heading: "Advantages",
            body: "- **Accurate and precise:** burette readings to 0.05 cm$^3$ and repeated concordant titres.\n- **Quantitative:** gives exact amounts, not just presence/absence.\n- **Cheap and simple:** uses standard glassware and common reagents.\n- **Versatile:** many reactions can be followed to an indicator end point.",
          },
          {
            heading: "Limitations and alternatives",
            body: "Titrations need a suitable indicator and a sharp end point; weak–weak titrations are unreliable. Alternatives include gravimetric analysis (weighing a precipitate), colorimetry (measuring colour intensity) and instrumental methods such as pH meters and chromatography.",
          },
        ],
        keyFormulas: [
          { name: "Titration advantage", statement: "accurate, quantitative, cheap, reproducible" },
          { name: "Assay", statement: "determine amount/purity of active ingredient" },
          { name: "Alternative methods", statement: "gravimetric, colorimetric, instrumental" },
        ],
        workedExample: {
          problem: "A manufacturer wants to check that a bottle of fruit juice contains 0.50 g of citric acid. Explain how a titration could be used and why it is suitable.",
          solution: "Citric acid is monoprotic; titrate a measured volume of juice with standard NaOH using phenolphthalein. Calculate moles of NaOH from c × V, equate to moles of citric acid, multiply by Mr 192 to get mass per bottle. Titration is accurate and quantitative — ideal for quality control.",
        },
      },
      questions: [
        {
          id: "ech11-u9-titration-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of using titration in industry?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To make solutions colourful"
                    },
                    {
                              "id": "b",
                              "text": "To determine concentrations and purities accurately"
                    },
                    {
                              "id": "c",
                              "text": "To speed up reactions"
                    },
                    {
                              "id": "d",
                              "text": "To separate mixtures"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Volumetric analysis",
                              "statement": "Using measured volumes to determine amounts of substances."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Titration measures concentration and purity quantitatively.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) determine concentrations and purities",
          "commonErrors": [
                    "Confusing titration with separation techniques."
          ]
},
        },
        {
          id: "ech11-u9-titration-applications-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two uses of titration in industry or medicine.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Titration uses",
                              "statement": "Quality control: food, medicine, water, chemicals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two of: checking citric acid in drinks, assaying medicines, water treatment, fertiliser/chemical concentrations.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "e.g. assay of tablets; citric acid in fruit juice.",
          "commonErrors": [
                    "Listing uses of indicators rather than titration itself."
          ]
},
        },
        {
          id: "ech11-u9-titration-applications-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three advantages of titration over other methods of analysis such as gravimetric analysis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Advantages of titration",
                              "statement": "Accurate, quantitative, fast, cheap."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Titrations are quick compared with gravimetric analysis (no drying/weighing of precipitates).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "They give accurate quantitative results with small amounts of sample.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Equipment is cheap and readily available (burette, pipette, flask).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Fast, accurate/quantitative, cheap and simple.",
          "commonErrors": [
                    "Saying titration is more accurate than all methods — it depends on technique."
          ]
},
        },
        {
          id: "ech11-u9-titration-applications-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A food company checks the citric acid content of a fruit juice using a titration with sodium hydroxide.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why a titration is a suitable method for this check.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State which indicator would be used and why.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain how the result can be used to find the mass of citric acid in the juice.",
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
                              "name": "Food analysis",
                              "statement": "Titrate acid with NaOH; phenolphthalein for weak acid."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Citric acid is monoprotic and reacts completely with NaOH.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Titration gives an accurate, quantitative concentration.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Phenolphthalein — weak acid vs strong base, alkaline equivalence point.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "n(NaOH) = n(citric acid) (1:1); multiply by Mr 192 for mass per volume.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) quantitative acid-base reaction (b) phenolphthalein (c) moles × 192 = mass.",
          "commonErrors": [
                    "Using methyl orange — wrong pH range for weak acid titration."
          ]
},
        },
        {
          id: "ech11-u9-titration-applications-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A pharmaceutical tablet contains sodium hydrogencarbonate (NaHCO$_3$). The tablet is dissolved in water and the solution titrated with hydrochloric acid.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write a balanced symbol equation for the reaction.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why the tablet is dissolved before titrating.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State a suitable indicator and the colour change expected.",
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
                              "name": "Carbonate + acid",
                              "statement": "NaHCO$_3$ + HCl $\\rightarrow$ NaCl + H$_2$O + CO$_2$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "NaHCO$_3$ + HCl $\\rightarrow$ NaCl + H$_2$O + CO$_2$.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "The solid tablet would react too slowly and unevenly.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Dissolving gives a uniform solution so the whole sample reacts with the titrant.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Methyl orange is suitable — the equivalence point is slightly acidic (CO$_2$ dissolved).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Accept phenolphthalein only if the student justifies that the end point is near neutral.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) NaHCO$_3$ + HCl $\\rightarrow$ NaCl + H$_2$O + CO$_2$ (b) uniform reaction (c) methyl orange/phenolphthalein consistent.",
          "commonErrors": [
                    "Writing Na$_2$CO$_3$ product — hydrogencarbonate gives CO$_2$ + H$_2$O with acid."
          ]
},
        },
        {
          id: "ech11-u9-titration-applications-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A company must check the purity of a batch of washing soda (sodium carbonate). Three methods are suggested: titration with acid, gravimetric analysis with BaCl$_2$, and colorimetry.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe how each method could be used.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Compare the accuracy and convenience of the three methods.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Recommend the most suitable method and justify your choice.",
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
                              "name": "Comparing analytical methods",
                              "statement": "Titration: fast, quantitative; gravimetric: accurate but slow; colorimetry: needs standards."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Titration: dissolve sample, titrate with standard acid to indicator end point, calculate Na$_2$CO$_3$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Gravimetric: precipitate BaCO$_3$ with BaCl$_2$, filter, dry, weigh.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Colorimetry: measure colour intensity against standards (less direct for carbonate).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Titration is quick and accurate; gravimetric very accurate but slow (drying/weighing).",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Colorimetry needs calibration standards and is less convenient here.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Recommend titration (or gravimetric if highest accuracy needed).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Justify: fast, quantitative, uses cheap reagents, suitable for routine quality control.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) titrate acid / precipitate BaCO$_3$ / colorimetry (b) titration fast+accurate, gravimetric slow+accurate, colorimetry needs standards (c) titration for routine QC.",
          "commonErrors": [
                    "Recommending colorimetry — not well suited to carbonate analysis."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech11-u9-titration-applications-notes",
      title: "Titrations in practice — notes",
      summary: "Back titration for insoluble samples: excess acid → titrate leftover → reacted = initial − excess. Titration is the workhorse of volumetric analysis in industry and medicine.",
      sections: [
        { heading: "Back titration pattern", body: "Weigh sample → add excess standard acid → filter → titrate excess with standard NaOH → moles reacted = initial − excess → purity." },
        { heading: "Purity calculation", body: "mass pure = n × Mr; purity % = mass pure ÷ mass sample × 100. For CaCO$_3$ : HCl the ratio is 1 : 2." },
        { heading: "When to choose titration", body: "Best for routine quality control of acids, bases and salts — accurate, fast, cheap. Gravimetric for highest accuracy; instrumental for complex mixtures." },
      ],
    },
  ],
};
