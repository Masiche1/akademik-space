import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "sci6-u1-lesson-1-3",
  code: "1-3",
  title: "Newton's Laws",
  goal: "I CAN apply Newton's three laws of motion.",
  standards: ["MS-PS2-1", "MS-PS2-2"],
  vocabulary: [
    { term: "First law", definition: "Inertia." },
    { term: "Second law", definition: "F = ma." },
    { term: "Third law", definition: "Action-reaction." },
    { term: "Inertia", definition: "Resistance to change." },
    { term: "Mass", definition: "Amount of matter." },
    { term: "Acceleration", definition: "Rate of velocity change." },
    { term: "Action", definition: "Force applied." },
    { term: "Reaction", definition: "Equal opposite force." },
  ],
  concepts: [
    {
      id: "sci6-u1-newtons-laws",
      title: "Newton's laws",
      skill: "Apply Newton's three laws of motion to explain motion.",
      lesson: {
        sections: [
          {
            heading: "Three laws",
            body: "**1st**: Objects stay at rest or in motion unless acted on by force (inertia). **2nd**: F = ma (force = mass x acceleration). **3rd**: Every action has equal opposite reaction.",
          },
          {
            heading: "Examples",
            body: "1st: Seatbelt in crash. 2nd: Pushing car — more force = more acceleration. 3rd: Rocket exhaust pushes rocket up.",
          },
        ],
        keyFormulas: [
          { name: "Newton's 2nd", statement: "F = ma" },
          { name: "Newton's 3rd", statement: "Action = -Reaction" },
        ],
        workedExample: {
          problem: "A 10 kg object accelerates at 2 m/s². What force is applied?",
          solution: "F = ma = 10 x 2 = **20 N**.",
        },
      },
      questions: [
        {
          id: "sci6-u1-newtons-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Newton's First Law states that objects...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "always accelerate"
                    },
                    {
                              "id": "b",
                              "text": "stay at rest or in motion unless forced"
                    },
                    {
                              "id": "c",
                              "text": "always stop"
                    },
                    {
                              "id": "d",
                              "text": "always move"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Inertia law."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Inertia law.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "stay at rest or in motion unless forced",
          "commonErrors": [
                    "Wrong law."
          ]
},
        },
        {
          id: "sci6-u1-newtons-laws-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Newton's Second Law formula is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "F = mv"
                    },
                    {
                              "id": "b",
                              "text": "F = ma"
                    },
                    {
                              "id": "c",
                              "text": "F = m/a"
                    },
                    {
                              "id": "d",
                              "text": "F = a/m"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "F = ma."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "F = ma.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "F = ma",
          "commonErrors": [
                    "Wrong formula."
          ]
},
        },
        {
          id: "sci6-u1-newtons-laws-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 5 kg object accelerates at 4 m/s². Calculate the force. Then explain which Newton's law this uses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Newton's",
                              "statement": "20 N + 2nd law."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calculates force.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies law.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**F = ma = 5 x 4 = 20 N; Newton's Second Law.**",
          "commonErrors": [
                    "Wrong force.",
                    "Wrong law."
          ]
},
        },
        {
          id: "sci6-u1-newtons-laws-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Newton's Third Law states that...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "forces are equal"
                    },
                    {
                              "id": "b",
                              "text": "every action has equal opposite reaction"
                    },
                    {
                              "id": "c",
                              "text": "objects have inertia"
                    },
                    {
                              "id": "d",
                              "text": "F = ma"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Action-reaction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Action-reaction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "every action has equal opposite reaction",
          "commonErrors": [
                    "Wrong law."
          ]
},
        },
        {
          id: "sci6-u1-newtons-laws-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Give an example of each of Newton's three laws in real life.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Newton's",
                              "statement": "Three examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives examples.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**1st: Seatbelt; 2nd: Car acceleration; 3rd: Rocket launch.**",
          "commonErrors": [
                    "Fewer than three.",
                    "Wrong examples."
          ]
},
        },
        {
          id: "sci6-u1-newtons-laws-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"First law\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "F = ma."
                    },
                    {
                              "id": "b",
                              "text": "Inertia."
                    },
                    {
                              "id": "c",
                              "text": "Action-reaction."
                    },
                    {
                              "id": "d",
                              "text": "Resistance to change."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"First law\" means Inertia."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"First law\" means Inertia.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**First law** = Inertia.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u1-newtons-laws-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Second law\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Action-reaction."
                    },
                    {
                              "id": "b",
                              "text": "Resistance to change."
                    },
                    {
                              "id": "c",
                              "text": "Amount of matter."
                    },
                    {
                              "id": "d",
                              "text": "F = ma."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Second law\" means F = ma."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Second law\" means F = ma.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Second law** = F = ma.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u1-newtons-laws-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Third law\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Resistance to change."
                    },
                    {
                              "id": "b",
                              "text": "Action-reaction."
                    },
                    {
                              "id": "c",
                              "text": "Amount of matter."
                    },
                    {
                              "id": "d",
                              "text": "Rate of velocity change."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Third law\" means Action-reaction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Third law\" means Action-reaction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Third law** = Action-reaction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
