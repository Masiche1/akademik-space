import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "ech11-u9-lesson-9-1",
  code: "9-1",
  title: "Introduction to Titration",
  goal: "I CAN describe how a titration is set up and carried out accurately and choose a suitable indicator.",
  standards: ["4CH1 2.20", "4CH1 2.21", "4CH1 3.1", "4CH1 3.2"],
  
  vocabulary: [
    { term: "Titration", definition: "Adding a solution of known concentration from a burette to a measured volume of another solution until the reaction is just complete." },
    { term: "Burette", definition: "A graduated glass tube with a tap used to deliver accurately measured volumes of solution." },
    { term: "Pipette", definition: "A glass tube used to transfer an accurate, fixed volume of solution." },
    { term: "Titre", definition: "The volume of solution delivered from the burette between the initial and final readings." },
    { term: "Standard solution", definition: "A solution of accurately known concentration used in a titration." },
    { term: "End point", definition: "The point at which the indicator changes colour, showing the reaction is complete." },
    { term: "Equivalence point", definition: "The point at which the reactants have reacted in the exact mole ratio from the equation." },
    { term: "Concordant titres", definition: "Titration results that agree within 0.10 cm$^3$ (or similar small range) and can be averaged." },
  ],
  concepts: [
    {
      id: "ech11-u9-titration-technique",
      title: "Titration technique",
      skill: "Describe accurate titration procedure: apparatus, rinsing, readings and recording concordant titres.",
      lesson: {
        sections: [
          {
            heading: "Apparatus",
            body: "- **Burette:** holds the standard solution; read the meniscus at eye level to the nearest 0.05 cm$^3$.\n- **Pipette:** transfers an accurate fixed volume (e.g. 25.0 cm$^3$) of the analyte into a conical flask.\n- **Conical flask:** holds the analyte plus indicator; its shape makes swirling easy and keeps liquid in when swirling.\n- **White tile:** placed under the flask so colour changes are easy to see.\n- **Retort stand and clamp:** hold the burette vertically.",
          },
          {
            heading: "Accurate procedure",
            body: "1. Rinse the burette with the standard solution, then fill it above the zero mark and run some through to fill the tip.\n2. Use a pipette filler to transfer a measured volume of analyte into the conical flask and add a few drops of indicator.\n3. Titrate, swirling constantly, until the indicator is nearly at its change colour.\n4. Add the standard solution dropwise until the colour just changes — the **end point**.\n5. Record initial and final burette readings; the **titre** is the difference.\n6. Repeat until at least two titres are **concordant** (agree within about 0.10 cm$^3$), then use the mean.",
          },
          {
            heading: "Sources of error",
            body: "- Not rinsing the burette with the titrant dilutes it and changes its concentration.\n- Reading the meniscus from above or below (parallax) gives wrong volumes.\n- Overshooting the end point by adding too much titrant.\n- Using a dirty pipette transfers extra water, diluting the analyte.\n- Recording only one titre — anomalies go unnoticed.",
          },
        ],
        keyFormulas: [
          { name: "Titre", statement: "titre = final burette reading − initial burette reading (cm$^3$)" },
          { name: "Concordant titres", statement: "agree within $\\sim$0.10 cm$^3$; use the mean" },
          { name: "Moles from titre", statement: "$n = c \\times V \\div 1000$ with $V$ in cm$^3$" },
        ],
        workedExample: {
          problem: "A titration gives burette readings of 0.00 cm$^3$ initially and 24.35 cm$^3$ at the end point. A repeat gives 24.40 cm$^3$ and 48.75 cm$^3$. Calculate the titres and decide whether they are concordant.",
          solution: "Titre 1 = $24.35 - 0.00 = 24.35$ cm$^3$. Titre 2 = $48.75 - 24.40 = 24.35$ cm$^3$. The titres agree exactly, so they are concordant; mean titre = 24.35 cm$^3$.",
        },
      },
      questions: [
        {
          id: "ech11-u9-titration-technique-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which piece of apparatus is used to transfer an accurate fixed volume of solution?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Beaker"
                    },
                    {
                              "id": "b",
                              "text": "Pipette"
                    },
                    {
                              "id": "c",
                              "text": "Conical flask"
                    },
                    {
                              "id": "d",
                              "text": "Measuring cylinder"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pipette",
                              "statement": "Transfers an accurate, fixed volume of solution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A pipette delivers a precise fixed volume; a burette measures variable volumes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) pipette",
          "commonErrors": [
                    "Choosing measuring cylinder — it is less accurate than a pipette."
          ]
},
        },
        {
          id: "ech11-u9-titration-technique-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State why the burette is rinsed with the standard solution before being filled.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Rinsing apparatus",
                              "statement": "Water in the burette would dilute the titrant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The burette may contain water or other liquids that would dilute the standard solution.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Dilution lowers the concentration, so more volume would be needed and the titre would be wrong.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "To remove water/contaminants that would dilute the titrant and change its concentration.",
          "commonErrors": [
                    "Saying it is to 'clean' the burette generally — the point is avoiding dilution of the standard."
          ]
},
        },
        {
          id: "ech11-u9-titration-technique-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how to read a burette accurately.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Burette reading",
                              "statement": "Read at eye level at the bottom of the meniscus."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Place the burette vertically and view the meniscus at eye level to avoid parallax error.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Read at the bottom of the curved meniscus (the lowest point of the liquid surface).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Estimate to the nearest 0.05 cm$^3$ (one decimal place beyond the graduations).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Eye level, bottom of meniscus, to 0.05 cm$^3$.",
          "commonErrors": [
                    "Reading the top of the meniscus or from above/below.",
                    "Recording to the nearest 1 cm$^3$ — too imprecise."
          ]
},
        },
        {
          id: "ech11-u9-titration-technique-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student performs a titration of sodium hydroxide solution with hydrochloric acid containing an indicator.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State why the conical flask is swirled throughout the titration.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain why the acid is added dropwise as the end point is approached.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe how the titre is calculated from the burette readings.",
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
                              "name": "Titration procedure",
                              "statement": "Swirl to mix; add dropwise near end point; titre = final − initial."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "To mix the reactants thoroughly so the indicator reacts uniformly.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "One drop can contain enough acid to overshoot the end point.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Dropwise addition allows accurate detection of the colour change.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Record the initial reading before titrating and the final reading at the end point.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Titre = final reading − initial reading.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) mix thoroughly (b) avoid overshooting end point (c) titre = final − initial.",
          "commonErrors": [
                    "Adding too fast near the end — one drop can overshoot."
          ]
},
        },
        {
          id: "ech11-u9-titration-technique-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student carries out an acid-base titration.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List three errors that would make the measured titre inaccurate.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "For each error, state the effect on the titre.",
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
                              "name": "Titration errors",
                              "statement": "Errors in volume measurement or end point detection affect the titre."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Any three of: not rinsing burette, parallax reading, overshooting end point, dirty pipette, recording only one titre, air bubbles in burette.",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each explained: dilution → larger titre; parallax → random error; overshoot → larger titre; dirty pipette → diluted analyte → larger titre.",
                              "marks": 3,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) e.g. parallax, overshoot, un-rinsed burette (b) each makes titre too large or unreliable.",
          "commonErrors": [
                    "Listing errors without saying how they affect the result."
          ]
},
        },
        {
          id: "ech11-u9-titration-technique-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write a full, accurate procedure for determining the concentration of a sodium hydroxide solution using standard hydrochloric acid.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe how the burette is prepared and filled.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe how the analyte is prepared in the conical flask.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe how the titration is carried out and the end point detected.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why the titration is repeated and which value is used in calculations.",
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
                              "name": "Titration procedure",
                              "statement": "Rinse, fill, pipette analyte + indicator, titrate to end point, repeat for concordant titres."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Rinse burette with standard acid, fill above zero, run through to fill tip, record initial reading.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use pipette to transfer measured volume of NaOH into flask, add indicator.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Add acid while swirling; near end point add dropwise until indicator changes colour.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Record final reading; titre = difference.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Repeat until at least two titres are concordant (agree within ~0.10 cm$^3$).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Anomalous titres are discarded.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "The mean of concordant titres is used for calculations.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Rinse/fill burette → pipette analyte + indicator → titrate to colour change → record titre → repeat, use mean of concordant.",
          "commonErrors": [
                    "Using only one titre or averaging discordant results."
          ]
},
        },
      ],
    },
    {
      id: "ech11-u9-indicators-endpoints",
      title: "Indicators and end points",
      skill: "Choose a suitable indicator for different acid-base titrations and distinguish end point from equivalence point.",
      lesson: {
        sections: [
          {
            heading: "End point versus equivalence point",
            body: "The **equivalence point** is when the reactants have combined in the exact mole ratio of the equation. The **end point** is when the indicator changes colour — ideally they coincide. A good indicator changes colour sharply over a small pH range that includes the pH at the equivalence point.",
          },
          {
            heading: "Choosing an indicator",
            body: "- **Strong acid vs strong base** (e.g. HCl vs NaOH): equivalence point at pH 7; both phenolphthalein and methyl orange work because the pH changes sharply.\n- **Weak acid vs strong base** (e.g. ethanoic acid vs NaOH): equivalence point alkaline (pH ~9); phenolphthalein is suitable.\n- **Strong acid vs weak base** (e.g. HCl vs NH$_3$): equivalence point acidic; methyl orange is suitable.\n- **Weak acid vs weak base:** no indicator is ideal — the pH change is gradual, so titration is unreliable.",
          },
          {
            heading: "Indicator colours",
            body: "- **Phenolphthalein:** colourless in acid, pink in alkali — used when titrating alkali with acid (colour disappears at end point).\n- **Methyl orange:** red in acid, yellow in alkali, orange near neutral — used when titrating acid with alkali.",
          },
        ],
        keyFormulas: [
          { name: "End point", statement: "indicator colour change" },
          { name: "Equivalence point", statement: "exact mole ratio reached" },
          { name: "Indicator choice", statement: "choose one whose colour-change range includes the equivalence pH" },
        ],
        workedExample: {
          problem: "Suggest a suitable indicator for titrating sodium hydroxide solution with ethanoic acid, and explain.",
          solution: "Phenolphthalein. The equivalence point of a weak acid–strong base... wait: ethanoic acid is weak, NaOH strong, so equivalence point is alkaline (pH ~9). Phenolphthalein changes colour around pH 8–10, matching well.",
        },
      },
      questions: [
        {
          id: "ech11-u9-indicators-endpoints-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What colour change does phenolphthalein show when sodium hydroxide solution is titrated with hydrochloric acid?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pink to colourless"
                    },
                    {
                              "id": "b",
                              "text": "Colourless to pink"
                    },
                    {
                              "id": "c",
                              "text": "Red to yellow"
                    },
                    {
                              "id": "d",
                              "text": "Blue to red"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Phenolphthalein",
                              "statement": "Colourless in acid, pink in alkali."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "NaOH + indicator is pink; acid removes the pink as the alkali is neutralised.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) pink to colourless",
          "commonErrors": [
                    "Reversing the direction — depends which solution is in the flask."
          ]
},
        },
        {
          id: "ech11-u9-indicators-endpoints-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the difference between the end point and the equivalence point in a titration.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "End point vs equivalence point",
                              "statement": "End point = indicator colour change; equivalence point = exact mole ratio."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The equivalence point is when reactants have combined in the exact mole ratio.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The end point is the observed indicator colour change, which should coincide with it.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Equivalence = exact mole ratio; end point = indicator colour change.",
          "commonErrors": [
                    "Treating them as identical in all cases — they can differ slightly."
          ]
},
        },
        {
          id: "ech11-u9-indicators-endpoints-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A weak acid is titrated with sodium hydroxide solution. Explain why phenolphthalein is a suitable indicator.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Indicator selection",
                              "statement": "Indicator range must include the equivalence-point pH."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weak acid + strong base gives an alkaline equivalence point (pH above 7).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Phenolphthalein changes colour over pH ~8–10, which includes this range.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Methyl orange would change too early, before equivalence.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Equivalence pH alkaline; phenolphthalein's range matches it.",
          "commonErrors": [
                    "Choosing methyl orange — its range is too acidic for this titration."
          ]
},
        },
        {
          id: "ech11-u9-indicators-endpoints-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Hydrochloric acid is titrated with sodium hydroxide solution.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the colour changes of phenolphthalein and methyl orange during this titration.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why either indicator is suitable for this particular titration.",
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
                              "name": "Strong acid-strong base titration",
                              "statement": "pH changes sharply near pH 7."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Phenolphthalein: colourless → pink (if alkali in flask) or pink → colourless (if acid in flask).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Methyl orange: red → orange → yellow.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Strong acid vs strong base has equivalence point at pH 7.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The pH changes very sharply (several pH units per drop) near pH 7.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both indicators change colour within this sharp region, so either gives an accurate end point.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) phenolphthalein colourless↔pink; methyl orange red↔yellow (b) sharp pH jump at pH 7 suits both.",
          "commonErrors": [
                    "Not specifying direction of colour change depends on which solution is in the flask."
          ]
},
        },
        {
          id: "ech11-u9-indicators-endpoints-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student titrates 25.0 cm$^3$ of sodium hydroxide solution with standard hydrochloric acid.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State which solution is placed in the burette and which in the conical flask.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Choose a suitable indicator and justify your choice.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe the colour change observed at the end point.",
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
                              "name": "Titration setup",
                              "statement": "Standard solution in burette; analyte + indicator in flask."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Standard HCl goes in the burette; NaOH solution goes in the conical flask.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Phenolphthalein (or methyl orange) — strong acid vs strong base, sharp pH change at pH 7.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Pink colour disappears (or first permanent pink with methyl orange — accept consistent answer).",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) HCl in burette, NaOH + indicator in flask (b) phenolphthalein or methyl orange (c) pink disappears.",
          "commonErrors": [
                    "Putting the analyte in the burette — the burette holds the standard solution."
          ]
},
        },
        {
          id: "ech11-u9-indicators-endpoints-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Three titrations are proposed: (i) HCl vs NaOH, (ii) ethanoic acid vs NaOH, (iii) HCl vs ammonia solution.",
          parts: [
          {
                    "label": "a",
                    "prompt": "For each titration, state the pH at the equivalence point (acidic, neutral or alkaline).",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest a suitable indicator for each and explain your choices.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Equivalence-point pH",
                              "statement": "Strong–strong = pH 7; weak acid–strong base = alkaline; strong acid–weak base = acidic."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "(i) neutral pH 7; (ii) alkaline (weak acid, strong base); (iii) acidic (strong acid, weak base).",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "(i) Either phenolphthalein or methyl orange — sharp pH change through pH 7.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "(ii) Phenolphthalein — changes in alkaline range matching equivalence pH ~9.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "(iii) Methyl orange — changes in acidic range matching equivalence pH ~5–6.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) i neutral, ii alkaline, iii acidic (b) i either, ii phenolphthalein, iii methyl orange.",
          "commonErrors": [
                    "Using phenolphthalein for strong acid vs weak base — equivalence pH is acidic."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech11-u9-titration-basics-notes",
      title: "Titration basics — notes",
      summary: "Burette delivers standard solution; pipette measures analyte; indicator gives end point ≈ equivalence point; repeat for concordant titres.",
      sections: [
        { heading: "Key terms", body: "Titre = final − initial burette reading. Concordant = agree within ~0.10 cm$^3$, use mean. Equivalence point = exact mole ratio; end point = indicator change." },
        { heading: "Accuracy rules", body: "Rinse burette with titrant; read meniscus at eye level; swirl flask; dropwise near end point; discard anomalies." },
        { heading: "Indicator guide", body: "Strong–strong: either. Weak acid–strong base: phenolphthalein. Strong acid–weak base: methyl orange. Weak–weak: unreliable." },
      ],
    },
  ],
};
