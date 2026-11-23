import type { Lesson } from "../../../types.ts";

export const lesson131: Lesson = {
  id: "ebz11-u13-lesson-13-1",
  code: "13-1",
  title: "Organisational Structure and Delegation",
  goal: "I CAN explain hierarchy, span of control, delegation and centralised or decentralised decision-making.",
  standards: ["Edexcel IGCSE Business 4BS0 — People in Business", "4BS0 2.5 Organisation structure and employees"],
  
  vocabulary: [
    { term: "Organisation chart", definition: "Diagram showing job roles and reporting relationships." },
    { term: "Hierarchy", definition: "Levels of authority from senior to junior." },
    { term: "Chain of command", definition: "Route through which orders pass down the organisation." },
    { term: "Span of control", definition: "Number of subordinates directly managed by one person." },
    { term: "Delegation", definition: "Giving responsibility and authority to a subordinate." },
    { term: "Centralisation", definition: "Decision-making concentrated at the top." },
    { term: "Decentralisation", definition: "Decision-making spread to lower levels." },
  ],
  concepts: [
    {
      id: "ebz11-u13-structure",
      title: "Hierarchy, Span of Control and Delegation",
      skill: "Analyse organisational structure and the delegation of authority.",
      lesson: {
        sections: [
          {
            heading: "Structure and control",
            body: "An **organisation chart** shows formal structure: job titles, hierarchy and reporting lines. **Hierarchy** is the chain of command from directors to workers. A **tall structure** has many levels; a **flat structure** has fewer levels.\n\n**Span of control** is the number of people a manager directly supervises. A wide span suits routine work and flat structures; a narrow span suits complex work needing close supervision. **Centralisation** keeps decisions at the top; **decentralisation** pushes decisions closer to operations.",
          },
          {
            heading: "Delegation",
            body: "**Delegation** means a manager gives a subordinate responsibility, authority and accountability for a task. Effective delegation includes clear objectives, resources, deadlines and feedback.\n\nBenefits: managers focus on strategic work, employees develop skills, decisions are faster. Risks: loss of control, poor coordination, mistakes and demotivation if credit is not given.",
          },
        ],
        keyFormulas: [
          { name: "Span of control", statement: "Subordinates / manager" },
          { name: "Delegation", statement: "Responsibility + authority + accountability" },
        ],
        workedExample: {
          problem: "A supervisor manages 12 workers. Is the span of control wide or narrow, and what does it imply?",
          solution: "12 subordinates is a wide span; the supervisor may need simple tasks and strong systems.",
        },
      },
      questions: [
        {
          id: "ebz11-u13-structure-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is span of control?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number of departments"
                    },
                    {
                              "id": "b",
                              "text": "Number of subordinates directly managed"
                    },
                    {
                              "id": "c",
                              "text": "Length of the working day"
                    },
                    {
                              "id": "d",
                              "text": "Amount of profit earned"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Span of control",
                              "statement": "Direct subordinates per manager."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Span = number of direct reports.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Direct subordinates",
          "commonErrors": [
                    "Confusing with hierarchy levels."
          ]
},
        },
        {
          id: "ebz11-u13-structure-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain the difference between a tall and a flat organisational structure.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tall vs flat",
                              "statement": "Many levels versus fewer levels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tall structure has many hierarchical levels.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Flat structure has fewer levels and wider spans.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Tall may slow decisions; flat may speed them but need trust.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Tall = many levels; flat = fewer levels/wider spans.",
          "commonErrors": [
                    "Only describing hierarchy."
          ]
},
        },
        {
          id: "ebz11-u13-structure-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give one benefit and one risk of delegation for a manager.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Delegation",
                              "statement": "Frees managers but can reduce control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benefit: manager can focus on strategic tasks.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Benefit: employee develops skills and motivation.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Risk: subordinate may make mistakes without support.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Risk: manager may lose control or credit.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Benefit = time/skills; risk = mistakes/loss of control.",
          "commonErrors": [
                    "Only one side."
          ]
},
        },
        {
          id: "ebz11-u13-structure-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare centralisation and decentralisation in a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Centralisation",
                              "statement": "Top-down control versus local decision-making."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Centralisation gives consistent decisions and control.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Centralisation may be slow for local issues.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Decentralisation allows faster local responses.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Decentralisation may create inconsistency between units.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Large multinationals often use decentralised local decisions.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Central = control/consistency; decentral = speed/local response.",
          "commonErrors": [
                    "Treating them as opposites without trade-offs."
          ]
},
        },
        {
          id: "ebz11-u13-structure-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A call-centre team leader supervises 20 agents. Evaluate whether this span of control is appropriate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Span of control",
                              "statement": "Wide spans suit routine work; narrow spans suit complex work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "20 direct reports is a wide span.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Call-centre tasks can be routine and scripted.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Systems can monitor calls and support agents.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Wide span may reduce personal supervision.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Complex customer issues may need more support.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Team leaders may become overloaded.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "A smaller span or team-leader structure may be better.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "20 is wide; acceptable only with strong systems, otherwise reduce span.",
          "commonErrors": [
                    "Assuming wider is always better."
          ]
},
        },
        {
          id: "ebz11-u13-structure-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A small business with 10 employees plans to grow to 100. Discuss how its organisational structure should change.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Organisational design",
                              "statement": "Structure must match size, complexity and control needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "At 10 employees, informal flat structure may work.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "At 100 employees, formal departments become necessary.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Functional departments can separate production, marketing, HR and finance.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "More managers are needed for narrower spans.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Delegation becomes essential to avoid overload.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Clear chain of command reduces confusion.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Too many levels may slow decisions.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Cross-functional teams can improve coordination.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Technology can support communication and control.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Structure should be reviewed as the business continues to grow.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Move from informal flat structure to formal departments with delegation and clear reporting lines.",
          "commonErrors": [
                    "Keeping the same structure despite growth."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u13-decision",
      title: "Centralisation, Decentralisation and Accountability",
      skill: "Evaluate where decisions should be made and who is answerable for them.",
      lesson: {
        sections: [
          {
            heading: "Where decisions are made",
            body: "In a **centralised** business, senior managers make most decisions. This gives consistency, control and easier coordination, but may be slow and ignore local knowledge.\n\nIn a **decentralised** business, decisions are pushed down to branches, departments or team leaders. This gives faster responses and uses local expertise, but may create inconsistency and weaker control.",
          },
          {
            heading: "Authority, responsibility and accountability",
            body: "**Authority** is the right to give instructions and make decisions. **Responsibility** is the duty to carry out tasks. **Accountability** is the obligation to explain results to someone higher.\n\nThe **chain of command** shows who reports to whom. Clear accountability means employees know who to answer to and who answers for performance. Delegation transfers responsibility and authority but the manager usually remains accountable.",
          },
        ],
        keyFormulas: [
          { name: "Centralisation", statement: "Decisions at the top" },
          { name: "Decentralisation", statement: "Decisions at lower levels" },
          { name: "Accountability", statement: "Answering to someone higher" },
        ],
        workedExample: {
          problem: "A branch manager changes prices without head-office approval. What accountability issue arises?",
          solution: "The branch acted without authority; head office may still be accountable for results if the manager exceeded delegated powers.",
        },
      },
      questions: [
        {
          id: "ebz11-u13-decision-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does accountability mean in a business?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The right to give orders"
                    },
                    {
                              "id": "b",
                              "text": "The duty to complete tasks"
                    },
                    {
                              "id": "c",
                              "text": "Answering to someone for results"
                    },
                    {
                              "id": "d",
                              "text": "Sharing profits equally"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Accountability",
                              "statement": "Answering to someone higher for results."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Accountability = answer for results.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Answering to someone for results",
          "commonErrors": [
                    "Confusing accountability with authority."
          ]
},
        },
        {
          id: "ebz11-u13-decision-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Distinguish between authority, responsibility and accountability.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Authority/responsibility/accountability",
                              "statement": "Right, duty and answerability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Authority = right to make decisions.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Responsibility = duty to carry out tasks.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Accountability = answer to someone for results.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Authority=right; responsibility=duty; accountability=answerability.",
          "commonErrors": [
                    "Using the terms interchangeably."
          ]
},
        },
        {
          id: "ebz11-u13-decision-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two benefits of decentralising decision-making in a chain of shops.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Decentralisation",
                              "statement": "Local decisions use local knowledge and speed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Branch managers know local customers and conditions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Decisions can be made faster without head-office delay.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Managers feel trusted and may be more motivated.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Head office can focus on strategy rather than routine choices.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Local knowledge, speed, motivation and strategic focus.",
          "commonErrors": [
                    "Ignoring possible inconsistency."
          ]
},
        },
        {
          id: "ebz11-u13-decision-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare centralised and decentralised control for a supermarket chain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Central vs decentral",
                              "statement": "Consistency versus local responsiveness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Centralised buying ensures consistent prices and suppliers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Centralised control may ignore local demand differences.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Decentralised stores can respond to local customers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Decentralisation may create inconsistent standards.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A hybrid model can centralise major decisions and delegate local ones.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Central for consistency; decentral for local response; hybrid often best.",
          "commonErrors": [
                    "One-sided answer."
          ]
},
        },
        {
          id: "ebz11-u13-decision-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Explain how the chain of command affects communication and control in a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Chain of command",
                              "statement": "Clear reporting lines support control and accountability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Orders pass through defined levels.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Employees know who gives instructions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Managers know who they must answer to.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Many levels can slow communication.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Too few levels may overload managers.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Clear lines reduce confusion and duplicated effort.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Structure should match business size and complexity.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Clear chain of command supports control but must avoid delays or overload.",
          "commonErrors": [
                    "Ignoring speed versus control trade-off."
          ]
},
        },
        {
          id: "ebz11-u13-decision-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A growing retailer must decide whether purchasing and pricing should be centralised at head office or delegated to regional managers. Evaluate the decision.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Central vs decentral",
                              "statement": "Evaluate consistency, cost, local knowledge and control."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Recommend a justified structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Central purchasing can secure bulk discounts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Central pricing ensures consistency across stores.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Regional managers know local demand better.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Delegation can speed responses to local conditions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Too much decentralisation may create price inconsistency.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Too much centralisation may ignore regional differences.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Head office should set policies and limits.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Regional managers can decide within agreed ranges.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Accountability must be clear for both levels.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "A hybrid approach balances control and responsiveness.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Use centralised policies with delegated regional decisions within clear limits.",
          "commonErrors": [
                    "No recommendation.",
                    "Ignoring accountability."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u13-structure-notes",
      title: "Organisation structure — notes",
      summary: "Hierarchy, span of control and delegation determine how work is controlled; centralisation trades consistency for speed.",
      sections: [
        { heading: "Structure", body: "Organisation charts show hierarchy, chain of command and reporting lines. Tall structures have many levels; flat structures have wider spans." },
        { heading: "Delegation", body: "Delegation transfers responsibility and authority but managers remain accountable. It develops staff and frees managers." },
        { heading: "Decisions", body: "Centralisation gives consistency; decentralisation gives local speed. Authority, responsibility and accountability must be clear." },
      ],
    },
  ],
};
