import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "edxbtechsc-u6-lesson-6-1",
  code: "6-1",
  title: "Understanding Mental Health and Wellbeing",
  goal: "I CAN define mental health and wellbeing, describe the mental health continuum, and challenge stigma.",
  standards: ["BTEC L3 National Health and Social Care — Unit 6: Mental Health and Wellbeing"],
  
  vocabulary: [
    { term: "Mental health", definition: "State of wellbeing in which a person realises their abilities, copes with normal stresses, works productively and contributes to their community (WHO)." },
    { term: "Mental wellbeing", definition: "Ability to feel good, function well and have satisfying relationships; includes happiness, resilience and self-esteem." },
    { term: "Mental health continuum", definition: "Model showing mental health ranges from optimal wellbeing through mild/common problems to severe mental illness." },
    { term: "Stigma", definition: "Negative attitudes, stereotypes and discrimination directed at people with mental health problems." },
    { term: "Recovery", definition: "Journey of regaining control of one's life and building a meaningful life beyond illness — not necessarily a cure." },
    { term: "Protective factors", definition: "Personal, social or environmental features that reduce the risk of mental illness, e.g. social support, coping skills." },
  ],
  concepts: [
    {
      id: "edxbtechsc-u6-l1-definitions",
      title: "Mental health, wellbeing and the continuum",
      skill: "Define mental health and wellbeing and apply the mental health continuum model.",
      lesson: {
        sections: [
          {
            heading: "Definitions",
            body: "**Mental health** (WHO) is a state of wellbeing enabling people to realise their abilities, cope with normal stresses of life, work productively and contribute to their community. It is not merely the absence of mental illness.\n\n**Mental wellbeing** is broader and more positive: feeling good (happiness, contentment), functioning well (resilience, self-esteem, purpose) and having satisfying relationships. Wellbeing fluctuates and can coexist with mental illness.",
          },
          {
            heading: "The continuum",
            body: "The **mental health continuum** places everyone on a spectrum:\n\n- **Optimal mental health** — thriving, resilient, functioning well.\n- **Everyday worries** — mild anxiety or low mood, usually temporary and managed.\n- **Common mental health problems** — e.g. mild-moderate anxiety or depression affecting daily life.\n- **Severe mental illness** — e.g. schizophrenia, bipolar disorder, requiring specialist care.\n\nEveryone moves along the continuum; a diagnosis is not a fixed category. Recovery-oriented practice emphasises hope, choice and personal goals.",
          },
        ],
        keyFormulas: [
          { name: "Mental health", statement: "wellbeing enabling coping, productivity and contribution" },
          { name: "Continuum", statement: "optimal health ↔ everyday worries ↔ common problems ↔ severe illness" },
          { name: "Wellbeing", statement: "feeling good + functioning well + satisfying relationships" },
        ],
        workedExample: {
          problem: "Explain why someone diagnosed with depression can still have moments of good mental wellbeing.",
          solution: "Wellbeing is a separate, broader concept from illness. A person with depression may still feel content during enjoyable activities, maintain some supportive relationships or experience purpose through work or hobbies — wellbeing and illness coexist on different dimensions.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u6-mh-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the WHO definition of mental health.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mental health (WHO)",
                              "statement": "State of wellbeing: realise abilities, cope with stress, work, contribute."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "State of wellbeing.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Realise abilities / cope with stress / work / contribute.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "A state of wellbeing enabling people to realise their abilities, cope with normal stresses, work productively and contribute to their community."
},
        },
        {
          id: "edxbtechsc-u6-mh-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List the four stages of the mental health continuum from best to worst.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mental health continuum",
                              "statement": "Spectrum from optimal health to severe illness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Optimal mental health → everyday worries → common mental health problems → severe mental illness.",
                              "marks": 3,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Optimal health; everyday worries; common mental health problems; severe mental illness."
},
        },
        {
          id: "edxbtechsc-u6-mh-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between mental health and mental wellbeing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mental health vs wellbeing",
                              "statement": "Health = coping/functioning; wellbeing = feeling good + relationships."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mental health = ability to cope, function and contribute (WHO).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Wellbeing = subjective feeling good plus functioning and relationships.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They can coexist with illness — not simply opposites.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Mental health is about functioning/coping; wellbeing is about feeling good and relationships — related but distinct."
},
        },
        {
          id: "edxbtechsc-u6-mh-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what stigma is and describe two ways it can harm people with mental health problems.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Stigma",
                              "statement": "Negative attitudes/stereotypes → discrimination."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stigma = negative stereotypes and attitudes towards mental illness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Harm 1, e.g. reluctance to seek help / delayed treatment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Harm 2, e.g. social exclusion, unemployment, low self-esteem.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Link to discrimination in services/employment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Stigma creates shame, delays help-seeking and causes discrimination."
},
        },
        {
          id: "edxbtechsc-u6-mh-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain the concept of 'recovery' in mental health, distinguishing it from a cure. Then describe two ways care workers can support recovery.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Recovery",
                              "statement": "Regaining control and building a meaningful life, not necessarily symptom-free."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Recovery = personal journey of control, hope, meaningful life.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Different from cure — symptoms may persist; focus on quality of life.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Support 1, e.g. person-centred goals, choice, advocacy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Support 2, e.g. social connection, employment support, peer support.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Recovery focuses on control and meaningful life beyond illness, supported by person-centred care."
},
        },
        {
          id: "edxbtechsc-u6-mh-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A care worker meets a new client who says they have been 'feeling low for months'.\n(a) Explain how the mental health continuum helps frame this.\n(b) Describe three questions the worker could ask to assess impact.\n(c) Explain two protective factors that support mental wellbeing.\n(d) Describe two signs that professional help may be needed.\n(e) Explain how the worker should record and escalate concerns.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Mental health assessment",
                              "statement": "Continuum + impact + protective factors guide care."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Continuum places them somewhere between everyday worries and common problems.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Three assessment questions, e.g. sleep, appetite, concentration, functioning, support.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Two protective factors, e.g. social support, coping skills, employment, physical health.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Two escalation signs, e.g. hopelessness, self-harm thoughts, inability to function.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Record accurately, follow safeguarding/mental health procedures, refer to GP/crisis team.",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Continuum framing, assessment questions, protective factors and escalation described."
},
        },
      ],
    },
    {
      id: "edxbtechsc-u6-l1-factors",
      title: "Causes and risk factors",
      skill: "Explain the biological, psychological and social factors that influence mental health.",
      lesson: {
        sections: [
          {
            heading: "The bio-psycho-social model",
            body: "Mental health problems usually arise from an interaction of factors:\n\n- **Biological**: genetics (family history), brain chemistry (neurotransmitters like serotonin, dopamine), physical illness, substance use, hormones.\n- **Psychological**: personality traits, coping style, past trauma, negative thinking patterns, low self-esteem.\n- **Social**: poverty, unemployment, isolation, bereavement, relationship breakdown, discrimination, stigma, stressful life events.\n\nNo single factor 'causes' mental illness — risk accumulates across domains.",
          },
          {
            heading: "Protective factors and resilience",
            body: "**Protective factors** buffer against risk: strong social support networks, secure attachments, good physical health, coping skills, self-esteem, sense of purpose, employment/education, and access to services.\n\n**Resilience** is the ability to adapt and recover from adversity — it can be built through supportive relationships, skills and meaning. Vulnerable groups (e.g. refugees, people in poverty, those with physical disabilities, LGBTQ+ people facing discrimination) may face higher risk.",
          },
        ],
        keyFormulas: [
          { name: "Bio-psycho-social", statement: "biological + psychological + social factors interact" },
          { name: "Protective factors", statement: "support, coping skills, purpose, physical health buffer risk" },
          { name: "Resilience", statement: "capacity to adapt and recover from adversity" },
        ],
        workedExample: {
          problem: "A person loses their job after a bereavement and develops depression. Identify one factor from each domain contributing to this.",
          solution: "Biological: possible genetic predisposition or stress-hormone effects. Psychological: grief and negative thinking patterns. Social: unemployment, financial stress and reduced social contact — together raising risk of depression.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u6-fac-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the three domains of the bio-psycho-social model of mental health.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bio-psycho-social model",
                              "statement": "Biological, psychological and social factors interact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Biological, psychological, social named.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Biological, psychological and social."
},
        },
        {
          id: "edxbtechsc-u6-fac-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give one example of a biological, one psychological and one social risk factor for mental illness.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Risk factors",
                              "statement": "Bio-psycho-social contributors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Biological, e.g. genetics, brain chemistry, physical illness, substance use.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Psychological, e.g. trauma, negative thinking, low self-esteem.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Social, e.g. poverty, isolation, bereavement, discrimination.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Any valid example from each domain."
},
        },
        {
          id: "edxbtechsc-u6-fac-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why no single factor can be said to 'cause' mental illness, using the bio-psycho-social model.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Multi-factorial causation",
                              "statement": "Risk accumulates across interacting domains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mental illness results from interactions of biological, psychological and social factors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Risk factors accumulate — more factors raise likelihood.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Protective factors can offset risk — no deterministic single cause.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Illness emerges from interacting bio-psycho-social risk and protective factors, not one cause."
},
        },
        {
          id: "edxbtechsc-u6-fac-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what resilience is and describe three ways it can be strengthened.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Resilience",
                              "statement": "Ability to adapt and recover from adversity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Resilience defined as adapting/recovering from setbacks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Strengthen 1, e.g. supportive relationships.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Strengthen 2, e.g. coping skills/problem-solving.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Strengthen 3, e.g. physical health, purpose, professional support.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Resilience can be built via relationships, skills, health and purpose."
},
        },
        {
          id: "edxbtechsc-u6-fac-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how social determinants such as poverty, unemployment and discrimination can affect mental health, giving an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Social determinants",
                              "statement": "Adversity and inequality raise mental illness risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Poverty → financial stress, poor housing, reduced access to services → anxiety/depression.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Unemployment → loss of purpose, income, social contact → low mood/isolation.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Discrimination → stigma, exclusion, internalised shame → higher risk especially for minority groups.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Social adversity creates chronic stress and reduces protective resources → higher mental illness risk."
},
        },
        {
          id: "edxbtechsc-u6-fac-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Using the bio-psycho-social model, analyse this scenario: 'A student from a low-income household experiences panic attacks before exams after their parents separated.'\n(a) Identify one biological, psychological and social factor.\n(b) Explain how these factors might interact.\n(c) Describe three protective factors that could reduce risk.\n(d) Explain how a care worker could support this student.\n(e) Explain when referral to specialist services would be appropriate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Bio-psycho-social analysis",
                              "statement": "Interacting factors shape mental health outcomes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) One factor per domain identified correctly.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Interaction explained, e.g. stress hormones + worry + exam pressure compound.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Three protective factors, e.g. supportive teacher, counselling, stable routine.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Support: listen, validate, signpost to school counselling/GP.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Referral if persistent, impairing or risky — GP/school mental health services.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Bio-psycho-social analysis with interaction, protective factors and appropriate support/referral."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtechsc-u6-mh-understand-notes",
      title: "Understanding mental health — notes",
      summary: "Mental health = capacity to cope and function; wellbeing adds feeling good. The continuum shows everyone moves along a spectrum; bio-psycho-social factors shape risk.",
      sections: [
        { heading: "Key idea", body: "Mental health is not simply absence of illness — it includes positive wellbeing." },
        { heading: "Model", body: "Bio-psycho-social: biology, psychology and social circumstances interact; protective factors build resilience." },
      ],
    },
  ],
};
