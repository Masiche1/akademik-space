import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apde-u1-lesson-1-1",
  code: "1-1",
  title: "German Grammar Foundations",
  goal: "I CAN apply core German grammar: cases, word order, verb placement.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Cases", definition: "Nominative (subject), accusative (direct object), dative (indirect), genitive (possession)." },
    { term: "Word order", definition: "V2 rule — verb second in main clauses; verb-final in subordinate clauses." },
    { term: "Separable verbs", definition: "Prefix separates in main clause — 'ich stehe auf' (I get up)." },
    { term: "Articles", definition: "Der/die/das — gender + case + number combinations." },
    { term: "Modal verbs", definition: "Können, müssen, wollen, dürfen, sollen, mögen — conjugated + infinitive at end." },
    { term: "Präteritum vs. Perfekt", definition: "Präteritum for written/formal; Perfekt for spoken/daily." },
  ],
  concepts: [
    {
      id: "apde-u1-german-grammar-foundations",
      title: "Core German grammar",
      skill: "Apply essential German grammar accurately.",
      lesson: {
        sections: [
          {
            heading: "Cases",
            body: "Nominative (subject), accusative (direct object), dative (indirect object/preposition), genitive (possession) — articles change form; English lacks cases.",
          },
          {
            heading: "Word order",
            body: "V2: verb always second in main clause — 'Ich esse heute Pizza' (I eat today pizza); subordinate clauses put verb last.",
          },
        ],
        keyFormulas: [
          { name: "Cases", statement: "Nom/Acc/Dat/Gen — articles change by gender+case+number" },
          { name: "V2 rule", statement: "Verb second in main clauses" },
          { name: "Separable verbs", statement: "Prefix separates: aufstehen → ich stehe auf" },
        ],
        workedExample: {
          problem: "Conjugate 'aufstehen' (get up)",
          solution: "Separable: 'ich stehe auf' — prefix 'auf' goes to end in main clause; 'ich aufstehe' wrong.",
        },
      },
      questions: [
        {
          id: "apde-u1-german-grammar-foundations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The accusative case marks ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "subject"
                    },
                    {
                              "id": "b",
                              "text": "direct object"
                    },
                    {
                              "id": "c",
                              "text": "indirect object"
                    },
                    {
                              "id": "d",
                              "text": "possession"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Accusative case",
                              "statement": "Direct object marker."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Accusative marks direct object — 'Ich sehe den Mann' (I see the man); den is masculine accusative article.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Direct object",
          "commonErrors": [
                    "Confusing with nominative/dative."
          ]
},
        },
        {
          id: "apde-u1-german-grammar-foundations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Ich ___ heute Pizza' (V2 word order):",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "esse heute"
                    },
                    {
                              "id": "b",
                              "text": "heute esse"
                    },
                    {
                              "id": "c",
                              "text": "esse Pizza heute"
                    },
                    {
                              "id": "d",
                              "text": "heute Pizza esse"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "V2 rule",
                              "statement": "Verb must be second."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "V2: 'Ich esse heute Pizza' — verb 'esse' second; 'heute' can move but verb stays second.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Subordinate clauses differ — verb goes last.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "esse heute",
          "commonErrors": [
                    "Putting verb first or last."
          ]
},
        },
        {
          id: "apde-u1-german-grammar-foundations-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain German cases and why they challenge English speakers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "German cases",
                              "statement": "Four-way noun marking."
                    },
                    {
                              "kind": "skill",
                              "name": "Analysis",
                              "statement": "Cross-linguistic difficulty."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "English marks roles by word order ('I see him' vs 'He sees me'); German marks by case endings — 'Ich sehe ihn' (accusative) vs 'Er sieht mich' (accusative) — same case, different position.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Four cases × three genders × two numbers = 24 article forms; must memorize der/die/das × nom/acc/dat/gen — daunting but systematic.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cases allow flexible word order for emphasis — 'Den Mann sehe ich' puts object first for focus; English can't do this without awkwardness.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Cases mark roles via endings; flexible word order",
          "commonErrors": [
                    "Thinking word order is fixed — cases enable flexibility."
          ]
},
        },
        {
          id: "apde-u1-german-grammar-foundations-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how German's case system reflects its grammatical philosophy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Case system",
                              "statement": "Explicit role marking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "German cases make grammatical roles explicit — noun endings show function regardless of position; precision over flexibility; reflects Germanic linguistic tradition.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Benefits: flexible word order for emphasis; unambiguous parsing of complex sentences; systematic once learned — cases are logical not arbitrary.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Challenges: 24 article combinations to memorize; English speakers must rethink sentence structure — moving from positional to morphological thinking.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: case system reflects German's precision-oriented grammar — explicit marking enables both clarity and flexibility; challenging but rewarding.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Cases = explicit marking enabling flexibility + precision",
          "commonErrors": [
                    "Seeing as arbitrary complexity — it's systematic logic."
          ]
},
        },
      ],
    },
  ],
};
