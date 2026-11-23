import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "satrw-u3-lesson-3-2",
  code: "3-2",
  title: "Standard English Conventions",
  goal: "I CAN apply grammar rules for SAT Writing questions.",
  standards: ["SAT RW 8.x"],
  vocabulary: [
    { term: "Subject-verb agreement", definition: "Singular subject → singular verb." },
    { term: "Pronoun agreement", definition: "Pronoun matches its antecedent." },
    { term: "Modifier placement", definition: "Describing the right noun." },
    { term: "Parallel structure", definition: "Matching grammatical forms in lists." },
    { term: "Comma rules", definition: "Clauses, lists, introductory elements." },
    { term: "Verb tense", definition: "Consistent time reference." },
  ],
  concepts: [
    {
      id: "satrw-u3-grammar-conventions",
      title: "Grammar conventions",
      skill: "Apply standard English grammar rules accurately.",
      lesson: {
        sections: [
          {
            heading: "Agreement rules",
            body: "**Subject-verb**: singular subject needs singular verb — 'the group of students IS' (group is singular) not 'are'. **Pronoun**: must match antecedent in number/gender — 'each student should bring THEIR book' is wrong (each = singular → 'his or her'). Watch for intervening phrases that obscure the subject.",
          },
          {
            heading: "Modifier and parallelism",
            body: "**Modifiers** must attach to the right noun — 'Running quickly, the finish line approached' wrongly suggests the LINE is running; fix: 'Running quickly, she approached the finish line'. **Parallelism**: items in a list must match grammatically — 'to run, swimming, and bike' mixes forms; fix: 'running, swimming, and biking'.",
          },
        ],
        keyFormulas: [
          { name: "Subject-verb", statement: "Find the real subject — ignore intervening phrases" },
          { name: "Parallelism", statement: "All items in a list take the same grammatical form" },
        ],
        workedExample: {
          problem: "Fix: 'The bouquet of flowers were beautiful.'",
          solution: "Subject is 'bouquet' (singular), not 'flowers' — intervening 'of flowers' is a distractor. Correct: 'The bouquet of flowers WAS beautiful.'",
        },
      },
      questions: [
        {
          id: "satrw-u3-grammar-conventions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Each of the students ___ responsible.' Correct verb?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "are"
                    },
                    {
                              "id": "b",
                              "text": "is"
                    },
                    {
                              "id": "c",
                              "text": "were"
                    },
                    {
                              "id": "d",
                              "text": "be"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Subject-verb agreement",
                              "statement": "Each = singular."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Each' is singular — 'is responsible'; 'of the students' is an intervening phrase, not the subject.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "is",
          "commonErrors": [
                    "Agreeing with 'students' instead of 'each'."
          ]
},
        },
        {
          id: "satrw-u3-grammar-conventions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is parallel? 'She likes ___.'",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "to run, swimming, and bikes"
                    },
                    {
                              "id": "b",
                              "text": "running, swimming, and biking"
                    },
                    {
                              "id": "c",
                              "text": "run, swim, and biking"
                    },
                    {
                              "id": "d",
                              "text": "to run, to swim, and bike"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Parallel structure",
                              "statement": "Matching forms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'running, swimming, and biking' — all gerunds (-ing forms) match; mixing infinitives and gerunds breaks parallelism.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "running, swimming, biking",
          "commonErrors": [
                    "Mixing grammatical forms in lists."
          ]
},
        },
        {
          id: "satrw-u3-grammar-conventions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Is this sentence correct? 'The team of players are celebrating.' Answer 1 for correct, 0 for incorrect.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Correct?",
                              "answer": 0
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Subject-verb agreement",
                              "statement": "Team = singular."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Team' is singular — should be 'IS celebrating'; 'of players' is intervening. Incorrect → 0.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "0",
          "commonErrors": [
                    "Agreeing with 'players'."
          ]
},
        },
        {
          id: "satrw-u3-grammar-conventions-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'dangling modifier' problem and how to fix it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Modifier placement",
                              "statement": "Must attach to right noun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A dangling modifier describes the wrong noun — 'Walking to school, the rain started' suggests the RAIN was walking; the modifier 'walking to school' must attach to a person.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Fix: 'Walking to school, I got caught in the rain' — now 'I' is doing the walking; or restructure: 'As I walked to school, the rain started.'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Test: after an introductory modifier, check WHO/WHAT is doing the action — the subject must match.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Modifier must attach to the noun doing the action",
          "commonErrors": [
                    "Ignoring what the modifier describes."
          ]
},
        },
        {
          id: "satrw-u3-grammar-conventions-q5",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why 'the data are' vs 'the data is' can both be correct — what determines it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Data as singular/plural",
                              "statement": "Usage varies by context."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Data' is technically plural (datum singular) — 'the data are' in formal/scientific contexts; but common usage treats it as singular mass noun — 'the data is' acceptable in informal contexts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The SAT typically follows formal convention — 'data are' for plural countable pieces of information; but consistency within a passage matters more than the choice.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Trickier: 'the data shows' (singular verb with plural noun) is common but technically inconsistent — SAT may test this.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Formal: data are; informal: data is — consistency matters",
          "commonErrors": [
                    "Assuming one form is always wrong."
          ]
},
        },
      ],
    },
  ],
};
