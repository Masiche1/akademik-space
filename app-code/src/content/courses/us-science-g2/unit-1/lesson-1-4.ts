import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "sci2-u1-lesson-1-4",
  code: "1-4",
  title: "Patterns of Motion",
  goal: "I CAN describe patterns of motion like fast/slow, straight/curved.",
  standards: ["NGSS 2-PS2-2"],
  vocabulary: [
    { term: "Motion", definition: "Movement." },
    { term: "Fast", definition: "Quick movement." },
    { term: "Slow", definition: "Gentle movement." },
    { term: "Straight", definition: "In a line." },
    { term: "Curved", definition: "In a curve." },
    { term: "Back", definition: "Reverse direction." },
    { term: "Forth", definition: "Back and forth." },
    { term: "Pattern", definition: "Repeated way of moving." },
  ],
  concepts: [
    {
      id: "sci2-u1-motion-patterns",
      title: "Patterns of motion",
      skill: "Describe patterns of motion: fast/slow, straight/curved, back/forth.",
      lesson: {
        sections: [
          {
            heading: "How things move",
            body: "Things move in different **patterns**: **fast** or **slow**, in a **straight** line or a **curve**, back and **forth**, or around in circles.",
          },
          {
            heading: "Describe motion",
            body: "Use words like 'fast', 'slow', 'straight', 'curved' to describe how something moves.",
          },
        ],
        keyFormulas: [
          { name: "Motion patterns", statement: "Fast/slow, straight/curved, back/forth, circular = patterns." },
        ],
        workedExample: {
          problem: "Describe the motion of a pendulum (swinging clock).",
          solution: "It swings **back and forth** (forth) in a **curved** path at a steady **speed**.",
        },
      },
      questions: [
        {
          id: "sci2-u1-motion-patterns-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Motion' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "still"
                    },
                    {
                              "id": "b",
                              "text": "movement"
                    },
                    {
                              "id": "c",
                              "text": "a color"
                    },
                    {
                              "id": "d",
                              "text": "a sound"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Motion = movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Motion = movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**movement**",
          "commonErrors": [
                    "Confuses with stillness."
          ]
},
        },
        {
          id: "sci2-u1-motion-patterns-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A car going in a straight line has...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "curved motion"
                    },
                    {
                              "id": "b",
                              "text": "straight motion"
                    },
                    {
                              "id": "c",
                              "text": "no motion"
                    },
                    {
                              "id": "d",
                              "text": "back and forth"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Straight line = straight motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Straight line = straight motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**straight**",
          "commonErrors": [
                    "Picks wrong pattern."
          ]
},
        },
        {
          id: "sci2-u1-motion-patterns-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the motion of a swinging swing, a rolling ball, and a walking person.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Motion patterns",
                              "statement": "Back/forth, straight, stepping."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes swing motion.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes ball + person.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Swing: back/forth. Ball: straight. Person: stepping forward.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "All same."
          ]
},
        },
        {
          id: "sci2-u1-motion-patterns-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Back and forth' motion is called...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "linear"
                    },
                    {
                              "id": "b",
                              "text": "oscillating or swinging"
                    },
                    {
                              "id": "c",
                              "text": "curved"
                    },
                    {
                              "id": "d",
                              "text": "stationary"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Back/forth = oscillating."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Back/forth = oscillating.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**oscillating**",
          "commonErrors": [
                    "Confuses with straight."
          ]
},
        },
        {
          id: "sci2-u1-motion-patterns-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare fast and slow motion: a cheetah running vs a snail crawling. Describe the difference.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Motion patterns",
                              "statement": "Fast vs slow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes cheetah.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes snail.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Cheetah: very fast. Snail: very slow.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Same speed."
          ]
},
        },
        {
          id: "sci2-u1-motion-patterns-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Motion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Quick movement."
                    },
                    {
                              "id": "b",
                              "text": "Movement."
                    },
                    {
                              "id": "c",
                              "text": "Gentle movement."
                    },
                    {
                              "id": "d",
                              "text": "In a line."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Motion\" means Movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Motion\" means Movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Motion** = Movement.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u1-motion-patterns-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fast\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gentle movement."
                    },
                    {
                              "id": "b",
                              "text": "In a line."
                    },
                    {
                              "id": "c",
                              "text": "In a curve."
                    },
                    {
                              "id": "d",
                              "text": "Quick movement."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fast\" means Quick movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fast\" means Quick movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fast** = Quick movement.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u1-motion-patterns-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Slow\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "In a line."
                    },
                    {
                              "id": "b",
                              "text": "Gentle movement."
                    },
                    {
                              "id": "c",
                              "text": "In a curve."
                    },
                    {
                              "id": "d",
                              "text": "Reverse direction."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Slow\" means Gentle movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Slow\" means Gentle movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Slow** = Gentle movement.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
