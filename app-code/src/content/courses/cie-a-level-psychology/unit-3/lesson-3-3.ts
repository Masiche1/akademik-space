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
                              "text": "Gap between independent and assisted performance"
                    },
                    {
                              "id": "b",
                              "text": "A memory stage"
                    },
                    {
                              "id": "c",
                              "text": "A type of attachment"
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
