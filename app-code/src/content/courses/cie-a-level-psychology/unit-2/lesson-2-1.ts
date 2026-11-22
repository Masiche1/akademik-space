import type { Lesson } from "../../../types.ts";

export const lesson721: Lesson = {
  id: "ciealpsy-u2-lesson-2-1",
  code: "2-1",
  title: "Approaches: Biological and Behaviourist",
  goal: "I CAN compare biological and behaviourist approaches to psychology.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 3: approaches"],
  
  vocabulary: [
    { term: "Biological approach", definition: "Psychology as product of brain, genes, neurotransmitters." },
    { term: "Behaviourist approach", definition: "Psychology as learned behaviour through conditioning." },
    { term: "Classical conditioning", definition: "Learning by association (Pavlov)." },
    { term: "Operant conditioning", definition: "Learning by consequences (Skinner)." },
    { term: "Neurotransmitter", definition: "Chemical messenger in brain." },
    { term: "Genotype", definition: "Genetic makeup." },
  ],
  concepts: [
    {
      id: "ciealpsy-u2-s1-approach",
      title: "Biological & behaviourist",
      skill: "Compare major psychological approaches.",
      lesson: {
        sections: [
          {
            heading: "Biological approach",
            body: "Behaviour explained by biology: genes, brain structure, neurotransmitters. Uses brain scans, twin studies, case studies. Reductionist, deterministic. Treatments: drugs, surgery.",
          },
          {
            heading: "Behaviourist approach",
            body: "Behaviour learned through conditioning. Classical: association (Pavlov's dogs). Operant: reinforcement/punishment (Skinner's box). Behaviour therapy. Deterministic, reductionist.",
          },
          {
            heading: "Comparison",
            body: "Both reductionist and deterministic. Biological explains internal processes; behaviourist explains observable behaviour only. Both ignore cognition/feelings.",
          },
        ],
        keyFormulas: [
          { name: "Biological", statement: "genes, brain, chemistry" },
          { name: "Behaviourist", statement: "conditioning" },
          { name: "Both", statement: "deterministic, reductionist" },
        ],
        workedExample: {
          problem: "Explain depression from biological vs behaviourist perspective.",
          solution: "Biological: serotonin imbalance. Behaviourist: learned helplessness through negative reinforcement patterns.",
        },
      },
      questions: [
        {
          id: "ciealpsy-u2-appro-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the biological approach?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Focus on thoughts"
                    },
                    {
                              "id": "b",
                              "text": "Focus on free will"
                    },
                    {
                              "id": "c",
                              "text": "Psychology as product of brain, genes, chemistry"
                    },
                    {
                              "id": "d",
                              "text": "Behaviour learned by conditioning"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Biological",
                              "statement": "Brain/genes/chemistry."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Biological = biology explains behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Brain/genes/chemistry"
},
        },
        {
          id: "ciealpsy-u2-appro-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is operant conditioning?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Operant",
                              "statement": "Consequences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Learning by consequences (Skinner).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reinforcement increases, punishment decreases behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Learning by consequences"
},
        },
        {
          id: "ciealpsy-u2-appro-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare biological and behaviourist approaches.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Bio vs Behaviourist",
                              "statement": "Nature vs nurture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Biological: internal processes (genes, brain).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Behaviourist: external learning (conditioning).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both reductionist, deterministic.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Internal vs external explanation"
},
        },
        {
          id: "ciealpsy-u2-appro-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define biological approach, behaviourist approach, classical conditioning, operant conditioning, neurotransmitter, genotype. (b) What is biological? (c) What is behaviourist? (d) What is classical conditioning? (e) What is operant conditioning? (f) What methods does biological use? (g) What are strengths/weaknesses of each? (h) Compare how each explains depression.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Approaches",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Brain/genes/chemistry.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Conditioning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Association learning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Consequence learning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Scans, twins, cases.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Both reductionist/deterministic.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Serotonin vs learned helplessness.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Approach comparison."
},
        },
        {
          id: "ciealpsy-u2-appro-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which research methods are associated with the biological approach?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Brain scans, twin studies and case studies"
                    },
                    {
                              "id": "b",
                              "text": "Naturalistic observation only"
                    },
                    {
                              "id": "c",
                              "text": "Only self-report questionnaires"
                    },
                    {
                              "id": "d",
                              "text": "Free association and dream analysis"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Biological approach",
                              "statement": "Scans, twins, cases."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The biological approach uses brain imaging, twin studies and case studies to investigate biological influences on behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Brain scans, twin studies and case studies"
},
        },
        {
          id: "ciealpsy-u2-appro-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many types of conditioning does the behaviourist approach describe?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Conditioning",
                              "statement": "Classical and operant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The behaviourist approach describes classical conditioning and operant conditioning.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealpsy-u2-appro-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Classical conditioning, as demonstrated by Pavlov, involves learning through:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Association between two stimuli"
                    },
                    {
                              "id": "b",
                              "text": "Genetic inheritance"
                    },
                    {
                              "id": "c",
                              "text": "Rewards and punishments only"
                    },
                    {
                              "id": "d",
                              "text": "Sudden insight"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Classical conditioning",
                              "statement": "Learning by association."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In classical conditioning a neutral stimulus becomes associated with an unconditioned stimulus so that it elicits the same response.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Association between stimuli"
},
        },
        {
          id: "ciealpsy-u2-appro-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many types of consequence does operant conditioning use to modify behaviour?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Operant conditioning",
                              "statement": "Reinforcement and punishment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Operant conditioning uses reinforcement (increasing behaviour) and punishment (decreasing behaviour).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealpsy-u2-appro-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which assumption is shared by BOTH the biological and behaviourist approaches?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "They both focus on mental processes"
                    },
                    {
                              "id": "b",
                              "text": "They both emphasise free will"
                    },
                    {
                              "id": "c",
                              "text": "They both reject scientific methods"
                    },
                    {
                              "id": "d",
                              "text": "They are both deterministic and reductionist"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Shared assumptions",
                              "statement": "Deterministic, reductionist."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both approaches assume behaviour is caused by factors beyond conscious control (deterministic) and can be reduced to simpler components.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Both deterministic and reductionist"
},
        },
        {
          id: "ciealpsy-u2-appro-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many treatments for psychological disorders are mentioned from a biological perspective?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Biological approach",
                              "statement": "Drugs and surgery."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The biological approach leads to treatments such as drug therapy and, in severe cases, surgery.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealpsy-u2-appro-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A therapist gives a client a reward each time they successfully approach a feared spider without anxiety. This technique is most consistent with:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Free association"
                    },
                    {
                              "id": "b",
                              "text": "Biological determinism"
                    },
                    {
                              "id": "c",
                              "text": "The behaviourist approach using operant conditioning"
                    },
                    {
                              "id": "d",
                              "text": "The psychodynamic approach"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Behaviour therapy",
                              "statement": "Reinforcement changes behaviour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rewarding desired behaviour is operant conditioning, a core behaviourist treatment method.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Behaviourist approach using operant conditioning"
},
        },
        {
          id: "ciealpsy-u2-appro-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "State the number of (a) types of conditioning described and (b) research methods used by the biological approach.",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 },
                    { "label": "b", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Approaches",
                              "statement": "2 conditioning types; 3 biological methods."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Classical and operant conditioning = 2.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Brain scans, twin studies and case studies = 3.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "2 and 3"
},
        },
        {
          id: "ciealpsy-u2-appro-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A psychologist explains depression as caused by an imbalance of serotonin in the brain. This explanation reflects which approach?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The biological approach"
                    },
                    {
                              "id": "b",
                              "text": "The psychodynamic approach"
                    },
                    {
                              "id": "c",
                              "text": "The behaviourist approach"
                    },
                    {
                              "id": "d",
                              "text": "The humanistic approach"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Biological explanation",
                              "statement": "Neurotransmitter imbalance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explaining behaviour through brain chemistry such as serotonin is the biological approach.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "The biological approach"
},
        },
        {
          id: "ciealpsy-u2-appro-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how classical conditioning can account for the acquisition of a phobia.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Classical conditioning",
                              "statement": "Neutral stimulus paired with fear."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A neutral stimulus (e.g. a dog) is repeatedly paired with an unconditioned stimulus that naturally causes fear (e.g. a painful bite).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Through association, the previously neutral stimulus alone comes to elicit the fear response as a conditioned response.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Generalisation can extend the fear to similar stimuli, producing a phobia.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Neutral stimulus becomes associated with fear"
},
        },
        {
          id: "ciealpsy-u2-appro-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare the biological and behaviourist explanations of depression.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Depression explanations",
                              "statement": "Chemical vs learned."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The biological approach explains depression through neurotransmitter imbalances such as low serotonin.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The behaviourist approach explains depression through learned patterns such as learned helplessness from uncontrollable negative experiences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both approaches are deterministic and reductionist.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The behaviourist view ignores internal processes, while the biological view reduces depression to chemistry alone.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Serotonin imbalance vs learned helplessness"
},
        },
        {
          id: "ciealpsy-u2-appro-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define biological approach, behaviourist approach, classical conditioning, operant conditioning, neurotransmitter and genotype. (b) What is the biological approach? (c) What is the behaviourist approach? (d) What is classical conditioning? (e) What is operant conditioning? (f) What research methods does the biological approach use? (g) What treatments arise from the biological approach? (h) Evaluate the strengths and weaknesses of the biological and behaviourist approaches.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Approaches",
                              "statement": "Comparison and evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Behaviour explained by brain, genes and chemistry.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Behaviour learned through conditioning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Learning by association between stimuli.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Learning by consequences — reinforcement and punishment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Brain scans, twin studies and case studies.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Drug therapy and, in severe cases, surgery.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Both are reductionist and deterministic; biological explains internal processes, behaviourist explains observable learning, but both ignore cognition and free will.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Biological and behaviourist approaches analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u2-appro-notes",
      title: "Bio & behaviourist — notes",
      summary: "Biological=internal processes; behaviourist=learned conditioning. Both reductionist.",
      sections: [
        { heading: "Key idea", body: "Two contrasting explanations: nature (biology) vs nurture (learning)." },
        { heading: "Shared limits", body: "Both ignore cognition, free will, subjective experience." },
      ],
    },
  ],
};
