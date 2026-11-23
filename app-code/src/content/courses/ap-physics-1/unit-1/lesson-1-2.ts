import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "app1-u1-lesson-1-2",
  code: "1-2",
  title: "Newton's Laws of Motion",
  goal: "I CAN apply Newton's three laws to analyze forces and motion.",
  standards: ["NEW-1"],
  vocabulary: [
    { term: "Newton's 1st", definition: "An object stays at rest or uniform motion unless acted on by net force — inertia." },
    { term: "Newton's 2nd", definition: "$\\vec{F}_{net} = m\\vec{a}$ — net force causes acceleration." },
    { term: "Newton's 3rd", definition: "For every action force there's an equal, opposite reaction force." },
    { term: "Normal force", definition: "Perpendicular contact force preventing interpenetration." },
    { term: "Friction", definition: "Opposes relative motion; $f \\le \\mu N$." },
  ],
  concepts: [
    {
      id: "app1-u1-newtons-laws",
      title: "Newton's laws",
      skill: "Draw free-body diagrams and apply $F = ma$.",
      lesson: {
        sections: [
          {
            heading: "The three laws",
            body: "**1st**: objects resist changes in motion (inertia $= m$). **2nd**: $\\vec{F}_{net} = m\\vec{a}$ — the master equation; find net force by vector-summing all forces. **3rd**: forces come in pairs acting on DIFFERENT objects — action-reaction pairs never cancel each other.",
          },
          {
            heading: "Free-body diagrams",
            body: "Isolate one object, draw all forces ON it (never action-reaction pairs), resolve into components if needed, apply $\\sum F_x = ma_x$, $\\sum F_y = ma_y$. On an incline, gravity splits into $mg\\sin\\theta$ (down slope) and $mg\\cos\\theta$ (into slope, balanced by normal force).",
          },
        ],
        keyFormulas: [
          { name: "Newton's 2nd", statement: "$\\vec{F}_{net} = m\\vec{a}$" },
          { name: "Incline components", statement: "$mg\\sin\\theta$ parallel, $mg\\cos\\theta$ perpendicular" },
        ],
        workedExample: {
          problem: "10 kg box pulled with 50 N horizontal force, $\\mu_k = 0.2$. Find acceleration. ($g = 9.8$)",
          solution: "$f_k = \\mu N = 0.2 \\times 10 \\times 9.8 = 19.6$ N. $F_{net} = 50 - 19.6 = 30.4$ N. $a = \\frac{30.4}{10} = 3.04$ m/s$^2$.",
        },
      },
      questions: [
        {
          id: "app1-u1-newtons-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Newton's third law pairs act on ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the same object"
                    },
                    {
                              "id": "b",
                              "text": "different objects"
                    },
                    {
                              "id": "c",
                              "text": "no objects"
                    },
                    {
                              "id": "d",
                              "text": "the Earth only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "3rd law",
                              "statement": "Action-reaction forces act on different bodies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The two forces of a pair never act on the same object — that's why they don't cancel.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Different objects",
          "commonErrors": [
                    "Thinking action-reaction forces cancel — they're on different objects."
          ]
},
        },
        {
          id: "app1-u1-newtons-laws-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 5 kg object accelerates at $2$ m/s². Net force?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$2.5$ N"
                    },
                    {
                              "id": "b",
                              "text": "$10$ N"
                    },
                    {
                              "id": "c",
                              "text": "$7$ N"
                    },
                    {
                              "id": "d",
                              "text": "$0.4$ N"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "$F = ma$",
                              "statement": "$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$F = 5 \\times 2 = 10$ N.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$10$ N",
          "commonErrors": [
                    "Dividing instead of multiplying $m \\times a$."
          ]
},
        },
        {
          id: "app1-u1-newtons-laws-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "On a frictionless $30^\\circ$ incline, a $2$ kg block slides. Find acceleration down the slope. ($g = 9.8$, $\\sin 30^\\circ = 0.5$). Enter m/s².",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$a$",
                              "answer": 4.9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Incline",
                              "statement": "$a = g\\sin\\theta = 9.8 \\times 0.5$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$a = 9.8 \\times 0.5 = 4.9$ m/s$^2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$a = 4.9$ m/s$^2$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$4.9$ m/s²",
          "commonErrors": [
                    "Using $\\cos\\theta$ or forgetting to resolve gravity."
          ]
},
        },
        {
          id: "app1-u1-newtons-laws-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a book on a table doesn't fall through it, using Newton's laws and identifying all forces.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Normal force",
                              "statement": "Table pushes up perpendicular to surface."
                    },
                    {
                              "kind": "concept",
                              "name": "Equilibrium",
                              "statement": "$\\sum F = 0$ for stationary objects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Forces on book: gravity $mg$ down, normal force $N$ up from table.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Book is stationary so $a = 0$; Newton's 2nd gives $N - mg = 0$, so $N = mg$ — the table pushes up exactly balancing weight.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The table deforms slightly, generating the normal force via electromagnetic repulsion — that's why it doesn't fall through.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "$N = mg$ upward balances weight; net force zero",
          "commonErrors": [
                    "Listing action-reaction pairs on the same FBD or missing the normal force."
          ]
},
        },
      ],
    },
  ],
};
