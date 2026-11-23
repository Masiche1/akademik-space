import type { Lesson } from "../../../types.ts";

export const lesson133: Lesson = {
  id: "ebz11-u13-lesson-13-3",
  code: "13-3",
  title: "Health, Safety and Staff Welfare",
  goal: "I CAN explain employer and employee duties for health and safety and the role of staff welfare.",
  standards: ["Edexcel IGCSE Business 4BS0 — People in Business", "4BS0 2.5 Organisation structure and employees"],
  
  vocabulary: [
    { term: "Health and safety", definition: "Laws and practices protecting workers from harm." },
    { term: "Risk assessment", definition: "Identifying hazards and deciding how to control them." },
    { term: "PPE", definition: "Personal protective equipment such as helmets or gloves." },
    { term: "Hazard", definition: "Anything that could cause harm." },
    { term: "Staff welfare", definition: "Support for employee wellbeing and working conditions." },
    { term: "Wellbeing", definition: "Physical and mental health of employees." },
    { term: "Duty of care", definition: "Legal obligation to take reasonable care of others." },
  ],
  concepts: [
    {
      id: "ebz11-u13-safety",
      title: "Health and Safety at Work",
      skill: "Explain employer and employee responsibilities for workplace safety.",
      lesson: {
        sections: [
          {
            heading: "Employer duties",
            body: "Employers have a **duty of care** to provide a safe workplace. This includes carrying out **risk assessments**, providing training, supplying suitable **PPE**, maintaining equipment, keeping facilities clean and having procedures for accidents and emergencies.\n\nSafe systems reduce accidents, lower insurance costs, improve morale and protect the business from fines, prosecution and reputational damage.",
          },
          {
            heading: "Employee duties and consequences",
            body: "Employees must follow safety rules, use equipment correctly, wear PPE, report hazards and attend training. They have a responsibility not to endanger themselves or others.\n\nPoor safety can cause injury, absenteeism, lower productivity, compensation claims and legal action. Safety should be embedded in induction and ongoing training, not treated as an afterthought.",
          },
        ],
        keyFormulas: [
          { name: "Risk assessment", statement: "Identify hazard → assess risk → control it" },
          { name: "Duty of care", statement: "Reasonable steps to protect workers" },
        ],
        workedExample: {
          problem: "A warehouse has slippery floors and workers carrying heavy boxes. Identify two safety measures.",
          solution: "Non-slip flooring and manual-handling training plus suitable footwear/PPE reduce slip and lifting risks.",
        },
      },
      questions: [
        {
          id: "ebz11-u13-safety-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a risk assessment?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Paying workers for overtime"
                    },
                    {
                              "id": "b",
                              "text": "Identifying hazards and deciding how to control them"
                    },
                    {
                              "id": "c",
                              "text": "Buying new machinery"
                    },
                    {
                              "id": "d",
                              "text": "Hiring more staff"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Risk assessment",
                              "statement": "Identify hazards and control risks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Risk assessment = identify hazard and control risk.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Identify hazards and control them",
          "commonErrors": [
                    "Confusing with insurance."
          ]
},
        },
        {
          id: "ebz11-u13-safety-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give one duty of employers and one duty of employees for health and safety.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Safety duties",
                              "statement": "Employer protects; employee follows rules."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Employer provides safe systems, training and PPE.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Employee follows safety rules and reports hazards.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Both duties are needed for an effective safety system.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Employer provides protection; employee follows rules and reports hazards.",
          "commonErrors": [
                    "Only one side."
          ]
},
        },
        {
          id: "ebz11-u13-safety-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways a business can reduce workplace accidents.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Accident prevention",
                              "statement": "Training, PPE, maintenance and safe procedures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Provide training so workers know safe practices.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Supply and require PPE where hazards exist.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Maintain equipment and keep premises clean.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Encourage reporting and review incidents.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Training, PPE, maintenance and reporting/learning from incidents.",
          "commonErrors": [
                    "Only listing PPE."
          ]
},
        },
        {
          id: "ebz11-u13-safety-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Discuss the costs to a business of poor health and safety.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Safety costs",
                              "statement": "Accidents create financial, legal and human costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Injuries cause absenteeism and lost productivity.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Compensation claims and fines increase costs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Morale and reputation can be damaged.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Legal prosecution may disrupt operations.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Prevention is usually cheaper than accident costs.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Absenteeism, claims/fines, morale, reputation and legal disruption.",
          "commonErrors": [
                    "Only financial costs."
          ]
},
        },
        {
          id: "ebz11-u13-safety-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A construction firm must choose between investing in more PPE or training workers in safe manual handling. Evaluate both options.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Safety investment",
                              "statement": "PPE protects; training prevents unsafe behaviour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PPE provides immediate physical protection.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "PPE can be uncomfortable or misused if not trained.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Training teaches correct lifting techniques.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Training reduces reliance on PPE alone.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both are needed for different hazards.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Best approach combines PPE with training and supervision.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Decision depends on specific hazards and tasks.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Use PPE for protection and training for prevention; combine both.",
          "commonErrors": [
                    "Choosing one without justification."
          ]
},
        },
        {
          id: "ebz11-u13-safety-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A factory accident caused injury because a machine guard was missing. Recommend an investigation and safety improvements.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Incident response",
                              "statement": "Investigate cause, control risk and prevent recurrence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Secure the scene and provide first aid.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Investigate why the guard was missing.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Check maintenance records and supervision.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Identify whether training or procedures failed.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Replace guards and improve inspection routines.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Retrain staff on machine safety.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Introduce regular safety audits.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Encourage hazard reporting without blame.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Record findings and monitor compliance.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Review the safety system after changes.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Investigate cause, restore guards, retrain staff, audit and monitor safety.",
          "commonErrors": [
                    "Only replacing the guard without investigation."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u13-welfare",
      title: "Staff Welfare and Employee Support",
      skill: "Explain staff welfare provision and its benefits for employees and employers.",
      lesson: {
        sections: [
          {
            heading: "What staff welfare includes",
            body: "**Staff welfare** covers working conditions and support that improve wellbeing: clean facilities, drinking water, rest areas, protective equipment, counselling, employee assistance, flexible working, childcare support and help with work-related stress.\n\nWelfare is part of the HR function. It supports recruitment, retention, motivation and legal compliance. Poor welfare can increase absence, turnover and conflict.",
          },
          {
            heading: "Employment issues and support",
            body: "HR also supports **employment issues** such as contracts, pay queries, absence, grievances and changes in working arrangements. Support may include mediation, flexible hours, occupational health referrals or reasonable adjustments for disabled employees.\n\nEffective welfare balances employee needs with business costs. It is not charity — it helps the business retain skilled staff, reduce accidents and maintain a positive reputation.",
          },
        ],
        keyFormulas: [
          { name: "Staff welfare", statement: "Conditions and support for employee wellbeing" },
          { name: "Welfare trade-off", statement: "Cost now versus retention, morale and productivity" },
        ],
        workedExample: {
          problem: "A call centre has high stress absence. Suggest two welfare improvements.",
          solution: "Provide counselling/employee assistance and introduce regular breaks or flexible shift patterns.",
        },
      },
      questions: [
        {
          id: "ebz11-u13-welfare-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is an example of staff welfare provision?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Profit sharing"
                    },
                    {
                              "id": "b",
                              "text": "Clean rest facilities and drinking water"
                    },
                    {
                              "id": "c",
                              "text": "A company car"
                    },
                    {
                              "id": "d",
                              "text": "A sales commission"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Staff welfare",
                              "statement": "Support for wellbeing and working conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Facilities and drinking water support welfare.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Clean rest facilities and drinking water",
          "commonErrors": [
                    "Confusing financial rewards with welfare."
          ]
},
        },
        {
          id: "ebz11-u13-welfare-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain two benefits of good staff welfare for a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Welfare benefits",
                              "statement": "Better morale, retention and productivity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Employees are more motivated and less stressed.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Lower absence and turnover reduce costs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Good reputation helps recruitment.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Motivation, lower absence/turnover and better recruitment reputation.",
          "commonErrors": [
                    "Only employee benefits, not business benefits."
          ]
},
        },
        {
          id: "ebz11-u13-welfare-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give two examples of non-financial employee support a business can provide.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Employee support",
                              "statement": "Counselling, flexibility, facilities and adjustments."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Counselling or employee assistance for stress.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Flexible hours or remote working arrangements.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Reasonable adjustments for disabled employees.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Support with grievances or employment issues.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Counselling, flexible hours, adjustments and grievance support.",
          "commonErrors": [
                    "Only listing pay."
          ]
},
        },
        {
          id: "ebz11-u13-welfare-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the costs and benefits of investing in staff welfare.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Welfare investment",
                              "statement": "Short-term cost versus long-term benefits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Costs include facilities, training and support services.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Benefits include lower absence and turnover.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Benefits include higher morale and productivity.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Benefits include legal compliance and reputation.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Value depends on whether benefits exceed ongoing costs.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Welfare costs money but can reduce absence, improve morale and support compliance.",
          "commonErrors": [
                    "Ignoring long-term benefits."
          ]
},
        },
        {
          id: "ebz11-u13-welfare-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Evaluate a proposed wellness programme for an office-based business with high stress levels.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Wellness programme",
                              "statement": "Supports wellbeing but must address causes of stress."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wellness activities can reduce stress symptoms.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "They may improve morale and retention.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "They cost money and staff time.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "They may not fix root causes like workload or management.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Combine with workload review and flexible hours.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Measure participation and absence to judge effectiveness.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Best if tailored to actual employee needs.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Wellness helps but should be combined with workload and management changes.",
          "commonErrors": [
                    "Treating wellness as a complete solution."
          ]
},
        },
        {
          id: "ebz11-u13-welfare-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Design a staff welfare package for nurses working rotating shifts in a hospital. Justify each provision.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Welfare design",
                              "statement": "Match provisions to employee needs and work demands."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Provide rest facilities for shift breaks.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Offer counselling for stress and trauma support.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Give access to occupational health for physical demands.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Support childcare or flexible rostering for family needs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Provide PPE and safety training for clinical hazards.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Welfare reduces burnout and absence.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "It improves retention of skilled nurses.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "It supports patient safety through alert staff.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "It meets duty of care and legal expectations.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Regular review keeps provision relevant.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Combine rest, counselling, occupational health, flexible rostering, PPE and safety training.",
          "commonErrors": [
                    "Generic benefits not linked to shift work."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u13-welfare-notes",
      title: "Health, safety and welfare — notes",
      summary: "Employers owe a duty of care; welfare support improves safety, morale, retention and productivity.",
      sections: [
        { heading: "Safety", body: "Risk assessments, training, PPE, maintenance and incident reporting reduce accidents and legal risk." },
        { heading: "Duties", body: "Employers provide protection; employees follow rules, use PPE and report hazards." },
        { heading: "Welfare", body: "Facilities, counselling, flexibility and support improve wellbeing and business performance." },
      ],
    },
  ],
};
