import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "spk-u6-lesson-6-4",
  code: "6-4",
  title: "Forces and Motion Review",
  goal: "I CAN describe push, pull, gravity and simple machines.",
  standards: ["ELOF-PK.SCI.FORCE.3"],
  vocabulary: [
    { term: "Push", definition: "Force away." },
    { term: "Pull", definition: "Force toward." },
    { term: "Gravity", definition: "Pulls things down." },
    { term: "Force", definition: "Push or pull." },
    { term: "Simple machine", definition: "Tool making work easier." },
    { term: "Lever", definition: "Pivoting bar." },
    { term: "Wheel", definition: "Rolling circle." },
  ],
  concepts: [
    {
      id: "spk-u6-motion-review",
      title: "Forces and motion review",
      skill: "Combine push/pull, gravity and simple machines.",
      lesson: {
        sections: [
          {
            heading: "Forces everywhere",
            body: "**Forces** (pushes and pulls) make things move. **Gravity** pulls everything down. **Simple machines** (levers, wheels, ramps, pulleys) make forces work for us more easily.",
          },
          {
            heading: "Put it together",
            body: "When you ride a bike, wheels reduce friction; when you use a ramp, you use less force; when you drop something, gravity pulls it down.",
          },
        ],
        keyFormulas: [
          { name: "Forces", statement: "Push + pull + gravity + machines = understanding motion and work." },
        ],
        workedExample: {
          problem: "How does a wheel make moving things easier?",
          solution: "A **wheel** rolls instead of sliding, reducing friction and making movement easier.",
        },
      },
      questions: [
        {
          id: "spk-u6-motion-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Gravity and push/pull are both...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "types of machines"
                    },
                    {
                              "id": "b",
                              "text": "forces"
                    },
                    {
                              "id": "c",
                              "text": "types of materials"
                    },
                    {
                              "id": "d",
                              "text": "weather"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Gravity, push and pull are all forces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gravity, push and pull are all forces.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Forces**",
          "commonErrors": [
                    "Confuses forces with machines."
          ]
},
        },
        {
          id: "spk-u6-motion-review-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which simple machine helps lift a flag?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "lever"
                    },
                    {
                              "id": "b",
                              "text": "pulley"
                    },
                    {
                              "id": "c",
                              "text": "ramp"
                    },
                    {
                              "id": "d",
                              "text": "wheel"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "A pulley lifts a flag up a pole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A pulley lifts a flag up a pole.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**pulley**",
          "commonErrors": [
                    "Picks wrong machine."
          ]
},
        },
        {
          id: "spk-u6-motion-review-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Give an example of a force (push/pull/gravity) and a simple machine. How does each help?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Forces + machines",
                              "statement": "Force = push/pull/gravity; machine = lever/wheel/etc."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives force + machine examples.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Gravity pulls apple down; wheel on cart makes moving easier.'**",
          "commonErrors": [
                    "Cannot give examples.",
                    "Confuses force/machine."
          ]
},
        },
        {
          id: "spk-u6-motion-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A seesaw is an example of a...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "pulley"
                    },
                    {
                              "id": "b",
                              "text": "lever"
                    },
                    {
                              "id": "c",
                              "text": "wheel"
                    },
                    {
                              "id": "d",
                              "text": "ramp"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Seesaw = lever (bar pivoting on a point)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Seesaw = lever (bar pivoting on a point).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**lever**",
          "commonErrors": [
                    "Picks wrong machine."
          ]
},
        },
        {
          id: "spk-u6-motion-review-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design a simple machine to help move a heavy object (like a box or toy). Draw it, name the machine type, and explain how it reduces effort.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Simple machines",
                              "statement": "Design + explain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Designs a machine.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Names type + explains.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Ramp for box — inclined plane lets me push instead of lift.'**",
          "commonErrors": [
                    "No design.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "spk-u6-motion-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Push\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Force toward."
                    },
                    {
                              "id": "b",
                              "text": "Force away."
                    },
                    {
                              "id": "c",
                              "text": "Pulls things down."
                    },
                    {
                              "id": "d",
                              "text": "Push or pull."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Push\" means Force away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Push\" means Force away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Push** = Force away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u6-motion-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pull\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pulls things down."
                    },
                    {
                              "id": "b",
                              "text": "Push or pull."
                    },
                    {
                              "id": "c",
                              "text": "Tool making work easier."
                    },
                    {
                              "id": "d",
                              "text": "Force toward."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pull\" means Force toward."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pull\" means Force toward.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pull** = Force toward.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u6-motion-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gravity\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Push or pull."
                    },
                    {
                              "id": "b",
                              "text": "Pulls things down."
                    },
                    {
                              "id": "c",
                              "text": "Tool making work easier."
                    },
                    {
                              "id": "d",
                              "text": "Pivoting bar."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gravity\" means Pulls things down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gravity\" means Pulls things down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gravity** = Pulls things down.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
