import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "spk-u6-lesson-6-3",
  code: "6-3",
  title: "Simple Machines",
  goal: "I CAN identify simple machines like levers, wheels and ramps.",
  standards: ["ELOF-PK.SCI.MACHINE.1"],
  vocabulary: [
    { term: "Simple machine", definition: "A tool that makes work easier." },
    { term: "Lever", definition: "A bar that pivots to lift or move things." },
    { term: "Wheel", definition: "A round object that rolls to move things." },
    { term: "Ramp", definition: "A slanted surface that helps move things up." },
    { term: "Pulley", definition: "A wheel with a rope that lifts things." },
    { term: "Easier", definition: "Requires less effort." },
  ],
  concepts: [
    {
      id: "spk-u6-simple-machines",
      title: "Simple machines",
      skill: "Identify simple machines and how they make work easier.",
      lesson: {
        sections: [
          {
            heading: "What are simple machines?",
            body: "**Simple machines** are tools that make work **easier**: a **lever** (seesaw, crowbar), a **wheel** (car wheel, door handle), a **ramp** (slide, inclined plane), a **pulley** (flagpole, well bucket).",
          },
          {
            heading: "How they help",
            body: "Machines change the **direction** or **amount** of force needed. A ramp lets you push a heavy box up slowly instead of lifting it straight up.",
          },
        ],
        keyFormulas: [
          { name: "Simple machines", statement: "Lever, wheel, ramp, pulley — tools that make work easier." },
        ],
        workedExample: {
          problem: "A ramp helps you move a heavy box up to a truck. Which simple machine?",
          solution: "A **ramp** (inclined plane) — it makes lifting easier by letting you push instead.",
        },
      },
      questions: [
        {
          id: "spk-u6-simple-machines-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'simple machine' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a computer"
                    },
                    {
                              "id": "b",
                              "text": "a tool that makes work easier"
                    },
                    {
                              "id": "c",
                              "text": "a toy"
                    },
                    {
                              "id": "d",
                              "text": "a vehicle only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Simple machines = tools that make work easier."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Simple machines = tools that make work easier.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tool making work easier**",
          "commonErrors": [
                    "Thinks machines are complex only."
          ]
},
        },
        {
          id: "spk-u6-simple-machines-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ramp is an example of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a lever"
                    },
                    {
                              "id": "b",
                              "text": "an inclined plane (simple machine)"
                    },
                    {
                              "id": "c",
                              "text": "a pulley"
                    },
                    {
                              "id": "d",
                              "text": "a wheel"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Ramp = inclined plane, a simple machine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ramp = inclined plane, a simple machine.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**inclined plane**",
          "commonErrors": [
                    "Picks wrong machine type."
          ]
},
        },
        {
          id: "spk-u6-simple-machines-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name two simple machines you have seen or used. What job does each help with?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Simple machines",
                              "statement": "Lever, wheel, ramp, pulley."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 machines + jobs.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Wheel on a bike helps it roll; lever on a seesaw lifts people.'**",
          "commonErrors": [
                    "Cannot name machines.",
                    "No jobs."
          ]
},
        },
        {
          id: "spk-u6-simple-machines-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pulley is used to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cut things"
                    },
                    {
                              "id": "b",
                              "text": "lift things with a rope over a wheel"
                    },
                    {
                              "id": "c",
                              "text": "measure weight"
                    },
                    {
                              "id": "d",
                              "text": "push things"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pulley = wheel + rope for lifting."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pulley = wheel + rope for lifting.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Lift with rope**",
          "commonErrors": [
                    "Confuses pulley with lever."
          ]
},
        },
        {
          id: "spk-u6-simple-machines-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find a simple machine at home or school (door handle, scissors, slide, flagpole). Identify which type it is and how it makes work easier.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Simple machines",
                              "statement": "Identify type + function."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies machine type.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains how it helps.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Scissors = two levers; they make cutting easier.'**",
          "commonErrors": [
                    "Cannot identify.",
                    "No explanation."
          ]
},
        },
        {
          id: "spk-u6-simple-machines-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Simple machine\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A bar that pivots to lift or move things."
                    },
                    {
                              "id": "b",
                              "text": "A tool that makes work easier."
                    },
                    {
                              "id": "c",
                              "text": "A round object that rolls to move things."
                    },
                    {
                              "id": "d",
                              "text": "A slanted surface that helps move things up."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Simple machine\" means A tool that makes work easier."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Simple machine\" means A tool that makes work easier.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Simple machine** = A tool that makes work easier.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u6-simple-machines-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Lever\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A round object that rolls to move things."
                    },
                    {
                              "id": "b",
                              "text": "A slanted surface that helps move things up."
                    },
                    {
                              "id": "c",
                              "text": "A wheel with a rope that lifts things."
                    },
                    {
                              "id": "d",
                              "text": "A bar that pivots to lift or move things."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Lever\" means A bar that pivots to lift or move things."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Lever\" means A bar that pivots to lift or move things.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Lever** = A bar that pivots to lift or move things.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u6-simple-machines-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Wheel\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A slanted surface that helps move things up."
                    },
                    {
                              "id": "b",
                              "text": "A round object that rolls to move things."
                    },
                    {
                              "id": "c",
                              "text": "A wheel with a rope that lifts things."
                    },
                    {
                              "id": "d",
                              "text": "Requires less effort."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Wheel\" means A round object that rolls to move things."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Wheel\" means A round object that rolls to move things.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Wheel** = A round object that rolls to move things.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
