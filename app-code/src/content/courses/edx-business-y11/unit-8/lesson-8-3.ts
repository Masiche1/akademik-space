import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "ebz11-u8-lesson-8-3",
  code: "8-3",
  title: "Managing Change and Organisational Culture",
  goal: "I CAN explain why organisations change, how resistance arises and how to manage change effectively.",
  standards: ["Edexcel IGCSE Business 4BS0 — People in Business: change and culture"],
  
  vocabulary: [
    { term: "Organisational change", definition: "Any significant alteration to a business's structure, processes, culture or strategy." },
    { term: "Planned change", definition: "Change introduced deliberately by management, e.g. new technology or restructuring." },
    { term: "Reactive change", definition: "Change forced by external events, e.g. a competitor's new product or new regulation." },
    { term: "Resistance to change", definition: "Opposition from employees or stakeholders when change threatens their interests or habits." },
    { term: "Organisational culture", definition: "The shared values, beliefs and behaviours that characterise how a business operates." },
    { term: "Change agent", definition: "Person or group responsible for planning and implementing change." },
    { term: "Stakeholders", definition: "Groups affected by the business: employees, customers, shareholders, suppliers, community." },
  ],
  concepts: [
    {
      id: "ebz11-u8-change",
      title: "Why and How Organisations Change",
      skill: "Explain sources of change, causes of resistance and steps to manage change.",
      lesson: {
        sections: [
          {
            heading: "Sources of change",
            body: "**External pressures**: new competitors, changing customer tastes, new technology, government regulation, economic conditions. **Internal pressures**: growth requiring new systems, poor performance needing correction, new leadership with different priorities, mergers creating a combined culture. **Planned change** is deliberate (e.g. introducing lean production); **reactive change** is forced (e.g. responding to a rival's price cut). Change can be incremental (small steps) or transformational (major restructuring).",
          },
          {
            heading: "Resistance and management",
            body: "Employees resist change for understandable reasons: fear of job losses, reduced status or skill obsolescence; dislike of uncertainty; attachment to routine; lack of trust in management; poor communication about why change is needed. **Managing change**: explain the reasons clearly and early; consult and involve staff; provide training for new skills; give support during transition; use **change champions** — respected employees who advocate the change; implement in stages so problems surface early; celebrate early wins to build momentum.",
          },
        ],
        keyFormulas: [
          { name: "Change process", statement: "unfreeze → change → refreeze (Lewin)" },
        ],
        workedExample: {
          problem: "A retailer replaces its till system with self-service checkouts. Staff fear job losses and customers complain. Outline how management should manage this change.",
          solution: "Explain early why the change is needed (faster service, competitiveness). Consult staff on deployment, retrain them for customer-service roles rather than just till work, pilot in one store first, address job fears honestly, and gather customer feedback to fix early problems before full rollout.",
        },
      },
      questions: [
        {
          id: "ebz11-u8-change-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is reactive change?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change planned years in advance"
                    },
                    {
                              "id": "b",
                              "text": "Change forced by external events such as new regulations or competitors"
                    },
                    {
                              "id": "c",
                              "text": "Change that never happens"
                    },
                    {
                              "id": "d",
                              "text": "A type of staff training"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reactive change",
                              "statement": "Change forced by external events."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reactive change responds to external pressures rather than being planned.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Change forced by external events"
},
        },
        {
          id: "ebz11-u8-change-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give two external reasons why a business might need to change.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "External drivers of change",
                              "statement": "Competitors, technology, regulation, customer tastes, economy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "New competitor or rival product forcing the business to respond.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "New technology making existing processes obsolete.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Government regulation or changing customer tastes/economic conditions.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Any two valid external drivers.",
          "commonErrors": [
                    "Internal reasons listed (growth, new manager)."
          ]
},
        },
        {
          id: "ebz11-u8-change-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two reasons why employees might resist organisational change.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Resistance to change",
                              "statement": "Fear, uncertainty, loss of status/routine, distrust."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reason 1: fear of job losses, reduced status or having to learn new skills.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Reason 2: uncertainty — people prefer the known routine; or distrust of management's motives.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Fear of losses/status and uncertainty/distrust — or attachment to routine.",
          "commonErrors": [
                    "Reasons that are benefits of change."
          ]
},
        },
        {
          id: "ebz11-u8-change-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A company announces a major restructuring with no prior consultation, and staff immediately start resisting.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two reasons for the resistance.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest one way management could have reduced the resistance.",
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
                              "name": "Change resistance",
                              "statement": "Surprise + no consultation → fear and opposition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Reason: announcement without consultation created fear and uncertainty about jobs.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Reason: staff had no chance to understand or influence the change — feels imposed.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Method: consult employees early, explain reasons clearly, involve them in planning.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) fear/uncertainty, no consultation. (b) early consultation and clear explanation.",
          "commonErrors": [
                    "Blaming employees for resisting.",
                    "Part (b) repeats the problem instead of offering a solution."
          ]
},
        },
        {
          id: "ebz11-u8-change-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A business wants to introduce new software across all departments.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe three steps the business could take to manage this change effectively.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one benefit of introducing the change gradually rather than all at once.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Managing change",
                              "statement": "Communicate, train, involve, phase."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Step: explain why the change is needed and what it means for staff.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Step: provide training so employees can use the new software confidently.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Step: involve staff in planning/pilot — gather feedback and use change champions.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Step: offer support during transition — helpdesk, supervision, address concerns.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Phased rollout lets problems be found and fixed early before full commitment.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) three valid steps; (b) early problem detection/less disruption.",
          "commonErrors": [
                    "Steps that ignore employees.",
                    "Part (b) says gradual is always better without a reason."
          ]
},
        },
        {
          id: "ebz11-u8-change-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A long-established family business must modernise to survive against larger competitors.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two external pressures forcing this change.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two reasons long-serving staff might resist modernisation.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain three steps management could take to manage the change.",
                    "marks": 5
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Modernisation change",
                              "statement": "External pressure forces change; resistance managed through communication, training and involvement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Pressure 1: larger competitors with better technology/cost advantages.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Pressure 2: changing customer expectations or new technology/regulation.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Reason: fear of job losses or skills becoming obsolete after years of service.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Reason: attachment to established routines and 'how we have always done it'.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Step: communicate the competitive threat clearly — explain why change is essential.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Step: retrain staff and offer support to build confidence in new ways.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Step: involve employees in planning, use change champions, phase implementation.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) competition/technology; (b) job fears, routine attachment; (c) communicate, train, involve/phase.",
          "commonErrors": [
                    "Internal pressures listed for (a).",
                    "Resistance reasons that are actually benefits."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u8-culture",
      title: "Organisational Culture",
      skill: "Explain how culture forms, affects behaviour and can be changed.",
      lesson: {
        sections: [
          {
            heading: "What culture is",
            body: "**Organisational culture** is the shared set of values, beliefs, attitudes and behaviours that define 'how we do things here'. It is shaped by founders' values, leadership style, recruitment (hiring people who fit), rewards (what gets celebrated) and stories and rituals. A strong culture can give staff identity and guide decisions without formal rules — e.g. a culture of innovation encourages risk-taking; a blame culture discourages reporting mistakes.",
          },
          {
            heading: "Culture and change",
            body: "Culture affects how people respond to change: cultures that value stability resist change more; cultures of learning adapt faster. Changing culture is slow — it requires consistent signals: leaders modelling new behaviours, changing recruitment and promotion criteria, revising reward systems to reinforce desired behaviours, and communicating the new values repeatedly. Attempts to change culture through slogans alone fail; employees watch what is rewarded and punished, not what is said. After mergers, clashing cultures are a major source of conflict — management must decide which values to keep.",
          },
        ],
        keyFormulas: [
          { name: "Culture drivers", statement: "leadership, recruitment, rewards, rituals, stories" },
        ],
        workedExample: {
          problem: "A company wants a culture of 'customer focus' but managers are promoted mainly for hitting sales targets regardless of complaints. What does this reveal?",
          solution: "The reward system contradicts the stated value — promotions reward sales only, so staff learn that targets matter more than customers. To change culture, promotion criteria and rewards must genuinely reflect customer focus, and leaders must model it.",
        },
      },
      questions: [
        {
          id: "ebz11-u8-culture-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is organisational culture?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The company's annual report"
                    },
                    {
                              "id": "b",
                              "text": "The shared values, beliefs and behaviours that characterise a business"
                    },
                    {
                              "id": "c",
                              "text": "The office layout"
                    },
                    {
                              "id": "d",
                              "text": "A list of company rules"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Organisational culture",
                              "statement": "Shared values, beliefs and behaviours."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Culture = shared values/beliefs/behaviours of the organisation.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Shared values, beliefs and behaviours"
},
        },
        {
          id: "ebz11-u8-culture-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three factors that shape an organisation's culture.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Culture drivers",
                              "statement": "Leadership, recruitment, rewards, rituals, founders."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Leadership — founders'/managers' values and behaviour set the tone.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Recruitment — hiring people who fit reinforces the culture.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Rewards and rituals — what is celebrated/punished shapes behaviour.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Any three: leadership, recruitment, rewards, rituals/stories, founder influence.",
          "commonErrors": [
                    "Listing culture outcomes rather than drivers."
          ]
},
        },
        {
          id: "ebz11-u8-culture-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how organisational culture can affect employee behaviour.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Culture and behaviour",
                              "statement": "Culture sets informal rules guiding daily behaviour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Culture provides shared expectations — employees know 'how things are done here'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: innovation culture encourages trying new ideas; blame culture discourages reporting mistakes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Culture guides decisions when no formal rule exists — faster, more consistent behaviour.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A strong positive culture improves motivation and performance; a poor one undermines rules.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Culture sets expectations and guides behaviour — can motivate or demoralise.",
          "commonErrors": [
                    "Conflating culture with formal policies."
          ]
},
        },
        {
          id: "ebz11-u8-culture-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A company's stated culture is 'open and innovative', but employees who suggest new ideas are criticised and managers rarely listen.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the gap between stated and actual culture.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two actions management could take to make culture match the stated values.",
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
                              "name": "Culture gap",
                              "statement": "Culture is what is rewarded, not what is said."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Slogans say 'innovative' but behaviour (criticising ideas, not listening) signals the real culture.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Action: managers must model the behaviour — listen to and reward suggestions.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Action: change rewards/promotion criteria so innovation is genuinely valued.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) words vs rewarded behaviour. (b) model it, reward it, align incentives.",
          "commonErrors": [
                    "Saying just repeat the slogan.",
                    "Actions not linked to culture mechanisms."
          ]
},
        },
        {
          id: "ebz11-u8-culture-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two companies merge. One has a fast, risk-taking culture; the other is cautious and rule-bound.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why the merger may create cultural conflict.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two ways management could begin to integrate the cultures.",
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
                              "name": "Mergers and culture",
                              "statement": "Clashing values cause conflict; integration needs deliberate signals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Staff from each firm have different expectations of acceptable behaviour — decisions, risk, pace.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Each group sees its own culture as normal — the other's methods seem wrong or threatening.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Fear of losing status/ways of working breeds resistance and 'us vs them' attitudes.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Way 1: define and communicate shared values explicitly — what the combined culture will be.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Way 2: align leadership behaviour, rewards and promotion to the chosen culture; blend teams.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) clashing values/expectations → conflict. (b) define shared values, align rewards/leadership.",
          "commonErrors": [
                    "Treating culture clash as only a communication problem."
          ]
},
        },
        {
          id: "ebz11-u8-culture-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A business discovers its culture discourages staff from reporting safety problems.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define organisational culture.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how this culture could have developed.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain two dangers of this culture for the business.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Suggest two steps to change the culture.",
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
                              "name": "Culture change",
                              "statement": "Culture forms through leadership, rewards and habits; changes through consistent signals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Shared values, beliefs and behaviours that characterise the organisation.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Possibly managers punished or ignored reporters in the past; or blame culture where mistakes are punished.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Rewards focus only on output, so staff learn raising problems is 'not their job'.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Danger 1: safety hazards go unreported — accidents, legal liability, reputational damage.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Danger 2: staff disengage — problems hidden until they become crises.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Step: leaders visibly reward reporting and never punish the messenger.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(d) Step: introduce simple reporting channels and communicate that safety comes first.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) definition; (b) blame/punishment history; (c) accidents + disengagement; (d) reward reporting, open channels.",
          "commonErrors": [
                    "Confusing culture with rules.",
                    "Steps that punish reporters further."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u8-change-notes",
      title: "Change and culture — revision notes",
      summary: "Change comes from external pressure or internal needs; resistance comes from fear, uncertainty and routine. Manage via communication, training, involvement and phasing. Culture = shared values/behaviours, shaped by leadership, recruitment and rewards — what is rewarded is the real culture.",
      sections: [
        { heading: "Key idea", body: "Resistance is normal — manage it with early communication and involvement, not by imposing change." },
        { heading: "Culture", body: "Culture is revealed by rewards and punishments, not slogans. Change it by aligning incentives and leadership behaviour." },
        { heading: "Mergers", body: "Clashing cultures are a top merger risk — define shared values and align rewards early." },
      ],
    },
  ],
};
