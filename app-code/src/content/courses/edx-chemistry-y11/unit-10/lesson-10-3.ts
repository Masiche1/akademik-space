import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "ech11-u10-lesson-10-3",
  code: "10-3",
  title: "Corrosion and Protection",
  goal: "I CAN explain the conditions needed for rusting and describe methods of preventing corrosion of iron and other metals.",
  standards: ["4CH1 2.31", "4CH1 2.32", "4CH1 2.33", "4CH1 2.34"],
  
  vocabulary: [
    { term: "Corrosion", definition: "The slow chemical reaction of a metal with its environment, e.g. rusting of iron." },
    { term: "Rust", definition: "Hydrated iron(III) oxide, formed when iron reacts with oxygen and water." },
    { term: "Galvanising", definition: "Coating iron or steel with a layer of zinc to protect it from rusting." },
    { term: "Sacrificial protection", definition: "Attaching a more reactive metal (Zn or Mg) that corrodes instead of the protected metal." },
    { term: "Barrier method", definition: "Covering the metal with paint, oil, plastic or another impermeable layer to exclude oxygen and water." },
    { term: "Stainless steel", definition: "An alloy of iron with chromium and nickel that resists corrosion." },
  ],
  concepts: [
    {
      id: "ech11-u10-rusting",
      title: "Rusting of iron",
      skill: "Describe the conditions needed for rusting and explain why other metals corrode differently.",
      lesson: {
        sections: [
          {
            heading: "What is rusting?",
            body: "Rusting is the **corrosion of iron** — a slow reaction with oxygen and water producing **hydrated iron(III) oxide**, a brown flaky solid. Rust is weak and flakes off, exposing fresh iron to more corrosion, so rusting continues until the iron is eaten away.",
          },
          {
            heading: "Conditions needed",
            body: "Rusting requires **both oxygen AND water** (or water vapour). Experiments with iron nails show:\n- In dry air: no rust.\n- In boiled (air-free) water: no rust.\n- In air + water: rusts.\n- In salt water: rusts faster (salt is an electrolyte that speeds the reaction).",
          },
          {
            heading: "Other metals",
            body: "Most other metals form a thin, **protective oxide layer** that stops further corrosion (e.g. aluminium's Al$_2$O$_3$ layer). Iron's rust is porous and flaky, so it does not protect the metal underneath — this is why iron rusts so badly compared with aluminium.",
          },
        ],
        keyFormulas: [
          { name: "Rusting conditions", statement: "iron + oxygen + water (both needed)" },
          { name: "Rust", statement: "hydrated iron(III) oxide" },
          { name: "Salt effect", statement: "electrolyte speeds up rusting" },
        ],
        workedExample: {
          problem: "Three iron nails are placed in: (1) dry air, (2) boiled water with a layer of oil on top, (3) tap water open to air. Predict which rust and why.",
          solution: "Only nail 3 rusts — it has both oxygen (from air) and water. Nail 1 lacks water; nail 2 lacks oxygen (oil excludes air).",
        },
      },
      questions: [
        {
          id: "ech11-u10-rusting-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What two conditions are needed for iron to rust?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Oxygen and heat"
                    },
                    {
                              "id": "b",
                              "text": "Water and salt"
                    },
                    {
                              "id": "c",
                              "text": "Oxygen and water"
                    },
                    {
                              "id": "d",
                              "text": "Carbon dioxide and water"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Rusting",
                              "statement": "Iron + O$_2$ + H$_2$O → hydrated iron(III) oxide."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both oxygen and water are required for rusting.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) oxygen and water",
          "commonErrors": [
                    "Choosing water and salt — salt speeds rusting but is not required."
          ]
},
        },
        {
          id: "ech11-u10-rusting-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is rust chemically and what does it look like?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Rust",
                              "statement": "Hydrated iron(III) oxide."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rust is hydrated iron(III) oxide.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It appears as a brown/orange flaky coating on iron.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Hydrated iron(III) oxide; brown flaky solid.",
          "commonErrors": [
                    "Calling rust iron oxide without 'hydrated' or 'iron(III)'."
          ]
},
        },
        {
          id: "ech11-u10-rusting-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Iron nails are placed in three tubes: (a) dry air, (b) boiled water covered with oil, (c) tap water exposed to air. Predict which nails rust and explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Rusting experiment",
                              "statement": "Both O$_2$ and H$_2$O needed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nail in (a) dry air: no rust — no water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Nail in (b) boiled water + oil: no rust — oil excludes oxygen.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Nail in (c) tap water + air: rusts — both oxygen and water present.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Only (c) rusts — needs both oxygen and water.",
          "commonErrors": [
                    "Thinking boiled water still contains dissolved oxygen — it is largely removed, and oil blocks air."
          ]
},
        },
        {
          id: "ech11-u10-rusting-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Two identical iron nails are placed in separate beakers of water: one in distilled water and one in salt water. After a week the salt-water nail has more rust.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why rusting needs both oxygen and water.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why the nail rusts faster in salt water.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one other condition that would speed up rusting.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Rusting conditions",
                              "statement": "O$_2$ + H$_2$O required; electrolytes accelerate."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Rusting is a reaction between iron, oxygen and water — all three needed.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Remove either oxygen or water and rusting stops.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Salt is an electrolyte that increases the rate of the electrochemical corrosion.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Higher temperature or scratches/damage to the surface (or acidic conditions).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) need both O$_2$ and H$_2$O (b) salt electrolyte speeds reaction (c) heat/scratches/acidity.",
          "commonErrors": [
                    "Saying salt 'reacts' with iron — it just accelerates the corrosion."
          ]
},
        },
        {
          id: "ech11-u10-rusting-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare the corrosion of iron and aluminium in moist air.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe what happens to each metal.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why aluminium does not corrode as badly as iron.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest why rusting of iron is an economic problem.",
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
                              "name": "Corrosion",
                              "statement": "Iron rusts badly; Al forms protective oxide."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Iron forms flaky hydrated iron(III) oxide (rust).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Aluminium forms a thin, adherent layer of Al$_2$O$_3$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The Al$_2$O$_3$ layer is impermeable and protects the metal underneath.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Rust is porous/flaky so it does not protect iron — corrosion continues.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Rust weakens structures (bridges, cars, pipelines) requiring repair/replacement.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Cost of protection and repair is huge.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Fe rusts, Al oxide layer (b) Al$_2$O$_3$ protective, rust not (c) economic cost of damage.",
          "commonErrors": [
                    "Saying aluminium does not corrode at all — it does, but forms a protective layer."
          ]
},
        },
        {
          id: "ech11-u10-rusting-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student wants to find out exactly which conditions are needed for rusting.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe an experiment using three identical iron nails to test the conditions.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State the expected result for each nail and what it shows.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Suggest how to make the experiment a fair test.",
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
                              "name": "Rusting investigation",
                              "statement": "Control variables; vary O$_2$/H$_2$O presence."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Nail 1 in dry air (no water); nail 2 in boiled water + oil layer (no air); nail 3 in tap water + air.",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Nail 1: no rust — water needed.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Nail 2: no rust — oxygen needed.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Nail 3: rusts — both present.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Conclusion: both oxygen and water required.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use identical nails, same temperature, same time, same water quality.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) three nail setups (b) only nail 3 rusts (c) control variables.",
          "commonErrors": [
                    "Using different metals or different times — unfair test."
          ]
},
        },
      ],
    },
    {
      id: "ech11-u10-preventing-corrosion",
      title: "Preventing corrosion",
      skill: "Describe barrier and sacrificial methods of preventing rusting and evaluate their use.",
      lesson: {
        sections: [
          {
            heading: "Barrier methods",
            body: "Cover the metal to exclude oxygen and water:\n- **Paint** — common for gates, cars, bridges (must be maintained).\n- **Oil or grease** — machinery, tools.\n- **Plastic coating** — dishwasher racks, wire coatings.\n- **Tin plating** — cans (tin is unreactive).\n- **Chromium plating** — decorative and protective.\n\nThese work only while the coating is intact — scratches expose the metal.",
          },
          {
            heading: "Galvanising and sacrificial protection",
            body: "**Galvanising** coats iron/steel with **zinc**. Zinc is more reactive than iron, so it oxidises first — even if the coating is scratched, the zinc protects the iron underneath (**sacrificial protection**).\n\n**Sacrificial anodes:** blocks of magnesium or zinc are attached to ships' hulls, pipelines and water tanks. These corrode preferentially, protecting the iron/steel structure. They are replaced when used up.",
          },
          {
            heading: "Alloys",
            body: "**Stainless steel** (iron + chromium + nickel) forms a protective chromium oxide layer and resists rusting — used for cutlery, sinks, medical instruments. **Aluminium alloys** resist corrosion naturally. Choosing a corrosion-resistant material avoids the need for coatings.",
          },
        ],
        keyFormulas: [
          { name: "Barrier method", statement: "paint/oil/plastic excludes O$_2$ and H$_2$O" },
          { name: "Galvanising", statement: "zinc coating — Zn oxidises before Fe" },
          { name: "Sacrificial anode", statement: "Mg/Zn block corrodes preferentially" },
          { name: "Stainless steel", statement: "Fe + Cr + Ni — protective oxide" },
        ],
        workedExample: {
          problem: "A ship's steel hull is protected by attaching zinc blocks. Explain how this works and why the blocks need replacing.",
          solution: "Zinc is more reactive than iron, so it oxidises/corrodes preferentially in seawater, protecting the steel hull (sacrificial protection). The zinc blocks are gradually consumed and must be replaced when worn away.",
        },
      },
      questions: [
        {
          id: "ech11-u10-preventing-corrosion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is galvanising?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Painting iron with zinc paint"
                    },
                    {
                              "id": "b",
                              "text": "Coating iron or steel with a layer of zinc"
                    },
                    {
                              "id": "c",
                              "text": "Adding zinc to iron to make an alloy"
                    },
                    {
                              "id": "d",
                              "text": "Dipping iron in acid to remove rust"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Galvanising",
                              "statement": "Zinc coating on iron/steel."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Galvanising = coating with zinc metal.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) zinc coating",
          "commonErrors": [
                    "Confusing with alloying — galvanised steel is coated, not alloyed."
          ]
},
        },
        {
          id: "ech11-u10-preventing-corrosion-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two barrier methods of preventing rusting.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Barrier methods",
                              "statement": "Exclude O$_2$ and H$_2$O."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two of: paint, oil/grease, plastic coating, tin plating, keeping dry.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Paint; oil; plastic; tin plating.",
          "commonErrors": [
                    "Listing galvanising — that is sacrificial, not barrier (though it also coats)."
          ]
},
        },
        {
          id: "ech11-u10-preventing-corrosion-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a zinc coating protects iron even if it is scratched.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Sacrificial protection",
                              "statement": "More reactive metal corrodes preferentially."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Zinc is more reactive than iron in the reactivity series.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Zinc oxidises/corrodes preferentially, even where scratched.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The iron is protected because the zinc 'sacrifices' itself.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Zn more reactive → corrodes first, protecting Fe even when scratched.",
          "commonErrors": [
                    "Saying the zinc just covers the iron — it works chemically by corroding first."
          ]
},
        },
        {
          id: "ech11-u10-preventing-corrosion-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Different methods are used to protect iron and steel structures.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe how paint and oil protect iron.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe how galvanising protects steel.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one situation where sacrificial anodes are preferred to paint.",
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
                              "name": "Corrosion protection",
                              "statement": "Barrier or sacrificial."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Paint/oil form a barrier excluding oxygen and water.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Zinc coating is more reactive and corrodes preferentially, protecting the steel.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Underground pipelines or ship hulls where paint is hard to maintain and scratches are likely.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) barrier (b) sacrificial Zn (c) buried/submerged structures.",
          "commonErrors": [
                    "Saying galvanising only works as a barrier — it also protects sacrificially."
          ]
},
        },
        {
          id: "ech11-u10-preventing-corrosion-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A bicycle frame, a garden gate and a ship's hull all need protection from corrosion.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest a suitable protection method for each and justify your choice.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain why different methods suit different applications.",
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
                              "name": "Choosing protection",
                              "statement": "Match method to environment and maintenance."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Bicycle frame: paint or powder coating — cheap, attractive, easy to maintain.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Garden gate: galvanising or paint — outdoor exposure, needs durability.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Ship hull: sacrificial zinc anodes — constantly wet, scratches inevitable, cannot repaint easily.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Environment (wet/salty vs dry), accessibility for maintenance, and cost determine the best method.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "A method that works on a gate may be impractical or insufficient on a constantly submerged hull.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) paint/powder coat; galvanise/paint; sacrificial anodes (b) environment + maintenance decide.",
          "commonErrors": [
                    "Using paint on a submerged hull — impractical; sacrificial anodes better."
          ]
},
        },
        {
          id: "ech11-u10-preventing-corrosion-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A steel bridge in a coastal area needs protection from rusting for 50 years.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why coastal locations are particularly corrosive.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Evaluate three protection methods: paint, galvanising, and sacrificial anodes.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Recommend a method and justify your choice.",
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
                              "name": "Coastal corrosion",
                              "statement": "Salt air/water accelerates rusting."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Salt (electrolyte) in air/water speeds up the electrochemical corrosion.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Constant moisture and salt spray provide ideal rusting conditions.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Paint: cheap barrier but needs regular maintenance; scratches expose steel.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Galvanising: durable zinc coating, sacrificial even if scratched, but expensive for large structures.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sacrificial anodes: good for submerged parts but need replacement; not practical for entire bridge.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Combination often used: galvanised steel + paint/topcoat.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Recommend galvanising with paint topcoat or stainless steel components.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Justify: 50-year life justifies higher initial cost; salt environment demands strong protection.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) salt accelerates corrosion (b) paint cheap/needs upkeep, galvanise durable/expensive, anodes for submerged (c) galvanise + paint justified by 50-yr life.",
          "commonErrors": [
                    "Recommending paint alone — will need constant maintenance in salt air."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech11-u10-corrosion-notes",
      title: "Corrosion and protection — notes",
      summary: "Rust = hydrated iron(III) oxide; needs O$_2$ + H$_2$O. Protect by barrier (paint/oil) or sacrificial (Zn coating, Mg/Zn anodes) or alloy (stainless steel).",
      sections: [
        { heading: "Rusting facts", body: "Iron + O$_2$ + H$_2$O → hydrated Fe$_2$O$_3$·xH$_2$O (rust). Both O$_2$ and water needed. Salt speeds it up. Rust flakes → corrosion continues." },
        { heading: "Why Al doesn't rust", body: "Al$_2$O$_3$ layer is thin, adherent, impermeable — protects metal. Rust is porous and falls off." },
        { heading: "Protection methods", body: "Barrier: paint, oil, plastic, tin. Sacrificial: galvanising (Zn), Mg/Zn anodes. Alloy: stainless steel. Choose by environment + maintenance." },
      ],
    },
  ],
};
