import type { Lesson } from "../../../types.ts";

export const lesson803: Lesson = {
  id: "edxbtechsc-u8-lesson-8-3",
  code: "8-3",
  title: "Supporting Mental Health and Reducing Stigma",
  goal: "I CAN describe treatments and interventions for mental health and explain how to reduce stigma and support individuals.",
  standards: ["BTEC L3 National Health and Social Care — Unit 8: Mental Health and Wellbeing (extended certificate)"],
  
  vocabulary: [
    { term: "Talking therapies", definition: "Psychological treatments such as CBT and counselling that help people change thoughts, feelings and behaviours." },
    { term: "CBT", definition: "Cognitive Behavioural Therapy — links thoughts, feelings and behaviours to break unhelpful cycles." },
    { term: "Medication", definition: "Pharmacological treatment, e.g. antidepressants or antipsychotics, used alongside or instead of therapy." },
    { term: "Self-help", definition: "Strategies individuals use themselves, e.g. exercise, sleep hygiene, peer support, apps." },
    { term: "Stigma", definition: "Negative attitudes and stereotypes about mental illness that lead to discrimination and social exclusion." },
    { term: "Peer support", definition: "Support from people with lived experience of mental health conditions." },
  ],
  concepts: [
    {
      id: "edxbtechsc-u8-l3-treatments",
      title: "Treatments and Interventions for Mental Health",
      skill: "Describe talking therapies, medication, self-help and crisis interventions for mental health.",
      lesson: {
        sections: [
          {
            heading: "Talking therapies",
            body: "**Cognitive Behavioural Therapy (CBT)** identifies and challenges unhelpful thoughts and behaviours. **Counselling** offers a supportive space to explore feelings. Other therapies include **psychodynamic therapy**, **family therapy**, and **group therapy**. NICE recommends talking therapies such as CBT for depression and anxiety, often alongside medication for moderate-to-severe conditions.",
          },
          {
            heading: "Medication, self-help and crisis support",
            body: "**Medication** — antidepressants (e.g. SSRIs), antipsychotics, mood stabilisers and anxiolytics — is prescribed by doctors and reviewed regularly. **Self-help** includes exercise, sleep routines, mindfulness, peer support groups and digital tools. In crisis, interventions include **de-escalation**, crisis lines, safety planning and emergency services; least restrictive options are tried before compulsory powers.",
          },
        ],
        keyFormulas: [
          { name: "Treatment options", statement: "Talking therapies + medication + self-help + crisis support." },
          { name: "CBT", statement: "Thoughts ↔ feelings ↔ behaviours cycle." },
          { name: "Least restrictive", statement: "Try least restrictive option before compulsory powers." },
        ],
        workedExample: {
          problem: "Recommend a treatment plan for someone with moderate depression who prefers not to take medication.",
          solution: "Offer structured talking therapy (CBT or counselling), support self-help strategies (exercise, sleep routine, peer support), set goals, and review progress regularly; escalate to medication if needed.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u8-l3-tx-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Cognitive Behavioural Therapy (CBT) focuses on:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Unconscious childhood experiences"
                    },
                    {
                              "id": "b",
                              "text": "The links between thoughts, feelings and behaviours"
                    },
                    {
                              "id": "c",
                              "text": "Brain chemistry only"
                    },
                    {
                              "id": "d",
                              "text": "Medication management"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CBT",
                              "statement": "Therapy addressing links between thoughts, feelings and behaviours."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CBT targets the thought-feeling-behaviour cycle.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** — thoughts, feelings and behaviours"
},
        },
        {
          id: "edxbtechsc-u8-l3-tx-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two self-help strategies that support mental health.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Self-help",
                              "statement": "Individual strategies supporting wellbeing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two: regular exercise, sleep hygiene, mindfulness, peer support, limiting alcohol, routine, hobbies.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "e.g. exercise and sleep hygiene"
},
        },
        {
          id: "edxbtechsc-u8-l3-tx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how medication and talking therapies can be used together in mental health treatment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Combined treatment",
                              "statement": "Medication stabilises symptoms; therapy builds coping skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Medication reduces symptoms such as low mood or psychosis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Talking therapy addresses thoughts, behaviours and underlying issues.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Combined approach often more effective than either alone; reviewed regularly.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Medication stabilises; therapy builds skills — combined treatment is often best"
},
        },
        {
          id: "edxbtechsc-u8-l3-tx-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define talking therapies. (b) Describe CBT. (c) Give two examples of medication used in mental health. (d) Explain three benefits of peer support. (e) State the principle of least restrictive intervention in crisis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Treatment options",
                              "statement": "Psychological, pharmacological and peer-led interventions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Psychological treatments addressing thoughts, feelings and behaviours.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) CBT identifies and challenges unhelpful thought-behaviour cycles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Antidepressants (e.g. SSRIs), antipsychotics, mood stabilisers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Three benefits: reduced isolation, shared understanding, hope and role models.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(e) Try least restrictive options (support, crisis line, voluntary admission) before compulsory powers.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Treatments combine talking therapies, medication, self-help and least-restrictive crisis support."
},
        },
        {
          id: "edxbtechsc-u8-l3-tx-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A service user with anxiety refuses medication but agrees to therapy. (a) Recommend two appropriate talking therapies. (b) Describe three things the care worker can do to support engagement. (c) Explain how self-help strategies could complement therapy. (d) State two signs that the approach is not working and what should happen next.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Supporting engagement in therapy",
                              "statement": "Respect preferences, build rapport, monitor progress."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) CBT and counselling (or exposure-based therapy for anxiety).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Three supports: explain therapy clearly, encourage attendance, build trust, involve in goal-setting.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(c) Self-help: relaxation, sleep routine, exercise, journaling complement therapy.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Non-attendance or worsening symptoms → review plan, consider medication or psychiatry referral.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Respect the choice of therapy; support engagement; monitor and escalate if ineffective."
},
        },
        {
          id: "edxbtechsc-u8-l3-tx-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss treatments and support for mental health. Your answer should cover: (a) what talking therapies are and two examples; (b) how CBT works; (c) the role of medication; (d) self-help and peer support; (e) crisis intervention and de-escalation; (f) the principle of least restrictive care; (g) why treatment should be person-centred.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Mental health treatments",
                              "statement": "Evidence-based, person-centred, least-restrictive interventions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Psychological treatments; CBT and counselling named.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) CBT targets unhelpful thoughts and behaviours via the thought-feeling-behaviour cycle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Medication (antidepressants, antipsychotics) stabilises symptoms, prescribed and reviewed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Self-help strategies and peer support reduce isolation and build skills.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(e) Crisis support: de-escalation, crisis plans, emergency services; calm non-confrontational approach.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Least restrictive option tried before compulsory powers.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(g) Person-centred care respects preferences, improves engagement and outcomes.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Mental health treatment combines therapies, medication, self-help and crisis support in a person-centred, least-restrictive way."
},
        },
      ],
    },
    {
      id: "edxbtechsc-u8-l3-stigma",
      title: "Stigma, Inclusion and Supporting Individuals",
      skill: "Explain the impact of stigma and describe how to support individuals with mental health conditions.",
      lesson: {
        sections: [
          {
            heading: "Stigma and its impact",
            body: "**Stigma** — negative attitudes and stereotypes about mental illness — causes discrimination, social exclusion, reluctance to seek help and worse outcomes. **Self-stigma** (internalised shame) leads to isolation and low self-esteem. Challenging stigma through education, contact with people with lived experience and positive media representation improves help-seeking and recovery.",
          },
          {
            heading: "Supporting individuals",
            body: "Support means treating the person as a whole, not just their condition: listen without judgement, respect confidentiality, involve them in decisions, and support daily living. In workplaces and education, **reasonable adjustments** (flexible hours, phased return, quiet spaces) enable participation. Anti-stigma campaigns, peer support groups and inclusive language ('person with depression', not 'depressive') reduce barriers.",
          },
        ],
        keyFormulas: [
          { name: "Stigma", statement: "Negative attitudes → discrimination → exclusion and worse outcomes." },
          { name: "Self-stigma", statement: "Internalised shame → isolation and low self-esteem." },
          { name: "Person-first language", statement: "'Person with depression' not 'depressive'." },
        ],
        workedExample: {
          problem: "A colleague with depression is worried about telling their employer. How should they be supported?",
          solution: "Support them to consider disclosing voluntarily (they are protected by the Equality Act 2010), suggest reasonable adjustments like flexible hours, and offer to help them talk to their manager or occupational health.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u8-l3-sg-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is an example of self-stigma?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An employer refusing to hire someone with depression"
                    },
                    {
                              "id": "b",
                              "text": "A person feeling ashamed and hiding their condition because they believe they are 'weak'"
                    },
                    {
                              "id": "c",
                              "text": "A friend avoiding someone who has been sectioned"
                    },
                    {
                              "id": "d",
                              "text": "Media portraying people with mental illness as dangerous"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Self-stigma",
                              "statement": "Internalised shame about one's own condition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Self-stigma is internalised shame leading to hiding and isolation.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** — internalised shame"
},
        },
        {
          id: "edxbtechsc-u8-l3-sg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two ways stigma affects people with mental health conditions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Impact of stigma",
                              "statement": "Discrimination and exclusion worsen outcomes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two: reluctance to seek help, social isolation, discrimination in work/housing, worse recovery, self-stigma.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "e.g. reluctance to seek help and social isolation"
},
        },
        {
          id: "edxbtechsc-u8-l3-sg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between person-first and condition-first language, giving an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Person-first language",
                              "statement": "Separate the person from the condition to reduce stigma."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Person-first: 'person with depression' — emphasises personhood.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Condition-first: 'depressive' or 'schizophrenic' — defines person by illness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Person-first reduces stigma and supports dignity.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Person-first language ('person with X') reduces stigma vs condition-first labels."
},
        },
        {
          id: "edxbtechsc-u8-l3-sg-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define stigma and self-stigma. (b) Describe three ways stigma harms people with mental illness. (c) Explain two strategies to reduce stigma in the workplace. (d) State why contact with people with lived experience is effective.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Stigma reduction",
                              "statement": "Education, contact and person-first language reduce stigma."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Stigma = negative attitudes; self-stigma = internalised shame.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Three harms: reluctance to seek help, isolation, discrimination, worse outcomes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Two workplace strategies: anti-stigma training, open dialogue, reasonable adjustments, peer champions.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(d) Contact counters stereotypes by showing real people, building empathy.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Stigma harms outcomes; education, contact and inclusive language reduce it."
},
        },
        {
          id: "edxbtechsc-u8-l3-sg-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A service user with schizophrenia wants to return to work but fears disclosure. (a) Explain the legal protection they have. (b) Describe three reasonable adjustments an employer could make. (c) Explain how the care worker can support the return-to-work process. (d) State how stigma might affect the person's self-esteem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Supporting employment for mental health",
                              "statement": "Legal protection, adjustments and emotional support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Equality Act 2010 — disability discrimination protection; mental illness can be a disability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Three adjustments: flexible hours, phased return, quiet workspace, adjusted workload, regular breaks.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(c) Support: discuss disclosure options, liaise with occupational health, build confidence, monitor stress.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Stigma/self-stigma may lower self-esteem, cause shame and fear of judgment.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Protect rights, arrange adjustments, and support confidence to enable successful return to work."
},
        },
        {
          id: "edxbtechsc-u8-l3-sg-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss stigma and how to support people with mental health conditions. Your answer should cover: (a) the definition and types of stigma; (b) three impacts of stigma on individuals; (c) how self-stigma affects recovery; (d) three strategies to reduce stigma in care settings; (e) how to support an individual who is reluctant to seek help; (f) why inclusion and person-first language matter.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Anti-stigma practice",
                              "statement": "Stigma worsens outcomes; education, contact and inclusive practice reduce it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Stigma = negative attitudes/stereotypes; self-stigma = internalised version; public stigma affects attitudes.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Three impacts: reluctance to seek help, isolation, discrimination, worse outcomes, self-esteem loss.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Self-stigma → shame, hiding condition, reduced help-seeking and slower recovery.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Three strategies: staff training, person-first language, peer support, open dialogue, anti-stigma campaigns.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(e) Support: listen non-judgementally, normalise help-seeking, offer information, involve peer support, respect autonomy.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(f) Person-first language and inclusion affirm dignity and challenge stereotypes.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Stigma worsens mental health outcomes; inclusive, person-first practice and anti-stigma strategies support recovery."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtechsc-u8-l3-notes",
      title: "Supporting Mental Health and Reducing Stigma — notes",
      summary: "Treatments combine talking therapies, medication, self-help and crisis support; stigma must be actively challenged.",
      sections: [
        { heading: "Treatments", body: "CBT targets thoughts-feelings-behaviours; medication stabilises; self-help and peer support build resilience." },
        { heading: "Crisis", body: "De-escalate calmly, use crisis plans, try least restrictive options before compulsory powers." },
        { heading: "Stigma", body: "Self-stigma and public stigma harm outcomes — counter with education, contact and person-first language." },
      ],
    },
  ],
};
