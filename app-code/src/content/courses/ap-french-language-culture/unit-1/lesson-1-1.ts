import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apfr-u1-lesson-1-1",
  code: "1-1",
  title: "French Grammar Foundations",
  goal: "I CAN apply core French grammar: passé composé, subjunctive, pronouns.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Passé composé", definition: "Compound past — auxiliary (avoir/être) + past participle." },
    { term: "Être vs. avoir", definition: "Most verbs use avoir; movement/change-of-state use être (DR MRS VANDERTRAMP)." },
    { term: "Subjunctive", definition: "Mood for doubt, desire, emotion — il faut que, je veux que." },
    { term: "Pronouns", definition: "Subject (je, tu), stressed (moi, toi), object (me, te, le), reflexive (se)." },
    { term: "Agreement", definition: "Past participle agrees with avoir object if before; always with être subject." },
    { term: "Liaison", definition: "Linking final consonant to next vowel — les_amis pronounced 'lay-zami'." },
  ],
  concepts: [
    {
      id: "apfr-u1-french-grammar-foundations",
      title: "Core French grammar",
      skill: "Apply essential French grammar accurately.",
      lesson: {
        sections: [
          {
            heading: "Passé composé",
            body: "Compound past using avoir or être + past participle — 'j'ai mangé' (I ate); être verbs show agreement with subject.",
          },
          {
            heading: "Subjunctive",
            body: "Used for doubt, desire, emotion — 'il faut que tu viennes' (you must come); indicative for facts, subjunctive for uncertainty/wishes.",
          },
        ],
        keyFormulas: [
          { name: "Passé composé", statement: "Avoir/Être + past participle" },
          { name: "Être verbs", statement: "Movement/change-of-state (DR MRS VANDERTRAMP)" },
          { name: "Subjunctive triggers", statement: "Il faut que / Je veux que / Bien que" },
        ],
        workedExample: {
          problem: "Conjugate 'aller' in passé composé",
          solution: "Être verb (movement) → 'je suis allé(e)' — agrees with subject; most verbs use avoir ('j'ai parlé').",
        },
      },
      questions: [
        {
          id: "apfr-u1-french-grammar-foundations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Je ___ (manger)' in passé composé:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "suis mangé"
                    },
                    {
                              "id": "b",
                              "text": "ai mangé"
                    },
                    {
                              "id": "c",
                              "text": "mangeais"
                    },
                    {
                              "id": "d",
                              "text": "mangerai"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Passé composé",
                              "statement": "Most verbs use avoir."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Manger uses avoir → 'j'ai mangé'; être verbs are movement/change-of-state exceptions.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "ai mangé",
          "commonErrors": [
                    "Using être for non-motion verb."
          ]
},
        },
        {
          id: "apfr-u1-french-grammar-foundations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Il faut que tu ___ (venir)' requires subjunctive:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "viens"
                    },
                    {
                              "id": "b",
                              "text": "viennes"
                    },
                    {
                              "id": "c",
                              "text": "viendras"
                    },
                    {
                              "id": "d",
                              "text": "venais"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Subjunctive triggers",
                              "statement": "Il faut que triggers subjunctive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Il faut que' expresses necessity → subjunctive; 'viennes' is present subjunctive of venir.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Subjunctive expresses obligation/uncertainty.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "viennes",
          "commonErrors": [
                    "Using indicative after trigger."
          ]
},
        },
        {
          id: "apfr-u1-french-grammar-foundations-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between tu and vous forms.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Tu vs. vous",
                              "statement": "Informal vs. formal/plural."
                    },
                    {
                              "kind": "skill",
                              "name": "Application",
                              "statement": "Register choice."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tu: singular informal — friends, family, children, peers; vous: plural OR formal singular — strangers, elders, professional contexts.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Choosing wrong register is socially significant — using tu with stranger is rude; using vous with friend is distant; French social hierarchy matters.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Verb conjugations differ — tu parles, vous parlez; pronouns differ — ton/ta vs. votre/vos.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Tu=informal singular; Vous=formal/plural",
          "commonErrors": [
                    "Ignoring register — it's socially important."
          ]
},
        },
        {
          id: "apfr-u1-french-grammar-foundations-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze why French liaison and elision complicate pronunciation for learners.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "French phonology",
                              "statement": "Connected speech rules."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Liaison: final consonant links to next vowel — 'les_amis' = 'lay-zami'; elision: vowel drops before vowel — 'le ami' → 'l'ami'; creates connected speech different from spelling.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "These rules are obligatory in formal speech but variable in casual — learners must know when required vs. optional; regional variation adds complexity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Mastery requires listening practice — spelling doesn't predict pronunciation; immersion helps internalize patterns.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: liaison/elision reflect French's connected-speech nature — mastering them requires exposure, not just rules.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Liaison/elision = connected speech; learn through listening",
          "commonErrors": [
                    "Reading rules without listening practice."
          ]
},
        },
      ],
    },
  ],
};
