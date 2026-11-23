import type { Lesson } from "../../../types.ts";

export const lesson902: Lesson = {
  id: "edxbtechsc-u9-lesson-9-2",
  code: "9-2",
  title: "Person-Centred Dementia Care",
  goal: "I CAN describe person-centred approaches, communication and behaviour management in dementia care.",
  standards: ["BTEC L3 National Health and Social Care — Unit 9: Dementia and Care of Older Adults (extended certificate)"],
  
  vocabulary: [
    { term: "Person-centred care", definition: "Care that treats the individual as a whole person, respecting their preferences, history and dignity." },
    { term: "Validation therapy", definition: "Approach that acknowledges the person's feelings and reality rather than correcting them." },
    { term: "Reality orientation", definition: "Approach that uses cues (clocks, calendars, signs) to help the person stay oriented to time and place." },
    { term: "Challenging behaviour", definition: "Behaviour that challenges carers or the environment, often expressing unmet needs in dementia." },
    { term: "Life story work", definition: "Gathering and using personal history to personalise care and support identity." },
    { term: "Reminiscence therapy", definition: "Using memories and past experiences to improve wellbeing and communication." },
  ],
  concepts: [
    {
      id: "edxbtechsc-u9-l2-communication",
      title: "Communication and Person-Centred Approaches",
      skill: "Apply person-centred communication and approaches when caring for people with dementia.",
      lesson: {
        sections: [
          {
            heading: "Communication challenges",
            body: "Dementia affects language and cognition, making communication difficult. Strategies include: **slow speech**, **short sentences**, **one idea at a time**, **eye contact**, **non-verbal cues** (touch, gesture), and **patience**. **Validation therapy** accepts the person's reality — if they think it's 1960, don't argue; acknowledge their feelings. **Reality orientation** uses environmental cues but should not cause distress.",
          },
          {
            heading: "Person-centred care and life story",
            body: "Person-centred care sees the person, not the disease: preserve **identity**, **dignity** and **autonomy**. **Life story work** gathers personal history (hobbies, family, career, preferences) to personalise care and trigger positive memories. **Reminiscence therapy** uses photos, music and familiar objects to improve mood and communication. Familiar environments, routines and objects reduce anxiety and support orientation.",
          },
        ],
        keyFormulas: [
          { name: "Communication strategies", statement: "Slow, short sentences, eye contact, non-verbal cues, patience." },
          { name: "Validation", statement: "Acknowledge feelings and reality; don't argue or correct." },
          { name: "Life story work", statement: "Personal history → personalised care and identity." },
        ],
        workedExample: {
          problem: "A resident with dementia insists it is 1955 and asks to see their late husband. How should a care worker respond?",
          solution: "Use validation — acknowledge their feelings ('You must miss him') without arguing about the date. Offer comfort and redirect gently, perhaps with a photo or familiar object.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u9-l2-pc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which communication strategy is most appropriate for a person with dementia?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Speaking quickly and giving complex instructions"
                    },
                    {
                              "id": "b",
                              "text": "Speaking slowly, using short sentences and maintaining eye contact"
                    },
                    {
                              "id": "c",
                              "text": "Correcting every mistake they make"
                    },
                    {
                              "id": "d",
                              "text": "Ignoring non-verbal cues"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Dementia communication",
                              "statement": "Slow, simple, patient, non-verbal aware."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Slow speech, short sentences and eye contact support comprehension.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** — slow, short, eye contact"
},
        },
        {
          id: "edxbtechsc-u9-l2-pc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define validation therapy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Validation therapy",
                              "statement": "Acknowledge feelings and reality without arguing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Accept the person's reality and emotions rather than correcting them — reduces distress.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Acknowledging feelings and reality without arguing or correcting"
},
        },
        {
          id: "edxbtechsc-u9-l2-pc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how life story work supports person-centred dementia care.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Life story work",
                              "statement": "Personal history personalises care and preserves identity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gathers personal history: hobbies, family, career, preferences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Enables personalised activities, conversations and care choices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Preserves sense of identity and self-worth despite cognitive decline.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Life story work personalises care and maintains identity"
},
        },
        {
          id: "edxbtechsc-u9-l2-pc-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define person-centred care. (b) Describe validation therapy. (c) Explain three communication strategies for dementia. (d) State the purpose of life story work. (e) Describe one way to use reminiscence therapy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Person-centred dementia care",
                              "statement": "Respects identity, uses validation and personal history."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Care treating person as whole, respecting preferences, history and dignity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Acknowledging feelings/reality without arguing or correcting.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Three strategies: slow speech, short sentences, eye contact, non-verbal cues, patience.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Personal history → personalised care and identity preservation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Use photos, music, familiar objects to trigger memories and improve mood.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Person-centred dementia care respects identity, uses validation and personalises through life story."
},
        },
        {
          id: "edxbtechsc-u9-l2-pc-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A resident with Alzheimer's repeatedly asks for her mother, who died 20 years ago. (a) Identify the communication challenge. (b) Explain how validation would help. (c) Describe how reality orientation might be used appropriately. (d) Suggest how life story work could support her. (e) Explain why correcting her would be unhelpful.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Validation in dementia care",
                              "statement": "Acknowledge feelings; don't argue with the person's reality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Memory loss leads to seeking deceased mother — distress and disorientation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Validation: acknowledge her feelings ('You must miss her') without correcting.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(c) Reality orientation: gentle cues about current date/place without causing distress.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Life story: photos and stories of mother can provide comfort and connection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Correcting causes confusion, distress and erodes trust and self-esteem.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Validate feelings, use gentle orientation and life story to comfort without arguing."
},
        },
        {
          id: "edxbtechsc-u9-l2-pc-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss person-centred approaches in dementia care. Your answer should cover: (a) what person-centred care means; (b) communication strategies; (c) validation therapy; (d) life story work; (e) reminiscence therapy; (f) how these approaches preserve dignity; (g) why they are more effective than task-focused care.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Person-centred dementia care",
                              "statement": "Care that respects identity, uses validation and personalises through life story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Treating person as whole — preferences, history, dignity, autonomy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Communication: slow, short sentences, eye contact, non-verbal cues, patience.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Validation: acknowledge feelings and reality without arguing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Life story work: personal history → personalised care.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Reminiscence: photos, music, objects trigger positive memories.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) These preserve identity, self-worth and dignity despite cognitive decline.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(g) More effective: reduces distress, improves mood, supports communication and wellbeing.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Person-centred dementia care preserves dignity and improves outcomes through validation and personalisation."
},
        },
      ],
    },
    {
      id: "edxbtechsc-u9-l2-behaviour",
      title: "Managing Behaviour and Supporting Daily Living",
      skill: "Understand and respond to challenging behaviour and support daily living in dementia.",
      lesson: {
        sections: [
          {
            heading: "Challenging behaviour",
            body: "'Challenging behaviour' in dementia (agitation, aggression, wandering, shouting) usually expresses **unmet needs** — pain, hunger, thirst, boredom, fear, or inability to communicate. The person may not understand what's happening or feel safe. Responses: identify the cause, reduce triggers, provide reassurance, ensure basic needs are met, and avoid confrontation. **Physical restraint** should be avoided; de-escalation and diversion are preferred.",
          },
          {
            heading: "Daily living support",
            body: "Support daily activities while preserving independence: **prompts rather than doing for** the person, **routine and familiarity**, **adapted environment** (labels, contrasting colours, safe wandering spaces), **dignity in personal care** (privacy, choice, respect). Monitor for pain, infection or medication side-effects that may cause behaviour changes — always rule out physical causes first.",
          },
        ],
        keyFormulas: [
          { name: "Challenging behaviour", statement: "Usually expresses unmet needs — find the cause." },
          { name: "De-escalation", statement: "Calm, non-confrontational, identify and meet the need." },
          { name: "Prompts not doing", statement: "Support independence; don't take over tasks." },
        ],
        workedExample: {
          problem: "A resident with dementia becomes aggressive at bath time. How should a care worker respond?",
          solution: "Recognise aggression may express fear or discomfort. Ensure privacy and warmth, explain steps slowly, offer choice, and if distress persists, postpone and try later. Check for pain or infection.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u9-l2-bd-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Challenging behaviour in dementia is most often caused by:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The person being deliberately difficult"
                    },
                    {
                              "id": "b",
                              "text": "Unmet needs such as pain, hunger or fear"
                    },
                    {
                              "id": "c",
                              "text": "Medications always"
                    },
                    {
                              "id": "d",
                              "text": "The person's personality unchanged"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Challenging behaviour",
                              "statement": "Usually expresses unmet needs or distress."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Behaviour is communication of unmet needs — pain, fear, hunger, boredom.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** — unmet needs"
},
        },
        {
          id: "edxbtechsc-u9-l2-bd-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two reasons why physical restraint should be avoided in dementia care.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Avoiding restraint",
                              "statement": "Restraint causes distress, injury and rights violations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two: causes distress/aggression, risk of injury, violates dignity/rights, increases falls.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "e.g. causes distress and violates dignity"
},
        },
        {
          id: "edxbtechsc-u9-l2-bd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three strategies to support daily living for a person with dementia while preserving independence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Supporting daily living",
                              "statement": "Prompts, routine, adapted environment, dignity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Use prompts rather than doing tasks for the person.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Maintain routine and familiar environment to reduce anxiety.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Adapt environment (labels, colours, safe spaces) and preserve dignity in personal care.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Prompts, routine, adapted environment — preserve independence and dignity."
},
        },
        {
          id: "edxbtechsc-u9-l2-bd-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define challenging behaviour. (b) Explain three possible causes. (c) Describe the preferred response approach. (d) Explain why physical causes should be ruled out first. (e) State one de-escalation technique.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Managing challenging behaviour",
                              "statement": "Find the unmet need; de-escalate; rule out physical causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Behaviour that challenges carers/environment — often expressing unmet needs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Three causes: pain, hunger/thirst, fear, boredom, infection, medication side-effects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Identify cause, reassure, meet need, divert — non-confrontational.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Physical illness (UTI, pain) can cause sudden behaviour change — treat cause.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(e) One technique: calm voice, slow movements, distraction, leaving space, offering choice.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Challenging behaviour signals unmet needs; respond calmly and rule out physical causes."
},
        },
        {
          id: "edxbtechsc-u9-l2-bd-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A resident with mid-stage dementia becomes agitated every evening ('sundowning'), pacing and shouting. (a) Explain what sundowning is. (b) Describe three possible triggers. (c) Suggest four care strategies. (d) State when medication might be considered.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Managing sundowning",
                              "statement": "Evening agitation — reduce triggers, maintain routine, calm environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Sundowning = increased confusion/agitation in late afternoon/evening.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Three triggers: fatigue, low light/shadows, hunger, unmet needs, routine disruption.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(c) Four strategies: consistent routine, good lighting, calm reassurance, meet needs, reduce noise, familiar objects.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Medication only if non-pharmacological approaches fail and risk is significant — review regularly.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Sundowning needs routine, lighting, reassurance; medication only as last resort."
},
        },
        {
          id: "edxbtechsc-u9-l2-bd-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss supporting daily living and managing behaviour in dementia. Your answer should cover: (a) what challenging behaviour means; (b) likely causes; (c) why behaviour is a form of communication; (d) de-escalation strategies; (e) why restraint should be avoided; (f) strategies for daily living; (g) the importance of person-centred, dignified care.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Dementia behaviour support",
                              "statement": "Behaviour expresses unmet needs; respond calmly and preserve dignity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Challenging behaviour = actions challenging carers/environment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Causes: unmet needs (pain, hunger, fear), physical illness, environment, routine changes.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Behaviour communicates needs the person cannot express verbally.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(d) De-escalation: calm voice, slow movements, reassurance, distraction, space.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Restraint causes distress, injury, violates rights — avoid.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(f) Daily living: prompts not doing, routine, adapted environment, dignity in personal care.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Person-centred care preserves identity, autonomy and wellbeing.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Challenging behaviour expresses unmet needs; respond calmly, preserve dignity, avoid restraint."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtechsc-u9-l2-notes",
      title: "Person-Centred Dementia Care — notes",
      summary: "Person-centred care uses validation, life story and reminiscence; challenging behaviour signals unmet needs.",
      sections: [
        { heading: "Communication", body: "Slow, short sentences, eye contact, validation — don't argue with the person's reality." },
        { heading: "Personalisation", body: "Life story work and reminiscence preserve identity and improve wellbeing." },
        { heading: "Behaviour", body: "Challenging behaviour = unmet needs; de-escalate, avoid restraint, rule out physical causes." },
      ],
    },
  ],
};
