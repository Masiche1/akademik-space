import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "app1-u1-lesson-1-1",
  code: "1-1",
  title: "Kinematics in One and Two Dimensions",
  goal: "I CAN describe motion with position, velocity, acceleration, and projectile motion.",
  standards: ["KIN-1"],
  vocabulary: [
    { term: "Displacement", definition: "Change in position — vector with magnitude and direction." },
    { term: "Velocity", definition: "$\\vec{v} = \\frac{d\\vec{x}}{dt}$ — rate of change of position." },
    { term: "Acceleration", definition: "$\\vec{a} = \\frac{d\\vec{v}}{dt}$ — rate of change of velocity." },
    { term: "Projectile motion", definition: "Motion under gravity only — horizontal and vertical components independent." },
    { term: "Free fall", definition: "Motion under gravity alone: $a = -9.8$ m/s$^2$." },
  ],
  concepts: [
    {
      id: "app1-u1-kinematics",
      title: "Kinematics",
      skill: "Analyze motion using kinematic equations and vectors.",
      lesson: {
        sections: [
          {
            heading: "1D motion",
            body: "For constant acceleration: $v = v_0 + at$, $x = x_0 + v_0 t + \\frac{1}{2}at^2$, $v^2 = v_0^2 + 2a(x - x_0)$. Velocity and acceleration are vectors — direction matters. Average velocity $= \\frac{\\Delta x}{\\Delta t}$; instantaneous is the derivative.",
          },
          {
            heading: "2D and projectile motion",
            body: "Resolve motion into horizontal ($a_x = 0$) and vertical ($a_y = -g$) components. Horizontal velocity stays constant; vertical follows free-fall equations. Time of flight depends only on vertical motion; range depends on both. Independence of components is the key insight.",
          },
        ],
        keyFormulas: [
          { name: "Kinematic equations", statement: "$v = v_0 + at$; $x = v_0 t + \\frac{1}{2}at^2$; $v^2 = v_0^2 + 2ax$" },
          { name: "Projectile", statement: "Horizontal: constant $v$; vertical: $a = -g$" },
        ],
        workedExample: {
          problem: "Ball thrown up at $20$ m/s. Max height? (Use $g = 9.8$)",
          solution: "At max height $v = 0$: $0 = 20^2 - 2(9.8)h \\Rightarrow h = \\frac{400}{19.6} \\approx 20.4$ m.",
        },
      },
      questions: [
        {
          id: "app1-u1-kinematics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Acceleration is the rate of change of ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "position"
                    },
                    {
                              "id": "b",
                              "text": "velocity"
                    },
                    {
                              "id": "c",
                              "text": "time"
                    },
                    {
                              "id": "d",
                              "text": "distance"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Acceleration",
                              "statement": "$\\vec{a} = d\\vec{v}/dt$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Acceleration measures how velocity changes over time.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Velocity",
          "commonErrors": [
                    "Confusing acceleration with velocity."
          ]
},
        },
        {
          id: "app1-u1-kinematics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In projectile motion (ignoring air resistance), the horizontal acceleration is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$-g$"
                    },
                    {
                              "id": "b",
                              "text": "$0$"
                    },
                    {
                              "id": "c",
                              "text": "$g$"
                    },
                    {
                              "id": "d",
                              "text": "varies"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Component independence",
                              "statement": "No horizontal force means $a_x = 0$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only gravity acts, vertically — horizontal velocity is constant.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$0$",
          "commonErrors": [
                    "Thinking gravity affects both components."
          ]
},
        },
        {
          id: "app1-u1-kinematics-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Car accelerates from $10$ m/s to $30$ m/s in $5$ s. Find acceleration. Enter m/s².",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$a$",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "$a = \\frac{\\Delta v}{\\Delta t}$",
                              "statement": "$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$a = \\frac{30 - 10}{5} = \\frac{20}{5} = 4$ m/s$^2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$a = 4$ m/s$^2$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$4$ m/s²",
          "commonErrors": [
                    "Using final velocity only or dividing by wrong time."
          ]
},
        },
        {
          id: "app1-u1-kinematics-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A ball is launched horizontally at $10$ m/s from a $45$ m cliff. Find (a) time to hit ground and (b) horizontal distance traveled. ($g = 9.8$)",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Component independence",
                              "statement": "Vertical: free fall from rest; horizontal: constant $10$ m/s."
                    },
                    {
                              "kind": "method",
                              "name": "Kinematics",
                              "statement": "$h = \\frac{1}{2}gt^2$, $x = vt$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) $45 = \\frac{1}{2}(9.8)t^2 \\Rightarrow t^2 = \\frac{90}{9.8} \\approx 9.18 \\Rightarrow t \\approx 3.03$ s.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) $x = 10 \\times 3.03 \\approx 30.3$ m.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct values with component reasoning.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$t \\approx 3.03$ s; $x \\approx 30.3$ m",
          "commonErrors": [
                    "Using total velocity for horizontal distance or mixing components."
          ]
},
        },
      ],
    },
  ],
};
