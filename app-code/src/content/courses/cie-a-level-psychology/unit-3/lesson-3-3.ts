import type { Lesson } from "../../../types.ts";

export const lesson733: Lesson = {
  id: "ciealpsy-u3-lesson-3-3",
  code: "3-3",
  title: "Development: Vygotsky and Theory of Mind",
  goal: "I CAN explain Vygotsky's sociocultural theory and theory of mind.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 3: development"],
  
  vocabulary: [
    { term: "Zone of proximal development", definition: "Gap between what child can do alone vs with help." },
    { term: "Scaffolding", definition: "Support that helps child achieve more than alone." },
    { term: "Private speech", definition: "Self-talk guiding behaviour." },
    { term: "Theory of mind", definition: "Understanding others have different beliefs/knowledge." },
    { term: "False belief task", definition: "Test of theory of mind (Sally-Anne)." },
    { term: "Autism", definition: "Developmental disorder affecting social communication." },
  ],
  concepts: [
    {
      id: "ciealpsy-u3-s3-vygo",
      title: "Vygotsky & theory of mind",
      skill: "Explain sociocultural development and theory of mind.",
      lesson: {
        sections: [
          {
            heading: "Vygotsky",
            body: "Sociocultural: learning through social interaction. ZPD: gap between independent and assisted performance. Scaffolding: support enables achievement. Private speech: self-talk guides learning. More culturally aware than Piaget.",
          },
          {
            heading: "Theory of mind",
            body: "Understanding that others have different beliefs, desires, knowledge. Develops ~4 years (false belief tasks). Delayed in autism. Essential for social interaction, empathy, deception.",
          },
        ],
        keyFormulas: [
          { name: "ZPD", statement: "assisted vs independent" },
          { name: "Scaffolding", statement: "temporary support" },
          { name: "ToM", statement: "others' beliefs" },
        ],
        workedExample: {
          problem: "Compare Piaget vs Vygotsky on learning.",
          solution: "Piaget: individual discovery through stages. Vygotsky: social interaction, scaffolding, ZPD — more culturally aware.",
        },
      },
      questions: [
        {
          id: "ciealpsy-u3-vyg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the zone of proximal development?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A brain structure"
                    },
                    {
                              "id": "b",
                              "text": "A type of attachment"
                    },
                    {
                              "id": "c",
                              "text": "A memory stage"
                    },
                    {
                              "id": "d",
                              "text": "Gap between independent and assisted performance"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ZPD",
                              "statement": "Assisted vs independent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ZPD = gap between alone and with help.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Assisted vs independent gap"
},
        },
        {
          id: "ciealpsy-u3-vyg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is theory of mind?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ToM",
                              "statement": "Others' beliefs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understanding others have different beliefs/knowledge.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Develops ~4 years, delayed in autism.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Others' beliefs understanding"
},
        },
        {
          id: "ciealpsy-u3-vyg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is scaffolding in Vygotsky's theory?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Scaffolding",
                              "statement": "Support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Support helping child achieve more than alone.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Within ZPD, gradually removed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Enables learning beyond independent ability.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Temporary learning support"
},
        },
        {
          id: "ciealpsy-u3-vyg-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define ZPD, scaffolding, private speech, theory of mind, false belief task, autism. (b) What is ZPD? (c) What is theory of mind? (d) What is scaffolding? (e) How does Vygotsky differ from Piaget? (f) What is private speech? (g) How is theory of mind tested? (h) Compare Piaget vs Vygotsky.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Vygotsky/ToM",
                              "statement": "Development."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Assisted vs independent.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Others' beliefs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Temporary support.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Social vs individual.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Self-talk.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) False belief tasks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Piaget individual; Vygotsky social.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Vygotsky/ToM analysis."
},
        },
        {
          id: "ciealpsy-u3-vyg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The zone of proximal development refers to:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The child's full mental age"
                    },
                    {
                              "id": "b",
                              "text": "The gap between what a child can do alone and what they can do with help"
                    },
                    {
                              "id": "c",
                              "text": "A stage of attachment"
                    },
                    {
                              "id": "d",
                              "text": "A type of memory store"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ZPD",
                              "statement": "Assisted vs independent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The ZPD is the difference between a child's independent performance and what they can achieve with guidance.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Gap between independent and assisted performance"
},
        },
        {
          id: "ciealpsy-u3-vyg-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "At approximately what age does theory of mind typically develop?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 4, "tolerance": 1 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Theory of mind",
                              "statement": "Develops ~4 years."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Theory of mind typically emerges around age 4, as shown by success on false belief tasks.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4"
},
        },
        {
          id: "ciealpsy-u3-vyg-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Scaffolding in Vygotsky's theory is:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Temporary support that helps a child achieve more than they could alone"
                    },
                    {
                              "id": "b",
                              "text": "Genetic inheritance of skills"
                    },
                    {
                              "id": "c",
                              "text": "A permanent prop that the child relies on forever"
                    },
                    {
                              "id": "d",
                              "text": "A type of punishment"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Scaffolding",
                              "statement": "Temporary learning support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Scaffolding is support provided within the ZPD that is gradually withdrawn as the child's competence grows.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Temporary support within the ZPD"
},
        },
        {
          id: "ciealpsy-u3-vyg-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many key concepts of Vygotsky's sociocultural theory are described in the lesson?",
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
                              "name": "Vygotsky",
                              "statement": "ZPD, scaffolding, private speech."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lesson describes the ZPD, scaffolding and private speech.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "ciealpsy-u3-vyg-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Theory of mind is best described as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A stage in Piaget's model"
                    },
                    {
                              "id": "b",
                              "text": "A research method for studying infants"
                    },
                    {
                              "id": "c",
                              "text": "A theory about how memory works"
                    },
                    {
                              "id": "d",
                              "text": "Understanding that other people have beliefs and knowledge different from your own"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Theory of mind",
                              "statement": "Others' beliefs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Theory of mind is the ability to attribute mental states — beliefs, desires, knowledge — to oneself and others.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Understanding others' different beliefs"
},
        },
        {
          id: "ciealpsy-u3-vyg-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many functions of theory of mind are listed in the lesson?",
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
                              "name": "Theory of mind",
                              "statement": "Social interaction, empathy, deception."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Theory of mind supports social interaction, empathy and deception.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "ciealpsy-u3-vyg-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The Sally-Anne false belief task is used to test:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Theory of mind"
                    },
                    {
                              "id": "b",
                              "text": "Object permanence"
                    },
                    {
                              "id": "c",
                              "text": "Scaffolding"
                    },
                    {
                              "id": "d",
                              "text": "Conservation"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "False belief task",
                              "statement": "Tests theory of mind."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "False belief tasks assess whether a child understands that another person can hold a belief different from reality — a measure of theory of mind.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Theory of mind"
},
        },
        {
          id: "ciealpsy-u3-vyg-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "State the number of (a) key concepts of Vygotsky's theory described and (b) functions of theory of mind listed.",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 },
                    { "label": "b", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Vygotsky/ToM",
                              "statement": "3 concepts; 3 functions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) ZPD, scaffolding and private speech = 3.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Social interaction, empathy and deception = 3.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "3 and 3"
},
        },
        {
          id: "ciealpsy-u3-vyg-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Private speech in Vygotsky's theory refers to:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Inner speech that disappears immediately after infancy"
                    },
                    {
                              "id": "b",
                              "text": "A defence mechanism"
                    },
                    {
                              "id": "c",
                              "text": "Children's self-talk that guides their own behaviour and thinking"
                    },
                    {
                              "id": "d",
                              "text": "Speech used only to communicate with adults"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Private speech",
                              "statement": "Self-talk guiding behaviour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Private speech is the self-directed talk children use to plan and regulate their own actions; it later becomes inner speech.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Self-talk guiding behaviour"
},
        },
        {
          id: "ciealpsy-u3-vyg-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what is meant by scaffolding, using an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Scaffolding",
                              "statement": "Temporary support in ZPD."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Scaffolding is support that enables a child to achieve more than they could independently, within the ZPD.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: a parent guides a child through tying shoelaces step by step, then reduces help as the child improves.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The support is gradually withdrawn as competence grows, so the child internalises the skill.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Temporary support withdrawn as competence grows"
},
        },
        {
          id: "ciealpsy-u3-vyg-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare Piaget's and Vygotsky's views of cognitive development.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Piaget vs Vygotsky",
                              "statement": "Individual vs social."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Piaget saw development as individual discovery through universal, sequential stages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Vygotsky saw learning as fundamentally social, occurring through interaction within the ZPD with scaffolding.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Vygotsky's view is more culturally aware, recognising that culture shapes development.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Piaget underestimated children's abilities and overlooked the role of social guidance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Piaget individual/stages; Vygotsky social/ZPD"
},
        },
        {
          id: "ciealpsy-u3-vyg-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define zone of proximal development, scaffolding, private speech, theory of mind, false belief task and autism. (b) What is the ZPD? (c) What is theory of mind? (d) What is scaffolding? (e) How does Vygotsky's view differ from Piaget's? (f) What is private speech? (g) How is theory of mind tested? (h) Compare Piaget's and Vygotsky's approaches to development.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Vygotsky/ToM",
                              "statement": "Development and comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Gap between independent and assisted performance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Understanding that others have different beliefs and knowledge.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Temporary support enabling achievement beyond independent ability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Vygotsky emphasises social interaction and culture; Piaget emphasises individual stages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Self-talk that guides behaviour and later becomes inner speech.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Using false belief tasks such as Sally-Anne.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Piaget: individual discovery through stages; Vygotsky: social learning through scaffolding and the ZPD.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Vygotsky and theory of mind analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u3-vyg-notes",
      title: "Vygotsky & ToM — notes",
      summary: "ZPD=assisted learning; scaffolding=support. ToM=others' beliefs.",
      sections: [
        { heading: "Key idea", body: "Learning is social — scaffolding enables development." },
        { heading: "ToM", body: "Understanding others' mental states — key for social interaction." },
      ],
    },
  ],
};
