import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "apmt-u2-lesson-2-1",
  code: "2-1",
  title: "Major and Minor Scales",
  goal: "I CAN construct and identify major and minor scales.",
  standards: ["Unit 2"],
  vocabulary: [
    { term: "Major scale", definition: "W-W-H-W-W-W-H pattern — happy/bright sound." },
    { term: "Natural minor", definition: "W-H-W-W-H-W-W pattern — sad/serious sound." },
    { term: "Harmonic minor", definition: "Natural minor + raised 7th — exotic tension." },
    { term: "Melodic minor", definition: "Raised 6th & 7th ascending, natural descending." },
    { term: "Relative keys", definition: "Major and minor sharing key signature — same notes, different tonic." },
    { term: "Parallel keys", definition: "Same tonic, different key signature — major vs. minor." },
  ],
  concepts: [
    {
      id: "apmt-u2-major-minor-scales",
      title: "Major and minor scales",
      skill: "Construct major and minor scales with correct intervals.",
      lesson: {
        sections: [
          {
            heading: "Major scale",
            body: "Pattern W-W-H-W-W-W-H (whole-whole-half-whole-whole-whole-half) — C major: C-D-E-F-G-A-B-C; bright, resolved sound.",
          },
          {
            heading: "Minor scales",
            body: "Natural minor (W-H-W-W-H-W-W) — relative minor; harmonic minor (raised 7th) — tension; melodic minor (raised 6th/7th up) — smoother.",
          },
        ],
        keyFormulas: [
          { name: "Major scale", statement: "W-W-H-W-W-W-H" },
          { name: "Natural minor", statement: "W-H-W-W-H-W-W" },
          { name: "Harmonic minor", statement: "Natural minor + raised 7th" },
          { name: "Relative keys", statement: "Major & minor sharing key signature (e.g., C major/A minor)" },
        ],
        workedExample: {
          problem: "Construct A harmonic minor",
          solution: "A natural minor: A-B-C-D-E-F-G-A; harmonic minor raises 7th (G→G#): A-B-C-D-E-F-G#-A — creates augmented 2nd interval B-C? No: F-G# augmented 2nd — exotic tension.",
        },
      },
      questions: [
        {
          id: "apmt-u2-major-minor-scales-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Major scale pattern is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "W-H-W-W-H-W-W"
                    },
                    {
                              "id": "b",
                              "text": "W-W-H-W-W-W-H"
                    },
                    {
                              "id": "c",
                              "text": "H-W-W-H-W-W-W"
                    },
                    {
                              "id": "d",
                              "text": "W-W-W-H-W-W-H"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Major scale",
                              "statement": "W-W-H-W-W-W-H pattern."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Major scale: whole-whole-half-whole-whole-whole-half — C-D-E-F-G-A-B-C; 2 whole, half, 2 whole, half.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "W-W-H-W-W-W-H",
          "commonErrors": [
                    "Confusing with minor pattern."
          ]
},
        },
        {
          id: "apmt-u2-major-minor-scales-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Harmonic minor differs from natural minor by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "lowered 6th"
                    },
                    {
                              "id": "b",
                              "text": "raised 7th"
                    },
                    {
                              "id": "c",
                              "text": "raised 6th"
                    },
                    {
                              "id": "d",
                              "text": "lowered 7th"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Harmonic minor",
                              "statement": "Raised 7th for tension."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Harmonic minor raises the 7th scale degree (leading tone) — creates augmented 2nd interval (between 6th and 7th) giving exotic tension resolving to tonic.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Natural minor has minor 7th (subtonic); harmonic minor has major 7th (leading tone).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Raised 7th",
          "commonErrors": [
                    "Confusing with melodic minor."
          ]
},
        },
        {
          id: "apmt-u2-major-minor-scales-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many half steps in a major scale? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Half steps",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Pattern",
                              "statement": "W-W-H-W-W-W-H = 2 half steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Major scale has 2 half steps (the two H's in pattern) — total 12 semitones.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $2$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "2",
          "commonErrors": [
                    "Counting whole steps instead."
          ]
},
        },
        {
          id: "apmt-u2-major-minor-scales-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between natural, harmonic, and melodic minor scales.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Minor scale types",
                              "statement": "Three versions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Natural minor: W-H-W-W-H-W-W — pure minor, no alterations; melodic minor: raises 6th & 7th ascending (smoother), natural descending; harmonic minor: raises only 7th (exotic augmented 2nd).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Each serves different musical purposes: natural = pure minor sound; harmonic = strong leading tone tension; melodic = smooth vocal lines ascending.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Composers choose based on desired effect — harmonic for dramatic tension, melodic for singable lines.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Natural=pure, Harmonic=raised 7th, Melodic=raised 6th+7th up",
          "commonErrors": [
                    "Conflating the three — each has distinct alterations."
          ]
},
        },
        {
          id: "apmt-u2-major-minor-scales-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze why major and minor scales sound different despite sharing notes. What creates the emotional difference?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Major vs. minor",
                              "statement": "Same notes, different tonic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Relative major/minor share same notes (C major = A minor) — difference is tonic/emphasis; C major centers on C (major 3rd E), A minor centers on A (minor 3rd C) — different tonal gravity.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Emotional difference: major has major 3rd (brighter, happier); minor has minor 3rd (darker, sadder) — the 3rd scale degree determines major/minor quality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Same notes, different hierarchy — emphasizing C vs. A creates completely different emotional effect; scale quality determined by intervals from tonic.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: major/minor difference is tonal hierarchy — same pitch collection, different tonic creates different emotional character via 3rd interval quality.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Same notes, different tonic — 3rd determines major/minor",
          "commonErrors": [
                    "Thinking they're different scales — they're same notes recontextualized."
          ]
},
        },
      ],
    },
  ],
};
