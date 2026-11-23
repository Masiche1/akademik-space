import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apit-u1-lesson-1-1",
  code: "1-1",
  title: "Italian Grammar Foundations",
  goal: "I CAN apply core Italian grammar: articles, prepositions, subjunctive.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Articles", definition: "Il/lo/la/l'/i/gli/le — gender (masculine/feminine) + number + phonetic environment." },
    { term: "Prepositions", definition: "Di (of), a (to), da (from/by), in (in), con (with), su (on), per (for), tra/fra (between)." },
    { term: "Subjunctive", definition: "Mood for doubt, desire, emotion — penso che, spero che." },
    { term: "Passato prossimo", definition: "Present perfect — avere/essere + past participle." },
    { term: "Reflexive verbs", definition: "si/mi/ti — actions on oneself: mi chiamo, ti svegli." },
    { term: "Double consonants", definition: "Distinguish meaning — 'papa' (pope) vs. 'pappa' (baby food)." },
  ],
  concepts: [
    {
      id: "apit-u1-italian-grammar-foundations",
      title: "Core Italian grammar",
      skill: "Apply essential Italian grammar accurately.",
      lesson: {
        sections: [
          {
            heading: "Articles",
            body: "Il (masc sing), lo (masc sing before s+consonant/z), la (fem sing), l' (before vowel); plurals i/gli/le — phonetic environment matters.",
          },
          {
            heading: "Subjunctive",
            body: "Used after expressions of doubt/desire/emotion — 'penso che sia' (I think it is — subjunctive); indicative for facts.",
          },
        ],
        keyFormulas: [
          { name: "Articles", statement: "Il/lo/la/l' (sing) → i/gli/le (plural)" },
          { name: "Prepositions", statement: "Di/a/da/in/con/su/per/tra-fra" },
          { name: "Subjunctive triggers", statement: "Penso che / Spero che / È importante che" },
        ],
        workedExample: {
          problem: "Choose article: '___ zio' (uncle)",
          solution: "Lo zio — z requires lo; 'lo' before s+consonant, z, gn, ps; 'il' before most consonants.",
        },
      },
      questions: [
        {
          id: "apit-u1-italian-grammar-foundations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'___ amica' (the friend, feminine) requires:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "il"
                    },
                    {
                              "id": "b",
                              "text": "la"
                    },
                    {
                              "id": "c",
                              "text": "lo"
                    },
                    {
                              "id": "d",
                              "text": "l'"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Italian articles",
                              "statement": "Gender determines article."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Amica is feminine → 'la amica' → 'l'amica' before vowel; feminine singular uses la/l'.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "la/l'",
          "commonErrors": [
                    "Using masculine article."
          ]
},
        },
        {
          id: "apit-u1-italian-grammar-foundations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Penso che lui ___ (essere) stanco' uses subjunctive:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "è"
                    },
                    {
                              "id": "b",
                              "text": "sia"
                    },
                    {
                              "id": "c",
                              "text": "sarà"
                    },
                    {
                              "id": "d",
                              "text": "era"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Subjunctive triggers",
                              "statement": "Penso che triggers subjunctive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Penso che' expresses opinion → subjunctive; 'sia' is present subjunctive of essere.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Subjunctive expresses uncertainty/opinion vs. indicative facts.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "sia",
          "commonErrors": [
                    "Using indicative after trigger."
          ]
},
        },
        {
          id: "apit-u1-italian-grammar-foundations-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why Italian has so many article forms.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Italian articles",
                              "statement": "Gender+number+phonetics."
                    },
                    {
                              "kind": "skill",
                              "name": "Analysis",
                              "statement": "Article complexity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Italian articles mark gender (masculine/feminine), number (singular/plural), AND phonetic environment — 'il' vs 'lo' depends on following sound.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "This reflects Italian's phonetic precision — articles help pronunciation flow; 'lo' before s+consonant prevents awkward clusters.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Complexity is systematic — learn patterns (il before most consonants, lo before s+cons/z/gn, la for feminine) rather than memorizing individually.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Gender+number+phonetics = many forms but systematic",
          "commonErrors": [
                    "Memorizing randomly — learn the patterns."
          ]
},
        },
        {
          id: "apit-u1-italian-grammar-foundations-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how Italian's phonetic spelling differs from English and French. What are advantages/limitations?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Italian phonetics",
                              "statement": "Sound-spelling relationship."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Italian is largely phonetic — 'casa' pronounced as spelled, double consonants pronounced distinctly; much more predictable than English ('though' vs 'through' vs 'tough').",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Advantages: easy pronunciation once rules learned; spelling helps reading; double consonants clear. Limitations: English loanwords confuse; regional accents vary despite standard spelling.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Italian dialects historically diverse — standard Italian based on Tuscan; regional pronunciation differs but spelling remains standard.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: Italian's phonetic spelling aids learners — predictable sound-spelling relationship; trade-off is less 'hidden' complexity than English/French.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Italian phonetic spelling = predictable but limited depth",
          "commonErrors": [
                    "Assuming all spelling is equal — Italian is unusually phonetic."
          ]
},
        },
      ],
    },
  ],
};
