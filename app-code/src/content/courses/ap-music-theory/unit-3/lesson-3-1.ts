import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "apmt-u3-lesson-3-1",
  code: "3-1",
  title: "Chord Construction",
  goal: "I CAN build triads and seventh chords in any key.",
  standards: ["Unit 3"],
  vocabulary: [
    { term: "Triad", definition: "Three-note chord — root, third, fifth; major or minor." },
    { term: "Major triad", definition: "Root + major 3rd + perfect 5th — happy/stable." },
    { term: "Minor triad", definition: "Root + minor 3rd + perfect 5th — sad/darker." },
    { term: "Seventh chord", definition: "Triad + seventh — adds color/tension." },
    { term: "Dominant seventh", definition: "Major triad + minor 7th — wants to resolve to tonic." },
    { term: "Inversion", definition: "Chord with note other than root in bass — smooth voice leading." },
  ],
  concepts: [
    {
      id: "apmt-u3-chord-construction",
      title: "Building chords",
      skill: "Construct triads and seventh chords correctly.",
      lesson: {
        sections: [
          {
            heading: "Triads",
            body: "Three notes: root + third + fifth; major (M3+P5) vs. minor (m3+P5); quality determined by third interval.",
          },
          {
            heading: "Seventh chords",
            body: "Triad + seventh; dominant 7th (M3+m7) creates tension wanting resolution; major 7th (M3+M7) stable; minor 7th (m3+m7) mellow.",
          },
        ],
        keyFormulas: [
          { name: "Major triad", statement: "Root + M3 + P5" },
          { name: "Minor triad", statement: "Root + m3 + P5" },
          { name: "Dominant 7th", statement: "Major triad + minor 7th — resolves to tonic" },
          { name: "Chord quality", statement: "Determined by third interval (major/minor)" },
        ],
        workedExample: {
          problem: "Build C major triad",
          solution: "C root; major third = E (4 semitones); perfect fifth = G (7 semitones); C-E-G = C major triad.",
        },
      },
      questions: [
        {
          id: "apmt-u3-chord-construction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A major triad consists of ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "root + minor 3rd + 5th"
                    },
                    {
                              "id": "b",
                              "text": "root + major 3rd + perfect 5th"
                    },
                    {
                              "id": "c",
                              "text": "root + 3rd + 7th"
                    },
                    {
                              "id": "d",
                              "text": "root + 2nd + 4th"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Major triad",
                              "statement": "M3 + P5 above root."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Major triad = root + major third (4 semitones) + perfect fifth (7 semitones); C-E-G = C major.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "M3 + P5",
          "commonErrors": [
                    "Confusing with minor triad."
          ]
},
        },
        {
          id: "apmt-u3-chord-construction-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A dominant seventh chord has ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "major 7th"
                    },
                    {
                              "id": "b",
                              "text": "minor 7th above major triad"
                    },
                    {
                              "id": "c",
                              "text": "minor 3rd"
                    },
                    {
                              "id": "d",
                              "text": "augmented 5th"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dominant seventh",
                              "statement": "Major triad + minor 7th."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dominant 7th = major triad + minor 7th (10 semitones above root); creates strong tension wanting resolution to tonic; V7 → I.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "That's why 'dominant' — it dominates/wants to resolve.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Major triad + minor 7th",
          "commonErrors": [
                    "Confusing with other seventh types."
          ]
},
        },
        {
          id: "apmt-u3-chord-construction-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many semitones between C and E (major third)? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Semitones",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Interval",
                              "statement": "C-D-E = C to E = 4 semitones (major third)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "C to E = 4 semitones = major third.",
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
                    "Counting wrong interval."
          ]
},
        },
        {
          id: "apmt-u3-chord-construction-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain chord inversions and why composers use them. What problem do they solve?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Chord inversions",
                              "statement": "Voice leading smoothness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Inversion = chord with note other than root in bass — first inversion (third in bass), second inversion (fifth in bass); same chord, different bass note.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Composers use inversions for smooth voice leading — minimizing jumps between chords; keeps voices close together creating singable, connected harmony.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: C major (C-E-G) → F major (F-A-C): second inversion F (C-F-A) keeps C in bass, smooth connection; without inversions, voices jump awkwardly.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Inversions enable smooth voice leading",
          "commonErrors": [
                    "Thinking inversions change chord — they change bass only."
          ]
},
        },
        {
          id: "apmt-u3-chord-construction-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how chord quality affects emotional character. Why does V7 want to resolve to I?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Chord function",
                              "statement": "Tension and resolution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chord quality: major = stable/happy, minor = sad/dark, diminished = tense/unstable, augmented = mysterious; determined by intervals from root.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "V7 (dominant seventh) wants to resolve to I (tonic) because: minor 7th creates dissonance, leading tone (7th scale degree) rises to tonic, dominant function creates expectation — musical 'question' answered by tonic 'answer.'",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This tension-resolution is fundamental to Western harmony — creates emotional arc, forward motion, sense of completion; without it, music lacks direction.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: chord quality affects emotion via intervals; V7→I resolution exemplifies functional harmony's tension-release dynamic — core of Western tonal music.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Chord quality affects emotion; V7→I = tension-resolution",
          "commonErrors": [
                    "Thinking chords are just 'notes together' — they have function."
          ]
},
        },
      ],
    },
  ],
};
