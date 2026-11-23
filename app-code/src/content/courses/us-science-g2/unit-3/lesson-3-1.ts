import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "sci2-u3-lesson-3-1",
  code: "3-1",
  title: "How Light Travels",
  goal: "I CAN describe how light travels in straight lines.",
  standards: ["NGSS 2-PS4-1"],
  vocabulary: [
    { term: "Light", definition: "What lets us see." },
    { term: "Source", definition: "Where light comes from." },
    { term: "Travel", definition: "Move through space." },
    { term: "Straight", definition: "In a line." },
    { term: "Ray", definition: "Path of light." },
    { term: "Block", definition: "Stop light from passing." },
    { term: "Dark", definition: "No light." },
    { term: "Bright", definition: "Lots of light." },
    { term: "Reflect", definition: "Bounce off surface." },
    { term: "Absorb", definition: "Take in light." },
  ],
  concepts: [
    {
      id: "sci2-u3-light-travel",
      title: "How light travels",
      skill: "Describe how light travels in straight lines and can be blocked.",
      lesson: {
        sections: [
          {
            heading: "Light travels straight",
            body: "**Light** travels in **straight** lines from a **source** (like the sun or a lamp). It can be **blocked** by objects, creating **shadows**.",
          },
          {
            heading: "Sources of light",
            body: "Some things make their own light (**sources**): sun, lamp, fire. Other things only **reflect** light: moon, mirror, most objects.",
          },
        ],
        keyFormulas: [
          { name: "Light", statement: "Travels straight from source; can be blocked = shadows." },
        ],
        workedExample: {
          problem: "Why does your shadow appear on the wall?",
          solution: "Light travels straight; your body **blocks** it, creating a **shadow**.",
        },
      },
      questions: [
        {
          id: "sci2-u3-light-travel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Light travels in...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "circles"
                    },
                    {
                              "id": "b",
                              "text": "straight lines"
                    },
                    {
                              "id": "c",
                              "text": "zigzags"
                    },
                    {
                              "id": "d",
                              "text": "random paths"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Light travels straight."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Light travels straight.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**straight lines**",
          "commonErrors": [
                    "Thinks light curves."
          ]
},
        },
        {
          id: "sci2-u3-light-travel-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The sun is a...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "reflector"
                    },
                    {
                              "id": "b",
                              "text": "source of light"
                    },
                    {
                              "id": "c",
                              "text": "absorber"
                    },
                    {
                              "id": "d",
                              "text": "blocker"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sun makes its own light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sun makes its own light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**source**",
          "commonErrors": [
                    "Confuses with reflector."
          ]
},
        },
        {
          id: "sci2-u3-light-travel-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name two sources of light and two objects that only reflect light.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Light source",
                              "statement": "Source=makes light, reflector=only bounces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives 2 sources + 2 reflectors.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sources: sun, lamp. Reflectors: moon, mirror.'**",
          "commonErrors": [
                    "Wrong types.",
                    "Cannot name."
          ]
},
        },
        {
          id: "sci2-u3-light-travel-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'shadow' is created when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "light bends"
                    },
                    {
                              "id": "b",
                              "text": "an object blocks light"
                    },
                    {
                              "id": "c",
                              "text": "light stops"
                    },
                    {
                              "id": "d",
                              "text": "sound is loud"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Shadow = blocked light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shadow = blocked light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**blocks light**",
          "commonErrors": [
                    "Thinks shadow is light."
          ]
},
        },
        {
          id: "sci2-u3-light-travel-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find a shadow and describe what causes it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Light/shadow",
                              "statement": "Object blocks light = shadow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds shadow.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Explains cause.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'My shadow on the ground; my body blocks sunlight.'**",
          "commonErrors": [
                    "Cannot find.",
                    "No explanation."
          ]
},
        },
        {
          id: "sci2-u3-light-travel-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Light\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where light comes from."
                    },
                    {
                              "id": "b",
                              "text": "What lets us see."
                    },
                    {
                              "id": "c",
                              "text": "Move through space."
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
                              "statement": "\"Light\" means What lets us see."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Light\" means What lets us see.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Light** = What lets us see.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u3-light-travel-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Source\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move through space."
                    },
                    {
                              "id": "b",
                              "text": "In a line."
                    },
                    {
                              "id": "c",
                              "text": "Path of light."
                    },
                    {
                              "id": "d",
                              "text": "Where light comes from."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "sci2-u3-light-travel-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Travel\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "In a line."
                    },
                    {
                              "id": "b",
                              "text": "Move through space."
                    },
                    {
                              "id": "c",
                              "text": "Path of light."
                    },
                    {
                              "id": "d",
                              "text": "Stop light from passing."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Travel\" means Move through space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Travel\" means Move through space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Travel** = Move through space.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
