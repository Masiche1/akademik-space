import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "phys10-u1-lesson-1-1",
  code: "1-1",
  title: "Newton's Laws of Motion",
  goal: "I CAN apply Newton's three laws to explain and predict motion.",
  standards: ["HS-PS2-1"],
  vocabulary: [
    { term: "Force", definition: "Push or pull measured in newtons." },
    { term: "Inertia", definition: "Resistance to change in motion." },
    { term: "Acceleration", definition: "Rate of change of velocity." },
    { term: "Net force", definition: "Vector sum of all forces." },
    { term: "Normal force", definition: "Support force perpendicular to surface." },
  ],
  concepts: [
    {
      id: "phys10-u1-newtons-laws",
      title: "Newton's laws",
      skill: "Apply Newton's three laws to motion problems.",
      lesson: {
        sections: [
          {
            heading: "The three laws",
            body: "First law: an object stays at rest or constant velocity unless a net force acts (inertia). Second law: $F = ma$ — force equals mass times acceleration. Third law: every action has an equal and opposite reaction.",
          },
          {
            heading: "Free-body diagrams",
            body: "To solve problems, draw all forces on an object: weight ($mg$ down), normal force (up), friction, applied forces. The net force determines acceleration: $a = F_{net}/m$.",
          },
        ],
        keyFormulas: [
          { name: "Second law", statement: "$F = ma$" },
          { name: "Weight", statement: "$W = mg$" },
          { name: "Net force", statement: "Vector sum." },
        ],
        workedExample: {
          problem: "A 5 kg box is pushed with 20 N on a frictionless floor. What is its acceleration?",
          solution: "$a = F/m = 20/5 = 4$ m/s².",
        },
      },
      questions: [
        {
          id: "phys10-u1-newtons-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Newton's first law is also called the law of ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "action-reaction"
                    },
                    {
                              "id": "b",
                              "text": "inertia"
                    },
                    {
                              "id": "c",
                              "text": "acceleration"
                    },
                    {
                              "id": "d",
                              "text": "gravity"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "First law",
                              "statement": "Objects resist change in motion = inertia."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The first law describes inertia — resistance to changes in motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** inertia",
          "commonErrors": [
                    "Confusing with second law."
          ]
},
        },
        {
          id: "phys10-u1-newtons-laws-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 2 kg object accelerates at 3 m/s². What net force acts on it?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1.5 N"
                    },
                    {
                              "id": "b",
                              "text": "5 N"
                    },
                    {
                              "id": "c",
                              "text": "6 N"
                    },
                    {
                              "id": "d",
                              "text": "9 N"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Second law",
                              "statement": "$F = ma = 2 \\times 3 = 6$ N."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$F = ma = 2 \\times 3 = 6$ N.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(c)** 6 N",
          "commonErrors": [
                    "Dividing instead of multiplying."
          ]
},
        },
        {
          id: "phys10-u1-newtons-laws-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 10 kg object experiences a net force of 50 N. What is its acceleration?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Acceleration",
                              "answer": 5,
                              "unit": "m/s²"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Second law",
                              "statement": "$a = F/m = 50/10 = 5$ m/s²."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$a = 50/10 = 5$ m/s².",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5$ m/s²",
          "commonErrors": [
                    "Multiplying m by a instead of dividing."
          ]
},
        },
        {
          id: "phys10-u1-newtons-laws-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A book rests on a table. Identify the action-reaction force pair involving the book and explain why the book doesn't accelerate downward.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Third law",
                              "statement": "Equal and opposite forces."
                    },
                    {
                              "kind": "skill",
                              "name": "Equilibrium",
                              "statement": "Net force zero."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The book pushes down on the table; the table pushes up on the book (normal force). The book doesn't accelerate because weight down is balanced by normal force up — net force is zero.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Action-reaction pair identified and equilibrium explained.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Table pushes up on book; forces balance.**",
          "commonErrors": [
                    "Naming wrong force pair."
          ]
},
        },
      ],
    },
  ],
};
