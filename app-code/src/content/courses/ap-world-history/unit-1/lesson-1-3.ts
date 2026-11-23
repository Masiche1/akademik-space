import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "apwh-u1-lesson-1-3",
  code: "1-3",
  title: "Belief Systems and Empires",
  goal: "I CAN compare Buddhism, Hinduism, Confucianism, and Christianity and their imperial contexts.",
  standards: ["Period 2"],
  vocabulary: [
    { term: "Buddhism", definition: "Founded by Siddhartha Gautama (c. 563-483 BCE); spread from India to East Asia via Silk Road." },
    { term: "Hinduism", definition: "Indian religion evolving from Vedic traditions; karma, dharma, reincarnation; no single founder." },
    { term: "Confucianism", definition: "Chinese philosophy of social harmony, filial piety, and merit — shaped Han governance." },
    { term: "Christianity", definition: "Monotheistic faith from Jesus (c. 4 BCE-30 CE); spread via Roman roads; became state religion under Constantine." },
    { term: "Constantine", definition: "Roman emperor who legalized Christianity (Edict of Milan 313) and made it favored religion." },
    { term: "Mauryan Empire", definition: "India's first major empire (c. 322-185 BCE); Ashoka converted to Buddhism and spread it across Asia." },
  ],
  concepts: [
    {
      id: "apwh-u1-belief-systems",
      title: "Religions and empire",
      skill: "Explain how belief systems spread and legitimized empires.",
      lesson: {
        sections: [
          {
            heading: "Spread mechanisms",
            body: "Buddhism spread via Silk Road trade and Ashoka's missions; Christianity via Roman roads, apostles, and later Constantine's patronage; Confucianism via Chinese civil service.",
          },
          {
            heading: "Imperial legitimacy",
            body: "Rulers used religion to legitimize power — Mandate of Heaven (China), divine kingship (Egypt), Caesar's divine status (Rome), Ashoka's Buddhist dharma.",
          },
        ],
        keyFormulas: [
          { name: "Religion spread", statement: "Buddhism: India→Central Asia→China→Korea/Japan | Christianity: Judea→Roman Empire→Europe" },
          { name: "Imperial legitimation", statement: "Mandate of Heaven / divine right / dharma" },
        ],
        workedExample: {
          problem: "How did Ashoka's conversion to Buddhism transform the Mauryan Empire?",
          solution: "Ashoka's edicts promoted dharma (moral law), religious tolerance, and welfare — shifting empire from conquest to moral governance; his missionaries spread Buddhism to Sri Lanka and Southeast Asia.",
        },
      },
      questions: [
        {
          id: "apwh-u1-belief-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ashoka's edicts primarily promoted ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "military conquest"
                    },
                    {
                              "id": "b",
                              "text": "Buddhist dharma and moral governance"
                    },
                    {
                              "id": "c",
                              "text": "Hindu rituals"
                    },
                    {
                              "id": "d",
                              "text": "Greek philosophy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Ashoka's edicts",
                              "statement": "Moral law and religious tolerance after Kalinga."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "After conquering Kalinga (~261 BCE), Ashoka converted to Buddhism and issued edicts promoting dharma, tolerance, and welfare across his empire.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Buddhist dharma",
          "commonErrors": [
                    "Thinking he promoted Hinduism — he converted FROM Hinduism TO Buddhism."
          ]
},
        },
        {
          id: "apwh-u1-belief-systems-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Constantine's Edict of Milan (313 CE) is significant because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "made Christianity the official Roman religion"
                    },
                    {
                              "id": "b",
                              "text": "legalized Christianity and ended persecution"
                    },
                    {
                              "id": "c",
                              "text": "founded the Catholic Church"
                    },
                    {
                              "id": "d",
                              "text": "banned all other religions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Edict of Milan",
                              "statement": "Legalized Christianity in the Roman Empire."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Constantine legalized Christianity and returned confiscated property — ending three centuries of persecution; Theodosius later made it the state religion (380 CE).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This transformed Christianity from persecuted sect to imperial religion, enabling its spread.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Legalized Christianity",
          "commonErrors": [
                    "Confusing with Theodosius's later establishment of Christianity as state religion."
          ]
},
        },
        {
          id: "apwh-u1-belief-systems-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Buddhism founded c. 563 BCE spread to China by the 1st century CE. How many centuries is that roughly? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Centuries",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Century conversion",
                              "statement": "$563 BCE \\to 1 CE \\approx 5.6$ centuries to China, but spread completed over ~7 centuries total."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "From founding (~563 BCE) to full East Asian spread (~5th-6th c. CE) is roughly 10+ centuries; to first arrival in China (1st c. CE) is ~6 centuries. Using arrival: ~$6$ centuries.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $6$ or $7$ depending on endpoint — accepted $7$ for full spread.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "7",
          "commonErrors": [
                    "Using years instead of centuries."
          ]
},
        },
        {
          id: "apwh-u1-belief-systems-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the Silk Road and Roman roads each facilitated religious spread, and compare their effectiveness.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Trade routes and religion",
                              "statement": "Commerce networks carried faith."
                    },
                    {
                              "kind": "skill",
                              "name": "Comparison",
                              "statement": "Weigh different transmission mechanisms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Silk Road: Buddhism traveled India→Central Asia→China over centuries via merchants and monks; also transmitted Islam and Nestorian Christianity; effect was gradual but reached the largest geographic extent.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Roman roads: enabled apostles and later missionaries to spread Christianity rapidly within the Empire; Paul's journeys used Roman infrastructure; effect was faster but limited to imperial territory.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Comparison: Roman roads spread religion faster within an empire; Silk Road spread slower but transcended empires — both show trade networks as religious vectors.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Both spread religion via trade routes; Roman roads faster, Silk Road broader",
          "commonErrors": [
                    "Ignoring the role of merchants/monks as carriers."
          ]
},
        },
        {
          id: "apwh-u1-belief-systems-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how empires used religion for legitimacy. Compare at least two cases and evaluate whether religion strengthened or weakened imperial rule.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Religion and legitimacy",
                              "statement": "Divine sanction vs. moral critique."
                    },
                    {
                              "kind": "skill",
                              "name": "Historical analysis",
                              "statement": "Weigh religion's dual role."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "China: Mandate of Heaven justified dynastic rule but also legitimized rebellion — 'Heaven's mandate' could be withdrawn; Confucianism reinforced hierarchy and civil service.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Rome: emperor worship and later Christianity provided divine legitimacy; Constantine's conversion fused church and state; but Christian universalism sometimes challenged imperial authority.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ashoka: Buddhism provided moral legitimacy and tolerance; his dharma edicts unified diverse subjects — but his successors reverted to Hinduism, showing religion's political contingency.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: religion generally strengthened empires by providing legitimacy and social cohesion, but could undermine them when moral teachings conflicted with policy or when rulers lost 'mandate.'",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Religion legitimized empires but could also constrain or undermine them",
          "commonErrors": [
                    "One-sided view — religion both legitimized and challenged imperial power."
          ]
},
        },
      ],
    },
  ],
};
