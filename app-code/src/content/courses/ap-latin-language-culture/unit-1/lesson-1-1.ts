import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apla-u1-lesson-1-1",
  code: "1-1",
  title: "Latin Grammar Foundations",
  goal: "I CAN apply core Latin grammar: cases, declensions, verb conjugation.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Cases", definition: "Nominative, genitive, dative, accusative, ablative, vocative — six cases marking function." },
    { term: "Declensions", definition: "Five patterns for noun endings — first (a-stem), second (o-stem), third (consonant), etc." },
    { term: "Verb conjugation", definition: "Present, imperfect, future, perfect, pluperfect, future perfect — six tenses." },
    { term: "Subjunctive", definition: "Mood for doubt, desire, purpose — independent and dependent uses." },
    { term: "Agreement", definition: "Adjectives agree with nouns in case, number, gender." },
    { term: "Word order", definition: "Flexible — emphasis determines position; verb often final in formal Latin." },
  ],
  concepts: [
    {
      id: "apla-u1-latin-grammar-foundations",
      title: "Core Latin grammar",
      skill: "Apply essential Latin grammar and translation skills.",
      lesson: {
        sections: [
          {
            heading: "Cases",
            body: "Six cases mark function: nominative (subject), genitive (possession), dative (indirect object), accusative (direct object), ablative (various prepositional), vocative (address) — endings show role.",
          },
          {
            heading: "Declensions",
            body: "Five patterns for noun endings based on stem type — first declension (-a), second (-us/-um), third (consonant), etc.; each has unique endings per case.",
          },
        ],
        keyFormulas: [
          { name: "Cases", statement: "Nom/Gen/Dat/Acc/Abl/Voc — function markers" },
          { name: "Declensions", statement: "First/Second/Third/Fourth/Fifth — ending patterns" },
          { name: "Tenses", statement: "Present/Imperfect/Future/Perfect/Pluperfect/Future perfect" },
        ],
        workedExample: {
          problem: "Translate 'puella amat' (girl loves)",
          solution: "Puella (girl, nominative) amat (loves, 3rd singular present) — 'the girl loves'; word order flexible but nominative marks subject.",
        },
      },
      questions: [
        {
          id: "apla-u1-latin-grammar-foundations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The nominative case marks ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "direct object"
                    },
                    {
                              "id": "b",
                              "text": "subject"
                    },
                    {
                              "id": "c",
                              "text": "possession"
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
                              "name": "Nominative case",
                              "statement": "Subject marker."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nominative marks subject — 'puella amat' (girl loves); subject performs action.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Subject",
          "commonErrors": [
                    "Confusing with accusative."
          ]
},
        },
        {
          id: "apla-u1-latin-grammar-foundations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Puellae' is genitive singular of 'puella' meaning:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "of the girl"
                    },
                    {
                              "id": "b",
                              "text": "to the girl"
                    },
                    {
                              "id": "c",
                              "text": "the girl (subject)"
                    },
                    {
                              "id": "d",
                              "text": "by the girl"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Genitive case",
                              "statement": "Possession."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Genitive marks possession — 'puellae' = 'of the girl'; 'domus puellae' = 'the girl's house.'",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Genitive = of/from relationship.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "of the girl",
          "commonErrors": [
                    "Confusing case functions."
          ]
},
        },
        {
          id: "apla-u1-latin-grammar-foundations-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why Latin word order is flexible and what determines it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Latin word order",
                              "statement": "Emphasis-driven."
                    },
                    {
                              "kind": "skill",
                              "name": "Analysis",
                              "statement": "Syntax flexibility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Latin word order flexible because cases mark grammatical roles — 'puella amat' and 'amat puella' both mean 'girl loves' since nominative marks subject regardless of position.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Word order determined by emphasis — placing word first emphasizes it; verb-final common in formal style; poetic license for meter.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This differs from English (fixed SVO) — Latin readers must identify roles via endings not position; challenging but systematic.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Cases enable flexible order; emphasis determines position",
          "commonErrors": [
                    "Assuming English word order applies — Latin is different."
          ]
},
        },
        {
          id: "apla-u1-latin-grammar-foundations-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how Latin's case system shaped European languages. What legacy remains?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Latin influence",
                              "statement": "Romance language foundation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Latin cases influenced Romance languages: Italian/Spanish/French/Portuguese/Romanian evolved from Latin; though cases simplified, traces remain (pronouns, prepositions, verb forms).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Latin vocabulary dominates English — 60%+ English words Latin-derived; scientific/medical/legal terminology Latin-based; 'etc.' 'i.e.' 'e.g.' all Latin abbreviations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Studying Latin improves English vocabulary, grammar understanding, analytical thinking — 'mental gymnastics' for language; AP Latin provides cultural literacy for Western civilization.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: Latin shaped European linguistic landscape — direct ancestor of Romance languages, major vocabulary source for English; studying it connects to Western cultural heritage.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Latin = ancestor of Romance languages + English vocabulary source",
          "commonErrors": [
                    "Seeing as 'dead language' — it's foundational."
          ]
},
        },
      ],
    },
  ],
};
