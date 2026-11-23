import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "appsych-u2-lesson-2-2",
  code: "2-2",
  title: "Social and Moral Development",
  goal: "I CAN explain attachment, Kohlberg's moral stages, and Erikson's psychosocial theory.",
  standards: ["Unit 4"],
  vocabulary: [
    { term: "Attachment", definition: "Emotional bond between infant and caregiver; styles: secure, anxious, avoidant, disorganized." },
    { term: "Secure attachment", definition: "Caregiver responsive and consistent — child explores confidently and seeks comfort when distressed." },
    { term: "Kohlberg's stages", definition: "Preconventional (self-interest), Conventional (social approval), Postconventional (principled ethics)." },
    { term: "Erikson's stages", definition: "Eight psychosocial crises from trust vs. mistrust (infancy) to integrity vs. despair (old age)." },
    { term: "Identity vs. role confusion", definition: "Adolescent crisis — developing coherent sense of self." },
    { term: "Generativity vs. stagnation", definition: "Middle adult crisis — contributing to next generation." },
  ],
  concepts: [
    {
      id: "appsych-u2-social-development",
      title: "Relationships and moral growth",
      skill: "Explain attachment, moral reasoning, and psychosocial development.",
      lesson: {
        sections: [
          {
            heading: "Attachment",
            body: "Bowlby's attachment theory: secure base enables exploration; Harlow's monkeys showed contact comfort matters; attachment style predicts later relationships.",
          },
          {
            heading: "Moral development",
            body: "Kohlberg: children progress from self-interest (preconventional) to social approval (conventional) to principled ethics (postconventional) — though reasoning may not match behavior.",
          },
        ],
        keyFormulas: [
          { name: "Attachment styles", statement: "Secure / Anxious / Avoidant / Disorganized" },
          { name: "Kohlberg", statement: "Preconventional → Conventional → Postconventional" },
        ],
        workedExample: {
          problem: "How does attachment style affect later development?",
          solution: "Secure attachment (responsive caregiving) → confidence, better relationships, emotional regulation; insecure attachment (neglect/inconsistency) → anxiety, avoidance, difficulty trusting others.",
        },
      },
      questions: [
        {
          id: "appsych-u2-social-development-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Secure attachment develops when caregivers are ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "strict and demanding"
                    },
                    {
                              "id": "b",
                              "text": "responsive and consistent"
                    },
                    {
                              "id": "c",
                              "text": "distant and uninvolved"
                    },
                    {
                              "id": "d",
                              "text": "overprotective"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Secure attachment",
                              "statement": "Responsive, consistent caregiving."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Secure attachment forms when caregivers respond consistently and sensitively to infant needs — child uses caregiver as secure base for exploration.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Responsive and consistent",
          "commonErrors": [
                    "Confusing with anxious attachment (inconsistent care)."
          ]
},
        },
        {
          id: "appsych-u2-social-development-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Kohlberg's postconventional level of moral reasoning is based on ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "avoiding punishment"
                    },
                    {
                              "id": "b",
                              "text": "social approval"
                    },
                    {
                              "id": "c",
                              "text": "principled ethics and social contract"
                    },
                    {
                              "id": "d",
                              "text": "self-interest"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Kohlberg's stages",
                              "statement": "Preconventional → Conventional → Postconventional."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Postconventional reasoning (highest level) bases moral decisions on principled ethics and social contract — laws can be unjust and should be changed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It's rare — most adults operate at conventional level.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Principled ethics",
          "commonErrors": [
                    "Confusing with conventional (social approval)."
          ]
},
        },
        {
          id: "appsych-u2-social-development-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Erikson proposed how many psychosocial stages? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Stages",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Count",
                              "statement": "Eight stages from infancy to old age."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Erikson proposed eight psychosocial stages spanning the lifespan — each presents a crisis to resolve.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $8$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "8",
          "commonErrors": [
                    "Confusing with Piaget's 4 stages."
          ]
},
        },
        {
          id: "appsych-u2-social-development-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare Kohlberg's and Erikson's theories of moral/psychosocial development. What does each emphasize?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Developmental theories",
                              "statement": "Moral reasoning vs. psychosocial crises."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Kohlberg: focuses on moral reasoning — how people justify right/wrong; stages progress from self-interest to principled ethics; reasoning may not predict behavior.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Erikson: focuses on psychosocial crises at each life stage — trust, autonomy, initiative, industry, identity, intimacy, generativity, integrity; emphasizes social and emotional development.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Key difference: Kohlberg studies moral cognition; Erikson studies identity and emotional development across lifespan.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Kohlberg: moral reasoning; Erikson: psychosocial identity",
          "commonErrors": [
                    "Treating them as interchangeable — they address different aspects."
          ]
},
        },
        {
          id: "appsych-u2-social-development-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate attachment theory's claim that early attachment determines later outcomes. How strong is the evidence?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Attachment determinism",
                              "statement": "Early experience vs. later plasticity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Support: longitudinal studies show attachment style predicts later relationships, emotional regulation, and mental health; Bowlby's theory proposed critical period for attachment.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Challenges: correlation ≠ causation; genetic factors and later experiences matter; attachment can change with new relationships (earned secure attachment); cultural variation affects attachment patterns.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Modern view: early attachment is influential but not deterministic — later experiences, therapy, and relationships can reshape attachment patterns.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: early attachment matters significantly but doesn't seal one's fate — development remains open to change throughout life.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Early attachment influences but doesn't determine later outcomes",
          "commonErrors": [
                    "Deterministic view — later experiences can reshape attachment."
          ]
},
        },
      ],
    },
  ],
};
