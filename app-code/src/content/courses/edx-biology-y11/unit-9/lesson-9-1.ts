import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "ebi11-u9-lesson-9-1",
  code: "9-1",
  title: "The Heart and Blood Vessels",
  goal: "I CAN describe the structure of the heart, double circulation and the types of blood vessels.",
  standards: ["Edexcel IGCSE Biology 4BI1 — Transport", "4BI1 heart and blood vessels"],
  
  vocabulary: [
    { term: "Heart", definition: "Muscular pump that circulates blood around the body." },
    { term: "Atrium", definition: "Upper chamber of the heart that receives blood." },
    { term: "Ventricle", definition: "Lower chamber of the heart that pumps blood out." },
    { term: "Valve", definition: "Structure preventing backflow of blood in the heart and vessels." },
    { term: "Artery", definition: "Vessel carrying blood away from the heart under high pressure." },
    { term: "Vein", definition: "Vessel carrying blood towards the heart; has valves." },
    { term: "Capillary", definition: "Tiny vessel where exchange of substances occurs." },
    { term: "Double circulation", definition: "Blood passes through the heart twice per complete circuit — pulmonary and systemic." },
  ],
  concepts: [
    {
      id: "ebi11-u9-heart",
      title: "Heart structure and double circulation",
      skill: "Describe the chambers, valves and vessels of the heart and the pulmonary and systemic circuits.",
      lesson: {
        sections: [
          {
            heading: "Heart structure",
            body: "Four chambers: right atrium, right ventricle, left atrium, left ventricle. The left ventricle has a thicker wall because it pumps blood to the whole body. Valves (atrioventricular and semilunar) prevent backflow. Coronary arteries supply the heart muscle itself with oxygenated blood.",
          },
          {
            heading: "Pulmonary circulation",
            body: "Deoxygenated blood: body → vena cava → right atrium → right ventricle → pulmonary artery → lungs (CO2 out, O2 in) → pulmonary vein → left atrium.",
          },
          {
            heading: "Systemic circulation",
            body: "Oxygenated blood: left atrium → left ventricle → aorta → body tissues → vena cava → right atrium. This is double circulation — blood passes through the heart twice per lap, keeping oxygenated and deoxygenated blood separate.",
          },
        ],
        keyFormulas: [
          { name: "Double circulation", statement: "Pulmonary circuit (lungs) + systemic circuit (body); blood through heart twice" },
          { name: "Left ventricle", statement: "Thickest wall — pumps blood to whole body" },
        ],
        workedExample: {
          problem: "Trace the path of a red blood cell from the vena cava to the aorta.",
          solution: "Vena cava → right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta.",
        },
      },
      questions: [
        {
          id: "ebi11-u9-heart-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which chamber has the thickest wall and why?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Right atrium — receives blood"
                    },
                    {
                              "id": "b",
                              "text": "Left ventricle — pumps to whole body"
                    },
                    {
                              "id": "c",
                              "text": "Right ventricle — pumps to lungs"
                    },
                    {
                              "id": "d",
                              "text": "Left atrium — receives blood"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Left ventricle",
                              "statement": "Thick wall for high-pressure systemic pumping."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Left ventricle pumps blood to entire body.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Left ventricle — pumps to whole body"
},
        },
        {
          id: "ebi11-u9-heart-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the two circuits of double circulation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Double circulation",
                              "statement": "Pulmonary + systemic circuits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pulmonary circulation — to and from lungs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Systemic circulation — to and from body tissues.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Pulmonary and systemic"
},
        },
        {
          id: "ebi11-u9-heart-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Trace the path of blood from the vena cava to the aorta.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Circulation route",
                              "statement": "Vena cava → aorta via heart and lungs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vena cava → right atrium.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Right atrium → right ventricle → pulmonary artery → lungs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lungs → pulmonary vein → left atrium.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Left atrium → left ventricle → aorta.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Vena cava→RA→RV→pulmonary artery→lungs→PV→LA→LV→aorta"
},
        },
        {
          id: "ebi11-u9-heart-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why double circulation is more efficient than single circulation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Double circulation advantage",
                              "statement": "Separates oxygenated and deoxygenated blood; pressure maintained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Oxygenated and deoxygenated blood are kept separate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Tissues always receive fully oxygenated blood.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Lungs receive blood at lower pressure (right ventricle thinner).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Body receives high-pressure blood from thick-walled left ventricle.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "This meets the different pressure needs of lungs and body.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Separated blood + pressure matched to each circuit"
},
        },
        {
          id: "ebi11-u9-heart-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the four chambers of the heart.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the function of heart valves.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Why is the left ventricle wall thicker?",
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
                              "name": "Heart structure",
                              "statement": "Four chambers, valves, walls."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Right atrium, right ventricle, left atrium, left ventricle.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Prevent backflow of blood.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Pumps blood to whole body — needs more force/thicker muscle.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4 chambers; valves stop backflow; LV thick for body pressure"
},
        },
        {
          id: "ebi11-u9-heart-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Name the four heart chambers. (b) Name the vessel carrying deoxygenated blood from the heart to the lungs. (c) Name the vessel carrying oxygenated blood from lungs to heart. (d) Define double circulation. (e) Trace blood from vena cava to aorta. (f) State the function of valves.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Chambers.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Heart→lungs vessel.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Lungs→heart vessel.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Double circulation.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Route.",
                    "marks": 3
          },
          {
                    "label": "f",
                    "prompt": "Valves.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Heart and circulation",
                              "statement": "Chambers, vessels, circuits."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "RA, RV, LA, LV.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pulmonary artery.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Pulmonary vein.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Blood passes through heart twice — pulmonary then systemic.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "VC→RA→RV→pulmonary artery→lungs→PV→LA→LV→aorta.",
                              "marks": 3,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Prevent backflow.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Chambers; pulmonary artery/vein; double circulation; route; valves"
},
        },
      ],
    },
    {
      id: "ebi11-u9-vessels",
      title: "Blood vessels",
      skill: "Compare arteries, veins and capillaries and relate structure to function.",
      lesson: {
        sections: [
          {
            heading: "Arteries",
            body: "Carry blood away from the heart under high pressure. Thick muscular and elastic walls withstand pressure. Small lumen relative to wall. No valves (except at heart exit). Carry oxygenated blood except the pulmonary artery.",
          },
          {
            heading: "Veins",
            body: "Carry blood towards the heart under low pressure. Thin walls, large lumen, valves prevent backflow. Blood is often deoxygenated except pulmonary veins. Skeletal muscle action helps return blood.",
          },
          {
            heading: "Capillaries",
            body: "Microscopic vessels connecting arteries and veins. Wall is one cell thick — very short diffusion distance. Exchange of oxygen, carbon dioxide, nutrients and wastes occurs here. Blood flow is slow to allow exchange.",
          },
        ],
        keyFormulas: [
          { name: "Artery", statement: "Thick elastic wall; high pressure; away from heart" },
          { name: "Vein", statement: "Thin wall; valves; low pressure; towards heart" },
          { name: "Capillary", statement: "One-cell wall; exchange site" },
        ],
        workedExample: {
          problem: "Why are capillary walls only one cell thick?",
          solution: "To minimise diffusion distance so oxygen, carbon dioxide, nutrients and wastes can move quickly between blood and tissue fluid.",
        },
      },
      questions: [
        {
          id: "ebi11-u9-vessels-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which vessel carries blood away from the heart?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Vein"
                    },
                    {
                              "id": "b",
                              "text": "Capillary"
                    },
                    {
                              "id": "c",
                              "text": "Artery"
                    },
                    {
                              "id": "d",
                              "text": "Lymph vessel"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Artery",
                              "statement": "Carries blood away from heart."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Arteries carry blood away from heart.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(c)** Artery"
},
        },
        {
          id: "ebi11-u9-vessels-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two features of veins that help blood flow towards the heart.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Vein structure",
                              "statement": "Valves and thin walls aid return flow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Valves prevent backflow.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Thin walls / low pressure / large lumen.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Valves; thin walls"
},
        },
        {
          id: "ebi11-u9-vessels-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why artery walls are thick and elastic.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Artery wall",
                              "statement": "Withstands high pressure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Arteries carry blood at high pressure from ventricle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Thick muscular/elastic walls resist bursting.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Elasticity smooths pressure pulses between beats.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Small lumen keeps pressure high for distribution.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Thick elastic wall withstands high pressure"
},
        },
        {
          id: "ebi11-u9-vessels-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how substances are exchanged between blood and tissue fluid at capillaries.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Capillary exchange",
                              "statement": "Thin wall + slow flow + pressure gradient."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Capillary wall is one cell thick.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Short diffusion distance allows rapid exchange.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Blood pressure forces water and small molecules out (tissue fluid forms).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "O2 and nutrients diffuse out; CO2 and wastes diffuse in.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Slow flow maximises exchange time.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Thin wall + slow flow → diffusion exchange"
},
        },
        {
          id: "ebi11-u9-vessels-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "State two differences between arteries and veins.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why capillaries are the site of exchange.",
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
                              "name": "Vessel comparison",
                              "statement": "Structure matches function."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Arteries: thick wall, high pressure, no valves.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Veins: thin wall, low pressure, valves.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Direction: arteries away, veins towards heart.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "One-cell wall → short diffusion distance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Slow flow → time for exchange.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Connect arteries and veins, reaching every tissue.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Arteries thick/no valves; veins thin/valves; capillaries exchange"
},
        },
        {
          id: "ebi11-u9-vessels-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Name the three types of blood vessel. (b) State the direction of blood flow in each. (c) Which has valves? (d) Which has the thickest wall? (e) Which is the exchange site? (f) Explain why vein walls are thin.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Three vessels.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Directions.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Valved vessel.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Thickest wall.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Exchange site.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Thin vein walls.",
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
                              "name": "Blood vessels",
                              "statement": "Arteries, veins, capillaries."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Arteries, veins, capillaries.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Arteries away; veins towards; capillaries connect.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Veins.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Arteries.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Capillaries.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Low pressure — thin wall sufficient.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Valves prevent backflow instead.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Large lumen allows slow flow for exchange.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3 vessels; directions; veins valved; arteries thick; capillaries exchange"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebi11-u9-heart-notes",
      title: "Heart — notes",
      summary: "4 chambers; double circulation (pulmonary + systemic); arteries thick-walled, veins valved, capillaries exchange.",
      sections: [
        { heading: "Key idea", body: "Blood through heart twice — oxygenated and deoxygenated kept separate." },
        { heading: "Vessels", body: "Structure matches function: pressure and exchange needs." },
      ],
    },
  ],
};
