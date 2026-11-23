import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "app1-u2-lesson-2-3",
  code: "2-3",
  title: "Rotational Motion and Simple Harmonic Motion",
  goal: "I CAN apply rotational dynamics and SHM equations.",
  standards: ["ROT-1"],
  vocabulary: [
    { term: "Torque", definition: "$\\tau = rF\\sin\\theta$ — rotational analog of force." },
    { term: "Moment of inertia", definition: "$I$ — rotational mass; depends on mass distribution." },
    { term: "Rotational 2nd law", definition: "$\\tau_{net} = I\\alpha$ — analog of $F = ma$." },
    { term: "Angular momentum", definition: "$L = I\\omega$ — conserved when no external torque." },
    { term: "SHM", definition: "Motion where restoring force $\\propto -x$ — e.g., mass on spring, pendulum." },
    { term: "SHM period", definition: "$T = 2\\pi\\sqrt{\\frac{m}{k}}$ for spring; $T = 2\\pi\\sqrt{\\frac{L}{g}}$ for pendulum." },
  ],
  concepts: [
    {
      id: "app1-u2-rotation-shm",
      title: "Rotation and SHM",
      skill: "Apply rotational analogs of Newton's laws and SHM equations.",
      lesson: {
        sections: [
          {
            heading: "Rotational motion",
            body: "Torque $\\tau = rF\\sin\\theta$ causes angular acceleration $\\alpha$ via $\\tau = I\\alpha$, where $I$ (moment of inertia) plays the role of mass. **Angular momentum** $L = I\\omega$ is conserved when net external torque is zero — spinning skaters speed up pulling arms in ($I$ decreases, $\\omega$ increases).",
          },
          {
            heading: "Simple harmonic motion",
            body: "When restoring force is proportional to displacement ($F = -kx$), motion oscillates sinusoidally. For a spring: $T = 2\\pi\\sqrt{m/k}$, $f = \\frac{1}{2\\pi}\\sqrt{k/m}$. For a pendulum (small angles): $T = 2\\pi\\sqrt{L/g}$ — independent of mass. Frequency and period are inversely related.",
          },
        ],
        keyFormulas: [
          { name: "Torque", statement: "$\\tau = rF\\sin\\theta$" },
          { name: "Rotational law", statement: "$\\tau = I\\alpha$" },
          { name: "Spring period", statement: "$T = 2\\pi\\sqrt{\\frac{m}{k}}$" },
          { name: "Pendulum period", statement: "$T = 2\\pi\\sqrt{\\frac{L}{g}}$" },
        ],
        workedExample: {
          problem: "Spring with $k = 100$ N/m, mass $1$ kg. Period?",
          solution: "$T = 2\\pi\\sqrt{\\frac{1}{100}} = 2\\pi \\times 0.1 = 0.2\\pi \\approx 0.63$ s.",
        },
      },
      questions: [
        {
          id: "app1-u2-rotation-shm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Torque depends on ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "force only"
                    },
                    {
                              "id": "b",
                              "text": "force, distance from pivot, and angle"
                    },
                    {
                              "id": "c",
                              "text": "mass only"
                    },
                    {
                              "id": "d",
                              "text": "time"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Torque",
                              "statement": "$\\tau = rF\\sin\\theta$ — lever arm matters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Torque needs force applied at distance from pivot at the right angle.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Thinking force alone determines rotation."
          ]
},
        },
        {
          id: "app1-u2-rotation-shm-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pendulum's period depends on ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "mass"
                    },
                    {
                              "id": "b",
                              "text": "length and gravity"
                    },
                    {
                              "id": "c",
                              "text": "amplitude"
                    },
                    {
                              "id": "d",
                              "text": "all of these"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Pendulum period",
                              "statement": "$T = 2\\pi\\sqrt{L/g}$ — mass and small amplitude don't matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Period depends only on length $L$ and gravitational field $g$ for small swings.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Length and gravity",
          "commonErrors": [
                    "Thinking heavier pendulums swing slower."
          ]
},
        },
        {
          id: "app1-u2-rotation-shm-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $0.25$ kg mass on a spring with $k = 25$ N/m oscillates. Find the period. Enter seconds (use $\\pi \\approx 3.14$).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$T$",
                              "answer": 0.628,
                              "tolerance": 0.01
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Spring period",
                              "statement": "$T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{0.01}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$T = 2 \\times 3.14 \\times 0.1 = 0.628$ s.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$T \\approx 0.63$ s.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$0.628$ s",
          "commonErrors": [
                    "Inverting $m/k$ or forgetting the square root."
          ]
},
        },
        {
          id: "app1-u2-rotation-shm-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain angular momentum conservation using the example of a spinning skater pulling in their arms.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Angular momentum",
                              "statement": "$L = I\\omega$ conserved when no external torque."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "With no external torque, $L = I\\omega$ stays constant.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Pulling arms in decreases moment of inertia $I$ (mass closer to axis).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "To keep $L$ constant, $\\omega$ must increase — the skater spins faster.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$L$ conserved; $I \\downarrow \\Rightarrow \\omega \\uparrow$",
          "commonErrors": [
                    "Thinking the skater gains energy from nowhere — rotational KE increases because they do work pulling arms in."
          ]
},
        },
      ],
    },
  ],
};
