import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "app1-u2-lesson-2-2",
  code: "2-2",
  title: "Momentum and Impulse",
  goal: "I CAN apply conservation of momentum and impulse-momentum theorem.",
  standards: ["MOM-1"],
  vocabulary: [
    { term: "Momentum", definition: "$\\vec{p} = m\\vec{v}$ — mass times velocity." },
    { term: "Impulse", definition: "$J = F\\Delta t = \\Delta p$ — force over time changes momentum." },
    { term: "Conservation of momentum", definition: "Total momentum constant in isolated systems (no external force)." },
    { term: "Elastic collision", definition: "KE conserved — objects bounce apart." },
    { term: "Inelastic collision", definition: "KE not conserved — objects stick or deform." },
  ],
  concepts: [
    {
      id: "app1-u2-momentum-impulse",
      title: "Momentum",
      skill: "Apply momentum conservation and impulse to collisions.",
      lesson: {
        sections: [
          {
            heading: "Momentum and impulse",
            body: "Momentum $\\vec{p} = m\\vec{v}$. **Impulse** $J = F_{avg}\\Delta t = \\Delta p$ — same momentum change can come from large force short time or small force long time (airbags!). Extending $\\Delta t$ reduces peak force.",
          },
          {
            heading: "Collisions",
            body: "In an **isolated system**, total momentum is conserved: $m_1v_{1i} + m_2v_{2i} = m_1v_{1f} + m_2v_{2f}$. **Elastic** collisions also conserve KE (bouncy); **inelastic** don't (crumple, stick). For a completely inelastic collision where objects stick, final velocity $v_f = \\frac{m_1v_1 + m_2v_2}{m_1 + m_2}$.",
          },
        ],
        keyFormulas: [
          { name: "Momentum", statement: "$\\vec{p} = m\\vec{v}$" },
          { name: "Impulse", statement: "$J = F\\Delta t = \\Delta p$" },
          { name: "Conservation", statement: "$\\sum p_i = \\sum p_f$ (isolated system)" },
        ],
        workedExample: {
          problem: "2 kg at $3$ m/s hits 1 kg at rest, stick together. Final velocity?",
          solution: "$p_i = 2(3) + 0 = 6$ kg·m/s. Combined mass $= 3$ kg. $v_f = \\frac{6}{3} = 2$ m/s.",
        },
      },
      questions: [
        {
          id: "app1-u2-momentum-impulse-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Impulse equals ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$m\\vec{v}$"
                    },
                    {
                              "id": "b",
                              "text": "$F\\Delta t = \\Delta p$"
                    },
                    {
                              "id": "c",
                              "text": "$\\frac{1}{2}mv^2$"
                    },
                    {
                              "id": "d",
                              "text": "$ma$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Impulse",
                              "statement": "Force times time equals momentum change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$J = F_{avg}\\Delta t = \\Delta p$ — the impulse-momentum theorem.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$F\\Delta t = \\Delta p$",
          "commonErrors": [
                    "Confusing impulse with momentum itself."
          ]
},
        },
        {
          id: "app1-u2-momentum-impulse-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Airbags reduce injury by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "increasing force"
                    },
                    {
                              "id": "b",
                              "text": "increasing collision time, decreasing force"
                    },
                    {
                              "id": "c",
                              "text": "eliminating momentum change"
                    },
                    {
                              "id": "d",
                              "text": "increasing mass"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Impulse",
                              "statement": "$J = F\\Delta t$ fixed; longer $\\Delta t$ means smaller $F$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Airbags extend stopping time — same momentum change spread over longer time = smaller peak force.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Thinking airbags reduce momentum change — they reduce force via time."
          ]
},
        },
        {
          id: "app1-u2-momentum-impulse-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "5 kg at $4$ m/s and 3 kg at $-2$ m/s collide and stick. Find final velocity. Enter m/s.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$v_f$",
                              "answer": 1.75
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Momentum conservation",
                              "statement": "$v_f = \\frac{5(4) + 3(-2)}{5+3} = \\frac{14}{8}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$p_i = 20 - 6 = 14$; $v_f = \\frac{14}{8} = 1.75$ m/s.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$v_f = 1.75$ m/s.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$1.75$ m/s",
          "commonErrors": [
                    "Sign error on the $-2$ m/s momentum or wrong total mass."
          ]
},
        },
        {
          id: "app1-u2-momentum-impulse-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Distinguish elastic and inelastic collisions in terms of momentum and kinetic energy conservation, with an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Momentum",
                              "statement": "Always conserved in isolated systems."
                    },
                    {
                              "kind": "concept",
                              "name": "KE",
                              "statement": "Only conserved in elastic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Momentum $\\sum p$ is conserved in BOTH types — it's the universal conservation law for isolated systems.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Elastic collisions also conserve KE — objects bounce (pool balls, ideal gas molecules).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Inelastic lose KE to deformation/heat/sound — objects stick or crumple (car crashes, clay balls).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Momentum always; KE only elastic",
          "commonErrors": [
                    "Claiming inelastic collisions violate momentum conservation."
          ]
},
        },
      ],
    },
  ],
};
