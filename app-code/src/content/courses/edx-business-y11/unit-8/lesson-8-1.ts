import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "ebz11-u8-lesson-8-1",
  code: "8-1",
  title: "Performance Management and Communication",
  goal: "I CAN explain performance appraisals, feedback and how communication works within organisations.",
  standards: ["Edexcel IGCSE Business 4BS0 — People in Business: performance and communication"],
  
  vocabulary: [
    { term: "Performance appraisal", definition: "Formal review of an employee's work against objectives, usually once or twice a year." },
    { term: "Objectives", definition: "Specific, measurable targets set for an employee or team to achieve." },
    { term: "Feedback", definition: "Information given to an employee about how well they are performing." },
    { term: "Formal communication", definition: "Planned, official channels such as reports, meetings and emails from management." },
    { term: "Informal communication", definition: "Unofficial communication such as the grapevine and casual conversation." },
    { term: "Grapevine", definition: "Informal network through which rumours and unofficial news spread." },
    { term: "Downward communication", definition: "Messages flowing from managers to employees, e.g. instructions and policies." },
    { term: "Upward communication", definition: "Messages flowing from employees to managers, e.g. suggestions and complaints." },
  ],
  concepts: [
    {
      id: "ebz11-u8-performance",
      title: "Performance Appraisal and Feedback",
      skill: "Explain how appraisals, objectives and feedback improve employee performance.",
      lesson: {
        sections: [
          {
            heading: "The appraisal process",
            body: "Performance management links individual work to business goals. Managers set **objectives** (ideally specific and measurable), employees work towards them, and at review time performance is **appraised** against those objectives. The appraisal may use self-assessment, manager observation, customer feedback or output data. The outcome identifies training needs, informs pay decisions and sets objectives for the next period.",
          },
          {
            heading: "Methods and benefits",
            body: "Common methods: **self-appraisal** (employee reviews own work — promotes reflection but may be biased), **360-degree appraisal** (feedback from managers, peers, subordinates and customers — balanced but time-consuming), **rating/scales** (grading against criteria), and **critical incidents** (recording notable good or bad performance). **Feedback** should be specific, timely and two-way — praise what works, agree actions for improvement. Benefits: motivated staff, identified training gaps, fairer pay decisions, clearer expectations.",
          },
        ],
        keyFormulas: [
          { name: "Appraisal cycle", statement: "set objectives → work → review → feedback → new objectives" },
        ],
        workedExample: {
          problem: "A sales employee has an objective to increase sales by 10%. At appraisal, sales rose 14% but customer complaints doubled. How should the manager handle the appraisal?",
          solution: "Recognise the target was exceeded (positive feedback on sales), but raise the complaint issue — agree an action plan such as product training or review of sales practices. Link both to next period's objectives so quantity gains do not come at the cost of service quality.",
        },
      },
      questions: [
        {
          id: "ebz11-u8-performance-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a performance appraisal?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A job interview for new staff"
                    },
                    {
                              "id": "b",
                              "text": "A formal review of an employee's work against objectives"
                    },
                    {
                              "id": "c",
                              "text": "A method of paying wages"
                    },
                    {
                              "id": "d",
                              "text": "A disciplinary hearing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Performance appraisal",
                              "statement": "Formal review against objectives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Appraisal = formal review of work vs objectives.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Formal review against objectives"
},
        },
        {
          id: "ebz11-u8-performance-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name two methods of performance appraisal and give one advantage of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Appraisal methods",
                              "statement": "Self, 360-degree, rating scales, critical incidents."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Self-appraisal — employee reviews own work; advantage: promotes reflection/ownership.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "360-degree appraisal — feedback from manager, peers, subordinates, customers; advantage: balanced view.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Alternative: rating scales — simple and consistent; critical incidents — focused on real events.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Two methods each with a correct advantage.",
          "commonErrors": [
                    "Methods without advantages.",
                    "Invented methods not in syllabus."
          ]
},
        },
        {
          id: "ebz11-u8-performance-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why setting clear objectives is important in performance management.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Objective setting",
                              "statement": "Clear targets direct effort and enable measurement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Objectives tell employees what is expected — focuses effort on priorities.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Measurable objectives make appraisal fair — performance can be judged objectively.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "They link individual work to business goals — everyone knows how they contribute.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Without objectives, feedback is vague and improvement cannot be tracked.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Objectives focus effort, enable fair measurement and link work to business goals.",
          "commonErrors": [
                    "Only saying 'motivation' without mechanism."
          ]
},
        },
        {
          id: "ebz11-u8-performance-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A manager gives an employee only negative feedback at appraisal, citing failures but never acknowledging good work.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain one effect this may have on the employee's motivation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe how the manager could give more effective feedback.",
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
                              "name": "Effective feedback",
                              "statement": "Balanced, specific, two-way feedback motivates improvement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) One-sided criticism can demotivate — employee feels unappreciated and may disengage.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Acknowledge strengths as well as weaknesses — balanced feedback.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Be specific — cite examples of what went well and what needs improvement.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Agree actions for improvement and set new objectives together (two-way).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) demotivation/disengagement. (b) balance, specificity, agreed actions.",
          "commonErrors": [
                    "Saying all criticism is bad.",
                    "No concrete improvement actions."
          ]
},
        },
        {
          id: "ebz11-u8-performance-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A company wants to introduce formal performance appraisals for the first time.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two benefits appraisals could bring to the company.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one possible problem the company might face when introducing appraisals.",
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
                              "name": "Introducing appraisals",
                              "statement": "Benefits: clarity, development; problems: time, bias, resistance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Benefit: clear objectives and feedback improve individual and team performance.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Benefit: identifies training needs and supports fair pay/promotion decisions.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Benefit: links staff goals to company strategy.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Problem: appraisals are time-consuming for managers and staff.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Problem: risk of bias or inconsistency if managers are untrained; staff may see it as threatening.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) clarity/performance, training needs, fair decisions. (b) time cost, bias, staff resistance.",
          "commonErrors": [
                    "Benefits without company-level relevance.",
                    "Problems that are not appraisal-specific."
          ]
},
        },
        {
          id: "ebz11-u8-performance-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A retail firm reviews how it manages staff performance.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define performance appraisal.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe two methods of appraising performance.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain two benefits of regular appraisals for the business.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Explain one way the firm could make appraisals more effective.",
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
                              "name": "Performance management",
                              "statement": "Appraisal cycle: objectives → review → feedback → development."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Formal review of an employee's work against set objectives.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Method 1: self-appraisal — employee assesses own performance.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Method 2: 360-degree — input from manager, peers, customers; or rating scales/critical incidents.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Benefit: identifies training needs and improves performance through feedback.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Benefit: supports fair pay and promotion decisions; links staff to business goals.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) e.g. train managers to give balanced, specific feedback; set SMART objectives; follow up on agreed actions.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) formal review vs objectives; (b) two methods; (c) two benefits; (d) improve feedback/objectives/follow-up.",
          "commonErrors": [
                    "Methods confused with appraisal definition.",
                    "Benefits that are generic HR points."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u8-communication",
      title: "Communication in Organisations",
      skill: "Describe communication channels, directions and barriers in business.",
      lesson: {
        sections: [
          {
            heading: "Channels and directions",
            body: "**Downward** communication flows from managers to staff — instructions, policies, targets. **Upward** flows from staff to managers — suggestions, complaints, feedback; often weak because staff fear criticism. **Horizontal/lateral** flows between colleagues at the same level — coordination and problem-solving. Channels include **verbal** (meetings, phone — fast, allows questions) and **written** (emails, memos, reports — recordable, reaches many, but slower and no instant feedback).",
          },
          {
            heading: "Formal, informal and barriers",
            body: "**Formal** channels are official and planned; **informal** channels (the **grapevine**) spread rumours quickly — they can be useful for morale but dangerous if they spread inaccurate or damaging information. **Barriers** to communication: poor listening, jargon, information overload, filtering (messages altered as they pass up/down levels), physical distance, and status differences that discourage upward communication. Overcoming barriers: choose the right channel, keep messages clear and simple, encourage feedback and two-way communication.",
          },
        ],
        keyFormulas: [
          { name: "Directions", statement: "downward (orders), upward (feedback), lateral (coordination)" },
          { name: "Grapevine", statement: "informal channel — fast but unreliable" },
        ],
        workedExample: {
          problem: "A manager emails a complex policy change to all staff. Some staff misunderstand it and the grapevine spreads a wrong version. Why did this happen and what should the manager do?",
          solution: "The written channel was one-way with no chance to ask questions, and jargon/complexity acted as a barrier; the grapevine filled the information gap with rumour. The manager should use a meeting or follow-up session for Q&A, simplify the message and confirm understanding.",
        },
      },
      questions: [
        {
          id: "ebz11-u8-communication-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the grapevine?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An official company newsletter"
                    },
                    {
                              "id": "b",
                              "text": "The informal network through which rumours spread"
                    },
                    {
                              "id": "c",
                              "text": "A type of email system"
                    },
                    {
                              "id": "d",
                              "text": "A formal complaints procedure"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Grapevine",
                              "statement": "Informal communication network."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grapevine = informal rumours channel.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Informal network for rumours"
},
        },
        {
          id: "ebz11-u8-communication-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Distinguish between downward and upward communication, giving an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Communication directions",
                              "statement": "Downward = managers to staff; upward = staff to managers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Downward: instructions, policies, targets from managers to employees — e.g. a memo about new rules.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Upward: suggestions, complaints, feedback from employees to managers — e.g. a suggestion box entry.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Clear contrast of direction and purpose for each.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Downward=orders/instructions; upward=feedback/suggestions — each with example.",
          "commonErrors": [
                    "Examples without direction explained."
          ]
},
        },
        {
          id: "ebz11-u8-communication-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two barriers to effective communication in a large organisation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Communication barriers",
                              "statement": "Filtering, overload, jargon, status differences block messages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Barrier 1: filtering — messages are altered or summarised as they pass through management levels.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Barrier 2: information overload — too many messages so important ones are missed.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Any two valid barriers explained: filtering, overload, jargon, distance, status.",
          "commonErrors": [
                    "Listing without explaining the effect.",
                    "Channels confused with barriers."
          ]
},
        },
        {
          id: "ebz11-u8-communication-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A company relies only on email for all internal communication.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two disadvantages of relying only on written communication like email.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest one situation where verbal communication would be better.",
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
                              "name": "Channel choice",
                              "statement": "Written = recordable but no instant feedback; verbal = fast, interactive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Disadvantage: no immediate feedback — misunderstandings go unnoticed.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Disadvantage: tone can be misread; complex or sensitive issues are poorly handled in writing.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Verbal better for: briefing meetings, handling complaints or complex change where questions can be asked.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) no feedback, tone misread. (b) meetings/complex or sensitive topics.",
          "commonErrors": [
                    "Saying email is always best/worst.",
                    "No concrete situation for (b)."
          ]
},
        },
        {
          id: "ebz11-u8-communication-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "After a reorganisation, staff hear rumours through the grapevine before official announcements.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two risks of relying on the grapevine for important news.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two ways management could reduce the grapevine's role.",
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
                              "name": "Grapevine risks",
                              "statement": "Rumours are fast but inaccurate; timely official comms reduce them."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Risk 1: information is often distorted or exaggerated as it passes along.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Risk 2: rumours create anxiety, rumours about jobs can damage morale and productivity.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Way 1: communicate openly and quickly through formal channels before rumours fill the gap.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Way 2: encourage upward communication and hold Q&A sessions so staff get facts directly.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) distortion, anxiety/morale damage. (b) fast official comms, open two-way channels.",
          "commonErrors": [
                    "Treating grapevine as purely bad.",
                    "Solutions that ignore information gaps."
          ]
},
        },
        {
          id: "ebz11-u8-communication-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A growing company finds messages are not reaching frontline staff and upward feedback is rare.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the three directions of organisational communication.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why upward communication is often weak.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain two barriers that may be causing the company's communication problems.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Suggest two improvements the company could make.",
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
                              "name": "Communication diagnosis",
                              "statement": "Directions, barriers and channel choice determine communication effectiveness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Downward, upward and lateral/horizontal.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Staff fear criticism or blame, so they withhold bad news or suggestions.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Hierarchical distance and status differences make managers seem unapproachable.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) No clear formal channel encourages feedback — messages have nowhere to go.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Barrier: information overload or too many levels — filtering distorts messages.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Barrier: inappropriate channel — complex instructions sent only by email with no Q&A.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Improvement: introduce suggestion schemes/meetings to open upward channels.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(d) Improvement: simplify messages, use appropriate channels, confirm understanding.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) down/up/lateral; (b) fear, distance, no channel; (c) two barriers; (d) two improvements.",
          "commonErrors": [
                    "Conflating formal and informal channels.",
                    "Improvements not linked to diagnosed problems."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u8-performance-notes",
      title: "Performance and communication — revision notes",
      summary: "Appraisals review work against objectives; feedback should be balanced and specific. Communication flows downward, upward, laterally; barriers include filtering, overload and status. Grapevine spreads rumours fast but unreliably.",
      sections: [
        { heading: "Appraisal cycle", body: "Set objectives → work → review → feedback → new objectives." },
        { heading: "Communication", body: "Match channel to message; encourage upward feedback; manage the grapevine with fast, open official comms." },
        { heading: "Barriers", body: "Filtering, overload, jargon, distance, status differences — overcome with clarity and two-way channels." },
      ],
    },
  ],
};
