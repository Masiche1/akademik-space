import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ebi11-u7-lesson-7-1",
  code: "7-1",
  title: "Diffusion",
  goal: "I CAN define diffusion, explain its direction and role in cells, and describe factors affecting its rate.",
  standards: ["4BI1 2.15", "4BI1 2.16"],
  
  vocabulary: [
    { term: "Diffusion", definition: "Net movement of particles from higher to lower concentration down a concentration gradient." },
    { term: "Concentration gradient", definition: "Difference in concentration of a substance between two regions." },
    { term: "Passive process", definition: "Movement that does not require energy from respiration." },
    { term: "Surface area", definition: "Area through which substances can move; larger area increases rate." },
    { term: "Kinetic energy", definition: "Energy of movement of particles; increases with temperature." },
    { term: "Exchange surface", definition: "Thin, large surface across which diffusion occurs." },
  ],
  concepts: [
    {
      id: "ebi11-u7-diffusion",
      title: "Diffusion and its direction",
      skill: "Define diffusion and explain why substances move down concentration gradients.",
      lesson: {
        sections: [
          {
            heading: "What diffusion is",
            body: "Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient. It is a passive process and needs no energy from respiration. Particles move randomly; net movement is from high to low concentration until equilibrium is reached.",
          },
          {
            heading: "Examples in organisms",
            body: "Oxygen diffuses into respiring cells and carbon dioxide diffuses out. Gases diffuse across alveoli and stomata. Dissolved substances diffuse across capillary walls into cells. Diffusion explains gas exchange in lungs, leaves and gills.",
          },
          {
            heading: "Equilibrium",
            body: "Diffusion continues until concentrations are equal on both sides. Even then particles keep moving randomly, but there is no net movement.",
          },
        ],
        keyFormulas: [
          { name: "Diffusion", statement: "High concentration → low concentration; passive" },
          { name: "Equilibrium", statement: "Net movement stops when concentrations equal" },
        ],
        workedExample: {
          problem: "Why does oxygen enter respiring cells by diffusion?",
          solution: "Oxygen concentration is higher in blood/tissues outside the cell than inside the respiring cell, so oxygen diffuses down its concentration gradient into the cell.",
        },
      },
      questions: [
        {
          id: "ebi11-u7-diff-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What drives diffusion?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Concentration gradient"
                    },
                    {
                              "id": "b",
                              "text": "Energy from respiration"
                    },
                    {
                              "id": "c",
                              "text": "Cell wall"
                    },
                    {
                              "id": "d",
                              "text": "Osmosis only"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Diffusion",
                              "statement": "Net movement down concentration gradient."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Diffusion is driven by concentration gradient.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Concentration gradient"
},
        },
        {
          id: "ebi11-u7-diff-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define diffusion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Diffusion",
                              "statement": "Particles move high→low concentration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Net movement of particles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "From higher to lower concentration.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Particles move high→low concentration"
},
        },
        {
          id: "ebi11-u7-diff-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why diffusion is described as passive.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Passive process",
                              "statement": "No energy from respiration needed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Particles move randomly down gradient.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "No energy from respiration required.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Movement continues until equilibrium.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Passive = no energy required"
},
        },
        {
          id: "ebi11-u7-diff-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Give two examples of diffusion in living organisms.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Diffusion examples",
                              "statement": "Gases and dissolved substances move down gradients."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Oxygen into respiring cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Carbon dioxide out of cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gases across alveoli/stomata.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Dissolved substances across capillaries.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Oxygen in; CO2 out; gases across exchange surfaces"
},
        },
        {
          id: "ebi11-u7-diff-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain what happens to diffusion when concentrations become equal on both sides of a membrane.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain net movement before equilibrium.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain state at equilibrium.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give example.",
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
                              "name": "Diffusion equilibrium",
                              "statement": "Net movement stops when concentrations equal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Before equilibrium, net movement is down gradient.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "At equilibrium, concentrations equal and net movement stops.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Example: oxygen across alveolus until blood equilibrates.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Diffusion stops net movement at equilibrium"
},
        },
        {
          id: "ebi11-u7-diff-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define diffusion. (b) Explain why it is passive. (c) State direction of net movement. (d) Give two examples. (e) Explain equilibrium. (f) Explain why oxygen enters respiring cells.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Definition.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Passive.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Direction.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Examples.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Equilibrium.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Oxygen entry.",
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
                              "name": "Diffusion",
                              "statement": "Passive movement down concentration gradient."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Particles move high→low concentration.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "No energy required.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Down concentration gradient.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Oxygen into cells; CO2 out; gases across alveoli/stomata.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "d"
                    },
                    {
                              "reasoning": "Net movement stops when concentrations equal.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "e"
                    },
                    {
                              "reasoning": "Oxygen concentration higher outside cell; diffuses into respiring cell.",
                              "marks": 3,
                              "markCode": "M",
                              "part": "f"
                    }
          ],
          "finalAnswer": "Diffusion is passive movement down concentration gradients."
},
        },
      ],
    },
    {
      id: "ebi11-u7-diffusion-factors",
      title: "Factors affecting diffusion rate",
      skill: "Explain how surface area, distance, temperature and concentration gradient affect diffusion rate.",
      lesson: {
        sections: [
          {
            heading: "Factors",
            body: "Diffusion rate increases with: larger surface area (more membrane for exchange), shorter distance (particles travel less far), higher temperature (particles have more kinetic energy and move faster), and steeper concentration gradient (bigger difference drives faster net movement).",
          },
          {
            heading: "Surface area to volume ratio",
            body: "Small cells have a large surface-area-to-volume ratio, so substances diffuse quickly. As objects get bigger, volume grows faster than surface area, so the ratio falls. Large organisms need specialised transport systems because diffusion alone is too slow for distant cells.",
          },
          {
            heading: "Exchange surfaces",
            body: "Efficient exchange surfaces are thin (short diffusion distance), large (large surface area) and well supplied with blood or air (maintains gradient). Alveoli, villi, gills and stomata are examples.",
          },
        ],
        keyFormulas: [
          { name: "Diffusion rate", statement: "Increases with surface area, temperature, gradient; decreases with distance" },
          { name: "SA:V", statement: "Smaller cells have larger surface-area-to-volume ratio" },
          { name: "Exchange surface", statement: "Thin + large + good supply = efficient diffusion" },
        ],
        workedExample: {
          problem: "Why do small cells exchange substances faster than large cells?",
          solution: "Small cells have a larger surface-area-to-volume ratio, so more membrane is available per unit volume for diffusion.",
        },
      },
      questions: [
        {
          id: "ebi11-u7-factor-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which factor increases diffusion rate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Steeper concentration gradient"
                    },
                    {
                              "id": "b",
                              "text": "Greater distance"
                    },
                    {
                              "id": "c",
                              "text": "Lower temperature"
                    },
                    {
                              "id": "d",
                              "text": "Smaller surface area"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Diffusion factors",
                              "statement": "Steeper gradient increases rate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Steeper gradient increases diffusion.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Steeper concentration gradient"
},
        },
        {
          id: "ebi11-u7-factor-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two factors that affect diffusion rate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Diffusion factors",
                              "statement": "Surface area, distance, temperature, gradient."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Temperature.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Concentration gradient/surface area/distance.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Temperature; concentration gradient/surface area/distance"
},
        },
        {
          id: "ebi11-u7-factor-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why higher temperature increases diffusion rate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Temperature and diffusion",
                              "statement": "Higher temperature increases particle kinetic energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Particles move faster.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More collisions with membrane occur.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Net movement down gradient increases.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Higher temperature → faster particle movement → faster diffusion"
},
        },
        {
          id: "ebi11-u7-factor-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why small cells have an advantage for diffusion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "SA:V ratio",
                              "statement": "Small cells have larger surface area relative to volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Small cells have larger SA:V ratio.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More membrane per unit volume.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Substances diffuse more quickly.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Large cells need transport systems.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Small cells exchange faster due to SA:V"
},
        },
        {
          id: "ebi11-u7-factor-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why exchange surfaces such as alveoli are thin and large.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain thin barrier.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain large surface area.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain blood supply.",
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
                              "name": "Exchange surface",
                              "statement": "Thin, large and well-supplied surfaces favour diffusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thin barrier shortens diffusion distance.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Large surface area increases exchange area.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Blood supply maintains concentration gradient.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Thin + large + supplied = efficient exchange"
},
        },
        {
          id: "ebi11-u7-factor-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) State four factors affecting diffusion rate. (b) Explain temperature effect. (c) Explain SA:V ratio. (d) Explain why large organisms need transport systems. (e) Describe features of efficient exchange surface. (f) Give one example.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Factors.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Temperature.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "SA:V.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Large organisms.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Exchange surface.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Example.",
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
                              "name": "Diffusion factors",
                              "statement": "Rate depends on gradient, temperature, area and distance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Surface area, distance, temperature, concentration gradient.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Higher temperature increases kinetic energy and collisions.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Small cells have larger SA:V ratio.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Diffusion too slow for distant cells.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "d"
                    },
                    {
                              "reasoning": "Thin, large, moist, well-supplied.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "e"
                    },
                    {
                              "reasoning": "Example: alveoli, villi, gills, stomata.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "f"
                    }
          ],
          "finalAnswer": "Diffusion rate depends on gradient, temperature, surface area and distance."
},
        },
      ],
    },
  ],

};
