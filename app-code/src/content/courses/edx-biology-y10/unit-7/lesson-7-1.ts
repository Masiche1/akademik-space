import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ebi10-u7-lesson-7-1",
  code: "7-1",
  title: "Pathogens and the Body's Defences",
  goal: "I CAN identify pathogens, describe how diseases are transmitted and explain how white blood cells respond to infection.",
  standards: ["4BI1 1.4", "4BI1 2.62"],
  
  vocabulary: [
    { term: "Pathogen", definition: "A microorganism or virus that causes disease." },
    { term: "Transmissible disease", definition: "A disease in which the pathogen can pass from one host to another." },
    { term: "Antigen", definition: "A molecule on the surface of a pathogen that triggers an immune response." },
    { term: "Antibody", definition: "A protein produced by lymphocytes that binds specifically to an antigen." },
    { term: "Phagocyte", definition: "A white blood cell that engulfs and digests pathogens." },
    { term: "Lymphocyte", definition: "A white blood cell that produces antibodies against specific antigens." },
    { term: "Immune response", definition: "The body's defence against pathogens using white blood cells and antibodies." },
  ],
  concepts: [
    {
      id: "ebi10-u7-pathogens-transmission",
      title: "Pathogens and transmission",
      skill: "Identify types of pathogens and explain how transmissible diseases spread and can be controlled.",
      lesson: {
        sections: [
          {
            heading: "Pathogens",
            body: "A **pathogen** is a disease-causing organism. Pathogens may be **bacteria** (for example cholera), **fungi** (for example athlete's foot), **protoctists** (for example malaria caused by *Plasmodium*) or **viruses** (for example influenza). A **transmissible disease** is one in which the pathogen can pass from one host to another.\n\nTransmission may occur by direct contact with body fluids or broken skin, indirectly through contaminated surfaces, food, water or air, by vectors such as mosquitoes, or through animals.",
          },
          {
            heading: "Controlling spread",
            body: "Simple hygiene reduces transmission: washing hands, covering coughs, cleaning contaminated surfaces and safe food preparation. Clean water, sewage treatment and waste disposal reduce environmental contamination. Vaccination can protect individuals and communities by reducing the number of susceptible hosts.",
          },
        ],
        keyFormulas: [
          { name: "Pathogens", statement: "bacteria, fungi, protoctists, viruses" },
          { name: "Transmission", statement: "direct contact, contaminated surfaces/food/air, vectors, animals" },
          { name: "Control", statement: "hygiene, clean water, vaccination" },
        ],
        workedExample: {
          problem: "Explain why hand washing reduces the spread of a diarrhoeal disease.",
          solution: "Pathogens may be present on hands after contact with contaminated surfaces or faeces. Washing removes them before they can enter the mouth or contaminate food, breaking the transmission route.",
        },
      },
      questions: [
        {
          id: "ebi10-u7-pathogens-transmission-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following can be a pathogen?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Virus"
                    },
                    {
                              "id": "b",
                              "text": "Mitochondrion"
                    },
                    {
                              "id": "c",
                              "text": "Villus"
                    },
                    {
                              "id": "d",
                              "text": "Plasma"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pathogen",
                              "statement": "A disease-causing organism or virus."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Viruses can be pathogens; mitochondria, villi and plasma are not pathogens.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Virus",
          "commonErrors": [
                    "Thinking only bacteria are pathogens."
          ]
},
        },
        {
          id: "ebi10-u7-pathogens-transmission-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define pathogen and transmissible disease.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pathogen and transmissible disease",
                              "statement": "Pathogen causes disease; transmissible disease spreads between hosts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A pathogen is an organism or virus that causes disease.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "A transmissible disease is one in which the pathogen can pass from one host to another.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Pathogen = disease-causing organism/virus; transmissible disease = spreads between hosts.",
          "commonErrors": [
                    "Using pathogen for any disease without a living or viral cause."
          ]
},
        },
        {
          id: "ebi10-u7-pathogens-transmission-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways a pathogen can be transmitted from one person to another and one way to reduce transmission.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Transmission",
                              "statement": "Pathogens spread by contact, contaminated substances or vectors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Direct contact with body fluids or broken skin can transmit pathogens.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Indirect routes include contaminated surfaces, food, water or air.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Hand washing, clean water or vaccination reduces spread.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Contact/contaminated surfaces; hygiene or vaccination reduces spread.",
          "commonErrors": [
                    "Saying diseases only spread by direct touch."
          ]
},
        },
        {
          id: "ebi10-u7-pathogens-transmission-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A village has an outbreak of a waterborne disease.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the likely transmission route.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Suggest two practical measures to reduce spread.",
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
                              "name": "Disease control",
                              "statement": "Break the transmission route with hygiene and clean water."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Pathogens are likely in contaminated drinking water or food.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Provide clean drinking water or boil/treat water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Improve sewage disposal and sanitation to stop contamination.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Educate people in hand washing and safe food preparation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) contaminated water/food (b) clean water, sanitation, hygiene.",
          "commonErrors": [
                    "Recommending only medicine without preventing contamination."
          ]
},
        },
        {
          id: "ebi10-u7-pathogens-transmission-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A student compares three diseases: cholera caused by bacteria, malaria caused by a protoctist and influenza caused by a virus.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Match each disease to the type of pathogen.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest one transmission route for each disease.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pathogen groups",
                              "statement": "Bacteria, protoctists and viruses cause different diseases."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Cholera: bacterium.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Malaria: protoctist (Plasmodium).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Influenza: virus.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Cholera: contaminated water/food.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Malaria: mosquito vector bite.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Influenza: airborne droplets or direct contact.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Routes correctly matched to pathogen and host.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) cholera bacteria, malaria protoctist, influenza virus (b) water, mosquito, droplets/contact.",
          "commonErrors": [
                    "Calling a virus a bacterium or protoctist."
          ]
},
        },
        {
          id: "ebi10-u7-pathogens-transmission-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school reports several cases of a skin infection caused by a fungus.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why fungi can be pathogens.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two routes by which the infection could spread in the school.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest three hygiene measures and justify each.",
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
                              "name": "Fungal disease control",
                              "statement": "Reduce contact with contaminated surfaces and treat infected skin."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Fungi can grow on skin, nails or mucous membranes and cause infection.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "They may reproduce by spores that spread to new hosts.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Warm, damp conditions favour fungal growth.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Direct contact with infected skin or shared towels/clothing.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Contaminated floors, showers or sports equipment.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Spores in dust or air in poorly ventilated changing rooms.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Keep skin clean and dry to discourage fungal growth.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Do not share towels or clothing to reduce direct transfer.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Clean and dry communal surfaces to remove spores.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Treat infected students to stop them acting as a source.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) fungi grow on skin, spores spread, damp favours growth (b) contact/shared items/surfaces (c) clean/dry skin, no sharing, clean surfaces, treat infection.",
          "commonErrors": [
                    "Ignoring that fungi are living pathogens, not just dirt."
          ]
},
        },
      ],
    },
    {
      id: "ebi10-u7-white-blood-cells",
      title: "White blood cells and immune response",
      skill: "Describe phagocytosis and antibody production by lymphocytes.",
      lesson: {
        sections: [
          {
            heading: "Phagocytes and lymphocytes",
            body: "**White blood cells** defend the body. **Phagocytes** engulf pathogens by **phagocytosis**: the cell membrane surrounds the pathogen, forms a vacuole and digests it with enzymes. **Lymphocytes** produce **antibodies**, proteins that bind specifically to **antigens** on a pathogen's surface.",
          },
          {
            heading: "How antibodies help",
            body: "Antibodies mark pathogens for destruction. They can neutralise toxins, prevent pathogens entering cells, or clump pathogens together so phagocytes can engulf them more easily. Because each antibody has a specific shape matching a particular antigen, the immune response is targeted.",
          },
        ],
        keyFormulas: [
          { name: "Phagocytosis", statement: "engulf pathogen → vacuole → digest with enzymes" },
          { name: "Antibody", statement: "specific protein binds antigen" },
          { name: "Immune response", statement: "detect antigen → antibodies/phagocytes → destroy pathogen" },
        ],
        workedExample: {
          problem: "A bacterium enters the blood. Describe two ways white blood cells can respond.",
          solution: "A phagocyte can engulf and digest the bacterium. Lymphocytes can produce antibodies specific to antigens on the bacterium, marking it for destruction.",
        },
      },
      questions: [
        {
          id: "ebi10-u7-white-blood-cells-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which white blood cell engulfs and digests pathogens?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Red blood cell"
                    },
                    {
                              "id": "b",
                              "text": "Platelet"
                    },
                    {
                              "id": "c",
                              "text": "Phagocyte"
                    },
                    {
                              "id": "d",
                              "text": "Plasma cell"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Phagocyte",
                              "statement": "Engulfs and digests pathogens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Phagocytes perform phagocytosis; lymphocytes make antibodies.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) Phagocyte",
          "commonErrors": [
                    "Choosing lymphocyte, which makes antibodies rather than engulfing directly."
          ]
},
        },
        {
          id: "ebi10-u7-white-blood-cells-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define antigen and antibody.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Antigen and antibody",
                              "statement": "Antigen triggers response; antibody binds it specifically."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "An antigen is a molecule on a pathogen that triggers an immune response.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "An antibody is a protein produced by lymphocytes that binds specifically to an antigen.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Antigen = trigger molecule; antibody = specific binding protein.",
          "commonErrors": [
                    "Using antigen and antibody interchangeably."
          ]
},
        },
        {
          id: "ebi10-u7-white-blood-cells-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe phagocytosis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Phagocytosis",
                              "statement": "White blood cell engulfs and digests pathogen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The phagocyte's cell membrane surrounds and engulfs the pathogen.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The pathogen is trapped in a vacuole inside the cell.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Enzymes digest the pathogen, destroying it.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Engulf → vacuole → digest with enzymes.",
          "commonErrors": [
                    "Saying the phagocyte eats the pathogen through a mouth."
          ]
},
        },
        {
          id: "ebi10-u7-white-blood-cells-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Lymphocytes produce antibodies against a new bacterium.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what triggers antibody production.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how antibodies help destroy the bacterium.",
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
                              "name": "Antibody specificity",
                              "statement": "Antibodies bind specific antigens."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Antigens on the bacterium are detected by lymphocytes.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The lymphocytes then produce antibodies specific to those antigens.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Antibodies bind to antigens on the bacterium.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This marks the bacterium for destruction by phagocytes.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Antibodies may also neutralise toxins or prevent entry into cells.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) antigen detection triggers lymphocytes (b) antibodies bind and mark for phagocytosis.",
          "commonErrors": [
                    "Saying antibodies kill pathogens directly by themselves."
          ]
},
        },
        {
          id: "ebi10-u7-white-blood-cells-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A patient has a bacterial infection and their white blood cell count rises.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why white blood cell numbers increase.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe the roles of phagocytes and lymphocytes in fighting the infection.",
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
                              "name": "Immune response",
                              "statement": "White blood cells increase to fight infection."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The body produces more white blood cells to combat pathogens.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Phagocytes are needed to engulf bacteria.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Lymphocytes are needed to produce specific antibodies.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Phagocytes engulf and digest bacteria by phagocytosis.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Lymphocytes produce antibodies that bind bacterial antigens and mark them for destruction.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) more WBC needed for defence (b) phagocytes digest; lymphocytes make antibodies.",
          "commonErrors": [
                    "Saying red blood cells fight infection."
          ]
},
        },
        {
          id: "ebi10-u7-white-blood-cells-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student investigates how antibodies affect bacterial growth in a culture.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the independent and dependent variables.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Suggest two controls needed for a fair test.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain the expected result if antibodies are present.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Suggest two safety or ethical precautions.",
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
                              "name": "Antibody investigation",
                              "statement": "Control variables and measure bacterial growth."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Independent variable: presence/absence of antibodies.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Dependent variable: bacterial growth or number of bacteria.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use same bacterial strain and initial number.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Keep temperature and nutrient medium identical.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Repeat the experiment and measure at the same times.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Bacterial growth should be reduced because antibodies mark bacteria for phagocytosis.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Use sterile technique to prevent contamination.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Dispose of cultures safely to prevent spread.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Follow risk assessment for pathogenic organisms.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) antibodies vs bacterial growth (b) same strain/temperature/repeats (c) less growth (d) sterile, safe disposal, risk assessment.",
          "commonErrors": [
                    "Ignoring that antibodies alone may not kill bacteria without phagocytes."
          ]
},
        },
      ],
    },
  ],

};
