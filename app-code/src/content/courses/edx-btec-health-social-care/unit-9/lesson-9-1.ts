import type { Lesson } from "../../../types.ts";

export const lesson901: Lesson = {
  id: "edxbtechsc-u9-lesson-9-1",
  code: "9-1",
  title: "Understanding Dementia",
  goal: "I CAN describe the causes, types, symptoms and progression of dementia.",
  standards: ["BTEC L3 National Health and Social Care — Unit 9: Dementia and Care of Older Adults (extended certificate)"],
  
  vocabulary: [
    { term: "Dementia", definition: "A group of conditions involving progressive decline in cognitive function affecting memory, thinking, communication and daily living." },
    { term: "Alzheimer's disease", definition: "The most common form of dementia, characterised by plaques and tangles in the brain." },
    { term: "Vascular dementia", definition: "Dementia caused by reduced blood flow to the brain, often after strokes or TIAs." },
    { term: "Lewy body dementia", definition: "Dementia associated with abnormal protein deposits, causing fluctuations in cognition and visual hallucinations." },
    { term: "Frontotemporal dementia", definition: "Dementia affecting personality, behaviour and language, often occurring at a younger age." },
    { term: "Cognitive impairment", definition: "Reduced ability to think, remember, reason and make decisions — a feature of dementia." },
  ],
  concepts: [
    {
      id: "edxbtechsc-u9-l1-types",
      title: "Types and Causes of Dementia",
      skill: "Identify the main types of dementia and their underlying causes.",
      lesson: {
        sections: [
          {
            heading: "What dementia is",
            body: "Dementia is not a single disease but a **syndrome** — a collection of symptoms caused by various brain diseases. It involves progressive decline in **memory**, **language**, **orientation**, **judgement** and **ability to carry out daily activities**. It is not a normal part of ageing, though risk increases with age. Over 850,000 people in the UK have dementia.",
          },
          {
            heading: "Main types",
            body: "**Alzheimer's disease** (~60-70% of cases): amyloid plaques and tau tangles damage neurons; memory loss is the earliest feature. **Vascular dementia** (~15-20%): reduced blood supply from strokes/TIAs; symptoms often appear suddenly and progress in steps. **Lewy body dementia**: abnormal alpha-synuclein deposits; fluctuating cognition, visual hallucinations, Parkinsonism. **Frontotemporal dementia**: affects personality, behaviour and language; often under 65.",
          },
        ],
        keyFormulas: [
          { name: "Dementia types", statement: "Alzheimer's, vascular, Lewy body, frontotemporal." },
          { name: "Alzheimer's share", statement: "~60-70% of dementia cases." },
          { name: "Vascular pattern", statement: "Sudden onset, stepwise decline after strokes/TIAs." },
        ],
        workedExample: {
          problem: "A 78-year-old has had two strokes and now shows stepwise decline in memory and orientation. Which type of dementia is most likely?",
          solution: "Vascular dementia — caused by cerebrovascular damage from strokes, with sudden onset and stepwise progression rather than gradual decline.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u9-l1-tc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the most common type of dementia?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Vascular dementia"
                    },
                    {
                              "id": "b",
                              "text": "Lewy body dementia"
                    },
                    {
                              "id": "c",
                              "text": "Alzheimer's disease"
                    },
                    {
                              "id": "d",
                              "text": "Frontotemporal dementia"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Alzheimer's disease",
                              "statement": "Most common dementia, ~60-70% of cases."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alzheimer's is the most prevalent type of dementia.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** — Alzheimer's disease"
},
        },
        {
          id: "edxbtechsc-u9-l1-tc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define dementia and state whether it is a normal part of ageing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dementia",
                              "statement": "Progressive cognitive decline syndrome, not normal ageing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dementia = syndrome of progressive decline in memory, thinking, communication and daily living.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It is not a normal part of ageing — it is caused by brain diseases.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Progressive cognitive decline syndrome; not normal ageing"
},
        },
        {
          id: "edxbtechsc-u9-l1-tc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the causes of Alzheimer's disease and vascular dementia.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Alzheimer's vs vascular",
                              "statement": "Degenerative plaques/tangles vs cerebrovascular damage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alzheimer's: amyloid plaques and tau tangles damage neurons degeneratively.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Vascular: reduced blood flow to brain from strokes/TIAs causes stepwise damage.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Different pathology but both cause progressive cognitive decline.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Alzheimer's = neurodegenerative plaques/tangles; vascular = stroke-related blood flow loss"
},
        },
        {
          id: "edxbtechsc-u9-l1-tc-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define dementia. (b) Name four types of dementia. (c) Describe the cause of Alzheimer's disease. (d) Describe the cause of vascular dementia. (e) Explain why dementia is described as a 'syndrome' rather than a single disease.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dementia types",
                              "statement": "Alzheimer's, vascular, Lewy body, frontotemporal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Syndrome of progressive cognitive decline affecting memory, thinking and daily living.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Alzheimer's, vascular, Lewy body, frontotemporal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Amyloid plaques and tau tangles damage neurons.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Reduced blood flow to brain from strokes/TIAs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Multiple diseases cause similar symptoms — not one single condition.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Dementia is a syndrome caused by several distinct brain diseases."
},
        },
        {
          id: "edxbtechsc-u9-l1-tc-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A 70-year-old experiences fluctuating confusion, vivid visual hallucinations, and movement difficulties. (a) Identify the most likely type of dementia. (b) Explain two features that support this diagnosis. (c) Describe how this differs from Alzheimer's disease. (d) State two implications for care.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lewy body dementia",
                              "statement": "Fluctuating cognition, visual hallucinations, Parkinsonism."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Lewy body dementia.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Two features: fluctuating cognition, visual hallucinations, Parkinsonism/movement issues.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(c) Alzheimer's has gradual memory-predominant decline; LBD has fluctuations, hallucinations, motor symptoms.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(d) Two implications: antipsychotics can worsen symptoms, hallucinations need sensitive response, movement needs may increase.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Lewy body dementia — fluctuating cognition, hallucinations, Parkinsonism; requires tailored care."
},
        },
        {
          id: "edxbtechsc-u9-l1-tc-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss the causes and types of dementia. Your answer should cover: (a) the definition of dementia as a syndrome; (b) the four main types; (c) the cause of Alzheimer's disease; (d) the cause of vascular dementia; (e) the distinctive features of Lewy body dementia; (f) risk factors for dementia; (g) why dementia is not a normal part of ageing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dementia types and causes",
                              "statement": "Multiple brain diseases cause progressive cognitive decline."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Dementia = syndrome of progressive decline in memory, thinking, communication and daily living.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Four types: Alzheimer's, vascular, Lewy body, frontotemporal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Alzheimer's: amyloid plaques and tau tangles damage neurons.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Vascular: reduced blood flow from strokes/TIAs causes stepwise damage.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Lewy body: alpha-synuclein deposits; fluctuating cognition, visual hallucinations, Parkinsonism.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Risk factors: age, genetics, cardiovascular disease, lifestyle (smoking, alcohol, inactivity).",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(g) While risk rises with age, dementia is caused by diseases — not inevitable or normal.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Dementia is a syndrome of several brain diseases; types differ in cause and presentation."
},
        },
      ],
    },
    {
      id: "edxbtechsc-u9-l1-symptoms",
      title: "Symptoms, Progression and Diagnosis of Dementia",
      skill: "Describe the symptoms, stages and diagnostic process of dementia.",
      lesson: {
        sections: [
          {
            heading: "Symptoms and progression",
            body: "Early symptoms include **memory loss** (especially recent events), difficulty with complex tasks, word-finding problems and disorientation. As dementia progresses: confusion, personality changes, wandering, incontinence, loss of ability to communicate and eventually full dependence. Progression varies by type — Alzheimer's is gradual; vascular is stepwise. Symptoms cause distress for the person and their family.",
          },
          {
            heading: "Diagnosis",
            body: "Diagnosis involves **history taking** (from person and family), **cognitive assessment** (e.g. MMSE, ACE-R), **physical examination**, **blood tests** to rule out reversible causes (e.g. vitamin B12 deficiency, thyroid problems), and **brain imaging** (CT/MRI) to identify changes. Early diagnosis enables planning, treatment of reversible causes and access to support services.",
          },
        ],
        keyFormulas: [
          { name: "Early symptoms", statement: "Memory loss, word-finding, disorientation, complex task difficulty." },
          { name: "Progression", statement: "Alzheimer's gradual; vascular stepwise; LBD fluctuating." },
          { name: "Diagnosis", statement: "History + cognitive tests + blood tests + brain imaging." },
        ],
        workedExample: {
          problem: "A GP suspects dementia in a patient with memory loss. Describe the diagnostic process.",
          solution: "Take history from patient and family, perform cognitive assessment (e.g. MMSE), check physical health and blood tests to exclude reversible causes, and arrange brain imaging to confirm structural changes.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u9-l1-sp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is an early symptom of dementia?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Complete loss of mobility"
                    },
                    {
                              "id": "b",
                              "text": "Difficulty finding words and forgetting recent events"
                    },
                    {
                              "id": "c",
                              "text": "Sudden blindness"
                    },
                    {
                              "id": "d",
                              "text": "Loss of bladder control only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Early dementia symptoms",
                              "statement": "Memory loss, word-finding problems, disorientation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Early symptoms involve memory and language, not physical decline.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** — word-finding and recent memory loss"
},
        },
        {
          id: "edxbtechsc-u9-l1-sp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two purposes of early diagnosis of dementia.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Early diagnosis",
                              "statement": "Enables planning, treatment and support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two: rule out reversible causes, access treatment and support, plan for future, involve family early.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "e.g. rule out reversible causes and enable planning"
},
        },
        {
          id: "edxbtechsc-u9-l1-sp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how symptoms of dementia typically progress over time.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Dementia progression",
                              "statement": "Gradual decline from memory loss to full dependence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Early: memory loss, word-finding, disorientation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Middle: confusion, personality change, wandering, difficulty with daily tasks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Late: loss of communication, incontinence, full dependence on care.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Progressive decline from early memory loss to late-stage dependence"
},
        },
        {
          id: "edxbtechsc-u9-l1-sp-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) List four early symptoms of dementia. (b) Describe the diagnostic process. (c) Explain why blood tests are important. (d) State what brain imaging can show. (e) Explain how family members contribute to diagnosis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Dementia diagnosis",
                              "statement": "History, cognitive tests, blood tests, imaging, family input."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Any four: memory loss, word-finding, disorientation, complex task difficulty, mood changes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) History, cognitive assessment, physical exam, blood tests, brain imaging.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Rule out reversible causes like B12 deficiency or thyroid problems.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Shows brain atrophy, vascular changes, tumours or other structural abnormalities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Provide collateral history of changes over time that person may not recall.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Diagnosis combines clinical assessment, tests and family history to confirm and type dementia."
},
        },
        {
          id: "edxbtechsc-u9-l1-sp-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A family reports their mother has become increasingly confused over six months, forgets recent conversations, and has got lost twice. (a) Identify likely stage of dementia. (b) Describe three symptoms consistent with this. (c) Explain how progression might differ if vascular dementia were the cause. (d) State two ways early diagnosis would benefit the family.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Recognising dementia progression",
                              "statement": "Gradual memory loss and disorientation suggest early-to-moderate stage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Early-to-moderate stage dementia.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Three symptoms: recent memory loss, confusion, disorientation, getting lost.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(c) Vascular would show sudden onset and stepwise decline after strokes rather than gradual worsening.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(d) Two benefits: access to treatment/support, plan for future, rule out reversible causes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Early-to-moderate dementia; vascular would be stepwise, Alzheimer's gradual."
},
        },
        {
          id: "edxbtechsc-u9-l1-sp-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss the symptoms, progression and diagnosis of dementia. Your answer should cover: (a) early symptoms; (b) how symptoms progress; (c) differences in progression between Alzheimer's and vascular dementia; (d) the diagnostic process; (e) why blood tests are needed; (f) the role of brain imaging; (g) benefits of early diagnosis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Dementia symptoms and diagnosis",
                              "statement": "Progressive decline diagnosed through assessment, tests and imaging."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Early symptoms: memory loss, word-finding, disorientation, complex task difficulty.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Progression to confusion, personality change, wandering, incontinence, dependence.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Alzheimer's gradual; vascular stepwise after strokes.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(d) Diagnostic process: history, cognitive tests, physical exam, blood tests, imaging.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Blood tests exclude reversible causes (B12, thyroid).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Imaging shows atrophy, vascular damage, tumours.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Early diagnosis enables treatment, planning and support.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Dementia progresses from memory loss to dependence; diagnosis is multi-modal and enables early support."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtechsc-u9-l1-notes",
      title: "Understanding Dementia — notes",
      summary: "Dementia is a syndrome of several brain diseases; Alzheimer's is most common, vascular is stepwise, LBD has hallucinations.",
      sections: [
        { heading: "Types", body: "Alzheimer's (60-70%), vascular, Lewy body, frontotemporal — each with distinct pathology." },
        { heading: "Symptoms", body: "Progress from memory loss and word-finding problems to confusion, wandering and dependence." },
        { heading: "Diagnosis", body: "History + cognitive tests + blood tests (exclude reversible causes) + brain imaging." },
      ],
    },
  ],
};
