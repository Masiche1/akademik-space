import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "apsa-u4-lesson-4-3",
  code: "4-3",
  title: "Drawing Concentration",
  goal: "I CAN develop drawing portfolio with observational, imaginative, and experimental works.",
  standards: ["Unit 4"],
  vocabulary: [
    { term: "Observational drawing", definition: "Drawing from direct observation — still life, figure, landscape." },
    { term: "Imaginative drawing", definition: "From memory/imagination — not directly observed." },
    { term: "Experimental drawing", definition: "Pushing technique/material — unconventional approaches." },
    { term: "Portraiture", definition: "Capturing likeness + character — psychological depth." },
    { term: "Mixed media drawing", definition: "Combining materials — collage, watercolor pencil, ink wash." },
  ],
  concepts: [
    {
      id: "apsa-u4-drawing-portfolio",
      title: "Drawing concentration",
      skill: "Develop drawing portfolio across observational, imaginative, experimental approaches.",
      lesson: {
        sections: [
          {
            heading: "Drawing types",
            body: "Observational (from life — trains seeing), imaginative (from mind — trains invention), experimental (pushing boundaries — trains innovation) — portfolio needs all three.",
          },
          {
            heading: "Portfolio requirements",
            body: "12 sustained investigation works + 5 selected works — same structure as other concentrations but drawing-specific.",
          },
        ],
        keyFormulas: [
          { name: "Drawing types", statement: "Observational / Imaginative / Experimental" },
          { name: "Portfolio", statement: "12 sustained + 5 selected" },
        ],
        workedExample: {
          problem: "Plan drawing portfolio",
          solution: "Sustained investigation: e.g., 'hands' explored through observational (real hands), imaginative (symbolic hands), experimental (abstract hand forms); selected: strongest 5 showing range.",
        },
      },
      questions: [
        {
          id: "apsa-u4-drawing-portfolio-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Observational drawing primarily trains ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "imagination"
                    },
                    {
                              "id": "b",
                              "text": "seeing accurately"
                    },
                    {
                              "id": "c",
                              "text": "abstract thinking"
                    },
                    {
                              "id": "d",
                              "text": "speed"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Observational drawing",
                              "statement": "Drawing from direct observation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Observational drawing trains seeing accurately — drawing what you see not what you think you see; builds perceptual skills.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Seeing accurately",
          "commonErrors": [
                    "Confusing with imaginative drawing."
          ]
},
        },
        {
          id: "apsa-u4-drawing-portfolio-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Drawing portfolio requires ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only observational work"
                    },
                    {
                              "id": "b",
                              "text": "12 sustained + 5 selected works across approaches"
                    },
                    {
                              "id": "c",
                              "text": "only portraits"
                    },
                    {
                              "id": "d",
                              "text": "digital drawings only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Drawing portfolio",
                              "statement": "Same structure as other concentrations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Drawing portfolio requires 12 sustained investigation works + 5 selected — same structure; should show range across observational, imaginative, experimental.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Concentration-specific: all works must be drawing-based (may include mixed media).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "12 sustained + 5 selected",
          "commonErrors": [
                    "Thinking different requirements — same structure."
          ]
},
        },
        {
          id: "apsa-u4-drawing-portfolio-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If portfolio has 12 sustained works and you select 5, what percentage of sustained works selected? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Percent",
                              "answer": 42
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Divide",
                              "statement": "$5/12 \\times 100 \\approx 41.67 \\approx 42\\%$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$5/12 \\times 100 \\approx 41.7\\%$ (approximately $42\\%$).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $42$ (rounded).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "42",
          "commonErrors": [
                    "Rounding errors."
          ]
},
        },
        {
          id: "apsa-u4-drawing-portfolio-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare observational and imaginative drawing. What does each develop?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Drawing types",
                              "statement": "Seeing vs. inventing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Observational: drawing from direct observation — trains seeing, proportion, detail, accuracy; 'I draw what I see'; develops perceptual skills.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Imaginative: drawing from memory/imagination — trains invention, composition, symbolic thinking; 'I draw what I imagine'; develops creative skills.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both essential: observational builds foundation (seeing accurately); imaginative builds expression (creating worlds); best artists use both.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Observational=seeing; Imaginative=inventing; both needed",
          "commonErrors": [
                    "Valuing one over other — they develop different skills."
          ]
},
        },
        {
          id: "apsa-u4-drawing-portfolio-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how experimental drawing pushes boundaries. What does 'experimental' mean in portfolio context?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Experimental drawing",
                              "statement": "Pushing boundaries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Experimental drawing: unconventional approaches — unusual materials, techniques, scale, concept; challenges traditional drawing definitions; tests what 'drawing' can be.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Examples: drawing with non-traditional tools (coffee, mud), digital drawing, performance drawing, installation drawings, time-based drawing — expands medium's possibilities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "In portfolio: shows willingness to take risks, explore new territory — distinguishes committed artists from technicians; demonstrates growth mindset.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: experimental work demonstrates artistic risk-taking — pushes boundaries of medium; portfolio needs experimental pieces to show range and growth potential.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Experimental = boundary-pushing; shows risk-taking",
          "commonErrors": [
                    "Avoiding risk — experimental shows growth."
          ]
},
        },
      ],
    },
  ],
};
