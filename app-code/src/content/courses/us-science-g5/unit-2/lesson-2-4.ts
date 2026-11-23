import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "sci5-u2-lesson-2-4",
  code: "2-4",
  title: "Sound and Light Energy",
  goal: "I CAN describe how sound and light travel.",
  standards: ["PS4.A"],
  vocabulary: [
    { term: "Sound", definition: "Vibration energy." },
    { term: "Light", definition: "Visible energy." },
    { term: "Vibration", definition: "Rapid back-and-forth." },
    { term: "Wave", definition: "Moving disturbance." },
    { term: "Reflect", definition: "Bounce back." },
    { term: "Absorb", definition: "Take in." },
    { term: "Transparent", definition: "Light passes through." },
    { term: "Opaque", definition: "Light blocked." },
  ],
  concepts: [
    {
      id: "sci5-u2-sound-light-energy",
      title: "Sound and light energy",
      skill: "Describe how sound and light travel as waves.",
      lesson: {
        sections: [
          {
            heading: "Sound waves",
            body: "**Sound** is created by **vibrations** that travel as **waves** through air, water, or solids. Sound needs a **medium** to travel.",
          },
          {
            heading: "Light waves",
            body: "**Light** travels as **waves** that can **reflect** (bounce), **refract** (bend), or be **absorbed**. Some materials are **transparent** (light passes), some **opaque** (blocked).",
          },
        ],
        keyFormulas: [
          { name: "Sound/Light", statement: "Waves that vibrate/reflect = sound and light." },
        ],
        workedExample: {
          problem: "Why can't you hear sound in space?",
          solution: "**No air/vacuum — sound needs a medium to travel.**",
        },
      },
      questions: [
        {
          id: "sci5-u2-sound-light-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sound is created by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "light"
                    },
                    {
                              "id": "b",
                              "text": "vibrations"
                    },
                    {
                              "id": "c",
                              "text": "heat"
                    },
                    {
                              "id": "d",
                              "text": "electricity"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Vibrations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vibrations.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "vibrations",
          "commonErrors": [
                    "Wrong source."
          ]
},
        },
        {
          id: "sci5-u2-sound-light-energy-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sound needs...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "no medium"
                    },
                    {
                              "id": "b",
                              "text": "a medium to travel through"
                    },
                    {
                              "id": "c",
                              "text": "light"
                    },
                    {
                              "id": "d",
                              "text": "heat"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Medium to travel."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Medium to travel.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a medium to travel through",
          "commonErrors": [
                    "Thinks it travels in vacuum."
          ]
},
        },
        {
          id: "sci5-u2-sound-light-energy-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe how sound travels and why it can't travel in space.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sound",
                              "statement": "Vibration + medium."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes vibration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains medium need.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Sound = vibrations as waves; needs medium (air/water/solid); space = vacuum = no medium.**",
          "commonErrors": [
                    "Cannot explain.",
                    "Missing medium."
          ]
},
        },
        {
          id: "sci5-u2-sound-light-energy-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Transparent' materials...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "block light"
                    },
                    {
                              "id": "b",
                              "text": "let light pass through"
                    },
                    {
                              "id": "c",
                              "text": "absorb light"
                    },
                    {
                              "id": "d",
                              "text": "reflect light"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Light passes through."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Light passes through.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "let light pass through",
          "commonErrors": [
                    "Confuses with opaque."
          ]
},
        },
        {
          id: "sci5-u2-sound-light-energy-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare how sound and light travel. How are they similar/different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sound/Light",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Both waves; Sound needs medium, Light travels through vacuum; Sound = vibration, Light = electromagnetic.**",
          "commonErrors": [
                    "Cannot compare.",
                    "Missing differences."
          ]
},
        },
        {
          id: "sci5-u2-sound-light-energy-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sound\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Visible energy."
                    },
                    {
                              "id": "b",
                              "text": "Vibration energy."
                    },
                    {
                              "id": "c",
                              "text": "Rapid back-and-forth."
                    },
                    {
                              "id": "d",
                              "text": "Moving disturbance."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sound\" means Vibration energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sound\" means Vibration energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sound** = Vibration energy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u2-sound-light-energy-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Light\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rapid back-and-forth."
                    },
                    {
                              "id": "b",
                              "text": "Moving disturbance."
                    },
                    {
                              "id": "c",
                              "text": "Bounce back."
                    },
                    {
                              "id": "d",
                              "text": "Visible energy."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Light\" means Visible energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Light\" means Visible energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Light** = Visible energy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u2-sound-light-energy-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Vibration\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Moving disturbance."
                    },
                    {
                              "id": "b",
                              "text": "Rapid back-and-forth."
                    },
                    {
                              "id": "c",
                              "text": "Bounce back."
                    },
                    {
                              "id": "d",
                              "text": "Take in."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Vibration\" means Rapid back-and-forth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Vibration\" means Rapid back-and-forth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Vibration** = Rapid back-and-forth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
