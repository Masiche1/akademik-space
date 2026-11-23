import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "s1-u6-lesson-6-1",
  code: "6-1",
  title: "Observing the Sun",
  goal: "I CAN observe the sun's daily pattern safely.",
  standards: ["1-ESS1-1"],
  vocabulary: [
    { term: "Sun", definition: "Star that gives Earth light and heat." },
    { term: "Light", definition: "What we see by." },
    { term: "Warmth", definition: "Heat from sun." },
    { term: "Rise", definition: "Come up in morning." },
    { term: "Set", definition: "Go down in evening." },
    { term: "Shadows", definition: "Dark shapes made by blocked light." },
    { term: "Safe", definition: "Don't look directly." },
    { term: "Sky", definition: "What we see above." },
  ],
  concepts: [
    {
      id: "s1-u6-sun-observe",
      title: "Observing the sun",
      skill: "The sun rises and sets each day; we observe it safely without looking directly.",
      lesson: {
        sections: [
          {
            heading: "Sun's daily path",
            body: "The **sun** gives Earth **light** and **warmth**. It **rises** in the morning and **sets** in the evening. We observe it **safely** — never look directly at it.",
          },
          {
            heading: "Shadows",
            body: "The sun makes **shadows** — dark shapes where light is blocked. Shadows change length as the sun moves.",
          },
        ],
        keyFormulas: [
          { name: "Sun", statement: "Rises morning, sets evening; makes light, warmth, shadows." },
        ],
        workedExample: {
          problem: "Why shouldn't you look directly at the sun?",
          solution: "The sun's light is too strong — it can hurt your eyes. Observe safely.",
        },
      },
      questions: [
        {
          id: "s1-u6-sun-observe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The sun gives Earth...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only light"
                    },
                    {
                              "id": "b",
                              "text": "light and warmth"
                    },
                    {
                              "id": "c",
                              "text": "only warmth"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sun gives light + warmth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sun gives light + warmth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**light and warmth**",
          "commonErrors": [
                    "Picks only one."
          ]
},
        },
        {
          id: "s1-u6-sun-observe-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "We should observe the sun...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "by looking directly"
                    },
                    {
                              "id": "b",
                              "text": "safely, never looking directly"
                    },
                    {
                              "id": "c",
                              "text": "with binoculars at noon"
                    },
                    {
                              "id": "d",
                              "text": "through sunglasses only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Never look directly — it's dangerous."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Never look directly — it's dangerous.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**safely**",
          "commonErrors": [
                    "Picks unsafe method."
          ]
},
        },
        {
          id: "s1-u6-sun-observe-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Observe the sun's position at morning, noon and evening. Describe how it changes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sun",
                              "statement": "Position changes through day."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes morning/noon/evening positions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Morning: low in east. Noon: high. Evening: low in west.'**",
          "commonErrors": [
                    "Cannot observe.",
                    "Same position all day."
          ]
},
        },
        {
          id: "s1-u6-sun-observe-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'shadow' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a reflection"
                    },
                    {
                              "id": "b",
                              "text": "a dark shape where light is blocked"
                    },
                    {
                              "id": "c",
                              "text": "a picture"
                    },
                    {
                              "id": "d",
                              "text": "a color"
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
          "finalAnswer": "**blocked light**",
          "commonErrors": [
                    "Confuses with reflection."
          ]
},
        },
        {
          id: "s1-u6-sun-observe-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Track shadows outside for a day. Describe how shadow length changes and why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sun",
                              "statement": "Shadow changes + sun position."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tracks shadow lengths.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains sun position link.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Shadow longest morning/evening, shortest noon — sun position changes.'**",
          "commonErrors": [
                    "No tracking.",
                    "No explanation."
          ]
},
        },
        {
          id: "s1-u6-sun-observe-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sun\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we see by."
                    },
                    {
                              "id": "b",
                              "text": "Star that gives Earth light and heat."
                    },
                    {
                              "id": "c",
                              "text": "Heat from sun."
                    },
                    {
                              "id": "d",
                              "text": "Come up in morning."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sun\" means Star that gives Earth light and heat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sun\" means Star that gives Earth light and heat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sun** = Star that gives Earth light and heat.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u6-sun-observe-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Light\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Heat from sun."
                    },
                    {
                              "id": "b",
                              "text": "Come up in morning."
                    },
                    {
                              "id": "c",
                              "text": "Go down in evening."
                    },
                    {
                              "id": "d",
                              "text": "What we see by."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Light\" means What we see by."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Light\" means What we see by.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Light** = What we see by.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u6-sun-observe-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Warmth\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Come up in morning."
                    },
                    {
                              "id": "b",
                              "text": "Heat from sun."
                    },
                    {
                              "id": "c",
                              "text": "Go down in evening."
                    },
                    {
                              "id": "d",
                              "text": "Dark shapes made by blocked light."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Warmth\" means Heat from sun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Warmth\" means Heat from sun.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Warmth** = Heat from sun.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
