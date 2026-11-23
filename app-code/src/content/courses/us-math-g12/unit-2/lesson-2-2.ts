import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "m12-u2-lesson-2-2",
  code: "2-2",
  title: "Graphs of Sine and Cosine",
  goal: "I CAN graph $y = a\\sin(b(x - h)) + k$ and identify amplitude, period, phase shift and midline.",
  standards: ["F-TF.3", "F-TF.7", "F-TF.8"],
  vocabulary: [
    { term: "Amplitude", definition: "$|a|$ — half the distance from peak to trough; vertical stretch." },
    { term: "Period", definition: "$\\frac{2\\pi}{|b|}$ for sine/cosine — horizontal compression/stretch." },
    { term: "Phase shift", definition: "$h$ — horizontal shift; $\\sin(b(x-h))$ shifts right by $h$ when $b=1$." },
    { term: "Midline", definition: "$y = k$ — the horizontal centerline of the wave." },
    { term: "Five key points", definition: "One period of sine uses $x = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}, 2\\pi$ mapped through the transformations." },
  ],
  concepts: [
    {
      id: "m12-u2-trig-graphs",
      title: "Transforming trig graphs",
      skill: "Decode $y = a\\sin(b(x-h)) + k$ into graph features.",
      lesson: {
        sections: [
          {
            heading: "Parameters",
            body: "In $y = a\\sin(b(x - h)) + k$: **amplitude** $|a|$, **period** $\\frac{2\\pi}{|b|}$, **phase shift** $h$ (right if positive), **midline** $y = k$, and **vertical shift** $k$. Negative $a$ reflects across the midline. For cosine the same rules apply — only the starting point differs.",
          },
          {
            heading: "Graphing strategy",
            body: "Find the period $T = \\frac{2\\pi}{b}$, divide into four equal parts for key points, apply amplitude around the midline, and shift horizontally by $h$. For $y = 2\\sin(3x) + 1$: amplitude $2$, period $\\frac{2\\pi}{3}$, midline $y = 1$, no shift.",
          },
        ],
        keyFormulas: [
          { name: "Amplitude", statement: "$|a|$" },
          { name: "Period", statement: "$T = \\frac{2\\pi}{|b|}$ for sine/cosine" },
          { name: "Features", statement: "Midline $y = k$; phase shift $h$" },
        ],
        workedExample: {
          problem: "State amplitude, period and midline of $y = -3\\cos(2x) + 4$.",
          solution: "Amplitude $3$, period $\\frac{2\\pi}{2} = \\pi$, midline $y = 4$; negative sign reflects the cosine across the midline.",
        },
      },
      questions: [
        {
          id: "m12-u2-trig-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The amplitude of $y = 5\\sin(x)$ is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$5$"
                    },
                    {
                              "id": "b",
                              "text": "$10$"
                    },
                    {
                              "id": "c",
                              "text": "$2\\pi$"
                    },
                    {
                              "id": "d",
                              "text": "$1$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Amplitude",
                              "statement": "Amplitude = $|a|$, half peak-to-trough."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$a = 5$: amplitude $5$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** $5$",
          "commonErrors": [
                    "Reporting the full peak-to-trough distance $10$."
          ]
},
        },
        {
          id: "m12-u2-trig-graphs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the period of $y = \\sin(4x)$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$8\\pi$"
                    },
                    {
                              "id": "b",
                              "text": "$\\frac{\\pi}{2}$"
                    },
                    {
                              "id": "c",
                              "text": "$4\\pi$"
                    },
                    {
                              "id": "d",
                              "text": "$\\frac{\\pi}{4}$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Period",
                              "statement": "$T = \\frac{2\\pi}{|b|} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Period $= \\frac{\\pi}{2}$ — the graph oscillates faster.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct period.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** $\\frac{\\pi}{2}$",
          "commonErrors": [
                    "Multiplying by $b$ instead of dividing $2\\pi$ by it."
          ]
},
        },
        {
          id: "m12-u2-trig-graphs-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $y = 2\\sin(x - \\frac{\\pi}{3})$, state the phase shift and its direction.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Phase shift",
                              "statement": "$h = \\frac{\\pi}{3}$ to the right."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shift right by $\\frac{\\pi}{3}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct shift.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Right $\\frac{\\pi}{3}$",
          "commonErrors": [
                    "Reporting $-\\frac{\\pi}{3}$ — inside form shifts right for positive $h$."
          ]
},
        },
        {
          id: "m12-u2-trig-graphs-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe the graph of $y = -2\\sin(\\frac{1}{2}(x - \\pi)) + 3$: amplitude, period, midline, reflection, and phase shift.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Decode parameters",
                              "statement": "$a=-2$, $b=\\frac{1}{2}$, $h=\\pi$, $k=3$."
                    },
                    {
                              "kind": "concept",
                              "name": "All features",
                              "statement": "Combine amplitude, period, reflection, midline, shift."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Amplitude $2$; period $\\frac{2\\pi}{1/2} = 4\\pi$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Midline $y = 3$; negative amplitude reflects across midline (starts at minimum).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Phase shift right $\\pi$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Amp $2$, period $4\\pi$, midline $y=3$, reflected, shift $\\pi$ right",
          "commonErrors": [
                    "Missing the reflection from the negative amplitude."
          ]
},
        },
      ],
    },
  ],
};
