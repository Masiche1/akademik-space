import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "edxbteceng-u8-lesson-8-3",
  code: "8-3",
  title: "Inspection Methods and Statistical Quality Control",
  goal: "I CAN plan inspection methods and interpret statistical process control data.",
  standards: ["Pearson BTEC Level 3 National Engineering — quality and inspection", "Statistical process control principles for engineering manufacture"],
  
  vocabulary: [
    { term: "Inspection", definition: "The process of checking a product or process against specified requirements." },
    { term: "Attribute inspection", definition: "Inspection that classifies items as pass or fail without measuring a continuous value." },
    { term: "Variable inspection", definition: "Inspection that measures a continuous characteristic such as length or diameter." },
    { term: "Control chart", definition: "A graph of process data with control limits used to detect assignable causes." },
    { term: "Process capability", definition: "The ability of a stable process to produce within specification limits." },
    { term: "Assignable cause", definition: "A specific, identifiable source of variation such as tool wear or operator change." },
  ],
  concepts: [
    {
      id: "edxbteceng-u8-8-3-insp",
      title: "Inspection methods and sampling",
      skill: "Choose inspection methods, gauges and sampling plans for manufactured parts.",
      lesson: {
        sections: [
          {
            heading: "Attribute versus variable inspection",
            body: "Attribute inspection answers pass/fail questions: does the part fit the gauge, is the surface acceptable, is the colour correct. It is fast and needs less operator skill but gives less information. Variable inspection records a measured value, such as 25.03 mm, and supports statistical analysis. Use variable inspection for critical dimensions and attribute inspection for rapid sorting or functional checks.",
          },
          {
            heading: "Gauges, comparators and CMM",
            body: "Go/no-go gauges quickly check whether a feature is within limits. Comparators such as dial indicators and optical comparators magnify small deviations. A coordinate measuring machine (CMM) uses a precision probe to measure many points and can verify complex geometry, but it is slower and requires a controlled environment. Sampling plans balance inspection cost against risk; critical features may need 100% inspection, while stable processes can use AQL sampling.",
          },
        ],
        keyFormulas: [
          { name: "Go/no-go", statement: "Pass if the feature enters the go gauge and does not enter the no-go gauge" },
          { name: "AQL sampling", statement: "Acceptable quality level defines the maximum tolerable defect rate in a lot" },
          { name: "Inspection coverage", statement: "critical features -> higher inspection frequency" },
        ],
        workedExample: {
          problem: "A production batch of 500 washers needs thread inspection. Should the inspector use go/no-go thread gauges or measure every thread with a micrometer?",
          solution: "Use go/no-go thread gauges for rapid functional checking unless the specification requires a measured thread value. If capability data show risk, increase sampling or inspect 100% during process changes.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u8-insp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A go/no-go plug gauge is an example of which inspection type?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Variable inspection"
                    },
                    {
                              "id": "b",
                              "text": "Attribute inspection"
                    },
                    {
                              "id": "c",
                              "text": "Destructive testing"
                    },
                    {
                              "id": "d",
                              "text": "Statistical sampling"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Attribute inspection",
                              "statement": "Classifies items as pass or fail without measuring a continuous value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A go/no-go gauge gives a pass/fail result only.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Attribute inspection"
},
        },
        {
          id: "edxbteceng-u8-insp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give one advantage and one disadvantage of attribute inspection compared with variable inspection.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Attribute versus variable",
                              "statement": "Attribute is fast but less informative; variable measures continuous values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Advantage: fast, simple and suitable for high-volume sorting.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Disadvantage: no measured value, so less useful for process trending.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Fast and simple but less informative."
},
        },
        {
          id: "edxbteceng-u8-insp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the steps an inspector should follow when checking a batch of machined holes with a CMM.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "CMM inspection",
                              "statement": "Prepare part, establish datums, probe points, analyse and report."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clean and mount the part, align it to the drawing datums.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Probe sufficient points to define the feature and verify position or size.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compare results with specification and report deviations.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Mount, align, probe, analyse and report."
},
        },
        {
          id: "edxbteceng-u8-insp-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "An inspector must verify a 25 mm bore with tolerance +/- 0.05 mm.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the specification limits.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain why a bore gauge may be preferable to an outside micrometer.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give one reason a CMM might be used instead of hand tools.",
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
                              "name": "Bore inspection",
                              "statement": "Use tools that match the feature geometry and required data."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Limits = 24.95 mm and 25.05 mm.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "A bore gauge contacts the internal surface directly and measures the hole size more reliably.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "A CMM can measure position, form and multiple features automatically with recorded data.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "24.95-25.05 mm; bore gauge for size, CMM for geometry and data."
},
        },
        {
          id: "edxbteceng-u8-insp-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A batch of 1000 brackets is inspected using an AQL sampling plan.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State what AQL means.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why sampling is used instead of inspecting every part.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State two risks of sampling inspection.",
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
                              "name": "AQL",
                              "statement": "Acceptable quality level is the maximum tolerable defect rate for acceptance."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "AQL defines the worst acceptable quality level in a lot.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sampling reduces inspection time and cost while still detecting systematic problems.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Defective parts may escape, and small lots may not represent the process.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "AQL = acceptable defect limit; sampling saves time but may miss defects."
},
        },
        {
          id: "edxbteceng-u8-insp-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A workshop inspects 20 brackets per hour from a CNC cell and records pass/fail results.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State one advantage of recording pass/fail data.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain why a variable measurement may be needed for a critical bore.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe how the inspection plan should change after a tool change.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State two pieces of information that should appear on an inspection report.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Explain why inspection alone does not guarantee quality.",
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
                              "name": "Inspection as feedback",
                              "statement": "Inspection detects problems; process control prevents them."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Pass/fail data quickly shows defect rate and lot acceptance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "A measured bore supports capability analysis and trend detection.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Increase inspection frequency or inspect 100% until the process is stable again.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Part number/batch, specification, measured results, inspector and date/calibration status.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Inspection finds defects after they occur; prevention requires process control and capable design.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Record batch/spec/results; increase checks after tool change; inspection detects but does not prevent defects."
},
        },
      ],
    },
    {
      id: "edxbteceng-u8-8-3-spc",
      title: "Statistical process control and capability",
      skill: "Interpret control charts and calculate process capability indices.",
      lesson: {
        sections: [
          {
            heading: "Control charts",
            body: "Control charts plot process statistics over time with a centre line and upper and lower control limits. Points outside limits or non-random patterns indicate an assignable cause such as tool wear, material change or operator difference. Common charts include X-bar and range charts for variable data and p or c charts for attribute data. The aim is not zero variation but stable, predictable variation within specification.",
          },
          {
            heading: "Process capability",
            body: "Process capability compares the natural spread of a stable process with the specification width. Cp = (USL - LSL) / (6 sigma) ignores centring; Cpk also considers how close the mean is to each limit. A capable process usually has Cpk at least 1.33 for critical features, meaning the specification limits are about four standard deviations from the mean. Capability must be calculated only when the process is stable.",
          },
        ],
        keyFormulas: [
          { name: "Cp", statement: "Cp = (USL - LSL) / (6 sigma)" },
          { name: "Cpk", statement: "Cpk = min((USL - mean)/(3 sigma), (mean - LSL)/(3 sigma))" },
          { name: "Control limits", statement: "centre line +/- control-limit constant x standard deviation or subgroup range" },
        ],
        workedExample: {
          problem: "A stable process has mean 10.0 mm, sigma 0.4 mm, USL 11.0 mm and LSL 9.0 mm. Find Cp and Cpk.",
          solution: "Cp = (11 - 9) / (6 x 0.4) = 2 / 2.4 = 0.833. Distance to each limit = 1.0 mm, so Cpk = 1.0 / (3 x 0.4) = 0.833. The process is not capable because Cpk is below 1.33.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u8-spc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a point outside the control limits on a control chart usually indicate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An assignable cause of variation"
                    },
                    {
                              "id": "b",
                              "text": "Normal random variation"
                    },
                    {
                              "id": "c",
                              "text": "The specification is too wide"
                    },
                    {
                              "id": "d",
                              "text": "The chart should be ignored"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Control limits",
                              "statement": "Out-of-control signals indicate special or assignable causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Control limits separate common-cause variation from special causes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Assignable cause"
},
        },
        {
          id: "edxbteceng-u8-spc-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A process has USL 12 mm, LSL 8 mm and sigma 0.5 mm. Calculate Cp.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Cp",
                              "answer": 1.333,
                              "tolerance": 0.001
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cp",
                              "statement": "Cp = (USL - LSL)/(6 sigma)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Specification width = 12 - 8 = 4 mm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "6 sigma = 6 x 0.5 = 3 mm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cp = 4 / 3 = 1.333.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1.333"
},
        },
        {
          id: "edxbteceng-u8-spc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why capability indices should only be calculated when a process is stable.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Stability before capability",
                              "statement": "Capability assumes the process distribution is stable and predictable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "An unstable process has assignable causes that change its mean or spread.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cp and Cpk depend on a representative sigma and mean.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Calculate capability only after the control chart shows statistical control.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Capability requires a stable process distribution."
},
        },
        {
          id: "edxbteceng-u8-spc-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A stable process has mean 10.0 mm and sigma 0.4 mm. Specification limits are USL 11.0 mm and LSL 9.0 mm.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate Cp.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate Cpk.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cp and Cpk",
                              "statement": "Cp measures spread; Cpk also measures centring."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Cp = (11 - 9)/(6 x 0.4) = 2/2.4 = 0.833.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Distance to each limit = 1.0 mm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Cpk = 1.0/(3 x 0.4) = 0.833.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "The process is not capable because Cpk is below 1.33.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Cp = 0.833; Cpk = 0.833; not capable."
},
        },
        {
          id: "edxbteceng-u8-spc-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A control chart for a turning operation shows seven consecutive points above the centre line but still inside the control limits.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State whether this pattern is acceptable.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain what the pattern suggests.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest two possible causes.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State the correct action.",
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
                              "name": "Non-random patterns",
                              "statement": "Runs or trends indicate process change even if limits are not exceeded."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "It is not acceptable because the run is non-random.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "A sustained shift suggests the process mean has changed.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Tool wear, material batch change, temperature drift or operator change.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Investigate and correct the assignable cause before continuing production.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Non-random run; investigate cause and correct process."
},
        },
        {
          id: "edxbteceng-u8-spc-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A CNC cell produces brackets with a critical bore. The team wants a simple SPC plan.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the characteristic that should be measured.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain why subgroup means and ranges are used for variable data.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe how control limits are set.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain the difference between control limits and specification limits.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "State the action when a point exceeds a control limit.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Explain why capability is checked after stability.",
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
                              "name": "SPC implementation",
                              "statement": "Measure key variables, plot subgroup statistics, react to signals, then assess capability."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Measure the bore diameter because it is the critical functional dimension.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Subgroup means track centring; ranges track within-subgroup spread.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Control limits are set from process data using constants times subgroup range or standard deviation.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Control limits describe process behaviour; specification limits define acceptable product.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "Stop or adjust the process and investigate the assignable cause.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Capability assumes a stable distribution, so unstable data gives misleading indices.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Measure bore; use X-bar/R chart; set limits from process data; distinguish control from spec limits; act on signals before capability."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbteceng-u8-spc-notes",
      title: "Inspection and SPC — notes",
      summary: "Use the right inspection method, sample intelligently, control the process statistically and calculate capability only when stable.",
      sections: [
        { heading: "Inspection choice", body: "Attribute inspection gives pass/fail speed; variable inspection gives measured values for analysis. Gauges and CMMs suit different features." },
        { heading: "Control charts", body: "Control limits detect special causes; specification limits define product acceptability. Non-random patterns matter even inside limits." },
        { heading: "Capability", body: "Cp measures spread potential; Cpk includes centring. Aim for Cpk at least 1.33 on critical features when stable." },
      ],
    },
  ],
};
