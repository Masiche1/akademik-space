import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "s0-u1-lesson-1-3",
  code: "1-3",
  title: "Seasons",
  goal: "I CAN describe how seasons change weather and what we wear.",
  standards: ["K-ESS2-1", "K-ESS2-2"],
  vocabulary: [
    { term: "Season", definition: "A time of year with its own weather." },
    { term: "Spring", definition: "Flowers bloom, mild weather." },
    { term: "Summer", definition: "Hot, sunny, long days." },
    { term: "Fall", definition: "Leaves change color, cooler." },
    { term: "Winter", definition: "Cold, snow, short days." },
    { term: "Change", definition: "Something different happens." },
    { term: "Clothing", definition: "What we wear for the weather." },
  ],
  concepts: [
    {
      id: "s0-u1-seasons",
      title: "Seasons",
      skill: "Describe how the four seasons affect weather and clothing.",
      lesson: {
        sections: [
          {
            heading: "Four seasons",
            body: "There are four **seasons**: **spring** (flowers, mild), **summer** (hot, sunny), **fall** (leaves change, cooler), and **winter** (cold, snow). Each has different **weather**.",
          },
          {
            heading: "Dress for the season",
            body: "We wear different **clothing** for each season — shorts and t-shirts in summer, coats and boots in winter.",
          },
        ],
        keyFormulas: [
          { name: "Seasons", statement: "Spring, summer, fall, winter — each has its own weather and clothing." },
        ],
        workedExample: {
          problem: "What season is it if it's cold and snowing? What should you wear?",
          solution: "**Winter** — wear a coat, hat, gloves and boots.",
        },
      },
      questions: [
        {
          id: "s0-u1-seasons-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which season is the coldest?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "summer"
                    },
                    {
                              "id": "b",
                              "text": "winter"
                    },
                    {
                              "id": "c",
                              "text": "spring"
                    },
                    {
                              "id": "d",
                              "text": "fall"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Winter is the coldest season."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Winter is the coldest season.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**winter**",
          "commonErrors": [
                    "Picks wrong season."
          ]
},
        },
        {
          id: "s0-u1-seasons-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which season do leaves change color and fall?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "spring"
                    },
                    {
                              "id": "b",
                              "text": "summer"
                    },
                    {
                              "id": "c",
                              "text": "fall"
                    },
                    {
                              "id": "d",
                              "text": "winter"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Leaves change in fall/autumn."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Leaves change in fall/autumn.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**fall**",
          "commonErrors": [
                    "Picks wrong season."
          ]
},
        },
        {
          id: "s0-u1-seasons-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name the four seasons and describe the weather in each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Seasons",
                              "statement": "Name 4 seasons + weather."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names all 4 + describes weather.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Spring: mild; Summer: hot; Fall: cool; Winter: cold.'**",
          "commonErrors": [
                    "Missing seasons.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "s0-u1-seasons-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In summer, we usually wear...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "heavy coats"
                    },
                    {
                              "id": "b",
                              "text": "light clothing like shorts and t-shirts"
                    },
                    {
                              "id": "c",
                              "text": "boots only"
                    },
                    {
                              "id": "d",
                              "text": "scarves and gloves"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Summer = hot, so light clothing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Summer = hot, so light clothing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**light clothing**",
          "commonErrors": [
                    "Picks winter clothes."
          ]
},
        },
        {
          id: "s0-u1-seasons-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two seasons. How is the weather different? What different clothing do we wear?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Seasons",
                              "statement": "Two seasons + weather + clothing differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares two seasons.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Names clothing difference.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Summer is hot (shorts); Winter is cold (coats).'**",
          "commonErrors": [
                    "Only one season.",
                    "No clothing."
          ]
},
        },
        {
          id: "s0-u1-seasons-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Season\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Flowers bloom, mild weather."
                    },
                    {
                              "id": "b",
                              "text": "A time of year with its own weather."
                    },
                    {
                              "id": "c",
                              "text": "Hot, sunny, long days."
                    },
                    {
                              "id": "d",
                              "text": "Leaves change color, cooler."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Season\" means A time of year with its own weather."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Season\" means A time of year with its own weather.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Season** = A time of year with its own weather.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u1-seasons-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Spring\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hot, sunny, long days."
                    },
                    {
                              "id": "b",
                              "text": "Leaves change color, cooler."
                    },
                    {
                              "id": "c",
                              "text": "Cold, snow, short days."
                    },
                    {
                              "id": "d",
                              "text": "Flowers bloom, mild weather."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Spring\" means Flowers bloom, mild weather."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Spring\" means Flowers bloom, mild weather.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Spring** = Flowers bloom, mild weather.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u1-seasons-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Summer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Leaves change color, cooler."
                    },
                    {
                              "id": "b",
                              "text": "Hot, sunny, long days."
                    },
                    {
                              "id": "c",
                              "text": "Cold, snow, short days."
                    },
                    {
                              "id": "d",
                              "text": "Something different happens."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Summer\" means Hot, sunny, long days."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Summer\" means Hot, sunny, long days.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Summer** = Hot, sunny, long days.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
