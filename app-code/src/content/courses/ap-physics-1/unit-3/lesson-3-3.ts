import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "app1-u3-lesson-3-3",
  code: "3-3",
  title: "Magnetism and Electromagnetic Induction",
  goal: "I CAN apply magnetic force laws and Faraday's law of induction.",
  standards: ["MAG-1"],
  vocabulary: [
    { term: "Magnetic field", definition: "$\\vec{B}$ — region where magnetic forces act; measured in tesla (T)." },
    { term: "Magnetic force on charge", definition: "$F = qvB\\sin\\theta$ — perpendicular to both $v$ and $B$." },
    { term: "Right-hand rule", definition: "Point fingers along $v$, curl to $B$ — thumb shows force on positive charge." },
    { term: "Magnetic flux", definition: "$\\Phi_B = BA\\cos\\theta$ — field through a loop." },
    { term: "Faraday's law", definition: "Induced EMF $= -\\frac{d\\Phi_B}{dt}$ — changing flux induces voltage." },
    { term: "Lenz's law", definition: "Induced current opposes the change producing it." },
  ],
  concepts: [
    {
      id: "app1-u3-electromagnetism-induction",
      title: "Magnetism and induction",
      skill: "Apply magnetic force rules and induction principles.",
      lesson: {
        sections: [
          {
            heading: "Magnetic forces",
            body: "Moving charges experience $F = qvB\\sin\\theta$ perpendicular to velocity and field — causes circular motion in uniform $B$. The right-hand rule gives force direction for positive charges (flip for negative). Magnetic fields don't do work — they only redirect motion.",
          },
          {
            heading: "Electromagnetic induction",
            body: "**Faraday's law**: a changing magnetic flux through a loop induces EMF $= -\\frac{d\\Phi}{dt}$. Change flux by moving the magnet, changing area, or rotating the loop. **Lenz's law** (the minus sign): induced current flows to OPPOSE the flux change — conservation of energy demands it. This powers generators and transformers.",
          },
        ],
        keyFormulas: [
          { name: "Magnetic force", statement: "$F = qvB\\sin\\theta$" },
          { name: "Flux", statement: "$\\Phi_B = BA\\cos\\theta$" },
          { name: "Faraday", statement: "$\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$" },
        ],
        workedExample: {
          problem: "Magnet pushed into a coil induces current. Which direction and why?",
          solution: "Increasing flux into the coil induces a current whose field OPPOSES the increase (Lenz) — field points out of the coil's near face, so current flows counterclockwise viewed from the magnet side.",
        },
      },
      questions: [
        {
          id: "app1-u3-electromagnetism-induction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Magnetic force on a moving charge is always ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "parallel to velocity"
                    },
                    {
                              "id": "b",
                              "text": "perpendicular to velocity and field"
                    },
                    {
                              "id": "c",
                              "text": "zero"
                    },
                    {
                              "id": "d",
                              "text": "toward the magnet"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "$F = qvB\\sin\\theta$",
                              "statement": "Force is perpendicular to the plane of $v$ and $B$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The cross product $q\\vec{v} \\times \\vec{B}$ gives force perpendicular to both.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Perpendicular to both",
          "commonErrors": [
                    "Thinking magnetic force is along the field or velocity."
          ]
},
        },
        {
          id: "app1-u3-electromagnetism-induction-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "EMF is induced in a loop when ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "flux is constant"
                    },
                    {
                              "id": "b",
                              "text": "flux changes"
                    },
                    {
                              "id": "c",
                              "text": "current flows"
                    },
                    {
                              "id": "d",
                              "text": "charge is stationary"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Faraday",
                              "statement": "$\\mathcal{E} = -d\\Phi/dt$ — only CHANGING flux induces EMF."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Constant flux gives zero EMF; changing flux (moving magnet, rotating loop) induces voltage.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Flux changes",
          "commonErrors": [
                    "Thinking any flux through a loop induces current."
          ]
},
        },
        {
          id: "app1-u3-electromagnetism-induction-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A loop with $B = 0.5$ T and area $0.04$ m² faces the field straight on ($\\cos\\theta = 1$). Find the flux. Enter Wb.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$\\Phi$",
                              "answer": 0.02
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "$\\Phi = BA\\cos\\theta$",
                              "statement": "$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\Phi = 0.5 \\times 0.04 \\times 1 = 0.02$ Wb.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$\\Phi = 0.02$ Wb.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$0.02$ Wb",
          "commonErrors": [
                    "Forgetting $\\cos\\theta$ or using wrong units."
          ]
},
        },
        {
          id: "app1-u3-electromagnetism-induction-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "State Lenz's law and explain why it must be true using energy conservation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Lenz's law",
                              "statement": "Induced current opposes the flux change creating it."
                    },
                    {
                              "kind": "concept",
                              "name": "Energy conservation",
                              "statement": "If it aided the change, infinite energy loop."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lenz's law: induced EMF/current opposes the change in magnetic flux — the minus sign in Faraday's law.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "If induced current REINFORCED the flux change, it would create more flux, inducing more current — an infinite energy-generating loop violating conservation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Opposing the change means mechanical work is required to sustain induction — energy in = electrical energy out.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Induced current opposes flux change; required by energy conservation",
          "commonErrors": [
                    "Stating Lenz's law without the energy argument."
          ]
},
        },
      ],
    },
  ],
};
