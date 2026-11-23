import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ebi10-u7-lesson-7-2",
  code: "7-2",
  title: "Antigens, Antibodies and Vaccination",
  goal: "I CAN explain antibody specificity, describe active immunity and vaccination, and evaluate how vaccines protect communities.",
  standards: ["4BI1 2.62", "4BI1 2.63B"],
  
  vocabulary: [
    { term: "Antigen", definition: "A molecule on a pathogen that triggers an immune response." },
    { term: "Antibody", definition: "A specific protein that binds to an antigen." },
    { term: "Lymphocyte", definition: "A white blood cell that produces antibodies." },
    { term: "Memory cell", definition: "A long-lived lymphocyte that enables a faster, stronger response on re-exposure." },
    { term: "Vaccination", definition: "Introducing harmless antigens to stimulate antibody and memory cell production." },
    { term: "Active immunity", definition: "Immunity produced by the body's own immune response after infection or vaccination." },
    { term: "Secondary response", definition: "A faster and stronger immune response when the same antigen is encountered again." },
  ],
  concepts: [
    {
      id: "ebi10-u7-antibodies",
      title: "Antigens and antibody specificity",
      skill: "Explain why antibodies are specific and how they mark pathogens for destruction.",
      lesson: {
        sections: [
          {
            heading: "Specific antigen-antibody binding",
            body: "Every pathogen has unique **antigens** with particular shapes. **Antibodies** produced by lymphocytes have complementary shapes and bind only to matching antigens, like a lock and key. This specificity means an antibody produced against one pathogen usually does not bind effectively to a different pathogen.",
          },
          {
            heading: "Effects of antibody binding",
            body: "Bound antibodies can neutralise toxins, block pathogens from entering host cells, or cause pathogens to clump together so **phagocytes** can engulf them efficiently. Antibodies therefore do not usually destroy pathogens alone; they mark them for destruction by other immune cells.",
          },
        ],
        keyFormulas: [
          { name: "Antibody specificity", statement: "antibody shape matches antigen shape" },
          { name: "Antibody action", statement: "bind antigen → neutralise/mark for phagocytosis" },
          { name: "Clonal selection", statement: "matching lymphocyte is stimulated to divide and produce antibodies" },
        ],
        workedExample: {
          problem: "Explain why antibodies against measles do not protect against influenza.",
          solution: "Measles and influenza have different antigens. Antibodies are specific to the antigen shape, so anti-measles antibodies cannot bind influenza antigens effectively.",
        },
      },
      questions: [
        {
          id: "ebi10-u7-antibodies-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Antibodies are produced by which cells?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Red blood cells"
                    },
                    {
                              "id": "b",
                              "text": "Lymphocytes"
                    },
                    {
                              "id": "c",
                              "text": "Platelets"
                    },
                    {
                              "id": "d",
                              "text": "Plasma"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lymphocyte",
                              "statement": "Produces antibodies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lymphocytes produce antibodies; other blood components have different roles.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Lymphocytes",
          "commonErrors": [
                    "Choosing platelets, which clot blood."
          ]
},
        },
        {
          id: "ebi10-u7-antibodies-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain what is meant by antibody specificity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Antibody specificity",
                              "statement": "Antibody binds only matching antigen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Antibodies have shapes complementary to particular antigens.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Therefore an antibody usually binds only one type of antigen/pathogen.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Antibody shape matches only specific antigen.",
          "commonErrors": [
                    "Saying antibodies bind to any pathogen."
          ]
},
        },
        {
          id: "ebi10-u7-antibodies-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how antibodies help destroy pathogens.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Antibody action",
                              "statement": "Bind antigen and mark pathogen for destruction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Antibodies bind to antigens on the pathogen surface.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "They can neutralise toxins or block entry into cells.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "They mark pathogens for destruction by phagocytes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Bind antigen → neutralise/block/mark for phagocytosis.",
          "commonErrors": [
                    "Claiming antibodies alone digest pathogens."
          ]
},
        },
        {
          id: "ebi10-u7-antibodies-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A patient is infected with two different bacteria at the same time.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why two different types of antibody may be produced.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how each antibody helps control its matching bacterium.",
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
                              "name": "Multiple antigens",
                              "statement": "Different pathogens have different antigens."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Each bacterium has different surface antigens.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Lymphocytes respond to each antigen type separately.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Antibodies bind specifically to the antigens of each bacterium.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bound antibodies mark the bacteria for phagocytosis.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This allows simultaneous control of both infections.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) different antigens trigger different antibodies (b) specific binding marks each bacterium for destruction.",
          "commonErrors": [
                    "Assuming one antibody can recognise all bacteria."
          ]
},
        },
        {
          id: "ebi10-u7-antibodies-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "An antibody molecule binds to a viral antigen but does not enter host cells.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how the antibody can still help control the virus.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest why antibodies may be less effective against viruses inside cells.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Antibody limitations",
                              "statement": "Antibodies act on extracellular pathogens and marked cells."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The antibody can neutralise the virus before it enters cells.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "It can block viral attachment to host cell receptors.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "It can mark virus particles for phagocytosis.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Viruses inside cells are hidden from antibodies in blood/tissue fluid.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Antibodies cannot easily reach intracellular viruses.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Cell-mediated responses are needed to destroy infected cells.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Therefore antibodies work best before or after viruses leave cells.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) neutralise/block/mark (b) intracellular viruses hidden from antibodies.",
          "commonErrors": [
                    "Assuming antibodies can enter cells and bind internal viruses."
          ]
},
        },
        {
          id: "ebi10-u7-antibodies-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Students test whether antibody A binds antigen X but not antigen Y.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the independent and dependent variables.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe how to make the test fair.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Predict the result if antibody A is specific to antigen X.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Suggest one real-life application of antibody specificity.",
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
                              "name": "Antibody specificity test",
                              "statement": "Test binding against different antigens."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Independent variable: type of antigen (X or Y).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Dependent variable: amount of antibody binding/detection.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use equal concentrations of antigen and antibody.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Keep temperature and time identical.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Repeat trials and use same detection method.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Strong binding to X and little/no binding to Y.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Diagnostic tests can detect specific pathogens.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Antibodies can target specific antigens in vaccines or therapies.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "This reduces harm to non-target cells/tissues.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) antigen type vs binding (b) equal amounts/time/repeats (c) binds X not Y (d) diagnostics/targeted therapy.",
          "commonErrors": [
                    "Changing several variables at once so results are invalid."
          ]
},
        },
      ],
    },
    {
      id: "ebi10-u7-vaccination",
      title: "Vaccination and memory cells",
      skill: "Describe how vaccination produces active immunity and why secondary responses are faster.",
      lesson: {
        sections: [
          {
            heading: "How vaccination works",
            body: "A **vaccine** contains harmless antigens from a pathogen, often weakened or killed microbes or parts of them. When introduced, the antigens trigger lymphocytes to produce antibodies and **memory cells** without causing the full disease. This gives **active immunity** because the body has made its own immune response.",
          },
          {
            heading: "Memory cells and secondary response",
            body: "Memory cells remain after the first response. If the same pathogen later enters the body, memory cells are stimulated quickly to produce many more antibodies. This **secondary response** is faster and stronger than the first, often preventing symptoms or reducing disease severity.",
          },
        ],
        keyFormulas: [
          { name: "Vaccination", statement: "harmless antigens → antibodies + memory cells → active immunity" },
          { name: "Secondary response", statement: "faster and stronger antibody production on re-exposure" },
          { name: "Active immunity", statement: "body produces own antibodies after infection/vaccine" },
        ],
        workedExample: {
          problem: "Explain why a vaccinated person may not develop symptoms when exposed to the pathogen later.",
          solution: "The vaccine stimulated memory cells. On re-exposure, memory cells quickly produce many antibodies, destroying the pathogen before it causes noticeable disease.",
        },
      },
      questions: [
        {
          id: "ebi10-u7-vaccination-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a vaccine usually contain?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Live antibiotics"
                    },
                    {
                              "id": "b",
                              "text": "Red blood cells"
                    },
                    {
                              "id": "c",
                              "text": "Platelets"
                    },
                    {
                              "id": "d",
                              "text": "Harmless antigens"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Vaccine",
                              "statement": "Contains harmless antigens to stimulate immunity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vaccines contain harmless antigens, not antibiotics or blood cells.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(d) Harmless antigens",
          "commonErrors": [
                    "Thinking vaccines contain antibiotics."
          ]
},
        },
        {
          id: "ebi10-u7-vaccination-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define active immunity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Active immunity",
                              "statement": "Body produces own antibodies after infection or vaccination."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Active immunity is defence produced by the body's own immune response.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It can result from infection or vaccination.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Body makes own antibodies after infection/vaccine.",
          "commonErrors": [
                    "Confusing active immunity with receiving ready-made antibodies."
          ]
},
        },
        {
          id: "ebi10-u7-vaccination-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the steps by which vaccination produces immunity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Vaccination",
                              "statement": "Antigens stimulate antibodies and memory cells."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Harmless antigens from the vaccine enter the body.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Lymphocytes recognise the antigens and produce specific antibodies.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Memory cells are produced, giving active immunity and faster future responses.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Antigens → lymphocytes → antibodies + memory cells → active immunity.",
          "commonErrors": [
                    "Saying the vaccine directly destroys all future pathogens."
          ]
},
        },
        {
          id: "ebi10-u7-vaccination-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A vaccine contains killed bacteria.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why killed bacteria can still stimulate an immune response.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why the vaccine does not usually cause the disease.",
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
                              "name": "Killed vaccine",
                              "statement": "Antigens remain even if pathogen cannot replicate."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Killed bacteria still contain surface antigens.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Antigens can trigger lymphocytes to make antibodies.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The bacteria cannot reproduce or cause infection.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The immune response clears the antigens before disease develops.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Only memory cells remain for future protection.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) antigens still present (b) cannot replicate; immune system clears them.",
          "commonErrors": [
                    "Assuming killed pathogens cannot stimulate immunity because they are dead."
          ]
},
        },
        {
          id: "ebi10-u7-vaccination-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A person receives a vaccine and later is exposed to the real pathogen.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the first response after vaccination.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe the response after later exposure to the pathogen.",
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
                              "name": "Secondary response",
                              "statement": "Memory cells give faster, stronger response."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Vaccine antigens stimulate lymphocytes.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Antibodies are produced and memory cells form.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The person becomes immune without severe disease.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Memory cells recognise the same antigen quickly.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "They stimulate rapid production of many antibodies.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The secondary response is faster and stronger.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The pathogen is destroyed before symptoms develop.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) antibodies + memory cells (b) memory cells → rapid strong antibody response.",
          "commonErrors": [
                    "Saying the first response is faster than the second; secondary is faster."
          ]
},
        },
        {
          id: "ebi10-u7-vaccination-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A community has low vaccination coverage and an outbreak occurs.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how vaccination protects vaccinated individuals.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how high vaccination coverage can protect unvaccinated people.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate one advantage and one disadvantage of widespread vaccination.",
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
                              "name": "Vaccination and herd protection",
                              "statement": "Memory cells protect individuals; fewer susceptible hosts reduce spread."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Vaccine antigens produce antibodies and memory cells.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "On exposure, secondary response destroys pathogen quickly.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Vaccinated individuals are less likely to develop disease.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "If most people are immune, pathogen cannot spread easily.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Unvaccinated people encounter fewer infectious contacts.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This indirect protection is sometimes called herd immunity.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Advantage: reduces disease incidence and can eradicate some diseases.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Disadvantage: rare side effects, cost, or unequal access can limit coverage.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) memory cells protect individual (b) fewer susceptible hosts reduce spread (c) advantage prevents disease; disadvantage cost/side effects/access.",
          "commonErrors": [
                    "Claiming vaccines protect only the vaccinated person and have no community effect."
          ]
},
        },
      ],
    },
  ],

};
