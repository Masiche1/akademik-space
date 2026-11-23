import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "ebi11-u9-lesson-9-2",
  code: "9-2",
  title: "Blood Components and Circulation",
  goal: "I CAN describe the components of blood and their functions in transport and defence.",
  standards: ["Edexcel IGCSE Biology 4BI1 — Transport", "4BI1 blood"],
  
  vocabulary: [
    { term: "Plasma", definition: "Pale yellow liquid component of blood carrying dissolved substances." },
    { term: "Red blood cell", definition: "Biconcave cell containing haemoglobin that transports oxygen." },
    { term: "Haemoglobin", definition: "Iron-containing protein that binds oxygen reversibly." },
    { term: "White blood cell", definition: "Cell that defends against pathogens by phagocytosis or antibody production." },
    { term: "Platelet", definition: "Cell fragment that helps blood clot at wounds." },
    { term: "Tissue fluid", definition: "Fluid bathing cells formed from blood plasma at capillaries." },
    { term: "Lymph", definition: "Fluid drained from tissues into lymph vessels, returning to blood." },
  ],
  concepts: [
    {
      id: "ebi11-u9-components",
      title: "Components of blood",
      skill: "Describe plasma, red and white blood cells and platelets and their functions.",
      lesson: {
        sections: [
          {
            heading: "Plasma",
            body: "Pale yellow liquid (~55% of blood). Transports dissolved substances: nutrients (glucose, amino acids), carbon dioxide, urea, hormones, antibodies and plasma proteins (e.g. fibrinogen for clotting).",
          },
          {
            heading: "Red blood cells",
            body: "Biconcave discs with no nucleus — more room for haemoglobin. Haemoglobin contains iron and binds oxygen in the lungs to form oxyhaemoglobin, releasing it in tissues. They also carry some carbon dioxide. Short lifespan (~120 days) replaced in bone marrow.",
          },
          {
            heading: "White blood cells and platelets",
            body: "White blood cells defend against disease: some engulf pathogens (phagocytes), others produce antibodies. Platelets are cell fragments that trigger clotting — fibrin forms a mesh sealing wounds to prevent blood loss and infection.",
          },
        ],
        keyFormulas: [
          { name: "Haemoglobin", statement: "Fe-containing protein; binds O2 reversibly" },
          { name: "RBC adaptations", statement: "No nucleus + biconcave → max haemoglobin/SA" },
        ],
        workedExample: {
          problem: "Why do red blood cells have no nucleus?",
          solution: "Removing the nucleus leaves more space for haemoglobin, increasing oxygen-carrying capacity; the biconcave shape also increases surface area.",
        },
      },
      questions: [
        {
          id: "ebi11-u9-comp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which blood component transports oxygen?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Plasma"
                    },
                    {
                              "id": "b",
                              "text": "White blood cell"
                    },
                    {
                              "id": "c",
                              "text": "Platelet"
                    },
                    {
                              "id": "d",
                              "text": "Red blood cell"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "RBC",
                              "statement": "Contains haemoglobin for O2 transport."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "RBCs carry oxygen via haemoglobin.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(d)** Red blood cell"
},
        },
        {
          id: "ebi11-u9-comp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the function of platelets.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Platelets",
                              "statement": "Clotting at wounds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Platelets help blood clot to seal wounds.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Blood clotting"
},
        },
        {
          id: "ebi11-u9-comp-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two adaptations of red blood cells for oxygen transport.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "RBC adaptations",
                              "statement": "No nucleus, biconcave shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "No nucleus — more space for haemoglobin.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Biconcave shape increases surface area for gas exchange.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Haemoglobin binds oxygen reversibly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Flexible shape allows passage through capillaries.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "No nucleus + biconcave → max O2 carriage"
},
        },
        {
          id: "ebi11-u9-comp-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe the roles of plasma, red cells, white cells and platelets in the blood.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Blood components",
                              "statement": "Plasma, RBC, WBC, platelets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plasma transports dissolved substances.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "RBCs transport oxygen via haemoglobin.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "WBCs defend against pathogens.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Platelets clot wounds.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All four correctly described.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Plasma transport; RBC O2; WBC defence; platelets clot"
},
        },
        {
          id: "ebi11-u9-comp-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the four components of blood.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the function of haemoglobin.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why iron deficiency causes tiredness.",
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
                              "name": "Blood",
                              "statement": "Components and functions."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Plasma, red cells, white cells, platelets.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Binds oxygen reversibly for transport.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Less haemoglobin → less oxygen delivered → fatigue.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4 components; haemoglobin binds O2; Fe deficiency → anaemia"
},
        },
        {
          id: "ebi11-u9-comp-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Name the four blood components. (b) State the function of each. (c) What is haemoglobin made of? (d) Why do RBCs lack a nucleus? (e) What is the role of platelets?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Components.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Functions.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Haemoglobin composition.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "No nucleus reason.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Platelets.",
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
                              "name": "Blood",
                              "statement": "Plasma, RBC, WBC, platelets."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Plasma, RBCs, WBCs, platelets.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Transport; O2 carriage; defence; clotting.",
                              "marks": 4,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Protein containing iron.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "More room for haemoglobin.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Clotting — fibrin mesh seals wounds.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Components+functions; Fe protein; no nucleus; clotting"
},
        },
      ],
    },
    {
      id: "ebi11-u9-exchange",
      title: "Capillary exchange and tissue fluid",
      skill: "Explain exchange at capillaries and the formation of tissue fluid and lymph.",
      lesson: {
        sections: [
          {
            heading: "Capillary exchange",
            body: "At capillaries, blood pressure forces water and small dissolved substances out into tissue fluid. Oxygen and nutrients diffuse out; carbon dioxide and wastes diffuse in. Red cells cannot pass through capillary walls. Exchange follows concentration gradients.",
          },
          {
            heading: "Tissue fluid and lymph",
            body: "Tissue fluid bathes cells, supplying nutrients and removing wastes. Most fluid returns to blood at the venule end as pressure drops; some enters lymph vessels (lymph). Lymph drains back into blood via the thoracic duct. Lymph also carries white blood cells.",
          },
          {
            heading: "Circulation summary",
            body: "Arteries → arterioles → capillaries → venules → veins. Double circulation: pulmonary (heart→lungs→heart) and systemic (heart→body→heart). The heart pumps via atria/ventricles; valves prevent backflow.",
          },
        ],
        keyFormulas: [
          { name: "Exchange", statement: "Hydrostatic pressure out; diffusion gradients exchange gases/nutrients" },
          { name: "Lymph", statement: "Tissue fluid drained via lymph vessels back to blood" },
        ],
        workedExample: {
          problem: "Describe what happens to blood at a capillary bed.",
          solution: "Blood pressure pushes plasma out forming tissue fluid; O2/nutrients diffuse to cells, CO2/wastes diffuse back in; fluid mostly returns to venules, excess drains as lymph.",
        },
      },
      questions: [
        {
          id: "ebi11-u9-exch-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is tissue fluid?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Blood plasma in vessels"
                    },
                    {
                              "id": "b",
                              "text": "Fluid bathing body cells formed from plasma"
                    },
                    {
                              "id": "c",
                              "text": "Lymph in vessels"
                    },
                    {
                              "id": "d",
                              "text": "Digestive juice"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tissue fluid",
                              "statement": "Plasma-derived fluid bathing cells."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tissue fluid bathes cells, from plasma.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Fluid bathing cells"
},
        },
        {
          id: "ebi11-u9-exch-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the vessels that drain excess tissue fluid back to blood.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lymph vessels",
                              "statement": "Drain tissue fluid as lymph."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lymph vessels collect tissue fluid and return it to blood.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Lymph vessels"
},
        },
        {
          id: "ebi11-u9-exch-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how oxygen moves from blood to cells at capillaries.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Diffusion exchange",
                              "statement": "Gases diffuse down concentration gradients."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "O2 concentration higher in blood than in respiring cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "O2 diffuses through one-cell-thick capillary wall.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Then diffuses into tissue fluid and cells.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Short diffusion distance makes this rapid.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "O2 diffuses down gradient through thin capillary wall"
},
        },
        {
          id: "ebi11-u9-exch-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the formation of tissue fluid at capillaries and its return to the blood.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Tissue fluid formation",
                              "statement": "Pressure forces plasma out; osmotic return."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "High blood pressure at arteriole end forces water/small molecules out.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Forms tissue fluid bathing cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "As pressure falls along capillary, fluid re-enters blood at venule end.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Some fluid drains into lymph vessels.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Lymph returns to blood via thoracic duct.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Pressure out → tissue fluid; pressure drop returns; lymph drains excess"
},
        },
        {
          id: "ebi11-u9-exch-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Define tissue fluid.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain how O2 and CO2 are exchanged at capillaries.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "What happens to fluid not returned to blood?",
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
                              "name": "Capillary exchange",
                              "statement": "Diffusion + pressure dynamics."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Fluid from plasma bathing body cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "O2 diffuses out (high→low gradient) to cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "CO2 diffuses in from cells to blood.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Thin capillary wall allows rapid diffusion.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Drains into lymph vessels as lymph.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Lymph returns to blood via thoracic duct.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Tissue fluid; O2 out/CO2 in by diffusion; lymph drains excess"
},
        },
        {
          id: "ebi11-u9-exch-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define tissue fluid. (b) How does O2 move from blood to cells? (c) How does CO2 move from cells to blood? (d) What happens to excess tissue fluid? (e) Why are capillary walls one cell thick?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Tissue fluid.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "O2 movement.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "CO2 movement.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Excess fluid.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Thin wall reason.",
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
                              "name": "Exchange",
                              "statement": "Capillary exchange mechanics."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Plasma-derived fluid bathing cells.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Diffuses down gradient through thin wall to cells.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Diffuses from cells into blood down gradient.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Enters lymph vessels → lymph → blood.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Short diffusion distance for rapid exchange.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Tissue fluid; diffusion exchange; lymph; thin wall = short distance"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebi11-u9-blood-notes",
      title: "Blood — notes",
      summary: "Plasma transports; RBCs carry O2 (haemoglobin); WBCs defend; platelets clot. Capillaries exchange via thin walls.",
      sections: [
        { heading: "Key idea", body: "Blood components each have a distinct transport/defence role." },
        { heading: "Exchange", body: "Tissue fluid forms at capillaries; lymph drains excess." },
      ],
    },
  ],
};
