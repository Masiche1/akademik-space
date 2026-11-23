import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "spk-u4-lesson-4-1",
  code: "4-1",
  title: "Sun, Moon and Stars",
  goal: "I CAN describe the sun, moon and stars.",
  standards: ["ELOF-PK.SCI.EARTH.1"],
  vocabulary: [
    { term: "Sun", definition: "The star that gives Earth light and heat." },
    { term: "Moon", definition: "Earth's natural satellite that orbits it." },
    { term: "Star", definition: "A ball of hot gas that makes its own light." },
    { term: "Sky", definition: "What we see above us." },
    { term: "Light", definition: "What lets us see." },
    { term: "Heat", definition: "What makes things warm." },
    { term: "Orbit", definition: "The path an object takes around another." },
  ],
  concepts: [
    {
      id: "spk-u4-sun-moon-stars",
      title: "Sun, moon and stars",
      skill: "Describe the sun, moon and stars and their roles.",
      lesson: {
        sections: [
          {
            heading: "The sun",
            body: "The **sun** is a **star** — a ball of hot gas that gives Earth **light** and **heat**. It is the center of our solar system.",
          },
          {
            heading: "Moon and stars",
            body: "The **moon** is Earth's natural **satellite** — it orbits Earth and reflects sunlight. **Stars** are distant suns that twinkle in the night sky.",
          },
        ],
        keyFormulas: [
          { name: "Sun", statement: "Star giving Earth light + heat." },
          { name: "Moon", statement: "Satellite orbiting Earth, reflects sunlight." },
          { name: "Star", statement: "Distant sun making its own light." },
        ],
        workedExample: {
          problem: "Why is the moon visible at night?",
          solution: "The moon **reflects sunlight** — it does not make its own light.",
        },
      },
      questions: [
        {
          id: "spk-u4-sun-moon-stars-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The sun is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a planet"
                    },
                    {
                              "id": "b",
                              "text": "a star that gives light and heat"
                    },
                    {
                              "id": "c",
                              "text": "a moon"
                    },
                    {
                              "id": "d",
                              "text": "a cloud"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "The sun is a star giving Earth light and heat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The sun is a star giving Earth light and heat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**A star**",
          "commonErrors": [
                    "Confuses sun with planet."
          ]
},
        },
        {
          id: "spk-u4-sun-moon-stars-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The moon is visible at night because it...",
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
                              "text": "glows like a fire"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "The moon reflects sunlight — it doesn't make its own light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The moon reflects sunlight — it doesn't make its own light.",
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
          id: "spk-u4-sun-moon-stars-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the difference between the sun and a star. How are they the same?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sun vs star",
                              "statement": "Sun is a star; stars are distant suns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains sun is a star.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sun is our closest star; other stars are farther away but also make light.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "Wrong info."
          ]
},
        },
        {
          id: "spk-u4-sun-moon-stars-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Stars are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "moons"
                    },
                    {
                              "id": "b",
                              "text": "distant suns that make their own light"
                    },
                    {
                              "id": "c",
                              "text": "planets"
                    },
                    {
                              "id": "d",
                              "text": "clouds"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Stars are distant suns making their own light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stars are distant suns making their own light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Distant suns**",
          "commonErrors": [
                    "Confuses stars with moons."
          ]
},
        },
        {
          id: "spk-u4-sun-moon-stars-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Look at the night sky. Find the moon and as many stars as you can. Describe what you see. Which is brightest?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Observe sky",
                              "statement": "Find moon + stars, describe."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Observes moon + stars.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Describes brightness.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Moon is bright white; stars are tiny dots twinkling; moon is brightest.'**",
          "commonErrors": [
                    "Cannot observe.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "spk-u4-sun-moon-stars-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sun\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Earth's natural satellite that orbits it."
                    },
                    {
                              "id": "b",
                              "text": "The star that gives Earth light and heat."
                    },
                    {
                              "id": "c",
                              "text": "A ball of hot gas that makes its own light."
                    },
                    {
                              "id": "d",
                              "text": "What we see above us."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sun\" means The star that gives Earth light and heat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sun\" means The star that gives Earth light and heat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sun** = The star that gives Earth light and heat.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u4-sun-moon-stars-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Moon\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A ball of hot gas that makes its own light."
                    },
                    {
                              "id": "b",
                              "text": "What we see above us."
                    },
                    {
                              "id": "c",
                              "text": "What lets us see."
                    },
                    {
                              "id": "d",
                              "text": "Earth's natural satellite that orbits it."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Moon\" means Earth's natural satellite that orbits it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Moon\" means Earth's natural satellite that orbits it.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Moon** = Earth's natural satellite that orbits it.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u4-sun-moon-stars-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Star\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we see above us."
                    },
                    {
                              "id": "b",
                              "text": "A ball of hot gas that makes its own light."
                    },
                    {
                              "id": "c",
                              "text": "What lets us see."
                    },
                    {
                              "id": "d",
                              "text": "What makes things warm."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Star\" means A ball of hot gas that makes its own light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Star\" means A ball of hot gas that makes its own light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Star** = A ball of hot gas that makes its own light.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
