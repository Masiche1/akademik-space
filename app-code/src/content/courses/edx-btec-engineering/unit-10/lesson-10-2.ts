import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "edxbteceng-u10-lesson-10-2",
  code: "10-2",
  title: "Maintenance Strategies and Planning",
  goal: "I CAN compare maintenance strategies and plan maintenance using performance metrics.",
  standards: ["Pearson BTEC Level 3 National Engineering — maintenance management", "Preventive, predictive and total productive maintenance"],
  
  vocabulary: [
    { term: "Corrective maintenance", definition: "Maintenance performed after a failure to restore function." },
    { term: "Preventive maintenance", definition: "Scheduled maintenance performed before failure to reduce risk." },
    { term: "Predictive maintenance", definition: "Maintenance triggered by condition monitoring data indicating deterioration." },
    { term: "CMMS", definition: "Computerised maintenance management system for planning and recording maintenance." },
    { term: "TPM", definition: "Total productive maintenance: company-wide approach to maximise equipment effectiveness." },
    { term: "OEE", definition: "Overall equipment effectiveness = availability x performance x quality." },
  ],
  concepts: [
    {
      id: "edxbteceng-u10-10-2-str",
      title: "Maintenance strategies",
      skill: "Choose corrective, preventive, predictive or condition-based maintenance.",
      lesson: {
        sections: [
          {
            heading: "Corrective versus preventive",
            body: "Corrective maintenance fixes failures after they occur. It is simple and avoids unnecessary work, but unplanned downtime can be costly. Preventive maintenance is scheduled by time, usage or cycles to prevent failures. It reduces unexpected breakdowns but can waste effort if components are replaced too early. The best interval balances failure risk against maintenance cost and downtime.",
          },
          {
            heading: "Predictive and condition-based maintenance",
            body: "Predictive maintenance uses condition monitoring such as vibration, oil analysis, temperature or current to detect deterioration before failure. Condition-based maintenance performs work only when measured condition crosses a threshold. These methods suit expensive or critical assets where failure is costly. They require reliable sensors, trained personnel and clear action limits. A hybrid strategy is common: preventive tasks for routine items, predictive monitoring for critical rotating equipment and corrective repair for low-risk failures.",
          },
        ],
        keyFormulas: [
          { name: "Maintenance strategy", statement: "choose method by criticality, cost, failure mode and detectability" },
          { name: "Condition threshold", statement: "maintenance when measured value exceeds action limit" },
          { name: "Preventive interval", statement: "based on time, cycles or usage" },
        ],
        workedExample: {
          problem: "A critical CNC spindle has expensive downtime. Should the plant use only calendar-based oil changes?",
          solution: "A better strategy combines scheduled lubrication checks with oil analysis and vibration monitoring. Oil changes are performed when analysis shows contamination or viscosity loss, reducing unnecessary maintenance while protecting the spindle.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u10-str-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which maintenance strategy performs work only after a failure?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Corrective maintenance"
                    },
                    {
                              "id": "b",
                              "text": "Preventive maintenance"
                    },
                    {
                              "id": "c",
                              "text": "Predictive maintenance"
                    },
                    {
                              "id": "d",
                              "text": "TPM"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Corrective maintenance",
                              "statement": "Repair after failure occurs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Corrective maintenance responds to a failure.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Corrective maintenance"
},
        },
        {
          id: "edxbteceng-u10-str-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A gearbox is serviced every 2000 operating hours. State the maintenance strategy and its basis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Preventive maintenance",
                              "statement": "Scheduled maintenance before failure based on time or usage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "This is preventive maintenance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The basis is operating hours, a usage-based interval.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Preventive maintenance based on usage."
},
        },
        {
          id: "edxbteceng-u10-str-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare corrective and preventive maintenance for a conveyor drive motor.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Maintenance trade-off",
                              "statement": "Corrective avoids planned work but risks downtime; preventive reduces risk but may waste effort."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Corrective waits for failure, so it is cheaper in labour but may cause unplanned downtime.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Preventive schedules service before failure, improving reliability but using resources earlier.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The choice depends on failure cost, detectability and maintenance cost.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Corrective = reactive; preventive = planned risk reduction."
},
        },
        {
          id: "edxbteceng-u10-str-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A plant must choose maintenance strategies for three assets.",
          parts: [
          {
                    "label": "a",
                    "prompt": "A cheap conveyor roller bearing that fails rarely. Suggest a strategy.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "A critical CNC spindle with expensive downtime. Suggest a strategy.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "A hydraulic pump showing slowly rising temperature. Suggest a strategy.",
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
                              "name": "Strategy selection",
                              "statement": "Match strategy to criticality, cost and failure detectability."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Corrective or simple preventive replacement may be acceptable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Predictive/condition-based monitoring plus preventive lubrication is justified by high downtime cost.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Condition-based monitoring with a temperature action limit is appropriate.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Low-risk asset: corrective/preventive; critical spindle: predictive; pump: condition-based."
},
        },
        {
          id: "edxbteceng-u10-str-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A motor bearing has vibration limits: alert at 4.5 mm/s and action at 7.1 mm/s.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State what condition-based maintenance means.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the action at 5.0 mm/s.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State the action at 8.0 mm/s.",
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
                              "name": "Condition-based limits",
                              "statement": "Maintenance is triggered when measured condition crosses defined limits."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Maintenance is performed only when measured condition indicates deterioration.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "5.0 mm/s is above alert but below action, so increase monitoring and plan inspection.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "8.0 mm/s exceeds action limit, so schedule maintenance or replace the bearing promptly.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "CBM uses measured limits; 5 mm/s = monitor; 8 mm/s = act."
},
        },
        {
          id: "edxbteceng-u10-str-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A packaging line has frequent small stops and one critical robot cell.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest a strategy for the frequent small stops.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Suggest a strategy for the critical robot cell.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why one strategy may not fit all assets.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State how maintenance data should be recorded.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Explain how strategy review should be triggered.",
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
                              "name": "Maintenance portfolio",
                              "statement": "Use different strategies by asset criticality and failure mode."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Analyse failure data; use preventive checks or quick corrective fixes for low-criticality stops.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use predictive monitoring and planned maintenance for the robot cell.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Cost, downtime, detectability and safety differ between assets.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Record date, asset, task, condition readings, parts and downtime in a CMMS.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Review after repeated failures, cost changes or new condition data.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Differentiate strategies by asset; record data in CMMS; review when performance changes."
},
        },
      ],
    },
    {
      id: "edxbteceng-u10-10-2-plan",
      title: "Maintenance planning and performance",
      skill: "Use CMMS, TPM and OEE to plan and improve maintenance.",
      lesson: {
        sections: [
          {
            heading: "CMMS and planning",
            body: "A CMMS stores equipment records, maintenance schedules, work orders, spares and history. It helps plan preventive tasks, assign labour, track downtime and analyse failure trends. Good planning considers technician skills, spare parts, production windows and safety requirements. Maintenance windows should be scheduled to minimise production impact while keeping equipment within safe operating limits.",
          },
          {
            heading: "TPM and OEE",
            body: "Total productive maintenance involves operators, maintainers and engineers in keeping equipment effective. Its goals include eliminating breakdowns, reducing defects and improving overall equipment effectiveness. OEE = availability x performance x quality. Availability is operating time divided by planned production time. Performance compares actual output with ideal output. Quality is the proportion of good parts. Each factor is expressed as a decimal or percentage, so OEE shows where losses occur.",
          },
        ],
        keyFormulas: [
          { name: "OEE", statement: "OEE = availability x performance x quality" },
          { name: "Availability", statement: "availability = operating time / planned production time" },
          { name: "Performance", statement: "performance = actual output / ideal output" },
        ],
        workedExample: {
          problem: "A machine has availability 0.90, performance 0.95 and quality 0.98. Calculate OEE.",
          solution: "OEE = 0.90 x 0.95 x 0.98 = 0.8379, or 83.8 percent. The main losses are availability and performance.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u10-plan-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does CMMS stand for?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Computerised maintenance management system"
                    },
                    {
                              "id": "b",
                              "text": "Continuous machine monitoring system"
                    },
                    {
                              "id": "c",
                              "text": "Cost management and scheduling"
                    },
                    {
                              "id": "d",
                              "text": "Condition monitoring management software"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CMMS",
                              "statement": "System for planning and recording maintenance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CMMS = computerised maintenance management system.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Computerised maintenance management system"
},
        },
        {
          id: "edxbteceng-u10-plan-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A machine has availability 0.90, performance 0.95 and quality 0.98. Calculate OEE as a percentage to 1 decimal place.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "OEE",
                              "answer": 83.8,
                              "unit": "%"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "OEE",
                              "statement": "OEE = availability x performance x quality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "OEE = 0.90 x 0.95 x 0.98.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "OEE = 0.8379.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "OEE = 83.8 percent.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "83.8%"
},
        },
        {
          id: "edxbteceng-u10-plan-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two benefits of total productive maintenance.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "TPM",
                              "statement": "Company-wide approach to maximise equipment effectiveness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "TPM reduces breakdowns and defects by involving operators in daily care.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It improves skills, communication and early detection of problems.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It supports higher OEE and more reliable production.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Fewer breakdowns/defects and better teamwork/reliability."
},
        },
        {
          id: "edxbteceng-u10-plan-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A machine is planned for 480 minutes. It runs 420 minutes, produces 800 parts against an ideal 900, and has 40 defective parts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate availability as a decimal.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate performance as a decimal.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Calculate quality as a decimal.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "OEE components",
                              "statement": "Availability, performance and quality are ratios of actual to ideal."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Availability = 420 / 480 = 0.875.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Performance = 800 / 900 = 0.889.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Good parts = 800 - 40 = 760; quality = 760 / 800 = 0.95.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Availability 0.875; performance 0.889; quality 0.95."
},
        },
        {
          id: "edxbteceng-u10-plan-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A plant wants to reduce unplanned downtime on a bottleneck machine.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two preventive maintenance tasks that could help.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State two spares-management improvements.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain how a CMMS supports the plan.",
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
                              "name": "Downtime reduction",
                              "statement": "Prevent failures and shorten repair time."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Scheduled lubrication, belt inspection, filter changes or alignment checks.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Stock critical spares and track usage to avoid waiting for parts.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "CMMS schedules tasks, records history and identifies recurring failures.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Preventive tasks, spare control and CMMS scheduling reduce downtime."
},
        },
        {
          id: "edxbteceng-u10-plan-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A CNC cell has OEE about 68 percent. Availability is 0.80, performance 0.90 and quality 0.95.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Verify the OEE calculation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Identify the largest loss factor.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Suggest two actions to improve availability.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Suggest two actions to improve performance.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Explain why quality should be monitored even when it is high.",
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
                              "name": "OEE improvement",
                              "statement": "Target the lowest OEE factor with specific loss-reduction actions."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "OEE = 0.80 x 0.90 x 0.95 = 0.684 = 68.4 percent.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Availability 0.80 is the largest loss.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Reduce breakdowns with preventive maintenance and faster repairs with spares/training.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Reduce minor stops and optimise cycle parameters or tooling.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Small quality losses compound and may indicate tool wear or process drift.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "OEE = 68.4%; improve availability first, then performance; monitor quality for drift."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbteceng-u10-str-notes",
      title: "Maintenance strategies and planning — notes",
      summary: "Choose strategy by criticality and detectability; plan work with CMMS and measure performance with OEE.",
      sections: [
        { heading: "Strategies", body: "Corrective repairs after failure; preventive schedules before failure; predictive/condition-based uses measured condition." },
        { heading: "Planning", body: "CMMS stores schedules, work orders, spares and history. Plan around production windows and safety." },
        { heading: "OEE", body: "OEE = availability x performance x quality; target the lowest factor to improve output." },
      ],
    },
  ],
};
