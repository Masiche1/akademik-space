import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "edxbtechsc-u7-lesson-7-2",
  code: "7-2",
  title: "Abuse, Neglect and Risk Assessment",
  goal: "I CAN identify types of abuse and neglect, recognise signs and complete a basic risk assessment.",
  standards: ["BTEC L3 National Health and Social Care — Unit 7: Safeguarding and Care Planning in Practice"],
  
  vocabulary: [
    { term: "Physical abuse", definition: "Deliberate use of force causing pain, injury or suffering, e.g. hitting, restraining inappropriately." },
    { term: "Emotional abuse", definition: "Persistent emotional ill-treatment causing severe adverse effects on emotional development, e.g. humiliation, threats, isolation." },
    { term: "Sexual abuse", definition: "Forcing or enticing someone into sexual activity without consent, including exploitation." },
    { term: "Neglect", definition: "Failure to provide necessary care, resulting in harm or risk of harm — includes self-neglect." },
    { term: "Financial abuse", definition: "Illegal or unauthorised use of someone's money, property or assets, e.g. theft, coercion, fraud." },
    { term: "Institutional abuse", definition: "Abuse occurring within a care setting due to poor practice, culture or systems." },
  ],
  concepts: [
    {
      id: "edxbtechsc-u7-l2-abuse",
      title: "Types of abuse and neglect",
      skill: "Identify and describe the main types of abuse and their signs.",
      lesson: {
        sections: [
          {
            heading: "Types of abuse",
            body: "**Physical abuse**: hitting, slapping, pushing, inappropriate restraint, medication misuse. Signs: unexplained bruises, burns, fractures, fear of physical contact.\n\n**Emotional abuse**: humiliation, threats, intimidation, isolation, controlling behaviour. Signs: withdrawal, low self-esteem, anxiety, fear of specific people.\n\n**Sexual abuse**: forced sexual activity, exploitation, inappropriate touching. Signs: sexualised behaviour, distress, genital injuries, pregnancy.\n\n**Neglect**: failure to provide food, hygiene, medical care, supervision. Signs: poor hygiene, malnutrition, untreated conditions, unsafe environment.\n\n**Financial abuse**: theft, fraud, coercion over money/property. Signs: missing money, unexplained withdrawals, changes to wills.\n\n**Institutional abuse**: poor practice embedded in care settings — rigid routines, lack of choice, dehumanising treatment.",
          },
          {
            heading: "Recognising and responding",
            body: "Signs of abuse may be physical (injuries, poor hygiene) or behavioural (fear, withdrawal, changes in mood). Workers should be alert to changes in behaviour, inconsistent explanations, and reluctance to discuss.\n\n**Response**: record observations accurately (facts, not opinions), report to manager/designated safeguarding lead immediately, follow local procedures. Never investigate alone or confront the suspected abuser. If immediate danger, contact emergency services.",
          },
        ],
        keyFormulas: [
          { name: "Abuse types", statement: "physical, emotional, sexual, neglect, financial, institutional" },
          { name: "Response", statement: "record facts → report → follow procedures → escalate if needed" },
          { name: "Signs", statement: "physical injuries + behavioural changes" },
        ],
        workedExample: {
          problem: "A client becomes withdrawn and anxious whenever a particular family member visits. Explain what this might indicate and how to respond.",
          solution: "This could indicate emotional or physical abuse by the family member. The worker should record the observation, note the pattern, and report to the manager/designated safeguarding lead. They should not confront the family member or investigate alone — follow local safeguarding procedures and consider whether the client feels safe.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u7-abuse-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name four types of abuse.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Types of abuse",
                              "statement": "Physical, emotional, sexual, neglect, financial, institutional."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any four named correctly.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Any four: physical, emotional, sexual, neglect, financial, institutional."
},
        },
        {
          id: "edxbtechsc-u7-abuse-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define financial abuse and give two examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Financial abuse",
                              "statement": "Illegal/unauthorised use of money or property."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Financial abuse defined.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Example 1, e.g. theft or unauthorised withdrawals.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Example 2, e.g. coercion to change will or sign documents.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Illegal use of someone's money/property — theft, fraud, coercion."
},
        },
        {
          id: "edxbtechsc-u7-abuse-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three signs that might indicate physical abuse.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Physical abuse signs",
                              "statement": "Injuries, fear, inconsistent explanations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any three, e.g. unexplained bruises, burns, fractures, fear of contact.",
                              "marks": 3,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Any three valid signs of physical abuse."
},
        },
        {
          id: "edxbtechsc-u7-abuse-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between neglect and self-neglect, and describe one consequence of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Neglect vs self-neglect",
                              "statement": "Neglect = failure by others; self-neglect = failure by person themselves."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Neglect defined: carer/family fails to provide care.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Self-neglect defined: person fails to care for themselves.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Consequence of neglect, e.g. malnutrition, untreated illness, unsafe environment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Consequence of self-neglect, e.g. isolation, health deterioration, hoarding.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Neglect = others fail; self-neglect = self-failure — both harm health and wellbeing."
},
        },
        {
          id: "edxbtechsc-u7-abuse-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain what institutional abuse is and describe three ways it can occur in a care setting.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Institutional abuse",
                              "statement": "Abuse embedded in care systems/culture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Institutional abuse defined: poor practice/systemic issues in care settings.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Way 1, e.g. rigid routines removing choice.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Way 2, e.g. staff treating people as tasks not individuals.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Way 3, e.g. lack of privacy, dehumanising language, ignoring preferences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Requires systemic review and culture change to address.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Institutional abuse = systemic poor practice; examples: rigid routines, depersonalisation, ignored choices."
},
        },
        {
          id: "edxbtechsc-u7-abuse-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write an extended answer covering:\n(a) four types of abuse;\n(b) two signs of emotional abuse;\n(c) two signs of neglect;\n(d) how to respond to suspected abuse;\n(e) why workers should not investigate alone;\n(f) the role of the designated safeguarding lead;\n(g) how to record concerns accurately.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Abuse recognition and response",
                              "statement": "Identify, record, report, escalate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Four abuse types.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Two emotional abuse signs, e.g. withdrawal, low self-esteem.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Two neglect signs, e.g. poor hygiene, untreated illness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Response: record, report, follow procedures.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Investigation alone risks evidence loss and confrontation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) DSL coordinates safeguarding response and liaises with authorities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Record facts, times, observations — not opinions or speculation.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Complete abuse recognition and response overview."
},
        },
      ],
    },
    {
      id: "edxbtechsc-u7-l2-risk",
      title: "Risk assessment and management",
      skill: "Explain the risk assessment process and describe how to manage risks in care settings.",
      lesson: {
        sections: [
          {
            heading: "The risk assessment process",
            body: "**Risk assessment** identifies hazards, evaluates likelihood and severity, and plans controls. Steps:\n\n1. **Identify hazards** — what could cause harm (falls, medication errors, abuse, environmental hazards).\n2. **Evaluate risk** — likelihood (low/medium/high) x severity (minor/serious/severe).\n3. **Plan controls** — eliminate, reduce or manage the risk.\n4. **Implement and monitor** — put controls in place and review regularly.\n\nRisk assessments are person-centred — they consider the individual's choices and capacity, not just generic hazards.",
          },
          {
            heading: "Risk management strategies",
            body: "**Elimination**: remove the hazard entirely. **Reduction**: modify the environment or practice to lower risk (e.g. grab rails, medication prompts). **Management**: accept residual risk with monitoring and contingency plans.\n\n**Positive risk-taking** recognises that people have the right to take reasonable risks — e.g. a client choosing to walk unaided despite fall risk, with appropriate support. Risk assessments must balance safety with autonomy and dignity.\n\nAll risks should be documented, reviewed regularly, and updated when circumstances change.",
          },
        ],
        keyFormulas: [
          { name: "Risk assessment", statement: "identify → evaluate → plan → implement → review" },
          { name: "Risk = likelihood x severity", statement: "higher likelihood or severity = higher risk" },
          { name: "Positive risk-taking", statement: "supporting informed choices despite residual risk" },
        ],
        workedExample: {
          problem: "A client with dementia wants to go outside alone but has previously wandered. How should a risk assessment be approached?",
          solution: "Identify the hazard (wandering, getting lost). Evaluate risk (high likelihood given history, severe consequence). Plan controls that balance safety and autonomy: door alarms, GPS tracking, supervised walks, familiar routes, identification. Implement and review — positive risk-taking means supporting independence while managing risk, not simply banning outdoor access.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u7-risk-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the five steps of the risk assessment process.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Risk assessment",
                              "statement": "Identify, evaluate, plan, implement, review."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identify → evaluate → plan → implement → review.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Identify hazards, evaluate risk, plan controls, implement, review."
},
        },
        {
          id: "edxbtechsc-u7-risk-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define 'positive risk-taking' and give one example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Positive risk-taking",
                              "statement": "Supporting informed choices despite risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Positive risk-taking defined: supporting choices with managed risk.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Example, e.g. client choosing to walk unaided with supervision.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Balances autonomy with safety.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Supporting informed decisions that carry reasonable risk — e.g. supervised independence."
},
        },
        {
          id: "edxbtechsc-u7-risk-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how likelihood and severity are used to evaluate risk.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Risk evaluation",
                              "statement": "Risk = likelihood x severity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Likelihood = how often the hazard might occur.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Severity = how serious the harm would be.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both high = highest priority for controls.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Risk = likelihood x severity; both factors determine priority."
},
        },
        {
          id: "edxbtechsc-u7-risk-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe three risk control strategies and give an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Risk controls",
                              "statement": "Elimination, reduction, management."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Elimination: remove hazard, e.g. remove trip hazard.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reduction: modify to lower risk, e.g. grab rails, non-slip flooring.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Management: accept residual risk with monitoring, e.g. supervision.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Examples show practical application.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Elimination, reduction, management — each with a practical example."
},
        },
        {
          id: "edxbtechsc-u7-risk-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A client with mobility difficulties lives alone and has fallen twice recently.\n(a) Identify two hazards.\n(b) Evaluate the risk level.\n(c) Plan three control measures.\n(d) Explain how to balance safety with the client's independence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Risk assessment",
                              "statement": "Person-centred hazard identification and controls."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Two hazards, e.g. loose rugs, poor lighting, stairs, medication side-effects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Risk evaluated: high likelihood (two falls) x moderate-severe harm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Three controls, e.g. grab rails, physiotherapy, medication review, alarm.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Balance via positive risk-taking: support choices with managed risk, involve client.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Hazards identified, risk evaluated, controls planned, autonomy preserved."
},
        },
        {
          id: "edxbtechsc-u7-risk-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write an extended answer covering:\n(a) the five steps of risk assessment;\n(b) what likelihood and severity mean;\n(c) three risk control strategies with examples;\n(d) what positive risk-taking is;\n(e) why risk assessments must be person-centred;\n(f) when risk assessments should be reviewed;\n(g) how to document a risk assessment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Risk management",
                              "statement": "Structured process balancing safety and autonomy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Five steps listed.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Likelihood and severity defined.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Three controls with examples.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Positive risk-taking defined.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Person-centred = considers individual choices, capacity, circumstances.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Review when circumstances change or regularly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Document hazards, evaluations, controls, reviews, signatures.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Complete risk assessment and management overview."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtechsc-u7-abuse-risk-notes",
      title: "Abuse and risk assessment — notes",
      summary: "Recognise abuse signs; record facts, report, escalate. Risk assessment = identify, evaluate, plan, implement, review.",
      sections: [
        { heading: "Key idea", body: "Safeguarding requires vigilance — know the signs and follow procedures." },
        { heading: "Risk", body: "Balance safety with autonomy via positive risk-taking and person-centred assessment." },
      ],
    },
  ],
};
