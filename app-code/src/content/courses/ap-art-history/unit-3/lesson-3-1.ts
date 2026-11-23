import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "apah-u3-lesson-3-1",
  code: "3-1",
  title: "Impressionism and Post-Impressionism",
  goal: "I CAN analyze Impressionist techniques and Post-Impressionist innovations.",
  standards: ["Unit 3"],
  vocabulary: [
    { term: "Impressionism", definition: "Movement capturing fleeting moments — loose brushwork, light, everyday scenes." },
    { term: "Ple-in-air", definition: "Painting outdoors — capturing natural light directly." },
    { term: "Broken color", definition: "Short brushstrokes of pure color — optical mixing by viewer." },
    { term: "Post-Impressionism", definition: "Reaction to Impressionism — structure, symbolism, emotion." },
    { term: "Pointillism", definition: "Seurat's technique — dots of pure color optically mixed." },
    { term: "Cézanne", definition: "Post-Impressionist — geometric structure, 'father of modern art.'" },
  ],
  concepts: [
    {
      id: "apah-u3-impressionism-postimpressionism",
      title: "Impressionism to Post-Impressionism",
      skill: "Analyze Impressionist techniques and Post-Impressionist developments.",
      lesson: {
        sections: [
          {
            heading: "Impressionism",
            body: "Captured fleeting moments — loose brushwork, pure colors, plein-air painting, everyday subjects; rejected academic conventions; 'impression' of moment not detailed representation.",
          },
          {
            heading: "Post-Impressionism",
            body: "Reactions: Cézanne (geometric structure), Van Gogh (emotion, color), Gauguin (symbolism), Seurat (pointillism) — moved beyond Impressionism toward structure and meaning.",
          },
        ],
        keyFormulas: [
          { name: "Impressionism", statement: "Loose brushwork / Pure color / Plein-air / Fleeting moments" },
          { name: "Post-Impressionism", statement: "Structure / Symbolism / Emotion / Pointillism" },
          { name: "Key artists", statement: "Monet / Renoir / Degas → Cézanne / Van Gogh / Seurat / Gauguin" },
        ],
        workedExample: {
          problem: "Analyze Monet's 'Impression, Sunrise' title significance",
          solution: "Title literally 'impression' — captured fleeting moment of sunrise not detailed scene; critics mocked 'impressionism' as unfinished but it became movement name — capturing momentary perception.",
        },
      },
      questions: [
        {
          id: "apah-u3-impressionism-postimpressionism-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Impressionism is characterized by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "detailed realism"
                    },
                    {
                              "id": "b",
                              "text": "loose brushwork, pure color, fleeting moments"
                    },
                    {
                              "id": "c",
                              "text": "abstract shapes"
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
                              "name": "Impressionism",
                              "statement": "Momentary perception technique."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Impressionism uses loose brushwork, pure colors, plein-air painting to capture fleeting moments — 'impression' of scene not detailed representation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Loose brushwork + fleeting moments",
          "commonErrors": [
                    "Confusing with academic realism."
          ]
},
        },
        {
          id: "apah-u3-impressionism-postimpressionism-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Post-Impressionism differed from Impressionism by emphasizing ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "same techniques"
                    },
                    {
                              "id": "b",
                              "text": "structure, symbolism, and emotion over fleeting moments"
                    },
                    {
                              "id": "c",
                              "text": "more realism"
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
                              "kind": "context",
                              "name": "Post-Impressionism",
                              "statement": "Structure over moment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Post-Impressionism reacted to Impressionism — Cézanne added geometric structure, Van Gogh added emotion, Gauguin added symbolism, Seurat added systematic technique — moved beyond momentary capture.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It wasn't rejection but development — building on Impressionist innovations.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Structure/symbolism/emotion over moments",
          "commonErrors": [
                    "Thinking it rejected Impressionism entirely."
          ]
},
        },
        {
          id: "apah-u3-impressionism-postimpressionism-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Monet painted 'Impressions, Sunrise' in 1872. If Impressionism emerged ~1860s, how many years? Enter approximate number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Years",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Estimate",
                              "statement": "$1872 - 1860 = 12$ approx $10$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Impressionism emerged early 1860s; 'Impressions, Sunrise' 1872 — about $10-12$ years into movement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $10$ (approximate).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "10",
          "commonErrors": [
                    "Precise vs. approximate confusion."
          ]
},
        },
        {
          id: "apah-u3-impressionism-postimpressionism-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare Impressionism and Post-Impressionism. What did each prioritize?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Impressionism vs. Post",
                              "statement": "Moment vs. structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Impressionism: captured fleeting moments — light, atmosphere, everyday scenes; loose brushwork, pure color, optical mixing; 'impression' not detailed representation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Post-Impressionism: added structure/symbolism/emotion — Cézanne's geometry, Van Gogh's emotion, Seurat's systematic dots; moved beyond momentary capture toward meaning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Relationship: Post-Impressionism built on Impressionism — kept innovations (color, brushwork) but added structure and meaning; 'post' = after/developing not rejecting.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Impressionism = moment; Post = structure/symbolism/emotion",
          "commonErrors": [
                    "Thinking Post rejected Impressionism — it developed it."
          ]
},
        },
        {
          id: "apah-u3-impressionism-postimpressionism-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how Impressionism challenged academic art conventions. Why was it controversial?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Impressionism's challenge",
                              "statement": "Perception vs. convention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Academic art: detailed realism, historical/mythological subjects, finished surfaces, studio work — valued skill and tradition.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Impressionism challenged: everyday subjects (not grand history), plein-air (not studio), loose brushwork (not finished detail), momentary perception (not timeless ideal) — appeared 'unfinished' to critics.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Controversy: critics mocked 'impressionism' as mere sketches; Salon rejected works; artists formed independent exhibitions — challenged art establishment's authority.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: Impressionism was revolutionary — shifted art's purpose from idealized representation to perceptual experience; controversy reflected challenge to artistic establishment.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Impressionism challenged conventions — perception over ideal",
          "commonErrors": [
                    "Seeing as mere style — it challenged art's purpose."
          ]
},
        },
      ],
    },
  ],
};
