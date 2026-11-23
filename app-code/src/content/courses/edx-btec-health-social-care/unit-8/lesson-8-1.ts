import type { Lesson } from "../../../types.ts";

export const lesson801: Lesson = {
  id: "edxbtechsc-u8-lesson-8-1",
  code: "8-1",
  title: "Mental Health, Wellbeing and Common Disorders",
  goal: "I CAN explain concepts of mental health and wellbeing and describe common mental health conditions.",
  standards: ["BTEC L3 National Health and Social Care — Unit 8: Mental Health and Wellbeing (extended certificate)"],
  
  vocabulary: [
    { term: "Mental health", definition: "A state of wellbeing in which the individual realises their abilities, can cope with the normal stresses of life, and is able to work productively and make a contribution to their community." },
    { term: "Mental illness", definition: "A diagnosable condition that significantly disrupts thinking, feeling or behaviour and impairs functioning." },
    { term: "Wellbeing", definition: "A positive state encompassing physical, mental, social and economic dimensions." },
    { term: "Depression", definition: "A common mood disorder characterised by persistent low mood and loss of interest or pleasure." },
    { term: "Anxiety", definition: "A normal human emotion that becomes an illness when excessive, persistent and impairing." },
    { term: "Psychosis", definition: "A loss of contact with reality, often involving hallucinations and/or delusions." },
  ],
  concepts: [
    {
      id: "edxbtechsc-u8-l1-continuum",
      title: "Mental Health, Wellbeing and the Continuum of Mental Illness",
      skill: "Define mental health, wellbeing and mental illness and describe where illness sits on a continuum.",
      lesson: {
        sections: [
          {
            heading: "Mental health and wellbeing",
            body: "The WHO defines mental health as a state of wellbeing, not merely the absence of illness. Wellbeing is multidimensional: **physical** (fitness, sleep), **emotional/mental** (resilience, coping), **social** (relationships, support networks) and **economic** (housing, income, security). Mental health exists on a **continuum** — everyone moves between positive wellbeing, mild distress, diagnosable illness and crisis, and may sit in more than one place for different aspects of life.",
          },
          {
            heading: "Stress, resilience and the continuum",
            body: "Normal life stressors trigger the fight-or-flight response. When stress is prolonged or exceeds a person's **resilience** (ability to bounce back), it can progress along the continuum to anxiety, low mood or clinical conditions. Protective factors — social support, healthy coping, early help-seeking — keep people well; risk factors — isolation, poverty, trauma, stigma — push people towards illness. Mental illness is common: about 1 in 6 people experience a common mental health problem such as anxiety or depression in any year.",
          },
        ],
        keyFormulas: [
          { name: "WHO definition", statement: "Mental health = state of wellbeing, not absence of disease." },
          { name: "Wellbeing dimensions", statement: "Physical, emotional, social and economic." },
          { name: "Continuum", statement: "Wellbeing → mild distress → illness → crisis." },
        ],
        workedExample: {
          problem: "A young worker feels overwhelmed after losing their job, has trouble sleeping and feels worthless for two weeks. Explain where they sit on the mental health continuum and what could help.",
          solution: "The person shows mild-to-moderate distress — low mood and worry following a stressor, but still functioning. Strengthening social support, routine and early talking therapies can prevent progression to clinical depression.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u8-l1-ct-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which statement best describes the relationship between mental health and mental illness?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mental health and mental illness are opposites — you have one or the other"
                    },
                    {
                              "id": "b",
                              "text": "Mental health is a continuum, and mental illness is a diagnosable condition that can occur anywhere on it"
                    },
                    {
                              "id": "c",
                              "text": "Mental illness is purely genetic and cannot be influenced by environment"
                    },
                    {
                              "id": "d",
                              "text": "Mental health only matters when a person is mentally ill"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mental health continuum",
                              "statement": "Wellbeing is a spectrum; illness is a diagnosable disruption."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mental health spans a continuum from wellbeing to illness.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** — continuum model"
},
        },
        {
          id: "edxbtechsc-u8-l1-ct-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define mental wellbeing and name three factors that support it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Wellbeing",
                              "statement": "Positive multidimensional state of health."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wellbeing = positive state across physical, emotional, social and economic dimensions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Any three: social support, healthy coping, financial security, physical activity, purpose, good housing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Multidimensional positive state; e.g. social support, coping skills, financial security"
},
        },
        {
          id: "edxbtechsc-u8-l1-ct-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how prolonged stress can move a person along the mental health continuum towards illness.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Stress-vulnerability model",
                              "statement": "Stress exceeds coping capacity and resilience leads to illness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Normal stress triggers fight-or-flight; coping mechanisms manage short-term stress.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Prolonged stress or low resilience exhausts coping capacity.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Person moves along continuum from distress to diagnosable anxiety or depression.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Stress beyond coping capacity → progression along continuum to illness"
},
        },
        {
          id: "edxbtechsc-u8-l1-ct-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define mental health. (b) Define mental illness. (c) Describe the four dimensions of wellbeing. (d) Explain what is meant by the 'mental health continuum'. (e) Give one example of a protective factor and one risk factor for mental health.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Core concepts",
                              "statement": "Mental health, illness, wellbeing, continuum."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) WHO definition of mental health — state of wellbeing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Diagnosable condition disrupting thinking, feeling or behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Physical, emotional/mental, social, economic.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Spectrum from wellbeing through distress to crisis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Protective e.g. social support; risk e.g. isolation, trauma, poverty.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Mental health is multidimensional wellbeing on a continuum from health to illness."
},
        },
        {
          id: "edxbtechsc-u8-l1-ct-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare mental health and mental illness. In your answer refer to: (a) definition, (b) impact on daily functioning, (c) whether they can co-exist, (d) how a person can move between them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Continuum model",
                              "statement": "Health and illness are not binary opposites."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Health = wellbeing enabling function; illness = diagnosable disruption.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Health supports productivity/contribution; illness impairs functioning.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(c) A person can have good physical wellbeing but poor mental health, or recover partially.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(d) Movement along continuum via stressors, support, treatment, resilience.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Mental health and illness sit on a continuum; people move between them."
},
        },
        {
          id: "edxbtechsc-u8-l1-ct-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss the concept of mental health and wellbeing. Your answer should cover: (a) the WHO definition of mental health; (b) the dimensions of wellbeing; (c) the mental health continuum; (d) two risk factors for poor mental health; (e) two protective factors; (f) why mental health promotion matters in health and social care.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Mental health promotion",
                              "statement": "Wellbeing is multidimensional and can be actively promoted."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) State of wellbeing; realising abilities, coping with stress, productive contribution.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Physical, emotional, social and economic dimensions described.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Continuum from wellbeing to crisis; people move along it.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Two risk factors: e.g. poverty, isolation, trauma, stigma, unemployment.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(e) Two protective factors: e.g. social support, purpose, healthy lifestyle, early help.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(f) Promotion reduces illness, improves outcomes and is a core care role.",
                              "marks": 3,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Mental health is multidimensional wellbeing on a continuum; promotion prevents illness and supports recovery."
},
        },
      ],
    },
    {
      id: "edxbtechsc-u8-l1-conditions",
      title: "Common Mental Health Conditions: Depression, Anxiety and Psychosis",
      skill: "Describe the symptoms, causes and impact of depression, anxiety and psychosis.",
      lesson: {
        sections: [
          {
            heading: "Depression and anxiety",
            body: "**Depression** is characterised by persistent low mood and loss of interest or pleasure (anhedonia) lasting at least two weeks. Symptoms span emotional (sadness, hopelessness), physical (fatigue, sleep/appetite changes), cognitive (poor concentration, negative thoughts) and behavioural (withdrawal, neglect of self-care) domains. **Anxiety** is a normal emotion that becomes pathological when excessive and persistent — generalised anxiety disorder, panic disorder, phobias and OCD are common forms.",
          },
          {
            heading: "Psychosis and the bio-psycho-social model",
            body: "**Psychosis** involves a loss of contact with reality: **hallucinations** (perceiving things not present, e.g. hearing voices) and **delusions** (fixed false beliefs). Conditions include schizophrenia, schizoaffective disorder and brief psychotic episodes, often triggered by stress in vulnerable individuals. Mental health conditions arise from the interaction of **biological** (genetics, brain chemistry), **psychological** (trauma, coping style) and **social** (poverty, isolation, discrimination) factors — the bio-psycho-social model.",
          },
        ],
        keyFormulas: [
          { name: "Depression core", statement: "Low mood + anhedonia, ≥ 2 weeks, across emotional/physical/cognitive/behavioural domains." },
          { name: "Psychosis", statement: "Loss of contact with reality — hallucinations and/or delusions." },
          { name: "Bio-psycho-social", statement: "Biological + psychological + social factors interact." },
        ],
        workedExample: {
          problem: "A patient reports hearing voices telling them to hurt themselves, believes the government is watching them, and has stopped washing. Identify the condition and the immediate priorities.",
          solution: "Hallucinations (hearing voices) and delusions (being watched) indicate psychosis, likely with a risk of self-harm. Priorities: ensure immediate safety, do not argue with delusions, involve mental health services and follow safeguarding procedures.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u8-l1-cd-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A person believes they are being followed by secret agents and hears voices no one else can hear. This is most likely:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Depression"
                    },
                    {
                              "id": "b",
                              "text": "An anxiety disorder"
                    },
                    {
                              "id": "c",
                              "text": "Psychosis — delusions and hallucinations"
                    },
                    {
                              "id": "d",
                              "text": "A personality disorder"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Psychosis",
                              "statement": "Loss of contact with reality — delusions and hallucinations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Delusions (agents following) + hallucinations (voices) = psychosis.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** — psychosis"
},
        },
        {
          id: "edxbtechsc-u8-l1-cd-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the difference between normal anxiety and an anxiety disorder.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Anxiety vs disorder",
                              "statement": "Normal emotion vs excessive persistent impairment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Anxiety is a normal, proportionate response to threat.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Disorder = excessive, persistent, disproportionate anxiety that impairs functioning.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Normal proportionate worry vs excessive persistent impairment"
},
        },
        {
          id: "edxbtechsc-u8-l1-cd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the symptoms of depression across three different domains.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Depression symptoms",
                              "statement": "Low mood + anhedonia across emotional, physical, cognitive and behavioural domains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Emotional: persistent low mood, hopelessness, loss of interest.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Physical/cognitive: fatigue, sleep/appetite change, poor concentration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Behavioural: withdrawal, neglect of self-care, loss of motivation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Emotional, physical, cognitive and behavioural symptoms of depression"
},
        },
        {
          id: "edxbtechsc-u8-l1-cd-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define depression. (b) List four symptoms of depression. (c) Define anxiety disorder. (d) Give two examples of anxiety disorders. (e) Explain how the bio-psycho-social model explains the causes of mental illness.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Bio-psycho-social model",
                              "statement": "Biological, psychological and social factors interact to cause illness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Mood disorder with persistent low mood and anhedonia ≥ 2 weeks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Any four symptoms across domains (low mood, fatigue, withdrawal, sleep change, hopelessness, poor concentration).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Excessive persistent disproportionate anxiety impairing function.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) GAD, panic disorder, phobia, OCD.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Genes/brain chemistry + trauma/coping + poverty/isolation interact.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Depression and anxiety disorders arise from interacting bio-psycho-social factors."
},
        },
        {
          id: "edxbtechsc-u8-l1-cd-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A care worker meets a service user who reports persistent worry, panic attacks and avoids leaving the house. (a) Identify the likely condition. (b) Describe three symptoms the worker might observe. (c) Explain two ways the condition could affect daily life. (d) State two appropriate responses by the care worker.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Recognising and responding to anxiety",
                              "statement": "Identify symptoms, understand impact, respond calmly and seek support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Anxiety disorder — likely panic disorder or agoraphobia features.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Any three: panic attacks, restlessness, sleep disturbance, avoidance, physical symptoms (palpitations, sweating).",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(c) Two impacts: social isolation, inability to work/travel, poor self-care, relationship strain.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(d) Two responses: listen non-judgementally, support GP/referral, encourage gradual exposure, manage own safety.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Anxiety disorder — respond calmly, validate, and support referral and gradual recovery."
},
        },
        {
          id: "edxbtechsc-u8-l1-cd-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Explain psychosis as a mental health condition. Your answer should cover: (a) the definition of psychosis; (b) what hallucinations are with an example; (c) what delusions are with an example; (d) two conditions associated with psychosis; (e) three possible causes or triggers; (f) how a care worker should respond when someone is experiencing psychosis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Psychosis",
                              "statement": "Loss of contact with reality involving hallucinations and/or delusions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Loss of contact with reality — impaired ability to distinguish thoughts from external events.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Hallucinations: perceiving something absent — e.g. hearing voices.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Delusions: fixed false beliefs — e.g. believing one is being followed or is a famous person.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Schizophrenia, schizoaffective disorder, bipolar disorder with psychotic features, brief psychotic episode.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Three causes: genetic vulnerability, stress/trauma, substance use, brain chemistry changes.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(f) Calm non-confrontational approach, do not argue with delusions, ensure safety, involve mental health team, document.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Psychosis involves hallucinations and delusions; respond calmly, keep safe and involve services."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtechsc-u8-l1-notes",
      title: "Mental Health and Common Disorders — notes",
      summary: "Mental health is multidimensional wellbeing on a continuum; depression, anxiety and psychosis are key conditions.",
      sections: [
        { heading: "Key idea", body: "Mental health ≠ absence of illness — it is a state of wellbeing across physical, emotional, social and economic dimensions." },
        { heading: "Continuum", body: "People move between wellbeing, mild distress, diagnosable illness and crisis depending on stressors and support." },
        { heading: "Conditions", body: "Depression = low mood + anhedonia; anxiety = excessive persistent worry; psychosis = loss of contact with reality." },
      ],
    },
  ],
};
