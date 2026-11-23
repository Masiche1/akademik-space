import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "s1-u6-lesson-6-3",
  code: "6-3",
  title: "Stars and Constellations",
  goal: "I CAN identify stars and constellations.",
  standards: ["1-ESS1-1"],
  vocabulary: [
    { term: "Star", definition: "A distant sun giving light." },
    { term: "Constellation", definition: "Pattern of stars." },
    { term: "Pattern", definition: "Shape made by stars." },
    { term: "Sky", definition: "What we see at night." },
    { term: "Twinkle", definition: "Stars appear to flicker." },
    { term: "Brightness", definition: "How bright a star is." },
    { term: "Group", definition: "Stars together." },
    { term: "Sky watch", definition: "Looking at stars." },
  ],
  concepts: [
    {
      id: "s1-u6-stars-constellations",
      title: "Stars and constellations",
      skill: "Stars appear to twinkle; constellations are patterns of stars we recognize.",
      lesson: {
        sections: [
          {
            heading: "Stars in the sky",
            body: "**Stars** are distant suns giving **light**. They appear to **twinkle** and vary in **brightness**. At night we can see many stars.",
          },
          {
            heading: "Constellations",
            body: "A **constellation** is a **pattern** of stars that looks like a shape — like the Big Dipper or Orion. People **group** stars into patterns to help remember them.",
          },
        ],
        keyFormulas: [
          { name: "Stars", statement: "Twinkle + vary brightness; constellations = star patterns." },
        ],
        workedExample: {
          problem: "What is a constellation?",
          solution: "A **constellation** is a pattern of stars that looks like a familiar shape.",
        },
      },
      questions: [
        {
          id: "s1-u6-stars-constellations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'constellation' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a planet"
                    },
                    {
                              "id": "b",
                              "text": "a pattern of stars"
                    },
                    {
                              "id": "c",
                              "text": "a moon phase"
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
                              "statement": "Constellation = star pattern."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Constellation = star pattern.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**star pattern**",
          "commonErrors": [
                    "Picks planet/moon."
          ]
},
        },
        {
          id: "s1-u6-stars-constellations-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Stars appear to 'twinkle' because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they move fast"
                    },
                    {
                              "id": "b",
                              "text": "their light passes through Earth's atmosphere"
                    },
                    {
                              "id": "c",
                              "text": "they blink"
                    },
                    {
                              "id": "d",
                              "text": "they are close"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Atmosphere makes them twinkle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Atmosphere makes them twinkle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**atmosphere**",
          "commonErrors": [
                    "Picks blink/move."
          ]
},
        },
        {
          id: "s1-u6-stars-constellations-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Look at the night sky. Find a constellation. Describe its pattern.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Stars",
                              "statement": "Find + describe constellation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds constellation + describes pattern.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Big Dipper: 7 stars in a ladle shape.'**",
          "commonErrors": [
                    "Cannot find.",
                    "No description."
          ]
},
        },
        {
          id: "s1-u6-stars-constellations-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Stars are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "planets"
                    },
                    {
                              "id": "b",
                              "text": "distant suns giving light"
                    },
                    {
                              "id": "c",
                              "text": "moons"
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
                              "statement": "Stars = distant suns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stars = distant suns.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**distant suns**",
          "commonErrors": [
                    "Picks planet/moon."
          ]
},
        },
        {
          id: "s1-u6-stars-constellations-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Identify two constellations you can see. Draw or describe their star patterns.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Stars",
                              "statement": "2 constellations + patterns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies 2 constellations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes/draws patterns.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Big Dipper (ladle), Orion (hunter) — star patterns.'**",
          "commonErrors": [
                    "Fewer than 2.",
                    "No patterns."
          ]
},
        },
        {
          id: "s1-u6-stars-constellations-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Star\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pattern of stars."
                    },
                    {
                              "id": "b",
                              "text": "A distant sun giving light."
                    },
                    {
                              "id": "c",
                              "text": "Shape made by stars."
                    },
                    {
                              "id": "d",
                              "text": "What we see at night."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Star\" means A distant sun giving light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Star\" means A distant sun giving light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Star** = A distant sun giving light.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u6-stars-constellations-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Constellation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Shape made by stars."
                    },
                    {
                              "id": "b",
                              "text": "What we see at night."
                    },
                    {
                              "id": "c",
                              "text": "Stars appear to flicker."
                    },
                    {
                              "id": "d",
                              "text": "Pattern of stars."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Constellation\" means Pattern of stars."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Constellation\" means Pattern of stars.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Constellation** = Pattern of stars.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u6-stars-constellations-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pattern\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we see at night."
                    },
                    {
                              "id": "b",
                              "text": "Shape made by stars."
                    },
                    {
                              "id": "c",
                              "text": "Stars appear to flicker."
                    },
                    {
                              "id": "d",
                              "text": "How bright a star is."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pattern\" means Shape made by stars."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pattern\" means Shape made by stars.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pattern** = Shape made by stars.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
