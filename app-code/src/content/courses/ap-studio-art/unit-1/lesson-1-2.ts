import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "apsa-u1-lesson-1-2",
  code: "1-2",
  title: "Visual Analysis",
  goal: "I CAN analyze artworks using formal, contextual, and iconographic methods.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Formal analysis", definition: "Analyzing visual elements — line, color, composition — without external context." },
    { term: "Iconographic analysis", definition: "Interpreting symbols, themes, narratives — what image represents." },
    { term: "Contextual analysis", definition: "Historical, cultural, social circumstances of creation." },
    { term: "Iconology", definition: "Deeper symbolic meaning — Panofsky's three levels (pre-iconographic, iconographic, iconological)." },
    { term: "Style", definition: "Distinctive visual characteristics identifying artist/period/movement." },
    { term: "Medium", definition: "Materials and technique — oil, watercolor, sculpture, photography." },
  ],
  concepts: [
    {
      id: "apsa-u1-visual-analysis",
      title: "Analyzing art",
      skill: "Apply multiple analytical frameworks to interpret art.",
      lesson: {
        sections: [
          {
            heading: "Analysis levels",
            body: "Formal (visual elements), iconographic (symbols/narrative), contextual (historical/social), iconological (deep cultural meaning) — Panofsky's framework.",
          },
          {
            heading: "Process",
            body: "Describe (what you see) → Analyze (how elements work) → Interpret (what it means) → Evaluate (is it good/effective?) — systematic approach.",
          },
        ],
        keyFormulas: [
          { name: "Panofsky's levels", statement: "Pre-iconographic → Iconographic → Iconological" },
          { name: "Analysis process", statement: "Describe → Analyze → Interpret → Evaluate" },
          { name: "Analysis types", statement: "Formal / Iconographic / Contextual / Iconological" },
        ],
        workedExample: {
          problem: "Analyze 'Guernica' (Picasso)",
          solution: "Formal: monochromatic, angular figures, chaos; Iconographic: bombing of Basque town — suffering, violence; Contextual: Spanish Civil War protest; Iconological: war's inhumanity, modern life's brutality.",
        },
      },
      questions: [
        {
          id: "apsa-u1-visual-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Formal analysis focuses on ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "artist biography"
                    },
                    {
                              "id": "b",
                              "text": "visual elements and composition"
                    },
                    {
                              "id": "c",
                              "text": "historical context"
                    },
                    {
                              "id": "d",
                              "text": "symbolic meaning"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Formal analysis",
                              "statement": "Visual elements focus."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Formal analysis examines visual elements — line, color, composition, technique — without external context; 'what you see' before 'what it means.'",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Visual elements",
          "commonErrors": [
                    "Confusing with contextual/iconographic."
          ]
},
        },
        {
          id: "apsa-u1-visual-analysis-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Panofsky's iconological level addresses ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "surface description"
                    },
                    {
                              "id": "b",
                              "text": "deep cultural/symbolic meaning"
                    },
                    {
                              "id": "c",
                              "text": "artist's biography"
                    },
                    {
                              "id": "d",
                              "text": "technical process"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Panofsky's levels",
                              "statement": "Deepest interpretive level."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Iconological level interprets deep cultural/symbolic meaning — how image reflects worldview, cultural values; goes beyond what's depicted to what it signifies.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Levels: pre-iconographic (describe) → iconographic (identify) → iconological (interpret).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Deep cultural meaning",
          "commonErrors": [
                    "Confusing with iconographic (identifying symbols)."
          ]
},
        },
        {
          id: "apsa-u1-visual-analysis-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If Panofsky has 3 levels of analysis and you describe at level 1, identify at level 2, interpret at level 3 — how many levels total? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Levels",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Count",
                              "statement": "3 levels total."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Panofsky's framework has 3 levels: pre-iconographic, iconographic, iconological.",
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
                    "Counting wrong framework."
          ]
},
        },
        {
          id: "apsa-u1-visual-analysis-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between describing and interpreting art. Why do both matter?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Description vs. interpretation",
                              "statement": "What vs. meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Description: what you literally see — 'red circle on blue background'; interpretation: what it means — 'red circle symbolizes passion against calm blue'; both essential.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Description grounds analysis in evidence — prevents wild speculation; interpretation provides meaning — makes analysis valuable; good analysis moves from description to interpretation systematically.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Skipping description leads to unsupported interpretation; stopping at description misses meaning — analysis requires both.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Describe=what; Interpret=meaning; both essential",
          "commonErrors": [
                    "Jumping to interpretation without evidence."
          ]
},
        },
        {
          id: "apsa-u1-visual-analysis-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how context changes interpretation. Can the same artwork mean different things in different cultures/times?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Contextual interpretation",
                              "statement": "Meaning is contextual."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same artwork, different contexts: religious icon means devotion in original culture, art-historical artifact in museum, aesthetic object for secular viewer — meaning shifts with viewer's framework.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Historical context: artwork created for specific patron/audience meant something then; contemporary viewers may miss or misread intended meaning; reception history shows changing interpretations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cultural context: symbols meaningful in one culture meaningless in another — hand gestures, colors, imagery vary; 'universal' art is rare; context shapes understanding.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: interpretation is contextual — same artwork yields different meanings across cultures/times; good analysis acknowledges multiple valid interpretations.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Interpretation is contextual — meaning varies by culture/time",
          "commonErrors": [
                    "Assuming single 'correct' meaning — interpretation is plural."
          ]
},
        },
      ],
    },
  ],
};
