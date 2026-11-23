import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "aphg-u2-lesson-2-2",
  code: "2-2",
  title: "Religion, Language, and Ethnicity",
  goal: "I CAN analyze the geography of religion, language, and ethnic conflict.",
  standards: ["Unit 3"],
  vocabulary: [
    { term: "Religion", definition: "Set of beliefs about supernatural, sacred, and moral order — major religions: Christianity, Islam, Hinduism, Buddhism, Judaism." },
    { term: "Lingua franca", definition: "Common language used for communication between groups with different native languages." },
    { term: "Language family", definition: "Group of related languages sharing common ancestor (Indo-European, Sino-Tibetan, Afro-Asiatic)." },
    { term: "Ethnicity", definition: "Shared cultural identity based on common ancestry, language, religion, customs." },
    { term: "Ethnic conflict", definition: "Violence or tension between ethnic groups competing for power/resources." },
    { term: "Nation-state", definition: "Political entity where nation (cultural group) coincides with state (territory)." },
  ],
  concepts: [
    {
      id: "aphg-u2-religion-language-ethnicity",
      title: "Identity and conflict",
      skill: "Analyze the geography of religion, language, and ethnic identity.",
      lesson: {
        sections: [
          {
            heading: "Religion's geography",
            body: "Major religions have distinct heartlands (Christianity-Europe/Americas, Islam-Middle East/North Africa, Hinduism-India, Buddhism-East Asia); diffusion via trade, conquest, missionary work; sacred sites anchor religious landscapes.",
          },
          {
            heading: "Language and ethnicity",
            body: "Indo-European languages dominate (English, Spanish, Hindi); Sino-Tibetan (Chinese); Afro-Asiatic (Arabic, Hebrew); ~7,000 languages exist but many endangered; ethnicity often aligns with language/religion creating identity-based conflicts.",
          },
        ],
        keyFormulas: [
          { name: "Major religions", statement: "Christianity (2.4B) / Islam (1.9B) / Hinduism (1.2B) / Buddhism (500M) / Judaism (15M)" },
          { name: "Language families", statement: "Indo-European / Sino-Tibetan / Afro-Asiatic / Niger-Congo / Austronesian" },
        ],
        workedExample: {
          problem: "Why do ethnic conflicts often follow religious or linguistic lines?",
          solution: "Ethnic identity often bundles language, religion, and ancestry — when groups compete for power/resources, these markers become mobilization tools; religion adds moral certainty, language enables communication.",
        },
      },
      questions: [
        {
          id: "aphg-u2-religion-language-ethnicity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A lingua franca is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a dead language"
                    },
                    {
                              "id": "b",
                              "text": "a common language used between groups with different native languages"
                    },
                    {
                              "id": "c",
                              "text": "a religious language"
                    },
                    {
                              "id": "d",
                              "text": "an official language"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lingua franca",
                              "statement": "Bridge language for communication."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A lingua franca is a common language used for communication between groups with different native languages — e.g., English for international business, Swahili in East Africa.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Common bridge language",
          "commonErrors": [
                    "Confusing with official/national language."
          ]
},
        },
        {
          id: "aphg-u2-religion-language-ethnicity-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Indo-European language family includes ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Chinese and Japanese"
                    },
                    {
                              "id": "b",
                              "text": "English, Spanish, Hindi, and most European languages"
                    },
                    {
                              "id": "c",
                              "text": "Arabic and Hebrew"
                    },
                    {
                              "id": "d",
                              "text": "Swahili and Yoruba"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Language families",
                              "statement": "Indo-European dominance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Indo-European includes English, Spanish, French, German, Hindi, Russian, and most European languages — spoken by ~3.2 billion people, the largest family.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Chinese is Sino-Tibetan; Arabic/Hebrew are Afro-Asiatic; Swahili is Niger-Congo.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "English, Spanish, Hindi, European languages",
          "commonErrors": [
                    "Confusing with other language families."
          ]
},
        },
        {
          id: "aphg-u2-religion-language-ethnicity-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Approximately how many languages exist worldwide? Enter the number (thousands, e.g., 7 for 7,000).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Thousands",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Estimate",
                              "statement": "~7,000 languages worldwide."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Approximately 7,000 languages exist worldwide — though many are endangered and half may disappear by 2100.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $7$ (thousand).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "7",
          "commonErrors": [
                    "Confusing with language families (~100)."
          ]
},
        },
        {
          id: "aphg-u2-religion-language-ethnicity-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how religion's geography reflects historical diffusion patterns.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Religious diffusion",
                              "statement": "Trade, conquest, missionary spread."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Christianity: originated Judea → spread via Roman roads (conquest/imperial) → European colonization → global via missions; heartland now Latin America + Europe + US.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Islam: originated Arabia → spread via conquest (Arab conquests) + trade (Silk Road, Indian Ocean) → Sufi missionary work in Africa/Asia; heartland Middle East + Indonesia + South Asia.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Hinduism: originated India → remained largely regional; Buddhism: India → spread via Ashoka's missions + Silk Road → East Asia; patterns reflect conquest vs. trade vs. missionary mechanisms.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Religions spread via conquest, trade, and missions — creating distinct heartlands",
          "commonErrors": [
                    "Thinking religions spread randomly — they follow historical vectors."
          ]
},
        },
        {
          id: "aphg-u2-religion-language-ethnicity-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze why ethnic conflicts often align with religious or linguistic boundaries. Is identity the cause or the tool?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Identity and conflict",
                              "statement": "Cause vs. mobilization tool."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alignment: ethnic identity bundles language, religion, ancestry — when groups compete for resources/power, these markers become visible fault lines; shared language enables coordination, shared religion provides moral certainty.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Examples: Yugoslav wars (Orthodox/Catholic/Muslim divisions), Rwanda (Hutu/Tutsi), Sri Lanka (Sinhalese/Tamil) — identity markers used to mobilize.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cause or tool: identity is often the TOOL for mobilization — elites exploit existing markers; underlying causes are usually economic/political (resource competition, power struggles).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: identity markers provide the vocabulary of conflict but rarely the cause — economic and political grievances drive violence; identity is the mobilization mechanism.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Identity is mobilization tool, not root cause — economics/politics drive conflict",
          "commonErrors": [
                    "Essentialist view — identity markers are tools exploited for political ends."
          ]
},
        },
      ],
    },
  ],
};
