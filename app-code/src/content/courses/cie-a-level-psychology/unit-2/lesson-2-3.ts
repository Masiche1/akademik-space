import type { Lesson } from "../../../types.ts";

export const lesson723: Lesson = {
  id: "ciealpsy-u2-lesson-2-3",
  code: "2-3",
  title: "Psychopathology: Definitions and Phobias",
  goal: "I CAN define psychological abnormality and explain phobias.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 2: psychopathology"],
  
  vocabulary: [
    { term: "Abnormality", definition: "Behaviour deviating from norms." },
    { term: "Deviation from social norms", definition: "Behaviour violating social expectations." },
    { term: "Failure to function adequately", definition: "Inability to cope with daily life." },
    { term: "Statistical infrequency", definition: "Behaviour rare in population." },
    { term: "Phobia", definition: "Extreme irrational fear." },
    { term: "Two-process model", definition: "Mowrer's explanation of phobia acquisition." },
  ],
  concepts: [
    {
      id: "ciealpsy-u2-s3-psych",
      title: "Abnormality and phobias",
      skill: "Define abnormality and explain phobias.",
      lesson: {
        sections: [
          {
            heading: "Definitions of abnormality",
            body: "Deviation from social norms: behaviour violates expectations (culture-dependent). Failure to function: can't cope daily life (Rosenhan & Seligman). Statistical infrequency: rare behaviour (may be positive). Deviation from ideal mental health: Jahoda's criteria.",
          },
          {
            heading: "Phobias",
            body: "Specific phobia: irrational fear of object/situation. Agoraphobia: fear of open/public spaces. Social phobia: fear of social situations. Mowrer's two-process: classical conditioning (acquisition) + operant conditioning (maintenance via negative reinforcement).",
          },
        ],
        keyFormulas: [
          { name: "Phobia", statement: "irrational fear" },
          { name: "Two-process", statement: "classical + operant" },
          { name: "Negative reinforcement", statement: "avoids fear" },
        ],
        workedExample: {
          problem: "Explain how a dog phobia develops via two-process model.",
          solution: "Classical: dog bite → fear association. Operant: avoiding dogs reduces anxiety → negative reinforcement maintains phobia.",
        },
      },
      questions: [
        {
          id: "ciealpsy-u2-psy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a phobia?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A learning theory"
                    },
                    {
                              "id": "b",
                              "text": "Extreme irrational fear"
                    },
                    {
                              "id": "c",
                              "text": "A type of memory"
                    },
                    {
                              "id": "d",
                              "text": "A brain structure"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Phobia",
                              "statement": "Irrational fear."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Phobia = irrational fear.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Irrational fear"
},
        },
        {
          id: "ciealpsy-u2-psy-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the two-process model of phobia?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Two-process",
                              "statement": "Acquisition + maintenance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Classical conditioning: fear learned by association.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Operant: avoidance maintained by negative reinforcement.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Classical + operant"
},
        },
        {
          id: "ciealpsy-u2-psy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the main definitions of abnormality?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Abnormality",
                              "statement": "Definitions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Deviation from social norms, failure to function, statistical infrequency.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Each has strengths and limitations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Culture-dependent, subjective.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Norms, function, statistics"
},
        },
        {
          id: "ciealpsy-u2-psy-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define abnormality, deviation from norms, failure to function, statistical infrequency, phobia, two-process model. (b) What is phobia? (c) What is two-process model? (d) What are abnormality definitions? (e) What is specific phobia? (f) What is agoraphobia? (g) What is social phobia? (h) Evaluate definitions of abnormality.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Psychopathology",
                              "statement": "Phobias."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Irrational fear.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Classical + operant.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Norms, function, statistics.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Object/situation fear.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Open space fear.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Social situation fear.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Each has cultural/subjective issues.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Psychopathology analysis."
},
        },
        {
          id: "ciealpsy-u2-psy-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Deviation from social norms' as a definition of abnormality means:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Behaviour that is statistically rare"
                    },
                    {
                              "id": "b",
                              "text": "Behaviour that violates the expected standards of a particular society"
                    },
                    {
                              "id": "c",
                              "text": "Any behaviour that is unusual in childhood"
                    },
                    {
                              "id": "d",
                              "text": "Behaviour that only causes distress to the individual"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Deviation from norms",
                              "statement": "Violates social expectations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "This definition judges behaviour against the expectations of the society or culture the person lives in.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Behaviour violating social expectations"
},
        },
        {
          id: "ciealpsy-u2-psy-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many processes are combined in Mowrer's two-process model of phobia?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Two-process model",
                              "statement": "Classical + operant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The model combines classical conditioning (acquisition) with operant conditioning (maintenance).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealpsy-u2-psy-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Agoraphobia is best defined as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An irrational fear of social situations"
                    },
                    {
                              "id": "b",
                              "text": "An irrational fear of spiders"
                    },
                    {
                              "id": "c",
                              "text": "An irrational fear of open or public spaces"
                    },
                    {
                              "id": "d",
                              "text": "An irrational fear of injections"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Agoraphobia",
                              "statement": "Fear of open/public spaces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Agoraphobia is an irrational fear of open spaces, crowds or situations where escape might be difficult.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Fear of open or public spaces"
},
        },
        {
          id: "ciealpsy-u2-psy-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many types of phobia are described in the lesson?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Phobias",
                              "statement": "Specific, agora, social."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lesson describes specific phobia, agoraphobia and social phobia.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "ciealpsy-u2-psy-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the two-process model, a phobia is initially acquired through:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Operant conditioning alone"
                    },
                    {
                              "id": "b",
                              "text": "Sudden insight"
                    },
                    {
                              "id": "c",
                              "text": "Genetic transmission only"
                    },
                    {
                              "id": "d",
                              "text": "Classical conditioning — association between a neutral stimulus and a frightening event"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Two-process model",
                              "statement": "Classical = acquisition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The first process is classical conditioning, where a neutral stimulus becomes associated with a frightening unconditioned stimulus.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Classical conditioning"
},
        },
        {
          id: "ciealpsy-u2-psy-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many definitions of abnormality are presented in the lesson?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 4 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Abnormality",
                              "statement": "Norms, function, statistics, ideal health."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lesson presents deviation from social norms, failure to function adequately, statistical infrequency and deviation from ideal mental health.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4"
},
        },
        {
          id: "ciealpsy-u2-psy-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A person avoids all dogs because a previous dog bite was traumatic. Avoiding dogs reduces their anxiety, which in turn maintains the phobia. This illustrates:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Spontaneous recovery"
                    },
                    {
                              "id": "b",
                              "text": "Negative reinforcement maintaining the phobia through the operant process"
                    },
                    {
                              "id": "c",
                              "text": "Latent learning"
                    },
                    {
                              "id": "d",
                              "text": "Positive punishment"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Negative reinforcement",
                              "statement": "Avoidance reduces fear."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Because avoidance removes the anxiety, the behaviour is negatively reinforced and the phobia is maintained.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Negative reinforcement maintains the phobia"
},
        },
        {
          id: "ciealpsy-u2-psy-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "State the number of (a) types of phobia described and (b) definitions of abnormality presented.",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 },
                    { "label": "b", "answer": 4 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Psychopathology",
                              "statement": "3 phobia types; 4 definitions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Specific, agoraphobia and social phobia = 3.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Norms, functioning, statistical infrequency and ideal mental health = 4.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "3 and 4"
},
        },
        {
          id: "ciealpsy-u2-psy-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is a limitation of defining abnormality in terms of statistical infrequency?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It is too subjective to measure"
                    },
                    {
                              "id": "b",
                              "text": "It requires expensive brain scans"
                    },
                    {
                              "id": "c",
                              "text": "Rare behaviours can be positive or neutral rather than disordered"
                    },
                    {
                              "id": "d",
                              "text": "It ignores cultural differences entirely"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Statistical infrequency",
                              "statement": "Rarity does not equal disorder."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Statistical infrequency labels any rare behaviour as abnormal, but rare traits can be beneficial or neutral.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Rarity does not necessarily mean disorder"
},
        },
        {
          id: "ciealpsy-u2-psy-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a specific phobia might be acquired and maintained according to the two-process model.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Two-process model",
                              "statement": "Acquisition + maintenance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Classical conditioning pairs a neutral stimulus with a traumatic event, so the stimulus alone elicits fear.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The person begins to avoid the feared stimulus or similar stimuli.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Avoidance reduces anxiety, which negatively reinforces the avoidance and maintains the phobia.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Classical acquisition; avoidance maintained by negative reinforcement"
},
        },
        {
          id: "ciealpsy-u2-psy-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate the definition of abnormality as deviation from social norms.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Deviation from norms",
                              "statement": "Culture-dependent definition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It defines abnormality as behaviour that violates the expectations of the person's society.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Strength: it is relatively easy to observe and reflects what a culture considers acceptable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Weakness: norms differ between cultures and over time, so behaviour judged abnormal in one society may be normal in another.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It also risks labelling minority groups as disordered for merely differing from the majority.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Culture-dependent and risks labelling minorities"
},
        },
        {
          id: "ciealpsy-u2-psy-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define abnormality, deviation from social norms, failure to function adequately, statistical infrequency, phobia and the two-process model. (b) What is abnormality? (c) What is deviation from social norms? (d) What is failure to function adequately? (e) What is statistical infrequency? (f) What are the three types of phobia? (g) Explain the two-process model of phobia. (h) Evaluate the definitions of abnormality.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Psychopathology",
                              "statement": "Definitions and phobias."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Behaviour deviating from accepted norms or expectations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Behaviour that violates the standards of a society.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Inability to cope with the demands of everyday life.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Behaviour that is rare in the general population.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Specific phobia, agoraphobia and social phobia.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Classical conditioning acquires the fear; operant conditioning maintains it through negatively reinforced avoidance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Each definition has strengths but is culture-dependent, subjective or confuses rarity with disorder.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Abnormality and phobias analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u2-psy-notes",
      title: "Phobias — notes",
      summary: "Phobia=irrational fear. Two-process: classical acquisition + operant maintenance.",
      sections: [
        { heading: "Key idea", body: "Phobias learned through conditioning and maintained by avoidance." },
        { heading: "Definitions", body: "Abnormality defined variously — all have limitations." },
      ],
    },
  ],
};
