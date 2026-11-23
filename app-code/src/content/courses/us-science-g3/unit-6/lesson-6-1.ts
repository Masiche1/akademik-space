import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "sci3-u6-lesson-6-1",
  code: "6-1",
  title: "Light Energy",
  goal: "I CAN describe light as energy that travels and lets us see.",
  standards: ["PS3.B", "PS4.A"],
  vocabulary: [
    { term: "Light", definition: "Energy we see." },
    { term: "Energy", definition: "Ability to do work." },
    { term: "Source", definition: "Where light comes from." },
    { term: "Sun", definition: "Main light source." },
    { term: "Reflect", definition: "Bounce back." },
    { term: "Absorb", definition: "Take in." },
    { term: "Travel", definition: "Move through." },
    { term: "See", definition: "Detect light." },
  ],
  concepts: [
    {
      id: "sci3-u6-light-energy",
      title: "Light energy",
      skill: "Describe light as energy that travels from sources and lets us see.",
      lesson: {
        sections: [
          {
            heading: "Light is energy",
            body: "**Light** is a form of **energy** that **travels** from a **source** (like the sun or a lamp) and lets us **see**.",
          },
          {
            heading: "Light and objects",
            body: "Objects either **reflect** light (bounce it back) or **absorb** it (take it in). We see objects because light bounces off them to our eyes.",
          },
        ],
        keyFormulas: [
          { name: "Light", statement: "Light travels from source -> reflects/absorbs by objects -> we see." },
        ],
        workedExample: {
          problem: "Why can we see a red apple?",
          solution: "Light hits the apple, **reflects** off it, and reaches our eyes — we see red.",
        },
      },
      questions: [
        {
          id: "sci3-u6-light-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Light is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a color"
                    },
                    {
                              "id": "b",
                              "text": "a form of energy that lets us see"
                    },
                    {
                              "id": "c",
                              "text": "a sound"
                    },
                    {
                              "id": "d",
                              "text": "a smell"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Light = energy for seeing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Light = energy for seeing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a form of energy that lets us see",
          "commonErrors": [
                    "Thinks light is a color."
          ]
},
        },
        {
          id: "sci3-u6-light-energy-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The main source of natural light is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the moon"
                    },
                    {
                              "id": "b",
                              "text": "the sun"
                    },
                    {
                              "id": "c",
                              "text": "a lamp"
                    },
                    {
                              "id": "d",
                              "text": "a fire"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sun = main light source."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sun = main light source.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "the sun",
          "commonErrors": [
                    "Thinks moon is main source."
          ]
},
        },
        {
          id: "sci3-u6-light-energy-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain how we see objects. Use 'light' and 'reflect' in your answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Light",
                              "statement": "Light reflects off objects to eyes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains light + reflection.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Light hits the object, reflects off it, and reaches our eyes so we see it.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "No reflection."
          ]
},
        },
        {
          id: "sci3-u6-light-energy-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Reflect' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "absorb"
                    },
                    {
                              "id": "b",
                              "text": "bounce back"
                    },
                    {
                              "id": "c",
                              "text": "travel through"
                    },
                    {
                              "id": "d",
                              "text": "disappear"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Reflect = bounce back."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reflect = bounce back.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "bounce back",
          "commonErrors": [
                    "Thinks reflect means absorb."
          ]
},
        },
        {
          id: "sci3-u6-light-energy-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why can't we see in complete darkness? Explain using light.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Light",
                              "statement": "No light = can't see."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains no light = no seeing.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'We see by light reflecting off objects; no light = nothing to reflect = can't see.'**",
          "commonErrors": [
                    "Says we can see anyway.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "sci3-u6-light-energy-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Light\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ability to do work."
                    },
                    {
                              "id": "b",
                              "text": "Energy we see."
                    },
                    {
                              "id": "c",
                              "text": "Where light comes from."
                    },
                    {
                              "id": "d",
                              "text": "Main light source."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Light\" means Energy we see."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Light\" means Energy we see.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Light** = Energy we see.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u6-light-energy-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Energy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where light comes from."
                    },
                    {
                              "id": "b",
                              "text": "Main light source."
                    },
                    {
                              "id": "c",
                              "text": "Bounce back."
                    },
                    {
                              "id": "d",
                              "text": "Ability to do work."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Energy\" means Ability to do work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Energy\" means Ability to do work.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Energy** = Ability to do work.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u6-light-energy-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Source\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Main light source."
                    },
                    {
                              "id": "b",
                              "text": "Where light comes from."
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
                              "statement": "\"Source\" means Where light comes from."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Source\" means Where light comes from.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Source** = Where light comes from.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
