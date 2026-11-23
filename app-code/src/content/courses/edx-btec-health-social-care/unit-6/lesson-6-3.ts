import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "edxbtechsc-u6-lesson-6-3",
  code: "6-3",
  title: "Supporting Mental Health and Wellbeing",
  goal: "I CAN describe the mental health care pathway and explain how to support someone's mental wellbeing.",
  standards: ["BTEC L3 National Health and Social Care — Unit 6: Mental Health and Wellbeing"],
  
  vocabulary: [
    { term: "Talking therapy", definition: "Psychological treatments such as CBT, counselling and psychotherapy that help people change thoughts, feelings and behaviours." },
    { term: "CBT", definition: "Cognitive behavioural therapy — focuses on changing unhelpful thoughts and behaviours." },
    { term: "Care pathway", definition: "Sequence of services a person moves through for a mental health problem, e.g. GP → IAPT → specialist services." },
    { term: "Crisis intervention", definition: "Immediate, short-term support for someone at risk of harm to self or others." },
    { term: "Self-care", definition: "Activities people do to look after their own mental and physical health, e.g. sleep, exercise, social contact." },
    { term: "Signposting", definition: "Providing information about appropriate services and how to access them." },
  ],
  concepts: [
    {
      id: "edxbtechsc-u6-l3-services",
      title: "Mental health services and treatment",
      skill: "Describe the mental health care pathway and main treatment approaches.",
      lesson: {
        sections: [
          {
            heading: "The care pathway",
            body: "Most people start with their **GP**, who assesses and may refer to:\n\n- **IAPT** (Improving Access to Psychological Therapies) — NHS talking therapies for mild-moderate problems: **CBT**, counselling, guided self-help.\n- **Community mental health teams (CMHTs)** — for moderate-severe problems, involving psychiatrists, nurses, social workers, OT.\n- **Crisis teams** — 24/7 support for people in mental health crisis.\n- **Inpatient care** — hospital admission for severe risk or need for intensive treatment.\n\n**Medication** (antidepressants, antipsychotics, mood stabilisers) is prescribed by doctors for moderate-severe conditions; **psychological therapy** is often combined with it.",
          },
          {
            heading: "Talking therapies",
            body: "**CBT** identifies and challenges unhelpful thoughts and behaviours — evidence-based for anxiety and depression. **Counselling** provides a safe space to explore feelings. **Psychotherapy** offers deeper, longer-term work. **Group therapy** and **peer support** reduce isolation and share coping strategies.\n\nTreatment choice should be collaborative — the person should be involved in decisions about their care.",
          },
        ],
        keyFormulas: [
          { name: "Care pathway", statement: "GP → IAPT/talking therapies → CMHT → crisis/inpatient" },
          { name: "CBT", statement: "change unhelpful thoughts + behaviours" },
          { name: "Treatment principle", statement: "medication + therapy often combined for moderate-severe" },
        ],
        workedExample: {
          problem: "A client with moderate depression asks what help is available. Outline the care pathway and two treatment options.",
          solution: "Start with GP for assessment. GP may refer to IAPT for CBT or counselling (first-line for mild-moderate depression). If symptoms are severe or unresponsive, CMHT or medication may be added. Options: CBT to change negative thinking; antidepressants if recommended; lifestyle support alongside.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u6-svc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two types of talking therapy used in mental health care.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Talking therapies",
                              "statement": "CBT, counselling, psychotherapy, group therapy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two, e.g. CBT and counselling.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Any two: CBT, counselling, psychotherapy, group/peer support."
},
        },
        {
          id: "edxbtechsc-u6-svc-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State the typical first point of contact for someone seeking help for a mental health problem.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "GP"
                    },
                    {
                              "id": "b",
                              "text": "Psychiatrist"
                    },
                    {
                              "id": "c",
                              "text": "A&E"
                    },
                    {
                              "id": "d",
                              "text": "Social services"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Care pathway",
                              "statement": "GP is first contact; refers onwards."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "GP assesses and refers to IAPT/CMHT etc.",
                              "marks": 3,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) GP"
},
        },
        {
          id: "edxbtechsc-u6-svc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what CBT is and how it helps people with anxiety or depression.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CBT",
                              "statement": "Cognitive behavioural therapy — changes thoughts and behaviours."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CBT identifies unhelpful thoughts and behaviours.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Challenges and reframes negative thinking patterns.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Builds coping strategies → reduces anxiety/depression symptoms.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "CBT changes unhelpful thoughts and behaviours to improve mood and coping."
},
        },
        {
          id: "edxbtechsc-u6-svc-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the stages of the mental health care pathway from first contact to specialist care.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Care pathway",
                              "statement": "Stepped care from GP to specialist."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "First contact: GP assessment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Mild-moderate: IAPT talking therapies.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Moderate-severe: CMHT / medication.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Crisis/severe: crisis team or inpatient admission.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "GP → IAPT → CMHT/medication → crisis/inpatient as severity increases."
},
        },
        {
          id: "edxbtechsc-u6-svc-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain why medication and talking therapy are often combined for moderate-to-severe depression, and describe two benefits of involving the person in treatment decisions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Combined treatment",
                              "statement": "Medication + therapy address biology and psychology."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Medication (e.g. antidepressants) corrects brain chemistry.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Therapy addresses thoughts, behaviours and coping.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Together more effective than either alone for moderate-severe cases.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Benefit 1: improves adherence/engagement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Benefit 2: respects autonomy, improves outcomes, reduces stigma.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Combined treatment targets biology + psychology; involvement improves adherence and outcomes."
},
        },
        {
          id: "edxbtechsc-u6-svc-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write an extended answer covering:\n(a) the typical first step in seeking mental health help;\n(b) what IAPT provides;\n(c) the role of community mental health teams;\n(d) when crisis teams are used;\n(e) two types of medication used in mental health;\n(f) three benefits of talking therapy;\n(g) why treatment should be collaborative.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Mental health services",
                              "statement": "Stepped pathway from GP to specialist/crisis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) GP assessment first.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) IAPT = NHS talking therapies for mild-moderate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) CMHT = multidisciplinary care for moderate-severe.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Crisis teams = 24/7 support in mental health crisis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Two medication types, e.g. antidepressants, antipsychotics, mood stabilisers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Three therapy benefits, e.g. coping skills, reduce symptoms, prevent relapse.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Collaboration → autonomy, adherence, better outcomes.",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Complete mental health services and treatment overview."
},
        },
      ],
    },
    {
      id: "edxbtechsc-u6-l3-support",
      title: "Supporting wellbeing and crisis care",
      skill: "Explain how to promote mental wellbeing, respond to crisis and apply safeguarding in mental health.",
      lesson: {
        sections: [
          {
            heading: "Promoting mental wellbeing",
            body: "Everyone can support their own and others' mental health through:\n\n- **Five ways to wellbeing**: connect (relationships), be active (exercise), take notice (mindfulness), keep learning (new skills), give (helping others).\n- **Sleep hygiene**: regular routine, avoid screens before bed.\n- **Physical health**: exercise, balanced diet, limiting alcohol.\n- **Stress management**: relaxation, time management, boundaries.\n- **Early help**: talking to someone, GP visit when problems persist.",
          },
          {
            heading: "Crisis and safeguarding",
            body: "A **mental health crisis** involves risk of harm to self or others, severe confusion or inability to cope. **Crisis intervention**: stay calm, listen, assess risk (suicidal thoughts, self-harm, harm to others), do not leave the person alone if at immediate risk, contact emergency services/GP/crisis team, follow local safeguarding procedures.\n\n**Self-harm** is often a coping mechanism, not necessarily a suicide attempt — respond with care, not judgement, and follow safeguarding and self-harm policies. Always document and escalate appropriately.",
          },
        ],
        keyFormulas: [
          { name: "Five ways to wellbeing", statement: "connect, be active, take notice, keep learning, give" },
          { name: "Crisis response", statement: "calm, assess risk, don't leave alone, escalate, document" },
          { name: "Self-harm", statement: "often coping mechanism — respond with care, follow policies" },
        ],
        workedExample: {
          problem: "A client says 'sometimes I think everyone would be better off without me'. What should the care worker do?",
          solution: "Take it seriously — this suggests suicidal ideation. Stay with the client, ask directly about thoughts/plans, assess immediate risk, do not leave them alone, contact GP/crisis team or emergency services per local procedures, document, and follow up. Never dismiss or promise secrecy.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u6-well-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name three of the 'five ways to wellbeing'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Five ways to wellbeing",
                              "statement": "Connect, be active, take notice, keep learning, give."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any three named correctly.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Any three: connect, be active, take notice, keep learning, give."
},
        },
        {
          id: "edxbtechsc-u6-well-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List three self-care activities that support mental wellbeing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Self-care",
                              "statement": "Sleep, exercise, diet, social contact, relaxation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any three valid self-care activities.",
                              "marks": 3,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Any three: good sleep, exercise, balanced diet, social contact, relaxation, hobbies."
},
        },
        {
          id: "edxbtechsc-u6-well-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what is meant by 'signposting' and why it is important in mental health support.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Signposting",
                              "statement": "Providing information on appropriate services."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Signposting = giving information about services and how to access them.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Connects people to professional help beyond the worker's role.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reduces isolation and delays in treatment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Signposting directs people to appropriate services, enabling timely professional support."
},
        },
        {
          id: "edxbtechsc-u6-well-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the correct response if a client expresses thoughts of suicide.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Crisis response",
                              "statement": "Stay, assess, don't leave alone, escalate, document."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take it seriously; ask directly about thoughts/plans.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Stay with the person; assess immediate risk.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Contact GP/crisis team/emergency services as appropriate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Document and follow up; do not promise secrecy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Stay, assess risk, escalate to crisis services, document and follow up."
},
        },
        {
          id: "edxbtechsc-u6-well-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how a care worker can support someone's mental wellbeing through daily practice, giving four examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Wellbeing support",
                              "statement": "Daily interactions promote mental health."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Example 1, e.g. active listening and validating feelings.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example 2, e.g. encouraging social contact and activities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example 3, e.g. supporting routine, sleep, exercise and healthy eating.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example 4, e.g. signposting to services and involving person in choices.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Daily listening, social support, healthy routines and signposting promote wellbeing."
},
        },
        {
          id: "edxbtechsc-u6-well-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write an extended answer covering:\n(a) three ways to promote mental wellbeing;\n(b) what 'signposting' means;\n(c) the steps of a mental health crisis response;\n(d) how to respond to self-harm disclosures;\n(e) why documentation and escalation matter;\n(f) two ways to support a carer of someone with mental illness;\n(g) when to involve emergency services.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Wellbeing and crisis care",
                              "statement": "Promote wellbeing; respond to crisis safely; document and escalate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Three wellbeing measures, e.g. five ways, sleep, exercise, social contact.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Signposting defined.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Crisis steps: calm, assess risk, don't leave alone, escalate.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Self-harm: respond with care, not judgement; follow policies; assess risk.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Documentation + escalation ensure continuity and safeguarding.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Two carer supports, e.g. respite, information, emotional support.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Emergency services for immediate risk to life/others.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Complete wellbeing promotion and crisis care overview."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtechsc-u6-support-notes",
      title: "Supporting mental health — notes",
      summary: "GP → IAPT → CMHT → crisis/inpatient. Promote wellbeing daily; take suicidal ideation seriously; document and escalate.",
      sections: [
        { heading: "Key idea", body: "Mental health care is stepped — early intervention prevents crisis." },
        { heading: "Crisis", body: "Stay calm, assess risk, don't leave alone, escalate, document." },
      ],
    },
  ],
};
