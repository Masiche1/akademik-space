import type { Lesson } from "../../../types.ts";

export const lesson722: Lesson = {
  id: "ciealpsy-u2-lesson-2-2",
  code: "2-2",
  title: "Approaches: Cognitive and Psychodynamic",
  goal: "I CAN explain cognitive and psychodynamic approaches.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 3: approaches"],
  
  vocabulary: [
    { term: "Cognitive approach", definition: "Psychology as mental processes — thinking, memory, perception." },
    { term: "Schema", definition: "Mental framework for organising knowledge." },
    { term: "Attribution", definition: "How we explain causes of behaviour." },
    { term: "Psychodynamic approach", definition: "Freud's theory — unconscious drives." },
    { term: "Id, ego, superego", definition: "Freud's personality structure." },
    { term: "Defence mechanism", definition: "Unconscious way of coping with anxiety." },
  ],
  concepts: [
    {
      id: "ciealpsy-u2-s2-cogpsy",
      title: "Cognitive & psychodynamic",
      skill: "Explain cognitive and psychodynamic approaches.",
      lesson: {
        sections: [
          {
            heading: "Cognitive approach",
            body: "Focus on mental processes: thinking, memory, perception, language. Uses computer analogy — input, processing, output. Schemas organise knowledge. Attributions explain behaviour. Cognitivism links to behaviourism (learning through experience).",
          },
          {
            heading: "Psychodynamic approach",
            body: "Freud: personality = id (pleasure), ego (reality), superego (morality). Unconscious drives behaviour. Defence mechanisms: repression, projection, displacement, rationalisation. Childhood experiences shape adult personality.",
          },
          {
            heading: "Comparison",
            body: "Cognitive: scientific, testable, but ignores emotions. Psychodynamic: holistic, explains unconscious, but unscientific, unfalsifiable.",
          },
        ],
        keyFormulas: [
          { name: "Cognitive", statement: "mental processes" },
          { name: "Psychodynamic", statement: "unconscious drives" },
          { name: "Defence", statement: "repression, projection" },
        ],
        workedExample: {
          problem: "Explain phobia from psychodynamic vs cognitive view.",
          solution: "Psychodynamic: repressed childhood fear → anxiety → defence. Cognitive: learned association + negative schema about feared object.",
        },
      },
      questions: [
        {
          id: "ciealpsy-u2-cog-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the cognitive approach?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Learned conditioning"
                    },
                    {
                              "id": "b",
                              "text": "Brain chemistry"
                    },
                    {
                              "id": "c",
                              "text": "Unconscious drives"
                    },
                    {
                              "id": "d",
                              "text": "Psychology as mental processes"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cognitive",
                              "statement": "Mental processes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cognitive = mental processes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Mental processes"
},
        },
        {
          id: "ciealpsy-u2-cog-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are id, ego and superego?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Id/ego/superego",
                              "statement": "Freud structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Id=pleasure, ego=reality, superego=morality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Conflict between them creates anxiety.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Pleasure/reality/morality"
},
        },
        {
          id: "ciealpsy-u2-cog-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a defence mechanism? Give examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Defence",
                              "statement": "Anxiety coping."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unconscious way of coping with anxiety.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Repression, projection, displacement, rationalisation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Protects ego from uncomfortable feelings.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Unconscious anxiety coping"
},
        },
        {
          id: "ciealpsy-u2-cog-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define cognitive approach, schema, attribution, psychodynamic, id/ego/superego, defence mechanism. (b) What is cognitive? (c) What is psychodynamic? (d) What is schema? (e) What is attribution? (f) What are defence mechanisms? (g) How does psychodynamic explain behaviour? (h) Evaluate cognitive vs psychodynamic approaches.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Cognitive/psycho",
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
                              "reasoning": "(b) Mental processes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Unconscious drives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Mental framework.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Behaviour explanation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Repression, projection etc.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Unconscious childhood drives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Cognitive testable; psycho holistic but unscientific.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cognitive/psychodynamic comparison."
},
        },
        {
          id: "ciealpsy-u2-cog-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the cognitive approach, a 'schema' is:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A mental framework for organising knowledge"
                    },
                    {
                              "id": "b",
                              "text": "A type of learning curve"
                    },
                    {
                              "id": "c",
                              "text": "A chemical messenger in the brain"
                    },
                    {
                              "id": "d",
                              "text": "An unconscious defence mechanism"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Schema",
                              "statement": "Mental framework."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Schemas are mental structures that organise knowledge and guide processing of new information.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Mental framework for organising knowledge"
},
        },
        {
          id: "ciealpsy-u2-cog-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many defence mechanisms are named in the psychodynamic approach?",
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
                              "name": "Defence mechanisms",
                              "statement": "Repression, projection, displacement, rationalisation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lesson names four defence mechanisms: repression, projection, displacement and rationalisation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4"
},
        },
        {
          id: "ciealpsy-u2-cog-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "According to Freud, the 'id' operates according to the:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pleasure principle"
                    },
                    {
                              "id": "b",
                              "text": "Reality principle"
                    },
                    {
                              "id": "c",
                              "text": "Learning principle"
                    },
                    {
                              "id": "d",
                              "text": "Morality principle"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Id",
                              "statement": "Pleasure principle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The id seeks immediate gratification of instinctual drives — the pleasure principle.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Pleasure principle"
},
        },
        {
          id: "ciealpsy-u2-cog-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many parts make up Freud's structural model of personality?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Id/ego/superego",
                              "statement": "Three structures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Freud's personality structure consists of the id, ego and superego.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "ciealpsy-u2-cog-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The cognitive approach uses which analogy to describe how mental processes operate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The computer — input, processing and output"
                    },
                    {
                              "id": "b",
                              "text": "The pyramid model"
                    },
                    {
                              "id": "c",
                              "text": "The hydraulic model"
                    },
                    {
                              "id": "d",
                              "text": "The clockwork model"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Computer analogy",
                              "statement": "Input, processing, output."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The cognitive approach likens the mind to a computer that takes in information, processes it and produces output.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "The computer analogy"
},
        },
        {
          id: "ciealpsy-u2-cog-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many mental processes does the cognitive approach focus on, according to the lesson?",
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
                              "name": "Cognitive approach",
                              "statement": "Thinking, memory, perception, language."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The cognitive approach focuses on thinking, memory, perception and language.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4"
},
        },
        {
          id: "ciealpsy-u2-cog-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A client unconsciously blames a colleague for their own shortcomings. This is best explained by which psychodynamic defence mechanism?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Classical conditioning"
                    },
                    {
                              "id": "b",
                              "text": "Projection"
                    },
                    {
                              "id": "c",
                              "text": "Rationalisation"
                    },
                    {
                              "id": "d",
                              "text": "Repression"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Projection",
                              "statement": "Attributing own feelings to others."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Attributing one's own unacceptable feelings or faults to someone else is projection.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Projection"
},
        },
        {
          id: "ciealpsy-u2-cog-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "State the number of (a) parts in Freud's structural model of personality and (b) defence mechanisms named in the lesson.",
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
                              "name": "Psychodynamic",
                              "statement": "3 structures; 4 mechanisms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Id, ego and superego = 3.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Repression, projection, displacement and rationalisation = 4.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "3 and 4"
},
        },
        {
          id: "ciealpsy-u2-cog-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which criticism is most often levelled at the psychodynamic approach?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It is unscientific and its concepts are difficult to falsify"
                    },
                    {
                              "id": "b",
                              "text": "It is too reductionist"
                    },
                    {
                              "id": "c",
                              "text": "It ignores the role of the unconscious"
                    },
                    {
                              "id": "d",
                              "text": "It relies only on animal studies"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Evaluation",
                              "statement": "Unscientific, unfalsifiable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Because unconscious processes cannot be directly observed or tested, the psychodynamic approach is criticised as unscientific and unfalsifiable.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Unscientific and unfalsifiable"
},
        },
        {
          id: "ciealpsy-u2-cog-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two defence mechanisms used by the ego to manage anxiety, and explain their purpose.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Defence mechanism",
                              "statement": "Unconscious anxiety coping."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names at least two defence mechanisms, e.g. repression and projection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains that they operate unconsciously to distort or redirect unacceptable thoughts and feelings.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Their purpose is to protect the ego from anxiety arising from conflict between id, ego and superego.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Unconscious mechanisms protecting the ego from anxiety"
},
        },
        {
          id: "ciealpsy-u2-cog-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare the cognitive and psychodynamic approaches to explaining behaviour.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Cognitive vs psychodynamic",
                              "statement": "Testable vs holistic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The cognitive approach focuses on mental processes such as thinking, memory and perception.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The psychodynamic approach focuses on unconscious drives and childhood experiences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cognitive psychology is scientific and testable but ignores emotions; psychodynamic psychology is holistic but unscientific.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both offer different levels of explanation — surface mental processes versus deep unconscious conflicts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cognitive is testable; psychodynamic is holistic but unfalsifiable"
},
        },
        {
          id: "ciealpsy-u2-cog-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define cognitive approach, schema, attribution, psychodynamic approach, id/ego/superego and defence mechanism. (b) What is the cognitive approach? (c) What is a schema? (d) What is attribution? (e) What are the id, ego and superego? (f) What are defence mechanisms? Give two examples. (g) How does the psychodynamic approach explain behaviour? (h) Evaluate the cognitive and psychodynamic approaches.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Cognitive/psycho",
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
                              "reasoning": "(b) Psychology as mental processes — thinking, memory, perception, language.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Mental framework for organising knowledge.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) How we explain the causes of behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Id = pleasure, ego = reality, superego = morality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Unconscious ways of coping with anxiety, e.g. repression and projection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Behaviour driven by unconscious conflicts shaped by childhood experiences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Cognitive is testable but ignores emotions; psychodynamic explains the unconscious but is unfalsifiable.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cognitive and psychodynamic approaches analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u2-cog-notes",
      title: "Cognitive & psychodynamic — notes",
      summary: "Cognitive=mental processes (testable); psychodynamic=unconscious (unfalsifiable).",
      sections: [
        { heading: "Key idea", body: "Cognitive is scientific; psychodynamic explains deeper but lacks testability." },
        { heading: "Freud", body: "Id/ego/superego conflict → anxiety → defence mechanisms." },
      ],
    },
  ],
};
