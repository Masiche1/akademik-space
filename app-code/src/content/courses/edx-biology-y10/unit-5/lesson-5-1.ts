import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ebi10-u5-lesson-5-1",
  code: "5-1",
  title: "Responses, Homeostasis and Plant Tropisms",
  goal: "I CAN describe stimuli, receptors and effectors, define homeostasis and explain phototropism and geotropism in roots and shoots.",
  standards: ["4BI1 2.80", "4BI1 2.81", "4BI1 2.82", "4BI1 2.83", "4BI1 2.84", "4BI1 2.85"],
  
  vocabulary: [
    { term: "Stimulus", definition: "A detectable change in the internal or external environment to which an organism responds." },
    { term: "Receptor", definition: "A structure that detects a stimulus and starts a response." },
    { term: "Effector", definition: "A muscle or gland that carries out the response." },
    { term: "Homeostasis", definition: "The maintenance of a fairly constant internal environment by detecting changes and triggering corrective responses." },
    { term: "Phototropism", definition: "A directional response of a plant part to light." },
    { term: "Geotropism", definition: "A directional response of a plant part to gravity." },
    { term: "Auxin", definition: "A plant hormone that is unevenly distributed and helps regulate directional growth responses." },
  ],
  concepts: [
    {
      id: "ebi10-u5-stimulus-homeostasis",
      title: "Stimuli, effectors and homeostasis",
      skill: "Identify components of a coordinated response and explain why homeostasis is necessary in animals and plants.",
      lesson: {
        sections: [
          {
            heading: "A coordinated response",
            body: "A **stimulus** is a detectable change. A **receptor** detects it and transmits information through a coordination system to an **effector**, which is a muscle or gland that produces the response. The response usually reduces or removes the stimulus, although not every response is negative feedback.\n\nExample: a hot object warms the skin (stimulus). Receptors in the skin detect the heat and activate effectors, so muscles contract to move the hand away.",
          },
          {
            heading: "Homeostasis",
            body: "**Homeostasis** is keeping the internal environment within narrow limits. Important examples are **body temperature** and **water content**. Enzymes work best at an optimum temperature and pH, so a large change in temperature can denature proteins and stop metabolism. Water content affects the concentration of cell contents and how cells behave in osmotic conditions.\n\nA homeostatic system continuously detects a change, compares it with a set point and triggers responses that restore the original condition. This is called negative feedback because the response reduces the change.",
          },
        ],
        keyFormulas: [
          { name: "Coordinated response", statement: "stimulus → receptor → coordinator → effector → response" },
          { name: "Homeostasis", statement: "internal condition = maintained near a set point" },
          { name: "Negative feedback", statement: "the response reduces the original stimulus" },
        ],
        workedExample: {
          problem: "A person drinks salty food and their blood water content falls. Explain how homeostasis restores the condition.",
          solution: "Receptors detect the change in blood water content. Effectors respond, for example the brain triggers the sensation of thirst and kidney responses adjust water loss. Drinking water raises the water content, so the change is reduced.",
        },
      },
      questions: [
        {
          id: "ebi10-u5-stimulus-homeostasis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which structure detects a stimulus and starts a response?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Receptor"
                    },
                    {
                              "id": "b",
                              "text": "Nucleus"
                    },
                    {
                              "id": "c",
                              "text": "Cell wall"
                    },
                    {
                              "id": "d",
                              "text": "Mitochondrion"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Receptor",
                              "statement": "A receptor detects a stimulus."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Receptors detect stimuli; effectors carry out responses.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Receptor",
          "commonErrors": [
                    "Choosing the effector, which carries out rather than detects the response."
          ]
},
        },
        {
          id: "ebi10-u5-stimulus-homeostasis-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define homeostasis and give two examples of internal conditions that are kept fairly constant.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Homeostasis",
                              "statement": "The maintenance of a fairly constant internal environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Homeostasis means the internal environment is kept within narrow limits despite changes outside.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Any two of body temperature and water content; glucose concentration and pH are also valid.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Maintaining a constant internal environment; e.g. body temperature and water content.",
          "commonErrors": [
                    "Defining homeostasis as ‘steady temperature only’. It applies to several internal conditions."
          ]
},
        },
        {
          id: "ebi10-u5-stimulus-homeostasis-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student accidentally touches a hot pan and quickly moves the hand away. Identify the stimulus, a possible receptor, a coordination system and an effector in this response.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Coordinated response",
                              "statement": "Stimulus → receptor → coordinator → effector."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The stimulus is heat or the hot surface touching the skin.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Receptors are sensory receptors in the skin that detect the heat; the nervous system coordinates the response.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Muscles in the arm act as effectors and contract to move the hand away.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Stimulus: heat; receptor: heat receptor in skin; coordinator: nervous system; effector: arm muscles.",
          "commonErrors": [
                    "Calling the hand the stimulus rather than the heat detected by receptors."
          ]
},
        },
        {
          id: "ebi10-u5-stimulus-homeostasis-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A person's body temperature rises during exercise.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State what homeostasis means in this situation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name two responses that would help restore a normal body temperature.",
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
                              "name": "Negative feedback",
                              "statement": "A homeostatic response reduces the change that triggered it."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Homeostasis is maintaining body temperature within a narrow range despite exercise.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The body detects the temperature rise and triggers responses that return temperature toward its set point.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sweat glands produce sweat, which evaporates and cools the skin.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Blood vessels in the skin dilate so more warm blood reaches the surface and heat is lost.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The person may reduce activity or move to a cooler place, increasing heat loss.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Maintaining temperature near a set point through corrective responses (b) sweating, vasodilation, reduced activity or moving to a cooler place.",
          "commonErrors": [
                    "Saying sweat is produced because the skin is dry, without linking evaporation to heat loss."
          ]
},
        },
        {
          id: "ebi10-u5-stimulus-homeostasis-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A plant is placed in a box with a light source on one side. After several hours its shoot bends towards the light, while a root in the same conditions bends away from the light and towards gravity.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the stimulus and response for the shoot.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why bending towards light may help the shoot survive.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why the root response may help the plant survive.",
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
                              "name": "Tropisms",
                              "statement": "Directional plant growth responses to stimuli."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The stimulus is light from one direction; the response is growth/bending towards the light (positive phototropism).",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "More light reaching the leaves increases photosynthesis.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This supplies more carbohydrates for growth and energy, improving survival.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Roots show positive geotropism and negative phototropism.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Growing downwards helps anchor the plant and lets roots absorb water and minerals.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Growing away from light keeps roots below ground where nutrients and water are found.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Light stimulus; shoot bends towards light (b) more photosynthesis (c) anchoring, water/mineral uptake, staying underground.",
          "commonErrors": [
                    "Confusing phototropism with photoperiodism; phototropism is directional growth, not flowering time."
          ]
},
        },
        {
          id: "ebi10-u5-stimulus-homeostasis-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two students investigate a potted plant. One is left in normal light; the other is placed beside a window so light comes from only one side. After four days both are photographed.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the independent variable, dependent variable and two variables that should be controlled.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Predict the difference in the direction of shoot growth between the two plants and explain why.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Describe how auxin contributes to the shoot response.",
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
                              "name": "Tropism investigation",
                              "statement": "Control variables and link auxin distribution to growth."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Independent variable: direction of light.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Dependent variable: direction/angle of shoot growth.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Controlled variables: species, age/size, temperature, water, soil and nutrients.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The window plant's shoot bends towards the light while the normal plant grows more upright or evenly.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Light is the stimulus for positive phototropism.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This increases light absorption and photosynthesis on the illuminated side.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Auxin accumulates on the shaded side of the shoot tip.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Auxin promotes cell elongation in the shaded cells.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The shaded side grows faster than the illuminated side.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The shoot therefore bends towards the light.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Direction of light; direction of growth; control species, water and temperature (b) bend towards light; more photosynthesis (c) auxin on shaded side → faster elongation → bending.",
          "commonErrors": [
                    "Saying auxin inhibits growth on the shaded side. In shoots auxin promotes elongation there."
          ]
},
        },
      ],
    },
    {
      id: "ebi10-u5-geotropism-auxin",
      title: "Geotropism and auxin in roots and shoots",
      skill: "Compare positive and negative tropisms in roots and shoots and explain auxin's different effects in each.",
      lesson: {
        sections: [
          {
            heading: "Geotropic and phototropic responses",
            body: "**Phototropism** is growth towards or away from light. Shoots are usually **positively phototropic** because light helps leaves photosynthesise. Roots are usually **negatively phototropic** because they live below ground.\n\n**Geotropism** is growth towards or away from gravity. Roots are usually **positively geotropic** and grow downwards; shoots are usually **negatively geotropic** and grow upwards. These responses help the plant anchor itself, absorb water and minerals, and expose leaves to light.",
          },
          {
            heading: "Auxin and directional growth",
            body: "**Auxin** is unevenly distributed after a stimulus. In a shoot, auxin accumulates on the shaded or lower side and stimulates cell elongation, so that side grows faster and the shoot bends towards light or upwards.\n\nIn a root, auxin inhibits cell elongation on the lower side, while the upper side elongates more. The root therefore bends downwards. This difference explains why the same hormone can produce opposite bending in shoots and roots.",
          },
        ],
        keyFormulas: [
          { name: "Shoot phototropism", statement: "positive — bends towards light" },
          { name: "Root geotropism", statement: "positive — grows towards gravity" },
          { name: "Auxin in shoot", statement: "promotes elongation on shaded/lower side" },
          { name: "Auxin in root", statement: "inhibits elongation on lower side" },
        ],
        workedExample: {
          problem: "A seedling is laid on its side in the dark. Predict the response of the shoot and root and explain the auxin effect in each.",
          solution: "The shoot is negatively geotropic and bends upwards. Auxin collects on the lower side and promotes elongation there. The root is positively geotropic and bends downwards because auxin inhibits elongation on the lower side.",
        },
      },
      questions: [
        {
          id: "ebi10-u5-geotropism-auxin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which response is shown by a root growing towards gravity?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Negative phototropism"
                    },
                    {
                              "id": "b",
                              "text": "Positive geotropism"
                    },
                    {
                              "id": "c",
                              "text": "Positive phototropism"
                    },
                    {
                              "id": "d",
                              "text": "Negative geotropism"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Geotropism",
                              "statement": "Growth response to gravity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Towards gravity is positive geotropism; roots usually show it.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Positive geotropism",
          "commonErrors": [
                    "Confusing geotropism with phototropism."
          ]
},
        },
        {
          id: "ebi10-u5-geotropism-auxin-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State whether a shoot is positively or negatively phototropic and positively or negatively geotropic under normal conditions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tropisms",
                              "statement": "Positive means towards the stimulus; negative means away from it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A shoot grows towards light, so it is positively phototropic.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "A shoot grows upwards, away from gravity, so it is negatively geotropic.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Shoot: positive phototropism and negative geotropism.",
          "commonErrors": [
                    "Reversing the meanings of positive and negative."
          ]
},
        },
        {
          id: "ebi10-u5-geotropism-auxin-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how auxin causes a shoot to bend towards light.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Auxin in shoots",
                              "statement": "Auxin promotes cell elongation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Light causes auxin to accumulate on the shaded side of the shoot tip.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Higher auxin concentration promotes greater cell elongation on the shaded side.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The shaded side therefore grows faster and the shoot bends towards the light.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Auxin on shaded side → faster elongation → bending towards light.",
          "commonErrors": [
                    "Saying light directly bends the shoot. Auxin distribution changes growth rates."
          ]
},
        },
        {
          id: "ebi10-u5-geotropism-auxin-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A maize seedling is grown horizontally in the dark for two days. The shoot curves upwards and the root curves downwards.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the tropism shown by each organ.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the auxin distribution and its effect in the shoot.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why the root bends in the opposite direction.",
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
                              "name": "Geotropism",
                              "statement": "Response of growth to gravity."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Shoot: negative geotropism because it grows upwards, away from gravity.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Root: positive geotropism because it grows downwards, towards gravity.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Auxin accumulates on the lower side of the horizontal shoot.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Auxin promotes elongation there, so the lower side grows faster and the shoot bends upwards.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Auxin inhibits elongation in the lower side of the root, so the upper side grows faster and the root bends downwards.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Shoot negative geotropism; root positive geotropism (b) auxin promotes lower-side elongation (c) auxin inhibits lower-side elongation in roots.",
          "commonErrors": [
                    "Assuming roots and shoots must bend the same way because both contain auxin."
          ]
},
        },
        {
          id: "ebi10-u5-geotropism-auxin-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A student compares four seedlings: A is in normal light, B is kept in darkness, C is lit only from the left and D is lit only from above. All receive the same water and temperature.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Predict the main direction of shoot growth for each seedling.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain why seedling D may show little bending even though light is present.",
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
                              "name": "Phototropism",
                              "statement": "Shoots bend towards unilateral light."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A: grows upwards towards light/gravity response, roughly vertical.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "B: grows upwards in darkness due mainly to negative geotropism.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "C: bends towards the left-hand light source.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "D: grows upwards with little lateral bending because light is not one-sided.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Phototropism is a directional response to a light gradient.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Light from directly above does not create a strong difference in auxin between sides.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Without unequal auxin distribution, growth remains more vertical.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "A vertical; B vertical in dark; C bends left; D mostly vertical. Uniform light gives little auxin gradient.",
          "commonErrors": [
                    "Predicting bending towards light from directly above; a directional gradient is needed."
          ]
},
        },
        {
          id: "ebi10-u5-geotropism-auxin-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A research group tests how light direction affects auxin and growth in oat coleoptiles. They cover the tips of some coleoptiles with foil caps and compare them with uncovered ones.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the role of the coleoptile tip in phototropism.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Predict and explain the result for covered versus uncovered coleoptiles lit from one side.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Suggest why geotropic responses continue in complete darkness.",
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
                              "name": "Auxin transport",
                              "statement": "The tip detects light and distributes auxin to control growth."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The tip detects the direction of light.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The tip produces/transports auxin that moves down into the elongation zone.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Without the tip, the directional light signal is not converted into uneven growth.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Uncovered coleoptiles bend towards the light.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Auxin accumulates on the shaded side and promotes elongation there.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Covered coleoptiles show little or no bending because the light signal is blocked.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "They may still grow vertically because geotropism is unaffected by light.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Gravity is detected independently of light.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Auxin redistribution still occurs in response to the gravitational stimulus.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Therefore roots can grow downwards and shoots upwards in darkness.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Tip detects light and sends auxin signal (b) uncovered bend; covered do not (c) gravity acts independently of light.",
          "commonErrors": [
                    "Claiming covering the tip blocks gravity. It mainly blocks phototropic detection."
          ]
},
        },
      ],
    },
  ],

};
