import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "appsych-u2-lesson-2-1",
  code: "2-1",
  title: "Cognitive Development",
  goal: "I CAN explain Piaget's stages and Vygotsky's sociocultural theory.",
  standards: ["Unit 4"],
  vocabulary: [
    { term: "Piaget's stages", definition: "Sensorimotor (0-2), Preoperational (2-7), Concrete operational (7-11), Formal operational (11+)." },
    { term: "Assimilation", definition: "Fitting new information into existing schemas." },
    { term: "Accommodation", definition: "Modifying schemas to fit new information." },
    { term: "Object permanence", definition: "Understanding objects exist when out of sight — achieved in sensorimotor stage." },
    { term: "Conservation", definition: "Understanding quantity stays same despite appearance changes — concrete operational stage." },
    { term: "Vygotsky's ZPD", definition: "Zone of proximal development — gap between independent and guided performance." },
  ],
  concepts: [
    {
      id: "appsych-u2-cognitive-development",
      title: "How thinking develops",
      skill: "Compare Piaget's stages and Vygotsky's sociocultural approach.",
      lesson: {
        sections: [
          {
            heading: "Piaget",
            body: "Children progress through stages as schemas develop; assimilation/accommodation drive learning; stages are universal and age-graded.",
          },
          {
            heading: "Vygotsky",
            body: "Cognitive development is socially mediated — language and culture shape thinking; ZPD emphasizes guided learning within reach.",
          },
        ],
        keyFormulas: [
          { name: "Piaget stages", statement: "Sensorimotor → Preoperational → Concrete → Formal" },
          { name: "Piaget processes", statement: "Assimilation (fit in) / Accommodation (adjust)" },
        ],
        workedExample: {
          problem: "Why do children under 7 fail conservation tasks?",
          solution: "Preoperational children focus on appearance (taller glass = more water) rather than logic — lacking reversible thinking needed for conservation, achieved in concrete operational stage.",
        },
      },
      questions: [
        {
          id: "appsych-u2-cognitive-development-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Object permanence is achieved in Piaget's ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "preoperational stage"
                    },
                    {
                              "id": "b",
                              "text": "sensorimotor stage"
                    },
                    {
                              "id": "c",
                              "text": "concrete operational stage"
                    },
                    {
                              "id": "d",
                              "text": "formal operational stage"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Object permanence",
                              "statement": "Understanding objects exist when unseen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Object permanence develops during the sensorimotor stage (0-2 years) — infants learn objects persist when out of sight.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Sensorimotor stage",
          "commonErrors": [
                    "Confusing with conservation (concrete operational)."
          ]
},
        },
        {
          id: "appsych-u2-cognitive-development-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Vygotsky's Zone of Proximal Development refers to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "what children can do independently"
                    },
                    {
                              "id": "b",
                              "text": "the gap between independent and guided performance"
                    },
                    {
                              "id": "c",
                              "text": "the age range for each Piaget stage"
                    },
                    {
                              "id": "d",
                              "text": "children's natural abilities"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ZPD",
                              "statement": "Gap between solo and assisted performance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ZPD is the range between what a child can do alone and what they can do with guidance — optimal learning happens within this zone via scaffolding.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It emphasizes social context in cognitive development, unlike Piaget's individual focus.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Guided performance gap",
          "commonErrors": [
                    "Confusing with Piaget's stages."
          ]
},
        },
        {
          id: "appsych-u2-cognitive-development-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Piaget's formal operational stage begins around age 11. If a child is 13, which stage should they typically be in? Enter the stage number (4 for formal).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Stage #",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Stage identification",
                              "statement": "Formal operational = stage 4 (age 11+)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A 13-year-old is typically in the formal operational stage (stage 4) — capable of abstract reasoning and hypothetical thinking.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $4$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "4",
          "commonErrors": [
                    "Counting stages wrong — formal is 4th stage."
          ]
},
        },
        {
          id: "appsych-u2-cognitive-development-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare Piaget's and Vygotsky's theories of cognitive development. What does each emphasize?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Developmental theories",
                              "statement": "Individual stages vs. social mediation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Piaget: universal, age-graded stages driven by individual interaction with environment; children construct knowledge through assimilation/accommodation; development precedes learning.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Vygotsky: development is socially and culturally mediated; language is the primary tool; learning precedes development within ZPD; scaffolding by more knowledgeable others drives growth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Key difference: Piaget saw children as little scientists discovering independently; Vygotsky saw them as apprentices learning through social interaction.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Piaget: individual stages; Vygotsky: social/cultural mediation",
          "commonErrors": [
                    "Treating them as identical — they emphasize different drivers."
          ]
},
        },
        {
          id: "appsych-u2-cognitive-development-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate Piaget's stage theory: what evidence supports it and what challenges it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Piaget's legacy",
                              "statement": "Support and criticism."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Support: children do show stage-like progressions; object permanence and conservation tasks produce consistent age patterns; children actively construct knowledge rather than passively receive.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Challenges: stages may be less discrete than proposed — children show mixed abilities; cultural variation affects timing (some cultures develop certain skills earlier); Vygotsky's social learning adds dimension Piaget missed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Modern view: development is more continuous and culturally variable than Piaget's rigid stages — his core insight (children construct knowledge actively) remains influential.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: Piaget's stages are useful heuristic but oversimplified — development is more gradual and culturally influenced than his model suggests.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Piaget's stages are heuristic but oversimplified — development is more continuous",
          "commonErrors": [
                    "Accepting stages as rigid or dismissing Piaget entirely — the truth is nuanced."
          ]
},
        },
      ],
    },
  ],
};
