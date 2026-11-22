import type { Lesson } from "../../../types.ts";

export const lesson732: Lesson = {
  id: "ciealpsy-u3-lesson-3-2",
  code: "3-2",
  title: "Development: Piaget's Theory of Cognitive Development",
  goal: "I CAN explain Piaget's stages of cognitive development.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 3: development"],
  
  vocabulary: [
    { term: "Schema", definition: "Mental framework for organising knowledge." },
    { term: "Assimilation", definition: "Fitting new info into existing schema." },
    { term: "Accommodation", definition: "Changing schema to fit new info." },
    { term: "Conservation", definition: "Understanding quantity stays same despite appearance." },
    { term: "Egocentrism", definition: "Inability to see others' perspectives." },
    { term: "Object permanence", definition: "Understanding objects exist when out of sight." },
  ],
  concepts: [
    {
      id: "ciealpsy-u3-s2-piaget",
      title: "Piaget",
      skill: "Explain Piaget's stages.",
      lesson: {
        sections: [
          {
            heading: "Piaget's theory",
            body: "Children develop through stages. Schemas organise knowledge. Assimilation fits new info; accommodation changes schemas. Stages are universal, sequential.",
          },
          {
            heading: "Stages",
            body: "Sensorimotor (0-2): object permanence develops. Preoperational (2-7): egocentrism, no conservation. Concrete operational (7-11): conservation, logical thinking. Formal operational (11+): abstract, hypothetical thinking.",
          },
          {
            heading: "Evaluation",
            body: "Strengths: revolutionary, stimulated research. Weaknesses: underestimated children, stage overlap, culture bias.",
          },
        ],
        keyFormulas: [
          { name: "Sensorimotor", statement: "0-2 years" },
          { name: "Preoperational", statement: "2-7 years" },
          { name: "Concrete operational", statement: "7-11 years" },
        ],
        workedExample: {
          problem: "Explain why a 5-year-old fails conservation task.",
          solution: "Preoperational stage — can't understand that quantity stays same despite appearance change (centres on one dimension).",
        },
      },
      questions: [
        {
          id: "ciealpsy-u3-piag-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a schema in Piaget's theory?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A brain structure"
                    },
                    {
                              "id": "b",
                              "text": "A memory store"
                    },
                    {
                              "id": "c",
                              "text": "Mental framework for organising knowledge"
                    },
                    {
                              "id": "d",
                              "text": "A learning method"
                    }
          ],
          "correctChoiceId": "c"
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
                              "reasoning": "Schema = mental framework.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Mental framework"
},
        },
        {
          id: "ciealpsy-u3-piag-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between assimilation and accommodation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Assimilation/accommodation",
                              "statement": "Fit vs change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Assimilation: fit new info into existing schema.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Accommodation: change schema for new info.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Fit vs change schema"
},
        },
        {
          id: "ciealpsy-u3-piag-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are Piaget's stages of cognitive development?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Piaget stages",
                              "statement": "Four stages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sensorimotor, preoperational, concrete operational, formal operational.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Each has age range and characteristics.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sequential, universal development.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Four sequential stages"
},
        },
        {
          id: "ciealpsy-u3-piag-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define schema, assimilation, accommodation, conservation, egocentrism, object permanence. (b) What is schema? (c) What is assimilation? (d) What is accommodation? (e) What are Piaget's stages? (f) What is conservation? (g) What is egocentrism? (h) Evaluate Piaget's theory.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Piaget",
                              "statement": "Cognitive development."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Mental framework.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Fit into schema.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Change schema.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Four stages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Quantity understanding.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Others' perspective.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Revolutionary but underestimated children.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Piaget analysis."
},
        },
        {
          id: "ciealpsy-u3-piag-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Assimilation in Piaget's theory means:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Forgetting old schemas"
                    },
                    {
                              "id": "b",
                              "text": "Changing a schema to fit new information"
                    },
                    {
                              "id": "c",
                              "text": "Fitting new information into an existing schema"
                    },
                    {
                              "id": "d",
                              "text": "Copying the behaviour of others"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Assimilation",
                              "statement": "Fit new info into schema."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Assimilation occurs when new information is interpreted using an existing mental framework.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Fitting new information into an existing schema"
},
        },
        {
          id: "ciealpsy-u3-piag-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many stages does Piaget's theory of cognitive development describe?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 4 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Piaget stages",
                              "statement": "Four stages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Piaget described four stages: sensorimotor, preoperational, concrete operational and formal operational.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4"
},
        },
        {
          id: "ciealpsy-u3-piag-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Object permanence is typically acquired during which stage?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Formal operational"
                    },
                    {
                              "id": "b",
                              "text": "Sensorimotor"
                    },
                    {
                              "id": "c",
                              "text": "Preoperational"
                    },
                    {
                              "id": "d",
                              "text": "Concrete operational"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Object permanence",
                              "statement": "Develops in sensorimotor stage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Object permanence develops during the sensorimotor stage (0-2 years).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Sensorimotor"
},
        },
        {
          id: "ciealpsy-u3-piag-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "At what age does the concrete operational stage begin, according to the lesson?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 7 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Concrete operational",
                              "statement": "7-11 years."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The concrete operational stage spans ages 7 to 11.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "7"
},
        },
        {
          id: "ciealpsy-u3-piag-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A child who insists that water poured into a differently shaped container has changed in amount is failing which concept?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Conservation"
                    },
                    {
                              "id": "b",
                              "text": "Accommodation"
                    },
                    {
                              "id": "c",
                              "text": "Egocentrism"
                    },
                    {
                              "id": "d",
                              "text": "Object permanence"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Conservation",
                              "statement": "Quantity unchanged by appearance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Failing to understand that quantity stays the same despite changes in appearance is a failure of conservation, typical of the preoperational stage.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Conservation"
},
        },
        {
          id: "ciealpsy-u3-piag-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "At what age does the formal operational stage begin?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 11 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Formal operational",
                              "statement": "11+ years."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The formal operational stage begins at around age 11.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "11"
},
        },
        {
          id: "ciealpsy-u3-piag-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which finding would most challenge Piaget's claim that children in the preoperational stage are egocentric?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A 3-year-old failing a conservation task"
                    },
                    {
                              "id": "b",
                              "text": "A 4-year-old correctly predicting what another person can and cannot see"
                    },
                    {
                              "id": "c",
                              "text": "A 5-year-old using animistic language"
                    },
                    {
                              "id": "d",
                              "text": "A 2-year-old searching for hidden objects"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Egocentrism",
                              "statement": "Cannot take others' perspectives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "If young children can accurately infer another person's viewpoint, this contradicts Piaget's claim of universal egocentrism in this stage.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Correctly predicting another's perspective"
},
        },
        {
          id: "ciealpsy-u3-piag-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many years does the preoperational stage span, from age 2 to age 7?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 5 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Preoperational",
                              "statement": "2-7 years."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The preoperational stage runs from age 2 to age 7, a span of 5 years.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5"
},
        },
        {
          id: "ciealpsy-u3-piag-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Piaget claimed that cognitive development is:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Identical in all children regardless of experience"
                    },
                    {
                              "id": "b",
                              "text": "Continuous with no distinct stages"
                    },
                    {
                              "id": "c",
                              "text": "Entirely learned through reinforcement"
                    },
                    {
                              "id": "d",
                              "text": "Universal and sequential through fixed stages"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Piaget's stages",
                              "statement": "Universal, sequential."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Piaget argued all children pass through the same stages in the same order, though at slightly different rates.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Universal and sequential through fixed stages"
},
        },
        {
          id: "ciealpsy-u3-piag-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between assimilation and accommodation, giving an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Assimilation/accommodation",
                              "statement": "Fit vs change schema."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Assimilation is fitting new information into an existing schema without changing it.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Accommodation is modifying an existing schema or creating a new one to fit new information.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: a child calls all four-legged animals 'dog' (assimilation) until seeing a horse forces a schema change (accommodation).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Assimilation fits; accommodation changes schemas"
},
        },
        {
          id: "ciealpsy-u3-piag-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the key characteristics of the preoperational stage.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Preoperational",
                              "statement": "2-7 years."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The stage occurs between ages 2 and 7.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Children show egocentrism — they struggle to see another person's perspective.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They lack conservation — they judge quantity by appearance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Symbolic thought emerges — language and pretend play develop rapidly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Egocentric, no conservation, symbolic thought"
},
        },
        {
          id: "ciealpsy-u3-piag-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define schema, assimilation, accommodation, conservation, egocentrism and object permanence. (b) What is a schema? (c) What is assimilation? (d) What is accommodation? (e) What are Piaget's four stages? (f) What is conservation? (g) What is egocentrism? (h) Evaluate Piaget's theory of cognitive development.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Piaget",
                              "statement": "Stages and evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Mental framework for organising knowledge.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Fitting new information into an existing schema.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Changing a schema to accommodate new information.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Sensorimotor, preoperational, concrete operational, formal operational.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Understanding that quantity is unchanged despite changes in appearance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Inability to see things from another person's perspective.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Revolutionary and stimulated research, but Piaget underestimated children's abilities, ignored cultural variation and stages may overlap.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Piaget's theory analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u3-piag-notes",
      title: "Piaget — notes",
      summary: "Four stages: sensorimotor→preoperational→concrete→formal operational.",
      sections: [
        { heading: "Key idea", body: "Cognitive development through sequential stages with schemas." },
        { heading: "Evaluation", body: "Revolutionary but underestimated children's abilities." },
      ],
    },
  ],
};
