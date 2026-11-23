import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "apmt-u4-lesson-4-1",
  code: "4-1",
  title: "Musical Form",
  goal: "I CAN analyze musical form and structure.",
  standards: ["Unit 4"],
  vocabulary: [
    { term: "Binary form", definition: "Two-part structure — A B (often A A B A)." },
    { term: "Ternary form", definition: "Three-part — A B A (minuet, song form)." },
    { term: "Rondo form", definition: "ABACA — recurring theme (A) with contrasting episodes." },
    { term: "Sonata form", definition: "Exposition-Development-Recapitulation — complex classical structure." },
    { term: "Theme and variations", definition: "Single theme varied repeatedly — each variation different treatment." },
    { term: "Strophic form", definition: "Same melody repeated with different lyrics — verses." },
  ],
  concepts: [
    {
      id: "apmt-u4-musical-form",
      title: "Musical form",
      skill: "Identify and analyze musical structures.",
      lesson: {
        sections: [
          {
            heading: "Simple forms",
            body: "Binary (A-B), ternary (A-B-A), strophic (same melody, different lyrics) — clear section structures.",
          },
          {
            heading: "Complex forms",
            body: "Rondo (ABACA), sonata (exposition-development-recapitulation), theme & variations — sophisticated development.",
          },
        ],
        keyFormulas: [
          { name: "Binary", statement: "A-B (two sections)" },
          { name: "Ternary", statement: "A-B-A (three sections)" },
          { name: "Rondo", statement: "ABACA (recurring theme)" },
          { name: "Sonata", statement: "Exposition-Development-Recapitulation" },
          { name: "Theme & variations", statement: "Theme + varied repetitions" },
        ],
        workedExample: {
          problem: "Identify form of 'Twinkle Twinkle'",
          solution: "Strophic form — same melody repeated for each verse with different lyrics; ABCD lyrics but same musical structure.",
        },
      },
      questions: [
        {
          id: "apmt-u4-musical-form-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ternary form is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A-B"
                    },
                    {
                              "id": "b",
                              "text": "A-B-A"
                    },
                    {
                              "id": "c",
                              "text": "ABACA"
                    },
                    {
                              "id": "d",
                              "text": "A-A-A"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ternary form",
                              "statement": "A-B-A structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ternary form = A-B-A — two same outer sections with contrasting middle; minuet, song form use this.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "A-B-A",
          "commonErrors": [
                    "Confusing with binary (A-B) or rondo."
          ]
},
        },
        {
          id: "apmt-u4-musical-form-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sonata form consists of ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A-B-A"
                    },
                    {
                              "id": "b",
                              "text": "Exposition-Development-Recapitulation"
                    },
                    {
                              "id": "c",
                              "text": "ABACA"
                    },
                    {
                              "id": "d",
                              "text": "strophic"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sonata form",
                              "statement": "Three-part classical structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sonata form = Exposition (themes presented) → Development (themes explored/transformed) → Recapitulation (themes return, resolved) — complex classical structure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It's more complex than simple A-B-A — involves thematic development.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Exposition-Dev-Recap",
          "commonErrors": [
                    "Confusing with ternary — sonata is more complex."
          ]
},
        },
        {
          id: "apmt-u4-musical-form-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "In rondo form ABACA, how many times does theme A appear? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "A appearances",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Count",
                              "statement": "ABACA = A appears 3 times."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rondo ABACA: A appears 3 times (positions 1,3,5), B and C once each — recurring theme with contrasting episodes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $3$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "3",
          "commonErrors": [
                    "Counting letters not sections."
          ]
},
        },
        {
          id: "apmt-u4-musical-form-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare binary and ternary form. When is each appropriate?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Form comparison",
                              "statement": "Simple structures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Binary (A-B): two contrasting sections — simple, balanced; appropriate for dances, short pieces, clear contrast.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Ternary (A-B-A): outer sections same, middle contrasting — provides return/familiarity; appropriate for minuets, songs, when wanting return to home.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ternary adds 'return' element — more satisfying closure than binary's simple contrast.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Binary=A-B contrast; Ternary=A-B-A return",
          "commonErrors": [
                    "Conflating — ternary has return, binary doesn't."
          ]
},
        },
        {
          id: "apmt-u4-musical-form-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how form affects musical experience. Why does sonata form create 'journey' feeling?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Form as narrative",
                              "statement": "Journey structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sonata form: Exposition (themes introduced, stable key) → Development (themes explored, modulated, unstable) → Recapitulation (themes return, resolved in home key) — mirrors journey narrative.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Journey feeling: departure (exposition) → exploration/struggle (development) → return/homecoming (recapitulation); creates sense of adventure and resolution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This is why sonata form dominated classical symphonies — provided narrative structure, emotional arc, sense of journey; form IS storytelling in music.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: form shapes musical experience — sonata's journey structure creates narrative arc; listeners experience departure-exploration-return as musical story.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Sonata form = musical journey narrative",
          "commonErrors": [
                    "Seeing form as technical only — it's experiential."
          ]
},
        },
      ],
    },
  ],
};
