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
                              "text": "Extreme irrational fear"
                    },
                    {
                              "id": "b",
                              "text": "A type of memory"
                    },
                    {
                              "id": "c",
                              "text": "A learning theory"
                    },
                    {
                              "id": "d",
                              "text": "A brain structure"
                    }
          ],
          "correctChoiceId": "a"
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
