import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "edxbteceng-u9-lesson-9-1",
  code: "9-1",
  title: "Simple Mechanisms and Levers",
  goal: "I CAN calculate lever effort and explain the function of common linkages.",
  standards: ["Pearson BTEC Level 3 National Engineering — mechanics and machine elements", "Simple machines, levers, linkages and mechanisms"],
  
  vocabulary: [
    { term: "Lever", definition: "A rigid bar that pivots about a fulcrum to transmit force." },
    { term: "Fulcrum", definition: "The fixed pivot point of a lever." },
    { term: "Mechanical advantage", definition: "Ratio of load force to effort force for an ideal mechanism." },
    { term: "Velocity ratio", definition: "Ratio of effort movement to load movement in an ideal mechanism." },
    { term: "Linkage", definition: "An assembly of links and joints that produces controlled motion." },
    { term: "Degrees of freedom", definition: "The number of independent motions available to a mechanism." },
  ],
  concepts: [
    {
      id: "edxbteceng-u9-9-1-lev",
      title: "Levers and mechanical advantage",
      skill: "Calculate effort, load and mechanical advantage for lever systems.",
      lesson: {
        sections: [
          {
            heading: "Lever classes",
            body: "A lever consists of a rigid bar, a fulcrum and forces applied at the load and effort points. In class 1, the fulcrum is between load and effort, as in a seesaw or crowbar. In class 2, the load is between fulcrum and effort, as in a wheelbarrow. In class 3, the effort is between fulcrum and load, as in tweezers or a fishing rod. The class affects direction of movement and mechanical advantage but all obey the moment principle.",
          },
          {
            heading: "Moments and advantage",
            body: "For equilibrium, clockwise moments equal anticlockwise moments: effort x effort arm = load x load arm. Mechanical advantage MA = load / effort = effort arm / load arm. Velocity ratio VR = effort movement / load movement; for an ideal lever VR equals MA. Real mechanisms lose energy to friction, so actual effort is higher than the ideal value.",
          },
        ],
        keyFormulas: [
          { name: "Moment equilibrium", statement: "effort x effort arm = load x load arm" },
          { name: "Mechanical advantage", statement: "MA = load / effort = effort arm / load arm" },
          { name: "Velocity ratio", statement: "VR = effort distance / load distance" },
        ],
        workedExample: {
          problem: "A crowbar lifts a 600 N rock. The effort arm is 0.80 m and the load arm is 0.20 m. Find the ideal effort and mechanical advantage.",
          solution: "MA = effort arm / load arm = 0.80 / 0.20 = 4. Ideal effort = load / MA = 600 / 4 = 150 N. The operator must move the effort four times farther than the load for an ideal lever.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u9-lev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which lever class is the fulcrum between the load and the effort?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Class 1"
                    },
                    {
                              "id": "b",
                              "text": "Class 2"
                    },
                    {
                              "id": "c",
                              "text": "Class 3"
                    },
                    {
                              "id": "d",
                              "text": "Class 4"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lever classes",
                              "statement": "Class 1 has fulcrum between load and effort."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Class 1 examples include seesaws and crowbars.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Class 1"
},
        },
        {
          id: "edxbteceng-u9-lev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A lever lifts a 300 N load with a load arm of 0.20 m and an effort arm of 0.60 m. Calculate the ideal effort.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "effort",
                              "answer": 100,
                              "unit": "N"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Lever equilibrium",
                              "statement": "Effort x effort arm = load x load arm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Effort = load x load arm / effort arm = 300 x 0.20 / 0.60.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Effort = 100 N.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "100 N"
},
        },
        {
          id: "edxbteceng-u9-lev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why mechanical advantage does not create energy in a real lever.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Work conservation",
                              "statement": "Mechanical advantage trades force for distance; losses reduce efficiency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher MA means smaller effort but larger effort movement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Work input approximately equals work output for an ideal lever.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Friction at the fulcrum and bar means real effort is greater than ideal.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "MA trades force for distance; friction prevents free energy gain."
},
        },
        {
          id: "edxbteceng-u9-lev-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Three tools are described: a seesaw, a wheelbarrow and tweezers.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the lever class of each tool.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain which class is most likely to have mechanical advantage greater than 1.",
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
                              "name": "Lever classification",
                              "statement": "Class depends on positions of fulcrum, load and effort."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Seesaw = class 1; wheelbarrow = class 2; tweezers = class 3.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Class 1 and 2 can give MA > 1 when the effort arm is longer; class 3 usually gives MA < 1 but increases movement.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Seesaw class 1, wheelbarrow class 2, tweezers class 3."
},
        },
        {
          id: "edxbteceng-u9-lev-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two levers are combined in a compound lever. The first has MA 2 and the second has MA 3.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the overall ideal mechanical advantage.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "A 900 N load is lifted. Calculate the ideal effort.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why the actual effort may be higher.",
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
                              "name": "Compound MA",
                              "statement": "Overall MA = product of individual MAs."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Overall MA = 2 x 3 = 6.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Ideal effort = 900 / 6 = 150 N.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Friction, wear and imperfect pivots reduce efficiency.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "MA = 6; ideal effort = 150 N; friction increases real effort."
},
        },
        {
          id: "edxbteceng-u9-lev-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A workshop jack must lift a 1200 N vehicle corner. The jack has a load arm of 0.05 m and an effort arm of 0.50 m.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the ideal effort required.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the mechanical advantage.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State the lever class of a typical trolley jack.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Explain why a longer handle reduces effort but increases handle movement.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Suggest one design improvement to reduce friction losses.",
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
                              "name": "Jack lever",
                              "statement": "Effort = load x load arm / effort arm."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Effort = 1200 x 0.05 / 0.50 = 120 N.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "MA = 0.50 / 0.05 = 10.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Usually class 1 or a compound lever arrangement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Longer effort arm increases MA, so less force but greater movement is needed.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "Use bearings, low-friction pivot or better lubrication at contact points.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Effort 120 N; MA 10; longer handle trades distance for force."
},
        },
      ],
    },
    {
      id: "edxbteceng-u9-9-1-lin",
      title: "Linkages and mechanisms",
      skill: "Identify common linkages and explain their degrees of freedom.",
      lesson: {
        sections: [
          {
            heading: "Common mechanisms",
            body: "A linkage is a set of rigid links connected by joints. A four-bar linkage has four links and four joints; with one link fixed it can produce rotary or oscillating output. A slider-crank converts rotary motion to reciprocating motion, as in an engine piston. A cam and follower converts rotary motion into a prescribed linear motion. A rack and pinion converts rotary motion to linear motion. The choice of mechanism depends on the required motion, speed and force.",
          },
          {
            heading: "Degrees of freedom",
            body: "Degrees of freedom describe how many independent motions a mechanism has. A four-bar planar linkage has one degree of freedom: once the input angle is set, all other positions are determined. A mechanism with too few constraints may be floppy; too many may bind. The Grashof condition for a four-bar predicts whether the shortest link can rotate fully relative to others: s + l <= p + q, where s and l are shortest and longest links and p and q are the other two.",
          },
        ],
        keyFormulas: [
          { name: "Four-bar DOF", statement: "planar four-bar has one degree of freedom" },
          { name: "Grashof condition", statement: "s + l <= p + q for crank rotation" },
          { name: "Slider-crank stroke", statement: "stroke approximately equals twice the crank radius" },
        ],
        workedExample: {
          problem: "A slider-crank has crank radius 30 mm. Estimate the piston stroke.",
          solution: "Stroke approximately equals 2 x crank radius = 2 x 30 = 60 mm, ignoring connecting-rod geometry effects.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u9-lin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which mechanism converts rotary motion into reciprocating linear motion?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Slider-crank"
                    },
                    {
                              "id": "b",
                              "text": "Four-bar"
                    },
                    {
                              "id": "c",
                              "text": "Bevel gear"
                    },
                    {
                              "id": "d",
                              "text": "Belt drive"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Slider-crank",
                              "statement": "Converts rotary crank motion to reciprocating piston motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The crank and connecting rod drive the slider.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Slider-crank"
},
        },
        {
          id: "edxbteceng-u9-lin-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A four-bar linkage has links of 10, 20, 25 and 30 mm. Apply the Grashof condition and state whether a crank can rotate fully.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Grashof condition",
                              "statement": "s + l <= p + q."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "s = 10, l = 30, p + q = 45.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "s + l = 40 <= 45, so the Grashof condition is satisfied.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Yes, Grashof condition satisfied."
},
        },
        {
          id: "edxbteceng-u9-lin-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the role of degrees of freedom in a mechanism.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Degrees of freedom",
                              "statement": "Independent motions available to a mechanism."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "DOF determines whether motion is controlled or unpredictable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A four-bar has one DOF, so input motion determines output motion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Too much freedom causes floppiness; too little causes binding.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "DOF controls predictability and stability of motion."
},
        },
        {
          id: "edxbteceng-u9-lin-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A machine needs to convert a rotating motor shaft into a short reciprocating movement.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest two suitable mechanisms.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why a cam and follower may be chosen.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one limitation of a slider-crank for this task.",
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
                              "name": "Mechanism selection",
                              "statement": "Match mechanism to required motion profile."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Slider-crank or cam and follower.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Cam profile can produce a precise non-sinusoidal motion.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Slider-crank gives approximately sinusoidal motion and needs space for the crank.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Slider-crank or cam; cam gives precise motion profile."
},
        },
        {
          id: "edxbteceng-u9-lin-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A slider-crank has crank radius 25 mm and connecting rod length 100 mm.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Estimate the piston stroke.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why the actual motion is not perfectly sinusoidal.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one advantage of increasing crank radius.",
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
                              "name": "Slider-crank",
                              "statement": "Stroke approximately equals twice crank radius."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Stroke = 2 x 25 = 50 mm.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Connecting rod angle and finite rod length distort the motion.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Larger crank increases stroke for the same shaft speed.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Stroke about 50 mm; motion not perfectly sinusoidal."
},
        },
        {
          id: "edxbteceng-u9-lin-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A packaging machine must move a pusher in and out once per revolution.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest a suitable mechanism and justify it.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the input and output motions.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain how the mechanism should be timed to the conveyor.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State one safety feature for the moving pusher.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Explain why maintenance access should be designed into the mechanism.",
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
                              "name": "Mechanism design",
                              "statement": "Select mechanism for motion, timing and serviceability."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Cam and follower gives controlled reciprocating motion once per revolution.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Input = rotary cam shaft; output = linear pusher motion.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Synchronise cam with conveyor encoder so pusher acts when product arrives.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Guard the pusher path and add interlocks or emergency stop.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Easy access reduces downtime and allows lubrication/inspection.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Cam-driven pusher synchronised to conveyor; guard and service access needed."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbteceng-u9-lev-notes",
      title: "Levers and mechanisms — notes",
      summary: "Levers trade force for distance; linkages convert rotary motion into useful reciprocating or oscillating motion.",
      sections: [
        { heading: "Levers", body: "Moment equilibrium gives effort x effort arm = load x load arm. MA = effort arm / load arm." },
        { heading: "Mechanisms", body: "Four-bars, slider-cranks and cams provide controlled motion from rotary input." },
        { heading: "Design", body: "Choose mechanism by motion profile, space, force and serviceability." },
      ],
    },
  ],
};
