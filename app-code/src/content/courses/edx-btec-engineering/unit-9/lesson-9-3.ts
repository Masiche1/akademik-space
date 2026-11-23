import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "edxbteceng-u9-lesson-9-3",
  code: "9-3",
  title: "Bearings, Lubrication and Fasteners",
  goal: "I CAN select bearings and fasteners and explain lubrication regimes.",
  standards: ["Pearson BTEC Level 3 National Engineering — machine elements", "Bearings, lubrication and bolted joints"],
  
  vocabulary: [
    { term: "Bearing", definition: "Machine element that supports a rotating shaft while reducing friction." },
    { term: "Radial load", definition: "Load acting perpendicular to the shaft axis." },
    { term: "Axial load", definition: "Load acting along the shaft axis." },
    { term: "Rolling-element bearing", definition: "Bearing using balls or rollers between races." },
    { term: "Lubrication regime", definition: "State of lubrication: boundary, mixed or full fluid film." },
    { term: "Fastener", definition: "Component such as a bolt or screw used to join parts." },
  ],
  concepts: [
    {
      id: "edxbteceng-u9-9-3-bear",
      title: "Bearing types and selection",
      skill: "Select bearings for load direction and calculate basic bearing life.",
      lesson: {
        sections: [
          {
            heading: "Bearing types",
            body: "Plain bearings use a sliding surface and are simple and compact but need good lubrication. Rolling-element bearings use balls or rollers to reduce friction and are common in machinery. Deep-groove ball bearings handle radial and some axial loads; taper roller bearings handle combined loads; thrust bearings handle mainly axial loads. Bearing selection depends on load direction, speed, life, environment, cost and space.",
          },
          {
            heading: "Basic rating life",
            body: "Bearing manufacturers give dynamic load ratings and L10 life. L10 is the life in millions of revolutions that 90 percent of identical bearings should reach. For ball bearings, L10 = (C/P)^3; for roller bearings the exponent is often 10/3. C is the basic dynamic load rating and P is the equivalent dynamic load. Higher C or lower P gives longer life. Fit, lubrication and alignment strongly affect actual bearing life.",
          },
        ],
        keyFormulas: [
          { name: "L10 ball bearing", statement: "L10 = (C/P)^3 million revolutions" },
          { name: "Equivalent load", statement: "P combines radial and axial loads" },
          { name: "Fit", statement: "shaft/housing fits affect bearing life" },
        ],
        workedExample: {
          problem: "A ball bearing has C = 20 kN and P = 5 kN. Estimate L10 life.",
          solution: "L10 = (20/5)^3 = 4^3 = 64 million revolutions.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u9-bear-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which bearing is best suited mainly to axial load?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Thrust bearing"
                    },
                    {
                              "id": "b",
                              "text": "Deep-groove ball bearing"
                    },
                    {
                              "id": "c",
                              "text": "Plain bush"
                    },
                    {
                              "id": "d",
                              "text": "V-belt"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Thrust bearing",
                              "statement": "Designed mainly for axial loads."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thrust bearings support loads along the shaft axis.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Thrust bearing"
},
        },
        {
          id: "edxbteceng-u9-bear-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A ball bearing has C = 20 kN and P = 5 kN. Calculate L10 in millions of revolutions.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "L10",
                              "answer": 64,
                              "unit": "million rev"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "L10 life",
                              "statement": "L10 = (C/P)^3 for ball bearings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "C/P = 20/5 = 4.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "L10 = 4^3 = 64 million revolutions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "64 million revolutions"
},
        },
        {
          id: "edxbteceng-u9-bear-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare plain and rolling-element bearings.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Bearing comparison",
                              "statement": "Plain bearings slide; rolling bearings roll to reduce friction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plain bearings are compact and handle misalignment but need lubrication.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Rolling bearings have lower friction and longer life under load but cost more.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Choice depends on load, speed, space and maintenance.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Plain = simple/sliding; rolling = lower friction/longer life."
},
        },
        {
          id: "edxbteceng-u9-bear-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A shaft has both radial and axial loads and runs at high speed.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest a suitable bearing type.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain why deep-groove ball bearings may be limited.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State two installation factors affecting bearing life.",
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
                              "name": "Bearing selection",
                              "statement": "Match bearing to load direction, speed and environment."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Taper roller or angular contact bearing for combined loads.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Ball bearings handle limited axial load compared with roller designs.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Correct fit, alignment and lubrication affect life.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Angular contact/taper roller bearing; check fit, alignment and lubrication."
},
        },
        {
          id: "edxbteceng-u9-bear-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A bearing fails earlier than its calculated L10 life.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List three possible causes.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State one inspection that could confirm a cause.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why calculated life is not guaranteed.",
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
                              "name": "Bearing life",
                              "statement": "L10 is statistical and assumes correct installation and lubrication."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Poor lubrication, misalignment, contamination or incorrect fit.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Inspect lubricant, check alignment and examine raceways for damage.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "L10 means 90% should reach that life under ideal conditions.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Lubrication, alignment, contamination or fit; inspect to confirm."
},
        },
        {
          id: "edxbteceng-u9-bear-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A conveyor drive shaft needs bearings at both ends and carries radial load with some axial thrust.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Choose a bearing arrangement and justify it.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the purpose of locating and non-locating bearings.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State two maintenance checks for the bearings.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain how vibration monitoring helps.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "State one consequence of using the wrong bearing fit.",
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
                              "name": "Bearing arrangement",
                              "statement": "Support shaft, control axial location and allow thermal expansion."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Use angular contact or taper roller bearings where axial load exists.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Locating bearing controls axial position; non-locating allows thermal expansion.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Check lubrication, temperature, noise and vibration.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Vibration trends reveal early bearing defects.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "Wrong fit can cause looseness, overload or seizure.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Use angular contact/taper bearings; locate axially, allow expansion; monitor condition."
},
        },
      ],
    },
    {
      id: "edxbteceng-u9-9-3-lube",
      title: "Lubrication and bolted joints",
      skill: "Explain lubrication regimes and select fasteners for bolted joints.",
      lesson: {
        sections: [
          {
            heading: "Lubrication regimes",
            body: "Boundary lubrication occurs when surfaces touch and rely on lubricant films too thin to separate them. Mixed lubrication has partial surface contact. Full fluid-film lubrication separates surfaces completely, giving very low friction and wear. The regime depends on speed, load, viscosity and surface finish. Too little lubricant causes wear; too much can cause churning losses. Viscosity index describes how viscosity changes with temperature.",
          },
          {
            heading: "Bolted joints",
            body: "Bolts and screws clamp parts together, creating friction that resists separation. Bolt torque T = K F d, where K is the friction/nut factor, F is preload and d is nominal diameter. Proper tightening sequence and torque matter because uneven clamping can distort parts or loosen under vibration. Lock washers, thread-lock compounds and controlled tightening methods improve joint reliability. Fastener selection must consider load, environment, temperature and whether vibration is present.",
          },
        ],
        keyFormulas: [
          { name: "Bolt torque", statement: "T = K F d" },
          { name: "Lubrication regimes", statement: "boundary -> mixed -> full fluid film" },
          { name: "Preload", statement: "clamping force created by bolt tightening" },
        ],
        workedExample: {
          problem: "A bolt has K = 0.20, preload 8000 N and diameter 12 mm. Find tightening torque.",
          solution: "T = 0.20 x 8000 x 0.012 = 19.2 N m.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u9-lube-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of lubricating a bearing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To reduce friction and wear"
                    },
                    {
                              "id": "b",
                              "text": "To increase load capacity directly"
                    },
                    {
                              "id": "c",
                              "text": "To cool the motor only"
                    },
                    {
                              "id": "d",
                              "text": "To change the gear ratio"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lubrication",
                              "statement": "Lubricant reduces friction and separates surfaces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lubrication protects surfaces and reduces wear.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Reduce friction and wear"
},
        },
        {
          id: "edxbteceng-u9-lube-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A bolt has K = 0.20, preload 8000 N and diameter 12 mm. Calculate tightening torque.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "torque",
                              "answer": 19.2,
                              "unit": "N m"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Bolt torque",
                              "statement": "T = K F d."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "T = 0.20 x 8000 x 0.012.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "T = 19.2 N m.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "19.2 N m"
},
        },
        {
          id: "edxbteceng-u9-lube-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the three lubrication regimes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lubrication regimes",
                              "statement": "Boundary, mixed and full film describe surface separation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Boundary: surfaces mostly touch, lubricant only protects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Mixed: partial contact with some fluid film.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Full film: surfaces separated, lowest friction and wear.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Boundary, mixed and full fluid film."
},
        },
        {
          id: "edxbteceng-u9-lube-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A machine frame is joined by bolts and operates in a vibrating environment.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two fastener features that improve vibration resistance.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why tightening sequence matters.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one consequence of over-tightening.",
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
                              "name": "Bolted joint design",
                              "statement": "Control preload, friction and clamp distribution."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Lock washers, thread-lock compound, serrated flanges or controlled torque.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Even tightening prevents distortion and ensures uniform clamping.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Over-tightening can stretch bolts or crack parts.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Use vibration-resistant features; tighten evenly; avoid over-tightening."
},
        },
        {
          id: "edxbteceng-u9-lube-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A gearbox oil is changed every 2000 hours. A new oil analysis programme is proposed.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how oil analysis could improve the programme.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State two lubricant properties to monitor.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why viscosity matters.",
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
                              "name": "Lubricant monitoring",
                              "statement": "Oil condition indicates wear and contamination."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Analysis can extend intervals when oil remains good or trigger earlier changes when degraded.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Viscosity and contamination such as water, particles or wear metals.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Viscosity determines film thickness and load capacity.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Oil analysis optimises intervals; monitor viscosity and contamination."
},
        },
        {
          id: "edxbteceng-u9-lube-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A bolted conveyor guard keeps loosening in service.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List three possible causes.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State two inspection checks before tightening.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain the role of preload in joint security.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Suggest two corrective actions.",
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
                              "name": "Joint reliability",
                              "statement": "Preload, friction and vibration control determine loosening."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Vibration, inadequate preload, poor thread condition or missing locking feature.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Check bolt condition, thread damage, washer presence and surface cleanliness.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Preload creates friction that resists bolt rotation and joint separation.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Use thread-lock compound, lock washers or retorque to specified value.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Causes: vibration/preload/threads; inspect before retorque; control preload and locking."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbteceng-u9-bear-notes",
      title: "Bearings, lubrication and fasteners — notes",
      summary: "Select bearings for load and life; lubricate to separate surfaces; control preload in bolted joints.",
      sections: [
        { heading: "Bearings", body: "Choose by load direction and speed. L10 = (C/P)^3 for ball bearings gives statistical life." },
        { heading: "Lubrication", body: "Boundary, mixed and full-film regimes depend on speed, load and viscosity." },
        { heading: "Fasteners", body: "Bolt torque T = K F d; even tightening and locking features prevent loosening." },
      ],
    },
  ],
};
