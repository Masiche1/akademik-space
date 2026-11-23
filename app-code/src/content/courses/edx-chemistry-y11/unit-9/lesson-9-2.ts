import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "ech11-u9-lesson-9-2",
  code: "9-2",
  title: "Titration Calculations",
  goal: "I CAN calculate moles and concentrations from titration data and use mole ratios from equations.",
  standards: ["4CH1 2.21", "4CH1 2.22", "4CH1 3.3", "4CH1 3.4"],
  
  vocabulary: [
    { term: "Concentration", definition: "Amount of solute per unit volume of solution, in mol/dm$^3$ (or g/dm$^3$)." },
    { term: "Mole", definition: "The SI unit of amount of substance; 1 mole contains $6.02 \\times 10^{23}$ particles." },
    { term: "Relative formula mass (Mr)", definition: "The sum of the relative atomic masses in a formula; numerically equal to molar mass in g/mol." },
    { term: "Mole ratio", definition: "The ratio of moles of reactants and products given by the balanced equation." },
    { term: "Back titration", definition: "Titrating the unreacted excess of a reagent to find how much reacted." },
    { term: "Standard solution", definition: "A solution of accurately known concentration." },
  ],
  concepts: [
    {
      id: "ech11-u9-moles-concentration",
      title: "Moles and concentration",
      skill: "Calculate moles from mass or solution volume and concentration, and relate concentration, volume and moles.",
      lesson: {
        sections: [
          {
            heading: "Key equations",
            body: "$$n = \\frac{c \\times V}{1000} \\quad\\text{and}\\quad n = \\frac{m}{M_r}$$\n\nwhere $n$ = moles, $c$ = concentration in mol/dm$^3$, $V$ = volume in **cm$^3$**, $m$ = mass in g, $M_r$ = relative formula mass in g/mol. Concentration can also be written g/dm$^3$ = mass (g) ÷ volume (dm$^3$).",
          },
          {
            heading: "Converting units",
            body: "1 dm$^3$ = 1000 cm$^3$. If volume is measured in cm$^3$ divide by 1000 to get dm$^3$ before using $n = cV$ without the 1000. Always check units before substituting.",
          },
          {
            heading: "In titrations",
            body: "The moles of solute delivered by the burette are found from its concentration and the mean titre. These moles are then related to the analyte through the balanced equation — the heart of every titration calculation.",
          },
        ],
        keyFormulas: [
          { name: "Moles from solution", statement: "$n = c \\times V \\div 1000$ ($V$ in cm$^3$)" },
          { name: "Moles from mass", statement: "$n = m \\div M_r$" },
          { name: "Concentration", statement: "$c = n \\times 1000 \\div V$ ($V$ in cm$^3$)" },
          { name: "Mass from moles", statement: "$m = n \\times M_r$" },
        ],
        workedExample: {
          problem: "How many moles of NaOH (Mr = 40) are in 25.0 cm$^3$ of a 0.100 mol/dm$^3$ solution? What mass of NaOH is this?",
          solution: "$n = \\frac{0.100 \\times 25.0}{1000} = 0.00250$ mol. Mass = $0.00250 \\times 40 = 0.100$ g.",
        },
      },
      questions: [
        {
          id: "ech11-u9-moles-concentration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which formula gives the number of moles of solute in a solution of concentration $c$ mol/dm$^3$ and volume $V$ cm$^3$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$n = c \\times V$"
                    },
                    {
                              "id": "b",
                              "text": "$n = c \\times V \\div 1000$"
                    },
                    {
                              "id": "c",
                              "text": "$n = c \\div V$"
                    },
                    {
                              "id": "d",
                              "text": "$n = c \\times V \\times 1000$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Moles from solution",
                              "statement": "$n = cV/1000$ with $V$ in cm$^3$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divide by 1000 to convert cm$^3$ to dm$^3$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) $n = c \\times V \\div 1000$",
          "commonErrors": [
                    "Forgetting the ÷1000 conversion for cm$^3$."
          ]
},
        },
        {
          id: "ech11-u9-moles-concentration-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Calculate the number of moles of NaOH in 25.0 cm$^3$ of 0.100 mol/dm$^3$ solution.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "moles",
                              "answer": 0.0025,
                              "unit": "mol",
                              "tolerance": 0.0001
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Moles from solution",
                              "statement": "$n = cV/1000$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "n = 0.100 × 25.0 ÷ 1000.",
                              "working": "0.1 \\times 25 = 2.5; \\div 1000",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "n = 0.00250 mol.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0.0025 mol",
          "commonErrors": [
                    "Answering 2.5 mol — forgot ÷1000 for cm$^3$."
          ]
},
        },
        {
          id: "ech11-u9-moles-concentration-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student weighs out 0.840 g of anhydrous sodium carbonate (Mr = 106). Calculate the number of moles.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Moles from mass",
                              "statement": "$n = m/M_r$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Use n = m ÷ Mr.",
                              "working": "n = \\frac{0.840}{106}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "n = 0.007925... ≈ 0.00793 mol.",
                              "working": "0.00793",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Answer quoted to 3 significant figures.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "0.00793 mol",
          "commonErrors": [
                    "Dividing 106 by 0.840 instead of mass by Mr."
          ]
},
        },
        {
          id: "ech11-u9-moles-concentration-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "100 cm$^3$ of 1.00 mol/dm$^3$ hydrochloric acid is diluted with water to a final volume of 250 cm$^3$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the number of moles of HCl before dilution.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain why dilution does not change the number of moles.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Calculate the concentration of the diluted solution.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Dilution",
                              "statement": "Moles unchanged; c$_2$ = n ÷ V$_2$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "n = 1.00 × 100 ÷ 1000 = 0.100 mol.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Adding water spreads the same amount of solute over a larger volume.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "c = n × 1000 ÷ V = 0.100 × 1000 ÷ 250.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "c = 0.400 mol/dm$^3$.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) 0.100 mol (b) same moles, more water (c) 0.400 mol/dm$^3$.",
          "commonErrors": [
                    "Dividing concentration by volume instead of recomputing n/V."
          ]
},
        },
        {
          id: "ech11-u9-moles-concentration-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student dissolves 2.00 g of NaOH (Mr = 40.0) in distilled water and makes the solution up to 250 cm$^3$ in a volumetric flask.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the number of moles of NaOH dissolved.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the concentration of the solution in mol/dm$^3$.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State why the solution is made up to the mark on the volumetric flask rather than just adding a measured volume of water.",
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
                              "name": "Moles and concentration",
                              "statement": "$n = m/M_r$; $c = nV$ conversions"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "n = 2.00 ÷ 40.0 = 0.0500 mol.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "c = 0.0500 × 1000 ÷ 250 = 0.200 mol/dm$^3$.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "The mark ensures the final volume is exactly 250 cm$^3$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "This gives an accurately known concentration for titrations.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 0.0500 mol (b) 0.200 mol/dm$^3$ (c) exact volume → known concentration.",
          "commonErrors": [
                    "Forgetting the solution volume is 250 cm$^3$ not 2 g-related volume."
          ]
},
        },
        {
          id: "ech11-u9-moles-concentration-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A technician must prepare 250 cm$^3$ of 0.100 mol/dm$^3$ sodium hydroxide solution (Mr NaOH = 40.0) from solid NaOH.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the number of moles of NaOH required.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the mass of NaOH needed.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe how the solution is prepared, including how the final volume is set.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "State one safety precaution when handling solid NaOH.",
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
                              "name": "Solution preparation",
                              "statement": "$n = cV/1000$; $m = nM_r$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "n = 0.100 × 250 ÷ 1000 = 0.0250 mol.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "m = 0.0250 × 40.0 = 1.00 g.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Weigh 1.00 g NaOH into a beaker and dissolve in ~100 cm$^3$ distilled water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Transfer to a 250 cm$^3$ volumetric flask, rinse beaker, add water to near the mark.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Make up to the mark with a dropping pipette and invert to mix.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Wear gloves/goggles — NaOH is corrosive; do not touch or taste.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) 0.0250 mol (b) 1.00 g (c) dissolve → transfer → make to mark → mix (d) gloves/goggles, corrosive.",
          "commonErrors": [
                    "Preparing 250 cm$^3$ of solution by dissolving in exactly 250 cm$^3$ water — solid adds volume."
          ]
},
        },
      ],
    },
    {
      id: "ech11-u9-acid-base-titration-calculations",
      title: "Acid-base titration calculations",
      skill: "Use titration results and balanced equations to calculate unknown concentrations and amounts.",
      lesson: {
        sections: [
          {
            heading: "The calculation sequence",
            body: "1. Write the balanced equation and identify the mole ratio.\n2. Calculate moles of the known solution: $n = cV/1000$ using the mean titre.\n3. Use the mole ratio to find moles of the unknown.\n4. Calculate the unknown concentration or mass.",
          },
          {
            heading: "Mole ratios matter",
            body: "HCl + NaOH is 1:1, but H$_2$SO$_4$ + 2NaOH is 1:2. If 1 mole of H$_2$SO$_4$ reacts with 2 moles of NaOH, then $n(\\text{NaOH}) = 2 \\times n(\\text{H}_2\\text{SO}_4)$. Always check the equation before using the ratio.",
          },
          {
            heading: "Worked pattern",
            body: "Example: 25.0 cm$^3$ of NaOH needs 20.0 cm$^3$ of 0.100 mol/dm$^3$ HCl.\n- n(HCl) = $0.100 \\times 20.0 \\div 1000 = 0.00200$ mol\n- 1:1 ratio so n(NaOH) = 0.00200 mol\n- c(NaOH) = $0.00200 \\times 1000 \\div 25.0 = 0.0800$ mol/dm$^3$",
          },
        ],
        keyFormulas: [
          { name: "Moles of titrant", statement: "$n = c_{\\text{titrant}} \\times V_{\\text{titre}} \\div 1000$" },
          { name: "Mole ratio", statement: "from balanced equation, e.g. 1 H$_2$SO$_4$ : 2 NaOH" },
          { name: "Unknown concentration", statement: "$c = n \\times 1000 \\div V_{\\text{analyte}}$" },
        ],
        workedExample: {
          problem: "25.0 cm$^3$ of NaOH solution is titrated with 0.100 mol/dm$^3$ HCl; the mean titre is 20.0 cm$^3$. Calculate the concentration of the NaOH solution.",
          solution: "n(HCl) = $0.100 \\times 20.0 \\div 1000 = 0.00200$ mol. Equation HCl + NaOH $\\rightarrow$ NaCl + H$_2$O is 1:1, so n(NaOH) = 0.00200 mol. c(NaOH) = $0.00200 \\times 1000 \\div 25.0 = 0.0800$ mol/dm$^3$.",
        },
      },
      questions: [
        {
          id: "ech11-u9-acid-base-titration-calculations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "25.0 cm$^3$ of 0.100 mol/dm$^3$ NaOH is titrated with HCl; the mean titre is 20.0 cm$^3$. What is the concentration of the HCl?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0.0800 mol/dm$^3$"
                    },
                    {
                              "id": "b",
                              "text": "0.100 mol/dm$^3$"
                    },
                    {
                              "id": "c",
                              "text": "0.125 mol/dm$^3$"
                    },
                    {
                              "id": "d",
                              "text": "0.160 mol/dm$^3$"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Titration calculation",
                              "statement": "$n = cV/1000$; 1:1 mole ratio"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "n(NaOH) = 0.0025 mol = n(HCl); c = 0.0025 ÷ 0.0200 = 0.125 mol/dm$^3$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) 0.125 mol/dm$^3$",
          "commonErrors": [
                    "Using 25.0 cm$^3$ as the titre volume instead of 20.0 cm$^3$."
          ]
},
        },
        {
          id: "ech11-u9-acid-base-titration-calculations-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "30.0 cm$^3$ of 0.150 mol/dm$^3$ NaOH solution is neutralised by 25.0 cm$^3$ of sulfuric acid. Calculate the concentration of the sulfuric acid. (Equation: H$_2$SO$_4$ + 2NaOH $\\rightarrow$ Na$_2$SO$_4$ + 2H$_2$O)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "concentration",
                              "answer": 0.09,
                              "unit": "mol/dm^3",
                              "tolerance": 0.001
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Titration with mole ratio",
                              "statement": "1 H$_2$SO$_4$ : 2 NaOH"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "n(NaOH) = 0.150 × 30.0 ÷ 1000 = 0.00450 mol.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "n(H$_2$SO$_4$) = 0.00450 ÷ 2 = 0.00225 mol.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "c = 0.00225 × 1000 ÷ 25.0 = 0.0900 mol/dm$^3$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0.090 mol/dm$^3$",
          "commonErrors": [
                    "Using 1:1 ratio — sulfuric acid is diprotic, ratio is 1:2."
          ]
},
        },
        {
          id: "ech11-u9-acid-base-titration-calculations-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the mole ratio in the calculation H$_2$SO$_4$ + 2NaOH $\\rightarrow$ Na$_2$SO$_4$ + 2H$_2$O is 1:2.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Balanced equation",
                              "statement": "Coefficients give mole ratios."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The balanced equation shows 1 molecule of H$_2$SO$_4$ reacts with 2 molecules of NaOH.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Therefore 1 mole of H$_2$SO$_4$ reacts with 2 moles of NaOH.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Sulfuric acid provides 2 H$^+$ ions, so it neutralises 2 hydroxide ions.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "1 mole H$_2$SO$_4$ : 2 moles NaOH from the balanced equation.",
          "commonErrors": [
                    "Assuming all acid-base reactions are 1:1."
          ]
},
        },
        {
          id: "ech11-u9-acid-base-titration-calculations-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "20.0 cm$^3$ of NaOH solution requires 15.0 cm$^3$ of 0.100 mol/dm$^3$ sulfuric acid for complete neutralisation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the moles of H$_2$SO$_4$ used.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the moles of NaOH in the flask.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the concentration of the NaOH solution.",
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
                              "name": "Titration calculation",
                              "statement": "1 H$_2$SO$_4$ : 2 NaOH"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "n(H$_2$SO$_4$) = 0.100 × 15.0 ÷ 1000 = 0.00150 mol.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Ratio 1:2, so n(NaOH) = 2 × 0.00150 = 0.00300 mol.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "c = 0.00300 × 1000 ÷ 20.0 = 0.150 mol/dm$^3$.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) 0.00150 mol (b) 0.00300 mol (c) 0.150 mol/dm$^3$.",
          "commonErrors": [
                    "Using 1:1 ratio and getting 0.075 mol/dm$^3$."
          ]
},
        },
        {
          id: "ech11-u9-acid-base-titration-calculations-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student titrates 25.0 cm$^3$ of a solution of ethanoic acid with 0.100 mol/dm$^3$ NaOH solution. The mean titre is 24.0 cm$^3$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the moles of NaOH used.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the moles of ethanoic acid in the flask (1:1 reaction).",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the concentration of the ethanoic acid solution.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State the assumption made about ethanoic acid in this calculation.",
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
                              "name": "Titration calculation",
                              "statement": "Monoprotic acid: 1:1 with NaOH"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "n(NaOH) = 0.100 × 24.0 ÷ 1000 = 0.00240 mol.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "1:1 ratio so n(acid) = 0.00240 mol.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "c = 0.00240 × 1000 ÷ 25.0 = 0.0960 mol/dm$^3$.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Assumed ethanoic acid is monoprotic (one H$^+$ per molecule).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) 0.00240 mol (b) 0.00240 mol (c) 0.0960 mol/dm$^3$ (d) monoprotic.",
          "commonErrors": [
                    "Using 2:1 ratio because ethanoic acid formula has multiple H atoms — only the –COOH hydrogen ionises."
          ]
},
        },
        {
          id: "ech11-u9-acid-base-titration-calculations-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "25.0 cm$^3$ of 0.0500 mol/dm$^3$ NaOH is titrated with sulfuric acid. The mean titre is 22.50 cm$^3$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the moles of NaOH in the flask.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the moles of H$_2$SO$_4$ in the titre.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the concentration of the sulfuric acid.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Explain why the mean of concordant titres is used rather than a single titre.",
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
                              "name": "Titration calculation",
                              "statement": "1 H$_2$SO$_4$ : 2 NaOH; use mean titre"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "n(NaOH) = 0.0500 × 25.0 ÷ 1000 = 0.00125 mol.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "n(H$_2$SO$_4$) = 0.00125 ÷ 2 = 0.000625 mol.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "c = 0.000625 × 1000 ÷ 22.50.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "c = 0.0278 mol/dm$^3$ (2 sf) or 0.02778.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Random errors affect individual titres.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Averaging concordant titres reduces random error and improves reliability.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 0.00125 mol (b) 0.000625 mol (c) 0.0278 mol/dm$^3$ (d) averaging reduces random error.",
          "commonErrors": [
                    "Forgetting to halve moles for the 1:2 ratio."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech11-u9-titration-calcs-notes",
      title: "Titration calculations — notes",
      summary: "$n = cV/1000$ (V in cm$^3$); use balanced equation for mole ratio; unknown c = n × 1000 ÷ V.",
      sections: [
        { heading: "Golden sequence", body: "Equation → mole ratio → n(titrant) = c × titre ÷ 1000 → n(unknown) via ratio → c or m of unknown." },
        { heading: "Common ratios", body: "HCl : NaOH = 1:1. H$_2$SO$_4$ : NaOH = 1:2. HNO$_3$ : KOH = 1:1. Monoprotic organic acids : NaOH = 1:1." },
        { heading: "Unit traps", body: "cm$^3$ → dm$^3$ needs ÷1000. Concentration in mol/dm$^3$ needs ×1000 when V in cm$^3$. Check sig figs at the end." },
      ],
    },
  ],
};
