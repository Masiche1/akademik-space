import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "edxbtechsc-u10-lesson-10-3",
  code: "10-3",
  title: "Inclusive Practice and Person-Centred Planning",
  goal: "I CAN describe inclusive practice, person-centred planning and communication support for learning disability and autism.",
  standards: ["BTEC L3 National Health and Social Care — Unit 10: Learning Disability and Autism (extended certificate)"],
  
  vocabulary: [
    { term: "Inclusive practice", definition: "Practice that enables full participation and belonging for all, regardless of ability." },
    { term: "Person-centred planning", definition: "Planning that puts the individual's wishes, strengths and goals at the centre." },
    { term: "Easy-read", definition: "Information rewritten in simple language with pictures for people with learning disability." },
    { term: "Positive Behaviour Support", definition: "Approach understanding behaviour as communication and teaching skills rather than punishment." },
    { term: "Safeguarding", definition: "Protecting people from abuse, neglect and exploitation." },
    { term: "Co-production", definition: "Working in partnership — people with lived experience help design their own support." },
  ],
  concepts: [
    {
      id: "edxbtechsc-u10-l3-inclusive",
      title: "Inclusive Practice and Communication Support",
      skill: "Apply inclusive practice and accessible communication for people with learning disability and autism.",
      lesson: {
        sections: [
          {
            heading: "Inclusive practice",
            body: "Inclusive practice removes barriers so everyone can participate: **accessible information** (easy-read, pictures, clear language), **physical access** (ramps, adapted toilets), **reasonable adjustments** (extra time, supports), **positive attitudes** (see the person, not the disability), and **participation in decisions**. Inclusion benefits everyone — it promotes belonging and reduces isolation.",
          },
          {
            heading: "Accessible communication",
            body: "Adapt communication to needs: **easy-read** (simple words, pictures, large print), **visual supports** (symbols, photographs, Makaton), **AAC devices** (speech-generating devices), **clear language** (short sentences, concrete terms, avoid jargon), **processing time** (allow time to respond), and **checking understanding**. Communication is a right — ensure everyone can express wishes and be understood.",
          },
        ],
        keyFormulas: [
          { name: "Inclusive practice", statement: "Remove barriers — accessible info, physical access, adjustments, participation." },
          { name: "Easy-read", statement: "Simple language + pictures for accessible information." },
          { name: "AAC", statement: "Augmentative and Alternative Communication devices." },
        ],
        workedExample: {
          problem: "A community centre wants to be more inclusive for people with learning disability. Suggest three changes.",
          solution: "Provide easy-read information and pictorial signage, train staff in accessible communication, and offer reasonable adjustments like quieter sessions or support workers.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u10-l3-ip-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Inclusive practice means:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Separating people with disabilities from others"
                    },
                    {
                              "id": "b",
                              "text": "Removing barriers so everyone can participate and belong"
                    },
                    {
                              "id": "c",
                              "text": "Providing charity for people with disabilities"
                    },
                    {
                              "id": "d",
                              "text": "Treating everyone exactly the same regardless of needs"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Inclusive practice",
                              "statement": "Removing barriers for full participation and belonging."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Inclusion = remove barriers, enable participation, promote belonging.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** — removing barriers for participation"
},
        },
        {
          id: "edxbtechsc-u10-l3-ip-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define easy-read information.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Easy-read",
                              "statement": "Information in simple language with pictures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Easy-read = simple words, short sentences, pictures — for people with learning disability.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Information in simple language with pictures"
},
        },
        {
          id: "edxbtechsc-u10-l3-ip-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three ways to make communication accessible for people with learning disability.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Accessible communication",
                              "statement": "Easy-read, visual supports, clear language, processing time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Use easy-read: simple language, pictures, large print.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Use visual supports: symbols, photographs, Makaton.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Speak clearly, allow processing time, check understanding.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Easy-read, visual supports, clear language with processing time."
},
        },
        {
          id: "edxbtechsc-u10-l3-ip-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define inclusive practice. (b) Describe three barriers to inclusion. (c) Explain how easy-read helps. (d) Describe AAC. (e) Explain why communication is a human right.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Inclusion and communication",
                              "statement": "Remove barriers; communication is a right."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Inclusive practice = removing barriers for participation and belonging.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Three barriers: inaccessible information, physical barriers, attitudes/discrimination.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Easy-read makes information accessible via simple language and pictures.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) AAC = devices/supports for communication when speech is difficult (PECS, speech devices).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Communication enables expression of wishes, consent and participation — a fundamental right.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Inclusion removes barriers; accessible communication enables participation and is a right."
},
        },
        {
          id: "edxbtechsc-u10-l3-ip-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A housing association wants to make its services accessible to tenants with learning disability. (a) Identify three barriers they might face. (b) Suggest four inclusive changes. (c) Explain how to involve tenants in decisions. (d) State why co-production matters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Inclusive services",
                              "statement": "Remove barriers; involve people with lived experience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Three barriers: complex forms, inaccessible website, lack of easy-read, staff attitudes.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(b) Four changes: easy-read forms, pictorial website, staff training, reasonable adjustments.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Involve tenants: consultation groups, easy-read surveys, feedback mechanisms, peer champions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Co-production ensures services meet real needs — people with experience design support.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Make services accessible through easy-read, adjustments, staff training and tenant involvement."
},
        },
        {
          id: "edxbtechsc-u10-l3-ip-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss inclusive practice and accessible communication. Your answer should cover: (a) what inclusive practice means; (b) barriers to inclusion; (c) accessible information (easy-read); (d) communication supports (AAC, Makaton); (e) reasonable adjustments; (f) co-production; (g) why inclusion benefits everyone.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Inclusive practice",
                              "statement": "Remove barriers; communication is a right; involve people with lived experience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Inclusive practice = removing barriers for full participation and belonging.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Barriers: inaccessible info, physical barriers, attitudes, lack of adjustments.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Easy-read: simple language + pictures for accessible information.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Communication supports: AAC devices, Makaton, visual schedules, PECS.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Reasonable adjustments: extra time, adapted materials, supports, quiet spaces.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Co-production: involve people with lived experience in designing services.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(g) Inclusion benefits everyone — promotes belonging, reduces isolation, improves services.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Inclusive practice removes barriers and ensures communication access — benefiting all."
},
        },
      ],
    },
    {
      id: "edxbtechsc-u10-l3-planning",
      title: "Person-Centred Planning and Positive Behaviour Support",
      skill: "Describe person-centred planning, positive behaviour support and safeguarding for learning disability and autism.",
      lesson: {
        sections: [
          {
            heading: "Person-centred planning",
            body: "**Person-centred planning** puts the individual at the centre: their wishes, strengths, goals and support network. Tools include **PATH** (Planning Alternative Tomorrows with Hope), **MAPS**, and **person-centred reviews**. Planning should be **co-produced** — the person actively participates. Goals should be meaningful and achievable; plans are reviewed regularly and flexible.",
          },
          {
            heading: "Positive Behaviour Support and safeguarding",
            body: "**Positive Behaviour Support (PBS)** understands behaviour as communication — identify the function (attention, escape, sensory, tangible) and teach replacement skills rather than punish. Avoid restrictive practices. **Safeguarding** protects from abuse, neglect and exploitation — know reporting procedures, watch for signs, and always act in the person's best interests. People with learning disability and autism are at higher risk of abuse due to communication needs and vulnerability.",
          },
        ],
        keyFormulas: [
          { name: "Person-centred planning", statement: "Individual's wishes, strengths, goals at the centre; co-produced." },
          { name: "PBS", statement: "Behaviour = communication; teach skills, don't punish." },
          { name: "Safeguarding", statement: "Protect from abuse, neglect, exploitation — know reporting procedures." },
        ],
        workedExample: {
          problem: "A person with learning disability becomes distressed and hits out when asked to do a task. How should this be understood and addressed?",
          solution: "The behaviour likely communicates distress — the task may be too difficult or unclear. Use PBS: assess the function, simplify the task, offer choices, teach coping skills, and ensure the environment is supportive.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u10-l3-pp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Person-centred planning means:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Planning done by professionals without the person"
                    },
                    {
                              "id": "b",
                              "text": "Planning centred on the individual's wishes, strengths and goals"
                    },
                    {
                              "id": "c",
                              "text": "Planning only about medical needs"
                    },
                    {
                              "id": "d",
                              "text": "Planning that ignores the person's preferences"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Person-centred planning",
                              "statement": "Individual's wishes, strengths and goals at the centre."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PCP = person's wishes, strengths, goals, co-produced.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** — individual's wishes and goals"
},
        },
        {
          id: "edxbtechsc-u10-l3-pp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define Positive Behaviour Support (PBS).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "PBS",
                              "statement": "Behaviour as communication; teach skills rather than punish."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PBS understands behaviour as communication and teaches replacement skills.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Behaviour as communication; teach skills rather than punish"
},
        },
        {
          id: "edxbtechsc-u10-l3-pp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain three features of person-centred planning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Person-centred planning",
                              "statement": "Wishes, strengths, goals, co-production, regular review."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Centred on individual's wishes and goals.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Co-produced — person actively participates in planning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reviewed regularly and flexible; strengths-based.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Wishes, strengths, goals, co-production, regular review."
},
        },
        {
          id: "edxbtechsc-u10-l3-pp-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define person-centred planning. (b) Explain three features. (c) Define PBS. (d) Explain the function of behaviour in PBS. (e) Describe two safeguarding responsibilities.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Person-centred planning and PBS",
                              "statement": "Individual goals + behaviour as communication + safeguarding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Planning centred on individual's wishes, strengths and goals.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Three features: co-production, strengths-based, regular review, meaningful goals.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) PBS = behaviour as communication; teach skills not punish.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Function of behaviour: attention, escape, sensory, tangible — identify and address need.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Two safeguarding duties: know reporting procedures, watch for signs of abuse, act in best interests.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Person-centred planning + PBS + safeguarding protect and empower individuals."
},
        },
        {
          id: "edxbtechsc-u10-l3-pp-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A person with autism becomes aggressive when asked to stop a preferred activity. (a) Identify the likely function of the behaviour. (b) Explain how PBS would assess this. (c) Describe three strategies to address it. (d) Explain why punishment would be inappropriate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "PBS in practice",
                              "statement": "Identify function, teach skills, avoid punishment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Likely function: escape/avoidance or access to preferred activity (tangible).",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(b) PBS assessment: observe patterns, identify triggers and function, check physical/emotional needs.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Three strategies: visual timetable showing activity end, warning before transition, teach coping skills, offer choices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Punishment doesn't teach skills, increases distress, damages relationship, violates rights.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "PBS identifies behaviour function and teaches skills — punishment is inappropriate."
},
        },
        {
          id: "edxbtechsc-u10-l3-pp-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss person-centred planning and positive behaviour support. Your answer should cover: (a) person-centred planning; (b) co-production; (c) PBS principles; (d) function of behaviour; (e) teaching replacement skills; (f) safeguarding; (g) why person-centred approaches improve outcomes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Person-centred planning and PBS",
                              "statement": "Individual goals + behaviour as communication + safeguarding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) PCP = individual's wishes, strengths, goals at the centre.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Co-production: person actively participates in designing their support.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) PBS: behaviour as communication; understand function; teach skills.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Functions: attention, escape, sensory, tangible.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Teach replacement skills: communication, coping, requesting help.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Safeguarding: protect from abuse, know reporting, act in best interests.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(g) Person-centred approaches improve outcomes — respect, autonomy, better engagement.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Person-centred planning + PBS + safeguarding empower individuals and improve outcomes."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtechsc-u10-l3-notes",
      title: "Inclusive Practice and Planning — notes",
      summary: "Inclusion removes barriers; person-centred planning and PBS empower individuals; safeguarding protects rights.",
      sections: [
        { heading: "Inclusion", body: "Easy-read, AAC, reasonable adjustments, co-production — communication is a right." },
        { heading: "Person-centred planning", body: "Individual wishes, strengths, goals — co-produced and regularly reviewed." },
        { heading: "PBS", body: "Behaviour = communication; identify function, teach skills, avoid punishment; safeguard always." },
      ],
    },
  ],
};
