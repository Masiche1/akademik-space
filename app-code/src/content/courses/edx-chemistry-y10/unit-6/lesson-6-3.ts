import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "ech10-u6-lesson-6-3",
  code: "6-3",
  title: "Cracking and Combustion",
  goal: "I CAN explain why and how hydrocarbons are cracked, write cracking equations, and distinguish complete from incomplete combustion.",
  standards: ["Edexcel IGCSE Chemistry 4CH1 — Organic Chemistry", "4CH1 cracking and combustion"],
  
  vocabulary: [
    { term: "Cracking", definition: "Breaking large hydrocarbon molecules into smaller, more useful ones." },
    { term: "Catalyst", definition: "Substance that speeds a reaction without being used up — aluminium oxide or steam in cracking." },
    { term: "Combustion", definition: "Rapid reaction of a fuel with oxygen releasing heat and light." },
    { term: "Complete combustion", definition: "Combustion with plenty of oxygen giving CO₂ and H₂O." },
    { term: "Incomplete combustion", definition: "Combustion with limited oxygen giving CO and/or carbon." },
    { term: "Carbon monoxide", definition: "Toxic gas CO formed in incomplete combustion." },
  ],
  concepts: [
    {
      id: "ech10-u6-cracking",
      title: "Cracking",
      skill: "Explain the purpose, conditions and products of cracking and write balanced cracking equations.",
      lesson: {
        sections: [
          {
            heading: "Why crack?",
            body: "Fractional distillation produces more **heavy fractions** (fuel oil, bitumen) than the market needs, and not enough **petrol and alkenes**. **Cracking** breaks large hydrocarbon molecules into smaller, more useful ones — mainly petrol-range alkanes and alkenes like ethene for making plastics. It also converts unreactive alkanes into reactive alkenes.",
          },
          {
            heading: "How cracking works",
            body: "Large hydrocarbons are heated to about 600–700 °C, often with a catalyst (aluminium oxide) or steam. The C–C bonds break, producing smaller alkanes and alkenes. Example: decane C₁₀H₂₂ → octane C₈H₁₈ + ethene C₂H₄. The total number of carbon atoms is conserved.",
          },
        ],
        keyFormulas: [
          { name: "Cracking", statement: "large alkane → smaller alkane + alkene (heat + catalyst)" },
          { name: "Atom conservation", statement: "total C and H atoms are conserved in cracking" },
        ],
        workedExample: {
          problem: "Decane, C₁₀H₂₂, is cracked to give octane, C₈H₁₈, and one other product. Identify the other product.",
          solution: "Carbons: 10 − 8 = 2 C left. Hydrogens: 22 − 18 = 4 H left → C₂H₄, ethene. Equation: C₁₀H₂₂ → C₈H₁₈ + C₂H₄.",
        },
      },
      questions: [
        {
          id: "ech10-u6-cracking-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The main purpose of cracking hydrocarbons is to…",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "make the molecules larger"
                    },
                    {
                              "id": "b",
                              "text": "produce smaller, more useful molecules such as petrol and alkenes"
                    },
                    {
                              "id": "c",
                              "text": "remove all the hydrogen"
                    },
                    {
                              "id": "d",
                              "text": "convert alkanes into elements"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cracking",
                              "statement": "Breaking large hydrocarbons into smaller useful ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cracking supplies demand for petrol-range fuels and alkenes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) produce smaller, more useful molecules",
          "commonErrors": [
                    "Thinking cracking makes bigger molecules — it breaks them down."
          ]
},
        },
        {
          id: "ech10-u6-cracking-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the conditions used for cracking a hydrocarbon.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Cracking conditions",
                              "statement": "Strong heating with a catalyst or steam."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Heat to about 600–700 °C.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Use a catalyst such as aluminium oxide, or steam.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "High temperature (~600–700 °C) with aluminium oxide catalyst or steam.",
          "commonErrors": [
                    "Omitting the catalyst/steam — heat alone is insufficient at reasonable conditions."
          ]
},
        },
        {
          id: "ech10-u6-cracking-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why crude oil refineries carry out cracking.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Supply and demand",
                              "statement": "Distillation gives too much heavy fraction, too little petrol/alkenes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Demand for petrol and light fuels exceeds what distillation alone supplies.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Heavy fractions like fuel oil and bitumen are produced in excess.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Cracking converts the excess large molecules into the needed smaller ones.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Matches supply to demand — converts surplus heavy fractions into petrol-range products.",
          "commonErrors": [
                    "Saying cracking 'cleans' the oil — it restructures molecules."
          ]
},
        },
        {
          id: "ech10-u6-cracking-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Decane (C₁₀H₂₂) is cracked to form octane (C₈H₁₈) and ethene (C₂H₄).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Verify that the equation C₁₀H₂₂ → C₈H₁₈ + C₂H₄ is balanced.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Name the type of hydrocarbon formed and explain why it is useful.",
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
                              "name": "Balancing cracking equation",
                              "statement": "Conserve C and H atoms."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Carbon: 10 left; 8 + 2 = 10 right.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "a",
                              "reasoning": "Hydrogen: 22 left; 18 + 4 = 22 right.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both sides balanced — equation is correct.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Ethene is an alkene (contains C=C).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Alkenes are feedstock for plastics such as polyethene.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) balanced — 10C, 22H each side (b) alkene; used to make polymers.",
          "commonErrors": [
                    "Not checking hydrogen atoms — easy to miscount."
          ]
},
        },
        {
          id: "ech10-u6-cracking-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Dodecane, C₁₂H₂₆, is cracked to give hexane, C₆H₁₄, and one alkene.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Determine the molecular formula of the alkene produced.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write the name and formula of the alkene.",
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
                              "name": "Cracking product deduction",
                              "statement": "Subtract product atoms from reactant atoms."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Carbons remaining: 12 − 6 = 6.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Hydrogens remaining: 26 − 14 = 12.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Formula C₆H₁₂.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "C₆H₁₂ fits the alkene general formula CₙH₂ₙ with n = 6.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Six carbons → hex- prefix; alkene → -ene.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Name: hexene (or hex-1-ene).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) C₆H₁₂ (b) hexene, C₆H₁₂",
          "commonErrors": [
                    "Giving C₆H₁₄ — that is the alkane; the alkene must have formula CₙH₂ₙ."
          ]
},
        },
        {
          id: "ech10-u6-cracking-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A refinery cracks 500 kg of a C₁₂ alkane mixture. The cracking produces hexane (C₆H₁₄) and hexene (C₆H₁₂) in equal molar amounts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write a balanced equation for the cracking of C₁₂H₂₆ to these products.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the conditions needed for cracking to occur.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest two uses for the products of this cracking.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why the total mass of products equals the mass of reactant cracked.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Conservation of mass",
                              "statement": "Atoms are rearranged, not created or destroyed."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "C₁₂H₂₆ → C₆H₁₄ + C₆H₁₂.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Strong heating to ~600–700 °C.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Aluminium oxide catalyst or steam to break C–C bonds.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The catalyst provides an alternative pathway requiring less energy.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Hexane: petrol-range fuel component.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Hexene: feedstock for polymers/chemical manufacture.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Cracking rearranges existing atoms; no atoms are added or lost.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "All carbon and hydrogen atoms in reactants appear in products.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Therefore total product mass = reactant mass (conservation of mass).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) C₁₂H₂₆ → C₆H₁₄ + C₆H₁₂ (b) ~650 °C + Al₂O₃/steam (c) fuel + polymer feedstock (d) atoms conserved → mass conserved.",
          "commonErrors": [
                    "Writing an unbalanced equation — check C and H totals."
          ]
},
        },
      ],
    },
    {
      id: "ech10-u6-combustion",
      title: "Combustion of hydrocarbons",
      skill: "Write combustion equations, distinguish complete from incomplete combustion and explain the hazards of carbon monoxide.",
      lesson: {
        sections: [
          {
            heading: "Complete combustion",
            body: "When a hydrocarbon burns in **plenty of oxygen**, combustion is **complete**: carbon forms carbon dioxide and hydrogen forms water. Example: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Complete combustion releases the maximum energy and produces no toxic carbon monoxide.",
          },
          {
            heading: "Incomplete combustion",
            body: "With a **limited supply of oxygen**, combustion is **incomplete**: carbon may form **carbon monoxide (CO)** — a colourless, odourless, toxic gas — or **carbon (soot)**. Example: 2C₄H₁₀ + 5O₂ → 8CO + 10H₂O. Carbon monoxide binds to haemoglobin in blood, preventing oxygen transport — it is dangerous in poorly ventilated rooms with gas fires or boilers.",
          },
        ],
        keyFormulas: [
          { name: "Complete combustion", statement: "CₓH_y + (x + y/4)O₂ → xCO₂ + (y/2)H₂O" },
          { name: "Incomplete combustion", statement: "limited O₂ → CO and/or C instead of CO₂" },
          { name: "CO hazard", statement: "CO binds haemoglobin → reduced O₂ transport → toxic" },
        ],
        workedExample: {
          problem: "Write the balanced equation for the incomplete combustion of butane producing carbon monoxide.",
          solution: "2C₄H₁₀ + 5O₂ → 8CO + 10H₂O. Check: 8 C each side; H: 20 each side; O: 10 each side.",
        },
      },
      questions: [
        {
          id: "ech10-u6-combustion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The products of complete combustion of a hydrocarbon are…",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "carbon monoxide and water"
                    },
                    {
                              "id": "b",
                              "text": "carbon dioxide and water"
                    },
                    {
                              "id": "c",
                              "text": "carbon and hydrogen"
                    },
                    {
                              "id": "d",
                              "text": "carbon dioxide and hydrogen"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Complete combustion",
                              "statement": "Products are CO₂ and H₂O."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "With plenty of oxygen, C → CO₂ and H → H₂O.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) carbon dioxide and water",
          "commonErrors": [
                    "Choosing CO — that is incomplete combustion."
          ]
},
        },
        {
          id: "ech10-u6-combustion-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the balanced equation for the complete combustion of propane, C₃H₈.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Combustion balancing",
                              "statement": "Balance C → H → O."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "C₃H₈ + O₂ → CO₂ + H₂O; balance C: 3CO₂; H: 4H₂O; O: need 10 → 5O₂.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",
          "commonErrors": [
                    "Wrong O₂ coefficient — count total O atoms."
          ]
},
        },
        {
          id: "ech10-u6-combustion-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between complete and incomplete combustion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Complete vs incomplete",
                              "statement": "Oxygen supply determines products."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Complete combustion has plenty of oxygen and gives CO₂ + H₂O.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Incomplete combustion has limited oxygen and gives CO and/or carbon soot.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Incomplete combustion releases less energy per mole of fuel.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Oxygen supply determines products: CO₂+H₂O vs CO/C+H₂O.",
          "commonErrors": [
                    "Saying incomplete combustion 'doesn't release energy' — it releases less."
          ]
},
        },
        {
          id: "ech10-u6-combustion-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Butane undergoes incomplete combustion in a poorly ventilated room.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write a balanced equation for incomplete combustion of butane producing carbon monoxide.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why carbon monoxide is dangerous.",
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
                              "name": "Incomplete combustion equation",
                              "statement": "C₄H₁₀ + O₂ → CO + H₂O (limited O₂)."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "2C₄H₁₀ + 5O₂ → 8CO + 10H₂O.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "CO is colourless and odourless, so it is hard to detect.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It binds strongly to haemoglobin in red blood cells.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This blocks oxygen transport and can cause poisoning or death.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 2C₄H₁₀ + 5O₂ → 8CO + 10H₂O (b) CO is toxic, odourless, binds haemoglobin.",
          "commonErrors": [
                    "Producing CO₂ in an incomplete combustion equation — limited O₂ gives CO."
          ]
},
        },
        {
          id: "ech10-u6-combustion-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare complete and incomplete combustion of methane.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the equations for both types.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State one advantage of complete combustion and one hazard of incomplete combustion.",
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
                              "name": "Methane combustion",
                              "statement": "CH₄ + 2O₂ → CO₂ + 2H₂O; CH₄ + O₂ → CO + H₂O."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Complete: CH₄ + 2O₂ → CO₂ + 2H₂O.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Incomplete (to CO): 2CH₄ + 3O₂ → 2CO + 4H₂O or CH₄ + O₂ → ... accept balanced CO equation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Complete gives maximum energy release and no toxic CO.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Incomplete produces toxic carbon monoxide.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Ventilation ensures complete combustion and safety.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) CH₄+2O₂→CO₂+2H₂O; incomplete→CO+H₂O (b) max energy vs CO toxicity.",
          "commonErrors": [
                    "Unbalanced incomplete equation — balance C, H and O."
          ]
},
        },
        {
          id: "ech10-u6-combustion-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A gas fire is used in a small, poorly ventilated room. A detector shows rising carbon monoxide levels.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Predict the products of the combustion and explain why CO forms.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the health risk of the CO and how it is detected in blood.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest two practical steps to ensure complete combustion.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State the test for the CO₂ produced and its observation.",
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
                              "name": "Incomplete combustion hazards",
                              "statement": "Limited O₂ → CO; ventilation prevents it."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Products include CO and/or soot instead of CO₂.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Oxygen supply is limited by poor ventilation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Insufficient O₂ cannot fully oxidise carbon to CO₂.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "CO binds to haemoglobin, blocking oxygen transport.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It forms carboxyhaemoglobin, detectable in blood tests.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Symptoms: headache, dizziness, can be fatal.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Open windows/ensure ventilation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Service the appliance / fit a CO alarm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Bubble gas through limewater → turns milky (CaCO₃ precipitate).",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) CO/soot from limited O₂ (b) CO binds Hb, toxic (c) ventilate + service/alarm (d) limewater → milky.",
          "commonErrors": [
                    "Saying CO is 'just smoke' — it is an invisible toxic gas."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech10-u6-cracking-notes",
      title: "Cracking and combustion — notes",
      summary: "Cracking breaks large alkanes into smaller alkanes + alkenes (heat + catalyst) to match supply to demand. Complete combustion → CO₂+H₂O; incomplete → CO/soot (toxic).",
      sections: [
        { heading: "Cracking", body: "Large hydrocarbons + heat (~650 °C) + Al₂O₃/steam → smaller alkanes + alkenes. C atoms conserved. Purpose: convert surplus heavy fractions into petrol-range fuels and alkene feedstock." },
        { heading: "Cracking equations", body: "Subtraction method: atoms in product = atoms in reactant − atoms in known product. C₁₀H₂₂ → C₈H₁₈ + C₂H₄." },
        { heading: "Combustion", body: "Plenty O₂: CO₂ + H₂O (max energy). Limited O₂: CO and/or soot — CO is toxic, odourless, binds haemoglobin. Ensure ventilation." },
      ],
    },
  ],
};
