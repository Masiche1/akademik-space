import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apmt-u1-lesson-1-1",
  code: "1-1",
  title: "Pitch and Notation",
  goal: "I CAN identify pitches, key signatures, and notation conventions.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Staff", definition: "Five lines and four spaces — standard pitch notation system." },
    { term: "Treble clef", definition: "G clef — circles G line (second line); used for higher instruments." },
    { term: "Bass clef", definition: "F clef — dots around F line (fourth line); used for lower instruments." },
    { term: "Key signature", definition: "Sharps/flats at start indicating key — determines scale." },
    { term: "Accidental", definition: "Sharp (#), flat (b), natural — modifies note temporarily." },
    { term: "Ledger lines", definition: "Lines extending staff beyond five — for very high/low pitches." },
  ],
  concepts: [
    {
      id: "apmt-u1-pitch-notation",
      title: "Reading pitch and notation",
      skill: "Identify pitches, key signatures, and notation conventions.",
      lesson: {
        sections: [
          {
            heading: "Pitch notation",
            body: "Staff = 5 lines/4 spaces; treble clef for high instruments (G line), bass clef for low (F line); ledger lines extend for extreme pitches.",
          },
          {
            heading: "Key signatures",
            body: "Sharps/flats at start determine key — order of sharps F#C#G#D#A#E#B#, flats Bb Eb Ab Db Gb Cb Fb; major/minor relationship.",
          },
        ],
        keyFormulas: [
          { name: "Treble clef", statement: "G on second line; spaces F-A-C-E" },
          { name: "Bass clef", statement: "F on fourth line; spaces A-C-E-G" },
          { name: "Sharp order", statement: "F# C# G# D# A# E# B#" },
          { name: "Flat order", statement: "Bb Eb Ab Db Gb Cb Fb" },
        ],
        workedExample: {
          problem: "Identify key signature with 3 sharps",
          solution: "Order F#-C#-G# → A major or F# minor; 3 sharps = A major (or relative minor F# minor).",
        },
      },
      questions: [
        {
          id: "apmt-u1-pitch-notation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The treble clef indicates ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "F line"
                    },
                    {
                              "id": "b",
                              "text": "G on second line"
                    },
                    {
                              "id": "c",
                              "text": "C position"
                    },
                    {
                              "id": "d",
                              "text": "bass clef"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Treble clef",
                              "statement": "G clef for high instruments."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Treble clef (G clef) circles G line — second line of staff; used for higher-pitched instruments like violin, flute.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "G on second line",
          "commonErrors": [
                    "Confusing with bass clef (F line)."
          ]
},
        },
        {
          id: "apmt-u1-pitch-notation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A key signature with 4 sharps indicates ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "C major"
                    },
                    {
                              "id": "b",
                              "text": "E major or C# minor"
                    },
                    {
                              "id": "c",
                              "text": "A major"
                    },
                    {
                              "id": "d",
                              "text": "G major"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Key signatures",
                              "statement": "Sharps order determines key."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sharp order F#-C#-G#-D# = 4 sharps → E major (or relative minor C# minor); last sharp is leading tone of major key.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Major key = last sharp + half step; minor = relative minor a minor third below.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "E major or C# minor",
          "commonErrors": [
                    "Confusing major/minor or counting wrong."
          ]
},
        },
        {
          id: "apmt-u1-pitch-notation-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If middle C is on a ledger line below treble staff, how many ledger lines below? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Ledger lines",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Staff position",
                              "statement": "Middle C = one ledger line below treble."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Middle C is on one ledger line below the treble staff — connects treble and bass clefs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $1$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "1",
          "commonErrors": [
                    "Confusing with bass clef position."
          ]
},
        },
        {
          id: "apmt-u1-pitch-notation-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how key signatures work and why they're efficient. What do they communicate?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Key signatures",
                              "statement": "Efficiency + meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Key signatures place sharps/flats at start — indicate which notes are altered throughout piece; efficient (not repeating accidentals on every note) and communicate key immediately.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "They communicate: major/minor key (via sharps/flats), harmonic context, tonal center — readers know which scale without checking every note.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sharp order F#-C#-G#-D#-A#-E#-B#, flats reverse — memorizing order helps identify keys quickly.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Key signatures = efficiency + immediate key communication",
          "commonErrors": [
                    "Thinking they're optional — they define tonal context."
          ]
},
        },
        {
          id: "apmt-u1-pitch-notation-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how notation systems reflect cultural assumptions about music. What does Western notation prioritize?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Notation as culture",
                              "statement": "What gets notated."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Western notation prioritizes: pitch (exact frequencies), rhythm (precise durations), harmony (chords), form — reflects Western classical tradition's emphasis on precision and reproducibility.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "What it omits: timbre nuance (instrument-specific sound), microtonality (beyond 12-tone), improvisation, oral tradition — notation captures some aspects, not all musical information.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Other traditions: Indian notation (sargam), Indonesian notation, oral traditions (griots, jazz improvisation) — different priorities; notation isn't universal, reflects cultural values.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: Western notation reflects cultural assumptions — prioritizes pitch/rhythm/harmony precision; other traditions notate differently or rely on oral transmission; notation is cultural not universal.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Notation reflects cultural priorities — not universal",
          "commonErrors": [
                    "Assuming notation is neutral — it encodes cultural values."
          ]
},
        },
      ],
    },
  ],
};
