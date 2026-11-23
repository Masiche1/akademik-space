import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "appsych-u3-lesson-3-1",
  code: "3-1",
  title: "Motivation and Emotion",
  goal: "I CAN explain drive theories, emotion theories, and stress responses.",
  standards: ["Unit 7"],
  vocabulary: [
    { term: "Drive theory", definition: "Physiological needs create drives motivating behavior to restore homeostasis." },
    { term: "Maslow's hierarchy", definition: "Physiological → safety → love/belonging → esteem → self-actualization (hierarchy of needs)." },
    { term: "Incentive theory", definition: "External rewards/punishments motivate behavior beyond internal drives." },
    { term: "James-Lange theory", definition: "Emotion follows physiological arousal — we feel afraid BECAUSE we tremble." },
    { term: "Cannon-Bard theory", definition: "Emotion and arousal occur simultaneously — thalamus sends signals to both cortex and body." },
    { term: "General adaptation syndrome", definition: "Selye's stress response: alarm → resistance → exhaustion." },
  ],
  concepts: [
    {
      id: "appsych-u3-motivation-emotion",
      title: "Why we act and feel",
      skill: "Compare motivation and emotion theories.",
      lesson: {
        sections: [
          {
            heading: "Motivation",
            body: "Drive theory: physiological needs create drives (hunger, thirst). Incentive theory: external rewards motivate. Maslow: hierarchy from basic needs to self-actualization.",
          },
          {
            heading: "Emotion",
            body: "James-Lange: arousal precedes emotion (we label feelings based on body state). Cannon-Bard: arousal and emotion simultaneous. Schachter-Singer: arousal + cognitive label = emotion.",
          },
        ],
        keyFormulas: [
          { name: "Maslow's hierarchy", statement: "Physiological → Safety → Belonging → Esteem → Self-actualization" },
          { name: "Emotion theories", statement: "James-Lange (arousal first) / Cannon-Bard (simultaneous) / Schachter-Singer (arousal + label)" },
        ],
        workedExample: {
          problem: "How does Schachter-Singer explain emotion?",
          solution: "Emotions require both physiological arousal AND cognitive interpretation — we experience arousal, then label it based on context ('I'm aroused because I'm on a date' vs. 'because I'm in danger').",
        },
      },
      questions: [
        {
          id: "appsych-u3-motivation-emotion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Maslow's hierarchy of needs places ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "self-actualization at the base"
                    },
                    {
                              "id": "b",
                              "text": "physiological needs at the base"
                    },
                    {
                              "id": "c",
                              "text": "esteem above safety"
                    },
                    {
                              "id": "d",
                              "text": "love above esteem"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Maslow's hierarchy",
                              "statement": "Physiological needs form the base."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Maslow's hierarchy starts with physiological needs (food, water, shelter), then safety, belonging, esteem, and finally self-actualization.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Physiological needs at base",
          "commonErrors": [
                    "Reversing the hierarchy."
          ]
},
        },
        {
          id: "appsych-u3-motivation-emotion-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "James-Lange theory of emotion claims ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "emotion and arousal are simultaneous"
                    },
                    {
                              "id": "b",
                              "text": "we feel emotions BECAUSE of physiological arousal"
                    },
                    {
                              "id": "c",
                              "text": "cognition creates emotion without arousal"
                    },
                    {
                              "id": "d",
                              "text": "emotions are purely cognitive"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "James-Lange theory",
                              "statement": "Arousal precedes emotion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "James-Lange: physiological arousal occurs first, then we label it as emotion — 'we feel afraid because we tremble.'",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It's one of several competing emotion theories.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Emotion follows arousal",
          "commonErrors": [
                    "Confusing with Cannon-Bard (simultaneous)."
          ]
},
        },
        {
          id: "appsych-u3-motivation-emotion-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Selye's general adaptation syndrome has 3 stages: alarm, resistance, exhaustion. If someone is in the exhaustion stage, how many stages have they passed through? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Stages passed",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Count",
                              "statement": "Alarm + resistance passed = 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exhaustion is the third stage — alarm and resistance come before it, so 2 stages have passed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $2$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "2",
          "commonErrors": [
                    "Counting exhaustion itself (3)."
          ]
},
        },
        {
          id: "appsych-u3-motivation-emotion-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare drive theory and incentive theory of motivation. When does each explain behavior better?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Motivation theories",
                              "statement": "Internal drives vs. external incentives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Drive theory: internal physiological needs create drives (hunger, thirst) motivating behavior to restore homeostasis — best explains survival behaviors.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Incentive theory: external rewards/punishments motivate behavior beyond homeostasis — best explains why we work for money, study for grades, seek pleasure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Most behavior involves both — hunger (drive) + food appeal (incentive); drives explain needs, incentives explain choices.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Drive = internal needs; Incentive = external rewards",
          "commonErrors": [
                    "Treating them as mutually exclusive — both operate together."
          ]
},
        },
        {
          id: "appsych-u3-motivation-emotion-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that 'stress is always harmful.' How does the Yerkes-Dodson law complicate this?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Stress and performance",
                              "statement": "Optimal arousal theory."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Harmful view: chronic stress triggers GAS exhaustion stage — linked to cardiovascular disease, weakened immunity, mental health disorders; 'stress is bad' is common wisdom.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Yerkes-Dodson law: performance follows inverted-U — some arousal/stress is optimal; too little = poor performance, too much = impaired; moderate stress enhances focus and performance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Distinction: acute stress can be adaptive (fight-or-flight prepares for challenge); chronic stress is harmful (prolonged activation without recovery).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: stress is not inherently harmful — moderate acute stress enhances performance; chronic stress is damaging. The dose makes the poison.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Moderate stress is beneficial; chronic stress is harmful",
          "commonErrors": [
                    "Binary view — stress effects depend on intensity and duration."
          ]
},
        },
      ],
    },
  ],
};
