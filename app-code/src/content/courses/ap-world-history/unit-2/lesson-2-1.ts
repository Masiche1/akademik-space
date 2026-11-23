import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "apwh-u2-lesson-2-1",
  code: "2-1",
  title: "The Islamic World",
  goal: "I CAN explain the rise of Islam and the Abbasid Golden Age.",
  standards: ["Period 3"],
  vocabulary: [
    { term: "Prophet Muhammad", definition: "Founded Islam (610 CE); Hijra to Medina (622) marks Islamic calendar start; Quran is holy book." },
    { term: "Five Pillars", definition: "Islam's core practices: shahada (faith), salat (prayer), zakat (almsgiving), sawm (fasting), hajj (pilgrimage)." },
    { term: "Caliphate", definition: "Islamic state ruled by caliphs — Rashidun (632-661), Umayyad (661-750), Abbasid (750-1258)." },
    { term: "House of Wisdom", definition: "Abbasid academy in Baghdad translating Greek works; center of scholarship." },
    { term: "Algebra", definition: "From Arabic 'al-jabr'; developed by al-Khwarizmi — foundation of mathematics." },
    { term: "Trans-Saharan trade", definition: "Gold-salt trade linking West Africa to Mediterranean; spread Islam to West Africa." },
  ],
  concepts: [
    {
      id: "apwh-u2-islamic-world",
      title: "Islam's rise and Golden Age",
      skill: "Explain Islam's spread and the Abbasid intellectual flourishing.",
      lesson: {
        sections: [
          {
            heading: "Rise of Islam",
            body: "Muhammad's revelations (610-632) unified Arabia; after his death, caliphs expanded rapidly — by 750, Islam spanned Spain to India; conversion was often peaceful, with dhimmi status for Jews/Christians.",
          },
          {
            heading: "Abbasid Golden Age",
            body: "Baghdad's House of Wisdom preserved and advanced Greek, Persian, Indian knowledge; algebra, medicine, astronomy flourished; paper-making spread from China enabling book production.",
          },
        ],
        keyFormulas: [
          { name: "Caliphate timeline", statement: "Rashidun 632-661 → Umayyad 661-750 → Abbasid 750-1258" },
          { name: "Five Pillars", statement: "Faith + prayer + almsgiving + fasting + pilgrimage" },
        ],
        workedExample: {
          problem: "Why did the Abbasid Golden Age flourish in Baghdad rather than elsewhere?",
          solution: "Abbasid Baghdad was centrally located on trade routes, cosmopolitan (Persian, Arab, Greek, Indian scholars), and patronized by caliphs who funded translation and scholarship — creating the world's leading intellectual center.",
        },
      },
      questions: [
        {
          id: "apwh-u2-islamic-world-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Hijra (622 CE) is significant because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "marked Muhammad's death"
                    },
                    {
                              "id": "b",
                              "text": "marks the start of the Islamic calendar and Muhammad's migration to Medina"
                    },
                    {
                              "id": "c",
                              "text": "was the first hajj pilgrimage"
                    },
                    {
                              "id": "d",
                              "text": "established the Abbasid Caliphate"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hijra",
                              "statement": "Migration to Medina; Islamic epoch start."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Hijra (622 CE) — Muhammad's migration from Mecca to Medina — marks year 1 of the Islamic calendar and the faith's political organization.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Start of Islamic calendar",
          "commonErrors": [
                    "Confusing with Muhammad's death (632)."
          ]
},
        },
        {
          id: "apwh-u2-islamic-world-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The House of Wisdom in Baghdad is significant because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "was a military academy"
                    },
                    {
                              "id": "b",
                              "text": "translated Greek and other works, preserving knowledge for later Europe"
                    },
                    {
                              "id": "c",
                              "text": "was a pilgrimage site"
                    },
                    {
                              "id": "d",
                              "text": "produced the Quran"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "House of Wisdom",
                              "statement": "Abbasid translation and scholarship center."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The House of Wisdom translated Aristotle, Galen, and Indian mathematics into Arabic, preserving classical knowledge that later flowed back to Europe via Spain and Crusades.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It exemplifies the Islamic Golden Age's cosmopolitan scholarship.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Preserved and advanced classical knowledge",
          "commonErrors": [
                    "Thinking it was a religious institution — it was a secular academy."
          ]
},
        },
        {
          id: "apwh-u2-islamic-world-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Islam spread from Arabia (632 CE) to Spain (711 CE). How many years is that? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Years",
                              "answer": 79
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Date subtraction",
                              "statement": "$711 - 632 = 79$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$711 - 632 = 79$ years — Islam reached Spain within ~80 years of Muhammad's death.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $79$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "79",
          "commonErrors": [
                    "Using wrong endpoints."
          ]
},
        },
        {
          id: "apwh-u2-islamic-world-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the Abbasid Golden Age preserved and advanced classical knowledge, and how this later reached Europe.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Translation movement",
                              "statement": "Greek → Arabic → Latin transmission."
                    },
                    {
                              "kind": "skill",
                              "name": "Causal explanation",
                              "statement": "Trace knowledge transmission."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Abbasid scholars translated Aristotle, Euclid, Galen from Greek into Arabic; added original work in algebra (al-Khwarizmi), medicine (Ibn Sina), astronomy.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Paper-making (from China) enabled mass book production; libraries and academies flourished in Baghdad, Cordoba, Cairo.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Knowledge returned to Europe via Spanish reconquista (Toledo translations), Crusades, and Italian trade — fueling Renaissance and Scientific Revolution.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Abbasids preserved Greek learning → flowed back to Europe",
          "commonErrors": [
                    "Treating the Golden Age as isolated — its legacy reached Europe."
          ]
},
        },
        {
          id: "apwh-u2-islamic-world-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the factors behind Islam's rapid spread (632-750). Were military conquest, trade, or conversion more important?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Islam's expansion",
                              "statement": "Military, commercial, and missionary factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Military conquest: early caliphate expanded rapidly — Syria, Egypt, Persia, North Africa conquered by 750; but conquest ≠ conversion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Conversion: gradual — many converted over centuries for economic opportunity (dhimmi taxes), social mobility, or genuine belief; Sufi missionaries spread Islam peacefully in Africa and Asia.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Trade: Muslim merchants carried Islam along routes — West Africa (Trans-Saharan), Southeast Asia (Indian Ocean), China (Silk Road).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: military conquest created the empire's borders; conversion and trade spread the faith — most converts came later, often through economic and social incentives rather than force.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Conquest made empire; conversion and trade spread the faith",
          "commonErrors": [
                    "Attributing all spread to conquest — most conversion was gradual and voluntary."
          ]
},
        },
      ],
    },
  ],
};
