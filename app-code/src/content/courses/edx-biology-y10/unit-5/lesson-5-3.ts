import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ebi10-u5-lesson-5-3",
  code: "5-3",
  title: "Hormones, Temperature and Water Balance",
  goal: "I CAN describe hormonal control, explain temperature regulation and analyse how the body maintains water balance.",
  standards: ["4BI1 2.81", "4BI1 2.93", "4BI1 2.94", "4BI1 2.95B"],
  
  vocabulary: [
    { term: "Hormone", definition: "A chemical messenger carried in the blood that affects target organs." },
    { term: "Adrenaline", definition: "A hormone released in stress that increases heart rate and prepares the body for action." },
    { term: "Insulin", definition: "A hormone that lowers blood glucose by promoting its uptake into cells." },
    { term: "ADH", definition: "Antidiuretic hormone; increases water reabsorption in the kidneys when water is scarce." },
    { term: "Vasodilation", definition: "Widening of blood vessels, increasing blood flow to the skin surface." },
    { term: "Vasoconstriction", definition: "Narrowing of blood vessels, reducing blood flow near the skin surface." },
    { term: "Eccrine sweat gland", definition: "A gland producing sweat mainly made of water and salts to cool the body by evaporation." },
  ],
  concepts: [
    {
      id: "ebi10-u5-hormones-homeostasis",
      title: "Hormones and homeostatic control",
      skill: "Explain how hormones regulate blood glucose, water balance and stress responses.",
      lesson: {
        sections: [
          {
            heading: "Hormonal control",
            body: "**Hormones** are chemicals produced by endocrine glands and carried in the blood to **target cells** with matching receptors. Hormonal responses are slower to start than nervous responses but can last longer and affect several organs at once.\n\n**Adrenaline** is released by the adrenal glands during stress or exercise. It increases heart rate, dilates airways and raises blood glucose, preparing the body for action. **Insulin** lowers blood glucose by promoting glucose uptake into cells and its conversion to glycogen. **ADH** is released when blood water content falls; it makes kidney tubules reabsorb more water, producing less urine.",
          },
          {
            heading: "FSH, LH and reproductive hormones",
            body: "In humans, **FSH** and **LH** are pituitary hormones involved in the menstrual cycle and gamete production. FSH stimulates follicle development and egg maturation; LH triggers ovulation and helps maintain hormone production. **Oestrogen** and **progesterone** are produced by the ovaries and regulate the menstrual cycle. **Testosterone** is produced by the testes and stimulates male secondary sexual characteristics. These hormones coordinate development and reproduction rather than rapid escape responses.",
          },
        ],
        keyFormulas: [
          { name: "Hormone pathway", statement: "gland → blood → target cell receptor → response" },
          { name: "Insulin", statement: "lowers blood glucose" },
          { name: "ADH", statement: "increases water reabsorption when body water is low" },
          { name: "Adrenaline", statement: "increases heart rate and prepares for action" },
        ],
        workedExample: {
          problem: "A person eats a sugary meal and their blood glucose rises. Describe how insulin restores homeostasis.",
          solution: "Pancreatic cells detect high glucose and release insulin into the blood. Insulin binds receptors on liver and muscle cells, increasing glucose uptake and conversion to glycogen. Blood glucose falls toward its set point.",
        },
      },
      questions: [
        {
          id: "ebi10-u5-hormones-homeostasis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone lowers blood glucose concentration?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Insulin"
                    },
                    {
                              "id": "b",
                              "text": "Adrenaline"
                    },
                    {
                              "id": "c",
                              "text": "ADH"
                    },
                    {
                              "id": "d",
                              "text": "Progesterone"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Insulin",
                              "statement": "Insulin lowers blood glucose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Insulin promotes glucose uptake and storage, reducing blood glucose.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Insulin",
          "commonErrors": [
                    "Choosing adrenaline, which can raise glucose during stress."
          ]
},
        },
        {
          id: "ebi10-u5-hormones-homeostasis-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two differences between nervous control and hormonal control.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Nervous vs hormonal",
                              "statement": "Different speed and duration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nervous control is faster and usually shorter lasting.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Hormonal control is slower but can affect many organs for longer.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Nervous fast/short/local; hormonal slower/longer/widespread.",
          "commonErrors": [
                    "Describing hormones as electrical signals."
          ]
},
        },
        {
          id: "ebi10-u5-hormones-homeostasis-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how ADH helps maintain water balance when a person is dehydrated.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ADH",
                              "statement": "Antidiuretic hormone increases water reabsorption in kidneys."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Low blood water content stimulates ADH release.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "ADH makes kidney tubules reabsorb more water back into the blood.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Less water is lost in urine, helping restore water balance.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "ADH → more water reabsorption → less urine → water balance restored.",
          "commonErrors": [
                    "Saying ADH creates water; it reduces water loss."
          ]
},
        },
        {
          id: "ebi10-u5-hormones-homeostasis-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A person is frightened and their heart rate increases.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the hormone most directly responsible and where it is released from.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two effects of this hormone on the body.",
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
                              "name": "Adrenaline",
                              "statement": "A stress hormone that prepares the body for action."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Adrenaline, released by the adrenal glands.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It increases heart rate and stroke volume, delivering more oxygen and glucose to muscles.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It dilates airways and may increase blood glucose for respiration.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Adrenaline from adrenal glands (b) increased heart rate, more oxygen/glucose, dilated airways.",
          "commonErrors": [
                    "Naming insulin, which lowers glucose rather than preparing for fight or flight."
          ]
},
        },
        {
          id: "ebi10-u5-hormones-homeostasis-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A patient has high blood glucose and produces little insulin.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why their blood glucose remains high.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two possible treatments or management strategies.",
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
                              "name": "Insulin deficiency",
                              "statement": "Without insulin, glucose is not taken up and stored effectively."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Insulin is needed to promote glucose uptake into cells.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Little insulin means less glucose is removed from blood.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Blood glucose therefore stays above its normal range.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Insulin injections can replace missing hormone.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Diet control and regular exercise can reduce glucose intake and increase use.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Insulin low → glucose not taken up (b) insulin injections, diet/exercise control.",
          "commonErrors": [
                    "Saying insulin is produced by the liver; it is produced by the pancreas."
          ]
},
        },
        {
          id: "ebi10-u5-hormones-homeostasis-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two hormones are compared in an exam question: adrenaline and insulin.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the main effect of each hormone.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how each hormone is transported to its target cells.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why hormonal effects are usually slower but longer lasting than nervous effects.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Give one example of a target cell response for each hormone.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Hormone comparison",
                              "statement": "Hormones travel in blood to specific receptors."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Adrenaline prepares the body for action/increases heart rate.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Insulin lowers blood glucose.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both are released into the blood and carried to target cells.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Only cells with the matching receptors respond.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Hormones must be produced, secreted and transported in blood, so the start is slower.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "They remain active until broken down or removed, so effects can last longer.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Nerve impulses are rapid electrical signals but brief.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Adrenaline: heart muscle cells increase contraction rate/force.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Insulin: liver/muscle cells increase glucose uptake and glycogen formation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Each example correctly links hormone to a cellular response.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Adrenaline action; insulin lowers glucose (b) blood transport to receptors (c) slower start, longer duration (d) heart rate up; glucose uptake/storage up.",
          "commonErrors": [
                    "Saying hormones act only on the gland that releases them."
          ]
},
        },
      ],
    },
    {
      id: "ebi10-u5-temperature-water",
      title: "Temperature and water balance",
      skill: "Explain homeostatic responses to high and low temperature and changes in water content.",
      lesson: {
        sections: [
          {
            heading: "Temperature regulation",
            body: "The body maintains temperature near **37 °C**. When too hot, **sweat glands** produce sweat; evaporation removes heat. Blood vessels near the skin undergo **vasodilation**, allowing more warm blood to reach the surface and lose heat. Behavioural responses include moving to shade, removing clothing and drinking water.\n\nWhen too cold, **vasoconstriction** reduces blood flow near the skin and heat loss. Shivering generates heat by rapid muscle contraction. Hormones such as adrenaline can also increase metabolic heat production. These responses are coordinated by the nervous system and hormones.",
          },
          {
            heading: "Water balance",
            body: "Water is lost by sweating, breathing, urination and faeces. It is gained by drinking and eating food. The body maintains water content by adjusting urine production and thirst. **ADH** increases water reabsorption in kidney tubules when water is scarce, so less urine is produced. When water is plentiful, less ADH is released and more water is excreted.",
          },
        ],
        keyFormulas: [
          { name: "Hot response", statement: "sweat + vasodilation → heat loss" },
          { name: "Cold response", statement: "vasoconstriction + shivering → reduce heat loss / generate heat" },
          { name: "Water balance", statement: "ADH high → more water reabsorbed → less urine" },
        ],
        workedExample: {
          problem: "Explain two responses when body temperature rises above normal.",
          solution: "Sweating increases evaporative cooling. Vasodilation increases blood flow to the skin so more heat can be radiated away.",
        },
      },
      questions: [
        {
          id: "ebi10-u5-temperature-water-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which response helps cool the body when it is too hot?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Vasodilation"
                    },
                    {
                              "id": "b",
                              "text": "Vasoconstriction"
                    },
                    {
                              "id": "c",
                              "text": "Shivering"
                    },
                    {
                              "id": "d",
                              "text": "Reduced sweating"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Vasodilation",
                              "statement": "Widening skin blood vessels increases heat loss."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vasodilation brings warm blood nearer the skin surface for heat loss.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Vasodilation",
          "commonErrors": [
                    "Choosing vasoconstriction, which reduces heat loss when cold."
          ]
},
        },
        {
          id: "ebi10-u5-temperature-water-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two ways in which sweating helps reduce body temperature.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Sweating",
                              "statement": "Evaporation removes heat from the skin."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sweat evaporates from the skin surface.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Evaporation transfers heat energy away from the body, lowering skin temperature.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Sweat evaporates and removes heat from the skin.",
          "commonErrors": [
                    "Saying sweat cools because it is cold; cooling depends on evaporation."
          ]
},
        },
        {
          id: "ebi10-u5-temperature-water-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why vasoconstriction and shivering occur when body temperature falls.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Cold responses",
                              "statement": "Reduce heat loss and generate heat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vasoconstriction narrows skin blood vessels and reduces warm blood flow to the surface.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "This reduces heat loss by radiation and convection.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Shivering causes rapid muscle contractions that release heat.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Vasoconstriction reduces heat loss; shivering generates heat.",
          "commonErrors": [
                    "Saying vasoconstriction warms blood directly; it mainly reduces loss."
          ]
},
        },
        {
          id: "ebi10-u5-temperature-water-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student runs in hot weather and sweats heavily.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the role of sweating in temperature control.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why drinking water may also be necessary.",
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
                              "name": "Thermoregulation",
                              "statement": "Sweating cools but can reduce body water."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sweat evaporates and removes heat from the skin.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Heavy sweating loses water and salts from the body.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Drinking water replaces lost water and helps maintain blood volume and homeostasis.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It also supports continued sweating and cooling.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Evaporative cooling (b) replaces water lost in sweat.",
          "commonErrors": [
                    "Ignoring that sweat contains water and salts, not only heat."
          ]
},
        },
        {
          id: "ebi10-u5-temperature-water-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A person does not drink enough water on a hot day. Their urine becomes concentrated and dark.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how ADH responds to low water intake.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why urine becomes concentrated and dark.",
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
                              "name": "ADH and urine",
                              "statement": "ADH increases water reabsorption, concentrating urine."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Low body water triggers ADH release.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "ADH increases water reabsorption from kidney tubules into blood.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Less water is left to pass into urine.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "More water is returned to blood, so less water leaves in urine.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Solutes such as urea become more concentrated in the smaller volume of urine.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The urine therefore appears darker and smells stronger.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This conserves water when the body needs it.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) ADH ↑ → water reabsorption ↑ (b) less water in urine → solutes concentrated → dark urine.",
          "commonErrors": [
                    "Saying the kidneys produce less urea; they produce less water, concentrating urea."
          ]
},
        },
        {
          id: "ebi10-u5-temperature-water-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A cyclist exercises in cold, dry weather for one hour.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe three responses that help maintain body temperature.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how water balance is affected and how the body responds.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest two practical precautions and justify each.",
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
                              "name": "Homeostasis in exercise",
                              "statement": "Temperature and water balance interact during exercise."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Vasoconstriction reduces heat loss from skin.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Shivering or increased muscle activity generates heat.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Behavioural responses such as warm clothing reduce heat loss.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Exercise itself increases metabolic heat production.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Breathing and sweating still cause water loss even in cold weather.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Thirst and ADH reduce urine water loss to conserve water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Drinking replaces lost water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Wear warm clothing to reduce heat loss by convection/radiation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Drink water regularly to replace sweat and respiratory losses.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Eat before exercise to supply energy for heat-generating muscle work.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) vasoconstriction, shivering, clothing, metabolic heat (b) water lost; thirst/ADH/drinking conserve it (c) warm clothes, drink water, eat.",
          "commonErrors": [
                    "Assuming sweating only occurs in hot weather; it can occur during cold exercise."
          ]
},
        },
      ],
    },
  ],

};
