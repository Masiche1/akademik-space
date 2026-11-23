import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apsa-u1-lesson-1-1",
  code: "1-1",
  title: "Elements and Principles of Art",
  goal: "I CAN identify and apply the elements and principles of visual art.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Line", definition: "Path of a moving point — direction, weight, character convey meaning." },
    { term: "Shape/form", definition: "2D enclosed area vs. 3D volume — positive vs. negative space." },
    { term: "Value", definition: "Lightness/darkness — creates volume, depth, mood; chiaroscuro." },
    { term: "Color", definition: "Hue, value, intensity — warm/cool, complementary, analogous relationships." },
    { term: "Texture", definition: "Surface quality — actual vs. implied; tactile vs. visual." },
    { term: "Balance", definition: "Visual weight distribution — symmetrical, asymmetrical, radial." },
  ],
  concepts: [
    {
      id: "apsa-u1-elements-principles",
      title: "Building visual vocabulary",
      skill: "Identify and apply elements and principles of art.",
      lesson: {
        sections: [
          {
            heading: "Elements",
            body: "Line, shape/form, value, color, texture, space — the building blocks; each carries expressive potential (diagonal lines = energy, curved = calm).",
          },
          {
            heading: "Principles",
            body: "Balance, contrast, emphasis, movement, pattern, rhythm, unity/variety — how elements organize into composition; principles create visual harmony or tension.",
          },
        ],
        keyFormulas: [
          { name: "Elements", statement: "Line / Shape-Form / Value / Color / Texture / Space" },
          { name: "Principles", statement: "Balance / Contrast / Emphasis / Movement / Pattern / Rhythm / Unity-Variety" },
        ],
        workedExample: {
          problem: "Analyze a painting's use of value",
          solution: "Value = lightness/darkness; Caravaggio's chiaroscuro uses extreme value contrast for drama; high-key (light values) = airy, low-key (dark) = somber.",
        },
      },
      questions: [
        {
          id: "apsa-u1-elements-principles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Value in art refers to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "color hue"
                    },
                    {
                              "id": "b",
                              "text": "lightness or darkness"
                    },
                    {
                              "id": "c",
                              "text": "line direction"
                    },
                    {
                              "id": "d",
                              "text": "texture"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Value",
                              "statement": "Lightness/darkness scale."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Value is lightness/darkness — creates volume (shading), depth (atmospheric perspective), mood (high-key vs. low-key).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Lightness/darkness",
          "commonErrors": [
                    "Confusing with hue or intensity."
          ]
},
        },
        {
          id: "apsa-u1-elements-principles-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Asymmetrical balance differs from symmetrical because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "mirrors exactly"
                    },
                    {
                              "id": "b",
                              "text": "distributes visual weight unequally for dynamic effect"
                    },
                    {
                              "id": "c",
                              "text": "is always centered"
                    },
                    {
                              "id": "d",
                              "text": "uses only one color"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Asymmetrical balance",
                              "statement": "Unequal weight, dynamic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Asymmetrical balance distributes different elements to create equilibrium without mirroring — more dynamic, interesting; e.g., large shape left balanced by small dense shape right.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Symmetrical mirrors exactly (formal); asymmetrical creates visual tension.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Unequal weight for dynamic effect",
          "commonErrors": [
                    "Confusing with radial or symmetry."
          ]
},
        },
        {
          id: "apsa-u1-elements-principles-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If an artwork uses 5 elements and 7 principles, total visual vocabulary terms? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Terms",
                              "answer": 12
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Add",
                              "statement": "$5 + 7 = 12$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$5 + 7 = 12$ terms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $12$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "12",
          "commonErrors": [
                    "Forgetting to add both lists."
          ]
},
        },
        {
          id: "apsa-u1-elements-principles-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how an artist uses contrast to create emphasis. Provide an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Contrast principle",
                              "statement": "Opposition creates focus."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Contrast uses opposing elements — light/dark, warm/cool, large/small, rough/smooth — to create visual interest and direct attention.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Example: Renaissance paintings use warm skin tones against cool backgrounds; dark figure against light ground draws eye; complementary colors (red/green) intensify each other.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Contrast creates emphasis — the eye goes to difference; uniformity creates calm but contrast creates focal point.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Contrast = opposition creates emphasis",
          "commonErrors": [
                    "Thinking contrast is random — it's purposeful opposition."
          ]
},
        },
        {
          id: "apsa-u1-elements-principles-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how elements and principles work together. Can you have good elements but bad composition?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Elements + principles",
                              "statement": "Parts vs. whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Elements are raw materials — line, shape, color individually; principles organize them — balance, contrast, rhythm create structure; good elements without principles = chaotic.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Yes, possible: beautiful colors (elements) arranged randomly = no focal point; perfect lines (elements) unbalanced = visual instability; elements need principles for coherence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Composition = applying principles to elements; master artists manipulate both — elements provide vocabulary, principles provide grammar.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: elements without principles lack organization — composition requires both; vocabulary (elements) needs syntax (principles).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Elements need principles — vocabulary needs grammar",
          "commonErrors": [
                    "Confusing parts with whole — composition is organization."
          ]
},
        },
      ],
    },
  ],
};
