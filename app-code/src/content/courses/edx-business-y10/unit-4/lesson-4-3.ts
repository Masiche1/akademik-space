import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ebz10-u4-lesson-4-3",
  code: "4-3",
  title: "Employment Contracts, Pay and Employee Relations",
  goal: "I CAN explain employment rights, pay systems and employee relations.",
  standards: ["Edexcel IGCSE Business 4BS0 — Human Resources Management"],
  
  vocabulary: [
    { term: "Employment contract", definition: "Agreement setting out rights and duties of employer and employee." },
    { term: "Gross pay", definition: "Pay before deductions such as tax and national insurance." },
    { term: "Net pay", definition: "Pay received after deductions." },
    { term: "Discrimination", definition: "Unfair treatment because of a protected characteristic." },
    { term: "Grievance procedure", definition: "Formal process for employees to raise workplace problems." },
    { term: "Trade union", definition: "Organisation representing employees in negotiations with employers." },
    { term: "Collective bargaining", definition: "Negotiation between employers and employee representatives." },
  ],
  concepts: [
    {
      id: "ebz10-u4-contracts-pay-rights",
      title: "Contracts, Pay and Employment Rights",
      skill: "Understand contracts, pay calculations and legal protections.",
      lesson: {
        sections: [
          {
            heading: "Employment contracts and pay",
            body: "An **employment contract** states job title, duties, hours, pay, holiday and notice. Employers must follow minimum wage laws and working-time rules. Pay may be calculated hourly, weekly, monthly or by salary. Gross pay is before deductions; net pay is after tax and other deductions.",
          },
          {
            heading: "Rights and protections",
            body: "Employees have protection against discrimination, unsafe working conditions and unfair dismissal. Businesses must provide a safe workplace, reasonable hours and appropriate contracts. Health and safety rules require risk assessment and protective equipment where needed.",
          },
          {
            heading: "Types of employment",
            body: "Permanent staff have ongoing contracts; temporary staff are employed for a fixed period; part-time workers work fewer hours; casual workers are employed as needed. Each arrangement affects flexibility, cost and employee security.",
          },
        ],
        keyFormulas: [
          { name: "Gross pay", statement: "Hours worked × hourly rate before deductions" },
          { name: "Net pay", statement: "Gross pay − deductions" },
        ],
        workedExample: {
          problem: "An employee works 160 hours at £12.50 per hour. Deductions are 20%. Calculate gross and net pay.",
          solution: "Gross pay = 160 × £12.50 = £2,000. Deductions = 20% × £2,000 = £400. Net pay = £2,000 − £400 = £1,600.",
        },
      },
      questions: [
        {
          id: "ebz10-u4-contract-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an employment contract?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A document listing only salary"
                    },
                    {
                              "id": "b",
                              "text": "Agreement setting out employer and employee rights and duties"
                    },
                    {
                              "id": "c",
                              "text": "A letter offering a job"
                    },
                    {
                              "id": "d",
                              "text": "A trade union agreement"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Employment contract",
                              "statement": "Legal agreement on job terms and responsibilities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A contract defines duties, pay, hours, holidays and notice for both parties.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Agreement setting out rights and duties",
          "commonErrors": [
                    "Confusing contract with job offer or union agreement."
          ]
},
        },
        {
          id: "ebz10-u4-contract-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "An employee works 160 hours at £12.50 per hour. Deductions are 20%. Calculate gross pay and net pay.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Gross pay",
                              "answer": 2000,
                              "unit": "£"
                    },
                    {
                              "label": "Net pay",
                              "answer": 1600,
                              "unit": "£"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Pay calculation",
                              "statement": "Gross pay = hours × rate; net pay = gross pay − deductions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calculate gross pay before deductions: 160 × £12.50 = £2,000.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Calculate deductions of 20%: £400.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Subtract deductions to find net pay: £1,600.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Gross pay £2,000; net pay £1,600.",
          "commonErrors": [
                    "Applying deductions to hours rather than gross pay.",
                    "Forgetting to subtract deductions."
          ]
},
        },
        {
          id: "ebz10-u4-contract-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two legal protections employees have at work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Employment rights",
                              "statement": "Laws protect pay, safety, hours and fair treatment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Employees are protected from discrimination based on characteristics such as age, gender or disability.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Employers must provide a safe workplace and reasonable working hours.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Protection from discrimination and a right to a safe workplace and reasonable hours.",
          "commonErrors": [
                    "Only one protection.",
                    "Vague statement without legal context."
          ]
},
        },
        {
          id: "ebz10-u4-contract-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A small business wants to employ staff for a busy summer season.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Compare permanent and temporary contracts for this situation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Recommend a suitable contract type and justify it.",
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
                              "name": "Contract choice",
                              "statement": "Match employment type to demand and flexibility."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Permanent contracts give security but may create ongoing costs after summer.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Temporary contracts match seasonal demand but may be less stable for staff.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use temporary or part-time contracts for the summer peak.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "This controls labour costs while still providing enough staff for demand.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Use temporary or part-time contracts for seasonal demand.",
          "commonErrors": [
                    "No comparison.",
                    "Recommendation ignores cost or flexibility."
          ]
},
        },
        {
          id: "ebz10-u4-contract-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A factory worker is asked to work 60 hours in one week without rest breaks.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two risks to the employer.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Recommend two actions the employer should take.",
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
                              "name": "Working time and safety",
                              "statement": "Excessive hours can breach law and increase accidents."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The employer may break working-time rules and face legal penalties.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Tired staff are more likely to have accidents, harming safety and productivity.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Schedule reasonable hours and ensure adequate rest breaks.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use additional staff or overtime planning rather than unsafe hours.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Review workload and health and safety risk assessments.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Reduce hours, provide breaks, review safety and use proper staffing or planning.",
          "commonErrors": [
                    "Only legal risk or only safety risk.",
                    "No practical action."
          ]
},
        },
        {
          id: "ebz10-u4-contract-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A retail manager dismisses an employee after she reports unsafe shelving without following procedure.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two possible employment-law issues.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why the dismissal may be unfair.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest two actions the employer should have taken.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Recommend how the employer should handle the situation now.",
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
                              "name": "Fair dismissal",
                              "statement": "Dismissal must follow fair procedure and protect whistleblowers and safety rights."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The employee may have been dismissed for raising a health and safety concern.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "The employer may have failed to follow disciplinary or dismissal procedure.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Raising safety concerns is protected, so dismissal could be victimisation or unfair dismissal.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "No fair investigation or warning makes the decision unjustified.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Investigate the shelving risk and fix it promptly.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Follow a fair disciplinary or grievance procedure before any dismissal.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "Apologise or reinstate if appropriate and review procedures with managers.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Potential unfair/victimisation dismissal; investigate risk, follow procedure and review management practice.",
          "commonErrors": [
                    "Only one legal issue.",
                    "No procedural fix or remedy."
          ]
},
        },
      ],
    },
    {
      id: "ebz10-u4-employee-relations",
      title: "Employee Relations and Representation",
      skill: "Explain employee voice, disputes and collective representation.",
      lesson: {
        sections: [
          {
            heading: "Employee voice",
            body: "Employees can communicate through suggestion schemes, team meetings, surveys and one-to-one appraisals. Good communication helps identify problems early, improves morale and supports better decisions.",
          },
          {
            heading: "Disputes and procedures",
            body: "A **grievance** is an employee complaint about work; a **disciplinary** process addresses misconduct or poor performance. Fair procedures should be clear, consistent and give employees a chance to respond. Trade unions may represent employees in these processes.",
          },
          {
            heading: "Trade unions and collective bargaining",
            body: "Trade unions negotiate pay, conditions and disputes through **collective bargaining**. They can improve job security and represent staff collectively, but conflict may arise if negotiations fail, potentially leading to strikes or other industrial action.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "Staff complain about shift patterns. What process should the employer use?",
          solution: "Use the grievance procedure, listen to representatives, investigate and respond with a fair decision or negotiated change.",
        },
      },
      questions: [
        {
          id: "ebz10-u4-rel-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is collective bargaining?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Negotiation between employer and employee representatives"
                    },
                    {
                              "id": "b",
                              "text": "A company selling products abroad"
                    },
                    {
                              "id": "c",
                              "text": "Hiring temporary workers"
                    },
                    {
                              "id": "d",
                              "text": "A customer loyalty programme"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Collective bargaining",
                              "statement": "Negotiation between employer and employee representatives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Collective bargaining concerns pay, conditions and disputes negotiated by representatives or unions.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Negotiation between employer and employee representatives",
          "commonErrors": [
                    "Confusing bargaining with ordinary sales or hiring."
          ]
},
        },
        {
          id: "ebz10-u4-rel-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three ways employees can communicate concerns to management.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Employee voice",
                              "statement": "Formal and informal channels let staff raise issues."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Use suggestion schemes or employee surveys.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Raise issues in team meetings or one-to-one appraisals.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Use a grievance procedure or union representative for formal complaints.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Surveys, meetings/appraisals, suggestion schemes and grievance procedures.",
          "commonErrors": [
                    "Only one channel.",
                    "Channels not linked to raising concerns."
          ]
},
        },
        {
          id: "ebz10-u4-rel-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between a grievance and a disciplinary procedure.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Grievance vs disciplinary",
                              "statement": "Employee complaint versus employer concern about conduct."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A grievance is raised by an employee about a workplace problem.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It concerns issues such as unfair treatment, workload or safety.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "A disciplinary procedure addresses employee misconduct or poor performance.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It may lead to warnings, training or dismissal if justified.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Grievance = employee complaint; disciplinary = employer action about conduct/performance.",
          "commonErrors": [
                    "Same process assumed.",
                    "No examples."
          ]
},
        },
        {
          id: "ebz10-u4-rel-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A warehouse has rising accidents and poor communication between shifts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two employee-relations problems.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two ways to improve relations and communication.",
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
                              "name": "Industrial relations",
                              "statement": "Communication and fair procedures reduce conflict and improve safety."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Poor communication between shifts can cause accidents and missed hazards.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Staff may feel unheard, lowering morale and trust.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Introduce shift handover meetings or logs to share safety information.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use a grievance procedure and safety representatives to investigate concerns.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Improve shift communication and create formal channels for safety concerns.",
          "commonErrors": [
                    "Only accident issue.",
                    "No communication solution."
          ]
},
        },
        {
          id: "ebz10-u4-rel-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A transport company faces demands for higher pay from its drivers' union.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two possible outcomes if negotiations fail.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Recommend a balanced approach for the company.",
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
                              "name": "Collective disputes",
                              "statement": "Failed bargaining can lead to industrial action or costly compromise."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Drivers may strike or take other industrial action, disrupting services.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "The company may face lost revenue, reputation damage and higher eventual costs.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Enter collective bargaining early and listen to union representatives.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Consider non-pay benefits or phased pay rises to reach agreement.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Communicate business constraints honestly while seeking a fair solution.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Negotiate through collective bargaining and seek compromise to avoid disruption.",
          "commonErrors": [
                    "Only one outcome.",
                    "No negotiation or compromise."
          ]
},
        },
        {
          id: "ebz10-u4-rel-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A call centre has high absence, many grievances and no union recognition.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two reasons employee relations may be poor.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the role of a grievance procedure.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest two ways management could improve communication.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether recognising a trade union would help.",
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
                              "name": "Employee relations strategy",
                              "statement": "Fair procedures, communication and representation improve trust."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Staff may feel workload or pay concerns are ignored.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Lack of clear procedures can make complaints feel pointless.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "A grievance procedure gives employees a formal route to raise problems.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "It requires investigation, response and possible resolution or appeal.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Hold regular team meetings and publish clear policies.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use surveys or one-to-one check-ins to identify issues early.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "A union could provide representation and improve collective voice.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "But it may also create formal conflict if management is unwilling to negotiate.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Improve procedures and communication; union recognition may help but depends on management cooperation.",
          "commonErrors": [
                    "Only lists problems.",
                    "Union recommendation not evaluated."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u4-employment-notes",
      title: "Contracts, pay and employee relations — notes",
      summary: "Employment contracts protect rights, gross and net pay differ by deductions, and fair procedures plus representation support good industrial relations.",
      sections: [
        { heading: "Contracts", body: "Contracts set duties, pay, hours, holidays and notice." },
        { heading: "Pay", body: "Gross pay = hours × rate; net pay = gross pay − deductions." },
        { heading: "Rights", body: "Protect against discrimination, unsafe work and unfair dismissal." },
        { heading: "Relations", body: "Grievance, disciplinary, unions and collective bargaining manage disputes." },
      ],
    },
  ],
};
