import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "spk-u4-lesson-4-3",
  code: "4-3",
  title: "Observing the Sky",
  goal: "I CAN observe and describe the sky during the day and night.",
  standards: ["ELOF-PK.SCI.EARTH.3"],
  vocabulary: [
    { term: "Sky", definition: "The space above us we can see." },
    { term: "Cloud", definition: "White or gray masses in the sky made of water drops." },
    { term: "Blue", definition: "The color of a clear daytime sky." },
    { term: "Star", definition: "A point of light in the night sky." },
    { term: "Observe", definition: "Watch and notice." },
    { term: "Describe", definition: "Say what you see." },
  ],
  concepts: [
    {
      id: "spk-u4-sky-observe",
      title: "Observing the sky",
      skill: "Observe and describe the sky during day and night.",
      lesson: {
        sections: [
          {
            heading: "Daytime sky",
            body: "During the day, the sky is usually **blue** with **white clouds** and the **sun**. Sometimes it is **gray** or **cloudy** before rain.",
          },
          {
            heading: "Nighttime sky",
            body: "At night, the sky is **dark** with **stars** twinkling and the **moon** glowing. Sometimes you can see planets too.",
          },
        ],
        keyFormulas: [
          { name: "Day sky", statement: "Blue + sun + white clouds." },
          { name: "Night sky", statement: "Dark + stars + moon." },
        ],
        workedExample: {
          problem: "What do you see in the night sky?",
          solution: "A **dark** sky with **stars** twinkling and the **moon** glowing.",
        },
      },
      questions: [
        {
          id: "spk-u4-sky-observe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A clear daytime sky is usually...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "dark"
                    },
                    {
                              "id": "b",
                              "text": "blue"
                    },
                    {
                              "id": "c",
                              "text": "black"
                    },
                    {
                              "id": "d",
                              "text": "green"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Clear daytime sky is blue."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clear daytime sky is blue.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**blue**",
          "commonErrors": [
                    "Picks night sky color."
          ]
},
        },
        {
          id: "spk-u4-sky-observe-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What do you see in the night sky?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the sun"
                    },
                    {
                              "id": "b",
                              "text": "stars and the moon"
                    },
                    {
                              "id": "c",
                              "text": "blue sky"
                    },
                    {
                              "id": "d",
                              "text": "clouds only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Night sky = stars + moon on dark background."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Night sky = stars + moon on dark background.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**stars + moon**",
          "commonErrors": [
                    "Lists daytime features."
          ]
},
        },
        {
          id: "spk-u4-sky-observe-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the sky right now — is it day or night? What do you see?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Observe sky",
                              "statement": "Describe day or night sky."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes sky correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Day — blue sky with white clouds and sun.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Wrong sky type."
          ]
},
        },
        {
          id: "spk-u4-sky-observe-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Clouds are made of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "smoke"
                    },
                    {
                              "id": "b",
                              "text": "tiny water drops"
                    },
                    {
                              "id": "c",
                              "text": "dust only"
                    },
                    {
                              "id": "d",
                              "text": "cotton"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Clouds are made of tiny water drops."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clouds are made of tiny water drops.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tiny water drops**",
          "commonErrors": [
                    "Thinks clouds are smoke."
          ]
},
        },
        {
          id: "spk-u4-sky-observe-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Sketch the daytime sky and the nighttime sky. Label what you see in each (sun, clouds, stars, moon).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sky observation",
                              "statement": "Draw day + night sky."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Draws both skies.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Labels features correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Day: blue+sun+clouds; Night: dark+stars+moon'**",
          "commonErrors": [
                    "Missing one sky.",
                    "Wrong labels."
          ]
},
        },
        {
          id: "spk-u4-sky-observe-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sky\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "White or gray masses in the sky made of water drops."
                    },
                    {
                              "id": "b",
                              "text": "The space above us we can see."
                    },
                    {
                              "id": "c",
                              "text": "The color of a clear daytime sky."
                    },
                    {
                              "id": "d",
                              "text": "A point of light in the night sky."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sky\" means The space above us we can see."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sky\" means The space above us we can see.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sky** = The space above us we can see.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u4-sky-observe-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cloud\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The color of a clear daytime sky."
                    },
                    {
                              "id": "b",
                              "text": "A point of light in the night sky."
                    },
                    {
                              "id": "c",
                              "text": "Watch and notice."
                    },
                    {
                              "id": "d",
                              "text": "White or gray masses in the sky made of water drops."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cloud\" means White or gray masses in the sky made of water drops."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cloud\" means White or gray masses in the sky made of water drops.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cloud** = White or gray masses in the sky made of water drops.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u4-sky-observe-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Blue\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A point of light in the night sky."
                    },
                    {
                              "id": "b",
                              "text": "The color of a clear daytime sky."
                    },
                    {
                              "id": "c",
                              "text": "Watch and notice."
                    },
                    {
                              "id": "d",
                              "text": "Say what you see."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Blue\" means The color of a clear daytime sky."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Blue\" means The color of a clear daytime sky.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Blue** = The color of a clear daytime sky.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
