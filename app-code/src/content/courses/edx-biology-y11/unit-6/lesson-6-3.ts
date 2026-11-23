import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "ebi11-u6-lesson-6-3",
  code: "6-3",
  title: "Temperature, pH and Enzyme Investigations",
  goal: "I CAN explain how temperature and pH affect enzyme activity and describe investigations of enzyme activity.",
  standards: ["4BI1 2.11", "4BI1 2.12", "4BI1 2.13", "4BI1 2.14B"],
  
  vocabulary: [
    { term: "Optimum", definition: "Temperature or pH at which enzyme works fastest." },
    { term: "Denaturation", definition: "Permanent change in enzyme active-site shape caused by high temperature or extreme pH." },
    { term: "Active site", definition: "Region of enzyme that binds substrate." },
    { term: "Buffer", definition: "Solution that maintains constant pH." },
    { term: "Enzyme activity", definition: "Rate at which enzyme catalyses reaction." },
    { term: "Water bath", definition: "Equipment used to control temperature in enzyme experiments." },
  ],
  concepts: [
    {
      id: "ebi11-u6-enzyme-factors",
      title: "Effects of temperature and pH",
      skill: "Explain how temperature and pH affect enzyme activity and describe denaturation.",
      lesson: {
        sections: [
          {
            heading: "Temperature",
            body: "Increasing temperature increases kinetic energy of molecules, so enzyme and substrate collide more often and react faster. Enzyme activity rises to an optimum temperature, then falls sharply at high temperature because the enzyme denatures: its active-site shape changes permanently. Low temperatures slow reactions but do not denature enzymes.",
          },
          {
            heading: "pH",
            body: "Each enzyme has an optimum pH. Changes in pH alter charges on amino acids in the active site, changing its shape. Extreme pH denatures the enzyme. Pepsin works best at low pH in stomach; pancreatic enzymes work best at near-neutral pH after bile neutralises acid.",
          },
          {
            heading: "Denaturation",
            body: "Denaturation is permanent loss of enzyme activity due to changed active-site shape. It can be caused by high temperature or extreme pH. Denatured enzymes cannot be 'renatured' in school experiments; the substrate can no longer bind.",
          },
        ],
        keyFormulas: [
          { name: "Temperature effect", statement: "Rate rises to optimum then falls as enzyme denatures" },
          { name: "pH effect", statement: "Each enzyme has optimum pH; extreme pH denatures active site" },
          { name: "Denaturation", statement: "Permanent change in active-site shape" },
        ],
        workedExample: {
          problem: "Why does amylase activity fall after heating to 80°C?",
          solution: "High temperature denatures amylase by changing its active-site shape. Substrates can no longer bind, so activity falls.",
        },
      },
      questions: [
        {
          id: "ebi11-u6-factor-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to enzyme activity at very high temperature?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It increases forever"
                    },
                    {
                              "id": "b",
                              "text": "It stays the same"
                    },
                    {
                              "id": "c",
                              "text": "It stops because enzyme denatures"
                    },
                    {
                              "id": "d",
                              "text": "It becomes negative"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Denaturation",
                              "statement": "High temperature changes active-site shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "High temperature denatures enzyme.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** It stops because enzyme denatures"
},
        },
        {
          id: "ebi11-u6-factor-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is meant by optimum pH?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Optimum pH",
                              "statement": "pH at which enzyme works fastest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "pH giving maximum activity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Above/below it activity falls.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "pH of maximum enzyme activity"
},
        },
        {
          id: "ebi11-u6-factor-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why increasing temperature initially increases enzyme activity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Temperature and collisions",
                              "statement": "Higher temperature increases kinetic energy and collision frequency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Molecules move faster.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More enzyme-substrate collisions occur.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More enzyme-substrate complexes form per second.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "More collisions → faster reaction until optimum"
},
        },
        {
          id: "ebi11-u6-factor-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why extreme pH reduces enzyme activity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "pH and active site",
                              "statement": "pH changes active-site shape and substrate binding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "pH changes charges on amino acids.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Active-site shape changes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Substrate cannot bind properly.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Extreme pH may permanently denature enzyme.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "pH alters active-site shape and binding"
},
        },
        {
          id: "ebi11-u6-factor-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why pepsin works in the stomach but pancreatic enzymes need near-neutral pH.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain pepsin optimum.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain pancreatic enzyme optimum.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Role of bile.",
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
                              "name": "Enzyme pH optima",
                              "statement": "Each enzyme has optimum pH."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pepsin optimum is acidic stomach pH.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Pancreatic enzymes optimum near-neutral pH.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Bile neutralises stomach acid in duodenum.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Different enzymes have different optimum pH"
},
        },
        {
          id: "ebi11-u6-factor-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Explain temperature effect on enzyme activity. (b) Define optimum temperature and pH. (c) Explain denaturation. (d) Explain pepsin vs pancreatic enzymes. (e) Predict effect of low temperature. (f) State why low temperature does not denature enzyme.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Temperature effect.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Optima.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Denaturation.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Pepsin vs pancreatic.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Low temperature.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "No denaturation.",
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
                              "name": "Enzyme factors",
                              "statement": "Temperature and pH change active-site shape and collision rate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher temperature increases collisions until denaturation.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Optimum = maximum activity.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Permanent active-site shape change.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Pepsin acidic; pancreatic near-neutral after bile.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "d"
                    },
                    {
                              "reasoning": "Low temperature slows activity.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "e"
                    },
                    {
                              "reasoning": "Low temperature does not permanently change shape.",
                              "marks": 2,
                              "markCode": "R",
                              "part": "f"
                    }
          ],
          "finalAnswer": "Temperature and pH affect enzyme activity through collisions and shape."
},
        },
      ],
    },
    {
      id: "ebi11-u6-enzyme-investigations",
      title: "Investigating enzyme activity",
      skill: "Describe investigations of temperature and pH effects on enzyme activity and interpret results.",
      lesson: {
        sections: [
          {
            heading: "Temperature investigation",
            body: "Enzyme activity can be measured by product formation, such as oxygen bubbles from catalase or disappearance of starch with amylase. To investigate temperature, use water baths at different temperatures, keep pH, substrate and enzyme constant, and measure product formation over time. Results show activity rising to optimum then falling at high temperature.",
          },
          {
            heading: "pH investigation",
            body: "To investigate pH, use buffer solutions to keep pH constant, keep temperature and substrate constant, and measure product formation. Results show activity highest at optimum pH and lower at acidic or alkaline pH. Buffers prevent pH changing during reaction.",
          },
          {
            heading: "Fair testing",
            body: "Only one variable is changed; all others are controlled. Repeat trials and calculate mean. Measure dependent variable quantitatively, such as time for starch disappearance or volume of oxygen. Safety: water bath not flame; eye protection for reagents.",
          },
        ],
        keyFormulas: [
          { name: "Temperature investigation", statement: "Water baths; control pH/substrate/enzyme; measure product" },
          { name: "pH investigation", statement: "Buffers; control temperature/substrate; measure product" },
          { name: "Fair test", statement: "One variable changed; others controlled; repeats for reliability" },
        ],
        workedExample: {
          problem: "How would you investigate the effect of temperature on amylase activity?",
          solution: "Use starch and amylase at different water-bath temperatures; test with iodine to measure time for starch disappearance. Control pH and substrate concentration; repeat trials.",
        },
      },
      questions: [
        {
          id: "ebi11-u6-inv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which equipment controls temperature in enzyme experiments?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water bath"
                    },
                    {
                              "id": "b",
                              "text": "Balance"
                    },
                    {
                              "id": "c",
                              "text": "Test tube rack"
                    },
                    {
                              "id": "d",
                              "text": "Funnel"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Water bath",
                              "statement": "Controls temperature safely."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Water bath controls temperature.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Water bath"
},
        },
        {
          id: "ebi11-u6-inv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is used to keep pH constant in enzyme experiments?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Buffer",
                              "statement": "Maintains constant pH."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Buffer solution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It keeps pH constant.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Buffer solution"
},
        },
        {
          id: "ebi11-u6-inv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how to measure amylase activity in an experiment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Amylase assay",
                              "statement": "Measure starch disappearance or maltose formation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Add amylase to starch solution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Test samples with iodine at intervals.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Time for blue-black colour to disappear = activity.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Measure starch disappearance with iodine"
},
        },
        {
          id: "ebi11-u6-inv-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why temperature and pH must be controlled in enzyme experiments.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Fair testing",
                              "statement": "Only one variable should change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Temperature and pH affect enzyme activity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "If not controlled, results are invalid.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Only one variable should be tested.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Controls ensure fair comparison.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Control variables for valid results"
},
        },
        {
          id: "ebi11-u6-inv-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe an investigation of the effect of pH on catalase activity.",
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
                    "prompt": "State measurement and expected result.",
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
                              "name": "pH investigation",
                              "statement": "Use buffers to vary pH; measure oxygen production."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Independent: pH; dependent: catalase activity; control temperature/substrate/enzyme.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Use buffer solutions, add hydrogen peroxide, measure oxygen bubbles.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Activity highest at optimum pH; lower at acidic/alkaline.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Buffers vary pH; measure oxygen; optimum pH gives max activity"
},
        },
        {
          id: "ebi11-u6-inv-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Describe temperature investigation of amylase. (b) Describe pH investigation of catalase. (c) State variables to control. (d) Explain why repeats are needed. (e) State safety precautions. (f) Predict graph shape for temperature effect.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Temperature investigation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "pH investigation.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Controls.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Repeats.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Safety.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Graph shape.",
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
                              "name": "Enzyme investigations",
                              "statement": "Vary one factor, control others, measure activity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Water baths vary temperature; measure starch disappearance.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Buffers vary pH; measure oxygen from catalase.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Control substrate, enzyme, temperature/pH as appropriate.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Repeats give reliable mean/reduce anomalies.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "d"
                    },
                    {
                              "reasoning": "Water bath not flame; eye protection.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "e"
                    },
                    {
                              "reasoning": "Rate rises to optimum then falls sharply at high temperature.",
                              "marks": 3,
                              "markCode": "M",
                              "part": "f"
                    }
          ],
          "finalAnswer": "Enzyme investigations require controlled variables and quantitative measurement."
},
        },
      ],
    },
  ],

};
