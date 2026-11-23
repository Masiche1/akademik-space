import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apjp-u1-lesson-1-1",
  code: "1-1",
  title: "Japanese Grammar Foundations",
  goal: "I CAN apply core Japanese grammar: particles, verb forms, politeness levels.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Particles", definition: "は (topic), が (subject), を (object), に (to/at), で (in/at), へ (toward)." },
    { term: "Politeness levels", definition: "Casual (taberu), polite (tabemasu), honorific (o-tabeni-naru) — social register." },
    { term: "Verb conjugation", definition: "Ru-verbs (taberu), U-verbs (tabe-masu forms) — different conjugation patterns." },
    { term: "Kanji/Kana", definition: "Three writing systems — Kanji (Chinese characters), Hiragana (native syllabary), Katakana (loanwords)." },
    { term: "Subject omission", definition: "Japanese often omits subject — context determines who." },
    { term: "Counters", definition: "Specific counting words — 一人 (hitori), 二冊 (nibo) — different per object type." },
  ],
  concepts: [
    {
      id: "apjp-u1-japanese-grammar-foundations",
      title: "Core Japanese grammar",
      skill: "Apply essential Japanese grammar and writing systems.",
      lesson: {
        sections: [
          {
            heading: "Particles",
            body: "Mark grammatical roles — は topic, が subject, を object, に/で location/time; Japanese is agglutinative — particles attach to words.",
          },
          {
            heading: "Politeness levels",
            body: "Casual (dictionary form), polite (masu-form), honorific (o-...-naru), humble (o-...-suru) — social hierarchy encoded in verb forms.",
          },
        ],
        keyFormulas: [
          { name: "Particles", statement: "は=topic, が=subject, を=object, に/で=location" },
          { name: "Writing systems", statement: "Kanji (meaning) + Hiragana (grammar/native) + Katakana (loanwords)" },
          { name: "Politeness", statement: "Casual → Polite → Honorific/Humble" },
        ],
        workedExample: {
          problem: "Write 'I eat rice' in Japanese",
          solution: "私 (watashi) は (wa) ご飯 (gohan) を (o) 食べます (tabemasu) — particles mark roles; subject can be omitted.",
        },
      },
      questions: [
        {
          id: "apjp-u1-japanese-grammar-foundations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The particle を marks ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "subject"
                    },
                    {
                              "id": "b",
                              "text": "object"
                    },
                    {
                              "id": "c",
                              "text": "topic"
                    },
                    {
                              "id": "d",
                              "text": "location"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "を particle",
                              "statement": "Object marker."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "を marks direct object — 'ご飯を食べます' (eat rice); object receives action.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Object",
          "commonErrors": [
                    "Confusing with は or が."
          ]
},
        },
        {
          id: "apjp-u1-japanese-grammar-foundations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "'食べます' is the ___. form of 食べる:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "casual"
                    },
                    {
                              "id": "b",
                              "text": "polite"
                    },
                    {
                              "id": "c",
                              "text": "honorific"
                    },
                    {
                              "id": "d",
                              "text": "past"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Polite form",
                              "statement": "Masu-form = polite."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "食べます is polite (masu) form of 食べる; casual would be 食べる (taberu).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Politeness levels reflect social context.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Polite (masu)",
          "commonErrors": [
                    "Confusing with casual form."
          ]
},
        },
        {
          id: "apjp-u1-japanese-grammar-foundations-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why Japanese uses three writing systems. What does each do?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Writing systems",
                              "statement": "Kanji/Kana division."
                    },
                    {
                              "kind": "skill",
                              "name": "Analysis",
                              "statement": "Script functions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Kanji: Chinese characters for meaning — nouns, verbs, adjectives; efficient (one character = word/idea); thousands to learn.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Hiragana: native Japanese syllabary — grammar particles, native words, verb endings; learned first; ~46 basic characters.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Katakana: loanword syllabary — foreign words (コンピューター), emphasis; visually distinct from Hiragana.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Kanji=meaning, Hiragana=grammar/native, Katakana=loanwords",
          "commonErrors": [
                    "Thinking it's redundant — each has distinct function."
          ]
},
        },
        {
          id: "apjp-u1-japanese-grammar-foundations-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how Japanese encodes social hierarchy in language. What does this reveal about culture?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Politeness levels",
                              "statement": "Social hierarchy in grammar."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Japanese has multiple politeness levels — casual, polite (desu/masu), honorific (o-...-naru for superiors), humble (o-...-suru for self-lowering); verb forms change based on social relationship.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "This reveals: hierarchy matters, respect is linguistically encoded, context determines appropriate form — language reflects cultural values of social order.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Learners must read social cues — choosing wrong politeness level is socially significant; language competence includes cultural competence.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: Japanese grammar encodes social hierarchy — politeness isn't optional decoration but fundamental to communication; language mirrors cultural structure.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Politeness levels encode social hierarchy — language reflects culture",
          "commonErrors": [
                    "Treating as mere grammar — it's cultural encoding."
          ]
},
        },
      ],
    },
  ],
};
