import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "ech11-u10-lesson-10-1",
  code: "10-1",
  title: "The Reactivity Series",
  goal: "I CAN place metals in the reactivity series and predict their reactions with oxygen, water and dilute acids.",
  standards: ["4CH1 2.23", "4CH1 2.24", "4CH1 2.25", "4CH1 2.26"],
  
  vocabulary: [
    { term: "Reactivity series", definition: "A list of metals ordered from most reactive (K, Na, Ca...) to least reactive (Au, Pt), with hydrogen placed to show which metals displace it from acids." },
    { term: "Displacement", definition: "A more reactive metal taking the place of a less reactive metal in a compound." },
    { term: "Hydrogen", definition: "Placed in the series between iron and copper; metals above it react with dilute acids to give H$_2$." },
    { term: "Vigorous reaction", definition: "A fast, violent reaction, e.g. sodium with cold water." },
    { term: "Steam", definition: "Water vapour; reacts with Mg, Zn and Fe where cold water does not." },
  ],
  concepts: [
    {
      id: "ech11-u10-reactivity-order",
      title: "Order of reactivity and reactions with oxygen and water",
      skill: "Recall the reactivity series and predict reactions of metals with oxygen and water.",
      lesson: {
        sections: [
          {
            heading: "The reactivity series",
            body: "Most reactive first: **K, Na, Ca, Mg, Al, Zn, Fe, (H), Cu, Ag, Au, Pt**.\n\n- Metals at the top (K, Na, Ca) react vigorously with cold water.\n- Mg reacts slowly with cold water but vigorously with steam.\n- Zn and Fe react with steam but not cold water.\n- Cu, Ag, Au do not react with water or dilute acids.\n- Hydrogen is placed between Fe and Cu: metals **above** H displace it from dilute acids; metals below do not.",
          },
          {
            heading: "Reactions with oxygen",
            body: "Most metals react with oxygen when heated to form **metal oxides**:\n- $2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$ (burns with bright white flame)\n- $4\\text{Na} + \\text{O}_2 \\rightarrow 2\\text{Na}_2\\text{O}$ (burns vigorously)\n- Iron forms iron oxide when heated; in moist air it forms **rust** (studied later).\n\nReactivity affects how readily the metal oxidises — more reactive metals oxidise more easily.",
          },
          {
            heading: "Reactions with water",
            body: "- **K, Na, Ca:** react vigorously with cold water, producing hydroxides and hydrogen: $2\\text{Na} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{NaOH} + \\text{H}_2$. Sodium floats, melts into a ball and skates on the surface.\n- **Mg:** reacts very slowly with cold water; reacts vigorously with steam: $\\text{Mg} + \\text{H}_2\\text{O} \\rightarrow \\text{MgO} + \\text{H}_2$.\n- **Zn, Fe:** react with steam only, forming oxides and hydrogen.\n- **Cu, Ag, Au:** no reaction with water.",
          },
        ],
        keyFormulas: [
          { name: "Reactivity series", statement: "K Na Ca Mg Al Zn Fe H Cu Ag Au Pt" },
          { name: "Metal + water", statement: "metal + water $\\rightarrow$ metal hydroxide/oxide + H$_2$" },
          { name: "Example", statement: "2Na + 2H$_2$O $\\rightarrow$ 2NaOH + H$_2$" },
          { name: "Rule", statement: "metals above H react with dilute acids" },
        ],
        workedExample: {
          problem: "Predict whether calcium, zinc and copper react with cold water, and write an equation for the calcium reaction.",
          solution: "Calcium reacts vigorously with cold water: Ca + 2H$_2$O $\\rightarrow$ Ca(OH)$_2$ + H$_2$. Zinc does not react with cold water (only steam). Copper does not react with water.",
        },
      },
      questions: [
        {
          id: "ech11-u10-reactivity-order-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which metal is the MOST reactive in the reactivity series?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Copper"
                    },
                    {
                              "id": "b",
                              "text": "Sodium"
                    },
                    {
                              "id": "c",
                              "text": "Potassium"
                    },
                    {
                              "id": "d",
                              "text": "Iron"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reactivity series",
                              "statement": "K is the most reactive metal in the IGCSE series."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Potassium is at the top of the series — most reactive.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) potassium",
          "commonErrors": [
                    "Choosing sodium — reactive but below potassium."
          ]
},
        },
        {
          id: "ech11-u10-reactivity-order-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Where is hydrogen placed in the reactivity series and what does its position tell us?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hydrogen in the series",
                              "statement": "H sits between Fe and Cu."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hydrogen is placed between iron and copper in the series.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Metals above hydrogen react with dilute acids to produce hydrogen gas; metals below do not.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Between Fe and Cu; metals above H displace it from acids.",
          "commonErrors": [
                    "Thinking hydrogen is a metal — it is a non-metal used as a reference point."
          ]
},
        },
        {
          id: "ech11-u10-reactivity-order-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write balanced symbol equations for the reactions of magnesium and sodium with oxygen.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Metal + oxygen",
                              "statement": "metal + O$_2$ $\\rightarrow$ metal oxide"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2Mg + O$_2$ $\\rightarrow$ 2MgO.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "4Na + O$_2$ $\\rightarrow$ 2Na$_2$O.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both balanced: 2 Mg atoms / 4 Na atoms each side.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2Mg + O$_2$ $\\rightarrow$ 2MgO; 4Na + O$_2$ $\\rightarrow$ 2Na$_2$O",
          "commonErrors": [
                    "Writing NaO instead of Na$_2$O — sodium forms Na$^+$ so oxide is Na$_2$O."
          ]
},
        },
        {
          id: "ech11-u10-reactivity-order-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student places small pieces of sodium, magnesium and copper into separate troughs of cold water.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Predict which metals react with cold water and describe the observations.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write a balanced symbol equation for the sodium reaction.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Metal + water",
                              "statement": "K, Na, Ca react vigorously with cold water."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sodium reacts vigorously — it melts into a ball, moves/skates on the water, fizzing of H$_2$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Magnesium reacts very slowly or not noticeably with cold water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Copper does not react with cold water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "2Na + 2H$_2$O $\\rightarrow$ 2NaOH + H$_2$.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) Na vigorous; Mg very slow; Cu none (b) 2Na + 2H$_2$O $\\rightarrow$ 2NaOH + H$_2$.",
          "commonErrors": [
                    "Expecting Mg to react as vigorously as Na — Mg needs steam for a vigorous reaction."
          ]
},
        },
        {
          id: "ech11-u10-reactivity-order-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Metals are tested with cold water, steam and dilute hydrochloric acid.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Complete the table predictions: which of Na, Mg, Zn, Fe, Cu react with each reagent?",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why the reactivity series predicts these results.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Reactivity patterns",
                              "statement": "Higher metals react with more reagents and more vigorously."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Na: reacts with all three; Mg: steam + acid; Zn/Fe: steam + acid; Cu: only none of these (not with cold water, steam, or dilute acid).",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "More reactive metals lose electrons more easily, so react with more substances.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Position above H means acid reaction; higher position means more vigorous water reaction.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Cu below H and low in series — unreactive with all three.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Na all; Mg steam+acid; Zn/Fe steam+acid; Cu none (b) position in series predicts reactivity.",
          "commonErrors": [
                    "Saying Zn reacts with cold water — it needs steam."
          ]
},
        },
        {
          id: "ech11-u10-reactivity-order-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Three metals, A, B and C, are tested with cold water, steam and dilute sulfuric acid. Results: A reacts vigorously with cold water; B reacts with steam and with the acid but not cold water; C shows no reaction with any of the three.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify which metal each could be, giving examples.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Deduce their order in the reactivity series.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Predict whether A would react with dilute hydrochloric acid and justify.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Write the equation for B reacting with steam (assume B is magnesium).",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Reacting with water/steam/acid",
                              "statement": "Patterns match positions in the reactivity series."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A: Na or Ca (Group 1/alkaline earth, cold water); B: Mg, Zn or Fe (steam + acid); C: Cu, Ag or Au (unreactive).",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A > B > C in reactivity.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Yes — A is above H in the series (Na/Ca/Mg all are), so it reacts with dilute acids producing H$_2$.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Mg + H$_2$O $\\rightarrow$ MgO + H$_2$ (steam).",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) A=Na/Ca, B=Mg/Zn/Fe, C=Cu/Ag/Au (b) A>B>C (c) yes, above H (d) Mg + H$_2$O $\\rightarrow$ MgO + H$_2$.",
          "commonErrors": [
                    "Placing C above B — no reaction means lowest reactivity."
          ]
},
        },
      ],
    },
    {
      id: "ech11-u10-metals-and-acids",
      title: "Metals and dilute acids",
      skill: "Predict which metals react with dilute acids, write equations and explain observations.",
      lesson: {
        sections: [
          {
            heading: "The rule",
            body: "A metal reacts with a **dilute acid** only if it is **above hydrogen** in the reactivity series. Products are a **salt** and **hydrogen gas**:\n\n$$\\text{metal} + \\text{dilute acid} \\rightarrow \\text{salt} + \\text{H}_2$$\n\nThe more reactive the metal, the faster the reaction. Copper, silver, gold and platinum (below H) do not react.",
          },
          {
            heading: "Equations",
            body: "- $\\text{Mg} + 2\\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$\n- $\\text{Zn} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{H}_2$\n- $\\text{Fe} + 2\\text{HCl} \\rightarrow \\text{FeCl}_2 + \\text{H}_2$ (iron forms Fe$^{2+}$ ions)\n- $2\\text{Al} + 6\\text{HCl} \\rightarrow 2\\text{AlCl}_3 + 3\\text{H}_2$ — aluminium's oxide layer must first be removed (sandpaper or mercury(II) chloride).",
          },
          {
            heading: "Observations and safety",
            body: "Observations: effervescence (H$_2$ bubbles), metal dissolves, solution warms. Test for H$_2$: lighted splint gives a 'pop'. **Safety:** hydrogen is flammable — never heat a gas jar of H$_2$; work away from flames; wear eye protection with acids.",
          },
        ],
        keyFormulas: [
          { name: "Metal + dilute acid", statement: "metal + acid $\\rightarrow$ salt + H$_2$" },
          { name: "Reacting condition", statement: "metal must be above H in the series" },
          { name: "Rate order", statement: "more reactive metal → faster reaction" },
        ],
        workedExample: {
          problem: "Iron filings are added to dilute hydrochloric acid. Describe observations and write the equation.",
          solution: "Bubbles of hydrogen evolve, the iron dissolves, the tube warms, and a pale green FeCl$_2$ solution forms. Equation: Fe + 2HCl $\\rightarrow$ FeCl$_2$ + H$_2$.",
        },
      },
      questions: [
        {
          id: "ech11-u10-metals-and-acids-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these metals reacts with dilute hydrochloric acid?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Copper"
                    },
                    {
                              "id": "b",
                              "text": "Silver"
                    },
                    {
                              "id": "c",
                              "text": "Zinc"
                    },
                    {
                              "id": "d",
                              "text": "Gold"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Metal + acid rule",
                              "statement": "Only metals above H react with dilute acids."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Zn is above H; Cu, Ag, Au are below H.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) zinc",
          "commonErrors": [
                    "Choosing copper — it is below hydrogen and unreactive."
          ]
},
        },
        {
          id: "ech11-u10-metals-and-acids-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a balanced symbol equation for the reaction of iron with dilute hydrochloric acid.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Metal + acid",
                              "statement": "Fe + 2HCl $\\rightarrow$ FeCl$_2$ + H$_2$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Iron forms Fe$^{2+}$ with non-oxidising acids: FeCl$_2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Balanced: Fe + 2HCl $\\rightarrow$ FeCl$_2$ + H$_2$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Fe + 2HCl $\\rightarrow$ FeCl$_2$ + H$_2$",
          "commonErrors": [
                    "Writing FeCl$_3$ — dilute HCl gives Fe$^{2+}$, not Fe$^{3+}$."
          ]
},
        },
        {
          id: "ech11-u10-metals-and-acids-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "When magnesium, zinc and iron are each added to dilute hydrochloric acid, the rate of reaction differs. Explain the order of reactivity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Reactivity and rate",
                              "statement": "More reactive metals react faster with acids."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mg reacts fastest, then Zn, then Fe — matching their order in the reactivity series.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "More reactive metals lose electrons more easily, so the reaction is faster.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Copper and below would not react at all.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Mg > Zn > Fe in rate, matching reactivity series position.",
          "commonErrors": [
                    "Saying all react at the same rate — reactivity affects rate."
          ]
},
        },
        {
          id: "ech11-u10-metals-and-acids-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Four metals — magnesium, aluminium, copper and silver — are tested with dilute sulfuric acid.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State which metals react and which do not.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write an equation for one reaction.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain why aluminium may appear not to react at first.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Metal + acid",
                              "statement": "Al has protective oxide layer; Cu/Ag below H."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Mg and Al react; Cu and Ag do not.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Mg + H$_2$SO$_4$ $\\rightarrow$ MgSO$_4$ + H$_2$ (or Al equation).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Aluminium is coated with a thin layer of aluminium oxide.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The oxide layer protects the metal; once removed (sandpaper/HgCl$_2$) Al reacts vigorously.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Mg, Al react; Cu, Ag no (b) Mg + H$_2$SO$_4$ $\\rightarrow$ MgSO$_4$ + H$_2$ (c) oxide layer protects Al.",
          "commonErrors": [
                    "Saying Al never reacts — the oxide layer must be broken first."
          ]
},
        },
        {
          id: "ech11-u10-metals-and-acids-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A class collects the hydrogen produced when zinc reacts with dilute hydrochloric acid.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the test for hydrogen and its result.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why the gas jar must not be heated.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State two safety precautions for this experiment.",
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
                              "name": "Hydrogen test",
                              "statement": "Lighted splint gives a 'pop'."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Hold a lighted splint near the gas.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "A 'pop' sound confirms hydrogen.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hydrogen forms explosive mixtures with air.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Heating could ignite the gas violently.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Any two: eye protection; acid is corrosive; work away from flames; wear gloves.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) lighted splint → pop (b) H$_2$ + air explosive (c) goggles, no flames.",
          "commonErrors": [
                    "Heating the gas to test — hydrogen must be tested with a splint, not heated."
          ]
},
        },
        {
          id: "ech11-u10-metals-and-acids-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student wants to rank the reactivity of zinc, iron and copper using dilute hydrochloric acid.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the procedure to compare reactivity fairly.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State the expected observations for each metal.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Write equations for the reactions that occur and deduce the reactivity order.",
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
                              "name": "Comparing metal reactivity",
                              "statement": "Same acid, same mass/size; compare rate of fizzing."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Use same volume/concentration of acid and same mass of each metal.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Add each metal separately and time or compare rate of effervescence.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Keep temperature and surface area similar for fairness.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Zn: fast effervescence; Fe: slower; Cu: no reaction.",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Zn + 2HCl $\\rightarrow$ ZnCl$_2$ + H$_2$; Fe + 2HCl $\\rightarrow$ FeCl$_2$ + H$_2$; Cu none.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Order: Zn > Fe > Cu (Cu unreactive).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) controlled variables (b) Zn fast, Fe slower, Cu none (c) Zn > Fe > Cu.",
          "commonErrors": [
                    "Using different masses of metal — unfair comparison."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech11-u10-reactivity-notes",
      title: "Reactivity series — notes",
      summary: "K Na Ca Mg Al Zn Fe (H) Cu Ag Au Pt. Metals above H react with dilute acids → salt + H$_2$. K/Na/Ca + cold water; Mg/Zn/Fe + steam.",
      sections: [
        { heading: "Series order", body: "K Na Ca Mg Al Zn Fe H Cu Ag Au Pt — most reactive left. Above H = reacts with dilute acid." },
        { heading: "Water reactions", body: "Cold water: K, Na, Ca (vigorous). Steam: Mg, Zn, Fe. None: Cu, Ag, Au." },
        { heading: "Acid reactions", body: "Above H → salt + H$_2$ (faster if more reactive). Below H → no reaction. Aluminium needs oxide layer removed first." },
      ],
    },
  ],
};
