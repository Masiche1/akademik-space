import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "apah-u1-lesson-1-2",
  code: "1-2",
  title: "Greek Art",
  goal: "I CAN analyze Greek art's naturalism and idealization.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Kouros", definition: "Archaic Greek male nude statue — stiff, frontal, Egyptian-influenced." },
    { term: "Kore", definition: "Archaic Greek female statue — clothed, similar stiffness." },
    { term: "Classical period", definition: "Greek art's peak — naturalism, contrapposto, idealization." },
    { term: "Contrapposto", definition: "Weight shift creating natural pose — one leg bearing weight, other relaxed." },
    { term: "Idealization", definition: "Depicting figures as perfect/beautiful — not realistic portraiture." },
    { term: "Polykleitos", definition: "Greek sculptor — Canon of proportions, Doryphoros (Spear Bearer)." },
  ],
  concepts: [
    {
      id: "apah-u1-greek-art",
      title: "Greek art and idealization",
      skill: "Analyze Greek art's naturalism and philosophical idealization.",
      lesson: {
        sections: [
          {
            heading: "Evolution",
            body: "Archaic (stiff, Egyptian-influenced kouroi) → Classical (naturalistic, contrapposto) → Hellenistic (dramatic, emotional, realistic).",
          },
          {
            heading: "Key innovations",
            body: "Contrapposto (natural weight shift), idealized proportions, anatomical accuracy, expression of emotion — art reflecting Greek philosophical ideals of beauty and human potential.",
          },
        ],
        keyFormulas: [
          { name: "Greek periods", statement: "Archaic → Classical → Hellenistic" },
          { name: "Contrapposto", statement: "Weight shift creating natural asymmetry" },
          { name: "Key works", statement: "Doryphoros / Discobolus / Laocoön" },
        ],
        workedExample: {
          problem: "Analyze contrapposto's significance",
          solution: "Contrapposto (weight on one leg, other relaxed) creates naturalistic pose suggesting movement/life — revolutionary departure from static Egyptian/Archaic stiffness; made figures appear alive.",
        },
      },
      questions: [
        {
          id: "apah-u1-greek-art-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Contrapposto refers to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Greek pottery"
                    },
                    {
                              "id": "b",
                              "text": "weight shift creating natural pose"
                    },
                    {
                              "id": "c",
                              "text": "Greek temples"
                    },
                    {
                              "id": "d",
                              "text": "mosaic technique"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Contrapposto",
                              "statement": "Natural weight-shift pose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Contrapposto is weight shift where one leg bears weight, other relaxed — creates naturalistic, lifelike pose revolutionary in Greek sculpture.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Natural weight-shift pose",
          "commonErrors": [
                    "Confusing with other Greek terms."
          ]
},
        },
        {
          id: "apah-u1-greek-art-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Greek idealization differs from Egyptian art because Greek art ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is more religious"
                    },
                    {
                              "id": "b",
                              "text": "pursues naturalistic beauty and human perfection"
                    },
                    {
                              "id": "c",
                              "text": "is less skilled"
                    },
                    {
                              "id": "d",
                              "text": "uses less stone"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Greek vs. Egyptian",
                              "statement": "Naturalism vs. convention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Greek idealization pursued naturalistic beauty and human perfection — anatomical accuracy, contrapposto, expressions; Egyptian art used formal conventions for religious function, not naturalism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Greek art reflected philosophical ideals — beauty, human potential, rational order.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Naturalistic beauty + human perfection",
          "commonErrors": [
                    "Equating all ancient art — purposes differed."
          ]
},
        },
        {
          id: "apah-u1-greek-art-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Polykleitos's Canon established ideal proportions where head = 1/8 body height. How many heads tall? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Heads",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Reciprocal",
                              "statement": "$1/(1/8) = 8$ heads tall."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "If head = 1/8 body, figure is $8$ heads tall (vs. Egyptian 6 heads).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $8$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "8",
          "commonErrors": [
                    "Confusing with Egyptian proportion."
          ]
},
        },
        {
          id: "apah-u1-greek-art-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare Archaic kouroi and Classical sculpture. What changed and why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Greek art evolution",
                              "statement": "Stiff → naturalistic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Archaic kouroi: stiff, frontal, Egyptian-influenced — 'standing stiffly with arms at sides'; formal, formulaic, less lifelike.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Classical sculpture: contrapposto (natural weight shift), anatomical accuracy, idealized proportions, expressions — lifelike, dynamic, reflecting Greek philosophical ideals of natural beauty.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Change reflects cultural shift — from formulaic religious art to philosophical exploration of human form and beauty; art became vehicle for ideas about human potential.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Archaic stiff → Classical naturalistic; cultural/philosophical shift",
          "commonErrors": [
                    "Treating as mere style change — reflects worldview shift."
          ]
},
        },
        {
          id: "apah-u1-greek-art-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how Greek art's idealization relates to Greek philosophy. What did 'perfect' mean to Greeks?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Idealization",
                              "statement": "Art reflects philosophy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Greek idealization wasn't 'realistic' — it was 'ideal': figures depicted as they SHOULD be, not as they ARE; mathematical proportions (Polykleitos's Canon), perfect anatomy, youthful beauty.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "This reflects Greek philosophy — Plato's ideal Forms, Aristotle's belief in telos (purpose/perfection); art embodied rational order and human potential.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Idealization served educational/moral purpose — showed what humans could aspire to be; art wasn't just decoration but philosophical statement about human nature and potential.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: Greek idealization embodied philosophical ideals — art as embodiment of rational beauty and human potential, not mere representation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Idealization embodied philosophical ideals — art as philosophy",
          "commonErrors": [
                    "Seeing idealization as flaw — it was intentional philosophy."
          ]
},
        },
      ],
    },
  ],
};
