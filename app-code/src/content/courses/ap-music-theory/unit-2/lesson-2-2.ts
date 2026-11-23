import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "apmt-u2-lesson-2-2",
  code: "2-2",
  title: "Musical Modes",
  goal: "I CAN identify and construct the seven Greek modes.",
  standards: ["Unit 2"],
  vocabulary: [
    { term: "Mode", definition: "Scale starting on different degree of major scale — same notes, different tonic/emphasis." },
    { term: "Ionian", definition: "Major scale — mode 1, bright/happy." },
    { term: "Dorian", definition: "Minor with raised 6th — mode 2, folk/jazz character." },
    { term: "Phrygian", definition: "Minor with lowered 2nd — mode 3, Spanish/exotic." },
    { term: "Lydian", definition: "Major with raised 4th — mode 4, dreamy/floating." },
    { term: "Aeolian", definition: "Natural minor — mode 5, sad/serious." },
  ],
  concepts: [
    {
      id: "apmt-u2-modes",
      title: "Modes",
      skill: "Identify and construct modes from major scale.",
      lesson: {
        sections: [
          {
            heading: "Modes",
            body: "Same notes as major scale, different starting note creates different mode — Ionian (1), Dorian (2), Phrygian (3), Lydian (4), Mixolydian (5), Aeolian (6), Locrian (7); each has distinct character.",
          },
          {
            heading: "Modal character",
            body: "Dorian (minor + raised 6th) — folk; Phrygian (minor + lowered 2nd) — Spanish; Lydian (major + raised 4th) — floating; Mixolydian (major + lowered 7th) — blues/rock; Locrian (half-diminished) — unstable.",
          },
        ],
        keyFormulas: [
          { name: "Mode order", statement: "Ionian / Dorian / Phrygian / Lydian / Mixolydian / Aeolian / Locrian" },
          { name: "Mode =", statement: "Major scale starting on different degree" },
          { name: "Key modes", statement: "Dorian=folk, Phrygian=Spanish, Lydian=floating, Mixolydian=blues" },
        ],
        workedExample: {
          problem: "D Dorian scale",
          solution: "D major scale notes D-E-F#-G-A-B-C#; Dorian starts on 2nd degree of C major = D-E-F-G-A-B-C — natural minor with raised 6th (B natural).",
        },
      },
      questions: [
        {
          id: "apmt-u2-modes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Dorian mode is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "major scale"
                    },
                    {
                              "id": "b",
                              "text": "minor scale with raised 6th"
                    },
                    {
                              "id": "c",
                              "text": "major with raised 4th"
                    },
                    {
                              "id": "d",
                              "text": "diminished"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dorian mode",
                              "statement": "Minor + raised 6th."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dorian = minor scale with raised 6th — folk/jazz character; mode 2 (starts on 2nd degree of major scale).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Minor + raised 6th",
          "commonErrors": [
                    "Confusing with other modes."
          ]
},
        },
        {
          id: "apmt-u2-modes-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Phrygian mode is characterized by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "raised 6th"
                    },
                    {
                              "id": "b",
                              "text": "lowered 2nd creating exotic sound"
                    },
                    {
                              "id": "c",
                              "text": "raised 4th"
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
                              "kind": "definition",
                              "name": "Phrygian mode",
                              "statement": "Lowered 2nd = exotic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Phrygian = minor with lowered 2nd — creates semitone between 1-2 giving Spanish/flamenco/exotic character; mode 3.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "That lowered 2nd creates distinctive tension.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Lowered 2nd",
          "commonErrors": [
                    "Confusing with Dorian's raised 6th."
          ]
},
        },
        {
          id: "apmt-u2-modes-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many modes in the Greek/modal system? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Modes",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Count",
                              "statement": "Ionian through Locrian = 7 modes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7 modes: Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, Locrian — each starts on different degree of major scale.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $7$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "7",
          "commonErrors": [
                    "Confusing with scales."
          ]
},
        },
        {
          id: "apmt-u2-modes-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how modes create different musical characters from the same notes. Why is this possible?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Modal character",
                              "statement": "Same notes, different tonic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Modes use same pitch collection as major scale but start on different degrees — different tonic changes which intervals sound 'stable' vs. 'tense'; creates different emotional character.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Example: D Dorian vs. D natural minor — same key signature but Dorian has raised 6th (B natural vs. Bb) giving brighter, folk character vs. darker natural minor.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Mode = tonal hierarchy — emphasizing different scale degree creates different 'home' feeling and characteristic intervals; same notes, different meaning.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Same notes, different tonic — modes create different characters",
          "commonErrors": [
                    "Thinking modes are different scales — same notes, different emphasis."
          ]
},
        },
        {
          id: "apmt-u2-modes-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how modal jazz expanded tonal possibilities. Why did musicians adopt modes?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Modal jazz",
                              "statement": "Freedom from functional harmony."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Traditional harmony: chords have functional roles (tonic-dominant) creating predictable progressions; modal jazz (Miles Davis 'Kind of Blue') used modes — soloists could improvise freely over static harmony.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Modes offered: sustained tonal center without functional chord changes — freedom for melodic exploration; Dorian mode especially popular (minor + raised 6th = jazzy, not too dark).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Significance: expanded jazz vocabulary — moved from chord-change-driven to mode-driven improvisation; influenced rock, fusion, contemporary jazz.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: modal jazz freed improvisation from harmonic constraints — modes provided tonal center without functional progression, enabling melodic freedom.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Modal jazz freed improvisation via static harmony",
          "commonErrors": [
                    "Thinking it's just 'jazz scales' — it's structural freedom."
          ]
},
        },
      ],
    },
  ],
};
