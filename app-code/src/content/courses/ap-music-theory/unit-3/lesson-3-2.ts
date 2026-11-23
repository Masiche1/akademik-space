import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "apmt-u3-lesson-3-2",
  code: "3-2",
  title: "Harmonic Progression",
  goal: "I CAN identify and analyze chord progressions and cadences.",
  standards: ["Unit 3"],
  vocabulary: [
    { term: "Harmonic progression", definition: "Sequence of chords — creates tonal structure and emotional arc." },
    { term: "I-IV-V-I", definition: "Most common progression — stable, resolved feeling." },
    { term: "Cadence", definition: "Chord progression ending phrase — authentic, plagal, half, deceptive." },
    { term: "Authentic cadence", definition: "V-I — strongest resolution, ends on tonic." },
    { term: "Plagal cadence", definition: "IV-I — 'amen' cadence, softer resolution." },
    { term: "Deceptive cadence", definition: "V-vi — expected V-I but goes elsewhere — surprise." },
  ],
  concepts: [
    {
      id: "apmt-u3-harmonic-progression",
      title: "Harmonic progressions and cadences",
      skill: "Identify progressions and cadences in music.",
      lesson: {
        sections: [
          {
            heading: "Progressions",
            body: "I-IV-V-I most common (stable); vi-IV-I-V pop; ii-V-I jazz; progressions create tension/resolution patterns shaping emotional arc.",
          },
          {
            heading: "Cadences",
            body: "Authentic (V-I strong), plagal (IV-I soft/'amen'), half (ends on V — incomplete), deceptive (V-vi surprise) — signal phrase endings.",
          },
        ],
        keyFormulas: [
          { name: "I-IV-V-I", statement: "Most common — stable resolution" },
          { name: "Authentic cadence", statement: "V-I — strongest resolution" },
          { name: "Plagal cadence", statement: "IV-I — 'amen' / softer" },
          { name: "Deceptive cadence", statement: "V-vi — surprise, avoids expected I" },
        ],
        workedExample: {
          problem: "Identify cadence in 'Pachelbel's Canon'",
          solution: "Canon in D uses I-V-vi-iii-IV-I-IV-V — mostly stepwise descending bass; ends with authentic cadence feel through dominant-tonic relationship.",
        },
      },
      questions: [
        {
          id: "apmt-u3-harmonic-progression-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An authentic cadence is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "IV-I"
                    },
                    {
                              "id": "b",
                              "text": "V-I"
                    },
                    {
                              "id": "c",
                              "text": "V-vi"
                    },
                    {
                              "id": "d",
                              "text": "I-IV"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Authentic cadence",
                              "statement": "V-I strongest resolution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Authentic cadence = V-I — dominant to tonic; strongest resolution signaling phrase ending; complete, conclusive feel.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "V-I",
          "commonErrors": [
                    "Confusing with plagal (IV-I)."
          ]
},
        },
        {
          id: "apmt-u3-harmonic-progression-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A deceptive cadence works by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "resolving to tonic"
                    },
                    {
                              "id": "b",
                              "text": "V going to vi instead of expected I"
                    },
                    {
                              "id": "c",
                              "text": "ending on dominant"
                    },
                    {
                              "id": "d",
                              "text": "repeating progression"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Deceptive cadence",
                              "statement": "V-vi surprise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Deceptive cadence: V chord (expecting resolution to I) instead goes to vi — creates surprise, avoids expected resolution; keeps music moving forward.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It's 'deceptive' because it promises resolution but doesn't deliver.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "V-vi surprise",
          "commonErrors": [
                    "Thinking it's just any unexpected chord."
          ]
},
        },
        {
          id: "apmt-u3-harmonic-progression-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "In I-IV-V-I progression, how many chords? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Chords",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Count",
                              "statement": "I, IV, V, I = 4 chords."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "I-IV-V-I = 4 chords (I appears twice as start/end).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $4$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "4",
          "commonErrors": [
                    "Counting unique chords only."
          ]
},
        },
        {
          id: "apmt-u3-harmonic-progression-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare authentic and plagal cadences. When is each used?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Cadence types",
                              "statement": "Strong vs. soft resolution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Authentic (V-I): strongest resolution — dominant-tonic, complete conclusive ending; used for major phrase endings, final cadences.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Plagal (IV-I): softer resolution — 'amen' cadence; subdominant-tonic, less final feel; used for gentle endings, religious music ('Amen').",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Authentic = strong/complete; plagal = soft/amenable — choice affects emotional finality.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Authentic=strong V-I; Plagal=soft IV-I",
          "commonErrors": [
                    "Conflating — different functions."
          ]
},
        },
        {
          id: "apmt-u3-harmonic-progression-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how harmonic progression shapes emotional experience in music. Why does I-IV-V-I feel 'resolved'?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Harmonic function",
                              "statement": "Tension-resolution arc."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "I-IV-V-I: tonic (stable) → subdominant (departure) → dominant (tension) → tonic (resolution); creates arc of stability-tension-resolution.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "V creates maximum tension wanting resolution; I provides satisfying resolution; IV acts as bridge/departure — progression mirrors emotional journey.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Different progressions create different feelings: vi-IV-I-V (pop, wistful), ii-V-I (jazz, sophisticated), modal (static, meditative) — progression IS emotional structure.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: harmonic progression shapes emotional experience — I-IV-V-I's tension-resolution arc creates satisfying completion; progression is music's emotional syntax.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Progression = emotional syntax — tension/resolution arc",
          "commonErrors": [
                    "Seeing as just 'chord sequence' — it's emotional structure."
          ]
},
        },
      ],
    },
  ],
};
