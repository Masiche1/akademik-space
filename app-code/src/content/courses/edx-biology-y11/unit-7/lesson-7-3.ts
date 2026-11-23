import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ebi11-u7-lesson-7-3",
  code: "7-3",
  title: "Active Transport and Membrane Investigations",
  goal: "I CAN describe active transport, the factors affecting membrane transport rates and investigations of diffusion and osmosis.",
  standards: ["4BI1 2.15", "4BI1 2.16", "4BI1 2.17"],
  
  vocabulary: [
    { term: "Active transport", definition: "Movement of substances against concentration gradient using energy from respiration." },
    { term: "Carrier protein", definition: "Membrane protein that transports substances during active transport." },
    { term: "Concentration gradient", definition: "Difference in concentration between two regions." },
    { term: "Surface area to volume ratio", definition: "Ratio of surface area to volume; larger in small cells." },
    { term: "Agar cube", definition: "Non-living cube used to investigate diffusion." },
    { term: "Visking tubing", definition: "Partially permeable membrane tubing used in osmosis experiments." },
  ],
  concepts: [
    {
      id: "ebi11-u7-active-transport",
      title: "Active transport",
      skill: "Describe active transport, its energy requirement and examples.",
      lesson: {
        sections: [
          {
            heading: "What active transport is",
            body: "Active transport moves substances against their concentration gradient, from low to high concentration. It requires energy from respiration and carrier proteins in the membrane. Examples include uptake of mineral ions by root hair cells and glucose absorption in the ileum when gut glucose concentration is low.",
          },
          {
            heading: "Why it is needed",
            body: "Diffusion and osmosis move substances down gradients, but cells sometimes need to move substances against gradients. Active transport allows cells to concentrate essential ions or absorb nutrients even when outside concentration is lower.",
          },
          {
            heading: "Energy dependence",
            body: "Active transport uses ATP from respiration. If respiration is inhibited, active transport stops. This is why root hair cells and intestinal cells contain many mitochondria.",
          },
        ],
        keyFormulas: [
          { name: "Active transport", statement: "Low → high concentration; requires energy" },
          { name: "Carrier protein", statement: "Membrane protein transports substances" },
          { name: "Energy source", statement: "ATP from respiration" },
        ],
        workedExample: {
          problem: "Why can root hair cells absorb nitrate ions from very dilute soil?",
          solution: "Nitrate concentration in soil may be lower than in root cells. Active transport uses energy to move nitrate ions against the concentration gradient into root hair cells.",
        },
      },
      questions: [
        {
          id: "ebi11-u7-active-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process moves substances against a concentration gradient?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Diffusion"
                    },
                    {
                              "id": "b",
                              "text": "Osmosis"
                    },
                    {
                              "id": "c",
                              "text": "Photosynthesis"
                    },
                    {
                              "id": "d",
                              "text": "Active transport"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Active transport",
                              "statement": "Movement against gradient using energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Active transport moves against gradient.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(d)** Active transport"
},
        },
        {
          id: "ebi11-u7-active-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What energy source does active transport use?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Active transport",
                              "statement": "Requires energy from respiration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Energy from respiration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Used to move substances against gradient.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Energy from respiration"
},
        },
        {
          id: "ebi11-u7-active-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why active transport is needed in root hair cells.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Active transport in roots",
                              "statement": "Mineral ions may be scarcer outside than inside cells."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mineral ions in soil can be dilute.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Root cells need ions even when external concentration is lower.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Active transport uses energy to move ions against gradient.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Active transport moves ions against gradient into roots"
},
        },
        {
          id: "ebi11-u7-active-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Give two examples of active transport in organisms.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Active transport examples",
                              "statement": "Mineral uptake and glucose absorption."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mineral ion uptake in root hair cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Glucose absorption in ileum when concentration low.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both move against gradient using energy.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Carrier proteins involved.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Root mineral uptake; intestinal glucose absorption"
},
        },
        {
          id: "ebi11-u7-active-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why active transport stops if respiration is inhibited.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain energy source.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain carrier protein role.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Relate to mitochondria.",
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
                              "name": "Active transport energy",
                              "statement": "Requires ATP from respiration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Active transport uses ATP from respiration.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Carrier proteins move substances against gradient.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Cells with active transport have many mitochondria.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Active transport depends on respiration energy"
},
        },
        {
          id: "ebi11-u7-active-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define active transport. (b) State energy source. (c) Give two examples. (d) Explain why root hair cells use it. (e) Explain effect of respiration inhibition. (f) Compare with diffusion.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Definition.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Energy.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Examples.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Root cells.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Respiration inhibition.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "vs diffusion.",
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
                              "name": "Active transport",
                              "statement": "Movement against gradient using energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Movement against concentration gradient.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Energy from respiration/ATP.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Root mineral uptake; intestinal glucose absorption.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Mineral ions may be dilute outside but needed inside.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "d"
                    },
                    {
                              "reasoning": "No ATP → active transport stops.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "e"
                    },
                    {
                              "reasoning": "Diffusion passive down gradient; active transport against gradient using energy.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "f"
                    }
          ],
          "finalAnswer": "Active transport moves substances against gradients using respiration energy."
},
        },
      ],
    },
    {
      id: "ebi11-u7-investigations",
      title: "Investigating membrane transport",
      skill: "Describe investigations of diffusion and osmosis and interpret results.",
      lesson: {
        sections: [
          {
            heading: "Diffusion investigation",
            body: "Diffusion can be investigated with agar cubes containing indicator and acid. Cut cubes of different sizes, place in acid and time colour change. Smaller cubes change faster because diffusion distance is shorter. Controls: same concentration, temperature and indicator. Alternatively use non-living systems such as potassium permanganate in water.",
          },
          {
            heading: "Osmosis investigation",
            body: "Osmosis can be investigated with Visking tubing or potato cylinders in sucrose solutions. Measure mass/length change after fixed time. Gain indicates water entered; loss indicates water left. Controls: same temperature, time, cylinder size and initial mass. The concentration where no mass change is isotonic.",
          },
          {
            heading: "Data handling",
            body: "Calculate percentage change in mass = (final − initial)/initial × 100. Plot against sucrose concentration; identify isotonic point where line crosses zero. Repeat trials and calculate mean to improve reliability. Variables must be controlled for valid comparison.",
          },
        ],
        keyFormulas: [
          { name: "Diffusion investigation", statement: "Agar cubes; smaller cubes change faster" },
          { name: "Osmosis investigation", statement: "Potato/Visking tubing; measure mass change in sucrose" },
          { name: "Percentage change", statement: "$\\frac{\\text{final} - \\text{initial}}{\\text{initial}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "A potato cylinder gains 0.4 g in 0.8 M sucrose and loses 0.2 g in 1.0 M. What does this show?",
          solution: "Water entered in 0.8 M (hypotonic) and left in 1.0 M (hypertonic). The isotonic point is between these concentrations.",
        },
      },
      questions: [
        {
          id: "ebi11-u7-inv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which equipment is used to investigate osmosis?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Agar cube"
                    },
                    {
                              "id": "b",
                              "text": "Visking tubing/potato cylinder"
                    },
                    {
                              "id": "c",
                              "text": "Bunsen burner"
                    },
                    {
                              "id": "d",
                              "text": "Microscope slide only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Osmosis investigation",
                              "statement": "Visking tubing or potato in sucrose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Visking tubing/potato used.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Visking tubing/potato cylinder"
},
        },
        {
          id: "ebi11-u7-inv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is measured in a potato osmosis experiment?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Osmosis measurement",
                              "statement": "Mass or length change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mass change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Or length change.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Mass or length change"
},
        },
        {
          id: "ebi11-u7-inv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why smaller agar cubes show faster diffusion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Diffusion distance",
                              "statement": "Shorter distance → faster diffusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Smaller cubes have shorter diffusion distance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Indicator reaches centre faster.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Rate depends on distance not just surface area.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Shorter distance → faster diffusion"
},
        },
        {
          id: "ebi11-u7-inv-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how to investigate osmosis using potato cylinders.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Potato osmosis",
                              "statement": "Measure mass change in sucrose solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cut equal cylinders and weigh.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Place in different sucrose concentrations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reweigh after fixed time and calculate % change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compare to find isotonic point.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Measure mass change in sucrose solutions"
},
        },
        {
          id: "ebi11-u7-inv-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how to make an osmosis investigation fair and reliable.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State controlled variables.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe repeats/mean.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State calculation.",
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
                              "name": "Fair osmosis test",
                              "statement": "Control variables; repeat trials; calculate mean."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Control temperature, time, cylinder size and initial mass.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Repeat trials and calculate mean % change.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Calculate (final − initial)/initial × 100%.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Control variables, repeat, calculate % change"
},
        },
        {
          id: "ebi11-u7-inv-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Describe diffusion investigation with agar. (b) Describe osmosis investigation with potato. (c) State controlled variables. (d) Explain why smaller agar changes faster. (e) State formula for % mass change. (f) Explain what isotonic means.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Agar diffusion.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Potato osmosis.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Controls.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Smaller agar.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Formula.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Isotonic.",
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
                              "name": "Membrane transport investigations",
                              "statement": "Measure diffusion/osmosis under controlled conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Agar cubes in acid; time colour change; smaller faster.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Potato cylinders in sucrose; measure mass change.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Control temperature, time, size/concentration.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Shorter diffusion distance.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "d"
                    },
                    {
                              "reasoning": "(final − initial)/initial × 100%.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "e"
                    },
                    {
                              "reasoning": "Isotonic = no net water movement.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "f"
                    }
          ],
          "finalAnswer": "Investigations measure diffusion/osmosis under controlled conditions."
},
        },
      ],
    },
  ],

};
