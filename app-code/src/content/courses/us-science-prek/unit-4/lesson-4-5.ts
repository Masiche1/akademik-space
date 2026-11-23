import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "spk-u4-lesson-4-5",
  code: "4-5",
  title: "Earth and Sky Review",
  goal: "I CAN describe the sun, moon, stars, day/night and moon phases.",
  standards: ["ELOF-PK.SCI.EARTH.5"],
  vocabulary: [
    { term: "Sun", definition: "Star giving light and heat." },
    { term: "Moon", definition: "Satellite reflecting sunlight." },
    { term: "Star", definition: "Distant sun." },
    { term: "Day", definition: "Facing sun." },
    { term: "Night", definition: "Facing away from sun." },
    { term: "Phase", definition: "Moon's apparent shape." },
    { term: "Rotate", definition: "Earth spins on axis." },
  ],
  concepts: [
    {
      id: "spk-u4-earth-sky-review",
      title: "Earth and sky review",
      skill: "Combine sun/moon/stars, day/night cycle and moon phases.",
      lesson: {
        sections: [
          {
            heading: "All about Earth and sky",
            body: "The **sun** is our star; the **moon** orbits Earth reflecting sunlight; **stars** are distant suns. Earth **rotates** causing **day/night**. The moon's **phases** change over ~29 days.",
          },
          {
            heading: "Connect it",
            body: "Day happens when your side faces the sun; night when it faces away. The moon's phases happen because we see different amounts of its sunlit side as it orbits Earth.",
          },
        ],
        keyFormulas: [
          { name: "Review", statement: "Sun + moon + stars + rotation + phases = understanding Earth's place in space." },
        ],
        workedExample: {
          problem: "Explain day, night and a full moon in one sentence each.",
          solution: "Day = facing sun; Night = facing away; Full moon = entire sunlit face visible.",
        },
      },
      questions: [
        {
          id: "spk-u4-earth-sky-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Earth's rotation causes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "seasons"
                    },
                    {
                              "id": "b",
                              "text": "day and night"
                    },
                    {
                              "id": "c",
                              "text": "moon phases"
                    },
                    {
                              "id": "d",
                              "text": "eclipses"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Earth's rotation (spinning) causes day and night."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Earth's rotation (spinning) causes day and night.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**day and night**",
          "commonErrors": [
                    "Confuses rotation with revolution."
          ]
},
        },
        {
          id: "spk-u4-earth-sky-review-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The moon is visible because it...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "makes its own light"
                    },
                    {
                              "id": "b",
                              "text": "reflects sunlight"
                    },
                    {
                              "id": "c",
                              "text": "is a star"
                    },
                    {
                              "id": "d",
                              "text": "glows"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Moon reflects sunlight."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Moon reflects sunlight.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Reflects sunlight**",
          "commonErrors": [
                    "Thinks moon makes light."
          ]
},
        },
        {
          id: "spk-u4-earth-sky-review-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain: (1) why we have day and night, (2) why the moon has phases.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Earth and sky",
                              "statement": "Rotation = day/night; orbit = phases."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains day/night.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains moon phases.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Day/night: Earth spins. Phases: we see different amounts of moon's lit side.'**",
          "commonErrors": [
                    "Only explains one.",
                    "Wrong reasons."
          ]
},
        },
        {
          id: "spk-u4-earth-sky-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'new moon' is when the moon is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fully lit"
                    },
                    {
                              "id": "b",
                              "text": "dark and hard to see"
                    },
                    {
                              "id": "c",
                              "text": "half lit"
                    },
                    {
                              "id": "d",
                              "text": "red"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "New moon = dark, hard to see."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "New moon = dark, hard to see.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Dark, hard to see**",
          "commonErrors": [
                    "Confuses with full moon."
          ]
},
        },
        {
          id: "spk-u4-earth-sky-review-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Create a mini 'Earth and sky' poster: draw sun, moon, stars, show day side vs night side of Earth, and show one moon phase. Label everything.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Earth and sky",
                              "statement": "Draw + label all concepts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Includes all elements.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Labels correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sun, moon orbiting, stars, day side facing sun, night side dark, crescent moon.'**",
          "commonErrors": [
                    "Missing elements.",
                    "Wrong labels."
          ]
},
        },
        {
          id: "spk-u4-earth-sky-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sun\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Satellite reflecting sunlight."
                    },
                    {
                              "id": "b",
                              "text": "Star giving light and heat."
                    },
                    {
                              "id": "c",
                              "text": "Distant sun."
                    },
                    {
                              "id": "d",
                              "text": "Facing sun."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sun\" means Star giving light and heat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sun\" means Star giving light and heat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sun** = Star giving light and heat.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u4-earth-sky-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Moon\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Distant sun."
                    },
                    {
                              "id": "b",
                              "text": "Facing sun."
                    },
                    {
                              "id": "c",
                              "text": "Facing away from sun."
                    },
                    {
                              "id": "d",
                              "text": "Satellite reflecting sunlight."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Moon\" means Satellite reflecting sunlight."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Moon\" means Satellite reflecting sunlight.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Moon** = Satellite reflecting sunlight.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u4-earth-sky-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Star\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Facing sun."
                    },
                    {
                              "id": "b",
                              "text": "Distant sun."
                    },
                    {
                              "id": "c",
                              "text": "Facing away from sun."
                    },
                    {
                              "id": "d",
                              "text": "Moon's apparent shape."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Star\" means Distant sun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Star\" means Distant sun.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Star** = Distant sun.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
