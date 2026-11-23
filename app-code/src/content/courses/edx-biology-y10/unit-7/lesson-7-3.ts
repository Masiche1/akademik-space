import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ebi10-u7-lesson-7-3",
  code: "7-3",
  title: "Blood Clotting and Disease Control",
  goal: "I CAN describe platelet clotting, explain how wounds are sealed and evaluate hygiene measures that reduce disease spread.",
  standards: ["4BI1 1.4", "4BI1 2.62", "4BI1 2.64B"],
  
  vocabulary: [
    { term: "Platelet", definition: "A cell fragment in blood that helps clot wounds." },
    { term: "Fibrin", definition: "A protein mesh that traps blood cells to form a clot." },
    { term: "Clot", definition: "A solid mass of blood cells and fibrin that seals a wound." },
    { term: "Wound", definition: "A break in the skin that allows pathogens to enter." },
    { term: "Hygiene", definition: "Practices that reduce the spread of pathogens." },
    { term: "Antiseptic", definition: "A chemical applied to skin or surfaces to reduce pathogens." },
    { term: "Sterile", definition: "Free from living microorganisms." },
  ],
  concepts: [
    {
      id: "ebi10-u7-clotting",
      title: "Platelets and blood clotting",
      skill: "Describe the role of platelets and fibrin in sealing wounds.",
      lesson: {
        sections: [
          {
            heading: "Clotting",
            body: "When a blood vessel is damaged, **platelets** stick to the wound and to each other, forming a plug. Chemicals released at the wound trigger conversion of a plasma protein into **fibrin**. Fibrin forms a mesh that traps red blood cells and platelets, producing a **clot** that seals the wound and prevents further blood loss and pathogen entry.",
          },
          {
            heading: "Why clotting matters",
            body: "Clotting prevents excessive blood loss and reduces the chance of infection through open wounds. However, clots can also form inappropriately inside blood vessels, causing problems such as thrombosis; the balance between clotting and preventing unwanted clots is important.",
          },
        ],
        keyFormulas: [
          { name: "Clotting", statement: "platelets plug wound → fibrin mesh → clot seals wound" },
          { name: "Fibrin", statement: "protein mesh traps blood cells" },
          { name: "Platelets", statement: "cell fragments that initiate clotting" },
        ],
        workedExample: {
          problem: "Explain what happens when a person cuts a finger.",
          solution: "Platelets stick to the damaged vessel and release chemicals. Fibrin forms a mesh that traps blood cells, making a clot that seals the cut.",
        },
      },
      questions: [
        {
          id: "ebi10-u7-clotting-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which blood component initiates clotting at a wound?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Red blood cells"
                    },
                    {
                              "id": "b",
                              "text": "Platelets"
                    },
                    {
                              "id": "c",
                              "text": "Plasma only"
                    },
                    {
                              "id": "d",
                              "text": "Lymphocytes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Platelets",
                              "statement": "Cell fragments that help clot wounds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Platelets form the initial plug at a wound.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Platelets",
          "commonErrors": [
                    "Choosing red blood cells, which carry oxygen."
          ]
},
        },
        {
          id: "ebi10-u7-clotting-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the roles of platelets and fibrin in clotting.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Clotting",
                              "statement": "Platelets plug wound; fibrin forms mesh."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Platelets stick to the wound and form an initial plug.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Fibrin forms a mesh that traps blood cells to make a stable clot.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Platelets plug; fibrin mesh traps cells.",
          "commonErrors": [
                    "Saying fibrin is a blood cell; it is a protein."
          ]
},
        },
        {
          id: "ebi10-u7-clotting-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the sequence of events that forms a blood clot.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Clotting sequence",
                              "statement": "Platelet plug → fibrin mesh → clot."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Damage to a blood vessel activates platelets.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Platelets stick together to form a plug at the wound.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Fibrin is produced and forms a mesh that traps blood cells, sealing the wound.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Platelets plug → fibrin mesh → clot seals wound.",
          "commonErrors": [
                    "Putting fibrin before platelets; platelets initiate the response."
          ]
},
        },
        {
          id: "ebi10-u7-clotting-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A person has a deep cut that bleeds heavily.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the body's immediate clotting response.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two reasons why the clot is important beyond stopping blood loss.",
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
                              "name": "Clot function",
                              "statement": "Clot seals wound and reduces infection risk."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Platelets are activated at the damaged vessel.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Platelets form a plug and trigger fibrin formation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Fibrin traps blood cells to make a clot that seals the wound.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The clot reduces further blood loss and maintains blood pressure/volume.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It also blocks pathogens from entering through the wound.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) platelets→fibrin→clot (b) prevents blood loss and blocks pathogens.",
          "commonErrors": [
                    "Ignoring infection prevention as a role of clotting."
          ]
},
        },
        {
          id: "ebi10-u7-clotting-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A patient has a genetic condition that reduces fibrin formation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Predict the effect on wound healing.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why this could be dangerous.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Fibrin deficiency",
                              "statement": "Less fibrin means weaker clots."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Clots will be weaker or form more slowly.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Wounds may bleed for longer.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The wound may be slower to seal and heal.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Prolonged bleeding can cause blood loss and shock.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Open wounds allow pathogens to enter, increasing infection risk.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) weaker/slower clots, prolonged bleeding (b) blood loss/shock and infection risk.",
          "commonErrors": [
                    "Saying clotting is only about blood loss, not infection."
          ]
},
        },
        {
          id: "ebi10-u7-clotting-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Students compare blood clotting time in samples with and without added platelets.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the independent and dependent variables.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Suggest three controls for a fair test.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Predict the result and explain it.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Suggest one safety precaution.",
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
                              "name": "Clotting investigation",
                              "statement": "Compare clotting time with controlled conditions."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Independent variable: presence/absence of added platelets.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Dependent variable: time taken for clot formation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use same type and volume of blood sample.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Keep temperature identical.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Repeat trials and time from same starting point.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Sample with platelets should clot faster.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Platelets initiate plug formation and fibrin mesh.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "More platelets can accelerate clot formation.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Use sterile technique and dispose of blood safely.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) platelets vs clot time (b) same blood/temp/repeats (c) faster clot with platelets (d) sterile/safe disposal.",
          "commonErrors": [
                    "Using different blood samples with different baseline clotting times."
          ]
},
        },
      ],
    },
    {
      id: "ebi10-u7-disease-control",
      title: "Hygiene and disease control",
      skill: "Explain practical measures that reduce the spread of pathogens and evaluate their importance.",
      lesson: {
        sections: [
          {
            heading: "Hygiene measures",
            body: "Pathogens spread by contact, contaminated surfaces, food, water, air and vectors. **Hygiene** reduces these routes: washing hands, covering coughs, cleaning wounds, disinfecting surfaces, safe food preparation, clean water and sewage treatment. Vaccination reduces the number of susceptible people, making outbreaks less likely.",
          },
          {
            heading: "Why control matters",
            body: "Even simple measures can break transmission chains. A single contaminated hand can transfer pathogens to food or wounds; clean water prevents faecal-oral spread; vaccination protects individuals and communities. Effective control often combines personal hygiene, sanitation, vaccination and treatment of infected people.",
          },
        ],
        keyFormulas: [
          { name: "Hygiene", statement: "wash hands, clean surfaces, safe food, clean water" },
          { name: "Transmission break", statement: "remove contaminated route or susceptible host" },
          { name: "Vaccination", statement: "reduces susceptible population and spread" },
        ],
        workedExample: {
          problem: "Explain why covering a cough can reduce disease spread.",
          solution: "Covering a cough reduces release of infected droplets into the air or onto surfaces, lowering the chance that others inhale or contact pathogens.",
        },
      },
      questions: [
        {
          id: "ebi10-u7-disease-control-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which practice most directly reduces faecal-oral transmission?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Wearing a hat"
                    },
                    {
                              "id": "b",
                              "text": "Sleeping early"
                    },
                    {
                              "id": "c",
                              "text": "Hand washing after using the toilet"
                    },
                    {
                              "id": "d",
                              "text": "Eating quickly"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Hygiene",
                              "statement": "Hand washing removes pathogens from hands."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hand washing removes faecal pathogens before they reach mouth or food.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) Hand washing after using the toilet",
          "commonErrors": [
                    "Choosing unrelated practices with no effect on transmission."
          ]
},
        },
        {
          id: "ebi10-u7-disease-control-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two hygiene measures that reduce disease spread.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Hygiene measures",
                              "statement": "Reduce contact with pathogens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two of hand washing, covering coughs, cleaning wounds, disinfecting surfaces, safe food preparation, clean water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Each measure correctly linked to reducing transmission.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Hand washing and safe food preparation/clean water/covering coughs.",
          "commonErrors": [
                    "Listing measures without explaining how they block transmission."
          ]
},
        },
        {
          id: "ebi10-u7-disease-control-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how vaccination contributes to disease control in a community.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Vaccination",
                              "statement": "Reduces susceptible hosts and transmission."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vaccination produces memory cells and antibodies in individuals.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Vaccinated people are less likely to become infected or spread the pathogen.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "High coverage reduces the number of susceptible hosts, limiting outbreaks.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Vaccination → immune individuals → fewer susceptible hosts → less spread.",
          "commonErrors": [
                    "Saying vaccination only protects the person vaccinated, not the community."
          ]
},
        },
        {
          id: "ebi10-u7-disease-control-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A restaurant has several cases of food poisoning.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest two possible sources of contamination.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Suggest three hygiene improvements.",
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
                              "name": "Food hygiene",
                              "statement": "Prevent pathogens reaching food."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Contaminated raw food or water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Poor hand hygiene or contaminated surfaces/equipment.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Wash hands and surfaces regularly.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Separate raw and cooked foods to avoid cross-contamination.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Cook food thoroughly and store at safe temperatures.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) contaminated food/water, poor hygiene (b) hand/surface washing, separation, thorough cooking/storage.",
          "commonErrors": [
                    "Suggesting only closing the restaurant rather than fixing hygiene."
          ]
},
        },
        {
          id: "ebi10-u7-disease-control-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A hospital wants to reduce infections caused by a bacterium on surfaces.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why surfaces can spread infection.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest three measures and justify each.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Hospital hygiene",
                              "statement": "Clean surfaces interrupt fomite transmission."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Pathogens can survive on surfaces after contact with infected people.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Staff or patients can transfer pathogens from surfaces to hands.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Hands may then introduce pathogens to wounds or mucous membranes.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Disinfect surfaces regularly to kill pathogens.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use hand hygiene before and after patient contact.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use personal protective equipment to reduce transfer.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Isolate infected patients to reduce spread.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) surfaces→hands→infection (b) disinfection, hand hygiene, PPE, isolation.",
          "commonErrors": [
                    "Ignoring hand-to-surface transfer as the key route."
          ]
},
        },
        {
          id: "ebi10-u7-disease-control-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A community centre plans to reduce respiratory infections during winter.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe two routes by which respiratory pathogens spread.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest three measures to reduce spread and justify each.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain how vaccination could support these measures.",
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
                              "name": "Respiratory disease control",
                              "statement": "Reduce droplets and susceptible hosts."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Airborne droplets from coughs/sneezes.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Direct contact with contaminated hands/surfaces.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Close contact in crowded indoor spaces.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Improve ventilation to dilute droplets.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Encourage hand hygiene and surface cleaning.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Promote covering coughs/sneezes to reduce droplets.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Keep symptomatic people away from others when possible.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Vaccination produces memory cells against specific pathogens.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "It reduces the number of susceptible people.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "This complements hygiene by lowering transmission and severity.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) droplets/contact/crowding (b) ventilation, hand hygiene, cover coughs, exclude ill (c) vaccination reduces susceptibility.",
          "commonErrors": [
                    "Relying only on antibiotics rather than preventing transmission."
          ]
},
        },
      ],
    },
  ],

};
