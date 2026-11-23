import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apzh-u1-lesson-1-1",
  code: "1-1",
  title: "Chinese Grammar Foundations",
  goal: "I CAN apply core Chinese grammar: tones, measure words, aspect markers.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Tones", definition: "Four tones + neutral — mā (mother), má (hemp), mǎ (horse), mà (scold)." },
    { term: "Measure words", definition: "Classifiers for counting — 一个人 (one person), 一本书 (one book)." },
    { term: "Aspect markers", definition: "了 (completed), 过 (experienced), 着 (ongoing state)." },
    { term: "No conjugation", definition: "Verbs don't conjugate — time shown by context/particles." },
    { term: "Topic-comment", definition: "Chinese often front-loads topic — '这个问题，我知道' (this problem, I know)." },
    { term: "Pinyin", definition: "Romanization system — tone marks indicate pronunciation." },
  ],
  concepts: [
    {
      id: "apzh-u1-chinese-grammar-foundations",
      title: "Core Chinese grammar",
      skill: "Apply essential Chinese grammar and pronunciation.",
      lesson: {
        sections: [
          {
            heading: "Tones",
            body: "Four tones + neutral: mā (high level), má (rising), mǎ (dipping-rising), mà (falling) — same syllable, different meaning; tone is meaning not decoration.",
          },
          {
            heading: "Measure words",
            body: "Required between number and noun — 一个人 (one person), 一本书 (one book), 一只猫 (one cat); different classifiers for different noun types.",
          },
        ],
        keyFormulas: [
          { name: "Tones", statement: "1=high, 2=rising, 3=dipping, 4=falling, neutral=light" },
          { name: "Measure words", statement: "个/本/只/张 — classifiers per noun type" },
          { name: "Aspect markers", statement: "了=completed, 过=experienced, 着=ongoing" },
        ],
        workedExample: {
          problem: "Count 'three books' in Chinese",
          solution: "三本书 (sān běn shū) — 三 (three) + 本 (measure word for books) + 书 (book); measure word required.",
        },
      },
      questions: [
        {
          id: "apzh-u1-chinese-grammar-foundations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Mandarin Chinese has how many tones?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2"
                    },
                    {
                              "id": "b",
                              "text": "4 (+ neutral)"
                    },
                    {
                              "id": "c",
                              "text": "6"
                    },
                    {
                              "id": "d",
                              "text": "8"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tones",
                              "statement": "4 tones + neutral."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mandarin has 4 tones + neutral tone — mā/má/mǎ/mà demonstrate how tone changes meaning entirely.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "4 + neutral",
          "commonErrors": [
                    "Confusing with other Chinese varieties."
          ]
},
        },
        {
          id: "apzh-u1-chinese-grammar-foundations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "'我吃了饭' — the particle 了 indicates:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "future"
                    },
                    {
                              "id": "b",
                              "text": "completed action"
                    },
                    {
                              "id": "c",
                              "text": "habitual"
                    },
                    {
                              "id": "d",
                              "text": "question"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Aspect marker 了",
                              "statement": "Completed action."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "了 marks completed aspect — '我吃了饭' = 'I ate (the meal is done)'; aspect not tense — time from context.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Chinese marks aspect (how action relates to time) not tense (when).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Completed action",
          "commonErrors": [
                    "Confusing aspect with tense."
          ]
},
        },
        {
          id: "apzh-u1-chinese-grammar-foundations-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why measure words are necessary in Chinese when English doesn't use them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Measure words",
                              "statement": "Classifiers required."
                    },
                    {
                              "kind": "skill",
                              "name": "Analysis",
                              "statement": "Cross-linguistic grammar."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chinese requires measure words (classifiers) between number and noun — '三本书' not '三书'; English doesn't ('three books' directly).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Measure words classify nouns by shape/type — 本 for books, 只 for animals, 张 for flat objects; reflects how Chinese categorizes objects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This forces speakers to think about noun categories — measure word choice reveals classification system embedded in language.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Classifiers categorize nouns — grammar reflects cognitive categorization",
          "commonErrors": [
                    "Thinking it's arbitrary — it reflects noun categories."
          ]
},
        },
        {
          id: "apzh-u1-chinese-grammar-foundations-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how Chinese tones affect meaning and why they're challenging for learners.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Tones as meaning",
                              "statement": "Phonemic tones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tones are phonemic — change tone, change meaning: mā (mother) vs. má (hemp) vs. mǎ (horse) vs. mà (scold); same syllable different word entirely.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Challenge: English uses intonation for emotion/questions, not meaning; learners must retrain ear to hear pitch as semantic not emotional — 'mother' said in wrong tone = different word.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Tone sandhi complicates further — tones change in combination (two third tones → first + third); must learn contextual tone changes.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: tones are fundamental to Chinese — they encode meaning not just sound; mastering them is essential for comprehension, not optional pronunciation detail.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Tones encode meaning — retrain ear from intonation to phoneme",
          "commonErrors": [
                    "Treating tones as optional — they're semantic."
          ]
},
        },
      ],
    },
  ],
};
