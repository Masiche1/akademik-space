import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "app1-u1-lesson-1-3",
  code: "1-3",
  title: "Circular Motion and Gravitation",
  goal: "I CAN analyze circular motion and apply the law of gravitation.",
  standards: ["NEW-2"],
  vocabulary: [
    { term: "Centripetal acceleration", definition: "$a_c = \\frac{v^2}{r}$ — toward center of circle." },
    { term: "Centripetal force", definition: "Net force causing circular motion — not a separate force." },
    { term: "Period", definition: "$T = \\frac{2\\pi r}{v}$ — time for one revolution." },
    { term: "Universal gravitation", definition: "$F_g = G\\frac{m_1 m_2}{r^2}$ — inverse-square law." },
    { term: "Orbital velocity", definition: "$v = \\sqrt{\\frac{GM}{r}}$ for circular orbits." },
  ],
  concepts: [
    {
      id: "app1-u1-circular-gravity",
      title: "Circular motion and gravity",
      skill: "Relate centripetal force to gravity and orbital motion.",
      lesson: {
        sections: [
          {
            heading: "Circular motion",
            body: "An object in uniform circular motion accelerates toward the center at $a_c = \\frac{v^2}{r}$, requiring a net inward force $F_c = \\frac{mv^2}{r}$. This is NOT a new force — it's whatever real force points inward: tension, friction, gravity, normal force.",
          },
          {
            heading: "Gravitation",
            body: "Newton's law: $F_g = G\\frac{m_1m_2}{r^2}$ — every mass attracts every other. For orbits, gravity PROVIDES the centripetal force: $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$ gives $v = \\sqrt{\\frac{GM}{r}}$. Higher orbits need LOWER speed — counterintuitive but correct.",
          },
        ],
        keyFormulas: [
          { name: "Centripetal", statement: "$a_c = \\frac{v^2}{r}$, $F_c = \\frac{mv^2}{r}$" },
          { name: "Gravitation", statement: "$F_g = G\\frac{m_1m_2}{r^2}$" },
          { name: "Orbital speed", statement: "$v = \\sqrt{\\frac{GM}{r}}$" },
        ],
        workedExample: {
          problem: "Car rounds a $50$ m curve at $20$ m/s. What centripetal acceleration?",
          solution: "$a_c = \\frac{v^2}{r} = \\frac{400}{50} = 8$ m/s$^2$ toward the center.",
        },
      },
      questions: [
        {
          id: "app1-u1-circular-gravity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Centripetal force is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a new force outward"
                    },
                    {
                              "id": "b",
                              "text": "the net inward force causing circular motion"
                    },
                    {
                              "id": "c",
                              "text": "centrifugal force"
                    },
                    {
                              "id": "d",
                              "text": "always gravity"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Centripetal",
                              "statement": "Real net force directed toward center."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It's whatever force points inward — tension, friction, gravity — not a separate force.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Net inward force",
          "commonErrors": [
                    "Inventing 'centrifugal force' as a real force."
          ]
},
        },
        {
          id: "app1-u1-circular-gravity-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If orbital radius doubles, orbital speed ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "doubles"
                    },
                    {
                              "id": "b",
                              "text": "halves"
                    },
                    {
                              "id": "c",
                              "text": "becomes $\\frac{1}{\\sqrt{2}}$ of original"
                    },
                    {
                              "id": "d",
                              "text": "stays same"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "$v = \\sqrt{GM/r}$",
                              "statement": "$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$v \\propto \\frac{1}{\\sqrt{r}}$; doubling $r$ divides $v$ by $\\sqrt{2} \\approx 0.707$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$v/\\sqrt{2}$",
          "commonErrors": [
                    "Thinking speed increases with orbit size — it decreases."
          ]
},
        },
        {
          id: "app1-u1-circular-gravity-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $1000$ kg satellite orbits Earth ($GM = 3.986 \\times 10^{14}$ m³/s²) at $r = 7 \\times 10^6$ m. Find orbital speed. Enter km/s (rounded).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$v$",
                              "answer": 7.55,
                              "tolerance": 0.05
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Orbital speed",
                              "statement": "$v = \\sqrt{GM/r}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$v = \\sqrt{\\frac{3.986 \\times 10^{14}}{7 \\times 10^6}} = \\sqrt{5.69 \\times 10^7} \\approx 7547$ m/s $\\approx 7.55$ km/s.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$\\approx 7.55$ km/s.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$7.55$ km/s",
          "commonErrors": [
                    "Squaring instead of square-rooting or unit errors."
          ]
},
        },
        {
          id: "app1-u1-circular-gravity-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a satellite in a higher orbit moves SLOWER, not faster, despite feeling 'less gravity'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Weaker gravity",
                              "statement": "$F_g \\propto 1/r^2$ decreases with distance."
                    },
                    {
                              "kind": "theorem",
                              "name": "Orbital speed",
                              "statement": "$v = \\sqrt{GM/r}$ decreases as $r$ increases."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gravity is weaker at larger $r$ — but orbital speed is set by $v = \\sqrt{GM/r}$, which also decreases with $r$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Higher orbit = longer path AND weaker pull needed to curve the path — speed drops as $1/\\sqrt{r}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Period actually increases strongly: $T = 2\\pi\\sqrt{r^3/GM}$ — Kepler's third law.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$v \\propto 1/\\sqrt{r}$ — slower at higher orbit",
          "commonErrors": [
                    "Assuming weaker gravity means faster orbit — it's the opposite."
          ]
},
        },
      ],
    },
  ],
};
