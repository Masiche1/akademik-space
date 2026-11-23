import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "apsa-u1-lesson-1-3",
  code: "1-3",
  title: "Studio Practice Fundamentals",
  goal: "I CAN apply studio techniques: drawing, composition, and material handling.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Gesture drawing", definition: "Quick capturing of movement/essence — 30-second to 2-minute sketches." },
    { term: "Contour drawing", definition: "Outline-focused drawing — emphasizes edges and form." },
    { term: "Value study", definition: "Grayscale rendering — mastering light/dark before color." },
    { term: "Composition thumbnail", definition: "Small rough sketches exploring layout — plan before committing." },
    { term: "Color mixing", definition: "Primary → secondary → tertiary; complements neutralize." },
    { term: "Material handling", definition: "Understanding each medium's properties — watercolor transparency, oil blending, charcoal layering." },
  ],
  concepts: [
    {
      id: "apsa-u1-studio-practice",
      title: "Studio fundamentals",
      skill: "Apply core studio techniques for drawing and composition.",
      lesson: {
        sections: [
          {
            heading: "Drawing techniques",
            body: "Gesture (capture movement), contour (edges), value study (light/dark), thumbnail sketches (composition planning) — build skills progressively.",
          },
          {
            heading: "Material mastery",
            body: "Each medium has properties — watercolor transparent/glazing, oil blendable/slow-drying, charcoal expressive/erasable; technique follows material.",
          },
        ],
        keyFormulas: [
          { name: "Drawing sequence", statement: "Gesture → Contour → Value → Details" },
          { name: "Composition planning", statement: "Thumbnails → Focal point → Balance → Refinement" },
          { name: "Color mixing", statement: "Primary+Primary=Secondary; Complementary=Neutral" },
        ],
        workedExample: {
          problem: "Plan a portrait composition",
          solution: "Thumbnail sketches: try 3 layouts (rule of thirds, centered, diagonal); choose strongest; then gesture drawing for pose; contour for structure; value study for light; finally details.",
        },
      },
      questions: [
        {
          id: "apsa-u1-studio-practice-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gesture drawing primarily captures ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fine details"
                    },
                    {
                              "id": "b",
                              "text": "movement and essence quickly"
                    },
                    {
                              "id": "c",
                              "text": "exact proportions"
                    },
                    {
                              "id": "d",
                              "text": "color"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Gesture drawing",
                              "statement": "Quick movement capture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gesture drawing captures movement/essence in 30 sec-2 min — prioritizes energy over detail; warm-up for longer work.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Movement/essence quickly",
          "commonErrors": [
                    "Confusing with detailed rendering."
          ]
},
        },
        {
          id: "apsa-u1-studio-practice-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Composition thumbnails are used to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "final artwork"
                    },
                    {
                              "id": "b",
                              "text": "quickly explore layout options before committing"
                    },
                    {
                              "id": "c",
                              "text": "mix colors"
                    },
                    {
                              "id": "d",
                              "text": "study anatomy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Composition planning",
                              "statement": "Thumbnail exploration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thumbnails are small rough sketches exploring composition options — test layouts, focal points, balance before committing to final; prevents wasted effort.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They're planning tools, not finished work.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Explore layout options",
          "commonErrors": [
                    "Thinking they're final pieces."
          ]
},
        },
        {
          id: "apsa-u1-studio-practice-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If gesture drawing takes 2 minutes and you do 5 warm-ups, total time? Enter minutes.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Minutes",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Multiply",
                              "statement": "$2 \\times 5 = 10$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$2 \\times 5 = 10$ minutes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $10$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "10",
          "commonErrors": [
                    "Arithmetic errors."
          ]
},
        },
        {
          id: "apsa-u1-studio-practice-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the drawing sequence: gesture → contour → value → details. Why this order?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Drawing sequence",
                              "statement": "Progressive refinement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gesture: capture movement/essence quickly — establishes energy; contour: define edges/structure — builds form; value: light/dark creates volume — adds dimension.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Details last: refine only after structure solid — premature details on weak foundation waste effort; sequence builds from general to specific.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This order prevents common errors — drawing details first leads to proportion/structure problems hard to fix later.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "General→specific prevents structural errors",
          "commonErrors": [
                    "Starting with details — foundation first."
          ]
},
        },
        {
          id: "apsa-u1-studio-practice-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how material choice affects artistic expression. Why does technique follow medium?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Material-expression",
                              "statement": "Medium shapes meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each medium has properties — watercolor transparent/glazing suits atmosphere; oil blendable/slow-drying suits detail; charcoal expressive/erasable suits gesture; material constrains and enables.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Technique follows medium — watercolor requires planning (can't easily erase); oil allows reworking; charcoal rewards spontaneity; choosing medium IS choosing approach.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Material contributes meaning — charcoal sketch feels raw/urgent; oil painting feels refined/permanent; watercolor feels delicate/lyrical; medium is part of message.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: material choice affects expression — technique follows medium's properties; medium itself communicates qualities beyond subject matter.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Medium shapes expression — technique follows properties",
          "commonErrors": [
                    "Thinking medium is neutral — it contributes meaning."
          ]
},
        },
      ],
    },
  ],
};
