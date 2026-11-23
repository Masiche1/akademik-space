import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ebi11-u7-lesson-7-2",
  code: "7-2",
  title: "Osmosis",
  goal: "I CAN define osmosis, explain its direction and effects on plant and animal cells.",
  standards: ["4BI1 2.15", "4BI1 2.16", "4BI1 2.17"],
  
  vocabulary: [
    { term: "Osmosis", definition: "Net movement of water through a partially permeable membrane from dilute to concentrated solution." },
    { term: "Partially permeable membrane", definition: "Membrane allowing small molecules such as water through but not larger ones." },
    { term: "Dilute solution", definition: "Solution with relatively high water concentration and low solute concentration." },
    { term: "Concentrated solution", definition: "Solution with relatively low water concentration and high solute concentration." },
    { term: "Turgid", definition: "Plant cell swollen with water; cytoplasm presses against cell wall." },
    { term: "Plasmolysis", definition: "Shrinkage of plant cell cytoplasm away from cell wall due to water loss." },
  ],
  concepts: [
    {
      id: "ebi11-u7-osmosis",
      title: "Osmosis and its direction",
      skill: "Define osmosis and explain water movement through partially permeable membranes.",
      lesson: {
        sections: [
          {
            heading: "What osmosis is",
            body: "Osmosis is the net movement of water molecules through a partially permeable membrane from a dilute solution (high water concentration) to a more concentrated solution (low water concentration). It is passive and needs no energy. Solute molecules cannot pass through the membrane, so only water moves.",
          },
          {
            heading: "Why water moves",
            body: "Water molecules move randomly in both directions, but there are more on the dilute side. Net movement is therefore from dilute to concentrated solution. The solute concentration on the concentrated side effectively 'pulls' water across the membrane.",
          },
          {
            heading: "Examples",
            body: "Osmosis explains water uptake by root hair cells, wilting in dry conditions and kidney water reabsorption. In experiments, potato cylinders or Visking tubing in sucrose solutions show mass/length changes due to water movement.",
          },
        ],
        keyFormulas: [
          { name: "Osmosis", statement: "Water: dilute → concentrated through partially permeable membrane" },
          { name: "Partially permeable", statement: "Allows water/small molecules; blocks large molecules" },
        ],
        workedExample: {
          problem: "A potato cylinder is placed in strong sucrose solution and becomes flaccid. Explain.",
          solution: "Water leaves the potato cells by osmosis into the more concentrated sucrose solution. Cells lose turgor and become flaccid.",
        },
      },
      questions: [
        {
          id: "ebi11-u7-osmo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What moves during osmosis?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Solute molecules"
                    },
                    {
                              "id": "b",
                              "text": "Water molecules"
                    },
                    {
                              "id": "c",
                              "text": "Proteins"
                    },
                    {
                              "id": "d",
                              "text": "Ions only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Osmosis",
                              "statement": "Net movement of water through membrane."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Water molecules move.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Water molecules"
},
        },
        {
          id: "ebi11-u7-osmo-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define osmosis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Osmosis",
                              "statement": "Water moves dilute→concentrated through partially permeable membrane."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Movement of water.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Through partially permeable membrane from dilute to concentrated.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Water moves dilute→concentrated through membrane"
},
        },
        {
          id: "ebi11-u7-osmo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why water moves from dilute to concentrated solution during osmosis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Osmosis direction",
                              "statement": "More water molecules on dilute side cause net movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Water molecules move randomly both ways.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More water on dilute side.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Net movement is from dilute to concentrated.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Net water movement dilute→concentrated"
},
        },
        {
          id: "ebi11-u7-osmo-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "State the role of a partially permeable membrane in osmosis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Partially permeable membrane",
                              "statement": "Allows water through but not solutes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Allows water/small molecules through.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Blocks large solute molecules.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Only water can move net.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Creates concentration difference across membrane.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Allows water but blocks solutes"
},
        },
        {
          id: "ebi11-u7-osmo-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain osmosis in root hair cells.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain water potential difference.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain water entry.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Relate to absorption.",
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
                              "name": "Osmosis in roots",
                              "statement": "Water enters root hairs by osmosis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soil water is more dilute than root cell contents.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Water enters root hair cells by osmosis.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "This contributes to water/mineral uptake.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Water enters root hairs by osmosis"
},
        },
        {
          id: "ebi11-u7-osmo-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define osmosis. (b) Define partially permeable membrane. (c) Explain direction of water movement. (d) Give two examples. (e) Explain why osmosis is passive. (f) State what happens to solute molecules.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Osmosis.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Membrane.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Direction.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Examples.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Passive.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Solutes.",
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
                              "name": "Osmosis",
                              "statement": "Water movement through partially permeable membrane."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Water moves dilute→concentrated.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Allows water but not solutes.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Net movement from dilute to concentrated solution.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Root hair uptake; kidney water reabsorption.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "d"
                    },
                    {
                              "reasoning": "No energy required.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "e"
                    },
                    {
                              "reasoning": "Solutes cannot pass; only water moves net.",
                              "marks": 3,
                              "markCode": "R",
                              "part": "f"
                    }
          ],
          "finalAnswer": "Osmosis is passive water movement through partially permeable membranes."
},
        },
      ],
    },
    {
      id: "ebi11-u7-osmosis-effects",
      title: "Osmosis in plant and animal cells",
      skill: "Explain the effects of osmosis on plant and animal cells in different solutions.",
      lesson: {
        sections: [
          {
            heading: "Plant cells",
            body: "In distilled water, water enters plant cells by osmosis; cells become **turgid** (swollen, cytoplasm presses against cell wall). In concentrated solution, water leaves; cytoplasm shrinks from cell wall in **plasmolysis**. In isotonic solution, no net water movement; cells are flaccid.",
          },
          {
            heading: "Animal cells",
            body: "Animal cells have no cell wall. In dilute solution, water enters and cells may burst (**lysis**). In concentrated solution, water leaves and cells shrink (**crenation**). In isotonic solution, no net movement. Red blood cells are normally in isotonic plasma.",
          },
          {
            heading: "Investigating osmosis",
            body: "Potato cylinders or Visking tubing in sucrose solutions show mass/length changes. Measure percentage change in mass = (final − initial)/initial × 100. The concentration where mass does not change is isotonic. Controls: same temperature, time and cylinder size.",
          },
        ],
        keyFormulas: [
          { name: "Turgid", statement: "Plant cell swollen; cytoplasm presses to wall" },
          { name: "Plasmolysis", statement: "Plant cell cytoplasm shrinks from wall" },
          { name: "Lysis/crenation", statement: "Animal cell bursts/shrinks in hypo/hypertonic solution" },
          { name: "Percentage change", statement: "$\\frac{\\text{final} - \\text{initial}}{\\text{initial}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "A plant cell loses water in salt solution. What is this called?",
          solution: "Plasmolysis — cytoplasm shrinks away from cell wall due to water loss by osmosis.",
        },
      },
      questions: [
        {
          id: "ebi11-u7-cellosmo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to a plant cell in distilled water?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It shrinks"
                    },
                    {
                              "id": "b",
                              "text": "It becomes turgid"
                    },
                    {
                              "id": "c",
                              "text": "It bursts"
                    },
                    {
                              "id": "d",
                              "text": "It plasmolyses"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Turgid",
                              "statement": "Plant cell swollen with water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plant cell becomes turgid.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** It becomes turgid"
},
        },
        {
          id: "ebi11-u7-cellosmo-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the process when plant cytoplasm shrinks away from cell wall.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Plasmolysis",
                              "statement": "Cytoplasm shrinks from wall due to water loss."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plasmolysis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Caused by water loss.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Plasmolysis"
},
        },
        {
          id: "ebi11-u7-cellosmo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what happens to an animal cell in concentrated solution.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Animal cell osmosis",
                              "statement": "Water leaves; cell shrinks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Water leaves by osmosis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cell shrinks/crenates.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "No cell wall to resist.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Water leaves; cell shrinks"
},
        },
        {
          id: "ebi11-u7-cellosmo-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare plant and animal cell responses to osmosis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Plant vs animal osmosis",
                              "statement": "Cell wall prevents bursting; animal cells lyse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plant cells become turgid/plasmolysed; animal cells lyse/crenate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cell wall prevents plant cell bursting.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Animal cells lack cell wall.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Isotonic solutions prevent net movement in both.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Plant turgid/plasmolysed; animal lyse/crenate"
},
        },
        {
          id: "ebi11-u7-cellosmo-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe an investigation of osmosis using potato cylinders in sucrose solutions.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State variables and controls.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe method.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State measurement and interpretation.",
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
                              "name": "Osmosis investigation",
                              "statement": "Measure mass/length change in different sucrose concentrations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Independent: sucrose concentration; dependent: % mass change; control temperature/time/size.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Cut equal cylinders, weigh, place in solutions, reweigh after fixed time.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Gain = water entered; loss = water left; compare to isotonic point.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Control variables and measure mass change in sucrose"
},
        },
        {
          id: "ebi11-u7-cellosmo-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define turgid and plasmolysis. (b) Explain plant cell in distilled water. (c) Explain plant cell in concentrated solution. (d) Explain animal cell in dilute and concentrated solutions. (e) Describe osmosis investigation. (f) State formula for percentage mass change.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Turgid/plasmolysis.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Distilled water.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Concentrated solution.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Animal cells.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Investigation.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Formula.",
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
                              "name": "Osmosis effects",
                              "statement": "Water movement changes cell turgor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Turgid = water gain; plasmolysis = water loss shrinking cytoplasm.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Distilled water: water enters; cell turgid.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Concentrated: water leaves; plasmolysis.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Dilute: water enters, cell may burst; concentrated: water leaves, cell shrinks.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "d"
                    },
                    {
                              "reasoning": "Potato cylinders in sucrose; measure mass change.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "e"
                    },
                    {
                              "reasoning": "(final − initial)/initial × 100%.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "f"
                    }
          ],
          "finalAnswer": "Osmosis changes cell turgor; plant and animal cells respond differently."
},
        },
      ],
    },
  ],

};
