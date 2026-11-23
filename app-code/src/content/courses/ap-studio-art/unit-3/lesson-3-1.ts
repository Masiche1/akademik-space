import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "apsa-u3-lesson-3-1",
  code: "3-1",
  title: "2D Design Principles",
  goal: "I CAN apply design principles: hierarchy, grid, repetition, unity in 2D work.",
  standards: ["Unit 3"],
  vocabulary: [
    { term: "Hierarchy", definition: "Visual importance ranking — guides eye through composition." },
    { term: "Grid", definition: "Underlying structure organizing elements — creates order and consistency." },
    { term: "Repetition", definition: "Repeating elements — creates rhythm, unity, pattern." },
    { term: "Unity", definition: "Coherence making work feel complete — all parts relate." },
    { term: "Variety", definition: "Diversity within unity — prevents monotony while maintaining coherence." },
    { term: "Emphasis", definition: "Focal point directing attention — contrast, placement, isolation." },
  ],
  concepts: [
    {
      id: "apsa-u3-design-principles-2d",
      title: "2D design principles",
      skill: "Apply design principles for effective 2D compositions.",
      lesson: {
        sections: [
          {
            heading: "Design vs. fine art",
            body: "2D Design emphasizes communication/intent — poster, packaging, typography; fine art emphasizes personal expression — painting, drawing.",
          },
          {
            heading: "Principles applied",
            body: "Hierarchy guides eye, grid provides structure, repetition creates rhythm, unity holds together, variety prevents boredom, emphasis creates focal point.",
          },
        ],
        keyFormulas: [
          { name: "Design principles", statement: "Hierarchy / Grid / Repetition / Unity / Variety / Emphasis" },
          { name: "2D Design vs. Drawing", statement: "Design=communication intent; Drawing=personal expression" },
        ],
        workedExample: {
          problem: "Design poster layout",
          solution: "Hierarchy: title largest, subtitle medium, details small; grid: 3-column layout; repetition: consistent color scheme; emphasis: focal image; unity: cohesive palette; variety: different element types.",
        },
      },
      questions: [
        {
          id: "apsa-u3-design-principles-2d-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Hierarchy in design refers to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "social class"
                    },
                    {
                              "id": "b",
                              "text": "visual importance ranking guiding eye"
                    },
                    {
                              "id": "c",
                              "text": "organizational chart"
                    },
                    {
                              "id": "d",
                              "text": "layer order"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hierarchy",
                              "statement": "Visual importance ranking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hierarchy ranks visual elements by importance — largest/brightest/most contrast = most important; guides viewer's eye through composition.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Visual importance ranking",
          "commonErrors": [
                    "Confusing with literal hierarchy."
          ]
},
        },
        {
          id: "apsa-u3-design-principles-2d-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "2D Design differs from Drawing because Design ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is more artistic"
                    },
                    {
                              "id": "b",
                              "text": "emphasizes communication and intended message"
                    },
                    {
                              "id": "c",
                              "text": "uses less skill"
                    },
                    {
                              "id": "d",
                              "text": "is always digital"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "2D Design vs. Drawing",
                              "statement": "Communication vs. expression."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2D Design emphasizes communication — poster, packaging, typography serve intended audience/message; Drawing emphasizes personal expression — observational, imaginative.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "AP offers both concentrations — different evaluation criteria.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Communication intent",
          "commonErrors": [
                    "Conflating the two concentrations."
          ]
},
        },
        {
          id: "apsa-u3-design-principles-2d-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If poster uses 3 hierarchy levels and 4 grid columns, total structural elements? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Elements",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Add",
                              "statement": "$3 + 4 = 7$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$3 + 4 = 7$ structural elements.",
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
                    "Forgetting to combine."
          ]
},
        },
        {
          id: "apsa-u3-design-principles-2d-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how grid and repetition work together in design. Why use both?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Grid + repetition",
                              "statement": "Structure + rhythm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grid provides underlying structure — columns, rows, modules organize elements; repetition creates rhythm — repeating elements along grid creates pattern and unity.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Together: grid = skeleton, repetition = pattern; grid without repetition = rigid; repetition without grid = chaotic; combined = organized visual rhythm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: magazine layout — grid columns organize text/images; repeated header/footer creates consistency; repetition of design elements builds brand identity.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Grid=structure, Repetition=rhythm; together=organized pattern",
          "commonErrors": [
                    "Using one without other — they complement."
          ]
},
        },
        {
          id: "apsa-u3-design-principles-2d-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how unity and variety balance in design. Why is 'variety within unity' ideal?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Unity-variety balance",
                              "statement": "Cohesion + interest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unity: all elements relate — consistent palette, style, theme; creates coherent whole; variety: different elements prevent monotony — different shapes, sizes, treatments.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Too much unity = boring/monotonous; too much variety = chaotic/disconnected; ideal = variety within unity — consistent enough to hold together, varied enough to interest.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: consistent color scheme (unity) + varied compositions (variety); same typeface family (unity) + different weights/sizes (variety) — balance is key.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: unity-variety balance is design's core challenge — 'variety within unity' creates work that's both coherent and engaging.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Variety within unity = coherent + engaging",
          "commonErrors": [
                    "Maximizing one extreme — balance is ideal."
          ]
},
        },
      ],
    },
  ],
};
