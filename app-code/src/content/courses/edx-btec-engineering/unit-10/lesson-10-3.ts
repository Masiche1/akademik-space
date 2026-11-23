import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "edxbteceng-u10-lesson-10-3",
  code: "10-3",
  title: "Fault Diagnosis and Condition Monitoring",
  goal: "I CAN use condition-monitoring data and structured analysis to diagnose faults.",
  standards: ["Pearson BTEC Level 3 National Engineering — condition monitoring and fault diagnosis", "Vibration, oil analysis, thermography and root-cause analysis"],
  
  vocabulary: [
    { term: "Condition monitoring", definition: "Periodic measurement of equipment condition to detect deterioration." },
    { term: "Vibration analysis", definition: "Measurement of machine vibration to detect imbalance, misalignment or bearing faults." },
    { term: "Oil analysis", definition: "Testing lubricant for wear particles, contamination and viscosity change." },
    { term: "Thermography", definition: "Measurement of surface temperature using infrared imaging." },
    { term: "FMEA", definition: "Failure mode and effects analysis: systematic ranking of possible failures." },
    { term: "Root cause analysis", definition: "Structured investigation to identify the underlying cause of a failure." },
  ],
  concepts: [
    {
      id: "edxbteceng-u10-10-3-cond",
      title: "Condition monitoring techniques",
      skill: "Select monitoring techniques and interpret common fault indicators.",
      lesson: {
        sections: [
          {
            heading: "Common monitoring methods",
            body: "Vibration analysis is effective for rotating equipment such as motors, pumps and gearboxes; bearing defects often appear as high-frequency peaks. Oil analysis detects wear metals, water, fuel dilution and viscosity loss in lubricated systems. Thermography finds hot spots in electrical connections, bearings and process equipment. Ultrasound detects leaks, arcing and early bearing noise. Each technique requires baseline data and clear alarm limits; readings must be interpreted in context rather than in isolation.",
          },
          {
            heading: "Interpreting indicators",
            body: "A rising vibration trend may indicate bearing wear or looseness. A sudden temperature rise may indicate friction, blockage or electrical overload. Metal particles in oil suggest gear or bearing wear; coolant contamination suggests a seal leak. The monitoring system should combine measurements with operating conditions, maintenance history and visual inspection. Action limits should trigger investigation, not automatic replacement, unless the risk justifies it.",
          },
        ],
        keyFormulas: [
          { name: "Condition trend", statement: "compare current value with baseline and alarm limits" },
          { name: "Vibration severity", statement: "rising amplitude or new frequencies indicate developing faults" },
          { name: "Oil wear", statement: "increasing wear metals indicate component degradation" },
        ],
        workedExample: {
          problem: "A pump bearing vibration rises from 2.0 mm/s to 5.5 mm/s over three weeks. Explain the likely meaning and action.",
          solution: "The rising trend suggests developing bearing or alignment fault. Inspect alignment and lubrication, increase monitoring frequency and plan maintenance if the action limit is reached.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u10-cond-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which technique is most suitable for detecting hot electrical connections?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Thermography"
                    },
                    {
                              "id": "b",
                              "text": "Oil analysis"
                    },
                    {
                              "id": "c",
                              "text": "Ultrasonic leak testing"
                    },
                    {
                              "id": "d",
                              "text": "Dimensional gauging"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Thermography",
                              "statement": "Infrared imaging detects surface temperature differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hot spots indicate resistive or loose connections.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Thermography"
},
        },
        {
          id: "edxbteceng-u10-cond-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A bearing vibration reading rises from 2.5 mm/s to 4.0 mm/s. Calculate the percentage increase.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "increase",
                              "answer": 60,
                              "unit": "%"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Percentage change",
                              "statement": "Change percent = (new - old) / old x 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Change = 4.0 - 2.5 = 1.5 mm/s.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Percent = 1.5 / 2.5 x 100 = 60%.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "60%"
},
        },
        {
          id: "edxbteceng-u10-cond-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what oil analysis can reveal about a gearbox.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Oil analysis",
                              "statement": "Lubricant testing reveals wear, contamination and degradation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wear metals indicate component degradation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Water, fuel or particles indicate contamination or seal problems.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Viscosity change shows lubricant breakdown or wrong oil.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Wear, contamination and lubricant condition."
},
        },
        {
          id: "edxbteceng-u10-cond-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Match monitoring techniques to possible faults on a machine.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Vibration analysis is best for which fault type?",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Thermography is best for which fault type?",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Oil analysis is best for which fault type?",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Give one reason a single measurement should not trigger immediate replacement.",
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
                              "name": "Technique matching",
                              "statement": "Choose the method that detects the relevant failure mechanism."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Rotating machinery faults such as imbalance, misalignment and bearing wear.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Electrical connections, friction and blocked cooling.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Gear/bearing wear and lubricant contamination in lubricated systems.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Readings can be affected by load, temperature or sensor error; trends and context are needed.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Vibration=rotating faults; thermography=heat; oil=wear/contamination; confirm with trend/context."
},
        },
        {
          id: "edxbteceng-u10-cond-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An ultrasonic leak detector and an infrared camera are available in a plant.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State a fault the ultrasonic detector could find.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "State a fault the infrared camera could find.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain why baseline readings are important.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain how alarm limits should be set.",
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
                              "name": "Condition monitoring setup",
                              "statement": "Baselines and limits make measurements meaningful."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Compressed air or vacuum leaks, electrical arcing or bearing noise.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Overheated connections, motors, bearings or process equipment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Baselines show normal condition for comparison under similar load.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Set limits from manufacturer data, historical performance and risk.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Ultrasound finds leaks/arcing; IR finds hot spots; use baselines and justified limits."
},
        },
        {
          id: "edxbteceng-u10-cond-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A critical pump has monthly vibration and quarterly oil analysis.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State why vibration is measured monthly.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State what oil analysis adds to vibration data.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain the role of operating load in interpretation.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Describe the action process when a limit is exceeded.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Explain why records should be kept for several years.",
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
                              "name": "Condition monitoring program",
                              "statement": "Combine techniques, context and trend records."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Monthly checks detect developing rotating faults before failure.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Oil analysis detects internal wear and contamination not visible externally.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Load and speed affect vibration and temperature, so comparisons must be like-for-like.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Verify measurement, inspect visually, check maintenance history and plan corrective action.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Long-term trends reveal degradation rates and support maintenance decisions.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Use vibration plus oil analysis; interpret under similar load; act on verified trends; keep history."
},
        },
      ],
    },
    {
      id: "edxbteceng-u10-10-3-rca",
      title: "Root cause analysis and FMEA",
      skill: "Use FMEA and structured analysis to find and prevent failure causes.",
      lesson: {
        sections: [
          {
            heading: "Failure mode and effects analysis",
            body: "FMEA systematically lists possible failure modes for a component or process, their effects, causes and current controls. Each failure mode is ranked, often by risk priority number RPN = severity x occurrence x detection. High RPN items receive design or process changes, inspections or controls. FMEA is proactive: it is used before failures occur to reduce risk. It should be updated when designs, materials or processes change.",
          },
          {
            heading: "Root cause analysis",
            body: "Root cause analysis investigates actual failures to find why they happened, not just what failed. Methods include the 5 Whys, fault trees, fishbone diagrams and timeline analysis. A good root cause is specific, verifiable and actionable; 'operator error' is usually too vague unless the system allowed the error. Corrective actions should eliminate or control the cause, and preventive actions should stop recurrence in similar equipment.",
          },
        ],
        keyFormulas: [
          { name: "RPN", statement: "RPN = severity x occurrence x detection" },
          { name: "5 Whys", statement: "ask why repeatedly until the underlying cause is found" },
          { name: "Corrective action", statement: "eliminate or control the verified root cause" },
        ],
        workedExample: {
          problem: "A pump seal fails repeatedly. RPN uses severity 8, occurrence 4 and detection 3. Calculate RPN and state the likely action.",
          solution: "RPN = 8 x 4 x 3 = 96. This is relatively high, so investigate the seal failure mode, improve detection or design out the cause.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u10-rca-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does FMEA stand for?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Failure mode and effects analysis"
                    },
                    {
                              "id": "b",
                              "text": "Fault monitoring and equipment assessment"
                    },
                    {
                              "id": "c",
                              "text": "Final maintenance evaluation analysis"
                    },
                    {
                              "id": "d",
                              "text": "Factory maintenance error audit"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "FMEA",
                              "statement": "Failure mode and effects analysis ranks possible failures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "FMEA identifies failure modes and their effects.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Failure mode and effects analysis"
},
        },
        {
          id: "edxbteceng-u10-rca-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An FMEA gives severity 7, occurrence 3 and detection 4. Calculate the RPN.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "RPN",
                              "answer": 84
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "RPN",
                              "statement": "RPN = severity x occurrence x detection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "RPN = 7 x 3 x 4.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "RPN = 84.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "84"
},
        },
        {
          id: "edxbteceng-u10-rca-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the purpose of the 5 Whys technique in root cause analysis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "5 Whys",
                              "statement": "Repeated questioning reveals underlying causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each 'why' moves from symptom to cause.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It avoids stopping at superficial explanations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The final cause should be specific and actionable.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Repeatedly ask why to reach the underlying cause."
},
        },
        {
          id: "edxbteceng-u10-rca-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A conveyor motor overheats every afternoon.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two possible root causes.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State one measurement that could confirm a cause.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain why 'operator error' may be an inadequate root cause.",
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
                              "name": "Root cause analysis",
                              "statement": "Identify underlying causes and verify them with evidence."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Blocked cooling, high ambient temperature, overload or failing bearings.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Measure current draw, bearing temperature or airflow.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "It may hide system factors such as poor training, faulty sensor or unrealistic procedure.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Possible causes: cooling, load, bearings; verify with measurements; operator error needs deeper analysis."
},
        },
        {
          id: "edxbteceng-u10-rca-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A gearbox oil change interval is being reviewed after repeated failures.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State three items an FMEA would list for the gearbox.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how severity, occurrence and detection differ.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one action that could reduce occurrence.",
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
                              "name": "FMEA application",
                              "statement": "Rank failure modes by effect, likelihood and detectability."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Failure modes: bearing wear, seal leak, gear tooth fracture; effects: downtime, contamination, noise.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Severity = effect seriousness; occurrence = likelihood; detection = chance of catching before failure.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Improve lubrication quality, reduce contamination or redesign the weak component.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "List modes/effects; understand S/O/D; reduce occurrence through design or process control."
},
        },
        {
          id: "edxbteceng-u10-rca-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A hydraulic press leaks oil and loses pressure during the afternoon shift.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List the immediate evidence to collect.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Use the 5 Whys to move from symptom to possible cause.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "State one test to verify the suspected cause.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Distinguish corrective from preventive action.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Explain why similar machines should be checked.",
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
                              "name": "Failure investigation",
                              "statement": "Collect evidence, ask why, verify cause and prevent recurrence."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Leak location, pressure readings, temperature, recent maintenance and oil condition.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Why pressure loss? Low fluid. Why low? Leak. Why leak? Worn seal. Why worn? Contamination or misalignment. Why that? Poor filtration/installation.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Pressure-test the system or inspect the seal and fluid contamination.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Corrective fixes this press; preventive improves filtration/procedure for all similar presses.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "The same cause may affect other machines with shared design or maintenance practice.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Collect evidence, trace cause with 5 Whys, verify, correct and prevent on similar machines."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbteceng-u10-rca-notes",
      title: "Condition monitoring and RCA — notes",
      summary: "Use the right monitoring method, verify trends and find root causes with FMEA and structured analysis.",
      sections: [
        { heading: "Monitoring", body: "Vibration for rotating faults, oil analysis for wear/contamination, thermography for heat, ultrasound for leaks/arcing." },
        { heading: "Trends and limits", body: "Baselines and alarm limits make readings meaningful; confirm single readings with context before acting." },
        { heading: "RCA and FMEA", body: "FMEA ranks possible failures; 5 Whys and evidence-based investigation find underlying causes and preventive actions." },
      ],
    },
  ],
};
