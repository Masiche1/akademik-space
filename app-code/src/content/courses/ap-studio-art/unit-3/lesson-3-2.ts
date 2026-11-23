import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "apsa-u3-lesson-3-2",
  code: "3-2",
  title: "Drawing Techniques",
  goal: "I CAN apply advanced drawing techniques: perspective, proportion, and mark-making.",
  standards: ["Unit 3"],
  vocabulary: [
    { term: "Linear perspective", definition: "One-point/two-point — converging lines create depth illusion." },
    { term: "Proportion", definition: "Relative size relationships — measuring, comparing, correcting." },
    { term: "Mark-making", definition: "Line quality — pressure, direction, speed create character." },
    { term: "Shading techniques", definition: "Hatching, cross-hatching, stippling, blending — value creation." },
    { term: "Foreshortening", definition: "Compressing forms receding in space — dramatic perspective." },
  ],
  concepts: [
    {
      id: "apsa-u3-drawing-techniques",
      title: "Advanced drawing",
      skill: "Apply perspective, proportion, and mark-making techniques.",
      lesson: {
        sections: [
          {
            heading: "Perspective",
            body: "One-point (vanishing point center), two-point (corners), atmospheric (distant objects lighter/lower contrast) — creates depth illusion.",
          },
          {
            heading: "Mark-making",
            body: "Line pressure/direction/speed creates character — light sketchy = delicate, heavy bold = forceful; technique serves subject.",
          },
        ],
        keyFormulas: [
          { name: "Perspective types", statement: "One-point / Two-point / Atmospheric" },
          { name: "Shading methods", statement: "Hatching / Cross-hatching / Stippling / Blending" },
          { name: "Mark-making", statement: "Pressure / Direction / Speed = character" },
        ],
        workedExample: {
          problem: "Draw room corner in two-point perspective",
          solution: "Two vanishing points left/right; all horizontal lines converge to them; verticals stay vertical — creates convincing 3D room on 2D surface.",
        },
      },
      questions: [
        {
          id: "apsa-u3-drawing-techniques-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two-point perspective uses ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one vanishing point"
                    },
                    {
                              "id": "b",
                              "text": "two vanishing points at corners"
                    },
                    {
                              "id": "c",
                              "text": "no vanishing points"
                    },
                    {
                              "id": "d",
                              "text": "three vanishing points"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Two-point perspective",
                              "statement": "Corner view."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two-point perspective uses two vanishing points — viewing object corner-on; horizontal lines converge to left/right points; most common for buildings/objects.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Two vanishing points",
          "commonErrors": [
                    "Confusing with one-point (frontal view)."
          ]
},
        },
        {
          id: "apsa-u3-drawing-techniques-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Cross-hatching differs from hatching by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "using color"
                    },
                    {
                              "id": "b",
                              "text": "layering lines in multiple directions for darker values"
                    },
                    {
                              "id": "c",
                              "text": "using dots"
                    },
                    {
                              "id": "d",
                              "text": "blending smoothly"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cross-hatching",
                              "statement": "Layered directional lines."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cross-hatching layers lines in different directions — creates darker values; hatching uses single direction; stippling uses dots; blending smooths.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cross-hatching = hatching + additional directions = darker.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Layered directions for darker values",
          "commonErrors": [
                    "Confusing shading methods."
          ]
},
        },
        {
          id: "apsa-u3-drawing-techniques-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If drawing takes 30 min and you spend 40% on proportions, how many minutes? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Minutes",
                              "answer": 12
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Percentage",
                              "statement": "$30 \\times 0.4 = 12$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$30 \\times 0.4 = 12$ minutes.",
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
                    "Math errors."
          ]
},
        },
        {
          id: "apsa-u3-drawing-techniques-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how mark-making creates character in drawing. Why does line quality matter?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Mark-making",
                              "statement": "Line = expression."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mark-making: pressure (heavy/light), direction (straight/curved), speed (quick/slow) create line quality — light sketchy lines feel delicate, heavy bold lines feel forceful.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Line quality conveys meaning — nervous energy = sketchy rapid lines; calm stability = smooth confident lines; technical precision = controlled consistent lines.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Master draftsmen vary mark-making intentionally — line serves subject and mood, not just outline; technique IS expression.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Line quality = expression; technique serves meaning",
          "commonErrors": [
                    "Thinking lines are just outlines — they carry character."
          ]
},
        },
        {
          id: "apsa-u3-drawing-techniques-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how perspective creates illusion of depth on flat surface. What are its limitations?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Perspective",
                              "statement": "Mathematical depth illusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Perspective uses converging lines to vanishing points — mimics how parallel lines appear to converge at distance; creates convincing 3D illusion on 2D surface.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Limitations: assumes stationary single viewpoint; doesn't capture peripheral vision, binocular depth cues; breaks down at extreme angles; stylization sometimes preferred over realism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Artists choose when to use — architectural accuracy needs perspective; expressive work may distort intentionally; perspective is tool not rule.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: perspective creates convincing depth but is mathematically limited — represents one viewpoint's view; artists manipulate it for effect or abandon for other spatial systems.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Perspective = viewpoint illusion; limited but powerful",
          "commonErrors": [
                    "Thinking it's 'correct' way — it's one option among many."
          ]
},
        },
      ],
    },
  ],
};
