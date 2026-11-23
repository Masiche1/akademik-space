import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "edxbtechsc-u10-lesson-10-2",
  code: "10-2",
  title: "Autism Spectrum Condition",
  goal: "I CAN describe autism, its characteristics and support strategies.",
  standards: ["BTEC L3 National Health and Social Care — Unit 10: Learning Disability and Autism (extended certificate)"],
  
  vocabulary: [
    { term: "Autism", definition: "A developmental condition affecting communication, social interaction and behaviour, existing on a spectrum." },
    { term: "ASD", definition: "Autism Spectrum Disorder — clinical diagnosis on the autism spectrum." },
    { term: "Triad of impairments", definition: "The three areas affected: social interaction, communication, and flexible thinking/behaviour." },
    { term: "Sensory processing", definition: "How the brain interprets sensory information — often atypical in autism, causing overload or seeking." },
    { term: "Special interests", definition: "Intense, focused interests common in autism that can be channelled positively." },
    { term: "Social stories", definition: "Short stories explaining social situations to help autistic people understand expectations." },
  ],
  concepts: [
    {
      id: "edxbtechsc-u10-l2-characteristics",
      title: "Characteristics of Autism",
      skill: "Describe the characteristics of autism across the triad of impairments and sensory processing.",
      lesson: {
        sections: [
          {
            heading: "The triad of impairments",
            body: "Autism affects three areas (the **triad**): **social interaction** (difficulty reading social cues, maintaining relationships, eye contact), **communication** (delayed speech, literal understanding, echolalia), and **flexible thinking/behaviour** (insistence on routine, repetitive behaviours, difficulty with change). Presentation varies widely — hence 'spectrum'.",
          },
          {
            heading: "Sensory processing and strengths",
            body: "Many autistic people have **atypical sensory processing** — hypersensitivity (overwhelm from noise, light, touch) or hyposensitivity (seeking intense sensory input). This can cause distress or meltdowns. Strengths often include **attention to detail**, **honesty**, **loyalty**, **special interests**, **pattern recognition** and **systematic thinking**. Many autistic people also have co-occurring conditions (anxiety, ADHD, epilepsy, learning disability).",
          },
        ],
        keyFormulas: [
          { name: "Triad of impairments", statement: "Social interaction + communication + flexible thinking/behaviour." },
          { name: "Sensory processing", statement: "Hypersensitivity (overwhelm) or hyposensitivity (seeking)." },
          { name: "Spectrum", statement: "Wide variation in presentation and support needs." },
        ],
        workedExample: {
          problem: "An autistic child covers their ears and runs out during a noisy assembly. Explain what is happening.",
          solution: "The child is experiencing sensory overload — hypersensitivity to noise overwhelms them. Support includes warning of loud events, allowing ear defenders, and having a quiet space to retreat to.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u10-l2-ch-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 'triad of impairments' in autism refers to difficulties with:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hearing, seeing and walking"
                    },
                    {
                              "id": "b",
                              "text": "Social interaction, communication and flexible thinking/behaviour"
                    },
                    {
                              "id": "c",
                              "text": "Reading, writing and maths"
                    },
                    {
                              "id": "d",
                              "text": "Eating, sleeping and toileting"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Triad of impairments",
                              "statement": "Social interaction, communication, flexible thinking/behaviour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Triad = social interaction + communication + flexible thinking.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** — social, communication, flexible thinking"
},
        },
        {
          id: "edxbtechsc-u10-l2-ch-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define sensory processing difficulties in autism.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sensory processing",
                              "statement": "Atypical interpretation of sensory input causing overload or seeking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Brain interprets sensory info atypically — hypersensitivity (overwhelm) or hyposensitivity (seeking).",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Atypical sensory interpretation — hypersensitivity or hyposensitivity"
},
        },
        {
          id: "edxbtechsc-u10-l2-ch-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three strengths commonly associated with autism.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Autism strengths",
                              "statement": "Attention to detail, honesty, special interests, pattern recognition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Attention to detail and pattern recognition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Honesty, loyalty and directness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Deep special interests and systematic thinking.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Attention to detail, honesty, special interests, pattern recognition."
},
        },
        {
          id: "edxbtechsc-u10-l2-ch-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define autism. (b) Describe the triad of impairments. (c) Explain sensory processing difficulties. (d) Give two strengths associated with autism. (e) Explain why autism is described as a 'spectrum'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Autism",
                              "statement": "Developmental condition affecting social interaction, communication and behaviour on a spectrum."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Developmental condition affecting communication, social interaction and behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Triad: social interaction, communication, flexible thinking/behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Atypical sensory processing — hypersensitivity or hyposensitivity causing distress or seeking.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Two strengths: attention to detail, honesty, special interests, pattern recognition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Wide variation in presentation and support needs — hence 'spectrum'.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Autism is a spectrum condition affecting the triad plus sensory processing, with individual strengths."
},
        },
        {
          id: "edxbtechsc-u10-l2-ch-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An autistic adult becomes distressed in a busy supermarket, covers their ears and starts rocking. (a) Identify likely cause. (b) Explain the sensory experience. (c) Describe three support strategies. (d) Explain how special interests could help in this situation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Supporting sensory needs",
                              "statement": "Reduce sensory load, provide quiet space, use calming strategies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Sensory overload — hypersensitivity to noise, lights, crowds.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Brain overwhelmed by sensory input — distress behaviours are coping mechanisms.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(c) Three strategies: ear defenders, quiet space, go at quieter times, visual supports, calm reassurance.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Special interest could distract (e.g. counting items, focusing on a task) or motivate visit.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Sensory overload needs reduced stimulation, quiet space and calming strategies."
},
        },
        {
          id: "edxbtechsc-u10-l2-ch-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss the characteristics of autism. Your answer should cover: (a) the definition; (b) the triad of impairments; (c) sensory processing; (d) strengths; (e) co-occurring conditions; (f) why 'spectrum' is accurate; (g) how understanding characteristics informs support.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Autism characteristics",
                              "statement": "Triad of impairments + sensory differences on a spectrum with strengths."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Developmental condition affecting communication, social interaction and behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Triad: social interaction, communication, flexible thinking/behaviour.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Sensory processing: hypersensitivity (overwhelm) or hyposensitivity (seeking).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Strengths: attention to detail, honesty, special interests, pattern recognition.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(e) Co-occurring: anxiety, ADHD, epilepsy, learning disability common.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Wide variation in presentation and needs → 'spectrum'.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(g) Understanding characteristics → tailored support (sensory, communication, routine).",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Autism is a spectrum condition — triad impairments + sensory differences + strengths require individualised support."
},
        },
      ],
    },
    {
      id: "edxbtechsc-u10-l2-support",
      title: "Assessment, Diagnosis and Support",
      skill: "Describe autism assessment, diagnosis and evidence-based support strategies.",
      lesson: {
        sections: [
          {
            heading: "Assessment and diagnosis",
            body: "Autism is diagnosed through **developmental history**, **observation**, **standardised assessments** (ADOS, ADI-R) and information from parents/carers. Diagnosis can occur in childhood or adulthood — many adults are diagnosed later after lifelong difficulties. Early diagnosis enables early intervention; late diagnosis can bring relief and explanation.",
          },
          {
            heading: "Support strategies",
            body: "Support is individualised: **communication supports** (visual schedules, PECS, AAC, Makaton), **structured environments** (predictability, clear routines, low sensory stimulation), **social skills training**, **sensory accommodations**, and **special interest integration**. Evidence-based approaches include **ABA** (applied behaviour analysis), **TEACCH** (structured teaching) and **social stories**. Person-centred planning respects the individual's goals and communication preferences.",
          },
        ],
        keyFormulas: [
          { name: "Diagnosis", statement: "Developmental history + observation + standardised assessments." },
          { name: "Support approaches", statement: "ABA, TEACCH, social stories, AAC, sensory accommodations." },
          { name: "Early intervention", statement: "Earlier diagnosis → earlier support → better outcomes." },
        ],
        workedExample: {
          problem: "A teacher wants to support an autistic student who struggles with transitions. Suggest three strategies.",
          solution: "Use visual schedules showing the day's routine, give advance warning of transitions ('in 5 minutes'), and provide a calm, predictable environment with clear expectations.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u10-l2-as-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Autism is diagnosed through:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A blood test"
                    },
                    {
                              "id": "b",
                              "text": "Developmental history, observation and standardised assessments"
                    },
                    {
                              "id": "c",
                              "text": "An X-ray"
                    },
                    {
                              "id": "d",
                              "text": "A genetic test only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Autism diagnosis",
                              "statement": "History + observation + standardised assessments."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Diagnosis is clinical — history, observation, ADOS/ADI-R assessments.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** — history, observation, assessments"
},
        },
        {
          id: "edxbtechsc-u10-l2-as-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two communication supports for autistic people.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Communication supports",
                              "statement": "Visual schedules, PECS, AAC, Makaton, social stories."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two: visual schedules, PECS, AAC devices, Makaton, social stories, picture exchange.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "e.g. visual schedules and AAC"
},
        },
        {
          id: "edxbtechsc-u10-l2-as-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain three support strategies for autistic people.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Autism support",
                              "statement": "Communication supports, structured environments, sensory accommodations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Communication supports: visual schedules, AAC, social stories.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Structured environment: predictable routines, clear expectations, low sensory load.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sensory accommodations: quiet spaces, ear defenders, controlled lighting.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Communication supports, structured environments, sensory accommodations."
},
        },
        {
          id: "edxbtechsc-u10-l2-as-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Describe the autism diagnostic process. (b) Explain why early diagnosis matters. (c) Name three communication supports. (d) Describe a structured environment. (e) Explain how special interests can be used positively.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Autism support",
                              "statement": "Early diagnosis enables early intervention; individualised support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Diagnostic process: developmental history, observation, standardised assessments (ADOS, ADI-R).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Early diagnosis enables early intervention and support → better outcomes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Three supports: visual schedules, PECS, AAC, Makaton, social stories.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Structured environment: predictable routines, clear expectations, low sensory stimulation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Special interests motivate learning, build confidence, and can be channelled into skills.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Early diagnosis enables tailored support through communication aids, structure and sensory accommodations."
},
        },
        {
          id: "edxbtechsc-u10-l2-as-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A care worker supports an autistic adult who communicates mainly through pictures and becomes distressed by unexpected changes. (a) Identify two support needs. (b) Describe how to use their communication system effectively. (c) Explain how to manage unexpected changes. (d) Suggest how their special interest could support engagement.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Supporting autistic adults",
                              "statement": "Respect communication, prepare for change, use interests positively."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Two needs: alternative communication (pictures/AAC), predictability for changes.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(b) Use pictures consistently, allow processing time, respond to attempts, don't force speech.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Manage changes: advance warning, visual schedules, prepare alternatives, stay calm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Special interest: use as reward, incorporate into activities, build confidence.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Respect communication preferences, prepare for change, use special interests positively."
},
        },
        {
          id: "edxbtechsc-u10-l2-as-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss assessment, diagnosis and support for autism. Your answer should cover: (a) the diagnostic process; (b) why early diagnosis matters; (c) communication supports; (d) structured environments; (e) sensory accommodations; (f) evidence-based approaches (ABA, TEACCH); (g) person-centred planning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Autism support",
                              "statement": "Individualised, person-centred, evidence-based support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Diagnosis: developmental history, observation, standardised assessments (ADOS, ADI-R).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Early diagnosis → early intervention → better outcomes.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(c) Communication supports: visual schedules, PECS, AAC, Makaton, social stories.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Structured environments: predictable routines, clear expectations, low sensory load.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Sensory accommodations: quiet spaces, ear defenders, controlled lighting.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Evidence-based: ABA (behaviour), TEACCH (structured teaching), social stories.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Person-centred: respect individual goals, communication preferences, strengths.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Autism support is individualised — communication aids, structure, sensory accommodations and person-centred planning."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtechsc-u10-l2-notes",
      title: "Autism Spectrum Condition — notes",
      summary: "Autism affects social interaction, communication and flexible thinking on a spectrum; support is individualised.",
      sections: [
        { heading: "Characteristics", body: "Triad of impairments + atypical sensory processing + individual strengths." },
        { heading: "Diagnosis", body: "Developmental history, observation, standardised assessments — can be childhood or adult." },
        { heading: "Support", body: "Communication aids, structured environments, sensory accommodations, special interests." },
      ],
    },
  ],
};
