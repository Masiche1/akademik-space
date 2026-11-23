import type { Lesson } from "../../../types.ts";

export const lesson903: Lesson = {
  id: "edxbtechsc-u9-lesson-9-3",
  code: "9-3",
  title: "Health Needs of Older Adults and Loss",
  goal: "I CAN describe the health needs of older adults and support people experiencing loss and bereavement.",
  standards: ["BTEC L3 National Health and Social Care — Unit 9: Dementia and Care of Older Adults (extended certificate)"],
  
  vocabulary: [
    { term: "Frailty", definition: "A state of increased vulnerability to stressors due to age-related decline across multiple body systems." },
    { term: "Falls", definition: "A leading cause of injury in older adults, often due to muscle weakness, poor balance and environmental hazards." },
    { term: "Malnutrition", definition: "Poor nutritional status from inadequate intake — common in older adults due to appetite loss, swallowing problems or isolation." },
    { term: "Bereavement", definition: "The period of grief and mourning after the death of someone close." },
    { term: "Grief", definition: "The emotional response to loss, involving sadness, anger, guilt and confusion." },
    { term: "Anticipatory grief", definition: "Grief experienced before an expected death, allowing emotional preparation." },
  ],
  concepts: [
    {
      id: "edxbtechsc-u9-l3-health",
      title: "Health Needs of Older Adults",
      skill: "Describe common health needs and risks for older adults including falls, nutrition and frailty.",
      lesson: {
        sections: [
          {
            heading: "Physical health needs",
            body: "Older adults face increased risk of **falls** (muscle weakness, poor balance, hazards), **malnutrition** (appetite loss, swallowing problems, isolation), **incontinence**, **pressure ulcers**, and **frailty** (vulnerability to stressors). Chronic conditions — arthritis, heart disease, diabetes, dementia — are common. Medications may interact or cause side-effects.",
          },
          {
            heading: "Promoting independence and safety",
            body: "Support independence through **risk assessment**, **home adaptations** (grab rails, ramps), **falls prevention** (strength/balance exercises, vision checks, medication review), **nutrition support** (fortified foods, swallowing assessment), and **social engagement**. Person-centred care respects choices while managing risk — enable rather than restrict.",
          },
        ],
        keyFormulas: [
          { name: "Falls risk", statement: "Muscle weakness + poor balance + environmental hazards." },
          { name: "Malnutrition causes", statement: "Appetite loss, swallowing problems, isolation, cost." },
          { name: "Frailty", statement: "Age-related decline → vulnerability to stressors." },
        ],
        workedExample: {
          problem: "An 85-year-old has fallen twice at home. Describe a falls prevention plan.",
          solution: "Assess home for hazards (rugs, poor lighting, stairs), review medications, arrange strength/balance exercises, check vision, and consider grab rails or walking aids.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u9-l3-hn-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a leading cause of injury in older adults?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Falls"
                    },
                    {
                              "id": "b",
                              "text": "Sunburn"
                    },
                    {
                              "id": "c",
                              "text": "Dental decay"
                    },
                    {
                              "id": "d",
                              "text": "Broken glasses"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Falls in older adults",
                              "statement": "Leading cause of injury due to weakness, balance and hazards."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Falls are the leading cause of injury in older adults.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** — falls"
},
        },
        {
          id: "edxbtechsc-u9-l3-hn-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define frailty.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Frailty",
                              "statement": "Age-related decline increasing vulnerability to stressors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Frailty = state of increased vulnerability across multiple body systems due to age-related decline.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Age-related decline → vulnerability to stressors"
},
        },
        {
          id: "edxbtechsc-u9-l3-hn-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain three causes of malnutrition in older adults.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Malnutrition in older adults",
                              "statement": "Inadequate intake from appetite loss, swallowing, isolation, cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Appetite loss and reduced taste/smell reduce intake.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Swallowing problems (dysphagia) make eating difficult or unsafe.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Social isolation, poverty or difficulty preparing food reduce nutrition.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Appetite loss, swallowing problems, isolation/poverty cause malnutrition."
},
        },
        {
          id: "edxbtechsc-u9-l3-hn-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define falls and state two causes. (b) Describe three falls prevention strategies. (c) Explain what frailty means. (d) Describe two ways to support nutrition in older adults. (e) Explain why independence should be supported even when risks exist.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Older adult health needs",
                              "statement": "Falls, malnutrition, frailty — support independence with risk management."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Falls = unintentional descent; causes: muscle weakness, poor balance, hazards, medications.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Three strategies: home hazard assessment, strength/balance exercise, medication review, vision check, aids.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Frailty = increased vulnerability to stressors from age-related decline.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Two nutrition supports: fortified foods, swallowing assessment, mealtime support, social eating.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Independence preserves dignity, wellbeing and function — manage risk rather than eliminate it.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Older adults need falls prevention, nutrition support and frailty management while preserving independence."
},
        },
        {
          id: "edxbtechsc-u9-l3-hn-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An 88-year-old woman lives alone, has fallen twice, and has lost weight. (a) Identify three health concerns. (b) Describe a falls prevention plan. (c) Explain how malnutrition might be addressed. (d) Suggest two social interventions to support her wellbeing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Assessing older adult needs",
                              "statement": "Falls, nutrition, isolation — multi-factorial assessment and support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Three concerns: falls risk, malnutrition/weight loss, social isolation.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(b) Falls plan: home hazard check, grab rails, exercise, medication review, vision check.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Malnutrition: dietitian referral, fortified foods, swallowing assessment, meal support.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Two social interventions: day centre, community alarm, befriending, meals on wheels.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Address falls, nutrition and isolation through assessment, adaptation and community support."
},
        },
        {
          id: "edxbtechsc-u9-l3-hn-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss the health needs of older adults. Your answer should cover: (a) common physical health risks; (b) falls — causes and prevention; (c) malnutrition — causes and support; (d) frailty; (e) chronic conditions; (f) how to support independence; (g) the role of social care in promoting health.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Older adult health",
                              "statement": "Multiple age-related risks require person-centred, independence-preserving care."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Common risks: falls, malnutrition, incontinence, pressure ulcers, frailty, chronic disease.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Falls: causes = weakness, balance, hazards; prevention = assessment, exercise, adaptations.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Malnutrition: appetite loss, dysphagia, isolation; support = fortified foods, assessment, meals.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Frailty = vulnerability to stressors from multisystem decline.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Chronic conditions: arthritis, heart disease, diabetes, dementia common.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Support independence: enable choice, adapt environment, manage risk rather than restrict.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(g) Social care promotes health through support, adaptation, community connection.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Older adults need multi-factorial health support that manages risk while preserving independence."
},
        },
      ],
    },
    {
      id: "edxbtechsc-u9-l3-loss",
      title: "Loss, Grief and Bereavement",
      skill: "Describe grief responses and support people experiencing loss and bereavement.",
      lesson: {
        sections: [
          {
            heading: "Types of loss and grief",
            body: "Loss includes **bereavement** (death of someone close), but also loss of health, independence, home, role or future. **Grief** is the emotional response — sadness, anger, guilt, confusion, numbness. **Anticipatory grief** occurs before an expected death. Grief is not linear — people move between stages of denial, anger, bargaining, depression and acceptance (Kübler-Ross), but modern understanding sees grief as individual and ongoing.",
          },
          {
            heading: "Supporting bereaved people",
            body: "Support means being present, listening without judgement, acknowledging the loss, and allowing expression of grief. Avoid clichés ('they're in a better place'), rushing recovery, or avoiding the topic. Practical support (meals, paperwork, company) helps. Watch for **complicated grief** — persistent intense grief, inability to function, or suicidal thoughts — which needs professional help. Bereavement affects health: increased risk of illness, isolation and mortality ('broken heart').",
          },
        ],
        keyFormulas: [
          { name: "Types of loss", statement: "Bereavement, health, independence, home, role, future." },
          { name: "Grief stages", statement: "Denial, anger, bargaining, depression, acceptance — not linear." },
          { name: "Complicated grief", statement: "Persistent intense grief, dysfunction or suicidal thoughts → professional help." },
        ],
        workedExample: {
          problem: "A widow says 'I feel fine' but hasn't slept or eaten properly since her husband died two weeks ago. How should a care worker respond?",
          solution: "Acknowledge her loss gently, listen without judgement, offer practical support, and monitor for complicated grief or depression. Don't force her to talk but make clear support is available.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u9-l3-lg-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Grief is best described as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A linear process with fixed stages everyone follows"
                    },
                    {
                              "id": "b",
                              "text": "An individual emotional response to loss that varies over time"
                    },
                    {
                              "id": "c",
                              "text": "Only experienced after death"
                    },
                    {
                              "id": "d",
                              "text": "A sign of mental illness"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Grief",
                              "statement": "Individual emotional response to loss; not linear or fixed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grief is individual, varies, and can follow many losses not just death.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** — individual emotional response to loss"
},
        },
        {
          id: "edxbtechsc-u9-l3-lg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define anticipatory grief.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Anticipatory grief",
                              "statement": "Grief experienced before an expected death."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grief felt in advance of an expected death, allowing emotional preparation.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Grief experienced before an expected death"
},
        },
        {
          id: "edxbtechsc-u9-l3-lg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three common emotional responses to grief.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Grief responses",
                              "statement": "Sadness, anger, guilt, confusion, numbness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sadness and crying are common grief responses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Anger and guilt may also be experienced.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Confusion, numbness and withdrawal are also normal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Sadness, anger, guilt, confusion, numbness are common grief responses."
},
        },
        {
          id: "edxbtechsc-u9-l3-lg-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define bereavement and grief. (b) Describe anticipatory grief. (c) List three common grief responses. (d) Explain two ways to support a bereaved person. (e) State what complicated grief is.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Supporting bereavement",
                              "statement": "Listen, acknowledge, practical help, watch for complicated grief."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Bereavement = period after death; grief = emotional response to loss.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Anticipatory grief = grief before expected death.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Three responses: sadness, anger, guilt, confusion, numbness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Two supports: listen without judgement, acknowledge loss, practical help, allow expression.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Complicated grief = persistent intense grief, dysfunction or suicidal thoughts needing professional help.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Support bereavement by listening, acknowledging and helping practically; refer complicated grief."
},
        },
        {
          id: "edxbtechsc-u9-l3-lg-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A care worker's colleague's husband dies suddenly. (a) Describe three grief responses the colleague might show. (b) Explain how the care worker can support her. (c) Describe two practical ways to help. (d) State three signs of complicated grief requiring professional referral.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Bereavement support",
                              "statement": "Listen, acknowledge, practical help, monitor for complicated grief."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Three responses: sadness/crying, anger, numbness, guilt, difficulty concentrating.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(b) Support: listen without judgement, acknowledge loss, don't rush recovery, offer presence.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Two practical helps: meals, help with paperwork, company, childcare, errands.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Three signs: grief lasting >6-12 months with no improvement, inability to function, suicidal thoughts, severe depression.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Support with listening, presence and practical help; refer complicated grief to professionals."
},
        },
        {
          id: "edxbtechsc-u9-l3-lg-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss loss, grief and bereavement. Your answer should cover: (a) types of loss; (b) what grief is and its responses; (c) anticipatory grief; (d) how to support a bereaved person; (e) common mistakes when supporting grief; (f) complicated grief; (g) the impact of bereavement on health.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Bereavement care",
                              "statement": "Grief is individual; support with presence, listening and practical help."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Types of loss: death, health, independence, home, role, future.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Grief = emotional response; sadness, anger, guilt, confusion, numbness; not linear.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Anticipatory grief = grief before expected death, allowing preparation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Support: listen, acknowledge, practical help, allow expression, don't rush.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Mistakes: clichés, avoiding topic, rushing recovery, making assumptions.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(f) Complicated grief = persistent dysfunction or suicidal thoughts → professional help.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(g) Bereavement increases illness, isolation and mortality risk.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Grief is individual and ongoing; support with presence, listening and practical help; refer complicated grief."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtechsc-u9-l3-notes",
      title: "Health Needs and Loss — notes",
      summary: "Older adults face falls, malnutrition, frailty and chronic disease; bereavement requires presence, listening and practical support.",
      sections: [
        { heading: "Health needs", body: "Falls, malnutrition, frailty, chronic conditions — support independence with risk management." },
        { heading: "Grief", body: "Grief is individual and not linear; support with presence, listening and practical help." },
        { heading: "Complicated grief", body: "Persistent dysfunction or suicidal thoughts need professional referral." },
      ],
    },
  ],
};
