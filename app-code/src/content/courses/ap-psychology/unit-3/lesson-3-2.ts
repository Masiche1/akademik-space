import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "appsych-u3-lesson-3-2",
  code: "3-2",
  title: "Personality Theories",
  goal: "I CAN explain psychoanalytic, trait, and humanistic personality theories.",
  standards: ["Unit 8"],
  vocabulary: [
    { term: "Psychoanalytic theory", definition: "Freud's model: id (instincts), ego (reality), superego (conscience); unconscious drives behavior." },
    { term: "Defense mechanisms", definition: "Unconscious strategies protecting ego from anxiety (repression, projection, rationalization, displacement)." },
    { term: "Trait theory", definition: "Personality consists of stable characteristics (Big Five: openness, conscientiousness, extraversion, agreeableness, neuroticism)." },
    { term: "Humanistic theory", definition: "Rogers/Maslow: people strive for self-actualization; unconditional positive regard fosters growth." },
    { term: "Self-actualization", definition: "Fulfilling one's potential — Maslow's highest need; Rogers' 'fully functioning person.'" },
    { term: "Unconditional positive regard", definition: "Accepting person without judgment — Rogers' key to healthy personality." },
  ],
  concepts: [
    {
      id: "appsych-u3-personality-theories",
      title: "How personality forms",
      skill: "Compare major personality theories.",
      lesson: {
        sections: [
          {
            heading: "Psychoanalytic",
            body: "Freud: personality shaped by unconscious conflicts between id/ego/superego; defense mechanisms protect ego; early childhood experiences critical.",
          },
          {
            heading: "Trait/humanistic",
            body: "Traits: stable dimensions (Big Five) measurable via tests. Humanistic: people are inherently good, strive for growth; Rogers' unconditional positive regard enables self-actualization.",
          },
        ],
        keyFormulas: [
          { name: "Freud's structure", statement: "Id (pleasure) / Ego (reality) / Superego (morality)" },
          { name: "Big Five", statement: "Openness / Conscientiousness / Extraversion / Agreeableness / Neuroticism" },
        ],
        workedExample: {
          problem: "How do defense mechanisms protect the ego?",
          solution: "Defense mechanisms are unconscious strategies reducing anxiety: repression (burying thoughts), projection (attributing own feelings to others), rationalization (making excuses), displacement (redirecting emotions to safer targets).",
        },
      },
      questions: [
        {
          id: "appsych-u3-personality-theories-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Freud's id operates on the ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "reality principle"
                    },
                    {
                              "id": "b",
                              "text": "pleasure principle"
                    },
                    {
                              "id": "c",
                              "text": "moral principle"
                    },
                    {
                              "id": "d",
                              "text": "social principle"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Id",
                              "statement": "Unconscious pleasure-seeking drives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The id operates on the pleasure principle — seeking immediate gratification of instinctual drives without regard for consequences.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Pleasure principle",
          "commonErrors": [
                    "Confusing with ego (reality) or superego (morality)."
          ]
},
        },
        {
          id: "appsych-u3-personality-theories-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Big Five personality traits are ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "openness, conscientiousness, extraversion, agreeableness, neuroticism"
                    },
                    {
                              "id": "b",
                              "text": "id, ego, superego, unconscious, conscious"
                    },
                    {
                              "id": "c",
                              "text": "introversion, extroversion, sensing, intuition, thinking"
                    },
                    {
                              "id": "d",
                              "text": "id, ego, superego, defense, regression"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Big Five",
                              "statement": "Five-factor trait model."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Big Five (OCEAN): Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism — the most widely accepted trait model.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Traits are relatively stable dimensions measurable via personality tests.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "OCEAN traits",
          "commonErrors": [
                    "Confusing with Freud's structures or Jung's types."
          ]
},
        },
        {
          id: "appsych-u3-personality-theories-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rogers believed unconditional positive regard means accepting a person ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only when they behave well"
                    },
                    {
                              "id": "b",
                              "text": "without judgment or conditions"
                    },
                    {
                              "id": "c",
                              "text": "only if they self-actualize"
                    },
                    {
                              "id": "d",
                              "text": "only in therapy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Unconditional positive regard",
                              "statement": "Acceptance without conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unconditional positive regard means accepting the person as they are — without judgment or conditions — fostering self-actualization.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It's the foundation of Rogers' client-centered therapy.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Without judgment or conditions",
          "commonErrors": [
                    "Thinking it's conditional approval."
          ]
},
        },
        {
          id: "appsych-u3-personality-theories-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare psychoanalytic and humanistic personality theories. What does each emphasize?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Personality theories",
                              "statement": "Unconscious conflict vs. growth potential."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Psychoanalytic (Freud): personality shaped by unconscious conflicts between id/ego/superego; defense mechanisms protect ego; early childhood critical; deterministic.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Humanistic (Rogers/Maslow): people are inherently good and strive for self-actualization; unconditional positive regard enables growth; free will and conscious experience emphasized.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Key difference: Freud sees personality as driven by unconscious forces; humanists see it as driven by conscious striving for growth.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Psychoanalytic: unconscious conflict; Humanistic: conscious growth",
          "commonErrors": [
                    "Treating them as similar — they emphasize different determinants."
          ]
},
        },
        {
          id: "appsych-u3-personality-theories-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether personality traits are stable or changeable. What evidence supports each view?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Trait stability",
                              "statement": "Consistency vs. change over lifespan."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stability evidence: Big Five traits show high test-retest reliability across decades; personality predicts life outcomes (conscientiousness → health); twin studies show genetic influence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Change evidence: personality can change through major life events, therapy, maturation (emotional stability increases with age); 'maturity principle' shows gradual change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Modern view: traits are relatively stable but not fixed — they show 'rank-order consistency' (relative positions maintained) while absolute levels can change.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: personality traits are stable enough to predict behavior but changeable enough to allow growth — 'set like plaster, not cement.'",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Traits are stable but changeable — 'set like plaster, not cement'",
          "commonErrors": [
                    "Fixed vs. totally changeable — evidence supports both stability and plasticity."
          ]
},
        },
      ],
    },
  ],
};
