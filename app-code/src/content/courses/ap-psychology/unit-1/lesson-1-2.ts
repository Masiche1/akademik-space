import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "appsych-u1-lesson-1-2",
  code: "1-2",
  title: "States of Consciousness",
  goal: "I CAN explain sleep, dreams, hypnosis, and psychoactive drugs.",
  standards: ["Unit 3"],
  vocabulary: [
    { term: "Circadian rhythm", definition: "~24-hour biological cycle regulating sleep/wake; influenced by light." },
    { term: "REM sleep", definition: "Rapid eye movement sleep — vivid dreaming, brain activity like wakefulness, muscle paralysis." },
    { term: "Sleep stages", definition: "NREM (stages 1-3, deep sleep) and REM cycle through night; deep sleep restores body, REM processes emotions/memory." },
    { term: "Insomnia", definition: "Difficulty falling/staying asleep — affects ~30% of adults." },
    { term: "Psychoactive drug", definition: "Substance altering consciousness, mood, or perception (depressants, stimulants, hallucinogens)." },
    { term: "Tolerance", definition: "Needing increasing amounts for same effect; distinct from dependence/withdrawal." },
  ],
  concepts: [
    {
      id: "appsych-u1-consciousness-sleep",
      title: "Sleep, dreams, and altered states",
      skill: "Explain sleep stages, consciousness theories, and drug effects.",
      lesson: {
        sections: [
          {
            heading: "Sleep cycle",
            body: "NREM stages 1-3 (light→deep) then REM (~90 min cycle); deep NREM restores body; REM consolidates memory and processes emotions; dreams occur mostly in REM.",
          },
          {
            heading: "Consciousness theories",
            body: "Freud's wish fulfillment vs. activation-synthesis (dreams are random neural firing interpreted); hypnosis creates focused attention with heightened suggestibility.",
          },
        ],
        keyFormulas: [
          { name: "Sleep cycle", statement: "NREM 1→2→3 (deep) → REM → repeat (~90 min)" },
          { name: "Drug categories", statement: "Depressants (alcohol) / Stimulants (cocaine) / Hallucinogens (LSD) / Opiates (heroin)" },
        ],
        workedExample: {
          problem: "Why do we dream? Compare Freud and activation-synthesis theories.",
          solution: "Freud: dreams are disguised wish fulfillment revealing unconscious desires. Activation-synthesis: dreams are random neural firing that the brain constructs into narratives — meaning is imposed, not discovered.",
        },
      },
      questions: [
        {
          id: "appsych-u1-consciousness-sleep-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "REM sleep is characterized by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "deep muscle relaxation"
                    },
                    {
                              "id": "b",
                              "text": "rapid eye movements, vivid dreams, and brain activity similar to wakefulness"
                    },
                    {
                              "id": "c",
                              "text": "delta waves only"
                    },
                    {
                              "id": "d",
                              "text": "no brain activity"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "REM sleep",
                              "statement": "Dreaming stage with active brain and paralyzed muscles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "REM sleep features rapid eye movements, vivid dreaming, brain activity resembling wakefulness, and muscle paralysis (atonia).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Vivid dreams + active brain",
          "commonErrors": [
                    "Confusing with deep NREM (delta waves)."
          ]
},
        },
        {
          id: "appsych-u1-consciousness-sleep-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Freud's theory of dreams proposed that dreams are ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "random neural activity"
                    },
                    {
                              "id": "b",
                              "text": "disguised wish fulfillment revealing unconscious desires"
                    },
                    {
                              "id": "c",
                              "text": "memory consolidation"
                    },
                    {
                              "id": "d",
                              "text": "prophetic visions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Freud's dream theory",
                              "statement": "Wish fulfillment interpretation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Freud argued dreams disguise unconscious wishes in symbolic form — manifest content (what we remember) vs. latent content (true meaning).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Modern activation-synthesis theory challenges this, seeing dreams as random neural firing.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Disguised wish fulfillment",
          "commonErrors": [
                    "Confusing with activation-synthesis theory."
          ]
},
        },
        {
          id: "appsych-u1-consciousness-sleep-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "An adult needs about 7-9 hours of sleep per night. If someone sleeps 6 hours per night for a week, how many total hours of sleep deprivation compared to 8 hours/night? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Hours lost",
                              "answer": 14
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Deficit calculation",
                              "statement": "$(8-6) \\times 7 = 14$ hours."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$(8 - 6) \\times 7 = 14$ hours of lost sleep over the week.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $14$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "14",
          "commonErrors": [
                    "Using wrong baseline or days."
          ]
},
        },
        {
          id: "appsych-u1-consciousness-sleep-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how psychoactive drugs affect neurotransmission, comparing depressants and stimulants.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Psychoactive drugs",
                              "statement": "Neurotransmitter manipulation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Depressants (alcohol, benzodiazepines): enhance GABA (inhibitory neurotransmitter), slowing brain activity — reduce anxiety but impair judgment; withdrawal can be dangerous (seizures).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Stimulants (cocaine, amphetamines): increase dopamine/norepinephrine, producing euphoria and energy; high doses cause anxiety, paranoia, cardiovascular strain; crash follows.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All drugs affect reward pathways (dopamine) but differ in mechanism, effects, and risks — dependence involves tolerance + withdrawal.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Drugs alter neurotransmitters; depressants slow, stimulants excite",
          "commonErrors": [
                    "Treating all drugs identically — mechanisms and risks differ."
          ]
},
        },
        {
          id: "appsych-u1-consciousness-sleep-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that 'sleep is for the weak.' How does sleep deprivation affect cognition, health, and safety?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Sleep deprivation",
                              "statement": "Cognitive and health impacts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cognitive: sleep deprivation impairs attention, memory consolidation, decision-making, and emotional regulation; microsleeps can cause accidents (Chernobyl, Challenger linked to fatigue).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Health: chronic deprivation linked to obesity, diabetes, cardiovascular disease, weakened immunity, and mental health disorders.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Memory: sleep consolidates memories — students who sleep after learning retain more; REM sleep processes emotional memories.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: sleep is biologically necessary — 'sleep is for the weak' is a dangerous myth; adequate sleep is essential for optimal cognitive and physical function.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Sleep deprivation impairs cognition and health — sleep is essential",
          "commonErrors": [
                    "Accepting sleep deprivation as harmless — evidence shows serious consequences."
          ]
},
        },
      ],
    },
  ],
};
