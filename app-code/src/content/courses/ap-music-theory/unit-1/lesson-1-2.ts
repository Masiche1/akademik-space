import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "apmt-u1-lesson-1-2",
  code: "1-2",
  title: "Rhythm and Meter",
  goal: "I CAN identify time signatures, note values, and rhythmic patterns.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Time signature", definition: "Two numbers — beats per measure / note value getting beat." },
    { term: "Common time", definition: "4/4 — four quarter-note beats per measure; most common." },
    { term: "Compound time", definition: "6/8, 9/8, 12/8 — beats subdivided into threes." },
    { term: "Note values", definition: "Whole=4 beats, half=2, quarter=1, eighth=0.5, sixteenth=0.25." },
    { term: "Dotted notes", definition: "Dot adds half the note's value — dotted half = 3 beats." },
    { term: "Syncopation", definition: "Accent on weak beat — creates rhythmic surprise/groove." },
  ],
  concepts: [
    {
      id: "apmt-u1-rhythm-meter",
      title: "Rhythm and meter",
      skill: "Identify time signatures, note values, and rhythmic patterns.",
      lesson: {
        sections: [
          {
            heading: "Time signatures",
            body: "Top number = beats per measure, bottom = note value for beat; 4/4 common time, 3/4 waltz, 6/8 compound (two dotted-quarter beats subdivided in threes).",
          },
          {
            heading: "Note values",
            body: "Whole=4, half=2, quarter=1, eighth=0.5, sixteenth=0.25 beats; dots add half value; rests correspond to notes.",
          },
        ],
        keyFormulas: [
          { name: "Note values", statement: "Whole=4 / Half=2 / Quarter=1 / Eighth=0.5 / Sixteenth=0.25" },
          { name: "Dotted note", statement: "Note + half its value (dotted half = 2+1=3)" },
          { name: "Compound time", statement: "6/8 = two beats each subdivided in three" },
        ],
        workedExample: {
          problem: "Calculate dotted quarter note value",
          solution: "Quarter = 1 beat; dot adds half (0.5) → dotted quarter = 1.5 beats.",
        },
      },
      questions: [
        {
          id: "apmt-u1-rhythm-meter-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 4/4 time, a quarter note gets ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2 beats"
                    },
                    {
                              "id": "b",
                              "text": "1 beat"
                    },
                    {
                              "id": "c",
                              "text": "0.5 beat"
                    },
                    {
                              "id": "d",
                              "text": "4 beats"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Time signature",
                              "statement": "Bottom number = beat unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4/4: top=4 beats per measure, bottom=4 means quarter note gets beat; quarter=1 beat, eighth=0.5.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "1 beat",
          "commonErrors": [
                    "Confusing bottom number meaning."
          ]
},
        },
        {
          id: "apmt-u1-rhythm-meter-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A dotted half note equals ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2 beats"
                    },
                    {
                              "id": "b",
                              "text": "3 beats"
                    },
                    {
                              "id": "c",
                              "text": "4 beats"
                    },
                    {
                              "id": "d",
                              "text": "1.5 beats"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Dot calculation",
                              "statement": "Half=2 + half of 2 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Half note=2 beats; dot adds half (1) → $2+1=3$ beats.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Dotted note = note + half its value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "3 beats",
          "commonErrors": [
                    "Forgetting dot adds half."
          ]
},
        },
        {
          id: "apmt-u1-rhythm-meter-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "In 6/8 time, how many eighth notes per measure? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Eighth notes",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Time signature",
                              "statement": "6/8 = 6 eighth-note beats."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6/8: top number 6 = six beats per measure; bottom 8 = eighth note gets beat → 6 eighth notes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $6$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "6",
          "commonErrors": [
                    "Confusing compound/simple time."
          ]
},
        },
        {
          id: "apmt-u1-rhythm-meter-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain compound vs. simple meter. How does 6/8 differ from 3/4?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Meter types",
                              "statement": "Subdivision pattern."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Simple meter (3/4): three quarter-note beats, each subdivided in two — 'ONE-two-THREE-two'; compound (6/8): two dotted-quarter beats, each subdivided in three — 'ONE-two-three FOUR-two-three.'",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "6/8 feels like two big beats (compound duple); 3/4 feels like three beats (simple triple); same number of eighth notes but different accent/grouping.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compound meter divides beat into three (triplet feel); simple divides into two — affects groove and phrasing.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Compound = beats in threes; Simple = beats in twos",
          "commonErrors": [
                    "Confusing — same note count, different grouping."
          ]
},
        },
        {
          id: "apmt-u1-rhythm-meter-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how syncopation creates rhythmic interest. Why is it effective in popular music?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Syncopation",
                              "statement": "Weak-beat accents."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Syncopation accents weak beats or offbeats — creates surprise, tension, groove; violates expected accent pattern making rhythm more interesting.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Effective in popular music: creates danceable grooves (funk, reggae, hip-hop); maintains listener engagement through rhythmic complexity; contrasts with predictable beat.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Examples: James Brown's 'funky drummer' (anticipated bass), reggae's offbeat guitar skank, hip-hop's syncopated flows — syncopation is genre-defining.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: syncopation adds rhythmic sophistication — creates groove and interest by subverting expectations; essential for popular music's rhythmic appeal.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Syncopation creates groove through weak-beat accents",
          "commonErrors": [
                    "Thinking it's just 'off-beat' — it's systematic surprise."
          ]
},
        },
      ],
    },
  ],
};
