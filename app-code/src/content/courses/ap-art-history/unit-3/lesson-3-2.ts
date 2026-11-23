import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "apah-u3-lesson-3-2",
  code: "3-2",
  title: "Modern Art Movements",
  goal: "I CAN analyze Cubism, Surrealism, and Abstract Expressionism.",
  standards: ["Unit 3"],
  vocabulary: [
    { term: "Cubism", definition: "Picasso/Braque — multiple viewpoints simultaneously, fragmented forms." },
    { term: "Analytical vs. Synthetic", definition: "Analytical = fragmented analysis; Synthetic = adding materials/text." },
    { term: "Surrealism", definition: "Dream imagery, unexpected juxtapositions — Dalí, Magritte, Ernst." },
    { term: "Abstract Expressionism", definition: "Action painting, color field — Pollock, Rothko, de Kooning." },
    { term: "Dada", definition: "Anti-art movement — absurdity, chance, rejecting rationality." },
    { term: "Futurism", definition: "Celebrating speed, technology, modernity — Marinetti, Boccioni." },
  ],
  concepts: [
    {
      id: "apah-u3-modern-art-movements",
      title: "Modern art movements",
      skill: "Analyze major modern art movements and their innovations.",
      lesson: {
        sections: [
          {
            heading: "Cubism",
            body: "Picasso/Braque — showed multiple viewpoints simultaneously, fragmented forms into geometric shapes; analytical (deconstructing) vs. synthetic (collaging) phases.",
          },
          {
            heading: "Surrealism",
            body: "Dream logic, unexpected juxtapositions — Dalí's melting clocks, Magritte's paradoxes; explored unconscious mind, challenged rationality.",
          },
          {
            heading: "Abstract Expressionism",
            body: "Action painting (Pollock's drips), color field (Rothko's rectangles) — emotion, spontaneity, large-scale abstraction.",
          },
        ],
        keyFormulas: [
          { name: "Cubism", statement: "Multiple viewpoints / Fragmented forms / Geometric shapes" },
          { name: "Surrealism", statement: "Dream logic / Unexpected juxtapositions / Unconscious" },
          { name: "Abstract Expressionism", statement: "Action painting / Color field / Emotion / Abstraction" },
        ],
        workedExample: {
          problem: "Analyze Pollock's drip paintings",
          solution: "Abstract Expressionism — action painting: Pollock dripped/poured paint on canvas on floor, capturing movement/gesture; color field Rothko created meditative color rectangles — both explored pure abstraction and emotion.",
        },
      },
      questions: [
        {
          id: "apah-u3-modern-art-movements-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Cubism is characterized by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "single viewpoint"
                    },
                    {
                              "id": "b",
                              "text": "multiple viewpoints and fragmented forms"
                    },
                    {
                              "id": "c",
                              "text": "realistic detail"
                    },
                    {
                              "id": "d",
                              "text": "religious themes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cubism",
                              "statement": "Multiple viewpoints + fragmentation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cubism shows multiple viewpoints simultaneously — fragmented objects into geometric shapes viewed from different angles; Picasso/Braque pioneers.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Multiple viewpoints + fragmentation",
          "commonErrors": [
                    "Confusing with other movements."
          ]
},
        },
        {
          id: "apah-u3-modern-art-movements-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Surrealism drew inspiration from ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "classical art"
                    },
                    {
                              "id": "b",
                              "text": "dreams and the unconscious mind"
                    },
                    {
                              "id": "c",
                              "text": "political propaganda"
                    },
                    {
                              "id": "d",
                              "text": "religious ritual"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Surrealism",
                              "statement": "Dream/unconscious inspiration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Surrealism drew from dreams and unconscious — Dalí's melting clocks, Magritte's paradoxes, unexpected juxtapositions; explored irrational, challenged rationality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Freud's psychoanalysis influenced Surrealists — art accessing unconscious.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Dreams + unconscious",
          "commonErrors": [
                    "Confusing with other movements' inspiration."
          ]
},
        },
        {
          id: "apah-u3-modern-art-movements-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Picasso's 'Les Demoiselles d'Avignon' painted 1907. If Cubism emerged ~1908, how many years earlier? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Years",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Subtract",
                              "statement": "$1908 - 1907 = 1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$1908 - 1907 = 1$ year before Cubism 'officially' emerged — proto-Cubist work.",
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
                    "Date arithmetic errors."
          ]
},
        },
        {
          id: "apah-u3-modern-art-movements-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare Cubism and Surrealism. How did each challenge artistic conventions?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Cubism vs. Surrealism",
                              "statement": "Form vs. content challenge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cubism challenged representation: showed multiple viewpoints simultaneously, fragmented objects — questioned single-point perspective and unified form; formal innovation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Surrealism challenged content: dream imagery, unexpected juxtapositions, irrational logic — questioned rationality and conscious experience; content innovation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both radical: Cubism questioned HOW to represent; Surrealism questioned WHAT to represent — together expanded art's possibilities.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Cubism challenged form; Surrealism challenged content",
          "commonErrors": [
                    "Conflating the two — different types of challenge."
          ]
},
        },
        {
          id: "apah-u3-modern-art-movements-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how Abstract Expressionism reflected post-WWII American culture. What did it express?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Abstract Expressionism",
                              "statement": "Post-war emotion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Post-WWII context: America emerged as superpower; artists sought to express individual freedom, existential anxiety, emotional intensity — art as personal statement.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Action painting (Pollock): spontaneous gesture, physical engagement — 'I am nature' approach; color field (Rothko): meditative contemplation — pure color and emotion; both explored abstraction as emotional expression.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Significance: established New York as art capital (vs. Paris); legitimized abstraction; reflected American individualism and confidence — art asserting cultural independence.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: Abstract Expressionism expressed post-war American identity — individual freedom, emotional intensity, existential concerns; established American art's global dominance.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Abstract Expressionism expressed post-war American individualism and emotion",
          "commonErrors": [
                    "Ignoring cultural context — art reflected era."
          ]
},
        },
      ],
    },
  ],
};
